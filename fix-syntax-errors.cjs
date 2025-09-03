#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');

// Function to fix syntax errors in a file;
const fixes = [
  // Fix import statements with comma issues
  {
    pattern: /import\s+(\w+)\s+from\s*,\s*['"`]([^'`]+)['`]/g,
    replacement: "import $1 from '$2'"
  },
  {
    pattern: /import\s+(\w+)\s+from\s*,\s*([^;]+);/g,
    replacement: import $1 from $2;
  },
  
  // Fix missing semicolons in function calls
  {
    pattern: /(\w+\([^)]*\))\s*\)\s*}/g,
    replacement: "$1);"
  },
  
  // Fix unterminated strings
  {
    pattern: /(['`])([^'`]*)\s*$/gm,
    replacement: (match, quote, content) => {
      if (!content.includes(quote)) {
        return match + quote;
      }
      return match;
    }
  },
  
  // Fix missing commas in object literals
  {
    pattern: /(\w+:\s*[^,}]+)\s*(\w+:\s*[^,}]+)/g,
    replacement: "$1,\n    $2"
  },
  
  // Fix missing semicolons after statements
  {
    pattern: /(\w+)\s*-\s*(\w+)\s*=/g,
    replacement: '$1-$2=',
  },
  // Fix array access with spaces
  {
    pattern: /\[\s*([^\]]+)\s*\]/g,
    replacement: '[$1]',
  },
  // Fix object property access with spaces
  {
    pattern: /\.\s*([^\s]+)/g,
    replacement: '.$1',
  },
  // Fix function calls with spaces
  {
    pattern: /(\w+)\s*\(\s*([^)]+)\s*\)/g,
    replacement: '$1($2)',
  },
  // Fix template literals with spaces
  {
    pattern: /\$\{\s*([^}]+)\s*\}/g,
    replacement: '${$1}',
  },
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
// Function to fix common syntax errors in files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common syntax errors;
    const fixes = [
      // Fix extra semicolons in object literals and function calls;
      { pattern: /(\w+)\s*\(\s*;/g, replacement: '$1(' },
      { pattern: /{\s*;/g, replacement: '{' },
      { pattern: /}\s*;/g, replacement: '}' },
      { pattern: /,\s*;/g, replacement: ',' },
      { pattern: /;\s*;/g, replacement: ';' },
      { pattern: /\(\s*;/g, replacement: '(' },
      { pattern: /;\s*\)/g, replacement: ')' },
      { pattern: /;\s*}/g, replacement: '}' },
      { pattern: /;\s*{/g, replacement: '{' },
      { pattern: /;\s*,/g, replacement: ',' },
      { pattern: /,\s*;/g, replacement: ',' },
      // Fix semicolons in import statements;
      { pattern: /import\s*{\s*([^}]+);\s*}/g, replacement: 'import { $1 }' },
      // Fix semicolons in function declarations;
      { pattern: /\)\s*=>\s*{;/g, replacement: ') => {' },
      { pattern: /}\s*\)\s*;/g, replacement: '})' },
      // Fix semicolons in JSX;
      { pattern: /className={cn\(\s*;/g, replacement: 'className={cn(' },
      { pattern: /}\s*\)\s*}/g, replacement: '})}' },
    ];

    // Apply fixes
    fixes.forEach(fix => {
      if (typeof fix.replacement === 'function') {
        content = content.replace(fix.pattern, fix.replacement);
      } else {
        content = content.replace(fix.pattern, fix.replacement);
      }
    });
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) { 
    console.error(`Error fixing ${filePath }:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (
      stat.isDirectory() &&
      !file.startsWith(`.`) &&
      file !== 'node_modules'
    ) {
      fixedCount += fixFilesInDirectory(filePath);
    } else if (
      file.endsWith('.tsx') ||
      file.endsWith('.ts') ||
      file.endsWith('.jsx') ||
      file.endsWith('.js')
    ) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution;
console.log('🔧 Starting syntax error fixes...');
const fixedCount = fixFilesInDirectory('.');
console.log(`✅ Fixed syntax errors in ${fixedCount} files`);
console.log('Starting syntax error fixes...');
const fixedCount = fixFilesInDirectory('./components');
const fixedCount2 = fixFilesInDirectory('./pages');
console.log(`Fixed ${fixedCount + fixedCount2} files`);
