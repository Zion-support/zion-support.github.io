const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixObjectSyntax(content) {
  // Fix missing commas in object properties
  // Pattern: property: value\n      property: value
  content = content.replace(/(\w+):\s*([^,\n]+)\n\s+(\w+):/g, '$1: $2,\n      $3:');
  
  // Fix missing commas in array elements
  content = content.replace(/(\w+):\s*([^,\n]+)\n\s+(\w+):/g, '$1: $2,\n      $3:');
  
  // Fix missing commas in object literals
  content = content.replace(/(\w+):\s*([^,\n}]+)\n\s+(\w+):/g, '$1: $2,\n      $3:');
  
  // Fix missing commas in function parameters
  content = content.replace(/(\w+):\s*([^,\n)]+)\n\s+(\w+):/g, '$1: $2,\n      $3:');
  
  return content;
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixObjectSyntax(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed object syntax: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JavaScript files
const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

console.log(`Found ${files.length} files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);