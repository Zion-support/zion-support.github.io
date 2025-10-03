#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting merge conflict resolution...');

// Function to resolve conflicts in a file
function resolveConflictsInFile(filePath) {
    try {
        if (!fs.existsSync(filePath)) {
            return false;
        }

        const content = fs.readFileSync(filePath, 'utf8');
        
        // Check if file has conflict markers
        if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
            return false; // No conflicts
        }

        console.log(`🔍 Resolving conflicts in: ${filePath}`);

        let resolvedContent = content;
        
        // Strategy 1: Remove conflict markers and keep the newer version (after =======)
        resolvedContent = resolvedContent.replace(
            /<<<<<<<[^=]*=======([\s\S]*?)>>>>>>>[^\n]*\n?/g,
            (match, afterEquals) => {
                return afterEquals.trim() + '\n';
            }
        );

        // Strategy 2: If that didn't work, try keeping everything between ======= and >>>>>>>
        resolvedContent = resolvedContent.replace(
            /<<<<<<<[^=]*=======([\s\S]*?)>>>>>>>[^\n]*\n?/g,
            '$1'
        );

        // Strategy 3: Remove any remaining conflict markers
        resolvedContent = resolvedContent.replace(/<<<<<<<[^=]*\n?/g, '');
        resolvedContent = resolvedContent.replace(/=======\n?/g, '');
        resolvedContent = resolvedContent.replace(/>>>>>>>[^\n]*\n?/g, '');

        // Clean up extra newlines
        resolvedContent = resolvedContent.replace(/\n{3,}/g, '\n\n');

        fs.writeFileSync(filePath, resolvedContent);
        console.log(`✅ Resolved conflicts in: ${filePath}`);
        return true;
    } catch (error) {
        console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
        return false;
    }
}

// Function to find all files with conflicts
function findConflictedFiles() {
    try {
        const output = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' });
        return output.trim().split('\n').filter(file => file.length > 0);
    } catch (error) {
        return [];
    }
}

// Main execution
function main() {
    console.log('🔍 Searching for files with merge conflicts...');
    
    const conflictedFiles = findConflictedFiles();
    
    if (conflictedFiles.length === 0) {
        console.log('✅ No merge conflicts found!');
        return;
    }

    console.log(`📝 Found ${conflictedFiles.length} files with conflicts:`);
    conflictedFiles.forEach(file => console.log(`  - ${file}`));

    let resolvedCount = 0;
    
    conflictedFiles.forEach(file => {
        if (resolveConflictsInFile(file)) {
            resolvedCount++;
        }
    });

    console.log(`🎯 Resolved conflicts in ${resolvedCount}/${conflictedFiles.length} files`);

    if (resolvedCount > 0) {
        console.log('📝 Adding resolved files to git...');
        try {
            execSync('git add .', { stdio: 'inherit' });
            console.log('✅ All resolved files added to git');
        } catch (error) {
            console.error('❌ Error adding files to git:', error.message);
        }
    }
}

main();