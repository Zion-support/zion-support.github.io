// Simple script to check merge status
const fs = require('fs');
const path = require('path');

console.log('Checking current repository status...');

// Check if we're in a git repository
if (fs.existsSync('.git')) {
    console.log('✅ Git repository detected');
    
    // Read current branch
    try {
        const headContent = fs.readFileSync('.git/HEAD', 'utf8').trim();
        const currentBranch = headContent.replace('ref: refs/heads/', '');
        console.log(`Current branch: ${currentBranch}`);
    } catch (error) {
        console.log('Could not read current branch');
    }
    
    // Check for merge conflicts
    const conflictFiles = [];
    function checkDirectory(dir) {
        try {
            const files = fs.readdirSync(dir);
            for (const file of files) {
                const filePath = path.join(dir, file);
                const stat = fs.statSync(filePath);
                
                if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
                    checkDirectory(filePath);
                } else if (stat.isFile() && file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
                    try {
                        const content = fs.readFileSync(filePath, 'utf8');
                        if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
                            conflictFiles.push(filePath);
                        }
                    } catch (error) {
                        // Skip files that can't be read
                    }
                }
            }
        } catch (error) {
            // Skip directories that can't be read
        }
    }
    
    checkDirectory('.');
    
    if (conflictFiles.length > 0) {
        console.log('❌ Merge conflicts found in:');
        conflictFiles.forEach(file => console.log(`  - ${file}`));
    } else {
        console.log('✅ No merge conflicts detected');
    }
    
} else {
    console.log('❌ Not in a git repository');
}

console.log('Repository status check completed.');