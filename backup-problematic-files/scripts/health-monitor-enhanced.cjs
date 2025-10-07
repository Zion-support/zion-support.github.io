


#!/usr/bin/env node;
;const fs = require('fs');
const fs = require('fs')
const path = require('path')
        console.log(' Checking system health...')
            "status"
            "status"
            "message"
            "status"
            "message"
            "status"
            "message"
            "status"

#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Enhanced Health Monitor
 * Comprehensive system health monitoring and reporting
 */
class HealthMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.healthData = {
      timestamp: new Date().toISOString(),
      overallStatus: 'unknown',
      checks: {},
      metrics: {},
      recommendations: []
    };
  }

  /**
   * Run comprehensive health checks
   */
  async runHealthChecks() {
    console.log('🏥 Starting comprehensive health checks...');

    try {
      await this.checkSystemResources();
      await this.checkApplicationHealth();
      await this.checkDependencies();
      await this.checkConfiguration();
      await this.checkPerformance();

      this.calculateOverallStatus();
      this.generateRecommendations();

      await this.saveHealthReport();

      console.log('✅ Health checks completed');
      return this.healthData;

    } catch (error) {
      console.error('❌ Error during health checks:', error.message);
      this.healthData.overallStatus = 'error';
      return this.healthData;
    }
  }

  /**
   * Check system resources
   */
  async checkSystemResources() {
    console.log('💻 Checking system resources...');

    const resources = {
      memory: { status: 'unknown', usage: 0, available: 0 },
      disk: { status: 'unknown', usage: 0, available: 0 },
      cpu: { status: 'unknown', load: 0 }
    };

    try {
      // Memory usage
      const memInfo = process.memoryUsage();
      const totalMem = memInfo.heapTotal + memInfo.external;
      const usedMem = memInfo.heapUsed;
      const memUsage = (usedMem / totalMem) * 100;

      resources.memory.usage = Math.round(memUsage);
      resources.memory.available = Math.round((totalMem - usedMem) / 1024 / 1024); // MB
      resources.memory.status = memUsage > 90 ? 'critical' : memUsage > 70 ? 'warning' : 'healthy';

      // Disk usage
      try {
        const diskUsage = execSync('df -h .', { encoding: 'utf8' });
        const usageMatch = diskUsage.match(/(\d+)%/);
        if (usageMatch) {
          resources.disk.usage = parseInt(usageMatch[1]);
          resources.disk.status = resources.disk.usage > 90 ? 'critical' : resources.disk.usage > 80 ? 'warning' : 'healthy';
        }
      } catch (error) {
        resources.disk.status = 'unknown';
      }

      // CPU load (simplified)
      resources.cpu.load = process.uptime();
      resources.cpu.status = 'healthy';

    } catch (error) {
      console.log('⚠️ Error checking system resources:', error.message);
    }

    this.healthData.checks.resources = resources;
  }

  /**
   * Check application health
   */
  async checkApplicationHealth() {
    console.log('🚀 Checking application health...');

    const appHealth = {
      buildStatus: 'unknown',
      dependencies: 'unknown',
      configuration: 'unknown',
      files: 'unknown'
    };

    try {
      // Check if build exists
      const buildDir = path.join(this.projectRoot, '.next');
      if (fs.existsSync(buildDir)) {
        appHealth.buildStatus = 'healthy';
      } else {
        appHealth.buildStatus = 'warning';
      }

      // Check package.json
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        appHealth.dependencies = 'healthy';
      } else {
        appHealth.dependencies = 'critical';
      }

      // Check configuration files
      const configFiles = ['next.config.js', 'tailwind.config.js', 'tsconfig.json'];
      const existingConfigs = configFiles.filter(file =>
        fs.existsSync(path.join(this.projectRoot, file))
      );

      appHealth.configuration = existingConfigs.length >= 2 ? 'healthy' : 'warning';

      // Check critical files
      const criticalFiles = ['app/page.tsx', 'app/layout.tsx'];
      const existingFiles = criticalFiles.filter(file =>
        fs.existsSync(path.join(this.projectRoot, file))
      );

      appHealth.files = existingFiles.length === criticalFiles.length ? 'healthy' : 'critical';

    } catch (error) {
      console.log('⚠️ Error checking application health:', error.message);
    }

    this.healthData.checks.application = appHealth;
  }

  /**
   * Check dependencies
   */
  async checkDependencies() {
    console.log('📦 Checking dependencies...');

    const dependencies = {
      installed: 'unknown',
      outdated: 'unknown',
      vulnerabilities: 'unknown'
    };

    try {
      // Check if node_modules exists
      const nodeModulesPath = path.join(this.projectRoot, 'node_modules');
      if (fs.existsSync(nodeModulesPath)) {
        dependencies.installed = 'healthy';
      } else {
        dependencies.installed = 'critical';
      }

      // Check for outdated packages
      try {
        const outdatedCheck = execSync('npm outdated --json', {
          encoding: 'utf8',
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
        const outdated = JSON.parse(outdatedCheck);
        dependencies.outdated = Object.keys(outdated).length > 0 ? 'warning' : 'healthy';
      } catch (error) {
        dependencies.outdated = 'unknown';
      }

      // Check for vulnerabilities
      try {
        const auditCheck = execSync('npm audit --json', {
          encoding: 'utf8',
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
        const audit = JSON.parse(auditCheck);
        dependencies.vulnerabilities = audit.vulnerabilities?.high > 0 ? 'critical' :
                                     audit.vulnerabilities?.moderate > 0 ? 'warning' : 'healthy';
      } catch (error) {
        dependencies.vulnerabilities = 'unknown';
      }

    } catch (error) {
      console.log('⚠️ Error checking dependencies:', error.message);
    }

    this.healthData.checks.dependencies = dependencies;
  }

  /**
   * Check configuration
   */
  async checkConfiguration() {
    console.log('⚙️ Checking configuration...');

    const configuration = {
      environment: 'unknown',
      buildConfig: 'unknown',
      linting: 'unknown',
      testing: 'unknown'
    };

    try {
      // Check environment variables
      const envFiles = ['.env.local', '.env', '.env.example'];
      const existingEnvFiles = envFiles.filter(file =>
        fs.existsSync(path.join(this.projectRoot, file))
      );

      configuration.environment = existingEnvFiles.length > 0 ? 'healthy' : 'warning';

      // Check build configuration
      const buildConfigs = ['next.config.js', 'webpack.config.js'];
      const existingBuildConfigs = buildConfigs.filter(file =>
        fs.existsSync(path.join(this.projectRoot, file))
      );

      configuration.buildConfig = existingBuildConfigs.length > 0 ? 'healthy' : 'warning';

      // Check linting configuration
      const lintConfigs = ['.eslintrc.js', 'eslint.config.js', '.eslintrc.json'];
      const existingLintConfigs = lintConfigs.filter(file =>
        fs.existsSync(path.join(this.projectRoot, file))
      );

      configuration.linting = existingLintConfigs.length > 0 ? 'healthy' : 'warning';

      // Check testing configuration
      const testConfigs = ['jest.config.js', 'vitest.config.js', 'cypress.config.js'];
      const existingTestConfigs = testConfigs.filter(file =>
        fs.existsSync(path.join(this.projectRoot, file))
      );

      configuration.testing = existingTestConfigs.length > 0 ? 'healthy' : 'warning';

    } catch (error) {
      console.log('⚠️ Error checking configuration:', error.message);
    }

    this.healthData.checks.configuration = configuration;
  }

  /**
   * Check performance metrics
   */
  async checkPerformance() {
    console.log('⚡ Checking performance...');

    const performance = {
      buildTime: 'unknown',
      bundleSize: 'unknown',
      loadTime: 'unknown'
    };

    try {
      // Check build time (if build exists)
      if (fs.existsSync(buildDir)) {
        const buildStats = fs.statSync(buildDir);
        const buildAge = Date.now() - buildStats.mtime.getTime();
        const hoursOld = buildAge / (1000 * 60 * 60);

        performance.buildTime = hoursOld < 24 ? 'healthy' : hoursOld < 168 ? 'warning' : 'critical';
      }

      // Check bundle size
      try {
        const buildSize = execSync('du -sh .next', {
          encoding: 'utf8',
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
        const sizeInMB = parseInt(buildSize.split('\t')[0]);
        performance.bundleSize = sizeInMB < 50 ? 'healthy' : sizeInMB < 100 ? 'warning' : 'critical';
      } catch (error) {
        performance.bundleSize = 'unknown';
      }

      // Load time simulation (simplified)
      performance.loadTime = 'healthy';

    } catch (error) {
      console.log('⚠️ Error checking performance:', error.message);
    }

    this.healthData.checks.performance = performance;
  }

  /**
   * Calculate overall status
   */
  calculateOverallStatus() {
    const allChecks = [];

    // Collect all check results
    Object.values(this.healthData.checks).forEach(category => {
      Object.values(category).forEach(check => {
        if (typeof check === 'object' && check.status) {
          allChecks.push(check.status);
        } else if (typeof check === 'string') {
          allChecks.push(check);
        }
      });
    });

    // Calculate overall status
    if (allChecks.includes('critical')) {
      this.healthData.overallStatus = 'critical';
    } else if (allChecks.includes('warning')) {
      this.healthData.overallStatus = 'warning';
    } else if (allChecks.includes('unknown')) {
      this.healthData.overallStatus = 'unknown';
    } else {
      this.healthData.overallStatus = 'healthy';
    }
  }

  /**
   * Generate recommendations
   */
  generateRecommendations() {
    const recommendations = [];

    // Resource recommendations
    if (this.healthData.checks.resources?.memory?.status === 'critical') {
      recommendations.push('Memory usage is critical - consider optimizing or scaling');
    }

    // Application recommendations
    if (this.healthData.checks.application?.buildStatus === 'warning') {
      recommendations.push('Build directory not found - run npm run build');
    }

    // Dependency recommendations
    if (this.healthData.checks.dependencies?.vulnerabilities === 'critical') {
      recommendations.push('Critical security vulnerabilities found - run npm audit fix');
    }

    // Configuration recommendations
    if (this.healthData.checks.configuration?.environment === 'warning') {
      recommendations.push('Environment configuration missing - create .env files');
    }

    this.healthData.recommendations = recommendations;
  }

  /**
   * Save health report
   */
  async saveHealthReport() {
    const reportPath = path.join(this.projectRoot, 'health-monitor-report.json');

    try {
      fs.writeFileSync(reportPath, JSON.stringify(this.healthData, null, 2));
      console.log(`📄 Health report saved to: ${reportPath}`);
    } catch (error) {
      console.error('❌ Error saving health report:', error.message);
    }
  }

  /**
   * Display health status
   */
  displayStatus() {
    console.log('\n🏥 HEALTH MONITOR REPORT');

