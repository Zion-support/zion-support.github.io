#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Final comprehensive fix for all remaining class name spacing issues
const fixes = [
  // Fix class name spacing issues
  { pattern: /items-centerspace-x-4/g, replacement: 'items-center space-x-4' },
  { pattern: /text-2xlfont-bold/g, replacement: 'text-2xl font-bold' },
  { pattern: /text-gray-900dark:text-white/g, replacement: 'text-gray-900 dark:text-white' },
  { pattern: /text-gray-600dark:text-gray-400/g, replacement: 'text-gray-600 dark:text-gray-400' },
  { pattern: /bg-red-600hover:bg-red-700text-white/g, replacement: 'bg-red-600 hover:bg-red-700 text-white' },
  { pattern: /p-3rounded-full/g, replacement: 'p-3 rounded-full' },
  { pattern: /shadow-lgtransition-colors/g, replacement: 'shadow-lg transition-colors' },
  { pattern: /rounded-ful\s+l/g, replacement: 'rounded-full' },
  
  // Fix any remaining number spacing
  { pattern: /(\d+)\s+(\d+)/g, replacement: '$1$2' },
  { pattern: /(\d+)\s+(\d+)\s+(\d+)/g, replacement: '$1$2$3' },
  
  // Fix specific patterns
  { pattern: /h\s+2/g, replacement: 'h2' },
  { pattern: /h\s+3/g, replacement: 'h3' },
  { pattern: /h\s+4/g, replacement: 'h4' },
  { pattern: /h\s+5/g, replacement: 'h5' },
  { pattern: /h\s+6/g, replacement: 'h6' },
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