const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting merge conflict resolution and PR merging process...');

try {
    // Check current status
    console.log('📊 Checking current git status...');
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    console.log('Status:', status);

    // Check current branch
    const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
    console.log('🌿 Current branch:', currentBranch);

    // If there are uncommitted changes, commit them
    if (status.trim()) {
        console.log('📝 Found uncommitted changes, adding them...');
        execSync('git add .', { stdio: 'inherit' });
        execSync('git commit -m "Auto-commit: Resolve conflicts and prepare for merge"', { stdio: 'inherit' });
    }

    // Fetch latest changes
    console.log('🔄 Fetching latest changes from remote...');
    execSync('git fetch origin', { stdio: 'inherit' });

    // Switch to main if not already there
    if (currentBranch !== 'main') {
        console.log('🔄 Switching to main branch...');
        execSync('git checkout main', { stdio: 'inherit' });
    }

    // Pull latest changes
    console.log('⬇️ Pulling latest changes from main...');
    try {
        execSync('git pull origin main', { stdio: 'inherit' });
    } catch (error) {
        console.log('⚠️ Pull resulted in conflicts, resolving automatically...');
        
        // Resolve conflicts by using our version for source files
        try {
            execSync('git checkout --ours src/ App.tsx package.json package-lock.json tsconfig.json', { stdio: 'inherit' });
        } catch (e) {
            console.log('Some files not found for checkout --ours');
        }
        
        // Use remote version for build files
        try {
            execSync('git checkout --theirs dist/ zion-os/.next/ zion-website/', { stdio: 'inherit' });
        } catch (e) {
            console.log('Some files not found for checkout --theirs');
        }
        
        // Add resolved files
        execSync('git add .', { stdio: 'inherit' });
        
        // Commit the resolution
        execSync('git commit -m "Resolve merge conflicts automatically"', { stdio: 'inherit' });
    }

    // Check for recent branches to merge
    console.log('🔍 Looking for branches to merge...');
    const recentBranches = execSync('git branch -r --sort=-committerdate | head -10', { encoding: 'utf8' });
    console.log('Recent branches:', recentBranches);

    // Try to merge content branches
    const contentBranches = recentBranches
        .split('\n')
        .filter(branch => branch.includes('content') || branch.includes('create') || branch.includes('deploy'))
        .filter(branch => !branch.includes('origin/main') && !branch.includes('origin/HEAD'))
        .slice(0, 3);

    for (const branch of contentBranches) {
        const cleanBranch = branch.trim();
        if (cleanBranch) {
            console.log(`🔄 Attempting to merge: ${cleanBranch}`);
            try {
                execSync(`git merge ${cleanBranch} --no-edit`, { stdio: 'inherit' });
                console.log(`✅ Successfully merged ${cleanBranch}`);
            } catch (error) {
                console.log(`⚠️ Merge conflict with ${cleanBranch}, resolving automatically...`);
                
                // Resolve conflicts
                try {
                    execSync('git checkout --ours src/ App.tsx package.json package-lock.json tsconfig.json', { stdio: 'inherit' });
                } catch (e) {
                    console.log('Some files not found for checkout --ours');
                }
                
                try {
                    execSync('git checkout --theirs dist/ zion-os/.next/ zion-website/', { stdio: 'inherit' });
                } catch (e) {
                    console.log('Some files not found for checkout --theirs');
                }
                
                execSync('git add .', { stdio: 'inherit' });
                execSync(`git commit -m "Merge ${cleanBranch} with automatic conflict resolution"`, { stdio: 'inherit' });
                console.log(`✅ Resolved conflicts and merged ${cleanBranch}`);
            }
        }
    }

    // Push changes
    console.log('⬆️ Pushing changes to remote...');
    execSync('git push origin main', { stdio: 'inherit' });

    // Test build
    console.log('🔨 Testing build...');
    execSync('npm run build', { stdio: 'inherit' });

    console.log('✅ Merge conflict resolution and PR merging completed successfully!');

} catch (error) {
    console.error('❌ Error during merge process:', error.message);
    process.exit(1);
}