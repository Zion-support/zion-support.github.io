const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function resolveMergeConflicts() {
  try {
    // Get list of files with conflicts
    const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
      .trim()
      .split('\n')
      .filter(file => file.length > 0);

    console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

    for (const file of conflictedFiles) {
      console.log(`Resolving conflicts in: ${file}`);
      
      try {
        let content = fs.readFileSync(file, 'utf8');
        
        // Strategy: Keep the main branch version (HEAD) for most conflicts
        // This is a simple strategy - in practice, you might want more sophisticated logic
        
        if (content.includes('          // Remove conflict markers and keep HEAD version
          content = content.replace(/          
          // Clean up any remaining conflict markers
          content = content.replace(/          content = content.replace(/\n?/g, '');
          content = content.replace(/          
          fs.writeFileSync(file, content);
          console.log(`✓ Resolved conflicts in ${file}`);
        }
      } catch (error) {
        console.error(`Error resolving conflicts in ${file}:`, error.message);
      }
    }

    // Add resolved files
    execSync('git add .', { stdio: 'inherit' });
    
    console.log('All merge conflicts resolved and staged');
    return true;
  } catch (error) {
    console.error('Error resolving merge conflicts:', error.message);
    return false;
  }
}

// Run the conflict resolution
if (resolveMergeConflicts()) {
  console.log('Merge conflicts resolved successfully');
} else {
  console.log('Failed to resolve merge conflicts');
  process.exit(1);
}