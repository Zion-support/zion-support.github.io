#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

console.log('Starting comprehensive JSX syntax error fixes...');

// Find all TypeScript/JSX files
const files = await glob('app/**/*.{tsx,ts}', { ignore: ['node_modules/**'] });

console.log(`Found ${files.length} files to check`);

let fixedFiles = 0;

for (const filePath of files) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common JSX syntax errors
    const fixes = [
      // Fix semicolons in JSX text content
      {
        pattern: /([^>])\s*;\s*$/gm,
        replacement: '$1'
      },
      // Fix malformed closing tags
      {
        pattern: /;\s*<\/[^>]+>/g,
        replacement: '</$1>'
      },
      // Fix incomplete closing tags
      {
        pattern: /;\s*<\//g,
        replacement: '</'
      },
      // Fix orphaned closing tags at end of lines
      {
        pattern: /;\s*$/gm,
        replacement: ''
      },
      // Fix malformed JSX structure like "text; </" 
      {
        pattern: /([^>])\s*;\s*<\//g,
        replacement: '$1</'
      },
      // Fix incomplete JSX elements
      {
        pattern: /([^>])\s*;\s*$/gm,
        replacement: '$1'
      }
    ];

    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      fixedFiles++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

console.log(`Fixed ${fixedFiles} files`);
console.log('JSX syntax error fixes completed');