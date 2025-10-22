#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix all remaining syntax errors
function fixAllErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Remove any lines that contain only "  );" or similar patterns
    const lines = content.split('\n');
    const cleanedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Skip lines that are just "  );" or similar
      if (trimmedLine === '  );' || trimmedLine === ');' || 
          (trimmedLine === '' && i > 0 && lines[i-1].trim() === 'export default')) {
        continue;
      }
      
      cleanedLines.push(line);
    }
    
    const cleanedContent = cleanedLines.join('\n');
    
    if (cleanedContent !== content) {
      fs.writeFileSync(filePath, cleanedContent, 'utf8');
      console.log(`✓ Fixed: ${filePath}`);
      fixed = true;
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
console.log('🔍 Processing all TypeScript files...');
const allFiles = findAllTsFiles(process.cwd());

console.log(`📁 Found ${allFiles.length} TypeScript files to process`);

console.log('\n🔧 Fixing all syntax errors...');
let fixedCount = 0;

allFiles.forEach(file => {
  if (fixAllErrors(file)) {
    fixedCount++;
  }
});

console.log(`\n✅ Successfully processed ${allFiles.length} files, fixed ${fixedCount} files.`);