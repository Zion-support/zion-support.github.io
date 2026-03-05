#!/usr/bin/env node

/**
 * AI Daily Automation Pipeline
 *
 * Orchestrates key automation agents in sequence for a full daily run.
 * Use via cron (e.g. 6 AM) or GitHub Actions.
 *
 * Pipeline order:
 * 1. Ecosystem intelligence (generate suggestions)
 * 2. Suggestion importer (apply safe suggestions)
 * 3. Content freshness
 * 4. Report aggregator
 * 5. Telegram digest (optional, respects quiet hours)
 *
 * Environment:
 *   SKIP_TELEGRAM=1 - Skip Telegram digest
 *   DRY_RUN=1 - Log steps only, don't execute
 */

const { execSync } = require('child_process');
const path = require('path');

const ROOT = process.cwd();
const DRY_RUN = process.env.DRY_RUN === '1';
const SKIP_TELEGRAM = process.env.SKIP_TELEGRAM === '1';

function log(msg) {
  const ts = new Date().toISOString();
  console.log(`[DailyPipeline] ${ts} | ${msg}`);
}

function run(cmd, label) {
  log(`Running: ${label}`);
  if (DRY_RUN) {
    log(`  [DRY] ${cmd}`);
    return { ok: true };
  }
  try {
    execSync(cmd, { cwd: ROOT, stdio: 'inherit' });
    return { ok: true };
  } catch (e) {
    log(`  Failed: ${e.message}`);
    return { ok: false, error: e.message };
  }
}

const steps = [
  ['node automation/ai-ecosystem-intelligence-agent.cjs run', 'Ecosystem Intelligence'],
  ['node automation/ai-suggestion-importer-agent.cjs run', 'Suggestion Importer'],
  ['node automation/ai-broken-link-page-automation.cjs audit', 'Broken Link Audit'],
  ['node automation/ai-content-freshness-agent.cjs run', 'Content Freshness'],
  ['node automation/ai-seo-content-refresh-agent.cjs run', 'SEO Content Refresh'],
  ['node automation/ai-report-aggregator-agent.cjs', 'Report Aggregator'],
];

if (!SKIP_TELEGRAM) {
  steps.push(['node automation/ai-telegram-notification-agent.cjs digest', 'Telegram Digest']);
}

function main() {
  log('=== Daily Automation Pipeline Started ===');
  const results = [];
  for (const [cmd, label] of steps) {
    const r = run(cmd, label);
    results.push({ step: label, ok: r.ok });
    if (!r.ok && !DRY_RUN) {
      log(`Pipeline stopped after failure: ${label}`);
      break;
    }
  }
  log('=== Daily Automation Pipeline Finished ===');
  return results;
}

main();
