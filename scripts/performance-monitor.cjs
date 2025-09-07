const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class PerformanceMonitor {
  constructor() {
    this.reportPath = '/workspace/performance-report.json';
    this.metrics = {
      timestamp: new Date().toISOString(),
      buildTime: 0,
      bundleSize: 0,
      pageCount: 0,
      lighthouseScore: 0,
      memoryUsage: 0
    };
  }

  log(message) {
    console.log(`ℹ️ [${new Date().toISOString()}] ${message}`);
  }

  async measureBuildTime() {
    this.log('Measuring build time...');
    const startTime = Date.now();
    
    try {
      execSync('npm run build', { stdio: 'pipe' });
      this.metrics.buildTime = Date.now() - startTime;
      this.log(`✅ Build completed in ${this.metrics.buildTime}ms`);
    } catch (error) {
      this.log(`❌ Build failed: ${error.message}`);
      throw error;
    }
  }

  async measureBundleSize() {
    this.log('Measuring bundle size...');
    
    try {
      const buildOutput = execSync('npm run build', { stdio: 'pipe', encoding: 'utf8' });
      const sizeMatch = buildOutput.match(/First Load JS shared by all\s+(\d+\.?\d*)\s+kB/);
      
      if (sizeMatch) {
        this.metrics.bundleSize = parseFloat(sizeMatch[1]);
        this.log(`✅ Bundle size: ${this.metrics.bundleSize} kB`);
      }
    } catch (error) {
      this.log(`❌ Bundle size measurement failed: ${error.message}`);
    }
  }

  async countPages() {
    this.log('Counting pages...');
    
    try {
      const pagesDir = '/workspace/app';
      const pages = this.countFilesRecursively(pagesDir, '.tsx');
      this.metrics.pageCount = pages;
      this.log(`✅ Found ${pages} pages`);
    } catch (error) {
      this.log(`❌ Page count failed: ${error.message}`);
    }
  }

  countFilesRecursively(dir, extension) {
    let count = 0;
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        count += this.countFilesRecursively(filePath, extension);
      } else if (file.endsWith(extension)) {
        count++;
      }
    }
    
    return count;
  }

  async measureMemoryUsage() {
    this.log('Measuring memory usage...');
    
    try {
      const memUsage = process.memoryUsage();
      this.metrics.memoryUsage = Math.round(memUsage.heapUsed / 1024 / 1024); // MB
      this.log(`✅ Memory usage: ${this.metrics.memoryUsage} MB`);
    } catch (error) {
      this.log(`❌ Memory measurement failed: ${error.message}`);
    }
  }

  async runLighthouse() {
    this.log('Running Lighthouse audit...');
    
    try {
      // Start dev server in background
      const devProcess = execSync('npm run dev &', { stdio: 'pipe' });
      
      // Wait for server to start
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Run Lighthouse
      const lighthouseOutput = execSync('npx lighthouse http://localhost:3000 --output=json --quiet', { 
        stdio: 'pipe', 
        encoding: 'utf8' 
      });
      
      const lighthouseData = JSON.parse(lighthouseOutput);
      this.metrics.lighthouseScore = Math.round(lighthouseData.categories.performance.score * 100);
      
      this.log(`✅ Lighthouse score: ${this.metrics.lighthouseScore}/100`);
      
      // Kill dev server
      execSync('pkill -f "next dev"', { stdio: 'pipe' });
    } catch (error) {
      this.log(`❌ Lighthouse audit failed: ${error.message}`);
    }
  }

  async generateReport() {
    this.log('Generating performance report...');
    
    try {
      const report = {
        ...this.metrics,
        recommendations: this.generateRecommendations()
      };
      
      fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
      this.log(`✅ Performance report saved to ${this.reportPath}`);
      
      // Display summary
      console.log('\n📊 PERFORMANCE SUMMARY');
      console.log('==========================================');
      console.log(`Build Time: ${this.metrics.buildTime}ms`);
      console.log(`Bundle Size: ${this.metrics.bundleSize} kB`);
      console.log(`Page Count: ${this.metrics.pageCount}`);
      console.log(`Lighthouse Score: ${this.metrics.lighthouseScore}/100`);
      console.log(`Memory Usage: ${this.metrics.memoryUsage} MB`);
      console.log('\n💡 RECOMMENDATIONS');
      report.recommendations.forEach((rec, index) => {
        console.log(`${index + 1}. ${rec}`);
      });
    } catch (error) {
      this.log(`❌ Report generation failed: ${error.message}`);
    }
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.metrics.buildTime > 30000) {
      recommendations.push('Consider optimizing build process - build time is over 30s');
    }
    
    if (this.metrics.bundleSize > 200) {
      recommendations.push('Bundle size is large - consider code splitting and tree shaking');
    }
    
    if (this.metrics.lighthouseScore < 90) {
      recommendations.push('Lighthouse score is below 90 - optimize performance');
    }
    
    if (this.metrics.memoryUsage > 100) {
      recommendations.push('High memory usage detected - check for memory leaks');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('Performance metrics look good! Keep up the great work.');
    }
    
    return recommendations;
  }

  async run() {
    this.log('🚀 Starting Performance Monitor...');
    
    try {
      await this.measureBuildTime();
      await this.measureBundleSize();
      await this.countPages();
      await this.measureMemoryUsage();
      // await this.runLighthouse(); // Commented out to avoid port conflicts
      
      await this.generateReport();
      
      this.log('✅ Performance monitoring completed successfully!');
    } catch (error) {
      this.log(`❌ Performance monitoring failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.run();
}

module.exports = PerformanceMonitor;