'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const crypto = require('node:crypto');
const { LOCALES, OUTPUT_PARTS, COPY, buildBundle, run } = require('./ai-services-and-content-automation.cjs');
function workspace(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'zion-draft-review-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  return root;
}
test('all five locales are explicit, unique and Brazil-first', () => {
  assert.deepEqual(LOCALES, ['pt-BR', 'en', 'es', 'fr', 'de']);
  assert.equal(new Set(LOCALES).size, 5);
});
test('generation produces genuine, labeled review drafts rather than a no-op', () => {
  const { drafts, manifest } = buildBundle();
  assert.equal(manifest.mode, 'draft-only');
  assert.equal(manifest.published, false);
  assert.equal(drafts.length, 5);
  for (const d of drafts) {
    assert.ok(d.content.length > 900);
    assert.ok(d.content.startsWith(`> ${COPY[d.locale].draft}`));
    assert.ok(d.content.includes(COPY[d.locale].heading));
    assert.equal((d.content.match(/^- /gm) || []).length, 4);
  }
});
test('localized catalog and Discovery links stay on the approved route allowlist', () => {
  for (const d of buildBundle().drafts) {
    const urls = [...d.content.matchAll(/\]\((https:\/\/[^)]+)\)/g)].map(m => m[1]);
    assert.deepEqual(urls, [
      `https://ziontechgroup.com${COPY[d.locale].prefix}/apps/`,
      `https://ziontechgroup.com${COPY[d.locale].prefix}/discovery/`
    ]);
    for (const url of urls) { const u = new URL(url); assert.equal(u.hostname, 'ziontechgroup.com'); assert.equal(u.search, ''); }
  }
});
test('all locales retain availability qualification and written PO/release requirements', () => {
  for (const d of buildBundle().drafts) {
    assert.ok(COPY[d.locale].coverage.length > 100);
    assert.ok(d.content.includes(COPY[d.locale].coverage));
    assert.ok(d.content.includes(COPY[d.locale].gate));
    assert.ok(d.content.includes('(PO)'));
    assert.ok(d.content.includes(COPY[d.locale].note));
  }
});
test('manifest byte counts and hashes match every actual draft', () => {
  const { drafts, manifest } = buildBundle();
  assert.equal(manifest.localeCount, 5);
  for (const [i, d] of drafts.entries()) {
    assert.equal(manifest.files[i].name, d.name);
    assert.equal(manifest.files[i].bytes, Buffer.byteLength(d.content, 'utf8'));
    assert.equal(manifest.files[i].sha256, crypto.createHash('sha256').update(d.content).digest('hex'));
  }
});
test('explicit draft mode writes five drafts and a truthful manifest only', t => {
  const root = workspace(t);
  const result = run(['--draft'], root);
  assert.equal(result.published, false);
  assert.equal(result.writtenFiles.length, 6);
  const dir = path.join(root, ...OUTPUT_PARTS);
  assert.equal(fs.readdirSync(dir).length, 6);
  assert.equal(JSON.parse(fs.readFileSync(path.join(dir, 'manifest.json'), 'utf8')).published, false);
});
test('repeating a draft run is byte-idempotent and does not rewrite identical output', t => {
  const root = workspace(t); const first = run(['--draft'], root); const second = run(['--draft'], root);
  assert.equal(first.writtenFiles.length, 6);
  assert.deepEqual(second.writtenFiles, []);
  assert.deepEqual(buildBundle(), buildBundle());
});
test('default, publish and arbitrary-output invocations fail before output creation', t => {
  const root = workspace(t);
  for (const args of [[], ['--publish'], ['--draft', '--publish'], ['--draft', '--output', 'public']]) {
    assert.throws(() => run(args, root), /Publishing is not implemented/);
  }
  assert.equal(fs.existsSync(path.join(root, 'automation')), false);
});
test('published-site content is untouched by draft generation', t => {
  const root = workspace(t); fs.mkdirSync(path.join(root, 'public'));
  fs.writeFileSync(path.join(root, 'public', 'index.html'), 'PUBLIC-SENTINEL');
  run(['--draft'], root);
  assert.equal(fs.readFileSync(path.join(root, 'public', 'index.html'), 'utf8'), 'PUBLIC-SENTINEL');
  assert.deepEqual(fs.readdirSync(path.join(root, 'public')), ['index.html']);
});
test('symlinked output parents are rejected without writing outside the workspace', t => {
  const root = workspace(t); const outside = workspace(t);
  fs.symlinkSync(outside, path.join(root, 'automation'), 'dir');
  assert.throws(() => run(['--draft'], root), /Unsafe draft output directory/);
  assert.deepEqual(fs.readdirSync(outside), []);
});
test('all output-file symlinks are rejected before any draft is written', t => {
  const root = workspace(t); const dir = path.join(root, ...OUTPUT_PARTS); fs.mkdirSync(dir, { recursive: true });
  const target = path.join(root, 'sentinel'); fs.writeFileSync(target, 'PRESERVE');
  fs.symlinkSync(target, path.join(dir, 'manifest.json'));
  assert.throws(() => run(['--draft'], root), /Unsafe draft output file/);
  assert.equal(fs.readFileSync(target, 'utf8'), 'PRESERVE');
  assert.deepEqual(fs.readdirSync(dir), ['manifest.json']);
});
test('the proposed workflow is manual, read-only and does not invoke release or secrets', () => {
  const workflow = fs.readFileSync(path.join(__dirname, '..', '.github', 'workflows', 'services-content-drafts.yml'), 'utf8');
  assert.match(workflow, /workflow_dispatch:/);
  assert.match(workflow, /permissions:\n  contents: read/);
  assert.match(workflow, /persist-credentials: false/);
  assert.doesNotMatch(workflow, /\bschedule:|\bpush:|\bpull_request:|secrets\.|safe-release|AUTO_COMMIT|git push/);
  assert.match(workflow, /if-no-files-found: error/);
});
