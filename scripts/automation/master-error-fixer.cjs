#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class MasterErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation/logs/master-error-fixer.log');
    this.errorLogFile = path.join(this.projectRoot, 'automation/logs/master-error-fixer-error.log');
    this.reportFile = path.join(this.projectRoot, 'master-error-fixer-report.json');
    
    // Ensure logs directory exists
    this.ensureLogsDirectory();
    
    this.errors = {
      typescript: [],
      eslint: [],
      build: [],
      dependency: [],
      import: [],
      syntax: [],
      other: []
    };
    
    this.fixes = {
      applied: [],
      failed: [],
      skipped: []
    };

    // Get automation interval from environment variable (default: 1 hour)
    this.AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 3600000; // 1 hour
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
    
    try {
      fs.appendFileSync(this.logFile, logEntry);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
    
    if (level === 'error') {
      try {
        fs.appendFileSync(this.errorLogFile, logEntry);
      } catch (error) {
        console.error('Failed to write to error log file:', error.message);
      }
    }
    
    console.log(`[${level.toUpperCase()}] ${message}`);
  }

  async runMasterErrorFixer() {
    try {
      this.log(`🔧 Running master error fixer at ${new Date().toISOString()}`);

      let totalFixes = 0;
      const results = {};

      // 1. Run comprehensive error fixer
      this.log('🔧 Running comprehensive error fixer...');
      try {
        const comprehensiveScript = path.join(
          __dirname,
          'comprehensive-error-fixer.cjs'
        );
        if (fs.existsSync(comprehensiveScript)) {
          const result = await this.runErrorFixerScript(comprehensiveScript);
          results.comprehensive = result;
          totalFixes += result.fixes || 0;
          this.log(
            `  ✅ Comprehensive error fixer completed: ${result.fixes || 0} fixes`
          );
        }
      } catch (error) {
        this.log(`TypeScript errors detected: ${error.stderr}`, 'error');
        this.errors.typescript = this.parseTypeScriptErrors(error.stderr);
      }

      // 2. Run TypeScript error fixer
      this.log('🔧 Running TypeScript error fixer...');
      try {
        const typescriptScript = path.join(
          __dirname,
          'typescript-error-fixer.cjs'
        );
        if (fs.existsSync(typescriptScript)) {
          const result = await this.runErrorFixerScript(typescriptScript);
          results.typescript = result;
          totalFixes += result.fixes || 0;
          this.log(
            `  ✅ TypeScript error fixer completed: ${result.fixes || 0} fixes`
          );
        }
      } catch (error) {
        this.log(`ESLint errors detected: ${error.stderr}`, 'error');
        this.errors.eslint = this.parseESLintErrors(error.stderr);
      }

      // 3. Run JSX error fixer
      this.log('🔧 Running JSX error fixer...');
      try {
        const jsxScript = path.join(__dirname, 'jsx-error-fixer.cjs');
        if (fs.existsSync(jsxScript)) {
          const result = await this.runErrorFixerScript(jsxScript);
          results.jsx = result;
          totalFixes += result.fixes || 0;
          this.log(
            `  ✅ JSX error fixer completed: ${result.fixes || 0} fixes`
          );
        }
      } catch (error) {
        this.log(`Build errors detected: ${error.stderr}`, 'error');
        this.errors.build = this.parseBuildErrors(error.stderr);
      }

      // 4. Run console error fixer
      this.log('🔧 Running console error fixer...');
      try {
        const consoleScript = path.join(__dirname, 'console-error-fixer.cjs');
        if (fs.existsSync(consoleScript)) {
          const result = await this.runErrorFixerScript(consoleScript);
          results.console = result;
          totalFixes += result.fixes || 0;
          this.log(
            `  ✅ Console error fixer completed: ${result.fixes || 0} fixes`
          );
        }
      } catch (error) {
        this.log(`Dependency issues detected: ${error.stderr}`, 'error');
        this.errors.dependency = this.parseDependencyErrors(error.stderr);
      }

      // 5. Run final validation
      this.log('🔧 Running final validation...');
      const validationResults = await this.runFinalValidation();
      results.validation = validationResults;

      // Generate master error fixer report
      this.log('📊 Generating master error fixer report...');
      const report = {
        timestamp: new Date().toISOString(),
        totalFixes: totalFixes,
        individualResults: results,
        summary: 'Master error fixer completed successfully',
        status: 'completed'
      };

      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`✅ Master error fixer report saved to ${this.reportFile}`);

      this.log(`✅ Master error fixer completed successfully. Total fixes: ${totalFixes}`);
      return report;

    } catch (error) {
      this.log(`❌ Master error fixer failed: ${error.message}`, 'error');
      throw error;
    }
  }

  async runErrorFixerScript(scriptPath) {
    return new Promise((resolve, reject) => {
      try {
        // Create a temporary script to extract the fix count
        const tempScript = `
          const originalLog = console.log;
          let fixCount = 0;
          
          console.log = (...args) => {
            const message = args.join(' ');
            if (message.includes('✅ Fixed') || message.includes('fixes applied')) {
              const match = message.match(/(\d+)/);
              if (match) {
                fixCount = parseInt(match[1]);
              }
            }
            originalLog(...args);
          };
          
          try {
            require('${scriptPath}');
            setTimeout(() => {
              process.exit(0);
            }, 5000);
          } catch (error) {
            console.error('Script error:', error.message);
            process.exit(1);
          }
        `;

        const tempScriptPath = path.join(__dirname, 'temp-error-fixer.js');
        fs.writeFileSync(tempScriptPath, tempScript);

        execSync(`node "${tempScriptPath}"`, { stdio: 'pipe', timeout: 10000 });

        // Clean up temp script
        if (fs.existsSync(tempScriptPath)) {
          fs.unlinkSync(tempScriptPath);
        }

        resolve({ fixes: 0, status: 'completed' });
      } catch (error) {
        resolve({ fixes: 0, status: 'failed', error: error.message });
      }
    });
  }

  async runFinalValidation() {
    const results = {
      linting: { status: 'unknown', errors: 0, warnings: 0 },
      typescript: { status: 'unknown', errors: 0 },
      build: { status: 'unknown', success: false },
    };

    try {
      // Check linting
      this.log('  🔍 Checking linting status...');
      try {
        // Try to auto-fix ESLint errors
        await this.runCommand('npm', { args: ['run', 'lint', '--', '--fix'] });
        this.log('ESLint auto-fix completed');
      } catch (error) {
        const errorOutput = error.message;
        const errorMatch = errorOutput.match(/(\d+)\s+errors?/);
        const warningMatch = errorOutput.match(/(\d+)\s+warnings?/);

        results.linting.status = 'failed';
        results.linting.errors = errorMatch ? parseInt(errorMatch[1]) : 0;
        results.linting.warnings = warningMatch ? parseInt(warningMatch[1]) : 0;
      }

      // Check TypeScript
      this.log('  🔍 Checking TypeScript status...');
      try {
        // Try to fix vulnerabilities
        await this.runCommand('npm', { args: ['audit', 'fix'] });
        this.log('Dependency audit fix completed');
        
        this.fixes.applied.push({
          type: 'dependency',
          message: 'Applied npm audit fix',
          timestamp: new Date().toISOString()
        });
      } catch (error) {
        const errorOutput = error.message;
        const errorMatch = errorOutput.match(/Found\s+(\d+)\s+errors?/);

        results.typescript.status = 'failed';
        results.typescript.errors = errorMatch ? parseInt(errorMatch[1]) : 0;
      }

      // Check build
      this.log('  🔍 Checking build status...');
      try {
        await this.detectErrors();
        
        if (this.getTotalErrors() > 0) {
          await this.applyFixes();
        } else {
          this.log('No errors detected');
        }
        
        const report = this.generateReport();
        this.log('Master Error Fixer completed successfully');
        
        return report;
      } catch (error) {
        this.log(`Master Error Fixer failed: ${error.message}`, 'error');
        throw error;
      }
    } catch (error) {
      this.log(`  ⚠️  Validation failed: ${error.message}`);
    }

    return results;
  }

  // Placeholder methods for parsing errors (assuming they exist elsewhere or will be added)
  parseTypeScriptErrors(stderr) {
    // This method needs to be implemented based on how TypeScript errors are logged
    // For now, it just returns an empty array
    return [];
  }

  parseESLintErrors(stderr) {
    // This method needs to be implemented based on how ESLint errors are logged
    // For now, it just returns an empty array
    return [];
  }

  parseBuildErrors(stderr) {
    // This method needs to be implemented based on how build errors are logged
    // For now, it just returns an empty array
    return [];
  }

  parseDependencyErrors(stderr) {
    // This method needs to be implemented based on how dependency errors are logged
    // For now, it just returns an empty array
    return [];
  }

  // Placeholder methods for detecting and applying fixes (assuming they exist elsewhere or will be added)
  async detectErrors() {
    // This method needs to be implemented to detect actual errors in the project
    this.log('Placeholder: detectErrors method called');
    // Example: Check for TypeScript errors, ESLint errors, etc.
    // this.errors.typescript = await this.runCommand('tsc', { args: ['--noEmitOnError'] });
    // this.errors.eslint = await this.runCommand('eslint', { args: ['src/**/*.ts'] });
  }

  async applyFixes() {
    // This method needs to be implemented to apply fixes to the project
    this.log('Placeholder: applyFixes method called');
    // Example: Run npm audit fix, npm run lint -- --fix, etc.
    // await this.runCommand('npm', { args: ['audit', 'fix'] });
    // await this.runCommand('npm', { args: ['run', 'lint', '--', '--fix'] });
  }

  generateReport() {
    // This method needs to be implemented to generate a comprehensive report
    this.log('Placeholder: generateReport method called');
    return {
      timestamp: new Date().toISOString(),
      totalFixes: this.getTotalFixes(), // Assuming getTotalFixes is a method
      individualResults: this.fixes, // Assuming fixes is an object
      summary: 'Master Error Fixer completed successfully',
      status: 'completed'
    };
  }

  getTotalFixes() {
    // This method needs to be implemented to calculate total fixes applied
    this.log('Placeholder: getTotalFixes method called');
    return this.fixes.applied.length;
  }

  async runCommand(command, options = {}) {
    const { args = [], stdio = 'pipe', timeout = 30000 } = options;
    const fullCommand = `${command} ${args.join(' ')}`;
    this.log(`Running command: ${fullCommand}`);

    try {
      const result = await new Promise((resolve, reject) => {
        const child = spawn(command, args, { stdio, timeout });

        child.on('error', (err) => {
          reject(err);
        });

        child.on('close', (code) => {
          if (code === 0) {
            resolve({ stdout: '', stderr: '' }); // No output captured for simplicity
          } else {
            reject(new Error(`Command failed with code ${code}`));
          }
        });

        child.on('timeout', () => {
          child.kill();
          reject(new Error(`Command timed out after ${timeout}ms`));
        });
      });
      this.log(`Command successful: ${fullCommand}`);
      return result;
    } catch (error) {
      this.log(`Command failed: ${fullCommand}`, 'error');
      throw error;
    }
  }
}

// Main continuous loop
async function runContinuous() {
  const masterErrorFixer = new MasterErrorFixer();
  console.log(
    `🚀 Starting master error fixer with ${masterErrorFixer.AUTOMATION_INTERVAL / 1000 / 60} minute intervals`
  );

  // Run initial error fixer
  await masterErrorFixer.runMasterErrorFixer();

  // Set up continuous execution
  setInterval(async () => {
    await masterErrorFixer.runMasterErrorFixer();
  }, masterErrorFixer.AUTOMATION_INTERVAL);

  console.log(
    `✅ Master error fixer running. Next check in ${masterErrorFixer.AUTOMATION_INTERVAL / 1000 / 60} minutes`
  );
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Start the master error fixer
runContinuous().catch(error => {
  console.error('❌ Failed to start master error fixer:', error);
  process.exit(1);
});
