<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-88b9
#!/usr/bin/env node
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
#!/usr/bin/env node
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
#!/usr/bin/env node
<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
=======

<<<<<<< HEAD

const fs = require('fs');
const path = require(path');


      }
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
#!/usr/bin/env node
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
#!/usr/bin/env node

#!/usr/bin/env node
=======
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD
#!/usr/bin/env node
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const fs = require('fs');
const path = require('path');
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-88b9
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
    content = content
      .replace(/[^\n]+/g, '');
    
=======
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
console.log('🔧 Resolving merge conflicts...');
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    // Remove merge conflict markers and keep the version from our branch (after )
    content = content
      .replace(/([\s\S]*?)
      .replace(/[\s\S]*?
      .replace(//g, '')
      .replace(/[\s\S]*?
      .replace(//g, '')
      .replace(/
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Resolved conflicts in: ${filePath}`);
      return true;
>>>>>>> origin/chore/fix-lint-and-merge
    }
    return false;
  } catch (error) {
    console.error(`❌ Error resolving ${filePath}:`, error.message);
    return false;
  }
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
// Get list of conflicted files
const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

console.log(`Found ${conflictedFiles.length} conflicted files`);

// Strategy: For modify/delete conflicts, accept the deletion (main branch)
// For content conflicts, we'll need to resolve manually
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


    console.error(`❌ Error processing ${file}:`, error.message);
    errorCount++;
});
"
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
main
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======


>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const { execSync } = require('child_process');
=======


// Function to resolve conflicts by choosing incoming changes;
function resolveConflicts(filePath) {
  // TODO: Implement
}`;
    console.log(`Resolving conflicts in ${filePath}...`);
    // Read the file content;
    // Replace merge conflict markers with incoming changes;
    // Remove and;
    content = content.replace(/[\s\S]*?
    // Write the resolved content back;)
    fs.writeFileSync(filePath, content);
    // Add the file to git;`;
    execSync(`git add "${filePath}"`, { stdio: 'inherit' });`;
    console.log(`✅ Resolved conflicts in ${filePath}`);
    console.error(`❌ Failed to resolve conflicts in ${filePath}:`, error.message);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


// Get list of files with merge conflicts;

// Function to resolve conflicts by choosing incoming changes;
  // TODO: Implement
    // Read the file content;
    // Replace merge conflict markers with incoming changes;
    // Remove and;
    // Write the resolved content back;)
    // Add the file to git;`;

// Resolve conflicts for each file;
conflictFiles.forEach(resolveConflicts);


// Run linter to check if issues are resolved;
console.log('\n🔍 Running linter to check if issues are resolved...');
  // TODO: Implement
  execSync('npm run lint', { stdio: 'inherit' });
  console.log('⚠️  Linter still has issues (this may be expected)');
function resolveMergeConflicts() {
    console.log('Resolving merge conflicts...');
  // TODO: Implement
        // Get list of conflicted files;
            if (!fs.existsSync(file)) {`;
                console.log(`Skipping non-existent file: ${file}`);
                continue;
            console.log(`Resolving conflicts in: ${file}`);
            // For most files, accept the main branch version (ours)
            // For deleted files in main, remove them;
            if (file.includes('performance-monitor.cjs') ||
                file.includes('coach.ts') ||
                file.includes('complete.ts') ||
                file.includes('leaderboard.ts')) {
                // These files were deleted in main, so remove them;
  // TODO: Implement
                    fs.unlinkSync(file);`;
                    console.log(`Removed deleted file: ${file}`);
                } catch (err) {`;
                    console.log(`Could not remove file ${file}: ${err.message}`);
            } else {
  // TODO: Implement
                // Accept main branch version for other files;
  // TODO: Implement
                    execSync(`git checkout --ours "${file}"`, { stdio: 'pipe' });`;
                    execSync(`git add "${file}"`, { stdio: 'pipe' });`;
                    console.log(`Resolved conflicts in: ${file}`);
                    console.log(`Could not resolve ${file}: ${err.message}`);

  // TODO: Implement
      // For content conflicts, we'll accept the current branch version (HEAD)`;
      console.log(`📝 Resolving content conflict: ${file}`);
      // Check if file exists and has conflict markers;
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
          // Accept HEAD version (current branch)`;
          execSync(`git checkout --ours "${file}"`);""`;
          execSync(`git add "${file}"`);"
  // TODO: Implement
          // No conflict markers, just add the file;"`;

  // TODO: Implement
}"
        // File doesn't exist, remove it;`;
    console.log(`⚠️  Manual resolution needed for: ${file}`);
    manualCount++;
console.log(`\n✅ Resolved ${resolvedCount} files automatically`);`;
console.log(`⚠️  ${manualCount} files need manual resolution`);

if (manualCount > 0) {"
  console.log('\nFiles needing manual resolution:');
  const remainingConflicts = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
  remainingConflicts.forEach(file => console.log(`  - ${file}`));

console.log('\n🎯 Merge conflict resolution complete!');
// Get all conflicted files;
const conflictedFiles = execSync('git diff --name-only --diff-filter=U').toString().trim().split('\n').filter(f => f);`;

// Categorize conflicts;
const modifyDeleteConflicts = [];
const contentConflicts = [];
const addAddConflicts = [];

conflictedFiles.forEach(file => {)`;
  const status = execSync(`git status --porcelain "${file}"`).toString().trim();""
  if (status.startsWith('UD') || status.startsWith('DU')) {
    modifyDeleteConflicts.push(file);
  } else if (status.startsWith('UU')) {
    contentConflicts.push(file);
  } else if (status.startsWith('AA')) {
    addAddConflicts.push(file);
<<<<<<< HEAD
  }
<<<<<<< HEAD
  
=======
              if (content.includes('')) {
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  traverse(dir);
  return files;
}
// Main execution
const targetDir = process.cwd();
console.log(`📁 Scanning ${targetDir} for files with merge conflicts`);
const files = findFilesWithConflicts(targetDir);
console.log(`📄 Found ${files.length} files with merge conflicts`);
let resolvedCount = 0;
let errorCount = 0;
for (const file of files) {
  try {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  } catch (error) {
    console.error(`❌ Error processing ${file}:`, error.message);
    errorCount++;
  }
<<<<<<< HEAD
}
console.log(`\n🎉 Merge conflict resolution complete!`);
console.log(`✅ Resolved: ${resolvedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

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

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
<<<<<<< HEAD
// Resolve conflicts for each file
conflictFiles.forEach(resolveConflicts);
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
});
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

console.log(`Modify/Delete conflicts: ${modifyDeleteConflicts.length}`);
console.log(`Content conflicts: ${contentConflicts.length}`);
=======
console.log(`Modify/Delete conflicts: ${modifyDeleteConflicts.length}`);`;
console.log(`Content conflicts: ${contentConflicts.length}`);`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
console.log(`Add/Add conflicts: ${addAddConflicts.length}`);

// Resolve modify/delete conflicts by accepting remote deletion;
console.log('\nResolving modify/delete conflicts...');
modifyDeleteConflicts.forEach(file => {
  // TODO: Implement
})`;
    execSync(`git rm "${file}"`);"`;
    console.log(`✓ Deleted: ${file}`);
    console.error(`✗ Failed to delete ${file}: ${error.message}`);
<<<<<<< HEAD
  }
<<<<<<< HEAD
}

<<<<<<< HEAD
<<<<<<< HEAD
=======

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
// Resolve conflicts for each file
conflictFiles.forEach(resolveConflicts);
<<<<<<< HEAD
=======
});
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


// Resolve add/add conflicts by choosing one version;"
console.log('\nResolving add/add conflicts...');
addAddConflicts.forEach(file => {
  // TODO: Implement
})
    // For add/add conflicts, prefer the current version (HEAD)`;
    execSync(`git add "${file}"`);"`;
    console.log(`✓ Resolved add/add conflict: ${file}`);
    console.error(`✗ Failed to resolve add/add conflict in ${file}: ${error.message}`);

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
});
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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

<<<<<<< HEAD
// Resolve conflicts for each file
conflictFiles.forEach(resolveConflicts);
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
// Run linter to check if issues are resolved
console.log('\n🔍 Running linter to check if issues are resolved...');
try {
  execSync('npm run lint', { stdio: 'inherit' });
} catch (error) {
  console.log('⚠️  Linter still has issues (this may be expected)');
<<<<<<< HEAD
}
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-88b9
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