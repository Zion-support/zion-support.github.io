#!/usr/bin/env node
/**
 * Field Performance & Real User Web Vitals Aggregator
 * Reads raw submissions from .hermes/memory/field-performance/raw/
 * Computes p75/p90 per metric per page, detects regressions, alerts
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, '.hermes', 'memory', 'field-performance');
const RAW_DIR = path.join(DATA_DIR, 'raw');
const AGGREGATE_FILE = path.join(DATA_DIR, 'daily-aggregates.json');
const LOG_FILE = path.join(DATA_DIR, 'aggregator.log');
const HISTORY_FILE = path.join(DATA_DIR, 'history.json');

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT = process.env.TELEGRAM_CHAT_ID || '8435383377';

// Thresholds (seconds, except CLS unitless)
const THRESHOLDS = {
  LCP: { warning: 2.5, critical: 4.0 },      // Largest Contentful Paint
  FID: { warning: 0.1, critical: 0.3 },      // First Input Delay (seconds)
  CLS: { warning: 0.1, critical: 0.25 },     // Cumulative Layout Shift
  FCP: { warning: 1.8, critical: 3.0 },      // First Contentful Paint
  TTFB: { warning: 0.8, critical: 2.0 },     // Time to First Byte
};

const DAYS_AGO = 1; // aggregate yesterday's data (full day)
const BASELINE_DAYS = 7; // 7d moving average baseline
const TOP_N = 10;  // top worst pages to report
const REGRESSION_THRESHOLD = 0.15; // 15% worsening triggers issue

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  console.log(line);
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.appendFileSync(LOG_FILE, line + '\n');
}

function humanMs(ms: number): string {
  if (ms >= 1000) return (ms / 1000).toFixed(2) + 's';
  return Math.round(ms) + 'ms';
}

function loadHistory() {
  if (!fs.existsSync(HISTORY_FILE)) return {};
  try {
    return JSON.parse(fs.readFileSync(HISTORY_FILE, 'utf8'));
  } catch { return {}; }
}

function saveHistory(history) {
  fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2));
}

function loadAggregates() {
  if (!fs.existsSync(AGGREGATE_FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(AGGREGATE_FILE, 'utf8'));
  } catch { return []; }
}

function saveAggregates(data) {
  fs.writeFileSync(AGGREGATE_FILE, JSON.stringify(data, null, 2));
}

function getDateStr(daysAgo = 0) {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return d.toISOString().split('T')[0];
}

function readSubmissionsForDate(dateStr: string) {
  const dir = path.join(RAW_DIR, dateStr);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsonl'));
  const submissions = [];

  for (const file of files) {
    const filepath = path.join(dir, file);
    const content = fs.readFileSync(filepath, 'utf8');
    const lines = content.trim().split('\n').filter(Boolean);
    for (const line of lines) {
      try {
        submissions.push(JSON.parse(line));
      } catch { /* ignore bad lines */ }
    }
  }

  return submissions;
}

function computePercentiles(values: number[]) {
  if (values.length === 0) return { p50: 0, p75: 0, p90: 0, p99: 0 };
  const sorted = [...values].sort((a, b) => a - b);
  const get = (p: number) => sorted[Math.floor(sorted.length * p)] || sorted[sorted.length - 1] || 0;
  return {
    p50: get(0.5),
    p75: get(0.75),
    p90: get(0.90),
    p99: get(0.99),
    count: values.length,
  };
}

function aggregateByPage(submissions) {
  const groups: Record<string, Record<string, number[]>> = {};

  for (const s of submissions) {
    const page = s.page || '/';
    const metric = s.name;
    if (!groups[page]) groups[page] = {};
    if (!groups[page][metric]) groups[page][metric] = [];
    groups[page][metric].push(s.value);
  }

  const result: Record<string, Record<string, any>> = {};
  for (const [page, metrics] of Object.entries(groups)) {
    result[page] = {};
    for (const [metric, values] of Object.entries(metrics)) {
      result[page][metric] = computePercentiles(values);
    }
  }

  return result;
}

function ratingFromValue(metric: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const th = THRESHOLDS[metric as keyof typeof THRESHOLDS];
  if (!th) return 'good';
  if (value >= th.critical) return 'poor';
  if (value >= th.warning) return 'needs-improvement';
  return 'good';
}

