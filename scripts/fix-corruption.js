// Simple bulk fixer for common corruption patterns introduced in TS/TSX files
// - Removes commas after case labels: case 'x':,
// - Removes stray commas after semicolons: ...;,
// - Fixes "{," after blocks and signatures
// - Fixes constructor/method openings like "){,"
// - Ensures broken multi-line commented imports are fixed for getPerformanceOptimizer

import fs from 'fs';
import { glob } from 'glob';

function fixContent(content, filePath) {
  let updated = content;
  updated = updated.replace(/(case\s+[^:]+:\s*),/g, '$1');
  updated = updated.replace(/(default:\s*),/g, '$1');
  updated = updated.replace(/;\s*,/g, ';');
  updated = updated.replace(/\{\s*,/g, '{');
  updated = updated.replace(/\)\s*\{\s*,/g, '){');
  updated = updated.replace(/(:[^;]+;)[\t ]*,/g, '$1');
  updated = updated.replace(/,,/g, ',');
  if (filePath.endsWith('src/utils/enhancedAnalytics.ts')) {
    updated = updated.replace(
      /\n\s*\/\/\s*import\s*\{[\r\n]+\s*getPerformanceOptimizer[\r\n]+\s*\}\s*from\s*'\.\/performanceOptimizer'\s*;?/g,
      "\nimport { getPerformanceOptimizer } from './performanceOptimizer';"
    );
  }
  return updated;
}

async function run() {
  const files = await glob('src/**/*.{ts,tsx}', { ignore: ['**/node_modules/**', '**/dist/**', '**/build/**'] });
  let changed = 0;
  for (const file of files) {
    try {
      const original = fs.readFileSync(file, 'utf8');
      const fixed = fixContent(original, file);
      if (fixed !== original) {
        fs.writeFileSync(file, fixed, 'utf8');
        changed++;
      }
    } catch {}
  }
  console.log(`Fixed ${changed} files.`);
}

run().catch((e) => { console.error(e); process.exit(1); });