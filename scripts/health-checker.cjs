#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class HealthChecker {
  constructor() {
    this.projectRoot = process.cwd();
    this.healthStatus = {
      overall: 'healthy',
      checks: [],
      issues: [],
      recommendations: []
    };
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logEntry);
  }

  async runHealthChecks() {
    this.log('Starting health checks...', 'info');
    
    try {
      await this.checkDependencies();
      await this.checkConfiguration();
      await this.checkBuildProcess();
      await this.checkTestSuite();
      await this.checkLinting();
      
      this.generateReport();
      return this.healthStatus;
    } catch (error) {
      this.log(`Health check failed: ${error.message}`, 'error');
      this.healthStatus.overall = 'unhealthy';
      this.healthStatus.issues.push({
        type: 'system_error',
        message: error.message,
        severity: 'critical'
      });
      return this.healthStatus;
    }
  }

  async checkDependencies() {
    this.log('Checking dependencies...', 'info');
    
    try {
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (!fs.existsSync(packageJsonPath)) {
        this.addIssue('missing_package_json', 'package.json not found', 'critical');
        return;
      }

      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const dependencies = Object.keys(packageJson.dependencies || {});
      const devDependencies = Object.keys(packageJson.devDependencies || {});

      this.log(`Found ${dependencies.length} dependencies and ${devDependencies.length} dev dependencies`, 'info');
      
      // Check for critical dependencies
      const criticalDeps = ['react', 'next', 'typescript'];
      const missingCritical = criticalDeps.filter(dep => !dependencies.includes(dep));
      
      if (missingCritical.length > 0) {
        this.addIssue('missing_critical_deps', `Missing critical dependencies: ${missingCritical.join(', ')}`, 'high');
      }

      this.addCheck('dependencies', 'passed', 'Dependencies check completed');
    } catch (error) {
      this.addIssue('dependency_check_failed', error.message, 'medium');
    }
  }

  async checkConfiguration() {
    this.log('Checking configuration files...', 'info');
    
    const configFiles = [
      'next.config.js',
      'tsconfig.json',
      'eslint.config.js',
      'tailwind.config.js'
    ];

    let configIssues = 0;
    for (const configFile of configFiles) {
      const configPath = path.join(this.projectRoot, configFile);
      if (fs.existsSync(configPath)) {
        this.log(`✓ ${configFile} found`, 'info');
      } else {
        this.log(`✗ ${configFile} missing`, 'warning');
        configIssues++;
      }
    }

    if (configIssues === 0) {
      this.addCheck('configuration', 'passed', 'All configuration files present');
    } else {
      this.addIssue('missing_config', `${configIssues} configuration files missing`, 'medium');
    }
  }

  async checkBuildProcess() {
    this.log('Checking build process...', 'info');
    
    try {
      // Check if build script exists
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      if (!packageJson.scripts || !packageJson.scripts.build) {
        this.addIssue('missing_build_script', 'Build script not found in package.json', 'high');
        return;
      }

      this.addCheck('build_process', 'passed', 'Build script found');
    } catch (error) {
      this.addIssue('build_check_failed', `Build check failed: ${error.message}`, 'medium');
    }
  }

  async checkTestSuite() {
    this.log('Checking test suite...', 'info');
    
    try {
      const testFiles = this.findTestFiles();
      
      if (testFiles.length === 0) {
        this.addIssue('no_tests', 'No test files found', 'medium');
        return;
      }

      this.log(`Found ${testFiles.length} test files`, 'info');
      this.addCheck('test_suite', 'passed', 'Test files found');
    } catch (error) {
      this.addIssue('test_check_failed', error.message, 'low');
    }
  }

  findTestFiles() {
    const testExtensions = ['.test.js', '.test.ts', '.test.jsx', '.test.tsx', '.spec.js', '.spec.ts'];
    const testFiles = [];
    
    const scanDirectory = (dir) => {
      if (!fs.existsSync(dir)) return;
      
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          scanDirectory(filePath);
        } else if (testExtensions.some(ext => file.endsWith(ext))) {
          testFiles.push(filePath);
        }
      }
    };

    scanDirectory(this.projectRoot);
    return testFiles;
  }

  async checkLinting() {
    this.log('Checking linting configuration...', 'info');
    
    try {
      // Check if lint script exists
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      if (!packageJson.scripts || !packageJson.scripts.lint) {
        this.addIssue('missing_lint_script', 'Lint script not found in package.json', 'medium');
        return;
      }

      this.addCheck('linting', 'passed', 'Linting configuration found');
    } catch (error) {
      this.addIssue('lint_check_failed', `Lint check failed: ${error.message}`, 'medium');
    }
  }

  addCheck(type, status, message) {
    this.healthStatus.checks.push({
      type,
      status,
      message,
      timestamp: new Date().toISOString()
    });
  }

  addIssue(type, message, severity) {
    this.healthStatus.issues.push({
      type,
      message,
      severity,
      timestamp: new Date().toISOString()
    });
    
    if (severity === 'critical' || severity === 'high') {
      this.healthStatus.overall = 'unhealthy';
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      healthStatus: this.healthStatus,
      summary: {
        totalChecks: this.healthStatus.checks.length,
        passedChecks: this.healthStatus.checks.filter(c => c.status === 'passed').length,
        totalIssues: this.healthStatus.issues.length,
        criticalIssues: this.healthStatus.issues.filter(i => i.severity === 'critical').length,
        highIssues: this.healthStatus.issues.filter(i => i.severity === 'high').length
      }
    };

    const reportFile = path.join(this.projectRoot, 'health-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Health report saved to ${reportFile}`, 'info');
    
    // Print summary
    this.log('=== HEALTH CHECK SUMMARY ===', 'info');
    this.log(`Overall Status: ${this.healthStatus.overall.toUpperCase()}`, 'info');
    this.log(`Checks: ${report.summary.passedChecks}/${report.summary.totalChecks} passed`, 'info');
    this.log(`Issues: ${report.summary.totalIssues} total (${report.summary.criticalIssues} critical, ${report.summary.highIssues} high)`, 'info');
  }
}

// Run the health checker
if (require.main === module) {
  const checker = new HealthChecker();
<<<<<<< HEAD
  checker.run().catch(console.error)};

=======
  checker.runHealthChecks().catch(console.error);
}

module.exports = HealthChecker;
>>>>>>> 566d12e4e87c285827c8c1f36f24d2818c9f5bb8
