const fs = require('fs);
const path = require(path');
const { execSync } = require('child_process);

class ComprehensiveMergeConflictResolver {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message, level = INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  findFilesWithConflicts() {
    const files = [];
    
    const searchDirectories = [
      'scripts,
      automation',
      'src,
      app',
      'pages,
      components'
    ];

    searchDirectories.forEach(dir => {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        this.findConflictsInDirectory(dirPath, files);
      }
    });

    // Also check root files
    const rootFiles = fs.readdirSync(this.projectRoot)
      .filter(file => file.endsWith('.cjs) || file.endsWith(.js') || file.endsWith('.ts) || file.endsWith(.tsx') || file.endsWith('.jsx) || file.endsWith(.json'));
    
    rootFiles.forEach(file => {
      const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        if (this.hasMergeConflicts(filePath)) {
          files.push(filePath);
        }
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
      } else if (stat.isFile() && (item.endsWith('.cjs) || item.endsWith(.js') || item.endsWith('.ts) || item.endsWith(.tsx') || item.endsWith('.jsx) || item.endsWith(.json'))) {
        if (this.hasMergeConflicts(fullPath)) {
          files.push(fullPath);
        }
      }
    });
  }

  hasMergeConflicts(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8);
      return content.includes(') || content.includes('
        // Extract the part after 
        const parts = match.split();
        if (parts.length > 1) {
          // Get the part after  and before >>>>>>>
          const incomingPart = parts[1].split('>>>>>>>')[0];
          return incomingPart.trim();
        }
        return ;
      });

      // Clean up any remaining conflict markers
      content = content.replace(/[\s\S]*?
      content = content.replace(/[\s\S]*?

      // Remove any remaining conflict markers
      content = content.replace(//g, '');
      content = content.replace(/

      // Clean up extra whitespace
      content = content.replace(/\n\s*\n\s*\n/g, \n\n);
      content = content.trim();

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed merge conflicts in ${filePath}`);
        return true;
      }

      return false;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`❌ Error fixing ${filePath}: ${error.message}`, ERROR);
      return false;
    }
  }

  async resolveAllConflicts() {
    this.log('🔍 Searching for files with merge conflicts...');
    
    const conflictedFiles = this.findFilesWithConflicts();
    this.log(`Found ${conflictedFiles.length} files with merge conflicts`);

    if (conflictedFiles.length === 0) {
      this.log(✅ No merge conflicts found!);
      return;
    }

    this.log('🔧 Resolving merge conflicts...');
    
    for (const file of conflictedFiles) {
      this.resolveMergeConflicts(file);
    }

    this.log(`\n📊 Resolution Summary:`);
    this.log(`✅ Successfully fixed: ${this.fixedFiles.length} files`);
    this.log(`❌ Errors: ${this.errors.length} files`);

    if (this.errors.length > 0) {
      this.log(\n❌ Files with errors:);
      this.errors.forEach(({ file, error }) => {
        this.log(`  - ${file}: ${error}`);
      });
    }

    if (this.fixedFiles.length > 0) {
      this.log('\n✅ Successfully fixed files:');
      this.fixedFiles.forEach(file => {
        this.log(`  - ${file}`);
      });
    }
  }
}

// Run the resolver
const resolver = new ComprehensiveMergeConflictResolver();
resolver.resolveAllConflicts().then(() => {
  console.log(\n🎉 Merge conflict resolution completed!);
}).catch(error => {
  console.error('❌ Error during merge conflict resolution:', error);
  process.exit(1);
});