#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to resolve merge conflicts by accepting the remote version
function resolveConflicts() {
    console.log('Starting conflict resolution...');
    
    // Get all files with conflicts
    const conflictFiles = [];
    
    function findConflictFiles(dir) {
        const files = fs.readdirSync(dir);
        
        for (const file of files) {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            
            if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
                findConflictFiles(filePath);
            } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.json'))) {
                try {
                    let content = fs.readFileSync(filePath, 'utf8');
            content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');            
            fs.writeFileSync(filePath, content);
            console.log(`Resolved conflicts in: ${filePath}`);
        } catch (err) {
            console.error(`Error resolving conflicts in ${filePath}:`, err.message);
        }
    }
}
    }
    
    console.log('Conflict resolution completed!');
}

resolveConflicts();