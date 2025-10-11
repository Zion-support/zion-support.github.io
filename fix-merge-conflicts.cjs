#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to resolve merge conflicts by choosing HEAD version
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Pattern to match merge conflict markers
    const conflictPattern = /\n([\s\S]*?)\n\n([\s\S]*?)\n    
    // Replace conflicts with HEAD version (first capture group)
    const resolvedContent = content.replace(conflictPattern, (match, headContent) => {
      console.log(`Resolving conflict in ${filePath}`);
      return headContent.trim();
    });
    
    // Check if there are any remaining conflict markers
    if (resolvedContent.includes('<<<<<<<') || resolvedContent.includes('') || resolvedContent.includes('>>>>>>>')) {
      console.log(`Warning: Still has conflict markers in ${filePath}`);
      return false;
    }
    
    // Write the resolved content back
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    console.log(`Successfully resolved conflicts in ${filePath}`);    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findConflictedFiles(dir) {
  const conflictedFiles = [];  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        searchDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx')) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<<') || content.includes('') || content.includes('>>>>>>>')) {
            conflictedFiles.push(fullPath);          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  searchDirectory(dir);
  return conflictedFiles;
}

// Main execution
console.log('Starting merge conflict resolution...');

const conflictedFiles = findConflictedFiles('./app');
console.log(`Found ${conflictedFiles.length} files with merge conflicts:`);
conflictedFiles.forEach(file => console.log(`  - ${file}`));

let resolvedCount = 0;
let failedCount = 0;

for (const file of conflictedFiles) {
  if (resolveMergeConflicts(file)) {
    resolvedCount++;
  } else {
    failedCount++;
  }
}

console.log(`\nResolution complete:`);
console.log(`  - Successfully resolved: ${resolvedCount} files`);
console.log(`  - Failed to resolve: ${failedCount} files`);

if (failedCount > 0) {
  console.log('\nFiles that still need manual resolution:');
  const stillConflicted = findConflictedFiles('./app');
  stillConflicted.forEach(file => console.log(`  - ${file}`));
  process.exit(1);
} else {
  console.log('\nAll merge conflicts resolved successfully!');
  process.exit(0);}