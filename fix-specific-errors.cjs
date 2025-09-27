#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Fix specific remaining syntax errors
const fixes = [
  // Fix return statement
  { pattern: /return4\.5;/g, replacement: 'return 4.5;' },
  
  // Fix class name spacing issues
  { pattern: /dark:bg-gray-800rounded-lg/g, replacement: 'dark:bg-gray-800 rounded-lg' },
  { pattern: /bottom-4right-4z-50/g, replacement: 'bottom-4 right-4 z-50' },
  { pattern: /bg-red-600hover:bg-red-700text-white/g, replacement: 'bg-red-600 hover:bg-red-700 text-white' },
  { pattern: /p-3rounded-full/g, replacement: 'p-3 rounded-full' },
  { pattern: /shadow-lgtransition-colors/g, replacement: 'shadow-lg transition-colors' },
  { pattern: /items-centerspace-x-2/g, replacement: 'items-center space-x-2' },
  { pattern: /w-3h-3rounded-full/g, replacement: 'w-3 h-3 rounded-full' },
  { pattern: /text-smtext-gray-600/g, replacement: 'text-sm text-gray-600' },
  
  // Fix JSX syntax errors
  { pattern: /}\`\}>/g, replacement: '}`}' },
  { pattern: /}\`\}>/g, replacement: '}`}' },
  { pattern: /}\`\}>/g, replacement: '}`}' },
  
  // Fix missing spaces in class names
  { pattern: /(\w+)(\d+)(\w+)/g, replacement: '$1 $2 $3' },
  { pattern: /(\w+)(\d+)(\w+)/g, replacement: '$1 $2 $3' },
  { pattern: /(\w+)(\d+)(\w+)/g, replacement: '$1 $2 $3' },
  
  // Fix specific patterns
  { pattern: /className=\{`([^`]*)\`\}/g, replacement: 'className={`$1`}' },
  { pattern: /className=\{`([^`]*)\`\}/g, replacement: 'className={`$1`}' },
  { pattern: /className=\{`([^`]*)\`\}/g, replacement: 'className={`$1`}' },
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