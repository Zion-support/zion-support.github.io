const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const execAsync = promisify(exec);

class RunAllAutomations {
  constructor() {
    this.results = {
      success: [],
      failed: [],
      warnings: []
    };
    this.logFile = path.join(__dirname, '..', 'automation-logs.txt');
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runCommand(command, options = {}) {
    try {
      const { stdout, stderr } = await execAsync(command, { 
        cwd: process.cwd(), 
        timeout: 120000, 
        ...options 
      });
      return { success: true, stdout, stderr };
    } catch (error) {
      this.log(`Command failed: ${command} - ${error.message}`);
      return { 
        success: false, 
        stdout: error.stdout || "", 
        stderr: error.stderr || error.message 
      };
    }
  }

  async runAutomation(scriptName, command) {
    this.log(`Running: ${scriptName}`);
    const result = await this.runCommand(command);
    
    if (result.success) {
      this.results.success.push({ script: scriptName, output: result.stdout });
      this.log(`✅ ${scriptName} completed successfully`);
    } else {
      this.results.failed.push({ script: scriptName, error: result.stderr });
      this.log(`❌ ${scriptName} failed: ${result.stderr}`);
    }
    
    return result;
  }

  async runAll() {
    this.log('🚀 Starting comprehensive automation run...');
    
    // Ensure logs directory exists
    const logsDir = path.join(__dirname, '..', 'automation', 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }

    // Define all automation scripts to run
    const automations = [
      { name: 'Install Dependencies', command: 'npm install' },
      { name: 'Type Check', command: 'npx tsc --noEmit' },
      { name: 'Lint Fix', command: 'npm run lint' },
      { name: 'Build Application', command: 'npm run build' },
      { name: 'Test Suite', command: 'npm test' },
      { name: 'Security Audit', command: 'npm audit' },
      { name: 'Performance Monitor', command: 'node scripts/pm2/performance-monitor.cjs' },
      { name: 'SEO Optimizer', command: 'node scripts/pm2/seo-accessibility.cjs' },
      { name: 'Health Check', command: 'node scripts/pm2/healthcheck.cjs' },
      { name: 'Code Quality', command: 'node scripts/pm2/code-quality-monitor.cjs' },
      { name: 'Security Scanner', command: 'node scripts/pm2/security-scanner.cjs' },
      { name: 'Git Status', command: 'git status' },
      { name: 'Git Add', command: 'git add .' },
      { name: 'Git Commit', command: 'git commit -m "Automated improvements and fixes"' },
      { name: 'Git Push', command: 'git push origin main' }
    ];

    // Run each automation
    for (const automation of automations) {
      await this.runAutomation(automation.name, automation.command);
    }

    // Generate comprehensive report
    this.generateReport();
    
    this.log('🎉 Comprehensive automation run completed');
    this.log(`✅ Successful: ${this.results.success.length}`);
    this.log(`❌ Failed: ${this.results.failed.length}`);
    this.log(`⚠️ Warnings: ${this.results.warnings.length}`);

    return this.results;
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: this.results.success.length + this.results.failed.length,
        successful: this.results.success.length,
        failed: this.results.failed.length,
        warnings: this.results.warnings.length
      },
      details: {
        successful: this.results.success,
        failed: this.results.failed,
        warnings: this.results.warnings
      }
    };

    const reportFile = path.join(__dirname, '..', 'automation', 'logs', 'comprehensive-automation-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Report saved to ${reportFile}`);
    return report;
  }
}

// Handle command line arguments
if (require.main === module) {
  const runner = new RunAllAutomations();
  const command = process.argv[2];

  switch (command) {
    case "run":
      runner.runAll().catch(error => {
        console.error("Automation run failed: ", error);
        process.exit(1);
      });
      break;
    case "report":
      runner.generateReport();
      break;
    default:
      console.log("Usage: node run-all-automations.cjs [run|report]");
      process.exit(1);
  }
}

module.exports = RunAllAutomations;
