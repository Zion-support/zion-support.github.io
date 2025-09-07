<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
=======

>>>>>>> pr-12325
=======

>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
  log(message, type = 'INFO')
<<<<<<< HEAD
      'INFO': 'ℹ
      'SUCCESS': 
      'ERROR': 
      'WARNING': '⚠
      'PERFORMANCE': '⚡
    }[type] || 'ℹ
    this.log('Measuring build time...', 'PERFORMANCE')
      execSync('npm run build')
        stdio: 'pipe,
  encoding: 'utf8
      this.log(`Build completed in ${this.metrics.buildTime}ms`, 'SUCCESS'`)`;
      this.log(`Build failed: ${error.message}`, 'ERROR'`)
    this.log('Analyzing bundle size...', 'PERFORMANCE')
      const buildOutput = execSync('npm run build')
  encoding: 'utf8`;
      this.log(`Bundle size: ${this.metrics.bundleSize}kB`, 'INFO'`)`;
      this.log(`Pages: ${this.metrics.pageCount}`, 'INFO'`)`;
      this.log(`Bundle analysis failed: ${error.message}`, 'ERROR'`)
    this.log('Checking image optimization...', 'PERFORMANCE')
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']
    const publicDir = path.join(this.projectRoot, 'public')
              size: Math.round(stats.size / 1024) + 'KB`;
    this.log(`Found ${imageCount} images (${Math.round(totalImageSize / 1024)}KB total)`, 'INFO
        type: 'image_optimization,
  priority: 'high
    this.log('Checking code splitting...', 'PERFORMANCE')
    const pagesDir = path.join(this.projectRoot, 'pages')
        if (file.endsWith('.tsx') || file.endsWith('.jsx')
          const content = fs.readFileSync(file, 'utf8')
          const lines = content.split('\n')`;
    this.log(`Analyzed ${totalPages} pages`, 'INFO'`)
        type: 'code_splitting,
  priority: 'medium
    this.log('Checking dependencies...', 'PERFORMANCE')
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8
      const largeDeps = ['lodash', 'moment', 'jquery', 'bootstrap']
          type: 'dependency_optimization,
  priority: 'medium`;
          message: `Consider replacing large dependencies: ${largeDependencies.join(', '`})`;
      this.log(`Dependency check failed: ${error.message}`, 'ERROR'`)
    this.log('\n Performance Report', 'PERFORMANCE')
    this.log('=')
      console.log('\n Recommendations:')
        const priority = rec.priority === 'high' ? '�' : rec.priority === 'medium' ? '�' : '�`;
          console.log(`      Details: ${rec.details.map(d => d.file || d).join(', '`})
      this.log('� No performance issues found!', 'SUCCESS')
    let grade = 'A
    if (this.metrics.performanceScore < 90) grade = 'B
    if (this.metrics.performanceScore < 80) grade = 'C
    if (this.metrics.performanceScore < 70) grade = 'D
    if (this.metrics.performanceScore < 60) grade = 'F
    this.log(' Starting Performance Monitor', 'PERFORMANCE')`;
      this.log(`Error during performance monitoring: ${error.message}`, 'ERROR'`)
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
#!/usr/bin/env node


<<<<<<< HEAD







=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
#!/usr/bin/env node

>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

<<<<<<< HEAD

console.log('📊 Starting Performance Monitor...');
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
class PerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'performance-logs.txt');
    this.startTime = new Date();
    this.metrics = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type}] ${message}`;
    console.log(logMessage);
    
    // Append to log file
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options
      });
      return result;
    } catch (error) {
      this.log(`Command failed: ${command} - ${error.message}`, 'ERROR');
      return null;
    }
  }

  async measureBuildTime() {
    this.log('Measuring build time...');
    const startTime = Date.now();
    
    try {
      await this.runCommand('npm run build', { silent: true });
      const buildTime = Date.now() - startTime;
      
      this.metrics.push({
        name: 'Build Time',
        value: buildTime,
        unit: 'ms',
        timestamp: new Date().toISOString()
      });
      
      this.log(`Build completed in ${buildTime}ms`);
      return buildTime;
    } catch (error) {
      this.log(`Build measurement failed: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async measureBundleSize() {
    this.log('Measuring bundle size...');
    try {
      const distDir = path.join(this.projectRoot, 'dist');
      if (!fs.existsSync(distDir)) {
        this.log('Dist directory not found, running build first...');
        await this.runCommand('npm run build', { silent: true });
      }
      
      const getDirectorySize = (dir) => {
        let totalSize = 0;
        const files = fs.readdirSync(dir);
        
        for (const file of files) {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          
          if (stat.isDirectory()) {
            totalSize += getDirectorySize(filePath);
          } else {
            totalSize += stat.size;
          }
        }
        
        return totalSize;
      };
      
      const bundleSize = getDirectorySize(distDir);
      const bundleSizeKB = Math.round(bundleSize / 1024);
      const bundleSizeMB = Math.round(bundleSize / (1024 * 1024) * 100) / 100;
      
      this.metrics.push({
        name: 'Bundle Size',
        value: bundleSize,
        unit: 'bytes',
        displayValue: `${bundleSizeKB}KB (${bundleSizeMB}MB)`,
        timestamp: new Date().toISOString()
      });
      
      this.log(`Bundle size: ${bundleSizeKB}KB (${bundleSizeMB}MB)`);
      return bundleSize;
    } catch (error) {
      this.log(`Bundle size measurement failed: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async measureMemoryUsage() {
    this.log('Measuring memory usage...');
    try {
      const memUsage = process.memoryUsage();
      
      this.metrics.push({
        name: 'Memory Usage',
        value: memUsage.heapUsed,
        unit: 'bytes',
        displayValue: `${Math.round(memUsage.heapUsed / 1024 / 1024)}MB`,
        timestamp: new Date().toISOString()
      });
      
      this.log(`Memory usage: ${Math.round(memUsage.heapUsed / 1024 / 1024)}MB`);
      return memUsage;
    } catch (error) {
      this.log(`Memory measurement failed: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async measureFileCount() {
    this.log('Counting source files...');
    try {
      const srcDir = path.join(this.projectRoot, 'src');
      let fileCount = 0;
      
      const countFiles = (dir) => {
        const files = fs.readdirSync(dir);
        
        for (const file of files) {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          
          if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
            countFiles(filePath);
          } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js'))) {
            fileCount++;
          }
        }
      };
      
      countFiles(srcDir);
      
      this.metrics.push({
        name: 'Source Files',
        value: fileCount,
        unit: 'files',
        timestamp: new Date().toISOString()
      });
      
      this.log(`Source files: ${fileCount}`);
      return fileCount;
    } catch (error) {
      this.log(`File count measurement failed: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async checkDependencies() {
    this.log('Checking dependencies...');
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      const depCount = Object.keys(packageJson.dependencies || {}).length;
      const devDepCount = Object.keys(packageJson.devDependencies || {}).length;
      
      this.metrics.push({
        name: 'Dependencies',
        value: depCount,
        unit: 'packages',
        timestamp: new Date().toISOString()
      });
      
      this.metrics.push({
        name: 'Dev Dependencies',
        value: devDepCount,
        unit: 'packages',
        timestamp: new Date().toISOString()
      });
      
      this.log(`Dependencies: ${depCount}, Dev Dependencies: ${devDepCount}`);
      return { dependencies: depCount, devDependencies: devDepCount };
    } catch (error) {
      this.log(`Dependency check failed: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async generateReport() {
    const endTime = new Date();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: endTime.toISOString(),
      duration: `${Math.round(duration / 1000)}s`,
      metrics: this.metrics,
      summary: {
        totalMetrics: this.metrics.length,
        buildTime: this.metrics.find(m => m.name === 'Build Time')?.value || 'N/A',
        bundleSize: this.metrics.find(m => m.name === 'Bundle Size')?.displayValue || 'N/A',
        memoryUsage: this.metrics.find(m => m.name === 'Memory Usage')?.displayValue || 'N/A',
        fileCount: this.metrics.find(m => m.name === 'Source Files')?.value || 'N/A'
      }
    };

    const reportPath = path.join(this.projectRoot, 'performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    this.log('\n=== PERFORMANCE MONITOR REPORT ===');
    this.log(`Duration: ${report.duration}`);
    this.log(`Build Time: ${report.summary.buildTime}ms`);
    this.log(`Bundle Size: ${report.summary.bundleSize}`);
    this.log(`Memory Usage: ${report.summary.memoryUsage}`);
    this.log(`Source Files: ${report.summary.fileCount}`);
    this.log(`Total Metrics: ${report.summary.totalMetrics}`);
    
    this.log('\nAll Metrics:');
    this.metrics.forEach((metric, index) => {
      this.log(`  ${index + 1}. ${metric.name}: ${metric.displayValue || metric.value} ${metric.unit}`);
    });
    
    this.log(`\nFull report saved to: ${reportPath}`);
  }

  async run() {
    this.log('Starting Performance Monitor...');
    this.log('================================');
    
    try {
      // Run all performance measurements
      await this.measureBuildTime();
      await this.measureBundleSize();
      await this.measureMemoryUsage();
      await this.measureFileCount();
      await this.checkDependencies();
      
      // Generate final report
      await this.generateReport();
      
      this.log('\nPerformance Monitor completed!');
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
      await this.generateReport();
      process.exit(1);
    }
  }
}

// Run the performance monitor
const monitor = new PerformanceMonitor();
<<<<<<< HEAD

=======
monitor.run().catch(console.error);
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
>>>>>>> pr-12325
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
console.log('⚡ Starting performance monitoring...');
=======
      'INFO: ℹ'
      'SUCCESS: ERROR: WARNING: ⚠'
      'PERFORMANCE: ⚡}[type] ||ℹ'
    this.log('Measuring build time...,PERFORMANCE')
      execSync('npm run build')
        stdio: pipe,
  encoding: utf8
      this.log(`Build completed in ${this.metrics.buildTime}ms`,SUCCESS'`)
      this.log(`Build failed: ${error.message},ERROR'`)
    this.log('Analyzing bundle size...,PERFORMANCE')
      const buildOutput = execSync('npm run build')
        stdio: pipe,
  encoding: utf8
      this.log(`Bundle size: ${this.metrics.bundleSize}kB`,INFO'`)
      this.log(`Pages: ${this.metrics.pageCount},INFO'`)
      this.log(`Bundle analysis failed: ${error.message},ERROR'`)
    this.log('Checking image optimization...,PERFORMANCE')
    const imageExtensions = [.jpg,.jpeg,.png,.gif,.webp,.svg]
    const publicDir = path.join(this.projectRoot,public')
              size: Math.round(stats.size / 1024) +KB'
    this.log(`Found ${imageCount} images (${Math.round(totalImageSize / 1024)}KB total)`,INFO'
        type: image_optimization,
  priority: high'
    this.log('Checking code splitting...,PERFORMANCE')
    const pagesDir = path.join(this.projectRoot,pages')
        if (file.endsWith('.tsx') || file.endsWith('.jsx')
          const content = fs.readFileSync(file,utf8)
          const lines = content.split('\n')
    this.log(`Analyzed ${totalPages} pages`,INFO'`)
        type: code_splitting,
  priority: medium'
    this.log('Checking dependencies...,PERFORMANCE')
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot,package.json'),utf8
      const largeDeps = [lodash,moment,jquery,bootstrap]
          type: dependency_optimization,
  priority: medium'
          message: `Consider replacing large dependencies: ${largeDependencies.join(,`})
      this.log(`Dependency check failed: ${error.message},ERROR'`)
    this.log('\n Performance Report,PERFORMANCE')
    this.log('=')
      console.log('\n Recommendations: )
        const priority = rec.priority ===high' ? '�: rec.priority ===medium' ? '�: �'
          console.log(`      Details: ${rec.details.map(d => d.file || d).join(,`})
      this.log('� No performance issues found!,SUCCESS')
    let grade = 'A'
    if (this.metrics.performanceScore < 90) grade = 'B'
    if (this.metrics.performanceScore < 80) grade = 'C'
    if (this.metrics.performanceScore < 70) grade = 'D'
    if (this.metrics.performanceScore < 60) grade = 'F'
    this.log(' Starting Performance Monitor,PERFORMANCE')
      this.log(`Error during performance monitoring: ${error.message},ERROR'`)
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
console.log('⚡ Starting performance monitoring...);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
const performanceMetrics = {
  timestamp: new Date().toISOString(),
  bundleSize: {},
  fileCounts: {},
  recommendations: []
};

// Check bundle sizes;
function getDirectorySize(dirPath) {
  if (!fs.existsSync(dirPath)) return 0;
  
  let totalSize = 0;
  const files = fs.readdirSync(dirPath, { recursive: true });
  
  files.forEach(file => {)
<<<<<<< HEAD
    if (typeof file === 'string') {
=======
    if (typeof file ===string') {
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      const filePath = path.join(dirPath, file);
      try {
  // TODO: Implement
}
        const stats = fs.statSync(filePath);
        if (stats.isFile()) {
          totalSize += stats.size;
<<<<<<< HEAD
      } catch (error) {
        // Skip files that can't be accessed;
=======
        }
      } catch (error) {
        // Skip files that can't be accessed;
      }
    }
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  });
  
  return totalSize;

// Check .next directory;
const nextDirSize = getDirectorySize('.next');
<<<<<<< HEAD
performanceMetrics.bundleSize['.next'] = {
=======
performanceMetrics.bundleSize[.next] = {
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  size: nextDirSize,
  sizeMB: (nextDirSize / 1024 / 1024).toFixed(2)

// Check node_modules;
const nodeModulesSize = getDirectorySize('node_modules');
<<<<<<< HEAD
performanceMetrics.bundleSize['node_modules'] = {
=======
performanceMetrics.bundleSize[node_modules] = {
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  size: nodeModulesSize,
  sizeMB: (nodeModulesSize / 1024 / 1024).toFixed(2)

// Count files by type;
const fileCounts = {
<<<<<<< HEAD
  '.tsx': 0,
  '.ts': 0,
  '.jsx': 0,
  '.js': 0,
  '.css': 0,
  '.json': 0;
=======
  '.tsx: 0,.ts: 0,.jsx: 0,.js: 0,.css: 0,.json: 0;
};
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a

function countFiles(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  
<<<<<<< HEAD
      const ext = path.extname(file);
      if (fileCounts.hasOwnProperty(ext)) {
        fileCounts[ext]++;

['components', 'pages', 'lib', 'styles'].forEach(dir => countFiles(dir));
=======
  const files = fs.readdirSync(dirPath, { recursive: true });
  files.forEach(file => {)
    if (typeof file ===string') {
      const ext = path.extname(file);
      if (fileCounts.hasOwnProperty(ext)) {
        fileCounts[ext]++;
      }
    }
  });
}
'
[components,pages,lib,styles].forEach(dir => countFiles(dir));
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
performanceMetrics.fileCounts = fileCounts;

// Performance recommendations;
if (nextDirSize > 50 * 1024 * 1024) { // 50MB;
  performanceMetrics.recommendations.push('Consider optimizing bundle size - .next directory is large');
<<<<<<< HEAD

if (fileCounts['.tsx'] + fileCounts['.ts'] > 50) {
  performanceMetrics.recommendations.push('Consider code splitting - many TypeScript files detected');

if (fileCounts['.css'] > 10) {
  performanceMetrics.recommendations.push('Consider CSS optimization - multiple CSS files detected');

=======
}
'
if (fileCounts[.tsx] + fileCounts[.ts] > 50) {
  performanceMetrics.recommendations.push('Consider code splitting - many TypeScript files detected');
}
'
if (fileCounts[.css] > 10) {
  performanceMetrics.recommendations.push('Consider CSS optimization - multiple CSS files detected');
}

>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
// Check for large images;
const publicDir = 'public';
if (fs.existsSync(publicDir)) {
  const publicFiles = fs.readdirSync(publicDir, { recursive: true });
  let largeImages = 0;
  
  publicFiles.forEach(file => {)
<<<<<<< HEAD
    if (typeof file === 'string' && /\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
=======
    if (typeof file ===string' && /\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
      try {
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  // TODO: Implement
        const filePath = path.join(publicDir, file);
        if (stats.size > 500 * 1024) { // 500KB;
          largeImages++;
<<<<<<< HEAD
        // Skip files that can't be accessed;
=======
        }
      } catch (error) {
        // Skip files that can't be accessed;
      }
    }
  });
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  
  if (largeImages > 0) {`;
    performanceMetrics.recommendations.push(`Optimize ${largeImages} large images in public directory`);

// Display results;
<<<<<<< HEAD
console.log('\n📊 Performance Metrics:');`;
console.log(`   - .next bundle size: ${performanceMetrics.bundleSize['.next']?.sizeMB || '0'} MB`);`;
console.log(`   - node_modules size: ${performanceMetrics.bundleSize['node_modules']?.sizeMB || '0'} MB`);`;
console.log(`   - TypeScript files: ${fileCounts['.tsx'] + fileCounts['.ts']}`);`;
console.log(`   - JavaScript files: ${fileCounts['.jsx'] + fileCounts['.js']}`);`;
console.log(`   - CSS files: ${fileCounts['.css']}`);
if (performanceMetrics.recommendations.length > 0) {
  console.log('\n💡 Recommendations:');`;
  performanceMetrics.recommendations.forEach(rec => console.log(`   - ${rec}`));
} else {
  // TODO: Implement
  console.log('\n✅ No performance issues detected');

// Save report;
fs.writeFileSync('performance-metrics.json', JSON.stringify(performanceMetrics, null, 2));
=======
console.log('\n📊 Performance Metrics: );
console.log(`   - .next bundle size: ${performanceMetrics.bundleSize[.next]?.sizeMB ||0} MB`);
console.log(`   - node_modules size: ${performanceMetrics.bundleSize[node_modules]?.sizeMB ||0} MB`);
console.log(`   - TypeScript files: ${fileCounts[.tsx] + fileCounts[.ts]});
console.log(`   - JavaScript files: ${fileCounts[.jsx] + fileCounts[.js]});
console.log(`   - CSS files: ${fileCounts[.css]});
if (performanceMetrics.recommendations.length > 0) {
  console.log('\n💡 Recommendations: );
  performanceMetrics.recommendations.forEach(rec => console.log(`   - ${rec}));
} else {
  // TODO: Implement
}
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




// Save report
fs.writeFileSync('performance-metrics.json', JSON.stringify(performanceMetrics, null, 2));
=======

// Save report;
fs.writeFileSync('performance-metrics.json, JSON.stringify(performanceMetrics, null, 2));
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
console.log('\n📄 Performance report saved to performance-metrics.json');
// Exit after a delay to prevent rapid restarts;
setTimeout(() => {
  process.exit(0);
}, 1000);
<<<<<<< HEAD



monitor.run().catch(console.error);

=======
<<<<<<< HEAD
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


=======
=======

'
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
#!/usr/bin/env node


class PerformanceMonitor {
  constructor() {
    this.workspaceRoot = '/workspace';
    this.reportFile = path.join(this.workspaceRoot,automation_logs,performance-monitor-report.json');
    this.ensureLogDirectory();

  ensureLogDirectory() {
    const logDir = path.dirname(this.reportFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });

<<<<<<< HEAD
  log(message) {`;
    console.log(`[Performance Monitor] ${message}`);
=======
  log(message) {
    console.log(`[Performance Monitor] ${message});
  }
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a

  async runPerformanceMonitoring() {
    this.log('Starting performance monitoring...);
    
    const report = {
      metrics: {},
      recommendations: [],
      score: 0

      // Monitor build performance
      await this.monitorBuildPerformance(report);
      
      // Monitor bundle size
      await this.monitorBundleSize(report);
      
      // Monitor dependencies
      await this.monitorDependencies(report);
      
      // Calculate performance score
      report.score = this.calculatePerformanceScore(report);
      
      // Generate recommendations
      this.generateRecommendations(report);
      
      // Save report
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
<<<<<<< HEAD
      `;
      this.log(`Performance monitoring complete. Score: ${report.score}/100`);`;
      this.log(`Report saved to: ${this.reportFile}`);
      
      return report;
    } catch (error) {`;
      this.log(`Error during performance monitoring: ${error.message}`);
=======
      
      this.log(`Performance monitoring complete. Score: ${report.score}/100`);
      this.log(`Report saved to: ${this.reportFile});
      
      return report;
    } catch (error) {
      this.log(`Error during performance monitoring: ${error.message});
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      report.error = error.message;

  async monitorBuildPerformance(report) {
    this.log('Monitoring build performance...);
    
    const startTime = Date.now();
    
<<<<<<< HEAD
      execSync('npm run build', { 
        encoding: 'utf8', 
        cwd: this.workspaceRoot,
        stdio: 'pipe
=======
    try {
      execSync('npm run build, { 
        encoding: utf8, 
        cwd: this.workspaceRoot,
        stdio: pipe});
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      
      const buildTime = Date.now() - startTime;
      report.metrics.buildTime = buildTime;
      report.metrics.buildTimeSeconds = (buildTime / 1000).toFixed(2);
      
      if (buildTime > 60000) { // 1 minute
        report.recommendations.push({
<<<<<<< HEAD
          priority: 'high',
          category: 'build',
          message: 'Build time exceeds 1 minute - consider optimization
=======
          priority: high,
          category: build,
          message: Build time exceeds 1 minute - consider optimization});
      }
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      
      this.log('Build failed, skipping build performance monitoring');
      report.metrics.buildTime = 0;

  async monitorBundleSize(report) {
    this.log('Monitoring bundle size...);
    
    const distDir = path.join(this.workspaceRoot,dist');
    if (fs.existsSync(distDir)) {
      const bundleSize = this.getDirectorySize(distDir);
      report.metrics.bundleSize = bundleSize;
      report.metrics.bundleSizeMB = (bundleSize / (1024 * 1024)).toFixed(2);
      
      if (bundleSize > 2 * 1024 * 1024) { // 2MB
<<<<<<< HEAD
          category: 'bundle',
          message: 'Bundle size exceeds 2MB - implement code splitting
      report.metrics.bundleSize = 0;
      report.metrics.bundleSizeMB = '0.00';
=======
        report.recommendations.push({
          priority: high,
          category: bundle,
          message: Bundle size exceeds 2MB - implement code splitting});
      }
    } else {
      report.metrics.bundleSize = 0;
      report.metrics.bundleSizeMB = '0.00;
    }
  }
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a

  async monitorDependencies(report) {
    this.log('Monitoring dependencies...);
    
    const packageJsonPath = path.join(this.workspaceRoot,package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath,utf8));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      report.metrics.totalDependencies = Object.keys(dependencies).length;
      
      // Check for heavy dependencies
      const heavyDeps = [lodash,moment,jquery,bootstrap];
      const foundHeavyDeps = Object.keys(dependencies).filter(dep => heavyDeps.includes(dep));
      
      report.metrics.heavyDependencies = foundHeavyDeps.length;
      
      if (foundHeavyDeps.length > 0) {
<<<<<<< HEAD
          priority: 'medium',
          category: 'dependencies',`;
          message: `Consider replacing heavy dependencies: ${foundHeavyDeps.join(', ')}`
=======
        report.recommendations.push({
          priority: medium,
          category: dependencies,
          message: `Consider replacing heavy dependencies: ${foundHeavyDeps.join(,)}
        });
      }
    }
  }
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a

  calculatePerformanceScore(report) {
    let score = 100;
    
    // Deduct for build time
    if (report.metrics.buildTime > 60000) {
      score -= 20;
    } else if (report.metrics.buildTime > 30000) {
      score -= 10;
    
    // Deduct for bundle size
    if (report.metrics.bundleSize > 2 * 1024 * 1024) {
      score -= 30;
    } else if (report.metrics.bundleSize > 1024 * 1024) {
      score -= 15;
    
    // Deduct for heavy dependencies
    if (report.metrics.heavyDependencies > 2) {
    } else if (report.metrics.heavyDependencies > 0) {
      score -= 5;
    
    return Math.max(0, Math.min(100, score));

  generateRecommendations(report) {
<<<<<<< HEAD
        message: 'Optimize build process - consider parallel builds
    
        message: 'Implement tree shaking and code splitting
    
      category: 'general',
      message: 'Set up continuous performance monitoring
=======
    if (report.metrics.buildTime > 60000) {
      report.recommendations.push({
        priority: high,
        category: build,
        message: Optimize build process - consider parallel builds});
    }
    
    if (report.metrics.bundleSize > 2 * 1024 * 1024) {
      report.recommendations.push({
        priority: high,
        category: bundle,
        message: Implement tree shaking and code splitting});
    }
    
    report.recommendations.push({
      priority: medium,
      category: general,
      message: Set up continuous performance monitoring});
  }
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a

  getDirectorySize(dir) {
    let size = 0;
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        size += this.getDirectorySize(fullPath);
        size += stat.size;
    
    return size;

// CLI interface
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.runPerformanceMonitoring().catch(console.error);

module.exports = PerformanceMonitor;
<<<<<<< HEAD
>>>>>>> cursor/automate-test-improve-and-merge-code-6b26
>>>>>>> pr-12325
=======
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
