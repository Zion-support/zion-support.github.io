const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceMonitor {
  constructor() {
    this.logsDir = path.join(__dirname, '../logs');
    this.ensureLogsDir();
  }

  ensureLogsDir() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logMessage);

    const logFile = path.join(this.logsDir, 'performance-monitor.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`);
      const output = execSync(command, {
        encoding: 'utf8',
        cwd: '/workspace',
        stdio: 'pipe',
        timeout: 30000
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'error');
      return { success: false, error: error.message, output: error.stdout || '' };
    }
  }

  async checkBuildPerformance() {
    this.log('🏗️ Checking build performance...');
    
    const startTime = Date.now();
    const buildResult = await this.runCommand('npm run build', 'Build performance test');
    const endTime = Date.now();
    const buildTime = endTime - startTime;

    return {
      success: buildResult.success,
      buildTime,
      output: buildResult.output
    };
  }

  async analyzeBundleSize() {
    this.log('📦 Analyzing bundle size...');
    
    try {
      const buildDir = '/workspace/.next';
      if (!fs.existsSync(buildDir)) {
        return { success: false, error: 'Build directory not found' };
      }

      const getDirSize = (dir) => {
        let size = 0;
        const files = fs.readdirSync(dir);
        
        for (const file of files) {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          
          if (stat.isDirectory()) {
            size += getDirSize(filePath);
          } else {
            size += stat.size;
          }
        }
        
        return size;
      };

      const totalSize = getDirSize(buildDir);
      const sizeInMB = (totalSize / (1024 * 1024)).toFixed(2);

      return {
        success: true,
        totalSize,
        sizeInMB,
        buildDir
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async checkMemoryUsage() {
    this.log('💾 Checking memory usage...');
    
    const memUsage = process.memoryUsage();
    const memInfo = {
      rss: Math.round(memUsage.rss / 1024 / 1024), // MB
      heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024), // MB
      heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024), // MB
      external: Math.round(memUsage.external / 1024 / 1024) // MB
    };

    return {
      success: true,
      memory: memInfo
    };
  }

  async runPerformanceAnalysis() {
    this.log('⚡ Starting performance analysis...');

    const analysis = {
      timestamp: new Date().toISOString(),
      build: null,
      bundle: null,
      memory: null,
      summary: {}
    };

    // Run all performance checks
    analysis.build = await this.checkBuildPerformance();
    analysis.bundle = await this.analyzeBundleSize();
    analysis.memory = await this.checkMemoryUsage();

    // Calculate summary
    analysis.summary = {
      buildTime: analysis.build.buildTime,
      bundleSize: analysis.bundle.sizeInMB,
      memoryUsage: analysis.memory.memory.heapUsed,
      performanceScore: this.calculatePerformanceScore(analysis)
    };

    this.savePerformanceReport(analysis);
    this.log('✅ Performance analysis completed');
    return { success: true, results: analysis };
  }

  calculatePerformanceScore(analysis) {
    let score = 100;
    
    // Deduct points for slow build
    if (analysis.build.buildTime > 60000) score -= 20; // > 1 minute
    else if (analysis.build.buildTime > 30000) score -= 10; // > 30 seconds
    
    // Deduct points for large bundle
    if (analysis.bundle.sizeInMB > 50) score -= 20; // > 50MB
    else if (analysis.bundle.sizeInMB > 20) score -= 10; // > 20MB
    
    // Deduct points for high memory usage
    if (analysis.memory.memory.heapUsed > 500) score -= 15; // > 500MB
    else if (analysis.memory.memory.heapUsed > 200) score -= 5; // > 200MB
    
    return Math.max(0, score);
  }

  savePerformanceReport(results) {
    const reportFile = path.join(this.logsDir, `performance-analysis-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(results, null, 2));
    this.log(`📄 Performance report saved to: ${reportFile}`);
  }
}

// CLI interface
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.runPerformanceAnalysis().catch(error => {
    console.error('Performance analysis failed:', error);
    process.exit(1);
  });
}

module.exports = PerformanceMonitor;