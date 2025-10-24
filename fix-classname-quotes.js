#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix unterminated className attributes
    const newContent = content.replace(/className="([^"]*)\s*$/gm, 'className="$1"');
    
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }

    // Fix other common unterminated string patterns
    content = content.replace(/href="([^"]*)\s*$/gm, 'href="$1"');
    content = content.replace(/src="([^"]*)\s*$/gm, 'src="$1"');
    content = content.replace(/alt="([^"]*)\s*$/gm, 'alt="$1"');
    content = content.replace(/title="([^"]*)\s*$/gm, 'title="$1"');

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

function main() {
  console.log('Starting className quote fixes...');
  
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
  console.log('ClassName quote fixes completed!');
}

if (require.main === module) {
  main();
}

module.exports = { fixFile };