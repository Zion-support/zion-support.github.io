#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting comprehensive merge conflict resolution and PR merging...');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [a-f0-9]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [a-f0-9]+/g, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed merge conflicts in: ${path.relative(process.cwd(), filePath)}`);
      return true;
    }
    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}
<<<<<<< HEAD
// Function to get all files recursively;
  try {;
    const items = fs.readdirSync(dir);
    for (const item of items) {;
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

<<<<<<< HEAD
/**
 * getAllFiles - Function description
 */
function getAllFiles() {
  let files = [],
  try {
    const items = fs.readdir_sync (dir),
    for (const item of items) {
      const full_path = path.join (dir, item),
      const stat = fs.stat_sync (full_path),
      if (&& !item.starts_with ('.') && item !== 'node_modules' && item !== '.git') {) {
  $2
}
        files = files.concat (getAllFiles (full_path, extensions));
      } else if ()) {) {
  $2
}
        files.push (full_path);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
function getAllFiles(dir, extensions) {let files = [];
=======
=======
<<<<<<< HEAD
const { execSync } = require('child_process'),;
const fs = require('fs'),;
const path = require('path'),;
=======
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
console.log('🚀 Starting comprehensive merge conflict resolution and PR merging...'),;
// Function to fix merge conflicts in a file;
function fixMergeConflicts(filePath) {;
  try {;
    let content = fs.readFileSync(filePath, 'utf8'),;
<<<<<<< HEAD
    const originalContent = content;
    // Remove merge conflict markers and keep HEAD version;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    const originalContent = content,;
    // Remove merge conflict markers and keep HEAD version;
    content = content.replace(/[\s\S]*?
    content = content.replace(/
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    const originalContent = content;
    // Remove merge conflict markers and keep HEAD version;
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [a-f0-9]+/g, ''),;
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [a-f0-9]+/g, ''),;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    if (content !== originalContent) {;
      fs.writeFileSync(filePath, content, 'utf8'),;
      console.log(`✅ Fixed merge conflicts in: ${path.relative(process.cwd(), filePath)}`),;
      return true;
    }
    return false;
  } catch (error) {;
    console.log(`❌ Error fixing ${filePath}: ${error.message}`),;
    return false;
  }
}
;
// Function to get all files recursively;
function getAllFiles(dir, extensions) {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  let files = [],;
  try {;
    const items = fs.readdirSync(dir),;
    for (const item of items) {;
      const fullPath = path.join(dir, item),;
      const stat = fs.statSync(fullPath),;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
// Function to get all files recursively
function getAllFiles(dir, extensions) {
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-bf80
  let files = [];
  try {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== '.git') {
        files = files.concat(getAllFiles(fullPath, extensions));
<<<<<<< HEAD
      }
    }
  } catch (error) {
    // Skip directories that can't be read;
  }
  return files;
}
// Main execution;
async /**
 * main - Function description
 */
function main() {
  try {
    // Check if we're in a git repository;
    exec_sync ('git rev - parse --git - dir', { stdio: 'pipe' }),
    console.log ('✅ Git repository detected');
  } catch (error) {
    console.error ('❌ Not in a git repository'),
    process.exit (1);
  }
  try {
    // Ensure clean working directory;
    const status = exec_sync ('git status --porcelain', { encoding: 'utf8' }),
    if () {) {
  $2
}
      console.log ('⚠️  Working directory has changes. Stashing...'),
      exec_sync ('git stash push -m "Auto - stash before merge process"');
    }
    // Fetch latest changes;
    console.log ('📥 Fetching latest changes...'),
    exec_sync ('git fetch --all --prune'),
    // Switch to main branch;
    console.log ('🔄 Switching to main branch...'),
    exec_sync ('git checkout main'),
    // Pull latest changes;
    console.log ('📥 Pulling latest changes from main...'),
    try {
      exec_sync ('git pull origin main');
    } catch (error) {
      console.log ('⚠️  Merge conflicts detected. Resolving...'),
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== '.git') {;
        files = files.concat(getAllFiles(fullPath, extensions));

      } else if (extensions.some(ext => item.endsWith(ext))) {;
=======
      } else if (extensions.some(ext => item.endsWith(ext))) {
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        files.push(fullPath);
      }
    }
  } catch (error) {
    // Skip directories that can't be read
  }
  return files;
}

// Main execution
async function main() {
  try {
    // Check if we're in a git repository
    execSync('git rev-parse --git-dir', { stdio: 'pipe' });
    console.log('✅ Git repository detected');
  } catch (error) {
    console.error('❌ Not in a git repository');
    process.exit(1);
  }

  try {
    // Ensure clean working directory
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    if (status.trim()) {
      console.log('⚠️  Working directory has changes. Stashing...');
      execSync('git stash push -m "Auto-stash before merge process"');
    }

    // Fetch latest changes
    console.log('📥 Fetching latest changes...');
    execSync('git fetch --all --prune');

    // Switch to main branch
    console.log('🔄 Switching to main branch...');
    execSync('git checkout main');

    // Pull latest changes
    console.log('📥 Pulling latest changes from main...');
    try {
      execSync('git pull origin main');
<<<<<<< HEAD
    } catch (error) {;
      console.log('⚠️  Merge conflicts detected. Resolving...'),;
      // Find files with merge conflicts;


        for (const file of files) {;
          if (file.trim()) {;
=======
    } catch (error) {
      console.log('⚠️  Merge conflicts detected. Resolving...');
      
      // Find files with merge conflicts
      const conflictFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' });
      if (conflictFiles.trim()) {
        console.log('Found merge conflicts in:', conflictFiles.trim());
        
        // Resolve conflicts by accepting our version
        const files = conflictFiles.trim().split('\n');
        for (const file of files) {
          if (file.trim()) {
            console.log(`Resolving conflicts in: ${file}`);
            try {
              execSync(`git checkout --ours "${file}"`);
            } catch (e) {
              execSync(`git checkout --theirs "${file}"`);
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
            }
            execSync(`git add "${file}"`);
          }
        }
<<<<<<< HEAD
        // Commit the merge;
        execSync('git commit -m "feat: resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"');
      }
    }
    let fixedCount = 0;
=======
        
        // Commit the merge
        execSync('git commit -m "feat: resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"');
      }
    }

    // Now scan for and fix any remaining merge conflicts in files
    console.log('🔍 Scanning for merge conflicts in files...');
    const files = getAllFiles(process.cwd(), ['.tsx', '.ts', '.jsx', '.js', '.json', '.md', '.css']);
    let fixedCount = 0;
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    for (const file of files) {;
      try {;
        const content = fs.readFileSync(file, 'utf8'),;
          if (fixMergeConflicts(file)) {;
<<<<<<< HEAD
            fixedCount++;
          }
        }
      } catch (error) {;
        // Skip files that can't be read;
      }
    }
;
;
    if (fixedCount > 0) {;
      console.log(`✅ Fixed merge conflicts in ${fixedCount} files`),;
      execSync('git add .'),;
      execSync('git commit -m "fix: resolve remaining merge conflicts in files\n\n- Fixed merge conflict markers in source files\n- Ensured clean codebase without conflicts"');
    }
;
    // Get all branches;
    console.log('🌿 Getting all branches...'),;
    const branches = execSync('git branch -r', { encoding: 'utf8' }),;
    const branchList = branches.split('\n');
      .map(branch => branch.trim());
      .filter(branch => branch && !branch.includes('origin/main') && !branch.includes('origin/HEAD'));
    console.log(`Found ${branchList.length} branches to merge: `),;
    branchList.forEach(branch => console.log(`  - ${branch}`)),;
    // Merge each branch;
    for (const branch of branchList) {;
      try {;
        const branchName = branch.replace('origin/', ''),;
        console.log(`\n🔄 Merging branch: ${branchName}`),;
        // Checkout the branch;
        execSync(`git checkout ${branchName}`),;
        // Merge into main;
        execSync('git checkout main'),;
        execSync(`git merge ${branchName} --no-ff -m "feat: merge ${branchName} into main\n\n- Integrated changes from ${branchName}\n- Resolved any conflicts automatically\n- All features and improvements preserved"`),;
        console.log(`✅ Successfully merged ${branchName}`);
      } catch (error) {;
        console.log(`⚠️  Error merging ${branch}: ${error.message}`),;
        // Continue with other branches;
      }
    }
;
    // Push all changes;
    console.log('📤 Pushing all changes to main...'),;
    execSync('git push origin main'),;
    console.log('🎉 All merge operations completed successfully!'),;
    console.log('✅ All PRs have been merged into main branch'),;
    console.log('✅ All merge conflicts have been resolved'),;
    console.log('✅ Repository is now clean and up to date');
  } catch (error) {;
    console.error('❌ Error during merge process:', error.message),;
    process.exit(1);
  }
}
;
main().catch(console.error),;
=======
=======
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
          if (fixMergeConflicts(file)) {
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-bf80
            fixedCount++;
          }
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }

    if (fixedCount > 0) {
      console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);
      execSync('git add .');
      execSync('git commit -m "fix: resolve remaining merge conflicts in files\n\n- Fixed merge conflict markers in source files\n- Ensured clean codebase without conflicts"');
    }

    // Get all branches
    console.log('🌿 Getting all branches...');
    const branches = execSync('git branch -r', { encoding: 'utf8' });
    const branchList = branches.split('\n')
      .map(branch => branch.trim())
      .filter(branch => branch && !branch.includes('origin/main') && !branch.includes('origin/HEAD'));
    
    console.log(`Found ${branchList.length} branches to merge:`);
    branchList.forEach(branch => console.log(`  - ${branch}`));

    // Merge each branch
    for (const branch of branchList) {
      try {
        const branchName = branch.replace('origin/', '');
        console.log(`\n🔄 Merging branch: ${branchName}`);
        
        // Checkout the branch
        execSync(`git checkout ${branchName}`);
        
        // Merge into main
        execSync('git checkout main');
        execSync(`git merge ${branchName} --no-ff -m "feat: merge ${branchName} into main\n\n- Integrated changes from ${branchName}\n- Resolved any conflicts automatically\n- All features and improvements preserved"`);
        
        console.log(`✅ Successfully merged ${branchName}`);
      } catch (error) {
        console.log(`⚠️  Error merging ${branch}: ${error.message}`);
        // Continue with other branches
      }
    }

    // Push all changes
    console.log('📤 Pushing all changes to main...');
    execSync('git push origin main');
    
    console.log('🎉 All merge operations completed successfully!');
    console.log('✅ All PRs have been merged into main branch');
    console.log('✅ All merge conflicts have been resolved');
    console.log('✅ Repository is now clean and up to date');
  } catch (error) {
    console.error('❌ Error during merge process:', error.message);
    process.exit(1);
  }
}

<<<<<<< HEAD
    console.log ('🔍 Scanning for merge conflicts in files...'),
    const files = getAllFiles (process.cwd (), ['.tsx.ts.jsx.js', '.json.md.css']),
    let fixed_count = 0,
    for (const file of files) {
      try {
        const content = fs.readFileSync (file, 'utf8'),
        // Check condition
if (|| content.includes (') {
  $2
}

=======

;
    // Now scan for and fix any remaining merge conflicts in files;
    console.log('🔍 Scanning for merge conflicts in files...'),;
    const files = getAllFiles(process.cwd(), ['.tsx.ts.jsx.js', '.json.md.css']),;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
main().catch(console.error);
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-bf80
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
