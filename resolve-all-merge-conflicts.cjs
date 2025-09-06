#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class MergeConflictResolver {
  constructor() {
    this.resolvedFiles = [];
    this.failedFiles = [];
  }
  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }
  async resolveMergeConflicts() {
    this.log('🔍 Starting comprehensive merge conflict resolution...');
    try {
      // First, let's get all files with merge conflicts
      const result = execSync('git status --porcelain', { encoding: 'utf8' });
      const conflictedFiles = result
        .split('\n')
        .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
        .map(line => line.substring(3).trim())
        .filter(file => file);
      this.log(`Found ${conflictedFiles.length} files with merge conflicts`);
      // Also search for files with conflict markers
      const conflictMarkerFiles = this.findFilesWithConflictMarkers();
      this.log(`Found ${conflictMarkerFiles.length} files with conflict markers`);
      const allFiles = [...new Set([...conflictedFiles, ...conflictMarkerFiles])];
      this.log(`Total files to process: ${allFiles.length}`);
      for (const file of allFiles) {
        try {
          await this.resolveFileConflicts(file);
        } catch (error) {
          this.log(`❌ Failed to resolve conflicts in ${file}: ${error.message}`);
          this.failedFiles.push({ file, error: error.message });
        }
      }
      // Try to add and commit resolved files
      if (this.resolvedFiles.length > 0) {
        this.log('📝 Adding resolved files to git...');
        try {
          execSync('git add .', { stdio: 'inherit' });
          execSync('git commit -m "Resolve merge conflicts automatically"', { stdio: 'inherit' });
          this.log('✅ Successfully committed resolved files');
        } catch (error) {
          this.log(`⚠️  Could not commit: ${error.message}`);
        }
      }
      this.generateReport();
    } catch (error) {
      this.log(`❌ Error during merge conflict resolution: ${error.message}`);
    }
  }
  findFilesWithConflictMarkers() {
    const files = [];
    const extensions = ['.js', '.ts', '.tsx', '.jsx', '.cjs', '.json', '.md', '.yml', '.yaml'];
    function searchDirectory(dir) {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            searchDirectory(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (extensions.includes(ext)) {
              try {
                const content = fs.readFileSync(fullPath, 'utf8');
                if (content.includes('') || content.includes('
                  files.push(fullPath);
                }
              } catch (error) {
                // Skip files that can't be read
              }
            }
          }
        }
      } catch (error) {
        // Skip directories that can't be read
      }
    }
    searchDirectory('/workspace');
    return files;
  }
  async resolveFileConflicts(filePath) {
    if (!fs.existsSync(filePath)) {
      this.log(`⚠️  File does not exist: ${filePath}`);
      return;
    }
    this.log(`🔧 Resolving conflicts in: ${filePath}`);
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    // Remove merge conflict markers and choose the newer version (after )
    content = content
      .replace(/([\s\S]*?)
      .replace(/[\s\S]*?
      .replace(//g, '')
      .replace(/
    // Clean up any remaining artifacts
    content = content
      .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove excessive blank lines
      .replace(/^\s*\n/gm, '') // Remove lines with only whitespace
      .trim();
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      this.resolvedFiles.push(filePath);
      this.log(`✅ Resolved conflicts in: ${filePath}`);
    } else {
      this.log(`ℹ️  No changes needed for: ${filePath}`);
    }
  }
  generateReport() {
    this.log('\n📊 MERGE CONFLICT RESOLUTION REPORT');
    this.log('==');
    this.log(`✅ Successfully resolved: ${this.resolvedFiles.length} files`);
    this.log(`❌ Failed to resolve: ${this.failedFiles.length} files`);
    if (this.resolvedFiles.length > 0) {
      this.log('\n✅ Resolved files:');
      this.resolvedFiles.forEach(file => this.log(`  - ${file}`));
    }
    if (this.failedFiles.length > 0) {
      this.log('\n❌ Failed files:');
      this.failedFiles.forEach(({ file, error }) => this.log(`  - ${file}: ${error}`));
    }
    this.log('\n🎯 Next steps:');
    this.log('1. Run tests to verify everything works');
    this.log('2. Build the application');
    this.log('3. Push changes to repository');
  }
}
// Run the resolver
const resolver = new MergeConflictResolver();
resolver.resolveMergeConflicts().catch(console.error);
module.exports = MergeConflictResolver;

