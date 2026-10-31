'use strict';

const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const { tmpdir } = require('node:os');
const { createHash } = require('node:crypto');
const { spawnSync } = require('node:child_process');
const { collectForPages, verifyArtifact, OUTPUT_NAME, RECEIPT_ENV } = require('./pages-automation-health-artifact.cjs');

const ROOT = path.resolve(__dirname, '../..');
const SCRIPT = path.join(__dirname, 'pages-automation-health-artifact.cjs');
const NOW = Date.parse('2026-10-31T14:30:00.000Z');
const REPOSITORY = 'Zion-support/zion-support.github.io';
const TOKEN = 'synthetic_test_token_never_publish';
const PUBLIC_PATH = 'public/api/automation-health.json';
const ARTIFACT_PATH = 'out/api/automation-health.json';
const WORKFLOWS = ['gh-pages.yml', 'static-deploy.yml', 'deploy-on-push.yml'];
const common = [
  'Gate reviewed five-language productivity rendering',
  'Render field evidence release (adds data-field-evidence-release markers)',
  'Verify operational tools in the final Pages artifact',
  'Reject private operational files in final Pages artifact',
];
const date = (minutes) => new Date(NOW - minutes * 60000).toISOString();
const hash = (bytes) => createHash('sha256').update(bytes).digest('hex');

function fixture(t, state = 'ok') {
  const cwd = fs.mkdtempSync(path.join(tmpdir(), 'zion-pages-health-'));
  t.after(() => fs.rmSync(cwd, { recursive: true, force: true }));
  const env = {
    GITHUB_REPOSITORY: REPOSITORY, GITHUB_TOKEN: TOKEN,
    GITHUB_OUTPUT: path.join(cwd, 'step-output'),
    GITHUB_RUN_ID: '100', GITHUB_SHA: 'a'.repeat(40),
  };
  const run = {
    id: 300, workflow_id: 400, run_attempt: 1, path: '.github/workflows/gh-pages.yml',
    head_branch: 'main', head_sha: 'b'.repeat(40), repository: { full_name: REPOSITORY },
    status: state === 'pending' ? 'in_progress' : 'completed',
    conclusion: state === 'pending' ? null : state === 'degraded' ? 'failure' : 'success',
    created_at: date(10), updated_at: date(1),
  };
  const steps = ['Prepare pages from public/', ...common, 'Upload Pages artifact', 'Deploy to GitHub Pages']
    .map((name, index) => ({
      name, number: index + 1, status: state === 'pending' ? 'queued' : 'completed',
      conclusion: state === 'pending' ? null : state === 'degraded' && name === 'Deploy to GitHub Pages' ? 'failure' : 'success',
      started_at: state === 'pending' ? null : date(8), completed_at: state === 'pending' ? null : date(2),
    }));
  const jobs = { total_count: 1, jobs: [{
    id: 900, run_id: run.id, run_attempt: 1, head_sha: run.head_sha, head_branch: 'main',
    name: 'deploy', status: run.status, conclusion: run.conclusion, steps,
  }] };
  const f = { cwd, env, run, jobs, calls: [], mode: null, now: () => NOW };
  f.fetchImpl = async (url) => {
    f.calls.push(url);
    assert.equal(new URL(url).origin, 'https://api.github.com');
    if (f.mode === 'throw') throw new Error('synthetic network failure');
    if (f.mode === '403') return { ok: false, status: 403, json: async () => ({}) };
    let data;
    const workflow = WORKFLOWS.find((name) => url.includes('/workflows/' + name + '/runs?'));
    if (workflow) data = workflow === 'gh-pages.yml' ?
      { total_count: 1, workflow_runs: [run] } : { total_count: 0, workflow_runs: [] };
    else if (url.includes('/actions/runs/300/jobs?')) data = jobs;
    else if (url.endsWith('/pages')) data = { status: 'built', build_type: 'workflow', html_url: 'https://ziontechgroup.com/' };
    else throw new Error('Unexpected synthetic API request');
    return { ok: true, status: 200, json: async () => structuredClone(data) };
  };
  return f;
}

