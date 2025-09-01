#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

class ComprehensiveErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'comprehensive-error-fixer-report.json');
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

  async fixESLintConfig() {
    this.log('Fixing ESLint configuration...');
    
    // Fix .eslintrc.js to use proper module syntax
    const eslintrcPath = path.join(this.projectRoot, '.eslintrc.js');
    if (fs.existsSync(eslintrcPath)) {
      const content = fs.readFileSync(eslintrcPath, 'utf8');
      if (content.includes('module.exports')) {
        // Convert to ES module syntax
        const newContent = content.replace('module.exports =', 'export default');
        fs.writeFileSync(eslintrcPath, newContent);
        this.fixesApplied.push('Fixed ESLint config module syntax');
        this.log('Fixed ESLint config module syntax', 'success');
      }
    }

    // Ensure eslint.config.js is properly configured
    const eslintConfigPath = path.join(this.projectRoot, 'eslint.config.js');
    if (fs.existsSync(eslintConfigPath)) {
      const content = fs.readFileSync(eslintConfigPath, 'utf8');
      if (!content.includes('export default')) {
        // Fix the config
        const fixedConfig = `import js from '@eslint/js';
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
        fs.writeFileSync(eslintConfigPath, fixedConfig);
        this.fixesApplied.push('Fixed ESLint config structure');
        this.log('Fixed ESLint config structure', 'success');
      }
    }
  }

  async fixTypeScriptErrors() {
    this.log('Fixing TypeScript errors...');
    
    // Run type check to get errors
    const typeCheckResult = await this.runCommand('npx tsc --noEmit', { silent: true });
    if (!typeCheckResult.success) {
      this.errorsFound.push('TypeScript compilation errors detected');
      
      // Fix common TypeScript issues
      await this.fixCommonTypeScriptIssues();
    }
  }

  async fixCommonTypeScriptIssues() {
    // Fix missing React imports
    const tsxFiles = glob.sync('src/**/*.{tsx,jsx}', { cwd: this.projectRoot });
    
    for (const file of tsxFiles) {
      const filePath = path.join(this.projectRoot, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Fix missing React import
      if (content.includes('React') && !content.includes("import React") && !content.includes("import * as React")) {
        const newContent = "import React from 'react';\n" + content;
        fs.writeFileSync(filePath, newContent);
        this.fixesApplied.push(`Added React import to ${file}`);
      }
      
      // Fix any types
      if (content.includes(': any')) {
        const newContent = content.replace(/: any/g, ': unknown');
        fs.writeFileSync(filePath, newContent);
        this.fixesApplied.push(`Replaced 'any' types with 'unknown' in ${file}`);
      }
    }
  }

  async fixESLintErrors() {
    this.log('Fixing ESLint errors...');
    
    // Try to run ESLint with auto-fix
    const eslintResult = await this.runCommand('npx eslint --fix src/**/*.{js,jsx,ts,tsx}', { silent: true });
    if (eslintResult.success) {
      this.fixesApplied.push('Applied ESLint auto-fixes');
      this.log('Applied ESLint auto-fixes', 'success');
    } else {
      this.errorsFound.push('ESLint errors detected');
    }
  }

  async fixImportErrors() {
    this.log('Fixing import errors...');
    
    const files = glob.sync('src/**/*.{js,jsx,ts,tsx}', { cwd: this.projectRoot });
    
    for (const file of files) {
      const filePath = path.join(this.projectRoot, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Fix relative imports
      const importRegex = /import\s+.*\s+from\s+['"]([^'"]+)['"]/g;
      let match;
      let modified = false;
      let newContent = content;
      
      while ((match = importRegex.exec(content)) !== null) {
        const importPath = match[1];
        if (importPath.startsWith('./') || importPath.startsWith('../')) {
          // Check if file exists
          const resolvedPath = path.resolve(path.dirname(filePath), importPath);
          if (!fs.existsSync(resolvedPath) && !fs.existsSync(resolvedPath + '.js') && !fs.existsSync(resolvedPath + '.ts') && !fs.existsSync(resolvedPath + '.jsx') && !fs.existsSync(resolvedPath + '.tsx')) {
            // Try to find the correct extension
            const possibleExtensions = ['.js', '.ts', '.jsx', '.tsx'];
            for (const ext of possibleExtensions) {
              if (fs.existsSync(resolvedPath + ext)) {
                newContent = newContent.replace(match[0], match[0].replace(importPath, importPath + ext));
                modified = true;
                break;
              }
            }
          }
        }
      }
      
      if (modified) {
        fs.writeFileSync(filePath, newContent);
        this.fixesApplied.push(`Fixed import paths in ${file}`);
      }
    }
  }

  async fixPackageJson() {
    this.log('Checking package.json configuration...');
    
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      // Ensure type is set to module
      if (!packageJson.type || packageJson.type !== 'module') {
        packageJson.type = 'module';
        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
        this.fixesApplied.push('Set package.json type to module');
        this.log('Set package.json type to module', 'success');
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
    this.log('Starting comprehensive error fixing...');
    
    try {
      await this.fixESLintConfig();
      await this.fixPackageJson();
      await this.fixImportErrors();
      await this.fixTypeScriptErrors();
      await this.fixESLintErrors();
      
      await this.generateReport();
      
      this.log(`Error fixing completed. Applied ${this.fixesApplied.length} fixes.`);
      
      if (this.errorsFound.length > 0) {
        this.log(`Remaining errors: ${this.errorsFound.length}`, 'warn');
        this.errorsFound.forEach(error => this.log(`- ${error}`, 'warn'));
      }
      
    } catch (error) {
      this.log(`Error during fixing process: ${error.message}`, 'error');
      throw error;
    }
  }
}

// Run the fixer
if (require.main === module) {
  const fixer = new ComprehensiveErrorFixer();
  fixer.run().catch(console.error);
}

module.exports = ComprehensiveErrorFixer;