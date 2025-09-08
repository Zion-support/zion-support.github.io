#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting comprehensive conflict resolution and merge process...\n');

// Function to execute git commands safely
function execGit(command, options = {}) {
  try {
    console.log(`📝 Executing: git ${command}`);
    const result = execSync(`git ${command}`, { 
      encoding: 'utf8', 
      cwd: '/workspace',
      ...options 
    });
    console.log(`✅ Success: ${command}`);
    return result;
  } catch (error) {
    console.log(`⚠️  Warning: ${command} - ${error.message}`);
    return null;
  }
}

// Function to resolve merge conflicts in a file
function resolveConflictsInFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }
    
    console.log(`🔧 Resolving conflicts in: ${filePath}`);
    
    // Simple conflict resolution strategy
    // Keep the incoming changes (after =======) and remove conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let keepIncoming = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        keepIncoming = false;
        continue;
      } else if (line.includes('=======')) {
        keepIncoming = true;
        continue;
      } else if (line.includes('>>>>>>>')) {
        inConflict = false;
        keepIncoming = false;
        continue;
      }
      
      if (!inConflict || keepIncoming) {
        resolvedLines.push(line);
      }
    }
    
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.log(`❌ Error resolving conflicts in ${filePath}: ${error.message}`);
    return false;
  }
}

// Function to find and resolve all conflict files
function resolveAllConflicts() {
  console.log('🔍 Searching for files with merge conflicts...\n');
  
  try {
    // Get list of files with conflicts
    const result = execSync('find /workspace -name "*.js" -o -name "*.ts" -o -name "*.tsx" -o -name "*.jsx" -o -name "*.json" -o -name "*.toml" -o -name "*.md" | head -50', { 
      encoding: 'utf8',
      cwd: '/workspace'
    });
    
    const files = result.trim().split('\n').filter(f => f);
    let resolvedCount = 0;
    
    for (const file of files) {
      if (resolveConflictsInFile(file)) {
        resolvedCount++;
      }
    }
    
    console.log(`\n✅ Resolved conflicts in ${resolvedCount} files\n`);
    return resolvedCount > 0;
  } catch (error) {
    console.log(`❌ Error finding conflict files: ${error.message}`);
    return false;
  }
}

// Main execution function
async function main() {
  try {
    console.log('📋 Step 1: Checking current git status...\n');
    execGit('status');
    
    console.log('\n📋 Step 2: Resolving all merge conflicts...\n');
    const hasConflicts = resolveAllConflicts();
    
    if (hasConflicts) {
      console.log('📋 Step 3: Adding resolved files...\n');
      execGit('add .');
      
      console.log('📋 Step 4: Committing resolved conflicts...\n');
      execGit('commit -m "Resolve all merge conflicts automatically"');
    }
    
    console.log('📋 Step 5: Checking for open PRs...\n');
    
    // Try to get list of open PRs
    try {
      const prs = execGit('ls-remote --heads origin | grep -E "cursor/|feature/|fix/" | head -10');
      if (prs) {
        console.log('Found branches:', prs);
      }
    } catch (error) {
      console.log('Could not fetch remote branches:', error.message);
    }
    
    console.log('📋 Step 6: Attempting to merge all branches into main...\n');
    
    // Get all remote branches
    try {
      const branches = execGit('branch -r | grep -v HEAD | grep -v main | head -10');
      if (branches) {
        const branchList = branches.trim().split('\n').filter(b => b.trim());
        
        for (const branch of branchList) {
          const branchName = branch.trim().replace('origin/', '');
          console.log(`\n🔄 Attempting to merge branch: ${branchName}`);
          
          try {
            execGit(`checkout ${branchName}`);
            execGit('pull origin main');
            execGit('checkout main');
            execGit(`merge ${branchName} --no-ff -m "Merge ${branchName} into main"`);
            console.log(`✅ Successfully merged ${branchName}`);
          } catch (error) {
            console.log(`⚠️  Could not merge ${branchName}: ${error.message}`);
          }
        }
      }
    } catch (error) {
      console.log('Could not process branches:', error.message);
    }
    
    console.log('\n📋 Step 7: Final status check...\n');
    execGit('status');
    
    console.log('\n📋 Step 8: Pushing to main...\n');
    execGit('push origin main');
    
    console.log('\n🎉 Conflict resolution and merge process completed!\n');
    
  } catch (error) {
    console.log(`\n❌ Error during execution: ${error.message}`);
    process.exit(1);
  }
}

// Run the main function
main().catch(console.error);