<<<<<<< HEAD
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/performance-monitor.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/performance-report.json');
    this.startTime = Date.now();
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Error writing to log file:', error.message);
    }
  }

  async checkBuildPerformance() {
    try {
      this.log('🏗️  Testing build performance...');
      
      const startTime = Date.now();
      
      // Clean previous build
      if (fs.existsSync('dist')) {
        execSync('rm -rf dist', { cwd: this.projectRoot, stdio: 'pipe' });
      }
      
      // Run build
      execSync('npm run build', {
        cwd: this.projectRoot,
        stdio: 'pipe',
        timeout: 300000 // 5 minutes timeout
      });
      
      const buildTime = Date.now() - startTime;
      
      // Check build output size
      const distPath = path.join(this.projectRoot, 'dist');
      const buildSize = this.getDirectorySize(distPath);
      
      return {
        buildTime,
        buildSize,
        success: true
      };
    } catch (error) {
      this.log(`Build performance test failed: ${error.message}`);
      return {
        buildTime: 0,
        buildSize: 0,
        success: false,
        error: error.message
      };
    }
  }

  getDirectorySize(dirPath) {
    try {
      if (!fs.existsSync(dirPath)) {
        return 0;
      }
      
      let totalSize = 0;
      const files = fs.readdirSync(dirPath);
      
      for (const file of files) {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);
        
        if (stats.isDirectory()) {
          totalSize += this.getDirectorySize(filePath);
        } else {
          totalSize += stats.size;
        }
      }
      
      return totalSize;
    } catch (error) {
      this.log(`Error calculating directory size: ${error.message}`);
      return 0;
    }
  }

  async checkBundleSize() {
    try {
      this.log('📦 Analyzing bundle size...');
      
      const distPath = path.join(this.projectRoot, 'dist');
      if (!fs.existsSync(distPath)) {
        return { totalSize: 0, files: [] };
      }
      
      const files = [];
      const walkDir = (dir, relativePath = '') => {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const relativeFilePath = path.join(relativePath, item);
          const stats = fs.statSync(fullPath);
          
          if (stats.isDirectory()) {
            walkDir(fullPath, relativeFilePath);
          } else {
            files.push({
              file: relativeFilePath,
              size: stats.size,
              sizeFormatted: this.formatBytes(stats.size)
            });
          }
        }
      };
      
      walkDir(distPath);
      
      const totalSize = files.reduce((sum, file) => sum + file.size, 0);
      
      // Sort by size (largest first)
      files.sort((a, b) => b.size - a.size);
      
      return {
        totalSize,
        totalSizeFormatted: this.formatBytes(totalSize),
        files: files.slice(0, 10) // Top 10 largest files
      };
    } catch (error) {
      this.log(`Error checking bundle size: ${error.message}`);
      return { totalSize: 0, files: [] };
    }
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  async checkLighthouseScore() {
    try {
      this.log('🔍 Running Lighthouse audit...');
      
      // Check if lighthouse is available
      try {
        execSync('lighthouse --version', { stdio: 'pipe' });
      } catch (error) {
        this.log('Lighthouse not available, skipping audit');
        return null;
      }
      
      // Start the preview server if not running
      let serverProcess = null;
      try {
        execSync('pm2 start ecosystem.config.js --only bolt-zion-app', { stdio: 'pipe' });
        // Wait for server to start
        await new Promise(resolve => setTimeout(resolve, 5000));
      } catch (error) {
        this.log('Could not start preview server for Lighthouse');
        return null;
      }
      
      try {
        // Run lighthouse audit
        const lighthouseResult = execSync('lighthouse http://localhost:4173 --output=json --quiet', {
          cwd: this.projectRoot,
          stdio: 'pipe',
          timeout: 120000 // 2 minutes timeout
        });
        
        const audit = JSON.parse(lighthouseResult.toString());
        
        return {
          performance: Math.round(audit.categories.performance.score * 100),
          accessibility: Math.round(audit.categories.accessibility.score * 100),
          bestPractices: Math.round(audit.categories['best-practices'].score * 100),
          seo: Math.round(audit.categories.seo.score * 100),
          firstContentfulPaint: audit.audits['first-contentful-paint'].numericValue,
          largestContentfulPaint: audit.audits['largest-contentful-paint'].numericValue,
          cumulativeLayoutShift: audit.audits['cumulative-layout-shift'].numericValue
        };
      } finally {
        // Stop the preview server
        try {
          execSync('pm2 stop bolt-zion-app', { stdio: 'pipe' });
        } catch (error) {
          // Ignore errors stopping the server
        }
      }
    } catch (error) {
      this.log(`Lighthouse audit failed: ${error.message}`);
      return null;
    }
  }

  async checkMemoryUsage() {
    try {
      const memUsage = process.memoryUsage();
      
      return {
        rss: memUsage.rss,
        heapTotal: memUsage.heapTotal,
        heapUsed: memUsage.heapUsed,
        external: memUsage.external,
        rssFormatted: this.formatBytes(memUsage.rss),
        heapUsedFormatted: this.formatBytes(memUsage.heapUsed)
      };
    } catch (error) {
      this.log(`Error checking memory usage: ${error.message}`);
      return null;
    }
  }

  generateReport(buildPerf, bundleSize, lighthouse, memory) {
    const performanceScore = lighthouse ? lighthouse.performance : 0;
    const bundleSizeLimit = parseInt(process.env.BUNDLE_SIZE_LIMIT?.replace('MB', '') || '2') * 1024 * 1024;
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        buildTime: buildPerf.buildTime,
        buildSuccess: buildPerf.success,
        bundleSize: bundleSize.totalSize,
        bundleSizeFormatted: bundleSize.totalSizeFormatted,
        bundleSizeLimit: bundleSizeLimit,
        bundleSizeExceeded: bundleSize.totalSize > bundleSizeLimit,
        performanceScore,
        memoryUsage: memory?.heapUsedFormatted || 'N/A'
      },
      buildPerformance: buildPerf,
      bundleAnalysis: bundleSize,
      lighthouse: lighthouse,
      memory: memory,
      recommendations: this.generateRecommendations(buildPerf, bundleSize, lighthouse, bundleSizeLimit)
    };
    
    return report;
  }

  generateRecommendations(buildPerf, bundleSize, lighthouse, bundleSizeLimit) {
    const recommendations = [];
    
    if (!buildPerf.success) {
      recommendations.push({
        type: 'build',
        priority: 'high',
        message: 'Build failed',
        action: 'Fix build errors to ensure deployment works'
      });
    }
    
    if (buildPerf.buildTime > 300000) { // 5 minutes
      recommendations.push({
        type: 'build-time',
        priority: 'medium',
        message: `Build time is ${Math.round(buildPerf.buildTime / 1000)}s (over 5 minutes)`,
        action: 'Optimize build process or increase build timeout'
      });
    }
    
    if (bundleSize.totalSize > bundleSizeLimit) {
      recommendations.push({
        type: 'bundle-size',
        priority: 'high',
        message: `Bundle size ${bundleSize.totalSizeFormatted} exceeds limit`,
        action: 'Optimize bundle size with code splitting and tree shaking'
      });
    }
    
    if (lighthouse && lighthouse.performance < 50) {
      recommendations.push({
        type: 'performance',
        priority: 'high',
        message: `Lighthouse performance score is ${lighthouse.performance}`,
        action: 'Optimize performance with lazy loading and image optimization'
      });
    }
    
    if (lighthouse && lighthouse.accessibility < 80) {
      recommendations.push({
        type: 'accessibility',
        priority: 'medium',
        message: `Lighthouse accessibility score is ${lighthouse.accessibility}`,
        action: 'Improve accessibility with proper ARIA labels and semantic HTML'
      });
    }
    
    return recommendations;
  }

  async saveReport(report) {
    try {
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }
      
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved to: ${this.reportFile}`);
    } catch (error) {
      this.log(`Error saving report: ${error.message}`);
    }
  }

  async run() {
    this.log('⚡ Starting Performance Monitor...');
    this.log(`Project root: ${this.projectRoot}`);
    
    try {
      // Create logs directory if it doesn't exist
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }
      
      // Check build performance
      const buildPerf = await this.checkBuildPerformance();
      
      // Check bundle size
      const bundleSize = await this.checkBundleSize();
      
      // Check Lighthouse score
      const lighthouse = await this.checkLighthouseScore();
      
      // Check memory usage
      const memory = await this.checkMemoryUsage();
      
      // Generate report
      const report = this.generateReport(buildPerf, bundleSize, lighthouse, memory);
      
      // Save report
      await this.saveReport(report);
      
      const duration = Date.now() - this.startTime;
      
      // Log summary
      this.log('\n📊 Performance Monitor Report:');
      this.log(`Build time: ${Math.round(buildPerf.buildTime / 1000)}s`);
      this.log(`Build success: ${buildPerf.success ? '✅' : '❌'}`);
      this.log(`Bundle size: ${bundleSize.totalSizeFormatted}`);
      this.log(`Performance score: ${lighthouse ? lighthouse.performance : 'N/A'}`);
      this.log(`Memory usage: ${memory?.heapUsedFormatted || 'N/A'}`);
      this.log(`Duration: ${duration}ms`);
      
      if (bundleSize.files.length > 0) {
        this.log('\n📦 Largest files:');
        bundleSize.files.slice(0, 5).forEach(file => {
          this.log(`  ${file.file}: ${file.sizeFormatted}`);
        });
      }
      
      if (report.recommendations.length > 0) {
        this.log('\n💡 Recommendations:');
        report.recommendations.forEach(rec => {
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Action: ${rec.action}`);
        });
      }
      
    } catch (error) {
      this.log(`❌ Error running performance monitor: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the performance monitor
const monitor = new PerformanceMonitor();
monitor.run().catch(error => {
  process.exit(1);
});
=======
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst { execSync } = require("child_process");"const fs = require("fs");const log = (message) => { const timestamp = new Date().toISOString(); console.log(`[${timestamp}] Performance Monitor: ${message}`);};const runCommand = (command, description) => { try {` log(`Starting: ${description}`); const output = execSync(command, { " encoding: "utf8", " stdio: "pipe", cwd: process.cwd() });` log(`Completed: ${description}`); return { success: true, output }; } catch (error) {` log(`Failed: ${description} - ${error.message}`); return { success: false, error: error.message }; }};const checkBuildPerformance = () => {" log("Checking build performance"); const startTime = Date.now();" const buildResult = runCommand("npm run build", "Building project for performance check"); const endTime = Date.now(); const buildTime = endTime - startTime;` log(`Build completed in ${buildTime}ms`); return { success: buildResult.success, buildTime: buildTime," performance: buildTime < 60000 ? "GOOD" : buildTime < 120000 ? "FAIR" : "POOR" };};const checkMemoryUsage = () => {" log("Checking memory usage"); try {" const memInfo = execSync("free -m", { encoding: "utf8" });" const lines = memInfo.split("\n"); const memLine = lines[1].split(/\s+/); const totalMem = parseInt(memLine[1]); const usedMem = parseInt(memLine[2]); const memUsagePercent = (usedMem / totalMem) * 100;` log(`Memory usage: ${memUsagePercent.toFixed(2)}% (${usedMem}MB / ${totalMem}MB)`); return { success: true, total: totalMem, used: usedMem, usagePercent: memUsagePercent," status: memUsagePercent < 80 ? "GOOD" : memUsagePercent < 90 ? "WARNING" : "CRITICAL" }; } catch (error) {` log(`Memory check failed: ${error.message}`); return { success: false, error: error.message }; }};const generatePerformanceReport = (results) => { const report = { timestamp: new Date().toISOString(), build: results.build, memory: results.memory, overall: {" status: "GOOD", issues: 0 } }; / Calculate overall status" if (results.build && results.build.performance === "POOR") {" report.overall.status = "WARNING"; report.overall.issues++; } " if (results.memory && results.memory.status === "CRITICAL") {" report.overall.status = "CRITICAL"; report.overall.issues++; } / Save report" const reportPath = "logs/pm2/performance-report.json"; fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));` log(`Performance report saved to ${reportPath}`); return report;};const main = async () => {" log("Starting Performance Monitor Process"); / Run performance checks const buildResults = checkBuildPerformance(); const memoryResults = checkMemoryUsage(); / Generate comprehensive report const results = { build: buildResults, memory: memoryResults }; const report = generatePerformanceReport(results); / Handle performance issues" if (report.overall.status === "CRITICAL") {" log("Critical performance issues detected");" } else if (report.overall.status === "WARNING") {" log("Performance warnings detected, monitoring closely"); } else {" log("Performance monitoring passed: All metrics look good"); } " log("Performance Monitor Process completed");};/ Handle process termination"process.on("SIGINT", () => {" log("Performance Monitor Process interrupted"); process.exit(0);});"process.on("SIGTERM", () => {" log("Performance Monitor Process terminated"); process.exit(0);});/ Run the main functionmain().catch(error => {` log(`Performance Monitor Process failed: ${error.message}`); process.exit(1);});"`"`
=======
#!/usr/bin/env node;
/**
 * Performance Monitor Script for PM2;
 * Replaces GitHub Actions performance monitoring workflows;
 * Runs every 2 hours to monitor and optimize performance;
 */

const { execSync } = require('child_process');
const fs = require('fs');

const log = (message) => {}
  const timestamp = new Date().toISOString();
  
};

const runCommand = (command, description) => {}
  try {}
    log(`Starting: ${description}`);
    const output = execSync(command, { })
      encoding: 'utf8', 
      stdio: 'pipe',
      cwd: process.cwd();
    }
});
    log(`Completed: ${description}`);
    return { success: true, output };
  } catch (error) {}
    log(`Failed: ${description} - ${error.message}`);
    return { success: false, error: error.message };
  };
};

