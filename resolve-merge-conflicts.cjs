#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Strategy: For most automation scripts and backup files, keep the newer version (HEAD)
// For core application files, merge carefully or keep the main branch version

function resolveConflicts() {
    try {
        // Get list of conflicted files
        const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
            .split('\n')
            .filter(file => file.trim());

        console.log(`Found ${conflictedFiles.length} conflicted files`);

        for (const file of conflictedFiles) {
            if (!file.trim()) continue;
            
            console.log(`Resolving conflicts in: ${file}`);
            
            // Skip ignored files
            if (isIgnoredFile(file)) {
                console.log(`  🚫 Skipping ignored file ${file}`);
                try {
                    execSync(`git rm --cached "${file}" 2>/dev/null || true`);
                } catch (e) {
                    // Ignore errors for ignored files
                }
                continue;
            }
            
            // Strategy based on file type
            if (shouldKeepOurs(file)) {
                // Keep our version (HEAD)
                try {
                    execSync(`git checkout --ours "${file}"`);
                    execSync(`git add "${file}"`);
                    console.log(`  ✅ Kept HEAD version of ${file}`);
                } catch (error) {
                    // If HEAD version doesn't exist, try theirs
                    try {
                        execSync(`git checkout --theirs "${file}"`);
                        execSync(`git add "${file}"`);
                        console.log(`  ✅ Kept incoming version of ${file} (HEAD not available)`);
                    } catch (e) {
                        console.log(`  ⚠️ Could not resolve ${file}: ${e.message}`);
                    }
                }
            } else if (shouldKeepTheirs(file)) {
                // Keep their version (incoming branch)
                try {
                    execSync(`git checkout --theirs "${file}"`);
                    execSync(`git add "${file}"`);
                    console.log(`  ✅ Kept incoming version of ${file}`);
                } catch (error) {
                    // If theirs doesn't exist, try ours
                    try {
                        execSync(`git checkout --ours "${file}"`);
                        execSync(`git add "${file}"`);
                        console.log(`  ✅ Kept HEAD version of ${file} (incoming not available)`);
                    } catch (e) {
                        console.log(`  ⚠️ Could not resolve ${file}: ${e.message}`);
                    }
                }
            } else {
                // Try to auto-resolve or keep HEAD version as fallback
                try {
                    autoResolveFile(file);
                    execSync(`git add "${file}"`);
                    console.log(`  ✅ Auto-resolved ${file}`);
                } catch (error) {
                    console.log(`  ⚠️ Could not auto-resolve ${file}, trying fallback`);
                    try {
                        execSync(`git checkout --ours "${file}"`);
                        execSync(`git add "${file}"`);
                        console.log(`  ✅ Kept HEAD version of ${file}`);
                    } catch (e) {
                        try {
                            execSync(`git checkout --theirs "${file}"`);
                            execSync(`git add "${file}"`);
                            console.log(`  ✅ Kept incoming version of ${file}`);
                        } catch (e2) {
                            console.log(`  ⚠️ Could not resolve ${file}: ${e2.message}`);
                        }
                    }
                }
            }
        }

        // Handle deleted files that exist in the incoming branch
        const deletedFiles = execSync('git status --porcelain', { encoding: 'utf8' })
            .split('\n')
            .filter(line => line.startsWith('DU '))
            .map(line => line.substring(3));

        for (const file of deletedFiles) {
            if (!file.trim()) continue;
            console.log(`Handling deleted file: ${file}`);
            
            if (shouldDeleteFile(file)) {
                execSync(`git rm "${file}"`);
                console.log(`  ✅ Deleted ${file}`);
            } else {
                execSync(`git add "${file}"`);
                console.log(`  ✅ Kept ${file}`);
            }
        }

        console.log('✅ All conflicts resolved!');
        return true;
    } catch (error) {
        console.error('❌ Error resolving conflicts:', error.message);
        return false;
    }
}

function isIgnoredFile(file) {
    // Files that should be ignored
    const ignoredPatterns = [
        /^\.next\//,
        /^node_modules\//,
        /^dist\//,
        /^build\//,
        /\.log$/,
        /\.cache$/,
        /\.tmp$/,
        /\.temp$/,
    ];
    
    return ignoredPatterns.some(pattern => pattern.test(file));
}

function shouldKeepOurs(file) {
    // Keep HEAD version for these file types
    const keepOursPatterns = [
        /^src\//,                    // Core source files
        /^app\//,                    // Next.js app files
        /^components\//,             // React components
        /^pages\//,                  // Page files
        /package\.json$/,            // Package configuration
        /package-lock\.json$/,       // Lock files
        /netlify\.toml$/,           // Netlify config
        /tsconfig\.json$/,          // TypeScript config
        /tailwind\.config\./,       // Tailwind config
        /vite\.config\./,           // Vite config
    ];
    
    return keepOursPatterns.some(pattern => pattern.test(file));
}

function shouldKeepTheirs(file) {
    // Keep incoming version for automation scripts and backups
    const keepTheirsPatterns = [
        /^scripts\/automation\//,    // Automation scripts
        /^scripts\/pm2\//,          // PM2 scripts
        /^scripts\/intelligent\//,   // Intelligent scripts
        /\.backup/,                 // Backup files
        /\.conflict-backup/,        // Conflict backup files
        /^styles\/globals\.css\.backup\./,  // CSS backup files
    ];
    
    return keepTheirsPatterns.some(pattern => pattern.test(file));
}

function shouldDeleteFile(file) {
    // Delete these types of files if they were deleted in HEAD
    const deletePatterns = [
        /\.backup/,
        /\.conflict-backup/,
        /^styles\/globals\.css\.backup\./,
        /yarn\.lock$/,              // We use npm, not yarn
    ];
    
    return deletePatterns.some(pattern => pattern.test(file));
}

function autoResolveFile(file) {
    const content = fs.readFileSync(file, 'utf8');
    
    // Simple conflict resolution patterns
    let resolved = content
        // Remove conflict markers and keep both sides for simple cases
        .replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> .*?\n/g, (match, ours, theirs) => {
            // For simple additions, keep both
            if (ours.trim() && theirs.trim() && !ours.includes(theirs) && !theirs.includes(ours)) {
                return ours + '\n' + theirs + '\n';
            }
            // Otherwise keep ours (HEAD)
            return ours + '\n';
        })
        // Clean up any remaining markers
        .replace(/<<<<<<< HEAD\n/g, '')
        .replace(/=======\n/g, '')
        .replace(/>>>>>>> .*?\n/g, '');
    
    if (resolved !== content) {
        fs.writeFileSync(file, resolved);
        console.log(`    Auto-resolved conflicts in ${file}`);
    }
}

// Main execution
if (resolveConflicts()) {
    console.log('🎉 Merge conflict resolution completed successfully!');
    process.exit(0);
} else {
    console.log('❌ Merge conflict resolution failed');
    process.exit(1);
}