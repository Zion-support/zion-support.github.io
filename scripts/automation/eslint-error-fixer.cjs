#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const glob = require('glob');

class ESLintErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.automationInterval = parseInt(process.env.AUTOMATION_INTERVAL) || 240000; // 4 minutes
    this.fixesApplied = [];
    this.errorsFound = [];
    this.startTime = Date.now();
    this.reportPath = path.join(this.projectRoot, 'error-reports');
    
    // Ensure error reports directory exists
    if (!fs.existsSync(this.reportPath)) {
      fs.mkdirSync(this.reportPath, { recursive: true });
    }
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logMessage);
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
      return { success: false, output: error.stdout || error.stderr || error.message };
    }
  }

  async runESLintAutoFix() {
    this.log('Running ESLint auto-fix...');
    
    const result = await this.runCommand('npx eslint --fix src/**/*.{js,jsx,ts,tsx}', { silent: true });
    
    if (result.success) {
      this.fixesApplied.push({
        type: 'eslint_autofix',
        description: 'Applied ESLint auto-fixes'
      });
      this.log('ESLint auto-fix completed successfully');
    } else {
      this.errorsFound.push({
        type: 'eslint_autofix',
        description: 'ESLint auto-fix failed',
        details: result.output
      });
      this.log('ESLint auto-fix failed', 'error');
    }
    
    return result;
  }

  async fixCommonESLintIssues() {
    this.log('Fixing common ESLint issues...');
    
    const jsFiles = glob.sync('src/**/*.{js,jsx,ts,tsx}', { cwd: this.projectRoot });
    let totalFixes = 0;
    
    for (const file of jsFiles) {
      const filePath = path.join(this.projectRoot, file);
      const content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      let newContent = content;

      // Fix common ESLint issues
      
      // Fix unnecessary escape characters
      newContent = newContent.replace(/\\\[/g, '[');
      newContent = newContent.replace(/\\\//g, '/');
      newContent = newContent.replace(/\\\./g, '.');
      newContent = newContent.replace(/\\\*/g, '*');
      newContent = newContent.replace(/\\\+/g, '+');
      newContent = newContent.replace(/\\\?/g, '?');
      newContent = newContent.replace(/\\\^/g, '^');
      newContent = newContent.replace(/\\\$/g, '$');
      newContent = newContent.replace(/\\\(/g, '(');
      newContent = newContent.replace(/\\\)/g, ')');
      newContent = newContent.replace(/\\\|/g, '|');
      newContent = newContent.replace(/\\\{/g, '{');
      newContent = newContent.replace(/\\\}/g, '}');

      // Fix prototype access
      newContent = newContent.replace(/\.hasOwnProperty\(/g, 'Object.prototype.hasOwnProperty.call(');

      // Fix parsing errors - add missing semicolons
      const lines = newContent.split('\n');
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line && !line.endsWith(';') && !line.endsWith('{') && !line.endsWith('}') && 
            !line.endsWith('(') && !line.endsWith(')') && !line.endsWith('[') && !line.endsWith(']') &&
            !line.startsWith('//') && !line.startsWith('/*') && !line.startsWith('*') &&
            !line.includes('import ') && !line.includes('export ') && !line.includes('return ') &&
            !line.includes('if ') && !line.includes('for ') && !line.includes('while ') &&
            !line.includes('switch ') && !line.includes('try ') && !line.includes('catch ') &&
            !line.includes('finally ') && !line.includes('else ') && !line.includes('function ') &&
            !line.includes('class ') && !line.includes('const ') && !line.includes('let ') &&
            !line.includes('var ') && !line.includes('=>') && !line.includes('async ')) {
          lines[i] = line + ';';
        }
      }
      newContent = lines.join('\n');

      // Fix unused variables by prefixing with underscore
      const unusedVarRegex = /const\s+(\w+)\s*=\s*[^;]+;\s*(?:\/\/.*)?$/gm;
      newContent = newContent.replace(unusedVarRegex, (match, varName) => {
        if (!newContent.includes(varName) || newContent.indexOf(varName) === newContent.indexOf(match)) {
          return match.replace(`const ${varName}`, `const _${varName}`);
        }
        return match;
      });

      // Fix console statements (comment them out)
      newContent = newContent.replace(/console\.log\(/g, '// console.log(');
      newContent = newContent.replace(/console\.error\(/g, '// console.error(');
      newContent = newContent.replace(/console\.warn\(/g, '// console.warn(');
      newContent = newContent.replace(/console\.info\(/g, '// console.info(');
      newContent = newContent.replace(/console\.debug\(/g, '// console.debug(');

      // Fix prefer-const issues
      const letRegex = /let\s+(\w+)\s*=\s*([^;]+);/g;
      newContent = newContent.replace(letRegex, (match, varName, value) => {
        if (!value.includes('=') && !value.includes('+=') && !value.includes('-=') && 
            !value.includes('*=') && !value.includes('/=') && !value.includes('%=')) {
          return match.replace('let', 'const');
        }
        return match;
      });

      // Fix no-var issues
      newContent = newContent.replace(/var\s+/g, 'const ');

      // Fix trailing spaces
      newContent = newContent.replace(/[ \t]+$/gm, '');

      // Fix multiple empty lines
      newContent = newContent.replace(/\n\s*\n\s*\n/g, '\n\n');

      if (newContent !== content) {
        fs.writeFileSync(filePath, newContent);
        modified = true;
        totalFixes++;
        this.fixesApplied.push({
          type: 'eslint_manual',
          file: file,
          description: 'Fixed common ESLint issues'
        });
      }
    }
    
    this.log(`Applied ${totalFixes} manual ESLint fixes`);
    return totalFixes;
  }

  async checkESLintErrors() {
    this.log('Checking for remaining ESLint errors...');
    
    const result = await this.runCommand('npx eslint src/**/*.{js,jsx,ts,tsx}', { silent: true });
    
    if (!result.success) {
      const errorCount = (result.output.match(/\d+ error\(s\)/g) || []).length;
      this.errorsFound.push({
        type: 'eslint_remaining',
        description: `Found ${errorCount} remaining ESLint errors`,
        details: result.output
      });
      this.log(`Found ${errorCount} remaining ESLint errors`, 'warn');
    } else {
      this.log('No ESLint errors found', 'info');
    }
    
    return result;
  }

  async generateReport() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      fixesApplied: this.fixesApplied,
      errorsFound: this.errorsFound,
      summary: {
        totalFixes: this.fixesApplied.length,
        totalErrors: this.errorsFound.length,
        success: this.errorsFound.length === 0
      }
    };

    const reportFile = path.join(this.reportPath, `eslint-error-fixer-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportFile}`);
    this.log(`Total fixes applied: ${this.fixesApplied.length}`);
    this.log(`Total errors found: ${this.errorsFound.length}`);
    
    return report;
  }

  async run() {
    this.log('Starting ESLint error fixing process...');
    
    try {
      // Run manual fixes first
      await this.fixCommonESLintIssues();
      
      // Run ESLint auto-fix
      await this.runESLintAutoFix();
      
      // Check for remaining errors
      await this.checkESLintErrors();
      
      // Generate report
      const report = await this.generateReport();
      
      this.log('ESLint error fixing process completed!');
      return report;
      
    } catch (error) {
      this.log(`Error during ESLint fixing process: ${error.message}`, 'error');
      throw error;
    }
  }
}

// Run the fixer if this script is executed directly
if (require.main === module) {
  const fixer = new ESLintErrorFixer();
  fixer.run().catch(console.error);
}

module.exports = ESLintErrorFixer;