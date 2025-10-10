#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixObjectSyntax(content) {
  // Fix missing commas in object properties
  content = content.replace(
    /(\w+):\s*([^,}]+)\s*}\s*(\w+):/g,
    '$1: $2,\n      $3:'
  );
  
  // Fix missing commas in array elements
  content = content.replace(
    /(\w+):\s*\[([^\]]+)\]\s*}\s*(\w+):/g,
    '$1: [$2],\n      $3:'
  );
  
  // Fix missing commas in string properties
  content = content.replace(
    /(\w+):\s*'([^']+)'\s*}\s*(\w+):/g,
    "$1: '$2',\n      $3:"
  );
  
  // Fix missing commas in template literals
  content = content.replace(
    /(\w+):\s*`([^`]+)`\s*}\s*(\w+):/g,
    '$1: `$2`,\n      $3:'
  );
  
  return content;
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixObjectSyntax(content);
    
    if (content !== originalContent) {
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

function main() {
  const appDir = path.join(__dirname, 'app');
  const files = glob.sync('**/*.{ts,tsx}', { cwd: appDir });
  
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(appDir, file);
    if (fixFile(filePath)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, fixObjectSyntax };