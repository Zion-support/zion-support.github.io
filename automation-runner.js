const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AutomationRunner {
  constructor() {
    this.results = {
      tests: { passed: 0, failed: 0, errors: [] },
      builds: { success: false, errors: [] },
      linting: { success: false, errors: [] },
      security: { issues: [], fixed: 0 },
      improvements: []
    };
    this.startTime = Date.now();
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description, timeout = 30000) {
    this.log(`Running: ${description}`, 'PROGRESS');
    try {
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        timeout: timeout,
        cwd: process.cwd()
      });
      this.log(`${description} completed successfully`, 'SUCCESS');
      return { success: true, output: result };
    } catch(error) { 
      this.log(`${description} failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message, output: error.stdout || error.stderr };
    }
  }

  async runTests() { 
    this.log('Starting test suite...', 'PROGRESS');
    
    // Run Jest tests
    const testResult = await this.runCommand('npm test -- --passWithNoTests', 'Jest tests', 60000);
    if (testResult.success) {
      this.results.tests.passed++;
    } else {
      this.results.tests.failed++;
      this.results.tests.errors.push(testResult.error);
    }
    
    return testResult;
  }

  async runBuild() {
    this.log('Starting build process...', 'PROGRESS');
    
    const buildResult = await this.runCommand('npm run build', 'Build process', 120000);
    this.results.builds.success = buildResult.success;
    if (!buildResult.success) {
      this.results.builds.errors.push(buildResult.error);
    }
    
    return buildResult;
  }

  async runLinting() {
    this.log('Starting linting process...', 'PROGRESS');
    
    const lintResult = await this.runCommand('npm run lint', 'Linting process', 60000);
    this.results.linting.success = lintResult.success;
    if (!lintResult.success) {
      this.results.linting.errors.push(lintResult.error);
    }
    
    return lintResult;
  }

  async runSecurityAudit() {
    this.log('Starting security audit...', 'PROGRESS');
    
    const securityResult = await this.runCommand('npm audit', 'Security audit', 30000);
    if (!securityResult.success) {
      this.results.security.issues.push(securityResult.error);
    }
    
    return securityResult;
  }

  async runAll() {
    this.log('Starting comprehensive automation...', 'PROGRESS');
    
    try {
      // Run all processes
      await this.runTests();
      await this.runBuild();
      await this.runLinting();
      await this.runSecurityAudit();
      
      const endTime = Date.now();
      const duration = endTime - this.startTime;
      
      this.log(`Automation completed in ${duration}ms`, 'SUCCESS');
      this.generateReport();
      
    } catch (error) {
      this.log(`Automation failed: ${error.message}`, 'ERROR');
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      results: this.results
    };
    
    const reportPath = path.join(process.cwd(), 'automation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`Report generated: ${reportPath}`, 'SUCCESS');
  }
}

// Run if called directly
if (require.main === module) {
  const runner = new AutomationRunner();
  runner.runAll().catch(console.error);
}

module.exports = AutomationRunner;