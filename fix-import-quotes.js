#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🔧 Fixing import statement quotes...');

// Function to recursively find all files
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      // Skip node_modules and other irrelevant directories
      if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(file)) {
        getAllFiles(fullPath, arrayOfFiles);
      }
    } else if (file.match(/\.(tsx?|jsx?)$/)) {
      arrayOfFiles.push(fullPath);
    }
  });
  
  return arrayOfFiles;
}

// Function to fix import statement quotes
function fixImportQuotes(content) {
  let fixed = content;
  
  // Fix import statements with extra quotes
  fixed = fixed.replace(/import\s+.*?from\s+['"][^'"]+['"];'/g, (match) => {
    return match.slice(0, -1); // Remove the extra single quote
  });
  
  // Fix other common quote issues
  fixed = fixed.replace(/from\s+['"][^'"]+['"];'/g, (match) => {
    return match.slice(0, -1); // Remove the extra single quote
  });
  
  return fixed;
}

// Main function to process all files
function processAllFiles() {
  const allFiles = getAllFiles('/workspace');
  let processedCount = 0;
  let errorCount = 0;
  
  console.log(`📁 Found ${allFiles.length} files to process...`);
  
  allFiles.forEach(filePath => {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      // Apply fixes
      content = fixImportQuotes(content);
      
      // Only write if content changed
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        processedCount++;
        console.log(`✅ Fixed: ${filePath}`);
      }
      
    } catch (error) {
      errorCount++;
      console.error(`❌ Error processing ${filePath}:`, error.message);
    }
  });
  
  console.log(`\n🎉 Processing complete!`);
  console.log(`✅ Files processed: ${processedCount}`);
  console.log(`❌ Errors: ${errorCount}`);
}

// Run the fix
processAllFiles();

console.log('\n✨ Import quotes fixing complete!');