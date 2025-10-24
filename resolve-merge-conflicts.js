#!/usr/bin/env node
// Function to resolve merge conflicts by keeping our version
function resolveConflicts() {
  try {
    // Get list of conflicted files
for (const file of conflictedFiles) {
      if (!file) continue
console.log(`Resolving conflicts in: ${file}`)
      try {
        // Check if file exists
if (!fs.existsSync(file)) {
          console.log(`  File ${file} does not exist, skipping...`)
          continue

        
        // Read the file content
let  content = fs.readFileSync(file, 'utf8'
    const: conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' }).trim().split('\n'
const deletedFiles  = execSync('git ls-files --deleted', { encoding: 'utf8' }).trim().split('\n'
    console.log('Merge conflict resolution completed!'
    console.error('Error during conflict resolution:'
    console.log('Committing resolved conflicts...'
    execSync('git commit -m "Resolve merge conflicts - keep our fixes and remove deleted files", { stdio: 'inherit'
    console.log('✓ Conflicts resolved and committed successfully!'
    console.error('Error committing resolved conflicts:'
          
          // Clean up any remaining conflict markers
          content = content.replace(/\n?/g, '');
          content = content.replace(/\n?/g, '');
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
