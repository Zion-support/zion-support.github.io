#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix missing commas in object literals
  content = content.replace(/(\w+):\s*['"`][^'"`]*['"`]\s*\n\s*(\w+):/g, '$1: $2,');
  content = content.replace(/(\w+):\s*['"`][^'"`]*['"`]\s*\n\s*}/g, '$1: $2\n  }');
  
  // Fix missing commas in style objects
  content = content.replace(/(\w+):\s*['"`][^'"`]*['"`]\s*\n\s*(\w+):/g, '$1: $2,');
  content = content.replace(/(\w+):\s*['"`][^'"`]*['"`]\s*\n\s*}/g, '$1: $2\n  }');
  
  // Fix missing semicolons after function declarations
  content = content.replace(/(\w+)\s*\(\s*\)\s*=>\s*\{[^}]*\}\s*\n\s*return/g, '$1() => {\n    // ...\n  };\n  return');
  
  // Fix missing closing braces
  content = content.replace(/(\w+)\s*\(\s*\)\s*=>\s*\{[^}]*\}\s*$/gm, '$1() => {\n    // ...\n  };');
  
  return content}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed: ${filePath}`)}
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)}
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      processDirectory(filePath)} else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      processFile(filePath)}
}

// Start processing from the current directory
console.log('Fixing syntax errors...');
processDirectory('.');
console.log('Done!');