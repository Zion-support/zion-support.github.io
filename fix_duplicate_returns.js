#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix duplicate return statements
function fixDuplicateReturns(content) {
  let fixed = content;
  
  // Fix duplicate return statements
  fixed = fixed.replace(/return\s*\(\s*return\s*\(/g, 'return (');
  
  // Fix missing return statements in function components
  fixed = fixed.replace(/export default function\s+(\w+)\s*\([^)]*\)\s*{\s*$/gm, 'export default function $1() {\n  return (');
  
  // Fix JSX fragments
  fixed = fixed.replace(/<>\s*$/gm, '<>');
  fixed = fixed.replace(/^\s*<\/>/gm, '</>');
  
  // Fix missing semicolons
  fixed = fixed.replace(/(\w+)\s*{\s*$/gm, '$1 {\n  ');
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixDuplicateReturns(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (processFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting duplicate return fixes...');
const fixedCount = processDirectory('./src');
console.log(`Fixed ${fixedCount} files`);