const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common syntax fixes
const fixes = [
  // Fix semicolons at end of lines in object properties
  { pattern: /(\w+):\s*(\w+);$/gm, replacement: '$1: $2,' },
  // Fix duplicate imports
  { pattern: /import\s+React[^;]+;\s*import\s+React[^;]+;/g, replacement: 'import React from \'react\';' },
  // Fix malformed JSX closing tags
  { pattern: /<\/Foote>/g, replacement: '</Footer>' },
  // Fix extra commas in function declarations
  { pattern: /const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*{,\s*$/gm, replacement: 'const $1: React.FC = () => {' },
  // Fix malformed JSX fragments
  { pattern: /<>\s*$/gm, replacement: '<>' },
  // Fix unclosed JSX elements
  { pattern: /<h1[^>]*>[^<]*$/gm, replacement: (match) => match + '</h1>' },
  // Fix missing closing tags for common elements
  { pattern: /<div[^>]*>[^<]*$/gm, replacement: (match) => match + '</div>' },
  // Fix malformed object properties
  { pattern: /(\w+):\s*(\w+);\s*$/gm, replacement: '$1: $2,' },
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

// Find all TypeScript/JSX files
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: process.cwd() });

console.log(`Found ${files.length} files to check...`);

files.forEach(fixFile);

console.log('Syntax fixes completed!');