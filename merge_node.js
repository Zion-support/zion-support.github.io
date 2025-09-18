#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

function runCommand(command, description) {
    console.log(`\n🔄 ${description}`);
    console.log(`📝 Command: ${command}`);
    
    try {
        const output = execSync(command, { 
            cwd: '/workspace',
            encoding: 'utf8',
            stdio: 'pipe',
            timeout: 30000 // 30 second timeout
        });
        
        console.log(`✅ Success: ${description}`);
        if (output.trim()) {
            console.log(`📤 Output: ${output.trim()}`);
        }
        return true;
    } catch (error) {
        console.log(`❌ Error: ${description}`);
        if (error.stdout) {
            console.log(`📤 STDOUT: ${error.stdout}`);
        }
        if (error.stderr) {
            console.log(`🚨 STDERR: ${error.stderr}`);
        }
        return false;
    }
}

async function main() {
    console.log('🚀 Starting Git Merge Process...');
    console.log('=' * 50);
    
    // Check current status
    if (!runCommand('git status --porcelain', 'Check current status')) {
        console.log('❌ Failed to check status');
        return false;
    }
    
    // Get current branch
    if (!runCommand('git branch --show-current', 'Get current branch')) {
        console.log('❌ Failed to get current branch');
        return false;
    }
    
    // Switch to main
    if (!runCommand('git checkout main', 'Switch to main branch')) {
        console.log('❌ Failed to switch to main');
        return false;
    }
    
    // Pull latest changes
    if (!runCommand('git pull origin main', 'Pull latest changes')) {
        console.log('⚠️  Warning: Failed to pull from origin');
    }
    
    // Merge the feature branch
    if (!runCommand('git merge cursor/fix-netlify-build-and-merge-to-main-133c', 'Merge feature branch')) {
        console.log('❌ Failed to merge branch');
        return false;
    }
    
    // Push to origin
    if (!runCommand('git push origin main', 'Push to origin')) {
        console.log('❌ Failed to push to origin');
        return false;
    }
    
    console.log('\n🎉 Merge completed successfully!');
    return true;
}

main().then(success => {
    if (success) {
        console.log('\n✅ All done!');
        process.exit(0);
    } else {
        console.log('\n💥 Merge failed!');
        process.exit(1);
    }
}).catch(error => {
    console.error('\n💥 Unexpected error:', error);
    process.exit(1);
});