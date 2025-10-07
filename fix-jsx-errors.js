#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all TypeScript/JSX files in src/components
const files = await glob('src/components/**/*.{tsx,ts}');

console.log(`Found ${files.length} files to check...`);

let fixedFiles = 0;

for (const filePath of files) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix orphaned /> tags (standalone /> on their own lines)
    content = content.replace(/^\s*\/>\s*$/gm, '');
    
    // Fix unterminated regular expression literals
    // Look for patterns like /pattern without closing /
    content = content.replace(/(\w+):\s*\/[^\/\n]*$/gm, (match, prop) => {
      // If it looks like a regex but isn't closed, it's probably a string
      return `${prop}: '${match.split(':')[1].trim().substring(1)}'`;
    });
    
    // Fix JSX attributes that look like regex but are actually strings
    content = content.replace(/={\s*\/[^\/\n]*$/gm, (match) => {
      const value = match.match(/={\s*\/[^\/\n]*$/)[0].replace(/={\s*\//, '').trim();
      return `={'${value}'}`;
    });
    
    // Fix common patterns where /> appears in wrong places
    content = content.replace(/\s*\/>\s*<span/g, ' <span');
    content = content.replace(/\s*\/>\s*<\/span>/g, '</span>');
    
    // Fix patterns where /> appears before closing tags
    content = content.replace(/\s*\/>\s*<\/div>/g, '</div>');
    content = content.replace(/\s*\/>\s*<\/a>/g, '</a>');
    content = content.replace(/\s*\/>\s*<\/Link>/g, '</Link>');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      fixedFiles++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

console.log(`\nFixed ${fixedFiles} files.`);