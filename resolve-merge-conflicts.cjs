<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
#!/usr/bin/env node
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>>>>>>> c6cd63e1e962b6dc38d5b78d347bc10b6a345663
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
#!/usr/bin/env node
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
#!/usr/bin/env node
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
=======
>>>>>>> origin/main

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
#!/usr/bin/env node

=======
>>>>>>> origin/main
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> c6cd63e1e962b6dc38d5b78d347bc10b6a345663
=======
>>>>>>> origin/main
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
console.log('🔧 Resolving merge conflicts...');

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
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> c6cd63e1e962b6dc38d5b78d347bc10b6a345663
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> c6cd63e1e962b6dc38d5b78d347bc10b6a345663
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
// Main execution
const targetDir = process.cwd();
console.log(`📁 Scanning ${targetDir} for files with merge conflicts`);

const files = findFilesWithConflicts(targetDir);
console.log(`📄 Found ${files.length} files with merge conflicts`);
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> c6cd63e1e962b6dc38d5b78d347bc10b6a345663
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
}

console.log(`\n🎉 Merge conflict resolution complete!`);
console.log(`✅ Resolved: ${resolvedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> c6cd63e1e962b6dc38d5b78d347bc10b6a345663
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
});
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> origin/main

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
<<<<<<< HEAD
// Resolve conflicts for each file
conflictFiles.forEach(resolveConflicts);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
<<<<<<< HEAD
=======
>>>>>>> origin/main
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

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

>>>>>>> pr-12166
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
<<<<<<< HEAD
=======
=======
});
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> c6cd63e1e962b6dc38d5b78d347bc10b6a345663
=======
// Resolve conflicts for each file
conflictFiles.forEach(resolveConflicts);
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
<<<<<<< HEAD
=======
>>>>>>> pr-12166
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
>>>>>>> origin/main
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/main

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======

>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
>>>>>>> origin/main
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
        }
        
        // Add all resolved files
        execSync('git add .', { stdio: 'pipe' });
        
        console.log('Merge conflicts resolved successfully');
        return true;
        
    } catch (error) {
        console.error('Error resolving merge conflicts:', error.message);
        return false;
    }
}

if (resolveMergeConflicts()) {
    console.log('Ready to commit merge resolution');
} else {
}
  console.log(`⚠️  ${remainingConflicts.length} files still have conflicts`);
}
console.log('\n🎉 Merge conflict resolution completed!');
<<<<<<< HEAD
>>>>>>> main
=======

>>>>>>> origin/main
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/main
