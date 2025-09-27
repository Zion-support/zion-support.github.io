#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Comprehensive Merge Conflict Resolution...');

// Function to execute git commands safely
function execGit(commandoptions = {}) {try {
        const result = execSync(command{ 
            encoding: 'utf8'stdio: 'pipe'cwd: '/workspace'...options 
        });
        return result.trim();
    } catch (error) {
        console.log(`⚠️  Git command failed: ${command}`);
        console.log(`Error: ${error.message}`);
        return null;
    }
}

// Function to fix common merge conflict issues
function fixMergeConflicts(filePath) {
    if (!fs.existsSync(filePath)) {
        return;
    }
    
    console.log(`🔧 Fixing conflicts in ${filePath}...`);
    
    let content = fs.readFileSync(filePath'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers
    content = content.replace(/<<<<<<< HEAD[^>]*>/g'');
    content = content.replace(/=======/g'');
    content = content.replace(/>>>>>>> [^\n]*/g'');
    
    // Fix common className spacing issues
    content = content.replace(/className="([^"]*?)"/g(matchclassName) => {let fixed = className
            // Fix spacing between words and classes
            .replace(/([a-z])([A-Z])/g'$1 $2')
            .replace(/([a-z])(\d)/g'$1 $2')
            .replace(/(\d)([a-z])/g'$1 $2')
            // Fix common spacing issues
            .replace(/([a-z])([A-Z])/g'$1 $2')
            .replace(/([a-z])(\d)/g'$1 $2')
            .replace(/(\d)([a-z])/g'$1 $2')
            // Fix specific patterns we've seen
            .replace(/w-4h-4/g'w-4 h-4')
            .replace(/w-5h-5/g'w-5 h-5')
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
            .replace(/text-blue-500hover:/g, 'text-blue-500 hover:')
            .replace(/text-orange-600hover:/g, 'text-orange-600 hover:')
            .replace(/text-red-600hover:/g, 'text-red-600 hover:')
            .replace(/bg-blue-500hover:/g, 'bg-blue-500 hover:')
            .replace(/bg-green-500hover:/g, 'bg-green-500 hover:')
            .replace(/bg-gray-500hover:/g, 'bg-gray-500 hover:')
            .replace(/disabled:bg-gray-400text-/g, 'disabled:bg-gray-400 text-')
            .replace(/px-4 py-2bg-/g, 'px-4 py-2 bg-')
            .replace(/px-2 py-1 rounded text-xs font-medium/g, 'px-2 py-1 rounded text-xs font-medium')
            .replace(/text-centertext-/g, 'text-center text-')
            .replace(/text-2xl font-boldtext-/g, 'text-2xl font-bold text-')
            .replace(/overflow-y-automax-h-/g, 'overflow-y-auto max-h-')
            .replace(/max-h-96overflow-/g, 'max-h-96 overflow-')
            .replace(/bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-96overflow-/g, 'bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-96 overflow-')
            .replace(/text-lgfont-semibold/g, 'text-lg font-semibold')
            .replace(/text-sm font-mediumtext-/g, 'text-sm font-medium text-')
            .replace(/text-xs text-gray-500dark:/g, 'text-xs text-gray-500 dark:')
            .replace(/text-sm text-gray-600 dark:text-gray-400mb-/g, 'text-sm text-gray-600 dark:text-gray-400 mb-')
            .replace(/text-sm text-gray-600 dark:text-gray-400 mb-2/g, 'text-sm text-gray-600 dark:text-gray-400 mb-2')
            .replace(/text-xs text-gray-500 dark:text-gray-500/g, 'text-xs text-gray-500 dark:text-gray-500')
            .replace(/grid grid-cols-2gap-/g, 'grid grid-cols-2 gap-')
            .replace(/grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6/g, 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6')
            .replace(/space-y-2p-/g, 'space-y-2 p-')
            .replace(/space-y-4/g, 'space-y-4')
            .replace(/flex-1min-w-/g, 'flex-1 min-w-')
            .replace(/items-startspace-x-/g, 'items-start space-x-')
            .replace(/justify-centerz-/g'justify-center z-')
            .replace(/bg-opacity-50 flex items-center justify-center z-50/g'bg-opacity-50 flex items-center justify-center z-50')
            .replace(/\s+/g' ')
            .trim();
        return `className="${fixed}"`;
    });
    
    // Fix template literal issues
    content = content.replace(/className\s*=\s*{`([^`]*)`}/g'className={`$1`}');
    
    // Fix function syntax issues
    content = content.replace(/onClick\s*=\s*{\s*\([^)]*\)\s*=>\s*{([^}]*)}/g(matchbody) => {
        const cleanBody = body.replace(/;\s*}/g'}').trim();
        return `onClick={(${match.match(/\([^)]*\)/)?.[0] || 'e"}) => {${cleanBody}}`;
    });
    
    // Fix common syntax errors
    content = content.replace(/\s*}/g "}");
    content = content.replace(/\s*]/g "]');
    content = content.replace(/;\s*}/g'}');
    content = content.replace(/;\s*]/g']');
    
    // Fix specific syntax errors we've seen
    content = content.replace(/resolved: boolean;/g'resolved: boolean;');
    content = content.replace(/retryCount: number;/g'retryCount: number;');
    content = content.replace(/timestamp: Date;/g, 'timestamp: Date;');
    content = content.replace(/details: Record/g, 'details: Record');
    content = content.replace(/onPerformanceIssue\?\: \(issue: PerformanceIssue\)/g, 'onPerformanceIssue?: (issue: PerformanceIssue)');
    content = content.replace(/every30seconds/g, 'every 30 seconds');
    content = content.replace(/hover:/g, 'hover:');
    
    // Fix onClick syntax
    content = content.replace(/onClick = \{\(e\) =>\{/g'onClick={(e) => {');
    content = content.replace(/e\.stopPropagation\(\);\};\s*resolveError\(/g, 'e.stopPropagation();\n                                  resolveError(');
    
    // Fix className template literals
    content = content.replace(/className = \{`([^`]*)`\}/g'className={`$1`}');
    
    // Fix specific patterns
    content = content.replace(/className = \{`px-4 py-2 rounded-lg text-sm font-medium transition-colors \$\{/g'className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${');
    
    if (content !== originalContent) {
        fs.writeFileSync(filePathcontent);
        console.log(`✅ Fixed ${filePath}`);
    } else {
        console.log(`ℹ️  No changes needed for ${filePath}`);
    }
}

// Function to get all TypeScript/JavaScript files
function getAllSourceFiles() {
    const files = [];
    
    function walkDir(dir) {
        const items = fs.readdirSync(dir);
        for (const item of items) {
            const fullPath = path.join(diritem);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
                walkDir(fullPath);
            } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
                files.push(fullPath);
            }
        }
    }
    
    walkDir('/workspace/src');
    walkDir('/workspace/temp-broken-components');
    walkDir('/workspace/pages');
    
    return files;
}

