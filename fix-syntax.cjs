const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common syntax fixes
const fixes = [
  // Fix semicolons in object properties
  { pattern: /(\s+)(\w+):\s*([^,;]+);(\s*)$/gm, replacement: '$1$2: $3,$4' },
  // Fix missing commas in arrays
  { pattern: /(\]\s*)(\s*const\s+\w+\s*=\s*\[)/gm, replacement: '$1;\n$2' },
  // Fix malformed JSX closing tags
  { pattern: /<\/Foote>/g, replacement: '</Footer>' },
  // Fix missing function declarations
  { pattern: /^(\s+)return\s*\(/gm, replacement: 'const Component = () => {\n$1return (' },
  // Fix duplicate imports
  { pattern: /import\s+React[^;]+;\s*import\s+React[^;]+;/g, replacement: 'import React from \'react\';' },
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
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Find all TypeScript and JavaScript files
const files = glob.sync('**/*.{ts,tsx,js,jsx}', {
  cwd: process.cwd(),
  ignore: ['node_modules/**', 'dist/**', '.next/**']
});

console.log(`Found ${files.length} files to check...`);

files.forEach(fixFile);

console.log('Syntax fixes completed!');