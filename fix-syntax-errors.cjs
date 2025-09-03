#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of files to fix
const filesToFix = [
  'advanced-app-improvement-suite.cjs',
  'advanced-syntax-fixer.cjs', 
  'aggressive-fix.cjs',
  'aggressive-fix.js'
];

function fixSyntaxErrors(content) {
  // Fix common syntax patterns
  let fixed = content;
  
  // Remove extra semicolons and commas
  fixed = fixed.replace(/;,;,/g, '');
  fixed = fixed.replace(/;,/g, '');
  fixed = fixed.replace(/;$/gm, '');
  
  // Fix class names
  fixed = fixed.replace(/class \$1 \{/g, 'class SyntaxFixer {');
  
  // Fix function declarations
  fixed = fixed.replace(/\{;/g, '{');
  fixed = fixed.replace(/\};/g, '}');
  
  // Fix array declarations
  fixed = fixed.replace(/\[;/g, '[');
  fixed = fixed.replace(/\[,/g, '[');
  fixed = fixed.replace(/,\];/g, ']');
  
  // Fix string literals with backticks
  fixed = fixed.replace(/`([^`]*?)`;/g, '`$1`');
  
  // Fix JSX syntax
  fixed = fixed.replace(/return \(;/g, 'return (');
  fixed = fixed.replace(/<div className="([^"]*?)">;/g, '<div className="$1">');
  
  // Fix template literals
  fixed = fixed.replace(/`\$\{([^}]*?)\`/g, '`${$1}`');
  
  // Fix method chaining
  fixed = fixed.replace(/\.split\("-"\);/g, '.split("-")');
  fixed = fixed.replace(/\.map\(([^)]*?)\);/g, '.map($1)');
  fixed = fixed.replace(/\.join\(""\);/g, '.join("")');
  
  return fixed;
}

filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    console.log(`Fixing ${filePath}...`);
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    fs.writeFileSync(filePath, fixed);
    console.log(`Fixed ${filePath}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('Syntax fixing complete!');