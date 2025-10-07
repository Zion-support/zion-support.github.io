#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

//Common patterns to fix
const fixes = [
  //Fix missing commas in object literals
  {
    pattern:
      /(\s+icon:\s*['"`][^'"`]*['"`])\s*\n\s*(gradient:|badge:|insights:|value:|label:)/g,
    replacement: '$1,\n      $2',
  },
  //Fix missing closing tags for self-closing elements
  {
    pattern: /<br\s*$/gm,
    replacement: '<br />',
  },
  //Fix malformed JSX attributes
  {
    pattern: /className=\{`([^`]*)\$\{([^}]*)\}\s*([^`]*)\`\}/g,
    replacement: 'className={`$1${$2}$3`}',
  },
  //Fix missing closing tags for JSX elements
  {
    pattern: /<(\w+)\s*$/gm,
    replacement: '<$1 />',
  },
  //Fix malformed template literals
  {
    pattern: /\$\{>\s*([^}]*)\}/g,
    replacement: '${$1}',
  },
  //Fix missing commas in arrays
  {
    pattern: /(\s+icon:\s*['"`][^'"`]*['"`])\s*\n\s*(\})/g,
    replacement: '$1,\n    $2',
  },
  //Fix malformed JSX expressions
  {
    pattern: /(\s+)\{([^}]*)\}\s*\n\s*(\})/g,
    replacement: '$1{$2}\n    $3',
  },
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
  const srcDir = path.join(process.cwd(), 'src');
  const pattern = path.join(srcDir, '**/*.{ts,tsx}');

  console.log('Scanning for TypeScript files...');
  const files = await glob(pattern);

  console.log(`Found ${files.length} files to check`);

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
