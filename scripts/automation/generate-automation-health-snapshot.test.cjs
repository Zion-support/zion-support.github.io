'use strict';

const assert = require('node:assert/strict');
const { test } = require('node:test');
const { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } = require('node:fs');
const { tmpdir } = require('node:os');
const { join } = require('node:path');
const { spawnSync } = require('node:child_process');
const {
  collectHealth, runCollector, INTERNAL_PATH, PUBLIC_PATH,
} = require('./generate-automation-health-snapshot.cjs');

const SCRIPT = join(__dirname, 'generate-automation-health-snapshot.cjs');
const NOW = Date.parse('2026-10-31T13:00:00Z');
const REPOSITORY = 'Zion-support/zion-support.github.io';
const TOKEN = 'fixture_secret_do_not_publish';
const env = { GITHUB_REPOSITORY: REPOSITORY, GITHUB_TOKEN: TOKEN };
const common = [
  'Gate reviewed five-language productivity rendering',
  'Render field evidence release (adds data-field-evidence-release markers)',
  'Verify operational tools in the final Pages artifact',
  'Reject private operational files in final Pages artifact',
];
const definitions = {
  'static-deploy.yml': ['Prepare pages', ...common, 'Run actions/upload-pages-artifact@v3', 'Run actions/deploy-pages@v4'],
  'gh-pages.yml': ['Prepare pages from public/', ...common, 'Upload Pages artifact', 'Deploy to GitHub Pages'],
  'deploy-on-push.yml': ['Overlay docs pages onto out/', ...common, 'Upload Pages artifact', 'Deploy to GitHub Pages'],
};
const date = (minutesAgo) => new Date(NOW - minutesAgo * 60000).toISOString();

function fixture(workflow = 'static-deploy.yml') {
  const lists = {};
  for (const [index, file] of Object.keys(definitions).entries()) {
    const latest = file === workflow;
    lists[file] = {
      total_count: 1,
      workflow_runs: [{
        id: latest ? 300 : 100 + index, workflow_id: 400 + index,
        run_attempt: 1, path: '.github/workflows/' + file,
        head_branch: 'main', head_sha: 'a'.repeat(40),
        repository: { full_name: REPOSITORY },
        status: 'completed', conclusion: 'success',
        created_at: date(latest ? 10 : 30), updated_at: date(latest ? 5 : 20),
      }],
    };
  }
  const run = lists[workflow].workflow_runs[0];
  const step = (name, index) => ({
    name, number: index + 1, status: 'completed', conclusion: 'success',
    started_at: date(8), completed_at: date(6),
  });
  const job = (name, names, id) => ({
    id, run_id: run.id, run_attempt: 1, head_branch: 'main', head_sha: run.head_sha,
    name, status: 'completed', conclusion: 'success',
    steps: names.map(step),
  });
  const names = definitions[workflow];
  const jobs = workflow === 'deploy-on-push.yml' ? [
    job('build', names.slice(0, -1), 901),
    job('deploy', names.slice(-1), 902),
  ] : [job('deploy', names, 900)];
  return {
    workflow, run, lists,
    jobs: { total_count: jobs.length, jobs },
    pages: { status: 'built', build_type: 'workflow', html_url: 'https://ziontechgroup.com/' },
  };
}

function api(f, override) {
  const calls = [];
  const fetchImpl = async (url, options) => {
    calls.push({ url, options });
    assert.equal(new URL(url).origin, 'https://api.github.com');
    assert.equal(options.method, 'GET');
    assert.equal(options.redirect, 'error');
    assert.equal(options.headers.Authorization, 'Bearer ' + TOKEN);
    if (override) {
      const response = await override(url, options);
      if (response) return response;
    }
    const workflow = Object.keys(f.lists).find((file) => url.includes('/workflows/' + file + '/runs?'));
    const runId = /\/runs\/(\d+)\/jobs\?/.exec(url)?.[1];
    let value = workflow ? f.lists[workflow] :
      url.includes('/jobs?') ? (f.jobsByRun?.[runId] || f.jobs) : f.pages;
    if (workflow && Array.isArray(value?.workflow_runs)) {
      const limit = Number(new URL(url).searchParams.get('per_page'));
      value = { ...value, workflow_runs: value.workflow_runs.slice(0, limit) };
    }
    return { ok: true, status: 200, json: async () => structuredClone(value) };
  };
  return { fetchImpl, calls };
}

