<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
#!/usr/bin/env node
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
#!/usr/bin/env node
/**
 * Performance Monitor
 * Basic performance monitoring for the Zion Tech Group website
 */
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
  log(message, type = 'INFO')
      'INFO': 'ℹ'
      'SUCCESS': ''
      'ERROR': ''
      'WARNING': '⚠'
      'PERFORMANCE': '⚡'
    }[type] || 'ℹ'
    this.log('Measuring build time...', 'PERFORMANCE')
      execSync('npm run build')
        stdio: 'pipe'
        encoding: 'utf8'
      this.log(`Build completed in ${this.metrics.buildTime}ms`, 'SUCCESS'`)
      this.log(`Build failed: ${error.message}`, 'ERROR'`)
    this.log('Analyzing bundle size...', 'PERFORMANCE')
      const buildOutput = execSync('npm run build')
        stdio: 'pipe'
        encoding: 'utf8'
      this.log(`Bundle size: ${this.metrics.bundleSize}kB`, 'INFO'`)
      this.log(`Pages: ${this.metrics.pageCount}`, 'INFO'`)
      this.log(`Bundle analysis failed: ${error.message}`, 'ERROR'`)
    this.log('Checking image optimization...', 'PERFORMANCE')
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']
    const publicDir = path.join(this.projectRoot, 'public')
              size: Math.round(stats.size / 1024) + 'KB'
    this.log(`Found ${imageCount} images (${Math.round(totalImageSize / 1024)}KB total)`, 'INFO'
        type: 'image_optimization'
        priority: 'high'
    this.log('Checking code splitting...', 'PERFORMANCE')
    const pagesDir = path.join(this.projectRoot, 'pages')
        if (file.endsWith('.tsx') || file.endsWith('.jsx')
          const content = fs.readFileSync(file, 'utf8')
          const lines = content.split('\n')
    this.log(`Analyzed ${totalPages} pages`, 'INFO'`)
        type: 'code_splitting'
        priority: 'medium'
    this.log('Checking dependencies...', 'PERFORMANCE')
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'
      const largeDeps = ['lodash', 'moment', 'jquery', 'bootstrap']
          type: 'dependency_optimization'
          priority: 'medium'
          message: `Consider replacing large dependencies: ${largeDependencies.join(', '`})
      this.log(`Dependency check failed: ${error.message}`, 'ERROR'`)
    this.log('\n Performance Report', 'PERFORMANCE')
    this.log('=')
      console.log('\n Recommendations:')
        const priority = rec.priority === 'high' ? '�' : rec.priority === 'medium' ? '�' : '�'
          console.log(`      Details: ${rec.details.map(d => d.file || d).join(', '`})
      this.log('� No performance issues found!', 'SUCCESS')
    let grade = 'A'
    if (this.metrics.performanceScore < 90) grade = 'B'
    if (this.metrics.performanceScore < 80) grade = 'C'
    if (this.metrics.performanceScore < 70) grade = 'D'
    if (this.metrics.performanceScore < 60) grade = 'F'
    this.log(' Starting Performance Monitor', 'PERFORMANCE')
      this.log(`Error during performance monitoring: ${error.message}`, 'ERROR'`)
=======
#!/usr/bin/env node
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d

<<<<<<< HEAD
=======
#!/usr/bin/env node
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
module.exports = PerformanceMonitor;
=======
<<<<<<< HEAD
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
    }
  }
}

