#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
    this.startTime = Date.now();
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
  }

  async fixFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        return false;
      }

      const content = fs.readFileSync(filePath, 'utf8');
      let fixedContent = content;

      // Fix common syntax errors
      fixedContent = this.fixCommonSyntaxErrors(fixedContent);
      
      // Fix merge conflicts
      fixedContent = this.fixMergeConflicts(fixedContent);
      
      // Fix HTML entities
      fixedContent = this.fixHtmlEntities(fixedContent);
      
      // Fix malformed imports
      fixedContent = this.fixMalformedImports(fixedContent);
      
      // Fix malformed JSX
      fixedContent = this.fixMalformedJSX(fixedContent);

      if (fixedContent !== content) {
        fs.writeFileSync(filePath, fixedContent);
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed: ${filePath}`);
        return true;
      }

      return false;
    } catch (error) {
      this.log(`❌ Error fixing ${filePath}: ${error.message}`, 'ERROR');
      this.errors.push({ file: filePath, error: error.message });
      return false;
    }
  }

  fixCommonSyntaxErrors(content) {
    // Fix unterminated strings
    content = content.replace(/'([^']*)$/gm, "'$1'");
    content = content.replace(/"([^"]*)$/gm, '"$1"');
    
    // Fix missing semicolons
    content = content.replace(/([^;}])\n/g, '$1;\n');
    
    // Fix malformed function declarations
    content = content.replace(/function\s*\(\s*\)\s*{/g, 'function() {');
    
    // Fix malformed arrow functions
    content = content.replace(/=>\s*{/g, '=> {');
    
    // Fix malformed object literals
    content = content.replace(/{([^}]*),([^}]*),/g, '{$1, $2,');
    
    return content;
  }

  fixMergeConflicts(content) {
    // Remove merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    return content;
  }

  fixHtmlEntities(content) {
    // Fix HTML entities in JSX
    content = content.replace(/&amp;apos;/g, "'");
    content = content.replace(/&amp;quot;/g, '"');
    content = content.replace(/&amp;lt;/g, '<');
    content = content.replace(/&amp;gt;/g, '>');
    content = content.replace(/&amp;amp;/g, '&');
    
    return content;
  }

  fixMalformedImports(content) {
    // Fix malformed import statements
    content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*import/g, 'import { $1 } from "$2";\nimport');
    content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*const/g, 'import { $1 } from "$2";\nconst');
    content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*function/g, 'import { $1 } from "$2";\nfunction');
    
    return content;
  }

  fixMalformedJSX(content) {
    // Fix malformed JSX tags
    content = content.replace(/<([^>]*)\s*>/g, '<$1>');
    content = content.replace(/<\/([^>]*)\s*>/g, '</$1>');
    
    // Fix malformed JSX attributes
    content = content.replace(/className\s*=\s*['"]([^'"]*)['"]/g, 'className="$1"');
    content = content.replace(/onClick\s*=\s*{([^}]*)}/g, 'onClick={$1}');
    
    return content;
  }

  async fixCriticalFiles() {
    this.log('🔧 Fixing critical files...');
    
    const criticalFiles = [
      'src/main.tsx',
      'src/App.tsx',
      'src/pages/index.tsx',
      'src/components/ui/button.tsx',
      'src/components/ui/input.tsx',
      'src/layout/AppHeader.tsx',
      'src/layout/MainNavigation.tsx'
    ];

    for (const file of criticalFiles) {
      await this.fixFile(file);
    }
  }

  async fixAllFiles() {
    this.log('🔧 Fixing all files...');
    
    const srcDir = path.join(this.projectRoot, 'src');
    if (!fs.existsSync(srcDir)) {
      this.log('❌ src directory not found', 'ERROR');
      return;
    }

    const files = this.getAllFiles(srcDir);
    let fixedCount = 0;

    for (const file of files) {
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
        const wasFixed = await this.fixFile(file);
        if (wasFixed) {
          fixedCount++;
        }
      }
    }

    this.log(`✅ Fixed ${fixedCount} files out of ${files.length} total files`);
  }

  getAllFiles(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.getAllFiles(fullPath));
      } else {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  async runTests() {
    this.log('🧪 Running tests...');
    
    try {
      execSync('npm run test:smoke', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 30000 
      });
      this.log('✅ Tests passed');
      return true;
    } catch (error) {
      this.log(`❌ Tests failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async buildProject() {
    this.log('🏗️ Building project...');
    
    try {
      execSync('npm run build', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 120000 
      });
      this.log('✅ Build successful');
      return true;
    } catch (error) {
      this.log(`❌ Build failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  generateReport() {
    const duration = Date.now() - this.startTime;
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      fixedFiles: this.fixedFiles.length,
      errors: this.errors.length,
      files: this.fixedFiles,
      errorDetails: this.errors
    };

    const reportPath = path.join(this.projectRoot, 'syntax-fix-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📄 Report saved to: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('🚀 Starting Comprehensive Syntax Fixer...');
    
    try {
      // Fix critical files first
      await this.fixCriticalFiles();
      
      // Try to build
      const buildSuccess = await this.buildProject();
      
      if (!buildSuccess) {
        // If build fails, fix all files
        await this.fixAllFiles();
        
        // Try building again
        await this.buildProject();
      }
      
      // Run tests
      await this.runTests();
      
      // Generate report
      const report = this.generateReport();
      
      this.log('🎉 Comprehensive Syntax Fixer completed!');
      this.log(`📊 Fixed ${report.fixedFiles} files`);
      this.log(`❌ ${report.errors} errors encountered`);
      
      return report;
    } catch (error) {
      this.log(`💥 Comprehensive Syntax Fixer failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const fixer = new ComprehensiveSyntaxFixer();
  fixer.run().catch(console.error);
}

module.exports = ComprehensiveSyntaxFixer;