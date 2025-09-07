<<<<<<< HEAD
<<<<<<< HEAD
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

=======
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
const fs = require('fs');
const path = require('path');

console.log('📊 Performance Monitor Starting...');

// Check for performance issues
const performanceChecks = [
  {
    name: 'Large bundle size check',
    check: () => {
      const nextDir = '.next/static';
      if (!fs.existsSync(nextDir)) return true;
      
      const files = fs.readdirSync(nextDir, { recursive: true });
      let totalSize = 0;
      
      files.forEach(file => {
        const filePath = path.join(nextDir, file);
        if (fs.statSync(filePath).isFile()) {
          totalSize += fs.statSync(filePath).size;
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
        return stats.size > 500000; // 500KB
      });
      
      if (largeImages.length > 0) {
        console.log(`⚠️  Large images found: ${largeImages.join(', ')}`);
        return false;
      }
      
      return true;
    }
  },
  {
    name: 'Dependencies check',
    check: () => {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const deps = Object.keys(packageJson.dependencies || {});
      const devDeps = Object.keys(packageJson.devDependencies || {});
      
      console.log(`📦 Dependencies: ${deps.length}, Dev Dependencies: ${devDeps.length}`);
      
      // Check for potentially problematic packages
      const problematicPackages = deps.filter(dep => 
        dep.includes('lodash') || dep.includes('moment') || dep.includes('jquery')
      );
      
      if (problematicPackages.length > 0) {
        console.log(`⚠️  Consider replacing heavy packages: ${problematicPackages.join(', ')}`);
      }
      
      return true;
    }
  }
];

let passed = 0;
let failed = 0;

performanceChecks.forEach(check => {
  try {
    if (check.check()) {
      console.log(`✅ ${check.name}`);
      passed++;
    } else {
      console.log(`❌ ${check.name}`);
      failed++;
    }
  } catch (error) {
    console.log(`❌ ${check.name} - Error: ${error.message}`);
    failed++;
  }
});

console.log(`\n📊 Performance Check Results: ${passed} passed, ${failed} failed`);

if (failed === 0) {
  console.log('🎉 All performance checks passed!');
} else {
<<<<<<< HEAD
  console.log('\n✅ No performance issues detected');
}

=======
=======
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
// Save report
fs.writeFileSync('performance-metrics.json', JSON.stringify(performanceMetrics, null, 2));
console.log('\n📄 Performance report saved to performance-metrics.json');
// Exit after a delay to prevent rapid restarts
setTimeout(() => {
  process.exit(0);
}, 1000);
<<<<<<< HEAD

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
>>>>>>> 566d12e4e87c285827c8c1f36f24d2818c9f5bb8
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
=======
  console.log('⚠️  Some performance issues detected. Consider optimization.');
}
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
