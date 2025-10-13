#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to clean up syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove branch names that got left behind
    content = content.replace(/cursor\/fix-errors-and-merge-to-main-[a-f0-9]+/g, '');
    
    // Remove standalone branch names on their own lines
    content = content.replace(/^\s*cursor\/fix-errors-and-merge-to-main-[a-f0-9]+\s*$/gm, '');
    
    // Fix malformed JSX attributes
    content = content.replace(/className\s*=\s*"[^"[^"]*"');
      const secondQuote = match.indexOf('"', firstQuote + 1);
      if (secondQuote !== -1) {
        return match.substring(0, secondQuote + 1);
      }
      return match;
    });
    
    // Fix malformed string literals
    content = content.replace(/"]*)"[^"/g, '"$1"');
    
    // Remove extra closing braces that don't match
    content = content.replace(/\}\s*\}\s*$/gm, '}');
    
    // Fix numeric literal issues
    content = content.replace(/(\d+)([a-zA-Z_])/g, '$1 $2');
    
    // Remove empty lines with just whitespace and branch names
    content = content.replace(/^\s*cursor\/[^\n]*\s*$/gm, '');
    
    // Clean up multiple consecutive empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Fix malformed imports
    content = content.replace(/import\s+([^;]+);\s*([a-zA-Z])/g, 'import $1;\n$2');
    
    // Remove orphaned closing braces at the end
    content = content.replace(/\}\s*$/, '');
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      
      if (entry.isDirectory()) {
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(entry.name)) {
          searchDirectory(fullPath);
        }
      } else if (entry.isFile()) {
        if (/\.(tsx?|jsx?|ts|js)$/.test(entry.name)) {
          files.push(fullPath);
        }
    }
  searchDirectory(dir);
  return files;
}

// Main execution
console.log('🔧 Fixing syntax errors in source files...');

const sourceFiles = findSourceFiles(process.cwd());
let fixedCount = 0;

for (const file of sourceFiles) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
console.log(`✅ Fixed syntax errors in ${fixedCount} files`);