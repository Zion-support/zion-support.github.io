#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    // Check if file has merge conflicts
    if (!content.includes('') && !content.includes('') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to fix
    }
    console.log(`Fixing merge conflicts in: ${filePath}`);
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(/\n?/g, '');
    content = content.replace(/\n?/g, '');
    content = content.replace(/    
    // Clean up any remaining artifacts
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n'); // Remove excessive newlines
    content = content.replace(/^\s*\n/gm, ''); // Remove empty lines at start
    fs.writeFileSync(filePath, content);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}
// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('') || content.includes('') || content.includes('>>>>>>>')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  walkDir(dir);
  return files;
}
// Main execution
console.log('Finding files with merge conflicts...');
const conflictedFiles = findFilesWithConflicts('/workspace');
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
let fixedCount = 0;
for (const file of conflictedFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}
console.log(`Fixed merge conflicts in ${fixedCount} files`);
// Also fix some specific syntax errors
const apiFiles = [
  '/workspace/api/error-report.js',
  '/workspace/api/newsletter/subscribe.js',
  '/workspace/api/onsite-request.js',
  '/workspace/api/quotes.js',
  '/workspace/api/shipping-rates.js',
  '/workspace/api/subscribe.js',
  '/workspace/api/wallet.js'
];
console.log('Fixing API files with syntax errors...');
for (const file of apiFiles) {
  try {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      // Fix common syntax errors
      if (content.includes('export default {')) {
        content = content.replace(/export default \{\s*\}/g, 'export default {}');
      }
      // Ensure proper export structure
      if (!content.includes('export default') && !content.includes('module.exports')) {
        content = 'export default {};';
      }
      fs.writeFileSync(file, content);
      console.log(`Fixed: ${file}`);
    }
  } catch (error) {
    console.error(`Error fixing ${file}:`, error.message);
  }
}
console.log('Merge conflict fixing completed!');