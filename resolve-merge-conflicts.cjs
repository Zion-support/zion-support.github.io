const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
});
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
console.log('🔧 Starting automatic merge conflict resolution...');
// Get list of files with merge conflicts
const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
const conflictFiles = gitStatus.split('\n')
  .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
  .map(line => line.split(' ').pop())
  .filter(file => file && file !== '');
console.log(`Found ${conflictFiles.length} files with merge conflicts`);
// Function to resolve conflicts by choosing incoming changes
function resolveConflicts(filePath) {
  try {
    console.log(`Resolving conflicts in ${filePath}...`);
    // Read the file content
    let content = fs.readFileSync(filePath, 'utf8');
    // Replace merge conflict markers with incoming changes
    // Remove and
    content = content.replace(/[\s\S]*?
    // Write the resolved content back
    fs.writeFileSync(filePath, content);
    // Add the file to git
    execSync(`git add "${filePath}"`, { stdio: 'inherit' });
    console.log(`✅ Resolved conflicts in ${filePath}`);
  } catch (error) {
    console.error(`❌ Failed to resolve conflicts in ${filePath}:`, error.message);
  }
}
