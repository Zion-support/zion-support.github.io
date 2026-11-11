'use strict';
// Temporary, exact-source compatibility patch for swallowed coverage errors.
// Upgrade only after reviewing the upstream reporter and rerunning real-Jest tests.
const fs = require('node:fs');
const crypto = require('node:crypto');
const VERSION = '30.4.1';
const ORIGINAL = 'de8bf0c54c0957889b8ea01921ebbd80455e1dd5394d034aaa5dcc9f2c8b7b1c';
const PATCHED = 'dd3ec293eac19d74d69d83943bf458f7d8e1429d6daab5a8479b7a4b2eba024d';
const digest = source => crypto.createHash('sha256').update(source).digest('hex');
function patchSource(source, version) {
  if (version !== VERSION) throw new Error('Unsupported @jest/reporters version: ' + version);
  const hash = digest(source);
  if (hash === PATCHED) return source;
  if (hash !== ORIGINAL) throw new Error('Unrecognized @jest/reporters source hash: ' + hash);
  for (const term of ['Failed to write coverage reports', 'Failed to collect coverage from']) {
    const index = source.indexOf(term);
    const start = source.lastIndexOf('console.error(', index);
    if (index < 0 || start < 0 || source.indexOf(term, index + 1) >= 0) throw new Error('Unexpected reporter structure');
    source = source.slice(0, start) +
      'this._setError(error instanceof Error ? error : new Error(String(error)));\n          ' +
      source.slice(start);
  }
  if (digest(source) !== PATCHED) throw new Error('Patched reporter hash mismatch');
  return source;
}
function main() {
  const opts = {paths: [process.cwd()]};
  const entry = require.resolve('@jest/reporters', opts);
  const pkg = JSON.parse(fs.readFileSync(require.resolve('@jest/reporters/package.json', opts), 'utf8'));
  const original = fs.readFileSync(entry, 'utf8');
  const patched = patchSource(original, pkg.version);
  if (original !== patched) fs.writeFileSync(entry, patched);
  if (digest(fs.readFileSync(entry, 'utf8')) !== PATCHED) throw new Error('Reporter readback mismatch');
  console.log('Verified @jest/reporters coverage error propagation patch (' + VERSION + ').');
}
module.exports = {patchSource, digest, ORIGINAL, PATCHED};
if (require.main === module) {
  try { main(); } catch (error) { console.error('::error::' + error.message); process.exitCode = 2; }
}
