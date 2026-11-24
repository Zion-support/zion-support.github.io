'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { config, githubClient, collect, summarize, percentile95, main } = require('../../automation/ai-workflow-slo-monitor.cjs');
const now = new Date('2026-11-24T10:00:00Z');
const env = { GITHUB_REPOSITORY: 'example/project', SLO_BRANCH: 'main' };
const cfg = config(env, now);
const timestamp = seconds => new Date(seconds * 1000).toISOString().replace('.000Z', 'Z');
function run(id, patch = {}) {
  const created = cfg.start + id;
  return { id, workflow_id: 10, name: 'Check', head_branch: 'main', created_at: timestamp(created), run_started_at: timestamp(created + 1), updated_at: timestamp(created + 61), status: 'completed', conclusion: 'success', ...patch };
}
function api(runs, calls = []) {
  return async (start, end, page) => {
    calls.push({ start, end, page });
    const selected = runs.filter(r => Date.parse(r.created_at) / 1000 >= start && Date.parse(r.created_at) / 1000 <= end).sort((a, b) => b.id - a.id);
    return { total_count: Math.min(1000, selected.length), workflow_runs: selected.slice((page - 1) * 100, page * 100) };
  };
}
function temp(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'zion-slo-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  return root;
}
function report(root) { return JSON.parse(fs.readFileSync(path.join(root, 'automation/reports/workflow-slo-latest.json'), 'utf8')); }

test('calculates failure rates, nearest-rank p95 and inclusive thresholds from measured runs', async () => {
  const runs = Array.from({ length: 20 }, (_, i) => run(i + 1, { conclusion: i < 3 ? 'failure' : 'success', updated_at: timestamp(cfg.start + i + 2 + (i + 1) * 60) }));
  const summary = summarize({ ...cfg, p95Minutes: 19 }, await collect(cfg, api(runs)));
  assert.equal(summary.workflows[0].failureRate, 0.15);
  assert.equal(summary.workflows[0].p95Minutes, 19);
  assert.deepEqual(summary.flagged[0].reasons, ['failure_rate', 'elapsed_p95']);
  assert.equal(percentile95([]), null);
  assert.equal(percentile95([6, 2, 1, 3, 4]), 6);
});

test('counts excluded and active outcomes separately and does not alert on insufficient samples', async () => {
  const runs = [run(1, { conclusion: 'failure' }), run(2, { conclusion: 'cancelled' }), run(3, { conclusion: 'skipped' }), run(4, { conclusion: 'neutral' }), run(5, { status: 'queued', conclusion: null }), run(6, { status: 'in_progress', conclusion: null })];
  const summary = summarize(cfg, await collect(cfg, api(runs)));
  assert.deepEqual(summary.totals, { observedRuns: 6, eligibleRuns: 1, failedRuns: 1, activeRuns: 2, excludedRuns: 3 });
  assert.equal(summary.workflows[0].failureRate, 1);
  assert.deepEqual(summary.flagged, []);
  assert.equal(summary.recoveryEligible, false);
});

test('keeps different workflow IDs distinct even when their names match', async () => {
  const runs = [...Array.from({ length: 5 }, (_, i) => run(i + 1)), ...Array.from({ length: 5 }, (_, i) => run(i + 6, { workflow_id: 11, conclusion: 'failure' }))];
  const summary = summarize(cfg, await collect(cfg, api(runs)));
  assert.equal(summary.workflows.length, 2);
  assert.equal(summary.flagged.length, 1);
  assert.equal(summary.flagged[0].workflowId, 11);
});

test('mixed healthy and under-sampled workflows cannot certify recovery', async () => {
  const healthy = Array.from({ length: 5 }, (_, i) => run(i + 1));
  const sparse = run(6, { workflow_id: 11, conclusion: 'failure' });
  const summary = summarize(cfg, await collect(cfg, api([...healthy, sparse])));
  assert.equal(summary.eligibleWorkflows, 1);
  assert.deepEqual(summary.flagged, []);
  assert.equal(summary.recoveryEligible, false);
  const alert = summarize(cfg, await collect(cfg, api([...healthy.map(r => ({ ...r, conclusion: 'failure' })), sparse])));
  assert.equal(alert.recoveryEligible, false);
  assert.equal(alert.flagged.length, 1, 'under-sampling must not suppress a different eligible regression');
});

test('splits capped searches into disjoint windows and reads every page exactly once', async () => {
  const runs = Array.from({ length: 1250 }, (_, i) => run(i + 1));
  const calls = [];
  const sample = await collect(cfg, api(runs, calls));
  assert.equal(sample.runs.length, 1250);
  assert.equal(new Set(sample.runs.map(r => r.id)).size, 1250);
  assert.ok(calls.some(c => c.page > 1));
  assert.ok(calls.some(c => c.start > cfg.start));
  assert.equal(sample.requests, calls.length);
});

test('split children must reconcile the parent lower bound and visible run identities', async () => {
  const parent = Array.from({ length: 100 }, (_, i) => run(i + 1));
  await assert.rejects(collect(cfg, async (start, end) => {
    if (start === cfg.start && end === cfg.end) return { total_count: 1000, workflow_runs: parent };
    return { total_count: start === cfg.start ? 5 : 0, workflow_runs: start === cfg.start ? parent.slice(0, 5) : [] };
  }), /incomplete_split_window/);
  const replacements = Array.from({ length: 1000 }, (_, i) => run(i + 101));
  const childApi = api(replacements);
  await assert.rejects(collect(cfg, async (start, end, page) => {
    if (start === cfg.start && end === cfg.end) return { total_count: 1000, workflow_runs: parent };
    return childApi(start, end, page);
  }), /incomplete_split_window/);
});

