#!/usr/bin/env node
/**
 * Cross-workflow incident suppression registry v3: open-issue counts, breach streaks,
 * EMA-smoothed cooldown hours, deploy/Git correlation, and domain hints for severity orchestration.
 */
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, 'reports', 'incident-suppression-registry-latest.json');
const EMA_ALPHA = Number(process.env.REGISTRY_EMA_ALPHA || 0.35);
if (!Number.isFinite(EMA_ALPHA) || EMA_ALPHA <= 0 || EMA_ALPHA > 1) {
  throw new Error('REGISTRY_EMA_ALPHA must be in (0, 1].');
}

// A failed or capped query must never be interpreted as zero incidents.
const issueCountCache = new Map();
function ghIssueCount(titleFragment) {
  if (issueCountCache.has(titleFragment)) return issueCountCache.get(titleFragment);
  const out = execFileSync('gh', [
    'issue', 'list', '--state', 'open', '--limit', '1000',
    '--search', `in:title "${String(titleFragment).replace(/"/g, '')}"`,
    '--json', 'number',
  ], { encoding: 'utf8', timeout: 60000, stdio: ['ignore', 'pipe', 'pipe'] });
  const issues = JSON.parse(out);
  if (!Array.isArray(issues) || issues.length >= 1000 ||
      issues.some(issue => !Number.isSafeInteger(issue.number) || issue.number < 1)) {
    throw new Error('Incomplete or invalid incident query; registry unchanged.');
  }
  issueCountCache.set(titleFragment, issues.length);
  return issues.length;
}

function readJsonSafe(p) {
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch (error) {
    if (error.code === 'ENOENT') return undefined;
    throw error; // Do not replace corrupted state with a fresh empty snapshot.
  }
}


function requireObject(value, label) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(`Invalid ${label}; registry unchanged.`);
  }
}
function requireNumber(value, label, min = 0, max = Number.MAX_SAFE_INTEGER, integer = false) {
  if (typeof value !== 'number' || !Number.isFinite(value) ||
      value < min || value > max || (integer && !Number.isSafeInteger(value))) {
    throw new Error(`Invalid ${label}; registry unchanged.`);
  }
}
function requireCount(value, label) {
  requireNumber(value, label, 0, Number.MAX_SAFE_INTEGER, true);
}
function validatePrevious(prev) {
  requireObject(prev, 'previous registry');
  if (prev.version !== 3) throw new Error('Unsupported previous registry schema.');
  requireObject(prev.domains, 'domains');
  for (const name of ['pm2Slo', 'pm2Restart', 'openclawIncident', 'openclawSla']) {
    requireObject(prev.domains[name], name);
    requireCount(prev.domains[name].breachStreak, name + '.breachStreak');
    requireCount(prev.domains[name].openIssueCount, name + '.openIssueCount');
  }
  requireObject(prev.noise, 'noise');
  requireNumber(prev.noise.emaOpenIncidents, 'emaOpenIncidents');
  requireNumber(prev.noise.emaAlpha, 'emaAlpha', Number.MIN_VALUE, 1);
  requireCount(prev.noise.rawOpenTotal, 'rawOpenTotal');
  requireObject(prev.openIssueCounts, 'openIssueCounts');
  for (const name of ['openclaw', 'pm2', 'sla']) requireCount(prev.openIssueCounts[name], name);
  requireCount(prev.totalOpenIncidents, 'totalOpenIncidents');
  const total = Object.values(prev.openIssueCounts).reduce((sum, n) => sum + n, 0);
  if (total !== prev.totalOpenIncidents || total !== prev.noise.rawOpenTotal) {
    throw new Error('Inconsistent previous incident totals.');
  }
  for (const name of ['recommendedCooldownHours', 'cooldownHours',
    'openclawCooldownHours', 'slaCooldownHours']) {
    requireNumber(prev[name], name, 4, 24);
  }
}
const telemetryCache = new Map();
function readTelemetry(name, counters, timestamp = false) {
  if (telemetryCache.has(name)) return telemetryCache.get(name);
  const value = readJsonSafe(path.join(__dirname, 'reports', name));
  // Only an absent file is unknown. Present-but-invalid data must preserve the snapshot.
  if (value !== undefined) {
    requireObject(value, name);
    for (const counter of counters) requireCount(value[counter], name + '.' + counter);
    if (timestamp && (typeof value.updatedAt !== 'string' ||
        !Number.isFinite(Date.parse(value.updatedAt)) || Date.parse(value.updatedAt) > Date.now())) {
      throw new Error('Invalid telemetry timestamp.');
    }
  }
  telemetryCache.set(name, value);
  return value;
}
function readOpenclaw() {
  return readTelemetry('openclaw-autonomous-app-improver-latest.json',
    ['contractFailures', 'lowValueCycles', 'parseFailures', 'failures', 'successes'], true);
}

