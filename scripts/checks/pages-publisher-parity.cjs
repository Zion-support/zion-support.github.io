'use strict';
// Read-only check: both GitHub Pages publishers must follow the same safe pipeline.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.resolve(__dirname, '../..');
const files = [
  '.github/workflows/gh-pages.yml',
  '.github/workflows/static-deploy.yml'
];
const sharedGroup = 'group: zion-production-pages-$' + '{{ github.ref }}';
const pipeline = [
  'run: bash scripts/prepare-pages-out.sh',
  'run: node scripts/render-productivity-release.cjs out',
  'run: node scripts/render-field-evidence-release.cjs out',
  'run: python3 scripts/assert-no-private-ops.py out',
  'uses: actions/upload-pages-artifact@',
  'uses: actions/deploy-pages@'
];

function linesOf(source) {
  return source.split(/\r?\n/).map(s => s.trim().replace(/^-\s*/, ''));
}
function position(lines, value) {
  return lines.findIndex(s => value.startsWith('uses:') ? s.startsWith(value) : s === value);
}
function inspect(source, filename) {
  const lines = linesOf(source);
  const issues = [];
  for (const required of [
    sharedGroup, 'cancel-in-progress: false', 'contents: read',
    'pages: write', 'id-token: write', 'workflow_dispatch:',
    "if: github.ref == 'refs/heads/main'"
  ]) if (!lines.includes(required)) issues.push(filename + ': missing ' + required);
  const indices = pipeline.map(step => position(lines, step));
  for (let i=0; i<indices.length; i++) {
    if (indices[i] < 0) issues.push(filename + ': missing step ' + pipeline[i]);
    if (i > 0 && indices[i] >= 0 && indices[i - 1] >= 0
      && indices[i] <= indices[i - 1]) issues.push(filename + ': steps out of order');
  }
  return issues;
}
function selfTest() {
  assert.deepEqual(linesOf('  - run: example\n').slice(0,1), ['run: example']);
  assert.equal(position(['run: a','run: b'], 'run: b'), 1);
  assert.equal(position(['run: b','run: a'], 'run: a'), 1);
  assert.equal(position(['uses: actions/deploy-pages@v4'], 'uses: actions/deploy-pages@'), 0);
  console.log('PASS 4 parser self-tests');
}
if (process.argv.includes('--self-test')) selfTest();
else {
  const errors = files.flatMap(file => inspect(fs.readFileSync(path.join(root,file),'utf8'),file));
  if (errors.length) {
    for (const e of errors) console.error('::error::'+e);
    process.exitCode = 1;
  } else console.log('PASS both Pages publishers use one ordered pipeline and concurrency group');
}
