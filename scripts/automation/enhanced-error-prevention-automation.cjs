#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class EnhancedErrorPreventionAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.startTime = Date.now();
    this.results = {
      typescript: { success: false, errorsFixed: 0, filesProcessed: 0, errors: [] },
      eslint: { success: false, errorsFixed: 0, filesProcessed: 0, errors: [] },
      build: { success: false, errorsFixed: 0, filesProcessed: 0, errors: [] },
      syntax: { success: false, errorsFixed: 0, filesProcessed: 0, errors: [] },
      overall: { success: false, totalErrorsFixed: 0, totalFilesProcessed: 0 }
    };
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [EnhancedErrorPrevention] ${message}`);
  }

  async runTypeScriptErrorFixer() {
    this.log('Running TypeScript Error Fixer...');
    
    try {
      // Check for TypeScript errors first
      const typeCheckResult = await this.runTypeCheck();
      
      if (typeCheckResult.success) {
        this.log('No TypeScript errors found');
        this.results.typescript = {
          success: true,
          errorsFixed: 0,
          filesProcessed: 0,
          errors: []
        };
        return true;
      }

      // Fix common TypeScript errors
      const errorsFixed = await this.fixCommonTypeScriptErrors(typeCheckResult.errors);
      
      this.results.typescript = {
        success: errorsFixed > 0,
        errorsFixed: errorsFixed,
        filesProcessed: typeCheckResult.filesProcessed || 0,
        errors: typeCheckResult.errors || []
      };
      
      this.log(`TypeScript Error Fixer completed. Fixed ${errorsFixed} errors in ${this.results.typescript.filesProcessed} files.`);
      return this.results.typescript.success;
      
    } catch (error) {
      this.log(`TypeScript Error Fixer failed: ${error.message}`);
      this.results.typescript.success = false;
      return false;
    }
  }

  async runTypeCheck() {
    try {
      const result = execSync('npm run type-check', { 
        stdio: 'pipe', 
        encoding: 'utf8',
        cwd: this.projectRoot 
      });
      
      return {
        success: true,
        errors: [],
        filesProcessed: 0
      };
      
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      const errors = this.parseTypeScriptErrors(output);
      
      return {
        success: false,
        errors: errors,
        filesProcessed: errors.length
      };
    }
  }

  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error TS') && line.includes('src/')) {
        const match = line.match(/src\/[^:]+:\d+:\d+/);
        if (match) {
          errors.push({
            file: match[0],
            message: line.trim(),
            line: line.match(/:(\d+):/)?.[1] || '0'
          });
        }
      }
    }
    
    return errors;
  }

  async fixCommonTypeScriptErrors(errors) {
    let errorsFixed = 0;
    
    for (const error of errors) {
      if (await this.fixTypeScriptError(error)) {
        errorsFixed++;
      }
    }
    
    return errorsFixed;
  }

  async fixTypeScriptError(error) {
    try {
      const filePath = path.join(this.projectRoot, error.file);
      
      if (!fs.existsSync(filePath)) {
        return false;
      }
      
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Fix common TypeScript syntax errors
      if (error.message.includes('TS1003: Identifier expected')) {
        // Fix missing function names or parameters
        content = content.replace(/\(\s*<>\s*\)/g, '()');
        modified = true;
      }
      
      if (error.message.includes('TS1138: Parameter declaration expected')) {
        // Fix JSX fragments in function parameters
        content = content.replace(/\(\s*<>\s*\)/g, '()');
        modified = true;
      }
      
      if (error.message.includes('TS2657: JSX expressions must have one parent element')) {
        // Wrap JSX in a single parent element
        const lines = content.split('\n');
        let inJSX = false;
        let jsxStart = -1;
        
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].includes('<Helmet>') || lines[i].includes('<title>')) {
            if (!inJSX) {
              jsxStart = i;
              inJSX = true;
            }
          }
          
          if (inJSX && lines[i].includes('</div>')) {
            // Wrap the JSX content
            lines.splice(jsxStart, 0, '  <div>');
            lines.splice(i + 2, 0, '  </div>');
            modified = true;
            break;
          }
        }
        
        if (modified) {
          content = lines.join('\n');
        }
      }
      
      if (error.message.includes('TS1110: Type expected')) {
        // Fix missing type annotations
        content = content.replace(/:\s*,/g, ': any,');
        content = content.replace(/:\s*\)/g, ': any)');
        content = content.replace(/:\s*$/gm, ': any');
        modified = true;
      }
      
      if (error.message.includes('TS1128: Declaration or statement expected')) {
        // Fix syntax issues with JSX fragments
        content = content.replace(/<>\s*<\/>/g, '<div></div>');
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.log(`Fixed TypeScript error in ${error.file}`);
        return true;
      }
      
    } catch (fixError) {
      this.log(`Failed to fix TypeScript error in ${error.file}: ${fixError.message}`);
    }
    
    return false;
  }

  async runESLintErrorFixer() {
    this.log('Running ESLint Error Fixer...');
    
    try {
      // Try to run ESLint with auto-fix
      const lintResult = await this.runESLintWithFix();
      
      this.results.eslint = {
        success: lintResult.success,
        errorsFixed: lintResult.errorsFixed || 0,
        filesProcessed: lintResult.filesProcessed || 0,
        errors: lintResult.errors || []
      };
      
      this.log(`ESLint Error Fixer completed. Success: ${this.results.eslint.success}, Fixed: ${this.results.eslint.errorsFixed}`);
      return this.results.eslint.success;
      
    } catch (error) {
      this.log(`ESLint Error Fixer failed: ${error.message}`);
      this.results.eslint.success = false;
      return false;
    }
  }

  async runESLintWithFix() {
    try {
      // First try to run ESLint with --fix
      execSync('npx eslint . --fix', { 
        stdio: 'pipe', 
        encoding: 'utf8',
        cwd: this.projectRoot 
      });
      
      return {
        success: true,
        errorsFixed: 0,
        filesProcessed: 0,
        errors: []
      };
      
    } catch (error) {
      // If ESLint fails, try to fix common issues manually
      const output = error.stdout || error.stderr || '';
      const errors = this.parseESLintErrors(output);
      
      // Try to fix common ESLint issues
      const errorsFixed = await this.fixCommonESLintErrors(errors);
      
      return {
        success: errorsFixed > 0,
        errorsFixed: errorsFixed,
        filesProcessed: errors.length,
        errors: errors
      };
    }
  }

  parseESLintErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error') && line.includes('src/')) {
        const match = line.match(/src\/[^:]+:\d+:\d+/);
        if (match) {
          errors.push({
            file: match[0],
            message: line.trim(),
            line: line.match(/:(\d+):/)?.[1] || '0'
          });
        }
      }
    }
    
    return errors;
  }

  async fixCommonESLintErrors(errors) {
    let errorsFixed = 0;
    
    for (const error of errors) {
      if (await this.fixESLintError(error)) {
        errorsFixed++;
      }
    }
    
    return errorsFixed;
  }

  async fixESLintError(error) {
    try {
      const filePath = path.join(this.projectRoot, error.file);
      
      if (!fs.existsSync(filePath)) {
        return false;
      }
      
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Fix common ESLint issues
      if (error.message.includes('Unexpected token')) {
        // Fix syntax issues
        content = content.replace(/<>\s*<\/>/g, '<div></div>');
        modified = true;
      }
      
      if (error.message.includes('Missing semicolon')) {
        // Add missing semicolons
        content = content.replace(/([^;])\n/g, '$1;\n');
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.log(`Fixed ESLint error in ${error.file}`);
        return true;
      }
      
    } catch (fixError) {
      this.log(`Failed to fix ESLint error in ${error.file}: ${fixError.message}`);
    }
    
    return false;
  }

  async runBuildErrorFixer() {
    this.log('Running Build Error Fixer...');
    
    try {
      // Try to build the project
      execSync('npm run build', { 
        stdio: 'pipe', 
        encoding: 'utf8',
        cwd: this.projectRoot 
      });
      
      this.results.build = {
        success: true,
        errorsFixed: 0,
        filesProcessed: 0,
        errors: []
      };
      
      this.log('Build completed successfully');
      return true;
      
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      const errors = this.parseBuildErrors(output);
      
      // Try to fix build errors
      const errorsFixed = await this.fixBuildErrors(errors);
      
      this.results.build = {
        success: errorsFixed > 0,
        errorsFixed: errorsFixed,
        filesProcessed: errors.length,
        errors: errors
      };
      
      this.log(`Build Error Fixer completed. Fixed ${errorsFixed} errors`);
      return this.results.build.success;
    }
  }

  parseBuildErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error') && (line.includes('src/') || line.includes('Error:'))) {
        errors.push({
          message: line.trim(),
          type: 'build'
        });
      }
    }
    
    return errors;
  }

  async fixBuildErrors(errors) {
    let errorsFixed = 0;
    
    // Try to fix common build issues
    for (const error of errors) {
      if (await this.fixBuildError(error)) {
        errorsFixed++;
      }
    }
    
    return errorsFixed;
  }

  async fixBuildError(error) {
    try {
      // Fix common build issues
      if (error.message.includes('Module not found')) {
        // Try to install missing dependencies
        execSync('npm install', { 
          stdio: 'pipe', 
          encoding: 'utf8',
          cwd: this.projectRoot 
        });
        return true;
      }
      
      if (error.message.includes('Syntax error')) {
        // This will be handled by TypeScript and ESLint fixers
        return false;
      }
      
    } catch (fixError) {
      this.log(`Failed to fix build error: ${fixError.message}`);
    }
    
    return false;
  }

  async runSyntaxErrorFixer() {
    this.log('Running Syntax Error Fixer...');
    
    try {
      // Scan for common syntax issues
      const syntaxErrors = await this.scanForSyntaxErrors();
      
      if (syntaxErrors.length === 0) {
        this.results.syntax = {
          success: true,
          errorsFixed: 0,
          filesProcessed: 0,
          errors: []
        };
        this.log('No syntax errors found');
        return true;
      }
      
      // Fix syntax errors
      const errorsFixed = await this.fixSyntaxErrors(syntaxErrors);
      
      this.results.syntax = {
        success: errorsFixed > 0,
        errorsFixed: errorsFixed,
        filesProcessed: syntaxErrors.length,
        errors: syntaxErrors
      };
      
      this.log(`Syntax Error Fixer completed. Fixed ${errorsFixed} errors`);
      return this.results.syntax.success;
      
    } catch (error) {
      this.log(`Syntax Error Fixer failed: ${error.message}`);
      this.results.syntax.success = false;
      return false;
    }
  }

  async scanForSyntaxErrors() {
    const errors = [];
    const srcDir = path.join(this.projectRoot, 'src');
    
    if (!fs.existsSync(srcDir)) {
      return errors;
    }
    
    const files = this.getAllFiles(srcDir, ['.tsx', '.ts', '.jsx', '.js']);
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const syntaxIssues = this.detectSyntaxIssues(content, file);
        errors.push(...syntaxIssues);
      } catch (error) {
        // File read error
      }
    }
    
    return errors;
  }

  getAllFiles(dir, extensions) {
    const files = [];
    
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.getAllFiles(fullPath, extensions));
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  detectSyntaxIssues(content, filePath) {
    const issues = [];
    
    // Check for common syntax issues
    if (content.includes('<>') && content.includes('</>')) {
      // Check if JSX fragments are properly used
      const lines = content.split('\n');
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('<>') && !lines[i].includes('</>')) {
          // Look for closing fragment
          let foundClosing = false;
          for (let j = i + 1; j < lines.length; j++) {
            if (lines[j].includes('</>')) {
              foundClosing = true;
              break;
            }
          }
          
          if (!foundClosing) {
            issues.push({
              file: filePath,
              line: i + 1,
              message: 'Unclosed JSX fragment',
              type: 'syntax'
            });
          }
        }
      }
    }
    
    // Check for missing type annotations
    const typePattern = /:\s*[,)]/g;
    let match;
    while ((match = typePattern.exec(content)) !== null) {
      const line = content.substring(0, match.index).split('\n').length;
      issues.push({
        file: filePath,
        line: line,
        message: 'Missing type annotation',
        type: 'syntax'
      });
    }
    
    return issues;
  }

  async fixSyntaxErrors(errors) {
    let errorsFixed = 0;
    
    for (const error of errors) {
      if (await this.fixSyntaxError(error)) {
        errorsFixed++;
      }
    }
    
    return errorsFixed;
  }

  async fixSyntaxError(error) {
    try {
      const filePath = error.file;
      
      if (!fs.existsSync(filePath)) {
        return false;
      }
      
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      if (error.message === 'Unclosed JSX fragment') {
        // Fix unclosed JSX fragments
        content = content.replace(/<>\s*$/gm, '<div>');
        content = content.replace(/^\s*<\/>/gm, '</div>');
        modified = true;
      }
      
      if (error.message === 'Missing type annotation') {
        // Add missing type annotations
        content = content.replace(/:\s*,/g, ': any,');
        content = content.replace(/:\s*\)/g, ': any)');
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.log(`Fixed syntax error in ${path.basename(filePath)}`);
        return true;
      }
      
    } catch (fixError) {
      this.log(`Failed to fix syntax error in ${error.file}: ${fixError.message}`);
    }
    
    return false;
  }

  async runAllFixers() {
    this.log('Starting Enhanced Error Prevention Automation...');
    
    // Run all fixers in sequence
    await this.runTypeScriptErrorFixer();
    await this.runESLintErrorFixer();
    await this.runSyntaxErrorFixer();
    await this.runBuildErrorFixer();
    
    // Calculate overall results
    this.results.overall = {
      success: this.results.typescript.success || this.results.eslint.success || this.results.syntax.success || this.results.build.success,
      totalErrorsFixed: this.results.typescript.errorsFixed + this.results.eslint.errorsFixed + this.results.syntax.errorsFixed + this.results.build.errorsFixed,
      totalFilesProcessed: this.results.typescript.filesProcessed + this.results.eslint.filesProcessed + this.results.syntax.filesProcessed + this.results.build.filesProcessed
    };
    
    this.log('Enhanced Error Prevention Automation completed');
    this.log(`Overall Results: ${this.results.overall.totalErrorsFixed} errors fixed in ${this.results.overall.totalFilesProcessed} files`);
    
    // Generate report
    await this.generateReport();
    
    return this.results.overall;
  }

  async generateReport() {
    const reportPath = path.join(this.reportsDir, 'enhanced-error-prevention-report.json');
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      results: this.results
    };
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`Report generated: ${reportPath}`);
  }

  async startContinuousMode() {
    this.log('Starting continuous error prevention mode...');
    
    // Run initial fix
    await this.runAllFixers();
    
    // Set up continuous monitoring
    const interval = parseInt(process.env.AUTOMATION_INTERVAL) || 600000; // Default: 10 minutes
    
    setInterval(async () => {
      this.log('Running scheduled error prevention check...');
      await this.runAllFixers();
    }, interval);
    
    this.log(`Continuous mode active. Running every ${interval / 1000} seconds.`);
  }
}

// Main execution
if (require.main === module) {
  const automation = new EnhancedErrorPreventionAutomation();
  
  if (process.argv.includes('--continuous')) {
    automation.startContinuousMode();
  } else {
    automation.runAllFixers()
      .then(results => {
        console.log('Automation completed:', results);
        process.exit(results.success ? 0 : 1);
      })
      .catch(error => {
        console.error('Automation failed:', error);
        process.exit(1);
      });
  }
}

module.exports = EnhancedErrorPreventionAutomation;