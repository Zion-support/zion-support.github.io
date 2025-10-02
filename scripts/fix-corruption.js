// Simple bulk fixer for common corruption patterns introduced in TS/TSX files
// - Removes commas after case labels: case 'x':,
// - Removes stray commas after semicolons: ...;,
// - Fixes "{," after blocks and signatures
// - Fixes constructor/method openings like "){,"
// - Ensures broken multi-line commented imports are fixed for getPerformanceOptimizer

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

function fixContent(content, filePath) {
  let updated = content;

  // 1) case/default labels with trailing comma
  updated = updated.replace(/(case\s+[^:]+:\s*),/g, '$1');
  updated = updated.replace(/(default:\s*),/g, '$1');

  // 2) Remove comma immediately following a semicolon end-of-statement
  // e.g. "return foo;," -> "return foo;"
  updated = updated.replace(/;\s*,/g, ';');

  // 3) Remove comma immediately after an opening brace of a block
  // e.g. "function x() {," -> "function x() {"
  updated = updated.replace(/\{\s*,/g, '{');

  // 4) Fix constructor/method openings like "){" followed by comma
  updated = updated.replace(/\)\s*\{\s*,/g, '){');

  // 5) Interface/property lines with ";," -> ";"
  updated = updated.replace(/(:[^;]+;)[\t ]*,/g, '$1');

  // 6) Lines that end with comma only after valid code
  // Careful: do not remove commas that separate array/object elements.
  // Apply narrowly to lines ending with ";," already addressed; also fix ",," -> ","
  updated = updated.replace(/,,/g, ',');

  // 7) Specific known broken import in enhancedAnalytics: uncomment properly
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
    } catch (err) {
      // ignore individual file errors
    }
  }
  console.log(`Fixed ${changed} files.`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});

