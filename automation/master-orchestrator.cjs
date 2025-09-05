const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MasterOrchestrator {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'master-orchestrator.log');
    this.ensureLogDirectory();
    this.automationModules = [
      './enhanced-automation-suite.cjs',
      './performance-optimizer.cjs',
      './security-scanner.cjs'
    ];
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runCommand(command, description) {
    try {
      this.log(`Starting: ${description}`);
      const result = execSync(command, { 
        encoding: 'utf8', 
        cwd: '/workspace',
        stdio: 'pipe'
      });
      this.log(`Completed: ${description}`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`Error in ${description}: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runBuildAndTest() {
    this.log('Running build and test suite...');
    
    const buildResult = await this.runCommand('npm run build', 'Build');
    const testResult = await this.runCommand('npm run test -- --passWithNoTests', 'Tests');
    const lintResult = await this.runCommand('npm run lint', 'Linting');
    
    return {
      build: buildResult,
      test: testResult,
      lint: lintResult
    };
  }

  async runAutomationModules() {
    this.log('Running automation modules...');
    const results = {};
    
    for (const module of this.automationModules) {
      try {
        this.log(`Running module: ${module}`);
        const result = execSync(`node ${module}`, { 
          encoding: 'utf8', 
          cwd: '/workspace',
          stdio: 'pipe'
        });
        results[module] = { success: true, output: result };
        this.log(`Module ${module} completed successfully`);
      } catch (error) {
        results[module] = { success: false, error: error.message };
        this.log(`Module ${module} failed: ${error.message}`);
      }
    }
    
    return results;
  }

  async runPM2Status() {
    this.log('Checking PM2 status...');
    try {
      const result = execSync('pm2 status', { 
        encoding: 'utf8', 
        cwd: '/workspace',
        stdio: 'pipe'
      });
      this.log('PM2 status check completed');
      return { success: true, output: result };
    } catch (error) {
      this.log(`PM2 status check failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async generateComprehensiveReport() {
    this.log('Generating comprehensive automation report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      buildAndTest: await this.runBuildAndTest(),
      automationModules: await this.runAutomationModules(),
      pm2Status: await this.runPM2Status(),
      summary: {
        totalTasks: 0,
        successfulTasks: 0,
        failedTasks: 0
      }
    };

    // Calculate summary
    const allResults = [
      ...Object.values(report.buildAndTest),
      ...Object.values(report.automationModules),
      report.pm2Status
    ];
    
    report.summary.totalTasks = allResults.length;
    report.summary.successfulTasks = allResults.filter(r => r.success).length;
    report.summary.failedTasks = allResults.filter(r => !r.success).length;

    const reportFile = path.join(__dirname, 'logs', 'comprehensive-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Comprehensive report generated: ${reportFile}`);
    
    this.log(`Automation Summary: ${report.summary.successfulTasks}/${report.summary.totalTasks} tasks successful`);
    
    return report;
  }

  async runFullAutomation() {
    this.log('Starting Master Automation Orchestrator...');
    
    const report = await this.generateComprehensiveReport();
    
    this.log('Master Automation Orchestrator completed');
    
    return report;
  }
}

// Run the master orchestrator
if (require.main === module) {
  const orchestrator = new MasterOrchestrator();
  orchestrator.runFullAutomation().catch(console.error);
}

module.exports = MasterOrchestrator;