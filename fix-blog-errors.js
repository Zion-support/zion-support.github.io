#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common fixes for blog files
const fixes = [
  // Fix double semicolons in metadata objects
  {
    pattern: /;;\s*};/g,
    replacement: '};'
  },
  // Fix malformed JSX comments
  {
    pattern: /\/\* content \*\/\}/g,
    replacement: '{/* content */}'
  },
  // Fix malformed JSX comments in return statements
  {
    pattern: /<div>\/\* content \*\/\}/g,
    replacement: '<div>{/* content */}'
  },
  // Fix missing closing braces in metadata
  {
    pattern: /(\s+);\s*};/g,
    replacement: '$1\n};'
  },
  // Fix duplicate return statements
  {
    pattern: /return \(\s*<div>\/\* content \*\/\}\s*return \(/g,
    replacement: 'return ('
  },
  // Fix malformed object syntax
  {
    pattern: /export const metadata: Metadata = \{\/\* content \*\/\}/g,
    replacement: 'export const metadata: Metadata = {'
  },
  // Fix missing commas in object properties
  {
    pattern: /(\w+):\s*'([^']+)'\s*\n\s*(\w+):/g,
    replacement: '$1: \'$2\',\n  $3:'
  },
  // Fix malformed JSX attributes
  {
    pattern: /<div>\{\/\* content \*\/\}/g,
    replacement: '<div>{/* content */}'
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
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  
  if (!fs.existsSync(blogDir)) {
    console.log('Blog directory not found');
    return;
  }
  
  // Find all .tsx and .jsx files in blog directory
  const pattern = path.join(blogDir, '**/*.{tsx,jsx}');
  const files = await glob(pattern);
  
  console.log(`Found ${files.length} blog files to check`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

main();