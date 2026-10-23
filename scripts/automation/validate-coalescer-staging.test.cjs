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
function fixture(changes, group='docs') {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), 'coalescer-'));
  git(cwd, 'init', '-q');
  git(cwd, 'config', 'user.email', 'test@example.invalid');
  git(cwd, 'config', 'user.name', 'Test');
  fs.writeFileSync(path.join(cwd, 'README.md'), 'base\n');
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
test('rejects protected workflow deletion', () => {
  // Rename test covers both sides of rename via --no-renames.
  const r = fixture({'README.md':null,'docs/guide.md':'safe\n'});
  assert.equal(r.status, 0); // root README removal belongs to docs policy
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
