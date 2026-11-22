const assert = require('node:assert/strict');
const { mkdtempSync, rmSync, writeFileSync } = require('node:fs');
const { createHash } = require('node:crypto');
const { tmpdir } = require('node:os');
const path = require('node:path');
const { parse, stringify } = require('node:querystring');
const { spawn } = require('node:child_process');
const { test } = require('node:test');
const { publishRouteList, readRouteList } = require('./manifest.cjs');
const folder = t => {
  const dir = mkdtempSync(path.join(tmpdir(), 'route-list-'));
  t.after(() => rmSync(dir, {recursive:true, force:true}));
  return dir;
};
const routes = ['/', '/(group)/[item]', '/@sidebar/news', '/a,b', '/[...rest]', '/são-paulo', '/a?b!c', '/%2F'];

test('keeps every route and the original ordering across loader query encoding', t => {
  const dir = folder(t);
  const filename = publishRouteList(dir, routes);
  const options = parse(stringify({ normalizedAppPathsFile: filename }));
  assert.deepEqual(readRouteList(options.normalizedAppPathsFile), parse(stringify({allNormalizedAppPaths: routes})).allNormalizedAppPaths);
  assert.strictEqual(readRouteList(filename), readRouteList(filename));
  assert.notEqual(publishRouteList(dir, routes.toReversed()), filename);
  assert.notEqual(publishRouteList(dir, [...routes, '/another']), filename);
  for (const list of [[], ['/single']]) assert.deepEqual(readRouteList(publishRouteList(dir, list)), list);
});

test('missing, corrupted and malformed manifests fail closed', t => {
  const dir = folder(t);
  assert.throws(() => readRouteList(path.join(dir,'missing')), /ENOENT/);
  const file = publishRouteList(dir, ['/uncached']);
  writeFileSync(file, '[]');
  assert.throws(() => readRouteList(file), /does not match/);
  const data = '[7]';
  const malformed = path.join(dir, createHash('sha256').update(data).digest('hex')+'.json');
  writeFileSync(malformed, data);
  assert.throws(() => readRouteList(malformed), /array of strings/);
});

test('separate build workers can publish and read the same manifest', async t => {
  const dir = folder(t);
  const child = `const m=require(process.argv[1]), a=JSON.parse(process.argv[3]);const p=m.publishRouteList(process.argv[2],a); require('node:assert/strict').deepEqual(m.readRouteList(p),a);`;
  const run = () => new Promise((resolve, reject) => {
    const p=spawn(process.execPath,['-e',child,require.resolve('./manifest.cjs'),dir,JSON.stringify(routes)], {stdio:'inherit'});
    p.on('error', reject);
    p.on('exit', code => code===0 ? resolve() : reject(new Error('worker exit '+code)));
  });
  await Promise.all([run(),run(),run(),run()]);
});

test('51,732 route names occupy one bounded query reference per entry', t => {
  const dir = folder(t);
  const many = Array.from({length:51732}, (_,n) => '/catalog/'+n);
  const ref = stringify({normalizedAppPathsFile:publishRouteList(dir,many)});
  assert.ok(ref.length < 512);
  assert.ok(stringify({allNormalizedAppPaths:many}).length > 1000000);
  assert.deepEqual(readRouteList(parse(ref).normalizedAppPathsFile), many);
});