async function collect(f, override, options = {}) {
  const mock = api(f, override);
  const report = await collectHealth({ env, now: () => NOW, fetchImpl: mock.fetchImpl, ...options });
  return { report, calls: mock.calls };
}

for (const workflow of Object.keys(definitions)) {
  test('requires observed static gates and actual deployment: ' + workflow, async () => {
    const { report, calls } = await collect(fixture(workflow));
    assert.equal(report.status, 'ok');
    assert.deepEqual(report.checks, { build: true, deploy: true, pages: true });
    assert.equal(report.collection.complete, true);
    assert.equal(report.publisher.workflow, workflow);
    assert.equal(report.publisher.runId, 300);
    assert.equal(report.details.deploy.steps[0].jobId, workflow === 'deploy-on-push.yml' ? 902 : 900);
    assert.equal(report.collection.sources.length, 5);
    assert.ok(report.collection.sources.every((source) => source.checkedAt === new Date(NOW).toISOString()));
    assert.ok(calls.every((call) => !call.url.includes('status=success')));
    assert.ok(!JSON.stringify(report).includes(TOKEN));
    assert.equal(report.sloScore, undefined);
  });
}

test('a newer failed deployment is not replaced by an older successful publisher', async () => {
  const f = fixture('gh-pages.yml');
  f.run.conclusion = 'failure';
  f.jobs.jobs[0].steps.at(-1).conclusion = 'failure';
  const { report } = await collect(f);
  assert.equal(report.publisher.workflow, 'gh-pages.yml');
  assert.equal(report.status, 'degraded');
  assert.equal(report.checks.build, true);
  assert.equal(report.checks.deploy, false);
  assert.equal(report.collection.complete, true);
});

test('updated_at on an older run does not make it the latest attempt', async () => {
  const f = fixture();
  f.lists['gh-pages.yml'].workflow_runs[0].updated_at = date(1);
  const { report } = await collect(f);
  assert.equal(report.publisher.workflow, 'static-deploy.yml');
});

test('a failed static gate overrides a successful overall workflow conclusion', async () => {
  const f = fixture();
  f.jobs.jobs[0].steps[2].conclusion = 'failure';
  const { report } = await collect(f);
  assert.equal(report.status, 'degraded');
  assert.equal(report.checks.build, false);
});

test('the optional failed Next.js diagnostic is not a failed static artifact gate', async () => {
  const f = fixture('deploy-on-push.yml');
  f.jobs.jobs[0].steps.push({
    name: 'Next.js diagnostic build (Pages uses public/)', number: 99,
    status: 'completed', conclusion: 'failure', started_at: date(8), completed_at: date(7),
  });
  const { report } = await collect(f);
  assert.equal(report.status, 'ok');
  assert.equal(report.checks.build, true);
});

for (const conclusion of ['skipped', 'cancelled', 'neutral']) {
  test('does not report a successful deployment for ' + conclusion + ' steps', async () => {
    const f = fixture();
    f.jobs.jobs[0].steps.at(-1).conclusion = conclusion;
    const { report } = await collect(f);
    assert.equal(report.checks.deploy, null);
    assert.equal(report.status, 'unknown');
    assert.equal(report.collection.complete, false);
    assert.equal(report.timestamp, null);
  });
}

test('cancellation before execution is unknown, not an observed deployment failure', async () => {
  const f = fixture('deploy-on-push.yml');
  f.run.conclusion = 'cancelled';
  f.jobs.jobs.forEach((job) => { job.conclusion = 'cancelled'; job.steps = []; });
  const { report } = await collect(f);
  assert.equal(report.status, 'unknown');
  assert.deepEqual(report.checks, { build: null, deploy: null, pages: true });
  assert.equal(report.collection.complete, false);
});

