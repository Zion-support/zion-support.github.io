#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Fix class name spacing issues
const fixes = [
  // Fix missing spaces in class names
  { pattern: /rounded-mdhover:/g, replacement: 'rounded-md hover:' },
  { pattern: /justify-betweenmb-/g, replacement: 'justify-between mb-' },
  { pattern: /items-centerjustify-/g, replacement: 'items-center justify-' },
  { pattern: /text-smfont-/g, replacement: 'text-sm font-' },
  { pattern: /px-4py-/g, replacement: 'px-4 py-' },
  { pattern: /bg-gray-100text-/g, replacement: 'bg-gray-100 text-' },
  { pattern: /text-gray-700hover:/g, replacement: 'text-gray-700 hover:' },
  { pattern: /hover:bg-gray-200'/g, replacement: "hover:bg-gray-200'" },
  { pattern: /mb-6'/g, replacement: "mb-6'" },
  { pattern: /gap-6'/g, replacement: "gap-6'" },
  { pattern: /duration-200'/g, replacement: "duration-200'" },
  { pattern: /transition-colors'/g, replacement: "transition-colors'" },
  { pattern: /font-medium'/g, replacement: "font-medium'" },
  { pattern: /rounded-lg'/g, replacement: "rounded-lg'" },
  { pattern: /bg-blue-600'/g, replacement: "bg-blue-600'" },
  { pattern: /text-white'/g, replacement: "text-white'" },
  { pattern: /bg-gray-100'/g, replacement: "bg-gray-100'" },
  { pattern: /text-gray-700'/g, replacement: "text-gray-700'" },
  { pattern: /hover:bg-gray-200'/g, replacement: "hover:bg-gray-200'" },
  { pattern: /grid-cols-1'/g, replacement: "grid-cols-1'" },
  { pattern: /lg:grid-cols-2'/g, replacement: "lg:grid-cols-2'" },
  { pattern: /gap-6'/g, replacement: "gap-6'" },
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