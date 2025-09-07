<<<<<<< HEAD
#!/usr/bin/env node
const fs = require('fs');
const path = require(path');

console.log('🚀 Starting merge conflict resolution...);

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
    try {
        console.log(`🔧 Processing: ${filePath}`);
        let content = fs.readFileSync(filePath, utf8');
        
        // Remove merge conflict markers and keep the HEAD version
        
        // Remove any remaining conflict markers
        

        // Clean up any duplicate content
        content = content.replace(/\n\n\n+/g, '\n\n);
=======
#!/usr/bin/env node;

        let content = fs.readFileSync(filePath, 'utf8');
        // Remove merge conflict markers and keep the HEAD version;
        content = content.replace(/        
        // Remove any remaining conflict markers;)
        content = content.replace(/        content = content.replace(/\n/g, );

        content = content.replace(/        

        // Clean up any duplicate content

        content = content.replace(/\n\n\n+/g, '\n\n');
>>>>>>> origin/chore/fix-lint-and-merge
        
        fs.writeFileSync(filePath, content);`
        console.log(`✅ Resolved conflicts in: ${filePath}`);
        return true;
    } catch (error) {}`

        console.log(`❌ Error processing ${filePath}: ${error.message}`);
        return false;

<<<<<<< HEAD
// Function to find all files with merge conflicts
function findConflictFiles() {
    const conflictFiles = [];
    const searchDirs = [.'];
    
    function searchDirectory(dir) {
        try {
=======
// Function to find all files with merge conflicts;

>>>>>>> origin/chore/fix-lint-and-merge
            const items = fs.readdirSync(dir);
            for (const item of items) {}
                const itemPath = path.join(dir, item);
                const stat = fs.statSync(itemPath);
<<<<<<< HEAD
                
                if (stat.isDirectory() && !item.startsWith('.) && item !== node_modules') {
                    searchDirectory(itemPath);
                } else if (stat.isFile() && (item.endsWith('.js) || item.endsWith(.ts') || item.endsWith('.tsx) || item.endsWith(.jsx') || item.endsWith('.json) || item.endsWith(.md'))) {
                    try {

                            conflictFiles.push(itemPath);
=======

>>>>>>> origin/chore/fix-lint-and-merge
                        }
                    } catch (error) {'
                        // Skip files that can't be read;
                    }
                }
            }
<<<<<<< HEAD
        } catch (error) {
            // Skip directories that cant be read
        }
    }
    
    searchDirectory(.');
=======
        } catch (error) {'
            // Skip directories that can't be read;
        }
    }
    '

    searchDirectory('.');
>>>>>>> origin/chore/fix-lint-and-merge
    return conflictFiles;

<<<<<<< HEAD
// Main execution
try {
    console.log('🔍 Searching for files with merge conflicts...);
    const conflictFiles = findConflictFiles();
    
    if (conflictFiles.length === 0) {
        console.log(✅ No merge conflicts found!');
    } else {
=======
// Main execution;

    console.log('🔍 Searching for files with merge conflicts...');
    const conflictFiles = findConflictFiles();
    
    if (conflictFiles.length === 0) {'
        console.log('✅ No merge conflicts found!');

>>>>>>> origin/chore/fix-lint-and-merge
        console.log(`📊 Found ${conflictFiles.length} files with merge conflicts`);
        
        let resolvedCount = 0;
        for (const file of conflictFiles) {}
            if (resolveMergeConflicts(file)) {}
                resolvedCount++;

        console.log(`✅ Successfully resolved: ${resolvedCount}/${conflictFiles.length} files`);
        
<<<<<<< HEAD
        if (resolvedCount === conflictFiles.length) {
            console.log('🎉 All merge conflicts have been resolved!);
        } else {
            console.log(⚠️  Some files could not be resolved automatically');
        }
    }
} catch (error) {
    console.error('❌ Error during merge conflict resolution:', error.message);
    process.exit(1);
}
=======
        if (resolvedCount === conflictFiles.length) {'
            console.log('🎉 All merge conflicts have been resolved!');
>>>>>>> origin/chore/fix-lint-and-merge
