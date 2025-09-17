<<<<<<< HEAD
#!/usr/bin/env node
<<<<<<< HEAD
ursor/automate-test-improve-and-merge-code-ceec
=======

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🏥 Starting Health Check...');
=======
<<<<<<< HEAD

const checks = [
  { name: 'Build Status', command: 'npm run build' },
  { name: 'Test Status', command: 'npm run test:smoke' },
  { name: 'Lint Status', command: 'npm run lint:check' },
  { name: 'Type Check', command: 'npm run type-check' }
];

checks.forEach(check => {
  try {
    execSync(check.command, { stdio: 'pipe' });
    console.log(`✅ ${check.name}: OK`);
  } catch (error) {
    console.log(`❌ ${check.name}: FAILED`);
  }
});
=======
#!/usr/bin/env node
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
>>>>>>> origin/chore/fix-automation-and-build
>>>>>>> origin/merge-pr-12271

class HealthChecker {
  constructor() {
    this.results = {
      timestamp: new Date().toISOString(),
      overallHealth: 'unknown',
      checks: [],
      metrics: {},
      recommendations: []
    };
  }

  async checkBuild() {
    console.log('🔨 Checking build health...');
    try {
      execSync('npm run build', { encoding: 'utf8', stdio: 'pipe' });
      this.results.checks.push({
        name: 'build',
        status: 'healthy',
        message: 'Build completed successfully'
      });
    } catch (error) {
      this.results.checks.push({
        name: 'build',
        status: 'unhealthy',
        message: 'Build failed',
        error: error.message
      });
    }
  }

<<<<<<< HEAD
  async checkTests() {
    console.log('🧪 Checking test health...');
    try {
      execSync('npm run test:smoke', { encoding: 'utf8', stdio: 'pipe' });
      this.results.checks.push({
        name: 'tests',
        status: 'healthy',
        message: 'Tests passed successfully'
      });
    } catch (error) {
      this.results.checks.push({
        name: 'tests',
        status: 'unhealthy',
        message: 'Tests failed',
        error: error.message
      });
    }
=======
    } else {
      this.log('❌ Application health issues detected', 'ERROR');
    }

=======
    this.issues = [];
    this.fixes = [];
>>>>>>> origin/merge-pr-12271
  }

  async checkDependencies() {
    console.log('📦 Checking dependency health...');
    try {
      execSync('npm list --depth=0', { encoding: 'utf8', stdio: 'pipe' });
      this.results.checks.push({
        name: 'dependencies',
        status: 'healthy',
        message: 'All dependencies are properly installed'
      });
    } catch (error) {
      this.results.checks.push({
        name: 'dependencies',
        status: 'unhealthy',
        message: 'Dependency issues detected',
        error: error.message
      });
    }
  }

  async checkLinting() {
    console.log('🔍 Checking linting health...');
    try {
      execSync('npm run lint', { encoding: 'utf8', stdio: 'pipe' });
      this.results.checks.push({
        name: 'linting',
        status: 'healthy',
        message: 'No linting errors found'
      });
    } catch (error) {
      this.results.checks.push({
        name: 'linting',
        status: 'warning',
        message: 'Linting issues detected',
        error: error.message
      });
    }
  }

  async checkFileStructure() {
    console.log('📁 Checking file structure health...');
    
    const criticalFiles = [
      'package.json',
      'next.config.js',
      'tsconfig.json',
      'tailwind.config.js'
    ];
    
    const missingFiles = criticalFiles.filter(file => !fs.existsSync(file));
    
<<<<<<< HEAD
    if (missingFiles.length === 0) {
      this.results.checks.push({
        name: 'file_structure',
        status: 'healthy',
        message: 'All critical files present'
      });
    } else {
      this.results.checks.push({
        name: 'file_structure',
        status: 'unhealthy',
        message: `Missing critical files: ${missingFiles.join(', ')}`
      });
    }
  }

  calculateOverallHealth() {
    const healthyChecks = this.results.checks.filter(check => check.status === 'healthy').length;
    const totalChecks = this.results.checks.length;
    const healthPercentage = (healthyChecks / totalChecks) * 100;
    
    if (healthPercentage >= 90) {
      this.results.overallHealth = 'excellent';
    } else if (healthPercentage >= 70) {
      this.results.overallHealth = 'good';
    } else if (healthPercentage >= 50) {
      this.results.overallHealth = 'fair';
    } else {
      this.results.overallHealth = 'poor';
    }
    
    this.results.metrics.healthPercentage = healthPercentage;
    this.results.metrics.healthyChecks = healthyChecks;
    this.results.metrics.totalChecks = totalChecks;
  }

  async generateRecommendations() {
    console.log('💡 Generating health recommendations...');
    
    const unhealthyChecks = this.results.checks.filter(check => check.status === 'unhealthy');
    
    unhealthyChecks.forEach(check => {
      switch (check.name) {
        case 'build':
          this.results.recommendations.push({
            type: 'build_fix',
            priority: 'high',
            description: 'Fix build errors to ensure application can be deployed'
          });
          break;
        case 'tests':
          this.results.recommendations.push({
            type: 'test_fix',
            priority: 'high',
            description: 'Fix failing tests to ensure code quality'
          });
          break;
        case 'dependencies':
          this.results.recommendations.push({
            type: 'dependency_fix',
            priority: 'medium',
            description: 'Resolve dependency issues'
          });
          break;
        case 'linting':
          this.results.recommendations.push({
            type: 'linting_fix',
            priority: 'low',
            description: 'Fix linting issues for better code quality'
          });
          break;
      }
    });
  }

  async saveReport() {
    const logsDir = path.join(process.cwd(), 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    const reportPath = path.join(logsDir, `health-check-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
    console.log(`📊 Report saved to: ${reportPath}`);
  }

  async run() {
    console.log('🚀 Starting health check...');
    
    await this.checkBuild();
    await this.checkTests();
    await this.checkDependencies();
    await this.checkLinting();
    await this.checkFileStructure();
    
    this.calculateOverallHealth();
    await this.generateRecommendations();
    await this.saveReport();
    
    console.log(`✅ Health check completed! Overall health: ${this.results.overallHealth}`);
  }
}

// Run the health checker
const healthChecker = new HealthChecker();
healthChecker.run().catch(console.error);
=======
const { execSync } = require('child_process');

console.log('🏥 Running Health Check...');

const checks = [
  { name: 'Build Status', command: 'npm run build' },
  { name: 'Test Status', command: 'npm run test:smoke' },
  { name: 'Lint Status', command: 'npm run lint:check' },
  { name: 'Type Check', command: 'npm run type-check' }
];

checks.forEach(check => {
  try {
    execSync(check.command, { stdio: 'pipe' });
    console.log(`✅ ${check.name}: OK`);
  } catch (error) {
    console.log(`❌ ${check.name}: FAILED`);
  }
});
>>>>>>> cursor/automate-test-improve-and-merge-code-ceec
>>>>>>> cursor/automate-test-improve-and-merge-code-85f4
=======
    if (this.fixes.length > 0) {
      console.log("\n🔧 Suggested fixes:");
      this.fixes.forEach((fix, index) => console.log(`${index + 1}. ${fix}`));
    }
    
    if (this.issues.length === 0) {
      console.log("\n🎉 All checks passed! Your app is healthy.");
    }
  }
}

const checker = new HealthChecker();
checker.runAllChecks().catch(console.error);
>>>>>>> origin/chore/fix-automation-and-build
>>>>>>> origin/merge-pr-12271
