#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting comprehensive merge process...');

// Function to execute git commands
function gitCommand(command) {
    try {
        return execSync(command, { 
            encoding: 'utf8', 
            cwd: '/workspace',
            stdio: 'pipe'
        });
    } catch (error) {
        console.log(`⚠️  Git command failed: ${command}`);
        console.log(`Error: ${error.message}`);
        return null;
    }
}

// Function to check if a branch can be merged
function canMerge(branch) {
    console.log(`\n🔄 Checking mergeability of ${branch}...`);
    
    // Try to merge without committing
    const result = gitCommand(`git merge --no-commit --no-ff origin/${branch}`);
    
    if (result !== null) {
        // Merge was successful, abort it
        gitCommand('git merge --abort');
        return true;
    } else {
        // Check if there are conflicts
        const status = gitCommand('git status --porcelain');
        if (status && status.includes('UU')) {
            console.log(`❌ Merge conflicts detected in ${branch}`);
            gitCommand('git merge --abort');
            return false;
        }
        return false;
    }
}

// Function to merge a branch
function mergeBranch(branch) {
    console.log(`\n🔄 Merging ${branch}...`);
    
    try {
        // Try to merge
        const result = gitCommand(`git merge --no-ff origin/${branch} -m "Merge ${branch} into main"`);
        
        if (result !== null) {
            console.log(`✅ Successfully merged ${branch}`);
            return true;
        } else {
            console.log(`❌ Failed to merge ${branch}`);
            return false;
        }
    } catch (error) {
        console.log(`❌ Error merging ${branch}: ${error.message}`);
        return false;
    }
}

// Main execution
async function main() {
    try {
        // Ensure we're on main and up to date
        console.log('📋 Ensuring we\'re on main branch...');
        gitCommand('git checkout main');
        gitCommand('git pull origin main');
        
        // Get all cursor branches
        console.log('📋 Fetching all branches...');
        gitCommand('git fetch origin');
        
        // Get list of branches to merge
        const branchesOutput = gitCommand('git branch -r | grep "cursor/fix-errors-and-merge-to-main" | head -50');
        
        if (!branchesOutput) {
            console.log('❌ No branches found to merge');
            return;
        }
        
        const branches = branchesOutput.trim().split('\n')
            .map(branch => branch.trim())
            .filter(branch => branch.startsWith('origin/cursor/fix-errors-and-merge-to-main'))
            .map(branch => branch.replace('origin/', ''));
        
        console.log(`📊 Found ${branches.length} branches to process`);
        
        let merged = 0;
        let failed = 0;
        let skipped = 0;
        
        // Process each branch
        for (const branch of branches) {
            console.log(`\n--- Processing ${branch} ---`);
            
            try {
                // Check if branch can be merged
                if (canMerge(branch)) {
                    // Try to merge
                    if (mergeBranch(branch)) {
                        merged++;
                        
                        // Push the merge
                        console.log(`📤 Pushing merge of ${branch}...`);
                        gitCommand('git push origin main');
                    } else {
                        failed++;
                    }
                } else {
                    console.log(`⏭️  Skipping ${branch} due to conflicts`);
                    skipped++;
                }
                
                // Small delay between merges
                await new Promise(resolve => setTimeout(resolve, 1000));
                
            } catch (error) {
                console.log(`❌ Error processing ${branch}: ${error.message}`);
                failed++;
            }
        }
        
        console.log(`\n🎉 Comprehensive merge process completed!`);
        console.log(`📊 Results:`);
        console.log(`   - Total processed: ${branches.length}`);
        console.log(`   - Successfully merged: ${merged}`);
        console.log(`   - Failed: ${failed}`);
        console.log(`   - Skipped: ${skipped}`);
        
        // Create summary
        const summary = {
            timestamp: new Date().toISOString(),
            total: branches.length,
            merged,
            failed,
            skipped,
            branches: branches.map(branch => ({
                name: branch,
                status: 'processed'
            }))
        };
        
        fs.writeFileSync('/workspace/merge-summary.json', JSON.stringify(summary, null, 2));
        console.log(`📄 Summary saved to merge-summary.json`);
        
    } catch (error) {
        console.log(`❌ Fatal error: ${error.message}`);
    }
}

// Run the script
main().catch(console.error);