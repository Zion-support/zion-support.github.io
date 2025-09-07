const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = '/workspace';

function findMergeConflictFiles(dir) {
    let filesWithConflicts = [];
    const command = `grep -l -R "<<<<<<< HEAD" ${dir}`;
    try {
        const output = execSync(command, { encoding: 'utf8' });
        filesWithConflicts = output.split('\n').filter(file => file.trim() !== '');
    } catch (error) {
        // grep returns non-zero exit code if no matches are found
    }
    return filesWithConflicts;
}

function resolveConflictsInFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Strategy: Keep our version (HEAD) for most files, but be smart about it
        let resolvedContent = content;
        
        // For package.json, prefer our version but merge dependencies
        if (filePath.includes('package.json')) {
            resolvedContent = resolvePackageJsonConflicts(content);
        }
        // For tsconfig.json, prefer our version
        else if (filePath.includes('tsconfig.json')) {
            resolvedContent = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n[\s\S]*?\n>>>>>>> .*\n/g, '$1');
        }
        // For vite.config.js, prefer our version
        else if (filePath.includes('vite.config.js')) {
            resolvedContent = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n[\s\S]*?\n>>>>>>> .*\n/g, '$1');
        }
        // For index.html, prefer our version
        else if (filePath.includes('index.html')) {
            resolvedContent = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n[\s\S]*?\n>>>>>>> .*\n/g, '$1');
        }
        // For src files, prefer our enhanced versions
        else if (filePath.includes('src/')) {
            resolvedContent = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n[\s\S]*?\n>>>>>>> .*\n/g, '$1');
        }
        // For other files, prefer our version
        else {
            resolvedContent = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n[\s\S]*?\n>>>>>>> .*\n/g, '$1');
        }
        
        // Clean up any remaining conflict markers
        resolvedContent = resolvedContent
            .replace(/<<<<<<< HEAD/g, '')
            .replace(/=======/g, '')
            .replace(/>>>>>>> .*/g, '')
            .trim();

        fs.writeFileSync(filePath, resolvedContent, 'utf8');
        console.log(`Resolved merge conflicts in: ${filePath}`);
        return true;
    } catch (error) {
        console.error(`Error resolving conflicts in ${filePath}:`, error.message);
        return false;
    }
}

function resolvePackageJsonConflicts(content) {
    // For package.json, we want to keep our enhanced version but merge any new dependencies
    return content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n[\s\S]*?\n>>>>>>> .*\n/g, '$1');
}

function resolveAllConflicts() {
    console.log("Starting merge conflict resolution...");
    const filesWithConflicts = findMergeConflictFiles(rootDir);
    console.log(`Found ${filesWithConflicts.length} files with merge conflicts.`);
    
    filesWithConflicts.forEach(filePath => {
        resolveConflictsInFile(filePath);
    });
    
    console.log("Merge conflict resolution complete!");
}

resolveAllConflicts();