#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix duplicate function declarations in a file
function fixDuplicateFunctions(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has duplicate function declarations
    const functionMatches = content.match(/const\s+(\w+Page):\s+React\.FC\s*=\s*\(\)\s*=>\s*{/g);
    if (!functionMatches || functionMatches.length <= 1) {
      return false; // No duplicates in this file
    }
    
    console.log(`Fixing duplicate functions in: ${filePath}`);
    
    // Split content into lines
    const lines = content.split('\n');
    const fixedLines = [];
    let inFirstFunction = false;
    let inSecondFunction = false;
    let braceCount = 0;
    let foundFirstFunction = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check for function declaration
      if (line.match(/const\s+(\w+Page):\s+React\.FC\s*=\s*\(\)\s*=>\s*{/)) {
        if (!foundFirstFunction) {
          foundFirstFunction = true;
          inFirstFunction = true;
          inSecondFunction = false;
          braceCount = 1;
          fixedLines.push(line);
          continue;
        } else {
          // This is the duplicate function - skip it and everything until the next export
          inFirstFunction = false;
          inSecondFunction = true;
          continue;
        }
      }
      
      if (inFirstFunction) {
        // Count braces to know when the first function ends
        const openBraces = (line.match(/{/g) || []).length;
        const closeBraces = (line.match(/}/g) || []).length;
        braceCount += openBraces - closeBraces;
        
        if (braceCount === 0 && line.trim() === '}') {
          // End of first function
          inFirstFunction = false;
          fixedLines.push(line);
          continue;
        }
        
        fixedLines.push(line);
      } else if (inSecondFunction) {
        // Skip lines until we find the export statement
        if (line.trim().startsWith('export default')) {
          inSecondFunction = false;
          fixedLines.push(line);
        }
        // Skip all other lines in the second function
      } else {
        // Normal lines outside functions
        fixedLines.push(line);
      }
    }
    
    // Write fixed content back to file
    const fixedContent = fixedLines.join('\n');
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    
    return true; // File was fixed
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for TypeScript/JavaScript files
        if (/\.(ts|tsx|js|jsx)$/.test(item)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting duplicate function fix...');

const srcDir = path.join(process.cwd(), 'src');
const files = findSourceFiles(srcDir);

let fixedCount = 0;

for (const file of files) {
  if (fixDuplicateFunctions(file)) {
    fixedCount++;
  }
}

console.log(`\nDuplicate function fix complete!`);
console.log(`Files processed: ${files.length}`);
console.log(`Files with fixed duplicates: ${fixedCount}`);