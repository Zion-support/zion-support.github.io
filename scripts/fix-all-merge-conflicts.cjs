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
      remainingConflicts.push(file);
    }
  }
}

if (remainingConflicts.length === 0) {
  console.log('✅ All merge conflicts resolved!');
} else {
  console.log(`⚠️  Remaining conflicts in: ${remainingConflicts.join(', ')}`);
}