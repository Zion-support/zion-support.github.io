
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🏥 Starting health check...');

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

});


#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");



class HealthChecker {

class HealthCheck {

  constructor() {
    this.projectRoot = process.cwd();
    this.results = {
      checks: [],
      overallStatus: 'healthy'
    };
  }

  async checkBuildFiles() {
    console.log('🔍 Checking build files...');
    const buildDir = './dist';
    if (fs.existsSync(buildDir)) {
      this.results.checks.push({
        name: 'build files',
        status: 'pass',
        summary: 'Build directory exists'
      });
    } else {
      this.results.checks.push({
        name: 'build files',
        status: 'warning',
        summary: 'Build directory not found'
      });
      this.results.overallStatus = 'warning';
    }
  }

  async checkPackageJson() {
    console.log('🔍 Checking package.json...');
    if (fs.existsSync('./package.json')) {
      this.results.checks.push({
        name: 'package.json',
        status: 'pass',
        summary: 'Package.json exists'
      });
    } else {
      this.results.checks.push({
        name: 'package.json',
        status: 'error',
        summary: 'Package.json not found'
      });
      this.results.overallStatus = 'error';
    }
  }

  async checkNodeModules() {
    console.log('🔍 Checking node_modules...');
    if (fs.existsSync('./node_modules')) {
      this.results.checks.push({
        name: 'node_modules',
        status: 'pass',
        summary: 'Dependencies installed'
      });
    } else {
      this.results.checks.push({
        name: 'node_modules',
        status: 'warning',
        summary: 'Dependencies not installed'
      });
      this.results.overallStatus = 'warning';
    }
  }

  async checkEnvironmentFiles() {
    console.log('🔍 Checking environment files...');
    const envFiles = ['.env', '.env.local', '.env.production'];
    const found = envFiles.filter(f => fs.existsSync(f));
    
    this.results.checks.push({
      name: 'environment files',
      status: found.length > 0 ? 'pass' : 'warning',
      summary: `${found.length} environment files found`
    });
  }

  async generateReport() {
    const reportPath = `health-check-report-${Date.now()}.json`;
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
    console.log(`📊 Health check completed. Report: ${reportPath}`);
    console.log(`🏥 Overall status: ${this.results.overallStatus}`);
  }

  async run() {
    await this.checkBuildFiles();
    await this.checkPackageJson();
    await this.checkNodeModules();
    await this.checkEnvironmentFiles();
    await this.generateReport();
  }
}

if (require.main === module) {
  const healthCheck = new HealthCheck();
  healthCheck.run().catch(console.error);
}

#!/usr/bin/env node
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




module.exports = HealthCheck;