test('rejects truncated, changing and duplicate pagination instead of measuring partial samples', async () => {
  await assert.rejects(collect(cfg, async () => ({ total_count: 2, workflow_runs: [run(1)] })), /incomplete_page/);
  await assert.rejects(collect(cfg, async () => ({ total_count: 2, workflow_runs: [run(1), run(1)] })), /invalid_or_duplicate_run/);
  const firstPage = Array.from({ length: 100 }, (_, i) => run(i + 1));
  await assert.rejects(collect(cfg, async (_start, _end, page) => ({ total_count: page === 1 ? 101 : 102, workflow_runs: page === 1 ? firstPage : [run(101), run(102)] })), /pagination_changed/);
});

test('fails at search and request bounds without silently omitting runs', async () => {
  await assert.rejects(collect({ ...cfg, start: cfg.end }, async () => ({ total_count: 1000, workflow_runs: [] })), /unsplittable_search_limit/);
  await assert.rejects(collect({ ...cfg, maxRequests: 1 }, api(Array.from({ length: 101 }, (_, i) => run(i + 1)))), /collection_limit_reached/);
});

test('rejects wrong branches, invalid timestamps, unknown states and malformed API data', async () => {
  await assert.rejects(collect(cfg, async () => ({ total_count: 1, workflow_runs: [run(1, { head_branch: 'another' })] })), /invalid_or_duplicate_run/);
  await assert.rejects(collect(cfg, async () => ({ total_count: '1', workflow_runs: [run(1)] })), /invalid_github_response/);
  assert.throws(() => summarize(cfg, { runs: [run(1, { updated_at: 'invalid' })], requests: 1 }), /invalid_run_timestamps/);
  assert.throws(() => summarize(cfg, { runs: [run(1, { conclusion: null })], requests: 1 }), /unknown_run_conclusion/);
  assert.throws(() => summarize(cfg, { runs: [run(1, { status: 'unexpected' })], requests: 1 }), /unknown_run_status/);
});

test('validates configuration and requires authentication for production collection', () => {
  for (const patch of [{ GITHUB_REPOSITORY: 'evil.test/../../' }, { SLO_LOOKBACK_DAYS: 'NaN' }, { SLO_FAILURE_RATE_ALERT: '1.2' }, { SLO_MIN_RUNS_FOR_ALERT: '0' }, { SLO_BRANCH: 'main\ninjected' }]) assert.throws(() => config({ ...env, ...patch }, now), /invalid_/);
  assert.throws(() => githubClient(cfg, ''), /missing_github_token/);
});

test('GitHub client only GETs the fixed API and bounds response processing', async () => {
  let observed;
  const client = githubClient(cfg, 'secret-sentinel', async (url, options) => {
    observed = { url, options };
    return { ok: true, json: async () => ({ total_count: 0, workflow_runs: [] }) };
  });
  await client(cfg.start, cfg.end, 2);
  const url = new URL(observed.url);
  assert.equal(url.origin, 'https://api.github.com');
  assert.equal(url.searchParams.get('page'), '2');
  assert.equal(url.searchParams.get('branch'), 'main');
  assert.equal(observed.options.method, 'GET');
  assert.equal(observed.options.redirect, 'error');
  assert.ok(observed.options.signal instanceof AbortSignal);
  assert.equal(observed.url.includes('secret-sentinel'), false);
  await assert.rejects(githubClient(cfg, 'secret-sentinel', async () => ({ ok: false, status: 403 }))(cfg.start, cfg.end, 1), /github_http_403/);
});

test('real entry point writes both required artifacts with measured results', async t => {
  const root = temp(t);
  const code = await main({ root, env, now, client: api(Array.from({ length: 5 }, (_, i) => run(i + 1))) });
  assert.equal(code, 0);
  assert.equal(report(root).complete, true);
  assert.equal(report(root).totals.observedRuns, 5);
  assert.equal(report(root).eligibleWorkflows, 1);
  assert.match(fs.readFileSync(path.join(root, 'automation/reports/workflow-slo-latest.md'), 'utf8'), /Observed runs: 5/);
});

test('failed collection replaces stale success with error artifacts, null metrics and no private error text', async t => {
  const root = temp(t);
  await main({ root, env, now, client: api([run(1)]) });
  const client = githubClient(cfg, 'secret-sentinel', async () => { throw new Error('secret-sentinel private endpoint'); });
  assert.equal(await main({ root, env, now, client }), 1);
  const result = report(root);
  assert.equal(result.status, 'error');
  assert.equal(result.complete, false);
  assert.equal(result.recoveryEligible, false);
  assert.equal(result.flagged, null);
  assert.equal(result.totals, null);
  const outputs = fs.readFileSync(path.join(root, 'automation/reports/workflow-slo-latest.json'), 'utf8') + fs.readFileSync(path.join(root, 'automation/reports/workflow-slo-latest.md'), 'utf8');
  assert.equal(outputs.includes('secret-sentinel'), false);
  assert.match(outputs, /github_request_failed/);
});

test('an empty successful listing is not sufficient evidence to close an incident', async t => {
  const root = temp(t);
  assert.equal(await main({ root, env, now, client: api([]) }), 0);
  assert.equal(report(root).recoveryEligible, false);
  assert.equal(report(root).eligibleWorkflows, 0);
});

test('refuses symlinked output directories without writing outside the report tree', async t => {
  const root = temp(t), outside = temp(t);
  fs.mkdirSync(path.join(root, 'automation'));
  fs.symlinkSync(outside, path.join(root, 'automation/reports'));
  await assert.rejects(main({ root, env, now, client: api([]) }), /unsafe_report_directory/);
  assert.deepEqual(fs.readdirSync(outside), []);
});
