#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Comprehensive fix for all remaining number spacing issues
const fixes = [
  // Fix all number spacing patterns
  { pattern: /(\d+)\s+(\d+)\s+(\d+)/g, replacement: '$1$2$3' },
  { pattern: /(\d+)\s+(\d+)/g, replacement: '$1$2' },
  
  // Fix specific patterns that might have been missed
  { pattern: /3\s+0\s+d/g, replacement: '30d' },
  { pattern: /9\s+0\s+d/g, replacement: '90d' },
  { pattern: /1\s+8\s+0/g, replacement: '180' },
  { pattern: /1\s+0\s+0/g, replacement: '100' },
  { pattern: /2\s+4\s+h/g, replacement: '24h' },
  { pattern: /7\s+d/g, replacement: '7d' },
  { pattern: /8\s+0\s+0/g, replacement: '800' },
  { pattern: /9\s+0\s+0/g, replacement: '900' },
  { pattern: /6\s+0\s+0/g, replacement: '600' },
  { pattern: /4\s+0\s+0/g, replacement: '400' },
  { pattern: /5\s+0\s+0/g, replacement: '500' },
  { pattern: /2\s+0\s+0/g, replacement: '200' },
  { pattern: /1\s+0\s+0/g, replacement: '100' },
  { pattern: /9\s+0\s+0/g, replacement: '900' },
  { pattern: /8\s+0\s+0/g, replacement: '800' },
  { pattern: /7\s+0\s+0/g, replacement: '700' },
  { pattern: /6\s+0\s+0/g, replacement: '600' },
  { pattern: /5\s+0\s+0/g, replacement: '500' },
  { pattern: /4\s+0\s+0/g, replacement: '400' },
  { pattern: /3\s+0\s+0/g, replacement: '300' },
  { pattern: /2\s+0\s+0/g, replacement: '200' },
  { pattern: /1\s+0\s+0/g, replacement: '100' },
  { pattern: /9\s+0/g, replacement: '90' },
  { pattern: /8\s+0/g, replacement: '80' },
  { pattern: /7\s+0/g, replacement: '70' },
  { pattern: /6\s+0/g, replacement: '60' },
  { pattern: /5\s+0/g, replacement: '50' },
  { pattern: /4\s+0/g, replacement: '40' },
  { pattern: /3\s+0/g, replacement: '30' },
  { pattern: /2\s+0/g, replacement: '20' },
  { pattern: /1\s+0/g, replacement: '10' },
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