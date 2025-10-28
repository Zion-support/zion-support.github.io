const fs = require('fs');
const glob = require('glob');

// Fix all remaining import syntax errors
const files = glob.sync('app/micro-saas/**/*.tsx');

let totalFixed = 0;

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Fix import statements with colons
  if (content.includes('from: ')) {
    content = content.replace(/from: /g, 'from ');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content);
    totalFixed++;
    console.log(`Fixed: ${filePath}`);
  }
});

console.log(`\nTotal files fixed: ${totalFixed}`);