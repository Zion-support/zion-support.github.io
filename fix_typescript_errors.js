#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common patterns to fix
const fixes = [
  // Fix missing commas in object properties (icon: '🚀' -> icon: '🚀',)
  {
    pattern: /(\s+icon:\s*'[^']+')\s*\n\s*(link:)/g,
    replacement: '$1,\n      $2'
  },
  // Fix malformed JSX br tags (<br <span -> <br /> <span)
  {
    pattern: /<br\s+<span/g,
    replacement: '<br /> <span'
  },
  // Fix malformed style objects (style={{> -> style={{)
  {
    pattern: /style=\{\{\s*>/g,
    replacement: 'style={{'
  },
  // Fix unterminated string literals in JSX attributes
  {
    pattern: /className="([^"]*)\n\s*([^"]*)"([^>]*>)/g,
    replacement: 'className="$1$2"$3'
  },
  // Fix missing commas in array/object properties
  {
    pattern: /(\s+[a-zA-Z_][a-zA-Z0-9_]*:\s*[^,}\n]+)\s*\n\s*([a-zA-Z_][a-zA-Z0-9_]*:)/g,
    replacement: '$1,\n      $2'
  }
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

// Main function
async function main() {
  // Get all TypeScript/TSX files in components directory
  const componentFiles = await glob('src/components/**/*.{ts,tsx}');

  console.log(`Found ${componentFiles.length} component files to check...`);

  let fixedCount = 0;
  componentFiles.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);