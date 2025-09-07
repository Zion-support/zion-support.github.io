#!/usr/bin/env node
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