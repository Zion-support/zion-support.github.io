#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {
        results = results.concat(findFiles(filePath, extensions));
      }
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  
  return results;
}

// Function to fix JSX syntax errors
function fixJSXSyntax(content, filePath) {
  let fixed = content;
  
  // Fix extra semicolons in import statements
  fixed = fixed.replace(/import\s+([^;]+);;+/g, 'import $1;');
  
  // Fix extra semicolons and quotes in JSX attributes
  fixed = fixed.replace(/content="([^"]+)";;+/g, 'content="$1"');
  fixed = fixed.replace(/className="([^"]+)";;+/g, 'className="$1"');
  
  // Fix extra semicolons in JSX text content
  fixed = fixed.replace(/>([^<]+);;+</g, '>$1<');
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<React\.Fragment>/g, '<>');
  fixed = fixed.replace(/<\/React\.Fragment>/g, '</>');
  
  // Fix extra semicolons at end of JSX elements
  fixed = fixed.replace(/;\s*<\/div>/g, '</div>');
  fixed = fixed.replace(/;\s*<\/h1>/g, '</h1>');
  fixed = fixed.replace(/;\s*<\/p>/g, '</p>');
  fixed = fixed.replace(/;\s*<\/span>/g, '</span>');
  
  return fixed;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix JSX syntax errors
    content = fixJSXSyntax(content, filePath);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting JSX syntax fix...');

const files = findFiles('./app');
let fixedCount = 0;

files.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} files.`);
console.log('JSX syntax fixing completed!');