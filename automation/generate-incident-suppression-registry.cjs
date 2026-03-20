#!/usr/bin/env node
/**
 * Cross-workflow incident suppression registry: open-issue counts, breach streaks,
 * self-tuned recommended cooldown hours, and domain hints for severity orchestration.
 * Consumed by GitHub Actions issue workflows via automation/reports/incident-suppression-registry-latest.json
 */
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, 'reports', 'incident-suppression-registry-latest.json');

function ghIssueCount(titleFragment) {
  try {
    const out = execFileSync(
      'gh',
      [
        'issue',
        'list',
        '--state',
        'open',
        '--search',
        `in:title "${String(titleFragment).replace(/"/g, '')}"`,
        '--json',
        'number',
        '--jq',
        'length',
      ],
      { encoding: 'utf8' },
    );
    return Math.max(0, parseInt(String(out).trim(), 10) || 0);
  } catch {
    return 0;
  }
}

function readJsonSafe(p) {
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return null;
  }
}

function pm2SloUnhealthy() {
  const p = path.join(__dirname, 'reports', 'pm2-slo-latest.json');
  const j = readJsonSafe(p);
  if (!j) return false;
  return Number(j.unhealthyCount || 0) > 0;
}

function pm2RestartUnhealthy() {
  const p = path.join(__dirname, 'reports', 'pm2-restart-guardian-latest.json');
  const j = readJsonSafe(p);
  if (!j) return false;
  return Number(j.unhealthyCount || 0) > 0;
}

function openclawUnhealthy() {
  const p = path.join(__dirname, 'reports', 'openclaw-autonomous-app-improver-latest.json');
  const j = readJsonSafe(p);
  if (!j) return false;
  const checks = [
    Number(j.contractFailures || 0) >= 1,
    Number(j.lowValueCycles || 0) >= 8,
    Number(j.parseFailures || 0) >= 8,
    Number(j.failures || 0) > Number(j.successes || 0) + 8,
  ];
  return checks.some(Boolean);
}

function openclawSlaBreached() {
  const p = path.join(__dirname, 'reports', 'openclaw-autonomous-app-improver-latest.json');
  const j = readJsonSafe(p);
  if (!j) {
    return true;
  }
  const ts = Date.parse(j.updatedAt || '');
  if (!Number.isFinite(ts)) {
    return true;
  }
  const ageSeconds = Math.floor((Date.now() - ts) / 1000);
  const failures = Number(j.failures || 0);
  const successes = Number(j.successes || 0);
  const failureOk = failures <= successes + 5;
  return !(ageSeconds <= 5400 && failureOk);
}

function streak(prev, unhealthy) {
  const n = Number(prev || 0);
  if (unhealthy) {
    return n + 1;
  }
  return 0;
}

function clamp(n, lo, hi) {
  return Math.min(hi, Math.max(lo, n));
}

function main() {
  const prev = readJsonSafe(OUT) || {};
  const prevDomains = prev.domains || {};

  const openIssueCounts = {
    openclaw: ghIssueCount('Openclaw incident: sustained unhealthy autonomous cycles'),
    pm2:
      ghIssueCount('PM2 SLO breach detected') +
      ghIssueCount('PM2 restart guardian alert'),
    sla: ghIssueCount('Openclaw freshness SLA breach'),
  };

  const totalOpen =
    openIssueCounts.openclaw + openIssueCounts.pm2 + openIssueCounts.sla;

  const dPm2Slo = {
    breachStreak: streak(prevDomains.pm2Slo?.breachStreak, pm2SloUnhealthy()),
    openIssueCount: ghIssueCount('PM2 SLO breach detected'),
  };
  const dPm2Restart = {
    breachStreak: streak(prevDomains.pm2Restart?.breachStreak, pm2RestartUnhealthy()),
    openIssueCount: ghIssueCount('PM2 restart guardian alert'),
  };
  const dOpenclaw = {
    breachStreak: streak(prevDomains.openclawIncident?.breachStreak, openclawUnhealthy()),
    openIssueCount: ghIssueCount('Openclaw incident: sustained unhealthy autonomous cycles'),
  };
  const dSla = {
    breachStreak: streak(prevDomains.openclawSla?.breachStreak, openclawSlaBreached()),
    openIssueCount: ghIssueCount('Openclaw freshness SLA breach'),
  };

  const maxStreak = Math.max(
    dPm2Slo.breachStreak,
    dPm2Restart.breachStreak,
    dOpenclaw.breachStreak,
    dSla.breachStreak,
  );

  let recommended = Number(prev.recommendedCooldownHours || prev.cooldownHours || 6);
  const prevTotal = Number(prev.totalOpenIncidents ?? prev.openIssueCounts?.total ?? -1);
  if (!Number.isFinite(recommended) || recommended <= 0) {
    recommended = 6;
  }

  if (prevTotal >= 0) {
    if (totalOpen > prevTotal) {
      recommended = clamp(recommended + 1, 4, 24);
    } else if (totalOpen < prevTotal) {
      recommended = clamp(recommended - 1, 4, 24);
    }
  }

  if (maxStreak >= 3) {
    recommended = clamp(Math.max(recommended, 12), 4, 24);
  }
  if (totalOpen >= 6) {
    recommended = clamp(recommended + 2, 4, 24);
  }

  const noiseLevel =
    totalOpen >= 6 ? 'high' : totalOpen >= 3 ? 'medium' : 'low';

  const openclawCooldownHours = clamp(Math.max(recommended, 12), 4, 24);
  const slaCooldownHours = clamp(Math.max(recommended, 12), 4, 24);

  const next = {
    version: 2,
    generatedAt: new Date().toISOString().replace(/\.\d{3}Z$/, 'Z'),
    openIssueCounts,
    totalOpenIncidents: totalOpen,
    recommendedCooldownHours: recommended,
    cooldownHours: recommended,
    openclawCooldownHours,
    slaCooldownHours,
    domains: {
      pm2Slo: dPm2Slo,
      pm2Restart: dPm2Restart,
      openclawIncident: dOpenclaw,
      openclawSla: dSla,
    },
    tuning: {
      noiseLevel,
      maxBreachStreak: maxStreak,
      reason:
        maxStreak >= 3
          ? 'Sustained breach streak — elevated cooldown floor.'
          : totalOpen > (prevTotal >= 0 ? prevTotal : 0)
            ? 'Open incident count increased — slightly longer cooldown.'
            : totalOpen < (prevTotal >= 0 ? prevTotal : 0)
              ? 'Fewer open incidents — slightly shorter cooldown.'
              : 'Steady state.',
    },
    notes:
      'Cross-workflow suppression: workflows should read recommendedCooldownHours; OpenClaw/SLA-specific steps may use max(6, recommendedCooldownHours).',
  };

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, `${JSON.stringify(next, null, 2)}\n`, 'utf8');
  console.log('Wrote', OUT, 'recommendedCooldownHours=', recommended);
}

main();
