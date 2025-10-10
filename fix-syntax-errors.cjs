#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common syntax errors in TSX files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix merge conflict markers
    if (content.includes('<<<<<<< HEAD')) {
      content = content.replace(/<<<<<<< HEAD\n/g, '');
      content = content.replace(/=======\n/g, '');
      content = content.replace(/>>>>>>> [^\n]+\n/g, '');
      modified = true;
    }

    // Fix semicolons in array items (replace last semicolon with comma or remove)
    content = content.replace(/;\s*\]\s*$/gm, ']');
    content = content.replace(/;\s*\]\s*;/gm, '];');
    
    // Fix missing closing brackets in arrays
    content = content.replace(/(\s+)\}\s*$/gm, '$1}');
    
    // Fix malformed JSX fragments - ensure proper closing
    content = content.replace(/<>([^<]*?)<\//g, '<>$1</>');
    
    // Fix missing commas in object arrays
    content = content.replace(/(\s+)\}\s*(\s*)\]\s*$/gm, '$1}$2];');
    
    // Fix missing closing tags for JSX elements - simplified approach
    // This is a complex fix that needs manual review, so we'll skip it for now

    // Fix specific patterns that cause parsing errors
    content = content.replace(/,\s*\)/g, ')');
    content = content.replace(/,\s*\]/g, ']');
    content = content.replace(/,\s*}/g, '}');
    
    // Fix malformed JSX expressions
    content = content.replace(/\{\s*([^}]*?)\s*\}\s*$/gm, (match, expr) => {
      if (expr.trim() && !expr.includes('return') && !expr.includes('const') && !expr.includes('let') && !expr.includes('var')) {
        return `{${expr.trim()}}`;
      }
      return match;
    });

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TSX files in the app directory
const tsxFiles = glob.sync('app/**/*.tsx', { cwd: process.cwd() });

console.log(`Found ${tsxFiles.length} TSX files to check...`);

let fixedCount = 0;
tsxFiles.forEach(file => {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files.`);