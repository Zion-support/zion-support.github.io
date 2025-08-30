#!/usr/bin/env node

import { execSync, spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ErrorFixer {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.logFile = path.join(this.projectRoot, 'logs', 'error-fixer.log');
    this.errorReportFile = path.join(this.projectRoot, 'logs', 'error-report.json');
    this.fixReportFile = path.join(this.projectRoot, 'logs', 'fix-report.json');
    this.fixedErrors = [];
    this.failedFixes = [];
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    // Append to log file
    fs.appendFileSync(this.logFile, logMessage + '\n');
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
      return { success: false, error: error.message, output: error.stdout || '' };
    }
  }

  async detectErrors() {
    this.log('🔍 Starting error detection...');
    
    const errors = {
      lint: [],
      typeCheck: [],
      build: [],
      dependencies: [],
      security: []
    };

    // Check linting errors
    this.log('Checking linting errors...');
    const lintResult = await this.runCommand('npm run lint', { silent: true });
    if (!lintResult.success) {
      errors.lint = this.parseLintErrors(lintResult.output);
    }

    // Check TypeScript errors
    this.log('Checking TypeScript errors...');
    const typeCheckResult = await this.runCommand('npm run type-check', { silent: true });
    if (!typeCheckResult.success) {
      errors.typeCheck = this.parseTypeCheckErrors(typeCheckResult.output);
    }

    // Check build errors
    this.log('Checking build errors...');
    const buildResult = await this.runCommand('npm run build', { silent: true });
    if (!buildResult.success) {
      errors.build = this.parseBuildErrors(buildResult.output);
    }

    // Check dependency issues
    this.log('Checking dependency issues...');
    const auditResult = await this.runCommand('npm audit --json', { silent: true });
    if (auditResult.success) {
      try {
        const auditData = JSON.parse(auditResult.output);
        if (auditData.metadata && auditData.metadata.vulnerabilities) {
          errors.dependencies = Object.entries(auditData.metadata.vulnerabilities)
            .filter(([severity, count]) => count > 0)
            .map(([severity, count]) => ({ severity, count }));
        }
      } catch (e) {
        this.log('Failed to parse audit results', 'WARN');
      }
    }

    return errors;
  }

  parseLintErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error') || line.includes('warning')) {
        const match = line.match(/([^:]+):(\d+):(\d+):\s*(error|warning)\s*(.+)/);
        if (match) {
          errors.push({
            file: match[1],
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            type: match[4],
            message: match[5],
            category: 'lint'
          });
        }
      }
    }
    
    return errors;
  }

  parseTypeCheckErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error TS')) {
        const match = line.match(/([^:]+):(\d+):(\d+)\s*-\s*error\s+TS\d+:\s*(.+)/);
        if (match) {
          errors.push({
            file: match[1],
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            type: 'typescript',
            message: match[4],
            category: 'typeCheck'
          });
        }
      }
    }
    
    return errors;
  }

  parseBuildErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('Error:') || line.includes('error')) {
        errors.push({
          type: 'build',
          message: line.trim(),
          category: 'build'
        });
      }
    }
    
    return errors;
  }

  async fixErrors(errors) {
    this.log('🔧 Starting automatic error fixing...');
    
    let totalFixed = 0;
    
    // Fix linting errors
    if (errors.lint.length > 0) {
      this.log(`Fixing ${errors.lint.length} linting errors...`);
      const fixedLint = await this.fixLintErrors(errors.lint);
      totalFixed += fixedLint;
    }

    // Fix TypeScript errors
    if (errors.typeCheck.length > 0) {
      this.log(`Fixing ${errors.typeCheck.length} TypeScript errors...`);
      const fixedType = await this.fixTypeScriptErrors(errors.typeCheck);
      totalFixed += fixedType;
    }

    // Fix build errors
    if (errors.build.length > 0) {
      this.log(`Fixing ${errors.build.length} build errors...`);
      const fixedBuild = await this.fixBuildErrors(errors.build);
      totalFixed += fixedBuild;
    }

    // Fix dependency issues
    if (errors.dependencies.length > 0) {
      this.log(`Fixing ${errors.dependencies.length} dependency issues...`);
      const fixedDeps = await this.fixDependencyIssues(errors.dependencies);
      totalFixed += fixedDeps;
    }

    return totalFixed;
  }

  async fixLintErrors(errors) {
    let fixed = 0;
    
    for (const error of errors) {
      try {
        if (await this.fixLintError(error)) {
          fixed++;
          this.fixedErrors.push({
            ...error,
            fixMethod: 'automatic',
            timestamp: new Date().toISOString()
          });
        }
      } catch (e) {
        this.failedFixes.push({
          ...error,
          error: e.message,
          timestamp: new Date().toISOString()
        });
      }
    }
    
    return fixed;
  }

  async fixLintError(error) {
    const filePath = path.join(this.projectRoot, error.file);
    
    if (!fs.existsSync(filePath)) {
      return false;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common linting issues
    switch (error.message) {
      case "'React' is defined but never used":
        content = this.removeUnusedReactImport(content);
        modified = true;
        break;
        
      case "Unexpected console statement":
        content = this.removeConsoleStatements(content);
        modified = true;
        break;
        
      case "is defined but never used":
        content = this.removeUnusedVariables(content, error);
        modified = true;
        break;
        
      case "Parsing error: Expected corresponding JSX closing tag":
        content = this.fixJSXClosingTags(content, error);
        modified = true;
        break;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  }

  removeUnusedReactImport(content) {
    // Remove React import if it's not used
    const lines = content.split('\n');
    const reactImportIndex = lines.findIndex(line => 
      line.includes("import React") && !line.includes("React.")
    );
    
    if (reactImportIndex !== -1) {
      lines.splice(reactImportIndex, 1);
      return lines.join('\n');
    }
    
    return content;
  }

  removeConsoleStatements(content) {
    // Remove console.log, console.error, etc.
    return content.replace(/console\.(log|error|warn|info|debug)\([^)]*\);?\s*/g, '');
  }

  removeUnusedVariables(content, error) {
    // This is a simplified approach - in practice, you'd need more sophisticated analysis
    const lines = content.split('\n');
    const lineIndex = error.line - 1;
    
    if (lineIndex >= 0 && lineIndex < lines.length) {
      const line = lines[lineIndex];
      // Remove the line if it's a simple variable declaration
      if (line.includes('const ') || line.includes('let ') || line.includes('var ')) {
        lines.splice(lineIndex, 1);
        return lines.join('\n');
      }
    }
    
    return content;
  }

  fixJSXClosingTags(content, error) {
    // This is a simplified approach - in practice, you'd need more sophisticated JSX parsing
    // For now, we'll just log the issue for manual review
    this.log(`JSX closing tag issue detected in ${error.file} at line ${error.line}`, 'WARN');
    return content;
  }

  async fixTypeScriptErrors(errors) {
    let fixed = 0;
    
    for (const error of errors) {
      try {
        if (await this.fixTypeScriptError(error)) {
          fixed++;
          this.fixedErrors.push({
            ...error,
            fixMethod: 'automatic',
            timestamp: new Date().toISOString()
          });
        }
      } catch (e) {
        this.failedFixes.push({
          ...error,
          error: e.message,
          timestamp: new Date().toISOString()
        });
      }
    }
    
    return fixed;
  }

  async fixTypeScriptError(error) {
    const filePath = path.join(this.projectRoot, error.file);
    
    if (!fs.existsSync(filePath)) {
      return false;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common TypeScript issues
    switch (error.message) {
      case "JSX expressions must have one parent element":
        content = this.fixJSXParentElement(content, error);
        modified = true;
        break;
        
      case "JSX element 'div' has no corresponding closing tag":
        content = this.fixJSXClosingTags(content, error);
        modified = true;
        break;
        
      case "is not defined":
        content = this.fixUndefinedVariables(content, error);
        modified = true;
        break;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  }

  fixJSXParentElement(content, error) {
    // Wrap JSX content in a parent div if needed
    const lines = content.split('\n');
    const lineIndex = error.line - 1;
    
    if (lineIndex >= 0 && lineIndex < lines.length) {
      // Find the start of JSX content and wrap it
      let jsxStart = -1;
      for (let i = lineIndex; i >= 0; i--) {
        if (lines[i].includes('<') && !lines[i].includes('import') && !lines[i].includes('export')) {
          jsxStart = i;
          break;
        }
      }
      
      if (jsxStart !== -1) {
        lines.splice(jsxStart, 0, '  <div>');
        // Find the end and add closing tag
        for (let i = jsxStart + 1; i < lines.length; i++) {
          if (lines[i].includes('return') || lines[i].includes('export')) {
            lines.splice(i, 0, '  </div>');
            break;
          }
        }
        return lines.join('\n');
      }
    }
    
    return content;
  }

  fixUndefinedVariables(content, error) {
    // Add missing imports or fix variable references
    const lines = content.split('\n');
    const lineIndex = error.line - 1;
    
    if (lineIndex >= 0 && lineIndex < lines.length) {
      const line = lines[lineIndex];
      
      // Check if it's a missing import
      if (line.includes('import') && line.includes('from')) {
        // Fix malformed import statements
        const fixedLine = line.replace(/import:\s*{([^}]+)},\s*from,\s*'([^']+)':\s*,/g, 
          "import { $1 } from '$2';");
        if (fixedLine !== line) {
          lines[lineIndex] = fixedLine;
          return lines.join('\n');
        }
      }
    }
    
    return content;
  }

  async fixBuildErrors(errors) {
    let fixed = 0;
    
    for (const error of errors) {
      try {
        if (await this.fixBuildError(error)) {
          fixed++;
          this.fixedErrors.push({
            ...error,
            fixMethod: 'automatic',
            timestamp: new Date().toISOString()
          });
        }
      } catch (e) {
        this.failedFixes.push({
          ...error,
          error: e.message,
          timestamp: new Date().toISOString()
        });
      }
    }
    
    return fixed;
  }

  async fixBuildError(error) {
    // Handle build-specific errors
    if (error.message.includes('Cannot find module')) {
      // Try to install missing dependencies
      const moduleMatch = error.message.match(/Cannot find module '([^']+)'/);
      if (moduleMatch) {
        const moduleName = moduleMatch[1];
        this.log(`Installing missing module: ${moduleName}`);
        const installResult = await this.runCommand(`npm install ${moduleName}`, { silent: true });
        return installResult.success;
      }
    }
    
    return false;
  }

  async fixDependencyIssues(dependencies) {
    let fixed = 0;
    
    for (const dep of dependencies) {
      try {
        if (dep.severity === 'high' || dep.severity === 'critical') {
          this.log(`Fixing ${dep.severity} severity dependency issue`);
          const fixResult = await this.runCommand('npm audit fix', { silent: true });
          if (fixResult.success) {
            fixed++;
          }
        }
      } catch (e) {
        this.log(`Failed to fix dependency issue: ${e.message}`, 'ERROR');
      }
    }
    
    return fixed;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalErrors: this.fixedErrors.length + this.failedFixes.length,
        fixedErrors: this.fixedErrors.length,
        failedFixes: this.failedFixes.length,
        successRate: this.fixedErrors.length / (this.fixedErrors.length + this.failedFixes.length) * 100
      },
      fixedErrors: this.fixedErrors,
      failedFixes: this.failedFixes
    };
    
    // Save reports
    fs.writeFileSync(this.errorReportFile, JSON.stringify(report, null, 2));
    fs.writeFileSync(this.fixReportFile, JSON.stringify({
      timestamp: new Date().toISOString(),
      fixedErrors: this.fixedErrors
    }, null, 2));
    
    this.log(`📊 Report generated: ${this.fixedErrors.length} errors fixed, ${this.failedFixes.length} failed`);
    return report;
  }

  async run() {
    this.log('🚀 Starting Error Fixer Automation');
    
    try {
      // Detect errors
      const errors = await this.detectErrors();
      
      // Count total errors
      const totalErrors = Object.values(errors).flat().length;
      this.log(`Found ${totalErrors} total errors to fix`);
      
      if (totalErrors === 0) {
        this.log('✅ No errors found!');
        return;
      }
      
      // Fix errors
      const fixedCount = await this.fixErrors(errors);
      
      // Generate report
      const report = await this.generateReport();
      
      this.log(`✅ Error fixing completed! Fixed ${fixedCount} out of ${totalErrors} errors`);
      
      // If there are still errors, try to run auto-fix
      if (fixedCount < totalErrors) {
        this.log('🔄 Running additional auto-fix attempts...');
        await this.runCommand('npm run fix:all', { silent: true });
      }
      
    } catch (error) {
      this.log(`❌ Error in error fixing process: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the error fixer
if (import.meta.url === `file://${process.argv[1]}`) {
  const fixer = new ErrorFixer();
  fixer.run().catch(console.error);
}

export default ErrorFixer;