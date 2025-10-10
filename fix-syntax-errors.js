#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TypeScript/TSX files
const files = execSync('find . -name "*.tsx" -o -name "*.ts" | grep -v node_modules | grep -v ".git"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file && !file.includes('node_modules') && !file.includes('.git'));

console.log(`Found ${files.length} TypeScript files to check`);

let fixedCount = 0;
let errorCount = 0;

files.forEach(filePath => {
  try {
    console.log(`Processing: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix common syntax errors after merge conflict resolution
    
    // 1. Remove semicolons after opening braces and before closing braces
    content = content.replace(/{\s*;/g, '{');
    content = content.replace(/;\s*}/g, '}');
    
    // 2. Fix semicolons in JSX attributes
    content = content.replace(/;\s*title:/g, ' title:');
    content = content.replace(/;\s*description:/g, ' description:');
    content = content.replace(/;\s*benefits:/g, ' benefits:');
    content = content.replace(/;\s*icon:/g, ' icon:');
    
    // 3. Fix semicolons in function declarations
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{;/g, 'const $1: React.FC = () => {');
    
    // 4. Fix semicolons in return statements
    content = content.replace(/return\s*\(;/g, 'return (');
    
    // 5. Fix semicolons in JSX elements
    content = content.replace(/<\s*\/\s*>\s*;/g, '</>');
    content = content.replace(/<\s*Helmet\s*>/g, '<Helmet>');
    content = content.replace(/<\s*\/\s*Helmet\s*>/g, '</Helmet>');
    
    // 6. Fix semicolons in array declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\[;/g, 'const $1 = [');
    
    // 7. Fix semicolons in object properties
    content = content.replace(/{\s*;\s*icon:/g, '{ icon:');
    content = content.replace(/{\s*;\s*title:/g, '{ title:');
    content = content.replace(/{\s*;\s*description:/g, '{ description:');
    content = content.replace(/{\s*;\s*benefits:/g, '{ benefits:');
    
    // 8. Fix semicolons in JSX closing tags
    content = content.replace(/<\s*\/\s*(\w+)\s*>/g, '</$1>');
    
    // 9. Fix semicolons in JSX opening tags
    content = content.replace(/<\s*(\w+)\s*>/g, '<$1>');
    
    // 10. Remove standalone semicolons on their own lines
    content = content.replace(/^\s*;\s*$/gm, '');
    
    // 11. Fix semicolons in JSX expressions
    content = content.replace(/{\s*;\s*(\w+)/g, '{$1');
    
    // 12. Fix semicolons in array elements
    content = content.replace(/\[\s*;/g, '[');
    content = content.replace(/;\s*\]/g, ']');
    
    // 13. Fix semicolons in object literals
    content = content.replace(/{\s*;\s*(\w+):/g, '{$1:');
    
    // 14. Fix semicolons in function calls
    content = content.replace(/\(\s*;/g, '(');
    content = content.replace(/;\s*\)/g, ')');
    
    // 15. Fix semicolons in template literals
    content = content.replace(/`\s*;\s*`/g, '``');
    
    // 16. Remove multiple consecutive semicolons
    content = content.replace(/;+/g, ';');
    
    // 17. Fix semicolons in import statements
    content = content.replace(/import\s+([^;]+);\s*from/g, 'import $1 from');
    
    // 18. Fix semicolons in export statements
    content = content.replace(/export\s+([^;]+);/g, 'export $1');
    
    // 19. Fix semicolons in JSX fragments
    content = content.replace(/<\s*>\s*;\s*<\s*\/\s*>/g, '<></>');
    
    // 20. Fix semicolons in JSX self-closing tags
    content = content.replace(/<\s*(\w+)\s*\/\s*>\s*;/g, '<$1 />');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      fixedCount++;
      console.log(`✓ Fixed: ${filePath}`);
    } else {
      console.log(`- No changes needed: ${filePath}`);
    }
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    errorCount++;
  }
});

console.log(`\nSummary:`);
console.log(`- Files processed: ${files.length}`);
console.log(`- Files fixed: ${fixedCount}`);
console.log(`- Errors: ${errorCount}`);