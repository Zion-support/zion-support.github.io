#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting git issue resolution...');

try {
    // Check current status
    console.log('📊 Checking git status...');
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    
    if (status.trim()) {
        console.log('📝 Found uncommitted changes, adding them...');
        execSync('git add .', { stdio: 'inherit' });
        execSync('git commit -m "Fix: Resolve configuration and update files"', { stdio: 'inherit' });
    }
    
    // Pull latest changes
    console.log('🔄 Pulling latest changes...');
    execSync('git pull origin main', { stdio: 'inherit' });
    
    // Push changes
    console.log('📤 Pushing changes...');
    execSync('git push origin main', { stdio: 'inherit' });
    
    console.log('✅ Git issues resolved successfully!');
    
} catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
}