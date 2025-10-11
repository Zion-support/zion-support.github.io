const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common patterns to fix
const fixes = [
  // Fix malformed object properties
  { pattern: /ico,\s*n:/g, replacement: 'icon:' },
  { pattern: /,\s*;/g, replacement: ',' },
  { pattern: /{\s*;/g, replacement: '{' },
  { pattern: /;\s*}/g, replacement: '}' },
  { pattern: /;\s*,/g, replacement: ',' },
  
  // Fix missing closing brackets and parentheses
  { pattern: /\)\s*$/gm, replacement: ')' },
  { pattern: /}\s*$/gm, replacement: '}' },
  
  // Fix JSX structure issues
  { pattern: /<div\s+className="[^"]*"\s*$/gm, replacement: (match) => match + '>' },
  { pattern: /<section\s+className="[^"]*"\s*$/gm, replacement: (match) => match + '>' },
  { pattern: /<main\s+className="[^"]*"\s*$/gm, replacement: (match) => match + '>' },
  
  // Fix malformed imports
  { pattern: /import\s*{\s*Helmet;\s*}\s*from\s*'react-helmet-async'/g, replacement: "import { Helmet } from 'react-helmet-async'" },
  
  // Fix missing semicolons in function declarations
  { pattern: /const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*{const/g, replacement: 'const $1: React.FC = () => {\n  const' },
  
  // Fix array syntax
  { pattern: /}\s*,\s*$/gm, replacement: '}' },
  { pattern: /]\s*$/gm, replacement: ']' },
  
  // Fix JSX closing tags
  { pattern: /<(\w+)\s+className="[^"]*"\s*$/gm, replacement: '<$1 className="$2">' },
  
  // Fix malformed return statements
  { pattern: /return\s*\(\s*<div\s+className="[^"]*"\s*$/gm, replacement: (match) => match + '>' },
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    fixes.forEach(fix => {
      if (typeof fix.replacement === 'function') {
        content = content.replace(fix.pattern, fix.replacement);
      } else {
        content = content.replace(fix.pattern, fix.replacement);
      }
    });
    
    // Additional specific fixes
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{const/g, 'const $1: React.FC = () => {\n  const');
    content = content.replace(/}\s*,\s*$/gm, '}');
    content = content.replace(/]\s*$/gm, ']');
    
    // Fix missing closing tags
    content = content.replace(/<div\s+className="[^"]*"\s*$/gm, (match) => match + '>');
    content = content.replace(/<section\s+className="[^"]*"\s*$/gm, (match) => match + '>');
    content = content.replace(/<main\s+className="[^"]*"\s*$/gm, (match) => match + '>');
    
    // Fix malformed JSX structure
    content = content.replace(/<div\s+className="[^"]*"\s*<Helmet>/g, '<>\n      <Helmet>');
    content = content.replace(/<div\s+className="[^"]*"\s*<Navigation>/g, '<>\n      <Navigation>');
    
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

// Find all problematic files
const patterns = [
  'app/**/*.tsx',
  '*.tsx'
];

let fixedCount = 0;
patterns.forEach(pattern => {
  const files = glob.sync(pattern, { ignore: ['node_modules/**', 'dist/**', '.next/**'] });
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });
});

console.log(`Fixed ${fixedCount} files`);