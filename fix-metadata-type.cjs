const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all blog pages
const files = glob.sync('app/blog/**/*.tsx');

let totalFixed = 0;

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    // Fix type property in metadata - it should be in openGraph, not in main metadata
    if (content.includes('type: "article"') && content.includes('export const metadata')) {
      // Remove type from main metadata
      content = content.replace(/,\s*type:\s*["']article["']/g, '');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Fixed metadata type in: ${file}`);
      totalFixed++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`\nFixed metadata type in ${totalFixed} files`);