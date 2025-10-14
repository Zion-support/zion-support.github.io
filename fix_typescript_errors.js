#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('Starting TypeScript error fixes...');

// Function to fix common TypeScript/JSX syntax errors
function fixFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // Fix common JSX syntax issues
        const fixes = [
            // Fix unescaped > and < in JSX
            { pattern: /<([^>]*[^=])>([^<]*[^=])>/g, replacement: '<$1>&lt;$2&gt;</$1>' },
            // Fix JSX fragments
            { pattern: /<>([^<]*)</g, replacement: '<React.Fragment>$1</React.Fragment>' },
            // Fix unclosed JSX tags
            { pattern: /<div([^>]*)>([^<]*)<div/g, replacement: '<div$1>$2</div><div' },
            // Fix malformed JSX attributes
            { pattern: /className="([^"]*)"([^>]*)>/g, replacement: 'className="$1"$2>' },
            // Fix missing closing tags
            { pattern: /<p([^>]*)>([^<]*)<p/g, replacement: '<p$1>$2</p><p' },
            // Fix broken JSX expressions
            { pattern: /\{([^}]*[^=])>([^}]*)\}/g, replacement: '{$1&gt;$2}' },
            // Fix malformed component returns
            { pattern: /return\s*\(\s*<([^>]*)>([^<]*)<([^>]*)>/g, replacement: 'return (\n    <$1>\n      $2\n    </$3>' },
        ];

        fixes.forEach(fix => {
            const newContent = content.replace(fix.pattern, fix.replacement);
            if (newContent !== content) {
                content = newContent;
                modified = true;
            }
        });

        // Additional specific fixes for common patterns
        if (content.includes('JSX expressions must have one parent element')) {
            // Wrap multiple JSX elements in a fragment
            content = content.replace(
                /return\s*\(\s*([^)]*<[^>]+>[^<]*<\/[^>]+>[^)]*<[^>]+>[^<]*<\/[^>]+>[^)]*)/g,
                'return (\n    <React.Fragment>\n      $1\n    </React.Fragment>'
            );
            modified = true;
        }

        if (modified) {
            fs.writeFileSync(filePath, content);
            console.log(`Fixed: ${filePath}`);
            return true;
        }
        return false;
    } catch (error) {
        console.error(`Error fixing ${filePath}:`, error.message);
        return false;
    }
}

// Function to find all TypeScript/TSX files
function findTsxFiles(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            files.push(...findTsxFiles(fullPath));
        } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
            files.push(fullPath);
        }
    }
    
    return files;
}

// Get all TypeScript files
const tsxFiles = findTsxFiles('./app');
console.log(`Found ${tsxFiles.length} TypeScript files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
    if (fixFile(file)) {
        fixedCount++;
    }
}

console.log(`Fixed ${fixedCount} files`);

// Try to run TypeScript check again
try {
    console.log('Running TypeScript check...');
    execSync('npx tsc --noEmit --skipLibCheck', { stdio: 'inherit' });
    console.log('TypeScript check passed!');
} catch (error) {
    console.log('TypeScript check still has errors, but some fixes were applied');
}

console.log('TypeScript error fixes completed!');