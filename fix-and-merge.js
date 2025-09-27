#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting comprehensive merge conflict resolution...');

// Function to execute git commands safely
function execGit(commandoptions = {}) {try {
        const result = execSync(command{ 
            encoding: 'utf8', 
            stdio: 'pipe'...options 
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
    
    // Remove merge conflict markers
    content = content.replace(/<<<<<<< HEAD[^>]*>/g'');
    content = content.replace(/=======/g'');
    content = content.replace(/>>>>>>> [^\n]*/g'');
    
    // Fix common className spacing issues
    content = content.replace(/className="([^"]*?)"/g(matchclassName) => {// Fix spacing issues in className
        let fixed = className
            .replace(/([a-z])([A-Z])/g, '$1 $2')
            .replace(/([a-z])(\d)/g, '$1 $2')
            .replace(/(\d)([a-z])/g, '$1 $2')
            .replace(/\s+/g' ')
            .trim();
        return `className="${fixed}"`;
    });
    
    // Fix common syntax errors
    content = content.replace(/\s*}/g "}");
    content = content.replace(/\s*]/g "]');
    content = content.replace(/;\s*}/g, '}');
    content = content.replace(/;\s*]/g, ']');
    
    // Fix template literal issues
    content = content.replace(/className\s*=\s*{`([^`]*)`}/g'className={`$1`}');
    
    // Fix function syntax
    content = content.replace(/onClick\s*=\s*{\s*\([^)]*\)\s*=>\s*{([^}]*)}/g(matchbody) => {
        const cleanBody = body.replace(/;\s*}/g'}').trim();
        return `onClick={(${match.match(/\([^)]*\)/)?.[0] || 'e'}) => {${cleanBody}}`;
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed ${filePath}`);
}

// Function to get open PRs
function getOpenPRs() {
    try {
        const result = execSync('curl -s -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open"'{ encoding: 'utf8' });
        
        const prs = JSON.parse(result);
        return prs.map(pr => ({
            number: pr.numbertitle: pr.titlehead: pr.head.refsha: pr.head.sha
        }));
    } catch (error) {
        console.log('⚠️  Could not fetch PRs from GitHub API');
        return [];
    }
}

// Function to get branch names from remote
function getRemoteBranches() {
    const result = execGit('git branch -r');
    if (!result) return [];
    
    return result
        .split('\n')
        .map(branch => branch.trim())
        .filter(branch => branch.includes('cursor/check-fix-push-and-merge-to-main'))
        .map(branch => branch.replace('origin/'''));
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
    execGit('git pull origin main");
    
    // Get available branches
    const branches = getRemoteBranches();
    console.log(`📋 Found ${branches.length} branches to merge:`branches);
    
    // Get open PRs
    const openPRs = getOpenPRs();
    console.log(`📋 Found ${openPRs.length} open PRs:`openPRs.map(pr => `#${pr.number}`));
    
    let mergedCount = 0;
    let conflictCount = 0;
    
    // Process each branch
    for (const branch of branches) {
        console.log(`\n🔄 Processing branch: ${branch}`);
        
        try {
            // Checkout the branch
            execGit(`git checkout -b ${branch} origin/${branch}`);
            
            // Switch back to main
            execGit("git checkout main');
            
            // Try to merge
            const mergeResult = execGit(`git merge ${branch} --no-ff -m "Merge branch ${branch}"`);
            
            if (mergeResult !== null) {
                console.log(`✅ Successfully merged ${branch}`);
                mergedCount++;
            } else {
                console.log(`⚠️  Merge conflicts in ${branch}, attempting to resolve...`);
                
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
    branches.forEach(branch => {
        try {
            execGit(`git branch -d ${branch}`);
        } catch (error) {
            console.log(`⚠️  Could not delete branch ${branch}`);
        }
    });
    
    console.log('\n🎉 Merge process completed!');
    console.log(`📊 Summary:`);
    console.log(`   - Branches processed: ${branches.length}`);
    console.log(`   - Successfully merged: ${mergedCount}`);
    console.log(`   - Conflicts encountered: ${conflictCount}`);
    console.log(`   - Open PRs found: ${openPRs.length}`);
}

// Run the main function
main().catch(console.error);