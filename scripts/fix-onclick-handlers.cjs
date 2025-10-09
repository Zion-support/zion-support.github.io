#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixOnClickHandlers(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed onClick handlers
    if (content.includes('onClick={() = aria-label="Button">')) {
      content = content.replace(/onClick=\{\(\) = aria-label="Button"> ([^}]+)\}/g, 'onClick={() => $1}');
      modified = true;
    }
    
    // Fix other malformed onClick patterns
    if (content.includes('onClick={() =')) {
      content = content.replace(/onClick=\{\(\) = ([^>]+)> ([^}]+)\}/g, 'onClick={() => $2}');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed onClick handlers in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JavaScript files
const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', {
  ignore: ['src/**/*.d.ts', 'node_modules/**']
});

let fixedCount = 0;

console.log('Fixing onClick handlers...');

files.forEach(file => {
  if (fixOnClickHandlers(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} files.`);
console.log('OnClick handler fixes completed!');