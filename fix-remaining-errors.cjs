#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Comprehensive fixes for remaining syntax errors
const fixes = [
  // Fix interface property syntax errors
  { pattern: /resolve,\s*d:\s*boolean;/g, replacement: 'resolved: boolean;' },
  { pattern: /tag,\s*s:\s*string\[\];/g, replacement: 'tags: string[];' },
  { pattern: /coun,\s*t:\s*number;/g, replacement: 'count: number;' },
  { pattern: /percentag,\s*e:\s*number/g, replacement: 'percentage: number' },
  
  // Fix property names with spaces
  { pattern: /errorsLast2\s+4\s+h:/g, replacement: 'errorsLast24h:' },
  { pattern: /errorsLast\s+7\s+d:/g, replacement: 'errorsLast7d:' },
  
  // Fix comparison operators
  { pattern: /overallScore\s*<\/=\s*70/g, replacement: 'overallScore <= 70' },
  
  // Fix class names with spaces
  { pattern: /text-gray-60\s+0\s+mt-2/g, replacement: 'text-gray-600 mt-2' },
  
  // Fix missing closing tags and syntax
  { pattern: /}\s*>\s*<\/div>/g, replacement: '}</p></div>' },
  
  // Fix other common spacing issues
  { pattern: /(\w+)\s+(\d+)\s+(\w+)/g, replacement: '$1$2$3' },
  { pattern: /(\d+)\s+(\d+)\s+(\d+)/g, replacement: '$1$2$3' },
  
  // Fix missing spaces in class names
  { pattern: /(\w+)(\d+)(\w+)/g, replacement: '$1 $2 $3' },
  
  // Fix specific patterns
  { pattern: /className=\{`([^`]*)\`\}/g, replacement: 'className={`$1`}' },
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      let newContent;
      if (typeof fix.replacement === 'function') {
        newContent = content.replace(fix.pattern, fix.replacement);
      } else {
        newContent = content.replace(fix.pattern, fix.replacement);
      }
      
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