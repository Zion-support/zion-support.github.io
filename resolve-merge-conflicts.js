#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to resolve merge conflicts by accepting our changes
function resolveMergeConflicts() {
  console.log('Resolving merge conflicts by accepting our changes...');
  
  try {
    // Get list of conflicted files
    const statusOutput = execSync('git status --porcelain', { encoding: 'utf8' });
    const conflictedFiles = statusOutput
      .split('\n')
      .filter(line => line.startsWith('UU') || line.startsWith('AA') || line.startsWith('DD'))
      .map(line => line.substring(3).trim())
      .filter(file => file.length > 0);
    
    console.log(`Found ${conflictedFiles.length} conflicted files`);
    
    // Resolve each conflict by accepting our changes
    for (const file of conflictedFiles) {
      try {
        console.log(`Resolving conflict in: ${file}`);
        
        // Use git checkout to accept our version (the fixed version)
        execSync(`git checkout --ours "${file}"`, { stdio: 'inherit' });
        
        // Add the resolved file
        execSync(`git add "${file}"`, { stdio: 'inherit' });
        
        console.log(`✓ Resolved: ${file}`);
      } catch (error) {
        console.error(`Error resolving ${file}:`, error.message);
      }
    }
    
    console.log('All merge conflicts resolved!');
    
    // Check if there are any remaining conflicts
    const remainingConflicts = execSync('git status --porcelain | grep "^UU\\|^AA\\|^DD"', { encoding: 'utf8' });
    if (remainingConflicts.trim()) {
      console.log('Warning: Some conflicts may still remain');
      console.log(remainingConflicts);
    } else {
      console.log('✓ No remaining conflicts');
    }
    
  } catch (error) {
    console.error('Error resolving merge conflicts:', error.message);
  }
}

// Main execution
resolveMergeConflicts();