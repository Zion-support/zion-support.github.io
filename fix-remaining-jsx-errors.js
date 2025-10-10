#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

console.log('Fixing remaining JSX syntax errors...');

// Find all TypeScript/JSX files
const files = await glob('app/**/*.{tsx,ts}', { ignore: ['node_modules/**'] });

let fixedFiles = 0;

for (const filePath of files) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed JSX structures
    const fixes = [
      // Fix incomplete closing tags like "text; </"
      {
        pattern: /([^>])\s*;\s*<\//g,
        replacement: '$1</'
      },
      // Fix orphaned closing tags
      {
        pattern: /;\s*<\/([^>]+)>/g,
        replacement: '</$1>'
      },
      // Fix malformed JSX like "text; <br />"
      {
        pattern: /([^>])\s*;\s*<([^>]+)>/g,
        replacement: '$1<$2>'
      },
      // Fix incomplete JSX elements
      {
        pattern: /([^>])\s*;\s*$/gm,
        replacement: '$1'
      },
      // Fix malformed closing tags at end of lines
      {
        pattern: /;\s*$/gm,
        replacement: ''
      },
      // Fix orphaned closing tags
      {
        pattern: /^\s*<\/([^>]+)>\s*$/gm,
        replacement: ''
      },
      // Fix malformed JSX structure
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
console.log('Remaining JSX syntax error fixes completed');