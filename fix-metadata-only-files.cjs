const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all files that might have only metadata
const files = glob.sync('app/**/*.tsx', { cwd: '/workspace' });

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join('/workspace', file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Check if file only has metadata and no JSX
  if (content.includes('export const metadata') && 
      !content.includes('<') && 
      !content.includes('return') &&
      content.includes('import React')) {
    
    // Remove React import
    content = content.replace(/^import React from ['"][^'"]*['"];?\s*$/gm, '');
    modified = true;
  }

  // Clean up multiple empty lines
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

  if (modified) {
    fs.writeFileSync(filePath, content);
    fixedCount++;
    console.log(`Fixed: ${file}`);
  }
});

console.log(`\nFixed ${fixedCount} files with metadata-only issues.`);