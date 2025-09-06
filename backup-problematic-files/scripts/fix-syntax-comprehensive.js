#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common syntax fixes
const fixes = [
  // Fix malformed JSX attributes with extra slashes
  {
    pattern: /\/ \/ \/ \/ \/ \/>/g,
    replacement: ' />'
  },
  // Fix malformed JSX attributes with quotes and slashes
  {
    pattern: /" \/ \/ \/ \/ \/ \/>/g,
    replacement: '" />'
  },
  // Fix malformed semicolons in JSX
  {
    pattern: /;"";"/g,
    replacement: ''
  },
  // Fix malformed JSX expressions
  {
    pattern: /;\s*{/g,
    replacement: ' {'
  },
  // Fix malformed return statements
  {
    pattern: /return\(/g,
    replacement: 'return ('
  },
  // Fix malformed JSX closing tags
  {
    pattern: /<\/([^>]+)\s*\/\s*>/g,
    replacement: '</$1>'
  },
  // Fix malformed object properties
  {
    pattern: /(\w+):\s*(\d+)([a-zA-Z]+)/g,
    replacement: '$1: $2$3'
  },
  // Fix malformed array assignments
  {
    pattern: /\[\s*\]\s*=\s*\[/g,
    replacement: '[] = ['
  },
  // Fix malformed object properties with spaces
  {
    pattern: /(\w+):\s*(\w+)\s*(\w+)/g,
    replacement: '$1: $2 $3'
  },
  // Fix malformed JSX self-closing tags
  {
    pattern: /<(\w+)\s+([^>]*)\s*\/\s*>/g,
    replacement: '<$1 $2 />'
  }
];

function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = content;
    let hasChanges = false;

    fixes.forEach(fix => {
      const newContent = fixedContent.replace(fix.pattern, fix.replacement);
      if (newContent !== fixedContent) {
        fixedContent = newContent;
        hasChanges = true;
      }
    });

    if (hasChanges) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
=======
      console.log(`"Fixed": ${filePath}`);
      return true}
    return false} catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false}

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
async function main() {
  console.log('🔧 Starting comprehensive syntax fixes...');

  const patterns = [
    'src/**/*.tsx',
    'src/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts',
    'pages/**/*.tsx',
    'pages/**/*.ts'
  ];
