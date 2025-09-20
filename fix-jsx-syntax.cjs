#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Pattern to match JSX tags with missing opening bracket
const jsxPattern = /<([a-zA-Z][a-zA-Z0-9]*),\s*$/gm;

function fixJsxSyntax(content) {
  return content.replace(jsxPattern, '<$1');
}

function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixJsxSyntax(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
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
  const srcFiles = glob.sync('src/**/*.{tsx,jsx}', { cwd: process.cwd() });
  let fixedCount = 0;
  
  console.log(`Found ${srcFiles.length} files to check...`);
  
  for (const file of srcFiles) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\nFixed ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixJsxSyntax, fixFile };