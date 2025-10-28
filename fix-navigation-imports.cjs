const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all files that might have unused Navigation imports
const files = glob.sync('app/**/*.tsx', { cwd: '/workspace' });

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join('/workspace', file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Check if Navigation is imported but not used
  if (content.includes("import Navigation from") && !content.includes('<Navigation') && !content.includes('Navigation.')) {
    content = content.replace(/^import Navigation from ['"][^'"]*['"];?\s*$/gm, '');
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

console.log(`\nFixed ${fixedCount} files with unused Navigation import issues.`);