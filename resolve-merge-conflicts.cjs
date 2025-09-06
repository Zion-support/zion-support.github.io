

 (Resolve merge conflicts: clean up all conflict markers)
const fs = require('fs');
const path = require('path');

const { execSync } = require('child_process');

)
    content = content
      .replace(/([\s\S]*?)
      .replace(/[\s\S]*?
      .replace(//g, '')
      .replace(/=======[\s\S]*?
      .replace(//g, '')
      .replace(/
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Resolved conflicts in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error resolving ${filePath}:`, error.message);
    return false;
  }
}
 (Resolve merge conflicts: clean up all conflict markers)

console.log(`Found ${conflictedFiles.length} conflicted files`);

// Categorize conflicts
const modifyDeleteConflicts = [];
const contentConflicts = [];
const addAddConflicts = [];

conflictedFiles.forEach(file => {
  const status = execSync(`git status --porcelain "${file}"`).toString().trim();
  

  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip certain directories
          if (!['node_modules', '.git', 'dist', 'build', '.next', 'cache'].includes(item)) {
            traverse(fullPath);
          }
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (['.js', '.ts', '.tsx', '.jsx'].includes(ext)) {
            try {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (content.includes('
 (Resolve merge conflicts: clean up all conflict markers)
});

console.log(`Modify/Delete conflicts: ${modifyDeleteConflicts.length}`);
console.log(`Content conflicts: ${contentConflicts.length}`);
console.log(`Add/Add conflicts: ${addAddConflicts.length}`);

// Resolve modify/delete conflicts by accepting remote deletion
console.log('\nResolving modify/delete conflicts...');
modifyDeleteConflicts.forEach(file => {
  try {
    execSync(`git rm "${file}"`);
    console.log(`✓ Deleted: ${file}`);
  } catch (error) {
    console.error(`✗ Failed to delete ${file}: ${error.message}`);
  }

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
            
            // For most files, accept the main branch version (ours)
            // For deleted files in main, remove them
            if (file.includes('performance-monitor.cjs') || 
                file.includes('coach.ts') || 
                file.includes('complete.ts') || 
                file.includes('leaderboard.ts')) {
                // These files were deleted in main, so remove them
                try {
                    fs.unlinkSync(file);
                    console.log(`Removed deleted file: ${file}`);
                } catch (err) {
                    console.log(`Could not remove file ${file}: ${err.message}`);
                }
            } else {
                // Accept main branch version for other files
                try {
                    execSync(`git checkout --ours "${file}"`, { stdio: 'pipe' });
                    execSync(`git add "${file}"`, { stdio: 'pipe' });
                    console.log(`Resolved conflicts in: ${file}`);
                } catch (err) {
                    console.log(`Could not resolve ${file}: ${err.message}`);
                }
            }
        }
        
        // Add all resolved files
        execSync('git add .', { stdio: 'pipe' });
        
        console.log('Merge conflicts resolved successfully');
        return true;
        
    } catch (error) {
        console.error('Error resolving merge conflicts:', error.message);
        return false;
 (Resolve merge conflicts: clean up all conflict markers)
    }
    execSync(`git add "${file}"`);
    console.log(`✓ Resolved content conflict: ${file}`);
  } catch (error) {
    console.error(`✗ Failed to resolve content conflict in ${file}: ${error.message}`);
  }
});

if (resolveMergeConflicts()) {
    console.log('Ready to commit merge resolution');
} else {

  console.log(`⚠️  ${remainingConflicts.length} files still have conflicts`);
}
=======
console.log('\n🎉 Merge conflict resolution completed!');

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 397314509ef (Resolve merge conflicts: clean up all conflict markers)