test('a newer pending run stays pending instead of borrowing older success', async () => {
  const f = fixture('gh-pages.yml');
  f.run.status = 'queued';
  f.run.conclusion = null;
  f.jobs = { total_count: 0, jobs: [] };
  const { report } = await collect(f);
  assert.equal(report.status, 'pending');
  assert.equal(report.collection.complete, true);
  assert.deepEqual(report.checks, { build: null, deploy: null, pages: true });
});

test('a no-op run with missing static gates cannot claim build health', async () => {
  const f = fixture();
  f.jobs.jobs[0].steps = [{
    name: 'Static Pages is the production path', number: 1, status: 'completed',
    conclusion: 'success', started_at: date(8), completed_at: date(7),
  }];
  const { report } = await collect(f);
  assert.equal(report.status, 'unknown');
  assert.equal(report.checks.build, null);
  assert.equal(report.collection.complete, false);
});

test('retired CI is not queried or accepted as a known publisher', async () => {
  const f = fixture();
  f.run.path = '.github/workflows/ci-cd.yml';
  const { report, calls } = await collect(f);
  assert.equal(report.collection.complete, false);
  assert.equal(report.status, 'unavailable');
  assert.ok(calls.every((call) => !call.url.includes('/workflows/ci-cd.yml/')));
});

for (const change of ['wrong_sha', 'previous_attempt', 'partial_page']) {
  test('refuses mismatched or incomplete job evidence: ' + change, async () => {
    const f = fixture();
    if (change === 'wrong_sha') f.jobs.jobs[0].head_sha = 'b'.repeat(40);
    if (change === 'previous_attempt') f.run.run_attempt = 2;
    if (change === 'partial_page') f.jobs.total_count = 101;
    const { report } = await collect(f);
    assert.equal(report.status, 'unavailable');
    assert.equal(report.collection.complete, false);
    assert.equal(report.checks.build, null);
  });
}

test('does not refresh evidence from a stale run or impossible future timestamp', async () => {
  const stale = fixture();
  stale.run.created_at = date(1800);
  stale.run.updated_at = date(1500);
  // Keep this run newest so that age, rather than ordering, is under test.
  for (const list of Object.values(stale.lists)) {
    if (list.workflow_runs[0] !== stale.run) list.workflow_runs = [], list.total_count = 0;
  }
  assert.equal((await collect(stale)).report.status, 'stale');
  const future = fixture();
  future.run.updated_at = date(-10);
  assert.equal((await collect(future)).report.collection.complete, false);
});

test('old step evidence is not made fresh by a recently updated run', async () => {
  const f = fixture();
  f.jobs.jobs[0].steps[0].started_at = date(1600);
  f.jobs.jobs[0].steps[0].completed_at = date(1500);
  const { report } = await collect(f);
  assert.equal(report.status, 'stale');
  assert.equal(report.timestamp, null);
});

test('empty history and unrecognized Pages states remain unknown', async () => {
  const empty = fixture();
  Object.values(empty.lists).forEach((list) => { list.workflow_runs = []; list.total_count = 0; });
  assert.equal((await collect(empty)).report.status, 'unknown');
  const pages = fixture();
  pages.pages.status = 'unexpected';
  assert.equal((await collect(pages)).report.status, 'unknown');
});

test('a verified Pages error is degraded and is not disguised as unavailable', async () => {
  const f = fixture();
  f.pages.status = 'errored';
  const { report } = await collect(f);
  assert.equal(report.status, 'degraded');
  assert.equal(report.checks.pages, false);
  assert.equal(report.collection.complete, true);
});

test('API denial and malformed JSON cannot fall back to an older green run', async () => {
  for (const response of [
    { ok: false, status: 403, json: async () => ({ message: TOKEN }) },
    { ok: true, status: 200, json: async () => { throw new Error(TOKEN); } },
  ]) {
    const { report } = await collect(fixture(), async (url) => url.includes('gh-pages.yml') ? response : null);
    assert.equal(report.status, 'unavailable');
    assert.equal(report.collection.complete, false);
    assert.ok(!JSON.stringify(report).includes(TOKEN));
    assert.ok(report.collection.sources.every((source) => source.checkedAt));
  }
});

