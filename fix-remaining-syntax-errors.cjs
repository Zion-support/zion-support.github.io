#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix remaining syntax errors in a file
function fixRemainingSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix specific patterns that are causing build errors
    const fixes = [
      // Fix JSX attribute semicolons
      { pattern: /(\w+)='([^']*);'/g, replacement: "$1='$2'" },
      { pattern: /(\w+)="([^"]*);"/g, replacement: '$1="$2"' },
      // Fix JSX closing tag semicolons
      { pattern: /(\/>);/g, replacement: '$1' },
      { pattern: /(<\/[^>]+>);/g, replacement: '$1' },
      // Fix object property semicolons in JSX
      { pattern: /(\w+):\s*'([^']*);'/g, replacement: "$1: '$2'" },
      { pattern: /(\w+):\s*"([^"]*);"/g, replacement: '$1: "$2"' },
      // Fix array element semicolons
      { pattern: /'([^']*);',/g, replacement: "'$1'," },
      { pattern: /"([^"]*);",/g, replacement: '"$1",' },
      // Fix function parameter semicolons
      { pattern: /\(\s*([^)]*);\s*\)/g, replacement: '($1)' },
      // Fix return statement semicolons
      { pattern: /return\s*\(/g, replacement: 'return (' },
      // Fix className semicolons
      { pattern: /className='([^']*);'/g, replacement: "className='$1'" },
      { pattern: /className="([^"]*);"/g, replacement: 'className="$1"' },
    ];

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed remaining syntax errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Specific files that need fixing based on build errors
const specificFiles = [
  'components/ui/Card.tsx',
  'pages/NotFound.tsx',
  'pages/enhanced-home.tsx',
  'pages/index.p.tsx',
  'pages/pricing-guide.tsx'
];

console.log('🔧 Fixing remaining syntax errors in specific files...');
let fixedCount = 0;

specificFiles.forEach(file => {
  if (fs.existsSync(file)) {
    if (fixRemainingSyntaxErrors(file)) {
      fixedCount++;
    }
  }
});

console.log(`✅ Fixed remaining syntax errors in ${fixedCount} files`);