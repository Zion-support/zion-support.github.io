#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix 'use client' directive placement
function fixUseClientDirective(content) {
  // Check if file has 'use client' directive
  if (!content.includes("'use client'")) {
    return content;
  }
  
  // Split into lines
  const lines = content.split('\n');
  
  // Find the 'use client' line
  const useClientIndex = lines.findIndex(line => line.trim() === "'use client'");
  
  if (useClientIndex === -1) {
    return content;
  }
  
  // If it's already at the top, return as is
  if (useClientIndex === 0) {
    return content;
  }
  
  // Remove the 'use client' line from its current position
  const useClientLine = lines[useClientIndex];
  lines.splice(useClientIndex, 1);
  
  // Add it at the very beginning
  lines.unshift(useClientLine);
  
  return lines.join('\n');
}

// Function to fix a single file
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixUseClientDirective(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
      console.log(`Fixed 'use client' directive in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function fixDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      fixedCount += fixDirectory(fullPath);
    } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
      if (fixFile(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Fixing "use client" directive placement...');
const fixedCount = fixDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);