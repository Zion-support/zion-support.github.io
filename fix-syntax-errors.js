#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to recursively find all TypeScript/TSX files
function findTsxFiles(dir, fileList = []) {
  try {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      try {
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          // Skip disabled directories and node_modules
          if (!file.includes('disabled') && !file.includes('backup') && !file.includes('_conflicted') && !file.includes('node_modules')) {
            findTsxFiles(filePath, fileList);
          }
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
          fileList.push(filePath);
        }
      } catch (error) {
        // Skip broken symlinks or inaccessible files
        console.log(`Skipping inaccessible file: ${filePath}`);
      }
    });
  } catch (error) {
    console.log(`Skipping inaccessible directory: ${dir}`);
  }
  
  return fileList;
}

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing semicolons after import statements
    content = content.replace(/import\s+React\s+from\s+['"]react['"]\s*$/gm, 'import React from \'react\';');
    content = content.replace(/import\s+\{\s*Metadata\s*\}\s+from\s+['"]next['"]\s*$/gm, 'import { Metadata } from \'next\';');
    
    // Fix JSX expressions that need parent elements
    if (content.includes('export default function') && content.includes('return (')) {
      // Find the return statement and wrap it properly
      content = content.replace(/return\s*\(\s*$/gm, 'return (\n  <div>');
      content = content.replace(/^\s*\)\s*$/gm, '  </div>\n)');
    }
    
    // Fix unclosed JSX elements
    content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1></div>');
    content = content.replace(/<section([^>]*)>\s*$/gm, '<section$1></section>');
    content = content.replace(/<p([^>]*)>\s*$/gm, '<p$1></p>');
    content = content.replace(/<a([^>]*)>\s*$/gm, '<a$1></a>');
    content = content.replace(/<span([^>]*)>\s*$/gm, '<span$1></span>');
    
    // Fix malformed JSX expressions
    content = content.replace(/\{\s*$/gm, '{/* content */}');
    
    // Fix missing closing tags for common patterns
    content = content.replace(/<div([^>]*)>\s*<span([^>]*)>\s*$/gm, '<div$1><span$2></span></div>');
    
    // Fix JSX fragments
    content = content.replace(/<>([^<]*?)(?=\n\s*<[^\/])/g, '<div>$1</div>');
    
    // Fix malformed function declarations
    content = content.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*\{/g, 'export default function $1() {\n  return (\n    <div>');
    
    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
    }
    
    // Fix missing closing parentheses
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    if (openParens > closeParens) {
      const missingParens = openParens - closeParens;
      content += ')'.repeat(missingParens);
    }
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting syntax error fixes...');

const tsxFiles = findTsxFiles('/workspace');
let fixedCount = 0;

tsxFiles.forEach(file => {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} files out of ${tsxFiles.length} TypeScript files.`);