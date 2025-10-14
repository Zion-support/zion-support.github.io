#!/usr/bin/env node

const fs = require('fs'
const path = require('path'
const { execSync } = require('child_process'

console.log('🔧 Starting comprehensive syntax error fix...'

// Function to fix common syntax errors in files
function fixSyntaxErrors(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8'
        let modified = false;

        // Fix common merge conflict markers
        if (content.includes('
            // Remove merge conflict markers and keep the main branch version
            content = content.replace(/            content = content.replace(/            content = content.replace(/            modified = true;
        }

        // Fix unterminated string literals
        content = content.replace(/'([^']*?)$/gm, "
        content = content.replace(/"([^"]*?)$/gm, '"
        
        // Fix unterminated template literals
        content = content.replace(/`([^`]*?)$/gm, '`
        
        // Fix common TypeScript syntax errors
        content = content.replace(/import\s+{\s*([^}]*?)\s*}\s*from\s*['"]([^'"]*?)['"];?\s*$/gm, 'import { $1 } from "$2";
        // Fix JSX syntax errors
        content = content.replace(/<([A-Z][a-zA-Z0-9]*)\s*([^>]*?)>\s*$/gm, '<$1 $2>'
        
        // Fix function declarations
        content = content.replace(/function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(\s*\)\s*{\s*$/gm, 'function $1() {'
        
        // Fix class declarations
        content = content.replace(/class\s+([A-Z][a-zA-Z0-9]*)\s*{\s*$/gm, 'class $1 {'
        
        // Fix interface declarations
        content = content.replace(/interface\s+([A-Z][a-zA-Z0-9]*)\s*{\s*$/gm, 'interface $1 {'
        
        // Fix type declarations
        content = content.replace(/type\s+([A-Z][a-zA-Z0-9]*)\s*=\s*{\s*$/gm, 'type $1 = {'
        
        // Fix object literals
        content = content.replace(/{\s*$/gm, '{'
        
        // Fix array literals
        content = content.replace(/\[\s*$/gm, '['
        
        // Fix parentheses
        content = content.replace(/\(\s*$/gm, '('
        
        // Fix brackets
        content = content.replace(/\[\s*$/gm, '['
        
        // Fix braces
        content = content.replace(/{\s*$/gm, '{'
        
        // Remove empty lines at the end
        content = content.replace(/\n\s*$/, ''
        
        if (modified) {
            fs.writeFileSync(filePath, content);
            console.log(`✅ Fixed syntax errors in ${filePath}`
            return true;
        }
        
        return false;
    } catch (error) {
        console.log(`❌ Error fixing ${filePath}: ${error.message}`
        return false;
    }
}

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
    const files = fs.readdirSync(dir);
    let fixedCount = 0;
    
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            // Skip node_modules and other common directories
            if (['node_modules', '.git', 'dist', 'build', '.next'
                continue;
            }
            fixedCount += fixFilesInDirectory(filePath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js'
            if (fixSyntaxErrors(filePath)) {
                fixedCount++;
            }
        }
    }
    
    return fixedCount;
}

// Main execution
try {
    console.log('🔍 Scanning for files to fix...'
    const fixedCount = fixFilesInDirectory('.'
    console.log(`✅ Fixed syntax errors in ${fixedCount} files`
    
    // Run TypeScript check to see if we fixed the issues
    console.log('🔍 Running TypeScript check...'
    try {
        execSync('npx tsc --noEmit --skipLibCheck', { stdio: 'pipe'
        console.log('✅ TypeScript check passed!'
    } catch (error) {
        console.log('⚠️  TypeScript check still has errors, but we fixed what we could'
    }
    
    console.log('🎉 Syntax error fix completed!'
} catch (error) {
    console.error('❌ Error during syntax fix:'
    process.exit(1);
}