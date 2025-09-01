#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AutoErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixesApplied = 0;
    this.errorsFixed = [];
    this.logFile = path.join(this.projectRoot, 'auto-error-fixer-report.json');
    this.isRunning = false;
    this.checkInterval = 5 * 60 * 1000; // Check every 5 minutes
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async start() {
    this.log('🚀 Starting Auto Error Fixer...');
    this.isRunning = true;
    
    // Initial check
    await this.checkAndFixErrors();
    
    // Set up continuous monitoring
    this.monitorInterval = setInterval(async () => {
      if (this.isRunning) {
        await this.checkAndFixErrors();
      }
    }, this.checkInterval);
  }

  stop() {
    this.log('🛑 Stopping Auto Error Fixer...');
    this.isRunning = false;
    if (this.monitorInterval) {
      clearInterval(this.monitorInterval);
    }
  }

  async checkAndFixErrors() {
    try {
      this.log('🔍 Checking for errors...');
      
      // Check TypeScript errors
      await this.fixTypeScriptErrors();
      
      // Check ESLint errors
      await this.fixESLintErrors();
      
      // Check syntax errors
      await this.fixSyntaxErrors();
      
      // Check missing dependencies
      await this.fixMissingDependencies();
      
      // Check build errors
      await this.fixBuildErrors();
      
      this.log(`✅ Error check completed. Fixed ${this.fixesApplied} issues.`);
      this.saveReport();
      
    } catch (error) {
      this.log(`❌ Error during auto-fix: ${error.message}`);
    }
  }

  async fixTypeScriptErrors() {
    try {
      this.log('🔧 Checking TypeScript errors...');
      const result = execSync('npm run type-check 2>&1', { encoding: 'utf8' });
      
      if (result.includes('error TS')) {
        this.log('📝 TypeScript errors detected, attempting to fix...');
        
        // Fix common TypeScript errors
        await this.fixCommonTypeScriptErrors();
        
        // Try to auto-fix with tsc
        try {
          execSync('npx tsc --noEmit --skipLibCheck', { stdio: 'pipe' });
        } catch (e) {
          // Expected to fail, but will show us the errors
        }
      }
    } catch (error) {
      // TypeScript check failed, which means there are errors
      this.log('📝 TypeScript errors detected, attempting to fix...');
      await this.fixCommonTypeScriptErrors();
    }
  }

  async fixCommonTypeScriptErrors() {
    // Fix missing type annotations
    await this.fixMissingTypes();
    
    // Fix import/export issues
    await this.fixImportExportIssues();
    
    // Fix JSX syntax errors
    await this.fixJSXErrors();
  }

  async fixMissingTypes() {
    const files = this.findFiles('.ts,.tsx');
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // Fix missing type annotations in catch blocks
        content = content.replace(/} catch \(error: \)/g, '} catch (error: any)');
        
        // Fix missing type annotations in function parameters
        content = content.replace(/\(([^)]+): \)/g, '($1: any)');
        
        // Fix missing return types
        content = content.replace(/function ([^(]+)\([^)]*\): \s*{/g, 'function $1(): any {');
        
        if (content !== fs.readFileSync(file, 'utf8')) {
          fs.writeFileSync(file, content);
          this.log(`✅ Fixed missing types in ${file}`);
          this.fixesApplied++;
          this.errorsFixed.push({ file, type: 'missing_types' });
          modified = true;
        }
        
        if (modified) {
          this.log(`📝 Fixed missing types in ${file}`);
        }
      } catch (error) {
        this.log(`⚠️ Could not process ${file}: ${error.message}`);
      }
    }
  }

  async fixImportExportIssues() {
    const files = this.findFiles('.ts,.tsx');
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // Fix React import issues
        if (content.includes('import React') && !content.includes('import React from')) {
          content = content.replace(/import React([^;]*);/g, 'import React from "react";');
          modified = true;
        }
        
        // Fix missing React import for JSX
        if (content.includes('JSX') && !content.includes('import React')) {
          content = 'import React from "react";\n' + content;
          modified = true;
        }
        
        if (modified) {
          fs.writeFileSync(file, content);
          this.log(`✅ Fixed import/export issues in ${file}`);
          this.fixesApplied++;
          this.errorsFixed.push({ file, type: 'import_export' });
        }
      } catch (error) {
        this.log(`⚠️ Could not process ${file}: ${error.message}`);
      }
    }
  }

  async fixJSXErrors() {
    const files = this.findFiles('.tsx,.jsx');
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // Fix JSX fragment syntax
        content = content.replace(/<>([\s\S]*?)<\/>/g, '<React.Fragment>$1</React.Fragment>');
        
        // Fix JSX closing tags
        content = content.replace(/<([^>]+)\/>/g, '<$1 />');
        
        if (content !== fs.readFileSync(file, 'utf8')) {
          fs.writeFileSync(file, content);
          this.log(`✅ Fixed JSX errors in ${file}`);
          this.fixesApplied++;
          this.errorsFixed.push({ file, type: 'jsx_syntax' });
          modified = true;
        }
        
        if (modified) {
          this.log(`📝 Fixed JSX errors in ${file}`);
        }
      } catch (error) {
        this.log(`⚠️ Could not process ${file}: ${error.message}`);
      }
    }
  }

  async fixESLintErrors() {
    try {
      this.log('🔧 Checking ESLint errors...');
      
      // Try to auto-fix ESLint errors
      try {
        execSync('npm run lint -- --fix', { stdio: 'pipe' });
        this.log('✅ ESLint auto-fix completed');
      } catch (error) {
        this.log('⚠️ ESLint auto-fix failed, checking for specific errors...');
        await this.fixSpecificESLintErrors();
      }
    } catch (error) {
      this.log(`❌ ESLint check failed: ${error.message}`);
    }
  }

  async fixSpecificESLintErrors() {
    // Fix common ESLint issues
    const files = this.findFiles('.ts,.tsx,.js,.jsx');
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // Fix trailing spaces
        content = content.replace(/[ \t]+$/gm, '');
        
        // Fix missing semicolons
        content = content.replace(/([^;])\n/g, '$1;\n');
        
        // Fix double quotes to single quotes
        content = content.replace(/"([^"]*)"/g, "'$1'");
        
        if (content !== fs.readFileSync(file, 'utf8')) {
          fs.writeFileSync(file, content);
          this.log(`✅ Fixed ESLint issues in ${file}`);
          this.fixesApplied++;
          this.errorsFixed.push({ file, type: 'eslint' });
          modified = true;
        }
        
        if (modified) {
          this.log(`📝 Fixed ESLint issues in ${file}`);
        }
      } catch (error) {
        this.log(`⚠️ Could not process ${file}: ${error.message}`);
      }
    }
  }

  async fixSyntaxErrors() {
    this.log('🔧 Checking for syntax errors...');
    
    const files = this.findFiles('.ts,.tsx,.js,.jsx');
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for common syntax errors
          this.log(`⚠️ Merge conflict detected in ${file}`);
          this.errorsFixed.push({ file, type: 'merge_conflict', needsManualFix: true });
        }
        
        // Check for malformed JSX
        if (content.includes('<>') && !content.includes('</>')) {
          this.log(`⚠️ Malformed JSX fragment in ${file}`);
          this.errorsFixed.push({ file, type: 'malformed_jsx', needsManualFix: true });
        }
        
      } catch (error) {
        this.log(`⚠️ Could not process ${file}: ${error.message}`);
      }
    }
  }

  async fixMissingDependencies() {
    try {
      this.log('🔧 Checking for missing dependencies...');
      
      // Check if node_modules exists
      if (!fs.existsSync(path.join(this.projectRoot, 'node_modules'))) {
        this.log('📦 Installing dependencies...');
        execSync('npm install', { stdio: 'inherit' });
        this.fixesApplied++;
        this.errorsFixed.push({ type: 'dependencies', action: 'installed' });
      }
      
      // Check for outdated packages
      try {
        const outdated = execSync('npm outdated --json', { encoding: 'utf8' });
        if (outdated && outdated !== '{}') {
          this.log('📦 Updating outdated packages...');
          execSync('npm update', { stdio: 'inherit' });
          this.fixesApplied++;
          this.errorsFixed.push({ type: 'dependencies', action: 'updated' });
        }
      } catch (error) {
        // No outdated packages
      }
      
    } catch (error) {
      this.log(`❌ Dependency check failed: ${error.message}`);
    }
  }

  async fixBuildErrors() {
    try {
      this.log('🔧 Checking build errors...');
      
      // Try to build the project
      try {
        execSync('npm run build', { stdio: 'pipe' });
        this.log('✅ Build successful');
      } catch (error) {
        this.log('⚠️ Build failed, attempting to fix...');
        
        // Clear build cache
        try {
          execSync('rm -rf dist', { stdio: 'pipe' });
          execSync('rm -rf .vite', { stdio: 'pipe' });
          this.log('🧹 Cleared build cache');
        } catch (e) {
          // Ignore errors
        }
        
        // Try building again
        try {
          execSync('npm run build', { stdio: 'pipe' });
          this.log('✅ Build successful after cache clear');
          this.fixesApplied++;
          this.errorsFixed.push({ type: 'build_cache', action: 'cleared' });
        } catch (e) {
          this.log('❌ Build still failing after cache clear');
        }
      }
      
    } catch (error) {
      this.log(`❌ Build check failed: ${error.message}`);
    }
  }

  findFiles(extensions) {
    const exts = extensions.split(',');
    const files = [];
    
    const walkDir = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          walkDir(fullPath);
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (exts.some(e => e.trim() === ext)) {
            files.push(fullPath);
          }
        }
      }
    };
    
    walkDir(this.projectRoot);
    return files;
  }

  saveReport() {
    const report = {
      timestamp: new Date().toISOString(),
      fixesApplied: this.fixesApplied,
      errorsFixed: this.errorsFixed,
      status: 'completed'
    };
    
    fs.writeFileSync(this.logFile, JSON.stringify(report, null, 2));
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      fixesApplied: this.fixesApplied,
      lastCheck: new Date().toISOString(),
      logFile: this.logFile
    };
  }
}

// Export for use in other modules
module.exports = AutoErrorFixer;

// If run directly, start the auto-fixer
if (require.main === module) {
  const autoFixer = new AutoErrorFixer();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    autoFixer.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    autoFixer.stop();
    process.exit(0);
  });
  
  // Start the auto-fixer
  autoFixer.start();
}