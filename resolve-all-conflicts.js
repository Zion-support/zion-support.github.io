#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting comprehensive merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
    try {
        console.log(`🔧 Processing: ${filePath}`);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Check if file has merge conflicts
        if (!content.includes('            return false; // No conflicts to resolve
        }
        
        // Strategy: Keep HEAD version (current branch) for most conflicts
        // Remove merge conflict markers and keep the HEAD version
        content = content.replace(/        
        // Remove any remaining conflict markers
        content = content.replace(/        
        // Clean up any duplicate content
        content = content.replace(/\n\n\n+/g, '\n\n');
        
        // Write the resolved content back
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Resolved conflicts in: ${filePath}`);
        return true;
    } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
        return false;
    }
}

// Function to get all files with merge conflicts
function getConflictFiles() {
    try {
        const result = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' });
        return result.trim().split('\n').filter(file => file.length > 0);
    } catch (error) {
        // If git command fails, use grep to find files with conflict markers
        const { execSync } = require('child_process');
        try {
            const result = execSync('grep -l "            return result.trim().split('\n').filter(file => file.length > 0);
        } catch (e) {
            return [];
        }
    }
}

// Main execution
async function main() {
    try {
        // Check if we're in a git repository
        execSync('git rev-parse --git-dir', { stdio: 'pipe' });
        console.log('✅ Git repository detected');
    } catch (error) {
        console.error('❌ Not in a git repository');
        process.exit(1);
    }

    // Get current branch
    const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
    console.log(`📍 Current branch: ${currentBranch}`);

    // Fetch latest changes
    console.log('📥 Fetching latest changes...');
    execSync('git fetch --all --prune');

    // Get files with conflicts
    const conflictFiles = getConflictFiles();
    
    if (conflictFiles.length === 0) {
        console.log('✅ No merge conflicts found');
        return;
    }

    console.log(`🔍 Found ${conflictFiles.length} files with merge conflicts`);

    // Resolve conflicts in each file
    let resolvedCount = 0;
    for (const file of conflictFiles) {
        if (fs.existsSync(file)) {
            if (resolveMergeConflicts(file)) {
                resolvedCount++;
            }
        }
    }

    console.log(`✅ Resolved conflicts in ${resolvedCount} files`);

    // Add resolved files to staging
    if (resolvedCount > 0) {
        console.log('📝 Adding resolved files to staging...');
        execSync('git add .');
        
        // Commit the resolved conflicts
        console.log('💾 Committing resolved conflicts...');
        execSync('git commit -m "fix: resolve merge conflicts automatically"');
    }

    // Try to merge with main
    console.log('🔄 Attempting to merge with main...');
    try {
        execSync('git merge origin/main --no-edit');
        console.log('✅ Successfully merged with main');
    } catch (error) {
        console.log('⚠️  Merge failed, but conflicts have been resolved');
        console.log('You may need to manually review and complete the merge');
    }

    console.log('🎉 Merge conflict resolution completed!');
}

main().catch(console.error);