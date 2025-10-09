#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// More specific patterns to fix
const fixes = [
  // Fix malformed function parameters
  {
    pattern: /export default function\s+\w+\(\s*{\s*\/\/\s*children,\s*}\s*:\s*{\s*;\s*children:\s*React\.ReactNode;\s*}\s*\)/g,
    replacement: 'export default function RootLayout({ children }: { children: React.ReactNode })'
  },
  
  // Fix malformed object properties
  {
    pattern: /{\s*\/\/\s*children,\s*}/g,
    replacement: '{ children }'
  },
  
  // Fix malformed type definitions
  {
    pattern: /:\s*{\s*;\s*children:\s*React\.ReactNode;\s*}/g,
    replacement: ': { children: React.ReactNode }'
  },
  
  // Fix malformed object literals with missing properties
  {
    pattern: /{\s*icon:\s*(\w+),\s*title:\s*'([^']+)',\s*description:\s*'([^']+)',\s*benefits:\s*\[([^\]]+)\];\s*}/g,
    replacement: '{\n      icon: $1,\n      title: \'$2\',\n      description: \'$3\',\n      benefits: [$4]\n    }'
  },
  
  // Fix malformed array elements
  {
    pattern: /{\s*,\s*icon:\s*(\w+),\s*title:\s*'([^']+)',\s*description:\s*'([^']+)',\s*benefits:\s*\[([^\]]+)\];\s*}/g,
    replacement: '{\n      icon: $1,\n      title: \'$2\',\n      description: \'$3\',\n      benefits: [$4]\n    }'
  },
  
  // Fix malformed imports
  {
    pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*'([^']+)';\s*\/\/\s*([^;]+);/g,
    replacement: 'import { $1 } from \'$2\';'
  },
  
  // Fix malformed JSX
  {
    pattern: /Expected corresponding JSX closing tag for '([^']+)'/g,
    replacement: 'Missing closing tag for $1'
  },
  
  // Fix malformed object properties with missing colons
  {
    pattern: /{\s*([^:}]+)\s*,\s*([^:}]+)\s*,\s*([^:}]+)\s*,\s*([^:}]+)\s*}/g,
    replacement: '{\n      $1,\n      $2,\n      $3,\n      $4\n    }'
  },
  
  // Fix malformed function calls
  {
    pattern: /\(\s*{\s*\/\/\s*([^}]+)\s*}\s*\)/g,
    replacement: '({ $1 })'
  },
  
  // Fix malformed type annotations
  {
    pattern: /:\s*{\s*;\s*([^}]+)\s*}/g,
    replacement: ': { $1 }'
  },
  
  // Fix malformed array syntax
  {
    pattern: /\[\s*{\s*,\s*([^}]+)\s*}\s*\]/g,
    replacement: '[\n    {\n      $1\n    }\n  ]'
  },
  
  // Fix malformed object syntax
  {
    pattern: /{\s*,\s*([^}]+)\s*}/g,
    replacement: '{\n      $1\n    }'
  },
  
  // Fix malformed property assignments
  {
    pattern: /{\s*([^:}]+)\s*,\s*([^:}]+)\s*,\s*([^:}]+)\s*,\s*([^:}]+)\s*,\s*([^:}]+)\s*}/g,
    replacement: '{\n      $1,\n      $2,\n      $3,\n      $4,\n      $5\n    }'
  },
  
  // Fix malformed semicolons
  {
    pattern: /;\s*;\s*/g,
    replacement: ';'
  },
  
  // Fix malformed commas
  {
    pattern: /,\s*,\s*/g,
    replacement: ','
  },
  
  // Fix malformed brackets
  {
    pattern: /{\s*{\s*/g,
    replacement: '{\n      '
  },
  
  // Fix malformed closing brackets
  {
    pattern: /}\s*}\s*/g,
    replacement: '}\n    }'
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

function main() {
  const srcDir = path.join(__dirname, 'src');
  
  // Find all TypeScript and TSX files
  const files = glob.sync('**/*.{ts,tsx}', { cwd: srcDir });
  
  let fixedCount = 0;
  
  files.forEach(file => {
    const fullPath = path.join(srcDir, file);
    if (fixFile(fullPath)) {
      fixedCount++;
    }
  });
  
  console.log(`\nFixed ${fixedCount} files`);
}

main();