#!/usr/bin/env node

/**
 * Comprehensive Automation Runner
 * Runs all automation scripts, tests, and improvements
 */

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
    } catch (error) {
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

    // Run type checking
    const typeResult = await this.runCommand('npm run type-check', 'TypeScript type check', 30000);
    if (typeResult.success) {
      this.results.tests.passed++;
    } else {
      this.results.tests.failed++;
      this.results.tests.errors.push(typeResult.error);
    }
  }

  async runLinting() {
    this.log('Running linting...', 'PROGRESS');
    
    const lintResult = await this.runCommand('npm run lint:check', 'ESLint check', 30000);
    if (lintResult.success) {
      this.results.linting.success = true;
    } else {
      this.results.linting.errors.push(lintResult.error);
      
      // Try to fix linting issues
      const fixResult = await this.runCommand('npm run lint:fix', 'ESLint fix', 30000);
      if (fixResult.success) {
        this.log('Linting issues fixed automatically', 'SUCCESS');
        this.results.linting.success = true;
      }
    }
  }

  async runBuild() {
    this.log('Building application...', 'PROGRESS');
    
    const buildResult = await this.runCommand('npm run build', 'Next.js build', 120000);
    if (buildResult.success) {
      this.results.builds.success = true;
      this.log('Build completed successfully', 'SUCCESS');
    } else {
      this.results.builds.errors.push(buildResult.error);
      this.log('Build failed', 'ERROR');
    }
  }

  async runSecurityAudit() {
    this.log('Running security audit...', 'PROGRESS');
    
    const auditResult = await this.runCommand('npm audit --audit-level=moderate', 'Security audit', 30000);
    if (!auditResult.success) {
      this.results.security.issues.push('Security vulnerabilities found');
      
      // Try to fix automatically
      const fixResult = await this.runCommand('npm audit fix', 'Security fix', 30000);
      if (fixResult.success) {
        this.results.security.fixed++;
        this.log('Security issues fixed automatically', 'SUCCESS');
      }
    } else {
      this.log('No security issues found', 'SUCCESS');
    }
  }

  async createImprovements() {
    this.log('Creating improvements...', 'PROGRESS');
    
    // Create a performance monitoring script
    const performanceScript = `#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      bundleSize: 0,
      loadTime: 0,
      memoryUsage: 0,
      timestamp: new Date().toISOString()
    };
  }

  async measureBundleSize() {
    try {
      const buildDir = path.join(process.cwd(), '.next');
      if (fs.existsSync(buildDir)) {
        const stats = fs.statSync(buildDir);
        this.metrics.bundleSize = stats.size;
      }
    } catch (error) {
      console.error('Error measuring bundle size:', error);
    }
  }

  async measureMemoryUsage() {
    const usage = process.memoryUsage();
    this.metrics.memoryUsage = usage.heapUsed / 1024 / 1024; // MB
  }

  generateReport() {
    const report = {
      timestamp: this.metrics.timestamp,
      metrics: this.metrics,
      recommendations: this.generateRecommendations()
    };

    const reportPath = path.join(process.cwd(), 'performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log('Performance report generated:', reportPath);
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.metrics.bundleSize > 1000000) { // 1MB
      recommendations.push('Consider code splitting to reduce bundle size');
    }
    
    if (this.metrics.memoryUsage > 100) { // 100MB
      recommendations.push('High memory usage detected, consider optimization');
    }
    
    return recommendations;
  }
}

if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.measureBundleSize();
  monitor.measureMemoryUsage();
  monitor.generateReport();
}

module.exports = PerformanceMonitor;`;

    fs.writeFileSync('scripts/performance-monitor.js', performanceScript);
    this.results.improvements.push('Created performance monitoring script');

    // Create a health check script
    const healthCheckScript = `#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class HealthChecker {
  constructor() {
    this.checks = [];
  }

  checkFileExists(filePath, description) {
    const exists = fs.existsSync(filePath);
    this.checks.push({
      name: description,
      status: exists ? 'PASS' : 'FAIL',
      details: exists ? 'File exists' : 'File missing'
    });
    return exists;
  }

  checkPackageJson() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      this.checks.push({
        name: 'Package.json validation',
        status: 'PASS',
        details: \`Valid package.json (version: \${packageJson.version})\`
      });
      return true;
    } catch (error) {
      this.checks.push({
        name: 'Package.json validation',
        status: 'FAIL',
        details: \`Invalid package.json: \${error.message}\`
      });
      return false;
    }
  }

  checkNodeModules() {
    const exists = fs.existsSync('node_modules');
    this.checks.push({
      name: 'Node modules',
      status: exists ? 'PASS' : 'FAIL',
      details: exists ? 'Dependencies installed' : 'Run npm install'
    });
    return exists;
  }

  generateReport() {
    const passed = this.checks.filter(c => c.status === 'PASS').length;
    const total = this.checks.length;
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total,
        passed,
        failed: total - passed,
        healthScore: Math.round((passed / total) * 100)
      },
      checks: this.checks
    };

    const reportPath = path.join(process.cwd(), 'health-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(\`Health Check Report: \${passed}/\${total} checks passed (\${report.summary.healthScore}%)\`);
    return report;
  }
}

if (require.main === module) {
  const checker = new HealthChecker();
  checker.checkFileExists('src/App.tsx', 'Main App component');
  checker.checkFileExists('package.json', 'Package configuration');
  checker.checkFileExists('next.config.js', 'Next.js configuration');
  checker.checkPackageJson();
  checker.checkNodeModules();
  checker.generateReport();
}

module.exports = HealthChecker;`;

    fs.writeFileSync('scripts/health-check.js', healthCheckScript);
    this.results.improvements.push('Created health check script');

    // Create an automated testing script
    const testScript = `#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class AutomatedTester {
  constructor() {
    this.results = {
      unit: { passed: 0, failed: 0 },
      integration: { passed: 0, failed: 0 },
      e2e: { passed: 0, failed: 0 }
    };
  }

  async runUnitTests() {
    try {
      execSync('npm test -- --passWithNoTests', { stdio: 'pipe' });
      this.results.unit.passed++;
      console.log('✅ Unit tests passed');
    } catch (error) {
      this.results.unit.failed++;
      console.log('❌ Unit tests failed:', error.message);
    }
  }

  async runTypeCheck() {
    try {
      execSync('npm run type-check', { stdio: 'pipe' });
      this.results.unit.passed++;
      console.log('✅ TypeScript type check passed');
    } catch (error) {
      this.results.unit.failed++;
      console.log('❌ TypeScript type check failed:', error.message);
    }
  }

  async runLintCheck() {
    try {
      execSync('npm run lint:check', { stdio: 'pipe' });
      this.results.unit.passed++;
      console.log('✅ Linting passed');
    } catch (error) {
      this.results.unit.failed++;
      console.log('❌ Linting failed:', error.message);
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      results: this.results,
      summary: {
        totalTests: Object.values(this.results).reduce((sum, cat) => sum + cat.passed + cat.failed, 0),
        totalPassed: Object.values(this.results).reduce((sum, cat) => sum + cat.passed, 0),
        totalFailed: Object.values(this.results).reduce((sum, cat) => sum + cat.failed, 0)
      }
    };

    const reportPath = path.join(process.cwd(), 'test-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log('Test report generated:', reportPath);
  }
}

if (require.main === module) {
  const tester = new AutomatedTester();
  tester.runUnitTests();
  tester.runTypeCheck();
  tester.runLintCheck();
  tester.generateReport();
}

module.exports = AutomatedTester;`;

    fs.writeFileSync('scripts/automated-tester.js', testScript);
    this.results.improvements.push('Created automated testing script');
  }

  async runAllAutomations() {
    this.log('🚀 Starting comprehensive automation...', 'PROGRESS');
    
    try {
      await this.runTests();
      await this.runLinting();
      await this.runSecurityAudit();
      await this.runBuild();
      await this.createImprovements();
      
      this.generateFinalReport();
    } catch (error) {
      this.log(`Automation failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }

  generateFinalReport() {
    const duration = Date.now() - this.startTime;
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${Math.round(duration / 1000)}s`,
      results: this.results,
      summary: {
        testsPassed: this.results.tests.passed,
        testsFailed: this.results.tests.failed,
        buildSuccess: this.results.builds.success,
        lintingSuccess: this.results.linting.success,
        securityIssuesFixed: this.results.security.fixed,
        improvementsCreated: this.results.improvements.length
      }
    };

    const reportPath = path.join(process.cwd(), 'automation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log('📊 Final Report Generated', 'SUCCESS');
    this.log(`✅ Tests Passed: ${report.summary.testsPassed}`);
    this.log(`❌ Tests Failed: ${report.summary.testsFailed}`);
    this.log(`🏗️ Build Success: ${report.summary.buildSuccess}`);
    this.log(`🔍 Linting Success: ${report.summary.lintingSuccess}`);
    this.log(`🔒 Security Issues Fixed: ${report.summary.securityIssuesFixed}`);
    this.log(`🚀 Improvements Created: ${report.summary.improvementsCreated}`);
  }
}

// Run the automation
if (require.main === module) {
  const runner = new AutomationRunner();
  runner.runAllAutomations().catch(error => {
    console.error('Automation runner failed:', error);
    process.exit(1);
  });
}

module.exports = AutomationRunner;