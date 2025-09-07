#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MergeConflictResolver {
  constructor() {
    this.projectRoot = process.cwd();
    this.resolvedFiles = [];
    this.errors = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async resolveConflicts() {
    this.log('🔧 Starting merge conflict resolution...');
    
    try {
      // Get list of conflicted files
      const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { 
        cwd: this.projectRoot, 
        encoding: 'utf8' 
      }).trim().split('\n').filter(f => f);

      this.log(`Found ${conflictedFiles.length} conflicted files`);

      for (const file of conflictedFiles) {
        if (!file) continue;
        
        try {
          await this.resolveFileConflicts(file);
          this.resolvedFiles.push(file);
        } catch (error) {
          this.log(`Failed to resolve conflicts in ${file}: ${error.message}`, 'ERROR');
          this.errors.push({ file, error: error.message });
        }
      }

      // Add resolved files
      if (this.resolvedFiles.length > 0) {
        execSync(`git add ${this.resolvedFiles.join(' ')}`, { cwd: this.projectRoot });
        this.log(`Added ${this.resolvedFiles.length} resolved files to staging`);
      }

      // Commit the merge
      execSync('git commit -m "Resolve merge conflicts automatically"', { cwd: this.projectRoot });
      this.log('✅ Merge conflicts resolved and committed successfully');

    } catch (error) {
      this.log(`Error during conflict resolution: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async resolveFileConflicts(filePath) {
    this.log(`Resolving conflicts in ${filePath}...`);
    
    if (!fs.existsSync(filePath)) {
      this.log(`File ${filePath} does not exist, skipping`, 'WARNING');
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Strategy 1: Keep both versions when possible
    if (content.includes('<<<<<<< HEAD') && content.includes('=======') && content.includes('>>>>>>> main')) {
      content = this.resolveWithStrategy(content, 'both');
    }
    
    // Strategy 2: Prefer main branch for test files
    if (filePath.includes('.test.') || filePath.includes('__tests__')) {
      content = this.resolveWithStrategy(content, 'main');
    }
    
    // Strategy 3: Prefer current branch for automation files
    if (filePath.includes('automation') || filePath.includes('scripts')) {
      content = this.resolveWithStrategy(content, 'current');
    }
    
    // Strategy 4: Default to main branch
    if (content.includes('<<<<<<< HEAD')) {
      content = this.resolveWithStrategy(content, 'main');
    }

    fs.writeFileSync(filePath, content);
    this.log(`Resolved conflicts in ${filePath}`);
  }

  resolveWithStrategy(content, strategy) {
    const conflictRegex = /<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> main/g;
    
    return content.replace(conflictRegex, (match, currentContent, mainContent) => {
      switch (strategy) {
        case 'both':
          // Try to merge both versions intelligently
          return this.mergeIntelligently(currentContent, mainContent);
        case 'main':
          return mainContent.trim();
        case 'current':
          return currentContent.trim();
        default:
          return mainContent.trim();
      }
    });
  }

  mergeIntelligently(currentContent, mainContent) {
    // Simple merge strategy - prefer main but keep unique lines from current
    const currentLines = currentContent.trim().split('\n');
    const mainLines = mainContent.trim().split('\n');
    
    // If main content is significantly longer, prefer it
    if (mainLines.length > currentLines.length * 1.5) {
      return mainContent.trim();
    }
    
    // If current content has automation-specific content, prefer it
    if (currentContent.includes('automation') || currentContent.includes('script')) {
      return currentContent.trim();
    }
    
    // Default to main
    return mainContent.trim();
  }

  async run() {
    try {
      await this.resolveConflicts();
      
      this.log('🎉 Merge conflict resolution completed successfully!');
      this.log(`Resolved files: ${this.resolvedFiles.length}`);
      this.log(`Errors: ${this.errors.length}`);
      
      if (this.errors.length > 0) {
        this.log('Files with errors:', 'WARNING');
        this.errors.forEach(({ file, error }) => {
          this.log(`  - ${file}: ${error}`, 'WARNING');
        });
      }
      
    } catch (error) {
      this.log(`Merge conflict resolution failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the resolver
const resolver = new MergeConflictResolver();
resolver.run();