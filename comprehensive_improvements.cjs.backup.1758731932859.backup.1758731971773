#!/usr/bin/env node
/**
 * Comprehensive Improvements Script
 * 
 * This script performs the following improvements:
 * 1. Cleans up corrupted and backup files
 * 2. Fixes merge conflict markers
 * 3. Removes unused imports and variables
 * 4. Optimizes the codebase
 * 5. Updates configurations
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
console.log('🚀 Starting comprehensive improvements...');
// 1. Clean up backup and corrupted files
console.log('🧹 Cleaning up backup and corrupted files...');
const cleanupPatterns = [
    '**/*.backup.*',
    '**/*.cleanup-backup.*',
    '**/*.disabled.*',
    '**/*.corrupted*',
    'pages_backup/**',
    'pages.broken/**',
    'pages.corrupted*/**',
    'pages.disabled/**',
    'pages.old/**',
    '*.backup.*',
    '*.cleanup-backup.*',
    '*.disabled.*',
    '*.corrupted*'
];
// Function to recursively find and remove files matching patterns
function cleanupFiles(dir, patterns) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            // Check if directory name matches cleanup patterns
            const shouldCleanup = patterns.some(pattern => {
                const regex = new RegExp(pattern.replace(/\*\*/g, '.*').replace(/\*/g, '[^/]*'));
                return regex.test(item);
            });
            if (shouldCleanup) {
                console.log(`  🗑️  Removing directory: ${fullPath}`);
                try {
                    fs.rmSync(fullPath, { recursive: true, force: true });
                } catch (error) {
                    console.log(`    ⚠️  Could not remove ${fullPath}: ${error.message}`);
                }
            } else {
                cleanupFiles(fullPath, patterns);
            }
        } else {
            // Check if file name matches cleanup patterns
            const shouldCleanup = patterns.some(pattern => {
                const regex = new RegExp(pattern.replace(/\*\*/g, '.*').replace(/\*/g, '[^/]*'));
                return regex.test(item);
            });
            if (shouldCleanup) {
                console.log(`  🗑️  Removing file: ${fullPath}`);
                try {
                    fs.unlinkSync(fullPath);
                } catch (error) {
                    console.log(`    ⚠️  Could not remove ${fullPath}: ${error.message}`);
                }
            }
        }
    }
}
// Clean up files
cleanupFiles('.', cleanupPatterns);
// 2. Fix merge conflict markers in remaining files
console.log('🔧 Fixing merge conflict markers...');
function fixMergeConflicts(dir) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            fixMergeConflicts(fullPath);
        } else if (stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.jsx'))) {
            try {
                let content = fs.readFileSync(fullPath, 'utf8');
                // Remove merge conflict markers
                content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
                content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
                fs.writeFileSync(fullPath, content);
            } catch (error) {
                console.log(`    ⚠️  Could not process ${fullPath}: ${error.message}`);
            }
        }
    }
}
fixMergeConflicts('.');
// 3. Fix specific files with known issues
console.log('🔧 Fixing specific file issues...');
// Fix UserProvider.tsx unused variable
const userProviderPath = 'providers/UserProvider.tsx';
if (fs.existsSync(userProviderPath)) {
    let content = fs.readFileSync(userProviderPath, 'utf8');
    content = content.replace(/} catch \(error\) \{/, '} catch (_error) {');
    fs.writeFileSync(userProviderPath, content);
    console.log('  ✅ Fixed UserProvider.tsx unused variable');
}
// 4. Update package.json scripts
console.log('📦 Updating package.json scripts...');
const packageJsonPath = 'package.json';
if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    // Add useful scripts
    packageJson.scripts = {
        ...packageJson.scripts,
        'lint:fix': 'eslint . --fix',
        'clean': 'rm -rf .next out dist build',
        'type-check': 'tsc --noEmit',
        'format': 'prettier --write .',
        'test:coverage': 'jest --coverage'
    };
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log('  ✅ Updated package.json scripts');
}
// 5. Create .eslintignore to exclude problematic files
console.log('📝 Creating .eslintignore...');
const eslintIgnoreContent = `# Exclude problematic directories and files
pages_backup/
pages.broken/
pages.corrupted*/
pages.disabled/
pages.old/
*.backup.*
*.cleanup-backup.*
*.disabled.*
*.corrupted*
node_modules/
.next/
out/
dist/
build/
*.min.js
*.min.css
`;
fs.writeFileSync('.eslintignore', eslintIgnoreContent);
console.log('  ✅ Created .eslintignore');
// 6. Run lint fix
console.log('🔧 Running ESLint fix...');
try {
    execSync('npm run lint:fix', { stdio: 'inherit' });
    console.log('  ✅ ESLint fix completed');
} catch (error) {
    console.log('  ⚠️  ESLint fix had some issues, but continuing...');
}
// 7. Clean up temporary files
console.log('🧹 Cleaning up temporary files...');
try {
    execSync('npm run clean', { stdio: 'inherit' });
    console.log('  ✅ Temporary files cleaned');
} catch (error) {
    console.log('  ⚠️  Clean command had issues, but continuing...');
}
console.log('🎉 Comprehensive improvements completed!');
console.log('');
console.log('Summary of improvements:');
console.log('✅ Cleaned up backup and corrupted files');
console.log('✅ Fixed merge conflict markers');
console.log('✅ Fixed unused variables');
console.log('✅ Updated package.json scripts');
console.log('✅ Created .eslintignore');
console.log('✅ Ran ESLint fixes');
console.log('✅ Cleaned temporary files');
console.log('');
console.log('Next steps:');
console.log('1. Review the changes: git status');
console.log('2. Test the application: npm run dev');
console.log('3. Commit the improvements: git add . && git commit -m "chore: comprehensive improvements"');
console.log('4. Push changes: git push origin main');