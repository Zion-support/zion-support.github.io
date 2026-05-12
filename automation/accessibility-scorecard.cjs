#!/usr/bin/env node
/**
 * Autonomous Accessibility Scorecard Dashboard
 *
 * Aggregates Lighthouse accessibility scores from CI runs (#13),
 * tracks trends, and alerts on regressions.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const STATE_DIR = path.join(process.cwd(), '.hermes', 'memory', 'accessibility-scorecard');
const ARTIFACTS_DIR = path.join(process.cwd(), '.hermes', 'artifacts', 'accessibility-audit');
const SCORECARD_PATH = path.join(STATE_DIR, 'scorecard.json');
const HISTORY_PATH = path.join(STATE_DIR, 'history.json');

const SCORE_DROP_THRESHOLD = 10; // points drop triggers alert
const FAILURE_THRESHOLD = 50; // scores below 50 are failing
const HISTORY_DAYS = 90;

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function nowISO() { return new Date().toISOString(); }
function todayStr() { return new Date().toISOString().slice(0, 10); }

// Download latest accessibility audit artifacts from GitHub Actions
// This is a stub — in real run, artifacts are uploaded by #13 workflow and downloaded here
function discoverArtifacts() {
  if (!fs.existsSync(ARTIFACTS_DIR)) return [];
  const files = fs.readdirSync(ARTIFACTS_DIR).filter(f => f.endsWith('.json'));
  return files.map(f => path.join(ARTIFACTS_DIR, f));
}

// Parse Lighthouse accessibility audit JSON
function parseAudit(file) {
  try {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    // Expected: { url: "...", accessibilityScore: 92, audits: {...} }
    const url = data.url || file;
    const score = data.accessibilityScore !== undefined ? data.accessibilityScore : null;
    const audits = data.audits || {};
    const failures = Object.entries(audits)
      .filter(([k, v]) => v.score !== undefined && v.score < 1)
      .map(([k, v]) => ({ id: k, score: v.score, title: v.title, description: v.description }));
    return { file, url, score, failures, timestamp: fs.statSync(file).mtime.toISOString() };
  } catch (e) {
    console.error(`❌ Failed to parse ${file}:`, e.message);
    return null;
  }
}

// Load history
function loadHistory() {
  if (!fs.existsSync(HISTORY_PATH)) return { entries: [] };
  return JSON.parse(fs.readFileSync(HISTORY_PATH, 'utf8'));
}

// Save history with pruning
function saveHistory(history) {
  const cutoff = new Date(Date.now() - HISTORY_DAYS * 24 * 60 * 60 * 1000);
  history.entries = history.entries.filter(e => new Date(e.date) > cutoff);
  fs.writeFileSync(HISTORY_PATH, JSON.stringify(history, null, 2));
}

// Compute aggregate stats
function computeStats(audits) {
  const scores = audits.map(a => a.score).filter(s => s !== null);
  if (scores.length === 0) return null;
  scores.sort((a,b) => a-b);
  const median = scores.length % 2 ? scores[Math.floor(scores.length/2)] : (scores[scores.length/2-1] + scores[scores.length/2]) / 2;
  const min = scores[0];
  const max = scores[scores.length-1];
  const avg = scores.reduce((a,b)=>a+b,0) / scores.length;
  const failing = scores.filter(s => s < FAILURE_THRESHOLD).length;
  return { count: scores.length, median, min, max, avg, failing };
}

function main() {
  console.log('♿ Accessibility Scorecard — starting\n');
  ensureDir(STATE_DIR);
  ensureDir(ARTIFACTS_DIR);

  // In actual CI, #13 uploads artifacts; here we simulate by scanning known artifact dir
  const artifactFiles = discoverArtifacts();
  console.log(`📁 Found ${artifactFiles.length} accessibility audit artifact(s)`);

  if (artifactFiles.length === 0) {
    console.log('⚠️  No artifacts found. Ensure #13 workflow is running and artifacts are retained.\n');
    // Generate empty report to avoid noise
    const emptyReport = { timestamp: nowISO(), date: todayStr(), stats: null, trends: [], alerts: [] };
    fs.writeFileSync(SCORECARD_PATH, JSON.stringify(emptyReport, null, 2));
    process.exit(0);
  }

  const audits = [];
  for (const file of artifactFiles) {
    const parsed = parseAudit(file);
    if (parsed) audits.push(parsed);
  }

  console.log(`✅ Parsed ${audits.length} route audit(s)`);

  // Compute today's aggregate
  const stats = computeStats(audits);
  console.log(`📊 Accessibility: median=${stats?.median?.toFixed(1)||'N/A'}, min=${stats?.min?.toFixed(1)||'N/A'}, failing=${stats?.failing || 0} routes`);

  // Load history and compare
  const history = loadHistory();
  const lastEntry = history.entries[history.entries.length - 1];
  const previousMedian = lastEntry?.stats?.median;
  const alerts = [];

  if (previousMedian !== undefined && stats.median !== null) {
    const drop = previousMedian - stats.median;
    if (drop > SCORE_DROP_THRESHOLD) {
      alerts.push(`⚠️ Median accessibility score dropped by ${drop.toFixed(1)} points (${previousMedian} → ${stats.median})`);
    }
  }

  if (stats.failing > 0) {
    alerts.push(`🚨 ${stats.failing} route(s) failing accessibility (score < ${FAILURE_THRESHOLD})`);
  }

  // Build today's entry
  const entry = {
    date: todayStr(),
    timestamp: nowISO(),
    stats,
    routeCount: audits.length,
    alerts: alerts
  };

  history.entries.push(entry);
  saveHistory(history);

  // Save current scorecard
  fs.writeFileSync(SCORECARD_PATH, JSON.stringify(entry, null, 2));

  // Console summary
  console.log('\n📋 Summary:');
  console.log(`   Routes analyzed: ${audits.length}`);
  console.log(`   Median a11y score: ${stats?.median?.toFixed(1) || 'N/A'}/100`);
  console.log(`   Failing routes (<${FAILURE_THRESHOLD}): ${stats?.failing || 0}`);
  console.log(`   Alerts: ${alerts.length}\n`);

  if (alerts.length > 0) {
    for (const a of alerts) console.log(`   ${a}`);
    console.log('');
    process.exit(1);
  } else {
    console.log('✅ No accessibility regressions detected.\n');
    process.exit(0);
  }
}

main();
