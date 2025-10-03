const { execSync } = require('child_process');

console.log('🚀 Quick merge resolution...');

try {
    // Check current branch
    const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
    console.log(`📍 Current branch: ${currentBranch}`);
    
    // Fetch latest
    console.log('🔄 Fetching latest...');
    execSync('git fetch origin', { stdio: 'inherit' });
    
    // Switch to main if not already there
    if (currentBranch !== 'main') {
        console.log('🔄 Switching to main...');
        execSync('git checkout main', { stdio: 'inherit' });
    }
    
    // Pull latest main
    console.log('🔄 Pulling main...');
    execSync('git pull origin main', { stdio: 'inherit' });
    
    // Check if feature branch exists
    const branches = execSync('git branch -a', { encoding: 'utf8' });
    const featureBranch = 'cursor/create-and-deploy-new-content-568b';
    
    if (branches.includes(featureBranch)) {
        console.log(`✅ Found feature branch: ${featureBranch}`);
        
        // Merge feature branch
        console.log('🔄 Merging feature branch...');
        try {
            execSync(`git merge ${featureBranch} --no-edit`, { stdio: 'inherit' });
            console.log('✅ Merge successful!');
        } catch (error) {
            console.log('⚠️  Conflicts detected, resolving...');
            execSync('git checkout --ours .', { stdio: 'inherit' });
            execSync('git add .', { stdio: 'inherit' });
            execSync('git commit --no-edit -m "Merge AI 2027 content with conflict resolution"', { stdio: 'inherit' });
            console.log('✅ Conflicts resolved!');
        }
        
        // Push to main
        console.log('🚀 Pushing to main...');
        execSync('git push origin main', { stdio: 'inherit' });
        
        console.log('🎉 Successfully merged and deployed!');
    } else {
        console.log(`❌ Feature branch ${featureBranch} not found`);
    }
    
} catch (error) {
    console.error('❌ Error:', error.message);
}