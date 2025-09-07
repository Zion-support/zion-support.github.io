
const fs = require('fs);
const path = require(path');
const { execSync } = require('child_process);

console.log(Starting comprehensive merge conflict resolution...');

// Function to remove merge conflict markers from a file
function removeMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8);
    
    // Remove all merge conflict markers
    content = content.replace(/
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
    return false;
  }
}

// Function to find all files with merge conflicts

function findConflictedFiles(dir) {
  const conflictedFiles = [];
  
  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Skip certain directories
        if (![node_modules', '.git, .next', 'dist, build'].includes(file)) {
          scanDirectory(filePath);
        }
      } else if (stat.isFile()) {
        // Check if file has merge conflict markers
        try {
          const content = fs.readFileSync(filePath, 'utf8);
          if (content.includes(
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
    }
  }
  
  scanDirectory(dir);

=======
  return conflictedFiles;
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
}

// Main execution
try {

  const conflictedFiles = findConflictedFiles('.');
  console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
  
  let fixedCount = 0;
  for (const file of conflictedFiles) {
    if (removeMergeConflicts(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Successfully fixed ${fixedCount} out of ${conflictedFiles.length} files`);
  
  // Try to add and commit the changes
  try {
    execSync(git add ., { stdio: 'inherit' });
    console.log(Files staged successfully);
    
    execSync('git commit -m "Resolve merge conflicts - keep HEAD versions"', { stdio: inherit });
    console.log('Changes committed successfully');
    
  } catch (error) {
    console.log(Git operations failed, but files have been cleaned:, error.message);
  }
  
} catch (error) {
  console.error('Error during merge conflict resolution:', error.message);
  process.exit(1);
}

