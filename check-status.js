const { execSync } = require('child_process');

try {
    console.log('🔍 Checking repository status...');
    
    // Check current branch
    const currentBranch = execSync('git branch --show-current', { encoding: 'utf8', timeout: 5000 }).trim();
    console.log(`📍 Current branch: ${currentBranch}`);
    
    // Check git status
    const status = execSync('git status --porcelain', { encoding: 'utf8', timeout: 5000 });
    if (status.trim()) {
        console.log('📝 Uncommitted changes:');
        console.log(status);
    } else {
        console.log('✅ Working directory is clean');
    }
    
    // Check if there are any merge conflicts
    const mergeStatus = execSync('git status', { encoding: 'utf8', timeout: 5000 });
    if (mergeStatus.includes('All conflicts fixed')) {
        console.log('✅ All merge conflicts are resolved');
    } else if (mergeStatus.includes('You have unmerged paths')) {
        console.log('⚠️ There are unmerged paths (conflicts)');
    } else {
        console.log('✅ No merge conflicts detected');
    }
    
    // Get recent commits
    const recentCommits = execSync('git log --oneline -5', { encoding: 'utf8', timeout: 5000 });
    console.log('\n📋 Recent commits:');
    console.log(recentCommits);
    
} catch (error) {
    console.error('❌ Error checking status:', error.message);
}