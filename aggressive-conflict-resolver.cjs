#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AggressiveConflictResolver {
  constructor() {
    this.resolvedFiles = [];
    this.failedFiles = [];
    this.skippedFiles = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'WARN' ? '⚠️' : '✅';
    console.log(`[${timestamp}] ${prefix} ${message}`);
  }

  async findConflictedFiles() {
    const conflictedFiles = [];
    
    try {
      // Use find command to locate files with conflict markers
      const result = execSync('find . -type f \\( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" -o -name "*.md" -o -name "*.txt" -o -name "*.sh" -o -name "*.cjs" \\) -not -path "./node_modules/*" -not -path "./.git/*" -exec grep -l "

      this.log(`Found ${headMarkers} conflict markers in ${filePath}`);

      // Strategy 1: Remove all merge conflict markers and keep HEAD version
      content = this.resolveByKeepingHead(content);
      
      // Strategy 2: If still has conflicts, try to resolve by keeping the longer content
      if (this.hasConflictMarkers(content)) {
        content = this.resolveByKeepingLongerContent(originalContent);
      }
      
      // Strategy 3: If still has conflicts, remove all conflict markers
      if (this.hasConflictMarkers(content)) {
        content = this.removeAllConflictMarkers(content);
      }

      // Write the resolved content
      fs.writeFileSync(filePath, content, 'utf8');
      
      // Verify the file is valid
      if (this.validateFile(filePath)) {
        this.resolvedFiles.push(filePath);
        this.log(`Successfully resolved conflicts in ${filePath}`);
      } else {
        this.failedFiles.push(filePath);
        this.log(`File ${filePath} has syntax errors after resolution`, 'WARN');
      }
    } catch (error) {
      this.failedFiles.push(filePath);
      this.log(`Failed to resolve conflicts in ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  resolveByKeepingHead(content) {
    // Remove merge conflict markers and keep HEAD version
    return content
      .replace(/
      .replace(/
  }

  resolveByKeepingLongerContent(content) {
    return content.replace(/
      // Keep the longer content
      return headContent.length >= otherContent.length ? headContent : otherContent;
    });
  }

  removeAllConflictMarkers(content) {
    return content
      .replace(/
      .replace(/
  }

  hasConflictMarkers(content) {
    return content.includes('') || 
           content.includes('') || 
           content.includes('>>>>>>>');
  }

  validateFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for remaining conflict markers
      if (this.hasConflictMarkers(content)) {
        return false;
      }

      // For TypeScript/JavaScript files, check for basic syntax
      if (filePath.endsWith('.ts') || filePath.endsWith('.tsx') || filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
        // Basic syntax check - look for unmatched braces, parentheses, etc.
        const openBraces = (content.match(/\{/g) || []).length;
        const closeBraces = (content.match(/\}/g) || []).length;
        const openParens = (content.match(/\(/g) || []).length;
        const closeParens = (content.match(/\)/g) || []).length;
        
        if (Math.abs(openBraces - closeBraces) > 2 || Math.abs(openParens - closeParens) > 2) {
          return false;
        }
      }

      return true;
    } catch (error) {
      return false;
    }
  }

  async resolveAllConflicts() {
    this.log('Starting aggressive merge conflict resolution...');
    
    try {
      const conflictedFiles = await this.findConflictedFiles();
      this.log(`Found ${conflictedFiles.length} files with merge conflicts`);

      for (const filePath of conflictedFiles) {
        await this.resolveFileConflicts(filePath);
      }

      this.log(`Resolved conflicts in ${this.resolvedFiles.length} files`);
      this.log(`Failed to resolve ${this.failedFiles.length} files`);
      this.log(`Skipped ${this.skippedFiles.length} files`);

      // Generate report
      await this.generateReport();

    } catch (error) {
      this.log(`Error during merge conflict resolution: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFiles: this.resolvedFiles.length + this.failedFiles.length + this.skippedFiles.length,
        resolved: this.resolvedFiles.length,
        failed: this.failedFiles.length,
        skipped: this.skippedFiles.length
      },
      resolvedFiles: this.resolvedFiles,
      failedFiles: this.failedFiles,
      skippedFiles: this.skippedFiles
    };

    fs.writeFileSync('aggressive-conflict-resolution-report.json', JSON.stringify(report, null, 2));
    this.log('Generated conflict resolution report: aggressive-conflict-resolution-report.json');
  }

  async run() {
    try {
      await this.resolveAllConflicts();
      this.log('Aggressive merge conflict resolution completed successfully!');
    } catch (error) {
      this.log(`Aggressive merge conflict resolution failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the resolver
if (require.main === module) {
  const resolver = new AggressiveConflictResolver();
  resolver.run();
}

module.exports = AggressiveConflictResolver;