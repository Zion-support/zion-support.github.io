#!/usr/bin/env node
const path = require('path');

try {
  require(path.join(__dirname, 'performance-optimizer.cjs'));
} catch (e) {
  console.error('Failed to run performance optimizer:', e.message);
  process.exit(1);
}