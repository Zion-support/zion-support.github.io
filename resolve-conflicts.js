#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function resolveMergeConflicts(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (!content.includes('<<<<<<< HEAD')) {
      return false; // No conflicts
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Resolve conflicts by taking HEAD version (before =======)
    let resolvedContent = content
      .replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n/g, '$1')
      .replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1');
    
    // Clean up any remaining conflict markers
    resolvedContent = resolvedContent
      .replace(/<<<<<<< HEAD\n?/g, '')
      .replace(/=======\n?/g, '')
      .replace(/>>>>>>> [^\n]+\n?/g, '');
    
    fs.writeFileSync(filePath, resolvedContent);
    return true;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithConflicts() {
  try {
    const result = execSync('git grep -l "<<<<<<< HEAD"', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    console.log('No merge conflicts found or git not available');
    return [];
  }
}

function main() {
  console.log('🔍 Finding files with merge conflicts...');
  const filesWithConflicts = findFilesWithConflicts();
  
  if (filesWithConflicts.length === 0) {
    console.log('✅ No merge conflicts found!');
    return;
  }
  
  console.log(`Found ${filesWithConflicts.length} files with conflicts`);
  
  let resolvedCount = 0;
  for (const file of filesWithConflicts) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  }
  
  console.log(`✅ Resolved conflicts in ${resolvedCount} files`);
}

main();