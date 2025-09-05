#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting merge conflict resolution...');

// Get list of conflicted files
let conflictedFiles = [];
try {
  const statusOutput = execSync('git status --porcelain', { encoding: 'utf8' });
  conflictedFiles = statusOutput
    .split('\n')
    .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
    .map(line => line.substring(3).trim())
    .filter(file => file.length > 0);
} catch (error) {
  console.error('Error getting git status:', error.message);
  process.exit(1);
}

console.log(`Found ${conflictedFiles.length} conflicted files`);

// Function to resolve conflicts by accepting our version (HEAD)
function resolveConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File does not exist: ${filePath}`);
      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has conflict markers
    if (!content.includes('') || !content.includes('>>>>>>>')) {
      console.log(`✅ No conflicts in: ${filePath}`);
      return true;
    }

    console.log(`🔧 Resolving conflicts in: ${filePath}`);

    // For most files, we'll accept our version (HEAD)
    // This is a simple strategy - keep everything between  and     let resolvedContent = content;
    
    // Remove conflict markers and keep HEAD version
    resolvedContent = resolvedContent.replace(
      /\n([\s\S]*?)\n\n([\s\S]*?)\n      '$1'
    );

    // Clean up any remaining conflict markers
    resolvedContent = resolvedContent.replace(/\n?/g, '');
    resolvedContent = resolvedContent.replace(/\n?/g, '');
    resolvedContent = resolvedContent.replace(/
    // Write resolved content
    fs.writeFileSync(filePath, resolvedContent);
    console.log(`✅ Resolved: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving ${filePath}:`, error.message);
    return false;
  }
}

// Resolve conflicts for each file
let resolvedCount = 0;
let failedCount = 0;

for (const file of conflictedFiles) {
  if (resolveConflicts(file)) {
    resolvedCount++;
  } else {
    failedCount++;
  }
}

console.log(`\n📊 Resolution Summary:`);
console.log(`✅ Successfully resolved: ${resolvedCount} files`);
console.log(`❌ Failed to resolve: ${failedCount} files`);

if (resolvedCount > 0) {
  console.log('\n🔄 Adding resolved files to git...');
  try {
    execSync('git add .', { stdio: 'inherit' });
    console.log('✅ Files added to git');
  } catch (error) {
    console.error('❌ Error adding files to git:', error.message);
  }
}

console.log('\n🎉 Merge conflict resolution complete!');