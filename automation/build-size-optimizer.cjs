#!/usr/bin/env node
// automation/build-size-optimizer.cjs
// Autosuggest script that uses next-bundle-analyzer to propose tree‑shaking or dynamic imports

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/* Helper to load suggestion config */
const configPath = path.resolve('.github/lsm-opt.json');
const config = fs.existsSync(configPath) ? JSON.parse(fs.readFileSync(configPath, 'utf8')) : { largeThreshold: 0.01 };

/* 1. Build bundle analysis */
console.log('▶️ Running Next.js build and export…');
const out = execSync('npm run build', { encoding: 'utf8', stdio: 'pipe' });
console.log(out);

/* 2. Run analyzer & get modules list */
console.log('▶️ Running next-bundle-analyzer…');
const report = JSON.parse(execSync('npx next bundle-analyze', { encoding: 'utf8' }));
const modules = report.modules;

/* 3. Identify heavy modules */
const thresholdSize = 1024 * 1024 * config.largeThreshold; // config.largeThreshold is fraction like 0.01 for 1%
const heavy = modules.filter(m => m.size > thresholdSize);

if (heavy.length) {
  const suggestions = heavy.map(m => ({
    path: m.sizePath || m.path,
    msg: `Consider dynamic import or tree‑shake for ${m.name}`
  }));
  const outPath = path.resolve('.hermes/memory/build-suggestions.json');
  fs.writeFileSync(outPath, JSON.stringify(suggestions, null, 2));
  console.log(`✅ Suggestions written to ${outPath}`);
} else {
  console.log('✅ No heavy modules found.');
}

"use strict";