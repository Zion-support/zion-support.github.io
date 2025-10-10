#!/usr/bin/env node

const fs = require('fs');

// Read the performanceMonitor.ts file
let content = fs.readFileSync('/workspace/src/utils/performanceMonitor.ts', 'utf8');

// Fix common syntax issues
const fixes = [
  // Fix missing semicolons
  {
    pattern: /(\w+)\s*$/gm,
    replacement: '$1;'
  },
  // Fix missing semicolons after method calls
  {
    pattern: /(\w+\([^)]*\))\s*$/gm,
    replacement: '$1;'
  },
  // Fix missing semicolons after assignments
  {
    pattern: /(\w+\s*=\s*[^;]+)\s*$/gm,
    replacement: '$1;'
  },
  // Fix missing semicolons after return statements
  {
    pattern: /(return\s+[^;]+)\s*$/gm,
    replacement: '$1;'
  },
  // Fix missing semicolons after console.log
  {
    pattern: /(console\.log\([^)]*\))\s*$/gm,
    replacement: '$1;'
  },
  // Fix missing semicolons after if statements
  {
    pattern: /(if\s*\([^)]+\)\s*return\s+[^;]+)\s*$/gm,
    replacement: '$1;'
  }
];

// Apply fixes
for (const fix of fixes) {
  content = content.replace(fix.pattern, fix.replacement);
}

// Write the fixed content back
fs.writeFileSync('/workspace/src/utils/performanceMonitor.ts', content);

console.log('Fixed performanceMonitor.ts syntax issues');