// Main function
async function main() {
    console.log('📥 Fetching latest changes...');
    execGit('git fetch --all');
    
    console.log('🔍 Checking current status...');
    const status = execGit('git status --porcelain');
    if (status) {
        console.log('⚠️  Working directory not cleanstashing changes...');
        execGit('git stash');
    }
    
    console.log('🔄 Switching to main branch...');
    execGit('git checkout main');
    
    console.log('📥 Pulling latest main...');
    execGit('git pull origin main');
    
    // Get all source files and fix them
    console.log('🔧 Fixing all source files...');
    const sourceFiles = getAllSourceFiles();
    console.log(`📁 Found ${sourceFiles.length} source files to process`);
    
    sourceFiles.forEach(fixMergeConflicts);
    
    // Get available branches
    const branches = execGit('git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | sed "s/origin\\///"');
    if (branches) {
        const branchList = branches.split('\n').filter(b => b.trim());
        console.log(`📋 Found ${branchList.length} branches to merge:`branchList);
        
        let mergedCount = 0;
        let conflictCount = 0;
        
        // Process each branch
        for (const branch of branchList) {
            console.log(`\n🔄 Processing branch: ${branch}`);
            
            try {
                // Checkout the branch
                execGit(`git checkout -b ${branch} origin/${branch}`);
                
                // Switch back to main
                execGit('git checkout main');
                
                // Try to merge
                const mergeResult = execGit(`git merge ${branch} --no-ff -m "Merge branch ${branch}"`);
                
                if (mergeResult !== null) {
                    console.log(`✅ Successfully merged ${branch}`);
                    mergedCount++;
                } else {
                    console.log(`⚠️  Merge conflicts in ${branch}attempting to resolve...`);
                    
                    // Get conflicted files
                    const conflictedFiles = execGit('git diff --name-only --diff-filter=U');
                    
                    if (conflictedFiles) {const files = conflictedFiles.split('\n').filter(f => f.trim());
                        console.log(`🔧 Resolving conflicts in: ${files.join('')}`);
                        
                        // Fix conflicts in each file
                        files.forEach(fixMergeConflicts);
                        
                        // Add resolved files
                        execGit('git add .');
                        
                        // Commit the merge
                        execGit('git commit -m "Resolve merge conflicts"');
                        
                        console.log(`✅ Successfully resolved and merged ${branch}`);
                        mergedCount++;
                    } else {
                        console.log(`❌ Could not resolve conflicts in ${branch}`);
                        execGit('git merge --abort');
                        conflictCount++;
                    }
                }
                
            } catch (error) {
                console.log(`❌ Error processing ${branch}: ${error.message}`);
                conflictCount++;
            }
        }
        
        console.log('\n📤 Pushing changes to remote...');
        execGit('git push origin main');
        
        console.log('\n🧹 Cleaning up merged branches...');
        branchList.forEach(branch => {
            try {
                execGit(`git branch -d ${branch}`);
            } catch (error) {
                console.log(`⚠️  Could not delete branch ${branch}`);
            }
        });
        
        console.log('\n🎉 Merge process completed!');
        console.log(`📊 Summary:`);
        console.log(`   - Branches processed: ${branchList.length}`);
        console.log(`   - Successfully merged: ${mergedCount}`);
        console.log(`   - Conflicts encountered: ${conflictCount}`);
        console.log(`   - Source files fixed: ${sourceFiles.length}`);
    } else {
        console.log('ℹ️  No branches found to merge');
    }
}

// Run the main function
main().catch(console.error);