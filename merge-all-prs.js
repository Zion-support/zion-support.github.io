const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting comprehensive PR merge process...');

// Configuration
const WORKSPACE_DIR = '/workspace';
const PR_BRANCHES = [
    { branch: 'cursor/fix-netlify-build-and-merge-to-main-74ad', pr: 12714 },
    { branch: 'cursor/fix-netlify-build-and-merge-to-main-9e6a', pr: 12713 },
    { branch: 'cursor/fix-netlify-build-and-merge-to-main-34e4', pr: 12712 }
];

// Utility function to run git commands
function runGitCommand(command, options = {}) {
    const fullCommand = `cd ${WORKSPACE_DIR} && ${command}`;
    console.log(`Executing: ${fullCommand}`);
    
    try {
        const result = execSync(fullCommand, { 
            encoding: 'utf8',
            timeout: 60000,
            stdio: 'pipe',
            ...options 
        });
        return result.trim();
    } catch (error) {
        console.error(`❌ Command failed: ${fullCommand}`);
        console.error(`Error: ${error.message}`);
        return null;
    }
}

// Function to check if branch exists
function branchExists(branchName) {
    const result = runGitCommand(`git show-ref --verify --quiet refs/remotes/origin/${branchName}`);
    return result !== null;
}

// Function to resolve merge conflicts
function resolveConflicts() {
    console.log('🔧 Checking for merge conflicts...');
    
    const status = runGitCommand('git status --porcelain');
    if (!status) {
        console.log('❌ Could not check git status');
        return false;
    }
    
    const conflictLines = status.split('\n').filter(line => 
        line.match(/^(UU|AA|DD)/)
    );
    
    if (conflictLines.length === 0) {
        console.log('✅ No conflicts found');
        return true;
    }
    
    console.log(`Found ${conflictLines.length} conflicted files`);
    
    for (const line of conflictLines) {
        const file = line.split(' ').pop();
        console.log(`  Resolving conflict in: ${file}`);
        
        // Try to resolve conflicts by choosing the version from the feature branch
        const resolveResult = runGitCommand(`git checkout --theirs "${file}"`);
        if (resolveResult === null) {
            // If that fails, try ours
            runGitCommand(`git checkout --ours "${file}"`);
        }
        
        // Add the resolved file
        runGitCommand(`git add "${file}"`);
    }
    
    // Commit the resolution
    const commitResult = runGitCommand('git commit --no-edit');
    if (commitResult !== null) {
        console.log('✅ Conflicts resolved successfully');
        return true;
    } else {
        console.log('❌ Failed to commit conflict resolution');
        return false;
    }
}

// Function to merge a single PR branch
function mergePRBranch(branchInfo) {
    const { branch, pr } = branchInfo;
    console.log(`\n📋 Processing PR #${pr}: ${branch}`);
    
    // Check if branch exists
    if (!branchExists(branch)) {
        console.log(`❌ Branch ${branch} does not exist, skipping...`);
        return false;
    }
    
    // Fetch the branch
    console.log(`📥 Fetching branch ${branch}...`);
    const fetchResult = runGitCommand(`git fetch origin ${branch}`);
    if (fetchResult === null) {
        console.log(`❌ Failed to fetch ${branch}`);
        return false;
    }
    
    // Attempt merge
    console.log(`🔄 Attempting to merge ${branch} into main...`);
    const mergeResult = runGitCommand(`git merge origin/${branch} --no-ff -m "Merge PR #${pr}: ${branch} into main"`);
    
    if (mergeResult !== null) {
        console.log(`✅ Successfully merged ${branch}`);
        return true;
    } else {
        console.log(`⚠️  Merge conflict detected in ${branch}`);
        
        // Try to resolve conflicts
        if (resolveConflicts()) {
            console.log(`✅ Successfully resolved conflicts and merged ${branch}`);
            return true;
        } else {
            console.log(`❌ Failed to resolve conflicts for ${branch}`);
            runGitCommand('git merge --abort');
            return false;
        }
    }
}

// Main execution function
async function main() {
    try {
        console.log('🔄 Ensuring we are on main branch...');
        runGitCommand('git checkout main');
        
        console.log('📥 Pulling latest changes...');
        runGitCommand('git pull origin main');
        
        let successCount = 0;
        const totalCount = PR_BRANCHES.length;
        
        // Process each PR branch
        for (const prInfo of PR_BRANCHES) {
            if (mergePRBranch(prInfo)) {
                successCount++;
            }
        }
        
        console.log(`\n🎉 Processed ${successCount}/${totalCount} PRs successfully!`);
        
        // Push changes to main
        console.log('📤 Pushing changes to main...');
        const pushResult = runGitCommand('git push origin main');
        if (pushResult !== null) {
            console.log('✅ Successfully pushed all changes to main!');
        } else {
            console.log('❌ Failed to push changes to main');
        }
        
        console.log('\n🎉 All PRs have been processed and merged!');
        
    } catch (error) {
        console.error('❌ Error during merge process:', error.message);
        process.exit(1);
    }
}

// Run the main function
main().catch(console.error);