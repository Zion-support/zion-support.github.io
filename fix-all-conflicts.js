const fs = require('fs');
const path = require('path');

console.log('🚀 Starting comprehensive merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveConflicts(filePath) {
    try {
        if (!fs.existsSync(filePath)) return;
        
        let content = fs.readFileSync(filePath, 'utf8');
        let hasConflicts = false;
        
        // Remove merge conflict markers and keep the latest version (HEAD)
        if (content.includes('<<<<<<< HEAD')) {
            hasConflicts = true;
            content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
            content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
        }
        
        // Remove any remaining conflict markers
        content = content.replace(/<<<<<<< [^\n]+/g, '');
        content = content.replace(/=======/g, '');
        content = content.replace(/>>>>>>> [^\n]+/g, '');
        
        // Fix common syntax issues
        content = content.replace(/;\s*;/g, ';'); // Remove double semicolons
        content = content.replace(/,\s*;/g, ';'); // Fix comma-semicolon issues
        content = content.replace(/;\s*,/g, ','); // Fix semicolon-comma issues
        content = content.replace(/\{\s*;/g, '{'); // Remove semicolons after opening braces
        content = content.replace(/;\s*\}/g, '}'); // Remove semicolons before closing braces
        
        if (hasConflicts) {
            fs.writeFileSync(filePath, content);
            console.log(`✅ Resolved conflicts in: ${filePath}`);
        }
    } catch (error) {
        console.log(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    }
}

// Function to clean up backup files
function cleanupBackupFiles() {
    console.log('🧹 Cleaning up backup files...');
    const patterns = [
        '*.backup',
        '*.bak', 
        '*.conflicted',
        '*.cleanup-backup.*'
    ];
    
    patterns.forEach(pattern => {
        try {
            const { execSync } = require('child_process');
            execSync(`find . -name "${pattern}" -type f -delete`, { stdio: 'pipe' });
        } catch (error) {
            // Ignore errors for files that don't exist
        }
    });
}

// Function to find and resolve all merge conflicts
function resolveAllConflicts() {
    console.log('🔧 Resolving all merge conflicts...');
    
    try {
        const { execSync } = require('child_process');
        
        // Find all files with merge conflicts
        const conflictFiles = execSync('grep -r "<<<<<<< HEAD" . --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.json" --include="*.md" --include="*.css" --include="*.html" -l', { encoding: 'utf8' })
            .split('\n')
            .filter(file => file.trim() && fs.existsSync(file.trim()));
        
        console.log(`Found ${conflictFiles.length} files with conflicts`);
        
        conflictFiles.forEach(file => {
            resolveConflicts(file.trim());
        });
        
        // Also handle .conflicted files
        const conflictedFiles = execSync('find . -name "*.conflicted" -type f', { encoding: 'utf8' })
            .split('\n')
            .filter(file => file.trim());
        
        conflictedFiles.forEach(file => {
            const newName = file.replace(/\.conflicted$/, '');
            try {
                fs.renameSync(file, newName);
                resolveConflicts(newName);
                console.log(`✅ Renamed and resolved: ${file} -> ${newName}`);
            } catch (error) {
                console.log(`❌ Error renaming ${file}:`, error.message);
            }
        });
        
    } catch (error) {
        console.log('Error finding conflict files:', error.message);
    }
}

// Main execution
async function main() {
    try {
        console.log('Starting merge conflict resolution...');
        
        // Clean up backup files first
        cleanupBackupFiles();
        
        // Resolve all conflicts
        resolveAllConflicts();
        
        console.log('🎉 All merge conflicts resolved successfully!');
        
    } catch (error) {
        console.log('❌ Error in main process:', error.message);
    }
}

// Run main function
main();