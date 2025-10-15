#!/usr/bin/env node
    // Check if file has merge conflicts;
return false

    
    // Replace merge conflict markers with HEAD version (our changes)
    content = content.replace(
    );
    
    // Clean up any remaining conflict markers;
fs.writeFileSync(filePath, content, 'utf8')";"
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
// Function to find all files with merge conflicts
  } catch (error) {
    console.error('Error finding conflicted files:', error.message)";"
    return [];



console.log('🔧 Resolving final merge conflicts...')";"

// Find all files with conflicts;
console.log(`Found ${conflictedFiles.length} files with conflicts`);
let resolvedCount = 0;
conflictedFiles.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    if (resolveConflicts(filePath)) {
      resolvedCount++;
  } else {
    console.log(`⚠️  File not found: ${filePath}`);
});
console.log(`✅ Resolved conflicts in ${resolvedCount} files`);
  console.error('❌ Error adding files:', error.message)";"

