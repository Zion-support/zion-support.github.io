#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MergeConflictResolver {
  constructor() {
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
    this.log('🚀 Starting merge conflict resolution...', 'PROGRESS');
    
    try {
      // Get list of conflicted files
      const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
        .trim()
        .split('\n')
        .filter(file => file.length > 0);

      this.log(`Found ${conflictedFiles.length} conflicted files`, 'INFO');

      for (const filePath of conflictedFiles) {
        try {
          await this.resolveFile(filePath);
        } catch (error) {
          this.errors.push({ filePath, error: error.message });
          this.log(`  ❌ Failed to resolve ${filePath}: ${error.message}`, 'ERROR');
        }
      }

      this.log('\n📊 Merge Conflict Resolution Report', 'INFO');
      this.log('='.repeat(60));
      this.log(`Resolved ${this.resolvedFiles.length} files.`, 'SUCCESS');
      if (this.errors.length > 0) {
        this.log(`Encountered ${this.errors.length} errors:`, 'WARNING');
        this.errors.forEach(err => this.log(`  - ${err.filePath}: ${err.error}`, 'ERROR'));
      } else {
        this.log('No errors encountered during resolution.', 'SUCCESS');
      }

      // Add resolved files to git
      if (this.resolvedFiles.length > 0) {
        this.log('Adding resolved files to git...', 'PROGRESS');
        execSync(`git add ${this.resolvedFiles.join(' ')}`, { stdio: 'inherit' });
        this.log('Files added to git successfully', 'SUCCESS');
      }

    } catch (error) {
      this.log(`Error during conflict resolution: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async resolveFile(filePath) {
    if (!fs.existsSync(filePath)) {
      this.log(`  ⚠️ File ${filePath} does not exist, skipping`, 'WARNING');
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') || !content.includes('>>>>>>>')) {
      this.log(`  ℹ️ No conflicts in ${filePath}, skipping`, 'INFO');
      return;
    }

    // Strategy: Choose incoming changes (from remote) for most files
    // This means we'll take the version after ======= and before >>>>>>>
    let resolvedContent = content;
    
    // Handle different conflict patterns
    const conflictPatterns = [
      // Standard conflict markers
      /<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g,
      // Modified/delete conflicts
      /<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g
    ];

    for (const pattern of conflictPatterns) {
      resolvedContent = resolvedContent.replace(pattern, (match, incoming) => {
        return incoming ? incoming.trim() : '';
      });
    }

    // Clean up any remaining conflict markers
    resolvedContent = resolvedContent
      .replace(/<<<<<<< HEAD[\s\S]*?=======/g, '')
      .replace(/>>>>>>> [^\n]+/g, '')
      .replace(/^<<<<<<< HEAD$/gm, '')
      .replace(/^=======$/gm, '')
      .replace(/^>>>>>>> [^\n]+$/gm, '');

    // Write resolved content
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    this.resolvedFiles.push(filePath);
    this.log(`  ✅ Resolved ${filePath}`);
  }
}

if (require.main === module) {
  const resolver = new MergeConflictResolver();
  resolver.resolveConflicts().catch(error => {
    console.error('Merge conflict resolution failed:', error);
    process.exit(1);
  });
}

module.exports = MergeConflictResolver;