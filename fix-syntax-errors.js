#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing commas before properties in object literals
    // Pattern: property: value\n        property: value (missing comma)
    content = content.replace(/(\w+):\s*['"`][^'"`]*['"`]\s*\n\s*(\w+):/g, '$1: $&\n        $2:');
    
    // More specific pattern for missing commas
    content = content.replace(/(\w+):\s*['"`][^'"`]*['"`]\s*\n\s*(\w+):/g, (match, p1, p2) => {
      const before = match.substring(0, match.lastIndexOf('\n'));
      const after = match.substring(match.lastIndexOf('\n'));
      return before + ',' + after;
    });
    
    // Fix specific patterns we know are problematic
    content = content.replace(/(\w+):\s*['"`][^'"`]*['"`]\s*\n\s*(\w+):/g, (match, p1, p2) => {
      const lines = match.split('\n');
      if (lines.length >= 2) {
        const firstLine = lines[0];
        const secondLine = lines[1];
        if (!firstLine.includes(',') && secondLine.trim().startsWith(p2 + ':')) {
          return firstLine + ',' + '\n' + secondLine;
        }
      }
      return match;
    });
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithSyntaxErrors(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const files = findFilesWithSyntaxErrors('/workspace');
console.log(`Checking ${files.length} files for syntax errors`);

let fixedCount = 0;
for (const file of files) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);
