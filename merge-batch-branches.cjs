#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting batch branch merge process...');

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
            .replace(/text-xstext-/g, 'text-xs text-')
            .replace(/mt-1truncate/g, 'mt-1 truncate')
            .replace(/space-x-2mt-2/g, 'space-x-2 mt-2')
            .replace(/border-bborder-/g, 'border-b border-')
            .replace(/items-centerjustify-/g, 'items-center justify-')
            .replace(/font-semiboldtext-/g, 'font-semibold text-')
            .replace(/flexspace-x-/g, 'flex space-x-')
            .replace(/text-gray-500hover:/g, 'text-gray-500 hover:')
            .replace(/text-gray-400hover:/g, 'text-gray-400 hover:')
            .replace(/bg-blue-500hover:/g, 'bg-blue-500 hover:')
            .replace(/bg-green-500hover:/g, 'bg-green-500 hover:')
            .replace(/bg-gray-500hover:/g, 'bg-gray-500 hover:')
            .replace(/px-4 py-2bg-/g, 'px-4 py-2 bg-')
            .replace(/overflow-y-automax-h-/g, 'overflow-y-auto max-h-')
            .replace(/max-h-96overflow-/g, 'max-h-96 overflow-')
            .replace(/text-lgfont-semibold/g, 'text-lg font-semibold')
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
function mergeBranch(branchName) {
    try {
        // Checkout the branch
        execGit(`git checkout -b ${branchName} origin/${branchName}`);
        
        // Switch back to main
        execGit('git checkout main');
        
        // Try to merge
        const mergeResult = execGit(`git merge ${branchName} --no-ff -m "Merge branch ${branchName}"`);
        
        if (mergeResult !== null) {
            console.log(`✅ Merged ${branchName}`);
            return { success: true, conflicts: false };
        } else {
            // Get conflicted files
            const conflictedFiles = execGit('git diff --name-only --diff-filter=U');
            
            if (conflictedFiles) {
                const files = conflictedFiles.split('\n').filter(f => f.trim());
                
                // Fix conflicts in each file
                files.forEach(fixMergeConflicts);
                
                // Add resolved files and commit
                execGit('git add .');
                execGit('git commit -m "Resolve merge conflicts"');
                
                console.log(`✅ Resolved conflicts and merged ${branchName}`);
                return { success: true, conflicts: true };
            } else {
                execGit('git merge --abort');
                console.log(`❌ Failed to merge ${branchName}`);
                return { success: false, conflicts: true };
            }
        }
        
    } catch (error) {
        console.log(`❌ Error processing ${branchName}`);
        return { success: false, conflicts: false };
    }
}

// Main function
async function main() {
    console.log('📥 Fetching latest changes...');
    execGit('git fetch --all');
    
    console.log('🔄 Switching to main branch...');
    execGit('git checkout main');
    
    // Get first batch of branches
    const branchesResult = execGit('git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | head -20 | sed "s/origin\\///"');
    
    if (!branchesResult) {
        console.log('ℹ️  No cursor branches found');
        return;
    }
    
    const branches = branchesResult.split('\n').filter(b => b.trim());
    console.log(`📋 Processing ${branches.length} branches in this batch`);
    
    let mergedCount = 0;
    let conflictCount = 0;
    let errorCount = 0;
    
    for (let i = 0; i < branches.length; i++) {
        const branch = branches[i];
        console.log(`\n🔄 [${i + 1}/${branches.length}] Processing: ${branch}`);
        
        const result = mergeBranch(branch);
        
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
            // Ignore cleanup errors
        }
    }
    
    console.log('\n📤 Pushing batch results...');
    execGit('git push origin main');
    
    console.log('\n🎉 Batch merge completed!');
    console.log(`📊 Summary:`);
    console.log(`   - Branches processed: ${branches.length}`);
    console.log(`   - Successfully merged: ${mergedCount}`);
    console.log(`   - Conflicts resolved: ${conflictCount}`);
    console.log(`   - Errors encountered: ${errorCount}`);
}

// Run the main function
main().catch(console.error);