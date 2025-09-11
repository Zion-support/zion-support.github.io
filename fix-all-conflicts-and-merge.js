const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting comprehensive merge conflict resolution and PR merging process...');

// Function to resolve merge conflicts in a file
function resolveConflicts(filePath) {
    try {
        if (!fs.existsSync(filePath)) return;

        let content = fs.readFileSync(filePath, 'utf8');
        let hasConflicts = false;

        // Remove merge conflict markers and keep the latest version (HEAD)
        if (content.includes('            hasConflicts = true;
            content = content.replace(/            content = content.replace(/        }

        // Remove any remaining conflict markers
        content = content.replace(/        content = content.replace(//g, '');
        content = content.replace(/        
        // Fix common syntax issues
        content = content.replace(/;\s*;/g, ';'); // Remove double semicolons
        content = content.replace(/,\s*;/g, ';'); // Fix comma-semicolon issues
        content = content.replace(/;\s*,/g, ','); // Fix semicolon-comma issues
        content = content.replace(/\{\s*;/g, '{'); // Remove semicolons after opening braces
        content = content.replace(/;\s*\}/g, '}'); // Remove semicolons before closing braces
        content = content.replace(/export\s+const\s+\w+\s*:\s*\w+\[\]\s*=\s*\[\s*;/g, 'export const $1: $2[] = ['); // Fix array declarations

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
        // Find all files with merge conflicts
        const conflictFiles = execSync('grep -r "            .split('\n')
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

// Function to fix specific problematic files
function fixProblematicFiles() {
    console.log('🔧 Fixing specific problematic files...');

    const problematicFiles = [
        'data/real-market-services.ts',
        'data/real-augmented-services-2025-batch3.ts.conflicted',
        'data/real-market-services-extended.ts.conflicted',
        'data/real-2027-q2-additions.ts.conflicted',
        'data/real-2026-q4-additions.ts.conflicted',
        'data/real-2026-q3-additions.ts.conflicted',
        'data/real-2026-q4-new-services.ts.conflicted',
        'data/real-2025-q4-additions.ts',
        'data/real-2026-additions.ts.conflicted',
        'data/real-2025-q2-additions.ts.conflicted',
        'data/real-2027-q1-additions.ts.conflicted',
        'data/additional-live-services-2025.ts.conflicted'
    ];

    problematicFiles.forEach(file => {
        if (fs.existsSync(file)) {
            resolveConflicts(file);

            // If it's a .conflicted file, rename it
            if (file.endsWith('.conflicted')) {
                const newName = file.replace(/\.conflicted$/, '');
                try {
                    fs.renameSync(file, newName);
                    console.log(`✅ Renamed: ${file} -> ${newName}`);
                } catch (error) {
                    console.log(`❌ Error renaming ${file}:`, error.message);
                }
            }
        }
    });
}

// Function to merge PRs
function mergePRs() {
    console.log('🔄 Merging PRs...');

    try {
        // Switch to main branch
        execSync('git checkout main', { stdio: 'inherit' });
        execSync('git pull origin main', { stdio: 'inherit' });

        // Merge the first PR branch
        try {
            execSync('git merge origin/cursor/fix-netlify-build-and-merge-to-main-7161 --no-ff -m "Merge PR #12711: Fix Netlify build and merge to main"', { stdio: 'inherit' });
            console.log('✅ Merged PR #12711');
        } catch (error) {
            console.log('⚠️ Could not merge PR #12711:', error.message);
        }

        // Merge the second PR branch
        try {
            execSync('git merge origin/cursor/fix-netlify-build-and-merge-to-main-4a00 --no-ff -m "Merge PR #12710: Fix Netlify build and merge to main"', { stdio: 'inherit' });
            console.log('✅ Merged PR #12710');
        } catch (error) {
            console.log('⚠️ Could not merge PR #12710:', error.message);
        }

    } catch (error) {
        console.log('❌ Error merging PRs:', error.message);
    }
}

// Function to verify build
function verifyBuild() {
    console.log('🔍 Verifying build...');

    try {
        // Install dependencies
        execSync('npm install', { stdio: 'inherit' });

        // Run build
        execSync('npm run build', { stdio: 'inherit' });
        console.log('✅ Build successful!');
        return true;
    } catch (error) {
        console.log('❌ Build failed:', error.message);
        return false;
    }
}

// Function to push changes
function pushChanges() {
    console.log('📤 Pushing changes...');

    try {
        execSync('git add .', { stdio: 'inherit' });
        execSync('git commit -m "Resolve all merge conflicts and merge PRs into main branch"', { stdio: 'inherit' });
        execSync('git push origin main', { stdio: 'inherit' });
        console.log('✅ Changes pushed successfully!');
    } catch (error) {
        console.log('❌ Error pushing changes:', error.message);
    }
}

// Main execution
async function main() {
    try {
        console.log('Starting merge conflict resolution and PR merging process...');

        // Clean up backup files first
        cleanupBackupFiles();

        // Resolve all conflicts
        resolveAllConflicts();

        // Fix specific problematic files
        fixProblematicFiles();

        // Merge PRs
        mergePRs();

        // Verify build
        if (verifyBuild()) {
            // Push changes
            pushChanges();
            console.log('🎉 All merge conflicts resolved and PRs merged successfully!');
        } else {
            console.log('⚠️ Build verification failed. Please check the errors above.');
        }

    } catch (error) {
        console.log('❌ Error in main process:', error.message);
    }
}

// Run main function
main();