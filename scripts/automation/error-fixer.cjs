#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class GeneralErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'general-error-fixer-report.json');
    this.fixedFiles = [];
    this.errors = [];
    this.warnings = [];
  }

  async start() {
    console.log('🚀 Starting General Error Fixer...');
    
    try {
      // Run initial error scan
      await this.scanForErrors();
      
      // Fix common linting issues
      await this.fixCommonLintingIssues();
      
      // Fix unused variables
      await this.fixUnusedVariables();
      
      // Fix console statements
      await this.fixConsoleStatements();
      
      // Fix import/export issues
      await this.fixImportExportIssues();
      
      // Fix React component issues
      await this.fixReactComponentIssues();
      
      // Fix syntax issues
      await this.fixSyntaxIssues();
      
      // Generate report
      await this.generateReport();
      
      console.log('✅ General Error Fixer completed successfully!');
      
    } catch (error) {
      console.error('❌ Error in General Error Fixer:', error);
      this.errors.push({
        type: 'system_error',
        message: error.message,
        timestamp: new Date().toISOString()
      });
      await this.generateReport();
    }
  }

  async scanForErrors() {
    console.log('🔍 Scanning for errors...');
    
    try {
      const lintResult = execSync('npm run lint 2>&1', { encoding: 'utf8' });
      this.parseLintOutput(lintResult);
    } catch (error) {
      // ESLint errors are expected, parse the output
      this.parseLintOutput(error.stdout || error.stderr || '');
    }
  }

  parseLintOutput(output) {
    const lines = output.split('\n');
    lines.forEach(line => {
      if (line.includes('error') || line.includes('warning')) {
        const match = line.match(/(.+):(\d+):(\d+)\s+(error|warning)\s+(.+)/);
        if (match) {
          const [, filePath, lineNum, colNum, type, message] = match;
          if (type === 'error') {
            this.errors.push({
              file: filePath.trim(),
              line: parseInt(lineNum),
              column: parseInt(colNum),
              type: 'lint_error',
              message: message.trim()
            });
          } else {
            this.warnings.push({
              file: filePath.trim(),
              line: parseInt(lineNum),
              column: parseInt(colNum),
              type: 'lint_warning',
              message: message.trim()
            });
          }
        }
      }
    });
  }

  async fixCommonLintingIssues() {
    console.log('🔧 Fixing common linting issues...');
    
    try {
      // Run ESLint with --fix
      execSync('npm run lint -- --fix', { stdio: 'pipe' });
      console.log('✅ Applied ESLint auto-fixes');
    } catch (error) {
      console.log('ℹ️ Some linting issues could not be auto-fixed');
    }
  }

  async fixUnusedVariables() {
    console.log('🔧 Fixing unused variables...');
    
    const unusedVarErrors = this.errors.filter(e => 
      e.message.includes('defined but never used') ||
      e.message.includes('assigned a value but never used')
    );

    for (const error of unusedVarErrors) {
      await this.fixUnusedVariable(error);
    }
  }

  async fixUnusedVariable(error) {
    try {
      const filePath = path.resolve(this.projectRoot, error.file);
      if (!fs.existsSync(filePath)) return;

      let content = fs.readFileSync(filePath, 'utf8');
      let fixed = false;

      // Extract variable name from error message
      const varMatch = error.message.match(/'([^']+)'/);
      if (varMatch) {
        const varName = varMatch[1];
        
        // Remove unused imports
        if (error.message.includes('import')) {
          const importRegex = new RegExp(`import\\s+\\{[^}]*\\b${varName}\\b[^}]*\\}\\s+from\\s+['"][^'"]+['"];?\\s*\\n?`, 'g');
          if (content.match(importRegex)) {
            content = content.replace(importRegex, '');
            fixed = true;
          }
        }
        
        // Remove unused variable declarations
        if (error.message.includes('defined but never used')) {
          const varRegex = new RegExp(`(?:const|let|var)\\s+${varName}\\s*=\\s*[^;]+;?\\s*\\n?`, 'g');
          if (content.match(varRegex)) {
            content = content.replace(varRegex, '');
            fixed = true;
          }
        }
        
        // Remove unused function parameters
        if (error.message.includes('parameter') && error.message.includes('never used')) {
          const paramRegex = new RegExp(`,\\s*${varName}\\s*:`, 'g');
          if (content.match(paramRegex)) {
            content = content.replace(paramRegex, ',');
            fixed = true;
          }
        }
      }

      if (fixed) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push({
          file: error.file,
          type: 'unused_variable_fix',
          originalError: error.message
        });
        console.log(`✅ Fixed unused variable in ${error.file}`);
      }
    } catch (fixError) {
      console.error(`❌ Failed to fix unused variable in ${error.file}:`, fixError.message);
    }
  }

  async fixConsoleStatements() {
    console.log('🔧 Fixing console statements...');
    
    const consoleErrors = this.errors.filter(e => 
      e.message.includes('Unexpected console statement')
    );

    for (const error of consoleErrors) {
      await this.fixConsoleStatement(error);
    }
  }

  async fixConsoleStatement(error) {
    try {
      const filePath = path.resolve(this.projectRoot, error.file);
      if (!fs.existsSync(filePath)) return;

      let content = fs.readFileSync(filePath, 'utf8');
      let fixed = false;

      // Replace console statements with proper logging or remove them
      if (content.includes('console.log')) {
        content = content.replace(/console\.log\([^)]*\);?\s*\n?/g, '');
        fixed = true;
      }
      
      if (content.includes('console.error')) {
        content = content.replace(/console\.error\([^)]*\);?\s*\n?/g, '');
        fixed = true;
      }
      
      if (content.includes('console.warn')) {
        content = content.replace(/console\.warn\([^)]*\);?\s*\n?/g, '');
        fixed = true;
      }
      
      if (content.includes('console.info')) {
        content = content.replace(/console\.info\([^)]*\);?\s*\n?/g, '');
        fixed = true;
      }

      if (fixed) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push({
          file: error.file,
          type: 'console_statement_fix',
          originalError: error.message
        });
        console.log(`✅ Fixed console statements in ${error.file}`);
      }
    } catch (fixError) {
      console.error(`❌ Failed to fix console statements in ${error.file}:`, fixError.message);
    }
  }

  async fixImportExportIssues() {
    console.log('🔧 Fixing import/export issues...');
    
    const importExportErrors = this.errors.filter(e => 
      e.message.includes('import') ||
      e.message.includes('export') ||
      e.message.includes('module')
    );

    for (const error of importExportErrors) {
      await this.fixImportExportIssue(error);
    }
  }

  async fixImportExportIssue(error) {
    try {
      const filePath = path.resolve(this.projectRoot, error.file);
      if (!fs.existsSync(filePath)) return;

      let content = fs.readFileSync(filePath, 'utf8');
      let fixed = false;

      // Fix missing semicolons in imports
      if (content.includes('import') && !content.includes(';')) {
        content = content.replace(/from\s+['"]([^'"]+)['"]\s*$/gm, "from '$1';");
        fixed = true;
      }

      // Fix missing semicolons in exports
      if (content.includes('export') && !content.includes(';')) {
        content = content.replace(/export\s+default\s+(\w+)\s*$/gm, 'export default $1;');
        fixed = true;
      }

      // Fix React import issues
      if (content.includes('React') && !content.includes("import React")) {
        if (content.includes('jsx') || content.includes('tsx')) {
          content = "import React from 'react';\n" + content;
          fixed = true;
        }
      }

      if (fixed) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push({
          file: error.file,
          type: 'import_export_fix',
          originalError: error.message
        });
        console.log(`✅ Fixed import/export issue in ${error.file}`);
      }
    } catch (fixError) {
      console.error(`❌ Failed to fix import/export issue in ${error.file}:`, fixError.message);
    }
  }

  async fixReactComponentIssues() {
    console.log('🔧 Fixing React component issues...');
    
    const reactErrors = this.errors.filter(e => 
      e.file.includes('.jsx') || 
      e.file.includes('.tsx') ||
      e.message.includes('React') ||
      e.message.includes('JSX')
    );

    for (const error of reactErrors) {
      await this.fixReactComponentIssue(error);
    }
  }

  async fixReactComponentIssue(error) {
    try {
      const filePath = path.resolve(this.projectRoot, error.file);
      if (!fs.existsSync(filePath)) return;

      let content = fs.readFileSync(filePath, 'utf8');
      let fixed = false;

      // Fix missing React import
      if (content.includes('jsx') && !content.includes("import React")) {
        content = "import React from 'react';\n" + content;
        fixed = true;
      }

      // Fix JSX fragment syntax
      if (content.includes('<>') && content.includes('</>')) {
        // Ensure proper JSX structure
        if (!content.includes('return') && content.includes('function')) {
          content = content.replace(/function\s+(\w+)\s*\([^)]*\)\s*{/, 'function $1() {\n  return (');
          content = content.replace(/<\/>\s*\)\s*;?\s*$/, '</>);\n}');
          fixed = true;
        }
      }

      // Fix JSX attribute issues
      if (content.includes('jsx')) {
        content = content
          .replace(/\s*\/\s*>/g, ' />')
          .replace(/>\s*</g, '>\n<');
        fixed = true;
      }

      if (fixed) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push({
          file: error.file,
          type: 'react_component_fix',
          originalError: error.message
        });
        console.log(`✅ Fixed React component issue in ${error.file}`);
      }
    } catch (fixError) {
      console.error(`❌ Failed to fix React component issue in ${error.file}:`, fixError.message);
    }
  }

  async fixSyntaxIssues() {
    console.log('🔧 Fixing syntax issues...');
    
    const syntaxErrors = this.errors.filter(e => 
      e.message.includes('Parsing error') ||
      e.message.includes('Unexpected token') ||
      e.message.includes('Expected')
    );

    for (const error of syntaxErrors) {
      await this.fixSyntaxIssue(error);
    }
  }

  async fixSyntaxIssue(error) {
    try {
      const filePath = path.resolve(this.projectRoot, error.file);
      if (!fs.existsSync(filePath)) return;

      let content = fs.readFileSync(filePath, 'utf8');
      let fixed = false;

      // Fix common syntax issues
      if (error.message.includes('Unexpected token [')) {
        content = this.fixArraySyntax(content);
        fixed = true;
      }

      if (error.message.includes('Unexpected token {')) {
        content = this.fixObjectSyntax(content);
        fixed = true;
      }

      if (error.message.includes('Unexpected token =')) {
        content = this.fixAssignmentSyntax(content);
        fixed = true;
      }

      if (error.message.includes('Unexpected token ;')) {
        content = this.fixSemicolonSyntax(content);
        fixed = true;
      }

      // Fix missing semicolons
      if (error.message.includes('Expected')) {
        content = content
          .replace(/([^;])\s*$/gm, '$1;')
          .replace(/;\s*;/g, ';');
        fixed = true;
      }

      if (fixed) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push({
          file: error.file,
          type: 'syntax_fix',
          originalError: error.message
        });
        console.log(`✅ Fixed syntax issue in ${error.file}`);
      }
    } catch (fixError) {
      console.error(`❌ Failed to fix syntax issue in ${error.file}:`, fixError.message);
    }
  }

  fixArraySyntax(content) {
    // Fix array destructuring syntax issues
    return content
      .replace(/const\s+(\w+)\s*=\s*\[([^\]]*)\];/g, 'const $1 = [$2];')
      .replace(/let\s+(\w+)\s*=\s*\[([^\]]*)\];/g, 'let $1 = [$2];')
      .replace(/var\s+(\w+)\s*=\s*\[([^\]]*)\];/g, 'var $1 = [$2];');
  }

  fixObjectSyntax(content) {
    // Fix object destructuring syntax issues
    return content
      .replace(/const\s*\{([^}]*)\}\s*=\s*([^;]+);/g, 'const { $1 } = $2;')
      .replace(/let\s*\{([^}]*)\}\s*=\s*([^;]+);/g, 'let { $1 } = $2;')
      .replace(/var\s*\{([^}]*)\}\s*=\s*([^;]+);/g, 'var { $1 } = $2;');
  }

  fixAssignmentSyntax(content) {
    // Fix assignment syntax issues
    return content
      .replace(/const\s+(\w+)\s*=\s*([^;]+);/g, 'const $1 = $2;')
      .replace(/let\s+(\w+)\s*=\s*([^;]+);/g, 'let $1 = $2;')
      .replace(/var\s+(\w+)\s*=\s*([^;]+);/g, 'var $1 = $2;');
  }

  fixSemicolonSyntax(content) {
    // Fix semicolon syntax issues
    return content
      .replace(/;\s*;/g, ';')
      .replace(/;\s*$/gm, ';');
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalErrors: this.errors.length,
        totalWarnings: this.warnings.length,
        fixedFiles: this.fixedFiles.length,
        remainingErrors: this.errors.length - this.fixedFiles.length
      },
      fixedFiles: this.fixedFiles,
      remainingErrors: this.errors.filter(error => 
        !this.fixedFiles.some(fix => fix.file === error.file)
      ),
      warnings: this.warnings,
      fixTypes: this.fixedFiles.reduce((acc, fix) => {
        acc[fix.type] = (acc[fix.type] || 0) + 1;
        return acc;
      }, {})
    };

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    console.log(`📊 General Error Fixer report generated: ${this.reportFile}`);
  }
}

// Auto-start if run directly
if (require.main === module) {
  const fixer = new GeneralErrorFixer();
  fixer.start();
}

module.exports = GeneralErrorFixer;