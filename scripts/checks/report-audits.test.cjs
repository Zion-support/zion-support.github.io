'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const size = require('../../automation/report-size-budget-guard.cjs');
const adoption = require('../../automation/audit-push-helper-adoption.cjs');

function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'zion-report-audits-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  fs.mkdirSync(path.join(root, 'automation/reports'), { recursive: true });
  fs.mkdirSync(path.join(root, '.github/workflows'), { recursive: true });
  return root;
}
function put(root, name, content) {
  const filename = path.join(root, name);
  fs.mkdirSync(path.dirname(filename), { recursive: true });
  fs.writeFileSync(filename, content);
}

test('size budgets include nested files and enforce strict byte boundaries', t => {
  const root = fixture(t);
  put(root, 'automation/reports/a.json', Buffer.alloc(1024));
  put(root, 'automation/reports/nested/b.json', Buffer.alloc(1024));
  let report = size.audit(root, { REPORT_SIZE_MAX_FILE_KB: '1', REPORT_SIZE_MAX_TOTAL_MB: String(2048 / 1048576) });
  assert.equal(report.status, 'ok');
  assert.equal(report.totalBytes, 2048);
  assert.equal(report.scannedFiles, 2);
  put(root, 'automation/reports/nested/b.json', Buffer.alloc(1025));
  report = size.audit(root, { REPORT_SIZE_MAX_FILE_KB: '1', REPORT_SIZE_MAX_TOTAL_MB: String(2048 / 1048576) });
  assert.equal(report.status, 'breach');
  assert.equal(report.oversizedCount, 1);
  assert.equal(report.totalExceeded, true);
});

test('size guard ignores only runtime history and its own outputs', t => {
  const root = fixture(t);
  put(root, 'automation/reports/.runtime/history.json', Buffer.alloc(5000));
  put(root, 'automation/reports/report-size-budget-guard-latest.json', Buffer.alloc(5000));
  put(root, 'automation/reports/report-size-budget-guard-latest.md', Buffer.alloc(5000));
  put(root, 'automation/reports/live.json', 'real');
  assert.equal(size.audit(root, {}).totalBytes, 4);
  assert.equal(size.main(root, {}), 0);
  assert.equal(size.audit(root, {}).totalBytes, 4);
});

test('size guard rejects invalid budgets instead of returning a green scan', t => {
  const root = fixture(t);
  for (const value of ['', 'NaN', 'Infinity', '-1', '0', 'bogus']) {
    assert.equal(size.audit(root, { REPORT_SIZE_MAX_FILE_KB: value }).status, 'error');
  }
});

test('missing reports directory yields an error artifact and nonzero result', t => {
  const root = fixture(t);
  fs.rmdirSync(path.join(root, 'automation/reports'));
  assert.equal(size.main(root, {}), 1);
  const report = JSON.parse(fs.readFileSync(path.join(root, 'automation/reports/report-size-budget-guard-latest.json')));
  assert.equal(report.status, 'error');
  assert.equal(report.errors[0].code, 'ENOENT');
});

test('size guard rejects symlinks without reading or changing their target', t => {
  const root = fixture(t);
  put(root, 'outside.txt', 'private');
  fs.symlinkSync(path.join(root, 'outside.txt'), path.join(root, 'automation/reports/link'));
  const report = size.audit(root, {});
  assert.equal(report.status, 'error');
  assert.equal(report.scannedFiles, 0);
  assert.equal(fs.readFileSync(path.join(root, 'outside.txt'), 'utf8'), 'private');
});

test('report writer refuses a symlinked output directory', t => {
  const root = fixture(t);
  fs.rmdirSync(path.join(root, 'automation/reports'));
  fs.mkdirSync(path.join(root, 'outside'));
  fs.symlinkSync(path.join(root, 'outside'), path.join(root, 'automation/reports'));
  assert.throws(() => size.main(root, {}), /unsafe_report_directory/);
  assert.deepEqual(fs.readdirSync(path.join(root, 'outside')), []);
});

