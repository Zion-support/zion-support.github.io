#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class PerformanceOptimizer {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 1800000; // 30 minutes
    this.logLevel = process.env.LOG_LEVEL || 'info';
    this.workingDir = process.cwd();
    this.performanceData = {};
    this.bundleAnalysis = {};
    this.optimizationHistory = [];
    this.performanceThresholds = {
      bundleSize: 1024 * 1024, // 1MB
      fileSize: 100 * 1024,    // 100KB
      loadTime: 3000,          // 3 seconds
      lighthouseScore: 90      // 90/100
    };
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    
    if (level === 'error') {
      console.error(logMessage);
    } else if (level === 'warn') {
      console.warn(logMessage);
    } else {
      console.log(logMessage);
    }
  }

  async analyzeBundlePerformance() {
    try {
      this.log('📊 Analyzing bundle performance...', 'info');
      
      const bundleData = {
        size: await this.analyzeBundleSize(),
        composition: await this.analyzeBundleComposition(),
        dependencies: await this.analyzeDependencyImpact(),
        chunks: await this.analyzeChunkDistribution(),
        timestamp: new Date().toISOString()
      };

      this.bundleAnalysis = bundleData;
      this.log('Bundle analysis completed', 'info');
      return bundleData;
    } catch (error) {
      this.log(`Bundle analysis failed: ${error.message}`, 'error');
      return null;
    }
  }

  async analyzeBundleSize() {
    try {
      const distDir = path.join(this.workingDir, 'dist');
      if (!fs.existsSync(distDir)) {
        return { error: 'Build directory not found' };
      }

      const files = fs.readdirSync(distDir);
      const jsFiles = files.filter(f => f.endsWith('.js'));
      const cssFiles = files.filter(f => f.endsWith('.css'));
      const assetFiles = files.filter(f => !f.endsWith('.js') && !f.endsWith('.css'));

      let totalJsSize = 0;
      let totalCssSize = 0;
      let totalAssetSize = 0;
      const fileDetails = [];

      // Analyze JavaScript files
      for (const file of jsFiles) {
        const filePath = path.join(distDir, file);
        const stats = fs.statSync(filePath);
        totalJsSize += stats.size;
        
        fileDetails.push({
          name: file,
          size: stats.size,
          type: 'javascript',
          sizeKB: Math.round(stats.size / 1024),
          sizeMB: Math.round(stats.size / 1024 / 1024 * 100) / 100
        });
      }

      // Analyze CSS files
      for (const file of cssFiles) {
        const filePath = path.join(distDir, file);
        const stats = fs.statSync(filePath);
        totalCssSize += stats.size;
        
        fileDetails.push({
          name: file,
          size: stats.size,
          type: 'css',
          sizeKB: Math.round(stats.size / 1024),
          sizeMB: Math.round(stats.size / 1024 / 1024 * 100) / 100
        });
      }

      // Analyze asset files
      for (const file of assetFiles) {
        const filePath = path.join(distDir, file);
        const stats = fs.statSync(filePath);
        totalAssetSize += stats.size;
        
        fileDetails.push({
          name: file,
          size: stats.size,
          type: 'asset',
          sizeKB: Math.round(stats.size / 1024),
          sizeMB: Math.round(stats.size / 1024 / 1024 * 100) / 100
        });
      }

      const totalSize = totalJsSize + totalCssSize + totalAssetSize;
      
      // Sort files by size (largest first)
      fileDetails.sort((a, b) => b.size - a.size);

      return {
        totalSize,
        totalSizeKB: Math.round(totalSize / 1024),
        totalSizeMB: Math.round(totalSize / 1024 / 1024 * 100) / 100,
        breakdown: {
          javascript: totalJsSize,
          css: totalCssSize,
          assets: totalAssetSize
        },
        fileCount: {
          javascript: jsFiles.length,
          css: cssFiles.length,
          assets: assetFiles.length
        },
        largestFiles: fileDetails.slice(0, 10),
        recommendations: this.generateBundleSizeRecommendations(totalSize, fileDetails)
      };
    } catch (error) {
      return { error: error.message };
    }
  }

  async analyzeBundleComposition() {
    try {
      // Analyze what's taking up space in the bundle
      const composition = {
        frameworks: 0,
        utilities: 0,
        components: 0,
        assets: 0,
        vendor: 0
      };

      // This would require more sophisticated analysis
      // For now, provide basic structure
      return composition;
    } catch (error) {
      return { error: error.message };
    }
  }

  async analyzeDependencyImpact() {
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.workingDir, 'package.json'), 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      const impact = {
        totalDependencies: Object.keys(dependencies).length,
        largeDependencies: [],
        duplicateDependencies: [],
        unusedDependencies: []
      };

      // Check for large dependencies
      const largeThreshold = 1024 * 1024; // 1MB
      
      // This would require analyzing node_modules size
      // For now, provide basic structure
      return impact;
    } catch (error) {
      return { error: error.message };
    }
  }

  async analyzeChunkDistribution() {
    try {
      const distDir = path.join(this.workingDir, 'dist');
      if (!fs.existsSync(distDir)) {
        return { error: 'Build directory not found' };
      }

      const files = fs.readdirSync(distDir);
      const jsFiles = files.filter(f => f.endsWith('.js'));
      
      const chunks = {
        totalChunks: jsFiles.length,
        chunkSizes: [],
        chunkDistribution: 'unknown',
        recommendations: []
      };

      let totalSize = 0;
      for (const file of jsFiles) {
        const filePath = path.join(distDir, file);
        const stats = fs.statSync(filePath);
        totalSize += stats.size;
        
        chunks.chunkSizes.push({
          name: file,
          size: stats.size,
          sizeKB: Math.round(stats.size / 1024)
        });
      }

      // Analyze chunk distribution
      if (chunks.totalChunks === 1) {
        chunks.chunkDistribution = 'single';
        chunks.recommendations.push('Consider code splitting for better performance');
      } else if (chunks.totalChunks > 5) {
        chunks.chunkDistribution = 'fragmented';
        chunks.recommendations.push('Too many chunks - consider consolidating');
      } else {
        chunks.chunkDistribution = 'balanced';
      }

      // Sort chunks by size
      chunks.chunkSizes.sort((a, b) => b.size - a.size);

      return chunks;
    } catch (error) {
      return { error: error.message };
    }
  }

  generateBundleSizeRecommendations(totalSize, fileDetails) {
    const recommendations = [];
    
    if (totalSize > this.performanceThresholds.bundleSize) {
      recommendations.push('Bundle size exceeds 1MB - implement code splitting');
    }
    
    const largeFiles = fileDetails.filter(f => f.size > this.performanceThresholds.fileSize);
    if (largeFiles.length > 0) {
      recommendations.push(`${largeFiles.length} files exceed 100KB - optimize or split`);
    }
    
    const jsFiles = fileDetails.filter(f => f.type === 'javascript');
    if (jsFiles.length === 1) {
      recommendations.push('Single JavaScript bundle - implement code splitting');
    }
    
    if (jsFiles.length > 5) {
      recommendations.push('Many JavaScript chunks - consider consolidation');
    }
    
    return recommendations;
  }

  async analyzeRuntimePerformance() {
    try {
      this.log('📊 Analyzing runtime performance...', 'info');
      
      const runtimeData = {
        buildTime: await this.measureBuildTime(),
        loadTime: await this.estimateLoadTime(),
        memoryUsage: await this.analyzeMemoryUsage(),
        cpuUsage: await this.analyzeCpuUsage(),
        timestamp: new Date().toISOString()
      };

      this.performanceData.runtime = runtimeData;
      this.log('Runtime performance analysis completed', 'info');
      return runtimeData;
    } catch (error) {
      this.log(`Runtime performance analysis failed: ${error.message}`, 'error');
      return null;
    }
  }

  async measureBuildTime() {
    try {
      const startTime = Date.now();
      
      // Run a quick build to measure time
      execSync('npm run build', { 
        cwd: this.workingDir, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const buildTime = Date.now() - startTime;
      
      return {
        buildTime,
        buildTimeSeconds: Math.round(buildTime / 1000),
        status: buildTime < 30000 ? 'fast' : buildTime < 60000 ? 'moderate' : 'slow',
        recommendations: buildTime > 60000 ? ['Build time is slow - optimize build process'] : []
      };
    } catch (error) {
      return {
        error: error.message,
        status: 'failed'
      };
    }
  }

  async estimateLoadTime() {
    try {
      // Estimate load time based on bundle size
      const bundleSize = this.bundleAnalysis.size?.totalSize || 0;
      const estimatedLoadTime = Math.round(bundleSize / (1024 * 1024) * 1000); // Rough estimate
      
      return {
        estimatedLoadTime,
        estimatedLoadTimeSeconds: Math.round(estimatedLoadTime / 1000),
        status: estimatedLoadTime < 2000 ? 'fast' : estimatedLoadTime < 5000 ? 'moderate' : 'slow',
        recommendations: estimatedLoadTime > 5000 ? ['Load time is slow - implement lazy loading'] : []
      };
    } catch (error) {
      return {
        error: error.message,
        status: 'unknown'
      };
    }
  }

  async analyzeMemoryUsage() {
    try {
      const usage = process.memoryUsage();
      
      return {
        rss: usage.rss,
        heapUsed: usage.heapUsed,
        heapTotal: usage.heapTotal,
        external: usage.external,
        arrayBuffers: usage.arrayBuffers,
        rssMB: Math.round(usage.rss / 1024 / 1024 * 100) / 100,
        heapUsedMB: Math.round(usage.heapUsed / 1024 / 1024 * 100) / 100,
        status: usage.heapUsed < 100 * 1024 * 1024 ? 'low' : usage.heapUsed < 500 * 1024 * 1024 ? 'moderate' : 'high'
      };
    } catch (error) {
      return { error: error.message };
    }
  }

  async analyzeCpuUsage() {
    try {
      const startUsage = process.cpuUsage();
      
      // Wait a bit to measure CPU usage
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const endUsage = process.cpuUsage(startUsage);
      const cpuUsage = (endUsage.user + endUsage.system) / 1000000; // Convert to seconds
      
      return {
        cpuUsage,
        cpuUsagePercent: Math.round(cpuUsage * 100),
        status: cpuUsage < 0.1 ? 'low' : cpuUsage < 0.5 ? 'moderate' : 'high'
      };
    } catch (error) {
      return { error: error.message };
    }
  }

  async generateOptimizationSuggestions() {
    try {
      this.log('💡 Generating optimization suggestions...', 'info');
      
      const suggestions = {
        bundle: [],
        performance: [],
        code: [],
        infrastructure: []
      };

      // Bundle optimization suggestions
      if (this.bundleAnalysis.size) {
        suggestions.bundle.push(...this.bundleAnalysis.size.recommendations);
        
        if (this.bundleAnalysis.size.totalSize > this.performanceThresholds.bundleSize) {
          suggestions.bundle.push('Implement tree shaking to remove unused code');
          suggestions.bundle.push('Use dynamic imports for route-based code splitting');
        }
      }

      // Performance optimization suggestions
      if (this.performanceData.runtime) {
        if (this.performanceData.runtime.buildTime?.status === 'slow') {
          suggestions.performance.push('Optimize build process with parallel processing');
          suggestions.performance.push('Use incremental builds where possible');
        }
        
        if (this.performanceData.runtime.loadTime?.status === 'slow') {
          suggestions.performance.push('Implement lazy loading for non-critical components');
          suggestions.performance.push('Use service workers for caching');
        }
      }

      // Code optimization suggestions
      suggestions.code.push('Use React.memo for expensive components');
      suggestions.code.push('Implement proper key props in lists');
      suggestions.code.push('Avoid inline function creation in render');
      suggestions.code.push('Use useCallback and useMemo for expensive calculations');

      // Infrastructure suggestions
      suggestions.infrastructure.push('Enable gzip compression on server');
      suggestions.infrastructure.push('Implement CDN for static assets');
      suggestions.infrastructure.push('Use HTTP/2 for multiplexing');
      suggestions.infrastructure.push('Enable browser caching with proper headers');

      return suggestions;
    } catch (error) {
      this.log(`Optimization suggestions generation failed: ${error.message}`, 'error');
      return {};
    }
  }

  async generatePerformanceReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          bundleSize: this.bundleAnalysis.size?.totalSizeMB || 0,
          buildTime: this.performanceData.runtime?.buildTime?.buildTimeSeconds || 0,
          loadTime: this.performanceData.runtime?.loadTime?.estimatedLoadTimeSeconds || 0,
          performanceScore: this.calculatePerformanceScore()
        },
        bundleAnalysis: this.bundleAnalysis,
        runtimePerformance: this.performanceData.runtime,
        optimizationSuggestions: await this.generateOptimizationSuggestions(),
        history: this.optimizationHistory.slice(-5) // Last 5 runs
      };

      // Save report
      const reportPath = path.join(this.workingDir, 'logs', 'performance-optimizer-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      this.log('Performance report generated', 'info');
      return report;
    } catch (error) {
      this.log(`Report generation failed: ${error.message}`, 'error');
      return null;
    }
  }

  calculatePerformanceScore() {
    let score = 100;
    
    // Bundle size penalty
    if (this.bundleAnalysis.size?.totalSize) {
      const sizeMB = this.bundleAnalysis.size.totalSize / 1024 / 1024;
      if (sizeMB > 2) score -= 20;
      else if (sizeMB > 1) score -= 10;
    }
    
    // Build time penalty
    if (this.performanceData.runtime?.buildTime?.buildTime) {
      const buildTimeSeconds = this.performanceData.runtime.buildTime.buildTime / 1000;
      if (buildTimeSeconds > 60) score -= 15;
      else if (buildTimeSeconds > 30) score -= 10;
    }
    
    // Load time penalty
    if (this.performanceData.runtime?.loadTime?.estimatedLoadTime) {
      const loadTimeSeconds = this.performanceData.runtime.loadTime.estimatedLoadTime / 1000;
      if (loadTimeSeconds > 5) score -= 15;
      else if (loadTimeSeconds > 3) score -= 10;
    }
    
    return Math.max(0, score);
  }

  async run() {
    this.log('📊 Starting Performance Optimization...', 'info');
    
    try {
      await this.analyzeBundlePerformance();
      await this.analyzeRuntimePerformance();
      
      const report = await this.generatePerformanceReport();
      
      if (report) {
        this.log(`✅ Performance optimization completed:`, 'info');
        this.log(`   Performance Score: ${report.summary.performanceScore}/100`, 'info');
        this.log(`   Bundle Size: ${report.summary.bundleSize}MB`, 'info');
        this.log(`   Build Time: ${report.summary.buildTime}s`, 'info');
        this.log(`   Load Time: ${report.summary.loadTime}s`, 'info');
        
        // Store in history
        this.optimizationHistory.push(report);
        if (this.optimizationHistory.length > 10) {
          this.optimizationHistory.shift();
        }
      }
      
    } catch (error) {
      this.log(`Performance optimization failed: ${error.message}`, 'error');
    }
  }

  start() {
    this.log('🔄 Performance optimizer started with interval:', 'info');
    this.log(`   Interval: ${this.interval / 1000} seconds`, 'info');
    this.log(`   Working directory: ${this.workingDir}`, 'info');
    
    // Run immediately
    this.run();
    
    // Set up interval
    setInterval(() => {
      this.run();
    }, this.interval);
  }
}

// Start the automation if this file is run directly
if (require.main === module) {
  const optimizer = new PerformanceOptimizer();
  optimizer.start();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    optimizer.log('🛑 Performance optimizer shutting down...', 'info');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    optimizer.log('🛑 Performance optimizer shutting down...', 'info');
    process.exit(0);
  });
}

module.exports = PerformanceOptimizer;