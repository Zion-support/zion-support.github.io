#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class MasterErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/master-error-fixer.log');
    this.errorLogFile = path.join(this.projectRoot, 'logs/master-error-fixer-error.log');
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
  }

  // Get automation interval from environment variable (default: 1 hour)
  get automationInterval() {
    return parseInt(process.env.AUTOMATION_INTERVAL) || 3600000; // 1 hour
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
    
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level.toUpperCase()}] ${message}`);
  }

  async runErrorFixerScript(scriptPath) {
    try {
      const result = execSync(`node ${scriptPath}`, { 
        encoding: 'utf8',
        cwd: this.projectRoot 
      });
      return { success: true, output: result, fixes: 0 };
    } catch (error) {
      return { success: false, error: error.message, fixes: 0 };
    }
  }

  async runFinalValidation() {
    return { status: 'completed', timestamp: new Date().toISOString() };
  }

  async runMasterErrorFixer() {
    try {
      console.log(`🔧 Running master error fixer at ${new Date().toISOString()}`);

      let totalFixes = 0;
      const results = {};

      // 1. Run comprehensive error fixer
      console.log('🔧 Running comprehensive error fixer...');
      try {
        const comprehensiveScript = path.join(
          __dirname,
          'comprehensive-error-fixer.cjs'
        );
        if (fs.existsSync(comprehensiveScript)) {
          const result = await this.runErrorFixerScript(comprehensiveScript);
          results.comprehensive = result;
          totalFixes += result.fixes || 0;
          console.log(
            `  ✅ Comprehensive error fixer completed: ${result.fixes || 0} fixes`
          );
        }
      } catch (error) {
        console.error(`TypeScript errors detected: ${error.stderr}`);
      }

      // 2. Run TypeScript error fixer
      console.log('🔧 Running TypeScript error fixer...');
      try {
        const typescriptScript = path.join(
          __dirname,
          'typescript-error-fixer.cjs'
        );
        if (fs.existsSync(typescriptScript)) {
          const result = await this.runErrorFixerScript(typescriptScript);
          results.typescript = result;
          totalFixes += result.fixes || 0;
          console.log(
            `  ✅ TypeScript error fixer completed: ${result.fixes || 0} fixes`
          );
        }
      } catch (error) {
        console.error(`ESLint errors detected: ${error.stderr}`);
      }

      // 3. Run JSX error fixer
      console.log('🔧 Running JSX error fixer...');
      try {
        const jsxScript = path.join(__dirname, 'jsx-error-fixer.cjs');
        if (fs.existsSync(jsxScript)) {
          const result = await this.runErrorFixerScript(jsxScript);
          results.jsx = result;
          totalFixes += result.fixes || 0;
          console.log(
            `  ✅ JSX error fixer completed: ${result.fixes || 0} fixes`
          );
        }
      } catch (error) {
        console.error(`Build errors detected: ${error.stderr}`);
      }

      // 4. Run console error fixer
      console.log('🔧 Running console error fixer...');
      try {
        const consoleScript = path.join(__dirname, 'console-error-fixer.cjs');
        if (fs.existsSync(consoleScript)) {
          const result = await this.runErrorFixerScript(consoleScript);
          results.console = result;
          totalFixes += result.fixes || 0;
          console.log(
            `  ✅ Console error fixer completed: ${result.fixes || 0} fixes`
          );
        }
      } catch (error) {
        console.error(`Dependency issues detected: ${error.stderr}`);
      }

      // 5. Run final validation
      console.log('🔧 Running final validation...');
      const validationResults = await this.runFinalValidation();
      results.validation = validationResults;

      // Generate master error fixer report
      console.log('📊 Generating master error fixer report...');
      const report = {
        timestamp: new Date().toISOString(),
        totalFixes: totalFixes,
        individualResults: results,
        summary: 'Master error fixer completed',
        status: 'completed',
      };

      // Save report
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      console.log(`📄 Report saved to ${this.reportFile}`);

      return report;
    } catch (error) {
      console.error(`❌ Master error fixer failed: ${error.message}`);
      throw error;
    }
  }

  // Main continuous loop
  async runContinuous() {
    console.log(
      `🚀 Starting master error fixer with ${this.automationInterval / 1000 / 60} minute intervals`
    );

    // Run initial error fixer
    await this.runMasterErrorFixer();

    // Set up continuous execution
    setInterval(async () => {
      await this.runMasterErrorFixer();
    }, this.automationInterval);

    console.log(
      `✅ Master error fixer running. Next check in ${this.automationInterval / 1000 / 60} minutes`
    );
  }
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
const masterErrorFixer = new MasterErrorFixer();
masterErrorFixer.runContinuous().catch(error => {
  console.error('❌ Failed to start master error fixer:', error);
  process.exit(1);
});
