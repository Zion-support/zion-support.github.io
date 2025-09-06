<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
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
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======

>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
#!/usr/bin/env node

>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
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
<<<<<<< HEAD
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
=======
console.log('⚡ Performance Monitor');
console.log('=====================');

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      bundleSize: 0,
      buildTime: 0,
      testTime: 0,
      memoryUsage: process.memoryUsage(),
      cpuUsage: process.cpuUsage()
    };
    this.startTime = Date.now();
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logEntry);
  }

  async measureBuildPerformance() {
    this.log('🏗️ Measuring build performance...');
    
    const buildStart = Date.now();
    
    try {
      // Try to build the project
      const result = execSync('npm run build', {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd(),
        timeout: 300000 // 5 minutes timeout
      });
      
      const buildTime = Date.now() - buildStart;
      this.metrics.buildTime = buildTime;
      
      this.log(`✅ Build completed in ${buildTime}ms`, 'success');
      
      // Check bundle size if .next directory exists
      const nextDir = path.join(process.cwd(), '.next');
      if (fs.existsSync(nextDir)) {
        const bundleSize = this.calculateDirectorySize(nextDir);
        this.metrics.bundleSize = bundleSize;
        this.log(`📦 Bundle size: ${(bundleSize / 1024 / 1024).toFixed(2)} MB`, 'info');
      }
      
      return true;
    } catch (error) {
      this.log(`⚠️ Build failed: ${error.message}`, 'warning');
      this.metrics.buildTime = Date.now() - buildStart;
      return false;
    }
  }

  async measureTestPerformance() {
    this.log('🧪 Measuring test performance...');
    
    const testStart = Date.now();
    
    try {
      // Try to run tests
      const result = execSync('npm test', {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd(),
        timeout: 120000 // 2 minutes timeout
      });
      
      const testTime = Date.now() - testStart;
      this.metrics.testTime = testTime;
      
      this.log(`✅ Tests completed in ${testTime}ms`, 'success');
      return true;
    } catch (error) {
      this.log(`⚠️ Tests failed or not found: ${error.message}`, 'warning');
      this.metrics.testTime = Date.now() - testStart;
      return false;
    }
  }

  calculateDirectorySize(dirPath) {
    let totalSize = 0;
    
    try {
      const files = fs.readdirSync(dirPath);
      
      for (const file of files) {
        const filePath = path.join(dirPath, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          totalSize += this.calculateDirectorySize(filePath);
        } else {
          totalSize += stat.size;
        }
      }
    } catch (error) {
      // Ignore errors for inaccessible files
    }
    
    return totalSize;
  }

  async analyzeCodeQuality() {
    this.log('🔍 Analyzing code quality...');
    
    const analysis = {
      totalFiles: 0,
      totalLines: 0,
      totalSize: 0,
      fileTypes: {},
      largestFiles: []
    };
    
    const srcDir = path.join(process.cwd(), 'src');
    if (!fs.existsSync(srcDir)) {
      this.log('⚠️ No src directory found', 'warning');
      return analysis;
    }
    
    const walkDir = (dir) => {
      const files = fs.readdirSync(dir);
      
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          walkDir(filePath);
        } else {
          const ext = path.extname(file);
          const size = stat.size;
          const content = fs.readFileSync(filePath, 'utf8');
          const lines = content.split('\n').length;
          
          analysis.totalFiles++;
          analysis.totalLines += lines;
          analysis.totalSize += size;
          
          if (!analysis.fileTypes[ext]) {
            analysis.fileTypes[ext] = { count: 0, lines: 0, size: 0 };
          }
          analysis.fileTypes[ext].count++;
          analysis.fileTypes[ext].lines += lines;
          analysis.fileTypes[ext].size += size;
          
          analysis.largestFiles.push({
            path: filePath.replace(process.cwd(), ''),
            size: size,
            lines: lines
          });
        }
      }
    };
    
    walkDir(srcDir);
    
    // Sort largest files
    analysis.largestFiles.sort((a, b) => b.size - a.size);
    analysis.largestFiles = analysis.largestFiles.slice(0, 10);
    
    this.log(`📊 Code analysis: ${analysis.totalFiles} files, ${analysis.totalLines} lines, ${(analysis.totalSize / 1024 / 1024).toFixed(2)} MB`, 'info');
    
    return analysis;
  }

  async generateReport() {
    const duration = Date.now() - this.startTime;
    const codeAnalysis = await this.analyzeCodeQuality();
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      metrics: this.metrics,
      codeAnalysis: codeAnalysis,
      recommendations: this.generateRecommendations()
    };
    
    const reportPath = path.join(process.cwd(), 'performance-monitor-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📄 Report saved to: ${reportPath}`);
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.metrics.bundleSize > 5 * 1024 * 1024) { // 5MB
      recommendations.push({
        type: 'bundle-size',
        priority: 'high',
        message: 'Bundle size is large. Consider code splitting and tree shaking.',
        currentSize: `${(this.metrics.bundleSize / 1024 / 1024).toFixed(2)} MB`
      });
    }
    
    if (this.metrics.buildTime > 60000) { // 1 minute
      recommendations.push({
        type: 'build-time',
        priority: 'medium',
        message: 'Build time is slow. Consider optimizing build configuration.',
        currentTime: `${(this.metrics.buildTime / 1000).toFixed(2)} seconds`
      });
    }
    
    if (this.metrics.testTime > 30000) { // 30 seconds
      recommendations.push({
        type: 'test-time',
        priority: 'medium',
        message: 'Test execution is slow. Consider parallel test execution.',
        currentTime: `${(this.metrics.testTime / 1000).toFixed(2)} seconds`
      });
    }
    
    return recommendations;
  }

  async run() {
    this.log('🚀 Starting performance monitoring...');
    
    try {
      await this.measureBuildPerformance();
      await this.measureTestPerformance();
      
      const report = await this.generateReport();
      
      this.log('🎉 Performance monitoring completed!');
      this.log(`📊 Summary: Build ${this.metrics.buildTime}ms, Tests ${this.metrics.testTime}ms, Bundle ${(this.metrics.bundleSize / 1024 / 1024).toFixed(2)}MB`);
      
      if (report.recommendations.length > 0) {
        this.log('💡 Recommendations:');
        report.recommendations.forEach(rec => {
          this.log(`  - ${rec.message}`, 'info');
        });
      }
      
      return report;
    } catch (error) {
      this.log(`❌ Performance monitoring failed: ${error.message}`, 'error');
      throw error;
    }
  }
}

// Run the monitor
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.run().catch(console.error);
}

module.exports = PerformanceMonitor;
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
