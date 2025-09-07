const fs = require('fs');

// Read the index.tsx file
let content = fs.readFileSync('/workspace/pages/index.tsx', 'utf8');

// Fix common syntax issues
content = content
  // Remove extra semicolons after statements
  .replace(/;\s*;/g, ';')
  .replace(/;\s*$/gm, '')
  .replace(/;\s*(\w)/g, ';\n$1')
  // Remove quotes around object keys
  .replace(/"(\w+)":/g, '$1:')
  // Fix JSX syntax
  .replace(/<(\w+)>/g, '<$1>')
  .replace(/<\/(\w+)>/g, '</$1>')
  // Remove extra semicolons in JSX
  .replace(/;\s*>/g, '>')
  .replace(/;\s*</g, '<')
  // Fix function declarations
  .replace(/function\s+(\w+)\s*\(\s*\)\s*{;/g, 'function $1() {')
  // Fix arrow functions
  .replace(/\(\s*\)\s*=>\s*{;/g, '() => {')
  // Clean up extra whitespace
  .replace(/\n\s*\n\s*\n/g, '\n\n')
  .replace(/^\s*\n/gm, '');

// Write the fixed content back
fs.writeFileSync('/workspace/pages/index.tsx', content);

console.log('✅ Fixed syntax issues in index.tsx');