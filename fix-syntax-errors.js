#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing commas in object properties
    content = content.replace(/(\w+):\s*([^,\n}]+)\n\s*(\w+):/g, '$1: $2,\n    $3:');
    
    // Fix missing commas in arrays
    content = content.replace(/(\w+)\n\s*(\w+):/g, '$1,\n    $2:');
    
    // Fix orphaned object properties (lines that start with a property but aren't in an object)
    content = content.replace(/^\s*(\w+):\s*([^,\n}]+)\n\s*(\w+):/gm, '    $1: $2,\n    $3:');
    
    // Fix missing closing brackets for arrays/objects
    const lines = content.split('\n');
    let bracketCount = 0;
    let parenCount = 0;
    let braceCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Count brackets
      for (const char of line) {
        if (char === '[') bracketCount++;
        if (char === ']') bracketCount--;
        if (char === '(') parenCount++;
        if (char === ')') parenCount--;
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
      }
      
      // If we have orphaned properties, try to fix them
      if (line.trim().match(/^\w+:\s*[^,}]+$/) && i > 0) {
        const prevLine = lines[i - 1].trim();
        if (prevLine.endsWith('}') || prevLine.endsWith(']')) {
          lines[i] = '  ' + line;
          modified = true;
        }
      }
    }
    
    content = lines.join('\n');
    
    // Fix common JSX issues - remove this complex regex for now
    // content = content.replace(/<(\w+)([^>]*?)(?<!/)>(?!.*<\/\1>)/g, (match, tag, attrs) => {
    //   // If it's a self-closing tag, make sure it ends with />
    //   if (match.includes('/>')) return match;
    //   // If it's not self-closing and doesn't have a closing tag, make it self-closing
    //   return `<${tag}${attrs} />`;
    // });
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*\n\s*(\w+):/g, '$1;\n    $2:');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithErrors(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const files = findFilesWithErrors('.');
console.log(`Checking ${files.length} files for syntax errors`);

let fixedCount = 0;
for (const file of files) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed syntax errors in ${fixedCount} files`);