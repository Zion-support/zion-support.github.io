#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting comprehensive merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
    // Remove all merge conflict markers and keep the main branch version (after )
    content = content.replace(/[\s\S]*?([\s\S]*?)
    content = content.replace(/[\s\S]*?([\s\S]*?)
    
    // Handle incomplete conflicts (missing closing markers)
    content = content.replace(/[\s\S]*?([\s\S]*?)(?=\n|$)/g, '$1');
    
    // Clean up any remaining conflict markers
    content = content.replace(/[\s\S]*?[\s\S]*?
    content = content.replace(/[\s\S]*?[\s\S]*?
    
    // Remove any remaining conflict markers
    content = content.replace(/[\s\S]*?[\s\S]*?
    content = content.replace(/[\s\S]*?[\s\S]*?
    
    // Clean up multiple consecutive newlines
    content = content.replace(/\n{3,}/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Resolved conflicts in ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findConflictedFiles() {
  try {
    const statusOutput = execSync('git status --porcelain', { encoding: 'utf8' });
    const conflictedFiles = statusOutput
      .split('\n')
      .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
      .map(line => line.split(' ').pop())
      .filter(file => file && !file.includes('temp_conflicts/'));
    
    return conflictedFiles;
  } catch (error) {
    console.error('Error finding conflicted files:', error.message);
    return [];
  }
}

// Function to resolve yarn.lock conflicts by regenerating it
function resolveYarnLockConflicts() {
  if (fs.existsSync('yarn.lock')) {
    console.log('🔄 Resolving yarn.lock conflicts by regenerating...');
    try {
        console.log(`🔧 Processing: ${filePath}`);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Check if file has merge conflicts
        if (!content.includes('')) {
            return false; // No conflicts to resolve
        }
        
        // Strategy: Keep HEAD version (current branch) for most conflicts
        // Remove merge conflict markers and keep the HEAD version
        content = content.replace(/\n([\s\S]*?)\n([\s\S]*?)        
        // Remove any remaining conflict markers
        content = content.replace(/\n/g, '');
        content = content.replace(/\n/g, '');
        content = content.replace(/        
        // Clean up any duplicate content
        content = content.replace(/\n\n\n+/g, '\n\n');
        
        // Write the resolved content back
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Resolved conflicts in: ${filePath}`);
        return true;
    } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
        return false;
    }
}

// Function to get all files with merge conflicts
function getConflictFiles() {
    try {
        const result = execSync('grep -l "" . -r --include="*.js" --include="*.ts" --include="*.tsx" --include="*.json" --include="*.cjs" --include="*.mjs" --include="*.yml" --include="*.yaml" --include="*.sh"', { encoding: 'utf8' });
        return result.trim().split('\n').filter(file => file.length > 0);
    } catch (error) {
        return [];
    }
}

// Main execution
async function main() {
    try {
        // Check if we're in a git repository
        execSync('git rev-parse --git-dir', { stdio: 'pipe' });
        console.log('✅ Git repository detected');
    } catch (error) {
        console.error('❌ Not in a git repository');
        process.exit(1);
    }

    // Get current branch
    const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
    console.log(`📍 Current branch: ${currentBranch}`);

    // Fetch latest changes
    console.log('📥 Fetching latest changes...');
    execSync('git fetch --all --prune');

    // Get files with conflicts
    const conflictFiles = getConflictFiles();
    
    if (conflictFiles.length === 0) {
        console.log('✅ No merge conflicts found');
        return;
    }

    console.log(`🔍 Found ${conflictFiles.length} files with merge conflicts`);

    // Resolve conflicts in each file
    let resolvedCount = 0;
    for (const file of conflictFiles) {
        if (fs.existsSync(file)) {
            if (resolveMergeConflicts(file)) {
                resolvedCount++;
            }
        }
    }

    console.log(`✅ Resolved conflicts in ${resolvedCount} files`);

    // Add resolved files to staging
    if (resolvedCount > 0) {
        console.log('📝 Adding resolved files to staging...');
        execSync('git add .');
        
        // Commit the resolved conflicts
        console.log('💾 Committing resolved conflicts...');
        execSync('git commit -m "fix: resolve merge conflicts automatically\n\n- Resolved conflicts in ' + resolvedCount + ' files\n- Kept HEAD version for consistency\n- Cleaned up duplicate content"');
    }

    // Try to merge with main
    console.log('🔄 Attempting to merge with main...');
    try {
        execSync('git merge origin/main --no-edit');
        console.log('✅ Successfully merged with main');
    } catch (error) {
        console.log('⚠️  Merge failed, but conflicts have been resolved');
        console.log('You may need to manually review and complete the merge');
    }

    console.log('🎉 Merge conflict resolution completed!');
}

main().catch(console.error);
