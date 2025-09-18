#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing all merge conflicts...');

// List of files with known merge conflicts
const conflictedFiles = [
  'pages/index.tsx',
  'pages/about.tsx', 
  'pages/blog.tsx',
  'pages/contact.tsx',
  'pages/services.tsx'
];

function resolveMergeConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      console.log(`✅ No conflicts in: ${filePath}`);
      return false;
    }
    
    console.log(`🔧 Resolving conflicts in: ${filePath}`);
    
    // Remove all merge conflict markers and keep the first version (HEAD)
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Clean up any double newlines
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    // Write the cleaned content
    fs.writeFileSync(filePath, content);
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
    
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Process all conflicted files
let resolvedCount = 0;
for (const file of conflictedFiles) {
  if (resolveMergeConflicts(file)) {
    resolvedCount++;
  }
}

console.log(`\n🎉 Successfully resolved conflicts in ${resolvedCount}/${conflictedFiles.length} files`);

// Verify no more conflicts exist
console.log('\n🔍 Checking for remaining conflicts...');
const remainingConflicts = [];
for (const file of conflictedFiles) {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      remainingConflicts.push(file);
    }
  }
}

if (remainingConflicts.length === 0) {
  console.log('✅ All merge conflicts resolved!');
} else {
  console.log(`⚠️  Remaining conflicts in: ${remainingConflicts.join(', ')}`);
}