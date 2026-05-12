#!/usr/bin/env node
// Track bundle size history for trend analysis
const fs = require('fs');
const path = '.hermes/memory/bundle-history.json';

let data = { history: [] };
if (fs.existsSync(path)) {
  try {
    data = JSON.parse(fs.readFileSync(path, 'utf8'));
  } catch (e) {
    console.error('Failed to read history:', e.message);
  }
}

const entry = {
  size: parseInt(process.env.BUNDLE_SIZE || '0'),
  ts: new Date().toISOString(),
  hash: process.env.GIT_HASH || require('child_process').execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim()
};

data.history.unshift(entry);
if (data.history.length > 10) data.history = data.history.slice(0, 10);
fs.writeFileSync(path, JSON.stringify(data, null, 2));
console.log(`Bundle history updated: ${entry.size} bytes at ${entry.ts}`);