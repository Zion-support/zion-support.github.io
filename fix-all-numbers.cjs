#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Fix all number spacing issues comprehensively
const fixes = [
  // Fix spaced numbers in various contexts
  { pattern: /(\d+)\s+(\d+)\s+(\d+)/g, replacement: '$1$2$3' },
  { pattern: /(\d+)\s+(\d+)/g, replacement: '$1$2' },
  
  // Fix specific patterns
  { pattern: /1\s+0\s+0/g, replacement: '100' },
  { pattern: /10\s+0\s+0/g, replacement: '1000' },
  { pattern: /10000\s+0\s+0/g, replacement: '1000000' },
  { pattern: /3\s+0\s+d/g, replacement: '30d' },
  { pattern: /300\s+0\s+0/g, replacement: '300000' },
  { pattern: /10\s+0\s+0/g, replacement: '1000' },
  
  // Fix function parameters
  { pattern: /timeRange\s*=\s*'3\s+0\s+d'/g, replacement: "timeRange = '30d'" },
  { pattern: /refreshInterval\s*=\s*300\s+0\s+0/g, replacement: 'refreshInterval = 300000' },
  { pattern: /setTimeout\(\(\)\s*=>\s*retryError\(errorData\.id\),\s*10\s+0\s+0\)/g, replacement: 'setTimeout(() => retryError(errorData.id), 1000)' },
  
  // Fix Math.max expressions
  { pattern: /Math\.max\(0,\s*1\s+0\s+0\s*-\s*\(/g, replacement: 'Math.max(0, 100 - (' },
  { pattern: /Math\.max\(0,\s*1\s+0\s+0\s*-\s*\(levelIssues\.length\s*\*\s*10\)\)/g, replacement: 'Math.max(0, 100 - (levelIssues.length * 10))' },
  
  // Fix number formatting
  { pattern: /if\s*\(\s*num\s*>=\s*10000\s+0\s+0\s*\)/g, replacement: 'if (num >= 1000000)' },
  { pattern: /if\s*\(\s*num\s*>=\s*10\s+0\s+0\s*\)/g, replacement: 'if (num >= 1000)' },
  { pattern: /\(\s*num\s*\/\s*10000\s+0\s+0\s*\)/g, replacement: '(num / 1000000)' },
  { pattern: /\(\s*num\s*\/\s*10\s+0\s+0\s*\)/g, replacement: '(num / 1000)' },
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
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const srcDir = path.join(__dirname, 'src', 'components');
const tsxFiles = findTsxFiles(srcDir);

console.log(`Found ${tsxFiles.length} .tsx files to check...`);

let fixedCount = 0;
tsxFiles.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files.`);