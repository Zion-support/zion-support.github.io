const fs = require('fs');
const path = require('path');

console.log('🚀 Final comprehensive merge conflict resolution...');

// Function to clean a single file
function cleanFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        if (!content.includes('
        content = content.replace(/<<<<<<< [^\n]+\n?/g, '');
        content = content.replace(/
        // Clean up duplicate lines
        const lines = content.split('\n');
        const seen = new Set();
        const cleaned = [];
        for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed && !seen.has(trimmed)) {
                seen.add(trimmed);
                cleaned.push(line);
            } else if (!trimmed) {
                cleaned.push(line);
            }
        }
        content = cleaned.join('\n');
        // Remove excessive empty lines
        content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
        fs.writeFileSync(filePath, content);
        return true;
    } catch (error) {
        console.error(`Error cleaning ${filePath}:`, error.message);
        return false;
    }
}

// Find all files with conflicts
function findConflicts(dir) {
    const conflicts = [];
    function scan(currentDir) {
        try {
            const items = fs.readdirSync(currentDir);
            for (const item of items) {
                const itemPath = path.join(currentDir, item);
                const stat = fs.statSync(itemPath);
                if (stat.isDirectory()) {
                    if (!['node_modules', '.git', 'dist', 'build', '.next', 'temp_exclude', 'backup-problematic-files'].includes(item)) {
                        scan(itemPath);
                    }
                } else if (stat.isFile()) {
                    try {
                        const content = fs.readFileSync(itemPath, 'utf8');
                        if (content.includes('')) {
                            conflicts.push(itemPath);
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
    scan(dir);
    return conflicts;
}

// Main execution
const conflictFiles = findConflicts('/workspace');
console.log(`Found ${conflictFiles.length} files with conflicts`);

let cleanedCount = 0;
for (const file of conflictFiles) {
    if (cleanFile(file)) {
        cleanedCount++;
    }
}

console.log(`Cleaned ${cleanedCount} files`);

// Final verification
const remaining = findConflicts('/workspace');
console.log(`Remaining conflicts: ${remaining.length}`);

if (remaining.length === 0) {
    console.log('🎉 All conflicts resolved!');
} else {
    console.log('⚠️  Some conflicts remain:');
    remaining.forEach(file => console.log(`  - ${file}`));
}