test('bounded requests abort and expose only a safe error code', async () => {
  const fetchImpl = async (_url, { signal }) => new Promise((_resolve, reject) => {
    signal.addEventListener('abort', () => reject(new Error(TOKEN)), { once: true });
  });
  const report = await collectHealth({ env, now: () => NOW, timeoutMs: 5, fetchImpl });
  assert.equal(report.status, 'unavailable');
  assert.equal(report.collection.sources.length, 4);
  assert.ok(report.collection.sources.every((source) => source.errorCode === 'request_timed_out'));
  assert.ok(!JSON.stringify(report).includes(TOKEN));
});

test('no token or invalid age configuration performs no requests', async () => {
  for (const settings of [
    { GITHUB_REPOSITORY: REPOSITORY },
    { ...env, AUTOMATION_HEALTH_MAX_RUN_AGE_HOURS: 'invalid' },
    { ...env, AUTOMATION_HEALTH_MAX_RUN_AGE_HOURS: '0' },
  ]) {
    let called = false;
    const report = await collectHealth({
      env: settings, now: () => NOW,
      fetchImpl: async () => { called = true; throw new Error('must not call'); },
    });
    assert.equal(called, false);
    assert.equal(report.collection.complete, false);
  }
});

test('unknown collection preserves public bytes while writing the internal attempt', async () => {
  const cwd = mkdtempSync(join(tmpdir(), 'zion-health-preserve-'));
  try {
    mkdirSync(join(cwd, 'public/api'), { recursive: true });
    const original = '{"status":"ok","timestamp":"2026-07-07T23:06:26.830Z"}\n';
    writeFileSync(join(cwd, PUBLIC_PATH), original);
    const result = await runCollector({ cwd, env: { GITHUB_REPOSITORY: REPOSITORY }, now: () => NOW });
    assert.equal(result.exitCode, 1);
    assert.equal(readFileSync(join(cwd, PUBLIC_PATH), 'utf8'), original);
    const internal = JSON.parse(readFileSync(join(cwd, INTERNAL_PATH), 'utf8'));
    assert.equal(internal.publicSnapshotUpdated, false);
    assert.equal(internal.status, 'unavailable');
    assert.equal(internal.timestamp, null);
  } finally {
    rmSync(cwd, { recursive: true, force: true });
  }
});

test('complete failed deployment publishes a degraded snapshot and exits nonzero', async () => {
  const cwd = mkdtempSync(join(tmpdir(), 'zion-health-degraded-'));
  try {
    const f = fixture();
    f.run.conclusion = 'failure';
    f.jobs.jobs[0].steps.at(-1).conclusion = 'failure';
    const { fetchImpl } = api(f);
    const result = await runCollector({ cwd, env, now: () => NOW, fetchImpl });
    assert.equal(result.exitCode, 1);
    assert.equal(result.report.publicSnapshotUpdated, true);
    const saved = JSON.parse(readFileSync(join(cwd, PUBLIC_PATH), 'utf8'));
    assert.equal(saved.status, 'degraded');
    assert.equal(saved.checks.deploy, false);
    assert.deepEqual(saved, JSON.parse(readFileSync(join(cwd, INTERNAL_PATH), 'utf8')));
  } finally {
    rmSync(cwd, { recursive: true, force: true });
  }
});

