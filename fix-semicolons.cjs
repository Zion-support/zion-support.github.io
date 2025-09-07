#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixSemicolons(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common patterns
    content = content
      // Fix variable declarations ending with comma
      .replace(/(\w+)\s*=\s*[^;]+,\s*$/gm, '$1;')
      // Fix function calls ending with comma
      .replace(/(\w+\([^)]*\))\s*,\s*$/gm, '$1;')
      // Fix return statements ending with comma
      .replace(/return\s+[^;]+,\s*$/gm, (match) => match.replace(/,\s*$/, ';'))
      // Fix if statements ending with comma
      .replace(/if\s*\([^)]+\)\s+[^;]+,\s*$/gm, (match) => match.replace(/,\s*$/, ';'))
      // Fix const/let/var declarations ending with comma
      .replace(/(const|let|var)\s+\w+\s*=\s*[^;]+,\s*$/gm, (match) => match.replace(/,\s*$/, ';'))
      // Fix object properties ending with comma
      .replace(/(\w+:\s*[^,}]+),\s*$/gm, '$1;')
      // Fix array elements ending with comma
      .replace(/(\w+)\s*,\s*$/gm, '$1;')
      // Fix method calls ending with comma
      .replace(/(\w+\.\w+\([^)]*\))\s*,\s*$/gm, '$1;');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findTsFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsFiles(fullPath));
    } else if (item.endsWith('.ts') || item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Find and fix all TypeScript files
const tsFiles = findTsFiles(process.cwd());
let fixed = 0;

for (const file of tsFiles) {
  if (fixSemicolons(file)) {
    fixed++;
  }
}

console.log(`Fixed ${fixed} files`);
