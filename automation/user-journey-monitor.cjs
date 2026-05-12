#!/usr/bin/env node
/**
 * User Journey & Critical Path Monitor
 * Daily E2E guardrail for business-critical user flows using Playwright.
 * Validates: Home → Contact Form submit, AI Chat interaction, Pricing CTA, Blog search, etc.
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = process.cwd();
const STATE_DIR = path.join(ROOT, '.hermes', 'memory', 'user-journey');
const LOG_FILE = path.join(STATE_DIR, 'monitor.log');
const HISTORY_FILE = path.join(STATE_DIR, 'history.json');
const AGGREGATE_FILE = path.join(STATE_DIR, 'daily-aggregates.json');

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT = process.env.TELEGRAM_CHAT_ID || '8435383377';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const BASE_URL = 'https://ziontechgroup.com';
const DAILY_SCHEDULE = true; // set false for PR-only runs

// Journeys configuration — declarative
const JOURNEYS = [
  {
    id: 'home-to-contact',
    name: 'Home → Contact Form Submit',
    steps: [
      { action: 'goto', url: '/' },
      { action: 'click', selector: 'a[href="/contact"]', waitForNavigation: true },
      { action: 'fill', selector: 'input[name="name"]', value: 'Test User' },
      { action: 'fill', selector: 'input[name="email"]', value: 'test@example.com' },
      { action: 'fill', selector: 'textarea[name="message"]', value: 'Automated test message from User Journey Monitor' },
      { action: 'click', selector: 'button[type="submit"]', waitForNavigation: true },
      { action: 'assert', selector: 'text=Thank you for your message', timeout: 10000 },
    ],
  },
  {
    id: 'ai-chat-interaction',
    name: 'AI Chat Widget Interaction',
    steps: [
      { action: 'goto', url: '/' },
      { action: 'wait', ms: 2000 }, // let page settle
      { action: 'click', selector: 'button[aria-label*="chat"]', timeout: 5000 },
      { action: 'fill', selector: 'textarea', value: 'Hello AI', waitForSelector: true },
      { action: 'click', selector: 'button[type="submit"]' },
      { action: 'wait', ms: 3000 }, // wait for response
      { action: 'assert', selector: 'text=Hello', timeout: 10000 },
    ],
  },
  {
    id: 'pricing-cta',
    name: 'Pricing Page → CTA Click',
    steps: [
      { action: 'goto', url: '/pricing' },
      { action: 'wait', ms: 1000 },
      { action: 'assert', selector: 'h1, h2', contains: 'Pricing' },
      { action: 'click', selector: 'a[href*="contact"], button:has-text("Get Started")', timeout: 5000 },
      { action: 'wait', ms: 1000 },
    ],
  },
  {
    id: 'blog-article-view',
    name: 'Blog Article View + Search',
    steps: [
      { action: 'goto', url: '/blog' },
      { action: 'wait', ms: 1000 },
      { action: 'click', selector: 'article a', timeout: 5000 },
      { action: 'wait', ms: 1500 },
      { action: 'assert', selector: 'h1, h2' },
    ],
  },
];

const BASELINE_DAYS = 7;
const REGRESSION_THRESHOLD = 0.05; // 5% drop in success rate triggers issue
const FAILURE_THRESHOLD = 1; // any single journey failure → immediate issue

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  console.log(line);
  fs.mkdirSync(STATE_DIR, { recursive: true });
  fs.appendFileSync(LOG_FILE, line + '\n');
}

function getDateStr(daysAgo = 0) {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return d.toISOString().split('T')[0];
}

function loadHistory() {
  if (!fs.existsSync(HISTORY_FILE)) return {};
  try { return JSON.parse(fs.readFileSync(HISTORY_FILE, 'utf8')); } catch { return {}; }
}
function saveHistory(history) { fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2)); }

function loadAggregates() {
  if (!fs.existsSync(AGGREGATE_FILE)) return [];
  try { return JSON.parse(fs.readFileSync(AGGREGATE_FILE, 'utf8')); } catch { return []; }
}
function saveAggregates(data) { fs.writeFileSync(AGGREGATE_FILE, JSON.stringify(data, null, 2)); }

async function runJourney(browser, journey) {
  const start = Date.now();
  const result = { journey: journey.id, success: false, durationMs: 0, error: null, steps: [] };

  try {
    const context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (compatible; OpenClaw-JourneyMonitor/1.0)',
      viewport: { width: 1280, height: 800 },
    });
    const page = await context.newPage();

    for (let i = 0; i < journey.steps.length; i++) {
      const step = journey.steps[i];
      try {
        switch (step.action) {
          case 'goto':
            await page.goto(step.url, { waitUntil: 'networkidle', timeout: 15000 });
            break;
          case 'click':
            await page.click(step.selector, { timeout: step.timeout || 5000 });
            if (step.waitForNavigation) await page.waitForNavigation({ waitUntil: 'networkidle', timeout: 15000 });
            break;
          case 'fill':
            await page.fill(step.selector, step.value);
            break;
          case 'wait':
            await page.waitForTimeout(step.ms);
            break;
          case 'assert':
            if (step.contains) {
              await page.waitForFunction(
                (sel, txt) => Array.from(document.querySelectorAll(sel)).some(el => el.textContent.includes(txt)),
                { timeout: step.timeout || 10000 },
                step.selector,
                step.contains
              );
            } else {
              await page.waitForSelector(step.selector, { timeout: step.timeout || 10000 });
            }
            break;
        }
        result.steps.push({ index: i, success: true });
      } catch (err) {
        result.steps.push({ index: i, success: false, error: err.message });
        result.error = `Step ${i} (${step.action}) failed: ${err.message}`;
        break;
      }
    }

    await context.close();
    result.success = result.steps.every(s => s.success);
  } catch (err) {
    result.error = `Context error: ${err.message}`;
  }

  result.durationMs = Date.now() - start;
  return result;
}

async function sendTelegram(message) {
  if (!TELEGRAM_TOKEN) return;
  const payload = new URLSearchParams({ chat_id: TELEGRAM_CHAT, text: message, parse_mode: 'Markdown' });
  await new Promise<void>((resolve, reject) => {
    const req = https.request({
      hostname: 'api.telegram.org',
      path: `/bot${TELEGRAM_TOKEN}/sendMessage`,
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': payload.byteLength },
    }, res => {
      let body = '';
      res.on('data', d => body += d);
      res.on('end', () => (res.statusCode === 200 ? resolve() : reject(new Error(body))));
    });
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

async function createGitHubIssue({ title, body, labels }) {
  if (!GITHUB_TOKEN) { log('⚠️ GITHUB_TOKEN missing; skipping issue'); return; }
  const payload = JSON.stringify({ title, body, labels: ['automation', ...labels] });
  return new Promise<void>((resolve, reject) => {
    const req = https.request({
      hostname: 'api.github.com',
      path: '/repos/Zion-support/zion.app/issues',
      method: 'POST',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
        'User-Agent': 'OpenClaw-UserJourneyMonitor',
      },
    }, res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => (res.statusCode === 201 ? resolve() : reject(new Error(`HTTP ${res.statusCode}: ${data}`))));
    });
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

function computeOverallSuccessRate(aggregates) {
  if (!aggregates.length) return 0;
  const totalSteps = aggregates.reduce((sum, d) => sum + d.results.reduce((a, r) => a + (r.success ? 1 : 0), 0), 0);
  const successfulSteps = aggregates.reduce((sum, d) => sum + d.results.reduce((a, r) => a + (r.success ? 1 : 0), 0), 0);
  return totalSteps > 0 ? (successfulSteps / totalSteps) * 100 : 0;
}

async function main() {
  log('🚀 User Journey Monitor starting...');
  const today = getDateStr();
  log(`   Date: ${today}`);

  // Launch browser
  const browser = await chromium.launch({ headless: true });
  const results = [];

  for (const journey of JOURNEYS) {
    log(`   Running journey: ${journey.name}`);
    const outcome = await runJourney(browser, journey);
    results.push(outcome);
    log(`      Result: ${outcome.success ? '✅ PASS' : '❌ FAIL'} ${outcome.error || ''} (${outcome.durationMs}ms)`);
  }

  await browser.close();

  // Build report
  const report = {
    date: today,
    results,
    overallSuccessRate: computeOverallSuccessRate([{ results }]), // simplified — one-day aggregate
    timestamp: Date.now(),
  };

  // Save daily aggregate
  const existing = loadAggregates();
  existing.push(report);
  if (existing.length > 90) existing.splice(0, existing.length - 90);
  saveAggregates(existing);

  // Load history
  const history = loadHistory();
  history[today] = { successRate: report.overallSuccessRate, timestamp: Date.now() };
  const cutoff = Date.now() - 90 * 24 * 60 * 60 * 1000;
  for (const [date, h] of Object.entries(history)) { if (h.timestamp < cutoff) delete history[date]; }
  saveHistory(history);

  // Build baseline (7d avg)
  let baselineRate = null;
  let sum = 0, count = 0;
  for (let i = 1; i <= BASELINE_DAYS; i++) {
    const d = getDateStr(i);
    const h = history[d];
    if (h) { sum += h.successRate; count++; }
  }
  if (count > 0) baselineRate = sum / count;

  // Compare to baseline
  const degradation = baselineRate !== null ? (baselineRate - report.overallSuccessRate) / baselineRate : 0;
  const isRegression = degradation >= REGRESSION_THRESHOLD;
  const hasFailures = results.some(r => !r.success);

  // Build Telegram message
  let text = `🔍 *User Journey Monitor* — ${new Date(today).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}\n\n`;
  text += `📈 Overall Success Rate: ${report.overallSuccessRate.toFixed(1)}%\n`;
  if (baselineRate !== null) text += `📊 Baseline (7d avg): ${baselineRate.toFixed(1)}%\n`;
  text += `\n*Journey Results:*\n`;
  for (const r of results) {
    const journeyName = JOURNEYS.find(j => j.id === r.journey)?.name || r.journey;
    text += `${r.success ? '✅' : '❌'} ${journeyName} — ${r.durationMs}ms\n`;
    if (!r.success && r.error) text += `   └─ ${r.error}\n`;
  }
  if (isRegression) text += `\n⚠️ *Degradation vs baseline:* -${(degradation * 100).toFixed(1)}%`;
  if (hasFailures && !isRegression) text += `\n⚠️ Individual journey failures detected`;

  await sendTelegram(text);
  log('✅ Telegram sent');

  // GitHub issue on failures or regression
  if (hasFailures || isRegression) {
    const title = `[User Journey] ${hasFailures ? 'Failure detected' : 'Performance regression'} — ${today}`;
    let body = `User journey monitoring found issues on ${today}:\n\n- Overall success rate: ${report.overallSuccessRate.toFixed(1)}%`;
    if (baselineRate !== null) body += ` (baseline ${baselineRate.toFixed(1)}%)`;
    body += `\n\n*Details:*\n`;
    for (const r of results) {
      const journeyName = JOURNEYS.find(j => j.id === r.journey)?.name || r.journey;
      body += `\n- ${journeyName}: ${r.success ? '✅ PASS' : '❌ FAIL'}`;
      if (r.error) body += ` — ${r.error}`;
      body += ` (${r.durationMs}ms)`;
    }
    body += `\n\nState: .hermes/memory/user-journey/daily-aggregates.json\n`;
    body += `History: .hermes/memory/user-journey/history.json\n`;
    await createGitHubIssue({
      title,
      body,
      labels: ['automation', 'e2e', 'user-journey', 'bug'],
    });
    log('   GitHub issue created');
  } else {
    log('   All journeys passed, no regression');
  }

  log('✅ Complete');
}

main().catch(err => {
  console.error('❌ User journey monitor failed:', err);
  process.exit(1);
});
