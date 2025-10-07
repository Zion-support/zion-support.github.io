#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🔄 Merging single PR #25024...\n');

try {
    // Get PR details
    console.log('Fetching PR details...');
    const prDetails = execSync('curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/25024"', { encoding: 'utf8' });
    const prData = JSON.parse(prDetails);
    
    console.log(`PR Title: ${prData.title}`);
    console.log(`Head Branch: ${prData.head.ref}`);
    console.log(`Base Branch: ${prData.base.ref}`);
    console.log('');
    
    const branchName = prData.head.ref;
    
    // Fetch the branch
    console.log(`Fetching branch ${branchName}...`);
    execSync(`git fetch origin ${branchName}`, { stdio: 'pipe' });
    
    // Try to merge
    console.log(`Merging ${branchName} into main...`);
    try {
        execSync(`git merge origin/${branchName} --no-ff -m "Merge PR #25024: Fix errors and merge to main"`, { stdio: 'pipe' });
        console.log(`✅ Successfully merged PR #25024`);
    } catch (mergeError) {
        console.log(`⚠️  Merge conflict detected for PR #25024, resolving...`);
        
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
                execSync(`git commit -m "Resolve merge conflicts for PR #25024"`, { stdio: 'pipe' });
                console.log(`✅ Successfully resolved conflicts and merged PR #25024`);
            } catch (resolveError) {
                console.log(`❌ Failed to resolve conflicts for PR #25024`);
                // Abort the merge
                execSync('git merge --abort', { stdio: 'pipe' });
            }
        } catch (statusError) {
            console.log(`❌ Failed to check status for PR #25024`);
            execSync('git merge --abort', { stdio: 'pipe' });
        }
    }
    
} catch (error) {
    console.log(`❌ Failed to process PR #25024:`, error.message);
}

console.log('\n🎉 Completed merging PR #25024!');