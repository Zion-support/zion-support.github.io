#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AdvancedPerformanceOptimizer {
  constructor() {
    this.optimizationResults = {
      timestamp: new Date().toISOString(),
      bundleAnalysis: {},
      performanceMetrics: {},
      optimizations: [],
      recommendations: []
    };
    this.logFile = path.join(__dirname, 'logs', 'performance-optimizer.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async optimizePerformance() {
    this.log('⚡ Starting Advanced Performance Optimization...');

    try {
      // Analyze bundle size
      await this.analyzeBundleSize();
      
      // Check for performance issues
      await this.checkPerformanceIssues();
      
      // Generate optimizations
      await this.generateOptimizations();
      
      // Save results
      await this.saveResults();
      
      this.log('Performance optimization completed successfully');
      return this.optimizationResults;
    } catch (error) {
      this.log(`Performance optimization failed: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async analyzeBundleSize() {
    this.log('Analyzing bundle size...');
    
    try {
      const buildDir = path.join(process.cwd(), '.next');
      if (!fs.existsSync(buildDir)) {
        this.log('Build directory not found. Run npm run build first.', 'WARNING');
        return;
      }

      const bundleSize = this.getDirectorySize(buildDir);
      const staticSize = this.getDirectorySize(path.join(buildDir, 'static'));
      
      this.optimizationResults.bundleAnalysis = {
        totalSize: bundleSize,
        staticSize: staticSize,
        sizeInMB: (bundleSize / 1024 / 1024).toFixed(2)
      };
      
    } catch (error) {
      this.log(`Bundle analysis failed: ${error.message}`, 'ERROR');
    }
  }

  async checkPerformanceIssues() {
    this.log('Checking for performance issues...');
    
    try {
      const issues = [];
      
      // Check for large images
      const largeImages = this.findLargeImages();
      if (largeImages.length > 0) {
        issues.push({
          type: 'large_images',
          count: largeImages.length,
          severity: 'warning',
          message: 'Large images detected (>1MB)'
        });
      }
      
      // Check for unused CSS
      const unusedCSS = this.findUnusedCSS();
      if (unusedCSS.length > 0) {
        issues.push({
          type: 'unused_css',
          count: unusedCSS.length,
          severity: 'info',
          message: 'Potentially unused CSS classes detected'
        });
      }
      
      // Check for missing lazy loading
      const missingLazyLoading = this.findMissingLazyLoading();
      if (missingLazyLoading.length > 0) {
        issues.push({
          type: 'missing_lazy_loading',
          count: missingLazyLoading.length,
          severity: 'warning',
          message: 'Images without lazy loading detected'
        });
      }
      
      this.optimizationResults.performanceMetrics = {
        issues,
        score: this.calculatePerformanceScore(issues)
      };
      
    } catch (error) {
      this.log(`Performance check failed: ${error.message}`, 'ERROR');
    }
  }

  async generateOptimizations() {
    this.log('Generating optimizations...');
    
    const optimizations = [];
    
    // Bundle size optimizations
    if (this.optimizationResults.bundleAnalysis.sizeInMB > 5) {
      optimizations.push({
        type: 'bundle_size',
        priority: 'high',
        description: 'Bundle size is large. Consider code splitting and tree shaking.',
        action: 'Implement dynamic imports and remove unused code'
      });
    }
    
    // Image optimizations
    const largeImages = this.optimizationResults.performanceMetrics.issues?.filter(i => i.type === 'large_images') || [];
    if (largeImages.length > 0) {
      optimizations.push({
        type: 'image_optimization',
        priority: 'medium',
        description: 'Large images detected. Optimize images for web.',
        action: 'Compress images and use modern formats (WebP, AVIF)'
      });
    }
    
    // Lazy loading optimizations
    const missingLazyLoading = this.optimizationResults.performanceMetrics.issues?.filter(i => i.type === 'missing_lazy_loading') || [];
    if (missingLazyLoading.length > 0) {
      optimizations.push({
        type: 'lazy_loading',
        priority: 'medium',
        description: 'Images without lazy loading detected.',
        action: 'Add loading="lazy" to image elements'
      });
    }
    
    this.optimizationResults.optimizations = optimizations;
    this.optimizationResults.recommendations = optimizations.map(opt => opt.action);
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    
    try {
      const files = fs.readdirSync(dirPath);
      
      files.forEach(file => {
        const filePath = path.join(dirPath, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          totalSize += this.getDirectorySize(filePath);
        } else {
          totalSize += stat.size;
        }
      });
    } catch (error) {
      // Directory might not exist or be accessible
    }
    
    return totalSize;
  }

  findLargeImages() {
    try {
      const result = execSync(`find . -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.gif" -o -name "*.webp" | xargs ls -la | awk '$5 > 1048576 {print $9}'`, {
        encoding: 'utf8',
        cwd: process.cwd()
      });
      return result.split('\n').filter(line => line.trim());
    } catch (error) {
      return [];
    }
  }

  findUnusedCSS() {
    // This is a simplified version - in a real implementation, you'd use tools like PurgeCSS
    return [];
  }

  findMissingLazyLoading() {
    try {
      const result = execSync(`grep -r '<img' --include="*.jsx" --include="*.tsx" . | grep -v 'loading=' | head -10`, {
        encoding: 'utf8',
        cwd: process.cwd()
      });
      return result.split('\n').filter(line => line.trim());
    } catch (error) {
      return [];
    }
  }

  calculatePerformanceScore(issues) {
    const errorCount = issues.filter(i => i.severity === 'error').length;
    const warningCount = issues.filter(i => i.severity === 'warning').length;
    const infoCount = issues.filter(i => i.severity === 'info').length;
    
    return Math.max(0, 100 - (errorCount * 30) - (warningCount * 20) - (infoCount * 5));
  }

  async saveResults() {
    const resultsFile = path.join(
      __dirname,
      'reports',
      'performance-optimization-results.json'
    );
    fs.mkdirSync(path.dirname(resultsFile), { recursive: true });
    fs.writeFileSync(resultsFile, JSON.stringify(this.optimizationResults, null, 2));
    this.log(`Performance optimization results saved to: ${resultsFile}`);
  }
}

// Run if called directly
if (require.main === module) {
  const optimizer = new AdvancedPerformanceOptimizer();
  optimizer.optimizePerformance().catch(console.error);
}

module.exports = AdvancedPerformanceOptimizer;