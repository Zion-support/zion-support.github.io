'use strict';
// Prove the real test rejects broken calculation and canonical metadata.
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const assert = require('node:assert/strict');
const {spawnSync} = require('node:child_process');
const source = path.resolve(process.argv[2] || 'out');
const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'finops-validation-'));
const runtime = 'assets/js/finops-scenario.js';
const routes = ['', 'pt/', 'es/', 'fr/', 'de/'].flatMap(prefix =>
  ['scenario-estimator', 'pilot-guide'].map(slug => prefix + 'apps/finops-' + slug + '.html'));
const run = () => spawnSync(process.execPath,
  [path.join(__dirname, 'test-finops-scenario.cjs'), temporary, '--pages-only'],
  {cwd: path.resolve(__dirname, '..'), encoding: 'utf8'});
try {
  for (const relative of [runtime, ...routes]) {
    const target = path.join(temporary, relative);
    fs.mkdirSync(path.dirname(target), {recursive: true});
    fs.copyFileSync(path.join(source, relative), target);
  }
  const valid = run();
  assert.equal(valid.status, 0, valid.stderr);
  const runtimePath = path.join(temporary, runtime);
  const original = fs.readFileSync(runtimePath, 'utf8');
  fs.appendFileSync(runtimePath, '\nZionFinopsScenario.calculate = function () { return [0, 0, 0, 0]; };\n');
  assert.notEqual(run().status, 0, 'Test must reject wrong math; a comment-only test cannot pass');
  fs.writeFileSync(runtimePath, original);
  const page = path.join(temporary, routes[0]);
  const html = fs.readFileSync(page, 'utf8');
  assert(html.includes('rel="canonical"'));
  fs.writeFileSync(page, html.replace('rel="canonical"', 'rel="alternate-broken"'));
  assert.notEqual(run().status, 0, 'Test must reject missing canonical metadata');
  console.log('PASS real FinOps validation: valid artifact accepted; bad math and missing canonical rejected.');
} finally {
  fs.rmSync(temporary, {recursive: true, force: true});
}
