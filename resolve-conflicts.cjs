<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove all merge conflict markers and keep the main branch version (after =======)
    
    // Clean up any remaining conflict markers
    
    // Remove any remaining conflict markers
    
    // Clean up multiple newlines
    content = content.replace(/\n{3,}/g, '\n\n');
=======

    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictStart = -1;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

        inConflict = false;
        conflictStart = -1;
        continue;
      }

      if (!inConflict) {
        resolvedLines.push(line);
      }
    }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Resolved conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
<<<<<<< HEAD
    console.error(`❌ Error processing ${filePath}:`, error.message);
=======
    console.error(`Error processing ${filePath}:`, error.message);

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
    return false;
  }
}

<<<<<<< HEAD
// Function to find all files with merge conflicts
function findConflictedFiles() {
  try {
    const result = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    console.log('No merge conflicts found or not in a merge state');
    return [];
  }
}

// Function to find files with conflict markers
function findFilesWithConflictMarkers() {
  const conflictedFiles = [];
  
  function searchDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          searchDirectory(fullPath);
        }
      } else if (stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.jsx') || item.endsWith('.md') || item.endsWith('.json'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
<<<<<<< HEAD
          if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>> ')) {
            conflictedFiles.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
=======
// Find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
        }
      }
    }
  }
<<<<<<< HEAD
  
  searchDirectory('.');
  return conflictedFiles;
}

// Main execution
function main() {
  console.log('🔍 Searching for files with merge conflicts...');
  
  // First, try to get conflicted files from git
  let conflictedFiles = findConflictedFiles();
  
  // If no git conflicts, search for files with conflict markers
  if (conflictedFiles.length === 0) {
    conflictedFiles = findFilesWithConflictMarkers();
  }
  
  if (conflictedFiles.length === 0) {
    console.log('✅ No merge conflicts found!');
    return;
  }
  
  console.log(`📁 Found ${conflictedFiles.length} files with conflicts:`);
  conflictedFiles.forEach(file => console.log(`  - ${file}`));
  
  let resolvedCount = 0;
  
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  }
  
  console.log(`\n🎉 Resolution complete!`);
  console.log(`✅ Resolved conflicts in ${resolvedCount} files`);
  
  if (resolvedCount > 0) {
    console.log('\n📝 Next steps:');
    console.log('1. Review the resolved files');
    console.log('2. Test the application');
    console.log('3. Commit the changes');
    console.log('4. Complete the merge');
  }
}

// Run the script
main();
=======

  walkDir(dir);
  return files;
}

// Process all files
const filesWithConflicts = findFilesWithConflicts('.');
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let resolvedCount = 0;
for (const file of filesWithConflicts) {
  if (resolveMergeConflicts(file)) {

    resolvedCount++;
  }
}

console.log(`Resolved conflicts in ${resolvedCount} files`);

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
