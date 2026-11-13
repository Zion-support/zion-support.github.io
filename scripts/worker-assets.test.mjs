import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import { randomBytes, createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { gunzipSync } from 'node:zlib';
import http from 'node:http';
import { packAssets } from './pack-worker-assets.mjs';
import { PREFIX, PACK_BYTES, FILE_BYTES, shardFromDigest } from '../cloudflare/asset-format.mjs';

const require = createRequire(path.resolve(process.env.WORKER_TEST_MODULES || '.', 'package.json'));
const { Miniflare, convertV4MiniflareOptions } = require('miniflare');
const { buildSync } = require('esbuild');
const root = fileURLToPath(new URL('../', import.meta.url));
const configuration = JSON.parse(await fs.readFile(path.join(root, 'wrangler.jsonc'), 'utf8'));

test('export package preserves files and HTTP behavior in workerd', async (t) => {
  const temp = await fs.mkdtemp(path.join(os.tmpdir(), 'zion-worker-assets-'));
  const input = path.join(temp, 'out'), output = path.join(temp, 'assets');
  await fs.mkdir(input);
  const content = {
    'index.html': '<!doctype html><title>Home</title>Olá, Zion',
    'discovery/index.html': '<!doctype html><title>Discovery</title>Plan',
    'discovery.html': '<!doctype html><title>Legacy exact file</title>',
    'discovery/index.txt': '1:"$Sreact.fragment"\n2:{"children":"Discovery"}',
    'discovery/__next._tree.txt': '0:["tree",{"segment":"discovery"}]',
    '404.html': '<!doctype html><title>Missing</title>404',
    'café/index.html': '<title>Café</title>',
    'flat.html': '<title>Flat</title>',
    '_next/static/test.js': 'console.log("fixture")',
    'icon.png': randomBytes(128),
    '_redirects': '/discovery/ /wrong/ 301',
    '_headers': '/*\n  X-Legacy: ignored',
    'a.txt': randomBytes(800000).toString('base64'),
    'b.txt': randomBytes(800000).toString('base64'),
    'large.html': '<html>' + 'x'.repeat(FILE_BYTES) + '</html>',
  };
  for (const [name, bytes] of Object.entries(content)) {
    await fs.mkdir(path.dirname(path.join(input, name)), { recursive: true });
    await fs.writeFile(path.join(input, name), bytes);
  }
  const report = await packAssets(input, output);
  assert.ok(report.packs >= 2); assert.ok(report.maxPackBytes <= PACK_BYTES);
  assert.equal(report.packedFiles, report.verifiedFiles);
  assert.ok(report.uploadFiles < 20000);
  await assert.rejects(packAssets(input, output), { code: 'EEXIST' });
  for (const [name, bytes] of Object.entries(content)) assert.deepEqual(await fs.readFile(path.join(input, name)), Buffer.from(bytes));
  const mf = new Miniflare(convertV4MiniflareOptions({ workers: [{
    name: 'zion-test',
    modules: true, script: buildSync({ entryPoints: [path.join(root, configuration.main)], bundle: true, write: false, format: 'esm', platform: 'neutral' }).outputFiles[0].text,
    compatibilityDate: configuration.compatibility_date,
    assets: { directory: output, binding: 'ASSETS', run_worker_first: configuration.assets.run_worker_first,
      routerConfig: { has_user_worker: true },
      assetConfig: { html_handling: 'none', not_found_handling: 'none' } },
  }] }));
  t.after(async () => { await mf.dispose(); await fs.rm(temp, { recursive: true, force: true }); });
  const get = (url, options) => mf.dispatchFetch('https://example.com' + url, options);
  for (const [name, bytes] of Object.entries(content)) {
    if (name.startsWith('_headers') || name.startsWith('_redirects')) continue;
    const res = await get('/' + name, { headers: { 'Accept-Encoding': 'identity' } });
    assert.equal(res.status, 200, name);
    assert.deepEqual(Buffer.from(await res.arrayBuffer()), Buffer.from(bytes), name);
  }
  for (const [url, name] of [['/', 'index.html'], ['/discovery/', 'discovery/index.html'], ['/caf%C3%A9/', 'café/index.html'], ['/flat', 'flat.html'], ['/large', 'large.html']]) {
    const res = await get(url, { headers: { 'Accept-Encoding': 'identity' } });
    assert.equal(res.status, 200, url); assert.equal(await res.text(), content[name], url);
  }
  const redirect = await get('/discovery?x=1', { redirect: 'manual' });
  assert.equal(redirect.status, 308); assert.equal(redirect.headers.get('location'), 'https://example.com/discovery/?x=1');
  const address = await mf.ready;
  const compressed = await new Promise((resolve, reject) => {
    http.get(new URL('/discovery/', address), { headers: { 'Accept-Encoding': 'gzip' } }, res => {
      const chunks = []; res.on('data', c => chunks.push(c));
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, bytes: Buffer.concat(chunks) }));
      res.on('error', reject);
    }).on('error', reject);
  });
  assert.equal(compressed.status, 200);
  assert.equal(compressed.headers['content-encoding'], 'gzip');
  assert.equal(gunzipSync(compressed.bytes).toString(), content['discovery/index.html']);
  const etag = compressed.headers.etag;
  const conditional = await get('/discovery/', { headers: { 'Accept-Encoding': 'gzip', 'If-None-Match': 'W/' + etag } });
  assert.equal(conditional.status, 304); assert.equal(await conditional.text(), '');
  const head = await get('/discovery/', { method: 'HEAD', headers: { 'Accept-Encoding': 'identity' } });
  assert.equal(head.status, 200); assert.equal(Number(head.headers.get('content-length')), Buffer.byteLength(content['discovery/index.html'])); assert.equal(await head.text(), '');
  const noGzip = await get('/discovery/', { headers: { 'Accept-Encoding': 'gzip;q=0,*;q=1' } });
  assert.equal(noGzip.headers.get('content-encoding'), null); assert.equal(await noGzip.text(), content['discovery/index.html']);
  const range = await get('/discovery/', { headers: { Range: 'bytes=0-5', 'Accept-Encoding': 'identity' } });
  assert.equal(range.status, 200); assert.equal(await range.text(), content['discovery/index.html']);
  const missing = await get('/not-an-exported-route', { headers: { 'Accept-Encoding': 'identity' } });
  assert.equal(missing.status, 404); assert.equal(await missing.text(), content['404.html']);
  assert.equal((await get(PREFIX + 'p0.bin')).status, 404);
  assert.equal((await get('/discovery/', { method: 'POST', body: 'x' })).status, 405);
  assert.equal((await get('/bad%escape')).status, 400);
  // A valid export with missing storage must fail explicitly, never serve truncated HTML.
  const shard = shardFromDigest(createHash('sha256').update('/discovery/').digest());
  const index = JSON.parse(await fs.readFile(path.join(output, PREFIX, `i${shard}.json`)));
  const missingPack = `p${index['/discovery/'][0]}.bin`;
  await fs.rename(path.join(output, PREFIX, missingPack), path.join(output, PREFIX, missingPack + '.held'));
  const failed = await get('/discovery/');
  assert.equal(failed.status, 503);
});

test('rejects symlinks and over-limit direct files before upload', async (t) => {
  const temp = await fs.mkdtemp(path.join(os.tmpdir(), 'zion-worker-gates-'));
  t.after(() => fs.rm(temp, { recursive: true, force: true }));
  const input = path.join(temp, 'out'); await fs.mkdir(input);
  await fs.symlink('/etc/passwd', path.join(input, 'link'));
  await assert.rejects(packAssets(input, path.join(temp, 'symlinks')), /non-regular/);
  await fs.unlink(path.join(input, 'link'));
  const f = await fs.open(path.join(input, 'oversize.bin'), 'w'); await f.truncate(25 * 1024 * 1024 + 1); await f.close();
  await assert.rejects(packAssets(input, path.join(temp, 'oversize')), /25 MiB/);
});
