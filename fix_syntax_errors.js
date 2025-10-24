const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common syntax fixes
const fixes = [
  // Fix missing semicolons in array declarations
  {
    pattern: /(\s+const\s+\w+\s*=\s*\[[\s\S]*?\])\s*\n\s*return/,
    replacement: '$1;\n\n  return'
  },
  // Fix malformed JSX closing tags
  {
    pattern: /(\w+)\s*\/\s*>/g,
    replacement: '$1 />'
  },
  // Fix malformed JSX opening tags
  {
    pattern: /<(\w+)\s*;\s*/g,
    replacement: '<$1 '
  },
  // Fix malformed JSX closing tags with semicolons
  {
    pattern: /<\/(\w+)\s*;\s*>/g,
    replacement: '</$1>'
  },
  // Fix malformed JSX attributes
  {
    pattern: /(\w+)\s*=\s*"([^"]*)"\s*\/\s*>/g,
    replacement: '$1="$2" />'
  },
  // Fix malformed JSX content
  {
    pattern: />\s*([^<]+);\s*<\//g,
    replacement: '>$1</'
  },
  // Fix malformed JSX fragments
  {
    pattern: /<\s*\/\s*>\s*;/g,
    replacement: '</>'
  },
  // Fix malformed JSX comments
  {
    pattern: /\/\*\s*([^*]+)\s*\*\/\s*,\s*}/g,
    replacement: '/* $1 */'
  },
  // Fix malformed JSX expressions
  {
    pattern: /{\s*([^}]+)\s*,\s*}/g,
    replacement: '{$1}'
  },
  // Fix malformed JSX attributes with semicolons
  {
    pattern: /(\w+)\s*=\s*"([^"]*)"\s*;\s*/g,
    replacement: '$1="$2" '
  },
  // Fix malformed JSX closing tags with semicolons
  {
    pattern: /<\/(\w+)\s*;\s*>/g,
    replacement: '</$1>'
  },
  // Fix malformed JSX opening tags with semicolons
  {
    pattern: /<(\w+)\s*;\s*>/g,
    replacement: '<$1>'
  },
  // Fix malformed JSX attributes with semicolons
  {
    pattern: /(\w+)\s*=\s*"([^"]*)"\s*;\s*>/g,
    replacement: '$1="$2" />'
  },
  // Fix malformed JSX content with semicolons
  {
    pattern: />\s*([^<]+);\s*<\//g,
    replacement: '>$1</'
  },
  // Fix malformed JSX fragments with semicolons
  {
    pattern: /<\s*\/\s*>\s*;/g,
    replacement: '</>'
  },
  // Fix malformed JSX comments with semicolons
  {
    pattern: /\/\*\s*([^*]+)\s*\*\/\s*,\s*}/g,
    replacement: '/* $1 */'
  },
  // Fix malformed JSX expressions with semicolons
  {
    pattern: /{\s*([^}]+)\s*,\s*}/g,
    replacement: '{$1}'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Additional specific fixes
    // Fix missing closing brackets in arrays
    content = content.replace(/(\s+const\s+\w+\s*=\s*\[[\s\S]*?)(\n\s*return)/g, (match, arrayPart, returnPart) => {
      if (!arrayPart.includes('];')) {
        return arrayPart + '];' + returnPart;
      }
      return match;
    });
    
    // Fix malformed JSX with unescaped > characters
    content = content.replace(/>\s*([^<]+)\s*>/g, '>$1</');
    
    // Fix malformed JSX attributes
    content = content.replace(/(\w+)\s*=\s*"([^"]*)"\s*\/\s*>/g, '$1="$2" />');
    
    // Fix malformed JSX closing tags
    content = content.replace(/(\w+)\s*\/\s*>/g, '$1 />');
    
    // Fix malformed JSX opening tags
    content = content.replace(/<(\w+)\s*;\s*/g, '<$1 ');
    
    // Fix malformed JSX closing tags with semicolons
    content = content.replace(/<\/(\w+)\s*;\s*>/g, '</$1>');
    
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