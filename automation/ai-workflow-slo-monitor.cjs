'use strict';

// Read-only measurements. This collector never changes workflows or GitHub issues.
const { writeReport } = require('./report-size-budget-guard.cjs');
const FAILURE = new Set(['failure', 'timed_out', 'action_required', 'startup_failure', 'stale']);
const EXCLUDED = new Set(['cancelled', 'skipped', 'neutral']);
const ACTIVE = new Set(['queued', 'in_progress', 'requested', 'waiting', 'pending']);
const SCHEMA = 'zion.workflow-slo.v1';

function fail(code) { throw Object.assign(new Error(code), { code }); }
function number(value, fallback, min, max, integer = false) {
  const raw = value === undefined ? fallback : value;
  const result = Number(raw);
  if (String(raw).trim() === '' || !Number.isFinite(result) || result < min || result > max || (integer && !Number.isInteger(result))) fail('invalid_configuration');
  return result;
}
function config(env = process.env, now = new Date()) {
  const repository = env.GITHUB_REPOSITORY;
  const branch = env.SLO_BRANCH || 'main';
  if (typeof repository !== 'string' || !/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repository)) fail('invalid_repository');
  if (typeof branch !== 'string' || branch.length > 255 || !branch.trim() || /[\u0000-\u0020\u007f]/.test(branch)) fail('invalid_branch');
  const end = Math.floor(now.getTime() / 1000);
  if (!Number.isSafeInteger(end)) fail('invalid_clock');
  const lookbackDays = number(env.SLO_LOOKBACK_DAYS, 14, 1, 90, true);
  return {
    repository, branch, lookbackDays, start: end - lookbackDays * 86400, end,
    minRuns: number(env.SLO_MIN_RUNS_FOR_ALERT, 5, 1, 100000, true),
    failureRate: number(env.SLO_FAILURE_RATE_ALERT, 0.15, 0, 1),
    p95Minutes: number(env.SLO_P95_MINUTES_ALERT, 20, 0.01, 10080),
    maxRequests: number(env.SLO_MAX_REQUESTS, 500, 1, 1000, true),
  };
}
const iso = seconds => new Date(seconds * 1000).toISOString().replace('.000Z', 'Z');

function githubClient(cfg, token, request = fetch) {
  if (!token || typeof token !== 'string') fail('missing_github_token');
  return async (start, end, page) => {
    const query = new URLSearchParams({ branch: cfg.branch, created: `${iso(start)}..${iso(end)}`, per_page: '100', page: String(page) });
    const url = `https://api.github.com/repos/${cfg.repository}/actions/runs?${query}`;
    try {
      const response = await request(url, {
        method: 'GET', redirect: 'error', signal: AbortSignal.timeout(20000),
        headers: { Accept: 'application/vnd.github+json', Authorization: `Bearer ${token}`, 'X-GitHub-Api-Version': '2022-11-28', 'User-Agent': 'Zion-Workflow-SLO/1.0' },
      });
      if (!response.ok) fail(`github_http_${response.status}`);
      return await response.json();
    } catch (error) {
      if (/^github_http_\d{3}$/.test(error.code || '')) throw error;
      // Network errors can contain request details. Never persist their messages.
      fail('github_request_failed');
    }
  };
}

