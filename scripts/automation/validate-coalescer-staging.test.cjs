'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const validator = path.join(__dirname, 'validate-coalescer-staging.cjs');
function git(cwd, ...args) {
  const p = spawnSync('git', args, { cwd, encoding: 'utf8' });
  assert.equal(p.status, 0, p.stderr);
  return p.stdout.trim();
}
function fixture(changes, group='docs', baseFiles={}) {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), 'coalescer-'));
  git(cwd, 'init', '-q');
  git(cwd, 'config', 'user.email', 'test@example.invalid');
  git(cwd, 'config', 'user.name', 'Test');
  fs.writeFileSync(path.join(cwd, 'README.md'), 'base\n');
  for (const [name, value] of Object.entries(baseFiles)) {
    const file = path.join(cwd, name);
    fs.mkdirSync(path.dirname(file), {recursive:true});
    fs.writeFileSync(file, value);
  }
  git(cwd, 'add', '.');
  git(cwd, 'commit', '-qm', 'base');
  const base = git(cwd, 'rev-parse', 'HEAD');
  git(cwd, 'update-ref', 'refs/remotes/origin/main', base);
  for (const [name, value] of Object.entries(changes)) {
    const full = path.join(cwd, name);
    fs.mkdirSync(path.dirname(full), { recursive: true });
    if (value === null) fs.rmSync(full);
    else if (value === 'SYMLINK') fs.symlinkSync('README.md', full);
    else fs.writeFileSync(full, value);
  }
  git(cwd, 'add', '-A');
  git(cwd, 'commit', '-qm', 'change');
  const head = git(cwd, 'rev-parse', 'HEAD');
  git(cwd, 'update-ref', 'refs/remotes/origin/coalescer-target', head);
  const result = spawnSync(process.execPath, [validator], {
    cwd, encoding: 'utf8', env: {...process.env,
      STAGING_BRANCH: 'automation/staging/tests',
      POLICY_GROUP: group,
      BASE_REF: 'refs/remotes/origin/main',
      STAGING_REF: 'refs/remotes/origin/coalescer-target',
      GITHUB_OUTPUT: '',
      GITHUB_STEP_SUMMARY: ''
    }
  });
  fs.rmSync(cwd, {recursive:true, force:true});
  return result;
}

test('allows a simple docs addition', () => assert.equal(fixture({'docs/guide.md':'safe\n'}).status, 0));
test('rejects actual protected workflow deletion', () => {
  const r = fixture({'.github/workflows/protect.yml':null}, 'docs',
    {'.github/workflows/protect.yml':'name: Protect\n'});
  assert.notEqual(r.status, 0);
  assert.match(r.stderr, /Protected paths detected/);
});
test('allows root README deletion but flags enhanced review', () => {
  const r = fixture({'README.md':null,'docs/guide.md':'safe\n'});
  assert.equal(r.status, 0, r.stderr);
  const result = JSON.parse(r.stdout);
  assert.equal(result.review_tier, 'enhanced');
  assert.ok(result.review_reasons.includes('content-deletions'));
});
test('rejects a protected path', () => assert.notEqual(fixture({'.github/workflows/attack.yml':'x'}).status, 0));
test('rejects a staging validator replacement', () => assert.notEqual(fixture({'scripts/automation/validate-coalescer-staging.cjs':'process.exit(0)'}).status, 0));
test('rejects a symlink in allowed paths', () => assert.notEqual(fixture({'docs/link.md':'SYMLINK'}).status, 0));
test('rejects an executable file', () => {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(),'coalescer-modes-'));
  try {
    git(cwd,'init','-q'); git(cwd,'config','user.email','test@example.invalid');git(cwd,'config','user.name','Test');
    fs.writeFileSync(path.join(cwd,'README.md'),'base');
    git(cwd,'add','.');git(cwd,'commit','-qm','base');
    git(cwd,'update-ref','refs/remotes/origin/main',git(cwd,'rev-parse','HEAD'));
    fs.mkdirSync(path.join(cwd,'docs'));
    fs.writeFileSync(path.join(cwd,'docs','run.sh'),'echo nope');
    fs.chmodSync(path.join(cwd,'docs','run.sh'),0o755);
    git(cwd,'add','.');git(cwd,'commit','-qm','second');
    git(cwd,'update-ref','refs/remotes/origin/coalescer-target',git(cwd,'rev-parse','HEAD'));
    const r=spawnSync(process.execPath,[validator],{cwd,encoding:'utf8',env:{...process.env,STAGING_BRANCH:'automation/staging/tests',POLICY_GROUP:'docs',BASE_REF:'refs/remotes/origin/main',STAGING_REF:'refs/remotes/origin/coalescer-target',GITHUB_OUTPUT:'',GITHUB_STEP_SUMMARY:''}});
    assert.notEqual(r.status,0);
  } finally { fs.rmSync(cwd,{recursive:true,force:true}); }
});
test('rejects binary staged changes', () => assert.notEqual(fixture({'docs/image.bin':Buffer.from([0,1,2,3])}).status, 0));
test('rejects non-policy changes', () => assert.notEqual(fixture({'public/apps/test.md':'x'}, 'docs').status, 0));
test('rejects unusual filenames', () => assert.notEqual(fixture({'docs/hello world.md':'x'}).status, 0));
test('rejects inappropriate content policy', () => assert.notEqual(fixture({'docs/guide.md':'x'}, 'content').status, 0));
test('rejects invalid policy group', () => assert.notEqual(fixture({'docs/test.md':'x'},'unknown').status, 0));

test('rejects scripting extensions in docs', () => {
  const r = fixture({'docs/upgrade.cjs':'require("fs");\n'});
  assert.notEqual(r.status, 0);
  assert.match(r.stderr, /unsupported file extensions/);
});
test('rejects YAML pretending to be docs-only content', () => assert.notEqual(fixture({'docs/ci.yml':'on: push\n'}).status, 0));
test('rejects binary blob with safe JSON extension', () => {
  const r = fixture({'docs/data.json': Buffer.from([0,1,2,3,4])});
  assert.notEqual(r.status, 0);
  assert.match(r.stderr, /Binary or unparseable changes/);
});
test('rejects oversized minified JSON blob despite tiny line count', () => {
  const r = fixture({'docs/blob.json': 'A'.repeat(2*1024*1024+1)});
  assert.notEqual(r.status, 0);
  assert.match(r.stderr, /2 MiB safety budget/);
});
test('rejects more than 12000 changed lines', () => {
  const r = fixture({'docs/too-many.md': 'word\n'.repeat(12001)});
  assert.notEqual(r.status, 0);
  assert.match(r.stderr, /12,000-line/);
});
test('flags public content changes for enhanced review without merging', () => {
  const r=fixture({'public/apps/overview.md':'public content\n'}, 'content');
  assert.equal(r.status, 0, r.stderr);
  const payload=JSON.parse(r.stdout);
  assert.equal(payload.review_tier, 'enhanced');
  assert.ok(payload.review_reasons.includes('public-content-changes'));
  assert.equal(payload.auto_merge, false);
});
test('keeps small docs addition at standard review', () => {
  const r=fixture({'docs/safe.md':'safe\n'});
  assert.equal(r.status, 0, r.stderr);
  const payload=JSON.parse(r.stdout);
  assert.equal(payload.review_tier, 'standard');
  assert.deepEqual(payload.review_reasons, []);
  assert.ok(payload.staged_blob_bytes > 0);
});
test('rejects unsafe shell file inside public content folder', () => {
  const r=fixture({'public/apps/publish.sh':'echo test\n'}, 'content');
  assert.notEqual(r.status, 0);
});
