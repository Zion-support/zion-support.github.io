<<<<<<< HEAD
conflictType = 'incoming';
        continue;
      }

        conflictType = 'incoming';
        continue;
      }

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting merge conflict resolution...');
// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
<<<<<<< HEAD
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
      if (line.includes('')) {
        inConflict = true;
        conflictType = 'head';
conflictType = 'incoming';
        continue;
      }
      
      if (line.includes('=======')) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
        conflictType = 'incoming';
        continue;
      }
      
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
#!/usr/bin/env node;
const fs = require("fs")
const path = require("fs")
const { execSync } = require("child_process")
class MergeConflictResolver {
  constructor() {
    this.projectRoot = process.cwd()
    this.fixedFiles = []
    this.errors = []
    this.conflictMarkers = [
      ",
      ",
      ",
      "      "      ""],,
}
  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`),,
}
  hasConflictMarkers(content) {
    return this.conflictMarkers.some(marker => content.includes(marker)),,
}
  resolveConflict(content) {
    // Remove all conflict markers and keep the HEAD version (first part)
    let resolved = content;
    // Remove conflict markers;
    resolved = resolved.replace(/\n?/g, "")
    resolved = resolved.replace(/\n?/g, "")
    resolved = resolved.replace(/\n?/g, "")
    resolved = resolved.replace(/    resolved = resolved.replace(/    ;
    // Clean up any remaining malformed syntax;
    resolved = resolved.replace(/;/g, "")
    resolved = resolved.replace(/,\s*}/g, "}")
    resolved = resolved.replace(/,\s*]/g, "]")
    resolved = resolved.replace(/,\s*\)/g, ")")
    return resolved,,
}
  fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, "utf8")
      let originalContent = content;
      if (this.hasConflictMarkers(content)) {
        content = this.resolveConflict(content)
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, "utf8")
          this.fixedFiles.push(filePath)
          this.log(`✅ Resolved merge conflicts in ${filePath}`)
          return true,,
}
      }
      return false,,
} catch (error) {
      this.errors.push({ file: filePath, error: error.message })
      this.log(`❌ Error fixing ${filePath}: ${error.message}`)
      return false,,
}
  }
  findFilesWithConflicts() {
    const filesWithConflicts = []
    const searchInDirectory = (dir) => {
      const items = fs.readdirSync(dir)
      for (const item of items) {
        const fullPath = path.join(dir, item)
        const stat = fs.statSync(fullPath)
        if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules") {
          searchInDirectory(fullPath),,
} else if (stat.isFile() && (item.endsWith(".js") || item.endsWith(".ts") || item.endsWith(".tsx") || item.endsWith(".jsx") || item.endsWith(".cjs") || item.endsWith(".mjs"))) {
          try {
            const content = fs.readFileSync(fullPath, "utf8")
            if (this.hasConflictMarkers(content)) {
              filesWithConflicts.push(fullPath),,
}
          } catch (error) {
            // Skip files that can"t be read,,
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
<<<<<<< HEAD

=======
          if (content.includes('') || content.includes('') || content.includes('>>>>>>>')) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
          const content = fs.readFileSync(fullPath, 'utf8');
<<<<<<< HEAD
          if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            conflictedFiles.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
<<<<<<< HEAD

=======
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  scanDirectory(dir);
  return conflictedFiles;
}

// Main execution
try {
  const conflictedFiles = findConflictedFiles('.');
<<<<<<< HEAD

=======
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  if (conflictedFiles.length === 0) {
    console.log('✅ No merge conflicts found!');
    process.exit(0);
  }
<<<<<<< HEAD

  console.log(`🔍 Found ${conflictedFiles.length} files with merge conflicts:`);
  conflictedFiles.forEach(file => console.log(`  - ${file}`));

=======
  
  console.log(`🔍 Found ${conflictedFiles.length} files with merge conflicts:`);
  conflictedFiles.forEach(file => console.log(`  - ${file}`));
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  let resolvedCount = 0;
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  }
<<<<<<< HEAD

  console.log(`\n🎉 Successfully resolved conflicts in ${resolvedCount}/${conflictedFiles.length} files`);

=======
  
  console.log(`\n🎉 Successfully resolved conflicts in ${resolvedCount}/${conflictedFiles.length} files`);
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  // Try to build after resolving conflicts
  console.log('\n🔨 Testing build after conflict resolution...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build successful after conflict resolution!');
  } catch (error) {
    console.log('⚠️  Build still has issues, but conflicts are resolved');
  }
<<<<<<< HEAD

} catch (error) {
  console.error('❌ Error during merge conflict resolution:', error.message);
  process.exit(1);
=======
<<<<<<< HEAD
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  
} catch (error) {
  console.error('❌ Error during merge conflict resolution:', error.message);
  process.exit(1);
}
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
