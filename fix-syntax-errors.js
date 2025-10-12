#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// List of files with critical syntax errors
const filesToFix = [
  'app/ai-supply-chain-optimizer/page.tsx',
  'app/ai-translation-service/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/cloud-infrastructure-management/page.tsx',
  'app/cloud-migration-pro/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix duplicate imports
    const importLines = content.split('\n').filter(line => line.trim().startsWith('import'));
    const uniqueImports = new Set();
    const cleanedImports = [];
    
    for (const line of importLines) {
      if (!uniqueImports.has(line.trim())) {
        uniqueImports.add(line.trim());
        cleanedImports.push(line);
      }
    }

    // Remove duplicate import lines
    const lines = content.split('\n');
    const newLines = [];
    let inImportSection = true;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (inImportSection && line.trim().startsWith('import')) {
        // Skip duplicate imports
        if (cleanedImports.includes(line)) {
          newLines.push(line);
        }
      } else {
        inImportSection = false;
        newLines.push(line);
      }
    }

    content = newLines.join('\n');

    // Fix common syntax errors
    const fixes = [
      // Fix extra closing brackets
      { pattern: /  \];\s*\n\s*\]\s*\n\s*\];/g, replacement: '  ];' },
      // Fix missing closing brackets before imports
      { pattern: /    \}\nimport /g, replacement: '    }\n  ];\n\nimport ' },
      // Fix duplicate descriptions
      { pattern: /description: '([^']+)'\s*\n\s*description: '([^']+)'/g, replacement: "description: '$2'" },
      // Fix missing closing tags in arrays
      { pattern: /    \}\nimport /g, replacement: '    }\n  ];\n\nimport ' },
      // Fix extra semicolons
      { pattern: /;;/g, replacement: ';' },
      // Fix malformed JSX fragments
      { pattern: /<>\s*<>\s*<>\s*<\/>\s*<\/>\s*<\/>/g, replacement: '<></>' },
    ];

    for (const fix of fixes) {
      if (fix.pattern.test(content)) {
        content = content.replace(fix.pattern, fix.replacement);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
for (const file of filesToFix) {
  const fullPath = path.join(process.cwd(), file);
  if (fs.existsSync(fullPath)) {
    fixFile(fullPath);
  }
}

console.log('Syntax error fixes completed');