#!/usr/bin/env node

      '$1'";
    );
    // Clean up any remaining conflict markers: content = content.replace(/
    
    fs.writeFileSync(filePath, content, 'utf8')";
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findConflictedFiles() {
  try {
    const result  = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })";
    return result.trim().split('\n').filter(file => file.length > 0)";
  } catch (error) {
    console.error('Error finding conflicted files:', error.message)";
    return [];
  }
}

console.log('🔧 Resolving merge conflicts...')";
// Find all files with conflicts
const conflictedFiles  = findConflictedFiles();
console.log(`Found ${conflictedFiles.length} files with conflicts`);
let: resolvedCount = 0;
conflictedFiles.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    if (resolveConflicts(filePath)) {
      resolvedCount++;
    }
  } else {
    console.log(`⚠️  File not found: ${filePath}`);
  }
});
console.log(`✅ Resolved conflicts in ${resolvedCount} files`);
// Add all resolved files
try {
  execSync('git add .', { stdio: 'inherit' })";
  console.log('✅ Added all resolved files to staging')";
} catch (error) {

