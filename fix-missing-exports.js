#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix missing exports in a file
function fixMissingExports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file already has export default
    if (content.includes('export default')) {
      return false; // Already has export
    }
    
    // Check if file has a React component function
    const componentMatch = content.match(/const\s+(\w+Page):\s+React\.FC\s*=\s*\(\)\s*=>\s*{/);
    if (!componentMatch) {
      return false; // No component found
    }
    
    const componentName = componentMatch[1];
    console.log(`Adding missing export to: ${filePath} (${componentName})`);
    
    // Add export default at the end of the file
    const lines = content.split('\n');
    const lastLine = lines[lines.length - 1];
    
    if (lastLine.trim() === '') {
      // Remove empty last line
      lines.pop();
    }
    
    // Add export statement
    lines.push('');
    lines.push(`export default ${componentName};`);
    
    const fixedContent = lines.join('\n');
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
console.log('Starting missing export fix...');

const srcDir = path.join(process.cwd(), 'src');
const files = findSourceFiles(srcDir);

let fixedCount = 0;

for (const file of files) {
  if (fixMissingExports(file)) {
    fixedCount++;
  }
}

console.log(`\nMissing export fix complete!`);
console.log(`Files processed: ${files.length}`);
console.log(`Files with added exports: ${fixedCount}`);