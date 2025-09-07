#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class HealthChecker {
  constructor() {
    this.checks = {
      build: false,
      dependencies: false,
      lint: false,
      typeCheck: false,
      tests: false
    };
  }

  async checkBuild() {
    try {
      console.log('🔨 Checking build...');
      execSync('npm run build', { stdio: 'pipe' });
      this.checks.build = true;
      console.log('✅ Build successful');
      return true;
    } catch (error) {
      console.log('❌ Build failed:', error.message);
      return false;
    }
  }

  async checkDependencies() {
    try {
      console.log('📦 Checking dependencies...');
      execSync('npm install', { stdio: 'pipe' });
      this.checks.dependencies = true;
      console.log('✅ Dependencies OK');
      return true;
    } catch (error) {
      console.log('❌ Dependencies check failed:', error.message);
      return false;
    }
  }

  async checkLint() {
    try {
      console.log('🔍 Checking lint...');
      execSync('npm run lint:check', { stdio: 'pipe' });
      this.checks.lint = true;
      console.log('✅ Lint passed');
      return true;
    } catch (error) {
      console.log('❌ Lint failed:', error.message);
      return false;
    }
  }

  async checkTypeCheck() {
    try {
      console.log('📝 Checking TypeScript...');
      execSync('npm run type-check', { stdio: 'pipe' });
      this.checks.typeCheck = true;
      console.log('✅ TypeScript check passed');
      return true;
    } catch (error) {
      console.log('❌ TypeScript check failed:', error.message);
      return false;
    }
  }

  async checkTests() {
    try {
      console.log('🧪 Checking tests...');
      execSync('npm run test:smoke', { stdio: 'pipe' });
      this.checks.tests = true;
      console.log('✅ Tests passed');
      return true;
    } catch (error) {
      console.log('❌ Tests failed:', error.message);
      return false;
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      checks: this.checks,
      overall: Object.values(this.checks).every(check => check),
      summary: {
        total: Object.keys(this.checks).length,
        passed: Object.values(this.checks).filter(check => check).length,
        failed: Object.values(this.checks).filter(check => !check).length
      }
    };

    const reportPath = path.join(process.cwd(), 'health-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Health report saved to ${reportPath}`);
    
    return report;
  }

  async run() {
    console.log('🏥 Starting health check...');
    
    await this.checkDependencies();
    await this.checkLint();
    await this.checkTypeCheck();
    await this.checkBuild();
    await this.checkTests();
    
    const report = this.generateReport();
    
    console.log('🏥 Health check completed');
    console.log(`✅ Passed: ${report.summary.passed}/${report.summary.total}`);
    console.log(`❌ Failed: ${report.summary.failed}/${report.summary.total}`);
    console.log(`Overall: ${report.overall ? '✅ Healthy' : '❌ Issues found'}`);
    
    return report;
  }
}

// Main execution
if (require.main === module) {
  const checker = new HealthChecker();
  checker.run().catch(console.error);
}

module.exports = HealthChecker;