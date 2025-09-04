#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;
        
        // Pattern to match merge conflict blocks
        const conflictPattern = /<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g;
        
        // Replace conflicts with HEAD version (first capture group)
        content = content.replace(conflictPattern, (match, headContent) => {
            return headContent.trim();
        });
        
        // Also handle conflicts without proper markers
        const simpleConflictPattern = /<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>>/g;
        content = content.replace(simpleConflictPattern, (match, headContent) => {
            return headContent.trim();
        });
        
        // Clean up any remaining conflict markers
        content = content.replace(/<<<<<<< HEAD\n?/g, '');
        content = content.replace(/=======\n?/g, '');
        content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
        content = content.replace(/>>>>>>>\n?/g, '');
        
        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Resolved conflicts in: ${filePath}`);
            return true;
        }
        
        return false;
    } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
        return false;
    }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts() {
    try {
        const result = execSync('grep -r "<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" --include="*.json" --include="*.md" -l', { 
            encoding: 'utf8',
            cwd: process.cwd()
        });
        return result.trim().split('\n').filter(file => file.length > 0);
    } catch (error) {
        // If grep finds no matches, it returns exit code 1
        return [];
    }
}

// Main execution
function main() {
    console.log('🔍 Finding files with merge conflicts...');
    const filesWithConflicts = findFilesWithConflicts();
    
    if (filesWithConflicts.length === 0) {
        console.log('✅ No merge conflicts found!');
        return;
    }
    
    console.log(`📁 Found ${filesWithConflicts.length} files with merge conflicts`);
    
    let resolvedCount = 0;
    let errorCount = 0;
    
    filesWithConflicts.forEach(file => {
        if (resolveMergeConflicts(file)) {
            resolvedCount++;
        } else {
            errorCount++;
        }
    });
    
    console.log(`\n📊 Resolution Summary:`);
    console.log(`✅ Successfully resolved: ${resolvedCount} files`);
    console.log(`❌ Errors: ${errorCount} files`);
    console.log(`📁 Total processed: ${filesWithConflicts.length} files`);
    
    if (resolvedCount > 0) {
        console.log('\n🎉 Merge conflicts resolved! You can now run linting again.');
    }
}

main();