function compareToBaseline(current: Record<string, any>, baseline: Record<string, any>): Record<string, any> {
  const changes: Record<string, { page: string; metric: string; changePct: number; currentP75: number; baselineP75: number }> = {};

  for (const [page, metrics] of Object.entries(current)) {
    for (const [metric, stats] of Object.entries(metrics)) {
      const b = baseline[page]?.[metric];
      if (!b) continue;
      const change = (stats.p75 - b.p75) / b.p75;
      if (Math.abs(change) >= REGRESSION_THRESHOLD) {
        changes[`${page}|${metric}`] = {
          page,
          metric,
          changePct: change * 100,
          currentP75: stats.p75,
          baselineP75: b.p75,
        };
      }
    }
  }

  return changes;
}

async function sendTelegram(message: string) {
  if (!TELEGRAM_TOKEN) return;

  const payload = new URLSearchParams({
    chat_id: TELEGRAM_CHAT,
    text: message,
    parse_mode: 'Markdown',
  });

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

function computeOverallScore(aggregates: Record<string, Record<string, any>>): number {
  let totalWeighted = 0;
  let count = 0;
  const weights = { LCP: 0.3, FID: 0.2, CLS: 0.2, FCP: 0.15, TTFB: 0.15 };

  for (const pageMetrics of Object.values(aggregates)) {
    for (const [metric, stats] of Object.entries(pageMetrics)) {
      const weight = weights[metric as keyof typeof weights] || 0;
      const rating = ratingFromValue(metric, stats.p75);
      let score: number;
      if (rating === 'good') score = 100;
      else if (rating === 'needs-improvement') score = 50;
      else score = 0;
      totalWeighted += score * weight;
      count += weight;
    }
  }

  return count > 0 ? Math.round(totalWeighted / count) : 0;
}

async function main() {
  log('📊 Field Performance Aggregator starting...');

  // Determine date to aggregate (yesterday)
  const targetDate = getDateStr(DAYS_AGO);
  log(`   Aggregating data for: ${targetDate}`);

  const submissions = readSubmissionsForDate(targetDate);
  log(`   Submissions found: ${submissions.length}`);

  if (submissions.length === 0) {
    log('   No data; skipping aggregation');
    return;
  }

  // Load history and baseline
  const history = loadHistory();
  const aggregates = aggregateByPage(submissions);

  // Compute overall score
  const overallScore = computeOverallScore(aggregates);

  // Build baseline from last 7 days (excluding today)
  let baselineData: Record<string, Record<string, any>> = {};
  for (let i = 1; i <= BASELINE_DAYS; i++) {
    const d = getDateStr(i);
    if (d === targetDate) continue;
    const daySubs = readSubmissionsForDate(d);
    if (daySubs.length > 0) {
      const dayAgg = aggregateByPage(daySubs);
      // Merge into baseline (simple average across days)
      for (const [page, metrics] of Object.entries(dayAgg)) {
        if (!baselineData[page]) baselineData[page] = {};
        for (const [metric, stats] of Object.entries(metrics)) {
          if (!baselineData[page][metric]) {
            baselineData[page][metric] = { p75: 0, count: 0 };
          }
          const b = baselineData[page][metric];
          b.p75 = (b.p75 * b.count + stats.p75) / (b.count + 1);
          b.count += 1;
        }
      }
    }
  }

  // Detect regressions
  const regressions = compareToBaseline(aggregates, baselineData);
  const regressionList = Object.values(regressions).filter(r => r.changePct > 0); // only worsening

  // Update history
  history[targetDate] = {
    overallScore,
    pageCount: Object.keys(aggregates).length,
    submissionCount: submissions.length,
    timestamp: Date.now(),
  };
  // keep only last 90 days
  const cutoff = Date.now() - 90 * 24 * 60 * 60 * 1000;
  for (const [date, h] of Object.entries(history)) {
    if (h.timestamp < cutoff) delete history[date];
  }
  saveHistory(history);

  // Save aggregates
  const existingAggregates = loadAggregates();
  existingAggregates.push({ date: targetDate, aggregates, overallScore });
  // keep only last 90 days
  if (existingAggregates.length > 90) existingAggregates.splice(0, existingAggregates.length - 90);
  saveAggregates(existingAggregates);

  log(`   Overall performance score: ${overallScore}/100`);

  // Build Telegram message
  let text = `📊 *Field Performance Report* — ${new Date(targetDate).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}\n\n`;
  text += `📈 Overall Score: ${overallScore}/100\n`;
  text += `📄 Pages analyzed: ${Object.keys(aggregates).length}\n`;
  text += `📊 Submissions: ${submissions.length}\n\n`;

  // Top worst pages by LCP
  const worstByLCP = Object.entries(aggregates)
    .filter(([_, m]) => m.LCP)
    .sort((a, b) => (b[1].LCP.p75 || 0) - (a[1].LCP.p75 || 0))
    .slice(0, TOP_N);

  if (worstByLCP.length > 0) {
    text += '🔴 Top slowest pages (LCP p75):\n';
    for (const [page, metrics] of worstByLCP) {
      const lcp = metrics.LCP.p75;
      const rating = ratingFromValue('LCP', lcp);
      const emoji = rating === 'poor' ? '🔴' : rating === 'needs-improvement' ? '🟡' : '🟢';
      text += `${emoji} ${page} — ${humanMs(lcp * 1000)}\n`;
    }
    text += '\n';
  }

  // Regressions
  if (regressionList.length > 0) {
    text += `⚠️ *Regressions detected* (vs 7d baseline): ${regressionList.length} metric/page combos\n`;
    regressionList.slice(0, TOP_N).forEach(r => {
      text += `• ${r.page} — ${r.metric} +${r.changePct.toFixed(1)}% (${humanMs(r.baselineP75 * 1000)} → ${humanMs(r.currentP75 * 1000)})\n`;
    });
    text += '\n';
  } else {
    text += '✅ No significant regressions vs baseline.\n\n';
  }

  text += `Details: .hermes/memory/field-performance/daily-aggregates.json`;

  // Send Telegram
  await sendTelegram(text);
  log('✅ Telegram alert sent');

  // Create GitHub issue if severe: >5% pages critical OR any metric >20% regression
  const criticalPages = Object.entries(aggregates).filter(([_, m]) => {
    const lcp = m.LCP?.p75 || 0;
    const fid = m.FID?.p75 || 0;
    const cls = m.CLS?.p75 || 0;
    return lcp >= THRESHOLDS.LCP.critical || fid >= THRESHOLDS.FID.critical || cls >= THRESHOLDS.CLS.critical;
  }).length;

  const severeRegressions = regressionList.filter(r => r.changePct >= 20).length;
  const percentCritical = (criticalPages / Object.keys(aggregates).length) * 100;

  if (percentCritical >= 5 || severeRegressions > 0) {
    log(`🚨 Critical threshold met: ${criticalPages} critical pages, ${severeRegressions} severe regressions`);
    // GitHub issue creation via REST API
    // This requires GITHUB_TOKEN secret
    await createGitHubIssue({
      title: `[Field Performance] Critical issues detected — ${targetDate}`,
      body: `Field performance monitoring detected critical degradation:\n\n- ${criticalPages} pages with critical LCP/FID/CLS (${percentCritical.toFixed(1)}% of total)\n- ${severeRegressions} metrics with >20% regression vs baseline\n- Overall score: ${overallScore}/100\n\nReview details in [daily-aggregates.json](https://github.com/Zion-support/zion.app/blob/main/.hermes/memory/field-performance/daily-aggregates.json) and [history.json](https://github.com/Zion-support/zion.app/blob/main/.hermes/memory/field-performance/history.json).`,
      labels: ['automation', 'performance', 'field-web-vitals', 'bug'],
    });
    log('   GitHub issue created');
  } else {
    log(`   No critical thresholds (${criticalPages} critical, ${severeRegressions} severe regressions)`);
  }

  log('✅ Aggregation complete');
}

async function createGitHubIssue({ title, body, labels }: { title: string; body: string; labels: string[] }) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    log('⚠️ GITHUB_TOKEN missing; skipping GitHub issue creation');
    return;
  }

  return new Promise<void>((resolve, reject) => {
    const payload = JSON.stringify({
      title,
      body,
      labels: ['automation', ...labels],
    });

    const req = https.request({
      hostname: 'api.github.com',
      path: '/repos/Zion-support/zion.app/issues',
      method: 'POST',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
        'Content-Length': payload.byteLength,
        'User-Agent': 'OpenClaw-FieldPerformance',
      },
    }, res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        if (res.statusCode === 201) resolve();
        else reject(new Error(`HTTP ${res.statusCode}: ${data}`));
      });
    });

    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

main().catch(err => {
  console.error('❌ Field performance aggregator failed:', err);
  process.exit(1);
});
