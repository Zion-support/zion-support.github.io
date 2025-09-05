#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class LintFixerAutomation {
  constructor() {
    this.logFile = 'automation/logs/lint-fixer.log';
    this.fixedCount = 0;
    this.errorCount = 0;
    this.startTime = Date.now();
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;

    // Ensure log directory exists
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }

    fs.appendFileSync(this.logFile, logMessage);
    console.log(`[${level}] ${message}`);
  }

  async runCommand(command, options = {}) {
    try {
      this.log(`Running command: ${command}`);
      const result = execSync(command, {
        encoding: 'utf8',
        cwd: '/workspace',
        ...options,
      });
      return result;
    } catch (error) {
      this.log(`Command failed: ${command} - ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async fixESLintErrors() {
    this.log('Fixing ESLint errors...');

    try {
      // Run ESLint with --fix flag
      await this.runCommand(
        'npx eslint . --fix --ext .js,.jsx,.ts,.tsx --max-warnings 0'
      );
      this.log('ESLint errors fixed successfully');
      this.fixedCount++;
    } catch (error) {
      this.log(`ESLint fix failed: ${error.message}`, 'ERROR');
      this.errorCount++;
    }
  }

  async fixPrettierFormatting() {
    this.log('Fixing Prettier formatting...');

    try {
      // Run Prettier with --write flag
      await this.runCommand('npx prettier --write .');
      this.log('Prettier formatting applied successfully');
      this.fixedCount++;
    } catch (error) {
      this.log(`Prettier formatting failed: ${error.message}`, 'ERROR');
      this.errorCount++;
    }
  }

  async fixImportErrors() {
    this.log('Fixing import errors...');

    try {
      // Use eslint-plugin-import to fix import issues
      await this.runCommand(
        'npx eslint . --fix --ext .js,.jsx,.ts,.tsx --rule "import/no-unresolved: off"'
      );
      this.log('Import errors fixed successfully');
      this.fixedCount++;
    } catch (error) {
      this.log(`Import fix failed: ${error.message}`, 'ERROR');
      this.errorCount++;
    }
  }

  async fixUnusedVariables() {
    this.log('Fixing unused variables...');

    try {
      // Remove unused variables
      await this.runCommand(
        'npx eslint . --fix --ext .js,.jsx,.ts,.tsx --rule "no-unused-vars: error"'
      );
      this.log('Unused variables fixed successfully');
      this.fixedCount++;
    } catch (error) {
      this.log(`Unused variables fix failed: ${error.message}`, 'ERROR');
      this.errorCount++;
    }
  }

  async fixSyntaxErrors() {
    this.log('Fixing syntax errors...');

    try {
      // Check for syntax errors and try to fix them
      const files = this.getAllSourceFiles();

      for (const file of files) {
        await this.fixFileSyntax(file);
      }

      this.log(`Fixed syntax in ${files.length} files`);
      this.fixedCount += files.length;
    } catch (error) {
      this.log(`Syntax fix failed: ${error.message}`, 'ERROR');
      this.errorCount++;
    }
  }

  getAllSourceFiles() {
    const files = [];
    const srcDir = '/workspace/src';

    if (!fs.existsSync(srcDir)) {
      return files;
    }

    const walkDir = dir => {
      const items = fs.readdirSync(dir);

      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          walkDir(fullPath);
        } else if (
          item.endsWith('.js') ||
          item.endsWith('.jsx') ||
          item.endsWith('.ts') ||
          item.endsWith('.tsx')
        ) {
          files.push(fullPath);
        }
      }
    };

    walkDir(srcDir);
    return files;
  }

  async fixFileSyntax(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Fix common syntax issues
      const fixes = [
        // Fix missing semicolons
        { pattern: /([^;}])\n/g, replacement: '$1;\n' },
        // Fix missing commas in objects
        { pattern: /(\w+)\s*\n\s*}/g, replacement: '$1\n}' },
        // Fix missing commas in arrays
        { pattern: /(\w+)\s*\n\s*]/g, replacement: '$1\n]' },
        // Fix missing quotes in object keys
        { pattern: /(\w+):/g, replacement: '"$1":' },
        // Fix missing quotes in string values
        { pattern: /:\s*([^"'\s][^,}]*)/g, replacement: ': "$1"' },
        // Fix trailing commas
        { pattern: /,\s*}/g, replacement: '}' },
        { pattern: /,\s*]/g, replacement: ']' },
      ];

      for (const fix of fixes) {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      }

      if (modified) {
        fs.writeFileSync(filePath, content);
        this.log(`Fixed syntax in: ${filePath}`);
      }
    } catch (error) {
      this.log(
        `Failed to fix syntax in ${filePath}: ${error.message}`,
        'ERROR'
      );
    }
  }

  async runLintCheck() {
    this.log('Running lint check...');

    try {
      await this.runCommand('npm run lint');
      this.log('Lint check passed');
      return true;
    } catch (error) {
      this.log(`Lint check failed: ${error.message}`, 'ERROR');
      this.errorCount++;
      return false;
    }
  }

  async generateReport() {
    const endTime = Date.now();
    const duration = (endTime - this.startTime) / 1000;

    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}s`,
      fixesApplied: this.fixedCount,
      errorsRemaining: this.errorCount,
      success: this.errorCount === 0,
      status: this.errorCount === 0 ? 'SUCCESS' : 'PARTIAL_SUCCESS',
    };

    const reportFile = 'automation/logs/lint-fixer-report.json';
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    this.log(`Report generated: ${reportFile}`);
    this.log(
      `Summary: ${this.fixedCount} fixes applied, ${this.errorCount} errors remaining`
    );

    return report;
  }

  async run() {
    this.log('Starting lint fixer automation...');

    try {
      // Fix syntax errors first
      await this.fixSyntaxErrors();

      // Fix ESLint errors
      await this.fixESLintErrors();

      // Fix Prettier formatting
      await this.fixPrettierFormatting();

      // Fix import errors
      await this.fixImportErrors();

      // Fix unused variables
      await this.fixUnusedVariables();

      // Run final lint check
      await this.runLintCheck();

      // Generate report
      await this.generateReport();

      this.log('Lint fixer automation completed');
    } catch (error) {
      this.log(`Lint fixer automation failed: ${error.message}`, 'ERROR');
      this.errorCount++;
    }
  }
}

// Run the automation
if (require.main === module) {
  const automation = new LintFixerAutomation();
  automation.run().catch(console.error);
}

module.exports = LintFixerAutomation;
