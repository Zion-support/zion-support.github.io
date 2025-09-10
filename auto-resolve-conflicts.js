') && !content.includes('>>>>>>>')) {
      return false; // No conflicts in this file
    }

    console.log(`🔧 Resolving conflicts in: ${filePath}`);

    // Remove all merge conflict markers and keep the incoming changes (after )
    let resolvedContent = content;

    // Pattern 1: Conflicts with file paths
    resolvedContent = resolvedContent.replace(/const fs = require('fs');
const path = require('path');

console.log('Starting automatic merge conflict resolution...');

// Function to resolve conflicts in a file
function resolveConflicts(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        // Check if file has conflicts
        if (!content.includes('
        // Remove any remaining conflict markers
        content = content.replace(/        content = content.replace(/
        // Clean up multiple empty lines
        content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
        fs.writeFileSync(filePath, content);
        console.log(`✓ Resolved conflicts in: ${filePath}`);
        return true;
    } catch (error) {
        console.error(`Error resolving conflicts in ${filePath}:`, error.message);
        return false;
    }
}

// Function to find all files with conflicts
function findConflictFiles(dir) {
    const conflictFiles = [];
    function scanDirectory(currentDir) {
        const files = fs.readdirSync(currentDir);
        for (const file of files) {
            const filePath = path.join(currentDir, file);
            const stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
                // Skip node_modules, .git, and other common directories
                if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {
                    scanDirectory(filePath);
                }
            } else if (stat.isFile()) {
                // Check if file has conflicts
                try {
                    const content = fs.readFileSync(filePath, 'utf8');
                    if (content.includes('')) {
                        conflictFiles.push(filePath);
                    }
                } catch (error) {
                    // Skip files that can't be read
                }
            }
        }
    }
    scanDirectory(dir);
    return conflictFiles;
}

// Main execution
const conflictFiles = findConflictFiles('/workspace');
console.log(`Found ${conflictFiles.length} files with merge conflicts`);

let resolvedCount = 0;
for (const file of conflictFiles) {
    if (resolveConflicts(file)) {
        resolvedCount++;
    }
}

console.log(`\nResolution complete!`);
console.log(`Files processed: ${conflictFiles.length}`);
console.log(`Conflicts resolved: ${resolvedCount}`);
console.log(`Remaining conflicts: ${conflictFiles.length - resolvedCount}`);
