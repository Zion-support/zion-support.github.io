#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');

// Function to fix syntax errors in a file;
const fs = require('fs');
const path = require('path');

// Common syntax fixes
// Common syntax error patterns and their fixes
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
    pattern: /(\w+:\s*[^}]+)\s*(\w+:\s*[^}]+)/g,
    replacement: "$1,\n    $2"
  },
  
  // Fix missing semicolons after statements
  {
    pattern: /(\w+)\s*-\s*(\w+)\s*=/g,
    replacement: '$1-$2='},
  // Fix array access with spaces
  {
    pattern: /\[\s*([^\]]+)\s*\]/g,
    replacement: '[$1]'},
  // Fix object property access with spaces
  {
    pattern: /\.\s*([^\s]+)/g,
    replacement: '.$1'},
  // Fix function calls with spaces
  {
    pattern: /(\w+)\s*\(\s*([^)]+)\s*\)/g,
    replacement: '$1($2)'},
  // Fix template literals with spaces
  {
    pattern: /\$\{\s*([^}]+)\s*\}/g,
    replacement: '${$1}',
  },];

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
    // Fix common patterns
    const fixes = [
      // Fix 'use client';'' -> 'use client';
      { pattern: /'use client';''/g, replacement: "'use client';" },
      // Fix import statements with extra quotes
      { pattern: /import ([^;]+);''/g, replacement: 'import $1;' },
      // Fix empty lines with quotes
      { pattern: /^''$/gm, replacement: '' },
      // Fix semicolons in JSX attributes
      { pattern: /(\w+)='([^']*)';/g, replacement: "$1='$2'" },
      // Fix extra semicolons in JSX
      { pattern: /(\/>);/g, replacement: '$1' },
      // Fix malformed imports
      {
        pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/g,
        replacement: "import { $1 } from '$2'\nimport { $3 } from '$4'"
      },
      // Fix missing semicolons after imports
      {
        pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*(?=\s*import|\s*const|\s*function|\s*export)/g,
        replacement: "import { $1 } from '$2';\n"
      },
      // Fix malformed JSX attributes
      {
        pattern: /className\s*=\s*['"]([^'"]*)['"]\s*['"]([^'"]*)['"]/g,
        replacement: "className='$1 $2'"
      },
      // Fix malformed function declarations
      {
        pattern: /const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{\s*const\s+(\w+)\s*=\s*\[/g,
        replacement: "const $1: React.FC = () => {\n  const $2 = ["
      },
      // Fix malformed array syntax
      {
        pattern: /\[\s*{\s*icon:\s*(\w+),\s*title:\s*['"]([^'"]*)['"],\s*['"]([^'"]*)['"]\s*description:\s*['"]([^'"]*)['"]\s*}/g,
        replacement: "[{ icon: $1, title: '$2', description: '$4' }"
      },
      // Fix malformed return statements
      {
        pattern: /return\s*\(\s*['"]([^'"]*)['"]\s*<div/g,
        replacement: "return (\n    <div"
      },
      // Fix malformed JSX closing tags
      {
        pattern: /<\/div>\s*\)\s*}\s*;\s*export\s+default/g,
        replacement: "    </div>\n  );\n};\n\nexport default"
      },
      // Fix malformed quotes in strings
      {
        pattern: /['"]([^'"]*)['"]\s*['"]([^'"]*)['"]/g,
        replacement: "'$1 $2'"
      },
      // Fix malformed object properties
      {
        pattern: /{\s*icon:\s*(\w+),\s*title:\s*['"]([^'"]*)['"],\s*['"]([^'"]*)['"]\s*description:\s*['"]([^'"]*)['"]\s*}/g,
        replacement: "{ icon: $1, title: '$2', description: '$4' }"
      },
      // Fix malformed function calls
      {
        pattern: /(\w+)\s*\(\s*\)\s*<div/g,
        replacement: "$1() {\n  return (\n    <div"
      },
      // Fix malformed export statements
      {
        pattern: /export\s+default\s+(\w+)\s*;\s*['"]([^'"]*)['"]/g,
        replacement: "export default $1;"
      }
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
<<<<<<< HEAD      fs.writeFileSync(filePath, content, 'utf8');
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
// Function to recursively find and fix files;
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
function findFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
// Function to recursively find and fix files
function fixFilesInDirectory(dirPath) {
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
<<<<<<< HEAD      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution;
// Main execution
const files = findFiles('.');
let fixedCount = 0;

console.log(`Found ${files.length} files to check...`);

files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);
console.log('🔧 Starting syntax error fixes...');
const fixedCount = fixFilesInDirectory('.');
console.log(`✅ Fixed syntax errors in ${fixedCount} files`);
console.log('Starting syntax error fixes...');
const fixedCount = fixFilesInDirectory('./components');
const fixedCount2 = fixFilesInDirectory('./pages');
console.log(`Fixed ${fixedCount + fixedCount2} files`);
<<<<<<< HEAD