#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Resolving merge conflicts by accepting PR branch deletions...');

// Function to resolve conflicts by accepting deletions
function resolveConflicts() {
  try {
    // Get list of conflicted files
    const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
      .trim()
      .split('\n')
      .filter(file => file.length > 0);

    console.log(`Found ${conflictedFiles.length} conflicted files`);

    for (const file of conflictedFiles) {
      try {
        // Check if file exists
        if (fs.existsSync(file)) {
          // For modify/delete conflicts, accept the deletion (remove the file)
          if (file.includes('deleted in origin/cursor/fix-lint-push-and-merge-to-main-84e5')) {
            console.log(`🗑️  Removing file: ${file}`);
            fs.unlinkSync(file);
          } else {
            // For content conflicts, try to resolve by accepting the PR version
            console.log(`🔀 Resolving content conflict: ${file}`);
            
            // Read the file and look for conflict markers
            const content = fs.readFileSync(file, 'utf8');
            
            if (content.includes('<<<<<<< HEAD')) {
              // Simple resolution: keep the PR version (after =======)
              const lines = content.split('\n');
              let resolved = [];
              let inConflict = false;
              let keepPR = false;
              
              for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                
                if (line.includes('<<<<<<< HEAD')) {
                  inConflict = true;
                  keepPR = false;
                } else if (line.includes('=======')) {
                  keepPR = true;
                } else if (line.includes('>>>>>>>')) {
                  inConflict = false;
                  keepPR = false;
                } else if (inConflict && keepPR) {
                  resolved.push(line);
                } else if (!inConflict) {
                  resolved.push(line);
                }
              }
              
              fs.writeFileSync(file, resolved.join('\n'));
            }
          }
        }
      } catch (error) {
        console.log(`⚠️  Error processing ${file}: ${error.message}`);
      }
    }

    // Add all resolved files
    execSync('git add -A', { stdio: 'inherit' });
    
    console.log('✅ Conflicts resolved and files staged');
    
  } catch (error) {
    console.error('❌ Error resolving conflicts:', error.message);
    process.exit(1);
  }
}

resolveConflicts();