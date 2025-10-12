#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// List of files to fix
const filesToFix = [
  'app/ai-supply-chain-optimizer/page.tsx',
  'app/ai-translation-service/page.tsx', 
  'app/blockchain-web3/page.tsx',
  'app/cloud-infrastructure-management/page.tsx',
  'app/cloud-migration-pro/page.tsx'
];

function fixMalformedTags(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed closing tags in object properties
    const fixes = [
      // Fix patterns like "}, {</TagName>"
      { pattern: /},\s*{\s*<\/\w+>/g, replacement: '},\n    {' },
      // Fix patterns like "description: 'text',</TagName>"
      { pattern: /,\s*<\/\w+>/g, replacement: ',' },
      // Fix patterns like "{</TagName>"
      { pattern: /{\s*<\/\w+>/g, replacement: '{' },
      // Fix patterns like "    {</TagName>"
      { pattern: /(\s+){\s*<\/\w+>/g, replacement: '$1{' },
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
      console.log(`Fixed malformed tags in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
for (const file of filesToFix) {
  const fullPath = path.join(process.cwd(), file);
  if (fs.existsSync(fullPath)) {
    fixMalformedTags(fullPath);
  }
}

console.log('Malformed tag fixes completed');