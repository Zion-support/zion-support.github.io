#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix common syntax errors in JavaScript/TypeScript files
function fixSyntaxErrors(content) {
  // Fix comma instead of semicolon at end of statements
  content = content.replace(/,(\s*)(\n\s*)(const|let|var|function|if|for|while|return|export|import)/g, ';$1$2$3');
  content = content.replace(/,(\s*)(\n\s*)(})/g, ';$1$2$3');
  content = content.replace(/,(\s*)(\n\s*)(])/g, ';$1$2$3');
  content = content.replace(/,(\s*)(\n\s*)(\))/g, ';$1$2$3');
  
  // Fix comma instead of semicolon in variable declarations
  content = content.replace(/(\w+)\s*,(\s*)(\n\s*)(const|let|var)/g, '$1;$2$3$4');
  
  // Fix comma instead of semicolon in object properties
  content = content.replace(/(\w+):\s*([^,}]+),\s*(\n\s*)(\w+):/g, '$1: $2,$3$4:');
  content = content.replace(/(\w+):\s*([^,}]+),\s*(\n\s*)(\w+);/g, '$1: $2,$3$4;');
  
  // Fix comma instead of semicolon in array elements
  content = content.replace(/([^,\]]+),\s*(\n\s*)([^,\]]+),/g, '$1,$2$3,');
  
  // Fix comma instead of semicolon in function calls
  content = content.replace(/(\w+\([^)]+\))\s*,(\s*)(\n\s*)(\w+\([^)]+\))/g, '$1;$2$3$4');
  
  // Fix comma instead of semicolon in return statements
  content = content.replace(/return\s+([^,;]+),\s*(\n\s*)(\w+)/g, 'return $1;$2$3');
  
  // Fix missing semicolons after statements
  content = content.replace(/(\w+)\s*,(\s*)$/gm, '$1;');
  
  // Fix object literal syntax issues
  content = content.replace(/(\w+)\s*,(\s*)(\n\s*)(\w+)\s*:/g, '$1,$3$4:');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all JavaScript/TypeScript files
function findFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx']) {
  let files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files = files.concat(findFiles(fullPath, extensions));
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  
  return files;
}

// Main execution
function main() {
  const srcDir = path.join(__dirname, 'src', 'components');
  
  if (!fs.existsSync(srcDir)) {
    console.error('Components directory not found');
    return;
  }
  
  console.log('Finding files with potential syntax errors...');
  const files = findFiles(srcDir);
  
  console.log(`Found ${files.length} files to check`);
  
  let fixedCount = 0;
  for (const file of files) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed syntax errors in ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixSyntaxErrors, processFile };