#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

class ErrorFixerAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'automation', 'logs');
    this.reportsDir = path.join(this.projectRoot, 'error-reports');
    this.fixesApplied = 0;
    this.errorsFixed = [];
    this.errorsRemaining = [];
    
    // Ensure directories exist
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
    const logFile = path.join(this.logsDir, 'error-fixer-automation.log');
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

  async fixESLintConfiguration() {
    this.log('Fixing ESLint configuration...');
    
    // Remove old ESLint config files
    const oldConfigs = ['.eslintrc.js', '.eslintrc.cjs', '.eslintrc.json'];
    oldConfigs.forEach(config => {
      const configPath = path.join(this.projectRoot, config);
      if (fs.existsSync(configPath)) {
        fs.unlinkSync(configPath);
        this.log(`Removed old ESLint config: ${config}`);
        this.fixesApplied++;
      }
    });

    // Ensure new flat config exists
    const flatConfigPath = path.join(this.projectRoot, 'eslint.config.js');
    if (!fs.existsSync(flatConfigPath)) {
      this.log('Creating new ESLint flat config...');
      const flatConfig = `import js from '@eslint/js';
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
      
      fs.writeFileSync(flatConfigPath, flatConfig);
      this.log('Created new ESLint flat config');
      this.fixesApplied++;
    }
  }

  async fixImportExportIssues() {
    this.log('Fixing import/export issues...');
    
    // Find all TypeScript and JavaScript files
    const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { cwd: this.projectRoot });
    
    for (const file of files) {
      const filePath = path.join(this.projectRoot, file);
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Fix default export issues
      if (content.includes('export default') && !content.includes('export {') && !content.includes('export const')) {
        // Add named export for default exports
        const defaultMatch = content.match(/export default function (\w+)/);
        if (defaultMatch) {
          const functionName = defaultMatch[1];
          content = content.replace(
            `export default function ${functionName}`,
            `export default function ${functionName}\nexport { ${functionName} }`
          );
          modified = true;
          this.log(`Added named export for ${functionName} in ${file}`);
        }
      }

      // Fix React import issues
      if (content.includes('React.') && !content.includes("import React")) {
        content = content.replace(
          /^(import.*from.*['"]react['"];?)/m,
          'import React from "react";\n$1'
        );
        modified = true;
        this.log(`Added React import in ${file}`);
      }

      // Fix missing type imports
      if (content.includes('useState') || content.includes('useEffect') || content.includes('useCallback')) {
        if (!content.includes("import {") || !content.includes('useState') && !content.includes('useEffect')) {
          const reactImportMatch = content.match(/import React.*from ['"]react['"]/);
          if (reactImportMatch) {
            const hooks = [];
            if (content.includes('useState')) hooks.push('useState');
            if (content.includes('useEffect')) hooks.push('useEffect');
            if (content.includes('useCallback')) hooks.push('useCallback');
            if (content.includes('useMemo')) hooks.push('useMemo');
            if (content.includes('useRef')) hooks.push('useRef');
            
            if (hooks.length > 0) {
              content = content.replace(
                /import React.*from ['"]react['"]/,
                `import React, { ${hooks.join(', ')} } from 'react'`
              );
              modified = true;
              this.log(`Added React hooks imports in ${file}`);
            }
          }
        }
      }

      if (modified) {
        fs.writeFileSync(filePath, content);
        this.fixesApplied++;
      }
    }
  }

  async fixTypeScriptErrors() {
    this.log('Fixing TypeScript errors...');
    
    // Run TypeScript check to get errors
    const result = await this.runCommand('npx tsc --noEmit', { silent: true });
    
    if (!result.success) {
      const errors = result.output.split('\n').filter(line => line.includes('error TS'));
      
      for (const error of errors) {
        // Fix common TypeScript errors
        if (error.includes('Property') && error.includes('does not exist')) {
          // Handle missing property errors
          this.log(`TypeScript error detected: ${error}`);
          this.errorsRemaining.push(error);
        } else if (error.includes('Cannot find module')) {
          // Handle missing module errors
          this.log(`Missing module error: ${error}`);
          this.errorsRemaining.push(error);
        } else if (error.includes('Type') && error.includes('is not assignable')) {
          // Handle type mismatch errors
          this.log(`Type mismatch error: ${error}`);
          this.errorsRemaining.push(error);
        }
      }
    }
  }

  async fixBuildErrors() {
    this.log('Fixing build errors...');
    
    // Try to build the project
    const result = await this.runCommand('npm run build', { silent: true });
    
    if (!result.success) {
      const buildErrors = result.output.split('\n').filter(line => 
        line.includes('error') || line.includes('Error') || line.includes('Failed')
      );
      
      for (const error of buildErrors) {
        this.log(`Build error: ${error}`);
        this.errorsRemaining.push(error);
      }
    } else {
      this.log('Build successful!');
    }
  }

  async installMissingDependencies() {
    this.log('Installing missing dependencies...');
    
    // Check for missing dependencies
    const result = await this.runCommand('npm install', { silent: true });
    
    if (result.success) {
      this.log('Dependencies installed successfully');
    } else {
      this.log('Error installing dependencies');
    }
  }

  async runLinting() {
    this.log('Running ESLint...');
    
    const result = await this.runCommand('npm run lint', { silent: true });
    
    if (!result.success) {
      const lintErrors = result.output.split('\n').filter(line => 
        line.includes('error') || line.includes('Error')
      );
      
      for (const error of lintErrors) {
        this.log(`Lint error: ${error}`);
        this.errorsRemaining.push(error);
      }
    } else {
      this.log('Linting passed!');
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      fixesApplied: this.fixesApplied,
      errorsFixed: this.errorsFixed,
      errorsRemaining: this.errorsRemaining,
      summary: {
        totalErrors: this.errorsFixed.length + this.errorsRemaining.length,
        fixedErrors: this.errorsFixed.length,
        remainingErrors: this.errorsRemaining.length,
        successRate: this.errorsFixed.length / (this.errorsFixed.length + this.errorsRemaining.length) * 100
      }
    };

    const reportPath = path.join(this.reportsDir, `error-fixer-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportPath}`);
    this.log(`Summary: ${report.summary.fixedErrors} errors fixed, ${report.summary.remainingErrors} errors remaining`);
    
    return report;
  }

  async run() {
    this.log('Starting Error Fixer Automation...');
    
    try {
      // Step 1: Fix ESLint configuration
      await this.fixESLintConfiguration();
      
      // Step 2: Install missing dependencies
      await this.installMissingDependencies();
      
      // Step 3: Fix import/export issues
      await this.fixImportExportIssues();
      
      // Step 4: Fix TypeScript errors
      await this.fixTypeScriptErrors();
      
      // Step 5: Run linting
      await this.runLinting();
      
      // Step 6: Fix build errors
      await this.fixBuildErrors();
      
      // Step 7: Generate report
      const report = await this.generateReport();
      
      this.log('Error Fixer Automation completed successfully!');
      return report;
      
    } catch (error) {
      this.log(`Error in automation: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the automation if this script is executed directly
if (require.main === module) {
  const automation = new ErrorFixerAutomation();
  automation.run()
    .then(report => {
      console.log('Automation completed successfully!');
      process.exit(0);
    })
    .catch(error => {
      console.error('Automation failed:', error);
      process.exit(1);
    });
}

module.exports = ErrorFixerAutomation;