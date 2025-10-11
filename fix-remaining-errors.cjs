const fs = require('fs');
const path = require('path');
const glob = require('glob');

// More comprehensive fixes for remaining errors
const fixes = [
  // Fix unclosed JSX elements
  { pattern: /<([A-Z][a-zA-Z0-9]*)\s*[^>]*>\s*$/gm, replacement: '<$1 />' },
  { pattern: /<([A-Z][a-zA-Z0-9]*)\s*>\s*$/gm, replacement: '<$1 />' },
  
  // Fix missing closing div tags
  { pattern: /<div[^>]*>\s*$/gm, replacement: '<div>' },
  { pattern: /<div[^>]*>\s*<div[^>]*>\s*$/gm, replacement: '<div>\n          <div>' },
  
  // Fix malformed className attributes
  { pattern: /className="([^"]*)\s+([^"]*)"/g, replacement: 'className="$1 $2"' },
  { pattern: /hover:\s+([a-zA-Z-]+)/g, replacement: 'hover:$1' },
  { pattern: /md:\s+([a-zA-Z-]+)/g, replacement: 'md:$1' },
  
  // Fix missing closing tags in specific patterns
  { pattern: /<Icon>\s*$/gm, replacement: '<Icon className="w-5 h-5" />' },
  { pattern: /<Mail>\s*$/gm, replacement: '<Mail className="w-5 h-5" />' },
  { pattern: /<Phone>\s*$/gm, replacement: '<Phone className="w-5 h-5" />' },
  { pattern: /<MapPin>\s*$/gm, replacement: '<MapPin className="w-5 h-5" />' },
  
  // Fix missing closing parentheses
  { pattern: /}\s*$/gm, replacement: '}\n' },
  { pattern: /]\s*$/gm, replacement: ']\n' },
  
  // Fix malformed JSX structure
  { pattern: /<Navigation>\s*$/gm, replacement: '<Navigation />' },
  { pattern: /<Footer>\s*$/gm, replacement: '<Footer />' },
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