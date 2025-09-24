#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Final Merge Conflict Resolver
 * Resolves all merge conflicts by keeping our improvements
 */
class FinalMergeConflictResolver {
  constructor() {
    this.projectRoot = process.cwd();
    this.conflicts = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix =
      type === 'ERROR'
        ? '❌'
        : type === 'SUCCESS'
          ? '✅'
          : type === 'WARNING'
            ? '⚠️'
            : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async resolveConflicts() {
    this.log('🔧 Resolving merge conflicts...');
    
    const conflictFiles = [
      'comprehensive-automation-report.json',
      'package-lock.json',
      'package.json',
      'pages/api/admin/pitch/metrics.ts',
      'tsconfig.tsbuildinfo',
      'yarn.lock'
    ];

    for (const file of conflictFiles) {
      const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {
        try {
          let content = fs.readFileSync(filePath, 'utf8');
          

          if (content.includes('') || content.includes('>>>>>>>')) {
            this.log(`Resolving conflicts in ${file}...`);
 (Resolve merge conflicts: clean up all conflict markers)
            
            // For JSON files, keep our version
            if (file.endsWith('.json')) {
              // Remove conflict markers and keep our version

              content = content.replace(/\n([\s\S]*?)
            }
            // For TypeScript files, keep our version
            else if (file.endsWith('.ts')) {
              content = content.replace(/\n([\s\S]*?)
            }
            // For other files, keep our version
            else {
              content = content.replace(/\n([\s\S]*?)
            }
 (Resolve merge conflicts: clean up all conflict markers)
            
            fs.writeFileSync(filePath, content);
            this.log(`✅ Resolved conflicts in ${file}`);
            this.conflicts.push(file);
          }
        } catch (error) {
          this.log(`❌ Failed to resolve conflicts in ${file}: ${error.message}`, 'ERROR');
        }
      }
    }
  }

  async commitResolution() {
    this.log('📝 Committing conflict resolution...');
    
    try {
      execSync('git add .', { cwd: this.projectRoot, stdio: 'pipe' });
      execSync('git commit -m "resolve: Merge conflicts resolved - keeping improvements"', { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      this.log('✅ Conflicts resolved and committed');
    } catch (error) {
      this.log(`❌ Failed to commit resolution: ${error.message}`, 'ERROR');
    }
  }

  async pushChanges() {
    this.log('🚀 Pushing changes...');
    
    try {
      execSync('git push origin main', { cwd: this.projectRoot, stdio: 'pipe' });
      this.log('✅ Changes pushed successfully');
    } catch (error) {
      this.log(`❌ Failed to push changes: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    this.log('🚀 Starting Final Merge Conflict Resolver');
    this.log('='.repeat(60));
    
    try {
      await this.resolveConflicts();
      await this.commitResolution();
      await this.pushChanges();
      
      this.log('\n🎉 Merge conflict resolution completed!');
      this.log(`📊 Conflicts resolved: ${this.conflicts.length}`);
      this.log(`📁 Files processed: ${this.conflicts.join(', ')}`);
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
    }
  }
}

// Run the resolver
const resolver = new FinalMergeConflictResolver();
resolver.run().catch(console.error);

module.exports = FinalMergeConflictResolver;