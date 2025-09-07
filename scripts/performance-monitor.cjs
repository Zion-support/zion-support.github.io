<<<<<<< HEAD
#!/usr/bin/env node

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
#!/usr/bin/env node

=======
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
#!/usr/bin/env node


main

#!/usr/bin/env node

origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
<<<<<<< HEAD
#!/usr/bin/env node

/**
 * Performance Monitoring Script
 * Monitors application performance metrics
 */

const fs = require('fs');
const path = require('path');

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

const monitor = new PerformanceMonitor();
monitor.run().catch(console.error);

=======
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
<<<<<<< HEAD
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
  log(message, type = 'INFO')

<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> merged-prs-20250907-203621
#!/usr/bin/env node






>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
#!/usr/bin/env node

>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
const fs = require('fs');
const path = require('path');
>>>>>>> origin/resolved-merge-conflicts
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
console.log('⚡ Performance Monitor...\n');
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
console.log('📊 Starting performance monitoring...');
>>>>>>> origin/resolved-merge-conflicts

// Function to monitor performance
function monitorPerformance() {
  console.log('📊 Performance Analysis\n');
  
<<<<<<< HEAD
  // Check bundle size
  console.log('📦 Bundle Analysis:');
=======
  fs.writeFileSync(filepath, JSON.stringify(metrics, null, 2));
  console.log(`📈 Performance metrics saved to: ${filename}`);
}

<<<<<<< HEAD
=======
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
=======
console.log('🔍 Performance Monitor Starting...');

