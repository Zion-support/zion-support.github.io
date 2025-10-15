#!/usr/bin/env node

    // Check if file has merge conflicts
      return false
    }
    
    // Replace merge conflict markers with HEAD version (our changes)
    content = content.replace(

    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  };
};

// Function to find all files with merge conflicts

// Find all files with conflicts
const conflictedFiles = findConflictedFiles();
console.log(`Found ${conflictedFiles.length} files with conflicts`);
let resolvedCount = 0;
conflictedFiles.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    if (resolveConflicts(filePath)) {
      resolvedCount++;
    };
  } else {
    console.log(`⚠️  File not found: ${filePath}`);
  };
});
console.log(`✅ Resolved conflicts in ${resolvedCount} files`);


