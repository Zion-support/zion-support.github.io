#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all TypeScript/TSX files in the app directory
const files = await glob('app/**/*.{ts,tsx}');

console.log(`Found ${files.length} files to process...`);

let totalFixed = 0;

for (const file of files) {
  const filePath = path.join(process.cwd(), file);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix HTML entities in JSX
    content = content.replace(/&apos;/g, "'");
    content = content.replace(/&quot;/g, '"');
    content = content.replace(/&lt;/g, '<');
    content = content.replace(/&gt;/g, '>');
    content = content.replace(/&amp;/g, '&');
    
    // Fix any malformed JSX fragments
    content = content.replace(/<>\s*<\/>/g, '<></>');
    
    // Fix any unclosed JSX fragments
    content = content.replace(/<>\s*$/gm, '<>');
    content = content.replace(/^\s*<\/>/gm, '</>');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${file}`);
      totalFixed++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`\nFixed ${totalFixed} files with HTML entity issues.`);