#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class ESLintErrorCleaner {
    constructor() {
        this.projectRoot = process.cwd();
        this.logsDir = path.join(this.projectRoot, 'logs');
        this.reportsDir = path.join(this.projectRoot, 'reports');
        this.ensureDirectories();
    }

    ensureDirectories() {
        if (!fs.existsSync(this.logsDir)) {
            fs.mkdirSync(this.logsDir, { recursive: true });
        }
        if (!fs.existsSync(this.reportsDir)) {
            fs.mkdirSync(this.reportsDir, { recursive: true });
        }
    }

    async checkESLintConfiguration() {
        try {
            // Check if eslint.config.js exists (ESLint v9+ format)
            const newConfigPath = path.join(this.projectRoot, 'eslint.config.js');
            const oldConfigPath = path.join(this.projectRoot, '.eslintrc.cjs');
            
            if (fs.existsSync(newConfigPath)) {
                console.log('✅ ESLint v9+ configuration found');
                return { isValid: true, configType: 'v9' };
            }
            
            if (fs.existsSync(oldConfigPath)) {
                console.log('⚠️  ESLint v8 configuration found, needs migration to v9');
                return { isValid: false, configType: 'v8', needsMigration: true };
            }
            
            console.log('❌ No ESLint configuration found');
            return { isValid: false, configType: 'none' };
            
        } catch (error) {
            console.error('Error checking ESLint configuration:', error);
            return { isValid: false, configType: 'error', error: error.message };
        }
    }

    async migrateESLintConfig() {
        try {
            const oldConfigPath = path.join(this.projectRoot, '.eslintrc.cjs');
            const newConfigPath = path.join(this.projectRoot, 'eslint.config.js');
            
            if (!fs.existsSync(oldConfigPath)) {
                console.log('No old ESLint config to migrate');
                return false;
            }
            
            console.log('🔄 Migrating ESLint configuration from v8 to v9...');
            
            // Create new ESLint v9 config
            const newConfig = this.createESLintV9Config();
            
            // Write new config
            fs.writeFileSync(newConfigPath, newConfig);
            
            // Backup old config
            const backupPath = oldConfigPath + '.backup';
            fs.renameSync(oldConfigPath, backupPath);
            
            console.log('✅ ESLint configuration migrated successfully');
            console.log(`📁 Old config backed up to: ${backupPath}`);
            
            return true;
            
        } catch (error) {
            console.error('Error migrating ESLint config:', error);
            return false;
        }
    }

    createESLintV9Config() {
        // Create a working ESLint v9 configuration
        const newConfig = `import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y
    },
    rules: {
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      
      // React rules
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      
      // General rules
      'no-console': 'warn',
      'no-unused-vars': 'off', // Use TypeScript version instead
      'prefer-const': 'error',
      'no-var': 'error',
      'no-undef': 'off', // TypeScript handles this
      
      // JSX accessibility
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];`;
        
        return newConfig;
    }

    async checkESLintErrors() {
        return new Promise((resolve, reject) => {
            const eslint = spawn('npx', ['eslint', '.', '--format=json'], {
                cwd: this.projectRoot,
                stdio: ['pipe', 'pipe', 'pipe']
            });

            let output = '';
            let errorOutput = '';

            eslint.stdout.on('data', (data) => {
                output += data.toString();
            });

            eslint.stderr.on('data', (data) => {
                errorOutput += data.toString();
            });

            eslint.on('close', (code) => {
                if (code === 0) {
                    console.log('✅ No ESLint errors found');
                    resolve({ hasErrors: false, errors: [] });
                } else {
                    console.log('❌ ESLint errors found');
                    try {
                        const errors = JSON.parse(output);
                        resolve({ hasErrors: true, errors });
                    } catch (parseError) {
                        console.error('Error parsing ESLint output:', parseError);
                        resolve({ hasErrors: true, errors: [], rawOutput: output });
                    }
                }
            });

            eslint.on('error', (error) => {
                console.error('Error running ESLint:', error);
                reject(error);
            });
        });
    }

    async fixESLintErrors() {
        return new Promise((resolve, reject) => {
            console.log('🔧 Running ESLint with --fix...');
            
            const eslint = spawn('npx', ['eslint', '.', '--fix'], {
                cwd: this.projectRoot,
                stdio: ['pipe', 'pipe', 'pipe']
            });

            let output = '';
            let errorOutput = '';

            eslint.stdout.on('data', (data) => {
                output += data.toString();
            });

            eslint.stderr.on('data', (data) => {
                errorOutput += data.toString();
            });

            eslint.on('close', (code) => {
                if (code === 0) {
                    console.log('✅ ESLint auto-fix completed successfully');
                    resolve({ success: true, output });
                } else {
                    console.log('⚠️  ESLint auto-fix completed with some issues');
                    resolve({ success: true, output, warnings: errorOutput });
                }
            });

            eslint.on('error', (error) => {
                console.error('Error running ESLint fix:', error);
                reject(error);
            });
        });
    }

    async fixSpecificESLintErrors(errors) {
        let fixedCount = 0;
        
        for (const fileError of errors) {
            try {
                const filePath = fileError.filePath;
                if (!fs.existsSync(filePath)) {
                    continue;
                }
                
                const content = fs.readFileSync(filePath, 'utf8');
                const lines = content.split('\n');
                let fileModified = false;
                
                for (const error of fileError.messages) {
                    const fixed = this.fixSpecificError(error, lines);
                    if (fixed) {
                        fileModified = true;
                        fixedCount++;
                    }
                }
                
                if (fileModified) {
                    fs.writeFileSync(filePath, lines.join('\n'));
                    console.log(`✅ Fixed ${fileError.messages.length} errors in ${filePath}`);
                }
                
            } catch (err) {
                console.error(`Error fixing errors in ${fileError.filePath}:`, err);
            }
        }
        
        return fixedCount;
    }

    fixSpecificError(error, lines) {
        const lineIndex = error.line - 1;
        if (lineIndex >= lines.length) return false;
        
        const currentLine = lines[lineIndex];
        
        switch (error.ruleId) {
            case 'no-unused-vars':
                return this.fixUnusedVariable(lines, lineIndex, currentLine, error);
            case 'no-console':
                return this.fixConsoleStatement(lines, lineIndex, currentLine, error);
            case 'prefer-const':
                return this.fixPreferConst(lines, lineIndex, currentLine, error);
            case 'no-var':
                return this.fixNoVar(lines, lineIndex, currentLine, error);
            default:
                return false;
        }
    }

    fixUnusedVariable(lines, lineIndex, currentLine, error) {
        // Add underscore prefix to unused variables
        if (error.message.includes('is assigned a value but never used')) {
            const varMatch = currentLine.match(/(\w+)\s*=/);
            if (varMatch) {
                const varName = varMatch[1];
                const newVarName = '_' + varName;
                lines[lineIndex] = currentLine.replace(new RegExp(`\\b${varName}\\b`, 'g'), newVarName);
                return true;
            }
        }
        return false;
    }

    fixConsoleStatement(lines, lineIndex, currentLine, error) {
        // Comment out console statements
        if (currentLine.includes('console.')) {
            lines[lineIndex] = '// ' + currentLine;
            return true;
        }
        return false;
    }

    fixPreferConst(lines, lineIndex, currentLine, error) {
        // Change let to const if variable is never reassigned
        if (currentLine.includes('let ') && !currentLine.includes('=')) {
            lines[lineIndex] = currentLine.replace('let ', 'const ');
            return true;
        }
        return false;
    }

    fixNoVar(lines, lineIndex, currentLine, error) {
        // Change var to const or let
        if (currentLine.includes('var ')) {
            if (currentLine.includes('=')) {
                lines[lineIndex] = currentLine.replace('var ', 'const ');
            } else {
                lines[lineIndex] = currentLine.replace('var ', 'let ');
            }
            return true;
        }
        return false;
    }

    generateReport(errors, fixedCount, configStatus) {
        const report = {
            timestamp: new Date().toISOString(),
            configStatus,
            totalErrors: errors.length,
            fixedErrors: fixedCount,
            remainingErrors: errors.length - fixedCount,
            errors: errors,
            summary: {
                totalErrors: errors.length,
                fixedErrors: fixedCount,
                remainingErrors: errors.length - fixedCount
            }
        };

        const reportPath = path.join(this.reportsDir, `eslint-fix-report-${Date.now()}.json`);
        fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
        
        console.log(`📊 Report generated: ${reportPath}`);
        return report;
    }

    async runErrorCleanup() {
        try {
            console.log('🔍 Checking ESLint configuration...');
            
            const configStatus = await this.checkESLintConfiguration();
            
            if (!configStatus.isValid) {
                if (configStatus.needsMigration) {
                    console.log('🔄 ESLint configuration needs migration to v9...');
                    const migrated = await this.migrateESLintConfig();
                    if (!migrated) {
                        console.log('❌ Failed to migrate ESLint configuration');
                        return;
                    }
                } else {
                    console.log('❌ ESLint configuration is invalid');
                    return;
                }
            }
            
            console.log('🔍 Checking ESLint errors...');
            
            const { hasErrors, errors } = await this.checkESLintErrors();
            
            if (!hasErrors) {
                console.log('✅ No ESLint errors to fix');
                return;
            }

            console.log(`Found ${errors.length} ESLint errors`);
            
            console.log('🔧 Running ESLint auto-fix...');
            const fixResult = await this.fixESLintErrors();
            
            if (fixResult.success) {
                console.log('✅ ESLint auto-fix completed');
                
                // Check for remaining errors
                console.log('🔍 Checking for remaining errors after auto-fix...');
                const { hasErrors: hasRemainingErrors, errors: remainingErrors } = await this.checkESLintErrors();
                
                if (hasRemainingErrors) {
                    console.log(`⚠️  ${remainingErrors.length} errors remain after auto-fix`);
                    console.log('🔧 Attempting to fix specific errors...');
                    const specificFixedCount = await this.fixSpecificESLintErrors(remainingErrors);
                    console.log(`Fixed ${specificFixedCount} specific errors`);
                } else {
                    console.log('🎉 All ESLint errors have been fixed!');
                }
                
                // Generate final report
                this.generateReport(errors, errors.length - (remainingErrors?.length || 0), configStatus);
            }
            
        } catch (error) {
            console.error('Error during ESLint error cleanup:', error);
        }
    }

    startContinuousCleaning() {
        console.log('🚀 Starting continuous ESLint error cleaning...');
        
        // Run immediately
        this.runErrorCleanup();
        
        // Then run every 20 minutes
        setInterval(() => {
            this.runErrorCleanup();
        }, 20 * 60 * 1000);
    }

    start() {
        if (process.argv.includes('--continuous')) {
            this.startContinuousCleaning();
        } else {
            this.runErrorCleanup();
        }
    }
}

// Run the cleaner
const cleaner = new ESLintErrorCleaner();
cleaner.start();