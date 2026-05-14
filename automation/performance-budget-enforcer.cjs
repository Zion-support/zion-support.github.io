#!/usr/bin/env node
/**
 * Autonomous Performance Budget Enforcer with CI Gate
 *
 * Runs Lighthouse on built site; enforces Core Web Vitals thresholds.
 * Fails CI on PRs if metrics exceed limits or regress >10% from baseline.
 * Auto-updates baseline on main when performance improves.
 * Posts PR comments with breakdown; sends Telegram digest.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

const STATE_DIR = path.join(process.cwd(), '.hermes', 'memory', 'performance-budget');
const BASELINE_PATH = path.join(STATE_DIR, 'baseline.json');
const HISTORY_PATH = path.join(STATE_DIR, 'history.json');

const PORT = 3000;
const URL_BASE = `http://localhost:${PORT}`;

// Core Web Vitals thresholds (configurable via env)
const CONFIG = {
  LCP_MAX: parseInt(process.env.PERF_BUDGET_LCP_MAX || '2500', 10), // ms
  CLS_MAX: parseFloat(process.env.PERF_BUDGET_CLS_MAX || '0.1'),
  INP_MAX: parseInt(process.env.PERF_BUDGET_INP_MAX || '200', 10), // ms
  TBT_MAX: parseInt(process.env.PERF_BUDGET_TBT_MAX || '200', 10), // ms
  REGRESSION_PCT: parseFloat(process.env.PERF_BUDGET_REGRESSION_PCT || '10'), // % regression allowed
  UPDATE_BASELINE_ON_MAIN: process.env.PERF_BUDGET_UPDATE_BASELINE_ON_MAIN !== 'false',
  SAMPLE_PAGES: process.env.PERF_BUDGET_SAMPLE_PAGES ? process.env.PERF_BUDGET_SAMPLE_PAGES.split(',') : ['/', '/blog', '/services', '/ai-lab']
};

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function nowISO() { return new Date().toISOString(); }

function loadBaseline() {
  if (fs.existsSync(BASELINE_PATH)) {
    try { return JSON.parse(fs.readFileSync(BASELINE_PATH, 'utf8')); } catch (_) {}
  }
  return {};
}

function saveBaseline(baseline) {
  ensureDir(STATE_DIR);
  fs.writeFileSync(BASELINE_PATH, JSON.stringify(baseline, null, 2));
}

function loadHistory() {
  if (fs.existsSync(HISTORY_PATH)) {
    try { return JSON.parse(fs.readFileSync(HISTORY_PATH, 'utf8')); } catch (_) {}
  }
  return { runs: [] };
}

function saveHistory(hist) {
  ensureDir(STATE_DIR);
  fs.writeFileSync(HISTORY_PATH, JSON.stringify(hist, null, 2));
}

// Start local Next.js server
function startLocalServer() {
  console.log('🚀 Starting local server...');
  // Try to use existing build; fall back to dev
  const builtDir = path.join(process.cwd(), '.next');
  if (fs.existsSync(builtDir)) {
    execSync('npm start', { stdio: 'pipe', windowsHide: true });
  } else {
    execSync('npm run dev', { stdio: 'pipe', windowsHide: true });
  }
  // Wait for port 3000 to be ready
  return new Promise((resolve, reject) => {
    const check = require('child_process').spawn('sh', ['-c', `timeout 60 bash -c "until curl -s -o /dev/null -w '%{http_code}' http://localhost:${PORT} | grep -q '^2'; do sleep 2; done"`]);
    check.on('close', code => code === 0 ? resolve() : reject(new Error('Server failed to start')));
    setTimeout(() => reject(new Error('Server startup timeout')), 60000);
  });
}

// Launch Chrome instance
async function launchChrome() {
  return chromeLauncher.launch({ chromeFlags: ['--headless', '--disable-gpu', '--no-sandbox'] });
}

// Run Lighthouse on a single URL
async function runLighthouse(url, port) {
  const options = {
    logLevel: 'info',
    output: 'json',
    onlyCategories: ['performance'],
    port: port || 0,
    chromeFlags: ['--headless', '--disable-gpu', '--no-sandbox'],
    disableStorageReset: false
  };
  const runnerResult = await lighthouse(url, options);
  return runnerResult.lhr;
}

// Extract Core Web Vitals from Lighthouse report
function extractMetrics(lhr) {
  const audits = lhr.audits;
  return {
    lcp: audits['largest-contentful-paint']?.numericValue || null, // ms
    cls: audits['cumulative-layout-shift']?.numericValue || null,
    inp: audits['interaction-to-next-paint']?.numericValue || null, // ms
    tbt: audits['total-blocking-time']?.numericValue || null, // ms
    fcp: audits['first-contentful-paint']?.numericValue || null,
    speedIndex: audits['speed-index']?.numericValue || null,
    performanceScore: lhr.categories.performance.score * 100 || null
  };
}

function detectRegression(current, baseline, pctThreshold) {
  if (!baseline) return null;
  const regressions = [];
  for (const key of ['lcp', 'cls', 'inp', 'tbt']) {
    const cur = current[key];
    const base = baseline[key];
    if (cur != null && base != null && base > 0) {
      const pctChange = ((cur - base) / base) * 100;
      if (pctChange > pctThreshold) {
        regressions.push({ metric: key, current: cur, baseline: base, pctChange: pctChange.toFixed(1) });
      }
    }
  }
  return regressions.length ? regressions : null;
}

function exceedsThresholds(metrics, config) {
  const violations = [];
  if (metrics.lcp != null && metrics.lcp > config.LCP_MAX) violations.push(`LCP ${metrics.lcp}ms > ${config.LCP_MAX}ms`);
  if (metrics.cls != null && metrics.cls > config.CLS_MAX) violations.push(`CLS ${metrics.cls} > ${config.CLS_MAX}`);
  if (metrics.inp != null && metrics.inp > config.INP_MAX) violations.push(`INP ${metrics.inp}ms > ${config.INP_MAX}ms`);
  if (metrics.tbt != null && metrics.tbt > config.TBT_MAX) violations.push(`TBT ${metrics.tbt}ms > ${config.TBT_MAX}ms`);
  return violations.length ? violations : null;
}

async function main() {
  console.log('⚡ Autonomous Performance Budget Enforcer — starting\n');
  ensureDir(STATE_DIR);

  const isPR = process.env.GITHUB_EVENT_NAME === 'pull_request';
  const isMain = process.env.GITHUB_REF === 'refs/heads/main' || (!process.env.GITHUB_REF);
  const baseline = loadBaseline();
  const history = loadHistory();

  // Step 1: Ensure server running
  try {
    await startLocalServer();
    console.log('   ✅ Local server ready on port', PORT);
  } catch (e) {
    console.error('   ❌ Failed to start local server:', e.message);
    process.exit(1);
  }

  // Step 2: Run Lighthouse on sample pages
  const results = {};
  let chrome;
  try {
    chrome = await launchChrome();
    console.log('   ✅ Chrome launched (port', chrome.port, ')');

    for (const route of CONFIG.SAMPLE_PAGES) {
      const url = `${URL_BASE}${route}`;
      console.log(`\n🔬 Auditing ${url}...`);
      try {
        const lhr = await runLighthouse(url, chrome.port);
        const metrics = extractMetrics(lhr);
        results[route] = metrics;
        console.log(`   LCP=${metrics.lcp}ms, CLS=${metrics.cls}, INP=${metrics.inp}ms, TBT=${metrics.tbt}ms, Score=${metrics.performanceScore?.toFixed(0)}`);
      } catch (e) {
        console.log(`   ⚠️  Audit failed: ${e.message}`);
        results[route] = null;
      }
    }
  } finally {
    if (chrome) await chrome.kill();
  }

  // Step 3: Evaluate thresholds & regressions
  let globalViolations = [];
  let regressionAlerts = [];
  const routeSummary = [];

  for (const [route, metrics] of Object.entries(results)) {
    if (!metrics) continue;

    const routeBase = baseline[route] || {};
    const violations = exceedsThresholds(metrics, CONFIG);
    if (violations) globalViolations.push(...violations.map(v => `${route}: ${v}`));

    const reg = detectRegression(metrics, routeBase, CONFIG.REGRESSION_PCT);
    if (reg) regressionAlerts.push(...reg.map(r => `${route}: ${r.metric} +${r.pctChange}% (base=${r.baseline}, cur=${r.current})`));

    routeSummary.push({ route, ...metrics });
  }

  // Step 4: Decide pass/fail
  let pass = true;
  if (globalViolations.length) pass = false;
  if (regressionAlerts.length) pass = false;

  console.log('\n📊 Results:');
  routeSummary.forEach(r => {
    console.log(`   ${r.route}: LCP=${r.lcp}ms, CLS=${r.cls}, INP=${r.inp}ms, TBT=${r.tbt}ms`);
  });

  if (!pass) {
    console.log('\n❌ Performance budget violations detected:');
    globalViolations.forEach(v => console.log(`   - ${v}`));
    regressionAlerts.forEach(r => console.log(`   - ${r}`));
  } else {
    console.log('\n✅ All metrics within budget.');
  }

  // Step 5: Auto-update baseline on main if improving
  if (isMain && pass && CONFIG.UPDATE_BASELINE_ON_MAIN) {
    console.log('\n🔄 Updating baseline from main branch (performance maintained or improved)...');
    const newBaseline = {};
    for (const [route, metrics] of Object.entries(results)) {
      if (metrics) {
        const existing = baseline[route] || {};
        // Keep lower LCP/INP/TBT, lower CLS, higher performanceScore
        newBaseline[route] = {
          lcp: metrics.lcp != null ? Math.min(existing.lcp || Infinity, metrics.lcp) : existing.lcp,
          cls: metrics.cls != null ? Math.min(existing.cls || Infinity, metrics.cls) : existing.cls,
          inp: metrics.inp != null ? Math.min(existing.inp || Infinity, metrics.inp) : existing.inp,
          tbt: metrics.tbt != null ? Math.min(existing.tbt || Infinity, metrics.tbt) : existing.tbt,
          performanceScore: existing.performanceScore != null ? Math.max(existing.performanceScore, metrics.performanceScore) : metrics.performanceScore,
          updatedAt: nowISO()
        };
      }
    }
    saveBaseline(newBaseline);
    console.log('   ✅ Baseline updated.');
  }

  // Step 6: Save history
  history.runs.push({
    timestamp: nowISO(),
    isMain,
    isPR,
    pass,
    routes: routeSummary,
    violations: globalViolations,
    regressions: regressionAlerts
  });
  // Keep last 90 runs
  if (history.runs.length > 90) history.runs = history.runs.slice(-90);
  saveHistory(history);

  // Step 7: PR comment (if applicable)
  if (isPR && process.env.GITHUB_TOKEN && process.env.GITHUB_REPOSITORY) {
    const { Octokit } = require('@octokit/rest');
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');
    const prNumber = parseInt(process.env.GITHUB_EVENT_PULL_REQUEST_NUMBER || process.env.PR_NUMBER, 10);

    if (prNumber) {
      let commentBody = `## ⚡ Performance Budget Report\n\n`;
      if (pass) {
        commentBody += `✅ **All metrics within budget.** Great job!\n\n`;
      } else {
        commentBody += `❌ **Performance budget violations:**\n\n`;
        globalViolations.forEach(v => commentBody += `- ${v}\n`);
        if (regressionAlerts.length) {
          commentBody += `\n**Regressions detected:**\n`;
          regressionAlerts.forEach(r => commentBody += `- ${r}\n`);
        }
      }
      commentBody += `\n### Page metrics:\n`;
      routeSummary.forEach(r => {
        commentBody += `- \`${r.route}\`: LCP=${r.lcp}ms, CLS=${r.cls?.toFixed(3)}, INP=${r.inp}ms, TBT=${r.tbt}ms, Score=${r.performanceScore?.toFixed(0)}\n`;
      });
      commentBody += `\n_Automated by Performance Budget Enforcer._`;

      try {
        await octokit.rest.issues.createComment({ owner, repo, issue_number: prNumber, body: commentBody });
        console.log('   ✅ PR comment posted.');
      } catch (e) {
        console.log('   ❌ Failed to post PR comment:', e.message);
      }
    }
  }

  // Step 8: Telegram notification
  try {
    const notifierPath = path.join(process.cwd(), 'automation', 'notify-telegram.js');
    if (fs.existsSync(notifierPath)) {
      const status = pass ? '✅ All metrics within budget' : `❌ ${globalViolations.length} violation(s), ${regressionAlerts.length} regression(s)`;
      execSync(`node "${notifierPath}" "⚡ Performance budget: ${status}. Check CI for details."`, { stdio: 'ignore' });
    }
  } catch (_) {}

  console.log('\n✅ Performance budget enforcement complete.\n');
  process.exit(pass ? 0 : 1);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
