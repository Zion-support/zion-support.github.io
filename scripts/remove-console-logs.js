#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🧹 Removing console.log statements from codebase...');

// Function to remove console.log statements from a file
function removeConsoleLogs(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove console.log statements (various patterns)
    content = content.replace(/console\.(log|error|warn|info|debug)\s*\([^)]*\)\s*;?\s*/g, '');
    content = content.replace(/console\.(log|error|warn|info|debug)\s*\([^)]*\)\s*;?\s*\n/g, '');
    
    // Remove empty lines that might be left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Cleaned: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let processedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other build directories
        if (!['node_modules', 'dist', 'build', '.git', '.next'].includes(item)) {
          processedCount += processDirectory(fullPath, extensions);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          if (removeConsoleLogs(fullPath)) {
            processedCount++;
          }
        }
      }
    }
  } catch (error) {
    console.error(`❌ Error processing directory ${dirPath}:`, error.message);
  }
  
  return processedCount;
}

// Main execution
try {
  const startTime = Date.now();
  
  // Process common directories
  const directories = [
    './src',
    './app',
    './components',
    './scripts'
  ];
  
  let totalProcessed = 0;
  
  for (const dir of directories) {
    if (fs.existsSync(dir)) {
      console.log(`📁 Processing directory: ${dir}`);
      totalProcessed += processDirectory(dir);
    }
  }
  
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);
  
  console.log(`\n🎉 Console.log cleanup completed!`);
  console.log(`📊 Processed ${totalProcessed} files in ${duration}s`);
  console.log(`🚀 Build performance should be significantly improved`);
  
} catch (error) {
  console.error('❌ Script failed:', error.message);
  process.exit(1);
}