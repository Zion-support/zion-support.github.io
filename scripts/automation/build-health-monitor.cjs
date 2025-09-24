#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🏥 Starting Build Health Monitor...');

class BuildHealthMonitor {
  constructor() {
    this.healthLogDir = path.join(process.cwd(), 'logs');
    this.ensureLogDirectory();
    this.healthMetrics = {
      buildSuccess: 0,
      buildFailure: 0,
      avgBuildTime: 0,
      lastBuildTime: 0,
      systemHealth: 'unknown'
    };
    this.healthHistory = [];
    this.maxHealthHistory = 20;
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.healthLogDir)) {
      fs.mkdirSync(this.healthLogDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    
    const logFile = path.join(this.healthLogDir, 'build-health-monitor.log');
    fs.appendFileSync(logFile, logMessage);
  }

  async checkSystemHealth() {
    this.log('🔍 Checking system health...');
    
    try {
      // Check disk space
      const diskSpace = this.checkDiskSpace();
      
      // Check memory usage
      const memoryUsage = this.checkMemoryUsage();
      
      // Check Node.js version
      const nodeVersion = process.version;
      
      // Check npm version
      const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim();
      
      // Check if build directories exist
      const buildDirs = this.checkBuildDirectories();
      
      // Check package.json integrity
      const packageIntegrity = this.checkPackageIntegrity();
      
      // Calculate overall health score
      const healthScore = this.calculateHealthScore({
        diskSpace,
        memoryUsage,
        nodeVersion,
        npmVersion,
        buildDirs,
        packageIntegrity
      });
      
      // Update health metrics
      this.updateHealthMetrics(healthScore);
      
      // Log health status
      this.log(`🏥 System Health Score: ${healthScore}/100`);
      this.log(`💾 Disk Space: ${diskSpace.status}`);
      this.log(`🧠 Memory Usage: ${memoryUsage.status}`);
      this.log(`🟢 Node.js: ${nodeVersion}`);
      this.log(`📦 npm: ${npmVersion}`);
      
      return healthScore;
      
    } catch (error) {
      this.log(`❌ Health check failed: ${error.message}`);
      return 0;
    }
  }

  checkDiskSpace() {
    try {
      const stats = fs.statSync('.');
      const freeSpace = stats.blocks * 512; // Approximate free space in bytes
      const freeSpaceMB = Math.round(freeSpace / (1024 * 1024));
      
      if (freeSpaceMB > 1000) {
        return { status: '✅ Excellent', score: 100, freeSpaceMB };
      } else if (freeSpaceMB > 500) {
        return { status: '⚠️ Good', score: 80, freeSpaceMB };
      } else if (freeSpaceMB > 100) {
        return { status: '⚠️ Low', score: 60, freeSpaceMB };
      } else {
        return { status: '🚨 Critical', score: 20, freeSpaceMB };
      }
    } catch (error) {
      return { status: '❌ Unknown', score: 0, freeSpaceMB: 0 };
    }
  }

  checkMemoryUsage() {
    const memUsage = process.memoryUsage();
    const usedMB = Math.round(memUsage.heapUsed / (1024 * 1024));
    const totalMB = Math.round(memUsage.heapTotal / (1024 * 1024));
    const usagePercent = Math.round((usedMB / totalMB) * 100);
    
    if (usagePercent < 50) {
      return { status: '✅ Excellent', score: 100, usagePercent };
    } else if (usagePercent < 75) {
      return { status: '⚠️ Good', score: 80, usagePercent };
    } else if (usagePercent < 90) {
      return { status: '⚠️ High', score: 60, usagePercent };
    } else {
      return { status: '🚨 Critical', score: 20, usagePercent };
    }
  }

  checkBuildDirectories() {
    const dirs = ['dist', '.next', 'out', 'build'];
    const existingDirs = dirs.filter(dir => fs.existsSync(dir));
    
    if (existingDirs.length === 0) {
      return { status: '⚠️ No build directories', score: 50 };
    } else if (existingDirs.length >= 2) {
      return { status: '✅ Multiple build directories', score: 100 };
    } else {
      return { status: '⚠️ Single build directory', score: 80 };
    }
  }

  checkPackageIntegrity() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const requiredFields = ['name', 'version', 'scripts', 'dependencies'];
      const missingFields = requiredFields.filter(field => !packageJson[field]);
      
      if (missingFields.length === 0) {
        return { status: '✅ Valid package.json', score: 100 };
      } else {
        return { status: `⚠️ Missing fields: ${missingFields.join(', ')}`, score: 70 };
      }
    } catch (error) {
      return { status: '❌ Invalid package.json', score: 0 };
    }
  }

  calculateHealthScore(metrics) {
    const scores = [
      metrics.diskSpace.score,
      metrics.memoryUsage.score,
      metrics.buildDirs.score,
      metrics.packageIntegrity.score
    ];
    
    // Node.js and npm versions get bonus points if they're recent
    const nodeVersionScore = this.getNodeVersionScore(metrics.nodeVersion);
    const npmVersionScore = this.getNpmVersionScore(metrics.npmVersion);
    
    scores.push(nodeVersionScore, npmVersionScore);
    
    const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    return Math.round(averageScore);
  }

  getNodeVersionScore(version) {
    const majorVersion = parseInt(version.replace('v', '').split('.')[0]);
    if (majorVersion >= 20) return 100;
    if (majorVersion >= 18) return 90;
    if (majorVersion >= 16) return 80;
    if (majorVersion >= 14) return 70;
    return 50;
  }

  getNpmVersionScore(version) {
    const majorVersion = parseInt(version.split('.')[0]);
    if (majorVersion >= 9) return 100;
    if (majorVersion >= 8) return 90;
    if (majorVersion >= 7) return 80;
    if (majorVersion >= 6) return 70;
    return 50;
  }

  updateHealthMetrics(healthScore) {
    this.healthMetrics.systemHealth = this.getHealthStatus(healthScore);
    this.healthMetrics.lastCheck = new Date().toISOString();
    
    // Record health history
    this.healthHistory.push({
      timestamp: new Date().toISOString(),
      score: healthScore,
      status: this.healthMetrics.systemHealth
    });
    
    // Keep only recent history
    if (this.healthHistory.length > this.maxHealthHistory) {
      this.healthHistory = this.healthHistory.slice(-this.maxHealthHistory);
    }
    
    // Save health metrics
    const metricsFile = path.join(this.healthLogDir, 'build-health-metrics.json');
    fs.writeFileSync(metricsFile, JSON.stringify({
      ...this.healthMetrics,
      history: this.healthHistory
    }, null, 2));
  }

  getHealthStatus(score) {
    if (score >= 90) return 'excellent';
    if (score >= 80) return 'good';
    if (score >= 70) return 'fair';
    if (score >= 60) return 'poor';
    return 'critical';
  }

  generateHealthReport() {
    const totalChecks = this.healthHistory.length;
    const excellentChecks = this.healthHistory.filter(h => h.status === 'excellent').length;
    const goodChecks = this.healthHistory.filter(h => h.status === 'good').length;
    const fairChecks = this.healthHistory.filter(h => h.status === 'fair').length;
    const poorChecks = this.healthHistory.filter(h => h.status === 'poor').length;
    const criticalChecks = this.healthHistory.filter(h => h.status === 'critical').length;
    
    const report = {
      currentHealth: this.healthMetrics.systemHealth,
      currentScore: this.healthHistory.length > 0 ? this.healthHistory[this.healthHistory.length - 1].score : 0,
      summary: {
        totalChecks,
        excellent: excellentChecks,
        good: goodChecks,
        fair: fairChecks,
        poor: poorChecks,
        critical: criticalChecks
      },
      recentHistory: this.healthHistory.slice(-5),
      recommendations: this.generateHealthRecommendations()
    };
    
    return report;
  }

  generateHealthRecommendations() {
    const recommendations = [];
    
    if (this.healthHistory.length > 0) {
      const recentChecks = this.healthHistory.slice(-3);
      const avgRecentScore = recentChecks.reduce((sum, h) => sum + h.score, 0) / recentChecks.length;
      
      if (avgRecentScore < 70) {
        recommendations.push('🚨 System health is declining. Check for resource issues.');
      }
      
      if (recentChecks.some(h => h.status === 'critical')) {
        recommendations.push('🚨 Critical health issues detected. Immediate attention required.');
      }
      
      if (avgRecentScore >= 90) {
        recommendations.push('✅ System health is excellent. Continue monitoring.');
      }
    }
    
    return recommendations;
  }

  async startContinuousMonitoring() {
    this.log('🔄 Starting continuous health monitoring...');
    
    const interval = parseInt(process.env.AUTOMATION_INTERVAL) || 300000; // 5 minutes default
    
    // Run initial health check
    await this.checkSystemHealth();
    
    // Set up continuous monitoring
    setInterval(async () => {
      this.log('🔄 Running scheduled health check...');
      await this.checkSystemHealth();
      
      // Generate and log report
      const report = this.generateHealthReport();
      this.log(`📊 Health Report: ${report.currentHealth} (${report.currentScore}/100)`);
      
      if (report.recommendations.length > 0) {
        this.log('💡 Recommendations:');
        report.recommendations.forEach(rec => this.log(`   ${rec}`));
      }
    }, interval);
    
    this.log(`⏰ Health monitoring active. Running every ${interval / 60000} minutes.`);
  }
}

// Main execution
async function main() {
  const healthMonitor = new BuildHealthMonitor();
  
  try {
    await healthMonitor.startContinuousMonitoring();
  } catch (error) {
    console.error('❌ Build health monitor failed:', error);
    process.exit(1);
  }
}

// Start the health monitor
main().catch(console.error);
