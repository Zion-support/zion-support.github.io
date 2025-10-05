import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common TypeScript/JSX fixes
const fixes = [
  // Fix JSX syntax issues
  {
    pattern: /<br\s*\/?>/g,
    replacement: '<br />'
  },
  // Fix unescaped > in JSX
  {
    pattern: /{'>'}/g,
    replacement: '{">"}'
  },
  // Fix missing commas in object literals
  {
    pattern: /(\w+)\s*=\s*{([^}]+)}\s*(\w+)/g,
    replacement: '$1 = { $2 }, $3'
  },
  // Fix JSX expressions
  {
    pattern: /{([^}]*)\s*>\s*([^}]*)}/g,
    replacement: '{ $1 > $2 }'
  },
  // Fix object property syntax
  {
    pattern: /(\w+)\s*:\s*([^,}]+)\s*(\w+)/g,
    replacement: '$1: $2, $3'
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
  // Find all TypeScript/TSX files
  const files = await glob('src/**/*.{ts,tsx}');

  console.log(`Found ${files.length} TypeScript files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);