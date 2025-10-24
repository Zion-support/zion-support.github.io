#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix 'use client' directive in a file
function fixUseClientInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has 'use client' directive
    if (!content.includes("'use client'")) {
      return false;
    }
    
    // Split into lines
    const lines = content.split('\n');
    
    // Find the 'use client' line
    const useClientIndex = lines.findIndex(line => line.trim() === "'use client'");
    
    if (useClientIndex === -1) {
      return false;
    }
    
    // If it's already at the top, return false
    if (useClientIndex === 0) {
      return false;
    }
    
    // Remove the 'use client' line from its current position
    const useClientLine = lines[useClientIndex];
    lines.splice(useClientIndex, 1);
    
    // Add it at the very beginning
    lines.unshift(useClientLine);
    
    // Write the fixed content back
    const fixedContent = lines.join('\n');
    fs.writeFileSync(filePath, fixedContent);
    
    console.log(`Fixed 'use client' directive in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/TSX files
function findTsxFiles(dirPath) {
  const files = [];
  
  function traverse(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dirPath);
  return files;
}

// Main execution
console.log('Fixing "use client" directive placement in all files...');

const tsxFiles = findTsxFiles('/workspace');
let fixedCount = 0;

for (const filePath of tsxFiles) {
  if (fixUseClientInFile(filePath)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);