<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
#!/usr/bin/env node
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
<<<<<<< HEAD
=======

>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
#!/usr/bin/env node

>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
#!/usr/bin/env node


main

#!/usr/bin/env node

origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> 566d12e4e87c285827c8c1f36f24d2818c9f5bb8

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

<<<<<<< HEAD
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
<<<<<<< HEAD
monitor.measureBuildTime();
monitor.measureBundleSize();
const report = monitor.generateReport();

fs.writeFileSync('performance-report.json', JSON.stringify(report, null, 2));
console.log('Performance report generated');
=======
monitor.run().catch(console.error);

=======
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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
<<<<<<< HEAD
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

=======
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

// Save report
fs.writeFileSync('performance-metrics.json', JSON.stringify(performanceMetrics, null, 2));
console.log('\n📄 Performance report saved to performance-metrics.json');

// Exit after a delay to prevent rapid restarts
setTimeout(() => {
  process.exit(0);
}, 1000);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
ursor/automate-test-improve-and-merge-code-59d5

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
console.log('⚡ Performance Monitor');
console.log('=====================');
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

=======
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
=======
>>>>>>> 566d12e4e87c285827c8c1f36f24d2818c9f5bb8
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
