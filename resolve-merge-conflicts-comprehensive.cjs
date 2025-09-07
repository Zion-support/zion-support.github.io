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
        if (!content.includes('<<<<<<< HEAD')) {
            return false; // No conflicts to resolve
        }
        
        // Strategy: Keep HEAD version (current branch) for most conflicts
        // Remove merge conflict markers and keep the HEAD version
        content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)        
        // Remove any remaining conflict markers
        content = content.replace(/<<<<<<< HEAD\n/g, '');
        content = content.replace(/=======\n/g, '');
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
        const result = execSync('grep -l "<<<<<<< HEAD" . -r --include="*.js" --include="*.ts" --include="*.tsx" --include="*.json" --include="*.cjs" --include="*.mjs" --include="*.yml" --include="*.yaml" --include="*.sh" --include="*.css" --include="*.jsx"', { encoding: 'utf8' });
        return result.trim().split('\n').filter(file => file.length > 0);
    } catch (error) {
        return [];
    }
}

// Function to handle deleted files conflicts
function handleDeletedFiles() {
    try {
        console.log('🗑️  Handling deleted files conflicts...');
        
        // Get list of files that were deleted in our branch but modified in HEAD
        const deletedFiles = [
            'accessibility-improvement-report.json',
            'advanced-app-improvement-report.json',
            'app-improvement-report.json',
            'comprehensive-fix-and-test-report.json',
            'final-automation-report.json',
            'health-check-report.json',
            'health-report.json',
            'master-automation-report.json',
            'merge-conflict-resolution-report.json',
            'performance-metrics.json',
            'performance-monitor-report.json',
            'performance-optimization-report.json',
            'performance-report.json',
            'resolve-all-conflicts.sh',
            'security-audit-report.json',
            'security-enhancement-report.json',
            'security-report.json',
            'seo-optimization-report.json',
            'scripts/simple-merge-resolver.cjs'
        ];
        
        for (const file of deletedFiles) {
            if (fs.existsSync(file)) {
                console.log(`🗑️  Removing deleted file: ${file}`);
                fs.unlinkSync(file);
            }
        }
        
        // Handle backup-problematic-files directory
        if (fs.existsSync('backup-problematic-files')) {
            console.log('🗑️  Removing backup-problematic-files directory');
            execSync('rm -rf backup-problematic-files', { stdio: 'pipe' });
        }
        
        console.log('✅ Deleted files conflicts resolved');
    } catch (error) {
        console.error('❌ Error handling deleted files:', error.message);
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

    // Handle deleted files conflicts first
    handleDeletedFiles();

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
        execSync('git commit -m "fix: resolve comprehensive merge conflicts\n\n- Resolved conflicts in ' + resolvedCount + ' files\n- Kept HEAD version for consistency\n- Cleaned up duplicate content\n- Removed deleted files"');
    }

    console.log('🎉 Comprehensive merge conflict resolution completed!');
}

main().catch(console.error);