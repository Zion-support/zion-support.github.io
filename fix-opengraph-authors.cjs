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
    
    // Fix OpenGraph authors format - they should be strings, not objects
    if (content.includes('openGraph:') && content.includes('authors: [{ name:')) {
      // Replace object array with string array in openGraph section
      content = content.replace(
        /openGraph:\s*\{[^}]*authors:\s*\[\{\s*name:\s*'([^']+)'\s*\}\]/g,
        "openGraph: {\n    authors: ['$1']"
      );
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Fixed OpenGraph authors format in: ${file}`);
      totalFixed++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`\nFixed OpenGraph authors format in ${totalFixed} files`);