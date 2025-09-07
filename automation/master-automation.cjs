const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const { promisify } = require("util");

const execAsync = promisify(exec);

class MasterAutomation {
  constructor() {
    this.logsDir = path.join(__dirname, '../logs');
    this.ensureLogsDir();
    this.status = {
      running: false,
      lastRun: null,
      errors: [],
      successes: []
    };
  }

  ensureLogsDir() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logsDir, 'master-automation.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async runScript(scriptPath, args = []) {
    try {
      this.log(`Running script: ${scriptPath} ${args.join(' ')}`);
      const { stdout, stderr } = await execAsync(`node ${scriptPath} ${args.join(' ')}`);
      
      if (stdout) {
        this.log(`Output: ${stdout}`, 'info');
      }
      if (stderr) {
        this.log(`Error: ${stderr}`, 'warn');
      }
      
      return { success: true, stdout, stderr };
    } catch (error) {
      this.log(`Failed to run ${scriptPath}: ${error.message}`, 'error');
      this.status.errors.push({
        script: scriptPath,
        error: error.message,
        timestamp: new Date().toISOString()
      });
      return { success: false, error: error.message };
    }
  }

  async start() {
    this.log('Starting Master Automation System...');
    this.status.running = true;
    this.status.lastRun = new Date().toISOString();

    const scripts = [
      'comprehensive-automation-runner.cjs',
      'comprehensive-syntax-fixer.cjs',
      'comprehensive-test-runner.cjs',
      'performance-optimizer.cjs',
      'security-scanner.cjs',
      'code-quality-monitor.cjs'
    ];

    for (const script of scripts) {
      const scriptPath = path.join(__dirname, script);
      if (fs.existsSync(scriptPath)) {
        const result = await this.runScript(scriptPath);
        if (result.success) {
          this.status.successes.push({
            script: script,
            timestamp: new Date().toISOString()
          });
        }
      } else {
        this.log(`Script not found: ${scriptPath}`, 'warn');
      }
    }

    this.status.running = false;
    this.log('Master Automation System completed');
    return this.status;
  }

  async stop() {
    this.log('Stopping Master Automation System...');
    this.status.running = false;
    return this.status;
  }

  getStatus() {
    return this.status;
  }

  async report() {
    const report = {
      timestamp: new Date().toISOString(),
      status: this.status,
      summary: {
        totalScripts: this.status.successes.length + this.status.errors.length,
        successful: this.status.successes.length,
        failed: this.status.errors.length,
        successRate: this.status.successes.length / (this.status.successes.length + this.status.errors.length) * 100
      }
    };

    const reportFile = path.join(this.logsDir, 'master-automation-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportFile}`);
    return report;
  }
}

// CLI Interface
if (require.main === module) {
  const automation = new MasterAutomation();
  const command = process.argv[2];

  switch (command) {
    case 'start':
      automation.start().then(() => {
        console.log('Automation started successfully');
        process.exit(0);
      }).catch(error => {
        console.error('Failed to start automation:', error);
        process.exit(1);
      });
      break;
    case 'stop':
      automation.stop().then(() => {
        console.log('Automation stopped');
        process.exit(0);
      });
      break;
    case 'status':
      console.log(JSON.stringify(automation.getStatus(), null, 2));
      break;
    case 'report':
      automation.report().then(report => {
        console.log(JSON.stringify(report, null, 2));
        process.exit(0);
      });
      break;
    default:
      console.log('Usage: node master-automation.cjs [start|stop|status|report]');
      process.exit(1);
  }
}

module.exports = MasterAutomation;