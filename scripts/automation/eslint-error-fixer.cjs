#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

class ESLintErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'eslint-error-fixer-report.json');
    this.fixesApplied = [];
    this.errorsFound = [];
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type.toUpperCase()}] ${message}`);
  }

  async runCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, output: error.message, code: error.status };
    }
  }

  async fixESLintErrors() {
    this.log('Running ESLint with auto-fix...');
    
    // Run ESLint with auto-fix
    const eslintResult = await this.runCommand('npx eslint --fix src/**/*.{js,jsx,ts,tsx}', { silent: true });
    
    if (eslintResult.success) {
      this.fixesApplied.push('Applied ESLint auto-fixes');
      this.log('ESLint auto-fixes applied successfully', 'success');
    } else {
      this.errorsFound.push('ESLint errors detected');
      this.log('ESLint errors found', 'warn');
    }
  }

  async fixCommonESLintIssues() {
    this.log('Fixing common ESLint issues...');
    
    const files = glob.sync('src/**/*.{js,jsx,ts,tsx}', { cwd: this.projectRoot });
    
    for (const file of files) {
      const filePath = path.join(this.projectRoot, file);
      const content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      let newContent = content;
      
      // Fix unused variables
      const unusedVarRegex = /const\s+(\w+)\s*=\s*[^;]+;\s*(?:\/\/.*)?$/gm;
      let match;
      while ((match = unusedVarRegex.exec(content)) !== null) {
        const varName = match[1];
        if (!content.includes(varName) || content.indexOf(varName) === content.lastIndexOf(varName)) {
          newContent = newContent.replace(match[0], `// ${match[0]}`);
          modified = true;
        }
      }
      
      // Fix console statements
      if (newContent.includes('console.log(') || newContent.includes('console.error(')) {
        newContent = newContent.replace(/console\.log\(/g, '// console.log(');
        newContent = newContent.replace(/console\.error\(/g, '// console.error(');
        newContent = newContent.replace(/console\.warn\(/g, '// console.warn(');
        newContent = newContent.replace(/console\.info\(/g, '// console.info(');
        modified = true;
      }
      
      // Fix missing semicolons
      newContent = newContent.replace(/([^;])\n(import|export|const|let|var|function|class)/g, '$1;\n$2');
      
      if (modified) {
        fs.writeFileSync(filePath, newContent);
        this.fixesApplied.push(`Fixed ESLint issues in ${file}`);
      }
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      fixesApplied: this.fixesApplied,
      errorsFound: this.errorsFound,
      summary: {
        totalFixes: this.fixesApplied.length,
        totalErrors: this.errorsFound.length,
        success: this.errorsFound.length === 0
      }
    };
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`Report generated: ${this.reportFile}`);
  }

  async run() {
    this.log('Starting ESLint error fixing...');
    
    try {
      await this.fixCommonESLintIssues();
      await this.fixESLintErrors();
      
      await this.generateReport();
      
      this.log(`ESLint error fixing completed. Applied ${this.fixesApplied.length} fixes.`);
      
      if (this.errorsFound.length > 0) {
        this.log(`Remaining errors: ${this.errorsFound.length}`, 'warn');
        this.errorsFound.forEach(error => this.log(`- ${error}`, 'warn'));
      }
      
    } catch (error) {
      this.log(`Error during ESLint fixing process: ${error.message}`, 'error');
      throw error;
    }
  }
}

// Run the fixer
if (require.main === module) {
  const fixer = new ESLintErrorFixer();
  fixer.run().catch(console.error);
}

module.exports = ESLintErrorFixer;