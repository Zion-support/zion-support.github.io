#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common syntax errors
    const fixes = [
      // Fix extra semicolons in object literals and function calls
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
      // Fix semicolons in import statements
      { pattern: /import\s*{\s*([^}]+);\s*}/g, replacement: 'import { $1 }' },
      // Fix semicolons in function declarations
      { pattern: /\)\s*=>\s*{;/g, replacement: ') => {' },
      { pattern: /}\s*\)\s*;/g, replacement: '})' },
      // Fix semicolons in JSX
      { pattern: /className={cn\(\s*;/g, replacement: 'className={cn(' },
      { pattern: /}\s*\)\s*}/g, replacement: '})}' },
    ];

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixFilesInDirectory(filePath);
    } else if (stat.isFile() && /\.(ts|tsx|js|jsx)$/.test(file)) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

// Main execution
console.log('🔧 Starting syntax error fixes...');
const fixedCount = fixFilesInDirectory('.');
console.log(`✅ Fixed syntax errors in ${fixedCount} files`);