
// Function to remove backup files;
<<<<<<< HEAD
=======

>>>>>>> 2a52ffcaecd5f6a836f52d5d40dfd3f48a28a425
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
<<<<<<< HEAD
          // Skip certain directories;

            scanDirectory(fullPath);
        } else if (stat.isFile()) {
=======

          // Skip certain directories
          if (!['node_modules, .git', 'dist, build', '.next, out'].includes(item)) {

          // Skip certain directories;


            scanDirectory(fullPath);
        } else if (stat.isFile()) {

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
  

>>>>>>> 2a52ffcaecd5f6a836f52d5d40dfd3f48a28a425
          // Remove backup files;

  // TODO: Implement
              fs.unlinkSync(fullPath);
              removedCount++;

<<<<<<< HEAD
=======

>>>>>>> 2a52ffcaecd5f6a836f52d5d40dfd3f48a28a425
  scanDirectory(dir);
  return removedCount;

// Function to resolve merge conflicts in a file;
function resolveMergeConflicts(filePath) {
<<<<<<< HEAD
    if (!content.includes(
=======
  // TODO: Implement

    }
    content = content.replace(/
=======

  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts



    if (!content.includes(




    if (!content.includes('

      return false;

  // TODO: Implement


    }

    
    console.log(`📝 Fixing merge conflicts in: ${filePath}`);
    
    // Strategy: Keep the newer version (after ) for most cases


    content = content.replace(/

>>>>>>> 2a52ffcaecd5f6a836f52d5d40dfd3f48a28a425
      // For version conflicts, prefer the newer version
      if (headContent.includes("') && newContent.includes('")) {

    )
    console.log(`📝 Fixing merge conflicts in: ${filePath});


      if (headContent.includes('"') && newContent.includes('"')) {


        return newContent.trim();
    });
<<<<<<< HEAD
    content = content.replace(/[\s\S]*?
    content = content.replace(/[\s\S]*?
=======
=======

    
    // Clean up any remaining conflict markers



    content = content.replace(/[\s\S]*?
    content = content.replace(/[\s\S]*?


>>>>>>> 2a52ffcaecd5f6a836f52d5d40dfd3f48a28a425
    content = content.replace(/


    content = content.replace(/
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> origin/chore/fix-lint-and-merge
=======






>>>>>>> 2a52ffcaecd5f6a836f52d5d40dfd3f48a28a425
    



    fs.writeFileSync(filePath, content);
    return true;
  } catch (error) {`;
    console.error(`❌ Error processing ${filePath}:`, error.message);

// Function to find all files with merge conflicts;
function findConflictedFiles(dir) {
  const conflictedFiles = [];
<<<<<<< HEAD
            const content = fs.readFileSync(fullPath, 'utf8');
            }
          } catch (err) {
            // Skip files that can't be read;
=======

  
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

            const content = fs.readFileSync(fullPath, utf8');


            const content = fs.readFileSync(fullPath, 'utf8');



            if (content.includes('
              conflictedFiles.push(fullPath);

  // TODO: Implement

          // Check for merge conflict markers;
  // TODO: Implement


            }
          } catch (err) {

            // Skip files that cant be read

            // Skip files that can't be read;

>>>>>>> 2a52ffcaecd5f6a836f52d5d40dfd3f48a28a425
          }
        }
      }
    } catch (error) {
<<<<<<< HEAD
      // Skip directories that can't be read;
    }
  }

=======

      // Skip directories that cant be read

      // Skip directories that can't be read;

    }
  }


// Main execution
try {
  console.log('🗑️  Removing backup files...');
  const removedCount = removeBackupFiles(.);
  console.log(`✅ Removed ${removedCount} backup files`);
  
  console.log('🔍 Scanning for files with merge conflicts...');
  const conflictedFiles = findConflictedFiles(.);
  

>>>>>>> 2a52ffcaecd5f6a836f52d5d40dfd3f48a28a425
  return conflictedFiles;

// Main execution;
  // TODO: Implement

<<<<<<< HEAD
=======

>>>>>>> 2a52ffcaecd5f6a836f52d5d40dfd3f48a28a425
  console.log(`📊 Found ${conflictedFiles.length} files with merge conflicts`);
  let fixedCount = 0;
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      fixedCount++;
  `;
  console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);
<<<<<<< HEAD
  // Verify no more conflicts;

      console.log(`   ... and ${remainingConflicts.length - 10} more`);
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
=======

  
  // Verify no more conflicts
  const remainingConflicts = findConflictedFiles('.');
  if (remainingConflicts.length === 0) {
    console.log(🎉 All merge conflicts resolved!);
  } else {
    console.log(`⚠️  ${remainingConflicts.length} files still have conflicts:`);
    remainingConflicts.slice(0, 10).forEach(file => console.log(`   - ${file}`));
    if (remainingConflicts.length > 10) {

  // Verify no more conflicts;


      console.log(`   ... and ${remainingConflicts.length - 10} more`);

    }
  }
  
} catch (error) {
  console.error('❌ Error during cleanup:', error);
  process.exit(1);
}
>>>>>>> 2a52ffcaecd5f6a836f52d5d40dfd3f48a28a425








