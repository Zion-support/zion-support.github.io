#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix missing closing braces
function fixMissingBraces(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Check if file has the pattern of missing closing brace
    if (content.includes('export default') && content.includes(');') && !content.includes('};')) {
      const lines = content.split('\n');
      const cleanedLines = [];
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmedLine = line.trim();
        
        // If we find a line that ends with ); and the next line is export default, add missing }
        if (trimmedLine === ');' && i + 1 < lines.length && lines[i + 1].trim().startsWith('export default')) {
          cleanedLines.push(line);
          cleanedLines.push('');
          cleanedLines.push('};');
          i++; // Skip the next line as we're adding it manually
          fixed = true;
        } else {
          cleanedLines.push(line);
        }
      }
      
      if (fixed) {
        const cleanedContent = cleanedLines.join('\n');
        fs.writeFileSync(filePath, cleanedContent, 'utf8');
        console.log(`✓ Fixed: ${filePath}`);
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