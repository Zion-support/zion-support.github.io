#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting Comprehensive Syntax Fixer...');

class ComprehensiveSyntaxFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
    this.reportPath = path.join(__dirname, '..', 'automation-reports', 'syntax-fix-report.json');
    this.ensureReportDir();
  }

  ensureReportDir() {
    const reportDir = path.dirname(this.reportPath);
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async fixImportStatements(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Fix import statements with commas instead of semicolons
      const importRegex = /^import\s+.*?,\s*$/gm;
      const matches = content.match(importRegex);
      
      if (matches) {
        content = content.replace(importRegex, (match) => {
          return match.replace(/,\s*$/, ';');
        });
        modified = true;
      }

      // Fix export statements with commas
      const exportRegex = /^export\s+.*?,\s*$/gm;
      const exportMatches = content.match(exportRegex);
      
      if (exportMatches) {
        content = content.replace(exportRegex, (match) => {
          return match.replace(/,\s*$/, ';');
        });
        modified = true;
      }

      // Fix function declarations with commas
      const functionRegex = /^export\s+.*?function\s+.*?,\s*$/gm;
      const functionMatches = content.match(functionRegex);
      
      if (functionMatches) {
        content = content.replace(functionRegex, (match) => {
          return match.replace(/,\s*$/, ';');
        });
        modified = true;
      }

      // Fix const/let/var declarations with commas
      const constRegex = /^(const|let|var)\s+.*?,\s*$/gm;
      const constMatches = content.match(constRegex);
      
      if (constMatches) {
        content = content.replace(constRegex, (match) => {
          return match.replace(/,\s*$/, ';');
        });
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed syntax in: ${filePath}`);
        return true;
      }

      return false;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false;
    }
  }

  async findAndFixFiles() {
    
    const extensions = ['.tsx', '.ts', '.jsx', '.js'];
    const files = [];

    // Find all relevant files
    for (const ext of extensions) {
      try {
        const result = execSync(`find . -name "*${ext}" -type f | grep -v node_modules | grep -v .next | grep -v dist | head -50`, { 
          encoding: 'utf8',
          cwd: path.join(__dirname, '..')
        });
        files.push(...result.trim().split('\n').filter(f => f));
      } catch (error) {
        this.log(`⚠️ Error finding ${ext} files: ${error.message}`);
      }
    }

    this.log(`📁 Found ${files.length} files to check`);

    let fixedCount = 0;
    for (const file of files) {
      if (file && fs.existsSync(file)) {
        const wasFixed = await this.fixImportStatements(file);
        if (wasFixed) {
          fixedCount++;
        }
      }
    }

    this.log(`🔧 Fixed syntax in ${fixedCount} files`);
  }

  async runLinting() {
    this.log('🔍 Running linting fixes...');
    
    try {
      execSync('npm run lint:fix', { 
        encoding: 'utf8',
        cwd: path.join(__dirname, '..'),
        stdio: 'pipe'
      });
      this.log('✅ Linting fixes completed');
    } catch (error) {
      this.log(`⚠️ Linting fixes had issues: ${error.message}`);
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      fixedFiles: this.fixedFiles,
      errors: this.errors,
      summary: {
        totalFilesFixed: this.fixedFiles.length,
        totalErrors: this.errors.length,
        successRate: this.fixedFiles.length / (this.fixedFiles.length + this.errors.length) * 100
      }
    };

    fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Report saved to: ${this.reportPath}`);
  }

  async run() {
    try {
      this.log('🎯 Starting comprehensive syntax fixing...');
      
      await this.findAndFixFiles();
      await this.runLinting();
      await this.generateReport();

      this.log('🎉 Comprehensive syntax fixing completed successfully!');
      this.log(`📊 Fixed ${this.fixedFiles.length} files`);
      this.log(`❌ ${this.errors.length} errors encountered`);
    } catch (error) {
      this.log(`❌ Comprehensive syntax fixing failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the syntax fixer
const fixer = new ComprehensiveSyntaxFixer();
fixer.run().catch(console.error);
// Run the syntax fixer
const fixer = new ComprehensiveSyntaxFixer();
fixer.run().catch(console.error);
