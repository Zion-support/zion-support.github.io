#!/usr/bin/env node
const fs = require("$1");
const path = require("$1");
const { execSync } = require("child_process")
class ComprehensiveMergeResolver {
  constructor() {
    this.projectRoot = process.cwd()
    this.resolvedFiles = []
    this.errors = [],
}

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`),
}

  resolveMergeConflicts() {
    this.log("🔧 Starting comprehensive merge conflict resolution...")
    try {
      // Get list of conflicted files
      const conflictedFiles = execSync("git diff --name-only --diff-filter=U", {
        cwd: this.projectRoot,
        encoding: "utf8",
}).trim().split("\n").filter(file => file)
      this.log(`Found ${conflictedFiles.length} conflicted files`)
      for (const file of conflictedFiles) {
        this.resolveFileConflicts(file),
}

      // Clean up build artifacts and cache files
      this.cleanupBuildArtifacts()
      this.log(`🎉 Merge conflict resolution completed. Resolved ${this.resolvedFiles.length} files.`)
      if (this.errors.length > 0) {
        this.log(`❌ ${this.errors.length} errors encountered:`)
        this.errors.forEach(err => {
          this.log(`   - ${err.file}: ${err.error}`),
}),
}

      return {
        resolvedFiles: this.resolvedFiles,
        errors: this.errors,
}
    } catch (error) {
      this.log(`❌ Error during merge conflict resolution: ${error.message}`)
      return { resolvedFiles: [], errors: [{ file: "general", error: error.message }] }
    }
  }

  resolveFileConflicts(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        this.log(`⚠️ File not found: ${filePath}`)
        return,
}

      let content = fs.readFileSync(filePath, "utf8")
      let originalContent = content
      // Remove merge conflict markers and keep main branch version
      content = content.replace(/\n([\s\S]*?)\n\n([\s\S]*?)\n      // Remove any remaining conflict markers
      content = content.replace(/\n/g, "")
      content = content.replace(/\n/g, "")
      content = content.replace(/      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, "utf8")
        this.resolvedFiles.push(filePath)
        this.log(`✅ Resolved conflicts in ${filePath}`),
}
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message })
      this.log(`❌ Error resolving ${filePath}: ${error.message}`),
}
  }

  cleanupBuildArtifacts() {
    this.log("🧹 Cleaning up build artifacts...")
    const artifactsToRemove = [
      ".next",
      "node_modules/.cache",
      "dist",
      "build",
      "*.log",
      "package-lock.json"]
    for (const artifact of artifactsToRemove) {
      try {
        if (fs.existsSync(artifact)) {
          execSync(`rm -rf ${artifact}`, { cwd: this.projectRoot })
          this.log(`🗑️ Removed ${artifact}`),
}
      } catch (error) {
        this.log(`⚠️ Could not remove ${artifact}: ${error.message}`),
}
    }
  }
}

// Run the resolver
if (require.main === module) {
  const resolver = new ComprehensiveMergeResolver()
  resolver.resolveMergeConflicts(),
}

module.exports = ComprehensiveMergeResolver