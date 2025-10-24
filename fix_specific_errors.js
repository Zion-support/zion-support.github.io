const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix empty array declarations that are causing syntax errors
    content = content.replace(/const\s+\w+\s*=\s*\[\s*\]\s*;\s*\n\s*export/g, 'export');
    content = content.replace(/const\s+\w+\s*=\s*\[\s*\]\s*;\s*\n\s*return/g, 'return');
    content = content.replace(/const\s+\w+\s*=\s*\[\s*\]\s*;\s*\n\s*const/g, 'const');
    
    // Fix malformed arrow function syntax
    content = content.replace(/\(\)\s*=\s*<\s*\{/g, '() => {');
    
    // Fix malformed JSX closing tags
    content = content.replace(/(\w+)\s*\/\s*>/g, '$1 />');
    
    // Fix malformed JSX opening tags
    content = content.replace(/<(\w+)\s*;\s*/g, '<$1 ');
    
    // Fix malformed JSX closing tags with semicolons
    content = content.replace(/<\/(\w+)\s*;\s*>/g, '</$1>');
    
    // Fix malformed JSX attributes
    content = content.replace(/(\w+)\s*=\s*"([^"]*)"\s*\/\s*>/g, '$1="$2" />');
    
    // Fix malformed JSX content
    content = content.replace(/>\s*([^<]+);\s*<\//g, '>$1</');
    
    // Fix malformed JSX fragments
    content = content.replace(/<\s*\/\s*>\s*;/g, '</>');
    
    // Fix malformed JSX comments
    content = content.replace(/\/\*\s*([^*]+)\s*\*\/\s*,\s*}/g, '/* $1 */');
    
    // Fix malformed JSX expressions
    content = content.replace(/{\s*([^}]+)\s*,\s*}/g, '{$1}');
    
    // Fix malformed JSX attributes with semicolons
    content = content.replace(/(\w+)\s*=\s*"([^"]*)"\s*;\s*/g, '$1="$2" ');
    
    // Fix malformed JSX closing tags with semicolons
    content = content.replace(/<\/(\w+)\s*;\s*>/g, '</$1>');
    
    // Fix malformed JSX opening tags with semicolons
    content = content.replace(/<(\w+)\s*;\s*>/g, '<$1>');
    
    // Fix malformed JSX attributes with semicolons
    content = content.replace(/(\w+)\s*=\s*"([^"]*)"\s*;\s*>/g, '$1="$2" />');
    
    // Fix malformed JSX content with semicolons
    content = content.replace(/>\s*([^<]+);\s*<\//g, '>$1</');
    
    // Fix malformed JSX fragments with semicolons
    content = content.replace(/<\s*\/\s*>\s*;/g, '</>');
    
    // Fix malformed JSX comments with semicolons
    content = content.replace(/\/\*\s*([^*]+)\s*\*\/\s*,\s*}/g, '/* $1 */');
    
    // Fix malformed JSX expressions with semicolons
    content = content.replace(/{\s*([^}]+)\s*,\s*}/g, '{$1}');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/TSX files
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: process.cwd() });

console.log(`Found ${files.length} files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);