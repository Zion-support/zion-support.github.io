#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Focus on the most critical files with parsing errors
const criticalFiles = [
  'app/ai-supply-chain-optimizer/page.tsx',
  'app/ai-translation-service/page.tsx', 
  'app/blockchain-web3/page.tsx',
  'app/cloud-infrastructure-management/page.tsx',
  'app/cloud-migration-pro/page.tsx'
];

function fixCriticalErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common critical parsing errors
    const fixes = [
      // Fix missing commas in arrays
      { pattern: /(\s+)(\w+)\s*\n\s*(\w+)/g, replacement: '$1$2,\n$3' },
      // Fix missing closing brackets
      { pattern: /(\s+)(\w+)\s*\nimport/g, replacement: '$1$2\n  ];\n\nimport' },
      // Fix missing semicolons
      { pattern: /(\w+)\s*\n\s*(\w+)/g, replacement: '$1;\n$2' },
      // Fix duplicate closing tags
      { pattern: /<\/div>\s*<\/div>\s*<\/div>/g, replacement: '</div>' },
      // Fix malformed JSX
      { pattern: /<(\w+)\s+([^>]*)\s*>\s*<\1/g, replacement: '<$1 $2>' },
      // Fix missing closing tags
      { pattern: /<(\w+)([^>]*)>\s*([^<]*)\s*$/gm, replacement: '<$1$2>$3</$1>' },
    ];

    for (const fix of fixes) {
      const before = content;
      content = content.replace(fix.pattern, fix.replacement);
      if (content !== before) {
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed critical errors in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all critical files
for (const file of criticalFiles) {
  const fullPath = path.join(process.cwd(), file);
  if (fs.existsSync(fullPath)) {
    fixCriticalErrors(fullPath);
  }
}

console.log('Critical error fixes completed');