const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MergeConflictResolver {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  findFilesWithConflicts() {
    const files = [];
    
    const searchDirectories = [
      'automation',
      'scripts',
      'app',
      'pages',
      'components',
      'src'
    ];

    searchDirectories.forEach(dir => {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        this.findConflictsInDirectory(dirPath, files);
      }
    });

    // Also check root files
    const rootFiles = fs.readdirSync(this.projectRoot)
      .filter(file => file.endsWith('.js') || file.endsWith('.cjs') || file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.json'))
      .map(file => path.join(this.projectRoot, file));

    rootFiles.forEach(file => {
      if (this.hasMergeConflicts(file)) {
        files.push(file);
      }
    });

    return files;
  }

  findConflictsInDirectory(dir, files) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.findConflictsInDirectory(fullPath, files);
      } else if (this.hasMergeConflicts(fullPath)) {
        files.push(fullPath);
      }
    });
  }

  hasMergeConflicts(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      return content.includes('') || 
             content.includes('      
      // Remove any remaining conflict markers
      content = content.replace(/\n?/g, '');
      content = content.replace(/      
      // Clean up any double newlines
      content = content.replace(/\n\n\n+/g, '\n\n');
      
      fs.writeFileSync(filePath, content);
      this.fixedFiles.push(filePath);
      this.log(`✅ Fixed merge conflicts in: ${path.relative(this.projectRoot, filePath)}`);
      return true;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`❌ Error fixing ${path.relative(this.projectRoot, filePath)}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async resolveAllConflicts() {
    this.log('🔍 Searching for files with merge conflicts...');
    
    const conflictedFiles = this.findFilesWithConflicts();
    this.log(`Found ${conflictedFiles.length} files with merge conflicts`);
    
    if (conflictedFiles.length === 0) {
      this.log('✅ No merge conflicts found!');
      return;
    }

    for (const file of conflictedFiles) {
      this.resolveConflicts(file);
    }

    this.log(`\n📊 Conflict Resolution Summary:`);
    this.log(`✅ Successfully fixed: ${this.fixedFiles.length} files`);
    this.log(`❌ Failed to fix: ${this.errors.length} files`);
    
    if (this.errors.length > 0) {
      this.log('\n❌ Files that failed to fix:');
      this.errors.forEach(error => {
        this.log(`  - ${path.relative(this.projectRoot, error.file)}: ${error.error}`);
      });
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      totalFilesChecked: this.findFilesWithConflicts().length,
      fixedFiles: this.fixedFiles.length,
      failedFiles: this.errors.length,
      fixedFileList: this.fixedFiles.map(f => path.relative(this.projectRoot, f)),
      errors: this.errors
    };

    const reportPath = path.join(this.projectRoot, 'merge-conflict-resolution-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📄 Report saved to: ${reportPath}`);
  }
}

// Run the resolver if this file is executed directly
if (require.main === module) {
  const resolver = new MergeConflictResolver();
  resolver.resolveAllConflicts()
    .then(() => {
      resolver.generateReport();
      process.exit(0);
    })
    .catch(error => {
      console.error('Error resolving conflicts:', error);
      process.exit(1);
    });
}

module.exports = MergeConflictResolver;