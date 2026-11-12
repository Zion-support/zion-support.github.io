#!/usr/bin/env node
'use strict';

// Preserve the normal Next CLI and npm postbuild sequence. This process alone
// uses the scoped copy adapter; no node_modules file or NODE_OPTIONS is changed.
const fs = require('node:fs');
const path = require('node:path');
const root = fs.realpathSync(process.cwd());
const { install } = require('./static-export-links.cjs');
const adapter = install(root);
let minimumAvailableBytes = Infinity;
function sample(phase) {
  const disk = fs.statfsSync(root);
  const availableBytes = disk.bavail * disk.bsize;
  minimumAvailableBytes = Math.min(minimumAvailableBytes, availableBytes);
  console.log('[static-export-disk]', JSON.stringify({ phase, availableBytes, minimumAvailableBytes, ...adapter.stats }));
}
sample('start');
const timer = setInterval(() => sample('sample'), 30000);
timer.unref();
process.once('exit', code => { clearInterval(timer); sample('exit-' + code); });
const next = require.resolve('next/dist/bin/next', { paths: [root] });
process.argv = [process.execPath, next, 'build', '--webpack', ...process.argv.slice(2)];
require(next);
