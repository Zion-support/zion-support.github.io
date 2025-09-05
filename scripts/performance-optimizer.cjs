#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

<<<<<<< HEAD
class PerformanceOptimizer {
  constructor() {
    this.optimizations = [];
    this.logFile = path.join(__dirname, '..', 'logs', 'performance-optimizer.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async optimizePerformance() {
    try {
      this.log('Starting performance optimization...');
      
      // Analyze bundle size
      const bundleAnalysis = this.analyzeBundleSize();
      
      // Optimize images
      const imageOptimization = this.optimizeImages();
      
      // Check for unused dependencies
      const dependencyAnalysis = this.analyzeDependencies();
      
      // Generate optimization report
      const report = {
        timestamp: new Date().toISOString(),
        bundleSize: bundleAnalysis,
        imageOptimization: imageOptimization,
        dependencies: dependencyAnalysis,
        recommendations: this.generateRecommendations()
      };
      
      this.saveReport(report);
      this.log('Performance optimization completed');
      return report;
    } catch (error) {
      this.log(`Performance optimization failed: ${error.message}`, 'ERROR');
      return null;
    }
  }

  analyzeBundleSize() {
    try {
      // Check if dist directory exists
      const distPath = path.join(__dirname, '..', 'dist');
      if (!fs.existsSync(distPath)) {
        return { error: 'Build directory not found. Run npm run build first.' };
      }

      const files = this.getFilesRecursively(distPath);
      let totalSize = 0;
      let gzippedSize = 0;
      
      files.forEach(file => {
        const stats = fs.statSync(file);
        totalSize += stats.size;
        
        // Estimate gzipped size (roughly 30% of original)
        gzippedSize += Math.floor(stats.size * 0.3);
      });

      return {
        totalSize: this.formatBytes(totalSize),
        gzippedSize: this.formatBytes(gzippedSize),
        fileCount: files.length,
        recommendations: this.getBundleRecommendations(totalSize, files.length)
      };
    } catch (error) {
      return { error: error.message };
    }
  }
=======
function log(message, level = 'INFO') {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${level}] ${message}`)}

function createPerformanceOptimizations() {
  log('⚡ Creating performance optimizations...');
  
  // Create a performance monitoring component
  const performanceMonitorContent = `import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  renderTime: number}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    renderTime: 0
  });

  useEffect(() => {
    const startTime = performance.now();
    
    // Measure page load time
    if (window.performance.timing) {
      const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
      setMetrics(prev => ({ ...prev, loadTime }))}

    // Measure memory usage (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setMetrics(prev => ({ 
        ...prev, 
        memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024) 
      }))}

    // Measure render time
    const endTime = performance.now();
    setMetrics(prev => ({ ...prev, renderTime: Math.round(endTime - startTime) }))}, []);

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-3 rounded">
          <div className="text-sm text-gray-600">Load Time</div>
          <div className="text-2xl font-bold text-blue-600">{metrics.loadTime}ms</div>
        </div>
        <div className="bg-white p-3 rounded">
          <div className="text-sm text-gray-600">Memory Usage</div>
          <div className="text-2xl font-bold text-green-600">{metrics.memoryUsage}MB</div>
        </div>
        <div className="bg-white p-3 rounded">
          <div className="text-sm text-gray-600">Render Time</div>
          <div className="text-2xl font-bold text-purple-600">{metrics.renderTime}ms</div>
        </div>
      </div>
    </div>
  )};

export default PerformanceMonitor;
`;

  const performancePath = path.join(process.cwd(), 'src/components/PerformanceMonitor.tsx');
  fs.writeFileSync(performancePath, performanceMonitorContent);
  log('Created PerformanceMonitor component')}

function createBundleAnalyzer() {
  log('📊 Creating bundle analyzer...');
  
  const bundleAnalyzerContent = `import React, { useEffect, useState } from 'react';

interface BundleInfo {
  totalSize: number;
  jsSize: number;
  cssSize: number;
  imageSize: number}

const BundleAnalyzer: React.FC = () => {
  const [bundleInfo, setBundleInfo] = useState<BundleInfo>({
    totalSize: 0,
    jsSize: 0,
    cssSize: 0,
    imageSize: 0
  });

  useEffect(() => {
    // Simulate bundle analysis
    const analyzeBundle = () => {
      // In a real implementation, this would analyze the actual bundle
      setBundleInfo({
        totalSize: 1024 * 1024, // 1MB
        jsSize: 800 * 1024,      // 800KB
        cssSize: 200 * 1024,     // 200KB
        imageSize: 24 * 1024     // 24KB
      })};

    analyzeBundle()}, []);
>>>>>>> 0c2e16b48bc8e3e612f083a473bfef415825ac30

  getFilesRecursively(dir) {
    let files = [];
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files = files.concat(this.getFilesRecursively(fullPath));
      } else {
        files.push(fullPath);
      }
    });
    
    return files;
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
<<<<<<< HEAD
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
=======
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]};
>>>>>>> 0c2e16b48bc8e3e612f083a473bfef415825ac30

  getBundleRecommendations(totalSize, fileCount) {
    const recommendations = [];
    
    if (totalSize > 1024 * 1024) { // > 1MB
      recommendations.push('Consider code splitting to reduce initial bundle size');
    }
    
    if (fileCount > 50) {
      recommendations.push('Consider consolidating small files');
    }
    
    recommendations.push('Enable gzip compression on your server');
    recommendations.push('Use CDN for static assets');
    
    return recommendations;
  }

  optimizeImages() {
    try {
      const publicPath = path.join(__dirname, '..', 'public');
      if (!fs.existsSync(publicPath)) {
        return { error: 'Public directory not found' };
      }

      const imageFiles = this.getImageFiles(publicPath);
      let totalSize = 0;
      let optimizedCount = 0;
      
      imageFiles.forEach(file => {
        const stats = fs.statSync(file);
        totalSize += stats.size;
        
<<<<<<< HEAD
        // Check if image is already optimized (WebP, compressed)
        if (file.endsWith('.webp') || file.endsWith('.avif')) {
          optimizedCount++;
        }
      });
=======
        <div className="space-y-2">
          <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
            <span>JavaScript</span>
            <span className="font-medium">{formatBytes(bundleInfo.jsSize)}</span>
          </div>
          
          <div className="flex justify-between items-center p-2 bg-green-50 rounded">
            <span>CSS</span>
            <span className="font-medium">{formatBytes(bundleInfo.cssSize)}</span>
          </div>
          
          <div className="flex justify-between items-center p-2 bg-purple-50 rounded">
            <span>Images</span>
            <span className="font-medium">{formatBytes(bundleInfo.imageSize)}</span>
          </div>
        </div>
      </div>
    </div>
  )};
