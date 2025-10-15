#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

<<<<<<< HEAD
// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {}
  try {}
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common syntax errors
    const fixes = [
      // Fix function declarations with semicolons
      { pattern: /function\s+(\w+)\s*\([^)]*\)\s*\{\s*\}\s*;/, replacement: 'function $1() {\n  // Function body\n}' },
      
      // Fix if statements with semicolons
      { pattern: /if\s*\([^)]+\)\s*\{\s*\}\s*;/, replacement: 'if ($1) {\n  // If body\n}' },
      
      // Fix JSX fragments with semicolons
      { pattern: /<>\s*;/, replacement: '<>{' }}</>
      { pattern: /<\/>\s*;/, replacement: '</>' },
      
      // Fix missing closing tags
      { pattern: /<(\w+)[^>]*>\s*;/, replacement: '<$1>' },
      
      // Fix return statements outside functions
      { pattern: /^(\s*)return\s+[^;]+;/, replacement: '$1// return statement' },
      
      // Fix catch blocks without try
      { pattern: /^\s*catch\s*\([^)]+\)\s*\{/, replacement: 'try {\n  // try body\n} catch ($1) {' },
      
      // Fix duplicate catch blocks
      { pattern: /}\s*catch\s*\([^)]+\)\s*\{[^}]*\}\s*catch\s*\([^)]+\)\s*\{/, replacement: '} catch ($1) {' },
      
      // Fix missing function wrapper for API handlers
      { pattern: /^(\s*)(res\.status\(\d+\)\.json\([^)]+\);\s*})/m, replacement: '$1export default async (req, res) => {\n$1  try {\n$1    $2\n$1  } catch (error) {\n$1    console.error(\'Error:\', error);\n$1    res.status(500).json({ error: \'Internal server error\' });\n$1  }\n$1};' }
    ];
    
    for (const fix of fixes) {}

=======
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
>>>>>>> main
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {}
        content = newContent;
        modified = true;
      }
    }
    
<<<<<<< HEAD
    if (modified) {}

      fs.writeFileSync(filePath, content);
=======
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
>>>>>>> main
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {}
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

<<<<<<< HEAD
// Function to find all files with syntax errors
function findFilesWithErrors(dir) {}
  const files = [];
  
  function searchDirectory(currentDir) {}

    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {}
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {}
        searchDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {}

        files.push(fullPath);
=======
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
>>>>>>> main
      }
    }
  }
  
  console.log(`\nFixed ${fixedFiles} out of ${totalFiles} files`);
  console.log('Syntax error fixes completed!');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

<<<<<<< HEAD
const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

let fixedCount = 0;
for (const file of files) {}
  if (fixSyntaxErrors(file)) {}
    fixedCount++;
  }
}


files.forEach(file => {
  try {
    if (fixFile(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
    errorCount++;
  }
});

console.log(`\nFixed ${fixedCount} files`);
console.log(`Errors in ${errorCount} files`);

// Run type check to see remaining errors
console.log('\nRunning type check...');
try {
  execSync('pnpm run type-check', { stdio: 'inherit' });
} catch (error) {
  console.log('Type check completed with errors (expected)');
}
=======
export { fixFile, fixes };
>>>>>>> main
