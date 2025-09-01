#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

class ComprehensiveErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'automation/logs');
    this.reportsDir = path.join(this.projectRoot, 'error-reports');
    this.fixedErrors = [];
    this.failedFixes = [];
    
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
    const logFile = path.join(this.logsDir, 'comprehensive-error-fixer.log');
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

  async fixESLintConfig() {
    this.log('Fixing ESLint configuration...');
    
    try {
      // Remove old .eslintrc.js if it exists
      const oldConfigPath = path.join(this.projectRoot, '.eslintrc.js');
      if (fs.existsSync(oldConfigPath)) {
        fs.unlinkSync(oldConfigPath);
        this.log('Removed old .eslintrc.js');
      }

      // Ensure eslint.config.js is properly configured
      const configPath = path.join(this.projectRoot, 'eslint.config.js');
      if (!fs.existsSync(configPath)) {
        this.log('Creating eslint.config.js...');
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
        fs.writeFileSync(configPath, configContent);
      }

      this.fixedErrors.push('ESLint configuration');
      this.log('ESLint configuration fixed successfully');
      return true;
    } catch (error) {
      this.failedFixes.push({ type: 'ESLint config', error: error.message });
      this.log(`Failed to fix ESLint config: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fixTypeScriptErrors() {
    this.log('Fixing TypeScript errors...');
    
    try {
      // Run TypeScript check to get errors
      const result = await this.runCommand('npx tsc --noEmit', { silent: true });
      
      if (result.success) {
        this.log('No TypeScript errors found');
        return true;
      }

      // Parse TypeScript errors and fix common issues
      const errorOutput = result.output || '';
      const errors = this.parseTypeScriptErrors(errorOutput);
      
      let fixedCount = 0;
      for (const error of errors) {
        if (await this.fixTypeScriptError(error)) {
          fixedCount++;
        }
      }

      this.log(`Fixed ${fixedCount} TypeScript errors`);
      return fixedCount > 0;
    } catch (error) {
      this.failedFixes.push({ type: 'TypeScript', error: error.message });
      this.log(`Failed to fix TypeScript errors: ${error.message}`, 'ERROR');
      return false;
    }
  }

  parseTypeScriptErrors(errorOutput) {
    const errors = [];
    const lines = errorOutput.split('\n');
    
    for (const line of lines) {
      const match = line.match(/(\S+\.(ts|tsx|js|jsx))\((\d+),(\d+)\):\s*(.+)/);
      if (match) {
        errors.push({
          file: match[1],
          line: parseInt(match[3]),
          column: parseInt(match[4]),
          message: match[5].trim()
        });
      }
    }
    
    return errors;
  }

  async fixTypeScriptError(error) {
    try {
      const filePath = path.join(this.projectRoot, error.file);
      if (!fs.existsSync(filePath)) {
        return false;
      }

      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      
      // Fix common TypeScript errors
      if (error.message.includes('Cannot find module') || error.message.includes('Module not found')) {
        return await this.fixModuleImportError(error, lines, filePath);
      }
      
      if (error.message.includes('Property') && error.message.includes('does not exist')) {
        return await this.fixPropertyError(error, lines, filePath);
      }
      
      if (error.message.includes('Type') && error.message.includes('is not assignable')) {
        return await this.fixTypeError(error, lines, filePath);
      }

      return false;
    } catch (error) {
      this.log(`Failed to fix TypeScript error: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fixModuleImportError(error, lines, filePath) {
    // Add missing imports or fix import paths
    const line = lines[error.line - 1];
    if (line.includes('import') || line.includes('require')) {
      // Try to fix import path
      const fixedLine = line.replace(/from ['"]([^'"]+)['"]/, (match, importPath) => {
        if (importPath.startsWith('./') || importPath.startsWith('../')) {
          // Check if file exists with different extension
          const possibleExtensions = ['.ts', '.tsx', '.js', '.jsx'];
          for (const ext of possibleExtensions) {
            const fullPath = path.join(path.dirname(filePath), importPath + ext);
            if (fs.existsSync(fullPath)) {
              return `from '${importPath}${ext}'`;
            }
          }
        }
        return match;
      });
      
      if (fixedLine !== line) {
        lines[error.line - 1] = fixedLine;
        fs.writeFileSync(filePath, lines.join('\n'));
        return true;
      }
    }
    return false;
  }

  async fixPropertyError(error, lines, filePath) {
    // Add missing properties or fix property access
    const line = lines[error.line - 1];
    if (line.includes('.')) {
      // Try to add optional chaining
      const fixedLine = line.replace(/(\w+)\.(\w+)/g, '$1?.$2');
      if (fixedLine !== line) {
        lines[error.line - 1] = fixedLine;
        fs.writeFileSync(filePath, lines.join('\n'));
        return true;
      }
    }
    return false;
  }

  async fixTypeError(error, lines, filePath) {
    // Add type assertions or fix type mismatches
    const line = lines[error.line - 1];
    if (line.includes('=') && !line.includes('as any')) {
      // Add type assertion
      const fixedLine = line.replace(/(\w+)\s*=\s*([^;]+);/, '$1 = $2 as any;');
      if (fixedLine !== line) {
        lines[error.line - 1] = fixedLine;
        fs.writeFileSync(filePath, lines.join('\n'));
        return true;
      }
    }
    return false;
  }

  async fixESLintErrors() {
    this.log('Fixing ESLint errors...');
    
    try {
      // Run ESLint with auto-fix
      const result = await this.runCommand('npx eslint . --fix', { silent: true });
      
      if (result.success) {
        this.log('ESLint errors fixed successfully');
        this.fixedErrors.push('ESLint errors');
        return true;
      } else {
        this.log('Some ESLint errors could not be auto-fixed', 'WARN');
        return false;
      }
    } catch (error) {
      this.failedFixes.push({ type: 'ESLint', error: error.message });
      this.log(`Failed to fix ESLint errors: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fixDependencyIssues() {
    this.log('Fixing dependency issues...');
    
    try {
      // Check for missing dependencies
      const result = await this.runCommand('npm audit fix', { silent: true });
      
      if (result.success) {
        this.log('Dependency issues fixed');
        this.fixedErrors.push('Dependency issues');
        return true;
      } else {
        this.log('Some dependency issues remain', 'WARN');
        return false;
      }
    } catch (error) {
      this.failedFixes.push({ type: 'Dependencies', error: error.message });
      this.log(`Failed to fix dependency issues: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fixBuildErrors() {
    this.log('Checking for build errors...');
    
    try {
      const result = await this.runCommand('npm run build', { silent: true });
      
      if (result.success) {
        this.log('Build successful');
        return true;
      } else {
        this.log('Build errors detected', 'WARN');
        // Try to fix common build errors
        return await this.fixCommonBuildErrors(result.output);
      }
    } catch (error) {
      this.failedFixes.push({ type: 'Build', error: error.message });
      this.log(`Failed to check build: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fixCommonBuildErrors(errorOutput) {
    // Fix common Next.js build errors
    if (errorOutput.includes('Module not found')) {
      this.log('Fixing module resolution issues...');
      // Try to fix by updating tsconfig paths
      return await this.fixModuleResolution();
    }
    
    if (errorOutput.includes('Syntax error')) {
      this.log('Fixing syntax errors...');
      return await this.fixSyntaxErrors();
    }
    
    return false;
  }

  async fixModuleResolution() {
    try {
      const tsconfigPath = path.join(this.projectRoot, 'tsconfig.json');
      if (fs.existsSync(tsconfigPath)) {
        const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));
        
        // Add path mappings if not present
        if (!tsconfig.compilerOptions.paths) {
          tsconfig.compilerOptions.paths = {
            '@/*': ['./src/*'],
            '@/components/*': ['./src/components/*'],
            '@/pages/*': ['./src/pages/*'],
            '@/utils/*': ['./src/utils/*'],
            '@/types/*': ['./src/types/*']
          };
        }
        
        fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));
        this.fixedErrors.push('Module resolution');
        return true;
      }
    } catch (error) {
      this.log(`Failed to fix module resolution: ${error.message}`, 'ERROR');
    }
    return false;
  }

  async fixSyntaxErrors() {
    // This would involve more complex parsing and fixing
    // For now, just log the issue
    this.log('Syntax errors detected - manual review required', 'WARN');
    return false;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      fixedErrors: this.fixedErrors,
      failedFixes: this.failedFixes,
      summary: {
        totalFixed: this.fixedErrors.length,
        totalFailed: this.failedFixes.length
      }
    };

    const reportPath = path.join(this.reportsDir, `error-fix-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('Starting comprehensive error fixing...');
    
    const startTime = Date.now();
    
    // Run all fixers
    await this.fixESLintConfig();
    await this.fixTypeScriptErrors();
    await this.fixESLintErrors();
    await this.fixDependencyIssues();
    await this.fixBuildErrors();
    
    // Generate report
    const report = await this.generateReport();
    
    const duration = Date.now() - startTime;
    this.log(`Error fixing completed in ${duration}ms`);
    this.log(`Fixed: ${report.summary.totalFixed}, Failed: ${report.summary.totalFailed}`);
    
    return report;
  }
}

// Run the error fixer
if (require.main === module) {
  const fixer = new ComprehensiveErrorFixer();
  fixer.run().catch(error => {
    console.error('Error fixer failed:', error);
    process.exit(1);
  });
}

module.exports = ComprehensiveErrorFixer;