#!/usr/bin/env node

/**
 * AI Navigation & Pages Audit Automation
 *
 * Orchestrates:
 * 1. Navigation audit (nav constants vs routes, broken links)
 * 2. Site link audit (live site crawl, HTTP status validation)
 * 3. Optional: create missing pages via OpenRouter LLM
 *
 * Usage:
 *   node automation/ai-navigation-pages-audit-automation.cjs run
 *   node automation/ai-navigation-pages-audit-automation.cjs run --create-pages
 *   node automation/ai-navigation-pages-audit-automation.cjs audit
 *
 * Env: OPENROUTER_API_KEY for LLM page creation
 */

try {
  require('dotenv').config({ path: require('path').join(process.cwd(), '.env') });
} catch (_) {}

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, 'automation', 'reports');

function log(msg, level = 'INFO') {
  const ts = new Date().toISOString();
  console.log(`[NavPages] ${ts} | ${msg}`);
}

function ensureDirs() {
  if (!fs.existsSync(REPORTS_DIR)) fs.mkdirSync(REPORTS_DIR, { recursive: true });
}

function runNavAudit() {
  log('Running navigation audit...');
  const r = spawnSync('node', ['automation/ai-navigation-audit-agent.cjs', 'scan'], {
    cwd: ROOT,
    encoding: 'utf8',
  });
  if (r.status !== 0) {
    log(`Nav audit stderr: ${r.stderr}`);
  }
  return r.status === 0;
}

function runNavFix() {
  log('Applying safe navigation fixes (sync footer to nav)...');
  const r = spawnSync('node', ['automation/ai-navigation-audit-agent.cjs', 'fix'], {
    cwd: ROOT,
    encoding: 'utf8',
  });
  return r.status === 0;
}

function runIndustryDiscovery() {
  log('Running industry solution discovery...');
  const r = spawnSync('node', ['automation/ai-industry-solution-discovery-agent.cjs', 'run'], {
    cwd: ROOT,
    encoding: 'utf8',
  });
  return r.status === 0;
}

async function runSiteLinkAudit(createPages = false) {
  log(createPages ? 'Running site link audit with create-pages...' : 'Running site link audit...');
  const args = ['automation/ai-site-link-audit-automation.cjs', 'run'];
  if (createPages) args.push('--create-pages');
  return new Promise((resolve) => {
    const child = require('child_process').spawn('node', args, {
      cwd: ROOT,
      stdio: 'inherit',
      env: { ...process.env },
    });
    child.on('close', (code) => resolve(code === 0));
  });
}

async function runNavImprove() {
  log('Running navigation improvement audit (LLM suggestions)...');
  return new Promise((resolve) => {
    const child = require('child_process').spawn(
      'node',
      ['automation/ai-navigation-improvement-automation.cjs', 'run'],
      { cwd: ROOT, stdio: 'inherit', env: { ...process.env } }
    );
    child.on('close', (code) => resolve(code === 0));
  });
}

async function aggregateReport() {
  const report = {
    timestamp: new Date().toISOString(),
    navAudit: null,
    siteLinkAudit: null,
    summary: { navOk: false, siteLinksOk: false },
  };

  try {
    const navPath = path.join(REPORTS_DIR, 'navigation-audit-latest.json');
    if (fs.existsSync(navPath)) {
      report.navAudit = JSON.parse(fs.readFileSync(navPath, 'utf8'));
      report.summary.navOk = !report.navAudit.broken || report.navAudit.broken.length === 0;
    }
  } catch (_) {}

  try {
    const sitePath = path.join(REPORTS_DIR, 'site-link-audit-latest.json');
    if (fs.existsSync(sitePath)) {
      report.siteLinkAudit = JSON.parse(fs.readFileSync(sitePath, 'utf8'));
      const broken = report.siteLinkAudit.broken ?? report.siteLinkAudit.brokenLinks?.length ?? 0;
      report.summary.siteLinksOk = broken === 0;
    }
  } catch (_) {}

  const outPath = path.join(REPORTS_DIR, 'navigation-pages-audit-latest.json');
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  log(`Aggregated report: ${outPath}`);
  return report;
}

async function run(createPages = false) {
  ensureDirs();
  log('Starting navigation & pages audit...');

  const navOk = runNavAudit();
  runNavFix();
  runIndustryDiscovery();
  const siteOk = await runSiteLinkAudit(createPages);

  if (process.env.OPENROUTER_API_KEY) {
    await runNavImprove();
  } else {
    log('Set OPENROUTER_API_KEY for LLM navigation suggestions.');
  }

  const report = await aggregateReport();

  log('--- Summary ---');
  log(`Nav audit: ${navOk && report.summary.navOk ? '✅ OK' : '❌ Issues'}`);
  log(`Site links: ${siteOk && report.summary.siteLinksOk ? '✅ OK' : '❌ Issues'}`);

  return report;
}

async function auditOnly() {
  ensureDirs();
  runNavAudit();
  await runSiteLinkAudit(false);
  return aggregateReport();
}

const args = process.argv.slice(2);
const createPages = args.includes('--create-pages');

if (args.includes('audit')) {
  auditOnly().then((r) => console.log(JSON.stringify(r, null, 2)));
} else {
  run(createPages).catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
