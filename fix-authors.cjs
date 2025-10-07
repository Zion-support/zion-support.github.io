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
    
    // Fix authors array format
    if (content.includes("authors: ['")) {
      // Replace string array with object array
      content = content.replace(/authors: \['([^']+)'\]/g, "authors: [{ name: '$1' }]");
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Fixed authors format in: ${file}`);
      totalFixed++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`\nFixed authors format in ${totalFixed} files`);