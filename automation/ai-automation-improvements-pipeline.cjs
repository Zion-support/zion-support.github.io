#!/usr/bin/env node

/**
 * AI Automation Improvements Pipeline
 *
 * Orchestrates automation health checks and improvements in sequence.
 * Use before deploy or weekly to ensure automations are healthy.
 *
 * Pipeline:
 * 1. Automation audit (agents, workflows, cron)
 * 2. Site link audit (validate live site links)
 * 3. Report aggregator (refresh dashboard)
 *
 * Environment:
 *   CREATE_PAGES=1 - Create missing pages when site link audit finds broken links
 *   SKIP_REPORT=1 - Skip report aggregator step
 *   TRIGGER_FIXES=1 - Run UX auto-fix when app intelligence detects score < 85
 *
 * Runs: Weekly via workflow, or before deploy
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const ROOT = process.cwd();
const CREATE_PAGES = process.env.CREATE_PAGES === '1';
const SKIP_REPORT = process.env.SKIP_REPORT === '1';
const TRIGGER_FIXES = process.env.TRIGGER_FIXES === '1';

function log(msg) {
  const ts = new Date().toISOString();
  console.log(`[AutomationImprovements] ${ts} | ${msg}`);
}

function run(cmd, label) {
  log(`Running: ${label}`);
  try {
    execSync(cmd, { cwd: ROOT, stdio: 'inherit' });
    return { ok: true };
  } catch (e) {
    log(`  Failed: ${e.message}`);
    return { ok: false, error: e.message };
  }
}

function main() {
  log('=== Automation Improvements Pipeline Started ===');

  const results = [];

  const r1 = run('node automation/ai-automation-audit-agent.cjs run', 'Automation Audit');
  results.push({ step: 'automation_audit', ok: r1.ok });

  const r1a = run('node automation/ai-live-site-ux-audit-agent.cjs', 'Live Site UX Audit');
  results.push({ step: 'live_site_ux', ok: r1a.ok });

  const r1b = run('node automation/ai-conversion-funnel-audit-agent.cjs', 'Conversion Funnel Audit');
  results.push({ step: 'conversion_funnel_audit', ok: r1b.ok });

  const r1c = run('node automation/ai-system-intelligence-audit-agent.cjs', 'System Intelligence Audit');
  results.push({ step: 'system_intelligence_audit', ok: r1c.ok });

  const appIntelEnv = TRIGGER_FIXES ? 'TRIGGER_FIXES=1 ' : '';
  const r1d = run(`${appIntelEnv}node automation/ai-app-intelligence-agent.cjs`, 'App Intelligence');
  results.push({ step: 'app_intelligence', ok: r1d.ok });

  const siteLinkCmd = CREATE_PAGES
    ? 'node automation/ai-site-link-audit-automation.cjs run --create-pages'
    : 'node automation/ai-site-link-audit-automation.cjs audit';
  const r2 = run(siteLinkCmd, 'Site Link Audit');
  results.push({ step: 'site_link_audit', ok: r2.ok });

  if (!SKIP_REPORT) {
    const r3 = run('node automation/ai-report-aggregator-agent.cjs', 'Report Aggregator');
    results.push({ step: 'report_aggregator', ok: r3.ok });
  }

  const report = {
    timestamp: new Date().toISOString(),
    pipeline: results,
    summary: {
      totalSteps: results.length,
      successCount: results.filter((r) => r.ok).length,
      failedSteps: results.filter((r) => !r.ok).map((r) => r.step),
    },
  };

  const reportPath = path.join(ROOT, 'automation', 'reports', 'automation-improvements-pipeline-latest.json');
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  log(`Report: ${reportPath}`);

  log('=== Automation Improvements Pipeline Finished ===');

  const failed = results.filter((r) => !r.ok);
  if (failed.length > 0) {
    process.exit(1);
  }
}

main();
