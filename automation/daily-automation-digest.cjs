#!/usr/bin/env node
/**
 * Daily Automation Digest — health across all guardrails
 * Scans automation/reports/*-latest.json and produces a concise summary
 * Sends via Telegram and persists to .hermes/memory/
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, 'automation', 'reports');
const OUT_FILE = path.join(ROOT, '.hermes', 'memory', 'digest-latest.json');
const LOG_FILE = path.join(ROOT, '.hermes', 'memory', 'digest-daily.log');

function ts() { return new Date().toISOString(); }

function log(msg) {
  const line = `[${ts()}] ${msg}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

function readReport(file) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    return JSON.parse(content);
  } catch (e) {
    return null;
  }
}

function checkFile(file) {
  const p = path.join(REPORTS_DIR, file);
  if (!fs.existsSync(p)) return { present: false, file };
  const stat = fs.statSync(p);
  return { present: true, file, mtime: stat.mtime.toISOString(), ageHours: (Date.now() - stat.mtimeMs) / 3.6e6 };
}

function main() {
  log('📦 Generating daily automation digest...');

  // Ensure log dir
  fs.mkdirSync(path.dirname(LOG_FILE), { recursive: true });

  // 1. Check freshness of key reports
  const keyReports = [
    'ai-lab-integrity-latest.json',
    'ai-experiences-health-latest.json',
    'automation-health-latest.json',
    'build-size-optimizer-latest.json',
    'storybook-regression-report.json',
    'dependency-health-weekly.txt', // not JSON but check presence
    'openclaw-regression-memory-latest.json',
    'release-risk-score-latest.json',
  ];

  const presence = keyReports.map(r => checkFile(r));

  // 2. Parse JSON reports we understand
  let aiLab = null, experiences = null, buildSize = null, regression = null, releaseRisk = null;

  try {
    aiLab = readReport('ai-lab-integrity-latest.json');
  } catch (e) {}
  try {
    experiences = readReport('ai-experiences-health-latest.json');
  } catch (e) {}
  try {
    buildSize = readReport('build-size-optimizer-latest.json');
  } catch (e) {}
  try {
    regression = readReport('openclaw-regression-memory-latest.json');
  } catch (e) {}
  try {
    releaseRisk = readReport('release-risk-score-latest.json');
  } catch (e) {}

  // 3. Determine overall status
  let status = '🟢 HEALTHY';
  let alerts = [];

  // AI Lab integrity
  if (aiLab && aiLab.ok !== true) {
    status = '🔴 DEGRADED';
    alerts.push(`AI Lab integrity: ${aiLab.missingCount || 'unknown'} missing tools`);
  } else if (aiLab) {
    log(`✅ AI Lab: ${aiLab.healthy}/${aiLab.totalTools} healthy`);
  }

  // Experiences health
  if (experiences && experiences.allOk !== true) {
    status = '🔴 DEGRADED';
    alerts.push(`${experiences.okCount || 0}/${experiences.total || 0} experiences healthy`);
  } else if (experiences) {
    log(`✅ Experiences: ${experiences.okCount}/${experiences.total} OK`);
  }

  // Build size optimizer triggered?
  if (buildSize && buildSize.triggered) {
    status = '🟡 AT_RISK';
    alerts.push(`Bundle growth: ${buildSize.growthPercent}% (needs optimization)`);
  }

  // Regression incidents
  if (regression && regression.incidents && regression.incidents.length > 0) {
    status = '🔴 DEGRADED';
    alerts.push(`Regression incidents: ${regression.incidents.join(', ')}`);
  }

  // Release risk
  if (releaseRisk && releaseRisk.severity && releaseRisk.severity !== 'low') {
    status = '🟡 AT_RISK';
    alerts.push(`Release risk: ${releaseRisk.severity} (score: ${releaseRisk.score || 'N/A'})`);
  }

  // Stale reports (older than 24h)
  const stale = presence.filter(p => p.present && p.ageHours > 24);
  if (stale.length > 0) {
    status = '🟡 AT_RISK';
    alerts.push(`${stale.length} reports stale (>24h)`);
  }

  // 4. Build digest message
  const now = ts();
  const lines = [
    `🤖 *Automation Digest* — ${new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}`,
    `Overall: ${status}`,
    '',
    '📊 Component Health:',
    `  • AI Lab Integrity: ${aiLab ? (aiLab.ok ? '✅' : '❌') : '❓'}`,
    `  • Live Experiences: ${experiences ? `${experiences.okCount}/${experiences.total}` : 'unknown'}`,
    `  • Build Size: ${buildSize ? (buildSize.triggered ? `🔴 ${buildSize.growthPercent}%` : '✅ OK') : '❓'}`,
    `  • Regression Memory: ${regression ? (regression.incidents?.length || 0) + ' incidents' : 'unknown'}`,
    `  • Release Risk: ${releaseRisk ? (releaseRisk.severity || 'unknown') : 'unknown'}`,
    '',
  ];

  if (alerts.length > 0) {
    lines.push('⚠️ Alerts:');
    alerts.forEach(a => lines.push(`  • ${a}`));
    lines.push('');
  }

  lines.push('📁 Artifact freshness:');
  presence.forEach(p => {
    if (!p.present) {
      lines.push(`  • ${p.file}: missing`);
    } else if (p.ageHours > 24) {
      lines.push(`  • ${p.file}: stale (${p.ageHours.toFixed(1)}h old)`);
    }
  });

  lines.push('');
  lines.push(`Generated: ${now}`);

  const message = lines.join('\n');

  // 5. Persist digest JSON
  const digest = {
    generatedAt: now,
    status,
    alerts,
    reports: presence.map(p => ({ file: p.file, present: p.present, ageHours: p.ageHours })),
    aiLab,
    experiences,
    buildSize: buildSize ? { triggered: buildSize.triggered, growthPercent: buildSize.growthPercent } : null,
    regression: regression ? { incidents: regression.incidents } : null,
    releaseRisk: releaseRisk ? { severity: releaseRisk.severity, score: releaseRisk.score } : null,
  };

  fs.writeFileSync(OUT_FILE, JSON.stringify(digest, null, 2));
  log(`✅ Digest saved: ${OUT_FILE}`);

  // 6. Send Telegram
  const botToken = process.env.TELEGRAM_BOT_TOKEN || (fs.existsSync('/root/.openclaw/workspace/coordination/.env') ? require('dotenv').config() : null);
  const chatId = process.env.TELEGRAM_CHAT_ID || '8435383377';

  if (!botToken) {
    log('⚠️ TELEGRAM_BOT_TOKEN not set; skipping Telegram');
    return;
  }

  const TelegramBot = require('telegraf').TelegramBot || class {
    constructor(token) { this.token = token; }
    sendMessage(chat, text) { console.log('Telegram mock:', text); }
  };
  // Simple https send
  const https = require('https');
  const payload = new URLSearchParams({ chat_id: chatId, text: message, parse_mode: 'Markdown' });
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
        log('✅ Telegram digest sent');
      } else {
        log(`❌ Telegram error ${res.statusCode}: ${body}`);
      }
    });
  });
  req.on('error', e => log('❌ Telegram request error: ' + e.message));
  req.write(payload);
  req.end();

  log('📬 Digest complete');
}

// Run
try {
  main();
} catch (err) {
  console.error('❌ Digest failed:', err);
  process.exit(1);
}
