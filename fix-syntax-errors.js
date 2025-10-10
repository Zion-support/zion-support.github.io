#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common syntax fixes
const fixes = [
  // Fix extra semicolons after object properties
  {
    pattern: /(\w+):\s*([^,}]+),\s*;/g,
    replacement: '$1: $2,'
  },
  // Fix extra semicolons in array elements
  {
    pattern: /(\w+),\s*;/g,
    replacement: '$1,'
  },
  // Fix malformed array syntax with extra commas
  {
    pattern: /},\s*;\s*{/g,
    replacement: '},\n    {'
  },
  // Fix extra commas before closing brackets
  {
    pattern: /,\s*}/g,
    replacement: '\n  }'
  },
  // Fix extra commas before closing parentheses
  {
    pattern: /,\s*\)/g,
    replacement: '\n  )'
  },
  // Fix unclosed meta tags
  {
    pattern: /<meta>/g,
    replacement: '<meta />'
  },
  // Fix malformed JSX return statements
  {
    pattern: /return\s*\(\s*<>\s*<\/>\s*([^)]*)/g,
    replacement: 'return (\n    <>\n      $1'
  },
  // Fix missing closing tags
  {
    pattern: /<(\w+)([^>]*)>\s*$/gm,
    replacement: '<$1$2></$1>'
  }
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
    // Fix array syntax issues
    content = content.replace(/\[\s*{([^}]+)}\s*,\s*;\s*{/g, '[\n    {\n      $1\n    },\n    {');
    content = content.replace(/}\s*,\s*;\s*\]/g, '\n  }\n];');
    
    // Fix object syntax issues
    content = content.replace(/{\s*([^}]+),\s*;\s*}/g, '{\n    $1\n  }');
    
    // Fix JSX structure issues
    content = content.replace(/<>\s*<\/>\s*<Helmet>/g, '<>\n      <Helmet>');
    content = content.replace(/<\/Helmet>\s*<\/>/g, '</Helmet>\n    </>');
    
    // Only write if content changed
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

async function main() {
  const pattern = 'app/**/*.tsx';
  const files = await glob(pattern);
  
  console.log(`Found ${files.length} TypeScript files to check...`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixFile, fixes };