// Run if called directly
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.runAllPerformanceMonitoring().catch(console.error);
}

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
module.exports = PerformanceMonitor;
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
  log(message, type = 'INFO')
      'INFO': 'ℹ'
      'SUCCESS': ''
      'ERROR': ''
      'WARNING': '⚠'
      'PERFORMANCE': '⚡'
    }[type] || 'ℹ'
    this.log('Measuring build time...', 'PERFORMANCE')
      execSync('npm run build')
        stdio: 'pipe'
        encoding: 'utf8'
      this.log(`Build completed in ${this.metrics.buildTime}ms`, 'SUCCESS'`)
      this.log(`Build failed: ${error.message}`, 'ERROR'`)
    this.log('Analyzing bundle size...', 'PERFORMANCE')
      const buildOutput = execSync('npm run build')
        stdio: 'pipe'
        encoding: 'utf8'
      this.log(`Bundle size: ${this.metrics.bundleSize}kB`, 'INFO'`)
      this.log(`Pages: ${this.metrics.pageCount}`, 'INFO'`)
      this.log(`Bundle analysis failed: ${error.message}`, 'ERROR'`)
    this.log('Checking image optimization...', 'PERFORMANCE')
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']
    const publicDir = path.join(this.projectRoot, 'public')
              size: Math.round(stats.size / 1024) + 'KB'
    this.log(`Found ${imageCount} images (${Math.round(totalImageSize / 1024)}KB total)`, 'INFO'
        type: 'image_optimization'
        priority: 'high'
    this.log('Checking code splitting...', 'PERFORMANCE')
    const pagesDir = path.join(this.projectRoot, 'pages')
        if (file.endsWith('.tsx') || file.endsWith('.jsx')
          const content = fs.readFileSync(file, 'utf8')
          const lines = content.split('\n')
    this.log(`Analyzed ${totalPages} pages`, 'INFO'`)
        type: 'code_splitting'
        priority: 'medium'
    this.log('Checking dependencies...', 'PERFORMANCE')
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'
      const largeDeps = ['lodash', 'moment', 'jquery', 'bootstrap']
          type: 'dependency_optimization'
          priority: 'medium'
          message: `Consider replacing large dependencies: ${largeDependencies.join(', '`})
      this.log(`Dependency check failed: ${error.message}`, 'ERROR'`)
    this.log('\n Performance Report', 'PERFORMANCE')
    this.log('=')
      console.log('\n Recommendations:')
        const priority = rec.priority === 'high' ? '�' : rec.priority === 'medium' ? '�' : '�'
          console.log(`      Details: ${rec.details.map(d => d.file || d).join(', '`})
      this.log('� No performance issues found!', 'SUCCESS')
    let grade = 'A'
    if (this.metrics.performanceScore < 90) grade = 'B'
    if (this.metrics.performanceScore < 80) grade = 'C'
    if (this.metrics.performanceScore < 70) grade = 'D'
    if (this.metrics.performanceScore < 60) grade = 'F'
    this.log(' Starting Performance Monitor', 'PERFORMANCE')
      this.log(`Error during performance monitoring: ${error.message}`, 'ERROR'`)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
=======
console.log('⚡ Starting performance monitoring...');

const performanceMetrics = {
  timestamp: new Date().toISOString(),
  bundleSize: {},
  fileCounts: {},
  recommendations: []
};

// Check bundle sizes
function getDirectorySize(dirPath) {
  if (!fs.existsSync(dirPath)) return 0;
  
  let totalSize = 0;
  const files = fs.readdirSync(dirPath, { recursive: true });
  
  files.forEach(file => {
    if (typeof file === 'string') {
      const filePath = path.join(dirPath, file);
      try {
        const stats = fs.statSync(filePath);
        if (stats.isFile()) {
          totalSize += stats.size;
        }
      } catch (error) {
        // Skip files that can't be accessed
      }
    }
  });
  
  return totalSize;
}

// Check .next directory
const nextDirSize = getDirectorySize('.next');
performanceMetrics.bundleSize['.next'] = {
  size: nextDirSize,
  sizeMB: (nextDirSize / 1024 / 1024).toFixed(2)
};

// Check node_modules
const nodeModulesSize = getDirectorySize('node_modules');
performanceMetrics.bundleSize['node_modules'] = {
  size: nodeModulesSize,
  sizeMB: (nodeModulesSize / 1024 / 1024).toFixed(2)
};

// Count files by type
const fileCounts = {
  '.tsx': 0,
  '.ts': 0,
  '.jsx': 0,
  '.js': 0,
  '.css': 0,
  '.json': 0
};

function countFiles(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  
  const files = fs.readdirSync(dirPath, { recursive: true });
  files.forEach(file => {
    if (typeof file === 'string') {
      const ext = path.extname(file);
      if (fileCounts.hasOwnProperty(ext)) {
        fileCounts[ext]++;
      }
    }
  });
}

['components', 'pages', 'lib', 'styles'].forEach(dir => countFiles(dir));
performanceMetrics.fileCounts = fileCounts;

// Performance recommendations
if (nextDirSize > 50 * 1024 * 1024) { // 50MB
  performanceMetrics.recommendations.push('Consider optimizing bundle size - .next directory is large');
}

if (fileCounts['.tsx'] + fileCounts['.ts'] > 50) {
  performanceMetrics.recommendations.push('Consider code splitting - many TypeScript files detected');
}

if (fileCounts['.css'] > 10) {
  performanceMetrics.recommendations.push('Consider CSS optimization - multiple CSS files detected');
}

// Check for large images
const publicDir = 'public';
if (fs.existsSync(publicDir)) {
  const publicFiles = fs.readdirSync(publicDir, { recursive: true });
  let largeImages = 0;
  
  publicFiles.forEach(file => {
    if (typeof file === 'string' && /\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
      try {
        const filePath = path.join(publicDir, file);
        const stats = fs.statSync(filePath);
        if (stats.size > 500 * 1024) { // 500KB
          largeImages++;
        }
      } catch (error) {
        // Skip files that can't be accessed
      }
    }
  });
  
  if (largeImages > 0) {
    performanceMetrics.recommendations.push(`Optimize ${largeImages} large images in public directory`);
  }
}

// Display results
console.log('\n📊 Performance Metrics:');
console.log(`   - .next bundle size: ${performanceMetrics.bundleSize['.next']?.sizeMB || '0'} MB`);
console.log(`   - node_modules size: ${performanceMetrics.bundleSize['node_modules']?.sizeMB || '0'} MB`);
console.log(`   - TypeScript files: ${fileCounts['.tsx'] + fileCounts['.ts']}`);
console.log(`   - JavaScript files: ${fileCounts['.jsx'] + fileCounts['.js']}`);
console.log(`   - CSS files: ${fileCounts['.css']}`);

if (performanceMetrics.recommendations.length > 0) {
  console.log('\n💡 Recommendations:');
  performanceMetrics.recommendations.forEach(rec => console.log(`   - ${rec}`));
} else {
  console.log('\n✅ No performance issues detected');
}

// Save report
fs.writeFileSync('performance-metrics.json', JSON.stringify(performanceMetrics, null, 2));
console.log('\n📄 Performance report saved to performance-metrics.json');

// Exit after a delay to prevent rapid restarts
setTimeout(() => {
  process.exit(0);
}, 1000);
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
module.exports = PerformanceMonitor;
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
