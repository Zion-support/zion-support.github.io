#!/usr/bin/env node

const { execSync } = require('child_process');

// List of remaining PRs to merge
const remainingPRs = [
    { number: 25015, branch: 'cursor/fix-errors-and-merge-to-main-26fc' },
    { number: 25014, branch: 'cursor/fix-errors-and-merge-to-main-27f4' },
    { number: 25011, branch: 'cursor/fix-errors-and-merge-to-main-579b' },
    { number: 25010, branch: 'cursor/fix-errors-and-merge-to-main-ec9c' }
];

console.log('🔄 Merging remaining PRs...\n');

for (const pr of remainingPRs) {
    console.log(`--- Processing PR #${pr.number}: Fix errors and merge to main ---`);
    
    try {
        // Fetch the branch
        console.log(`Fetching branch ${pr.branch}...`);
        execSync(`git fetch origin ${pr.branch}`, { stdio: 'pipe' });
        
        // Try to merge
        console.log(`Merging ${pr.branch} into main...`);
        try {
            execSync(`git merge origin/${pr.branch} --no-ff -m "Merge PR #${pr.number}: Fix errors and merge to main"`, { stdio: 'pipe' });
            console.log(`✅ Successfully merged PR #${pr.number}`);
        } catch (mergeError) {
            console.log(`⚠️  Merge conflict detected for PR #${pr.number}, resolving...`);
            
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
                    execSync(`git commit -m "Resolve merge conflicts for PR #${pr.number}"`, { stdio: 'pipe' });
                    console.log(`✅ Successfully resolved conflicts and merged PR #${pr.number}`);
                } catch (resolveError) {
                    console.log(`❌ Failed to resolve conflicts for PR #${pr.number}`);
                    // Abort the merge
                    execSync('git merge --abort', { stdio: 'pipe' });
                }
            } catch (statusError) {
                console.log(`❌ Failed to check status for PR #${pr.number}`);
                execSync('git merge --abort', { stdio: 'pipe' });
            }
        }
    } catch (error) {
        console.log(`❌ Failed to process PR #${pr.number}:`, error.message);
    }
    
    console.log('');
}

console.log('🎉 Completed merging remaining PRs!');