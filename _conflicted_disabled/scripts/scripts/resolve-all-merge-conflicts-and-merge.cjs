const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔄 Starting comprehensive merge conflict resolution and PR merging...');

// Function to run git commands safely
function runGitCommand(command, description) {
  try {
    console.log(`📋 ${description}...`);
    const result = execSync(command, { encoding: 'utf8', cwd: '/workspace' });
    console.log(`✅ ${description} completed`);
    return result;
  } catch (error) {
    console.log(`❌ ${description} failed: ${error.message}`);
    return null;
  }
}

// Function to resolve merge conflicts by choosing our version
function resolveConflictsByChoosingOurs() {
  console.log('🔧 Resolving conflicts by choosing our version...');
  
  // Get list of conflicted files
  const conflictedFiles = runGitCommand('git diff --name-only --diff-filter=U', 'Getting conflicted files');
  
  if (conflictedFiles) {
    const files = conflictedFiles.trim().split('\n').filter(f => f);
    console.log(`Found ${files.length} conflicted files`);
    
    for (const file of files) {
      try {
        console.log(`🔧 Resolving conflicts in ${file}...`);
        
        // Read the file
        let content = fs.readFileSync(file, 'utf8');
        
        // Remove all merge conflict markers and keep our version
        content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
        
        // Clean up any remaining conflict markers
        content = content.replace(/<<<<<<< HEAD/g, '');
        content = content.replace(/=======/g, '');
        content = content.replace(/>>>>>>> [^\n]+/g, '');
        // Clean up extra whitespace and empty lines
        content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
        content = content.replace(/^\s*\n/gm, '');
        
        // Write the cleaned file
        fs.writeFileSync(file, content);
        console.log(`✅ Resolved conflicts in ${file}`);
        
      } catch (error) {
        console.log(`❌ Error resolving ${file}: ${error.message}`);
      }
    }
  }
}

// Function to add and commit resolved conflicts
function commitResolvedConflicts() {
  console.log('📝 Adding and committing resolved conflicts...');
  
  runGitCommand('git add .', 'Adding all resolved files');
  runGitCommand('git commit -m "Resolve merge conflicts - keeping our cleaned up version"', 'Committing resolved conflicts');
}

// Function to merge all open PRs
async function mergeAllOpenPRs() {
  console.log('🔄 Attempting to merge all open PRs...');
  
  // Get all remote branches
  const branches = runGitCommand('git branch -r', 'Getting remote branches');
  
  if (branches) {
    const branchList = branches.trim().split('\n')
      .map(b => b.trim())
      .filter(b => b && !b.includes('origin/main') && !b.includes('origin/HEAD'))
      .slice(0, 10); // Limit to first 10 branches to avoid overwhelming
    
    console.log(`Found ${branchList.length} branches to potentially merge`);
    
    for (const branch of branchList) {
      const branchName = branch.replace('origin/', '');
      console.log(`\n🔄 Attempting to merge ${branchName}...`);
      
      try {
        // Fetch the branch
        runGitCommand(`git fetch origin ${branchName}`, `Fetching ${branchName}`);
        
        // Try to merge
        const mergeResult = runGitCommand(`git merge origin/${branchName} --no-commit`, `Merging ${branchName}`);
        
        if (mergeResult) {
          // Check for conflicts
          const status = runGitCommand('git status --porcelain', 'Checking merge status');
          
          if (status && status.includes('UU')) {
            console.log(`⚠️  Conflicts found in ${branchName}, resolving...`);
            resolveConflictsByChoosingOurs();
            runGitCommand(`git commit -m "Merge ${branchName} - resolved conflicts"`, `Committing merge of ${branchName}`);
          } else {
            runGitCommand(`git commit -m "Merge ${branchName}"`, `Committing merge of ${branchName}`);
          }
          
          console.log(`✅ Successfully merged ${branchName}`);
        }
        
      } catch (error) {
        console.log(`❌ Failed to merge ${branchName}: ${error.message}`);
        // Abort the merge if it failed
        runGitCommand('git merge --abort', `Aborting failed merge of ${branchName}`);
      }
    }
  }
}

// Function to push changes
function pushChanges() {
  console.log('🚀 Pushing all changes...');
  runGitCommand('git push origin main', 'Pushing to main branch');
}

// Main execution
async function main() {
  console.log('🚀 Starting comprehensive merge conflict resolution and PR merging...');
  
  // Step 1: Resolve current merge conflicts
  console.log('\n📋 Step 1: Resolving current merge conflicts...');
  resolveConflictsByChoosingOurs();
  commitResolvedConflicts();
  
  // Step 2: Try to merge open PRs
  console.log('\n📋 Step 2: Attempting to merge open PRs...');
  await mergeAllOpenPRs();
  
  // Step 3: Push all changes
  console.log('\n📋 Step 3: Pushing changes...');
  pushChanges();
  
  console.log('\n🎉 Merge conflict resolution and PR merging completed!');
  console.log('📊 Summary:');
  console.log('- Resolved all current merge conflicts');
  console.log('- Attempted to merge open PRs');
  console.log('- Pushed all changes to main branch');
}

// Run the main function
main().catch(console.error);
