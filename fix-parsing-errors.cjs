#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get all TypeScript/JavaScript files
const getAllFiles = (dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) => {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Fix common parsing errors
const fixParsingErrors = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing function declarations
    if (content.includes('return (<') && !content.includes('const ') && !content.includes('function ')) {
      content = content.replace(/return \(</g, 'const Component = () => {\n  return (');
      modified = true;
    }
    
    // Fix missing closing braces
    if (content.includes('}render()') || content.includes('}render(')) {
      content = content.replace(/}render\(/g, '}\n  render(');
      modified = true;
    }
    
    // Fix missing semicolons after function declarations
    if (content.includes('})')) {
      content = content.replace(/}\)/g, '});');
      modified = true;
    }
    
    // Fix unterminated strings
    if (content.includes("import { useState } from 'react") && !content.includes("'react'")) {
      content = content.replace(/import { useState } from 'react/g, "import { useState } from 'react'");
      modified = true;
    }
    
    // Fix missing closing parentheses in JSX
    if (content.includes('render()') && !content.includes('render(')) {
      content = content.replace(/render\(\)/g, 'render(');
      modified = true;
    }
    
    // Fix missing export statements
    if (content.includes('const Component = () => {') && !content.includes('export default')) {
      content += '\n\nexport default Component;';
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed parsing errors in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
};

// Main execution
const files = getAllFiles('/workspace');
console.log(`Found ${files.length} files to check`);

let fixedCount = 0;
for (const file of files) {
  try {
    fixParsingErrors(file);
    fixedCount++;
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`Processed ${fixedCount} files`);