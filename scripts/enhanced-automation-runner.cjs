const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class EnhancedAutomationRunner {
  constructor() {
    this.logFile = path.join(__dirname, '..', 'automation', 'logs', 'enhanced-automation.log');
    this.results = {
      success: [],
      failed: [],
      warnings: []
    };
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
        timeout: 60000, 
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

  async runAutomationScript(scriptName, command) {
    this.log(`Running automation: ${scriptName}`);
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

  async runAllAutomations() {
    this.log('Starting enhanced automation runner...');
    
    // Ensure logs directory exists
    const logsDir = path.join(__dirname, '..', 'automation', 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }

    // Define automation scripts to run
    const automations = [
      { name: 'Type Check', command: 'npm run type-check' },
      { name: 'Lint Fix', command: 'npm run lint:fix' },
      { name: 'Build', command: 'npm run build' },
      { name: 'Test Smoke', command: 'npm run test:smoke' },
      { name: 'Security Audit', command: 'npm run security:audit' },
      { name: 'Performance Monitor', command: 'npm run perf:monitor' },
      { name: 'SEO Optimizer', command: 'npm run automation:seo' },
      { name: 'Health Check', command: 'npm run automation:health' }
    ];

    // Run each automation
    for (const automation of automations) {
      await this.runAutomationScript(automation.name, automation.command);
    }

    // Generate comprehensive report
    this.generateReport();
    
    this.log('Enhanced automation runner completed');
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

    const reportFile = path.join(__dirname, '..', 'automation', 'logs', 'enhanced-automation-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Report saved to ${reportFile}`);
    return report;
  }
}

// Handle command line arguments
if (require.main === module) {
  const runner = new EnhancedAutomationRunner();
  const command = process.argv[2];

  switch (command) {
    case "run":
      runner.runAllAutomations().catch(error => {
        console.error("Automation runner failed: ", error);
        process.exit(1);
      });
      break;
    case "report":
      runner.generateReport();
      break;
    default:
      console.log("Usage: node enhanced-automation-runner.cjs [run|report]");
      process.exit(1);
  }
}

module.exports = EnhancedAutomationRunner;