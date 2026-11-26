const assert = require('node:assert/strict');
const { spawn } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { parse, stringify } = require('node:querystring');
const { test } = require('node:test');
const { install } = require('./install.cjs');
const { publishRouteList, readRouteList } = require('./manifest.cjs');

function temporaryDirectory(t) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'next-route-manifest-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  return dir;
}

test('retains all normalized names in order across loader query encoding', t => {
  const dir = temporaryDirectory(t);
  const routes = ['/', '/(group)/[item]', '/@sidebar/news', '/a,b', '/[...rest]', '/são-paulo', '/a?b!c', '/%2F'];
  const filename = publishRouteList(dir, routes);
  const inline = parse(stringify({ allNormalizedAppPaths: routes })).allNormalizedAppPaths;
  const reference = parse(stringify({ normalizedAppPathsFile: filename })).normalizedAppPathsFile;
  assert.deepEqual(readRouteList(reference), inline);
  assert.strictEqual(readRouteList(filename), readRouteList(filename));
  assert.notEqual(publishRouteList(dir, [...routes].reverse()), filename);
  for (const list of [[], ['/one']]) {
    assert.deepEqual(readRouteList(publishRouteList(dir, list)), list);
  }
});

test('rejects a damaged file before caching its contents', t => {
  const dir = temporaryDirectory(t);
  const filename = publishRouteList(dir, ['/expected']);
  fs.writeFileSync(filename, '[]');
  assert.throws(() => readRouteList(filename), /does not match/);
});

test('multiple processes publish a complete file at the same address', async t => {
  const dir = temporaryDirectory(t);
  const script = 'const m=require(process.argv[1]);const p=m.publishRouteList(process.argv[2], ["/a","/b"]);require("node:assert/strict").deepEqual(m.readRouteList(p),["/a","/b"]);';
  const workers = Array.from({ length: 4 }, () => new Promise((resolve, reject) => {
    const child = spawn(process.execPath, ['-e', script, require.resolve('./manifest.cjs'), dir], { stdio: 'inherit' });
    child.on('error', reject);
    child.on('exit', status => status === 0 ? resolve() : reject(new Error('Worker exited with ' + status)));
  }));
  await Promise.all(workers);
  assert.equal(fs.readdirSync(dir).length, 1);
});

test('one serialized reference stays bounded at the application route count', t => {
  const dir = temporaryDirectory(t);
  const routes = Array.from({ length: 51732 }, (_, n) => '/catalog/' + n);
  const filename = publishRouteList(dir, routes);
  assert.ok(stringify({ normalizedAppPathsFile: filename }).length < 512);
  assert.ok(stringify({ allNormalizedAppPaths: routes }).length > 1000000);
  assert.deepEqual(readRouteList(filename), routes);
});

test('an unrecognized upstream build stays byte-for-byte untouched', t => {
  const dir = temporaryDirectory(t);
  fs.writeFileSync(path.join(dir, 'entries.js'), '/* synthetic future implementation */');
  install(dir);
  assert.deepEqual(fs.readdirSync(dir), ['entries.js']);
  assert.equal(fs.readFileSync(path.join(dir, 'entries.js'), 'utf8'), '/* synthetic future implementation */');
});
