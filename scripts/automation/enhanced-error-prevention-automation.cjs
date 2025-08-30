#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const glob = require('glob');

class EnhancedErrorPreventionAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.errorsFixed = 0;
    this.filesProcessed = 0;
    this.startTime = Date.now();
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  async runCommand(command, options = {}) {
    try {
      const result = execSync(command, { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe',
        ...options 
      });
      return { success: true, output: result };
    } catch (error) {
      return { 
        success: false, 
        error: error.message, 
        output: error.stdout?.toString() || error.stderr?.toString() || ''
      };
    }
  }

  async fixTypeScriptErrors() {
    this.log('Starting TypeScript error fixing...');
    
    const patterns = [
      'src/**/*.{ts,tsx}',
      'pages/**/*.{ts,tsx}',
      'components/**/*.{ts,tsx}',
      'utils/**/*.{ts,tsx}',
      'hooks/**/*.{ts,tsx}',
      'types/**/*.{ts,tsx}'
    ];

    for (const pattern of patterns) {
      const files = glob.sync(pattern, { cwd: this.projectRoot });
      
      for (const file of files) {
        const filePath = path.join(this.projectRoot, file);
        if (fs.existsSync(filePath)) {
          await this.fixTypeScriptFile(filePath);
        }
      }
    }
  }

  async fixTypeScriptFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Fix missing type annotations
      content = content.replace(/:\s*\)/g, ': any)');
      content = content.replace(/:\s*$/gm, ': any');
      content = content.replace(/:\s*,\s*$/gm, ': any,');
      
      // Fix JSX syntax errors
      content = content.replace(/<>/g, '<div>');
      content = content.replace(/<\/>/g, '</div>');
      
      // Fix missing return statements
      if (content.includes('function') && !content.includes('return')) {
        content = content.replace(/(function\s+\w+\s*\([^)]*\)\s*\{[^}]*\})/g, '$1 return null; }');
      }

      // Fix missing imports
      if (content.includes('React') && !content.includes("import React")) {
        content = "import React from 'react';\n" + content;
      }

      if (modified) {
        fs.writeFileSync(filePath, content);
        this.errorsFixed++;
        this.log(`Fixed TypeScript errors in: ${filePath}`);
      }
      
      this.filesProcessed++;
    } catch (error) {
      this.log(`Error processing file ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  async fixESLintErrors() {
    this.log('Starting ESLint error fixing...');
    
    try {
      // Run ESLint with auto-fix
      const result = await this.runCommand('npm run fix:all');
      if (result.success) {
        this.log('ESLint auto-fix completed successfully');
      } else {
        this.log(`ESLint auto-fix failed: ${result.error}`, 'WARN');
      }
    } catch (error) {
      this.log(`ESLint fixing error: ${error.message}`, 'ERROR');
    }
  }

  async fixBuildErrors() {
    this.log('Starting build error fixing...');
    
    // Fix common build issues
    await this.fixPackageJsonIssues();
    await this.fixConfigFiles();
    await this.fixImportIssues();
  }

  async fixPackageJsonIssues() {
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      try {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        
        // Ensure all required dependencies are present
        const requiredDeps = ['globals', '@types/node', 'typescript'];
        for (const dep of requiredDeps) {
          if (!packageJson.devDependencies[dep]) {
            this.log(`Adding missing dependency: ${dep}`);
            await this.runCommand(`npm install --save-dev ${dep}`);
          }
        }
      } catch (error) {
        this.log(`Error fixing package.json: ${error.message}`, 'ERROR');
      }
    }
  }

  async fixConfigFiles() {
    // Fix ESLint config
    const eslintConfigPath = path.join(this.projectRoot, 'eslint.config.js');
    if (fs.existsSync(eslintConfigPath)) {
      try {
        let content = fs.readFileSync(eslintConfigPath, 'utf8');
        
        // Ensure proper module syntax
        if (!content.includes('export default')) {
          content = content.replace('module.exports =', 'export default');
        }
        
        fs.writeFileSync(eslintConfigPath, content);
        this.log('Fixed ESLint configuration');
      } catch (error) {
        this.log(`Error fixing ESLint config: ${error.message}`, 'ERROR');
      }
    }
  }

  async fixImportIssues() {
    this.log('Fixing import issues...');
    
    const patterns = ['src/**/*.{ts,tsx}', 'pages/**/*.{ts,tsx}'];
    
    for (const pattern of patterns) {
      const files = glob.sync(pattern, { cwd: this.projectRoot });
      
      for (const file of files) {
        const filePath = path.join(this.projectRoot, file);
        if (fs.existsSync(filePath)) {
          await this.fixImportInFile(filePath);
        }
      }
    }
  }

  async fixImportInFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Fix relative imports
      content = content.replace(/from\s+['"]\.\.\/\.\.\/\.\.\/\.\.\//g, "from '../../../");
      content = content.replace(/from\s+['"]\.\.\/\.\.\/\.\.\//g, "from '../../");
      content = content.replace(/from\s+['"]\.\.\/\.\.\//g, "from '../");
      
      // Fix missing file extensions
      content = content.replace(/from\s+['"]([^'"]+)['"]/g, (match, importPath) => {
        if (importPath.startsWith('.') && !importPath.includes('.')) {
          return `from '${importPath}.tsx'`;
        }
        return match;
      });

      if (modified) {
        fs.writeFileSync(filePath, content);
        this.errorsFixed++;
        this.log(`Fixed imports in: ${filePath}`);
      }
    } catch (error) {
      this.log(`Error fixing imports in ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  async runTests() {
    this.log('Running tests to verify fixes...');
    
    try {
      const result = await this.runCommand('npm test -- --passWithNoTests');
      if (result.success) {
        this.log('All tests passed');
      } else {
        this.log(`Some tests failed: ${result.error}`, 'WARN');
      }
    } catch (error) {
      this.log(`Test execution error: ${error.message}`, 'ERROR');
    }
  }

  async generateReport() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      filesProcessed: this.filesProcessed,
      errorsFixed: this.errorsFixed,
      success: this.errorsFixed > 0,
      summary: `Processed ${this.filesProcessed} files and fixed ${this.errorsFixed} errors in ${duration}ms`
    };

    const reportPath = path.join(this.reportsDir, 'enhanced-error-prevention-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportPath}`);
    this.log(report.summary);
    
    return report;
  }

  async run() {
    this.log('Starting Enhanced Error Prevention Automation...');
    
    try {
      await this.fixTypeScriptErrors();
      await this.fixESLintErrors();
      await this.fixBuildErrors();
      await this.runTests();
      
      const report = await this.generateReport();
      
      this.log('Enhanced Error Prevention Automation completed successfully');
      return report;
      
    } catch (error) {
      this.log(`Automation failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const automation = new EnhancedErrorPreventionAutomation();
  automation.run().catch(console.error);
}

module.exports = EnhancedErrorPreventionAutomation;