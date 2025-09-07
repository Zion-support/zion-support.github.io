<<<<<<< HEAD
<<<<<<< HEAD


#!/usr/bin/env node

#!/usr/bin/env node


main

#!/usr/bin/env node

origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
#!/usr/bin/env node

/**
 * Performance Monitoring Script
 * Monitors application performance metrics
 */

=======
const { execSync } = require('child_process');
>>>>>>> cursor/automate-test-improve-and-merge-code-9862
const fs = require('fs');
const path = require('path');

class PerformanceMonitor {
  constructor() {
<<<<<<< HEAD
    this.metrics = {
      bundleSize: '0',
      memoryUsage: '0',
      timestamp: new Date().toISOString()
    };
  }

  async run() {
    console.log('📊 Running performance monitoring...');
    console.log('✅ Performance monitoring completed');
  }
}

const monitor = new PerformanceMonitor();
monitor.run().catch(console.error);

console.log('📊 Starting performance monitoring...');

// Performance monitoring configuration
const config = {
  outputDir: path.join(__dirname, '..', 'performance-reports'),
  metrics: {
    bundleSize: true,
    loadTime: true,
    memoryUsage: true,
    cpuUsage: true
  }
};

// Ensure output directory exists
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

// Performance metrics collection
function collectMetrics() {
  const metrics = {
    timestamp: new Date().toISOString(),
    memoryUsage: process.memoryUsage(),
    uptime: process.uptime(),
    platform: process.platform,
    nodeVersion: process.version
  };

  return metrics;
}

// Save metrics to file
function saveMetrics(metrics) {
  const filename = `performance-${Date.now()}.json`;
  const filepath = path.join(config.outputDir, filename);
  
  fs.writeFileSync(filepath, JSON.stringify(metrics, null, 2));
  console.log(`📈 Performance metrics saved to: ${filename}`);
}

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      bundleSize: '0',
      memoryUsage: '0',
      timestamp: new Date().toISOString()
    };
  }

  async run() {
    console.log('📊 Running performance monitoring...');
    console.log('✅ Performance monitoring completed');
  }
}

const monitor = new PerformanceMonitor();
monitor.run().catch(console.error);

main


// Save report
fs.writeFileSync('performance-metrics.json', JSON.stringify(performanceMetrics, null, 2));
console.log('\n📄 Performance report saved to performance-metrics.json');

// Exit after a delay to prevent rapid restarts
setTimeout(() => {
  process.exit(0);
}, 1000);
ursor/automate-test-improve-and-merge-code-59d5

