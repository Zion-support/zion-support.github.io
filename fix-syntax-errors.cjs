#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get list of TypeScript/JavaScript files
const files = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | grep -v node_modules | grep -v .git', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file && fs.existsSync(file));

console.log(`Found ${files.length} files to check`);

let fixedFiles = 0;
let errorFiles = 0;

for (const filePath of files) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Fix common syntax issues from merge conflicts
    
    // Remove stray semicolons at the beginning of lines
    content = content.replace(/^\s*;\s*/gm, '');
    
    // Fix function declarations with stray semicolons
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{;/g, 'const $1: React.FC = () => {');
    
    // Fix array declarations with stray semicolons
    content = content.replace(/const\s+(\w+)\s*=\s*\[;/g, 'const $1 = [');
    
    // Fix object declarations with stray semicolons
    content = content.replace(/{\s*;/g, '{');
    
    // Fix closing braces with stray semicolons
    content = content.replace(/}\s*;/g, '}');
    
    // Fix return statements with stray semicolons
    content = content.replace(/return\s*\(;/g, 'return (');
    
    // Fix JSX elements with stray semicolons
    content = content.replace(/<\s*(\w+)\s*>/g, '<$1>');
    content = content.replace(/<\s*\/\s*(\w+)\s*>/g, '</$1>');
    
    // Fix Helmet tags
    content = content.replace(/<\s*Helmet\s*>/g, '<Helmet>');
    content = content.replace(/<\s*\/\s*Helmet\s*>/g, '</Helmet>');
    
    // Fix empty JSX fragments
    content = content.replace(/<\s*>\s*<\s*\/\s*>/g, '');
    
    // Fix malformed JSX attributes
    content = content.replace(/=\s*{\s*(\w+)\s*};/g, '={$1}');
    
    // Fix array items with stray semicolons
    content = content.replace(/{\s*icon:\s*(\w+),;/g, '{icon: $1,');
    content = content.replace(/title:\s*'([^']*)',;/g, "title: '$1',");
    content = content.replace(/description:\s*'([^']*)',;/g, "description: '$1',");
    content = content.replace(/benefits:\s*\[([^\]]*)\]\s*};/g, 'benefits: [$1]}');
    
    // Fix string literals with stray semicolons
    content = content.replace(/'([^']*)',;/g, "'$1',");
    content = content.replace(/"([^"]*)",;/g, '"$1",');
    
    // Fix closing brackets and braces
    content = content.replace(/\]\s*};/g, ']}');
    content = content.replace(/}\s*];/g, '}]');
    
    // Fix JSX closing tags
    content = content.replace(/<\s*\/\s*(\w+)\s*>\s*;/g, '</$1>');
    
    // Fix function calls with stray semicolons
    content = content.replace(/\(\s*\)\s*;/g, '()');
    
    // Clean up multiple consecutive semicolons
    content = content.replace(/;{2,}/g, ';');
    
    // Clean up extra whitespace
    content = content.replace(/\s+;/g, ';');
    content = content.replace(/;\s+/g, '; ');
    
    // Fix malformed JSX expressions
    content = content.replace(/{\s*(\w+)\s*};/g, '{$1}');
    
    // Fix array access with stray semicolons
    content = content.replace(/\[\s*(\d+)\s*\]\s*;/g, '[$1]');
    
    // Fix object property access
    content = content.replace(/\.\s*(\w+)\s*;/g, '.$1');
    
    // Clean up extra newlines
    content = content.replace(/\n{3,}/g, '\n\n');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      fixedFiles++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    errorFiles++;
  }
}

console.log(`\nSummary:`);
console.log(`- Files processed: ${files.length}`);
console.log(`- Files fixed: ${fixedFiles}`);
console.log(`- Files with errors: ${errorFiles}`);