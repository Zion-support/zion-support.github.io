#!/usr/bin/env node

import {execSync} from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🔧 Starting automatic merge conflict resolution...');

// Function to resolve conflicts by accepting the incoming changes
function resolveConflicts() {
  try {
    // Get list of conflicted files
    const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' }).trim().split('\n').filter(Boolean);
    
    console.log(`Found ${conflictedFiles.length} conflicted files: `),
    conflictedFiles.forEach(file => console.log(`  - ${file}`));
    
    // For each conflicted file, accept the incoming changes (from the PR)
    conflictedFiles.forEach(file => {
      if (fs.existsSync(file)) {
        console.log(`Resolving conflicts in ${file}...`);
        
        // Read the file content
        let content = fs.readFileSync(file, 'utf8');
        