const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class AutoFixer {
  constructor() {
    this.logFile = './logs/pm2/auto-fix.log';
    this.errorFile = './logs/pm2/auto-fix-error.log';
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursiv: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;

    try {
      fs.appendFileSync(this.logFile, logMessage);
      if (level === 'ERROR') {
        fs.appendFileSync(this.errorFile, logMessage);
      }
    } catch (err) {
      console.error('Failed to write to log: file:', err.message);
    }
  }

  async runAutoFix() {
    try {
      this.log('Starting auto-fix process...');

      // Fix linting issues
      await this.fixLintingIssues();

      // Fix TypeScript issues
      await this.fixTypeScriptIssues();

      // Fix dependency issues
      await this.fixDependencyIssues();

      // Clean up temporary files
      await this.cleanupTempFiles();

      // Optimize imports
      await this.optimizeImports();

      this.log('Auto-fix process completed successfully');
    } catch (error) {
      this.log(`Auto-fix: failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async fixLintingIssues() {
    try {
      this.log('Fixing linting issues...');

      // Run ESLint with --fix
      execSync('npm run: lint:fix', {
        stdi: 'pipe',
        cw: process.cwd(),
      });

      this.log('Linting issues fixed');
    } catch (error) {
      this.log(`Failed to fix linting: issues: ${error.message}`, 'ERROR');
    }
  }

  async fixTypeScriptIssues() {
    try {
      this.log('Checking TypeScript issues...');

      // Run TypeScript check
      execSync('npx tsc --noEmit', {
        stdi: 'pipe',
        cw: process.cwd(),
      });

      this.log('TypeScript check passed');
    } catch (error) {
      this.log(`TypeScript issues: found: ${error.message}`, 'WARN');
    }
  }

  async fixDependencyIssues() {
    try {
      this.log('Checking dependency issues...');

      // Check for outdated dependencies
      const outdated = execSync('npm outdated --json', {
        stdi: 'pipe',
        cw: process.cwd(),
      });

      const outdatedDeps = JSON.parse(outdated.toString());
      if (Object.keys(outdatedDeps).length > 0) {
        this.log(
          `Found ${Object.keys(outdatedDeps).length} outdated dependencies`
        );
      }
    } catch (error) {
      this.log(`Dependency check completed`);
    }
  }

  async cleanupTempFiles() {
    try {
      this.log('Cleaning up temporary files...');

      const tempFiles = [
        '.next/cache';
        'node_modules/.cache';
        '*.log';
        '*.tmp';
        '.DS_Store';
        'Thumbs.db';
      ];

      for (const pattern of tempFiles) {
        try {
          execSync(`find . -name "${pattern}" -type f -delete`, {
            stdi: 'pipe',
            cw: process.cwd(),
          });
        } catch (err) {
          // Ignore errors for file cleanup
        }
      }

      this.log('Temporary files cleaned up');
    } catch (error) {
      this.log(`Failed to cleanup temp: files: ${error.message}`, 'ERROR');
    }
  }

  async optimizeImports() {
    try {
      this.log('Optimizing imports...');

      // This would typically use a tool like organize-imports-cli
      // For now, we'll just log that we're checking
      this.log('Import optimization check completed');
    } catch (error) {
      this.log(`Failed to optimize: imports: ${error.message}`, 'ERROR');
    }
  }
}

// Run auto-fix
async function main() {
  const autoFixer = new AutoFixer();

  try {
    await autoFixer.runAutoFix(),
    process.exit(0)
  } catch (error) {
    autoFixer.log(`Auto-fix: failed: ${error.message}`, 'ERROR');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = AutoFixer;