function write(f, file, bytes) {
  const target = path.join(f.cwd, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, bytes);
}
function copyToArtifact(f) {
  write(f, ARTIFACT_PATH, fs.readFileSync(path.join(f.cwd, PUBLIC_PATH)));
}
function receipt(f) {
  const file = f.env.GITHUB_OUTPUT;
  if (!fs.existsSync(file)) return '';
  return fs.readFileSync(file, 'utf8').trim().split('\n')
    .filter((line) => line.startsWith(OUTPUT_NAME + '=')).at(-1)?.slice(OUTPUT_NAME.length + 1) || '';
}
function verify(f, expected = receipt(f), extra = {}) {
  return verifyArtifact({ cwd: f.cwd, now: f.now, env: { ...f.env, [RECEIPT_ENV]: expected, ...extra } });
}

for (const state of ['ok', 'pending', 'degraded']) {
  test('complete ' + state + ' writes a receipt and passes final validation without changing diagnostic exit', async (t) => {
    const f = fixture(t, state);
    const result = await collectForPages(f);
    assert.equal(result.report.status, state);
    assert.equal(result.exitCode, state === 'ok' ? 0 : 1);
    assert.equal(result.report.publicSnapshotUpdated, true);
    assert.equal(result.receipt, receipt(f));
    assert.match(result.receipt, /^[a-f0-9]{64}$/);
    copyToArtifact(f);
    assert.equal(verify(f).status, state);
    assert.ok(!fs.readFileSync(path.join(f.cwd, PUBLIC_PATH), 'utf8').includes(TOKEN));
  });
}

test('a newer observed publisher on another SHA is allowed; receipt belongs to this collection', async (t) => {
  const f = fixture(t, 'pending');
  await collectForPages(f);
  copyToArtifact(f);
  const report = verify(f);
  assert.notEqual(String(report.publisher.runId), f.env.GITHUB_RUN_ID);
  assert.notEqual(report.publisher.headSha, f.env.GITHUB_SHA);
  assert.equal(report.publisher.runId, 300);
});

for (const mode of ['403', 'throw', 'partial-jobs', 'cancelled-with-job']) {
  test(mode + ' cannot reuse an existing fresh-looking public snapshot', async (t) => {
    const f = fixture(t);
    await collectForPages(f);
    const old = fs.readFileSync(path.join(f.cwd, PUBLIC_PATH));
    fs.unlinkSync(f.env.GITHUB_OUTPUT); // A new Actions step has its own output file.
    if (mode === 'partial-jobs') f.jobs.total_count = 2;
    else if (mode === 'cancelled-with-job') {
      f.run.conclusion = 'cancelled';
      f.jobs.jobs[0].status = 'queued';
      f.jobs.jobs[0].conclusion = null;
      f.jobs.jobs[0].steps = [];
    } else f.mode = mode;
    const result = await collectForPages(f);
    assert.equal(result.exitCode, 1);
    assert.equal(result.report.collection.complete, false);
    assert.equal(result.report.publicSnapshotUpdated, false);
    assert.equal(result.receipt, null);
    assert.equal(receipt(f), '');
    assert.deepEqual(fs.readFileSync(path.join(f.cwd, PUBLIC_PATH)), old);
    copyToArtifact(f);
    assert.throws(() => verify(f), /missing receipt/);
  });
}

test('a failed public write cannot issue a receipt', async (t) => {
  const f = fixture(t);
  fs.mkdirSync(path.join(f.cwd, PUBLIC_PATH), { recursive: true });
  await assert.rejects(collectForPages(f));
  assert.equal(receipt(f), '');
});

test('missing or malformed receipt rejects even fresh valid JSON', async (t) => {
  const f = fixture(t);
  await collectForPages(f);
  copyToArtifact(f);
  for (const value of ['', 'a'.repeat(63), 'not-a-digest']) {
    assert.throws(() => verify(f, value), /missing receipt/);
  }
});

