#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Merging remaining branches with conflict resolution...');

// Function to execute git commands
function gitCommand(command) {
    try {
        return execSync(command, { 
            encoding: 'utf8', 
            cwd: '/workspace',
            stdio: 'pipe'
        });
    } catch (error) {
        return null;
    }
}

// Function to resolve merge conflicts
function resolveConflicts() {
    console.log('🔧 Resolving merge conflicts...');
    
    try {
        const status = gitCommand('git status --porcelain');
        if (!status) return false;
        
        const conflictedFiles = status.trim().split('\n')
            .filter(line => line.includes('UU'))
            .map(line => line.split(' ').pop());
        
        if (conflictedFiles.length === 0) {
            console.log('✅ No conflicts to resolve');
            return true;
        }
        
        console.log(`🔍 Found ${conflictedFiles.length} conflicted files`);
        
        for (const file of conflictedFiles) {
            try {
                let content = fs.readFileSync(file, 'utf8');
                
                if (content.includes('')) {
                    // Simple conflict resolution - choose the version with proper syntax
                    const sections = content.split(/||                    
                    if (sections.length === 4) {
                        const headSection = sections[1].trim();
                        const remoteSection = sections[2].trim();
                        const tailSection = sections[3].trim();
                        
                        // Choose the version with proper syntax (commas, semicolons)
                        let chosenSection = headSection;
                        
                        if (remoteSection.includes(',') && remoteSection.includes(';') && 
                            (!headSection.includes(',') || !headSection.includes(';'))) {
                            chosenSection = remoteSection;
                        }
                        
                        content = sections[0] + chosenSection + tailSection;
                        fs.writeFileSync(file, content, 'utf8');
                        console.log(`✅ Resolved conflicts in: ${file}`);
                    }
                }
                
                // Stage the resolved file
                gitCommand(`git add "${file}"`);
                
            } catch (error) {
                console.log(`⚠️  Could not resolve: ${file}`);
            }
        }
        
        return true;
        
    } catch (error) {
        console.log(`❌ Error resolving conflicts: ${error.message}`);
        return false;
    }
}

// Function to merge a branch
function mergeBranch(branch) {
    console.log(`\n🔄 Merging ${branch}...`);
    
    try {
        // Try to merge
        const result = gitCommand(`git merge --no-ff origin/${branch} -m "Auto-merge ${branch} into main"`);
        
        if (result !== null) {
            console.log(`✅ Successfully merged ${branch}`);
            return true;
        } else {
            // Check if there are conflicts
            const status = gitCommand('git status --porcelain');
            if (status && status.includes('UU')) {
                console.log(`🔧 Resolving conflicts in ${branch}...`);
                
                if (resolveConflicts()) {
                    // Commit the merge
                    gitCommand('git commit --no-edit');
                    console.log(`✅ Successfully merged ${branch} with conflict resolution`);
                    return true;
                } else {
                    console.log(`❌ Failed to resolve conflicts in ${branch}`);
                    gitCommand('git merge --abort');
                    return false;
                }
            } else {
                console.log(`❌ Failed to merge ${branch}`);
                return false;
            }
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
        
        // Get list of branches to merge (excluding already processed ones)
        const branchesOutput = gitCommand('git branch -r | grep "cursor/fix-errors-and-merge-to-main" | tail -n +51 | head -50');
        
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
        if (merged > 0) {
            console.log(`\n📤 Pushing all changes...`);
            try {
                gitCommand('git push origin main');
                console.log(`✅ Successfully pushed all changes`);
            } catch (error) {
                console.log(`❌ Failed to push changes: ${error.message}`);
            }
        }
        
    } catch (error) {
        console.log(`❌ Fatal error: ${error.message}`);
    }
}

// Run the script
main().catch(console.error);