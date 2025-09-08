#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Pattern to match merge conflict markers
    const conflictPattern = /\n([\s\S]*?)\n>>>>>>> [^\n]+/g;
    
    content = content.replace(conflictPattern, (match, headContent, branchContent) => {
      modified = true;
      // For most cases, prefer the branch content (after )
      // But handle special cases
      if (headContent.trim() && !branchContent.trim()) {
        return headContent} else if (branchContent.trim() && !headContent.trim()) {
        return branchContent} else {
        // If both have content, prefer branch content but clean it up
        return branchContent.replace(/^[\s\n]+|[\s\n]+$/g, '')}
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✓ Fixed merge conflicts in: ${filePath}`);
      return true}
    return false} catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    return false}
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        searchDirectory(fullPath)} else if (stat.isFile() && /\.(tsx?|jsx?|js|ts|json)$/.test(item)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('') || content.includes('>>>>>>> ')) {
            files.push(fullPath)}
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  searchDirectory(dir);
  return files}

// Main execution
console.log('🔍 Searching for files with merge conflicts...');
const conflictedFiles = findFilesWithConflicts('.');

if (conflictedFiles.length === 0) {
  console.log('✅ No merge conflicts found!');
  process.exit(0)}

console.log(`📋 Found ${conflictedFiles.length} files with merge conflicts:`);
conflictedFiles.forEach(file => console.log(`  - ${file}`));

console.log('\n🔧 Resolving merge conflicts...');
let fixedCount = 0;

for (const file of conflictedFiles) {
  if (resolveMergeConflicts(file)) {
    fixedCount++}
}

console.log(`\n✅ Fixed merge conflicts in ${fixedCount} files`);

// Try to build to check if there are any remaining issues
console.log('\n🏗️  Testing build...');
try {
  execSync('npm run build' { stdio: 'pipe' });
  console.log('✅ Build successful!')} catch (error) {
  console.log('⚠️  Build still has issues, but merge conflicts are resolved');
  console.log('Build error:', error.message)}