>>>>>>> 0c2e16b48bc8e3e612f083a473bfef415825ac30

      return {
        totalImages: imageFiles.length,
        optimizedImages: optimizedCount,
        totalSize: this.formatBytes(totalSize),
        recommendations: this.getImageRecommendations(imageFiles)
      };
    } catch (error) {
      return { error: error.message };
    }
  }

<<<<<<< HEAD
  getImageFiles(dir) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.svg'];
    const files = this.getFilesRecursively(dir);
    
    return files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    });
  }

  getImageRecommendations(imageFiles) {
    const recommendations = [];
    
    const unoptimizedImages = imageFiles.filter(file => 
      !file.endsWith('.webp') && !file.endsWith('.avif')
    );
    
    if (unoptimizedImages.length > 0) {
      recommendations.push(`Convert ${unoptimizedImages.length} images to WebP format`);
    }
    
    recommendations.push('Use responsive images with srcset');
    recommendations.push('Implement lazy loading for images');
    
    return recommendations;
  }

  analyzeDependencies() {
    try {
      const packageJsonPath = path.join(__dirname, '..', 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      const dependencies = Object.keys(packageJson.dependencies || {});
      const devDependencies = Object.keys(packageJson.devDependencies || {});
      
      return {
        totalDependencies: dependencies.length + devDependencies.length,
        productionDependencies: dependencies.length,
        devDependencies: devDependencies.length,
        potentialUnused: this.findUnusedDependencies(dependencies),
        recommendations: this.getDependencyRecommendations(dependencies, devDependencies)
      };
    } catch (error) {
      return { error: error.message };
    }
  }

  findUnusedDependencies(dependencies) {
    // This is a simplified check - in a real scenario, you'd use tools like depcheck
    const potentiallyUnused = [];
    
    // Check for common unused dependencies
    const commonUnused = ['lodash', 'moment', 'jquery'];
    commonUnused.forEach(dep => {
      if (dependencies.includes(dep)) {
        potentiallyUnused.push(dep);
      }
    });
    
    return potentiallyUnused;
  }

  getDependencyRecommendations(dependencies, devDependencies) {
    const recommendations = [];
    
    if (dependencies.length > 20) {
      recommendations.push('Consider removing unused dependencies to reduce bundle size');
    }
    
    if (devDependencies.length > 30) {
      recommendations.push('Review dev dependencies for unused packages');
    }
    
    recommendations.push('Use npm audit to check for security vulnerabilities');
    recommendations.push('Consider using lighter alternatives for heavy dependencies');
    
    return recommendations;
  }

  generateRecommendations() {
    return [
      'Implement code splitting for better performance',
      'Use React.memo for expensive components',
      'Implement lazy loading for routes and components',
      'Optimize images and use modern formats (WebP, AVIF)',
      'Enable gzip compression on your server',
      'Use a CDN for static assets',
      'Implement service workers for caching',
      'Minimize and compress CSS and JavaScript',
      'Use tree shaking to eliminate dead code',
      'Implement proper error boundaries'
    ];
  }

  saveReport(report) {
    const reportFile = path.join(__dirname, '..', 'logs', 'performance-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Performance report saved to: ${reportFile}`);
  }
=======
  const bundlePath = path.join(process.cwd(), 'src/components/BundleAnalyzer.tsx');
  fs.writeFileSync(bundlePath, bundleAnalyzerContent);
  log('Created BundleAnalyzer component')}

function main() {
  log('🚀 Starting Performance Optimizations');
  
  try {
    createPerformanceOptimizations();
    createBundleAnalyzer();
    log('✅ Performance optimizations completed successfully')} catch (error) {
    log(`❌ Performance optimizations failed: ${error.message}`, 'ERROR');
    process.exit(1)}
>>>>>>> 0c2e16b48bc8e3e612f083a473bfef415825ac30
}

// Run the optimizer
const optimizer = new PerformanceOptimizer();
optimizer.optimizePerformance().then(report => {
  if (report) {
    console.log('\n📊 Performance Optimization Report');
    console.log('=====================================');
    console.log(`Bundle Size: ${report.bundleSize.totalSize || 'N/A'}`);
    console.log(`Gzipped Size: ${report.bundleSize.gzippedSize || 'N/A'}`);
    console.log(`Total Images: ${report.imageOptimization.totalImages || 0}`);
    console.log(`Optimized Images: ${report.imageOptimization.optimizedImages || 0}`);
    console.log(`Total Dependencies: ${report.dependencies.totalDependencies || 0}`);
    console.log(`\nRecommendations:`);
    report.recommendations.forEach((rec, index) => {
      console.log(`${index + 1}. ${rec}`);
    });
  }
}).catch(error => {
  console.error('Error running performance optimizer:', error.message);
  process.exit(1);
});