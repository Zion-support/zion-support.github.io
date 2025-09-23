<<<<<<< HEAD
#!/usr/bin/env node;
import fs from 'fs';''
import path from 'path';''
import { execSync } from 'child_process';''
console.log('🔧 Resolving merge conflicts by accepting incoming changes...');'
// Function to resolve merge conflicts by accepting incoming changes;
function resolveMergeConflicts(filePath) {}
  try {}
  // TODO: Implement;
}'
    let content = fs.readFileSync(filePath, 'utf8');'
    // Check if file has merge conflict markers;'
    if (content.includes('<<<<<<<') || content.includes(')
      // Clean up any remaining conflict markers;
      content = content;)'
        .replace(/);
      fs.writeFileSync(filePath, content);
      return true;
    };
    return false;
  } catch (error) {}
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  };
};
// Function to find all files with merge conflicts;
function findConflictedFiles() {}
  try {}
  // TODO: Implement;
}
    const result = execSync('git status --porcelain | grep "^UU\\|^AA\\|^DD"', { encoding: 'utf8' }
});''
    return result.trim().split('\n').map(line => line.split(' ').pop()).filter(Boolean);'
  } catch (error) {'}
    console.log('No conflicted files found or error:', error.message);'
=======
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting Merge Conflicts Resolution Process...');

// Find all files with merge conflicts
const findConflictFiles = () => {
  try {
    const result = execSync('grep -r -l "" . --exclude-dir=node_modules --exclude-dir=.git', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file);
  } catch (error) {
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
    return [];
  }
};

function checkGitStatus() {
    console.log('📊 Checking Git Status...');
    
    const status = runCommand('git status --porcelain');
    const branch = runCommand('git branch --show-current');
    const remotes = runCommand('git branch -r');
    
    console.log('Current branch:', branch);
    console.log('Git status:', status || 'Clean working directory');
    
    return { status, branch, remotes };
}

function getUnmergedBranches() {
    console.log('🔍 Finding unmerged branches...');
    
    const unmerged = runCommand('git branch -r --no-merged origin/main');
    if (!unmerged) {
        console.log('No unmerged branches found');
        return [];
    }
    
    const branches = unmerged.split('\n')
        .filter(branch => branch.includes('cursor/fix-netlify-build-and-merge-to-main'))
        .map(branch => branch.trim().replace('origin/', ''));
    
    console.log('Found unmerged branches:', branches);
    return branches;
}

function mergeBranch(branchName) {
    console.log(`🔄 Attempting to merge ${branchName}...`);
    
    try {
        // Switch to main
        runCommand('git checkout main');
        
        // Create a temporary branch
        const tempBranch = `temp-merge-${branchName}`;
        runCommand(`git checkout -b ${tempBranch}`);
        
        // Try to merge
        const mergeResult = runCommand(`git merge origin/${branchName} --no-ff -m "Merge ${branchName} into main"`);
        
        if (mergeResult !== null) {
            console.log(`✅ Successfully merged ${branchName}`);
            
            // Update main
            runCommand('git checkout main');
            runCommand(`git merge ${tempBranch} --ff-only`);
            runCommand('git push origin main');
            
            // Clean up
            runCommand(`git branch -D ${tempBranch}`);
            
            return true;
        }
    } catch (error) {
        console.log(`❌ Failed to merge ${branchName}:`, error.message);
        
        // Try to resolve conflicts
        try {
            const conflicts = runCommand('git status --porcelain');
            if (conflicts && conflicts.includes('UU')) {
                console.log('🔧 Resolving conflicts...');
                
                // Auto-resolve by preferring main branch
                runCommand('git checkout --ours .');
                runCommand('git add .');
                runCommand(`git commit -m "Resolve merge conflicts for ${branchName} (auto-resolved)"`);
                
                // Update main
                runCommand('git checkout main');
                runCommand(`git merge temp-merge-${branchName} --ff-only`);
                runCommand('git push origin main');
                
                // Clean up
                runCommand(`git branch -D temp-merge-${branchName}`);
                
                console.log(`✅ Conflicts resolved and merged ${branchName}`);
                return true;
            }
        } catch (resolveError) {
            console.log(`❌ Failed to resolve conflicts for ${branchName}:`, resolveError.message);
        }
    }
    
    return false;
}

function main() {
    try {
        // Check initial status
        const { status, branch, remotes } = checkGitStatus();
        
        // Get unmerged branches
        const unmergedBranches = getUnmergedBranches();
        
        if (unmergedBranches.length === 0) {
            console.log('✅ No unmerged branches found');
            return;
        }
        
        // Process each branch
        let successCount = 0;
        let failCount = 0;
        
        for (const branch of unmergedBranches) {
            console.log(`\n🔄 Processing branch: ${branch}`);
            
            if (mergeBranch(branch)) {
                successCount++;
            } else {
                failCount++;
            }
        }
        
        console.log('\n📊 Final Results:');
        console.log(`✅ Successfully merged: ${successCount}`);
        console.log(`❌ Failed to merge: ${failCount}`);
        
        // Final status check
        console.log('\n📋 Final Git Status:');
        checkGitStatus();
        
    } catch (error) {
        console.error('❌ Script failed:', error.message);
        process.exit(1);
    }
}

// Run the script
main();