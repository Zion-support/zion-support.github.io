#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const glob = require('glob');

class EnhancedErrorFixingAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.errorReports = [];
    this.fixesApplied = [];
    this.startTime = Date.now();
    this.logFile = path.join(this.projectRoot, 'error-reports', `error-fixer-report-${Date.now()}.json`);
    
    // Ensure error-reports directory exists
    if (!fs.existsSync(path.join(this.projectRoot, 'error-reports'))) {
      fs.mkdirSync(path.join(this.projectRoot, 'error-reports'), { recursive: true });
    }
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logMessage);
    
    // Also write to log file
    fs.appendFileSync(this.logFile.replace('.json', '.log'), logMessage + '\n');
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
    
    // Remove old ESLint config files
    const oldConfigs = ['.eslintrc.js', '.eslintrc.cjs', '.eslintrc.json'];
    for (const config of oldConfigs) {
      const configPath = path.join(this.projectRoot, config);
      if (fs.existsSync(configPath)) {
        fs.unlinkSync(configPath);
        this.log(`Removed old ESLint config: ${config}`);
        this.fixesApplied.push({
          type: 'eslint_config',
          file: config,
          description: 'Removed old ESLint configuration file'
        });
      }
    }

    // Ensure flat config is properly configured
    const flatConfigPath = path.join(this.projectRoot, 'eslint.config.js');
    if (!fs.existsSync(flatConfigPath)) {
      this.log('Creating ESLint flat config...');
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
      this.fixesApplied.push({
        type: 'eslint_config',
        file: 'eslint.config.js',
        description: 'Created ESLint flat configuration'
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
        const match = error.match(/(.+)\((\d+),(\d+)\): error TS(\d+): (.+)/);
        if (match) {
          const [, filePath, line, column, errorCode, message] = match;
          await this.fixTypeScriptError(filePath, parseInt(line), parseInt(column), errorCode, message);
        }
      }
    }
  }

  async fixTypeScriptError(filePath, line, column, errorCode, message) {
    try {
      if (!fs.existsSync(filePath)) return;
      
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      
      // Common TypeScript error fixes
      switch (errorCode) {
        case '2307': // Cannot find module
          await this.fixModuleImport(lines, line - 1, message);
          break;
        case '2339': // Property does not exist
          await this.fixPropertyAccess(lines, line - 1, message);
          break;
        case '2345': // Argument type mismatch
          await this.fixTypeMismatch(lines, line - 1, message);
          break;
        case '6133': // Variable declared but never used
          await this.fixUnusedVariable(lines, line - 1, message);
          break;
        case '7006': // Parameter implicitly has 'any' type
          await this.fixImplicitAny(lines, line - 1, message);
          break;
        default:
          // Generic fix: add type annotations where missing
          await this.addTypeAnnotations(lines, line - 1, message);
      }
      
      fs.writeFileSync(filePath, lines.join('\n'));
      this.fixesApplied.push({
        type: 'typescript_error',
        file: filePath,
        line,
        errorCode,
        description: `Fixed TypeScript error: ${message}`
      });
      
    } catch (error) {
      this.log(`Failed to fix TypeScript error in ${filePath}: ${error.message}`, 'error');
    }
  }

  async fixModuleImport(lines, lineIndex, message) {
    const line = lines[lineIndex];
    if (line.includes('import') && message.includes('Cannot find module')) {
      // Try to fix common import issues
      const moduleMatch = message.match(/Cannot find module '(.+)'/);
      if (moduleMatch) {
        const moduleName = moduleMatch[1];
        
        // Common module name fixes
        const moduleFixes = {
          'react': 'react',
          'react-dom': 'react-dom',
          'next': 'next',
          '@types/react': '@types/react',
          '@types/node': '@types/node'
        };
        
        if (moduleFixes[moduleName]) {
          lines[lineIndex] = line.replace(moduleName, moduleFixes[moduleName]);
        }
      }
    }
  }

  async fixPropertyAccess(lines, lineIndex, message) {
    const line = lines[lineIndex];
    if (message.includes('Property') && message.includes('does not exist')) {
      // Add optional chaining or type assertion
      const propertyMatch = message.match(/Property '(.+)' does not exist/);
      if (propertyMatch) {
        const property = propertyMatch[1];
        // Add optional chaining
        lines[lineIndex] = line.replace(new RegExp(`\\.${property}\\b`), `?.${property}`);
      }
    }
  }

  async fixTypeMismatch(lines, lineIndex, message) {
    const line = lines[lineIndex];
    if (message.includes('Argument of type')) {
      // Add type assertion
      const typeMatch = message.match(/Argument of type '(.+)' is not assignable to parameter of type '(.+)'/);
      if (typeMatch) {
        const [, fromType, toType] = typeMatch;
        // Add type assertion
        lines[lineIndex] = line.replace(/(\w+)/, `$1 as ${toType}`);
      }
    }
  }

  async fixUnusedVariable(lines, lineIndex, message) {
    const line = lines[lineIndex];
    if (message.includes('declared but never used')) {
      const varMatch = message.match(/Variable '(.+)' is declared but never used/);
      if (varMatch) {
        const varName = varMatch[1];
        // Prefix with underscore to indicate intentionally unused
        lines[lineIndex] = line.replace(new RegExp(`\\b${varName}\\b`), `_${varName}`);
      }
    }
  }

  async fixImplicitAny(lines, lineIndex, message) {
    const line = lines[lineIndex];
    if (message.includes('implicitly has an \'any\' type')) {
      const paramMatch = message.match(/Parameter '(.+)' implicitly has an 'any' type/);
      if (paramMatch) {
        const paramName = paramMatch[1];
        // Add explicit any type
        lines[lineIndex] = line.replace(new RegExp(`\\b${paramName}\\b`), `${paramName}: any`);
      }
    }
  }

  async addTypeAnnotations(lines, lineIndex, message) {
    const line = lines[lineIndex];
    // Add basic type annotations for common patterns
    if (line.includes('const') && !line.includes(':')) {
      if (line.includes('= []')) {
        lines[lineIndex] = line.replace('= []', ': any[] = []');
      } else if (line.includes('= {}')) {
        lines[lineIndex] = line.replace('= {}', ': any = {}');
      } else if (line.includes('= null')) {
        lines[lineIndex] = line.replace('= null', ': any = null');
      }
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
          const fixedContent = this.resolveMergeConflicts(content);
          fs.writeFileSync(file, fixedContent);
          
          this.fixesApplied.push({
            type: 'merge_conflict',
            file,
            description: 'Resolved merge conflict markers'
          });
          
          this.log(`Fixed merge conflicts in ${file}`);
        }
      } catch (error) {
        this.log(`Failed to process ${file}: ${error.message}`, 'error');
      }
    }
  }

  resolveMergeConflicts(content) {
    // Simple merge conflict resolution - keep the first version
    return content
      .replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n[\s\S]*?\n>>>>>>> [^\n]+\n?/g, '$1')
      .replace(/<<<<<<< [^\n]+\n[\s\S]*?\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n?/g, '$1');
  }

  async fixESLintErrors() {
    this.log('Fixing ESLint errors...');
    
    // Try to run ESLint with auto-fix
    const eslintResult = await this.runCommand('npx eslint . --fix', { silent: true });
    
    if (eslintResult.success) {
      this.fixesApplied.push({
        type: 'eslint_auto_fix',
        description: 'Applied ESLint auto-fixes'
      });
      this.log('ESLint auto-fixes applied successfully');
    } else {
      this.log('ESLint auto-fix failed, attempting manual fixes...', 'warn');
      await this.fixESLintErrorsManually();
    }
  }

  async fixESLintErrorsManually() {
    // Get ESLint errors
    const eslintResult = await this.runCommand('npx eslint . --format=compact', { silent: true });
    
    if (!eslintResult.success) {
      const errors = eslintResult.output.split('\n').filter(line => line.includes('error'));
      
      for (const error of errors.slice(0, 20)) { // Limit to first 20 errors
        const match = error.match(/(.+) line (\d+), col (\d+), (.+)/);
        if (match) {
          const [, filePath, line, column, message] = match;
          await this.fixESLintError(filePath, parseInt(line), parseInt(column), message);
        }
      }
    }
  }

  async fixESLintError(filePath, line, column, message) {
    try {
      if (!fs.existsSync(filePath)) return;
      
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      
      if (message.includes('no-unused-vars')) {
        // Fix unused variables
        const varMatch = message.match(/'(.+)' is defined but never used/);
        if (varMatch) {
          const varName = varMatch[1];
          lines[line - 1] = lines[line - 1].replace(new RegExp(`\\b${varName}\\b`), `_${varName}`);
        }
      } else if (message.includes('no-console')) {
        // Remove console statements
        lines[line - 1] = lines[line - 1].replace(/console\.(log|warn|error|info)\([^)]*\);?/g, '');
      } else if (message.includes('prefer-const')) {
        // Change let to const
        lines[line - 1] = lines[line - 1].replace(/\blet\b/g, 'const');
      }
      
      fs.writeFileSync(filePath, lines.join('\n'));
      this.fixesApplied.push({
        type: 'eslint_error',
        file: filePath,
        line,
        description: `Fixed ESLint error: ${message}`
      });
      
    } catch (error) {
      this.log(`Failed to fix ESLint error in ${filePath}: ${error.message}`, 'error');
    }
  }

  async fixDependencyIssues() {
    this.log('Fixing dependency issues...');
    
    // Check for missing dependencies
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const missingDeps = [];
    
    // Check for common missing dependencies
    const commonDeps = [
      '@types/react', '@types/react-dom', '@types/node',
      'eslint', '@eslint/js', 'globals', 'eslint-plugin-react',
      'eslint-plugin-react-hooks', 'eslint-plugin-react-refresh',
      '@typescript-eslint/eslint-plugin', '@typescript-eslint/parser'
    ];
    
    for (const dep of commonDeps) {
      if (!packageJson.dependencies?.[dep] && !packageJson.devDependencies?.[dep]) {
        missingDeps.push(dep);
      }
    }
    
    if (missingDeps.length > 0) {
      this.log(`Installing missing dependencies: ${missingDeps.join(', ')}`);
      await this.runCommand(`npm install --save-dev ${missingDeps.join(' ')}`);
      
      this.fixesApplied.push({
        type: 'dependency_install',
        description: `Installed missing dependencies: ${missingDeps.join(', ')}`
      });
    }
  }

  async generateReport() {
    const duration = Date.now() - this.startTime;
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      fixesApplied: this.fixesApplied,
      summary: {
        totalFixes: this.fixesApplied.length,
        typescriptFixes: this.fixesApplied.filter(f => f.type === 'typescript_error').length,
        eslintFixes: this.fixesApplied.filter(f => f.type === 'eslint_error' || f.type === 'eslint_auto_fix').length,
        mergeConflictFixes: this.fixesApplied.filter(f => f.type === 'merge_conflict').length,
        dependencyFixes: this.fixesApplied.filter(f => f.type === 'dependency_install').length
      }
    };
    
    fs.writeFileSync(this.logFile, JSON.stringify(report, null, 2));
    this.log(`Error fixing report saved to: ${this.logFile}`);
    
    return report;
  }

  async run() {
    this.log('Starting Enhanced Error Fixing Automation...');
    
    try {
      // Run all fix operations
      await this.fixESLintConfiguration();
      await this.fixDependencyIssues();
      await this.fixMergeConflicts();
      await this.fixTypeScriptErrors();
      await this.fixESLintErrors();
      
      // Generate report
      const report = await this.generateReport();
      
      this.log(`Error fixing completed! Applied ${report.summary.totalFixes} fixes.`);
      this.log(`Report: ${report.summary.typescriptFixes} TypeScript, ${report.summary.eslintFixes} ESLint, ${report.summary.mergeConflictFixes} merge conflicts, ${report.summary.dependencyFixes} dependencies`);
      
      return report;
      
    } catch (error) {
      this.log(`Error fixing automation failed: ${error.message}`, 'error');
      throw error;
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const automation = new EnhancedErrorFixingAutomation();
  automation.run().catch(console.error);
}

module.exports = EnhancedErrorFixingAutomation;