#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
  let modified = false;
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix extra semicolons at the beginning of lines
    content = content.replace(/^;import/gm, 'import');
    content = content.replace(/^;export/gm, 'export');
    content = content.replace(/^;const/gm, 'const');
    content = content.replace(/^;function/gm, 'function');
    content = content.replace(/^;class/gm, 'class');
    
    // Fix malformed JSX closing tags
    content = content.replace(/\s*\}\s*\)\s*;\s*\}/g, '\n  );\n}');
    content = content.replace(/\s*\}\s*\)\s*;\s*}\s*$/g, '\n  );\n}');
    
    // Fix unterminated JSX elements
    content = content.replace(/>\s*\}\s*$/gm, '>\n  );');
    
    // Fix malformed function declarations
    content = content.replace(/export default function (\w+)\(\) \{\s*return\s*\(\s*<>/g, 'export default function $1() {\n  return (\n    <>');
    
    // Fix extra closing braces
    content = content.replace(/\s*\}\s*\}\s*$/gm, '\n  );\n}');
    
    // Fix malformed JSX attributes
    content = content.replace(/className=\"([^"]*)\"\s*>/g, 'className="$1">');
    
    // Fix unterminated strings in JSX
    content = content.replace(/title=\"([^"]*)\"\s*>/g, 'title="$1">');
    content = content.replace(/content=\"([^"]*)\"\s*>/g, 'content="$1">');
    
    // Fix malformed return statements
    content = content.replace(/return\s*\(\s*<>\s*$/gm, 'return (\n    <>');
    
    // Fix extra semicolons in JSX
    content = content.replace(/;\s*import/g, ';\nimport');
    content = content.replace(/;\s*export/g, ';\nexport');
    
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