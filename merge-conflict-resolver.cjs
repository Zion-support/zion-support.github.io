#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting merge conflict resolution and PR merging...');

// Function to execute shell commands
function exec(command, options = {}) {
  try {
    return execSync(command, { 
      encoding: 'utf8', 
      stdio: 'inherit',
      ...options 
    });
  } catch (error) {
    console.error(`❌ Command failed: ${command}`);
    console.error(error.message);
    return null;
  }
}

// Function to get all cursor branches
function getCursorBranches() {
  try {
    const output = execSync('git branch -r | grep "origin/cursor/" | head -20', { encoding: 'utf8' });
    return output.trim().split('\n').filter(line => line.trim());
  } catch (error) {
    console.log('No cursor branches found or error getting branches');
    return [];
  }
}

// Function to resolve merge conflicts in a file
function resolveConflicts(filePath) {
  if (!fs.existsSync(filePath)) {
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix common merge conflict patterns
  content = content.replace(/<<<<<<< HEAD\n/g, '');
  content = content.replace(/=======\n/g, '');
  content = content.replace(/>>>>>>> [^\n]+\n/g, '');
  
  // Fix duplicate React.JSX.Element types
  content = content.replace(/React\.JSX\.Element\s+React\.JSX\.Element/g, 'React.JSX.Element');
  content = content.replace(/React\.JSX\.Element\s+React\.JSX\.Element\s+React\.JSX\.Element/g, 'React.JSX.Element');
  
  // Fix malformed JSX
  content = content.replace(/className="[^"]*"[^>]*>/g, 'className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">');
  
  fs.writeFileSync(filePath, content);
  console.log(`✅ Resolved conflicts in ${filePath}`);
}

// Function to resolve all conflicts in the repo
function resolveAllConflicts() {
  console.log('🔍 Scanning for merge conflicts...');
  
  // Get list of files with conflicts
  try {
    const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
      .trim()
      .split('\n')
      .filter(line => line.trim());
    
    if (conflictedFiles.length > 0) {
      console.log(`Found ${conflictedFiles.length} files with conflicts:`);
      conflictedFiles.forEach(file => {
        console.log(`  - ${file}`);
        resolveConflicts(file);
      });
    } else {
      console.log('No merge conflicts detected');
    }
  } catch (error) {
    console.log('No merge conflicts detected');
  }

  // Scan for common problematic patterns in TSX files
  const tsxFiles = execSync('find src -name "*.tsx" -type f', { encoding: 'utf8' })
    .trim()
    .split('\n')
    .filter(line => line.trim());

  let fixedFiles = 0;
  tsxFiles.forEach(file => {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      let originalContent = content;
      
      // Fix duplicate return types
      content = content.replace(/React\.JSX\.Element\s+React\.JSX\.Element/g, 'React.JSX.Element');
      content = content.replace(/React\.JSX\.Element\s+React\.JSX\.Element\s+React\.JSX\.Element/g, 'React.JSX.Element');
      
      // Fix malformed className
      content = content.replace(/className="[^"]*"[^>]*>/g, 'className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">');
      
      if (content !== originalContent) {
        fs.writeFileSync(file, content);
        fixedFiles++;
        console.log(`✅ Fixed patterns in ${file}`);
      }
    }
  });

  if (fixedFiles > 0) {
    console.log(`✅ Fixed patterns in ${fixedFiles} files`);
  }
}

// Function to merge a branch into main
function mergeBranch(branchName) {
  console.log(`🔄 Attempting to merge ${branchName}...`);
  
  try {
    // Fetch the branch
    exec(`git fetch origin ${branchName}`);
    
    // Try to merge
    const mergeResult = exec(`git merge origin/${branchName} --no-edit`);
    
    if (mergeResult !== null) {
      console.log(`✅ Successfully merged ${branchName}`);
      return true;
    }
  } catch (error) {
    console.log(`⚠️  Merge conflict with ${branchName}, resolving...`);
    
    // Resolve conflicts
    resolveAllConflicts();
    
    // Add resolved files
    exec('git add .');
    
    // Commit the merge
    try {
      exec('git commit --no-edit');
      console.log(`✅ Resolved conflicts and merged ${branchName}`);
      return true;
    } catch (commitError) {
      console.log(`❌ Failed to commit merge for ${branchName}`);
      exec('git merge --abort');
      return false;
    }
  }
  
  return false;
}

// Main execution
async function main() {
  console.log('🚀 Starting comprehensive merge process...');
  
  // Ensure we're on main branch
  exec('git checkout main');
  exec('git pull origin main');
  
  // Resolve any existing conflicts
  resolveAllConflicts();
  
  // Get cursor branches to merge
  const branches = getCursorBranches();
  console.log(`Found ${branches.length} cursor branches to process`);
  
  let mergedCount = 0;
  let failedCount = 0;
  
  // Process branches in batches to avoid overwhelming the system
  const batchSize = 5;
  for (let i = 0; i < branches.length; i += batchSize) {
    const batch = branches.slice(i, i + batchSize);
    console.log(`\n📦 Processing batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(branches.length/batchSize)}`);
    
    for (const branch of batch) {
      const branchName = branch.replace('origin/', '');
      console.log(`\n🔄 Processing ${branchName}...`);
      
      if (mergeBranch(branchName)) {
        mergedCount++;
      } else {
        failedCount++;
      }
    }
    
    // Small delay between batches
    if (i + batchSize < branches.length) {
      console.log('⏳ Waiting before next batch...');
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  console.log('\n📊 Merge Summary:');
  console.log(`✅ Successfully merged: ${mergedCount} branches`);
  console.log(`❌ Failed to merge: ${failedCount} branches`);
  
  // Final cleanup
  resolveAllConflicts();
  exec('git add .');
  
  // Check if there are changes to commit
  try {
    exec('git diff --cached --quiet', { stdio: 'pipe' });
    console.log('📝 No additional changes to commit');
  } catch (error) {
    exec('git commit -m "🔧 Resolve merge conflicts and integrate cursor branches"');
    console.log('📝 Committed final changes');
  }
  
  // Push to main
  console.log('🚀 Pushing changes to main...');
  exec('git push origin main');
  
  console.log('🎉 Merge process completed!');
}

// Run the script
main().catch(error => {
  console.error('💥 Script failed:', error);
  process.exit(1);
});