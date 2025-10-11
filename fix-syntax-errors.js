#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix common syntax errors in TSX files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing closing tags and brackets
    const lines = content.split('\n');
    const fixedLines = [];
    let openTags = [];
    let braceCount = 0;
    let parenCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();
      
      // Count opening and closing braces
      for (const char of line) {
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
        if (char === '(') parenCount++;
        if (char === ')') parenCount--;
      }
      
      // Track JSX tags
      const openTagMatch = trimmed.match(/<(\w+)(?:\s[^>]*)?(?!\/)>/);
      const closeTagMatch = trimmed.match(/<\/(\w+)>/);
      
      if (openTagMatch && !trimmed.includes('/>')) {
        openTags.push(openTagMatch[1]);
      }
      
      if (closeTagMatch) {
        const tagName = closeTagMatch[1];
        const lastIndex = openTags.lastIndexOf(tagName);
        if (lastIndex !== -1) {
          openTags.splice(lastIndex, 1);
        }
      }
      
      fixedLines.push(line);
    }
    
    // Add missing closing tags at the end
    while (openTags.length > 0) {
      const tag = openTags.pop();
      fixedLines.push(`</${tag}>`);
      modified = true;
    }
    
    // Add missing closing braces
    while (braceCount > 0) {
      fixedLines.push('}');
      braceCount--;
      modified = true;
    }
    
    // Add missing closing parentheses
    while (parenCount > 0) {
      fixedLines.push(')');
      parenCount--;
      modified = true;
    }
    
    if (modified) {
      const fixedContent = fixedLines.join('\n');
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find files with syntax errors
function findFilesWithSyntaxErrors(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting syntax error fixes...');

// Find all TSX/TS files
const files = findFilesWithSyntaxErrors('/workspace');
console.log(`Checking ${files.length} files for syntax errors`);

let fixedCount = 0;
for (const file of files) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed syntax errors in ${fixedCount} files`);
console.log('Syntax error fixes complete!');