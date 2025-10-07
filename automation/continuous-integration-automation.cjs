const fs = require('fs');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class ContinuousIntegrationAutomation {
  constructor() {
    this.reportsDir = './automation-reports';
    this.projectRoot = process.cwd();
    this.ciResults = {
      build: { success: false, duration: 0, errors: [] },
      tests: { success: false, duration: 0, coverage: 0, errors: [] },
      linting: { success: false, duration: 0, errors: [] },
      security: { success: false, duration: 0, vulnerabilities: 0 },
      performance: { success: false, duration: 0, score: 0 }
    };
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async runCommand(command, description, timeout = 60000) {
    this.log(`🚀 Starting: ${description}`);
    const startTime = Date.now();
    
    try {
      const result = await execAsync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: timeout
      });
      
      const duration = Date.now() - startTime;
      this.log(`✅ Completed: ${description} (${duration}ms)`);
      return { success: true, output: result, duration };
    } catch (error) {
      const duration = Date.now() - startTime;
      this.log(`❌ Failed: ${description} - ${error.message} (${duration}ms)`);
      return { success: false, error: error.message, duration };
    }
  }

  async runBuild() {
    this.log('🏗️ Running build process...');
    
    const result = await this.runCommand('npm run build', 'Build application', 120000);
    this.ciResults.build = {
      success: result.success,
      duration: result.duration,
      errors: result.success ? [] : [result.error]
    };
    
    return result;
  }

  async runTests() {
    this.log('🧪 Running test suite...');
    
    const testResult = await this.runCommand('npm run test:smoke', 'Smoke tests', 60000);
    const coverageResult = await this.runCommand('npm run test:coverage', 'Test coverage', 120000);
    
    this.ciResults.tests = {
      success: testResult.success,
      duration: testResult.duration,
      coverage: coverageResult.success ? this.extractCoverage(coverageResult.output.stdout) : 0,
      errors: testResult.success ? [] : [testResult.error]
    };
    
    return testResult;
  }

  async runLinting() {
    this.log('🔍 Running linting...');
    
    const result = await this.runCommand('npm run lint', 'Lint check', 60000);
    this.ciResults.linting = {
      success: result.success,
      duration: result.duration,
      errors: result.success ? [] : [result.error]
    };
    
    return result;
  }

  async runSecurityAudit() {
    this.log('🔒 Running security audit...');
    
    const result = await this.runCommand('npm audit --audit-level=moderate', 'Security audit', 60000);
    const vulnerabilities = this.extractVulnerabilities(result.output?.stdout || '');
    
    this.ciResults.security = {
      success: vulnerabilities === 0,
      duration: result.duration,
      vulnerabilities: vulnerabilities
    };
    
    return result;
  }

  async runPerformanceCheck() {
    this.log('⚡ Running performance check...');
    
    // Start the app in background for performance testing
    const startApp = await this.runCommand('npm run start &', 'Start application', 10000);
    
    if (startApp.success) {
      // Wait for app to start
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Run lighthouse or performance test
      const perfResult = await this.runCommand('npm run perf:lighthouse', 'Performance audit', 120000);
      
      this.ciResults.performance = {
        success: perfResult.success,
        duration: perfResult.duration,
        score: perfResult.success ? this.extractPerformanceScore(perfResult.output.stdout) : 0
      };
      
      // Stop the app
      await this.runCommand('pkill -f "npm run start"', 'Stop application', 5000);
    }
    
    return this.ciResults.performance;
  }

  extractCoverage(output) {
    const coverageMatch = output.match(/(\d+(?:\.\d+)?)%/);
    return coverageMatch ? parseFloat(coverageMatch[1]) : 0;
  }

  extractVulnerabilities(output) {
    const vulnMatch = output.match(/(\d+) vulnerabilities/);
    return vulnMatch ? parseInt(vulnMatch[1]) : 0;
  }

  extractPerformanceScore(output) {
    const scoreMatch = output.match(/Performance Score: (\d+)/);
    return scoreMatch ? parseInt(scoreMatch[1]) : 0;
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      ciResults: this.ciResults,
      summary: {
        overallSuccess: Object.values(this.ciResults).every(result => result.success),
        totalDuration: Object.values(this.ciResults).reduce((sum, result) => sum + result.duration, 0),
        totalErrors: Object.values(this.ciResults).reduce((sum, result) => sum + result.errors.length, 0)
      },
      recommendations: this.generateRecommendations()
    };

    const reportPath = `${this.reportsDir}/ci-automation-report.json`;
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 CI Report saved to: ${reportPath}`);
    
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (!this.ciResults.build.success) {
      recommendations.push('Fix build errors to ensure application compiles correctly');
    }
    
    if (!this.ciResults.tests.success) {
      recommendations.push('Fix failing tests to ensure code quality');
    }
    
    if (this.ciResults.tests.coverage < 80) {
      recommendations.push('Increase test coverage to at least 80%');
    }
    
    if (!this.ciResults.linting.success) {
      recommendations.push('Fix linting errors to maintain code standards');
    }
    
    if (this.ciResults.security.vulnerabilities > 0) {
      recommendations.push(`Address ${this.ciResults.security.vulnerabilities} security vulnerabilities`);
    }
    
    if (this.ciResults.performance.score < 90) {
      recommendations.push('Optimize performance to achieve score above 90');
    }
    
    return recommendations;
  }

  async run() {
    this.log('🚀 Starting Continuous Integration Automation...');
    this.ensureDirectories();
    
    try {
      // Run all CI checks
      await this.runBuild();
      await this.runTests();
      await this.runLinting();
      await this.runSecurityAudit();
      await this.runPerformanceCheck();
      
      // Generate comprehensive report
      const report = this.generateReport();
      
      this.log('✅ Continuous Integration Automation completed!');
      this.log(`📊 Overall Success: ${report.summary.overallSuccess ? '✅' : '❌'}`);
      this.log(`⏱️ Total Duration: ${report.summary.totalDuration}ms`);
      this.log(`❌ Total Errors: ${report.summary.totalErrors}`);
      
      if (report.recommendations.length > 0) {
        this.log('💡 Recommendations:');
        report.recommendations.forEach(rec => this.log(`   - ${rec}`));
      }
      
    } catch (error) {
      this.log(`❌ Continuous Integration Automation failed: ${error.message}`);
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const ci = new ContinuousIntegrationAutomation();
  ci.run().catch(console.error);
}

module.exports = ContinuousIntegrationAutomation;