#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Get all TypeScript/JavaScript files that might have syntax errors
const filesToCheck = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | grep -v app-broken | grep -v app-disabled', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.trim());

console.log(`Checking ${filesToCheck.length} files for syntax errors`);

let fixedCount = 0;
let errorCount = 0;

filesToCheck.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content
    
    // Fix common syntax errors
    
    // 1. Remove semicolons from JSX text content
    content = content.replace(/(<[^>]*>)([^<]*);([^<]*<\/[^>]*>)/g, (match, openTag, beforeSemicolon, afterSemicolon, closeTag) => {
      return openTag + beforeSemicolon + afterSemicolon + closeTag;
    });
    
    // 2. Fix semicolons in JSX attributes
    content = content.replace(/className="([^"]*);"/g, 'className=""');
    content = content.replace(/to="([^"]*);"/g, 'to="/"')
    
    // 3. Fix malformed JSX tags with semicolons
    content = content.replace(/<(\w+);/g, '<$1');
    content = content.replace(/<\/(\w+);/g, '</$1');
    
    // 4. Fix semicolons in JSX text content (more comprehensive)
    content = content.replace(/(>[^<]*);([^<]*<)/g, '$1$2');
    
    // 5. Fix placeholder values
    content = content.replace(/className="\$1"/g, 'className=""');
    content = content.replace(/to="\$1"/g, 'to="/"');
    
    // 6. Fix malformed function calls in JSX
    content = content.replace(/(\w+);\s*to=/g, '$1 to=');
    
    // 7. Fix broken JSX expressions
    content = content.replace(/(\w+);\s*className=/g, '$1 className=');
    
    // 8. Remove stray semicolons at the end of JSX elements
    content = content.replace(/(\w+);\s*>/g, '$1>');
    
    // 9. Fix broken closing tags
    content = content.replace(/(\w+);\s*\/>/g, '$1 />')
    
    // 10. Fix malformed JSX fragments
    content = content.replace(/<>([^<]*)<\/>/g, '<>$1</>');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    errorCount++;
  }
});

console.log(`\nFixed ${fixedCount} files, ${errorCount} errors`);