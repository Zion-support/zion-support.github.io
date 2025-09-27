#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting comprehensive PR merge process...');

try {
    // Check current branch
    const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
    console.log(`📍 Current branch: ${currentBranch}`);

    // Switch to main if not already there
    if (currentBranch !== 'main') {
        console.log('🔄 Switching to main branch...');
        execSync('git checkout main', { stdio: 'inherit' });
    }

    // Pull latest changes
    console.log('📥 Pulling latest changes from origin/main...');
    execSync('git pull origin main', { stdio: 'inherit' });

    // Get all remote branches
    console.log('🔍 Fetching all remote branches...');
    execSync('git fetch --all', { stdio: 'inherit' });

    // Get list of remote branches (excluding main)
    const remoteBranches = execSync('git branch -r | grep -v "origin/main" | grep -v "origin/HEAD"', { encoding: 'utf8' })
        .trim()
        .split('\n')
        .filter(branch => branch.trim() && !branch.includes('HEAD'));

    console.log(`📋 Found ${remoteBranches.length} remote branches to process`);

    const mergeResults = {
        successful: [],
        conflicts: [],
        errors: []
    };

    // Process each branch
    for (const branch of remoteBranches.slice(0, 10)) { // Limit to first 10 to avoid timeout
        const branchName = branch.trim().replace('origin/', '');
        console.log(`\n🔄 Processing branch: ${branchName}`);

        try {
            // Check if branch can be merged without conflicts
            const mergeBase = execSync(`git merge-base origin/main origin/${branchName}`, { encoding: 'utf8' }).trim();
            const mergeTree = execSync(`git merge-tree ${mergeBase} origin/main origin/${branchName}`, { encoding: 'utf8' });
            
            if (mergeTree.includes('<<<<<<<')) {
                console.log(`⚠️  Conflicts detected in ${branchName}`);
                mergeResults.conflicts.push(branchName);
                
                // Try to merge and resolve conflicts automatically
                try {
                    execSync(`git checkout -b temp-merge-${branchName} origin/${branchName}`, { stdio: 'inherit' });
                    execSync(`git merge main --no-commit`, { stdio: 'pipe' });
                    
                    // Auto-resolve conflicts by accepting our version (main)
                    execSync(`git checkout --ours .`, { stdio: 'inherit' });
                    execSync(`git add .`, { stdio: 'inherit' });
                    execSync(`git commit -m "Merge ${branchName} into main - resolved conflicts"`, { stdio: 'inherit' });
                    
                    // Merge back to main
                    execSync(`git checkout main`, { stdio: 'inherit' });
                    execSync(`git merge temp-merge-${branchName} --no-ff -m "Merge ${branchName} with conflict resolution"`, { stdio: 'inherit' });
                    execSync(`git branch -D temp-merge-${branchName}`, { stdio: 'inherit' });
                    
                    console.log(`✅ Successfully merged ${branchName} with conflict resolution`);
                    mergeResults.successful.push(branchName);
                } catch (mergeError) {
                    console.log(`❌ Failed to merge ${branchName}: ${mergeError.message}`);
                    mergeResults.errors.push({ branch: branchName, error: mergeError.message });
                    
                    // Clean up
                    try {
                        execSync(`git checkout main`, { stdio: 'pipe' });
                        execSync(`git branch -D temp-merge-${branchName}`, { stdio: 'pipe' });
                    } catch (cleanupError) {
                        // Ignore cleanup errors
                    }
                }
            } else {
                // No conflicts, merge directly
                try {
                    execSync(`git merge origin/${branchName} --no-ff -m "Merge ${branchName} into main"`, { stdio: 'inherit' });
                    console.log(`✅ Successfully merged ${branchName}`);
                    mergeResults.successful.push(branchName);
                } catch (mergeError) {
                    console.log(`❌ Failed to merge ${branchName}: ${mergeError.message}`);
                    mergeResults.errors.push({ branch: branchName, error: mergeError.message });
                }
            }
        } catch (error) {
            console.log(`❌ Error processing ${branchName}: ${error.message}`);
            mergeResults.errors.push({ branch: branchName, error: error.message });
        }
    }

    // Push changes
    console.log('\n📤 Pushing changes to origin/main...');
    execSync('git push origin main', { stdio: 'inherit' });

    // Generate report
    const report = {
        timestamp: new Date().toISOString(),
        summary: {
            totalBranches: remoteBranches.length,
            successful: mergeResults.successful.length,
            conflicts: mergeResults.conflicts.length,
            errors: mergeResults.errors.length
        },
        successful: mergeResults.successful,
        conflicts: mergeResults.conflicts,
        errors: mergeResults.errors
    };

    fs.writeFileSync('merge-results.json', JSON.stringify(report, null, 2));
    console.log('\n📊 Merge Results:');
    console.log(`✅ Successful: ${mergeResults.successful.length}`);
    console.log(`⚠️  Conflicts: ${mergeResults.conflicts.length}`);
    console.log(`❌ Errors: ${mergeResults.errors.length}`);
    console.log(`📄 Full report saved to merge-results.json`);

} catch (error) {
    console.error('💥 Fatal error:', error.message);
    process.exit(1);
}