for (const mutation of ['old-source', 'changed-byte', 'malformed-json', 'missing-artifact']) {
  test('final artifact ' + mutation + ' blocks upload after valid collection', async (t) => {
    const f = fixture(t);
    await collectForPages(f);
    copyToArtifact(f);
    const target = path.join(f.cwd, ARTIFACT_PATH);
    if (mutation === 'old-source') fs.writeFileSync(target, '{"timestamp":"2026-07-07T23:06:26.830Z"}\n');
    if (mutation === 'changed-byte') fs.appendFileSync(target, ' ');
    if (mutation === 'malformed-json') fs.writeFileSync(target, '{');
    if (mutation === 'missing-artifact') fs.unlinkSync(target);
    assert.throws(() => verify(f));
  });
}

const invalid = {
  'wrong repository': (r) => { r.repository = 'other/repo'; },
  'wrong branch': (r) => { r.branch = 'hero-carousel'; },
  'wrong publisher branch': (r) => { r.publisher.branch = 'hero-carousel'; },
  'wrong schema': (r) => { r.schemaVersion = 1; },
  'wrong scope': (r) => { r.scope = 'all_automations'; },
  'incomplete evidence': (r) => { r.collection.complete = false; },
  'missing public write': (r) => { delete r.publicSnapshotUpdated; },
  'collection error': (r) => { r.collection.errors = ['synthetic']; },
  'missing sources': (r) => { r.collection.sources = []; },
  'invalid timestamp': (r) => { r.timestamp = 'not-a-date'; },
  'future timestamp': (r) => { r.timestamp = new Date(NOW + 1).toISOString(); },
  'stale observation': (r) => { r.generatedAt = new Date(NOW - 25 * 3600000).toISOString(); },
  'stale publisher': (r) => { r.publisher.createdAt = r.publisher.updatedAt = new Date(NOW - 25 * 3600000).toISOString(); },
  'unknown check': (r) => { r.details.build.state = 'unknown'; },
  'inconsistent check': (r) => { r.checks.build = false; },
  'false green status': (r) => { r.status = r.severity = 'pending'; },
  'changed threshold': (r) => { r.collection.maxRunAgeHours = 1000; },
};
for (const [name, mutate] of Object.entries(invalid)) {
  test('schema gate rejects ' + name + ' even when bytes match a supplied digest', async (t) => {
    const f = fixture(t);
    const result = await collectForPages(f);
    const report = structuredClone(result.report);
    mutate(report);
    const bytes = Buffer.from(JSON.stringify(report));
    write(f, ARTIFACT_PATH, bytes);
    assert.throws(() => verify(f, hash(bytes)), /Pages automation health:/);
  });
}

test('malformed JSON with a matching digest still fails parsing', async (t) => {
  const f = fixture(t);
  write(f, ARTIFACT_PATH, '{');
  assert.throws(() => verify(f, hash('{')));
});

test('successful verification does not alter public or final observation timestamps', async (t) => {
  const f = fixture(t, 'pending');
  await collectForPages(f);
  copyToArtifact(f);
  const before = fs.readFileSync(path.join(f.cwd, ARTIFACT_PATH));
  verify(f);
  assert.deepEqual(fs.readFileSync(path.join(f.cwd, ARTIFACT_PATH)), before);
  assert.deepEqual(fs.readFileSync(path.join(f.cwd, PUBLIC_PATH)), before);
});

test('actual verify CLI exits nonzero with no receipt and cannot reach a following upload marker', async (t) => {
  const f = fixture(t);
  await collectForPages(f);
  copyToArtifact(f);
  const result = spawnSync(process.execPath, [SCRIPT, 'verify'], {
    cwd: f.cwd, env: { ...process.env, ...f.env, [RECEIPT_ENV]: '' }, encoding: 'utf8',
  });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /missing receipt/);
  assert.doesNotMatch(result.stdout, /artifactHealthVerified/);
});

