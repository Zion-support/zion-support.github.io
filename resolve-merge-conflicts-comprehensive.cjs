const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Starting comprehensive merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
<<<<<<< HEAD
=======
    if (!content.includes('') && !content.includes('') && !content.includes('>>>>>>>')) {
      return false; // No conflicts in this file
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split content by conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictBuffer = [];
    let conflictType = null; // 'ours' or 'theirs'
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('')) {
        inConflict = true;
        conflictType = 'ours';
        conflictBuffer = [];
        continue;
      } else if (line.startsWith('')) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
        conflictType = 'theirs';
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        
        // For most files, prefer the HEAD version (our changes)
        // But for certain file types, prefer the incoming changes
        const preferTheirs = filePath.includes('yarn.lock') || 
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
        
        conflictBuffer = [];
        conflictType = null;
        continue;
      }
      
      if (inConflict) {
        if (conflictType === 'ours') {
          conflictBuffer.push(line);
        }
        // Skip lines from 'theirs' section unless we prefer them
      } else {
        resolvedLines.push(line);
      }
    }
    
    // Write resolved content
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    
    return true; // Conflicts were resolved
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
  const specialFiles = [
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
  });
}

// Function to remove deleted files
function handleDeletedFiles() {
  const deletedFiles = [
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
  });
}

// Main resolution process
function resolveAllConflicts() {
  console.log('Finding files with merge conflicts...');
  const conflictedFiles = findConflictedFiles();
  
  if (conflictedFiles.length === 0) {
    console.log('No merge conflicts found.');
    return true;
  }
  
  console.log(`Found ${conflictedFiles.length} files with conflicts:`);
  conflictedFiles.forEach(file => console.log(`  - ${file}`));
  
  // Handle special files first
  handleSpecialFiles();
  handleDeletedFiles();
  
  let resolvedCount = 0;
  let failedCount = 0;
  
  conflictedFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      if (resolveMergeConflicts(filePath)) {
        resolvedCount++;
        console.log(`✓ Resolved conflicts in ${filePath}`);
      } else {
        failedCount++;
        console.log(`✗ Failed to resolve conflicts in ${filePath}`);
      }
    } else {
      console.log(`⚠ File not found: ${filePath}`);
    }
  });
  
  console.log(`\nResolution complete:`);
  console.log(`  - Resolved: ${resolvedCount} files`);
  console.log(`  - Failed: ${failedCount} files`);
  
  return failedCount === 0;
}

// Execute the resolution
const success = resolveAllConflicts();

if (success) {
  console.log('\nAll merge conflicts resolved successfully!');
  console.log('Adding resolved files to git...');
  
  try {
    execSync('git add .', { stdio: 'inherit' });
    console.log('✓ All files added to git');
  } catch (error) {
    console.log('⚠ Error adding files to git:', error.message);
  }
} else {
  console.log('\nSome conflicts could not be resolved automatically.');
  console.log('Please review the failed files manually.');
}

process.exit(success ? 0 : 1);