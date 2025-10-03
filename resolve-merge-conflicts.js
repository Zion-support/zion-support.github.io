#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Function to resolve merge conflicts by accepting incoming changes
function resolveMergeConflicts() {
  try {
    console.log('🔧 Resolving merge conflicts by accepting incoming changes...');
    
    // Use git checkout --theirs to accept all incoming changes
    execSync('git checkout --theirs .', { stdio: 'inherit' });
    
    // Add all resolved files
    execSync('git add .', { stdio: 'inherit' });
    
    console.log('✅ Merge conflicts resolved successfully!');
    return true;
  } catch (error) {
    console.error('❌ Error resolving merge conflicts:', error.message);
    return false;
  }
}

// Run the conflict resolution
const success = resolveMergeConflicts();

if (success) {
  console.log('🎉 Ready to commit the merge!');
} else {
  console.log('💥 Failed to resolve conflicts automatically');
  process.exit(1);
}