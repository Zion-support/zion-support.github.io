#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to resolve merge conflicts by choosing HEAD version
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
<<<<<<< HEAD
    // Pattern to match merge conflict markers
    const conflictPattern = /<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g;
    
    // Replace conflicts with HEAD version (first capture group)
    const resolvedContent = content.replace(conflictPattern, (match, headContent) => {
      console.log(`Resolving conflict in ${filePath}`);
      return headContent.trim();
    });
    
    // Check if there are any remaining conflict markers
    if (resolvedContent.includes('<<<<<<<') || resolvedContent.includes('=======') || resolvedContent.includes('>>>>>>>')) {
      console.log(`Warning: Still has conflict markers in ${filePath}`);
      return false;
    }
    
    // Write the resolved content back
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    console.log(`Successfully resolved conflicts in ${filePath}`);
=======
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Clean up any double semicolons or other artifacts
    content = content.replace(/;;+/g, ';');
    content = content.replace(/;\s*;/g, ';');
    
    // Clean up any malformed JSX/TSX syntax
    content = content.replace(/<([^>]+)>\s*;/g, '<$1>');
    content = content.replace(/;\s*<\/([^>]+)>/g, '</$1>');
    content = content.replace(/;\s*\/>/g, '/>');
    
    // Remove any standalone semicolons that shouldn't be there
    content = content.replace(/\n\s*;\s*\n/g, '\n');
    content = content.replace(/^\s*;\s*$/gm, '');
    
    // Fix any malformed JSX attributes
    content = content.replace(/(\w+)=\{([^}]+)\}\s*;/g, '$1={$2}');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed merge conflicts in: ${filePath}`);
>>>>>>> origin/main
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

<<<<<<< HEAD
// Function to find all files with merge conflicts
function findConflictedFiles(dir) {
  const conflictedFiles = [];
=======
function findFilesWithConflicts(dir) {
  const files = [];
>>>>>>> origin/main
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
<<<<<<< HEAD
      if (stat.isDirectory()) {
        searchDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx')) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
            conflictedFiles.push(fullPath);
=======
      if (stat.isDirectory() && !item.includes('node_modules') && !item.startsWith('.')) {
        traverse(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD')) {
            files.push(fullPath);
>>>>>>> origin/main
          }
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
<<<<<<< HEAD
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
  process.exit(0);
=======
const workspaceDir = process.cwd();
console.log('Finding files with merge conflicts...');

const conflictedFiles = findFilesWithConflicts(workspaceDir);
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let fixedCount = 0;
let errorCount = 0;

for (const file of conflictedFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  } else {
    errorCount++;
  }
}

console.log(`\nSummary:`);
console.log(`- Files fixed: ${fixedCount}`);
console.log(`- Files with errors: ${errorCount}`);
console.log(`- Total processed: ${conflictedFiles.length}`);

if (errorCount === 0) {
  console.log('\nAll merge conflicts have been resolved!');
} else {
  console.log('\nSome files had errors and may need manual review.');
>>>>>>> origin/main
}