function readDeployStatus() {
  const p = path.join(__dirname, 'reports', 'deploy-status-latest.json');
  const value = readJsonSafe(p);
  if (value !== undefined) requireObject(value, 'deploy status');
  return value;
}

function buildCorrelation(prev) {
  const ds = readDeployStatus();
  const shaRaw = process.env.GITHUB_SHA || ds?.sha || prev?.correlation?.commitSha || null;
  const commitSha = shaRaw && String(shaRaw) !== 'unknown' ? String(shaRaw) : null;
  const runId = process.env.GITHUB_RUN_ID || null;
  const repo = process.env.GITHUB_REPOSITORY || null;
  const workflow = process.env.GITHUB_WORKFLOW || null;
  const server = (process.env.GITHUB_SERVER_URL || 'https://github.com').replace(/\/$/, '');
  const runUrl = repo && runId ? `${server}/${repo}/actions/runs/${runId}` : null;

  return {
    correlationId: runId ? `suppression-reg-${runId}` : `suppression-reg-local-${Date.now()}`,
    registryWorkflowRunId: runId,
    registryWorkflow: workflow || 'AI Incident Suppression Registry',
    repository: repo,
    commitSha,
    workflowRunUrl: runUrl,
    deployStatusSnapshot: ds
      ? {
          source: ds.source ?? null,
          status: ds.status ?? null,
          sha: ds.sha && ds.sha !== 'unknown' ? ds.sha : null,
          runId: ds.runId ?? null,
          workflow: ds.workflow ?? null,
          netlifyDeployId: ds.netlifyDeployId ?? ds.netlify_deploy_id ?? null,
          netlifyDeployUrl: ds.netlifyDeployUrl ?? ds.netlify_deploy_url ?? null,
        }
      : null,
  };
}

function pm2SloUnhealthy() {
  const j = readTelemetry('pm2-slo-latest.json', ['unhealthyCount', 'criticalCount']);
  if (!j) return true; // Missing telemetry is unknown, not healthy.
  return j.unhealthyCount > 0 || j.criticalCount > 0;
}

function pm2RestartUnhealthy() {
  const j = readTelemetry('pm2-restart-guardian-latest.json', ['unhealthyCount']);
  if (!j) return true; // Missing telemetry is unknown, not healthy.
  return j.unhealthyCount > 0;
}

function openclawUnhealthy() {
  const j = readOpenclaw();
  if (!j) return true; // Missing telemetry is unknown, not healthy.
  const checks = [
    j.contractFailures >= 1,
    j.lowValueCycles >= 8,
    j.parseFailures >= 8,
    j.failures > j.successes + 8,
  ];
  return checks.some(Boolean);
}

function openclawSlaBreached() {
  const j = readOpenclaw();
  if (!j) {
    return true;
  }
  const ts = Date.parse(j.updatedAt || '');
  if (!Number.isFinite(ts)) {
    return true;
  }
  const ageSeconds = Math.floor((Date.now() - ts) / 1000);
  const failures = j.failures;
  const successes = j.successes;
  const failureOk = failures <= successes + 5;
  return !(ageSeconds <= 5400 && failureOk);
}

function streak(prev, unhealthy) {
  const n = prev ?? 0;
  if (unhealthy) {
    requireCount(n + 1, 'next breach streak');
    return n + 1;
  }
  return 0;
}

