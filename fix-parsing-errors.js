#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common fixes for parsing errors
const fixes = [
  // Fix HTML entities
  { pattern: /&apos;/g, replacement: "'" },
  { pattern: /&quot;/g, replacement: '"' },
  { pattern: /&lt;/g, replacement: '<' },
  { pattern: /&gt;/g, replacement: '>' },
  { pattern: /&amp;/g, replacement: '&' },
  
  // Fix common syntax issues
  { pattern: /&apos;use client&apos;/g, replacement: "'use client'" },
  { pattern: /&apos;use server&apos;/g, replacement: "'use server'" },
  
  // Fix merge conflict markers
  { pattern: /<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, replacement: '' },
  { pattern: /<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, replacement: '' },
  
  // Fix missing React imports
  { pattern: /^(?!.*import React)/m, replacement: (match, offset, string) => {
    if (string.includes('JSX') || string.includes('<') || string.includes('React.')) {
      return "import React from 'react';\n" + match;
    }
    return match;
  }},
  
  // Fix common TypeScript issues
  { pattern: /: React\.FC\s*=\s*\(\)\s*=>/g, replacement: ' = () =>' },
  { pattern: /: React\.FC\s*=\s*\(/g, replacement: ' = (' },
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('Fixing parsing errors...');
  
  // Get all TypeScript and JavaScript files
  const patterns = [
    'app/**/*.{ts,tsx,js,jsx}',
    'components/**/*.{ts,tsx,js,jsx}',
    'hooks/**/*.{ts,tsx,js,jsx}',
    'contexts/**/*.{ts,tsx,js,jsx}',
    'api/**/*.{ts,tsx,js,jsx}',
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      if (fixFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`Fixed ${totalFixed} files`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixFile, fixes };