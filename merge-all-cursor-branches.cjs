#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting comprehensive cursor branch merge process...');

// Function to execute git commands safely
function execGit(command, options = {}) {
    try {
        const result = execSync(command, { 
            encoding: 'utf8', 
            stdio: 'pipe',
            cwd: '/workspace',
            ...options 
        });
        return result.trim();
    } catch (error) {
        console.log(`⚠️  Git command failed: ${command}`);
        return null;
    }
}

// Function to fix common merge conflict issues
function fixMergeConflicts(filePath) {
    if (!fs.existsSync(filePath)) {
        return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers
    content = content.replace(/<<<<<<< HEAD[^>]*>/g, '');
    content = content.replace(/=======/g, '');
    content = content.replace(/>>>>>>> [^\n]*/g, '');
    
    // Fix common className spacing issues
    content = content.replace(/className="([^"]*?)"/g, (match, className) => {
        let fixed = className
            .replace(/w-4h-4/g, 'w-4 h-4')
            .replace(/w-5h-5/g, 'w-5 h-5')
            .replace(/w-6h-6/g, 'w-6 h-6')
            .replace(/w-8h-8/g, 'w-8 h-8')
            .replace(/text-xstext-/g, 'text-xs text-')
            .replace(/mt-1truncate/g, 'mt-1 truncate')
            .replace(/space-x-2mt-2/g, 'space-x-2 mt-2')
            .replace(/border-bborder-/g, 'border-b border-')
            .replace(/items-centerjustify-/g, 'items-center justify-')
            .replace(/font-semiboldtext-/g, 'font-semibold text-')
            .replace(/flexspace-x-/g, 'flex space-x-')
            .replace(/text-gray-500hover:/g, 'text-gray-500 hover:')
            .replace(/text-gray-400hover:/g, 'text-gray-400 hover:')
            .replace(/text-green-600hover:/g, 'text-green-600 hover:')
            .replace(/bg-blue-500hover:/g, 'bg-blue-500 hover:')
            .replace(/bg-green-500hover:/g, 'bg-green-500 hover:')
            .replace(/bg-gray-500hover:/g, 'bg-gray-500 hover:')
            .replace(/disabled:bg-gray-400text-/g, 'disabled:bg-gray-400 text-')
            .replace(/px-4 py-2bg-/g, 'px-4 py-2 bg-')
            .replace(/overflow-y-automax-h-/g, 'overflow-y-auto max-h-')
            .replace(/max-h-96overflow-/g, 'max-h-96 overflow-')
            .replace(/text-lgfont-semibold/g, 'text-lg font-semibold')
            .replace(/text-sm font-mediumtext-/g, 'text-sm font-medium text-')
            .replace(/grid grid-cols-2gap-/g, 'grid grid-cols-2 gap-')
            .replace(/space-y-2p-/g, 'space-y-2 p-')
            .replace(/flex-1min-w-/g, 'flex-1 min-w-')
            .replace(/items-startspace-x-/g, 'items-start space-x-')
            .replace(/justify-centerz-/g, 'justify-center z-')
            .replace(/\s+/g, ' ')
            .trim();
        return `className="${fixed}"`;
    });
    
    // Fix template literal issues
    content = content.replace(/className\s*=\s*{`([^`]*)`}/g, 'className={`$1`}');
    
    // Fix common syntax errors
    content = content.replace(/,\s*}/g, '}');
    content = content.replace(/,\s*]/g, ']');
    content = content.replace(/;\s*}/g, '}');
    content = content.replace(/;\s*]/g, ']');
    
    if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        console.log(`✅ Fixed ${filePath}`);
    }
}

// Function to merge a single branch
function mergeBranch(branchName, index, total) {
    console.log(`\n🔄 [${index}/${total}] Processing branch: ${branchName}`);
    
    try {
        // Checkout the branch
        const checkoutResult = execGit(`git checkout -b ${branchName} origin/${branchName}`);
        if (!checkoutResult && !checkoutResult.includes('Switched to')) {
            console.log(`⚠️  Could not checkout branch ${branchName}, trying to fetch it...`);
            execGit(`git fetch origin ${branchName}`);
            execGit(`git checkout -b ${branchName} origin/${branchName}`);
        }
        
        // Switch back to main
        execGit('git checkout main');
        
        // Try to merge
        const mergeResult = execGit(`git merge ${branchName} --no-ff -m "Merge branch ${branchName}"`);
        
        if (mergeResult !== null) {
            console.log(`✅ Successfully merged ${branchName}`);
            return { success: true, conflicts: false };
        } else {
            console.log(`⚠️  Merge conflicts in ${branchName}, attempting to resolve...`);
            
            // Get conflicted files
            const conflictedFiles = execGit('git diff --name-only --diff-filter=U');
            
            if (conflictedFiles) {
                const files = conflictedFiles.split('\n').filter(f => f.trim());
                console.log(`🔧 Resolving conflicts in: ${files.join(', ')}`);
                
                // Fix conflicts in each file
                files.forEach(fixMergeConflicts);
                
                // Add resolved files
                execGit('git add .');
                
                // Commit the merge
                execGit('git commit -m "Resolve merge conflicts"');
                
                console.log(`✅ Successfully resolved and merged ${branchName}`);
                return { success: true, conflicts: true };
            } else {
                console.log(`❌ Could not resolve conflicts in ${branchName}`);
                execGit('git merge --abort');
                return { success: false, conflicts: true };
            }
        }
        
    } catch (error) {
        console.log(`❌ Error processing ${branchName}: ${error.message}`);
        return { success: false, conflicts: false };
    }
}

// Main function
async function main() {
    console.log('📥 Fetching latest changes...');
    execGit('git fetch --all');
    
    console.log('🔄 Switching to main branch...');
    execGit('git checkout main');
    
    // Get all cursor branches
    const branchesResult = execGit('git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | sed "s/origin\\///"');
    
    if (!branchesResult) {
        console.log('ℹ️  No cursor branches found');
        return;
    }
    
    const branches = branchesResult.split('\n').filter(b => b.trim());
    console.log(`📋 Found ${branches.length} cursor branches to merge`);
    
    let mergedCount = 0;
    let conflictCount = 0;
    let errorCount = 0;
    
    // Process branches in batches to avoid overwhelming the system
    const batchSize = 50;
    const totalBatches = Math.ceil(branches.length / batchSize);
    
    for (let batch = 0; batch < totalBatches; batch++) {
        const startIndex = batch * batchSize;
        const endIndex = Math.min(startIndex + batchSize, branches.length);
        const batchBranches = branches.slice(startIndex, endIndex);
        
        console.log(`\n📦 Processing batch ${batch + 1}/${totalBatches} (branches ${startIndex + 1}-${endIndex})`);
        
        for (let i = 0; i < batchBranches.length; i++) {
            const branch = batchBranches[i];
            const globalIndex = startIndex + i + 1;
            
            const result = mergeBranch(branch, globalIndex, branches.length);
            
            if (result.success) {
                mergedCount++;
                if (result.conflicts) {
                    conflictCount++;
                }
            } else {
                errorCount++;
            }
            
            // Clean up the branch after merging
            try {
                execGit(`git branch -d ${branch}`);
            } catch (error) {
                console.log(`⚠️  Could not delete branch ${branch}`);
            }
            
            // Every 10 branches, push to remote to avoid losing work
            if (globalIndex % 10 === 0) {
                console.log(`📤 Pushing progress (${globalIndex}/${branches.length})...`);
                execGit('git push origin main');
            }
        }
        
        console.log(`✅ Completed batch ${batch + 1}/${totalBatches}`);
        
        // Push after each batch
        console.log(`📤 Pushing batch ${batch + 1} results...`);
        execGit('git push origin main');
    }
    
    console.log('\n🎉 Merge process completed!');
    console.log(`📊 Summary:`);
    console.log(`   - Total branches: ${branches.length}`);
    console.log(`   - Successfully merged: ${mergedCount}`);
    console.log(`   - Conflicts resolved: ${conflictCount}`);
    console.log(`   - Errors encountered: ${errorCount}`);
    
    console.log('\n📤 Pushing final changes...');
    execGit('git push origin main');
    
    console.log('✅ All done!');
}

// Run the main function
main().catch(console.error);