function workflowContract(source, name) {
  const collect = 'run: node scripts/automation/pages-automation-health-artifact.cjs collect';
  const verify = 'run: node scripts/automation/pages-automation-health-artifact.cjs verify';
  const prepare = 'run: bash scripts/prepare-pages-out.sh';
  const upload = 'uses: actions/upload-pages-artifact@';
  assert.equal(source.split(collect).length, 2, name + ': one collection');
  assert.equal(source.split(verify).length, 2, name + ': one final gate');
  const positions = [collect, prepare, verify, upload].map((needle) => source.indexOf(needle));
  assert.ok(positions.every((n) => n >= 0), name + ': missing boundary');
  assert.deepEqual(positions, [...positions].sort((a, b) => a - b), name + ': boundary ordering');
  const step = (needle) => {
    const before = source.slice(0, source.indexOf(needle));
    const start = before.lastIndexOf('- name:');
    const rest = source.slice(start);
    const next = rest.slice(1).search(/\n +-\s+(?:name|uses):/);
    return next < 0 ? rest : rest.slice(0, next + 1);
  };
  const collected = step(collect), verified = step(verify);
  assert.match(collected, /id: automation-health\n/);
  assert.match(collected, /continue-on-error: true\n/);
  assert.match(collected, /GITHUB_TOKEN: \$\{\{ github.token \}\}/);
  assert.match(verified, /AUTOMATION_HEALTH_ARTIFACT_SHA256: \$\{\{ steps.automation-health.outputs.snapshot_sha256 \}\}/);
  assert.doesNotMatch(verified, /continue-on-error:|always\(/);
  assert.ok(!source.slice(positions[2] + verify.length, positions[3]).includes('run:'),
    name + ': no artifact mutation after final gate');
  assert.match(source, /permissions:\n  contents: read\n  actions: read\n  pages: write\n  id-token: write/);
  if (name === 'gh-pages.yml') {
    for (const block of [collected, verified]) {
      assert.match(block, /if: steps.release-source.outputs.publish == 'true'/);
    }
    assert.ok(source.includes("- 'scripts/render-field-evidence-release-base.cjs'"));
    assert.ok(source.includes("- 'scripts/automation/pages-automation-health-artifact.cjs'"));
    assert.ok(source.includes("- 'scripts/automation/generate-automation-health-snapshot.cjs'"));
  } else {
    assert.doesNotMatch(collected + verified, /if:|always\(/);
  }
  if (name === 'static-deploy.yml') {
    assert.match(source, /uses: actions\/setup-node@53b83947a5a98c8d113130e565377fae1a50d02f/);
    assert.match(source, /node-version: '22'/);
    assert.match(source, /if: github.ref == 'refs\/heads\/main'/);
    assert.match(source, /name: github-pages-\$\{\{ github.run_id \}\}-\$\{\{ github.run_attempt \}\}/);
    assert.match(source, /artifact_name: github-pages-\$\{\{ github.run_id \}\}-\$\{\{ github.run_attempt \}\}/);
  }
}

for (const name of WORKFLOWS) {
  test('publisher collects before assembly and validates current receipt immediately before upload: ' + name, () => {
    workflowContract(fs.readFileSync(path.join(ROOT, '.github/workflows', name), 'utf8'), name);
  });
}

test('workflow ordering controls reject collection after upload and a nonblocking final gate', () => {
  const source = fs.readFileSync(path.join(ROOT, '.github/workflows/deploy-on-push.yml'), 'utf8');
  const moved = source.replace('run: node scripts/automation/pages-automation-health-artifact.cjs collect', 'run: echo moved')
    + '\n    - name: Late collection\n      run: node scripts/automation/pages-automation-health-artifact.cjs collect\n';
  assert.throws(() => workflowContract(moved, 'deploy-on-push.yml'), /boundary ordering/);
  const bypass = source.replace('name: Validate collected automation health in final Pages artifact\n',
    'name: Validate collected automation health in final Pages artifact\n      continue-on-error: true\n');
  assert.notEqual(bypass, source);
  assert.throws(() => workflowContract(bypass, 'deploy-on-push.yml'));
});

test('focused receipt tests remain wired through the existing publication regression entry point', () => {
  const source = fs.readFileSync(path.join(ROOT, 'tests/ci/test_deploy_on_push_artifact.py'), 'utf8');
  assert.ok(source.includes('test-pages-automation-health-artifact.cjs'));
});
