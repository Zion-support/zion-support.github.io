#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fixed = false;

    // Check if file has merge conflicts
    if (content.includes('      log(`🔧 Resolving conflicts in: ${filePath}`, 'yellow');

      // Remove merge conflict markers and keep HEAD version (first part)
      content = content.replace(/      
      // Remove any remaining conflict markers
      content = content.replace(/      content = content.replace(/\n?/g, '');
      content = content.replace(/      
      // Clean up extra whitespace
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
      content = content.replace(/^\s+$/gm, '');

      fixed = true;
    }

    if (fixed && content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      log(`✅ Resolved conflicts in: ${filePath}`, 'green');
      return true;
    }

    return false;
  } catch (error) {
    log(`❌ Error resolving conflicts in ${filePath}: ${error.message}`, 'red');
    return false;
  }
}

// Function to find files with merge conflicts
function findConflictedFiles() {
  const conflictedFiles = [];

  function scanDirectory(dir) {
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          scanDirectory(fullPath);
        } else if (stat.isFile() && (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.json') || item.endsWith('.md'))) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('              conflictedFiles.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }

  scanDirectory('.');
  return conflictedFiles;
}

// Function to merge PRs
async function mergePRs() {
  try {
    log('🔄 Starting PR merge process...', 'cyan');

    // Switch to main branch
    execSync('git checkout main', { stdio: 'inherit' });
    log('✅ Switched to main branch', 'green');

    // Pull latest changes
    execSync('git pull origin main', { stdio: 'inherit' });
    log('✅ Pulled latest changes from main', 'green');

    // List of PR branches to merge
    const prBranches = [
      'cursor/fix-netlify-build-and-merge-to-main-c6f9',
      'cursor/build-application-with-vite-and-nextjs-2b63'
    ];

    for (const branch of prBranches) {
      try {
        log(`🔄 Attempting to merge branch: ${branch}`, 'blue');

        // Fetch the branch
        execSync(`git fetch origin ${branch}`, { stdio: 'inherit' });

        // Check if branch exists
        try {
          execSync(`git show-ref --verify --quiet refs/remotes/origin/${branch}`, { stdio: 'pipe' });
        } catch (error) {
          log(`⚠️ Branch ${branch} not found, skipping...`, 'yellow');
          continue;
        }

        // Merge the branch
        execSync(`git merge origin/${branch} --no-ff -m "Merge PR branch: ${branch}"`, { stdio: 'inherit' });
        log(`✅ Successfully merged branch: ${branch}`, 'green');

      } catch (error) {
        log(`❌ Failed to merge branch ${branch}: ${error.message}`, 'red');
        // Continue with other branches
      }
    }

  } catch (error) {
    log(`❌ Error during PR merge process: ${error.message}`, 'red');
    throw error;
  }
}

// Function to verify build
function verifyBuild() {
  try {
    log('🔍 Verifying build...', 'cyan');
    execSync('npm install', { stdio: 'inherit' });
    execSync('npm run build', { stdio: 'inherit' });
    log('✅ Build successful!', 'green');
    return true;
  } catch (error) {
    log(`❌ Build failed: ${error.message}`, 'red');
    return false;
  }
}

// Main function
async function main() {
  try {
    log('🚀 Starting comprehensive merge conflict resolution and PR merging...', 'cyan');

    // Step 1: Find and resolve merge conflicts
    log('🔍 Searching for files with merge conflicts...', 'blue');
    const conflictedFiles = findConflictedFiles();

    if (conflictedFiles.length === 0) {
      log('✅ No merge conflicts found!', 'green');
    } else {
      log(`Found ${conflictedFiles.length} files with merge conflicts:`, 'yellow');
      conflictedFiles.forEach(file => log(`  - ${file}`, 'yellow'));

      let resolvedCount = 0;
      for (const file of conflictedFiles) {
        if (resolveMergeConflicts(file)) {
          resolvedCount++;
        }
      }

      log(`🎉 Resolved conflicts in ${resolvedCount}/${conflictedFiles.length} files`, 'green');
    }

    // Step 2: Merge PRs
    await mergePRs();

    // Step 3: Verify build
    if (verifyBuild()) {
      // Step 4: Commit and push changes
      log('📤 Committing and pushing changes...', 'cyan');
      execSync('git add .', { stdio: 'inherit' });
      execSync('git commit -m "Resolve merge conflicts and merge PRs into main branch"', { stdio: 'inherit' });
      execSync('git push origin main', { stdio: 'inherit' });
      log('🎉 All changes committed and pushed successfully!', 'green');
    } else {
      log('⚠️ Build verification failed. Please check the errors above.', 'yellow');
    }

  } catch (error) {
    log(`❌ Error during execution: ${error.message}`, 'red');
    process.exit(1);
  }
}

// Run main function
if (require.main === module) {
  main();
}

module.exports = { resolveMergeConflicts, findConflictedFiles, mergePRs, verifyBuild };