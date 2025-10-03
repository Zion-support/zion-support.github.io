#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix missing quotes around className attributes
  content = content.replace(/className=([^"'\s][^"'>]*[^"'\s])\s*>/g, 'className="$1">');
  content = content.replace(/className=([^"'\s][^"'>]*[^"'\s])\s*\/>/g, 'className="$1" />');
  
  // Fix missing quotes around other JSX attributes
  content = content.replace(/(\w+)=([^"'\s][^"'>]*[^"'\s])\s*>/g, '$1="$2">');
  content = content.replace(/(\w+)=([^"'\s][^"'>]*[^"'\s])\s*\/>/g, '$1="$2" />');
  
  // Fix missing commas after object properties
  content = content.replace(/(\w+):\s*"([^"]*)"\s*([^,}\s])/g, '$1: "$2", $3');
  
  // Fix malformed JSX with extra quotes
  content = content.replace(/className="([^"]*)"\s*"/g, 'className="$1"');
  
  // Fix spaces in Tailwind classes (remove spaces before colons)
  content = content.replace(/sm:\s+flex/g, 'sm:flex');
  content = content.replace(/md:\s+grid/g, 'md:grid');
  content = content.replace(/lg:\s+grid/g, 'lg:grid');
  
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
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find TypeScript/TSX files
function findTsxFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      findTsxFiles(fullPath, files);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting syntax error fixes...');

const srcDir = path.join(__dirname, 'src');
const files = findTsxFiles(srcDir);

let fixedCount = 0;
for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`\nFixed ${fixedCount} files out of ${files.length} total files.`);
console.log('Syntax error fixes completed!');
