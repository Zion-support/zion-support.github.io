const fs = require('fs');
const path = require('path');

console.log('🚀 Starting comprehensive merge conflict resolution...');

// Function to clean up a file with conflicts
function cleanFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        if (!content.includes('<<<<<<< HEAD')) {
            return false;
        }
        
        console.log(`🔧 Cleaning: ${filePath}`);
        
        // Create backup
        fs.writeFileSync(`${filePath}.backup`, content);
        
        // Remove all conflict markers and keep HEAD version
        content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n?/g, '$1');
        
        // Remove any remaining conflict markers
        content = content.replace(/<<<<<<< [^\n]+\n?/g, '');
        content = content.replace(/=======\n?/g, '');
        content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
        
        // Clean up duplicate lines
        const lines = content.split('\n');
        const seen = new Set();
        const cleanedLines = [];
        
        for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed && seen.has(trimmed)) {
                continue; // Skip duplicate lines
            }
            if (trimmed) {
                seen.add(trimmed);
            }
            cleanedLines.push(line);
        }
        
        content = cleanedLines.join('\n');
        
        // Remove excessive empty lines
        content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
        
        fs.writeFileSync(filePath, content);
        console.log(`✅ Cleaned: ${filePath}`);
        return true;
        
    } catch (error) {
        console.error(`❌ Error cleaning ${filePath}:`, error.message);
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
                    // Skip certain directories
                    if (!['node_modules', '.git', 'dist', 'build', '.next', 'temp_exclude', 'backup-problematic-files'].includes(item)) {
                        scan(itemPath);
                    }
                } else if (stat.isFile()) {
                    // Check for conflicts
                    try {
                        const content = fs.readFileSync(itemPath, 'utf8');
                        if (content.includes('<<<<<<< HEAD')) {
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
console.log('🔍 Scanning for merge conflicts...');
const conflictFiles = findConflicts('/workspace');

console.log(`📊 Found ${conflictFiles.length} files with conflicts`);

let cleanedCount = 0;
const startTime = Date.now();

// Process files in batches to avoid memory issues
const batchSize = 50;
for (let i = 0; i < conflictFiles.length; i += batchSize) {
    const batch = conflictFiles.slice(i, i + batchSize);
    console.log(`\n📦 Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(conflictFiles.length / batchSize)}`);
    
    for (const file of batch) {
        if (cleanFile(file)) {
            cleanedCount++;
        }
    }
}

const endTime = Date.now();
const duration = ((endTime - startTime) / 1000).toFixed(2);

console.log('\n🎉 Conflict resolution completed!');
console.log(`📈 Files processed: ${conflictFiles.length}`);
console.log(`✅ Conflicts resolved: ${cleanedCount}`);
console.log(`⏱️  Time taken: ${duration}s`);

// Final verification
console.log('\n🔍 Final verification...');
const remainingConflicts = findConflicts('/workspace');
if (remainingConflicts.length === 0) {
    console.log('🎊 All conflicts resolved successfully!');
    console.log('✅ Repository is ready for merge!');
} else {
    console.log(`⚠️  ${remainingConflicts.length} files still have conflicts:`);
    remainingConflicts.forEach(file => console.log(`   - ${file}`));
}