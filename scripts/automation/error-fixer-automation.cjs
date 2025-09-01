#!/usr/bin/env node

/**
 * Error Fixer Automation
 * Automatically detects and fixes common project errors
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ErrorFixerAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.srcDir = path.join(this.projectRoot, 'src');
    this.fixesApplied = [];
    this.errorsFound = [];
  }

  async run() {
    console.log('🚀 Starting Error Fixer Automation...');
    
    try {
      // Step 1: Fix missing exports
      await this.fixMissingExports();
      
      // Step 2: Fix import/export mismatches
      await this.fixImportExportMismatches();
      
      // Step 3: Fix TypeScript errors
      await this.fixTypeScriptErrors();
      
      // Step 4: Fix ESLint errors
      await this.fixESLintErrors();
      
      // Step 5: Generate report
      await this.generateReport();
      
      console.log('✅ Error Fixer Automation completed successfully!');
    } catch (error) {
      console.error('❌ Error Fixer Automation failed:', error);
      process.exit(1);
    }
  }

  async fixMissingExports() {
    console.log('🔧 Fixing missing exports...');
    
    const files = this.getAllFiles(this.srcDir, ['.tsx', '.ts', '.jsx', '.js']);
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const fileName = path.basename(file, path.extname(file));
        
        // Check if file has a component but no export
        if (this.hasReactComponent(content, fileName) && !this.hasDefaultExport(content)) {
          const fixedContent = this.addDefaultExport(content, fileName);
          fs.writeFileSync(file, fixedContent);
          this.fixesApplied.push({
            type: 'missing_export',
            file: path.relative(this.projectRoot, file),
            description: `Added default export for ${fileName}`
          });
        }
      } catch (error) {
        console.warn(`Warning: Could not process ${file}:`, error.message);
      }
    }
  }

  async fixImportExportMismatches() {
    console.log('🔧 Fixing import/export mismatches...');
    
    const files = this.getAllFiles(this.srcDir, ['.tsx', '.ts', '.jsx', '.js']);
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Fix common import patterns
        let fixedContent = content;
        
        // Fix lazy imports that expect named exports but get default exports
        fixedContent = fixedContent.replace(
          /lazy\(\(\) => import\(['"]([^'"]+)['"]\)\.then\(module => \(\{ default: module\.(\w+) \}\)\)/g,
          'lazy(() => import(\'$1\'))'
        );
        
        if (fixedContent !== content) {
          fs.writeFileSync(file, fixedContent);
          this.fixesApplied.push({
            type: 'import_fix',
            file: path.relative(this.projectRoot, file),
            description: 'Fixed lazy import pattern'
          });
        }
      } catch (error) {
        console.warn(`Warning: Could not process ${file}:`, error.message);
      }
    }
  }

  async fixTypeScriptErrors() {
    console.log('🔧 Fixing TypeScript errors...');
    
    try {
      // Run TypeScript check to get errors
      const result = execSync('npx tsc --noEmit --pretty false', { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      // Parse TypeScript errors and fix common ones
      const errors = this.parseTypeScriptErrors(result);
      
      for (const error of errors) {
        await this.fixTypeScriptError(error);
      }
    } catch (error) {
      // TypeScript check failed, which is expected if there are errors
      const errorOutput = error.stdout || error.stderr || '';
      const errors = this.parseTypeScriptErrors(errorOutput);
      
      for (const tsError of errors) {
        await this.fixTypeScriptError(tsError);
      }
    }
  }

  async fixESLintErrors() {
    console.log('🔧 Fixing ESLint errors...');
    
    try {
      // Run ESLint with auto-fix
      execSync('npx eslint --fix src/**/*.{ts,tsx,js,jsx}', { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      this.fixesApplied.push({
        type: 'eslint_fix',
        file: 'multiple',
        description: 'Auto-fixed ESLint errors'
      });
    } catch (error) {
      console.warn('Warning: ESLint auto-fix failed:', error.message);
    }
  }

  async fixTypeScriptError(error) {
    const { file, line, message } = error;
    
    if (!file || !fs.existsSync(file)) return;
    
    try {
      const content = fs.readFileSync(file, 'utf8');
      const lines = content.split('\n');
      
      // Fix common TypeScript errors
      if (message.includes('Property \'default\' is missing')) {
        // Add default export
        const fileName = path.basename(file, path.extname(file));
        if (!this.hasDefaultExport(content)) {
          const fixedContent = this.addDefaultExport(content, fileName);
          fs.writeFileSync(file, fixedContent);
          this.fixesApplied.push({
            type: 'typescript_export_fix',
            file: path.relative(this.projectRoot, file),
            description: `Added missing default export for ${fileName}`
          });
        }
      } else if (message.includes('Cannot redeclare block-scoped variable')) {
        // Remove duplicate declarations
        const fixedContent = this.removeDuplicateDeclarations(content, message);
        if (fixedContent !== content) {
          fs.writeFileSync(file, fixedContent);
          this.fixesApplied.push({
            type: 'typescript_duplicate_fix',
            file: path.relative(this.projectRoot, file),
            description: 'Removed duplicate variable declaration'
          });
        }
      }
    } catch (error) {
      console.warn(`Warning: Could not fix TypeScript error in ${file}:`, error.message);
    }
  }

  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      const match = line.match(/^([^(]+)\((\d+),(\d+)\): (.+)$/);
      if (match) {
        errors.push({
          file: match[1].trim(),
          line: parseInt(match[2]),
          column: parseInt(match[3]),
          message: match[4].trim()
        });
      }
    }
    
    return errors;
  }

  hasReactComponent(content, componentName) {
    const patterns = [
      new RegExp(`const\\s+${componentName}\\s*=\\s*\\(\\s*\\)\\s*=>`, 'i'),
      new RegExp(`function\\s+${componentName}\\s*\\(`, 'i'),
      new RegExp(`const\\s+${componentName}\\s*:\\s*React\\.FC`, 'i')
    ];
    
    return patterns.some(pattern => pattern.test(content));
  }

  hasDefaultExport(content) {
    return /export\s+default/.test(content);
  }

  addDefaultExport(content, componentName) {
    // Check if there's already an export default at the end
    if (content.trim().endsWith('export default ' + componentName + ';')) {
      return content;
    }
    
    // Add export default at the end
    return content + '\n\nexport default ' + componentName + ';';
  }

  removeDuplicateDeclarations(content, errorMessage) {
    // Extract variable name from error message
    const match = errorMessage.match(/Cannot redeclare block-scoped variable '(\w+)'/);
    if (!match) return content;
    
    const variableName = match[1];
    const lines = content.split('\n');
    const declarations = [];
    
    // Find all declarations of the variable
    lines.forEach((line, index) => {
      if (new RegExp(`const\\s+${variableName}\\s*=`).test(line)) {
        declarations.push(index);
      }
    });
    
    // Remove duplicate declarations (keep the first one)
    if (declarations.length > 1) {
      for (let i = declarations.length - 1; i > 0; i--) {
        lines.splice(declarations[i], 1);
      }
      return lines.join('\n');
    }
    
    return content;
  }

  getAllFiles(dir, extensions) {
    const files = [];
    
    function traverse(currentDir) {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          traverse(fullPath);
        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    }
    
    traverse(dir);
    return files;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      fixesApplied: this.fixesApplied,
      errorsFound: this.errorsFound,
      summary: {
        totalFixes: this.fixesApplied.length,
        totalErrors: this.errorsFound.length
      }
    };
    
    const reportPath = path.join(this.projectRoot, 'error-reports', `error-fixer-report-${Date.now()}.json`);
    
    // Ensure reports directory exists
    const reportsDir = path.dirname(reportPath);
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Report generated: ${reportPath}`);
    console.log(`📈 Fixes applied: ${this.fixesApplied.length}`);
    console.log(`⚠️  Errors found: ${this.errorsFound.length}`);
  }
}

// Run the automation
const automation = new ErrorFixerAutomation();
automation.startTime = Date.now();
automation.run().catch(console.error);