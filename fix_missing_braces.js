#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix missing closing braces
function fixMissingBraces(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Check if file ends with export default but is missing closing brace
    if (content.includes('export default') && !content.trim().endsWith('};')) {
      const lines = content.split('\n');
      const lastLine = lines[lines.length - 1].trim();
      
      // If the last line is an export statement, add the missing closing brace
      if (lastLine.startsWith('export default')) {
        lines[lines.length - 1] = '};';
        lines.push('');
        lines.push(lastLine);
        
        const fixedContent = lines.join('\n');
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        console.log(`✓ Fixed: ${filePath}`);
        fixed = true;
      }
    }
    
    return fixed;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findAllTsFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('🔍 Processing all TypeScript files for missing braces...');
const allFiles = findAllTsFiles(process.cwd());

console.log(`📁 Found ${allFiles.length} TypeScript files to process`);

console.log('\n🔧 Fixing missing closing braces...');
let fixedCount = 0;

allFiles.forEach(file => {
  if (fixMissingBraces(file)) {
    fixedCount++;
  }
});

console.log(`\n✅ Successfully processed ${allFiles.length} files, fixed ${fixedCount} files.`);