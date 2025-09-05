#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceMonitor {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'performance-monitor.log');
    this.reportFile = path.join(__dirname, 'reports', 'performance-report.json');
    this.ensureDirectories();
    this.metrics = {
      bundleSize: 0,
      buildTime: 0,
      testResults: {},
      performanceScore: 0
    };
  }

  ensureDirectories() {
    const dirs = [
      path.dirname(this.logFile),
      path.dirname(this.reportFile),
      path.join(__dirname, 'logs'),
      path.join(__dirname, 'reports')
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async measureBuildTime() {
    this.log('Measuring build time...');
    const startTime = Date.now();
    
    try {
      execSync('npm run build', { 
        stdio: 'pipe', 
        cwd: path.join(__dirname, '..')
      });
      
      this.metrics.buildTime = Date.now() - startTime;
      this.log(`Build completed in ${this.metrics.buildTime}ms`);
    } catch (error) {
      this.log(`Build failed: ${error.message}`, 'ERROR');
      this.metrics.buildTime = -1;
    }
  }

  async analyzeBundleSize() {
    this.log('Analyzing bundle size...');
    try {
      const result = execSync('npm run build', { 
        stdio: 'pipe', 
        cwd: path.join(__dirname, '..'),
        encoding: 'utf8'
      });
      
      // Extract bundle size from build output
      const sizeMatch = result.match(/First Load JS shared by all\s+(\d+\.?\d*)\s+kB/);
      if (sizeMatch) {
        this.metrics.bundleSize = parseFloat(sizeMatch[1]);
      }
      
      this.log(`Bundle size: ${this.metrics.bundleSize}kB`);
    } catch (error) {
      this.log(`Bundle analysis failed: ${error.message}`, 'ERROR');
    }
  }

  async runTests() {
    this.log('Running performance tests...');
    try {
      // Run smoke tests
      const testResult = execSync('npm run test:smoke', { 
        stdio: 'pipe', 
        cwd: path.join(__dirname, '..'),
        encoding: 'utf8'
      });
      
      this.metrics.testResults.smoke = {
        passed: true,
        output: testResult
      };
      
      this.log('Smoke tests passed');
    } catch (error) {
      this.metrics.testResults.smoke = {
        passed: false,
        error: error.message
      };
      this.log(`Smoke tests failed: ${error.message}`, 'WARN');
    }
  }

  calculatePerformanceScore() {
    let score = 100;
    
    // Deduct points for slow builds
    if (this.metrics.buildTime > 60000) { // 1 minute
      score -= 20;
    } else if (this.metrics.buildTime > 30000) { // 30 seconds
      score -= 10;
    }
    
    // Deduct points for large bundles
    if (this.metrics.bundleSize > 500) { // 500kB
      score -= 30;
    } else if (this.metrics.bundleSize > 300) { // 300kB
      score -= 15;
    }
    
    // Deduct points for failed tests
    if (!this.metrics.testResults.smoke?.passed) {
      score -= 25;
    }
    
    this.metrics.performanceScore = Math.max(0, score);
    return this.metrics.performanceScore;
  }

  async generateReport() {
    const score = this.calculatePerformanceScore();
    
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      performanceScore: score,
      recommendations: this.generateRecommendations()
    };
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`Performance report generated: ${this.reportFile}`);
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.metrics.buildTime > 60000) {
      recommendations.push('Consider optimizing build process - build time is over 1 minute');
    }
    
    if (this.metrics.bundleSize > 500) {
      recommendations.push('Bundle size is large - consider code splitting and tree shaking');
    }
    
    if (!this.metrics.testResults.smoke?.passed) {
      recommendations.push('Fix failing tests to improve reliability');
    }
    
    if (this.metrics.performanceScore < 70) {
      recommendations.push('Overall performance needs improvement - review all metrics');
    }
    
    return recommendations;
  }

  async run() {
    this.log('Starting Performance Monitor...');
    
    try {
      await this.measureBuildTime();
      await this.analyzeBundleSize();
      await this.runTests();
      
      const report = await this.generateReport();
      
      this.log(`Performance Monitor completed. Score: ${report.performanceScore}/100`);
      
      if (report.recommendations.length > 0) {
        this.log('Recommendations:');
        report.recommendations.forEach(rec => this.log(`  - ${rec}`));
      }
      
      return report;
    } catch (error) {
      this.log(`Performance Monitor failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Main execution
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.run().catch(console.error);
}

module.exports = PerformanceMonitor;