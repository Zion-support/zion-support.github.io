#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
  let modified = false;
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix extra closing parentheses and semicolons
    content = content.replace(/\s*\);\s*\);\s*$/gm, '\n  );\n}');
    content = content.replace(/\s*\);\s*\)\s*$/gm, '\n  );\n}');
    content = content.replace(/\s*\)\s*\)\s*$/gm, '\n  );\n}');
    
    // Fix extra semicolons at the end
    content = content.replace(/;\s*;\s*$/gm, ';\n}');
    content = content.replace(/;\s*\)\s*;\s*$/gm, ';\n}');
    
    // Fix malformed function endings
    content = content.replace(/\s*\);\s*\}\s*$/gm, '\n  );\n}');
    
    // Fix extra closing braces
    content = content.replace(/\s*\}\s*\}\s*$/gm, '\n}');
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      modified = true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  
  return modified;
}

// Find all TypeScript and TSX files
const patterns = [
  'app/**/*.{ts,tsx}',
  'src/**/*.{ts,tsx}',
  'components/**/*.{ts,tsx}'
];

let totalFixed = 0;

patterns.forEach(pattern => {
  const files = glob.sync(pattern, { ignore: ['node_modules/**', '.next/**'] });
  files.forEach(file => {
    if (fixFile(file)) {
      totalFixed++;
    }
  });
});

console.log(`\nFixed ${totalFixed} files`);