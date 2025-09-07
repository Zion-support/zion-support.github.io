#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting comprehensive merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
return false; // No conflicts in this file;
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split content by conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictBuffer = [];
let conflictType = null; // 'ours' or 'theirs';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('')) {
        inConflict = true;
        conflictType = 'ours';
        conflictBuffer = [];
        continue;
      } else if (line.startsWith('')) {
        conflictType = 'theirs';
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
    try {
        console.log(`🔧 Processing: ${filePath}`);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // For most files, prefer the HEAD version (our changes)
        // But for certain file types, prefer the incoming changes
const preferTheirs = filePath.includes('yarn.lock') ||;
                           filePath.includes('package-lock.json') ||
                           filePath.includes('tsconfig.tsbuildinfo') ||
                           filePath.includes('temp_exclude/') ||
                           filePath.includes('src_backup/') ||
                           filePath.includes('temp_components/');
        
        if (preferTheirs) {
          // Use the incoming changes (theirs) - but we need to get them from the conflict
          // For now, let's just use our changes and handle these special cases separately
          resolvedLines.push(...conflictBuffer);
        } else {
          // Use our changes (HEAD) - this is the default
          resolvedLines.push(...conflictBuffer);
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
    
    // Write resolved content
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    
return true; // Conflicts were resolved;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findConflictedFiles() {
  try {
    const result = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    console.log('No conflicted files found or git diff failed');
    return [];
  }
}

// Function to handle special file types
function handleSpecialFiles() {
const specialFiles = [;
    'yarn.lock',
    'tsconfig.tsbuildinfo'
  ];
  
  specialFiles.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`Handling special file: ${file}`);
      try {
        // For these files, let's use the incoming version
        execSync(`git checkout --theirs ${file}`, { stdio: 'inherit' });
        execSync(`git add ${file}`, { stdio: 'inherit' });
        console.log(`✓ Resolved special file: ${file}`);
      } catch (error) {
        console.log(`⚠ Could not resolve special file ${file}: ${error.message}`);
      }
    }
}

// Function to handle deleted files conflicts
function handleDeletedFiles() {
const deletedFiles = [;
    'temp_exclude/pages-disabled/api.tsx',
    'temp_exclude/pages.disabled_full/services.tsx',
    'temp_exclude/server/src/index.ts',
    'temp_exclude/services/apiDocGeneratorService.ts',
    'temp_exclude/setupTests.ts'
  ];
  
  deletedFiles.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`Removing deleted file: ${file}`);
      try {
        execSync(`git rm ${file}`, { stdio: 'inherit' });
        console.log(`✓ Removed deleted file: ${file}`);
      } catch (error) {
        console.log(`⚠ Could not remove file ${file}: ${error.message}`);
      }
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

    // Handle deleted files conflicts first
    handleDeletedFiles();

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
        execSync('git commit -m "fix: resolve comprehensive merge conflicts\n\n- Resolved conflicts in ' + resolvedCount + ' files\n- Kept HEAD version for consistency\n- Cleaned up duplicate content\n- Removed deleted files"');
    }

    console.log('🎉 Comprehensive merge conflict resolution completed!');
}

main().catch(console.error);