#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🏗️ Starting Build Automation...');

class BuildAutomation {
  constructor() {
    this.buildLogDir = path.join(process.cwd(), 'logs');
    this.ensureLogDirectory();
    this.buildHistory = [];
    this.maxBuildHistory = 10;
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.buildLogDir)) {
      fs.mkdirSync(this.buildLogDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    
    const logFile = path.join(this.buildLogDir, 'build-automation.log');
    fs.appendFileSync(logFile, logMessage);
  }

  async runBuild() {
    this.log('🚀 Starting automated build...');
    
    try {
      const startTime = Date.now();
      
      // Clean previous build
      this.log('🧹 Cleaning previous build...');
      if (fs.existsSync('dist')) {
        fs.rmSync('dist', { recursive: true, force: true });
      }
      if (fs.existsSync('.next')) {
        fs.rmSync('.next', { recursive: true, force: true });
      }
      
      // Install dependencies if needed
      this.log('📦 Checking dependencies...');
      if (!fs.existsSync('node_modules')) {
        this.log('📦 Installing dependencies...');
        execSync('npm install', { stdio: 'inherit' });
      }
      
      // Run build
      this.log('🏗️ Running build...');
      execSync('npm run build', { stdio: 'inherit' });
      
      const endTime = Date.now();
      const buildTime = endTime - startTime;
      
      this.log(`✅ Build completed successfully in ${buildTime}ms`);
      
      // Record build success
      this.recordBuildResult(true, buildTime, null);
      
      return { success: true, buildTime, error: null };
      
    } catch (error) {
      this.log(`❌ Build failed: ${error.message}`);
      
      // Record build failure
      this.recordBuildResult(false, 0, error.message);
      
      return { success: false, buildTime: 0, error: error.message };
    }
  }

  recordBuildResult(success, buildTime, error) {
    const buildRecord = {
      timestamp: new Date().toISOString(),
      success,
      buildTime,
      error,
      nodeVersion: process.version,
      platform: process.platform
    };
    
    this.buildHistory.push(buildRecord);
    
    // Keep only recent builds
    if (this.buildHistory.length > this.maxBuildHistory) {
      this.buildHistory = this.buildHistory.slice(-this.maxBuildHistory);
    }
    
    // Save build history
    const historyFile = path.join(this.buildLogDir, 'build-history.json');
    fs.writeFileSync(historyFile, JSON.stringify(this.buildHistory, null, 2));
  }

  generateBuildReport() {
    const totalBuilds = this.buildHistory.length;
    const successfulBuilds = this.buildHistory.filter(b => b.success).length;
    const failedBuilds = totalBuilds - successfulBuilds;
    const successRate = totalBuilds > 0 ? (successfulBuilds / totalBuilds * 100).toFixed(2) : 0;
    
    const avgBuildTime = this.buildHistory
      .filter(b => b.success && b.buildTime > 0)
      .reduce((sum, b) => sum + b.buildTime, 0) / Math.max(successfulBuilds, 1);
    
    const report = {
      summary: {
        totalBuilds,
        successfulBuilds,
        failedBuilds,
        successRate: `${successRate}%`,
        averageBuildTime: `${Math.round(avgBuildTime)}ms`
      },
      recentBuilds: this.buildHistory.slice(-5),
      recommendations: this.generateRecommendations()
    };
    
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.buildHistory.length > 0) {
      const recentBuilds = this.buildHistory.slice(-3);
      const recentFailures = recentBuilds.filter(b => !b.success).length;
      
      if (recentFailures > 0) {
        recommendations.push('🚨 Recent build failures detected. Check build logs for errors.');
      }
      
      if (recentBuilds.some(b => b.success && b.buildTime > 30000)) {
        recommendations.push('🐌 Build times are slow. Consider optimizing build process.');
      }
      
      if (recentBuilds.every(b => b.success)) {
        recommendations.push('✅ Builds are stable. Continue monitoring for performance.');
      }
    }
    
    return recommendations;
  }

  async startContinuousMonitoring() {
    this.log('🔄 Starting continuous build monitoring...');
    
    const interval = parseInt(process.env.AUTOMATION_INTERVAL) || 1800000; // 30 minutes default
    
    // Run initial build
    await this.runBuild();
    
    // Set up continuous monitoring
    setInterval(async () => {
      this.log('🔄 Running scheduled build...');
      await this.runBuild();
      
      // Generate and log report
      const report = this.generateBuildReport();
      this.log(`📊 Build Report: ${report.summary.successRate} success rate, ${report.summary.averageBuildTime} avg time`);
      
      if (report.recommendations.length > 0) {
        this.log('💡 Recommendations:');
        report.recommendations.forEach(rec => this.log(`   ${rec}`));
      }
    }, interval);
    
    this.log(`⏰ Build monitoring active. Running every ${interval / 60000} minutes.`);
  }
}

// Main execution
async function main() {
  const buildAutomation = new BuildAutomation();
  
  try {
    await buildAutomation.startContinuousMonitoring();
  } catch (error) {
    console.error('❌ Build automation failed:', error);
    process.exit(1);
  }
}

// Start the build automation
main().catch(console.error);
