const fs = require('fs');
const path = require('path');

// Performance monitoring and optimization script
class PerformanceMonitor {
  constructor() {
    this.distPath = path.join(__dirname, '../dist');
    this.reportPath = path.join(__dirname, '../performance-report.json');
  }

  // Analyze bundle sizes
  analyzeBundleSizes() {
    const assetsPath = path.join(this.distPath, 'assets');
    const files = fs.readdirSync(assetsPath);
    
    const analysis = {
      totalFiles: files.length,
      totalSize: 0,
      jsFiles: 0,
      jsSize: 0,
      cssFiles: 0,
      cssSize: 0,
      imageFiles: 0,
      imageSize: 0,
      recommendations: []
    };

    files.forEach(file => {
      const filePath = path.join(assetsPath, file);
      const stats = fs.statSync(filePath);
      const size = stats.size;
      
      analysis.totalSize += size;

      if (file.endsWith('.js')) {
        analysis.jsFiles++;
        analysis.jsSize += size;
        
        // Check for large JS files
        if (size > 100 * 1024) { // 100KB
          analysis.recommendations.push({
            type: 'warning',
            message: `Large JS file detected: ${file} (${this.formatBytes(size)})`
          });
        }
      } else if (file.endsWith('.css')) {
        analysis.cssFiles++;
        analysis.cssSize += size;
      } else if (file.match(/\.(png|jpg|jpeg|gif|svg|webp)$/i)) {
        analysis.imageFiles++;
        analysis.imageSize += size;
      }
    });

    // Overall recommendations
    if (analysis.jsSize > 500 * 1024) { // 500KB
      analysis.recommendations.push({
        type: 'warning',
        message: 'Total JavaScript bundle size is large. Consider code splitting or tree shaking.'
      });
    }

    if (analysis.totalSize < 1000 * 1024) { // 1MB
      analysis.recommendations.push({
        type: 'success',
        message: 'Build size is optimized! Great job!'
      });
    }

    return analysis;
  }

  // Check for performance issues
  checkPerformanceIssues() {
    const issues = [];
    
    // Check for console statements in built files
    const jsFiles = this.getJSFiles();
    jsFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      const consoleMatches = content.match(/console\.(log|warn|error|info|debug)/g);
      if (consoleMatches) {
        issues.push({
          type: 'warning',
          message: `Console statements found in ${path.basename(file)}: ${consoleMatches.length} occurrences`
        });
      }
    });

    // Check for unused CSS
    const cssFiles = this.getCSSFiles();
    cssFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      // Simple check for potentially unused CSS
      const unusedPatterns = [
        /\.unused/,
        /\.debug/,
        /\.test/
      ];
      
      unusedPatterns.forEach(pattern => {
        if (pattern.test(content)) {
          issues.push({
            type: 'info',
            message: `Potentially unused CSS found in ${path.basename(file)}`
          });
        }
      });
    });

    return issues;
  }

  // Get all JS files
  getJSFiles() {
    const assetsPath = path.join(this.distPath, 'assets');
    return fs.readdirSync(assetsPath)
      .filter(file => file.endsWith('.js'))
      .map(file => path.join(assetsPath, file));
  }

  // Get all CSS files
  getCSSFiles() {
    const assetsPath = path.join(this.distPath, 'assets');
    return fs.readdirSync(assetsPath)
      .filter(file => file.endsWith('.css'))
      .map(file => path.join(assetsPath, file));
  }

  // Format bytes to human readable
  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  // Generate comprehensive report
  generateReport() {
    console.log('🚀 Starting performance analysis...');
    
    const bundleAnalysis = this.analyzeBundleSizes();
    const performanceIssues = this.checkPerformanceIssues();
    
    const report = {
      timestamp: new Date().toISOString(),
      buildStats: {
        totalFiles: bundleAnalysis.totalFiles,
        totalSize: bundleAnalysis.totalSize,
        jsFiles: bundleAnalysis.jsFiles,
        jsSize: bundleAnalysis.jsSize,
        cssFiles: bundleAnalysis.cssFiles,
        cssSize: bundleAnalysis.cssSize,
        imageFiles: bundleAnalysis.imageFiles,
        imageSize: bundleAnalysis.imageSize
      },
      recommendations: [
        ...bundleAnalysis.recommendations,
        ...performanceIssues
      ],
      optimization: {
        bundleSize: this.formatBytes(bundleAnalysis.totalSize),
        jsSize: this.formatBytes(bundleAnalysis.jsSize),
        cssSize: this.formatBytes(bundleAnalysis.cssSize),
        imageSize: this.formatBytes(bundleAnalysis.imageSize)
      }
    };

    // Save report
    fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
    
    // Log summary
    console.log('📊 Build Statistics:');
    console.log(`   Total files: ${bundleAnalysis.totalFiles}`);
    console.log(`   Total size: ${this.formatBytes(bundleAnalysis.totalSize)}`);
    console.log(`   JS files: ${bundleAnalysis.jsFiles} (${this.formatBytes(bundleAnalysis.jsSize)})`);
    console.log(`   CSS files: ${bundleAnalysis.cssFiles} (${this.formatBytes(bundleAnalysis.cssSize)})`);
    console.log(`   Image files: ${bundleAnalysis.imageFiles} (${this.formatBytes(bundleAnalysis.imageSize)})`);
    
    console.log('📄 Performance report generated:', this.reportPath);
    
    // Log recommendations
    if (report.recommendations.length > 0) {
      console.log('💡 Recommendations:');
      report.recommendations.forEach(rec => {
        const icon = rec.type === 'warning' ? '⚠️' : rec.type === 'success' ? '✅' : 'ℹ️';
        console.log(`   ${icon} ${rec.message}`);
      });
    }
    
    console.log('✅ Performance analysis completed!');
    
    return report;
  }
}

// Run the performance monitor
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.generateReport();
}

module.exports = PerformanceMonitor;