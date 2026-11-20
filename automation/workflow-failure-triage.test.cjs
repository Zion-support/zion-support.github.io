'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { nameFor, minutesAgo, buildReport, writeReport } = require('./workflow-failure-triage.cjs');
const NOW = new Date('2026-10-22T21:00:00.000Z');
function run(id, { status = 'completed', conclusion = 'success', age = 10, workflowName = 'CI' } = {}) {
  return { databaseId: id, status, conclusion, workflowName,
    createdAt: new Date(NOW.getTime() - age * 60000).toISOString(),
    url: `https://github.com/Zion-support/zion-support.github.io/actions/runs/${id}` };
}
test('all-success snapshot is healthy with no invented failures', () => {
  const r = buildReport([run(1), run(2)], [], NOW);
  assert.equal(r.status, 'ok');
  assert.equal(r.completedFailuresIn24Hours, 0);
  assert.equal(r.queuedInRecentSample, 0);
});
test('cancelled, skipped, pending are not classified as completed failure', () => {
  const recent = [run(1, { conclusion: 'cancelled' }), run(2, { conclusion: 'skipped' }),
    run(3, { status: 'pending', conclusion: null })];
  const r = buildReport(recent, [], NOW);
  assert.equal(r.completedFailuresIn24Hours, 0);
  assert.equal(r.cancelledInRecentSample, 1);
  assert.equal(r.skippedInRecentSample, 1);
});
test('failure search identifies failures even when recent sample has only queued runs', () => {
  const recent = [run(1, { status: 'queued', conclusion: null, age: 20 })];
  const failures = [run(2, { conclusion: 'failure', workflowName: 'build' }), run(3, { conclusion: 'failure', workflowName: 'build' })];
  const r = buildReport(recent, failures, NOW);
  assert.equal(r.completedFailuresIn24Hours, 2);
  assert.deepEqual(r.topFailures, [{ workflow: 'build', count: 2 }]);
});
test('deduplicates same run across API search samples', () => {
  const bad = run(11, { conclusion: 'failure' });
  const r = buildReport([bad], [bad, bad], NOW);
  assert.equal(r.completedFailuresIn24Hours, 1);
  assert.equal(r.sample.uniqueRuns, 1);
});
test('old failures older than 24 hours are excluded', () => {
  const r = buildReport([run(1)], [run(2, { conclusion: 'failure', age: 1441 })], NOW);
  assert.equal(r.completedFailuresIn24Hours, 0);
});
test('stale queue is distinct from functional failures and prioritised', () => {
  const queued = [run(1, { status: 'queued', conclusion: null, age: 101 }),
    run(2, { status: 'pending', conclusion: null, age: 87 })];
  const r = buildReport(queued, [], NOW);
  assert.equal(r.status, 'critical');
  assert.equal(r.dominantSignal, 'runner-queue-pressure');
  assert.equal(r.staleQueuedInRecentSample, 2);
  assert.equal(r.completedFailuresIn24Hours, 0);
});
test('3 recent failures raise warning with deterministic name sorting', () => {
  const failures = [run(1, { conclusion: 'failure', workflowName: 'beta' }),
    run(2, { conclusion: 'failure', workflowName: 'alpha' }), run(3, { conclusion: 'failure', workflowName: 'alpha' })];
  const r = buildReport([run(4)], failures, NOW);
  assert.equal(r.status, 'warning');
  assert.deepEqual(r.topFailures, [{ workflow: 'alpha', count: 2 }, { workflow: 'beta', count: 1 }]);
});
test('empty, garbled and missing API samples never falsely pass', () => {
  assert.throws(() => buildReport([], [], NOW), /empty-run-samples/);
  assert.throws(() => buildReport(null, [], NOW), /invalid-run-samples/);
  assert.throws(() => buildReport([{ foo: 'bar' }], [], NOW), /invalid-run-samples/);
});
test('workflow names are sanitized to prevent Markdown/control injection', () => {
  assert.equal(nameFor('alert|`name`\n<secret>'), 'alert name secret');
  assert.equal(minutesAgo('unparseable', NOW.getTime()), null);
});
test('reports contain summary evidence not raw run URLs or credentials', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'zion-triage-'));
  try {
    const r = buildReport([run(1, { conclusion: 'failure' })], [], NOW);
    const files = writeReport(r, dir);
    const stored = JSON.parse(fs.readFileSync(files.json, 'utf8'));
    const md = fs.readFileSync(files.md, 'utf8');
    assert.equal(stored.schema, 'zion.actions.failure-triage.readonly.v1');
    assert.match(md, /Queued\/pending/);
    assert.doesNotMatch(md, /github.com\/Zion-support/);
    assert.doesNotMatch(md, /Bearer|ghp_/);
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
});
test('workflow is read-only, keeps one existing cron and has no dependency install or push', () => {
  const y = fs.readFileSync(path.join(__dirname, '../.github/workflows/ai-workflow-failure-triage-hourly.yml'), 'utf8');
  assert.match(y, /actions: read/);
  assert.match(y, /contents: read/);
  assert.match(y, /cron: ['"]11 \* \* \* \*['"]/);
  assert.match(y, /persist-credentials: false/);
  assert.match(y, /node --test automation\/workflow-failure-triage\.test\.cjs/);
  assert.match(y, /node automation\/workflow-failure-triage\.cjs/);
  assert.doesNotMatch(y, /contents: write|issues: write|npm ci|git push|commit-and-push-main|pull-requests: write/);
  assert.equal((y.match(/cron:/g) || []).length, 1);
  for (const x of y.matchAll(/uses:\s*([^\s#]+)/g)) assert.match(x[1], /@[a-f0-9]{40}$/i);
});

test('malformed rows cannot crash cancelled and skipped counters', () => {
  // GitHub API and gh CLI arrays should be treated as untrusted data.
  const recent = [null, undefined, [], false,
    run(901, { conclusion: 'cancelled' }),
    run(902, { conclusion: 'skipped' })];
  const report = buildReport(recent, [], NOW);
  assert.equal(report.cancelledInRecentSample, 1);
  assert.equal(report.skippedInRecentSample, 1);
  assert.equal(report.completedFailuresIn24Hours, 0);
});
