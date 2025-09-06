#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

class SimpleMergeResolver {
  constructor() {
    this.resolvedFiles = [];
    this.errors = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async resolveConflicts() {
    this.log("Starting simple merge conflict resolution...");
    
    try {
      // Get list of conflicted files
      const result = execSync('git status --porcelain | grep "^UU\\|^AA\\|^DD\\|^AU\\|^UA\\|^DU\\|^UD"', { encoding: 'utf8' });
      const conflictedFiles = result.trim().split('\n').filter(line => line.trim()).map(line => line.substring(3));
      
      this.log(`Found ${conflictedFiles.length} conflicted files`);

      for (const file of conflictedFiles) {
        await this.resolveFile(file);
      }

      // Stage all resolved files
      if (this.resolvedFiles.length > 0) {
        this.log("Staging resolved files...");
        execSync('git add .', { stdio: 'pipe' });
        
        this.log("Committing merge resolution...");
        execSync(`git commit -m "Resolve merge conflicts automatically - Resolved ${this.resolvedFiles.length} files"`, { stdio: 'pipe' });
        
        this.log(`✅ Successfully resolved and committed ${this.resolvedFiles.length} files`);
      }

    } catch (error) {
      this.log(`❌ Error during conflict resolution: ${error.message}`);
    }
  }

  async resolveFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        this.log(`File does not exist: ${filePath}`);
        return;
      }

      this.log(`Resolving conflicts in: ${filePath}`);
      
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Remove merge conflict markers
      content = content.replace(/<<<<<<< HEAD\n/g, '');
      content = content.replace(/=======\n/g, '');
      content = content.replace(/>>>>>>> [a-f0-9]+\n/g, '');

      // Clean up any remaining conflict markers
      content = content.replace(/<<<<<<< HEAD/g, '');
      content = content.replace(/=======/g, '');
      content = content.replace(/>>>>>>> [a-f0-9]+/g, '');

      // Fix common syntax issues
      content = this.fixCommonIssues(content);

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.resolvedFiles.push(filePath);
        this.log(`✅ Resolved: ${filePath}`);
      } else {
        this.log(`No changes needed: ${filePath}`);
      }

    } catch (error) {
      this.log(`❌ Failed to resolve ${filePath}: ${error.message}`);
      this.errors.push({ file: filePath, error: error.message });
    }
  }

  fixCommonIssues(content) {
    // Fix trailing semicolons in type definitions
    content = content.replace(/type (\w+) = {;/, 'type $1 = {');
    
    // Fix const declarations with trailing commas
    content = content.replace(/const (\w+) = (.+?),;/, 'const $1 = $2;');
    
    // Fix duplicate imports
    const lines = content.split('\n');
    const seenImports = new Set();
    const cleanedLines = lines.filter(line => {
      if (line.trim().startsWith('import ')) {
        if (seenImports.has(line.trim())) {
          return false;
        }
        seenImports.add(line.trim());
      }
      return true;
    });
    content = cleanedLines.join('\n');
    
    // Fix empty object literals
    content = content.replace(/{\s*}/g, '{}');
    
    // Fix trailing commas in objects
    content = content.replace(/,(\s*[}\]])/g, '$1');
    
    return content;
  }
}

// Run the resolver
if (require.main === module) {
  const resolver = new SimpleMergeResolver();
  resolver.resolveConflicts().catch(console.error);
}

module.exports = SimpleMergeResolver;