const checkBuildPerformance = () => {}
  log('Checking build performance');
  
  const startTime = Date.now();
  const buildResult = runCommand('npm run build', 'Building project for performance check');
  const endTime = Date.now();
  
  const buildTime = endTime - startTime;
  log(`Build completed in ${buildTime}ms`);
  
  return { }
    success: buildResult.success, 
    buildTime: buildTime,
    performance: buildTime < 60000 ? 'GOOD' : buildTime < 120000 ? 'FAIR' : 'POOR'
  };
};

const checkMemoryUsage = () => {}
  log('Checking memory usage');
  
  try {}
    const memInfo = execSync('free -m', { encoding: 'utf8' }
});
    const lines = memInfo.split('\n');
    const memLine = lines[1].split(/\s+/);
    
    const totalMem = parseInt(memLine[1]);
    const usedMem = parseInt(memLine[2]);
    const memUsagePercent = (usedMem / totalMem) * 100;
    
    log(`Memory usage: ${memUsagePercent.toFixed(2)}% (${usedMem}MB / ${totalMem}MB)`);
    
    return {}
      success: true,
      total: totalMem,
      used: usedMem,
      usagePercent: memUsagePercent,
      status: memUsagePercent < 80 ? 'GOOD' : memUsagePercent < 90 ? 'WARNING' : 'CRITICAL'
    };
  } catch (error) {}
    log(`Memory check failed: ${error.message}`);
    return { success: false, error: error.message };
  };
};

