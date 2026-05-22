#!/usr/bin/env node
/**
 * Lighthouse Performance Monitor
 * Runs Lighthouse on production URL, tracks scores over time,
 * detects regressions, and alerts via Telegram/GitHub issues.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, 'automation', 'reports', 'lighthouse');
const HISTORY_FILE = path.join(ROOT, '.hermes', 'memory', 'lighthouse-history.json');
const LOG_FILE = path.join(ROOT, '.hermes', 'memory', 'lighthouse-monitor.log');
const LATEST_FILE = path.join(REPORTS_DIR, 'lighthouse-latest.json');

function ts() { return new Date().toISOString(); }

function log(msg) {
  const line = `[${ts()}] ${msg}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

function ensureDirs() {
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
  fs.mkdirSync(path.dirname(HISTORY_FILE), { recursive: true });
}

function loadHistory() {
  if (!fs.existsSync(HISTORY_FILE)) return { runs: [], average: {} };
  const data = fs.readFileSync(HISTORY_FILE, 'utf8');
  return JSON.parse(data);
}

function saveHistory(history) {
  fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2));
}

function parseLighthouseReport(file) {
  const report = JSON.parse(fs.readFileSync(file, 'utf8'));
  const categories = report.categories || {};
  return {
    performance: categories.performance?.score || 0,
    accessibility: categories.accessibility?.score || 0,
    'best-practices': categories['best-practices']?.score || 0,
    seo: categories.seo?.score || 0,
    metrics: report.audits || {},
    timestamp: ts(),
    url: report.finalUrl || process.env.APP_URL || 'https://ziontechgroup.com',
  };
}

function detectRegressions(current, history) {
  const recent = history.runs.slice(-7); // last 7 runs for average
  if (recent.length < 3) return []; // not enough data

  const avg = {};
  ['performance', 'accessibility', 'best-practices', 'seo'].forEach(key => {
    const sum = recent.reduce((a, r) => a + (r[key] || 0), 0);
    avg[key] = sum / recent.length;
  });

  const regressions = [];
  ['performance', 'accessibility', 'best-practices', 'seo'].forEach(key => {
    const drop = avg[key] - current[key];
    if (drop > 0.1) { // >10% drop
      regressions.push({
        category: key,
        previousAvg: avg[key],
        current: current[key],
        dropPercent: Math.round(drop / avg[key] * 100),
      });
    }
  });

  return regressions;
}

function checkThresholds(current) {
  const alerts = [];
  if (current.performance < 0.85) alerts.push(`Performance: ${Math.round(current.performance * 100)} (< 85)`);
  if (current.accessibility < 0.9) alerts.push(`Accessibility: ${Math.round(current.accessibility * 100)} (< 90)`);
  if (current.seo < 0.9) alerts.push(`SEO: ${Math.round(current.seo * 100)} (< 90)`);

  // Core Web Vitals from Lighthouse metrics (approximate)
  const metrics = current.metrics;
  if (metrics['largest-contentful-paint']?.numericValue > 2500) {
    alerts.push(`LCP: ${Math.round(metrics['largest-contentful-paint'].numericValue)}ms (> 2500ms)`);
  }
  if (metrics['cumulative-layout-shift']?.numericValue > 0.1) {
    alerts.push(`CLS: ${metrics['cumulative-layout-shift'].numericValue.toFixed(3)} (> 0.10)`);
  }
  if (metrics['first-input-delay']?.numericValue > 100) {
    alerts.push(`FID: ${Math.round(metrics['first-input-delay'].numericValue)}ms (> 100ms)`);
  }

  return alerts;
}

function buildTelegramMessage(digest, regressions, thresholdAlerts) {
  const lines = [
    `📊 *Lighthouse Performance Report* — ${new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}`,
    `URL: ${digest.url}`,
    '',
    '📈 Scores:',
    `  • Performance: ${Math.round(digest.performance * 100)}`,
    `  • Accessibility: ${Math.round(digest.accessibility * 100)}`,
    `  • Best Practices: ${Math.round(digest['best-practices'] * 100)}`,
    `  • SEO: ${Math.round(digest.seo * 100)}`,
    '',
  ];

  if (thresholdAlerts.length > 0) {
    lines.push('⚠️ Threshold Alerts:');
    thresholdAlerts.forEach(a => lines.push(`  • ${a}`));
    lines.push('');
  }

  if (regressions.length > 0) {
    lines.push('🔻 Regressions detected (vs 7-day avg):');
    regressions.forEach(r => {
      lines.push(`  • ${r.category}: ${Math.round(r.current * 100)} (was ${Math.round(r.previousAvg * 100)}, -${r.dropPercent}%)`);
    });
    lines.push('');
  }

  lines.push(`Generated: ${digest.timestamp}`);
  return lines.join('\n');
}

function main() {
  ensureDirs();
  log('🏮 Starting Lighthouse monitor...');

  const url = process.env.APP_URL || 'https://ziontechgroup.com';
  log(`🔗 Target URL: ${url}`);

  // 1. Run Lighthouse via GitHub Actions lighthouse-action (we'll use local chrome)
  // For local/Action execution, we'll use the LH CLI if available, otherwise skip
  const reportPath = path.join(REPORTS_DIR, `lh-${Date.now()}.json`);

  try {
    // Try using local lighthouse (if installed)
    execSync(`npx lighthouse ${url} --output=json --output-path=${reportPath} --chrome-flags="--headless" --port=9222`, {
      cwd: ROOT,
      stdio: 'pipe',
      timeout: 180000, // 3 min timeout
    });
    log(`✅ Lighthouse report generated: ${reportPath}`);
  } catch (e) {
    // Fallback: create a stub report with zeros if lighthouse not available
    log('⚠️ Lighthouse CLI not available or failed; creating stub report for workflow validation');
    const stub = {
      categories: {
        performance: { score: 0 },
        accessibility: { score: 0 },
        'best-practices': { score: 0 },
        seo: { score: 0 },
      },
      audits: {},
      finalUrl: url,
    };
    fs.writeFileSync(reportPath, JSON.stringify(stub, null, 2));
  }

  // 2. Parse report
  const current = parseLighthouseReport(reportPath);

  // 3. Update history
  let history = loadHistory();
  history.runs.push(current);
  // Keep last 30 runs
  if (history.runs.length > 30) history.runs = history.runs.slice(-30);
  saveHistory(history);

  // Also copy to latest
  fs.copyFileSync(reportPath, LATEST_FILE);

  // 4. Detect regressions
  const regressions = detectRegressions(current, history);
  const thresholdAlerts = checkThresholds(current);

  // 5. Build digest and send Telegram if needed
  const needsAlert = regressions.length > 0 || thresholdAlerts.length > 0;
  const message = buildTelegramMessage(current, regressions, thresholdAlerts);

  if (needsAlert) {
    log('🚨 Performance issues detected — sending Telegram alert');
    sendTelegram(message);
  } else {
    log('✅ All scores within thresholds — no alert needed');
  }

  // 6. Create GitHub issue for regressions
  if (regressions.length > 0) {
    createGitHubIssue(current, regressions);
  }

  log('🏮 Lighthouse monitor complete');
  process.exit(0);
}

function sendTelegram(text) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  if (!botToken) {
    log('⚠️ TELEGRAM_BOT_TOKEN missing; skipping Telegram');
    return;
  }

  const chatId = process.env.TELEGRAM_CHAT_ID || '8435383377';
  const https = require('https');
  const payload = new URLSearchParams({ chat_id: chatId, text, parse_mode: 'Markdown' });

  const req = https.request({
    hostname: 'api.telegram.org',
    path: `/bot${botToken}/sendMessage`,
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': payload.byteLength },
  }, res => {
    let body = '';
    res.on('data', d => body += d);
    res.on('end', () => {
      if (res.statusCode === 200) {
        log('✅ Telegram alert sent');
      } else {
        log(`❌ Telegram error ${res.statusCode}: ${body}`);
      }
    });
  });

  req.on('error', e => log('❌ Telegram error: ' + e.message));
  req.write(payload);
  req.end();
}

function createGitHubIssue(current, regressions) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    log('⚠️ GITHUB_TOKEN missing; skipping issue creation');
    return;
  }

  const title = `📉 Performance Regression Detected — ${new Date().toLocaleDateString()}`;
  const body = [
    '## Performance Regression Report',
    '',
    `**URL tested:** ${current.url}`,
    `**Date:** ${current.timestamp}`,
    '',
    '### Regressed Categories',
    ...regressions.map(r => `- **${r.category}**: ${Math.round(r.current * 100)} (was ${Math.round(r.previousAvg * 100)}, -${r.dropPercent}%)`),
    '',
    '### Current Scores',
    `- Performance: ${Math.round(current.performance * 100)}`,
    `- Accessibility: ${Math.round(current.accessibility * 100)}`,
    `- Best Practices: ${Math.round(current['best-practices'] * 100)}`,
    `- SEO: ${Math.round(current.seo * 100)}`,
    '',
    '### Action',
    'Investigate recent deployments or content changes that may have impacted these scores.',
    '',
    `---\n*Generated by automation/lighthouse-monitor.cjs*`,
  ].join('\n');

  // Use GitHub CLI if available
  try {
    execSync(`gh issue create --title "${title}" --body "${body.replace(/"/g, '\\"')}" --label "automation,performance,regression"`, {
      cwd: ROOT,
      stdio: 'pipe',
    });
    log('✅ GitHub issue created via gh');
  } catch (e) {
    log('⚠️ gh CLI not available; issue creation skipped');
  }
}

// Run
try {
  main();
} catch (err) {
  console.error('❌ Lighthouse monitor failed:', err);
  process.exit(1);
}
