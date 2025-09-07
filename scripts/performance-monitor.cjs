
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');


class PerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.metrics = {
      memoryUsage: process.memoryUsage(),
      uptime: process.uptime(),
      platform: process.platform,
      nodeVersion: process.version,
    };
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄',
      'PERFORMANCE': '⚡'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async measureBuildTime() {
    this.log('Measuring build time...', 'PERFORMANCE');
    try {
      const startTime = Date.now();
      execSync('npm run build', {
        stdio: 'pipe',
        encoding: 'utf8'
      });
      const buildTime = Date.now() - startTime;
      this.metrics.buildTime = buildTime;
      this.log(`Build completed in ${buildTime}ms`, 'SUCCESS');
    } catch (error) {
      this.log(`Build failed: ${error.message}`, 'ERROR');
    }
  }

  async analyzeBundleSize() {
    this.log('Analyzing bundle size...', 'PERFORMANCE');
    try {
      const buildOutput = execSync('npm run build', {
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      // Analyze build output for bundle size
      const bundleSize = this.extractBundleSize(buildOutput);
      this.metrics.bundleSize = bundleSize;
      this.log(`Bundle size: ${bundleSize}kB`, 'INFO');
    } catch (error) {
      this.log(`Bundle analysis failed: ${error.message}`, 'ERROR');
    }
  }

  extractBundleSize(output) {
    // Simple extraction of bundle size from build output
    const lines = output.split('\n');
    for (const line of lines) {
      if (line.includes('First Load JS')) {
        const match = line.match(/(\d+)\s*kB/);
        if (match) return parseInt(match[1]);
      }
    }
    return 0;
  }

  async checkImageOptimization() {
    this.log('Checking image optimization...', 'PERFORMANCE');
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const publicDir = path.join(this.projectRoot, 'public');
    
    if (!fs.existsSync(publicDir)) {
      this.log('Public directory not found', 'WARNING');
      return;
    }

    let imageCount = 0;
    let totalImageSize = 0;
    const largeImages = [];

    const scanDirectory = (dir) => {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          scanDirectory(filePath);
        } else if (imageExtensions.some(ext => file.toLowerCase().endsWith(ext))) {
          imageCount++;
          totalImageSize += stat.size;
          
          if (stat.size > 500 * 1024) { // 500KB
            largeImages.push({
              path: filePath,
              size: Math.round(stat.size / 1024) + 'KB'
            });
          }
        }
      }
    };

    scanDirectory(publicDir);
    
    this.log(`Found ${imageCount} images (${Math.round(totalImageSize / 1024)}KB total)`, 'INFO');
    
    if (largeImages.length > 0) {
      this.log(`Large images found:`, 'WARNING');
      largeImages.forEach(img => {
        this.log(`  - ${img.path}: ${img.size}`, 'WARNING');
      });
    }
  }

  async checkCodeSplitting() {
    this.log('Checking code splitting...', 'PERFORMANCE');
    const pagesDir = path.join(this.projectRoot, 'pages');
    const appDir = path.join(this.projectRoot, 'app');
    
    let pageCount = 0;
    const pages = [];

    const scanForPages = (dir, prefix = '') => {
      if (!fs.existsSync(dir)) return;
      
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          scanForPages(filePath, prefix + file + '/');
        } else if (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.js')) {
          if (file === 'index.tsx' || file === 'index.jsx' || file === 'page.tsx' || file === 'page.jsx') {
            pageCount++;
            pages.push(prefix + file);
          }
        }
      }
    };

    scanForPages(pagesDir);
    scanForPages(appDir);
    
    this.metrics.pageCount = pageCount;
    this.log(`Found ${pageCount} pages`, 'INFO');
    
    if (pageCount > 20) {
      this.log('Consider implementing more code splitting for better performance', 'WARNING');
    }
  }

  async generateReport() {
    this.log('Generating performance report...', 'PROGRESS');
    
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      recommendations: this.getRecommendations()
    };

    const reportFile = path.join(this.projectRoot, 'performance-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Performance report saved to ${reportFile}`, 'SUCCESS');
    return report;
  }

  getRecommendations() {
    const recommendations = [];
    
    if (this.metrics.buildTime > 60000) {
      recommendations.push({
        type: 'build_optimization',
        priority: 'high',
        message: 'Build time is over 60 seconds. Consider optimizing build process.'
      });
    }
    
    if (this.metrics.bundleSize > 1000) {
      recommendations.push({
        type: 'bundle_optimization',
        priority: 'high',
        message: 'Bundle size is large. Consider code splitting and tree shaking.'
      });
    }
    
    if (this.metrics.pageCount > 20) {
      recommendations.push({
        type: 'code_splitting',
        priority: 'medium',
        message: 'Many pages detected. Consider implementing dynamic imports.'
      });
    }
    
    return recommendations;
  }

  async run() {
    this.log('🚀 Starting Performance Monitor', 'PROGRESS');
    
    try {
      await this.measureBuildTime();
      await this.analyzeBundleSize();
      await this.checkImageOptimization();
      await this.checkCodeSplitting();
      
      const report = await this.generateReport();
      
      this.log('✅ Performance monitoring completed', 'SUCCESS');
      return report;
    } catch (error) {
      this.log(`❌ Performance monitoring failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the performance monitor
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.run().catch(console.error);
}

module.exports = PerformanceMonitor;