async function collect(cfg, client) {
  let requests = 0;
  const runs = new Map();
  const deadline = Date.now() + 8 * 60 * 1000;
  async function page(start, end, n) {
    if (++requests > cfg.maxRequests || Date.now() > deadline) fail('collection_limit_reached');
    const data = await client(start, end, n);
    if (!data || !Number.isSafeInteger(data.total_count) || data.total_count < 0 || !Array.isArray(data.workflow_runs) || data.workflow_runs.length > 100) fail('invalid_github_response');
    return data;
  }
  async function window(start, end) {
    const first = await page(start, end, 1);
    function validRun(run) {
      const created = Date.parse(run?.created_at) / 1000;
      if (!Number.isSafeInteger(run?.id) || run.id <= 0 || !Number.isSafeInteger(created) || created < start || created > end || run.head_branch !== cfg.branch) fail('invalid_or_duplicate_run');
    }
    // Filtered Actions searches expose at most 1,000 results. Split instead of
    // silently reporting only the first 1,000. Keep second boundaries disjoint.
    if (first.total_count >= 1000) {
      if (start === end) fail('unsplittable_search_limit');
      if (first.workflow_runs.length !== 100) fail('incomplete_page');
      const parentIds = new Set();
      for (const run of first.workflow_runs) {
        validRun(run);
        if (parentIds.has(run.id)) fail('invalid_or_duplicate_run');
        parentIds.add(run.id);
      }
      const before = runs.size;
      const middle = Math.floor((start + end) / 2);
      await window(start, middle);
      await window(middle + 1, end);
      // The parent's count may itself be capped, but its lower bound and its
      // visible IDs must still be covered. Never discard contradictory evidence.
      if (runs.size - before < first.total_count || [...parentIds].some(id => !runs.has(id))) fail('incomplete_split_window');
      return;
    }
    const count = first.total_count;
    const local = new Map();
    const pages = Math.max(1, Math.ceil(count / 100));
    for (let n = 1; n <= pages; n++) {
      const data = n === 1 ? first : await page(start, end, n);
      if (data.total_count !== count) fail('pagination_changed');
      const expected = Math.min(100, count - (n - 1) * 100);
      if (data.workflow_runs.length !== expected) fail('incomplete_page');
      for (const run of data.workflow_runs) {
        validRun(run);
        if (local.has(run.id) || runs.has(run.id)) fail('invalid_or_duplicate_run');
        local.set(run.id, run);
      }
    }
    if (local.size !== count) fail('incomplete_window');
    for (const [id, run] of local) runs.set(id, run);
  }
  await window(cfg.start, cfg.end);
  return { runs: [...runs.values()], requests };
}

function percentile95(values) {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.ceil(sorted.length * 0.95) - 1];
}

function summarize(cfg, sample) {
  const groups = new Map();
  const totals = { observedRuns: sample.runs.length, eligibleRuns: 0, failedRuns: 0, activeRuns: 0, excludedRuns: 0 };
  for (const run of sample.runs) {
    if (!Number.isSafeInteger(run.workflow_id) || run.workflow_id <= 0 || typeof run.name !== 'string') fail('invalid_workflow_identity');
    const name = run.name.replace(/[\u0000-\u001f\u007f]/g, ' ').trim();
    if (!name) fail('invalid_workflow_identity');
    let group = groups.get(run.workflow_id);
    if (!group) {
      // Generated Dependabot names can exceed 500 characters. Bound the label,
      // not the measured population; workflow_id remains the grouping identity.
      group = { workflowId: run.workflow_id, name: name.slice(0, 500), nameTruncated: name.length > 500, observedRuns: 0, totalRuns: 0, failedRuns: 0, activeRuns: 0, excludedRuns: 0, durations: [] };
      groups.set(run.workflow_id, group);
    }
    group.observedRuns++;
    if (ACTIVE.has(run.status)) { group.activeRuns++; totals.activeRuns++; continue; }
    if (run.status !== 'completed') fail('unknown_run_status');
    if (EXCLUDED.has(run.conclusion)) { group.excludedRuns++; totals.excludedRuns++; continue; }
    if (run.conclusion !== 'success' && !FAILURE.has(run.conclusion)) fail('unknown_run_conclusion');
    const started = Date.parse(run.run_started_at), updated = Date.parse(run.updated_at), created = Date.parse(run.created_at);
    if (![started, updated, created].every(Number.isFinite) || started < created || updated < started) fail('invalid_run_timestamps');
    const minutes = (updated - started) / 60000;
    group.durations.push(minutes);
    group.totalRuns++;
    totals.eligibleRuns++;
    if (FAILURE.has(run.conclusion)) { group.failedRuns++; totals.failedRuns++; }
  }
  const workflows = [...groups.values()].map(({ durations, ...group }) => {
    const failureRate = group.totalRuns ? group.failedRuns / group.totalRuns : null;
    const p95Minutes = percentile95(durations);
    const eligible = group.totalRuns >= cfg.minRuns;
    const reasons = [];
    if (eligible && failureRate >= cfg.failureRate) reasons.push('failure_rate');
    if (eligible && p95Minutes >= cfg.p95Minutes) reasons.push('elapsed_p95');
    return { ...group, failureRate, p95Minutes, eligible, reasons };
  }).sort((a, b) => a.workflowId - b.workflowId);
  const eligibleWorkflows = workflows.filter(w => w.eligible).length;
  return {
    schema: SCHEMA, status: 'completed', complete: true,
    repository: cfg.repository, branch: cfg.branch,
    window: { createdFrom: iso(cfg.start), createdThrough: iso(cfg.end) },
    thresholds: { minRuns: cfg.minRuns, failureRate: cfg.failureRate, p95Minutes: cfg.p95Minutes },
    definitions: {
      population: 'All API-visible workflow runs created in the stated branch/window; only the latest API state/attempt is observed. This is not a production availability measure.',
      failureRate: 'failure, timed_out, action_required, startup_failure and stale / (those conclusions plus success). Cancelled, skipped, neutral and active runs are counted separately and excluded.',
      p95Minutes: 'Nearest-rank p95 of (updated_at - run_started_at) for eligible completed runs. This is an API timestamp elapsed-time proxy, not summed job time; updated_at can include later run changes.',
    },
    requests: sample.requests, totals, eligibleWorkflows,
    recoveryEligible: workflows.length > 0 && workflows.every(w => w.eligible),
    workflows, flagged: workflows.filter(w => w.reasons.length), errors: [],
  };
}

