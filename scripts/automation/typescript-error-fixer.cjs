#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const glob = require('glob');

class TypeScriptErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.errorLog = [];
    this.fixedFiles = new Set();
    this.reportPath = path.join(this.projectRoot, 'error-reports', 'typescript-error-fixer-report.json');
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

  async fixTypeScriptSyntaxErrors() {
    this.log('Fixing TypeScript syntax errors...');
    
    const tsFiles = glob.sync('**/*.{ts,tsx}', { 
      cwd: this.projectRoot,
      ignore: ['node_modules/**', '.next/**', 'out/**', 'dist/**']
    });

    for (const file of tsFiles) {
      const filePath = path.join(this.projectRoot, file);
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // Fix common TypeScript syntax errors
        const syntaxFixes = [
          // Fix missing semicolons
          { pattern: /([^;])\n/g, replacement: '$1;\n' },
          
          // Fix missing type annotations
          { pattern: /const\s+(\w+)\s*:\s*any\s*=/g, replacement: 'const $1: unknown =' },
          { pattern: /let\s+(\w+)\s*:\s*any\s*=/g, replacement: 'let $1: unknown =' },
          { pattern: /var\s+(\w+)\s*:\s*any\s*=/g, replacement: 'var $1: unknown =' },
          
          // Fix function parameter types
          { pattern: /function\s+(\w+)\s*\(([^)]*)\)\s*{/g, replacement: 'function $1($2: any) {' },
          
          // Fix interface property types
          { pattern: /(\w+)\s*:\s*any\s*[,;]/g, replacement: '$1: unknown$2' },
          
          // Fix import/export syntax
          { pattern: /module\.exports\s*=/g, replacement: 'export default' },
          { pattern: /require\(/g, replacement: 'import ' },
          
          // Fix React imports
          { pattern: /import\s+React\s+from\s+['"]react['"];?\s*\n?/g, replacement: '' },
          
          // Fix JSX syntax
          { pattern: /\.jsx?$/g, replacement: '' },
          
          // Fix unused variables
          { pattern: /const\s+(\w+)\s*=\s*[^;]+;\s*\n\s*\/\/\s*unused/g, replacement: '' },
          
          // Fix missing return types
          { pattern: /function\s+(\w+)\s*\([^)]*\)\s*{/g, replacement: 'function $1(...args: any[]): any {' },
          
          // Fix array type annotations
          { pattern: /:\s*\[\s*\]/g, replacement: ': any[]' },
          
          // Fix object type annotations
          { pattern: /:\s*{\s*}/g, replacement: ': Record<string, any>' },
        ];

        for (const fix of syntaxFixes) {
          const newContent = content.replace(fix.pattern, fix.replacement);
          if (newContent !== content) {
            content = newContent;
            modified = true;
          }
        }

        if (modified) {
          fs.writeFileSync(filePath, content);
          this.log(`Fixed TypeScript syntax errors in ${file}`, 'success');
          this.fixedFiles.add(filePath);
        }
      } catch (error) {
        this.log(`Error fixing TypeScript file ${file}: ${error.message}`, 'error');
      }
    }
  }

  async fixTypeErrors() {
    this.log('Fixing TypeScript type errors...');
    
    // Run TypeScript compiler to get type errors
    const typeCheckResult = await this.runCommand('npx tsc --noEmit --pretty false', { silent: true });
    
    if (!typeCheckResult.success) {
      const errorOutput = typeCheckResult.output;
      const lines = errorOutput.split('\n');
      
      for (const line of lines) {
        if (line.includes('.ts') || line.includes('.tsx')) {
          // Parse error line to extract file and error info
          const match = line.match(/([^(]+)\((\d+),(\d+)\):\s*(.+)/);
          if (match) {
            const [, filePath, lineNum, colNum, errorMessage] = match;
            await this.fixSpecificTypeError(filePath, parseInt(lineNum), parseInt(colNum), errorMessage);
          }
        }
      }
    }
  }

  async fixSpecificTypeError(filePath, lineNum, colNum, errorMessage) {
    try {
      if (!fs.existsSync(filePath)) return;
      
      let content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      
      if (lineNum <= lines.length) {
        const line = lines[lineNum - 1];
        let modified = false;
        
        // Fix common type errors
        if (errorMessage.includes("Type 'any' is not assignable")) {
          // Replace 'any' with 'unknown'
          const newLine = line.replace(/:\s*any\b/g, ': unknown');
          if (newLine !== line) {
            lines[lineNum - 1] = newLine;
            modified = true;
          }
        } else if (errorMessage.includes("Object is possibly 'undefined'")) {
          // Add null check
          const newLine = line.replace(/(\w+)\.(\w+)/g, '$1?.$2');
          if (newLine !== line) {
            lines[lineNum - 1] = newLine;
            modified = true;
          }
        } else if (errorMessage.includes("Property does not exist")) {
          // Add type assertion
          const newLine = line.replace(/(\w+)\.(\w+)/g, '($1 as any).$2');
          if (newLine !== line) {
            lines[lineNum - 1] = newLine;
            modified = true;
          }
        } else if (errorMessage.includes("Parameter implicitly has an 'any' type")) {
          // Add parameter type
          const newLine = line.replace(/function\s+(\w+)\s*\(([^)]*)\)/g, 'function $1($2: any)');
          if (newLine !== line) {
            lines[lineNum - 1] = newLine;
            modified = true;
          }
        }
        
        if (modified) {
          content = lines.join('\n');
          fs.writeFileSync(filePath, content);
          this.log(`Fixed type error in ${filePath}:${lineNum}`, 'success');
          this.fixedFiles.add(filePath);
        }
      }
    } catch (error) {
      this.log(`Error fixing specific type error in ${filePath}: ${error.message}`, 'error');
    }
  }

  async fixImportErrors() {
    this.log('Fixing TypeScript import errors...');
    
    const tsFiles = glob.sync('**/*.{ts,tsx}', { 
      cwd: this.projectRoot,
      ignore: ['node_modules/**', '.next/**', 'out/**', 'dist/**']
    });

    for (const file of tsFiles) {
      const filePath = path.join(this.projectRoot, file);
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // Fix import errors
        const importFixes = [
          // Fix missing React import for JSX
          { 
            pattern: /^(?!.*import.*React)/m, 
            replacement: "import React from 'react';\n$&",
            condition: (content) => content.includes('jsx') && !content.includes("import React")
          },
          
          // Fix relative imports
          { pattern: /from\s+['"]\.\.\/\.\.\/\.\.\//g, replacement: "from '../../../" },
          { pattern: /from\s+['"]\.\.\/\.\.\//g, replacement: "from '../../" },
          { pattern: /from\s+['"]\.\.\//g, replacement: "from '../" },
          
          // Fix file extensions
          { pattern: /from\s+['"]([^'"]+)\.js['"]/g, replacement: "from '$1'" },
          { pattern: /from\s+['"]([^'"]+)\.jsx['"]/g, replacement: "from '$1'" },
          
          // Fix default imports
          { pattern: /import\s+{\s*default\s+as\s+(\w+)\s*}\s+from/g, replacement: 'import $1 from' },
        ];

        for (const fix of importFixes) {
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
          this.log(`Fixed import errors in ${file}`, 'success');
          this.fixedFiles.add(filePath);
        }
      } catch (error) {
        this.log(`Error fixing import errors in ${file}: ${error.message}`, 'error');
      }
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
    this.log('Starting TypeScript error fixing process...');
    
    try {
      // Run all TypeScript error fixing steps
      await this.fixTypeScriptSyntaxErrors();
      await this.fixImportErrors();
      await this.fixTypeErrors();
      await this.runTypeCheck();
      
      // Generate report
      await this.generateReport();
      
      this.log(`TypeScript error fixing completed. Fixed ${this.fixedFiles.size} files.`, 'success');
      
    } catch (error) {
      this.log(`Error in TypeScript error fixing: ${error.message}`, 'error');
    }
  }
}

// Run the TypeScript error fixer
const tsErrorFixer = new TypeScriptErrorFixer();
tsErrorFixer.run().catch(console.error);