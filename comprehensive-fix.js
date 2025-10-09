#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
// Function to fix common syntax issues after merge conflict resolution
function fixSyntaxIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    // Fix common issues
    const fixes = [
      // Fix missing closing parentheses
      [/(\s+)\}\s*\)\s*$/, '$1})'],
      // Fix missing semicolons after function calls
      [/(\w+)\s*\(\s*\)\s*$/, '$1();'],
      // Fix duplicate variable declarations
      [/const\s+(\w+)\s*=\s*[^;]+;\s*\n\s*const\s+\1\s*=\s*[^;]+;/, (match, varName) => {
        const lines = match.split('\n');
        return lines[0]; // Keep only the first declaration
      }],
      // Fix malformed JSX closing tags
      [/<\/(\w+)>\s*<\/(\w+)>/, '</$1>'],
      // Fix missing commas in object literals
      [/(\w+):\s*([^,}\n]+)\s*\n\s*(\w+):/, '$1: $2,\n  $3:'],
      // Fix missing closing braces
      [/(\s+)\}\s*$/, '$1}'],
      // Fix malformed function calls
      [/(\w+)\s*\(\s*\)\s*$/, '$1();'],
      // Remove empty lines with just spaces
      [/^\s*\n/gm, ''],
      // Fix duplicate imports
      [/import\s+([^;]+);\s*\n\s*import\s+\1;/, 'import $1;'],
    ];
    for (const [pattern, replacement] of fixes) {
      const newContent = content.replace(pattern, replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax issues in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}
// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          // Skip node_modules and other common directories
          if (!['node_modules', '.git', 'dist', '.next', 'out', '__tests__'].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (stat.isFile()) {
          // Check if it's a TypeScript/JavaScript file
          if (/\.(ts|tsx|js|jsx)$/.test(item)) {
            files.push(fullPath);
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  scanDirectory(dir);
  return files;
}
// Main execution
console.log('🔍 Scanning for source files...');
const sourceFiles = findSourceFiles(process.cwd());
console.log(`📁 Found ${sourceFiles.length} source files to check.`);
console.log('\n🔧 Fixing syntax issues...');
let fixedCount = 0;
for (const file of sourceFiles) {
  if (fixSyntaxIssues(file)) {
    fixedCount++;
  }
}
console.log(`\n✅ Fixed syntax issues in ${fixedCount}/${sourceFiles.length} files.`);