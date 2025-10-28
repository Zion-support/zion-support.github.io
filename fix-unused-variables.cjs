const fs = require('fs');
const path = require('path');
const glob = require('glob');

const files = glob.sync('app/**/*.{ts,tsx}', { cwd: process.cwd() });

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  // Remove unused function declarations that are not the default export
  // Pattern: function PageXxx() { ... } but not export default function
  const functionRegex = /^function\s+Page\w+\(\)\s*\{[\s\S]*?\n\}/gm;
  const matches = content.match(functionRegex);
  
  if (matches) {
    matches.forEach(match => {
      // Check if this function is not the default export
      if (!content.includes(`export default ${match.trim().split('(')[0].replace('function ', '')}`)) {
        content = content.replace(match, '');
        modified = true;
      }
    });
  }

  // Remove unused variable declarations
  content = content.replace(/^const\s+Page\w+\s*=\s*\(\)\s*=>\s*\{[\s\S]*?\n\};?\s*$/gm, '');
  
  // Remove unused function expressions
  content = content.replace(/^const\s+Page\w+\s*=\s*function[^{]*\{[\s\S]*?\n\};?\s*$/gm, '');

  // Clean up multiple empty lines
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Fixed unused variables in: ${file}`);
  }
});

console.log('Unused variable cleanup completed');