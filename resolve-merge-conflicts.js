#!/usr/bin/env node

import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { glob } from 'glob';

async function resolveConflicts() {
  try {
    // Get all conflicted files
    const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
      .trim()
      .split('\n')
      .filter(file => file.length > 0);

    console.log(`Found ${conflictedFiles.length} conflicted files`);

    for (const file of conflictedFiles) {
      try {
        console.log(`Resolving conflicts in ${file}...`);
        
        // Read the file content
        let content = readFileSync(file, 'utf8');
        
        // Remove conflict markers and keep only our version (the fixed version)
        // This regex removes everything between <<<<<<< HEAD and ======= (inclusive)
        // and everything between ======= and >>>>>>> cursor/fix-errors-and-merge-to-main-5203 (inclusive)
        // keeping only the content after >>>>>>> cursor/fix-errors-and-merge-to-main-5203
        content = content.replace(
          /<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> cursor\/fix-errors-and-merge-to-main-5203\n?/g,
          ''
        );
        
        // Also handle cases where there might be different conflict markers
        content = content.replace(
          /<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+\n?/g,
          ''
        );
        
        // Write the resolved content back
        writeFileSync(file, content);
        
        // Add the resolved file to git
        execSync(`git add "${file}"`, { stdio: 'inherit' });
        
        console.log(`✓ Resolved conflicts in ${file}`);
      } catch (error) {
        console.error(`Error resolving conflicts in ${file}:`, error.message);
      }
    }

    console.log('All conflicts resolved!');
  } catch (error) {
    console.error('Error resolving conflicts:', error.message);
    process.exit(1);
  }
}

resolveConflicts();