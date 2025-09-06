

#!/usr/bin/env node
#!/usr/bin/env node
/**
 * Health Check Monitor
 * Monitors application health and provides alerts
 */
const { execSync } = require('child_process');

const fs = require('fs');

  constructor() {
    this.reportsDir = path.join(process.cwd(), 'automation-reports');
    this.ensureReportsDir();
  }
  ensureReportsDir() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }
  log(message) {
    const timestamp = new Date().toISOString();

    try {
      fs.mkdirSync(path.dirname(this.logFile), { recursive: true });
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file: ', error.message);
    }

  }

    try {
      fs.mkdirSync(path.dirname(this.logFile), { recursive: true });
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file: ', error.message);
    }
  }

  async checkDependencies() {
    this.log('Checking dependencies.');
    try {
      // Check if node_modules exists
      if (!fs.existsSync('node_modules')) {
        this.issues.push('node_modules directory missing');
        this.log('CRITICAL: node_modules directory missing', 'ERROR');
        return false;
      }
      // Check package.json
      if (!fs.existsSync('package.json')) {
        this.issues.push('package.json missing');
        this.log('CRITICAL: package.json missing', 'ERROR');
        return false;
      }
      // Check for critical dependencies
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const criticalDeps = ['react', 'react-dom'];
      for (const dep of criticalDeps) {
        if (!packageJson.dependencies[dep] && !packageJson.devDependencies[dep]) {
          this.issues.push(`Critical dependency missing: ${dep}`);
          this.log(`WARNING: Critical dependency missing: ${dep}`, 'WARN');
        }
      }
      this.log('Dependencies check completed');
      return true;
    } catch (error) {
      this.issues.push(`Dependency check failed: ${error.message}`);
      this.log(`ERROR: Dependency check failed: ${error.message}`, 'ERROR');
      return false;
    }
  }
  async checkBuild() {
    this.log('Checking build status.');
    try {
      // Check if dist directory exists
      if (!fs.existsSync('dist')) {
        this.issues.push('Build directory (dist) missing');
        this.log('WARNING: Build directory missing, attempting to build.', 'WARN');
        try {
          execSync('npm run build', { stdio: 'pipe' });
          this.log('Build completed successfully');
        } catch (buildError) {
          this.issues.push(`Build failed: ${buildError.message}`);
          this.log(`ERROR: Build failed: ${buildError.message}`, 'ERROR');
          return false;
        }
      }
      this.log('Build check completed');
      return true;
    } catch (error) {
      this.issues.push(`Build check failed: ${error.message}`);
      this.log(`ERROR: Build check failed: ${error.message}`, 'ERROR');
      return false;
    }
  }
  async checkLinting() {
    this.log('Checking linting.');
    try {
      execSync('npm run lint', { stdio: 'pipe' });
      this.log('Linting passed');
      return true;
    } catch (error) {
      this.issues.push(`Linting failed: ${error.message}`);
      this.log(`WARNING: Linting issues found: ${error.message}`, 'WARN');
      // Try to auto-fix
      try {
        this.log('Attempting to auto-fix linting issues.');
        execSync('npm run lint:fix', { stdio: 'pipe' });
        this.log('Linting auto-fix completed');
        return true;
      } catch (fixError) {
        this.log(`ERROR: Auto-fix failed: ${fixError.message}`, 'ERROR');
        return false;
      }
    }
  }
  async checkTypeScript() {
    this.log('Checking TypeScript.');
    try {
      execSync('npm run type-check', { stdio: 'pipe' });
      this.log('TypeScript check passed');
      return true;
    } catch (error) {
      this.issues.push(`TypeScript errors: ${error.message}`);
      this.log(`ERROR: TypeScript errors found: ${error.message}`, 'ERROR');
      return false;
    }
  }
  async checkSecurity() {
    this.log('Checking security vulnerabilities.');
    try {
      const result = execSync('npm audit --audit-level=moderate', {
        stdio: 'pipe',
        encoding: 'utf8'
      });
      if (result.includes('found 0 vulnerabilities')) {
        this.log('Security check passed');
        return true;
      } else {
        this.issues.push('Security vulnerabilities found');
        this.log('WARNING: Security vulnerabilities found', 'WARN');
        // Try to auto-fix
        try {
          this.log('Attempting to fix security vulnerabilities.');
          execSync('npm audit fix --force', { stdio: 'pipe' });
          this.log('Security vulnerabilities fixed');
          return true;
        } catch (fixError) {
          this.log(`ERROR: Security fix failed: ${fixError.message}`, 'ERROR');
          return false;
        }
      }
    } catch (error) {
      this.issues.push(`Security check failed: ${error.message}`);
      this.log(`ERROR: Security check failed: ${error.message}`, 'ERROR');
      return false;

  async checkApplicationHealth() {
    this.log('🏥 Checking application health...');
    const healthChecks = [
      { command: 'npm run build', description: 'Build health check' },
      { command: 'npm run test:smoke', description: 'Test health check' },
    ];
    let healthy = true;
    for (const check of healthChecks) {
      const result = await this.runCommand(check.command, check.description);
      if (!result.success) {
        healthy = false;
      }
    }
    this.healthStatus = healthy ? 'healthy' : 'unhealthy';
    this.lastCheck = new Date();
    if (healthy) {
      this.log('✅ Application is healthy');
    } else {
      this.log('❌ Application health issues detected', 'ERROR');
    }
    return healthy;
  }
  async checkDependencies() {
    this.log('📦 Checking dependencies...');
    const depCheck = await this.runCommand(
      'npm audit --audit-level=moderate',
      'Dependency security check'
    );
    if (depCheck.success) {
      this.log('✅ Dependencies are secure');
    } else {
      this.log('⚠️ Dependency issues found', 'WARN');

    }
  }
  async checkDiskSpace() {

    try {
      const result = execSync('df -h .', { stdio: 'pipe', encoding: 'utf8' });
      const lines = result.trim().split('\n');
      const dataLine = lines[1];
      const parts = dataLine.split(/\s+/);
      const usedPercent = parseInt(parts[4].replace('%', ''));
      if (usedPercent > 90) {
        this.issues.push(`Disk space critical: ${usedPercent}% used`);
        this.log(`CRITICAL: Disk space critical: ${usedPercent}% used`, 'ERROR');
        return false;
      } else if (usedPercent > 80) {
        this.issues.push(`Disk space warning: ${usedPercent}% used`);
        this.log(`WARNING: Disk space warning: ${usedPercent}% used`, 'WARN');
      }
      this.log(`Disk space check passed: ${usedPercent}% used`);
      return true;
    } catch (error) {
      this.log(`WARNING: Could not check disk space: ${error.message}`, 'WARN');
      return true; // Don't fail the health check for this
    }
  }
  async runAllChecks() {
    this.log('Starting comprehensive health check.');

    const checks = [
      { name: 'Build Status', command: 'npm run build' },
      { name: 'Test Status', command: 'npm run test:smoke' },
      { name: 'Lint Status', command: 'npm run lint:check' },
      { name: 'Type Check', command: 'npm run type-check' },
      { name: 'Security Audit', command: 'npm audit' }
    ];
    const results = [];
    let passedChecks = 0;
    for (const check of checks) {
      try {
        this.log(`🔍 Running ${check.name}...`);
        execSync(check.command, { stdio: 'pipe' });
        console.log(`✅ ${check.name} OK`);
        results.push({ name: check.name, status: 'passed', error: null });
        passedChecks++;
      } catch (error) {
        console.log(`❌ ${check.name} FAILED`);
        results.push({ name: check.name, status: 'failed', error: error.message });
      }
    }
    // Write summary to file
    const summary = {
      timestamp: endTime.toISOString(),
      duration: duration,
      checksPassed: passed,
      totalChecks: total,
      issues: this.issues,
      status: this.issues.length === 0 ? 'HEALTHY' : 'ISSUES_FOUND'
    };
    try {
      fs.writeFileSync(
        path.join(__dirname, '../logs/health-check-summary.json'),
        JSON.stringify(summary, null, 2)
      );
    } catch (error) {
      this.log(`ERROR: Failed to write summary: ${error.message}`, 'ERROR');
    }
    return this.issues.length === 0;
  }
}
// Run health check if called directly
if (require.main === module) {
  const healthChecker = new HealthChecker();
  healthChecker
    .runAllChecks()
    .then(success => {
      process.exit(success ? 0 : 1);
    })
    .catch(error => {
    this.log('💾 Checking disk space...');
    const diskCheck = await this.runCommand(
      'df -h /workspace',
      'Disk space check'
    );
    if (diskCheck.success) {
      this.log('✅ Disk space check completed');
    }
  }
  async generateHealthReport() {
    this.log('📊 Generating health report...');
    const report = {

      timestamp: new Date().toISOString(),
      totalChecks: checks.length,
      passedChecks,
      failedChecks: checks.length - passedChecks,
      results,
      overallHealth: passedChecks === checks.length ? 'healthy' : 'unhealthy'
    };

      timestamp: new Date().toISOString(),
      healthStatus: this.healthStatus,
      lastCheck: this.lastCheck,
      checks: {
        application: 'completed',
        dependencies: 'completed',
        diskSpace: 'completed'
      },
      recommendations: this.generateRecommendations()
    };

    if (this.healthStatus === 'unhealthy') {
      recommendations.push('Address build or test failures');
      recommendations.push('Check application logs for errors');
    }
    return report;
  }
}
      console.error('Health check failed: ', error);
      process.exit(1);
    });
}

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
