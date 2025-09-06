#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Merge Conflict Resolver
 * Automatically resolves merge conflicts by keeping HEAD version
 */
class MergeConflictResolver {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }
};

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  resolveMergeConflicts(filePath) {
    try {
      this.log(`Processing: ${filePath}`);
      
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Remove merge conflict markers and keep HEAD version
      const conflictPattern = /<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g;
      
      content = content.replace(conflictPattern, (match, headContent, otherContent) => {
        modified = true;
        this.log(`Resolved conflict in ${filePath} - keeping HEAD version`);
        return headContent.trim();
      });
      
      // Remove any remaining conflict markers
      content = content.replace(/<<<<<<< HEAD\n?/g, '');
      content = content.replace(/=======\n?/g, '');
      content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed merge conflicts in: ${filePath}`, 'SUCCESS');
        return true;
      }
      
      return false;
    } catch (error) {
      this.log(`❌ Error processing ${filePath}: ${error.message}`, 'ERROR');
      this.errors.push({ file: filePath, error: error.message });
      return false;
    }
  } catch (error) {
    console.log(`⚠️  Could not fix ${filePath}: ${error.message}`);
  }

  async findFilesWithConflicts() {
    this.log('🔍 Searching for files with merge conflicts...');
    
    try {
      // Find all TypeScript and JavaScript files with merge conflicts
      const command = `find ${this.projectRoot} -path "*/node_modules" -prune -o -path "*/.next" -prune -o -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | grep -v .next | xargs grep -l "<<<<<<< HEAD" 2>/dev/null || true`;
      
      const result = execSync(command, { encoding: 'utf8' });
      const files = result.trim().split('\n').filter(file => file.length > 0);
      
      this.log(`Found ${files.length} files with merge conflicts`);
      return files;
    } catch (error) {
      this.log(`Error finding files: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async resolveAllConflicts() {
    this.log('🚀 Starting merge conflict resolution...');
    
    const files = await this.findFilesWithConflicts();
    
    if (files.length === 0) {
      this.log('✅ No merge conflicts found!', 'SUCCESS');
      return;
    }
    
    let fixedCount = 0;
    
    for (const file of files) {
      if (this.resolveMergeConflicts(file)) {
        fixedCount++;
      }
    }
    
    this.log(`🎉 Merge conflict resolution completed!`, 'SUCCESS');
    this.log(`📊 Summary: ${fixedCount}/${files.length} files fixed`);
    
    if (this.errors.length > 0) {
      this.log(`⚠️ ${this.errors.length} errors occurred:`, 'WARNING');
      this.errors.forEach(err => {
        this.log(`  - ${err.file}: ${err.error}`, 'ERROR');
      });
    }
    
    // Generate report
    this.generateReport();
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      totalFilesProcessed: this.fixedFiles.length + this.errors.length,
      fixedFiles: this.fixedFiles.length,
      errors: this.errors.length,
      fixedFileList: this.fixedFiles,
      errorList: this.errors
    };
    
    const reportPath = path.join(this.projectRoot, 'merge-conflict-resolution-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📄 Report saved to: ${reportPath}`);
  }
}

// Run the resolver
if (require.main === module) {
  const resolver = new MergeConflictResolver();
  resolver.resolveAllConflicts().catch(console.error);
}

module.exports = MergeConflictResolver;
