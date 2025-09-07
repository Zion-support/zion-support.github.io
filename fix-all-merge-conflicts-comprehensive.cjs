#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/\n([\s\S]*?)([\s\S]*?)    
    // Remove any remaining conflict markers
    content = content.replace(/\n?/g, '');
    content = content.replace(/    
    // Clean up any duplicate lines that might have been created
    const lines = content.split('\n');
    const cleanedLines = [];
    let lastLine = '';
    
    for (const line of lines) {
      if (line.trim() !== lastLine.trim() || line.trim() === '') {
        cleanedLines.push(line);
        lastLine = line;
      }
    
    content = cleanedLines.join('\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules, .git, and other common directories
          if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (stat.isFile() && (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.json') || item.endsWith('.cjs') || item.endsWith('.mjs'))) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
    } catch (error) {
      // Skip directories that can't be read
    }
  
  scanDirectory(dir);
  return files;
}

// Main execution
try {
  console.log('🔍 Scanning for files with merge conflicts...');
  const conflictedFiles = findFilesWithConflicts('/workspace');
  
  console.log(`📁 Found ${conflictedFiles.length} files with merge conflicts`);
  
  let fixedCount = 0;
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      fixedCount++;
    }
  
  console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);
  
  // Clean up any remaining backup files
  console.log('🧹 Cleaning up backup files...');
  try {
    execSync('find /workspace -name "*_backup*" -type d -exec rm -rf {} + 2>/dev/null || true', { stdio: 'inherit' });
    execSync('find /workspace -name "*_conflict*" -type d -exec rm -rf {} + 2>/dev/null || true', { stdio: 'inherit' });
    execSync('find /workspace -name "*.orig" -type f -delete 2>/dev/null || true', { stdio: 'inherit' });
  } catch (error) {
    console.log('⚠️  Some backup files could not be cleaned up');
  }
  
  console.log('🎉 Merge conflict resolution completed!');
  
} catch (error) {
  console.error('❌ Error during merge conflict resolution:', error.message);
  process.exit(1);
}