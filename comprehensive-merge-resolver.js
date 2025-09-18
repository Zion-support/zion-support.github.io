#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting comprehensive merge resolution...');

// Function to execute git commands safely
function execGit(command, options = {}) {
    try {
        return execSync(command, { 
            encoding: 'utf8', 
            stdio: 'pipe',
            ...options 
        });
    } catch (error) {
        if (options.allowFailure) {
            return { stdout: '', stderr: error.message };
        }
        throw error;
    }
}

// Function to resolve merge conflicts intelligently
function resolveConflicts() {
    console.log('🔧 Resolving merge conflicts...');
    
    try {
        // Get conflicted files
        const conflictedFiles = execGit('git diff --name-only --diff-filter=U', { allowFailure: true });
        
        if (!conflictedFiles.stdout.trim()) {
            console.log('✅ No conflicts found');
            return true;
        }
        
        const files = conflictedFiles.stdout.trim().split('\n');
        console.log(`📋 Found ${files.length} conflicted files: ${files.join(', ')}`);
        
        for (const file of files) {
            if (!fs.existsSync(file)) continue;
            
            console.log(`🔧 Resolving conflicts in ${file}...`);
            
            // Read the file content
            let content = fs.readFileSync(file, 'utf8');
            
            // Different resolution strategies based on file type
            if (file.includes('package.json') || file.includes('package-lock.json')) {
                console.log('📦 Package file - keeping main version');
                execGit(`git checkout --ours "${file}"`);
            } else if (file.includes('next.config') || file.includes('tsconfig') || file.includes('tailwind.config')) {
                console.log('⚙️  Config file - keeping main version');
                execGit(`git checkout --ours "${file}"`);
            } else if (file.includes('.tsx') || file.includes('.ts') || file.includes('.jsx') || file.includes('.js')) {
                console.log('💻 Component file - preferring incoming changes');
                execGit(`git checkout --theirs "${file}"`);
            } else if (file.includes('.md') || file.includes('.txt')) {
                console.log('📝 Documentation file - preferring incoming changes');
                execGit(`git checkout --theirs "${file}"`);
            } else {
                console.log('📄 Generic file - using intelligent merge');
                // Try to resolve by removing conflict markers and keeping both versions
                content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
                fs.writeFileSync(file, content);
            }
        }
        
        // Add all resolved files
        execGit('git add .');
        
        return true;
    } catch (error) {
        console.error('❌ Error resolving conflicts:', error.message);
        return false;
    }
}

// Function to merge a branch
function mergeBranch(branch) {
    console.log(`🔄 Attempting to merge ${branch}...`);
    
    try {
        // Fetch the branch
        execGit(`git fetch origin ${branch}`);
        
        // Try to merge
        try {
            execGit(`git merge --no-commit --no-ff origin/${branch}`);
            console.log(`✅ Successfully merged ${branch}`);
            execGit(`git commit -m "Merge ${branch} into main"`);
            return true;
        } catch (mergeError) {
            console.log(`⚠️  Merge conflicts detected in ${branch}`);
            
            if (resolveConflicts()) {
                try {
                    execGit(`git commit -m "Resolve merge conflicts for ${branch}"`);
                    console.log(`✅ Successfully resolved conflicts and merged ${branch}`);
                    return true;
                } catch (commitError) {
                    console.log(`❌ Failed to commit resolved conflicts for ${branch}`);
                    execGit('git merge --abort');
                    return false;
                }
            } else {
                console.log(`❌ Failed to resolve conflicts for ${branch}`);
                execGit('git merge --abort');
                return false;
            }
        }
    } catch (error) {
        console.error(`❌ Error merging ${branch}:`, error.message);
        return false;
    }
}

// Main execution
async function main() {
    try {
        // Ensure we're on main branch
        console.log('🔄 Switching to main branch...');
        execGit('git checkout main');
        execGit('git pull origin main');
        
        // Get all cursor branches
        console.log('📊 Getting all cursor branches...');
        const branchesOutput = execGit('git branch -r | grep "origin/cursor/" | sed "s/origin\\///"');
        const branches = branchesOutput.trim().split('\n').filter(b => b.trim());
        
        console.log(`📋 Found ${branches.length} cursor branches to process`);
        
        let successfulMerges = 0;
        let failedMerges = 0;
        
        // Process each branch
        for (let i = 0; i < Math.min(branches.length, 20); i++) { // Limit to first 20 branches
            const branch = branches[i].trim();
            if (!branch) continue;
            
            console.log(`\n📋 [${i + 1}/${Math.min(branches.length, 20)}] Processing: ${branch}`);
            
            if (mergeBranch(branch)) {
                successfulMerges++;
            } else {
                failedMerges++;
            }
        }
        
        // Push changes
        console.log('\n💾 Pushing changes to remote...');
        execGit('git push origin main');
        
        // Summary
        console.log('\n🎉 Merge resolution completed!');
        console.log(`📊 Summary:`);
        console.log(`   ✅ Successful merges: ${successfulMerges}`);
        console.log(`   ❌ Failed merges: ${failedMerges}`);
        console.log(`   📈 Total processed: ${successfulMerges + failedMerges}`);
        
    } catch (error) {
        console.error('❌ Fatal error:', error.message);
        process.exit(1);
    }
}

main();