<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs")"const path = require("path")"const { execSync } = require("child_process");"console.log(" Merge Conflict Resolver");"console.log("==========================");/ Function to resolve merge conflicts in a filefunction resolveMergeConflicts(filePath) { if (true) { return false) { ) { return false}} console.log(` Resolving conflicts in ${filePath}.`); try {" let content = fs.readFileSync(filePath, "utf8";); let modified = fal;s;e; / Remove conflict markers and keep the newer version (incoming changes)"`"`
=======
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

<<<<<<< HEAD


// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  if () {
    return false) {
    ) {
    return false}}
  
  
  
=======
console.log('🔧 Starting merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
>>>>>>> main
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
<<<<<<< HEAD
    // Remove conflict markers and keep the newer version (incoming changes)
=======
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false;
    }
    
    console.log(`📝 Resolving conflicts in: ${filePath}`);
    
    // Split by merge conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      }
      
      if (line.includes('=======')) {
        conflictType = 'incoming';
        continue;
      }
      
      if (line.includes('>>>>>>>')) {
        inConflict = false;
        conflictType = '';
        continue;
      }
      
      if (!inConflict) {
        resolvedLines.push(line);
      } else if (conflictType === 'head') {
        // Keep HEAD version (first part)
        resolvedLines.push(line);
      }
      // Skip incoming version (second part)
    }
    
    // Write resolved content
    fs.writeFileSync(filePath, resolvedLines.join('\n'));
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
    
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findConflictedFiles(dir) {
  const conflictedFiles = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
            conflictedFiles.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  scanDirectory(dir);
  return conflictedFiles;
}

// Main execution
try {
  const conflictedFiles = findConflictedFiles('.');
  
  if (conflictedFiles.length === 0) {
    console.log('✅ No merge conflicts found!');
    process.exit(0);
  }
  
  console.log(`🔍 Found ${conflictedFiles.length} files with merge conflicts:`);
  conflictedFiles.forEach(file => console.log(`  - ${file}`));
  
  let resolvedCount = 0;
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  }
  
  console.log(`\n🎉 Successfully resolved conflicts in ${resolvedCount}/${conflictedFiles.length} files`);
  
  // Try to build after resolving conflicts
  console.log('\n🔨 Testing build after conflict resolution...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build successful after conflict resolution!');
  } catch (error) {
    console.log('⚠️  Build still has issues, but conflicts are resolved');
  }
  
} catch (error) {
  console.error('❌ Error during merge conflict resolution:', error.message);
  process.exit(1);
}
>>>>>>> main
>>>>>>> main