function markdown(report) {
  const lines = ['# Workflow SLO observations', '', `Status: ${report.status}`, `Generated: ${report.generatedAt}`, ''];
  if (!report.complete) return lines.concat('Collection is incomplete. No healthy result, zero-failure rate or recovery is inferred.', '', `Error code: ${report.errors[0].code}`, '').join('\n');
  lines.push(`Repository: ${report.repository}`, `Branch: ${report.branch}`, `Created window: ${report.window.createdFrom} through ${report.window.createdThrough}`, '',
    `Observed runs: ${report.totals.observedRuns}; eligible completed runs: ${report.totals.eligibleRuns}; eligible workflows: ${report.eligibleWorkflows}; flagged workflows: ${report.flagged.length}.`, '',
    report.definitions.population, '', report.definitions.failureRate, '', report.definitions.p95Minutes, '',
    '| Workflow ID | Eligible runs | Failures | Failure rate | Elapsed p95 (min) | Threshold flags |', '|---|---:|---:|---:|---:|---|');
  for (const w of report.workflows) lines.push(`| ${w.workflowId} | ${w.totalRuns} | ${w.failedRuns} | ${w.failureRate === null ? 'unmeasured' : (w.failureRate * 100).toFixed(2) + '%'} | ${w.p95Minutes === null ? 'unmeasured' : w.p95Minutes.toFixed(2)} | ${w.eligible ? (w.reasons.join(', ') || 'none') : 'insufficient sample'} |`);
  return lines.concat('', 'No workflows, schedules, repository files or issues are changed by this collector.', '').join('\n');
}

async function main({ root = process.cwd(), env = process.env, now = new Date(), client } = {}) {
  let report;
  try {
    const cfg = config(env, now);
    report = summarize(cfg, await collect(cfg, client || githubClient(cfg, env.GITHUB_TOKEN || env.GH_TOKEN)));
  } catch (error) {
    const code = typeof error.code === 'string' && /^(invalid_[a-z_]+|missing_github_token|github_(http_\d{3}|request_failed)|collection_limit_reached|unsplittable_search_limit|pagination_changed|incomplete_(page|window|split_window)|unknown_run_(status|conclusion))$/.test(error.code) ? error.code : 'collection_failed';
    report = { schema: SCHEMA, status: 'error', complete: false, recoveryEligible: false, totals: null, workflows: null, flagged: null, errors: [{ code }] };
  }
  report.collectionStartedAt = now.toISOString();
  report.generatedAt = new Date().toISOString();
  writeReport(root, 'workflow-slo-latest.json', JSON.stringify(report, null, 2) + '\n');
  writeReport(root, 'workflow-slo-latest.md', markdown(report));
  console.log(report.complete ? `Workflow SLO collection complete: ${report.totals.observedRuns} observed runs; ${report.flagged.length} flagged workflows; ${report.requests} API requests.` : `Workflow SLO collection failed: ${report.errors[0].code}. No recovery claimed.`);
  return report.complete ? 0 : 1;
}

if (require.main === module) main().then(code => { process.exitCode = code; }).catch(() => { console.error('Workflow SLO report could not be written.'); process.exitCode = 1; });
module.exports = { config, githubClient, collect, summarize, percentile95, markdown, main };
