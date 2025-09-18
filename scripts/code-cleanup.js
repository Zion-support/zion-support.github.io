#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Code Cleanup Script
 * This script organizes and cleans up the codebase
 */

const cleanupConfig = {
  // Directories to organize
  directories: {
    components: 'src/components',
    pages: 'src/pages',
    utils: 'src/utils',
    hooks: 'src/hooks',
    types: 'src/types',
    constants: 'src/constants'
  },
  
  // File patterns to clean up
  patterns: {
    backup: /\.backup\.\d+$/,
    temp: /\.tmp$/,
    duplicate: /\.\d+$/,
    old: /\.old$/
  },
  
  // Files to remove
  removeFiles: [
    '*.backup.*',
    '*.tmp',
    '*.old',
    '*.log',
    '*.cache'
  ]
};

class CodeCleanup {
  constructor() {
    this.removedFiles = [];
    this.organizedFiles = [];
    this.errors = [];
  }

  async run() {
    console.log('🧹 Starting code cleanup...\n');
    
    try {
      await this.cleanupBackupFiles();
      await this.organizeComponents();
      await this.organizePages();
      await this.organizeUtils();
      await this.updateImports();
      await this.generateReport();
      
      console.log('✅ Code cleanup completed successfully!');
    } catch (error) {
      console.error('❌ Code cleanup failed:', error.message);
      this.errors.push(error.message);
    }
  }

  async cleanupBackupFiles() {
    console.log('🗑️  Cleaning up backup files...');
    
    const rootDir = process.cwd();
    const files = this.getAllFiles(rootDir);
    
    for (const file of files) {
      const fileName = path.basename(file);
      
      // Check if file matches cleanup patterns
      for (const pattern of Object.values(cleanupConfig.patterns)) {
        if (pattern.test(fileName)) {
          try {
            fs.unlinkSync(file);
            this.removedFiles.push(file);
            console.log(`   Removed: ${file}`);
          } catch (error) {
            this.errors.push(`Failed to remove ${file}: ${error.message}`);
          }
        }
      }
    }
  }

  async organizeComponents() {
    console.log('📁 Organizing components...');
    
    const componentsDir = path.join(process.cwd(), cleanupConfig.directories.components);
    
    if (!fs.existsSync(componentsDir)) {
      fs.mkdirSync(componentsDir, { recursive: true });
    }
    
    // Create subdirectories for different component types
    const subdirs = ['ui', 'layout', 'forms', 'charts', 'navigation'];
    for (const subdir of subdirs) {
      const subdirPath = path.join(componentsDir, subdir);
      if (!fs.existsSync(subdirPath)) {
        fs.mkdirSync(subdirPath, { recursive: true });
      }
    }
  }

  async organizePages() {
    console.log('📄 Organizing pages...');
    
    const pagesDir = path.join(process.cwd(), cleanupConfig.directories.pages);
    
    if (!fs.existsSync(pagesDir)) {
      fs.mkdirSync(pagesDir, { recursive: true });
    }
    
    // Create subdirectories for different page types
    const subdirs = ['auth', 'dashboard', 'profile', 'settings', 'admin'];
    for (const subdir of subdirs) {
      const subdirPath = path.join(pagesDir, subdir);
      if (!fs.existsSync(subdirPath)) {
        fs.mkdirSync(subdirPath, { recursive: true });
      }
    }
  }

  async organizeUtils() {
    console.log('🔧 Organizing utilities...');
    
    const utilsDir = path.join(process.cwd(), cleanupConfig.directories.utils);
    
    if (!fs.existsSync(utilsDir)) {
      fs.mkdirSync(utilsDir, { recursive: true });
    }
    
    // Create utility files
    const utilityFiles = [
      'api.ts',
      'constants.ts',
      'helpers.ts',
      'validation.ts',
      'formatters.ts'
    ];
    
    for (const file of utilityFiles) {
      const filePath = path.join(utilsDir, file);
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, `// ${file}\n// Utility functions\n\n`);
        console.log(`   Created: ${filePath}`);
      }
    }
  }

  async updateImports() {
    console.log('🔄 Updating imports...');
    
    // This would typically involve updating import statements
    // to use the new organized structure
    console.log('   Import updates would be implemented here');
  }

  getAllFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other directories
        if (!['node_modules', '.git', 'dist', 'build'].includes(file)) {
          this.getAllFiles(filePath, fileList);
        }
      } else {
        fileList.push(filePath);
      }
    }
    
    return fileList;
  }

  async generateReport() {
    console.log('\n📊 Cleanup Report:');
    console.log(`   Files removed: ${this.removedFiles.length}`);
    console.log(`   Files organized: ${this.organizedFiles.length}`);
    console.log(`   Errors: ${this.errors.length}`);
    
    if (this.errors.length > 0) {
      console.log('\n❌ Errors:');
      this.errors.forEach(error => console.log(`   - ${error}`));
    }
    
    // Save report to file
    const report = {
      timestamp: new Date().toISOString(),
      removedFiles: this.removedFiles,
      organizedFiles: this.organizedFiles,
      errors: this.errors
    };
    
    fs.writeFileSync(
      path.join(process.cwd(), 'cleanup-report.json'),
      JSON.stringify(report, null, 2)
    );
  }
}

// Run the cleanup
if (import.meta.url === `file://${process.argv[1]}`) {
  const cleanup = new CodeCleanup();
  cleanup.run().catch(console.error);
}

export default CodeCleanup;