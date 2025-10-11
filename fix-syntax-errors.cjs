const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common syntax fixes
const fixes = [
  // Fix malformed object properties
  { pattern: /ico,\s*n:/g, replacement: 'icon:' },
  { pattern: /{name:/g, replacement: '{ name:' },
  { pattern: /,\s*}/g, replacement: ' }' },
  { pattern: /,\s*]/g, replacement: ' ]' },
  
  // Fix missing spaces in object properties
  { pattern: /{([a-zA-Z_][a-zA-Z0-9_]*):/g, replacement: '{ $1:' },
  { pattern: /([a-zA-Z_][a-zA-Z0-9_]*):([a-zA-Z_])/g, replacement: '$1: $2' },
  
  // Fix malformed imports
  { pattern: /import\s*{\s*([^}]+);\s*}\s*from/g, replacement: 'import { $1 } from' },
  { pattern: /import\s*{\s*([^}]+),\s*}\s*from/g, replacement: 'import { $1 } from' },
  
  // Fix missing closing braces and parentheses
  { pattern: /return\s*\(\s*<div[^>]*>\s*$/gm, replacement: 'return (\n    <div>' },
  { pattern: /<div[^>]*>\s*$/gm, replacement: '<div>' },
  
  // Fix malformed JSX
  { pattern: /<([A-Z][a-zA-Z0-9]*)\s*className="([^"]*)"\s*$/gm, replacement: '<$1 className="$2">' },
  { pattern: /<([A-Z][a-zA-Z0-9]*)\s*$/gm, replacement: '<$1>' },
  
  // Fix missing closing tags
  { pattern: /<([A-Z][a-zA-Z0-9]*)\s*[^>]*>\s*$/gm, replacement: '<$1>' },
  
  // Fix malformed function declarations
  { pattern: /const\s+([A-Z][a-zA-Z0-9]*)\s*:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{([^}]*)$/gm, replacement: 'const $1: React.FC = () => {\n  $2' },
  
  // Fix missing semicolons and commas
  { pattern: /}\s*$/gm, replacement: '}\n' },
  { pattern: /]\s*$/gm, replacement: ']\n' },
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TSX files
const files = glob.sync('**/*.tsx', { ignore: ['node_modules/**', 'dist/**'] });

console.log(`Found ${files.length} TSX files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);