#!/usr/bin/env node

const { execSync } = require('child_process');

function runCommand(command, description) {
    try {
        console.log(`🔄 ${description}...`);
        const result = execSync(command, { 
            encoding: 'utf8', 
            stdio: 'pipe',
            timeout: 30000 // 30 second timeout
        });
        console.log(`✅ ${description} completed`);
        return result;
    } catch (error) {
        console.error(`❌ ${description} failed:`, error.message);
        throw error;
    }
}

async function resolveGitIssues() {
    try {
        console.log('🚀 Starting git issue resolution...');
        
        // Set git configuration
        runCommand('git config pull.rebase false', 'Setting git pull strategy');
        runCommand('git config pull.ff false', 'Setting git fast-forward strategy');
        
        // Check status
        const status = runCommand('git status --porcelain', 'Checking git status');
        
        if (status.trim()) {
            runCommand('git add .', 'Adding files to staging');
            runCommand('git commit -m "Fix: Resolve configuration and update files"', 'Committing changes');
        }
        
        // Pull latest changes
        runCommand('git pull origin main', 'Pulling latest changes');
        
        // Push changes
        runCommand('git push origin main', 'Pushing changes');
        
        console.log('🎉 All git issues resolved successfully!');
        
    } catch (error) {
        console.error('💥 Failed to resolve git issues:', error.message);
        process.exit(1);
    }
}

resolveGitIssues();