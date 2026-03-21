#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * MTTR SLO guard for automation fingerprint incidents.
 *
 * Reads:
 *  - automation/reports/automation-open-issues-index-latest.json
 * Writes:
 *  - automation/reports/mttr-slo-guard-state.json
 *  - automation/reports/mttr-slo-guard-latest.json
 *
 * Env:
 *  - MTTR_SLO_CRITICAL_HOURS (default: 48)
 *  - MTTR_SLO_WARNING_HOURS (default: 24)
 *  - MTTR_SLO_CRITICAL_STREAK (default: 2)
 */
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = process.cwd();
const REPORT = path.join(ROOT, 'automation', 'reports', 'automation-open-issues-index-latest.json');
const STATE = path.join(ROOT, 'automation', 'reports', 'mttr-slo-guard-state.json');
const OUT = path.join(ROOT, 'automation', 'reports', 'mttr-slo-guard-latest.json');
const BODY = path.join(ROOT, 'automation', 'reports', 'mttr-slo-critical-body.md');

function readJson(p, fallback = null) {
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return fallback;
  }
}

function writeJson(p, payload) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
}

function classify(avgHours, warning, critical) {
  if (avgHours == null || !Number.isFinite(avgHours)) return 'unknown';
  if (avgHours >= critical) return 'critical';
  if (avgHours >= warning) return 'warning';
  return 'healthy';
}

function runNode(script, extraEnv) {
  return spawnSync('node', [script], {
    cwd: ROOT,
    encoding: 'utf8',
    env: { ...process.env, ...(extraEnv || {}) },
  });
}

function main() {
  const criticalHours = Math.max(1, Number(process.env.MTTR_SLO_CRITICAL_HOURS || 48));
  const warningHours = Math.max(1, Number(process.env.MTTR_SLO_WARNING_HOURS || 24));
  const streakThreshold = Math.max(1, Number(process.env.MTTR_SLO_CRITICAL_STREAK || 2));

  const idx = readJson(REPORT, {});
  const mttr = idx?.mttr || {};
  const avgHours = typeof mttr.avgHours === 'number' ? mttr.avgHours : null;
  const samples = Number(mttr.samples || 0);
  const band = classify(avgHours, warningHours, criticalHours);

  const prev = readJson(STATE, {
    consecutiveCritical: 0,
    consecutiveHealthyOrWarning: 0,
  });

  const consecutiveCritical = band === 'critical' ? Number(prev.consecutiveCritical || 0) + 1 : 0;
  const consecutiveHealthyOrWarning = band !== 'critical' ? Number(prev.consecutiveHealthyOrWarning || 0) + 1 : 0;

  const top = Array.isArray(mttr.byFingerprint) ? mttr.byFingerprint.slice(0, 8) : [];

  const snapshot = {
    generatedAt: new Date().toISOString(),
    warningHours,
    criticalHours,
    streakThreshold,
    mttr: { avgHours, samples, band },
    consecutiveCritical,
    consecutiveHealthyOrWarning,
    topFingerprints: top,
  };

  writeJson(STATE, {
    updatedAt: snapshot.generatedAt,
    warningHours,
    criticalHours,
    consecutiveCritical,
    consecutiveHealthyOrWarning,
    lastBand: band,
    lastAvgHours: avgHours,
  });
  writeJson(OUT, snapshot);

  if (band === 'critical' && consecutiveCritical >= streakThreshold) {
    const body = [
      '## MTTR SLO critical breach',
      '',
      '- **Dedupe key:** `automation-mttr-slo-critical`',
      `- **Avg MTTR:** ${avgHours ?? 'n/a'}h`,
      `- **Samples:** ${samples}`,
      `- **Critical threshold:** ${criticalHours}h`,
      `- **Critical streak:** ${consecutiveCritical} (threshold ${streakThreshold})`,
      '',
      '### Top MTTR fingerprints',
      top.length ? top.map((r) => `- ${r.label}: ${r.avgHours}h (${r.samples} samples)`).join('\n') : '- none',
      '',
      `- Workflow run: ${(process.env.GITHUB_SERVER_URL || 'https://github.com')}/${process.env.GITHUB_REPOSITORY || ''}/actions/runs/${process.env.GITHUB_RUN_ID || ''}`,
    ].join('\n');
    fs.writeFileSync(BODY, `${body}\n`, 'utf8');

    const res = runNode('scripts/automation/gh-issue-dedupe-or-create.cjs', {
      ISSUE_TITLE: 'Automation MTTR SLO critical breach',
      ISSUE_BODY_FILE: BODY,
      ISSUE_FINGERPRINT: 'automation-mttr-slo-critical',
      ISSUE_LABELS: 'bug,automation,automation-slo-critical',
      COOLDOWN_HOURS: '12',
    });
    if (res.status !== 0) {
      console.warn('mttr-slo-guard: issue dedupe failed', res.stderr || res.stdout);
    } else {
      console.log('mttr-slo-guard: critical issue ensured');
    }
  }

  if (band !== 'critical' && consecutiveHealthyOrWarning >= 2) {
    const res = runNode('scripts/automation/gh-issue-close-on-recovery.cjs', {
      ISSUE_FINGERPRINT: 'automation-mttr-slo-critical',
      CLOSE_COMMENT: `Auto-closing: MTTR SLO recovered to ${band} (${avgHours ?? 'n/a'}h).`,
    });
    if (res.status !== 0) {
      console.warn('mttr-slo-guard: close-on-recovery failed', res.stderr || res.stdout);
    }
  }

  console.log(
    'mttr-slo-guard:',
    JSON.stringify({ band, avgHours, samples, consecutiveCritical, consecutiveHealthyOrWarning }),
  );
}

main();
