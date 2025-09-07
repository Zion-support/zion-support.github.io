#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MergeConflictResolver {
  constructor() {
    this.projectRoot = process.cwd();
    this.conflictsFixed = 0;
    this.errors = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`);
      execSync(command, { cwd: this.projectRoot, stdio: 'pipe' });
      this.log(`✅ ${description} completed successfully`, 'SUCCESS');
      return true;
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      this.errors.push(`${description}: ${error.message}`);
      return false;
    }
  }

  resolveMergeConflicts(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Remove merge conflict markers
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> origin\/main/g, '');
      content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> origin\/main/g, '');
      content = content.replace(/=======[\s\S]*?>>>>>>> origin\/main/g, '');
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======/g, '');

      // Clean up any remaining conflict markers
      content = content.replace(/<<<<<<< HEAD/g, '');
      content = content.replace(/=======/g, '');
      content = content.replace(/>>>>>>> origin\/main/g, '');

      // Remove empty lines that might be left behind
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.conflictsFixed++;
        this.log(`Fixed merge conflicts in: ${filePath}`, 'SUCCESS');
        return true;
      }
      return false;
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`, 'ERROR');
      this.errors.push(`${filePath}: ${error.message}`);
      return false;
    }
  }

  async removeConflictingPages() {
    this.log('Removing conflicting pages directory...');
    
    const conflictingPages = [
      'pages/about.tsx',
      'pages/blog/index.tsx', 
      'pages/contact.tsx',
      'pages/index.tsx',
      'pages/services/cybersecurity.tsx',
      'pages/services.tsx',
      'pages/solutions/index.tsx',
      'pages/sitemap.xml.tsx'
    ];

    for (const page of conflictingPages) {
      if (fs.existsSync(page)) {
        try {
          fs.unlinkSync(page);
          this.log(`Removed conflicting page: ${page}`, 'SUCCESS');
        } catch (error) {
          this.log(`Error removing ${page}: ${error.message}`, 'ERROR');
        }
      }
    }

    // Remove empty pages directory if it exists
    try {
      if (fs.existsSync('pages') && fs.readdirSync('pages').length === 0) {
        fs.rmdirSync('pages');
        this.log('Removed empty pages directory', 'SUCCESS');
      }
    } catch (error) {
      this.log(`Error removing pages directory: ${error.message}`, 'ERROR');
    }
  }

  async findAndFixConflicts() {
    this.log('🔍 Finding files with merge conflicts...');
    
    try {
      const { stdout } = execSync('grep -r "<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.cjs" --include="*.json" | cut -d: -f1 | sort -u', { 
        cwd: this.projectRoot,
        encoding: 'utf8'
      });
      
      const files = stdout.trim().split('\n').filter(f => f);
      
      if (files.length === 0) {
        this.log('No merge conflicts found', 'SUCCESS');
        return;
      }

      this.log(`Found ${files.length} files with merge conflicts`);
      
      for (const file of files) {
        if (fs.existsSync(file)) {
          this.resolveMergeConflicts(file);
        }
      }
    } catch (error) {
      this.log(`Error finding conflicts: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    this.log('🚀 Starting merge conflict resolution...');
    
    try {
      await this.findAndFixConflicts();
      await this.removeConflictingPages();
      
      this.log('\n📊 Merge Conflict Resolution Report');
      this.log('='.repeat(50));
      this.log(`Conflicts Fixed: ${this.conflictsFixed}`);
      this.log(`Errors: ${this.errors.length}`);
      
      if (this.errors.length > 0) {
        this.log('\nErrors encountered:');
        this.errors.forEach(error => this.log(`  - ${error}`, 'ERROR'));
      }
      
      this.log('\n✅ Merge conflict resolution completed');
      
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the resolver
if (require.main === module) {
  const resolver = new MergeConflictResolver();
  resolver.run().catch(console.error);
}

module.exports = MergeConflictResolver;