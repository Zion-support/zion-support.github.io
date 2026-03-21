#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Merge PM2-related reports into one digest JSON (+ optional Telegram).
 *
 * Usage:
 *   node automation/ai-pm2-ops-digest-agent.cjs
 *   node automation/ai-pm2-ops-digest-agent.cjs --telegram
 *
 * Env:
 *   PM2_OPS_DIGEST_CI=1 — skip embedding full SLO/restart snapshots if missing (CI-friendly)
 */
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = process.cwd();
const REPORTS = path.join(ROOT, 'automation', 'reports');
const OUT = path.join(REPORTS, 'pm2-ops-digest-latest.json');

function readJson(rel) {
  const p = path.join(REPORTS, rel);
  try {
    if (!fs.existsSync(p)) return null;
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return null;
  }
}

function budgetSummary() {
  const p = path.join(REPORTS, 'pm2-report-budget-guard-latest.json');
  if (!fs.existsSync(p)) return { status: 'no_scan' };
  try {
    const j = JSON.parse(fs.readFileSync(p, 'utf8'));
    return {
      status: j.oversize && j.oversize.length ? 'oversize' : 'ok',
      oversizeCount: j.oversize ? j.oversize.length : 0,
      maxFileKb: j.maxFileKb,
    };
  } catch {
    return { status: 'error' };
  }
}

function buildDigest(ciMode) {
  const contention = readJson('pm2-deploy-contention-latest.json');
  const drift = readJson('pm2-config-drift-guard-latest.json');
  const slo = readJson('pm2-slo-latest.json');
  const restart = readJson('pm2-restart-guardian-latest.json');

  const digest = {
    generatedAt: new Date().toISOString(),
    ciMode: !!ciMode,
    contention: contention
      ? {
          riskScore: contention.riskScore,
          riskLevel: contention.riskLevel,
          threshold: contention.threshold,
        }
      : null,
    drift: drift
      ? {
          driftCount: drift.driftCount ?? 0,
        }
      : null,
    slo:
      slo && !ciMode
        ? {
            unhealthyCount: slo.unhealthyCount,
            warningCount: slo.warningCount,
            criticalCount: slo.criticalCount,
            totalApps: slo.totalApps,
          }
        : slo && ciMode
          ? { note: 'skipped_in_ci_no_pm2' }
          : null,
    restartGuardian:
      restart && !ciMode
        ? {
            unhealthyCount: restart.unhealthyCount,
          }
        : restart && ciMode
          ? { note: 'skipped_in_ci_no_pm2' }
          : null,
    pm2ReportBudget: budgetSummary(),
  };

  const lines = [];
  lines.push('<b>PM2 ops digest</b>');
  if (digest.contention) {
    lines.push(`Contention: ${digest.contention.riskLevel} (${digest.contention.riskScore}/${digest.contention.threshold})`);
  } else lines.push('Contention: (no report)');
  if (digest.drift) {
    lines.push(`Drift: ${digest.drift.driftCount} issue(s)`);
  } else lines.push('Drift: (no report)');
  if (digest.slo && digest.slo.note) {
    lines.push('SLO: CI snapshot — run on PM2 host for live data');
  } else if (digest.slo) {
    lines.push(
      `SLO: unhealthy=${digest.slo.unhealthyCount} critical=${digest.slo.criticalCount} warning=${digest.slo.warningCount}`,
    );
  }
  if (digest.pm2ReportBudget.status === 'oversize') {
    lines.push(`PM2 reports: oversize ${digest.pm2ReportBudget.oversizeCount} file(s)`);
  }

  digest.telegramHtml = lines.join('\n');
  return digest;
}

function main() {
  const ciMode =
    process.argv.includes('--ci') ||
    process.env.PM2_OPS_DIGEST_CI === '1' ||
    process.env.PM2_OPS_DIGEST_CI === 'true';
  const wantTelegram = process.argv.includes('--telegram');

  fs.mkdirSync(REPORTS, { recursive: true });
  const digest = buildDigest(ciMode);
  fs.writeFileSync(OUT, JSON.stringify(digest, null, 2));
  console.log(`Wrote ${path.relative(ROOT, OUT)}`);

  if (wantTelegram) {
    const r = spawnSync(
      process.execPath,
      [path.join(ROOT, 'automation', 'ai-telegram-notification-agent.cjs'), 'send', digest.telegramHtml],
      { cwd: ROOT, stdio: 'inherit', env: process.env },
    );
    if (r.status !== 0) process.exit(1);
  }
}

main();
