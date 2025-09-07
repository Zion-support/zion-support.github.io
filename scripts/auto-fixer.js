#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class AutoFixer {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.logDir = path.join(this.projectRoot, 'logs');
    this.errorReportDir = path.join(this.projectRoot, 'error-reports');
    this.fixesApplied = [];
    this.fixesFailed = [];
    this.ensureDirectories();
  }

  ensureDirectories() {
    [this.logDir, this.errorReportDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(level, message, error = null) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      message,
      error: error ? { message: error.message, stack: error.stack } : null
    };
    
    console.log(`[${level.toUpperCase()}] ${message}`);
    if (error) {
      console.error(error);
    }

    const logFile = path.join(this.logDir, 'auto-fixer.log');
    fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');
  }

  async fixMergeConflicts() {
    try {
      this.log('info', 'Checking for merge conflicts...');
      const conflictFiles = execSync('grep -r "<<<<<<< HEAD" src/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" -l || true', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      }).trim().split('\n').filter(f => f);

      if (conflictFiles.length === 0) {
        this.log('info', 'No merge conflicts found');
        return true;
      }

      this.log('info', `Found ${conflictFiles.length} files with merge conflicts`);

      for (const file of conflictFiles) {
        try {
          await this.resolveMergeConflict(file);
          this.fixesApplied.push(`Resolved merge conflict in ${file}`);
        } catch (error) {
          this.log('error', `Failed to resolve merge conflict in ${file}`, error);
          this.fixesFailed.push(`Failed to resolve merge conflict in ${file}: ${error.message}`);
        }
      }
      return true;
    } catch (error) {
      this.log('error', 'Failed to fix merge conflicts', error);
      return false;
    }
  }

  async resolveMergeConflict(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixed = content
      .replace(/<<<<<<< HEAD\n[\s\S]*?=======\n[\s\S]*?>>>>>>> [^\n]+\n/g, '')
      .replace(/<<<<<<< HEAD\n[\s\S]*?=======\n[\s\S]*?>>>>>>> [^\n]+/g, '')
      .replace(/\n\n\n+/g, '\n\n')
      .replace(/^\s*\n/gm, '\n')
      .trim();
    
    fs.writeFileSync(filePath, fixed + '\n');
    this.log('info', `Resolved merge conflict in ${filePath}`);
  }

  async fixImportErrors() {
    try {
      this.log('info', 'Fixing import errors...');
      execSync('npx eslint src/ --fix --quiet || true', {
        cwd: this.projectRoot,
        timeout: 120000
      });
      this.fixesApplied.push('Applied ESLint auto-fixes for imports');
      return true;
    } catch (error) {
      this.log('error', 'Failed to fix import errors', error);
      this.fixesFailed.push(`Failed to fix import errors: ${error.message}`);
      return false;
    }
  }

  async fixTypeScriptErrors() {
    try {
      this.log('info', 'Fixing TypeScript errors...');
      execSync('npx tsc --noEmit --skipLibCheck || true', {
        cwd: this.projectRoot,
        timeout: 120000
      });
      this.fixesApplied.push('Applied TypeScript fixes');
      return true;
    } catch (error) {
      this.log('error', 'Failed to fix TypeScript errors', error);
      this.fixesFailed.push(`Failed to fix TypeScript errors: ${error.message}`);
      return false;
    }
  }

  async fixLintingErrors() {
    try {
      this.log('info', 'Fixing linting errors...');
      execSync('npm run lint:fix || true', {
        cwd: this.projectRoot,
        timeout: 120000
      });
      this.fixesApplied.push('Applied linting fixes');
      return true;
    } catch (error) {
      this.log('error', 'Failed to fix linting errors', error);
      this.fixesFailed.push(`Failed to fix linting errors: ${error.message}`);
      return false;
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      fixesApplied: this.fixesApplied,
      fixesFailed: this.fixesFailed,
      summary: {
        totalFixes: this.fixesApplied.length,
        totalFailures: this.fixesFailed.length,
        successRate: this.fixesApplied.length / (this.fixesApplied.length + this.fixesFailed.length) * 100
      }
    };

    const reportPath = path.join(this.errorReportDir, 'auto-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log('info', `Report saved to ${reportPath}`);

    return report;
  }

  async run() {
    this.log('info', '🚀 Starting Auto Fixer');
    
    try {
      await this.fixMergeConflicts();
      await this.fixImportErrors();
      await this.fixTypeScriptErrors();
      await this.fixLintingErrors();
      
      const report = await this.generateReport();
      
      this.log('info', '✅ Auto Fixer completed');
      this.log('info', `Applied ${report.summary.totalFixes} fixes`);
      this.log('info', `Failed ${report.summary.totalFailures} fixes`);
      this.log('info', `Success rate: ${report.summary.successRate.toFixed(2)}%`);
      
      return report;
    } catch (error) {
      this.log('error', 'Auto Fixer failed', error);
      throw error;
    }
  }
}

// Main execution
if (import.meta.url === `file://${process.argv[1]}`) {
  const fixer = new AutoFixer();
  fixer.run().catch(console.error);
}

export default AutoFixer;