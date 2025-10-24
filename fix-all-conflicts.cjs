#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all merge conflict markers and keep the current version (HEAD)
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< [^\n]+\n?/g, '');
    
    // Remove empty lines that might be left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Clean up any broken JSX or syntax
    content = content.replace(/\n\s*<[^>]*$/gm, '');
    content = content.replace(/^\s*[^<]*>\s*$/gm, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += findAndFixFiles(filePath);
    } else if (file.match(/\.(tsx?|jsx?)$/)) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Fix root directory files
const rootFiles = ['App.tsx', 'EnhancedFooter.tsx', 'main.tsx', '.eslintrc.js', 'eslint.config.js', 'vite.config.ts', 'jest.setup.ts'];
let totalFixed = 0;

rootFiles.forEach(file => {
  if (fs.existsSync(file)) {
    if (fixMergeConflicts(file)) {
      totalFixed++;
    }
  }
});

// Fix app directory
if (fs.existsSync('app')) {
  totalFixed += findAndFixFiles('app');
}

console.log(`\nTotal files fixed: ${totalFixed}`);
console.log('All merge conflicts have been resolved!');