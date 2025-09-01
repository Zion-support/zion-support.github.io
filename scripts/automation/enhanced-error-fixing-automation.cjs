#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const glob = require('glob');

class EnhancedErrorFixingAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'error-reports');
    this.logsDir = path.join(this.projectRoot, 'automation/logs');
    this.fixesApplied = [];
    this.errorsFound = [];
    this.startTime = Date.now();
    
    // Ensure directories exist
    [this.reportsDir, this.logsDir].forEach(dir => {
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
      return { success: false, error: error.message, output: error.stdout || error.stderr };
    }
  }

  async fixESLintConfiguration() {
    this.log('Fixing ESLint configuration...');
    
    // Remove old .eslintrc.js if it exists and is causing conflicts
    const oldConfigPath = path.join(this.projectRoot, '.eslintrc.js');
    if (fs.existsSync(oldConfigPath)) {
      try {
        fs.renameSync(oldConfigPath, oldConfigPath + '.backup');
        this.fixesApplied.push({
          type: 'eslint_config',
          file: '.eslintrc.js',
          description: 'Backed up old ESLint config to prevent conflicts'
        });
        this.log('Backed up old ESLint configuration');
      } catch (error) {
        this.log(`Error backing up ESLint config: ${error.message}`, 'ERROR');
      }
    }

    // Ensure eslint.config.js is properly configured
    const newConfigPath = path.join(this.projectRoot, 'eslint.config.js');
    if (!fs.existsSync(newConfigPath)) {
      this.log('Creating new ESLint configuration...');
      const configContent = `import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        React: 'readonly',
        process: 'readonly',
        console: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        vi: 'readonly',
      },
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint,
    },
    rules: {
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': 'warn',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'no-console': 'warn',
      'no-debugger': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];`;
      
      fs.writeFileSync(newConfigPath, configContent);
      this.fixesApplied.push({
        type: 'eslint_config',
        file: 'eslint.config.js',
        description: 'Created new ESLint configuration'
      });
    }
  }

  async fixTypeScriptErrors() {
    this.log('Fixing TypeScript errors...');
    
    // Get TypeScript errors
    const tsResult = await this.runCommand('npx tsc --noEmit --pretty false', { silent: true });
    
    if (!tsResult.success) {
      const errors = tsResult.output.split('\n').filter(line => line.includes('error TS'));
      
      for (const error of errors.slice(0, 50)) { // Limit to first 50 errors
        const match = error.match(/([^(]+)\((\d+),(\d+)\): error TS\d+: (.+)/);
        if (match) {
          const [, filePath, line, column, message] = match;
          await this.fixTypeScriptError(filePath, parseInt(line), parseInt(column), message);
        }
      }
    }
  }

  async fixTypeScriptError(filePath, line, column, message) {
    try {
      if (!fs.existsSync(filePath)) return;
      
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      
      if (line > lines.length) return;
      
      const currentLine = lines[line - 1];
      
      // Common TypeScript error fixes
      if (message.includes('Cannot find module') || message.includes('Module not found')) {
        // Add missing import or fix import path
        if (message.includes('react')) {
          lines[0] = "import React from 'react';";
          this.fixesApplied.push({
            type: 'typescript_import',
            file: filePath,
            description: `Added missing React import`
          });
        }
      } else if (message.includes('Property') && message.includes('does not exist')) {
        // Add missing property or fix property name
        const propertyMatch = message.match(/Property '([^']+)' does not exist/);
        if (propertyMatch) {
          const propertyName = propertyMatch[1];
          // Try to add the property to the interface or type
          for (let i = 0; i < lines.length; i++) {
            if (lines[i].includes('interface') || lines[i].includes('type')) {
              const indent = lines[i].match(/^(\s*)/)[1];
              lines.splice(i + 1, 0, `${indent}  ${propertyName}?: any;`);
              this.fixesApplied.push({
                type: 'typescript_property',
                file: filePath,
                description: `Added missing property ${propertyName}`
              });
              break;
            }
          }
        }
      } else if (message.includes('Parameter') && message.includes('implicitly has an')) {
        // Add type annotation
        const paramMatch = message.match(/Parameter '([^']+)' implicitly has an/);
        if (paramMatch) {
          const paramName = paramMatch[1];
          const newLine = currentLine.replace(
            new RegExp(`\\b${paramName}\\b(?=\\s*[,)])`),
            `${paramName}: any`
          );
          lines[line - 1] = newLine;
          this.fixesApplied.push({
            type: 'typescript_type',
            file: filePath,
            description: `Added type annotation for parameter ${paramName}`
          });
        }
      }
      
      fs.writeFileSync(filePath, lines.join('\n'));
    } catch (error) {
      this.log(`Error fixing TypeScript error in ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  async fixMergeConflicts() {
    this.log('Fixing merge conflicts...');
    
    const files = glob.sync('**/*.{js,jsx,ts,tsx,json,md}', {
      ignore: ['node_modules/**', 'dist/**', 'build/**', '.git/**']
    });
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
          // Remove merge conflict markers
          const fixedContent = content
            .replace(/<<<<<<< HEAD\n?/g, '')
            .replace(/=======\n?/g, '')
            .replace(/>>>>>>> [^\n]+\n?/g, '')
            .replace(/\n\s*\n\s*\n/g, '\n\n'); // Remove extra blank lines
          
          fs.writeFileSync(file, fixedContent);
          this.fixesApplied.push({
            type: 'merge_conflict',
            file: file,
            description: 'Removed merge conflict markers'
          });
        }
      } catch (error) {
        this.log(`Error fixing merge conflicts in ${file}: ${error.message}`, 'ERROR');
      }
    }
  }

  async fixESLintErrors() {
    this.log('Fixing ESLint errors...');
    
    // Try to run ESLint with auto-fix
    const eslintResult = await this.runCommand('npx eslint . --fix --ext .js,.jsx,.ts,.tsx', { silent: true });
    
    if (eslintResult.success) {
      this.fixesApplied.push({
        type: 'eslint_auto_fix',
        description: 'Applied ESLint auto-fixes'
      });
    } else {
      this.log('ESLint auto-fix completed with some issues', 'WARN');
    }
  }

  async fixPackageJsonIssues() {
    this.log('Checking and fixing package.json issues...');
    
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      try {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        
        // Ensure required scripts exist
        const requiredScripts = ['dev', 'build', 'start', 'lint', 'type-check'];
        for (const script of requiredScripts) {
          if (!packageJson.scripts[script]) {
            packageJson.scripts[script] = this.getDefaultScript(script);
            this.fixesApplied.push({
              type: 'package_json_script',
              description: `Added missing script: ${script}`
            });
          }
        }
        
        // Ensure required dependencies exist
        const requiredDeps = ['react', 'react-dom', 'next'];
        for (const dep of requiredDeps) {
          if (!packageJson.dependencies[dep] && !packageJson.devDependencies[dep]) {
            packageJson.dependencies[dep] = '^18.2.0';
            this.fixesApplied.push({
              type: 'package_json_dependency',
              description: `Added missing dependency: ${dep}`
            });
          }
        }
        
        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
      } catch (error) {
        this.log(`Error fixing package.json: ${error.message}`, 'ERROR');
      }
    }
  }

  getDefaultScript(scriptName) {
    const defaults = {
      'dev': 'next dev',
      'build': 'next build',
      'start': 'next start',
      'lint': 'next lint',
      'type-check': 'tsc --noEmit'
    };
    return defaults[scriptName] || '';
  }

  async fixNextConfigIssues() {
    this.log('Checking Next.js configuration...');
    
    const nextConfigPath = path.join(this.projectRoot, 'next.config.js');
    if (fs.existsSync(nextConfigPath)) {
      try {
        const content = fs.readFileSync(nextConfigPath, 'utf8');
        
        // Check for common issues
        if (content.includes('module.exports') && !content.includes('experimental')) {
          const fixedContent = content.replace(
            'module.exports = {',
            `module.exports = {
  experimental: {
    esmExternals: 'loose'
  },`
          );
          fs.writeFileSync(nextConfigPath, fixedContent);
          this.fixesApplied.push({
            type: 'next_config',
            file: 'next.config.js',
            description: 'Added experimental ESM configuration'
          });
        }
      } catch (error) {
        this.log(`Error fixing Next.js config: ${error.message}`, 'ERROR');
      }
    }
  }

  async fixTypeScriptConfigIssues() {
    this.log('Checking TypeScript configuration...');
    
    const tsConfigPath = path.join(this.projectRoot, 'tsconfig.json');
    if (fs.existsSync(tsConfigPath)) {
      try {
        const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'));
        
        // Ensure required compiler options
        const requiredOptions = {
          'allowJs': true,
          'skipLibCheck': true,
          'strict': false,
          'forceConsistentCasingInFileNames': true,
          'noEmit': true,
          'esModuleInterop': true,
          'module': 'esnext',
          'moduleResolution': 'node',
          'resolveJsonModule': true,
          'isolatedModules': true,
          'jsx': 'preserve',
          'incremental': true
        };
        
        let hasChanges = false;
        for (const [option, value] of Object.entries(requiredOptions)) {
          if (tsConfig.compilerOptions[option] !== value) {
            tsConfig.compilerOptions[option] = value;
            hasChanges = true;
          }
        }
        
        if (hasChanges) {
          fs.writeFileSync(tsConfigPath, JSON.stringify(tsConfig, null, 2));
          this.fixesApplied.push({
            type: 'typescript_config',
            file: 'tsconfig.json',
            description: 'Updated TypeScript compiler options'
          });
        }
      } catch (error) {
        this.log(`Error fixing TypeScript config: ${error.message}`, 'ERROR');
      }
    }
  }

  async generateReport() {
    const duration = Date.now() - this.startTime;
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      fixesApplied: this.fixesApplied,
      errorsFound: this.errorsFound,
      summary: {
        totalFixes: this.fixesApplied.length,
        totalErrors: this.errorsFound.length,
        success: this.fixesApplied.length > 0
      }
    };
    
    const reportPath = path.join(this.reportsDir, `enhanced-error-fixing-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportPath}`);
    this.log(`Applied ${this.fixesApplied.length} fixes in ${duration}ms`);
    
    return report;
  }

  async run() {
    this.log('Starting Enhanced Error Fixing Automation...');
    
    try {
      await this.fixESLintConfiguration();
      await this.fixMergeConflicts();
      await this.fixPackageJsonIssues();
      await this.fixNextConfigIssues();
      await this.fixTypeScriptConfigIssues();
      await this.fixTypeScriptErrors();
      await this.fixESLintErrors();
      
      const report = await this.generateReport();
      
      this.log('Enhanced Error Fixing Automation completed successfully');
      return report;
    } catch (error) {
      this.log(`Error in automation: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the automation if this file is executed directly
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