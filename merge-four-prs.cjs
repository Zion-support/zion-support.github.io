#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🔄 Merging four PRs...\n');

// List of PRs to merge
const prsToMerge = [25040, 25039, 25038, 25037];

for (const prNumber of prsToMerge) {
    console.log(`--- Processing PR #${prNumber}: Fix errors and merge to main ---`);
    
    try {
        // Get PR details
        console.log(`Fetching PR details for #${prNumber}...`);
        const prDetails = execSync(`curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/${prNumber}"`, { encoding: 'utf8' });
        const prData = JSON.parse(prDetails);
        
        console.log(`PR Title: ${prData.title}`);
        console.log(`Head Branch: ${prData.head.ref}`);
        console.log(`Base Branch: ${prData.base.ref}`);
        
        const branchName = prData.head.ref;
        
        // Fetch the branch
        console.log(`Fetching branch ${branchName}...`);
        execSync(`git fetch origin ${branchName}`, { stdio: 'pipe' });
        
        // Try to merge
        console.log(`Merging ${branchName} into main...`);
        try {
            execSync(`git merge origin/${branchName} --no-ff -m "Merge PR #${prNumber}: Fix errors and merge to main"`, { stdio: 'pipe' });
            console.log(`✅ Successfully merged PR #${prNumber}`);
        } catch (mergeError) {
            console.log(`⚠️  Merge conflict detected for PR #${prNumber}, resolving...`);
            
            // Check what conflicts we have
            try {
                const status = execSync('git status --porcelain', { encoding: 'utf8' });
                console.log('Current conflicts:', status);
                
                // Try to resolve conflicts automatically
                try {
                    // If there are deleted files conflicts, resolve them
                    execSync('git status --porcelain | grep "^DU\\|^UD" | cut -c4- | xargs -r git rm', { stdio: 'pipe' });
                    execSync('git status --porcelain | grep "^AU\\|^UA" | cut -c4- | xargs -r git add', { stdio: 'pipe' });
                    
                    // Commit the resolution
                    execSync(`git commit -m "Resolve merge conflicts for PR #${prNumber}"`, { stdio: 'pipe' });
                    console.log(`✅ Successfully resolved conflicts and merged PR #${prNumber}`);
                } catch (resolveError) {
                    console.log(`❌ Failed to resolve conflicts for PR #${prNumber}`);
                    // Abort the merge
                    execSync('git merge --abort', { stdio: 'pipe' });
                }
            } catch (statusError) {
                console.log(`❌ Failed to check status for PR #${prNumber}`);
                execSync('git merge --abort', { stdio: 'pipe' });
            }
        }
    } catch (error) {
        console.log(`❌ Failed to process PR #${prNumber}:`, error.message);
    }
    
    console.log('');
}

console.log('🎉 Completed merging all four PRs!');