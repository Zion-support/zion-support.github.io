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
<<<<<<< HEAD

=======
=======
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358:scripts/fix-all-merge-conflicts.cjs
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
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