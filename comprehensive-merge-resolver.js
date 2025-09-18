#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting comprehensive merge resolution...');

// Function to execute git commands safely
function execGit(command, options = {}) {
    try {
        return execSync(command, { 
            encoding: 'utf8', 
            stdio: 'pipe',
            ...options 
        });
    } catch (error) {
        if (options.allowFailure) {
            return { stdout: '', stderr: error.message };
        }
        throw error;
    }
}

// Function to resolve merge conflicts intelligently
function resolveConflicts() {
    console.log('🔧 Resolving merge conflicts...');
    
    try {
        // Get conflicted files
        const conflictedFiles = execGit('git diff --name-only --diff-filter=U', { allowFailure: true });
        
        if (!conflictedFiles.stdout.trim()) {
            console.log('✅ No conflicts found');
            return true;
        }
        
        const files = conflictedFiles.stdout.trim().split('\n');
        console.log(`📋 Found ${files.length} conflicted files: ${files.join(', ')}`);
        
        for (const file of files) {
            if (!fs.existsSync(file)) continue;
            
            console.log(`🔧 Resolving conflicts in ${file}...`);
            
            // Read the file content
            let content = fs.readFileSync(file, 'utf8');
            
            // Different resolution strategies based on file type
            if (file.includes('package.json') || file.includes('package-lock.json')) {
                console.log('📦 Package file - keeping main version');
                execGit(`git checkout --ours "${file}"`);
            } else if (file.includes('next.config') || file.includes('tsconfig') || file.includes('tailwind.config')) {
                console.log('⚙️  Config file - keeping main version');
                execGit(`git checkout --ours "${file}"`);
            } else if (file.includes('.tsx') || file.includes('.ts') || file.includes('.jsx') || file.includes('.js')) {
                console.log('💻 Component file - preferring incoming changes');
                execGit(`git checkout --theirs "${file}"`);
            } else if (file.includes('.md') || file.includes('.txt')) {
                console.log('📝 Documentation file - preferring incoming changes');
                execGit(`git checkout --theirs "${file}"`);
            } else {
                console.log('📄 Generic file - using intelligent merge');
                // Try to resolve by removing conflict markers and keeping both versions
