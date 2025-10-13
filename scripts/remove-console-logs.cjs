#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to remove console statements from a file
function removeConsoleLogs(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove console.log, console.warn, console.error statements
    content = content.replace(/console\.(log|warn|error|info|debug)\([^)]*\);?\s*/g, '');
    
    // Remove console statements that span multiple lines
    content = content.replace(/console\.(log|warn|error|info|debug)\(\s*[\s\S]*?\);\s*/g, '');
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Cleaned console statements from: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript and JavaScript files in the app directory
const files = glob.sync('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

let cleanedCount = 0;

console.log('🧹 Removing console statements from production build...\n');

files.forEach(file => {
  const fullPath = path.resolve(file);
  if (removeConsoleLogs(fullPath)) {
    cleanedCount++;
  }
});

console.log(`\n✨ Cleaned ${cleanedCount} files`);
console.log('🎉 Console statement removal complete!');
