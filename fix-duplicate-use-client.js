#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix duplicate 'use client' directives
function fixDuplicateUseClient(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has 'use client' directive
    if (!content.includes("'use client'")) {
      return false;
    }
    
    // Split into lines
    const lines = content.split('\n');
    
    // Find all 'use client' lines
    const useClientIndices = [];
    lines.forEach((line, index) => {
      if (line.trim() === "'use client'") {
        useClientIndices.push(index);
      }
    });
    
    if (useClientIndices.length <= 1) {
      return false; // No duplicates
    }
    
    // Remove all 'use client' lines
    for (let i = useClientIndices.length - 1; i >= 0; i--) {
      lines.splice(useClientIndices[i], 1);
    }
    
    // Add one 'use client' at the very beginning
    lines.unshift("'use client'");
    
    // Write the fixed content back
    const fixedContent = lines.join('\n');
    fs.writeFileSync(filePath, fixedContent);
    
    console.log(`Fixed duplicate 'use client' in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/TSX files in app directory
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
console.log('Fixing duplicate "use client" directives...');

const tsxFiles = findTsxFiles('/workspace/app');
let fixedCount = 0;

for (const filePath of tsxFiles) {
  if (fixDuplicateUseClient(filePath)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);