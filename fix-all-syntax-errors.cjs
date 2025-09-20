#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Comprehensive syntax error patterns to fix
const fixes = [
  // Fix double arrow functions and parentheses
  { pattern: /=\s*\(\)\s*\(\)\s*=>/g, replacement: '= () =>' },
  { pattern: /=\s*\(\)\s*\(\)\s*{/g, replacement: '= () => {' },
  { pattern: /\(\)\s*\(\)\s*=>/g, replacement: '() =>' },
  { pattern: /\(\)\s*\(\)\s*{/g, replacement: '() => {' },
  
  // Fix function parameter syntax errors
  { pattern: /\)\s*\(\)\s*=>/g, replacement: ') =>' },
  { pattern: /\)\s*\(\)\s*{/g, replacement: ') => {' },
  
  // Fix object destructuring with default values
  { pattern: /{\s*([^}]+)\s*}\s*\(\)\s*=>/g, replacement: '({ $1 }) =>' },
  { pattern: /{\s*([^}]+)\s*}\s*\(\)\s*{/g, replacement: '({ $1 }) => {' },
  
  // Fix useEffect and other hooks
  { pattern: /useEffect\(\(\)\s*\(\)\s*=>/g, replacement: 'useEffect(() =>' },
  { pattern: /useState\(\(\)\s*\(\)\s*=>/g, replacement: 'useState(() =>' },
  { pattern: /useCallback\(\(\)\s*\(\)\s*=>/g, replacement: 'useCallback(() =>' },
  { pattern: /useMemo\(\(\)\s*\(\)\s*=>/g, replacement: 'useMemo(() =>' },
  
  // Fix arrow function declarations
  { pattern: /const\s+(\w+)\s*=\s*\(\)\s*\(\)\s*=>/g, replacement: 'const $1 = () =>' },
  { pattern: /const\s+(\w+)\s*=\s*\(\)\s*\(\)\s*{/g, replacement: 'const $1 = () => {' },
  
  // Fix class method declarations
  { pattern: /(\w+)\s*=\s*\(\)\s*\(\)\s*=>/g, replacement: '$1 = () =>' },
  { pattern: /(\w+)\s*=\s*\(\)\s*\(\)\s*{/g, replacement: '$1 = () => {' },
  
  // Fix semicolons in wrong places
  { pattern: /;\s*$/gm, replacement: '' },
  { pattern: /{\s*;/g, replacement: '{' },
  { pattern: /;\s*}/g, replacement: '}' },
  { pattern: /;\s*,/g, replacement: ',' },
  { pattern: /,\s*;/g, replacement: ',' },
  
  // Fix double braces
  { pattern: /{{/g, replacement: '{' },
  { pattern: /}}/g, replacement: '}' },
  
  // Fix missing commas in object literals
  { pattern: /}\s*{/g, replacement: '}, {' },
  { pattern: /}\s*queries:/g, replacement: '}, queries:' },
  { pattern: /}\s*mutations:/g, replacement: '}, mutations:' },
  
  // Fix function declarations
  { pattern: /function\s*{/g, replacement: 'function() {' },
  { pattern: /=>\s*{/g, replacement: '() => {' },
  
  // Fix interface declarations
  { pattern: /interface\s+\w+\s*{;/g, replacement: 'interface $1 {' },
  
  // Fix missing commas in interface properties
  { pattern: /(\w+):\s*([^,}]+)\s*(\w+):/g, replacement: '$1: $2,\n  $3:' },
  
  // Fix missing commas in type definitions
  { pattern: /(\w+)\s*(\w+)\s*(\w+):/g, replacement: '$1,\n  $2: $3:' },
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
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

// Find all TypeScript/JavaScript files in src directory
const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);