#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🧹 Cleaning up console statements...');

function cleanConsoleStatements(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Remove console.log statements (but keep console.error for debugging)
        const originalContent = content;
        content = content.replace(/^\s*console\.log\([^)]*\);\s*$/gm, '');
        content = content.replace(/^\s*console\.warn\([^)]*\);\s*$/gm, '');
        
        // Remove empty lines that might be left behind
        content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
        
        if (content !== originalContent) {
            fs.writeFileSync(filePath, content);
            console.log(`✅ Cleaned: ${filePath}`);
            modified = true;
        }
        
        return modified;
    } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
        return false;
    }
}

function processDirectory(dirPath) {
    const files = fs.readdirSync(dirPath);
    let totalModified = 0;
    
    for (const file of files) {
        const fullPath = path.join(dirPath, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
            totalModified += processDirectory(fullPath);
        } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
            if (cleanConsoleStatements(fullPath)) {
                totalModified++;
            }
        }
    }
    
    return totalModified;
}

// Process src directory
const srcPath = path.join(__dirname, 'src');
if (fs.existsSync(srcPath)) {
    const modifiedCount = processDirectory(srcPath);
    console.log(`🎉 Cleaned ${modifiedCount} files`);
} else {
    console.log('❌ src directory not found');
}