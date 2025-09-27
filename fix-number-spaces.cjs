#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Fix number spacing issues
const fixes = [
  // Fix spaced numbers like "1 0 0" to "100"
  { pattern: /(\d+)\s+(\d+)\s+(\d+)/g, replacement: '$1$2$3' },
  
  // Fix spaced numbers like "10 0 0" to "1000"
  { pattern: /(\d+)\s+(\d+)\s+(\d+)/g, replacement: '$1$2$3' },
  
  // Fix spaced numbers like "10000 0 0" to "1000000"
  { pattern: /(\d+)\s+(\d+)\s+(\d+)/g, replacement: '$1$2$3' },
  
  // Fix other common spacing issues
  { pattern: /goo,\s*d:/g, replacement: 'good:' },
  { pattern: /warnin,\s*g:/g, replacement: 'warning:' },
  { pattern: /text-green-5\s+0\s+0/g, replacement: 'text-green-500' },
  { pattern: /text-yellow-5\s+0\s+0/g, replacement: 'text-yellow-500' },
  { pattern: /text-red-5\s+0\s+0/g, replacement: 'text-red-500' },
  { pattern: /text-blue-5\s+0\s+0/g, replacement: 'text-blue-500' },
  { pattern: /text-gray-5\s+0\s+0/g, replacement: 'text-gray-500' },
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