console.log('⚡ Performance Monitor');
console.log('=====================');

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
      });
      
      const sizeInMB = totalSize / (1024 * 1024);
      console.log(`📦 Total bundle size: ${sizeInMB.toFixed(2)} MB`);
      
      return sizeInMB < 10; // Alert if over 10MB
    }
  },
  {
    name: 'Image optimization check',
    check: () => {
      const publicDir = 'public';
      if (!fs.existsSync(publicDir)) return true;
      
      const files = fs.readdirSync(publicDir, { recursive: true });
      const imageFiles = files.filter(file => 
        /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
      );
      
      console.log(`🖼️  Found ${imageFiles.length} image files`);
      
      // Check for unoptimized images
      const largeImages = imageFiles.filter(file => {
        const filePath = path.join(publicDir, file);
        const stats = fs.statSync(filePath);
return stats.size > 500000; // 500KB;
      });
      
      if (largeImages.length > 0) {
        console.log(`⚠️  Large images found: ${largeImages.join(', ')}`);
        return false;
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
=======
    this.reportPath = '/workspace/performance-report.json';
    this.metrics = {
      timestamp: new Date().toISOString(),
      buildTime: 0,
      bundleSize: 0,
      pageCount: 0,
      lighthouseScore: 0,
      memoryUsage: 0
    };
  }

  log(message) {
    console.log(`ℹ️ [${new Date().toISOString()}] ${message}`);
  }

  async measureBuildTime() {
    this.log('Measuring build time...');
    const startTime = Date.now();
    
    try {
      execSync('npm run build', { stdio: 'pipe' });
      this.metrics.buildTime = Date.now() - startTime;
      this.log(`✅ Build completed in ${this.metrics.buildTime}ms`);
    } catch (error) {
      this.log(`❌ Build failed: ${error.message}`);
      throw error;
    }
  }

  async measureBundleSize() {
    this.log('Measuring bundle size...');
    
    try {
      const buildOutput = execSync('npm run build', { stdio: 'pipe', encoding: 'utf8' });
      const sizeMatch = buildOutput.match(/First Load JS shared by all\s+(\d+\.?\d*)\s+kB/);
      
      if (sizeMatch) {
        this.metrics.bundleSize = parseFloat(sizeMatch[1]);
        this.log(`✅ Bundle size: ${this.metrics.bundleSize} kB`);
      }
    } catch (error) {
      this.log(`❌ Bundle size measurement failed: ${error.message}`);
    }
  }

  async countPages() {
    this.log('Counting pages...');
    
    try {
      const pagesDir = '/workspace/app';
      const pages = this.countFilesRecursively(pagesDir, '.tsx');
      this.metrics.pageCount = pages;
      this.log(`✅ Found ${pages} pages`);
    } catch (error) {
      this.log(`❌ Page count failed: ${error.message}`);
    }
  }

  countFilesRecursively(dir, extension) {
    let count = 0;
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        count += this.countFilesRecursively(filePath, extension);
      } else if (file.endsWith(extension)) {
        count++;
      }
    }
    
    return count;
  }

  async measureMemoryUsage() {
    this.log('Measuring memory usage...');
    
    try {
      const memUsage = process.memoryUsage();
      this.metrics.memoryUsage = Math.round(memUsage.heapUsed / 1024 / 1024); // MB
      this.log(`✅ Memory usage: ${this.metrics.memoryUsage} MB`);
    } catch (error) {
      this.log(`❌ Memory measurement failed: ${error.message}`);
    }
  }

  async runLighthouse() {
    this.log('Running Lighthouse audit...');
    
    try {
      // Start dev server in background
      const devProcess = execSync('npm run dev &', { stdio: 'pipe' });
      
      // Wait for server to start
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Run Lighthouse
      const lighthouseOutput = execSync('npx lighthouse http://localhost:3000 --output=json --quiet', { 
        stdio: 'pipe', 
        encoding: 'utf8' 
      });
      
      const lighthouseData = JSON.parse(lighthouseOutput);
      this.metrics.lighthouseScore = Math.round(lighthouseData.categories.performance.score * 100);
      
      this.log(`✅ Lighthouse score: ${this.metrics.lighthouseScore}/100`);
      
      // Kill dev server
      execSync('pkill -f "next dev"', { stdio: 'pipe' });
    } catch (error) {
      this.log(`❌ Lighthouse audit failed: ${error.message}`);
    }
  }

  async generateReport() {
    this.log('Generating performance report...');
    
    try {
      const report = {
        ...this.metrics,
        recommendations: this.generateRecommendations()
      };
      
      fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
      this.log(`✅ Performance report saved to ${this.reportPath}`);
      
      // Display summary
      console.log('\n📊 PERFORMANCE SUMMARY');
      console.log('==========================================');
      console.log(`Build Time: ${this.metrics.buildTime}ms`);
      console.log(`Bundle Size: ${this.metrics.bundleSize} kB`);
      console.log(`Page Count: ${this.metrics.pageCount}`);
      console.log(`Lighthouse Score: ${this.metrics.lighthouseScore}/100`);
      console.log(`Memory Usage: ${this.metrics.memoryUsage} MB`);
      console.log('\n💡 RECOMMENDATIONS');
      report.recommendations.forEach((rec, index) => {
        console.log(`${index + 1}. ${rec}`);
      });
    } catch (error) {
      this.log(`❌ Report generation failed: ${error.message}`);
    }
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.metrics.buildTime > 30000) {
      recommendations.push('Consider optimizing build process - build time is over 30s');
    }
    
    if (this.metrics.bundleSize > 200) {
      recommendations.push('Bundle size is large - consider code splitting and tree shaking');
    }
    
    if (this.metrics.lighthouseScore < 90) {
      recommendations.push('Lighthouse score is below 90 - optimize performance');
    }
    
    if (this.metrics.memoryUsage > 100) {
      recommendations.push('High memory usage detected - check for memory leaks');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('Performance metrics look good! Keep up the great work.');
>>>>>>> cursor/automate-test-improve-and-merge-code-9862
    }
    
    return recommendations;
  }

  async run() {
<<<<<<< HEAD
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
=======
    this.log('🚀 Starting Performance Monitor...');
    
    try {
      await this.measureBuildTime();
      await this.measureBundleSize();
      await this.countPages();
      await this.measureMemoryUsage();
      // await this.runLighthouse(); // Commented out to avoid port conflicts
      
      await this.generateReport();
      
      this.log('✅ Performance monitoring completed successfully!');
    } catch (error) {
      this.log(`❌ Performance monitoring failed: ${error.message}`);
      process.exit(1);
>>>>>>> cursor/automate-test-improve-and-merge-code-9862
    }
  }
}

