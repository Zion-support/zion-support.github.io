#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Pattern to find unterminated string literals with extra quotes
const syntaxErrorPattern = /(".*?"){2,}/g;

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common patterns
    const fixes = [
      // Fix unterminated string literals in JSX attributes
      {
        pattern: /(\s*)([a-zA-Z-]+)="([^"]*)"{2,}/g,
        replacement: '$1$2="$3"'
      },
      // Fix unterminated string literals in template literals
      {
        pattern: /(`[^`]*`){2,}/g,
        replacement: (match) => {
          // Remove extra backticks and quotes
          return match.replace(/`+/g, '`').replace(/"{2,}/g, '"');
        }
      },
      // Fix JSX tag closing issues
      {
        pattern: /(\/>){2,}/g,
        replacement: '/>'
      },
      // Fix common malformed JSX
      {
        pattern: /(\s*)<([a-zA-Z][a-zA-Z0-9]*)\s+([^>]*?)>{2,}/g,
        replacement: '$1<$2 $3>'
      }
    ];
    
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
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JSX files
const patterns = [
  'app/**/*.tsx',
  'src/**/*.tsx',
  'src/**/*.ts',
  'components/**/*.tsx',
  'components/**/*.ts'
];

let totalFixed = 0;

patterns.forEach(pattern => {
  const files = glob.sync(pattern, { cwd: __dirname });
  
  files.forEach(file => {
    const fullPath = path.join(process.cwd(), file);
    if (fixSyntaxErrors(fullPath)) {
      totalFixed++;
    }
  });
});

console.log(`\nTotal files fixed: ${totalFixed}`);