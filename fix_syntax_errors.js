#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Check for duplicate closing parts and remove them
    const lines = content.split('\n');
    const lastLines = lines.slice(-10); // Check last 10 lines
    
    // Look for duplicate export statements and closing braces
    let duplicateFound = false;
    let exportCount = 0;
    let closingBraceCount = 0;
    
    for (let i = 0; i < lastLines.length; i++) {
      const line = lastLines[i].trim();
      if (line.startsWith('export default')) {
        exportCount++;
        if (exportCount > 1) {
          duplicateFound = true;
          break;
        }
      }
      if (line === '};') {
        closingBraceCount++;
        if (closingBraceCount > 1) {
          duplicateFound = true;
          break;
        }
      }
    }
    
    if (duplicateFound) {
      console.log(`Fixing duplicate closing parts in: ${filePath}`);
      
      // Find the first proper closing and remove everything after it
      let properEndIndex = -1;
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line === '};' && i + 1 < lines.length) {
          const nextLine = lines[i + 1].trim();
          if (nextLine.startsWith('export default')) {
            properEndIndex = i + 1;
            break;
          }
        }
      }
      
      if (properEndIndex > 0) {
        const fixedContent = lines.slice(0, properEndIndex + 1).join('\n');
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

// Function to find all TypeScript/JavaScript files with syntax errors
function findFilesWithSyntaxErrors(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          const lines = content.split('\n');
          const lastLines = lines.slice(-10);
          
          // Check for duplicate export statements
          let exportCount = 0;
          for (const line of lastLines) {
            if (line.trim().startsWith('export default')) {
              exportCount++;
            }
          }
          
          if (exportCount > 1) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('🔍 Searching for files with syntax errors...');
const errorFiles = findFilesWithSyntaxErrors(process.cwd());

if (errorFiles.length === 0) {
  console.log('✅ No files with syntax errors found.');
  process.exit(0);
}

console.log(`📁 Found ${errorFiles.length} files with syntax errors:`);
errorFiles.forEach(file => console.log(`  - ${file}`));

console.log('\n🔧 Fixing syntax errors...');
let fixedCount = 0;

errorFiles.forEach(file => {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
});

console.log(`\n✅ Successfully fixed ${fixedCount} files.`);