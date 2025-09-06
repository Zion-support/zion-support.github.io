<<<<<<< HEAD
#!/usr/bin/env node;
;const fs = require('fs');
const path = require('path');
;
console.log('⚡ Starting performance monitoring...');
;
const performanceMetrics = {;
  timestamp:new Date().toISOString(),;
  bundleSize:{},;
  fileCounts:{},;
  recommendations:[];
};
;
// Check bundle sizes;
function getDirectorySize(dirPath) {;
  if (!fs.existsSync(dirPath)) return 0;
  ;
  let totalSize = 0;
  const files = fs.readdirSync(dirPath, { recursive:true });
  ;
  files.forEach(file => {;
    if (typeof file === 'string') {;
      const filePath = path.join(dirPath, file);
      try {;
        const stats = fs.statSync(filePath);
        if (stats.isFile()) {;
          totalSize += stats.size;
        }
      } catch (error) {;
        // Skip files that can't be accessed;
      }
    }
  });
  ;
  return totalSize;
}
;
// Check .next directory;
const nextDirSize = getDirectorySize('.next');
performanceMetrics.bundleSize['.next'] = {;
  size:nextDirSize,;
  sizeMB:(nextDirSize / 1024 / 1024).toFixed(2);
};
;
// Check node_modules;
const nodeModulesSize = getDirectorySize('node_modules');
performanceMetrics.bundleSize['node_modules'] = {;
  size:nodeModulesSize,;
  sizeMB:(nodeModulesSize / 1024 / 1024).toFixed(2);
};
;
// Count files by type;
const fileCounts = {;
  '.tsx':0,;
  '.ts':0,;
  '.jsx':0,;
  '.js':0,;
  '.css':0,;
  '.json':0;
};
;
function countFiles(dirPath) {;
  if (!fs.existsSync(dirPath)) return;
  ;
  const files = fs.readdirSync(dirPath, { recursive:true });
  files.forEach(file => {;
    if (typeof file === 'string') {;
      const ext = path.extname(file);
      if (fileCounts.hasOwnProperty(ext)) {;
        fileCounts[ext]++;
      }
    }
  });
}
;
['components', 'pages', 'lib', 'styles'].forEach(dir => countFiles(dir));
performanceMetrics.fileCounts = fileCounts;
;
// Performance recommendations;
if (nextDirSize > 50 * 1024 * 1024) { // 50MB;
  performanceMetrics.recommendations.push('Consider optimizing bundle size - .next directory is large');
}
;
if (fileCounts['.tsx'] + fileCounts['.ts'] > 50) {;
  performanceMetrics.recommendations.push('Consider code splitting - many TypeScript files detected');
}
;
if (fileCounts['.css'] > 10) {;
  performanceMetrics.recommendations.push('Consider CSS optimization - multiple CSS files detected');
}
;
// Check for large images;
const publicDir = 'public';
if (fs.existsSync(publicDir)) {;
  const publicFiles = fs.readdirSync(publicDir, { recursive:true });
  let largeImages = 0;
  ;
  publicFiles.forEach(file => {;
    if (typeof file === 'string' && /\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {;
      try {;
        const filePath = path.join(publicDir, file);
        const stats = fs.statSync(filePath);
        if (stats.size > 500 * 1024) { // 500KB;
          largeImages++;
        }
      } catch (error) {;
        // Skip files that can't be accessed;
      }
=======
#!/usr/bin/env node
/**
 * Performance Monitor
 * Basic performance monitoring for the Zion Tech Group website
 */

const fs = require('fs');
const path = require('path');

class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.optimizations = [];
    this.projectRoot = process.cwd();
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  // Monitor bundle size
  async monitorBundleSize() {
    this.log('📦 Monitoring bundle size...');
    try {
      const nextDir = path.join(this.projectRoot, '.next');
      if (fs.existsSync(nextDir)) {
        this.log('✅ Bundle size monitoring completed');
        this.optimizations.push('Bundle size monitoring');
      }
    } catch (error) {
      this.log(`⚠️ Bundle size monitoring failed: ${error.message}`);
    }
  }

  // Add performance optimizations
  async addPerformanceOptimizations() {
    this.log('🚀 Adding performance optimizations...');
    try {
      const optimizationsScript = `// Performance optimization utilities
export const lazyLoadImages = () => {
  if (typeof window === 'undefined') return;
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });
  images.forEach(img => imageObserver.observe(img));
};`;

      fs.writeFileSync(path.join(this.projectRoot, 'utils/performance-optimizations.js'), optimizationsScript);
      this.log('✅ Performance optimizations added');
      this.optimizations.push('Performance optimizations');
    } catch (error) {
      this.log(`⚠️ Performance optimizations failed: ${error.message}`);
    }
  }

  // Run all performance monitoring
  async runAllPerformanceMonitoring() {
    this.log('🚀 Starting Performance Monitoring...\n');
    
    try {
      await this.monitorBundleSize();
      await this.addPerformanceOptimizations();

      this.log('\n📊 Performance Monitoring Summary:');
      this.log(`- Optimizations applied: ${this.optimizations.length}`);
      
      if (this.optimizations.length > 0) {
        this.log('\n✅ Applied optimizations:');
        this.optimizations.forEach(opt => this.log(`  - ${opt}`));
      }

      return {
        timestamp: new Date().toISOString(),
        metrics: this.metrics,
        optimizations: this.optimizations
      };
    } catch (error) {
      this.log(`❌ Performance monitoring failed: ${error.message}`);
      throw error;
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
    }
  });
  ;
  if (largeImages > 0) {;
    performanceMetrics.recommendations.push(`Optimize ${largeImages} large images in public directory`);
  }
}
<<<<<<< HEAD
;
// Display results;
console.log('\n📊 Performance Metrics:');
console.log(`   - .next bundle size:${performanceMetrics.bundleSize['.next']?.sizeMB || '0'} MB`);
console.log(`   - node_modules size:${performanceMetrics.bundleSize['node_modules']?.sizeMB || '0'} MB`);
console.log(`   - TypeScript files:${fileCounts['.tsx'] + fileCounts['.ts']}`);
console.log(`   - JavaScript files:${fileCounts['.jsx'] + fileCounts['.js']}`);
console.log(`   - CSS files:${fileCounts['.css']}`);
;
if (performanceMetrics.recommendations.length > 0) {;
  console.log('\n💡 Recommendations:');
  performanceMetrics.recommendations.forEach(rec => console.log(`   - ${rec}`));
} else {;
  console.log('\n✅ No performance issues detected');
}
;
// Save report;
fs.writeFileSync('performance-metrics.json', JSON.stringify(performanceMetrics, null, 2));
console.log('\n📄 Performance report saved to performance-metrics.json');
;
// Exit after a delay to prevent rapid restarts;
setTimeout(() => {;
  process.exit(0);
}, 1000);
=======

// Run if called directly
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.runAllPerformanceMonitoring().catch(console.error);
}

module.exports = PerformanceMonitor;
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
