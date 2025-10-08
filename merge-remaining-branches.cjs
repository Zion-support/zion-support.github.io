#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Merging remaining branches with conflict resolution...');

// Function to execute git commands
function gitCommand(command) {
    try {
        return execSync(command, { 
            encoding: 'utf8', 
            cwd: '/workspace',
            stdio: 'pipe'
        });
    } catch (error) {
        return null;
    }
}

// Function to resolve merge conflicts
function resolveConflicts() {
    console.log('🔧 Resolving merge conflicts...');
    
    try {
        const status = gitCommand('git status --porcelain');
        if (!status) return false;
        
        const conflictedFiles = status.trim().split('\n')
            .filter(line => line.includes('UU'))
            .map(line => line.split(' ').pop());
        
        if (conflictedFiles.length === 0) {
            console.log('✅ No conflicts to resolve');
            return true;
        }
        
        console.log(`🔍 Found ${conflictedFiles.length} conflicted files`);
        
        for (const file of conflictedFiles) {
            try {
                let content = fs.readFileSync(file, 'utf8');
                
                if (content.includes('')) {
                    // Simple conflict resolution - choose the version with proper syntax
                    const sections = content.split(/||                    
