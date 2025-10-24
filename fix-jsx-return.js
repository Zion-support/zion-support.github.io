#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed JSX return statements
    const originalContent = content;
    
    // Fix the specific pattern: return (<><Head>
    content = content.replace(/return\s*\(\s*<>\s*<Head>/g, 'return (\n    <>\n      <Head>');
    
    // Fix the specific pattern: </Head>\n\n      <div
    content = content.replace(/<\/Head>\s*\n\s*<div/g, '</Head>\n      \n      <div');
    
    // Fix the specific pattern: </div>\n      <Footer />
    content = content.replace(/<\/div>\s*\n\s*<Footer\s*\/>/g, '</div>\n      \n      <Footer />');
    
    // Fix the specific pattern: </Footer>\n  )\n}
    content = content.replace(/<\/Footer>\s*\n\s*\)\s*\n\}/g, '</Footer>\n    </>\n  )\n}');

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
  console.log('Starting JSX return fixes...');
  
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
  console.log('JSX return fixes completed!');
}

if (require.main === module) {
  main();
}

module.exports = { fixFile };