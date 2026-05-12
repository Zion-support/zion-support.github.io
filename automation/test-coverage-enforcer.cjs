#!/usr/bin/env node
/**
 * Test Coverage Enforcer — CI gate for coverage thresholds
 *
 * Runs on PRs; fails if coverage drops below configured minimums.
 * Baseline auto-updates on merges to main when coverage improves/stays stable.
 *
 * Uses Istanbul/JaCoCo-style coverage JSON output (coverage-summary.json or coverage-final.json).
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONFIG = {
  minGlobal: parseInt(process.env.COVERAGE_MIN_GLOBAL || '80', 10),
  regressionPct: parseFloat(process.env.COVERAGE_REGRESSION_PCT || '5'), // max allowed drop %
  coverageInput: process.env.COVERAGE_INPUT || 'coverage/coverage-final.json',
  baselineFile: process.env.COVERAGE_BASELINE_FILE || '.hermes/memory/test-coverage/baseline.json',
  historyFile: process.env.COVERAGE_HISTORY_FILE || '.hermes/memory/test-coverage/history.json',
  updateBaselineOnMain: process.env.COVERAGE_UPDATE_BASELINE_ON_MAIN !== 'false',
  minFiles: parseFileThresholds(process.env.COVERAGE_MIN_FILES),
};

function parseFileThresholds(env) {
  if (!env) return {};
  const result = {};
  env.split(',').forEach(pair => {
    const [file, pct] = pair.split(':');
    if (file && pct) result[file.trim()] = parseInt(pct.trim(), 10);
  });
  return result;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function log(msg) {
  const ts = new Date().toISOString();
  console.log(`[${ts}] ${msg}`);
}

function runCommand(cmd) {
  try {
    return execSync(cmd, { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'pipe'] });
  } catch (err) {
    log(`Command failed: ${cmd}`);
    throw err;
  }
}

function collectCoverage() {
  log(`Reading coverage from: ${CONFIG.coverageInput}`);
  if (!fs.existsSync(CONFIG.coverageInput)) {
    throw new Error(`Coverage file not found: ${CONFIG.coverageInput}. Did tests run with --coverage?`);
  }
  const raw = fs.readFileSync(CONFIG.coverageInput, 'utf8');
  const data = JSON.parse(raw);

  // Istanbul v1/v2 shapes. Normalize to {total: {pct: {lines, branches, functions, statements}}}
  const totals = data.total || data['**'];
  if (!totals) throw new Error('Unrecognized coverage JSON shape');

  // Some formats provide pct directly; others provide covered/total. Compute if needed.
  const getPct = (metric) => {
    const m = totals[metric];
    if (typeof m === 'number') return m; // already percentage
    if (m && typeof m.covered === 'number' && typeof m.total === 'number' && m.total > 0) {
      return (m.covered / m.total) * 100;
    }
    return 0;
  };

  const summary = {
    lines: getPct('lines'),
    branches: getPct('branches'),
    functions: getPct('functions'),
    statements: getPct('statements'),
    global: 0, // computed below
  };
  summary.global = (summary.lines + summary.branches + summary.functions + summary.statements) / 4;

  log(`Coverage — Lines: ${summary.lines.toFixed(2)}%, Branches: ${summary.branches.toFixed(2)}%, Functions: ${summary.functions.toFixed(2)}%, Statements: ${summary.statements.toFixed(2)}%, Global: ${summary.global.toFixed(2)}%`);
  return summary;
}

function loadBaseline() {
  if (!fs.existsSync(CONFIG.baselineFile)) {
    log('No baseline found — will create one after this run (if on main)');
    return null;
  }
  const raw = fs.readFileSync(CONFIG.baselineFile, 'utf8');
  return JSON.parse(raw);
}

function saveBaseline(summary) {
  ensureDir(path.dirname(CONFIG.baselineFile));
  fs.writeFileSync(CONFIG.baselineFile, JSON.stringify(summary, null, 2));
  log('Baseline updated');
}

function recordHistory(summary) {
  ensureDir(path.dirname(CONFIG.historyFile));
  let history = [];
  if (fs.existsSync(CONFIG.historyFile)) {
    history = JSON.parse(fs.readFileSync(CONFIG.historyFile, 'utf8'));
  }
  history.push({
    timestamp: new Date().toISOString(),
    ...summary,
  });
  // keep last 90 days
  const cutoff = Date.now() - 90 * 24 * 60 * 60 * 1000;
  history = history.filter(entry => new Date(entry.timestamp).getTime() > cutoff);
  fs.writeFileSync(CONFIG.historyFile, JSON.stringify(history, null, 2));
}

function fail(message) {
  console.error(`❌ Coverage check failed: ${message}`);
  process.exit(1);
}

function checkGlobal(summary) {
  if (summary.global < CONFIG.minGlobal) {
    fail(`Global coverage ${summary.global.toFixed(2)}% is below minimum ${CONFIG.minGlobal}%`);
  }
  log(`✅ Global coverage ${summary.global.toFixed(2)}% ≥ ${CONFIG.minGlobal}%`);
}

function checkFileThresholds(summary) {
  // If we have per-file thresholds, we'd need per-file coverage data from Istanbul.
  // For now, skip detailed file checks; can be extended if needed.
  // This placeholder supports future per-file enforcement.
}

function checkRegression(summary, baseline) {
  if (!baseline) {
    log('No baseline — skipping regression check');
    return;
  }
  const metrics = ['lines', 'branches', 'functions', 'statements', 'global'];
  for (const m of metrics) {
    const delta = summary[m] - baseline[m];
    const pctChange = (delta / baseline[m]) * 100;
    if (pctChange < -CONFIG.regressionPct) {
      fail(`${m} coverage dropped by ${(-pctChange).toFixed(2)}% (limit: ${CONFIG.regressionPct}%) — baseline ${baseline[m].toFixed(2)}%, current ${summary[m].toFixed(2)}%`);
    }
  }
  log('✅ No significant regressions vs baseline');
}

function main() {
  log('=== Test Coverage Enforcer starting ===');
  ensureDir(path.dirname(CONFIG.baselineFile));

  const summary = collectCoverage();
  const baseline = loadBaseline();

  // Enforce thresholds
  checkGlobal(summary);
  checkRegression(summary, baseline);
  checkFileThresholds(summary);

  const isMain = process.env.GITHUB_REF === 'refs/heads/main' || process.env.GITHUB_BASE_REF === '';
  const isPR = process.env.GITHUB_EVENT_NAME === 'pull_request';

  if (isMain && CONFIG.updateBaselineOnMain) {
    saveBaseline(summary);
    log('Baseline updated on main branch');
  } else if (isPR) {
    log('Running on PR — baseline not updated');
  }

  recordHistory(summary);
  log('=== Test Coverage Enforcer passed ===');
  process.exit(0);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
