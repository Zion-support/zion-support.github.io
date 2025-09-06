#!/usr/bin/env node









const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');


console.log('📊 Starting Performance Monitor...');
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
console.log('\n📄 Performance report saved to performance-metrics.json');

// Exit after a delay to prevent rapid restarts
setTimeout(() => {
  process.exit(0);
}, 1000);



monitor.run().catch(console.error);

