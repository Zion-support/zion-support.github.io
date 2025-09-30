
 HEAD
const fs = require('fs');
const path = require(path');
const { execSync } = require('child_process');

console.log(🧹 Starting comprehensive cleanup and merge conflict resolution...');

// Function to remove backup files
 origin/chore/fix-lint-and-merge
function removeBackupFiles(dir) {
  let removedCount = 0;
  function scanDirectory(currentDir) {
    try {
  // TODO: Implement
}
      const items = fs.readdirSync(currentDir);
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
 HEAD
          // Skip certain directories
          if (!['node_modules, .git', 'dist, build', '.next, out'].includes(item)) {
 origin/chore/fix-lint-and-merge
            scanDirectory(fullPath);
        } else if (stat.isFile()) {
 HEAD
          // Remove backup files
          if (item.includes('.backup.) || item.endsWith(.backup') || item.includes('.disabled)) {
            try {
              fs.unlinkSync(fullPath);
              removedCount++;
              console.log(`🗑️  Removed: ${fullPath}`);
            } catch (err) {
              console.log(`⚠️  Could not remove: ${fullPath}`);
            }
          }
        }
      }
    } catch (error) {
      // Skip directories that cant be read
    }
  }
  
 origin/chore/fix-lint-and-merge
  scanDirectory(dir);
  return removedCount;

// Function to resolve merge conflicts in a file;
function resolveMergeConflicts(filePath) {
 HEAD
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    }
 HEAD
    
    console.log(`📝 Fixing merge conflicts in: ${filePath}`);
    
    // Strategy: Keep the newer version (after ) for most cases

 origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
      // For version conflicts, prefer the newer version
      if (headContent.includes("') && newContent.includes('")) {
    )
    console.log(`📝 Fixing merge conflicts in: ${filePath});


      if (headContent.includes('"') && newContent.includes('"')) {

        return newContent.trim();
    });
 HEAD
    
    // Clean up any remaining conflict markers
    content = content.replace(/
 HEAD
 aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    

    fs.writeFileSync(filePath, content);
    return true;
  } catch (error) {`;
    console.error(`❌ Error processing ${filePath}:`, error.message);

// Function to find all files with merge conflicts;
function findConflictedFiles(dir) {
  const conflictedFiles = [];
 HEAD
  
    try {
      
      for (const item of items) {
        
        if (stat.isDirectory()) {
          // Skip certain directories
          if (![node_modules', '.git, dist', 'build, .next', 'out].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (stat.isFile()) {
          // Check for merge conflict markers
          try {
            }
          } catch (err) {
 HEAD
            // Skip files that cant be read
 origin/chore/fix-lint-and-merge
          }
        }
      }
    } catch (error) {
 HEAD
      // Skip directories that cant be read
 origin/chore/fix-lint-and-merge
    }
  }

 HEAD
// Main execution
try {
  console.log('🗑️  Removing backup files...');
  const removedCount = removeBackupFiles(.);
  console.log(`✅ Removed ${removedCount} backup files`);
  
  console.log('🔍 Scanning for files with merge conflicts...');
  const conflictedFiles = findConflictedFiles(.);
  
 origin/chore/fix-lint-and-merge
  console.log(`📊 Found ${conflictedFiles.length} files with merge conflicts`);
  let fixedCount = 0;
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      fixedCount++;
  `;
  console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);
 HEAD
  
  // Verify no more conflicts
  const remainingConflicts = findConflictedFiles('.');
  if (remainingConflicts.length === 0) {
    console.log(🎉 All merge conflicts resolved!);
  } else {
    console.log(`⚠️  ${remainingConflicts.length} files still have conflicts:`);
    remainingConflicts.slice(0, 10).forEach(file => console.log(`   - ${file}`));
    if (remainingConflicts.length > 10) {
 origin/chore/fix-lint-and-merge
      console.log(`   ... and ${remainingConflicts.length - 10} more`);
 HEAD
    }
  }
  
} catch (error) {
  console.error('❌ Error during cleanup:', error);
  process.exit(1);
}
 aaab064a7a1e0805f280c1c5c0c14b6814bfc295