test('CLI without credentials fails and leaves the stale public snapshot untouched', () => {
  const cwd = mkdtempSync(join(tmpdir(), 'zion-health-cli-'));
  try {
    mkdirSync(join(cwd, 'public/api'), { recursive: true });
    const original = '{"status":"ok","timestamp":"2026-07-07T23:06:26.830Z"}\n';
    writeFileSync(join(cwd, PUBLIC_PATH), original);
    const result = spawnSync(process.execPath, [SCRIPT], {
      cwd, encoding: 'utf8',
      env: { ...process.env, GITHUB_REPOSITORY: REPOSITORY, GITHUB_TOKEN: '', GH_TOKEN: '' },
      timeout: 10000,
    });
    assert.equal(result.status, 1, result.stdout + result.stderr);
    assert.equal(readFileSync(join(cwd, PUBLIC_PATH), 'utf8'), original);
    assert.equal(JSON.parse(result.stdout).publicSnapshotUpdated, false);
  } finally {
    rmSync(cwd, { recursive: true, force: true });
  }
});

test('contradictory run status and conclusion are rejected', async () => {
  const f = fixture();
  f.run.status = 'in_progress';
  const { report } = await collect(f);
  assert.equal(report.status, 'unavailable');
  assert.equal(report.collection.complete, false);
});

for (const status of ['in_progress', 'completed']) {
  test('contradictory job status and conclusion are rejected: ' + status, async () => {
    const f = fixture();
    f.jobs.jobs[0].status = status;
    f.jobs.jobs[0].conclusion = status === 'completed' ? null : 'success';
    const { report } = await collect(f);
    assert.equal(report.status, 'unavailable');
    assert.equal(report.collection.complete, false);
  });
}

test('an active publisher remains pending even after its observed deployment step succeeds', async () => {
  const f = fixture();
  f.run.status = 'in_progress';
  f.run.conclusion = null;
  const { report } = await collect(f);
  assert.deepEqual(report.checks, { build: true, deploy: true, pages: true });
  assert.equal(report.status, 'pending');
});

test('a cancelled publisher is not called healthy even when all named steps succeeded', async () => {
  const f = fixture();
  f.run.conclusion = 'cancelled';
  const { report } = await collect(f);
  assert.equal(report.status, 'unknown');
  assert.equal(report.collection.complete, false);
});


function cancelledHistory(count = 1) {
  const f = fixture('gh-pages.yml');
  const cancellations = Array.from({ length: count }, (_, index) => ({
    ...f.run, id: 9000 + index, conclusion: 'cancelled',
    created_at: date(index + 1), updated_at: date(index + 0.5),
  }));
  f.lists[f.workflow] = { total_count: count + 1, workflow_runs: [...cancellations, f.run] };
  f.jobsByRun = Object.fromEntries(cancellations.map((run) => [run.id, { total_count: 0, jobs: [] }]));
  return { f, cancellations };
}

test('COORD9: unstarted cancellation 41207304002 cannot mask active publisher 41207302461', async () => {
  const { f, cancellations: [cancelled] } = cancelledHistory();
  const observedAt = Date.parse('2026-10-31T13:52:55.537Z');
  const sha = 'f4987c40876173333114a4722cf5a6f9ffd7b0bd';
  Object.assign(f.run, {
    id: 41207302461, workflow_id: 254611010, head_sha: sha,
    status: 'in_progress', conclusion: null,
    created_at: '2026-10-31T13:49:28Z', updated_at: '2026-10-31T13:52:00Z',
  });
  Object.assign(cancelled, {
    id: 41207304002, workflow_id: 254611010, head_sha: sha,
    created_at: '2026-10-31T13:49:29Z', updated_at: '2026-10-31T13:50:27Z',
  });
  f.jobsByRun = { [cancelled.id]: { total_count: 0, jobs: [] } };
  Object.assign(f.jobs.jobs[0], {
    id: 124554974655, run_id: f.run.id, head_sha: sha,
    status: 'in_progress', conclusion: null,
  });
  f.jobs.jobs[0].steps.forEach((step) => Object.assign(step, {
    status: 'pending', conclusion: null, started_at: null, completed_at: null,
  }));
  const cwd = mkdtempSync(join(tmpdir(), 'zion-health-coord9-'));
  try {
    mkdirSync(join(cwd, 'public/api'), { recursive: true });
    writeFileSync(join(cwd, PUBLIC_PATH), '{"timestamp":"2026-07-07T23:06:26.830Z"}\n');
    const mock = api(f);
    const { report, exitCode } = await runCollector({
      cwd, env, now: () => observedAt, fetchImpl: mock.fetchImpl,
    });
    assert.equal(report.publisher.runId, 41207302461);
    assert.equal(report.publisher.headSha, sha);
    assert.equal(report.status, 'pending');
    assert.equal(exitCode, 1);
    assert.equal(report.collection.complete, true);
    assert.equal(report.collection.maxRunsPerWorkflow, 5);
    assert.deepEqual(report.collection.excludedRuns.map(({ runId, reason, jobCount }) =>
      ({ runId, reason, jobCount })), [
      { runId: 41207304002, reason: 'cancelled_without_jobs', jobCount: 0 },
    ]);
    assert.deepEqual(report.checks, { build: null, deploy: null, pages: true });
    const saved = JSON.parse(readFileSync(join(cwd, PUBLIC_PATH), 'utf8'));
    assert.equal(saved.publicSnapshotUpdated, true);
    assert.equal(saved.timestamp, new Date(observedAt).toISOString());
    assert.equal(saved.publisher.runId, 41207302461);
    assert.ok(!JSON.stringify(saved).includes(TOKEN));
  } finally {
    rmSync(cwd, { recursive: true, force: true });
  }
});

