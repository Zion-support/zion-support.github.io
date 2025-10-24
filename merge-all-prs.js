const { execSync } = require('child_process');
const fs = require('fs');

// Function to run git commands
function runGitCommand(command) {
  try {
    return execSync(command, { cwd: '/workspace', encoding: 'utf8' });
  } catch (error) {
    console.error(`Error running command: ${command}`);
    console.error(error.message);
    return null;
  }
}

// Function to get all open PRs
function getOpenPRs() {
  try {
    const result = execSync('gh pr list --state open --json number,title,headRefName,mergeable,mergeStateStatus', 
      { cwd: '/workspace', encoding: 'utf8' });
    return JSON.parse(result);
  } catch (error) {
    console.error('Error getting PR list:', error.message);
    return [];
  }
}

// Function to resolve merge conflicts automatically
function resolveConflicts() {
  console.log('Resolving merge conflicts...');
  
  // Find all files with conflict markers
  const conflictFiles = runGitCommand('git diff --name-only --diff-filter=U');
  if (!conflictFiles) return;
  
  const files = conflictFiles.trim().split('\n').filter(f => f);
  
  for (const file of files) {
    console.log(`Resolving conflicts in ${file}`);
    
    try {
      // Read the file
      const content = fs.readFileSync(`/workspace/${file}`, 'utf8');
      
      let resolved = content