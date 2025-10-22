#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix specific syntax errors in a file
function fixSpecificErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Remove lines that contain only "  );" or "};" followed by empty lines and duplicate exports
    const lines = content.split('\n');
    const cleanedLines = [];
    let foundProperEnd = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // If we find a proper export statement, mark that we found the end
      if (trimmedLine.startsWith('export default') && !foundProperEnd) {
        foundProperEnd = true;
        cleanedLines.push(line);
      }
      // If we already found the proper end, skip any additional closing parts
      else if (foundProperEnd && (trimmedLine === '  );' || trimmedLine === '};' || trimmedLine.startsWith('export default'))) {
        // Skip these lines
        continue;
      }
      // Otherwise, keep the line
      else {
        cleanedLines.push(line);
      }
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

// Function to find all TypeScript/JavaScript files with specific syntax errors
function findFilesWithSpecificErrors(dir) {
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
          
          // Check for the specific pattern of errors
          if (content.includes('  );') && content.includes('export default') && 
              content.split('export default').length > 2) {
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
console.log('🔍 Searching for files with specific syntax errors...');
const errorFiles = findFilesWithSpecificErrors(process.cwd());

if (errorFiles.length === 0) {
  console.log('✅ No files with specific syntax errors found.');
  process.exit(0);
}

console.log(`📁 Found ${errorFiles.length} files with specific syntax errors:`);
errorFiles.forEach(file => console.log(`  - ${file}`));

console.log('\n🔧 Fixing specific syntax errors...');
let fixedCount = 0;

errorFiles.forEach(file => {
  if (fixSpecificErrors(file)) {
    fixedCount++;
  }
});

console.log(`\n✅ Successfully fixed ${fixedCount} files.`);