test('excluding an unstarted duplicate still selects the newest real failure', async () => {
  const { f } = cancelledHistory();
  f.run.conclusion = 'failure';
  f.jobs.jobs[0].steps.at(-1).conclusion = 'failure';
  const { report } = await collect(f);
  assert.equal(report.publisher.runId, f.run.id);
  assert.equal(report.status, 'degraded');
  assert.equal(report.checks.deploy, false);
  assert.equal(report.collection.complete, true);
  assert.equal(report.collection.excludedRuns.length, 1);
});

test('cancelled execution with a started failing job remains visible', async () => {
  const { f, cancellations: [cancelled] } = cancelledHistory();
  const jobs = structuredClone(f.jobs);
  Object.assign(jobs.jobs[0], { run_id: cancelled.id, conclusion: 'cancelled' });
  jobs.jobs[0].steps[0].conclusion = 'failure';
  f.jobsByRun[cancelled.id] = jobs;
  const { report } = await collect(f);
  assert.equal(report.publisher.runId, cancelled.id);
  assert.equal(report.status, 'degraded');
  assert.equal(report.collection.complete, false);
  assert.deepEqual(report.collection.excludedRuns, []);
});

test('an empty latest rerun is not proof that earlier attempts never executed', async () => {
  const { f, cancellations: [cancelled] } = cancelledHistory();
  cancelled.run_attempt = 2;
  const { report } = await collect(f);
  assert.equal(report.publisher.runId, cancelled.id);
  assert.equal(report.status, 'unknown');
  assert.equal(report.collection.complete, false);
  assert.deepEqual(report.collection.excludedRuns, []);
});

for (const evidence of ['http_denied', 'partial_jobs', 'invalid_zero_count']) {
  test('does not exclude a cancellation without complete zero-job proof: ' + evidence, async () => {
    const { f, cancellations: [cancelled] } = cancelledHistory();
    if (evidence === 'partial_jobs') f.jobsByRun[cancelled.id] = { total_count: 1, jobs: [] };
    if (evidence === 'invalid_zero_count') f.jobsByRun[cancelled.id] = { total_count: 0, jobs: [{}] };
    let bodyRead = false;
    const { report, calls } = await collect(f, async (url) =>
      evidence === 'http_denied' && url.includes('/runs/' + cancelled.id + '/jobs?') ? {
        ok: false, status: 403, json: async () => { bodyRead = true; return { secret: TOKEN }; },
      } : null);
    assert.equal(report.status, 'unavailable');
    assert.equal(report.collection.complete, false);
    assert.deepEqual(report.collection.excludedRuns, []);
    assert.equal(bodyRead, false);
    assert.ok(!calls.some(({ url }) => url.includes('/runs/' + f.run.id + '/jobs?')));
    assert.ok(!JSON.stringify(report).includes(TOKEN));
  });
}

