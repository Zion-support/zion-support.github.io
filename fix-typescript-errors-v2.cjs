#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// More comprehensive syntax fixes
const fixes = [
  // Fix stray closing brackets and semicolons
  {
    pattern: /^\s*\]\s*;\s*$/gm,
    replacement: ''
  },
  // Fix stray commas at the beginning of lines
  {
    pattern: /^\s*,\s*/gm,
    replacement: ''
  },
  // Fix interface declarations with leading commas
  {
    pattern: /^\s*,\s*interface\s+/gm,
    replacement: 'interface '
  },
  // Fix const declarations with leading commas
  {
    pattern: /^\s*,\s*const\s+/gm,
    replacement: 'const '
  },
  // Fix function calls with leading commas
  {
    pattern: /^\s*,\s*originalError\.call\(/gm,
    replacement: '    originalError.call('
  },
  {
    pattern: /^\s*,\s*originalWarn\.call\(/gm,
    replacement: '    originalWarn.call('
  },
  // Fix try-catch blocks with leading commas
  {
    pattern: /\}\s*,\s*catch\s*\(/gm,
    replacement: '} catch ('
  },
  {
    pattern: /\}\s*,\s*finally\s*\{/gm,
    replacement: '} finally {'
  },
  // Fix else statements with leading commas
  {
    pattern: /\}\s*,\s*else\s*\{/gm,
    replacement: '} else {'
  },
  {
    pattern: /\}\s*,\s*else\s*if\s*\(/gm,
    replacement: '} else if ('
  },
  // Fix as const syntax issues
  {
    pattern: /\}\s*,\s*as\s+const\s*;/gm,
    replacement: '} as const;'
  },
  // Fix function declarations with leading commas
  {
    pattern: /^\s*,\s*export\s+function\s+/gm,
    replacement: 'export function '
  },
  {
    pattern: /^\s*,\s*export\s+const\s+/gm,
    replacement: 'export const '
  },
  {
    pattern: /^\s*,\s*export\s+interface\s+/gm,
    replacement: 'export interface '
  },
  {
    pattern: /^\s*,\s*export\s+type\s+/gm,
    replacement: 'export type '
  },
  // Fix async function declarations
  {
    pattern: /^\s*,\s*export\s+async\s+function\s+/gm,
    replacement: 'export async function '
  },
  // Fix variable declarations with leading commas
  {
    pattern: /^\s*,\s*let\s+/gm,
    replacement: 'let '
  },
  {
    pattern: /^\s*,\s*var\s+/gm,
    replacement: 'var '
  },
  // Fix return statements with leading commas
  {
    pattern: /^\s*,\s*return\s+/gm,
    replacement: 'return '
  },
  // Fix useEffect and other hooks with leading commas
  {
    pattern: /^\s*,\s*useEffect\s*\(/gm,
    replacement: '  useEffect('
  },
  {
    pattern: /^\s*,\s*useState\s*\(/gm,
    replacement: '  useState('
  },
  // Fix array and object declarations with leading commas
  {
    pattern: /^\s*,\s*const\s+\[/gm,
    replacement: 'const ['
  },
  {
    pattern: /^\s*,\s*const\s+\{/gm,
    replacement: 'const {'
  },
  // Fix closing brackets with leading commas
  {
    pattern: /^\s*,\s*\]\s*;?\s*$/gm,
    replacement: '];'
  },
  {
    pattern: /^\s*,\s*\}\s*;?\s*$/gm,
    replacement: '};'
  },
  // Fix specific syntax issues in data files
  {
    pattern: /export\s+const\s+(\w+)\s*:\s*(\w+)\[\]\s*=\s*\[/gm,
    replacement: 'export const $1: $2[] = ['
  },
  // Fix missing semicolons after array declarations
  {
    pattern: /\]\s*$/gm,
    replacement: '];'
  },
  // Fix missing semicolons after object declarations
  {
    pattern: /\}\s*$/gm,
    replacement: '};'
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

function findTsxFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('Starting comprehensive TypeScript error fixes...');

const srcDir = path.join(__dirname, 'src');
const files = findTsxFiles(srcDir);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);

console.log('Comprehensive TypeScript error fixes completed!');