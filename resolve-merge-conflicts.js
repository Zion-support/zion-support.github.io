<<<<<<< HEAD
<<<<<<< HEAD
// Function to resolve conflicts by accepting the incoming changes
function resolveConflicts() {
=======
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting merge conflict resolution...');

// Get list of files with conflicts
const conflictFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

console.log(`Found ${conflictFiles.length} files with merge conflicts`);

// Function to resolve conflicts by accepting main branch version
function resolveConflicts(filePath) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File does not exist: ${filePath}`);
      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') || !content.includes('=======') || !content.includes('>>>>>>> main')) {
      console.log(`✅ No conflicts in: ${filePath}`);
      return true;
    }

    console.log(`🔧 Resolving conflicts in: ${filePath}`);
    
    // Split content by conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = null;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.startsWith('=======')) {
        conflictType = 'main';
        continue;
      } else if (line.startsWith('>>>>>>> main')) {
        inConflict = false;
        conflictType = null;
        continue;
      }
<<<<<<< HEAD
    });
    // Handle deleted files (modify/delete conflicts)
    const deletedFiles = execSync('git ls-files --deleted', { encoding: 'utf8' }).trim().split('\n').filter(Boolean);
=======
#!/usr/bin/env node;
import fs from 'fs';'
import path from 'path';'
import { execSync } from 'child_process';
'
console.log('🔧 Starting merge conflict resolution...');

// Function to resolve merge conflicts in a file;
function resolveMergeConflicts(filePath) {}
  try {'
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts'
    if (!content.includes('
    content = content.replace(/
    
    // Clean up any remaining conflict markers;
    content = content.replace(/
    
    // Write the cleaned content back'
    fs.writeFileSync(filePath, content, 'utf8');
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return true;
  } catch (error) {}
    console.error(`❌ Error resolving ${filePath}:`, error.message);
    return false;
  }
}
<<<<<<< HEAD
// Function to merge a PR
function mergePR(prBranch) {
  try {
    // Try to merge
    execSync(`git merge origin/${prBranch} --no-ff`, { stdio: 'pipe' });
    console && console.log(`✅ Successfully merged ${prBranch}`);
    return true;
  } catch (error) {
    // Resolve conflicts
    if (resolveConflicts()) {
      // Commit the merge
      try {
        execSync('git commit -m "Resolve merge conflicts and merge PR"', { stdio: 'inherit' });
        console && console.log(`✅ Successfully resolved conflicts and merged ${prBranch}`);
        return true;
      } catch (commitError) {
        console && console.error(`❌ Failed to commit merge for ${prBranch}:`, commitError && commitError.message);
        return false;
      }
    } else {
      console && console.error(`❌ Failed to resolve conflicts for ${prBranch}`);
#!/usr / bin / env node;
import {exec_sync} from 'child_process';
import fs from 'fs';
import path from 'path';
;
console.log ('🔧 Starting automatic merge conflict resolution...');
;
// Function to resolve conflicts by accepting the incoming changes;
/**
 * resolve_conflicts - Function description
 */
function resolve_conflicts() {
  try {
    // Get list of conflicted files;
    const conflicted_files = exec_sync ('git diff --name - only --diff - filter = U', { encoding: 'utf8' }).trim ().split ('\n').filter (Boolean);
;
    console.log (`Found ${conflicted_files.length} conflicted files: `),
    conflicted_files.for_each (file => console.log (`  - ${file}`));
;
    // For each conflicted file, accept the incoming changes (from the PR);
    conflicted_files.for_each (file => {
      if () {) {
  $2
}
        console.log (`Resolving conflicts in ${file}...`);
;
        // Read the file content;
        let content = fs.readFileSync (file, 'utf8');
;
        try {
          exec_sync ('git merge --abort', { stdio: 'pipe' });
        } catch (abort_error) {
          // Ignore abort errors;
        }
      }
    } catch (error) {
    execSync('git status --short', { stdio: 'inherit' });
  } catch (error) {
    console && console.error('Error getting git status:', error && error.message);
  }
}
=======

// Function to find all files with merge conflicts;
function findFilesWithConflicts(dir) {}
  const files = [];
  
  function walkDir(currentPath) {}
    try {}
      const items = fs.readdirSync(currentPath);
      
      for (const item of items) {}
        const fullPath = path.join(currentPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {}
          // Skip node_modules and other common directories'
          if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {}
            walkDir(fullPath);
          }
        } else if (stat.isFile()) {}
          // Check for merge conflicts in the file;
          try {'
            const content = fs.readFileSync(fullPath, 'utf8');'
            if (content.includes('')) {}
              files.push(fullPath);
            }
          } catch (error) {'
            // Skip files that can't be read;
          }
        }
      }
    } catch (error) {'
      // Skip directories that can't be read;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution;
const projectRoot = process.cwd();`
console.log(`🔍 Scanning for merge conflicts in: ${projectRoot}`);

const conflictedFiles = findFilesWithConflicts(projectRoot);`
console.log(`📊 Found ${conflictedFiles.length} files with merge conflicts`);

let resolvedCount = 0;
let errorCount = 0;

for (const file of conflictedFiles) {}
  if (resolveMergeConflicts(file)) {}
    resolvedCount++;
  } else {}
    errorCount++;
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
main ().catch (console.error);
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
`
console.log(`✅ Resolved ${resolvedCount} files`);
if (errorCount > 0) {}`
  console.log(`❌ Failed to resolve ${errorCount} files`);
}

// Verify no more conflicts;
const remainingConflicts = findFilesWithConflicts(projectRoot);
if (remainingConflicts.length === 0) {'
  console.log('🎉 All merge conflicts resolved successfully!');
} else {}`
  console.log(`⚠️ ${remainingConflicts.length} files still have conflicts`);
}
'
console.log('🔧 Merge conflict resolution completed!');'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      
      if (inConflict) {
        // Skip HEAD version, keep main version
        if (conflictType === 'main') {
          resolvedLines.push(line);
        }
      } else {
        resolvedLines.push(line);
      }
    }
    
    // Write resolved content
    fs.writeFileSync(filePath, resolvedLines.join('\n'));
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
    
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Resolve conflicts for each file
let resolvedCount = 0;
let failedCount = 0;

for (const file of conflictFiles) {
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

console.log('\n🎉 Merge conflict resolution completed!');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
