#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MergeConflictResolver {
  constructor() {
    this.logFile = './logs/merge-conflict-resolution.log';
    this.resolvedFiles = new Set();
    this.errors = [];
    this.fixes = [];
    this.startTime = new Date();
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    // Ensure logs directory exists
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async resolveConflictsInFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      // Remove merge conflict markers and keep both versions where possible
      content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, (match, headContent, incomingContent) => {
        // For most cases, prefer the incoming content (from origin/main)
        // But keep both if they're different and both seem valid
        if (headContent.trim() === incomingContent.trim()) {
          return headContent;
        }
        
        // If one is empty, use the non-empty one
        if (!headContent.trim()) {
          return incomingContent;
        }
        if (!incomingContent.trim()) {
          return headContent;
        }
        
        // For different content, prefer incoming (origin/main) by default
        return incomingContent;
      });
      
      // Remove any remaining conflict markers
      content = content.replace(/<<<<<<< HEAD\n[\s\S]*?\n=======\n[\s\S]*?\n>>>>>>> [^\n]+/g, '');
      content = content.replace(/<<<<<<< HEAD\n[\s\S]*?\n>>>>>>> [^\n]+/g, '');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.resolvedFiles.add(filePath);
        this.log(`Resolved conflicts in: ${filePath}`);
        return true;
      }
      
      return false;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`Error resolving ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async resolveAllConflicts() {
    this.log('Starting merge conflict resolution...');
    
    try {
      // Get all conflicted files
      const output = execSync('git status --porcelain', { encoding: 'utf8' });
      const conflictedFiles = output
        .split('\n')
        .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
        .map(line => line.substring(3).trim())
        .filter(file => file && fs.existsSync(file));
      
      this.log(`Found ${conflictedFiles.length} conflicted files`);
      
      let resolvedCount = 0;
      let errorCount = 0;
      
      for (const file of conflictedFiles) {
        try {
          const resolved = await this.resolveConflictsInFile(file);
          if (resolved) {
            resolvedCount++;
          }
        } catch (error) {
          errorCount++;
          this.log(`Failed to resolve ${file}: ${error.message}`, 'ERROR');
        }
      }
      
      this.log(`Resolved ${resolvedCount} files, ${errorCount} errors`);
      
      // Add resolved files to git
      if (resolvedCount > 0) {
        this.log('Adding resolved files to git...');
        execSync(`git add ${Array.from(this.resolvedFiles).join(' ')}`, { stdio: 'inherit' });
      }
      
      return { resolvedCount, errorCount };
    } catch (error) {
      this.log(`Error during conflict resolution: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async commitResolution() {
    try {
      this.log('Committing merge resolution...');
      execSync('git commit -m "Resolve merge conflicts - automated resolution"', { stdio: 'inherit' });
      this.log('Merge conflicts resolved and committed successfully!');
      return true;
    } catch (error) {
      this.log(`Error committing: ${error.message}`, 'ERROR');
      return false;
    }
  }

  generateReport() {
    const endTime = new Date();
    const duration = endTime - this.startTime;
    
    const report = {
      startTime: this.startTime.toISOString(),
      endTime: endTime.toISOString(),
      duration: `${duration}ms`,
      resolvedFiles: this.resolvedFiles.size,
      errors: this.errors.length,
      fixes: this.fixes.length
    };
    
    this.log(`\n=== MERGE CONFLICT RESOLUTION REPORT ===`);
    this.log(`Duration: ${report.duration}`);
    this.log(`Files resolved: ${report.resolvedFiles}`);
    this.log(`Errors: ${report.errors}`);
    this.log(`Fixes applied: ${report.fixes}`);
    
    if (this.errors.length > 0) {
      this.log('\nErrors encountered:');
      this.errors.forEach(error => {
        this.log(`  - ${error.file}: ${error.error}`);
      });
    }
    
    return report;
  }
}

// Main execution
async function main() {
  const resolver = new MergeConflictResolver();
  
  try {
    const result = await resolver.resolveAllConflicts();
    
    if (result.resolvedCount > 0) {
      const committed = await resolver.commitResolution();
      if (committed) {
        resolver.log('✅ Merge conflicts successfully resolved and committed!');
      } else {
        resolver.log('❌ Failed to commit resolution');
      }
    } else {
      resolver.log('No conflicts to resolve');
    }
    
    resolver.generateReport();
  } catch (error) {
    resolver.log(`Fatal error: ${error.message}`, 'ERROR');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = MergeConflictResolver;