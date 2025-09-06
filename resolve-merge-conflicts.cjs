<<<<<<< HEAD
#!/usr/bin/env node

#!/usr/bin/env node
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
#!/usr/bin/env node
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

<<<<<<< HEAD
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Resolving merge conflicts...');

<<<<<<< HEAD
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers and keep the version from our branch (after =======)
    content = content
      .replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1')
      .replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '')
      .replace(/<<<<<<< HEAD[\s\S]*?=======/g, '')
      .replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '')
      .replace(/<<<<<<< HEAD/g, '')
      .replace(/=======/g, '')
      .replace(/>>>>>>> [^\n]+/g, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Resolved conflicts in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error resolving ${filePath}:`, error.message);
    return false;
  }
}
function findFilesWithConflicts(dir) {
  const files = [];
  
  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip certain directories
          if (!['node_modules', '.git', 'dist', 'build', '.next', 'cache'].includes(item)) {
            traverse(fullPath);
          }
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (['.js', '.ts', '.tsx', '.jsx'].includes(ext)) {
            try {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (content.includes('<<<<<<< HEAD')) {
                files.push(fullPath);
              }
            } catch (e) {
              // Skip files we can't read
            }
          }
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
  }
  
  traverse(dir);
  return files;
}
// Main execution
const targetDir = process.cwd();
console.log(`📁 Scanning ${targetDir} for files with merge conflicts`);

const files = findFilesWithConflicts(targetDir);
console.log(`📄 Found ${files.length} files with merge conflicts`);
=======
// Get list of conflicted files
const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

console.log(`Found ${conflictedFiles.length} conflicted files`);

// Strategy: For modify/delete conflicts, accept the deletion (main branch)
// For content conflicts, we'll need to resolve manually

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
let resolvedCount = 0;
let manualCount = 0;

for (const file of conflictedFiles) {
  try {
    // Check if it's a modify/delete conflict (backup files)
    if (file.includes('.backup') || file.includes('backup-merge-conflicts/')) {
      console.log(`🗑️  Removing backup file: ${file}`);
      execSync(`git rm "${file}"`);
      resolvedCount++;
<<<<<<< HEAD
    }
  } catch (error) {
    console.error(`❌ Error processing ${file}:`, error.message);
    errorCount++;
  }
});

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting automatic merge conflict resolution...');

// Get list of files with merge conflicts
const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
const conflictFiles = gitStatus.split('\n')
  .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
  .map(line => line.split(' ').pop())
  .filter(file => file && file !== '');

console.log(`Found ${conflictFiles.length} files with merge conflicts`);

// Function to resolve conflicts by choosing incoming changes
function resolveConflicts(filePath) {
  try {
    console.log(`Resolving conflicts in ${filePath}...`);
    
    // Read the file content
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace merge conflict markers with incoming changes
    // Remove and
    content = content.replace(/[\s\S]*?
    
    // Write the resolved content back
    fs.writeFileSync(filePath, content);
    
    // Add the file to git
    execSync(`git add "${filePath}"`, { stdio: 'inherit' });
    
    console.log(`✅ Resolved conflicts in ${filePath}`);
  } catch (error) {
    console.error(`❌ Failed to resolve conflicts in ${filePath}:`, error.message);
  }
}


const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting automatic merge conflict resolution...');

// Get list of files with merge conflicts
const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
const conflictFiles = gitStatus.split('\n')
  .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
  .map(line => line.split(' ').pop())
  .filter(file => file && file !== '');

console.log(`Found ${conflictFiles.length} files with merge conflicts`);

// Function to resolve conflicts by choosing incoming changes
function resolveConflicts(filePath) {
  try {
    console.log(`Resolving conflicts in ${filePath}...`);
    
    // Read the file content
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace merge conflict markers with incoming changes
    // Remove and
    content = content.replace(/[\s\S]*?
    
    // Write the resolved content back
    fs.writeFileSync(filePath, content);
    
    // Add the file to git
    execSync(`git add "${filePath}"`, { stdio: 'inherit' });
    
    console.log(`✅ Resolved conflicts in ${filePath}`);
  } catch (error) {
    console.error(`❌ Failed to resolve conflicts in ${filePath}:`, error.message);
  }
}

});
// Resolve conflicts for each file
conflictFiles.forEach(resolveConflicts);


// Run linter to check if issues are resolved
console.log('\n🔍 Running linter to check if issues are resolved...');
try {
  execSync('npm run lint', { stdio: 'inherit' });
} catch (error) {
  console.log('⚠️  Linter still has issues (this may be expected)');
function resolveMergeConflicts() {
    console.log('Resolving merge conflicts...');
    
    try {
        // Get list of conflicted files
        const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
            .trim()
            .split('\n')
            .filter(file => file.length > 0);
        
        console.log(`Found ${conflictedFiles.length} conflicted files`);
        
        for (const file of conflictedFiles) {
            if (!fs.existsSync(file)) {
                console.log(`Skipping non-existent file: ${file}`);
                continue;
            }
            
            console.log(`Resolving conflicts in: ${file}`);
            
            // For most files, accept the main branch version (ours)
            // For deleted files in main, remove them
            if (file.includes('performance-monitor.cjs') || 
                file.includes('coach.ts') || 
                file.includes('complete.ts') || 
                file.includes('leaderboard.ts')) {
                // These files were deleted in main, so remove them
                try {
                    fs.unlinkSync(file);
                    console.log(`Removed deleted file: ${file}`);
                } catch (err) {
                    console.log(`Could not remove file ${file}: ${err.message}`);
                }
            } else {
                // Accept main branch version for other files
                try {
                    execSync(`git checkout --ours "${file}"`, { stdio: 'pipe' });
                    execSync(`git add "${file}"`, { stdio: 'pipe' });
                    console.log(`Resolved conflicts in: ${file}`);
                } catch (err) {
                    console.log(`Could not resolve ${file}: ${err.message}`);
                }
            }
=======
    } else {
      // For content conflicts, we'll accept the current branch version (HEAD)
      console.log(`📝 Resolving content conflict: ${file}`);
      
      // Check if file exists and has conflict markers
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
        if (content.includes('<<<<<<< HEAD')) {
          // Accept HEAD version (current branch)
          execSync(`git checkout --ours "${file}"`);
          execSync(`git add "${file}"`);
          resolvedCount++;
        } else {
          // No conflict markers, just add the file
          execSync(`git add "${file}"`);
          resolvedCount++;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        }
      } else {
        // File doesn't exist, remove it
        execSync(`git rm "${file}"`);
        resolvedCount++;
      }
    }
  } catch (error) {
    console.log(`⚠️  Manual resolution needed for: ${file}`);
    manualCount++;
  }
}

console.log(`\n✅ Resolved ${resolvedCount} files automatically`);
console.log(`⚠️  ${manualCount} files need manual resolution`);

if (manualCount > 0) {
  console.log('\nFiles needing manual resolution:');
  const remainingConflicts = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
    .trim()
    .split('\n')
    .filter(file => file.length > 0);
  
  remainingConflicts.forEach(file => console.log(`  - ${file}`));
}

console.log('\n🎯 Merge conflict resolution complete!');
=======
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
>>>>>>> main
const { execSync } = require('child_process');

console.log('Resolving merge conflicts...');

// Get all conflicted files
const conflictedFiles = execSync('git diff --name-only --diff-filter=U').toString().trim().split('\n').filter(f => f);

console.log(`Found ${conflictedFiles.length} conflicted files`);

// Categorize conflicts
const modifyDeleteConflicts = [];
const contentConflicts = [];
const addAddConflicts = [];

conflictedFiles.forEach(file => {
  const status = execSync(`git status --porcelain "${file}"`).toString().trim();
  
  if (status.startsWith('UD') || status.startsWith('DU')) {
    modifyDeleteConflicts.push(file);
  } else if (status.startsWith('UU')) {
    contentConflicts.push(file);
  } else if (status.startsWith('AA')) {
    addAddConflicts.push(file);
  }
});

console.log(`Modify/Delete conflicts: ${modifyDeleteConflicts.length}`);
console.log(`Content conflicts: ${contentConflicts.length}`);
console.log(`Add/Add conflicts: ${addAddConflicts.length}`);

// Resolve modify/delete conflicts by accepting remote deletion
console.log('\nResolving modify/delete conflicts...');
modifyDeleteConflicts.forEach(file => {
  try {
    execSync(`git rm "${file}"`);
    console.log(`✓ Deleted: ${file}`);
  } catch (error) {
    console.error(`✗ Failed to delete ${file}: ${error.message}`);
  }
});

// Resolve add/add conflicts by choosing one version
console.log('\nResolving add/add conflicts...');
addAddConflicts.forEach(file => {
  try {
    // For add/add conflicts, prefer the current version (HEAD)
    execSync(`git checkout --ours "${file}"`);
    execSync(`git add "${file}"`);
    console.log(`✓ Resolved add/add conflict: ${file}`);
  } catch (error) {
    console.error(`✗ Failed to resolve add/add conflict in ${file}: ${error.message}`);
  }
});

// Resolve content conflicts by preferring our version for most files
console.log('\nResolving content conflicts...');
contentConflicts.forEach(file => {
  try {
    // For content conflicts, prefer our version (HEAD) for most files
    // But for specific files, we might want to prefer remote
    if (file.includes('yarn.lock') || file.includes('package-lock.json')) {
      execSync(`git checkout --theirs "${file}"`);
    } else {
      execSync(`git checkout --ours "${file}"`);
    }
    execSync(`git add "${file}"`);
    console.log(`✓ Resolved content conflict: ${file}`);
  } catch (error) {
    console.error(`✗ Failed to resolve content conflict in ${file}: ${error.message}`);
  }
});

<<<<<<< HEAD
console.log('\nMerge conflict resolution completed!');
console.log('Run "git status" to check remaining conflicts.');
=======
if (resolveMergeConflicts()) {
    console.log('Ready to commit merge resolution');
} else {
}
  console.log(`⚠️  ${remainingConflicts.length} files still have conflicts`);
}
console.log('\n🎉 Merge conflict resolution completed!');

<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
