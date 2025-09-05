const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class EnhancedAutomationSuite {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'enhanced-automation.log');
    this.ensureLogDirectory();
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

  async runLinting() {
    this.log('Running enhanced linting...');
    const result = await this.runCommand('npm run lint:fix', 'Lint Fix');
    if (result.success) {
      this.log('Linting completed successfully');
    } else {
      this.log('Linting failed, but continuing...');
    }
    return result;
  }

  async runBuild() {
    this.log('Running build process...');
    const result = await this.runCommand('npm run build', 'Build');
    if (result.success) {
      this.log('Build completed successfully');
    } else {
      this.log('Build failed');
    }
    return result;
  }

  async runTests() {
    this.log('Running test suite...');
    const result = await this.runCommand('npm run test -- --config jest.config.js --passWithNoTests', 'Tests');
    if (result.success) {
      this.log('Tests completed successfully');
    } else {
      this.log('Tests completed with issues');
    }
    return result;
  }

  async runSecurityAudit() {
    this.log('Running security audit...');
    const result = await this.runCommand('npm audit --audit-level moderate', 'Security Audit');
    if (result.success) {
      this.log('Security audit completed');
    } else {
      this.log('Security audit found issues');
    }
    return result;
  }

  async runDependencyCheck() {
    this.log('Checking dependencies...');
    const result = await this.runCommand('npm outdated', 'Dependency Check');
    if (result.success) {
      this.log('Dependency check completed');
    } else {
      this.log('Dependency check completed with outdated packages');
    }
    return result;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      build: await this.runBuild(),
      linting: await this.runLinting(),
      tests: await this.runTests(),
      security: await this.runSecurityAudit(),
      dependencies: await this.runDependencyCheck(),
    };

    const reportFile = path.join(__dirname, 'logs', 'automation-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Report generated: ${reportFile}`);
    return report;
  }

  async runFullSuite() {
    this.log('Starting Enhanced Automation Suite...');
    
    const report = await this.generateReport();
    
    const successCount = Object.values(report).filter(r => r.success).length;
    const totalCount = Object.keys(report).length;
    
    this.log(`Automation Suite completed: ${successCount}/${totalCount} tasks successful`);
    
    return report;
  }
}

// Run the automation suite
if (require.main === module) {
  const suite = new EnhancedAutomationSuite();
  suite.runFullSuite().catch(console.error);
}

module.exports = EnhancedAutomationSuite;