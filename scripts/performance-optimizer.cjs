<<<<<<< HEAD

const fs = require('fs');
const path = require('path');
=======
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
>>>>>>> main

class PerformanceOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
<<<<<<< HEAD
  }

  async optimizeImages() {
    console.log('🖼️ Optimizing images...');
    // Add image optimization logic here
  }

  async optimizeCSS() {
    console.log('🎨 Optimizing CSS...');
    // Add CSS optimization logic here
  }

  async optimizeJavaScript() {
    console.log('⚡ Optimizing JavaScript...');
    // Add JS optimization logic here
  }

  async run() {
    await this.optimizeImages();
    await this.optimizeCSS();
    await this.optimizeJavaScript();
    console.log('✅ Performance optimization completed!');
  }
}

const optimizer = new PerformanceOptimizer();
optimizer.run().catch(console.error);
=======
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.metrics = {
      bundleSize: 0,
      buildTime: 0,
      fileCount: 0,
      dependencies: 0,
      performance: {}
    };
    this.optimizations = [];
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  async measureBuildTime() {
    this.log('⏱️ Measuring build time...', 'INFO');
    const startTime = Date.now();
    
    try {
      execSync('npm run build', { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.metrics.buildTime = Date.now() - startTime;
      this.log(`✅ Build completed in ${this.metrics.buildTime}ms`, 'SUCCESS');
    } catch (error) {
      this.log(`❌ Build failed: ${error.message}`, 'ERROR');
      this.metrics.buildTime = -1;
    }
  }

  analyzeBundleSize() {
    this.log('📦 Analyzing bundle size...', 'INFO');
    
    const buildDir = path.join(this.projectRoot, '.next');
    if (!fs.existsSync(buildDir)) {
      this.log('⚠️ Build directory not found, running build first...', 'WARN');
      return;
    }

    try {
      const stats = this.getDirectorySize(buildDir);
      this.metrics.bundleSize = stats.size;
      this.metrics.fileCount = stats.count;
      
      this.log(`📊 Bundle size: ${(this.metrics.bundleSize / 1024 / 1024).toFixed(2)}MB`, 'INFO');
      this.log(`📁 Files: ${this.metrics.fileCount}`, 'INFO');
    } catch (error) {
      this.log(`❌ Error analyzing bundle: ${error.message}`, 'ERROR');
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    let fileCount = 0;

    const scanDirectory = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else {
          totalSize += stat.size;
          fileCount++;
        }
      }
    };

    scanDirectory(dirPath);
    return { size: totalSize, count: fileCount };
  }

  analyzeDependencies() {
    this.log('📋 Analyzing dependencies...', 'INFO');
    
    try {
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      const deps = Object.keys(packageJson.dependencies || {}).length;
      const devDeps = Object.keys(packageJson.devDependencies || {}).length;
      
      this.metrics.dependencies = deps + devDeps;
      
      this.log(`📦 Dependencies: ${deps}`, 'INFO');
      this.log(`🔧 Dev Dependencies: ${devDeps}`, 'INFO');
      this.log(`📊 Total: ${this.metrics.dependencies}`, 'INFO');
    } catch (error) {
      this.log(`❌ Error analyzing dependencies: ${error.message}`, 'ERROR');
    }
  }

  checkImageOptimization() {
    this.log('🖼️ Checking image optimization...', 'INFO');
    
    const publicDir = path.join(this.projectRoot, 'public');
    if (!fs.existsSync(publicDir)) {
      this.log('⚠️ Public directory not found', 'WARN');
      return;
    }

    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const images = this.findFiles(publicDir, imageExtensions);
    
    this.log(`🖼️ Found ${images.length} images`, 'INFO');
    
    if (images.length > 0) {
      this.optimizations.push({
        type: 'image',
        description: 'Consider using Next.js Image component for automatic optimization',
        impact: 'high',
        files: images.slice(0, 5) // Show first 5 files
      });
    }
  }

  findFiles(dir, extensions) {
    const files = [];
    
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            scanDirectory(fullPath);
          } else if (extensions.some(ext => item.toLowerCase().endsWith(ext))) {
            files.push(path.relative(this.projectRoot, fullPath));
          }
        }
      } catch (error) {
        // Skip directories we can't read
      }
    };

    scanDirectory(dir);
    return files;
  }

  checkCodeSplitting() {
    this.log('🔀 Checking code splitting...', 'INFO');
    
    const pagesDir = path.join(this.projectRoot, 'pages');
    const srcDir = path.join(this.projectRoot, 'src');
    
    let pageCount = 0;
    let componentCount = 0;
    
    if (fs.existsSync(pagesDir)) {
      pageCount = this.countFiles(pagesDir, ['.js', '.jsx', '.ts', '.tsx']);
    }
    
    if (fs.existsSync(srcDir)) {
      componentCount = this.countFiles(srcDir, ['.js', '.jsx', '.ts', '.tsx']);
    }
    
    this.log(`📄 Pages: ${pageCount}`, 'INFO');
    this.log(`🧩 Components: ${componentCount}`, 'INFO');
    
    if (pageCount > 20) {
      this.optimizations.push({
        type: 'code-splitting',
        description: 'Consider implementing dynamic imports for large pages',
        impact: 'medium',
        current: pageCount
      });
    }
  }

  countFiles(dir, extensions) {
    let count = 0;
    
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            scanDirectory(fullPath);
          } else if (extensions.some(ext => item.toLowerCase().endsWith(ext))) {
            count++;
          }
        }
      } catch (error) {
        // Skip directories we can't read
      }
    };

    scanDirectory(dir);
    return count;
  }

  generateOptimizations() {
    this.log('💡 Generating optimization recommendations...', 'INFO');
    
    // Bundle size optimizations
    if (this.metrics.bundleSize > 5 * 1024 * 1024) { // 5MB
      this.optimizations.push({
        type: 'bundle-size',
        description: 'Bundle size is large, consider code splitting and tree shaking',
        impact: 'high',
        current: `${(this.metrics.bundleSize / 1024 / 1024).toFixed(2)}MB`
      });
    }
    
    // Build time optimizations
    if (this.metrics.buildTime > 60000) { // 1 minute
      this.optimizations.push({
        type: 'build-time',
        description: 'Build time is slow, consider optimizing build process',
        impact: 'medium',
        current: `${(this.metrics.buildTime / 1000).toFixed(2)}s`
      });
    }
    
    // Dependency optimizations
    if (this.metrics.dependencies > 100) {
      this.optimizations.push({
        type: 'dependencies',
        description: 'High number of dependencies, consider removing unused packages',
        impact: 'medium',
        current: this.metrics.dependencies
      });
    }
  }

  generateReport() {
    this.ensureDirectories();
    
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      optimizations: this.optimizations,
      recommendations: this.generateRecommendations()
    };

    const reportPath = path.join(this.reportsDir, 'performance-optimizer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📄 Report saved to: ${reportPath}`, 'SUCCESS');
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.optimizations.length === 0) {
      recommendations.push('Performance looks good! No major optimizations needed.');
    } else {
      this.optimizations.forEach(opt => {
        recommendations.push(`${opt.type}: ${opt.description}`);
      });
    }
    
    recommendations.push('Consider running Lighthouse audit for detailed performance metrics');
    recommendations.push('Monitor Core Web Vitals in production');
    
    return recommendations;
  }

  printSummary() {
    this.log('\n📊 Performance Analysis Summary:', 'INFO');
    this.log('='.repeat(50), 'INFO');
    this.log(`📦 Bundle Size: ${(this.metrics.bundleSize / 1024 / 1024).toFixed(2)}MB`, 'INFO');
    this.log(`⏱️ Build Time: ${(this.metrics.buildTime / 1000).toFixed(2)}s`, 'INFO');
    this.log(`📁 Files: ${this.metrics.fileCount}`, 'INFO');
    this.log(`📦 Dependencies: ${this.metrics.dependencies}`, 'INFO');
    this.log(`💡 Optimizations: ${this.optimizations.length}`, 'INFO');
    
    if (this.optimizations.length > 0) {
      this.log('\n🔍 Optimization Recommendations:', 'INFO');
      this.optimizations.forEach((opt, index) => {
        this.log(`  ${index + 1}. [${opt.impact.toUpperCase()}] ${opt.description}`, 'INFO');
      });
    }
  }

  async run() {
    this.log('🎯 Starting Performance Optimization Analysis', 'INFO');
    this.log('='.repeat(60), 'INFO');

    await this.measureBuildTime();
    this.analyzeBundleSize();
    this.analyzeDependencies();
    this.checkImageOptimization();
    this.checkCodeSplitting();
    this.generateOptimizations();

    const report = this.generateReport();
    this.printSummary();

    this.log('🎉 Performance analysis completed!', 'SUCCESS');
    return report;
  }
}

// Run the optimizer
if (require.main === module) {
  const optimizer = new PerformanceOptimizer();
  optimizer.run().catch(console.error);
}

module.exports = PerformanceOptimizer;
>>>>>>> main
