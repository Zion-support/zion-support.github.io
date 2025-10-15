#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common patterns to fix
const fixes = [
  // Fix unterminated string literals with extra quotes and semicolons
  { pattern: /';";";"/g, replacement: "'" },
  { pattern: /";";"/g, replacement: '"' },
  { pattern: /";"/g, replacement: '"' },
  
  // Fix malformed import statements
  { pattern: /import\s+([^;]+);\s+from\s+([^;]+);";";"/g, replacement: 'import $1 from $2;' },
  { pattern: /import\s+([^;]+);\s+from\s+([^;]+);";"/g, replacement: 'import $1 from $2;' },
  { pattern: /import\s+([^;]+);\s+from\s+([^;]+);/g, replacement: 'import $1 from $2;' },
  
  // Fix malformed const declarations
  { pattern: /const:\s+/g, replacement: 'const ' },
  { pattern: /let:\s+/g, replacement: 'let ' },
  { pattern: /var:\s+/g, replacement: 'var ' },
  
  // Fix malformed JSX attributes
  { pattern: /className\s*=\s*"([^"]*)"\s*;";"/g, replacement: 'className="$1"' },
  { pattern: /className\s*=\s*"([^"]*)"\s*;"/g, replacement: 'className="$1"' },
  { pattern: /href\s*=\s*"([^"]*)"\s*;";"/g, replacement: 'href="$1"' },
  { pattern: /href\s*=\s*"([^"]*)"\s*;"/g, replacement: 'href="$1"' },
  
  // Fix malformed JSX elements
  { pattern: /<(\w+):\s+/g, replacement: '<$1 ' },
  { pattern: /<(\w+)\s+([^>]*):\s+([^>]*)>/g, replacement: '<$1 $2 $3>' },
  
  // Fix malformed Route components
  { pattern: /<Route:\s+path\s*=\s*"([^"]*)"\s+element\s*=\s*{([^}]+)}\s*\/>\s*;";"/g, replacement: '<Route path="$1" element={$2} />' },
  { pattern: /<Route:\s+path\s*=\s*"([^"]*)"\s+element\s*=\s*{([^}]+)}\s*\/>\s*;"/g, replacement: '<Route path="$1" element={$2} />' },
  
  // Fix malformed div elements
  { pattern: /<div:\s+className\s*=\s*"([^"]*)"\s*>\s*;";"/g, replacement: '<div className="$1">' },
  { pattern: /<div:\s+className\s*=\s*"([^"]*)"\s*>\s*;"/g, replacement: '<div className="$1">' },
  
  // Fix malformed h1, h2, etc. elements
  { pattern: /<h([1-6]):\s+className\s*=\s*"([^"]*)"\s*>\s*([^<]*)\s*<\/h[1-6]>\s*;";"/g, replacement: '<h$1 className="$2">$3</h$1>' },
  { pattern: /<h([1-6]):\s+className\s*=\s*"([^"]*)"\s*>\s*([^<]*)\s*<\/h[1-6]>\s*;"/g, replacement: '<h$1 className="$2">$3</h$1>' },
  
  // Fix malformed p elements
  { pattern: /<p:\s+className\s*=\s*"([^"]*)"\s*>\s*([^<]*)\s*<\/p>\s*;";"/g, replacement: '<p className="$1">$2</p>' },
  { pattern: /<p:\s+className\s*=\s*"([^"]*)"\s*>\s*([^<]*)\s*<\/p>\s*;"/g, replacement: '<p className="$1">$2</p>' },
  
  // Fix malformed a elements
  { pattern: /<a:\s+href\s*=\s*"([^"]*)"\s+className\s*=\s*"([^"]*)"\s*>\s*([^<]*)\s*<\/a>\s*;";"/g, replacement: '<a href="$1" className="$2">$3</a>' },
  { pattern: /<a:\s+href\s*=\s*"([^"]*)"\s+className\s*=\s*"([^"]*)"\s*>\s*([^<]*)\s*<\/a>\s*;"/g, replacement: '<a href="$1" className="$2">$3</a>' },
  
  // Fix malformed Suspense elements
  { pattern: /<Suspense:\s+fallback\s*=\s*{([^}]+)}\s*>\s*;";"/g, replacement: '<Suspense fallback={$1}>' },
  { pattern: /<Suspense:\s+fallback\s*=\s*{([^}]+)}\s*>\s*;"/g, replacement: '<Suspense fallback={$1}>' },
  
  // Fix malformed LoadingSpinner elements
  { pattern: /<LoadingSpinner\s+fullScreen:\s+text\s*=\s*"([^"]*)"\s*\/>\s*;";"/g, replacement: '<LoadingSpinner fullScreen text="$1" />' },
  { pattern: /<LoadingSpinner\s+fullScreen:\s+text\s*=\s*"([^"]*)"\s*\/>\s*;"/g, replacement: '<LoadingSpinner fullScreen text="$1" />' },
  
  // Fix more specific patterns found in linting errors
  { pattern: /import\s+([^;]+);\s+from\s+([^;]+);";"/g, replacement: 'import $1 from $2;' },
  { pattern: /import\s+([^;]+);\s+from\s+([^;]+);/g, replacement: 'import $1 from $2;' },
  { pattern: /import\s+([^;]+);\s+from\s+([^;]+);";"/g, replacement: 'import $1 from $2;' },
  
  // Fix malformed object properties
  { pattern: /(\w+):\s*([^,}]+),/g, replacement: '$1: $2,' },
  { pattern: /(\w+):\s*([^,}]+);/g, replacement: '$1: $2,' },
  
  // Fix malformed function parameters
  { pattern: /function\s+(\w+)\s*\(([^)]*):\s*([^)]*)\)/g, replacement: 'function $1($2: $3)' },
  
  // Fix malformed JSX closing tags
  { pattern: /<\/(\w+):\s*>/g, replacement: '</$1>' },
  
  // Fix malformed string literals in JSX
  { pattern: /"([^"]*)"\s*;";"/g, replacement: '"$1"' },
  { pattern: /"([^"]*)"\s*;"/g, replacement: '"$1"' },
  
  // Fix malformed template literals
  { pattern: /`([^`]*)\s*;";"/g, replacement: '`$1`' },
  { pattern: /`([^`]*)\s*;"/g, replacement: '`$1`' },
  
  // Clean up any remaining malformed syntax
  { pattern: /;\s*;";"/g, replacement: ';' },
  { pattern: /;\s*;"/g, replacement: ';' },
  { pattern: /;\s*;"/g, replacement: ';' },
  { pattern: /;\s*;"/g, replacement: ';' },
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
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
  
  // Get all TypeScript and JavaScript files in the app directory
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    '__tests__/**/*.tsx',
    '__tests__/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    
    for (const file of files) {
      totalFiles++;
      if (fixFile(file)) {
        fixedFiles++;
      }
    }
  }
  
  console.log(`\nFixed ${fixedFiles} out of ${totalFiles} files`);
  console.log('Syntax error fixes completed!');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixFile, fixes };