test('unresolved history frontier preserves public bytes instead of borrowing older cross-workflow success', async () => {
  const { f } = cancelledHistory(5);
  const older = f.lists['static-deploy.yml'].workflow_runs[0];
  older.updated_at = date(5);
  const olderJobs = fixture('static-deploy.yml').jobs;
  olderJobs.jobs.forEach((job) => { job.run_id = older.id; });
  f.jobsByRun[older.id] = olderJobs;
  const cwd = mkdtempSync(join(tmpdir(), 'zion-health-history-bound-'));
  try {
    mkdirSync(join(cwd, 'public/api'), { recursive: true });
    const original = '{"timestamp":"2026-07-07T23:06:26.830Z"}\n';
    writeFileSync(join(cwd, PUBLIC_PATH), original);
    const mock = api(f);
    const { report, exitCode } = await runCollector({ cwd, env, now: () => NOW, fetchImpl: mock.fetchImpl });
    assert.equal(report.status, 'unknown');
    assert.equal(exitCode, 1);
    assert.equal(report.collection.complete, false);
    assert.equal(report.publicSnapshotUpdated, false);
    assert.equal(report.publisher, null);
    assert.equal(report.collection.excludedRuns.length, 5);
    assert.ok(report.collection.errors.includes('gh-pages.yml:publisher_history_limit_reached'));
    assert.equal(readFileSync(join(cwd, PUBLIC_PATH), 'utf8'), original);
    assert.ok(!mock.calls.some(({ url }) => url.includes('/runs/' + older.id + '/jobs?')));
    assert.equal(mock.calls.filter(({ url }) => url.includes('/jobs?')).length, 5);
  } finally {
    rmSync(cwd, { recursive: true, force: true });
  }
});

test('a newer proven candidate is selectable before an older truncated-history frontier', async () => {
  const f = fixture('static-deploy.yml');
  const old = f.lists['gh-pages.yml'].workflow_runs[0];
  f.lists['gh-pages.yml'] = {
    total_count: 6,
    workflow_runs: Array.from({ length: 5 }, (_, index) => ({
      ...old, id: 9000 + index, conclusion: 'cancelled',
      created_at: date(30 + index), updated_at: date(20),
    })),
  };
  const { report, calls } = await collect(f);
  assert.equal(report.publisher.runId, f.run.id);
  assert.equal(report.status, 'ok');
  assert.equal(report.collection.complete, true);
  assert.deepEqual(report.collection.excludedRuns, []);
  assert.equal(calls.filter(({ url }) => url.includes('/jobs?')).length, 1);
});

for (const evidence of ['short_page', 'duplicate_run']) {
  test('rejects incomplete or duplicate bounded history: ' + evidence, async () => {
    const f = fixture();
    const list = f.lists['gh-pages.yml'];
    list.total_count = 2;
    if (evidence === 'duplicate_run') list.workflow_runs.push(structuredClone(list.workflow_runs[0]));
    const { report, calls } = await collect(f);
    assert.equal(report.status, 'unavailable');
    assert.equal(report.collection.complete, false);
    assert.deepEqual(report.collection.excludedRuns, []);
    assert.equal(calls.filter(({ url }) => url.includes('/jobs?')).length, 0);
  });
}

test('fully exhausted unstarted cancellations do not fabricate an eligible publisher', async () => {
  const { f, cancellations } = cancelledHistory();
  f.lists['gh-pages.yml'] = { total_count: 1, workflow_runs: cancellations };
  for (const workflow of ['static-deploy.yml', 'deploy-on-push.yml']) {
    f.lists[workflow] = { total_count: 0, workflow_runs: [] };
  }
  const { report } = await collect(f);
  assert.equal(report.publisher, null);
  assert.equal(report.status, 'unknown');
  assert.equal(report.collection.complete, false);
  assert.equal(report.timestamp, null);
  assert.equal(report.collection.excludedRuns.length, 1);
});
