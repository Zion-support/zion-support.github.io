'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { verifyCoverage, main } = require('./test-coverage-summary.cjs');
const fixture = (covered, total) => ({ total: { lines: { covered, total } } });

test('passing line coverage is measured using counts, not reported pct', () => {
  const r = verifyCoverage({total:{lines:{covered:80,total:100,pct:99}}});
  assert.equal(r.percent,80); assert.equal(r.pass,true);
});
test('failing subthreshold coverage is not ignored', () => {
  assert.equal(verifyCoverage(fixture(59,100)).pass,false);
});
test('exact coverage threshold passes', () => {
  assert.equal(verifyCoverage(fixture(3,5)).pass,true);
});
test('missing coverage payload fails closed', () => {
  assert.throws(() => verifyCoverage({}), /missing-lines-summary/);
});
test('zero-file report fails closed even if pct says 100', () => {
  assert.throws(() => verifyCoverage({total:{lines:{covered:0,total:0,pct:100}}}), /invalid-lines-count/);
});
test('invalid and impossible counts are rejected', () => {
  for (const lines of [{covered:6,total:5},{covered:-1,total:5},{covered:'5',total:5}]) {
    assert.throws(() => verifyCoverage({total:{lines}}), /invalid-lines-count/);
  }
});
test('invalid threshold is rejected', () => {
  for (const threshold of [-1,101,NaN]) {
    assert.throws(() => verifyCoverage(fixture(80,100),threshold), /invalid-threshold/);
  }
});
test('missing JSON file fails with nonzero status', () => {
  assert.equal(main(['/tmp/zion-no-coverage-summary-expected.json']),2);
});
test('temporary JSON below threshold returns failure', () => {
  const dir=fs.mkdtempSync(path.join(os.tmpdir(),'zion-coverage-'));
  try {
    const dest=path.join(dir,'summary.json');
    fs.writeFileSync(dest,JSON.stringify(fixture(5,10)));
    assert.equal(main([dest,'60']),1);
  } finally {fs.rmSync(dir,{recursive:true,force:true});}
});
