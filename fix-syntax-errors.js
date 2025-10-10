#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix common JSX and syntax errors;
function fixSyntaxErrors(filePath) {
  try {;
let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing React import
    if (content.includes('React') && !content.includes("import React")) {
      content = "import React from 'react';\n" + content;
      modified = true}
    
    // Fix JSX fragments that are not properly closed
    content = content.replace(/<React.Fragment>([^<]*?)(?=<[^>]*>)/g, '<React.Fragment>$1');
    content = content.replace(/<\/>/g, '</React.Fragment>');
    
    // Fix missing closing tags - basic patterns;
const tagPatterns = [
      { open: '<div', close: '</div>' },
      { open: '<section', close: '</section>' },
      { open: '<article', close: '</article>' },
      { open: '<main', close: '</main>' },
      { open: '<header', close: '</header>' },
      { open: '<footer', close: '</footer>' },
      { open: '<nav', close: '</nav>' },
      { open: '<aside', close: '</aside>' },
      { open: '<p', close: '</p>' },
      { open: '<h1', close: '</h1>' },
      { open: '<h2', close: '</h2>' },
      { open: '<h3', close: '</h3>' },
      { open: '<h4', close: '</h4>' },
      { open: '<h5', close: '</h5>' },
      { open: '<h6', close: '</h6>' },
      { open: '<span', close: '</span>' },
      { open: '<button', close: '</button>' },
      { open: '<a', close: '</a>' },
      { open: '<ul', close: '</ul>' },
      { open: '<ol', close: '</ol>' },
      { open: '<li', close: '</li>' },
      { open: '<form', close: '</form>' },
      { open: '<input', close: '' },
      { open: '<img', close: '' },
      { open: '<br', close: '' },
      { open: '<hr', close: '' }];
    
    // Fix common syntax issues
    content = content.replace(/;\s*}/g, '}');
    content = content.replace(/,\s*}/g, '}');
    content = content.replace(/,\s*]/g, ']');
    content = content.replace(/,\s*\)/g, ')');
    
    // Fix missing semicolons
    content = content.replace(/([^}])\n\s*const/g, '$1;\nconst');
    content = content.replace(/([^}])\n\s*let/g, '$1;\nlet');
    content = content.replace(/([^}])\n\s*var/g, '$1;\nvar');
    content = content.replace(/([^}])\n\s*function/g, '$1;\nfunction');
    
    // Fix JSX expressions that need parent elements
    if (content.includes('JSX expressions must have one parent element')) {
      // This is a complex fix that would need proper parsing
      // For now, we'll wrap problematic sections in fragments
      content = content.replace(/(<[^>]*>)\s*(<[^>]*>)/g, '<React.Fragment>\n$1\n$2\n</React.Fragment>')}
    
    // Fix common TypeScript issues
    content = content.replace(/:\s*any\s*=/g, ': any =');
    content = content.replace(/:\s*string\s*=/g, ': string =');
    content = content.replace(/:\s*number\s*=/g, ': number =');
    content = content.replace(/:\s*boolean\s*=/g, ': boolean =');
    
    // Fix missing return statements in arrow functions
    content = content.replace(/=>\s*{([^}]*<[^>]*>)/g, '=> {\nreturn (\n$1\n);\n}');
    
    // Fix console.log statements (remove or comment out)
    content = content.replace(/console\.log\([^)]*\);?\s*\n?/g, '// console.log removed for production\n');
    content = content.replace(/console\.warn\([^)]*\);?\s*\n?/g, '// console.warn removed for production\n');
    content = content.replace(/console\.error\([^)]*\);?\s*\n?/g, '// console.error removed for production\n');
    
    // Fix unused variables
    content = content.replace(/const\s+__dirname\s*=\s*[^;]+;?\s*\n?/g, '// __dirname removed\n');
    content = content.replace(/const\s+withSentry\s*=\s*[^;]+;?\s*\n?/g, '// withSentry removed\n');
    
    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true}
    
    return false} catch (error) {
    // console.error removed for production
return false}
}

// Function to find all TypeScript/JavaScript files;
function findSourceFiles(dir) {;
const files = [];
  ;
function searchDirectory(currentDir) {;
const items = fs.readdirSync(currentDir);
    
    for (const item of items) {;
const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist') {
        searchDirectory(fullPath)} else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        files.push(fullPath)}
    }
  }
  
  searchDirectory(dir);
  return files}

// Main execution
// console.log removed for production
;
const workspaceDir = process.cwd();
const sourceFiles = findSourceFiles(workspaceDir);

// console.log removed for production
;
let fixedCount = 0;
for (const file of sourceFiles) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
    // console.log removed for production
}
}

// console.log removed for production
// console.log removed for production
