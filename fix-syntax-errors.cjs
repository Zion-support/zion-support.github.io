const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common syntax fixes
const fixes = [
  // Fix unterminated strings
  {
    pattern: /description:\s*'([^']*),\s*\n\s*([^']*)',/g,
    replacement: "description: '$1, $2',"
  },
  // Fix malformed JSX fragments
  {
    pattern: /<>\s*<Helmet;\s*>/g,
    replacement: '<>\n      <Helmet>'
  },
  // Fix missing semicolons in imports
  {
    pattern: /import\s+([^;]+);;/g,
    replacement: 'import $1;'
  },
  // Fix malformed object properties
  {
    pattern: /{\s*;\s*,/g,
    replacement: '{'
  },
  // Fix malformed arrays
  {
    pattern: /\[\s*;\s*\]/g,
    replacement: '[]'
  },
  // Fix malformed return statements
  {
    pattern: /return\s*\(\s*;/g,
    replacement: 'return ('
  },
  // Fix malformed JSX attributes
  {
    pattern: /className="([^"]*)\s*;\s*([^"]*)"/g,
    replacement: 'className="$1 $2"'
  }
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

// Find all TypeScript/JSX files
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: __dirname });

console.log(`Found ${files.length} files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);