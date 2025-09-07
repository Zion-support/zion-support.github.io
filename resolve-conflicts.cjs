const fs = require('fs');
const path = require(path');

// Function to resolve merge conflicts by choosing the remote version
function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all merge conflict markers and keep only the remote version
    content = content.replace(/\n[\s\S]*?\n([\s\S]*?)    
    // Also handle cases where there are only  and     content = content.replace(/\n([\s\S]*?)    
    // Remove any remaining conflict markers
    content = content.replace(/\n/g, '');
    content = content.replace(/    
    fs.writeFileSync(filePath, content, utf8');
    console.log(`Resolved conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}: ${error.message}`);
    return false;
  }

// Get list of conflicted files
function getConflictedFiles() {
  try {
    const { execSync } = require('child_process');
    const output = execSync(git status --porcelain | grep "^UU\\|^AA\\|^DD"', { encoding: 'utf8 });
    return output.trim().split(\n').map(line => line.split(' ).pop()).filter(Boolean);
  } catch (error) {
    console.error(Error getting conflicted files:', error.message);
    return [];
  }

// Main execution
console.log('Starting conflict resolution...);
const conflictedFiles = getConflictedFiles();

if (conflictedFiles.length === 0) {
  console.log(No conflicted files found.');
  process.exit(0);
}

console.log(`Found ${conflictedFiles.length} conflicted files.`);

let resolvedCount = 0;
conflictedFiles.forEach(filePath => {
  if (resolveConflicts(filePath)) {
    resolvedCount++;
  }
});

console.log(`Resolved conflicts in ${resolvedCount}/${conflictedFiles.length} files.`);
console.log('Conflict resolution completed!');