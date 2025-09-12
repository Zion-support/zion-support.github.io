<<<<<<< HEAD
=======
=======
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  if () {
    return false) {
    ) {
    return false}}
console.log('🔧 Starting merge conflict resolution...');
// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    // Remove conflict markers and keep the newer version (incoming changes)
    // Check if file has merge conflicts
<<<<<<< HEAD
=======
    if (!content.includes('') && !content.includes('') && !content.includes('>>>>>>>')) {
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
        continue;
      }
      if (line.includes('')) {
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
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
=======
#!/usr/bin/env node;
const fs = require("fs")
const path = require("fs")
const { execSync } = require("child_process")
class MergeConflictResolver {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
    this.conflictMarkers = [;
      ",;
      ",;
      ",;
      "      "      ""]}

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`)}

  hasConflictMarkers(content) {
    return this.conflictMarkers.some(marker => content.includes(marker))}

  resolveConflict(content) {
    // Remove all conflict markers and keep the HEAD version (first part);
    let resolved = content;
    // Remove conflict markers;
    resolved = resolved.replace(/\n?/g, "");
    resolved = resolved.replace(/\n?/g, "");
    resolved = resolved.replace(/\n?/g, "");
    resolved = resolved.replace(/    resolved = resolved.replace(/    ;
    // Clean up any remaining malformed syntax;
    resolved = resolved.replace(/;/g, "");
    resolved = resolved.replace(/,\s*}/g, "}");
    resolved = resolved.replace(/,\s*]/g, "]");
    resolved = resolved.replace(/,\s*\)/g, ")");
    return resolved}

  fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, "utf8");
      let originalContent = content;
      if (this.hasConflictMarkers(content)) {
        content = this.resolveConflict(content);
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, "utf8");
          this.fixedFiles.push(filePath);
          this.log(`✅ Resolved merge conflicts in ${filePath}`);
          return true}
      }
      return false} catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false}
  }

  findFilesWithConflicts() {
    const filesWithConflicts = [];
    const searchInDirectory = (dir) => {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules") {
          searchInDirectory(fullPath)} else if (stat.isFile() && (item.endsWith(".js") || item.endsWith(".ts") || item.endsWith(".tsx") || item.endsWith(".jsx") || item.endsWith(".cjs") || item.endsWith(".mjs"))) {
          try {
            const content = fs.readFileSync(fullPath, "utf8");
            if (this.hasConflictMarkers(content)) {
              filesWithConflicts.push(fullPath)}
          } catch (error) {
            // Skip files that can"t be read,,
>>>>>>> origin/automation-fixes
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
<<<<<<< HEAD
=======
          if (content.includes('') || content.includes('') || content.includes('>>>>>>>')) {
            conflictedFiles.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
<<<<<<< HEAD
=======
    searchInDirectory(this.projectRoot)
    return filesWithConflicts,,
}
  resolveAllConflicts() {
    this.log("🔧 Starting merge conflict resolution...')
    const filesWithConflicts = this.findFilesWithConflicts()
    this.log(`Found ${filesWithConflicts.length} files with merge conflicts`)
    for (const file of filesWithConflicts) {
      this.fixFile(file),,
}
    this.log(`🎉 Merge conflict resolution completed. Fixed ${this.fixedFiles.length} files.`)
    if (this.errors.length > 0) {
      this.log(`❌ ${this.errors.length} errors encountered:`)
      this.errors.forEach(err => {
        this.log(`   - ${err.file}: ${err.error}`),,
}),,
}
    return {
      fixedFiles: this.fixedFiles,
      errors: this.errors,
      totalConflicts: filesWithConflicts.length,,
}
>>>>>>> origin/automation-fixes
  }
  scanDirectory(dir);
  return conflictedFiles;
}
<<<<<<< HEAD
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
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
