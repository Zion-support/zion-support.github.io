#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common syntax error patterns and their fixes
const fixes = [
  // Fix malformed JSX closing tags
  {
    pattern: /  <\//g,
    replacement: '  </'
  },
  // Fix missing closing tags for h1
  {
    pattern: /<h1[^>]*>([^<]+)\s*<\//g,
    replacement: '<h1$1></h1>'
  },
  // Fix missing closing tags for button
  {
    pattern: /<button[^>]*>([^<]+),\s*<\//g,
    replacement: '<button$1></button>'
  },
  // Fix missing closing tags for div
  {
    pattern: /<div[^>]*>([^<]+)\s*<\//g,
    replacement: '<div$1></div>'
  },
  // Fix malformed object properties
  {
    pattern: /description:\s*'([^']+)',\s*benefits:/g,
    replacement: "description: '$1',\n      benefits:"
  },
  // Fix missing commas in object arrays
  {
    pattern: /}\s*}\s*];/g,
    replacement: '}\n  }];'
  },
  // Fix malformed JSX fragments
  {
    pattern: /<>\s*<\//g,
    replacement: '<></>'
  },
  // Fix missing closing tags for section
  {
    pattern: /<section[^>]*>([^<]+)\s*<\//g,
    replacement: '<section$1></section>'
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

async function main() {
  console.log('Starting syntax error fixes...');
  
  // Find all TSX files in the app directory
  const files = await glob('app/**/*.tsx');
  
  let fixedCount = 0;
  
  files.forEach(file => {
    const fullPath = path.join(process.cwd(), file);
    if (fixFile(fullPath)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);

export { fixFile, fixes };