test('size CLI fails on a real budget breach and still produces both artifacts', t => {
  const root = fixture(t);
  put(root, 'automation/reports/large.bin', Buffer.alloc(1025));
  const result = spawnSync(process.execPath, [path.resolve(__dirname, '../../automation/report-size-budget-guard.cjs')], { cwd: root, env: { ...process.env, REPORT_SIZE_MAX_FILE_KB: '1' }, encoding: 'utf8' });
  assert.equal(result.status, 1);
  for (const ext of ['json', 'md']) assert.ok(fs.statSync(path.join(root, `automation/reports/report-size-budget-guard-latest.${ext}`)).size > 0);
});

test('adoption audit reads run blocks without executing or disclosing commands', t => {
  const root = fixture(t);
  put(root, '.github/workflows/a.yml', 'name: test\njobs:\n  audit:\n    runs-on: ubuntu-latest\n    steps:\n      - run: |\n          bash scripts/automation/commit-and-push-main.sh\n          git push origin main\n          echo SECRET_SENTINEL\n          touch MUST_NOT_EXIST\n');
  put(root, '.github/workflows/b.yaml', 'jobs:\n  reuse:\n    uses: owner/repo/.github/workflows/check.yml@main\n');
  put(root, '.github/workflows/disabled.yml.disabled', 'not yaml');
  put(root, 'scripts/automation/commit-and-push-main.sh', 'echo "stub: no-op"\n');
  const report = adoption.audit(root);
  assert.equal(report.status, 'completed');
  assert.equal(report.scannedWorkflows, 2);
  assert.equal(report.workflowsWithHelperReferences, 1);
  assert.equal(report.workflowsWithDirectPushReferences, 1);
  assert.equal(report.workflowsWithBothReferences, 1);
  assert.equal(report.helpers[0].pauseMarker, true);
  assert.equal(report.workflows[1].reusableJobs, 1);
  assert.equal(JSON.stringify(report).includes('SECRET_SENTINEL'), false);
  assert.equal(fs.existsSync(path.join(root, 'MUST_NOT_EXIST')), false);
  assert.equal(adoption.main(root), 0);
  assert.equal(JSON.parse(fs.readFileSync(path.join(root, 'automation/reports/workflow-push-helper-adoption-latest.json'))).status, 'completed');
});

test('invalid YAML fails the audit without including source snippets', t => {
  const root = fixture(t);
  put(root, '.github/workflows/broken.yml', 'secret: SECRET_SENTINEL\njobs: [bad\n');
  const report = adoption.audit(root);
  assert.equal(report.status, 'error');
  assert.equal(report.errors[0].code, 'invalid_yaml');
  assert.equal(JSON.stringify(report).includes('SECRET_SENTINEL'), false);
  assert.equal(adoption.main(root), 1);
});

test('missing or empty workflow inventory cannot pass', t => {
  const root = fixture(t);
  assert.equal(adoption.audit(root).status, 'error');
  fs.rmdirSync(path.join(root, '.github/workflows'));
  assert.equal(adoption.audit(root).status, 'error');
});

test('symlinked workflow files are rejected without reading their target', t => {
  const root = fixture(t);
  put(root, 'outside.yml', 'jobs: {}');
  fs.symlinkSync(path.join(root, 'outside.yml'), path.join(root, '.github/workflows/link.yml'));
  assert.equal(adoption.audit(root).status, 'error');
});

test('invalid workflow structure is not counted as a completed scan', t => {
  const root = fixture(t);
  for (const content of ['jobs: {}', 'jobs: []', 'jobs: { audit: { steps: nope } }', 'jobs: { audit: { steps: [{run: 42}] } }']) {
    put(root, '.github/workflows/shape.yml', content);
    assert.equal(adoption.audit(root).status, 'error');
  }
});
