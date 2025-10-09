#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
console.log('🔧 Starting comprehensive merge conflict resolution...');
// Get list of files with conflicts
const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
const conflictFiles = gitStatus
  .split('\n')
  .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
  .map(line => line.substring(3).trim())
  .filter(file => file);
console.log(`Found ${conflictFiles.length} files with conflicts`);
// Function to resolve conflicts in a file
function resolveConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }
    const content = fs.readFileSync(filePath, 'utf8');
    // Check if file has conflict markers
    if (!content.includes('<<<<<<<') && !content.includes('
    // Remove duplicate lines that might have been created
    const lines = resolvedContent.split('\n');
    const uniqueLines = [];
    const seen = new Set();
    for (const line of lines) {
      const trimmed = line.trim();
      if (!seen.has(trimmed) || trimmed === '') {
        uniqueLines.push(line);
        seen.add(trimmed);
      }
    }
    resolvedContent = uniqueLines.join('\n');
    // Write the resolved content
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    console.log(`✅ Resolved: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving ${filePath}:`, error.message);
    return false;
  }
}
// Resolve conflicts in all files
let resolvedCount = 0;
let errorCount = 0;
for (const file of conflictFiles) {
  if (resolveConflicts(file)) {
    resolvedCount++;
  } else {
    errorCount++;
  }
}
console.log(`\n📊 Resolution Summary:`);
console.log(`✅ Successfully resolved: ${resolvedCount} files`);
console.log(`❌ Failed to resolve: ${errorCount} files`);
// Add all resolved files to git
if (resolvedCount > 0) {
  try {
    execSync('git add .', { stdio: 'inherit' });
    console.log('📝 Added resolved files to git staging');
  } catch (error) {
    console.error('❌ Error adding files to git:', error.message);
  }
}
console.log('🎉 Merge conflict resolution completed!');