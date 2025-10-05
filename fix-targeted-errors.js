#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Targeted patterns to fix
const fixes = [
  // Fix missing commas after icon: '>' properties
  {
    pattern: /icon:\s*['"`]>['"`]\s*\n(\s+)([a-zA-Z_$][a-zA-Z0-9_$]*):/g,
    replacement: "icon: '>',\n$1$2:"
  },
  // Fix malformed icon properties in arrays
  {
    pattern: /icon:\s*['"`]>['"`]\s*},/g,
    replacement: "icon: '>' },"
  },
  // Fix malformed icon properties at end of arrays
  {
    pattern: /icon:\s*['"`]>['"`]\s*}/g,
    replacement: "icon: '>' }"
  },
  // Fix malformed JSX expressions with > characters
  {
    pattern: /(\{[^}]*)\s*>\s*([^}]*\})/g,
    replacement: '$1 > $2'
  },
  // Fix unclosed br tags
  {
    pattern: /<br\s*>\s*\n(\s*)<\/br>/g,
    replacement: '<br />\n$1'
  },
  // Fix malformed template literals with > characters
  {
    pattern: /`([^`]*)\s*>\s*([^`]*)`/g,
    replacement: '`$1 > $2`'
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
  // Find all TypeScript/TSX files in src/components
  const files = await glob('src/components/**/*.{ts,tsx}');

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);