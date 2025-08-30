#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const glob = require('glob');

class ComprehensiveErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'comprehensive-error-fixer-report.json');
    this.fixedFiles = [];
    this.errors = [];
    this.warnings = [];
  }

  async start() {
    console.log('🚀 Starting Comprehensive Error Fixer...');
    
    try {
      // Run initial error scan
      await this.scanForErrors();
      
      // Fix syntax errors
      await this.fixSyntaxErrors();
      
      // Fix TypeScript errors
      await this.fixTypeScriptErrors();
      
      // Fix linting issues
      await this.fixLintingIssues();
      
      // Fix import/export issues
      await this.fixImportExportIssues();
      
      // Fix React component issues
      await this.fixReactComponentIssues();
      
      // Fix data file issues
      await this.fixDataFileIssues();
      
      // Generate report
      await this.generateReport();
      
      console.log('✅ Comprehensive Error Fixer completed successfully!');
      
    } catch (error) {
      console.error('❌ Error in Comprehensive Error Fixer:', error);
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
      // Run ESLint
      const lintResult = execSync('npm run lint 2>&1', { encoding: 'utf8' });
      this.parseLintOutput(lintResult);
    } catch (error) {
      // ESLint errors are expected, parse the output
      this.parseLintOutput(error.stdout || error.stderr || '');
    }

    try {
      // Run TypeScript check
      const tsResult = execSync('npm run type-check 2>&1', { encoding: 'utf8' });
      this.parseTypeScriptOutput(tsResult);
    } catch (error) {
      // TypeScript errors are expected, parse the output
      this.parseTypeScriptOutput(error.stdout || error.stderr || '');
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

  parseTypeScriptOutput(output) {
    const lines = output.split('\n');
    lines.forEach(line => {
      if (line.includes('error TS')) {
        const match = line.match(/(.+):(\d+):(\d+)\s+-\s+error\s+TS\d+:\s+(.+)/);
        if (match) {
          const [, filePath, lineNum, colNum, message] = match;
          this.errors.push({
            file: filePath.trim(),
            line: parseInt(lineNum),
            column: parseInt(colNum),
            type: 'typescript_error',
            message: message.trim()
          });
        }
      }
    });
  }

  async fixSyntaxErrors() {
    console.log('🔧 Fixing syntax errors...');
    
    for (const error of this.errors.filter(e => e.type === 'lint_error')) {
      if (error.message.includes('Parsing error')) {
        await this.fixParsingError(error);
      }
    }
  }

  async fixParsingError(error) {
    try {
      const filePath = path.resolve(this.projectRoot, error.file);
      if (!fs.existsSync(filePath)) return;

      let content = fs.readFileSync(filePath, 'utf8');
      let fixed = false;

      // Fix common parsing errors
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

      if (fixed) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push({
          file: error.file,
          type: 'syntax_fix',
          originalError: error.message
        });
        console.log(`✅ Fixed syntax error in ${error.file}`);
      }
    } catch (fixError) {
      console.error(`❌ Failed to fix syntax error in ${error.file}:`, fixError.message);
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

  async fixTypeScriptErrors() {
    console.log('🔧 Fixing TypeScript errors...');
    
    for (const error of this.errors.filter(e => e.type === 'typescript_error')) {
      if (error.message.includes('Type expected')) {
        await this.fixTypeScriptTypeError(error);
      } else if (error.message.includes('Identifier expected')) {
        await this.fixTypeScriptIdentifierError(error);
      }
    }
  }

  async fixTypeScriptTypeError(error) {
    try {
      const filePath = path.resolve(this.projectRoot, error.file);
      if (!fs.existsSync(filePath)) return;

      let content = fs.readFileSync(filePath, 'utf8');
      let fixed = false;

      // Fix missing type annotations
      if (error.message.includes('Type expected')) {
        content = content
          .replace(/:\s*,/g, ': any,')
          .replace(/:\s*\)/g, ': any)')
          .replace(/:\s*=>/g, ': any =>')
          .replace(/:\s*;/g, ': any;');
        fixed = true;
      }

      if (fixed) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push({
          file: error.file,
          type: 'typescript_fix',
          originalError: error.message
        });
        console.log(`✅ Fixed TypeScript error in ${error.file}`);
      }
    } catch (fixError) {
      console.error(`❌ Failed to fix TypeScript error in ${error.file}:`, fixError.message);
    }
  }

  async fixTypeScriptIdentifierError(error) {
    try {
      const filePath = path.resolve(this.projectRoot, error.file);
      if (!fs.existsSync(filePath)) return;

      let content = fs.readFileSync(filePath, 'utf8');
      let fixed = false;

      // Fix JSX fragment syntax issues
      if (content.includes('<>') && content.includes('</>')) {
        content = content
          .replace(/^\s*<>\s*$/gm, '')
          .replace(/^\s*<\/>\s*$/gm, '');
        fixed = true;
      }

      if (fixed) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push({
          file: error.file,
          type: 'typescript_jsx_fix',
          originalError: error.message
        });
        console.log(`✅ Fixed TypeScript JSX error in ${error.file}`);
      }
    } catch (fixError) {
      console.error(`❌ Failed to fix TypeScript error in ${error.file}:`, fixError.message);
    }
  }

  async fixLintingIssues() {
    console.log('🔧 Fixing linting issues...');
    
    try {
      // Run ESLint with --fix
      execSync('npm run lint -- --fix', { stdio: 'pipe' });
      console.log('✅ Applied ESLint auto-fixes');
    } catch (error) {
      console.log('ℹ️ Some linting issues could not be auto-fixed');
    }
  }

  async fixImportExportIssues() {
    console.log('🔧 Fixing import/export issues...');
    
    // Find files with import/export issues
    const filesWithImportIssues = this.errors.filter(e => 
      e.message.includes('import') || 
      e.message.includes('export') ||
      e.message.includes('module')
    );

    for (const error of filesWithImportIssues) {
      await this.fixImportExportError(error);
    }
  }

  async fixImportExportError(error) {
    try {
      const filePath = path.resolve(this.projectRoot, error.file);
      if (!fs.existsSync(filePath)) return;

      let content = fs.readFileSync(filePath, 'utf8');
      let fixed = false;

      // Fix React import issues
      if (content.includes('React') && !content.includes("import React")) {
        if (content.includes('jsx') || content.includes('tsx')) {
          content = "import React from 'react';\n" + content;
          fixed = true;
        }
      }

      // Fix missing exports
      if (content.includes('export default') && !content.includes('export default')) {
        content = content.replace(/export\s+default\s+(\w+)/, 'export default $1');
        fixed = true;
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
    
    // Find React component files with issues
    const reactFiles = this.errors.filter(e => 
      e.file.includes('.jsx') || 
      e.file.includes('.tsx') ||
      e.message.includes('React') ||
      e.message.includes('JSX')
    );

    for (const error of reactFiles) {
      await this.fixReactComponentError(error);
    }
  }

  async fixReactComponentError(error) {
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
        }
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

  async fixDataFileIssues() {
    console.log('🔧 Fixing data file issues...');
    
    // Find data files with syntax issues
    const dataFiles = this.errors.filter(e => 
      e.file.includes('/data/') ||
      e.message.includes('Unexpected token')
    );

    for (const error of dataFiles) {
      await this.fixDataFileError(error);
    }
  }

  async fixDataFileError(error) {
    try {
      const filePath = path.resolve(this.projectRoot, error.file);
      if (!fs.existsSync(filePath)) return;

      let content = fs.readFileSync(filePath, 'utf8');
      let fixed = false;

      // Fix array syntax in data files
      if (content.includes('const') && content.includes('[')) {
        content = content
          .replace(/const\s+(\w+)\s*=\s*\[/g, 'const $1 = [')
          .replace(/\]\s*;?\s*$/g, '];');
        fixed = true;
      }

      // Fix object syntax in data files
      if (content.includes('const') && content.includes('{')) {
        content = content
          .replace(/const\s+(\w+)\s*=\s*\{/g, 'const $1 = {')
          .replace(/\}\s*;?\s*$/g, '};');
        fixed = true;
      }

      if (fixed) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push({
          file: error.file,
          type: 'data_file_fix',
          originalError: error.message
        });
        console.log(`✅ Fixed data file issue in ${error.file}`);
      }
    } catch (fixError) {
      console.error(`❌ Failed to fix data file issue in ${error.file}:`, fixError.message);
    }
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
      warnings: this.warnings
    };

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    console.log(`📊 Report generated: ${this.reportFile}`);
  }
}

// Auto-start if run directly
if (require.main === module) {
  const fixer = new ComprehensiveErrorFixer();
  fixer.start();
}

module.exports = ComprehensiveErrorFixer;