const performanceChecks = [
  {
    name: 'Bundle Size Check',
    check: () => {
      const buildDir = '.next';
      if (!fs.existsSync(buildDir)) {
        console.log('⚠️  Build directory not found. Running build...');
        execSync('npm run build', { stdio: 'pipe' });
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
      }
      
      const staticDir = path.join(buildDir, 'static');
      if (fs.existsSync(staticDir)) {
        const files = fs.readdirSync(staticDir, { recursive: true });
        const totalSize = files.reduce((size, file) => {
          const filePath = path.join(staticDir, file);
          if (fs.statSync(filePath).isFile()) {
            return size + fs.statSync(filePath).size;
          }
          return size;
        }, 0);
        
        const sizeInMB = (totalSize / (1024 * 1024)).toFixed(2);
        console.log(`📦 Bundle size: ${sizeInMB}MB`);
        return totalSize < 50 * 1024 * 1024; // 50MB limit
      }
<<<<<<< HEAD
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
    this.log('

<<<<<<< HEAD
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
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
console.log('⚡ Starting performance monitoring...');

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

      const filePath = path.join(dirPath, file);
=======
      return false;
    }
  },
  {
    name: 'Build Time Check',
    check: () => {
      const startTime = Date.now();
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
      try {
        execSync('npm run build', { stdio: 'pipe' });
        const endTime = Date.now();
        const buildTime = (endTime - startTime) / 1000;
        console.log(`⏱️  Build time: ${buildTime}s`);
        return buildTime < 120; // 2 minutes limit
      } catch (error) {
        return false;
      }
    }
  },
  {
    name: 'Memory Usage Check',
    check: () => {
      const memUsage = process.memoryUsage();
      const memInMB = (memUsage.heapUsed / 1024 / 1024).toFixed(2);
      console.log(`🧠 Memory usage: ${memInMB}MB`);
      return memUsage.heapUsed < 500 * 1024 * 1024; // 500MB limit
    }
  }
];

let passed = 0;
let failed = 0;

performanceChecks.forEach(check => {
>>>>>>> origin/resolved-merge-conflicts
  try {
    if (fs.existsSync('.next/static/chunks')) {
      const chunks = fs.readdirSync('.next/static/chunks');
      let totalSize = 0;
      
      chunks.forEach(chunk => {
        const chunkPath = path.join('.next/static/chunks', chunk);
        const stats = fs.statSync(chunkPath);
        totalSize += stats.size;
      });
      
      console.log(`   Total chunks: ${chunks.length}`);
      console.log(`   Total size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
    } else {
      console.log('   No build found. Run "npm run build" first.');
    }
  } catch (error) {
<<<<<<< HEAD
    console.log(`   Error analyzing bundle: ${error.message}`);
=======
    console.log(`❌ ${check.name} - Error: ${error.message}`);
    failed++;
  }
});

console.log(`\n📊 Performance Results: ${passed} passed, ${failed} failed`);

<<<<<<< HEAD
// Check node_modules;
const nodeModulesSize = getDirectorySize('node_modules');

  size: nodeModulesSize,
  sizeMB: (nodeModulesSize / 1024 / 1024).toFixed(2)

// Count files by type;
const fileCounts = {


function countFiles(dirPath) {
  if (!fs.existsSync(dirPath)) return;

performanceMetrics.fileCounts = fileCounts;

// Performance recommendations;
if (nextDirSize > 50 * 1024 * 1024) { // 50MB;
  performanceMetrics.recommendations.push('Consider optimizing bundle size - .next directory is large');

// Check for large images;
const publicDir = 'public';
if (fs.existsSync(publicDir)) {
  const publicFiles = fs.readdirSync(publicDir, { recursive: true });
  let largeImages = 0;
  publicFiles.forEach(file => {)

  // TODO: Implement
        const filePath = path.join(publicDir, file);
        if (stats.size > 500 * 1024) { // 500KB;
          largeImages++;

  if (largeImages > 0) {`;
    performanceMetrics.recommendations.push(`Optimize ${largeImages} large images in public directory`);

// Display results;

<<<<<<< HEAD
if (performanceMetrics.recommendations.length > 0) {
  console.log('\n💡 Recommendations:');
  performanceMetrics.recommendations.forEach(rec => console.log(`   - ${rec}`));
} else {
  console.log('\n✅ No performance issues detected');
}
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
class PerformanceMonitor {
  constructor() {
    this.metrics = {
      bundleSize: '0',
      memoryUsage: '0',
      timestamp: new Date().toISOString()
    };
>>>>>>> origin/resolved-merge-conflicts
  }

  // Check for large files
  console.log('\n🔍 Large Files Check:');
  const findLargeFiles = (dir, maxSize = 1024 * 1024) => { // 1MB
    let largeFiles = [];
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && !item.startsWith('.') && !item.includes('node_modules')) {
          largeFiles = largeFiles.concat(findLargeFiles(fullPath, maxSize));
        } else if (stat.isFile() && stat.size > maxSize) {
          largeFiles.push({ path: fullPath, size: stat.size });
        }
      }
    } catch (error) {
      // Ignore errors
    }
    return largeFiles;
  };

  const largeFiles = findLargeFiles('.');
  if (largeFiles.length > 0) {
    console.log('   Large files found:');
    largeFiles.forEach(file => {
      console.log(`   - ${file.path}: ${(file.size / 1024 / 1024).toFixed(2)} MB`);
    });
  } else {
    console.log('   No large files found');
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

  // Check for unused dependencies
  console.log('\n📋 Dependency Analysis:');
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const dependencies = Object.keys(packageJson.dependencies || {});
    const devDependencies = Object.keys(packageJson.devDependencies || {});
    
    console.log(`   Production dependencies: ${dependencies.length}`);
    console.log(`   Development dependencies: ${devDependencies.length}`);
    
    // Check for potentially unused dependencies
    const commonUnused = ['lodash', 'moment', 'jquery'];
    const unused = dependencies.filter(dep => commonUnused.includes(dep));
    if (unused.length > 0) {
      console.log(`   Potentially unused: ${unused.join(', ')}`);
    }
  } catch (error) {
    console.log(`   Error analyzing dependencies: ${error.message}`);
  }

<<<<<<< HEAD
  // Check build performance
  console.log('\n⏱️ Build Performance:');
  try {
=======
main

<<<<<<< HEAD

// Save report
fs.writeFileSync('performance-metrics.json', JSON.stringify(performanceMetrics, null, 2));
console.log('\n📄 Performance report saved to performance-metrics.json');

// Exit after a delay to prevent rapid restarts
setTimeout(() => {
  process.exit(0);
}, 1000);
ursor/automate-test-improve-and-merge-code-59d5

console.log('⚡ Performance Monitor');
console.log('
=======
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

// Save report
fs.writeFileSync('performance-metrics.json', JSON.stringify(performanceMetrics, null, 2));
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
console.log('\n📄 Performance report saved to performance-metrics.json');
// Exit after a delay to prevent rapid restarts;
setTimeout(() => {
  process.exit(0);
}, 1000);
<<<<<<< HEAD
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

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a



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

      report.error = error.message;

  async monitorBuildPerformance(report) {
    this.log('Monitoring build performance...);
>>>>>>> origin/resolved-merge-conflicts
    const startTime = Date.now();
    execSync('npm run build', { stdio: 'pipe' });
    const endTime = Date.now();
    const buildTime = (endTime - startTime) / 1000;
    console.log(`   Build time: ${buildTime.toFixed(2)} seconds`);
    
    if (buildTime > 60) {
      console.log('   ⚠️ Build time is quite long. Consider optimization.');
    } else if (buildTime > 30) {
      console.log('   ⚠️ Build time is moderate. Some optimization possible.');
    } else {
      console.log('   ✅ Build time is good.');
    }
  } catch (error) {
    console.log(`   Error measuring build time: ${error.message}`);
  }

  // Memory usage check
  console.log('\n💾 Memory Usage:');
  const memUsage = process.memoryUsage();
  console.log(`   RSS: ${(memUsage.rss / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Heap Used: ${(memUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Heap Total: ${(memUsage.heapTotal / 1024 / 1024).toFixed(2)} MB`);

  console.log('\n✅ Performance monitoring completed');
}
<<<<<<< HEAD

// Run performance monitoring
monitorPerformance();
=======
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