<<<<<<< HEAD
// Run the performance monitor
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.run().catch(console.error);
}

module.exports = PerformanceMonitor;

origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
// Main execution
try {
  const metrics = collectMetrics();
  saveMetrics(metrics);
  console.log('✅ Performance monitoring completed');
} catch (error) {
  console.error('❌ Performance monitoring failed:', error.message);
  process.exit(1);
}
=======
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class PerformanceMonitor {
  constructor() {
    this.reportFile = path.join(process.cwd(), 'performance-monitor-report.json');
    this.metrics = {
      timestamp: new Date().toISOString(),
      buildTime: 0,
      bundleSize: 0,
      pageLoadTime: 0,
      memoryUsage: process.memoryUsage(),
      recommendations: []
    };
  }

  async monitorBuild() {
    console.log('🔍 Monitoring build performance...');
    
    const startTime = Date.now();
    
    try {
      // Check if build exists
      const buildDir = path.join(process.cwd(), '.next');
      if (fs.existsSync(buildDir)) {
        this.metrics.buildTime = Date.now() - startTime;
        this.metrics.bundleSize = this.calculateBundleSize(buildDir);
        console.log(`✅ Build found - Size: ${this.metrics.bundleSize} bytes`);
      } else {
        console.log('⚠️ No build found, running build...');
        const { execSync } = require('child_process');
        execSync('npm run build', { stdio: 'inherit' });
        this.metrics.buildTime = Date.now() - startTime;
        this.metrics.bundleSize = this.calculateBundleSize(buildDir);
      }
      
      this.generateRecommendations();
      this.saveReport();
      
      return {
        success: true,
        metrics: this.metrics
      };
    } catch (error) {
      console.error('❌ Performance monitoring failed:', error.message);
      return {
        success: false,
        error: error.message
      };
    }
  }

  calculateBundleSize(dir) {
    let totalSize = 0;
    
    function calculateDirSize(dirPath) {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stats = fs.statSync(itemPath);
        
        if (stats.isDirectory()) {
          calculateDirSize(itemPath);
        } else {
          totalSize += stats.size;
        }
      }
    }
    
    if (fs.existsSync(dir)) {
      calculateDirSize(dir);
    }
    
    return totalSize;
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Bundle size recommendations
    if (this.metrics.bundleSize > 5 * 1024 * 1024) { // 5MB
      recommendations.push({
        type: 'bundle_size',
        priority: 'high',
        message: 'Bundle size is large (>5MB). Consider code splitting and lazy loading.',
        action: 'Implement dynamic imports and optimize dependencies'
      });
    }
    
    // Build time recommendations
    if (this.metrics.buildTime > 60000) { // 1 minute
      recommendations.push({
        type: 'build_time',
        priority: 'medium',
        message: 'Build time is slow (>1 minute). Consider optimizing build process.',
        action: 'Review webpack configuration and dependencies'
      });
    }
    
    // Memory usage recommendations
    const memoryUsage = this.metrics.memoryUsage;
    const memoryMB = memoryUsage.heapUsed / 1024 / 1024;
    
    if (memoryMB > 500) { // 500MB
      recommendations.push({
        type: 'memory_usage',
        priority: 'medium',
        message: `High memory usage (${memoryMB.toFixed(2)}MB). Consider memory optimization.`,
        action: 'Review memory leaks and optimize data structures'
      });
    }
    
    this.metrics.recommendations = recommendations;
  }

  saveReport() {
    try {
      fs.writeFileSync(this.reportFile, JSON.stringify(this.metrics, null, 2));
      console.log(`📊 Performance report saved: ${this.reportFile}`);
    } catch (error) {
      console.error('❌ Failed to save performance report:', error.message);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.monitorBuild().catch(console.error);
}

module.exports = PerformanceMonitor;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
// Run if called directly
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.run();
}

module.exports = PerformanceMonitor;
>>>>>>> cursor/automate-test-improve-and-merge-code-9862
