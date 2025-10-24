#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Simple and direct fixes
    const originalContent = content;
    
    // Remove all extra quotes at end of lines
    content = content.replace(/"\s*$/gm, '');
    
    // Fix specific patterns
    content = content.replace(/;\s*"/g, ';');
    content = content.replace(/import\s+[^;]*;\s*"/g, (match) => match.replace(/;\s*"/, ';'));
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  console.log('Starting simple quote fixes...');
  
  // Get all TypeScript/TSX files
  const files = glob.sync('**/*.{ts,tsx}', {
    ignore: ['node_modules/**', '.next/**', 'dist/**']
  });

  let fixedCount = 0;
  let totalFiles = files.length;

  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }

  console.log(`\nFixed ${fixedCount} out of ${totalFiles} files`);
  console.log('Simple quote fixes completed!');
}

if (require.main === module) {
  main();
}

module.exports = { fixFile };