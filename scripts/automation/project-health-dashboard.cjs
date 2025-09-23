#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📊 Starting Project Health Dashboard...');

class ProjectHealthDashboard {
  constructor() {
    this.dashboardLogDir = path.join(process.cwd(), 'logs');
    this.ensureLogDirectory();
    this.healthMetrics = {
      buildHealth: 0,
      codeQuality: 0,
      dependencyHealth: 0,
      fileIntegrity: 0,
      securityHealth: 0,
      overallHealth: 0,
      lastUpdate: null
    };
    this.healthHistory = [];
    this.maxHealthHistory = 30;
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.dashboardLogDir)) {
      fs.mkdirSync(this.dashboardLogDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    
    const logFile = path.join(this.dashboardLogDir, 'project-health-dashboard.log');
    fs.appendFileSync(logFile, logMessage);
  }

  async generateHealthDashboard() {
    this.log('📊 Generating project health dashboard...');
    
    try {
      // Collect health metrics from various sources
      const buildHealth = await this.getBuildHealth();
      const codeQuality = await this.getCodeQuality();
      const dependencyHealth = await this.getDependencyHealth();
      const fileIntegrity = await this.getFileIntegrity();
      const securityHealth = await this.getSecurityHealth();
      
      // Calculate overall health score
      const overallHealth = this.calculateOverallHealth({
        buildHealth,
        codeQuality,
        dependencyHealth,
        fileIntegrity,
        securityHealth
      });
      
      // Update health metrics
      this.updateHealthMetrics({
        buildHealth,
        codeQuality,
        dependencyHealth,
        fileIntegrity,
        securityHealth,
        overallHealth,
        lastUpdate: new Date().toISOString()
      });
      
      // Generate dashboard report
      const dashboard = this.generateDashboardReport();
      
      // Log dashboard summary
      this.log(`📊 Project Health Dashboard Generated:`);
      this.log(`🏗️ Build Health: ${buildHealth}/100`);
      this.log(`🔍 Code Quality: ${codeQuality}/100`);
      this.log(`📦 Dependency Health: ${dependencyHealth}/100`);
      this.log(`🔒 File Integrity: ${fileIntegrity}/100`);
      this.log(`🛡️ Security Health: ${securityHealth}/100`);
      this.log(`⭐ Overall Health: ${overallHealth}/100`);
      
      return dashboard;
      
    } catch (error) {
      this.log(`❌ Dashboard generation failed: ${error.message}`);
      return null;
    }
  }

  async getBuildHealth() {
    try {
      const buildMetricsFile = path.join(this.dashboardLogDir, 'build-health-metrics.json');
      if (fs.existsSync(buildMetricsFile)) {
        const metrics = JSON.parse(fs.readFileSync(buildMetricsFile, 'utf8'));
        return metrics.systemHealth === 'excellent' ? 100 : 
               metrics.systemHealth === 'good' ? 80 :
               metrics.systemHealth === 'fair' ? 60 :
               metrics.systemHealth === 'poor' ? 40 : 20;
      }
      
      // Fallback: check if build directories exist
      const buildDirs = ['dist', '.next', 'out', 'build'];
      const existingDirs = buildDirs.filter(dir => fs.existsSync(dir));
      return existingDirs.length > 0 ? 70 : 30;
      
    } catch (error) {
      return 50;
    }
  }

  async getCodeQuality() {
    try {
      const qualityMetricsFile = path.join(this.dashboardLogDir, 'code-quality-metrics.json');
      if (fs.existsSync(qualityMetricsFile)) {
        const metrics = JSON.parse(fs.readFileSync(qualityMetricsFile, 'utf8'));
        return metrics.overallScore || 50;
      }
      
      // Fallback: run basic quality checks
      return await this.runBasicQualityCheck();
      
    } catch (error) {
      return 50;
    }
  }

  async runBasicQualityCheck() {
    try {
      let score = 100;
      
      // Check for TypeScript files
      const tsFiles = this.countFilesByExtension(['.ts', '.tsx']);
      if (tsFiles > 0) score += 10;
      
      // Check for test files
      const testFiles = this.countFilesByExtension(['.test.js', '.test.ts', '.spec.js', '.spec.ts']);
      if (testFiles > 0) score += 10;
      
      // Check for configuration files
      const configFiles = ['package.json', 'tsconfig.json', 'next.config.js', 'tailwind.config.js'];
      const existingConfigs = configFiles.filter(file => fs.existsSync(file));
      score += (existingConfigs.length / configFiles.length) * 20;
      
      return Math.min(100, score);
      
    } catch (error) {
      return 50;
    }
  }

  countFilesByExtension(extensions) {
    let count = 0;
    
    try {
      const srcDir = path.join(process.cwd(), 'src');
      const componentsDir = path.join(process.cwd(), 'components');
      
      if (fs.existsSync(srcDir)) {
        count += this.countFilesInDirectory(srcDir, extensions);
      }
      
      if (fs.existsSync(componentsDir)) {
        count += this.countFilesInDirectory(componentsDir, extensions);
      }
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

  async getDependencyHealth() {
    try {
      const dependencyMetricsFile = path.join(this.dashboardLogDir, 'dependency-metrics.json');
      if (fs.existsSync(dependencyMetricsFile)) {
        const metrics = JSON.parse(fs.readFileSync(dependencyMetricsFile, 'utf8'));
        
        let score = 100;
        if (metrics.vulnerableDependencies > 0) score -= 40;
        if (metrics.outdatedDependencies > 10) score -= 20;
        if (metrics.outdatedDependencies > 5) score -= 10;
        
        return Math.max(0, score);
      }
      
      // Fallback: check package.json
      if (fs.existsSync('package.json')) {
        return 70;
      }
      
      return 30;
      
    } catch (error) {
      return 50;
    }
  }

  async getFileIntegrity() {
    try {
      const integrityMetricsFile = path.join(this.dashboardLogDir, 'file-integrity-metrics.json');
      if (fs.existsSync(integrityMetricsFile)) {
        const metrics = JSON.parse(fs.readFileSync(integrityMetricsFile, 'utf8'));
        
        let score = 100;
        if (metrics.corruptedFiles > 0) score -= 50;
        if (metrics.modifiedFiles > 20) score -= 20;
        if (metrics.modifiedFiles > 10) score -= 10;
        
        return Math.max(0, score);
      }
      
      // Fallback: check critical files
      const criticalFiles = ['package.json', 'next.config.js', 'tsconfig.json'];
      const existingFiles = criticalFiles.filter(file => fs.existsSync(file));
      return (existingFiles.length / criticalFiles.length) * 100;
      
    } catch (error) {
      return 50;
    }
  }

  async getSecurityHealth() {
    try {
      // Check for security configuration files
      const securityFiles = ['.env.example', 'security.md', 'SECURITY.md'];
      const existingSecurityFiles = securityFiles.filter(file => fs.existsSync(file));
      
      let score = 50;
      score += (existingSecurityFiles.length / securityFiles.length) * 30;
      
      // Check for HTTPS configuration
      if (fs.existsSync('next.config.js')) {
        const config = fs.readFileSync('next.config.js', 'utf8');
        if (config.includes('https') || config.includes('secure')) {
          score += 20;
        }
      }
      
      return Math.min(100, score);
      
    } catch (error) {
      return 50;
    }
  }

  calculateOverallHealth(metrics) {
    const weights = {
      buildHealth: 0.25,
      codeQuality: 0.25,
      dependencyHealth: 0.20,
      fileIntegrity: 0.20,
      securityHealth: 0.10
    };
    
    const overallScore = Object.entries(metrics).reduce((total, [key, value]) => {
      if (key !== 'overallHealth' && weights[key]) {
        return total + (value * weights[key]);
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
    const metricsFile = path.join(this.dashboardLogDir, 'project-health-metrics.json');
    fs.writeFileSync(metricsFile, JSON.stringify({
      ...this.healthMetrics,
      history: this.healthHistory
    }, null, 2));
  }

  generateDashboardReport() {
    const totalChecks = this.healthHistory.length;
    const excellentChecks = this.healthHistory.filter(h => h.overallHealth >= 90).length;
    const goodChecks = this.healthHistory.filter(h => h.overallHealth >= 80 && h.overallHealth < 90).length;
    const fairChecks = this.healthHistory.filter(h => h.overallHealth >= 70 && h.overallHealth < 80).length;
    const poorChecks = this.healthHistory.filter(h => h.overallHealth >= 60 && h.overallHealth < 70).length;
    const criticalChecks = this.healthHistory.filter(h => h.overallHealth < 60).length;
    
    const report = {
      currentHealth: this.healthMetrics.overallHealth,
      healthBreakdown: {
        build: this.healthMetrics.buildHealth,
        codeQuality: this.healthMetrics.codeQuality,
        dependencies: this.healthMetrics.dependencyHealth,
        fileIntegrity: this.healthMetrics.fileIntegrity,
        security: this.healthMetrics.securityHealth
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
      recommendations: this.generateDashboardRecommendations(),
      trends: this.analyzeHealthTrends()
    };
    
    return report;
  }

  generateDashboardRecommendations() {
    const recommendations = [];
    
    if (this.healthMetrics.buildHealth < 70) {
      recommendations.push('🏗️ Build health is poor. Check build configuration and dependencies.');
    }
    
    if (this.healthMetrics.codeQuality < 70) {
      recommendations.push('🔍 Code quality needs improvement. Run linting and fix issues.');
    }
    
    if (this.healthMetrics.dependencyHealth < 70) {
      recommendations.push('📦 Dependency health is poor. Update packages and fix vulnerabilities.');
    }
    
    if (this.healthMetrics.fileIntegrity < 70) {
      recommendations.push('🔒 File integrity issues detected. Check for corruption or unauthorized changes.');
    }
    
    if (this.healthMetrics.securityHealth < 70) {
      recommendations.push('🛡️ Security configuration needs improvement. Review security settings.');
    }
    
    if (this.healthMetrics.overallHealth >= 90) {
      recommendations.push('✅ Project health is excellent! Maintain current standards.');
    } else if (this.healthMetrics.overallHealth >= 80) {
      recommendations.push('👍 Project health is good. Minor improvements can be made.');
    } else if (this.healthMetrics.overallHealth >= 70) {
      recommendations.push('⚠️ Project health is fair. Several areas need attention.');
    } else {
      recommendations.push('🚨 Project health is poor. Immediate action required.');
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
    if (Math.abs(change) > 10) {
      trend = change > 0 ? 'significant_improvement' : 'significant_decline';
    } else if (Math.abs(change) > 5) {
      trend = change > 0 ? 'improvement' : 'decline';
    }
    
    return { trend, direction, change: Math.round(change) };
  }

  async startContinuousDashboard() {
    this.log('🔄 Starting continuous health dashboard...');
    
    const interval = parseInt(process.env.AUTOMATION_INTERVAL) || 300000; // 5 minutes default
    
    // Generate initial dashboard
    await this.generateHealthDashboard();
    
    // Set up continuous dashboard updates
    setInterval(async () => {
      this.log('🔄 Updating health dashboard...');
      await this.generateHealthDashboard();
      
      // Generate and log report
      const report = this.generateDashboardReport();
      this.log(`📊 Dashboard Updated: ${report.currentHealth}/100 (${report.trends.direction})`);
      
      if (report.recommendations.length > 0) {
        this.log('💡 Top Recommendations:');
        report.recommendations.slice(0, 3).forEach(rec => this.log(`   ${rec}`));
      }
    }, interval);
    
    this.log(`⏰ Health dashboard active. Updating every ${interval / 60000} minutes.`);
  }
}

// Main execution
async function main() {
  const dashboard = new ProjectHealthDashboard();
  
  try {
    await dashboard.startContinuousDashboard();
  } catch (error) {
    console.error('❌ Project health dashboard failed:', error);
    process.exit(1);
  }
}

// Start the health dashboard
main().catch(console.error);
