#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Remove semicolons after opening braces and before closing braces
  content = content.replace(/{\s*;/g, '{');
  content = content.replace(/;\s*}/g, '}');
  
  // Remove semicolons after JSX opening tags
  content = content.replace(/<(\w+[^>]*)>\s*;/g, '<$1>');
  
  // Remove semicolons after JSX closing tags
  content = content.replace(/<\/(\w+)>\s*;/g, '</$1>');
  
  // Remove semicolons after return statements
  content = content.replace(/return\s*\(/g, 'return (');
  content = content.replace(/return\s*\(/g, 'return (');
  
  // Fix function declarations
  content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{;/g, 'const $1: React.FC = () => {');
  
  // Remove standalone semicolons
  content = content.replace(/^\s*;\s*$/gm, '');
  
  // Fix JSX fragments
  content = content.replace(/<>\s*;/g, '<>');
  content = content.replace(/;\s*<\/>/g, '</>');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      processDirectory(fullPath);
    } else if (stat.isFile() && (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js'))) {
      processFile(fullPath);
    }
  }
}

// Start processing from the current directory
console.log('Fixing syntax errors v2...');
processDirectory('./app');
processDirectory('./hooks');
processDirectory('./utils');
console.log('Syntax error fixing v2 complete!');