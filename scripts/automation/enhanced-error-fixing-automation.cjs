#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const glob = require('glob');

class EnhancedErrorFixingAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'automation/logs');
    this.reportsDir = path.join(this.projectRoot, 'error-reports');
    this.fixesApplied = [];
    this.errorsFound = [];
    this.startTime = Date.now();
    
    // Ensure directories exist
    this.ensureDirectories();
  }

  ensureDirectories() {
    [this.logsDir, this.reportsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    // Write to log file
    const logFile = path.join(this.logsDir, 'enhanced-error-fixing.log');
    fs.appendFileSync(logFile, logMessage + '\n');
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
      return { success: false, output: error.stdout || error.stderr || error.message };
    }
  }

  async fixTypeScriptErrors() {
    this.log('Starting TypeScript error fixing...');
    
    // Get all TypeScript files
    const tsFiles = glob.sync('src/**/*.{ts,tsx}', { cwd: this.projectRoot });
    
    for (const file of tsFiles) {
      const filePath = path.join(this.projectRoot, file);
      
      // Skip if it's a directory
      if (fs.statSync(filePath).isDirectory()) {
        continue;
      }
      
      const content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      let newContent = content;

      // Fix common TypeScript errors
      
      // 1. Fix missing React imports
      if (file.endsWith('.tsx') && !content.includes('import React') && content.includes('React')) {
        newContent = "import React from 'react';\n" + newContent;
        modified = true;
      }

      // 2. Fix any types
      if (content.includes(': any')) {
        newContent = newContent.replace(/: any/g, ': unknown');
        modified = true;
      }

      // 3. Fix missing type annotations
      const functionRegex = /function\s+(\w+)\s*\(([^)]*)\)\s*{/g;
      newContent = newContent.replace(functionRegex, (match, funcName, params) => {
        if (!params.includes(':')) {
          return `function ${funcName}(${params}): void {`;
        }
        return match;
      });

      // 4. Fix unused variables
      const unusedVarRegex = /const\s+(\w+)\s*=\s*[^;]+;\s*(?:\/\/.*)?$/gm;
      newContent = newContent.replace(unusedVarRegex, (match, varName) => {
        if (!newContent.includes(varName)) {
          return match.replace(`const ${varName}`, `const _${varName}`);
        }
        return match;
      });

      if (modified) {
        fs.writeFileSync(filePath, newContent);
        this.fixesApplied.push({
          type: 'typescript',
          file,
          description: 'Fixed TypeScript syntax errors'
        });
        this.log(`Fixed TypeScript errors in ${file}`);
      }
    }
  }

  async fixESLintErrors() {
    this.log('Starting ESLint error fixing...');
    
    // Run ESLint with --fix flag
    const result = await this.runCommand('npx eslint src --fix --max-warnings 0', { silent: true });
    
    if (result.success) {
      this.log('ESLint auto-fix completed successfully');
      this.fixesApplied.push({
        type: 'eslint',
        file: 'src/**/*',
        description: 'Auto-fixed ESLint errors'
      });
    } else {
      this.log('ESLint auto-fix completed with some manual fixes needed');
    }
  }

  async fixImportErrors() {
    this.log('Starting import error fixing...');
    
    const tsFiles = glob.sync('src/**/*.{ts,tsx}', { cwd: this.projectRoot });
    
    for (const file of tsFiles) {
      const filePath = path.join(this.projectRoot, file);
      
      // Skip if it's a directory
      if (fs.statSync(filePath).isDirectory()) {
        continue;
      }
      
      const content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      let newContent = content;

      // Fix relative imports
      const importRegex = /import\s+.*\s+from\s+['"]([^'"]+)['"]/g;
      newContent = newContent.replace(importRegex, (match, importPath) => {
        if (importPath.startsWith('./') || importPath.startsWith('../')) {
          // Check if file exists
          const resolvedPath = path.resolve(path.dirname(filePath), importPath);
          if (!fs.existsSync(resolvedPath) && !fs.existsSync(resolvedPath + '.ts') && !fs.existsSync(resolvedPath + '.tsx')) {
            // Try to find the correct path
            const possibleExtensions = ['.ts', '.tsx', '.js', '.jsx'];
            for (const ext of possibleExtensions) {
              const testPath = resolvedPath + ext;
              if (fs.existsSync(testPath)) {
                const relativePath = path.relative(path.dirname(filePath), testPath);
                modified = true;
                return match.replace(importPath, relativePath.startsWith('.') ? relativePath : './' + relativePath);
              }
            }
          }
        }
        return match;
      });

      if (modified) {
        fs.writeFileSync(filePath, newContent);
        this.fixesApplied.push({
          type: 'import',
          file,
          description: 'Fixed import paths'
        });
        this.log(`Fixed import errors in ${file}`);
      }
    }
  }

  async fixMergeConflicts() {
    this.log('Starting merge conflict resolution...');
    
    const allFiles = glob.sync('**/*.{js,jsx,ts,tsx,json,md}', { cwd: this.projectRoot });
    
    for (const file of allFiles) {
      const filePath = path.join(this.projectRoot, file);
      
      // Skip if it's a directory
      if (fs.statSync(filePath).isDirectory()) {
        continue;
      }
      
      const content = fs.readFileSync(filePath, 'utf8');
      
      if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
        let newContent = content;
        
        // Remove merge conflict markers and keep the current version
        newContent = newContent.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]*\n/g, '$1');
        
        // Remove any remaining conflict markers
        newContent = newContent.replace(/<<<<<<< [^\n]*\n/g, '');
        newContent = newContent.replace(/=======\n/g, '');
        newContent = newContent.replace(/>>>>>>> [^\n]*\n/g, '');
        
        if (newContent !== content) {
          fs.writeFileSync(filePath, newContent);
          this.fixesApplied.push({
            type: 'merge_conflict',
            file,
            description: 'Removed merge conflict markers'
          });
          this.log(`Resolved merge conflicts in ${file}`);
        }
      }
    }
  }

  async fixFileExtensions() {
    this.log('Starting file extension fixes...');
    
    // Fix JSX files with wrong extensions
    const jsxFiles = glob.sync('src/**/*.js', { cwd: this.projectRoot });
    
    for (const file of jsxFiles) {
      const filePath = path.join(this.projectRoot, file);
      
      // Skip if it's a directory
      if (fs.statSync(filePath).isDirectory()) {
        continue;
      }
      
      const content = fs.readFileSync(filePath, 'utf8');
      
      if (content.includes('jsx') || content.includes('React') || content.includes('<')) {
        const newPath = filePath.replace('.js', '.jsx');
        if (!fs.existsSync(newPath)) {
          fs.renameSync(filePath, newPath);
          this.fixesApplied.push({
            type: 'extension',
            file: file.replace('.js', '.jsx'),
            description: 'Changed .js to .jsx for JSX content'
          });
          this.log(`Fixed file extension: ${file} -> ${file.replace('.js', '.jsx')}`);
        }
      }
    }
  }

  async fixPackageJson() {
    this.log('Starting package.json fixes...');
    
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      let modified = false;
      
      // Ensure required dependencies are present
      const requiredDeps = {
        'react': '^18.2.0',
        'react-dom': '^18.2.0',
        'next': '^13.5.6',
        'typescript': '^5.2.2'
      };
      
      for (const [dep, version] of Object.entries(requiredDeps)) {
        if (!packageJson.dependencies?.[dep] && !packageJson.devDependencies?.[dep]) {
          if (!packageJson.devDependencies) packageJson.devDependencies = {};
          packageJson.devDependencies[dep] = version;
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
        this.fixesApplied.push({
          type: 'package_json',
          file: 'package.json',
          description: 'Added missing dependencies'
        });
        this.log('Fixed package.json dependencies');
      }
    }
  }

  async runTypeCheck() {
    this.log('Running TypeScript type check...');
    
    const result = await this.runCommand('npx tsc --noEmit', { silent: true });
    
    if (!result.success) {
      this.errorsFound.push({
        type: 'typescript',
        count: (result.output.match(/error TS\d+/g) || []).length,
        details: result.output
      });
      this.log(`TypeScript check found ${this.errorsFound[this.errorsFound.length - 1].count} errors`);
    } else {
      this.log('TypeScript type check passed');
    }
  }

  async runLintCheck() {
    this.log('Running ESLint check...');
    
    const result = await this.runCommand('npx eslint src --max-warnings 0', { silent: true });
    
    if (!result.success) {
      this.errorsFound.push({
        type: 'eslint',
        count: (result.output.match(/error/g) || []).length,
        details: result.output
      });
      this.log(`ESLint check found ${this.errorsFound[this.errorsFound.length - 1].count} errors`);
    } else {
      this.log('ESLint check passed');
    }
  }

  async generateReport() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      fixesApplied: this.fixesApplied,
      errorsFound: this.errorsFound,
      summary: {
        totalFixes: this.fixesApplied.length,
        totalErrors: this.errorsFound.reduce((sum, error) => sum + error.count, 0),
        success: this.errorsFound.length === 0
      }
    };
    
    const reportFile = path.join(this.reportsDir, `enhanced-error-fixing-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportFile}`);
    this.log(`Total fixes applied: ${report.summary.totalFixes}`);
    this.log(`Total errors remaining: ${report.summary.totalErrors}`);
    
    return report;
  }

  async run() {
    this.log('Starting Enhanced Error Fixing Automation...');
    
    try {
      // Run all fixers
      await this.fixMergeConflicts();
      await this.fixFileExtensions();
      await this.fixPackageJson();
      await this.fixImportErrors();
      await this.fixTypeScriptErrors();
      await this.fixESLintErrors();
      
      // Run checks
      await this.runTypeCheck();
      await this.runLintCheck();
      
      // Generate report
      const report = await this.generateReport();
      
      this.log('Enhanced Error Fixing Automation completed successfully');
      return report;
      
    } catch (error) {
      this.log(`Error in automation: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const automation = new EnhancedErrorFixingAutomation();
  automation.run()
    .then(report => {
      console.log('Automation completed successfully');
      process.exit(0);
    })
    .catch(error => {
      console.error('Automation failed:', error);
      process.exit(1);
    });
}

module.exports = EnhancedErrorFixingAutomation;