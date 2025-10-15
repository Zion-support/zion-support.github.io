#!/usr/bin/env node

import fs from 'fs';
// import path from 'path'; // Unused import
import { glob } from 'glob';

// Patterns to fix malformed object syntax
const fixes = [
  // Fix trailing commas in object properties
  { pattern: /(\w+):\s*([^,}]+),\s*}/g, replacement: '$1: $2 }' },
  // Fix trailing commas in arrays
  { pattern: /(\w+)\s*,\s*]/g, replacement: '$1 ]' },
  // Fix double commas
  { pattern: /,\s*,/g, replacement: ',' },
  // Fix semicolons in object properties
  { pattern: /(\w+):\s*([^,}]+);/g, replacement: '$1: $2,' },
  // Fix malformed object declarations
  { pattern: /{\s*(\w+):\s*([^,}]+),\s*}/g, replacement: '{ $1: $2 }' },
  // Fix array syntax issues
  { pattern: /\[\s*(\w+)\s*,\s*\]/g, replacement: '[ $1 ]' },
  // Fix malformed JSX attributes
  { pattern: /const\s+(\w+)\s*=\s*{([^}]+)}/g, replacement: '$1={$2}' },
  // Fix duplicate closing brackets
  { pattern: /\]\]/g, replacement: ']' },
  // Fix malformed export statements
  { pattern: /export\s+default\s+NotFoundPage;/g, replacement: 'export default config;' },
  // Fix interface syntax
  { pattern: /(\w+):\s*(\w+);,/g, replacement: '$1: $2;' },
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply all fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Additional specific fixes for common patterns
    content = content.replace(/,\s*}/g, ' }');
    content = content.replace(/,\s*]/g, ' ]');
    content = content.replace(/;\s*}/g, ' }');
    content = content.replace(/;\s*]/g, ' ]');
    
    // Fix malformed object destructuring
    content = content.replace(/{\s*(\w+)\s*,\s*}/g, '{ $1 }');
    
    // Fix malformed array destructuring
    content = content.replace(/\[\s*(\w+)\s*,\s*\]/g, '[ $1 ]');
    
    if (content !== originalContent) {
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

function main() {
  const patterns = [
    'app/**/*.ts',
    'app/**/*.tsx',
    'components/**/*.ts',
    'components/**/*.tsx',
    'pages/**/*.ts',
    'pages/**/*.tsx',
    'utils/**/*.ts',
    'utils/**/*.tsx'
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
  
  console.log(`\nFixed ${totalFixed} files`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixFile, fixes };