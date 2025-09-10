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
            // Skip files that can"t be read,,}
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
            conflictedFiles.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
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
  }
  scanDirectory(dir);
  return conflictedFiles;
}
