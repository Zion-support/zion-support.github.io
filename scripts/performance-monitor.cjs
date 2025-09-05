const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.metrics = {
      bundleSize: 0,
      buildTime: 0,
      pageCount: 0,
      totalSize: 0,
      performanceScore: 0
    };
    this.recommendations = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const emoji = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PERFORMANCE': '⚡'
    }[type] || 'ℹ️';
    console.log(`[${timestamp}] [${type}] ${emoji} ${message}`);
  }

  async measureBuildTime() {
    this.log('Measuring build time...', 'PERFORMANCE');
    
    try {
      const startTime = Date.now();
      execSync('npm run build', {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8'
      });
      const endTime = Date.now();
      
      this.metrics.buildTime = endTime - startTime;
      this.log(`Build completed in ${this.metrics.buildTime}ms`, 'SUCCESS');
      
    } catch (error) {
      this.log(`Build failed: ${error.message}`, 'ERROR');
      this.metrics.buildTime = -1;
    }
  }

  async analyzeBundleSize() {
    this.log('Analyzing bundle size...', 'PERFORMANCE');
    
    try {
      const buildOutput = execSync('npm run build', {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8'
      }).toString();
      
      // Extract bundle size information from build output
      const sizeMatches = buildOutput.match(/First Load JS shared by all\s+(\d+\.?\d*)\s+kB/g);
      if (sizeMatches) {
        this.metrics.bundleSize = parseFloat(sizeMatches[0].match(/(\d+\.?\d*)/)[1]);
      }
      
      // Count pages
      const pageMatches = buildOutput.match(/Route \(pages\)/g);
      if (pageMatches) {
        this.metrics.pageCount = pageMatches.length;
      }
      
      // Calculate total size
      const totalSizeMatches = buildOutput.match(/Total size:\s+(\d+\.?\d*)\s+kB/g);
      if (totalSizeMatches) {
        this.metrics.totalSize = parseFloat(totalSizeMatches[0].match(/(\d+\.?\d*)/)[1]);
      }
      
      this.log(`Bundle size: ${this.metrics.bundleSize}kB`, 'INFO');
      this.log(`Pages: ${this.metrics.pageCount}`, 'INFO');
      
    } catch (error) {
      this.log(`Bundle analysis failed: ${error.message}`, 'ERROR');
    }
  }

  async checkImageOptimization() {
    this.log('Checking image optimization...', 'PERFORMANCE');
    
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const publicDir = path.join(this.projectRoot, 'public');
    let totalImageSize = 0;
    let imageCount = 0;
    let unoptimizedImages = [];
    
    if (fs.existsSync(publicDir)) {
      const files = this.getAllFiles(publicDir);
      
      files.forEach(file => {
        const ext = path.extname(file).toLowerCase();
        if (imageExtensions.includes(ext)) {
          const stats = fs.statSync(file);
          totalImageSize += stats.size;
          imageCount++;
          
          // Check if image is optimized
          if (stats.size > 500000) { // 500KB
            unoptimizedImages.push({
              file: path.relative(this.projectRoot, file),
              size: Math.round(stats.size / 1024) + 'KB'
            });
          }
        }
      });
    }
    
    this.log(`Found ${imageCount} images (${Math.round(totalImageSize / 1024)}KB total)`, 'INFO');
    
    if (unoptimizedImages.length > 0) {
      this.recommendations.push({
        type: 'image_optimization',
        priority: 'high',
        message: `Optimize ${unoptimizedImages.length} large images`,
        details: unoptimizedImages.slice(0, 5) // Show first 5
      });
    }
  }

  async checkCodeSplitting() {
    this.log('Checking code splitting...', 'PERFORMANCE');
    
    const pagesDir = path.join(this.projectRoot, 'pages');
    let totalPages = 0;
    let largePages = [];
    
    if (fs.existsSync(pagesDir)) {
      const files = this.getAllFiles(pagesDir);
      
      files.forEach(file => {
        if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
          totalPages++;
          const content = fs.readFileSync(file, 'utf8');
          const lines = content.split('\n').length;
          
          if (lines > 200) {
            largePages.push({
              file: path.relative(this.projectRoot, file),
              lines: lines
            });
          }
        }
      });
    }
    
    this.log(`Analyzed ${totalPages} pages`, 'INFO');
    
    if (largePages.length > 0) {
      this.recommendations.push({
        type: 'code_splitting',
        priority: 'medium',
        message: `Consider splitting ${largePages.length} large pages`,
        details: largePages.slice(0, 5)
      });
    }
  }

  async checkDependencies() {
    this.log('Checking dependencies...', 'PERFORMANCE');
    
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      const largeDependencies = [];
      const outdatedDependencies = [];
      
      // Check for large dependencies
      const largeDeps = ['lodash', 'moment', 'jquery', 'bootstrap'];
      largeDeps.forEach(dep => {
        if (dependencies[dep]) {
          largeDependencies.push(dep);
        }
      });
      
      if (largeDependencies.length > 0) {
        this.recommendations.push({
          type: 'dependency_optimization',
          priority: 'medium',
          message: `Consider replacing large dependencies: ${largeDependencies.join(', ')}`,
          details: largeDependencies
        });
      }
      
    } catch (error) {
      this.log(`Dependency check failed: ${error.message}`, 'ERROR');
    }
  }

  getAllFiles(dirPath) {
    let files = [];
    const items = fs.readdirSync(dirPath);
    
    items.forEach(item => {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files = files.concat(this.getAllFiles(fullPath));
      } else {
        files.push(fullPath);
      }
    });
    
    return files;
  }

  calculatePerformanceScore() {
    let score = 100;
    
    // Bundle size penalty
    if (this.metrics.bundleSize > 100) {
      score -= Math.min(30, (this.metrics.bundleSize - 100) * 0.3);
    }
    
    // Build time penalty
    if (this.metrics.buildTime > 30000) { // 30 seconds
      score -= Math.min(20, (this.metrics.buildTime - 30000) / 1000 * 0.5);
    }
    
    // Page count penalty
    if (this.metrics.pageCount > 20) {
      score -= Math.min(15, (this.metrics.pageCount - 20) * 0.5);
    }
    
    this.metrics.performanceScore = Math.max(0, Math.round(score));
  }

  generateReport() {
    this.log('\n📊 Performance Report', 'PERFORMANCE');
    this.log('=' .repeat(50));
    
    console.log(`\n⚡ Performance Score: ${this.metrics.performanceScore}/100`);
    console.log(`📦 Bundle Size: ${this.metrics.bundleSize}kB`);
    console.log(`⏱️  Build Time: ${this.metrics.buildTime}ms`);
    console.log(`📄 Pages: ${this.metrics.pageCount}`);
    console.log(`📊 Total Size: ${this.metrics.totalSize}kB`);
    
    if (this.recommendations.length > 0) {
      console.log('\n🔧 Recommendations:');
      this.recommendations.forEach((rec, index) => {
        const priority = rec.priority === 'high' ? '🔴' : rec.priority === 'medium' ? '🟡' : '🟢';
        console.log(`   ${index + 1}. ${priority} ${rec.message}`);
        
        if (rec.details && rec.details.length > 0) {
          console.log(`      Details: ${rec.details.map(d => d.file || d).join(', ')}`);
        }
      });
    } else {
      this.log('🎉 No performance issues found!', 'SUCCESS');
    }
    
    // Performance grade
    let grade = 'A';
    if (this.metrics.performanceScore < 90) grade = 'B';
    if (this.metrics.performanceScore < 80) grade = 'C';
    if (this.metrics.performanceScore < 70) grade = 'D';
    if (this.metrics.performanceScore < 60) grade = 'F';
    
    console.log(`\n🏆 Performance Grade: ${grade}`);
  }

  async run() {
    this.log('🚀 Starting Performance Monitor', 'PERFORMANCE');
    this.log(`Project Root: ${this.projectRoot}`);
    
    try {
      await this.measureBuildTime();
      await this.analyzeBundleSize();
      await this.checkImageOptimization();
      await this.checkCodeSplitting();
      await this.checkDependencies();
      
      this.calculatePerformanceScore();
      this.generateReport();
      
    } catch (error) {
      this.log(`Error during performance monitoring: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the monitor
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.run().catch(console.error);
}

module.exports = PerformanceMonitor;