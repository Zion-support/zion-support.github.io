#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🏥 Starting Project Health Monitor...');

class ProjectHealthMonitor {
  constructor() {
    this.monitorLogDir = path.join(process.cwd(), 'logs');
    this.ensureLogDirectory();
    this.healthMetrics = {
      overallHealth: 0,
      buildStatus: 'unknown',
      testStatus: 'unknown',
      lintStatus: 'unknown',
      dependencyStatus: 'unknown',
      securityStatus: 'unknown',
      lastCheck: null
    };
    this.healthHistory = [];
    this.maxHealthHistory = 50;
    this.alertThresholds = {
      critical: 60,
      warning: 80,
      good: 90
    };
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.monitorLogDir)) {
      fs.mkdirSync(this.monitorLogDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    
    const logFile = path.join(this.monitorLogDir, 'project-health-monitor.log');
    fs.appendFileSync(logFile, logMessage);
  }

  async monitorProjectHealth() {
    this.log('🏥 Monitoring project health...');
    
    try {
      // Check build status
      const buildStatus = await this.checkBuildStatus();
      
      // Check test status
      const testStatus = await this.checkTestStatus();
      
      // Check lint status
      const lintStatus = await this.checkLintStatus();
      
      // Check dependency status
      const dependencyStatus = await this.checkDependencyStatus();
      
      // Check security status
      const securityStatus = await this.checkSecurityStatus();
      
      // Calculate overall health score
      const overallHealth = this.calculateOverallHealth({
        buildStatus,
        testStatus,
        lintStatus,
        dependencyStatus,
        securityStatus
      });
      
      // Update health metrics
      this.updateHealthMetrics({
        overallHealth,
        buildStatus: buildStatus.status,
        testStatus: testStatus.status,
        lintStatus: lintStatus.status,
        dependencyStatus: dependencyStatus.status,
        securityStatus: securityStatus.status,
        lastCheck: new Date().toISOString()
      });
      
      // Log health status
      this.log(`🏥 Project Health Score: ${overallHealth}/100`);
      this.log(`🏗️ Build: ${buildStatus.status} (${buildStatus.score}/100)`);
      this.log(`🧪 Tests: ${testStatus.status} (${testStatus.score}/100)`);
      this.log(`📝 Lint: ${lintStatus.status} (${lintStatus.score}/100)`);
      this.log(`📦 Dependencies: ${dependencyStatus.status} (${dependencyStatus.score}/100)`);
      this.log(`🛡️ Security: ${securityStatus.status} (${securityStatus.score}/100)`);
      
      // Check for alerts
      this.checkAlerts(overallHealth);
      
      return {
        overall: overallHealth,
        build: buildStatus.score,
        test: testStatus.score,
        lint: lintStatus.score,
        dependencies: dependencyStatus.score,
        security: securityStatus.score
      };
      
    } catch (error) {
      this.log(`❌ Health monitoring failed: ${error.message}`);
      return { overall: 0, build: 0, test: 0, lint: 0, dependencies: 0, security: 0 };
    }
  }

  async checkBuildStatus() {
    try {
      this.log('🏗️ Checking build status...');
      
      // Check if build directories exist
      const buildDirs = ['dist', '.next', 'out', 'build'];
      const existingDirs = buildDirs.filter(dir => fs.existsSync(dir));
      
      let score = 0;
      if (existingDirs.length > 0) {
        score += 40;
        
        // Check if build is recent (within last hour)
        for (const dir of existingDirs) {
          try {
            const stats = fs.statSync(dir);
            const ageHours = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60);
            if (ageHours < 1) {
              score += 30;
              break;
            }
          } catch (error) {
            // Ignore errors
          }
        }
      }
      
      // Try to run a build
      try {
        execSync('npm run build --silent', { 
          stdio: 'pipe',
          timeout: 30000
        });
        score += 30;
      } catch (error) {
        // Build failed, but we already have some points
      }
      
      const status = this.getStatusFromScore(score);
      return { status, score };
      
    } catch (error) {
      return { status: 'error', score: 0 };
    }
  }

  async checkTestStatus() {
    try {
      this.log('🧪 Checking test status...');
      
      let score = 0;
      
      // Check if test files exist
      const testFiles = this.countFilesByExtension(['.test.js', '.test.ts', '.spec.js', '.spec.ts']);
      if (testFiles > 0) {
        score += 30;
      }
      
      // Check if test script exists
      if (fs.existsSync('package.json')) {
        try {
          const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
          if (packageJson.scripts && packageJson.scripts.test) {
            score += 20;
          }
        } catch (error) {
          // Ignore errors
        }
      }
      
      // Try to run tests
      try {
        execSync('npm test --silent', { 
          stdio: 'pipe',
          timeout: 30000
        });
        score += 50;
      } catch (error) {
        // Tests failed, but we already have some points
      }
      
      const status = this.getStatusFromScore(score);
      return { status, score };
      
    } catch (error) {
      return { status: 'error', score: 0 };
    }
  }

  async checkLintStatus() {
    try {
      this.log('📝 Checking lint status...');
      
      let score = 0;
      
      // Check if lint script exists
      if (fs.existsSync('package.json')) {
        try {
          const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
          if (packageJson.scripts && packageJson.scripts.lint) {
            score += 30;
          }
        } catch (error) {
          // Ignore errors
        }
      }
      
      // Check for lint configuration files
      const lintConfigs = ['.eslintrc.js', '.eslintrc.json', '.eslintrc.cjs', 'eslint.config.js'];
      const existingConfigs = lintConfigs.filter(config => fs.existsSync(config));
      if (existingConfigs.length > 0) {
        score += 20;
      }
      
      // Try to run lint
      try {
        execSync('npm run lint --silent', { 
          stdio: 'pipe',
          timeout: 30000
        });
        score += 50;
      } catch (error) {
        // Lint failed, but we already have some points
      }
      
      const status = this.getStatusFromScore(score);
      return { status, score };
      
    } catch (error) {
      return { status: 'error', score: 0 };
    }
  }

  async checkDependencyStatus() {
    try {
      this.log('📦 Checking dependency status...');
      
      let score = 100;
      
      // Check for package.json
      if (!fs.existsSync('package.json')) {
        return { status: 'error', score: 0 };
      }
      
      // Check for vulnerabilities
      try {
        const auditResult = execSync('npm audit --json --silent', { 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        const audit = JSON.parse(auditResult);
        const vulnerabilities = audit.metadata?.vulnerabilities?.total || 0;
        
        if (vulnerabilities > 0) {
          score -= Math.min(vulnerabilities * 10, 50);
        }
      } catch (error) {
        // Audit failed, but we still have points
      }
      
      // Check for outdated dependencies
      try {
        const outdatedResult = execSync('npm outdated --json --silent', { 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        const outdated = JSON.parse(outdatedResult);
        const outdatedCount = Object.keys(outdated).length;
        
        if (outdatedCount > 10) {
          score -= 20;
        } else if (outdatedCount > 5) {
          score -= 10;
        }
      } catch (error) {
        // Outdated check failed, but we still have points
      }
      
      const status = this.getStatusFromScore(score);
      return { status, score: Math.max(0, score) };
      
    } catch (error) {
      return { status: 'error', score: 0 };
    }
  }

  async checkSecurityStatus() {
    try {
      this.log('🛡️ Checking security status...');
      
      let score = 50;
      
      // Check for security files
      const securityFiles = ['.env.example', 'security.md', 'SECURITY.md', '.gitignore'];
      const existingSecurityFiles = securityFiles.filter(file => fs.existsSync(file));
      score += (existingSecurityFiles.length / securityFiles.length) * 30;
      
      // Check for HTTPS configuration
      if (fs.existsSync('next.config.js')) {
        const config = fs.readFileSync('next.config.js', 'utf8');
        if (config.includes('https') || config.includes('secure')) {
          score += 20;
        }
      }
      
      // Check for environment variable protection
      if (fs.existsSync('.gitignore')) {
        const gitignore = fs.readFileSync('.gitignore', 'utf8');
        if (gitignore.includes('.env') || gitignore.includes('*.env')) {
          score += 20;
        }
      }
      
      const status = this.getStatusFromScore(score);
      return { status, score: Math.min(100, score) };
      
    } catch (error) {
      return { status: 'error', score: 0 };
    }
  }

  countFilesByExtension(extensions) {
    let count = 0;
    
    try {
      const srcDir = path.join(process.cwd(), 'src');
      const componentsDir = path.join(process.cwd(), 'components');
      const testsDir = path.join(process.cwd(), 'tests');
      
      [srcDir, componentsDir, testsDir].forEach(dir => {
        if (fs.existsSync(dir)) {
          count += this.countFilesInDirectory(dir, extensions);
        }
      });
    } catch (error) {
      // Ignore errors
    }
    
    return count;
  }

  countFilesInDirectory(dirPath, extensions) {
    let count = 0;
    
    try {
      const items = fs.readdirSync(dirPath);
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          count += this.countFilesInDirectory(fullPath, extensions);
        } else if (extensions.some(ext => item.endsWith(ext))) {
          count++;
        }
      }
    } catch (error) {
      // Ignore errors
    }
    
    return count;
  }

  getStatusFromScore(score) {
    if (score >= this.alertThresholds.good) return 'excellent';
    if (score >= this.alertThresholds.warning) return 'good';
    if (score >= this.alertThresholds.critical) return 'fair';
    return 'poor';
  }

  calculateOverallHealth(metrics) {
    const weights = {
      buildStatus: 0.25,
      testStatus: 0.20,
      lintStatus: 0.20,
      dependencyStatus: 0.20,
      securityStatus: 0.15
    };
    
    const overallScore = Object.entries(metrics).reduce((total, [key, value]) => {
      if (key !== 'overallHealth' && weights[key]) {
        return total + (value.score * weights[key]);
      }
      return total;
    }, 0);
    
    return Math.round(overallScore);
  }

  updateHealthMetrics(metrics) {
    this.healthMetrics = { ...metrics };
    
    // Record health history
    this.healthHistory.push({
      timestamp: new Date().toISOString(),
      ...metrics
    });
    
    // Keep only recent history
    if (this.healthHistory.length > this.maxHealthHistory) {
      this.healthHistory = this.healthHistory.slice(-this.maxHealthHistory);
    }
    
    // Save health metrics
    const metricsFile = path.join(this.monitorLogDir, 'project-health-monitor-metrics.json');
    fs.writeFileSync(metricsFile, JSON.stringify({
      ...this.healthMetrics,
      history: this.healthHistory
    }, null, 2));
  }

  checkAlerts(healthScore) {
    if (healthScore < this.alertThresholds.critical) {
      this.log('🚨 CRITICAL ALERT: Project health is critically low!');
    } else if (healthScore < this.alertThresholds.warning) {
      this.log('⚠️ WARNING: Project health needs attention');
    } else if (healthScore >= this.alertThresholds.good) {
      this.log('✅ Project health is excellent');
    }
  }

  generateHealthReport() {
    const totalChecks = this.healthHistory.length;
    const excellentChecks = this.healthHistory.filter(h => h.overallHealth >= 90).length;
    const goodChecks = this.healthHistory.filter(h => h.overallHealth >= 80 && h.overallHealth < 90).length;
    const fairChecks = this.healthHistory.filter(h => h.overallHealth >= 70 && h.overallHealth < 80).length;
    const poorChecks = this.healthHistory.filter(h => h.overallHealth >= 60 && h.overallHealth < 70).length;
    const criticalChecks = this.healthHistory.filter(h => h.overallHealth < 60).length;
    
    const report = {
      currentHealth: this.healthMetrics.overallHealth,
      healthBreakdown: {
        build: this.healthMetrics.buildStatus,
        test: this.healthMetrics.testStatus,
        lint: this.healthMetrics.lintStatus,
        dependencies: this.healthMetrics.dependencyStatus,
        security: this.healthMetrics.securityStatus
      },
      summary: {
        totalChecks,
        excellent: excellentChecks,
        good: goodChecks,
        fair: fairChecks,
        poor: poorChecks,
        critical: criticalChecks
      },
      recentHistory: this.healthHistory.slice(-10),
      recommendations: this.generateHealthRecommendations(),
      trends: this.analyzeHealthTrends()
    };
    
    return report;
  }

  generateHealthRecommendations() {
    const recommendations = [];
    
    if (this.healthMetrics.buildStatus === 'poor') {
      recommendations.push('🏗️ Build system needs immediate attention. Check configuration and dependencies.');
    }
    
    if (this.healthMetrics.testStatus === 'poor') {
      recommendations.push('🧪 Test coverage is insufficient. Add more tests and ensure they pass.');
    }
    
    if (this.healthMetrics.lintStatus === 'poor') {
      recommendations.push('📝 Linting is not properly configured. Set up ESLint and fix code style issues.');
    }
    
    if (this.healthMetrics.dependencyStatus === 'poor') {
      recommendations.push('📦 Dependencies have security vulnerabilities. Run npm audit fix immediately.');
    }
    
    if (this.healthMetrics.securityStatus === 'poor') {
      recommendations.push('🛡️ Security configuration is inadequate. Review security settings and best practices.');
    }
    
    if (this.healthMetrics.overallHealth >= 90) {
      recommendations.push('✅ Project health is excellent! Maintain current standards and continue monitoring.');
    } else if (this.healthMetrics.overallHealth >= 80) {
      recommendations.push('👍 Project health is good. Focus on areas that need improvement.');
    } else if (this.healthMetrics.overallHealth >= 70) {
      recommendations.push('⚠️ Project health is fair. Several areas need attention to improve overall quality.');
    } else {
      recommendations.push('🚨 Project health is poor. Immediate action required across multiple areas.');
    }
    
    return recommendations;
  }

  analyzeHealthTrends() {
    if (this.healthHistory.length < 3) {
      return { trend: 'insufficient_data', direction: 'unknown', change: 0 };
    }
    
    const recent = this.healthHistory.slice(-3);
    const older = this.healthHistory.slice(-6, -3);
    
    if (older.length === 0) {
      return { trend: 'insufficient_data', direction: 'unknown', change: 0 };
    }
    
    const recentAvg = recent.reduce((sum, h) => sum + h.overallHealth, 0) / recent.length;
    const olderAvg = older.reduce((sum, h) => sum + h.overallHealth, 0) / older.length;
    
    const change = recentAvg - olderAvg;
    const direction = change > 0 ? 'improving' : change < 0 ? 'declining' : 'stable';
    
    let trend = 'stable';
    if (Math.abs(change) > 15) {
      trend = change > 0 ? 'significant_improvement' : 'significant_decline';
    } else if (Math.abs(change) > 8) {
      trend = change > 0 ? 'improvement' : 'decline';
    }
    
    return { trend, direction, change: Math.round(change) };
  }

  async startContinuousMonitoring() {
    this.log('🔄 Starting continuous health monitoring...');
    
    const interval = parseInt(process.env.AUTOMATION_INTERVAL) || 300000; // 5 minutes default
    
    // Run initial health check
    await this.monitorProjectHealth();
    
    // Set up continuous monitoring
    setInterval(async () => {
      this.log('🔄 Running scheduled health check...');
      await this.monitorProjectHealth();
      
      // Generate and log report
      const report = this.generateHealthReport();
      this.log(`📊 Health Report: ${report.currentHealth}/100 (${report.trends.direction})`);
      
      if (report.recommendations.length > 0) {
        this.log('💡 Top Recommendations:');
        report.recommendations.slice(0, 3).forEach(rec => this.log(`   ${rec}`));
      }
    }, interval);
    
    this.log(`⏰ Health monitoring active. Running every ${interval / 60000} minutes.`);
  }
}

// Main execution
async function main() {
  const healthMonitor = new ProjectHealthMonitor();
  
  try {
    await healthMonitor.startContinuousMonitoring();
  } catch (error) {
    console.error('❌ Project health monitor failed:', error);
    process.exit(1);
  }
}

// Start the health monitor
main().catch(console.error);
