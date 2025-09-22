const fs = require('fs');
const path = require('path');

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to resolve conflicts in a single file
function resolveFileConflicts(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        if (!content.includes('
        // Remove any remaining conflict markers
        content = content.replace(/<<<<<<< [^\n]+\n?/g, '');
        content = content.replace(/
        // Clean up multiple empty lines
        content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
        // Remove duplicate imports (common issue after merge conflicts)
        const lines = content.split('\n');
        const seenImports = new Set();
        const cleanedLines = [];
        for (const line of lines) {
            if (line.trim().startsWith('import ') && line.includes(' from ')) {
                if (!seenImports.has(line.trim())) {
                    seenImports.add(line.trim());
                    cleanedLines.push(line);
                }
            } else {
                cleanedLines.push(line);
            }
        }
        content = cleanedLines.join('\n');
        fs.writeFileSync(filePath, content);
        console.log(`✅ Resolved: ${filePath}`);
        return true;
    } catch (error) {
        console.error(`❌ Error in ${filePath}:`, error.message);
        return false;
    }
}

// Find all files with conflicts
function findConflictFiles(dir) {
    const conflictFiles = [];
    function scanDirectory(currentDir) {
        try {
            const files = fs.readdirSync(currentDir);
            for (const file of files) {
                const filePath = path.join(currentDir, file);
                const stat = fs.statSync(filePath);
                if (stat.isDirectory()) {
                    // Skip certain directories
                    if (!['node_modules', '.git', 'dist', 'build', '.next', 'temp_exclude', 'backup-problematic-files'].includes(file)) {
                        scanDirectory(filePath);
                    }
                } else if (stat.isFile()) {
                    // Check for conflict markers
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
        } catch (error) {
            // Skip directories that can't be read
        }
    }
    scanDirectory(dir);
    return conflictFiles;
}

// Main execution
console.log('🔍 Scanning for files with merge conflicts...');
const conflictFiles = findConflictFiles('/workspace');

console.log(`📊 Found ${conflictFiles.length} files with conflicts`);

let resolvedCount = 0;
const startTime = Date.now();

for (const file of conflictFiles) {
    if (resolveFileConflicts(file)) {
        resolvedCount++;
    }
}

const endTime = Date.now();
const duration = ((endTime - startTime) / 1000).toFixed(2);

console.log('\n🎉 Conflict resolution completed!');
console.log(`📈 Files processed: ${conflictFiles.length}`);
console.log(`✅ Conflicts resolved: ${resolvedCount}`);
console.log(`⏱️  Time taken: ${duration}s`);

// Verify no conflicts remain
console.log('\n🔍 Verifying no conflicts remain...');
const remainingConflicts = findConflictFiles('/workspace');
if (remainingConflicts.length === 0) {
    console.log('🎊 All conflicts resolved successfully!');
} else {
    console.log(`⚠️  ${remainingConflicts.length} files still have conflicts:`);
    remainingConflicts.forEach(file => console.log(`   - ${file}`));
}