#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common patterns to fix
const fixes = [
  // Fix unterminated string literals with single quotes
  {
    pattern: /'([^']*),'/g,
    replacement: "'$1'"
  },
  // Fix malformed object properties
  {
    pattern: /(\w+),'(\w+)',/g,
    replacement: "$1: '$2',"
  },
  // Fix missing commas in object literals
  {
    pattern: /'(\w+)','(\w+)',/g,
    replacement: "'$1', '$2',"
  },
  // Fix numeric literal issues
  {
    pattern: /(\d+),'(\w+)',/g,
    replacement: "$1, '$2',"
  },
  // Fix JSX fragment closing issues
  {
    pattern: /<>\s*$/gm,
    replacement: "<>"
  },
  // Fix missing closing tags
  {
    pattern: /<(\w+)([^>]*)>\s*$/gm,
    replacement: "<$1$2></$1>"
  },
  // Remove git branch names from code
  {
    pattern: /[a-z0-9-]+\/[a-z0-9-]+-[a-z0-9-]+/g,
    replacement: ""
  },
  // Fix empty object properties
  {
    pattern: /{\s*}/g,
    replacement: "{}"
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
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      if (fixFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nFixed ${totalFixed} files`);
}

main().catch(console.error);

export { fixFile, fixes };