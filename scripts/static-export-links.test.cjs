'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { createCopy } = require('./static-export-links.cjs');

async function fixture(t) {
  const root = await fs.promises.realpath(await fs.promises.mkdtemp(path.join(os.tmpdir(), 'zion-export-test-')));
  t.after(() => fs.promises.rm(root, { recursive: true, force: true }));
  const source = path.join(root, '.next/server/app/services/test.html');
  const destination = path.join(root, 'out/services/test/index.html');
  await fs.promises.mkdir(path.dirname(source), { recursive: true });
  await fs.promises.mkdir(path.dirname(destination), { recursive: true });
  await fs.promises.writeFile(source, '<h1>Complete page</h1>');
  return { root, source, destination };
}

test('HTML, RSC and segment bytes share storage; source and exported paths survive independently', async t => {
  const f = await fixture(t), stats = {}, copy = createCopy({ root: f.root, stats });
  for (const extension of ['.html', '.rsc', '.segment.rsc']) {
    const src = f.source + extension, dst = f.destination + extension;
    await fs.promises.writeFile(src, 'full ' + extension);
    await copy(src, dst);
    assert.deepEqual(await fs.promises.readFile(dst), await fs.promises.readFile(src));
    assert.equal((await fs.promises.stat(src)).ino, (await fs.promises.stat(dst)).ino);
    await fs.promises.unlink(src);
    assert.equal(await fs.promises.readFile(dst, 'utf8'), 'full ' + extension);
  }
  assert.equal(stats.linkedFiles, 3);
  assert.equal(stats.fallbackCopies, 0);
});

test('pre-existing output preserves normal overwrite behavior', async t => {
  const f = await fixture(t), copy = createCopy({ root: f.root });
  await fs.promises.writeFile(f.destination, 'public version');
  await copy(f.source, f.destination);
  assert.equal(await fs.promises.readFile(f.destination, 'utf8'), '<h1>Complete page</h1>');
  assert.notEqual((await fs.promises.stat(f.source)).ino, (await fs.promises.stat(f.destination)).ino);
});

test('unsupported filesystems copy normally; disk and I/O errors remain failures', async t => {
  const f = await fixture(t);
  for (const code of ['EXDEV', 'EPERM', 'ENOSPC', 'EIO']) {
    const stats = {}, io = Object.create(fs.promises);
    io.link = async () => { throw Object.assign(new Error(code), { code }); };
    const copy = createCopy({ root: f.root, io, stats });
    if (['ENOSPC', 'EIO'].includes(code)) await assert.rejects(copy(f.source, f.destination), { code });
    else { await copy(f.source, f.destination); assert.equal(stats.fallbackCopies, 1); }
    assert.equal(stats.linkedFiles, 0);
  }
});

test('public assets, route bodies, sibling paths and explicit copy flags are not linked', async t => {
  const f = await fixture(t), stats = {}, copy = createCopy({ root: f.root, stats });
  for (const rel of ['public/a.html', '.next/server/app/a.body', '.next/server/app-other/a.html']) {
    const src = path.join(f.root, rel);
    await fs.promises.mkdir(path.dirname(src), { recursive: true });
    await fs.promises.writeFile(src, rel);
    await copy(src, f.destination);
    assert.notEqual((await fs.promises.stat(src)).ino, (await fs.promises.stat(f.destination)).ino);
  }
  await assert.rejects(copy(f.source, f.destination, fs.constants.COPYFILE_EXCL), { code: 'EEXIST' });
  assert.equal(stats.linkedFiles, 0);
});

test('symlink source or output parent uses copy semantics, without linking', async t => {
  const f = await fixture(t), stats = {}, copy = createCopy({ root: f.root, stats });
  const alias = f.source + '.alias.html';
  await fs.promises.symlink(f.source, alias);
  await copy(alias, f.destination);
  const realOut = path.join(f.root, 'real-output');
  await fs.promises.mkdir(realOut);
  await fs.promises.symlink(realOut, path.join(f.root, 'out/alias'));
  await copy(f.source, path.join(f.root, 'out/alias/index.html'));
  assert.equal(stats.linkedFiles, 0);
  assert.notEqual((await fs.promises.stat(f.source)).ino, (await fs.promises.stat(f.destination)).ino);
});