function clamp(n, lo, hi) {
  return Math.min(hi, Math.max(lo, n));
}

function main() {
  const existing = readJsonSafe(OUT);
  if (existing !== undefined) validatePrevious(existing);
  const prev = existing ?? {};
  const prevDomains = prev.domains || {};

  const openIssueCounts = {
    openclaw: ghIssueCount('Openclaw incident: sustained unhealthy autonomous cycles'),
    pm2:
      ghIssueCount('PM2 SLO critical breach detected') +
      ghIssueCount('PM2 SLO warnings (non-critical)') +
      ghIssueCount('PM2 restart guardian alert'),
    sla: ghIssueCount('Openclaw freshness SLA breach'),
  };

  const totalOpen =
    openIssueCounts.openclaw + openIssueCounts.pm2 + openIssueCounts.sla;

  const dPm2Slo = {
    breachStreak: streak(prevDomains.pm2Slo?.breachStreak, pm2SloUnhealthy()),
    openIssueCount: ghIssueCount('PM2 SLO critical breach detected'),
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

  const prevEma = prev.noise?.emaOpenIncidents;
  const emaOpen =
    prevEma === undefined
      ? totalOpen
      : EMA_ALPHA * totalOpen + (1 - EMA_ALPHA) * prevEma;

  let fromEma = 4 + Math.round(emaOpen * 1.35);
  fromEma = clamp(fromEma, 4, 22);
  if (maxStreak >= 3) {
    fromEma = Math.max(fromEma, 12);
  }
  if (totalOpen >= 6) {
    fromEma = Math.min(24, fromEma + 2);
  }

  const safePrev = prev.recommendedCooldownHours ?? 24;
  let recommended = clamp(Math.round(0.42 * fromEma + 0.58 * safePrev), 4, 24);

  // Never ease cooldowns while a required health snapshot is missing.
  const missingTelemetry = [...telemetryCache.values()].some(value => value === undefined);
  if (!existing || missingTelemetry) recommended = Math.max(recommended, clamp(safePrev, 4, 24));

  const noiseLevel =
    emaOpen >= 5 ? 'high' : emaOpen >= 2.5 ? 'medium' : 'low';

  const openclawCooldownHours = clamp(Math.max(recommended, 12), 4, 24);
  const slaCooldownHours = clamp(Math.max(recommended, 12), 4, 24);

  const correlation = buildCorrelation(prev);

  const next = {
    ...prev,
    version: 3,
    generatedAt: new Date().toISOString().replace(/\.\d{3}Z$/, 'Z'),
    correlation,
    noise: {
      emaOpenIncidents: Number(emaOpen.toFixed(3)),
      emaAlpha: EMA_ALPHA,
      rawOpenTotal: totalOpen,
    },
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
          : emaOpen > (prev.noise?.emaOpenIncidents ?? 0)
            ? 'EMA open-incident load increased — slightly longer cooldown.'
            : emaOpen < (prev.noise?.emaOpenIncidents ?? emaOpen)
              ? 'EMA open-incident load decreased — cooldown easing.'
              : 'Steady EMA state.',
    },
    notes:
      'v3: EMA-smoothed cooldowns, workflow/deploy correlation, Netlify fields via deploy-status-latest.json when present.',
  };

  validatePrevious(next); // Reject invalid arithmetic before touching the snapshot.
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  const temporary = `${OUT}.${process.pid}.tmp`;
  try {
    fs.writeFileSync(temporary, `${JSON.stringify(next, null, 2)}\n`, { encoding: 'utf8', flag: 'wx' });
    fs.renameSync(temporary, OUT);
  } finally {
    if (fs.existsSync(temporary)) fs.unlinkSync(temporary);
  }
  console.log('Wrote', OUT, 'recommendedCooldownHours=', recommended, 'emaOpen=', emaOpen);
}

try {
  main();
} catch {
  console.error('Incident registry refresh failed; existing snapshot preserved. Check gh access and JSON inputs.');
  process.exitCode = 1;
}
