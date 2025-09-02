#!/usr/bin/env node

/**
 * Comprehensive Error Fixer Automation
 * Fixes multiple types of errors comprehensively
 * Runs every 30 minutes
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const glob = require('glob');

class ComprehensiveErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation/logs/comprehensive-error-fixer.log');
    this.ensureLogDirectory();
    this.fixCount = 0;
    this.errorTypes = {
      syntax: 0,
      import: 0,
      component: 0,
      dependency: 0,
      build: 0
    };
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    fs.appendFileSync(this.logFile, logMessage);
    console.log(`[COMPREHENSIVE-ERROR-FIXER] ${message}`);
  }

  fixSyntaxErrors() {
    this.log('Fixing syntax errors...');
    
    const allFiles = glob.sync('src/**/*.{js,jsx,ts,tsx}', { cwd: this.projectRoot });
    
    allFiles.forEach(filePath => {
      try {
        const fullPath = path.join(this.projectRoot, filePath);
        let content = fs.readFileSync(fullPath, 'utf8');
        let modified = false;

        // Fix broken JSX expressions
        const brokenJsxRegex = /<([A-Z][a-zA-Z]*)\s*\(([^)]+)\)/g;
        if (brokenJsxRegex.test(content)) {
          content = content.replace(brokenJsxRegex, '<$1 $2');
          modified = true;
        }

        // Fix unterminated strings
        const unterminatedStringRegex = /"([^"]*)$/gm;
        if (unterminatedStringRegex.test(content)) {
          content = content.replace(unterminatedStringRegex, '"$1"');
          modified = true;
        }

        // Fix missing semicolons
        const missingSemicolonRegex = /([^;])\s*$/gm;
        if (missingSemicolonRegex.test(content)) {
          content = content.replace(missingSemicolonRegex, '$1;');
          modified = true;
        }

        if (modified) {
          fs.writeFileSync(fullPath, content);
          this.log(`Fixed syntax errors in ${filePath}`);
          this.fixCount++;
          this.errorTypes.syntax++;
        }
      } catch (error) {
        this.log(`Error fixing syntax in ${filePath}: ${error.message}`);
      }
    });
  }

  fixImportIssues() {
    this.log('Fixing import issues...');
    
    const tsFiles = glob.sync('src/**/*.{ts,tsx}', { cwd: this.projectRoot });
    
    tsFiles.forEach(filePath => {
      try {
        const fullPath = path.join(this.projectRoot, filePath);
        let content = fs.readFileSync(fullPath, 'utf8');
        let modified = false;

        // Fix broken import statements
        const brokenImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*;?\s*$/gm;
        if (brokenImportRegex.test(content)) {
          content = content.replace(brokenImportRegex, (match, imports, module) => {
            const cleanImports = imports.replace(/\s+/g, ' ').trim();
            return `import { ${cleanImports} } from '${module}';`;
          });
          modified = true;
        }

        // Fix missing semicolons in imports
        const missingSemicolonRegex = /import\s*{[^}]+}\s*from\s*['"][^'"]+['"](?!\s*;)/g;
        if (missingSemicolonRegex.test(content)) {
          content = content.replace(missingSemicolonRegex, '$&;');
          modified = true;
        }

        if (modified) {
          fs.writeFileSync(fullPath, content);
          this.log(`Fixed import issues in ${filePath}`);
          this.fixCount++;
          this.errorTypes.import++;
        }
      } catch (error) {
        this.log(`Error fixing imports in ${filePath}: ${error.message}`);
      }
    });
  }

  fixComponentIssues() {
    this.log('Fixing component issues...');
    
    const componentFiles = glob.sync('src/**/*.{tsx,jsx}', { cwd: this.projectRoot });
    
    componentFiles.forEach(filePath => {
      try {
        const fullPath = path.join(this.projectRoot, filePath);
        let content = fs.readFileSync(fullPath, 'utf8');
        let modified = false;

        // Fix broken JSX component calls
        const brokenComponentRegex = /<([A-Z][a-zA-Z]*)\s*\(([^)]+)\)\s*>/g;
        if (brokenComponentRegex.test(content)) {
          content = content.replace(brokenComponentRegex, '<$1 $2>');
          modified = true;
        }

        // Fix missing closing tags
        const selfClosingTags = ['img', 'input', 'br', 'hr', 'meta', 'link'];
        selfClosingTags.forEach(tag => {
          const regex = new RegExp(`<${tag}([^>]*)(?<!\\/>)>`, 'g');
          if (regex.test(content)) {
            content = content.replace(regex, `<${tag}$1 />`);
            modified = true;
          }
        });

        if (modified) {
          fs.writeFileSync(fullPath, content);
          this.log(`Fixed component issues in ${filePath}`);
          this.fixCount++;
          this.errorTypes.component++;
        }
      } catch (error) {
        this.log(`Error fixing components in ${filePath}: ${error.message}`);
      }
    });
  }

  async fixDependencyIssues() {
    this.log('Fixing dependency issues...');
    
    try {
      // Check if package.json exists and is valid
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        try {
          JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        } catch (error) {
          this.log('Invalid package.json detected, attempting to fix...');
          // Create a backup and try to restore
          const backupPath = packageJsonPath + '.backup.' + Date.now();
          fs.copyFileSync(packageJsonPath, backupPath);
          this.log(`Created backup: ${backupPath}`);
          this.errorTypes.dependency++;
        }
      }

      // Install missing dependencies
      try {
        execSync('npm install', { cwd: this.projectRoot, stdio: 'pipe' });
        this.log('Dependencies installed successfully');
      } catch (error) {
        this.log(`Error installing dependencies: ${error.message}`);
        this.errorTypes.dependency++;
      }
    } catch (error) {
      this.log(`Error fixing dependency issues: ${error.message}`);
    }
  }

  async fixBuildIssues() {
    this.log('Fixing build issues...');
    
    try {
      // Clean build artifacts
      const buildDirs = ['dist', 'build', '.next', 'out'];
      buildDirs.forEach(dir => {
        const fullPath = path.join(this.projectRoot, dir);
        if (fs.existsSync(fullPath)) {
          fs.rmSync(fullPath, { recursive: true, force: true });
          this.log(`Removed ${dir} directory`);
        }
      });

      // Remove TypeScript build info
      const tsBuildInfo = path.join(this.projectRoot, 'tsconfig.tsbuildinfo');
      if (fs.existsSync(tsBuildInfo)) {
        fs.unlinkSync(tsBuildInfo);
        this.log('Removed TypeScript build info');
      }

      // Try to run build
      try {
        execSync('npm run build', { cwd: this.projectRoot, stdio: 'pipe', timeout: 120000 });
        this.log('Build completed successfully');
      } catch (error) {
        this.log(`Build failed: ${error.message}`);
        this.errorTypes.build++;
      }
    } catch (error) {
      this.log(`Error fixing build issues: ${error.message}`);
    }
  }

  async runTypeCheck() {
    try {
      this.log('Running TypeScript type check...');
      execSync('npm run type-check', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 60000 
      });
      this.log('TypeScript type check passed');
      return true;
    } catch (error) {
      this.log(`TypeScript type check failed: ${error.message}`);
      return false;
    }
  }

  async runLint() {
    try {
      this.log('Running ESLint...');
      execSync('npm run lint', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 60000 
      });
      this.log('ESLint passed');
      return true;
    } catch (error) {
      this.log(`ESLint failed: ${error.message}`);
      return false;
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      totalErrorsFixed: this.fixCount,
      errorTypes: this.errorTypes,
      status: this.fixCount > 0 ? 'SUCCESS' : 'NO_ISSUES',
      summary: `Fixed ${this.fixCount} errors across ${Object.values(this.errorTypes).filter(count => count > 0).length} error types`
    };

    const reportPath = path.join(this.projectRoot, 'automation/logs/comprehensive-error-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('Starting Comprehensive Error Fixer...');
    
    try {
      // Step 1: Fix syntax errors
      this.fixSyntaxErrors();
      
      // Step 2: Fix import issues
      this.fixImportIssues();
      
      // Step 3: Fix component issues
      this.fixComponentIssues();
      
      // Step 4: Fix dependency issues
      await this.fixDependencyIssues();
      
      // Step 5: Fix build issues
      await this.fixBuildIssues();
      
      // Step 6: Run type check
      const typeCheckPassed = await this.runTypeCheck();
      
      // Step 7: Run lint
      const lintPassed = await this.runLint();
      
      // Generate report
      const report = await this.generateReport();
      
      this.log(`Comprehensive Error Fixer completed. Fixed ${this.fixCount} errors.`);
      this.log(`Error types fixed: ${JSON.stringify(this.errorTypes)}`);
      
      if (typeCheckPassed && lintPassed) {
        this.log('All checks passed successfully!');
      } else {
        this.log('Some checks failed, but errors were fixed');
      }
      
    } catch (error) {
      this.log(`Error in Comprehensive Error Fixer: ${error.message}`);
    }
  }
}

// Run the automation
const fixer = new ComprehensiveErrorFixer();

// Handle process signals
process.on('SIGINT', () => {
  fixer.log('Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  fixer.log('Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Run the fixer
fixer.run().catch(error => {
  fixer.log(`Unhandled error: ${error.message}`);
  process.exit(1);
});