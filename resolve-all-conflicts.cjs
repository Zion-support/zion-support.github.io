#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🔧 Resolving all merge conflicts automatically...\n');

try {
    // Get list of conflicted files
    const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' }).trim().split('\n').filter(f => f);
    
    console.log(`Found ${conflictedFiles.length} conflicted files to resolve:`);
    conflictedFiles.forEach(file => console.log(`  - ${file}`));
    console.log('');
    
    // Strategy: Use "theirs" version for all conflicts (incoming changes)
    console.log('📋 Resolution strategy: Using incoming changes (theirs) for all conflicts...\n');
    
    for (const file of conflictedFiles) {
        try {
            console.log(`🔧 Resolving conflict in: ${file}`);
            
            // Use git checkout with --theirs to accept incoming changes
            execSync(`git checkout --theirs "${file}"`, { stdio: 'pipe' });
            execSync(`git add "${file}"`, { stdio: 'pipe' });
            
            console.log(`✅ Resolved: ${file}`);
        } catch (error) {
            console.log(`❌ Failed to resolve ${file}: ${error.message}`);
        }
    }
    
    console.log('\n🎯 Committing resolved conflicts...');
    execSync('git commit -m "Resolve all merge conflicts: accept incoming changes from remote main"', { stdio: 'pipe' });
    
    console.log('✅ Successfully resolved all merge conflicts!');
    
} catch (error) {
    console.log('❌ Error resolving conflicts:', error.message);
    process.exit(1);
}