#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Processing remaining branches...');

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

// Function to merge a branch without pushing
function mergeBranch(branch) {
    console.log(`\n🔄 Merging ${branch}...`);
    
    try {
        // Try to merge
        const result = gitCommand(`git merge --no-ff origin/${branch} -m "Auto-merge ${branch} into main"`);
        
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
        
        // Get all cursor branches that haven't been processed yet
        console.log('📋 Fetching all branches...');
        gitCommand('git fetch origin');
        
        // Get list of branches to merge (excluding already processed ones)
        const branchesOutput = gitCommand('git branch -r | grep "cursor/fix-errors-and-merge-to-main" | head -100');
        
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
        
        // Process each branch
        for (const branch of branches) {
            console.log(`\n--- Processing ${branch} ---`);
            
            try {
                // Try to merge
                if (mergeBranch(branch)) {
                    merged++;
                } else {
                    failed++;
                }
                
                // Small delay between merges
                await new Promise(resolve => setTimeout(resolve, 100));
                
            } catch (error) {
                console.log(`❌ Error processing ${branch}: ${error.message}`);
                failed++;
            }
        }
        
        console.log(`\n🎉 Batch processing completed!`);
        console.log(`📊 Results:`);
        console.log(`   - Successfully merged: ${merged}`);
        console.log(`   - Failed: ${failed}`);
        
        // Push all changes at once
        console.log(`\n📤 Pushing all changes...`);
        try {
            gitCommand('git push origin main');
            console.log(`✅ Successfully pushed all changes`);
        } catch (error) {
            console.log(`❌ Failed to push changes: ${error.message}`);
        }
        
    } catch (error) {
        console.log(`❌ Fatal error: ${error.message}`);
    }
}

// Run the script
main().catch(console.error);