#!/usr/bin/env node
<<<<<<< HEAD

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Resolving PR merge conflicts automatically...');

// Get list of conflicted files
const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

console.log(`Found ${conflictedFiles.length} conflicted files`);

// Resolve conflicts by accepting our changes (HEAD)
for (const file of conflictedFiles) {
  try {
    console.log(`Resolving conflicts in: ${file}`);
    
    // Check if file exists
    if (!fs.existsSync(file)) {
      console.log(`  ⚠️  File ${file} doesn't exist, skipping...`);
      continue;
    }
    
    // Read the file content
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove conflict markers and keep our changes (HEAD)
    content = content.replace(/    content = content.replace(/    content = content.replace(/    
    // Write the resolved content
    fs.writeFileSync(file, content);
    console.log(`  ✅ Resolved: ${file}`);
    
  } catch (error) {
    console.log(`  ❌ Error resolving ${file}: ${error.message}`);
  }
}

// Add all resolved files
try {
  execSync('git add .', { stdio: 'inherit' });
  console.log('✅ All conflicts resolved and staged');
} catch (error) {
  console.log('❌ Error staging files:', error.message);
}

console.log('🎉 PR conflict resolution complete!');
=======
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
console.log('🔧 Starting PR Conflict Resolution Script');
// Function to run git commands
function runGitCommand(command) {
  try {
    const result = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    return result.trim();
  } catch (error) {
    console.error(`Error running command: ${command}`);
    console.error(error.message);
    return null;
  }
}
// Function to resolve conflicts by accepting the incoming changes for deleted files
function resolveConflicts() {
  console.log('📋 Resolving merge conflicts...');
  try {
    // Get list of conflicted files
    const conflictedFiles = runGitCommand('git diff --name-only --diff-filter=U');
    if (!conflictedFiles) {
      console.log('✅ No conflicts found');
      return true;
    }
    const files = conflictedFiles.split('\n').filter(f => f.trim());
    console.log(`Found ${files.length} conflicted files`);
    for (const file of files) {
      console.log(`Processing: ${file}`);
      // Check if file exists
      if (fs.existsSync(file)) {
        // Read the file content
        let content = fs.readFileSync(file, 'utf8');
        // Check if it's a modify/delete conflict
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