const generatePerformanceReport = (results) => {}
  const report = {}
    timestamp: new Date().toISOString(),
    build: results.build,
    memory: results.memory,
    overall: {}
      status: 'GOOD',
      issues: 0;
    };
  };
  
  // Calculate overall status;
  if (results.build && results.build.performance === 'POOR') {}
    report.overall.status = 'WARNING';
    report.overall.issues++;
  };
  if (results.memory && results.memory.status === 'CRITICAL') {}
    report.overall.status = 'CRITICAL';
    report.overall.issues++;
  };
  // Save report;
  const reportPath = 'logs/pm2/performance-report.json';
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  log(`Performance report saved to ${reportPath}`);
  
  return report;
};

const main = async () => {}
  log('Starting Performance Monitor Process');
  
  // Run performance checks;
  const buildResults = checkBuildPerformance();
  const memoryResults = checkMemoryUsage();
  
  // Generate comprehensive report;
  const results = {}
    build: buildResults,
    memory: memoryResults;
  };
  
  const report = generatePerformanceReport(results);
  
  // Handle performance issues;
  if (report.overall.status === 'CRITICAL') {}
    log('Critical performance issues detected');
  } else if (report.overall.status === 'WARNING') {}
    log('Performance warnings detected, monitoring closely');
  } else {}
    log('Performance monitoring passed: All metrics look good');
  };
  log('Performance Monitor Process completed');
};

// Handle process termination;
process.on('SIGINT', () => {}
  log('Performance Monitor Process interrupted');
  process.exit(0);
}
});

process.on('SIGTERM', () => {}
  log('Performance Monitor Process terminated');
  process.exit(0);
}
});

// Run the main function;
main().catch(error => {})
  log(`Performance Monitor Process failed: ${error.message}`);
  process.exit(1);
}
});
>>>>>>> main
>>>>>>> main
