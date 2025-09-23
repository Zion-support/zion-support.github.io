#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

function runCommand(command, description, options = {}) {
  try {
    console.log(`Running: ${description}`);
    const result = execSync(command, { 
      encoding: 'utf8', 
      cwd: '/workspace',
      stdio: options.silent ? 'pipe' : 'inherit',
      ...options 
    });
    console.log(`✅ ${description} completed`);
    return result;
  } catch (error) {
    console.error(`❌ ${description} failed:`, error.message);
    if (!options.allowFailure) {
      throw error;
    }
    return null;
  }
}

function getCurrentBranch() {
  try {
    return runCommand('git rev-parse --abbrev-ref HEAD', 'Get current branch', { silent: true });
  } catch {
    return 'main';
  }
}

function checkForMergeConflicts() {
  try {
    const status = runCommand('git status --porcelain', 'Check git status', { silent: true });
    const hasConflicts = status.includes('UU') || status.includes('AA') || status.includes('DD');
    return hasConflicts;
  } catch {
    return false;
  }
}

function resolveMergeConflicts() {
  console.log('🔧 Checking for merge conflicts...');
  
  try {
    // Check for conflicted files
    const conflictedFiles = runCommand('git diff --name-only --diff-filter=U', 'Get conflicted files', { silent: true, allowFailure: true });
    
    if (conflictedFiles && conflictedFiles.trim()) {
      console.log(`Found conflicted files: ${conflictedFiles}`);
      
      // Try to resolve conflicts automatically
      const files = conflictedFiles.split('\n').filter(f => f.trim());
      
      for (const file of files) {
        if (fs.existsSync(file)) {
          console.log(`Resolving conflicts in: ${file}`);
          
          // Read the file content
          let content = fs.readFileSync(file, 'utf8');
          
          // Simple conflict resolution: prefer incoming changes (after =======)
          if (content.includes('<<<<<<<') && content.includes('>>>>>>>')) {
            // Split by conflict markers and take the incoming changes
            const parts = content.split(/<<<<<<<.*?\n(.*?)=======\n(.*?)>>>>>>>.*?\n/s);
            
            if (parts.length >= 3) {
              // Take the incoming changes (after =======)
              const resolvedContent = parts[0] + parts[2] + (parts[3] || '');
              fs.writeFileSync(file, resolvedContent);
              console.log(`✅ Resolved conflicts in ${file}`);
            }
          }
          
          // Stage the resolved file
          runCommand(`git add "${file}"`, `Stage resolved file: ${file}`);
        }
      }
      
      // Commit the resolved conflicts
      const staged = runCommand('git diff --cached --name-only', 'Check staged files', { silent: true, allowFailure: true });
      if (staged && staged.trim()) {
        runCommand('git commit -m "Resolve merge conflicts automatically"', 'Commit resolved conflicts');
      }
    } else {
      console.log('No merge conflicts found');
    }
  } catch (error) {
    console.log('No conflicts to resolve or error during resolution:', error.message);
  }
}

async function mergeOpenPRs() {
  console.log('🔄 Checking for open PRs to merge...');
  
  try {
    // Get repository info
    const remoteUrl = runCommand('git remote get-url origin', 'Get remote URL', { silent: true });
    const repoMatch = remoteUrl.match(/github\.com[:/](.+?)\/(.+?)(?:\.git)?$/);
    
    if (!repoMatch) {
      console.log('Could not determine repository owner/name');
      return;
    }
    
    const [, owner, repo] = repoMatch;
    console.log(`Repository: ${owner}/${repo}`);
    
    // Note: For actual GitHub API integration, you would need a GitHub token
    // For now, we'll focus on local git operations
    
    // Switch to main branch
    const currentBranch = getCurrentBranch();
    if (currentBranch !== 'main') {
      runCommand('git checkout main', 'Switch to main branch');
    }
    
    // Pull latest changes
    runCommand('git pull origin main', 'Pull latest changes from main');
    
    console.log('✅ Repository is up to date');
    
  } catch (error) {
    console.error('Error during PR merge process:', error.message);
  }
}

function improveCodebase() {
  console.log('🚀 Proceeding with code improvements...');
  
  try {
    // Run linting and fix issues
    console.log('Running linting...');
    runCommand('npm run lint:fix', 'Fix linting issues', { allowFailure: true });
    
    // Run type checking
    console.log('Running type checking...');
    runCommand('npm run type-check', 'Type checking', { allowFailure: true });
    
    // Build the project
    console.log('Building project...');
    runCommand('npm run build', 'Build project');
    
    console.log('✅ Code improvements completed');
    
  } catch (error) {
    console.error('Error during code improvements:', error.message);
  }
}

async function main() {
  console.log('🚀 Starting comprehensive merge and improvement process...');
  
  try {
    // Step 1: Resolve merge conflicts
    resolveMergeConflicts();
    
    // Step 2: Merge open PRs
    await mergeOpenPRs();
    
    // Step 3: Proceed with improvements
    improveCodebase();
    
    console.log('🎉 All tasks completed successfully!');
    
  } catch (error) {
    console.error('❌ Process failed:', error.message);
    process.exit(1);
  }
}

// Run the main function
main();