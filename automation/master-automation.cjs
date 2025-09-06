const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class MasterAutomation {
  constructor() {
    this.logFile = path.join(__dirname, "logs", "master-automation.log");
    this.pm2Processes = ["error-monitor", "lint-fixer", "build-monitor", "git-automation"];
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
    // Write to log file
    const logFile = path.join(this.logsDir, 'master-automation.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }
  async runCommand(command, description) {
    try {
      const { stdout, stderr } = await execAsync(command, { 
        cwd: process.cwd(), 
        timeout: 30000, 
        ...options 
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'error');
      return { success: false, error: error.message };
    }
  }
  async runBuildProcess() {
    this.log('🚀 Starting build process...');
    const steps = [
      { command: 'npm install', description: 'Installing dependencies' },
      { command: 'npm run build', description: 'Building application' },
      { command: 'npm run test:smoke', description: 'Running smoke tests' },
    ];
    const results = [];
    for (const step of steps) {
      const result = await this.runCommand(step.command, step.description);
      results.push({ ...step, result });
      if (!result.success) {
        this.log(`❌ Build process failed at: ${step.description}`, 'error');
        return { success: false, results };
      }
    } else {
      this.log("Failed to get PM2 process list");
      return [];
    }
  }
  async runQualityChecks() {
    this.log('🔍 Running quality checks...');
    const checks = [
      { command: 'npm run lint', description: 'Linting check' },
      { command: 'npm run type-check', description: 'TypeScript type check' },
    ];
    const results = [];
    for (const check of checks) {
      const result = await this.runCommand(check.command, check.description);
      results.push({ ...check, result });
    }
  }
  async generateReport() {
    this.log("Generating automation report.");
    const report = {
      timestamp: new Date().toISOString(),
      processes: await this.monitorProcesses(),
      logs: {
        errorMonitor: await this.getPM2Logs("error-monitor", 20),
        lintFixer: await this.getPM2Logs("lint-fixer", 20),
        buildMonitor: await this.getPM2Logs("build-monitor", 20),
        gitAutomation: await this.getPM2Logs("git-automation", 20)
      }
    };
    // Calculate summary
    if (report.build.success) report.summary.successfulScripts++;
    else report.summary.failedScripts++;
    if (report.quality.success) report.summary.successfulScripts++;
    else report.summary.failedScripts++;
    if (report.automation.success) report.summary.successfulScripts++;
    else report.summary.failedScripts++;
    // Save report
    const reportFile = path.join(
      this.logsDir,
      `automation-report-${Date.now()}.json`
    );
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Report saved to ${reportFile}`);
    return report;
  }
  async start() {
    this.log('🎯 Starting Master Automation System...');
    const report = await this.generateReport();
    this.log('🏁 Master Automation completed');
    return report;
  }
  async status() {
    this.log('📊 Checking automation status...');
    const status = {
      timestamp: new Date().toISOString(),
      buildStatus: 'unknown',
      gitStatus: 'unknown',
      dependenciesStatus: 'unknown',
    };
    // Check build status
    try {
      const buildResult = await this.runCommand('npm run build', 'Build check');
      status.buildStatus = buildResult.success ? 'healthy' : 'failed';
    } catch (_error) {
      status.buildStatus = 'error';
    }
    // Check git status
    try {
      const gitResult = await this.runCommand(
        'git status --porcelain',
        'Git status check'
      );
      status.gitStatus = gitResult.success ? 'clean' : 'dirty';
    } catch (_error) {
      status.gitStatus = 'error';
    }
    // Check dependencies
    try {
      const depsResult = await this.runCommand(
        'npm list --depth=0',
        'Dependencies check'
      );
      status.dependenciesStatus = depsResult.success ? 'installed' : 'missing';
    } catch (_error) {
      status.dependenciesStatus = 'error';
    }
    this.log('📊 Status check completed');
    return status;
  }
}
// CLI interface
if (require.main === module) {
  const automation = new MasterAutomation();
  const command = process.argv[2];
  switch (command) {
    case 'start':
      automation
        .start()
        .then(report => {
          console.log('Automation completed:', report.summary);
          process.exit(0);
        })
        .catch(error => {
          console.error('Automation failed:', error);
          process.exit(1);
        });
      break;
    case 'status':
      automation
        .status()
        .then(status => {
          console.log('Status:', status);
          process.exit(0);
        })
        .catch(error => {
          console.error('Status check failed:', error);
          process.exit(1);
        });
      break;
    default: console.log('Usage: node master-automation.cjs [start|status]'), process.exit(1),
  }
}
module.exports = MasterAutomation;
module.exports = MasterAutomation;