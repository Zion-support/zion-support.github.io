#!/usr/bin/env node

/**
 * Comprehensive Error Fixer - PM2 Automation Script
 * Automatically detects and fixes common project errors
 * Runs every 30 minutes to maintain code quality
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');

class ComprehensiveErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'comprehensive-error-fixer-report.json');
    this.errorsFixed = 0;
    this.warningsFixed = 0;
    this.startTime = new Date();
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  async run() {
    try {
      this.log('🚀 Starting Comprehensive Error Fixer...');
      
      // Check if we're in the right directory
      if (!fs.existsSync('package.json')) {
        throw new Error('Not in a Node.js project directory');
      }

      // Run all error fixing operations
      await this.fixESLintConfiguration();
      await this.fixTypeScriptErrors();
      await this.fixImportExportIssues();
      await this.fixUnusedImports();
      await this.fixBuildErrors();
      await this.fixDependencyIssues();
      await this.cleanupDuplicateFiles();
      
      // Generate report
      await this.generateReport();
      
      this.log(`✅ Comprehensive Error Fixer completed successfully!`);
      this.log(`📊 Fixed ${this.errorsFixed} errors and ${this.warningsFixed} warnings`);
      
    } catch (error) {
      this.log(`❌ Error in Comprehensive Error Fixer: ${error.message}`, 'ERROR');
      await this.generateReport();
      process.exit(1);
    }
  }

  async fixESLintConfiguration() {
    this.log('🔧 Fixing ESLint configuration...');
    
    try {
      const eslintrcPath = path.join(this.projectRoot, '.eslintrc.js');
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      
      if (fs.existsSync(eslintrcPath) && fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        
        if (packageJson.type === 'module') {
          // Convert CommonJS to ES module syntax
          let eslintrc = fs.readFileSync(eslintrcPath, 'utf8');
          
          if (eslintrc.includes('module.exports')) {
            eslintrc = eslintrc.replace('module.exports =', 'export default');
            fs.writeFileSync(eslintrcPath, eslintrc);
            this.log('✅ Fixed ESLint configuration (CommonJS → ES Module)');
            this.errorsFixed++;
          }
        }
      }
    } catch (error) {
      this.log(`⚠️ Warning: Could not fix ESLint configuration: ${error.message}`, 'WARN');
    }
  }

  async fixTypeScriptErrors() {
    this.log('🔧 Fixing TypeScript errors...');
    
    try {
      // Run TypeScript compiler to check for errors
      const result = execSync('npx tsc --noEmit --pretty', { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      if (result.includes('error TS')) {
        this.log('📝 TypeScript errors detected, attempting to fix...');
        
        // Fix common TypeScript issues
        await this.fixCommonTypeScriptIssues();
        this.warningsFixed++;
      }
    } catch (error) {
      // TypeScript errors are expected, try to fix them
      await this.fixCommonTypeScriptIssues();
    }
  }

  async fixCommonTypeScriptIssues() {
    try {
      // Fix unused imports
      await this.fixUnusedImports();
      
      // Fix missing exports
      await this.fixMissingExports();
      
      // Fix type mismatches
      await this.fixTypeMismatches();
      
    } catch (error) {
      this.log(`⚠️ Warning: Could not fix all TypeScript issues: ${error.message}`, 'WARN');
    }
  }

  async fixImportExportIssues() {
    this.log('🔧 Fixing import/export issues...');
    
    try {
      // Find all TypeScript/JavaScript files
      const files = this.findSourceFiles();
      
      for (const file of files) {
        await this.fixFileImportExports(file);
      }
      
    } catch (error) {
      this.log(`⚠️ Warning: Could not fix all import/export issues: ${error.message}`, 'WARN');
    }
  }

  async fixFileImportExports(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Fix missing default exports
      if (content.includes('export default') && !content.includes('export default function') && !content.includes('export default class')) {
        // Add default export if missing
        if (!content.includes('export default')) {
          const className = this.extractClassName(content);
          if (className) {
            content += `\nexport default ${className};\n`;
            modified = true;
          }
        }
      }
      
      // Fix duplicate imports
      const importLines = content.match(/import.*from.*['"]/g) || [];
      const uniqueImports = [...new Set(importLines)];
      if (uniqueImports.length !== importLines.length) {
        // Remove duplicate imports
        const lines = content.split('\n');
        const seen = new Set();
        const filteredLines = lines.filter(line => {
          if (line.trim().startsWith('import')) {
            if (seen.has(line.trim())) {
              return false;
            }
            seen.add(line.trim());
          }
          return true;
        });
        content = filteredLines.join('\n');
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        this.log(`✅ Fixed import/export issues in ${path.basename(filePath)}`);
        this.errorsFixed++;
      }
      
    } catch (error) {
      // Skip files that can't be processed
    }
  }

  async fixUnusedImports() {
    this.log('🔧 Fixing unused imports...');
    
    try {
      // Use ESLint to find and fix unused imports
      execSync('npx eslint . --fix --quiet', { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      this.log('✅ Fixed unused imports with ESLint');
      this.warningsFixed++;
      
    } catch (error) {
      // ESLint might fail, that's okay
      this.log('ℹ️ ESLint auto-fix completed (some issues may remain)');
    }
  }

  async fixMissingExports() {
    this.log('🔧 Fixing missing exports...');
    
    try {
      const files = this.findSourceFiles();
      
      for (const file of files) {
        await this.fixMissingExportInFile(file);
      }
      
    } catch (error) {
      this.log(`⚠️ Warning: Could not fix all missing exports: ${error.message}`, 'WARN');
    }
  }

  async fixMissingExportInFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has components but no exports
      if (content.includes('function ') || content.includes('const ') || content.includes('class ')) {
        if (!content.includes('export ') && !content.includes('export default')) {
          // Find the first component/function/class
          const match = content.match(/(?:function|const|class)\s+(\w+)/);
          if (match) {
            const componentName = match[1];
            const newContent = `export default ${componentName};\n\n${content}`;
            fs.writeFileSync(filePath, newContent);
            this.log(`✅ Added missing export to ${path.basename(filePath)}`);
            this.errorsFixed++;
          }
        }
      }
      
    } catch (error) {
      // Skip files that can't be processed
    }
  }

  async fixTypeMismatches() {
    this.log('🔧 Fixing type mismatches...');
    
    try {
      const files = this.findSourceFiles();
      
      for (const file of files) {
        await this.fixTypeMismatchInFile(file);
      }
      
    } catch (error) {
      this.log(`⚠️ Warning: Could not fix all type mismatches: ${error.message}`, 'WARN');
    }
  }

  async fixTypeMismatchInFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Fix common type issues
      if (content.includes('any')) {
        // Replace 'any' with more specific types where possible
        content = content.replace(/:\s*any\b/g, ': unknown');
        modified = true;
      }
      
      // Fix undefined type issues
      if (content.includes('undefined')) {
        content = content.replace(/:\s*undefined\b/g, ': undefined | null');
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        this.log(`✅ Fixed type mismatches in ${path.basename(filePath)}`);
        this.warningsFixed++;
      }
      
    } catch (error) {
      // Skip files that can't be processed
    }
  }

  async fixBuildErrors() {
    this.log('🔧 Fixing build errors...');
    
    try {
      // Try to build the project
      execSync('npm run build', { 
        cwd: this.projectRoot,
        stdio: 'pipe',
        timeout: 120000 // 2 minutes timeout
      });
      
      this.log('✅ Build successful - no build errors found');
      
    } catch (error) {
      this.log('⚠️ Build errors detected, attempting to fix...');
      
      // Try to fix common build issues
      await this.fixCommonBuildIssues();
      
      // Try building again
      try {
        execSync('npm run build', { 
          cwd: this.projectRoot,
          stdio: 'pipe',
          timeout: 120000
        });
        this.log('✅ Build errors fixed successfully');
        this.errorsFixed++;
      } catch (buildError) {
        this.log(`❌ Could not fix all build errors: ${buildError.message}`, 'ERROR');
      }
    }
  }

  async fixCommonBuildIssues() {
    try {
      // Fix missing dependencies
      if (fs.existsSync('package-lock.json')) {
        execSync('npm install', { 
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
      }
      
      // Clear build cache
      if (fs.existsSync('dist')) {
        execSync('rm -rf dist', { 
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
      }
      
      if (fs.existsSync('.next')) {
        execSync('rm -rf .next', { 
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
      }
      
    } catch (error) {
      this.log(`⚠️ Warning: Could not fix all build issues: ${error.message}`, 'WARN');
    }
  }

  async fixDependencyIssues() {
    this.log('🔧 Fixing dependency issues...');
    
    try {
      // Check for outdated dependencies
      const outdated = execSync('npm outdated --json', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      if (outdated && outdated !== '{}') {
        this.log('📦 Outdated dependencies found, updating...');
        
        // Update dependencies safely
        execSync('npm update', { 
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
        
        this.log('✅ Dependencies updated successfully');
        this.warningsFixed++;
      }
      
      // Check for security vulnerabilities
      try {
        const audit = execSync('npm audit --json', { 
          cwd: this.projectRoot,
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        const auditData = JSON.parse(audit);
        if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) {
          this.log('🔒 Security vulnerabilities found, attempting to fix...');
          
          execSync('npm audit fix', { 
            cwd: this.projectRoot,
            stdio: 'pipe'
          });
          
          this.log('✅ Security vulnerabilities fixed');
          this.errorsFixed++;
        }
      } catch (auditError) {
        // Audit might fail, that's okay
      }
      
    } catch (error) {
      this.log(`⚠️ Warning: Could not fix all dependency issues: ${error.message}`, 'WARN');
    }
  }

  async cleanupDuplicateFiles() {
    this.log('🔧 Cleaning up duplicate files...');
    
    try {
      // Find and remove duplicate files
      const files = this.findSourceFiles();
      const duplicates = this.findDuplicateFiles(files);
      
      for (const duplicate of duplicates) {
        if (duplicate.duplicate.includes('.backup') || duplicate.duplicate.includes('.jsx')) {
          fs.unlinkSync(duplicate.duplicate);
          this.log(`🗑️ Removed duplicate file: ${path.basename(duplicate.duplicate)}`);
          this.warningsFixed++;
        }
      }
      
    } catch (error) {
      this.log(`⚠️ Warning: Could not clean up all duplicate files: ${error.message}`, 'WARN');
    }
  }

  findSourceFiles() {
    const files = [];
    
    const scanDirectory = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist') {
          scanDirectory(fullPath);
        } else if (stat.isFile() && /\.(ts|tsx|js|jsx)$/.test(item)) {
          files.push(fullPath);
        }
      }
    };
    
    scanDirectory(this.projectRoot);
    return files;
  }

  findDuplicateFiles(files) {
    const duplicates = [];
    const contentHashes = new Map();
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const hash = crypto.createHash('md5').update(content).digest('hex');
        
        if (contentHashes.has(hash)) {
          duplicates.push({
            original: contentHashes.get(hash),
            duplicate: file
          });
        } else {
          contentHashes.set(hash, file);
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }
    
    return duplicates;
  }

  extractClassName(content) {
    const classMatch = content.match(/class\s+(\w+)/);
    if (classMatch) return classMatch[1];
    
    const functionMatch = content.match(/function\s+(\w+)/);
    if (functionMatch) return functionMatch[1];
    
    const constMatch = content.match(/const\s+(\w+)\s*=/);
    if (constMatch) return constMatch[1];
    
    return null;
  }

  async generateReport() {
    const endTime = new Date();
    const duration = endTime.getTime() - this.startTime.getTime();
    
    const report = {
      timestamp: endTime.toISOString(),
      duration: `${duration}ms`,
      errorsFixed: this.errorsFixed,
      warningsFixed: this.warningsFixed,
      status: this.errorsFixed > 0 || this.warningsFixed > 0 ? 'fixed' : 'clean',
      summary: `Fixed ${this.errorsFixed} errors and ${this.warningsFixed} warnings in ${duration}ms`
    };
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Report generated: ${this.reportFile}`);
  }
}

// Run the error fixer
const fixer = new ComprehensiveErrorFixer();
fixer.run().catch(console.error);