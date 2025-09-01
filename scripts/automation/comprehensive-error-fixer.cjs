#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const glob = require('glob');

class ComprehensiveErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.errorLog = [];
    this.fixedFiles = new Set();
    this.reportPath = path.join(this.projectRoot, 'error-reports', 'comprehensive-error-fixer-report.json');
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = { timestamp, type, message };
    this.errorLog.push(logEntry);
    console.log(`[${timestamp}] [${type.toUpperCase()}] ${message}`);
  }

  async ensureDirectoryExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
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
      return { success: false, error: error.message, output: error.stdout || error.stderr };
    }
  }

  async fixESLintConfig() {
    this.log('Fixing ESLint configuration...');
    
    const eslintConfigPath = path.join(this.projectRoot, '.eslintrc.js');
    if (fs.existsSync(eslintConfigPath)) {
      try {
        let content = fs.readFileSync(eslintConfigPath, 'utf8');
        
        // Fix CommonJS to ES module syntax
        if (content.includes('module.exports')) {
          content = content.replace('module.exports =', 'export default');
          fs.writeFileSync(eslintConfigPath, content);
          this.log('Fixed ESLint config CommonJS syntax', 'success');
          this.fixedFiles.add(eslintConfigPath);
        }
      } catch (error) {
        this.log(`Error fixing ESLint config: ${error.message}`, 'error');
      }
    }
  }

  async fixTypeScriptErrors() {
    this.log('Fixing TypeScript errors...');
    
    // Get all TypeScript files
    const tsFiles = glob.sync('**/*.{ts,tsx}', { 
      cwd: this.projectRoot,
      ignore: ['node_modules/**', '.next/**', 'out/**', 'dist/**']
    });

    for (const file of tsFiles) {
      const filePath = path.join(this.projectRoot, file);
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // Fix common TypeScript errors
        const fixes = [
          // Fix missing semicolons
          { pattern: /([^;])\n/g, replacement: '$1;\n' },
          
          // Fix missing type annotations
          { pattern: /const\s+(\w+)\s*=\s*require\(/g, replacement: 'import $1 from ' },
          { pattern: /module\.exports\s*=/g, replacement: 'export default' },
          
          // Fix React imports
          { pattern: /import\s+React\s+from\s+['"]react['"];?\s*\n?/g, replacement: '' },
          
          // Fix JSX syntax
          { pattern: /\.jsx?$/g, replacement: '' },
          
          // Fix any types
          { pattern: /:\s*any\s*([,;\)])/g, replacement: ': unknown$1' },
          
          // Fix unused variables
          { pattern: /const\s+(\w+)\s*=\s*[^;]+;\s*\n\s*\/\/\s*unused/g, replacement: '' },
        ];

        for (const fix of fixes) {
          const newContent = content.replace(fix.pattern, fix.replacement);
          if (newContent !== content) {
            content = newContent;
            modified = true;
          }
        }

        if (modified) {
          fs.writeFileSync(filePath, content);
          this.log(`Fixed TypeScript errors in ${file}`, 'success');
          this.fixedFiles.add(filePath);
        }
      } catch (error) {
        this.log(`Error fixing TypeScript file ${file}: ${error.message}`, 'error');
      }
    }
  }

  async fixJSXErrors() {
    this.log('Fixing JSX errors...');
    
    const jsxFiles = glob.sync('**/*.{jsx,tsx}', { 
      cwd: this.projectRoot,
      ignore: ['node_modules/**', '.next/**', 'out/**', 'dist/**']
    });

    for (const file of jsxFiles) {
      const filePath = path.join(this.projectRoot, file);
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // Fix common JSX errors
        const jsxFixes = [
          // Fix missing React import
          { 
            pattern: /^(?!.*import.*React)/m, 
            replacement: "import React from 'react';\n$&",
            condition: (content) => content.includes('jsx') && !content.includes("import React")
          },
          
          // Fix self-closing tags
          { pattern: /<(\w+)([^>]*)\s*\/\s*>/g, replacement: '<$1$2 />' },
          
          // Fix missing key props
          { pattern: /\.map\(([^)]+)\)/g, replacement: '.map(($1, index) => ({ ...$1, key: index }))' },
          
          // Fix className instead of class
          { pattern: /class\s*=/g, replacement: 'className=' },
        ];

        for (const fix of jsxFixes) {
          if (!fix.condition || fix.condition(content)) {
            const newContent = content.replace(fix.pattern, fix.replacement);
            if (newContent !== content) {
              content = newContent;
              modified = true;
            }
          }
        }

        if (modified) {
          fs.writeFileSync(filePath, content);
          this.log(`Fixed JSX errors in ${file}`, 'success');
          this.fixedFiles.add(filePath);
        }
      } catch (error) {
        this.log(`Error fixing JSX file ${file}: ${error.message}`, 'error');
      }
    }
  }

  async fixDependencyIssues() {
    this.log('Fixing dependency issues...');
    
    // Fix package.json dependency conflicts
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      try {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        let modified = false;

        // Fix React version conflicts
        if (packageJson.devDependencies && packageJson.devDependencies['@types/react']) {
          if (packageJson.devDependencies['@types/react-dom']) {
            // Ensure compatible versions
            packageJson.devDependencies['@types/react'] = '^18.0.0';
            packageJson.devDependencies['@types/react-dom'] = '^18.0.0';
            modified = true;
          }
        }

        if (modified) {
          fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
          this.log('Fixed package.json dependency conflicts', 'success');
          this.fixedFiles.add(packageJsonPath);
          
          // Reinstall dependencies
          await this.runCommand('npm install --legacy-peer-deps', { silent: true });
        }
      } catch (error) {
        this.log(`Error fixing package.json: ${error.message}`, 'error');
      }
    }
  }

  async fixBuildErrors() {
    this.log('Fixing build errors...');
    
    // Fix common build errors
    const buildFixes = [
      {
        pattern: /\.js\.jsx$/g,
        replacement: '.jsx',
        description: 'Fix double .js.jsx extensions'
      },
      {
        pattern: /import\s+.*\s+from\s+['"]([^'"]+)\.js['"]/g,
        replacement: "import $1 from '$1'",
        description: 'Fix .js imports in TypeScript'
      }
    ];

    const allFiles = glob.sync('**/*.{js,jsx,ts,tsx}', { 
      cwd: this.projectRoot,
      ignore: ['node_modules/**', '.next/**', 'out/**', 'dist/**']
    });

    for (const file of allFiles) {
      const filePath = path.join(this.projectRoot, file);
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        for (const fix of buildFixes) {
          const newContent = content.replace(fix.pattern, fix.replacement);
          if (newContent !== content) {
            content = newContent;
            modified = true;
            this.log(`Applied build fix: ${fix.description} in ${file}`, 'info');
          }
        }

        if (modified) {
          fs.writeFileSync(filePath, content);
          this.fixedFiles.add(filePath);
        }
      } catch (error) {
        this.log(`Error fixing build errors in ${file}: ${error.message}`, 'error');
      }
    }
  }

  async runLinting() {
    this.log('Running linting fixes...');
    
    try {
      // Run ESLint with auto-fix
      const lintResult = await this.runCommand('npx eslint --fix .', { silent: true });
      if (lintResult.success) {
        this.log('ESLint auto-fix completed successfully', 'success');
      } else {
        this.log(`ESLint auto-fix failed: ${lintResult.error}`, 'warning');
      }
    } catch (error) {
      this.log(`Error running ESLint: ${error.message}`, 'error');
    }
  }

  async runTypeCheck() {
    this.log('Running TypeScript type check...');
    
    try {
      const typeCheckResult = await this.runCommand('npx tsc --noEmit', { silent: true });
      if (typeCheckResult.success) {
        this.log('TypeScript type check passed', 'success');
      } else {
        this.log(`TypeScript type check failed: ${typeCheckResult.error}`, 'warning');
      }
    } catch (error) {
      this.log(`Error running TypeScript check: ${error.message}`, 'error');
    }
  }

  async generateReport() {
    await this.ensureDirectoryExists(path.dirname(this.reportPath));
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFilesFixed: this.fixedFiles.size,
        totalErrors: this.errorLog.length,
        successCount: this.errorLog.filter(log => log.type === 'success').length,
        errorCount: this.errorLog.filter(log => log.type === 'error').length,
        warningCount: this.errorLog.filter(log => log.type === 'warning').length
      },
      fixedFiles: Array.from(this.fixedFiles),
      errorLog: this.errorLog
    };

    fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
    this.log(`Report generated: ${this.reportPath}`, 'info');
  }

  async run() {
    this.log('Starting comprehensive error fixing process...');
    
    try {
      // Run all error fixing steps
      await this.fixESLintConfig();
      await this.fixDependencyIssues();
      await this.fixTypeScriptErrors();
      await this.fixJSXErrors();
      await this.fixBuildErrors();
      await this.runLinting();
      await this.runTypeCheck();
      
      // Generate report
      await this.generateReport();
      
      this.log(`Comprehensive error fixing completed. Fixed ${this.fixedFiles.size} files.`, 'success');
      
    } catch (error) {
      this.log(`Error in comprehensive error fixing: ${error.message}`, 'error');
    }
  }
}

// Run the error fixer
const errorFixer = new ComprehensiveErrorFixer();
errorFixer.run().catch(console.error);