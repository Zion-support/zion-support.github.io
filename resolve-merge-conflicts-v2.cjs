const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function resolveMergeConflicts() {
    console.log('Resolving merge conflicts...');
    
    try {
        // Get list of conflicted files
        const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
            .trim()
            .split('\n')
            .filter(file => file.length > 0);
        
        console.log(`Found ${conflictedFiles.length} conflicted files`);
        
        for (const file of conflictedFiles) {
            if (!fs.existsSync(file)) {
                console.log(`Skipping non-existent file: ${file}`);
                continue;
            }
            
            console.log(`Resolving conflicts in: ${file}`);
            
            // Accept main branch version for all files
            try {
                execSync(`git checkout --ours "${file}"`, { stdio: 'pipe' });
                execSync(`git add "${file}"`, { stdio: 'pipe' });
                console.log(`Resolved conflicts in: ${file}`);
            } catch (err) {
                console.log(`Could not resolve ${file}: ${err.message}`);
            }
        }
        
        // Add all resolved files
        execSync('git add .', { stdio: 'pipe' });
        
        console.log('Merge conflicts resolved successfully');
        return true;
        
    } catch (error) {
        console.error('Error resolving merge conflicts:', error.message);
        return false;
    }
}

if (resolveMergeConflicts()) {
    console.log('Ready to commit merge resolution');
} else {
    console.log('Failed to resolve merge conflicts');
    process.exit(1);
}