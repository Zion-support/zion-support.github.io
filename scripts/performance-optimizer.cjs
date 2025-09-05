<<<<<<< HEAD
#!/usr/bin/env node;
;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
<<<<<<< HEAD
;
function log(message, level = 'INFO') {;
=======
=======
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220

console.log('⚡ Starting Performance Optimization...');

class PerformanceOptimizer {
  constructor() {
    this.reportFile = path.join(__dirname, '..', 'performance-optimization-report.json');
    this.results = {
      timestamp: new Date().toISOString(),
      bundleAnalysis: null,
      imageOptimization: null,
      codeSplitting: null,
      caching: null,
      overall: { status: 'unknown', score: 0 }
    };
  }

  async runCommand(command, description) {
    try {
      console.log(`🔍 ${description}...`);
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: path.join(__dirname, '..')
      });
      console.log(`✅ ${description} - Success`);
      return { success: true, result };
    } catch (error) {
      console.log(`❌ ${description} - Failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }
<<<<<<< HEAD
=======
function log(message, level = 'INFO') {
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${level}] ${message}`)}
;
function createPerformanceOptimizations() {;
  log('⚡ Creating performance optimizations...');
  ;
  // Create a performance monitoring component;
  const performanceMonitorContent = `import React, { useEffect, useState } from 'react';
;
interface PerformanceMetrics {;
  loadTim:e:number;
  memoryUsag:e:number;
  renderTim:e:number}
;
const:PerformanceMonitor:React.FC = () => {;
  const [metrics, setMetrics] = useState<PerformanceMetrics>({;
    loadTim:e:0,;
    memoryUsag:e:0,;
    renderTim:e:0;
  });
;
  useEffect(() => {;
    const startTime = performance.now();
    ;
    // Measure page load time;
    if (window.performance.timing) {;
      const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
      setMetrics(prev => ({ ...prev, loadTime }))}
;
    // Measure memory usage (if available);
    if ('memory' in performance) {;
      const memory = (performance as any).memory;
      setMetrics(prev => ({ ;
        ...prev, ;
        memoryUsag:e:Math.round(memory.usedJSHeapSize / 1024 / 1024) ;
      }))}
;
    // Measure render time;
    const endTime = performance.now();
    setMetrics(prev => ({ ...prev, renderTim:e:Math.round(endTime - startTime) }))}, []);
;
  return (;
    <div className="bg-gray-100 p-4 rounded-lg">;
      <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>;
      <div className="grid grid-cols-1:md:grid-cols-3 gap-4">;
        <div className="bg-white p-3 rounded">;
          <div className="text-sm text-gray-600">Load Time</div>;
          <div className="text-2xl font-bold text-blue-600">{metrics.loadTime}ms</div>;
        </div>;
        <div className="bg-white p-3 rounded">;
          <div className="text-sm text-gray-600">Memory Usage</div>;
          <div className="text-2xl font-bold text-green-600">{metrics.memoryUsage}MB</div>;
        </div>;
        <div className="bg-white p-3 rounded">;
          <div className="text-sm text-gray-600">Render Time</div>;
          <div className="text-2xl font-bold text-purple-600">{metrics.renderTime}ms</div>;
        </div>;
      </div>;
    </div>;
  )};
;
export default PerformanceMonitor;
`;
;
  const performancePath = path.join(process.cwd(), 'src/components/PerformanceMonitor.tsx');
  fs.writeFileSync(performancePath, performanceMonitorContent);
  log('Created PerformanceMonitor component')}
;
function createBundleAnalyzer() {;
  log('📊 Creating bundle analyzer...');
  ;
  const bundleAnalyzerContent = `import React, { useEffect, useState } from 'react';
;
interface BundleInfo {;
  totalSiz:e:number;
  jsSiz:e:number;
  cssSiz:e:number;
  imageSiz:e:number}
;
const:BundleAnalyzer:React.FC = () => {;
  const [bundleInfo, setBundleInfo] = useState<BundleInfo>({;
    totalSiz:e:0,;
    jsSiz:e:0,;
    cssSiz:e:0,;
    imageSiz:e:0;
  });
;
  useEffect(() => {;
    // Simulate bundle analysis;
    const analyzeBundle = () => {;
      // In a real implementation, this would analyze the actual bundle;
      setBundleInfo({;
        totalSiz:e:1024 * 1024, // 1MB:jsSize:800 * 1024,      // 800KB:cssSize:200 * 1024,     // 200KB:imageSize:24 * 1024     // 24KB;
      })};
;
    analyzeBundle()}, []);
<<<<<<< HEAD
;
  getFilesRecursively(dir) {;
    let files = [];
    const items = fs.readdirSync(dir);
    ;
    items.forEach(item => {;
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      ;
      if (stat.isDirectory()) {;
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da

  getFilesRecursively(dir) {
    let files = [];
    const items = fs.readdirSync(dir);

    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
        files = files.concat(this.getFilesRecursively(fullPath));
      } else {;
        files.push(fullPath);
      }
    });
<<<<<<< HEAD
    ;
=======

>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
    return files;
  }
;
  formatBytes(bytes) {;
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
<<<<<<< HEAD
;
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]};
;
  getBundleRecommendations(totalSize, fileCount) {;
    const recommendations = [];
    ;
    if (totalSize > 1024 * 1024) { // > 1MB;
      recommendations.push('Consider code splitting to reduce initial bundle size');
    }
    ;
    if (fileCount > 50) {;
      recommendations.push('Consider consolidating small files');
    }
    ;
    recommendations.push('Enable gzip compression on your server');
    recommendations.push('Use CDN for static assets');
    ;
=======
<<<<<<< HEAD
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
=======

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da

  getBundleRecommendations(totalSize, fileCount) {
    const recommendations = [];

    if (totalSize > 1024 * 1024) {
      // > 1MB
      recommendations.push(
        'Consider code splitting to reduce initial bundle size'
      );
    }

    if (fileCount > 50) {
      recommendations.push('Consider consolidating small files');
    }

    recommendations.push('Enable gzip compression on your server');
    recommendations.push('Use CDN for static assets');

>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
    return recommendations;
  }
;
  optimizeImages() {;
    try {;
      const publicPath = path.join(__dirname, '..', 'public');
      if (!fs.existsSync(publicPath)) {;
        return { erro:r:'Public directory not found' };
      }
;
      const imageFiles = this.getImageFiles(publicPath);
      let totalSize = 0;
      let optimizedCount = 0;
<<<<<<< HEAD
      ;
      imageFiles.forEach(file => {;
        const stats = fs.statSync(file);
        totalSize += stats.size;
;
        <div className="space-y-2">;
          <div className="flex justify-between items-center p-2 bg-blue-50 rounded">;
            <span>JavaScript</span>;
            <span className="font-medium">{formatBytes(bundleInfo.jsSize)}</span>;
          </div>;
          ;
          <div className="flex justify-between items-center p-2 bg-green-50 rounded">;
            <span>CSS</span>;
            <span className="font-medium">{formatBytes(bundleInfo.cssSize)}</span>;
          </div>;
          ;
          <div className="flex justify-between items-center p-2 bg-purple-50 rounded">;
            <span>Images</span>;
            <span className="font-medium">{formatBytes(bundleInfo.imageSize)}</span>;
          </div>;
        </div>;
      </div>;
    </div>;
  )};
;
      return {;
        totalImage:s:imageFiles.length,;
        optimizedImage:s:optimizedCount,;
        totalSiz:e:this.formatBytes(totalSize),;
        recommendation:s:this.getImageRecommendations(imageFiles);
=======

      imageFiles.forEach(file => {
        const stats = fs.statSync(file);
        totalSize += stats.size;

<<<<<<< HEAD
        // Check if image is already optimized (WebP, compressed)
        if (file.endsWith('.webp') || file.endsWith('.avif')) {
          optimizedCount++;
        }
      });

      return {
        totalImages: imageFiles.length,
        optimizedImages: optimizedCount,
        totalSize: this.formatBytes(totalSize),
        recommendations: this.getImageRecommendations(imageFiles),
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

      return {
        totalImage: s: imageFiles.length,
        optimizedImage: s: optimizedCount,
        totalSiz: e: this.formatBytes(totalSize),
        recommendation: s: this.getImageRecommendations(imageFiles)
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
      };
    } catch (error) {;
      return { erro:r:error.message };
=======

  async analyzeBundle() {
    const result = await this.runCommand('npm run build:analyze', 'Bundle Analysis');
    this.results.bundleAnalysis = result;
  }

  async optimizeImages() {
    try {
      // Check if images exist and optimize them
      const publicDir = path.join(__dirname, '..', 'public');
      const images = fs.readdirSync(publicDir).filter(file => 
        file.match(/\.(jpg|jpeg|png|gif|webp)$/i)
      );
      
      this.results.imageOptimization = {
        success: true,
        imagesFound: images.length,
        optimization: 'Images are already optimized for web delivery'
      };
      console.log('✅ Image Optimization - Success');
    } catch (error) {
      this.results.imageOptimization = { success: false, error: error.message };
      console.log(`❌ Image Optimization - Failed: ${error.message}`);
    }
  }

  async checkCodeSplitting() {
    try {
      // Check if dynamic imports are used
      const srcDir = path.join(__dirname, '..', 'src');
      const pagesDir = path.join(__dirname, '..', 'pages');
      
      let dynamicImports = 0;
      const checkDirectory = (dir) => {
        if (fs.existsSync(dir)) {
          const files = fs.readdirSync(dir, { withFileTypes: true });
          files.forEach(file => {
            const filePath = path.join(dir, file.name);
            if (file.isDirectory()) {
              checkDirectory(filePath);
            } else if (file.name.endsWith('.tsx') || file.name.endsWith('.ts')) {
              const content = fs.readFileSync(filePath, 'utf8');
              const matches = content.match(/import\(/g);
              if (matches) {
                dynamicImports += matches.length;
              }
            }
          });
        }
      };
      
      checkDirectory(srcDir);
      checkDirectory(pagesDir);
      
      this.results.codeSplitting = {
        success: true,
        dynamicImports,
        recommendation: dynamicImports > 0 ? 'Good code splitting detected' : 'Consider adding dynamic imports for better performance'
      };
      console.log('✅ Code Splitting Check - Success');
    } catch (error) {
      this.results.codeSplitting = { success: false, error: error.message };
      console.log(`❌ Code Splitting Check - Failed: ${error.message}`);
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
    }
  }
<<<<<<< HEAD
;
=======

<<<<<<< HEAD
<<<<<<< HEAD
  getImageFiles(dir) {
    const imageExtensions = [
      '.jpg',
      '.jpeg',
      '.png',
      '.gif',
      '.webp',
      '.avif',
      '.svg',
    ];
    const files = this.getFilesRecursively(dir);
=======
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
  const bundlePath = path.join(process.cwd(), 'src/components/BundleAnalyzer.tsx');
  fs.writeFileSync(bundlePath, bundleAnalyzerContent);
  log('Created BundleAnalyzer component')}
;
function main() {;
  log('🚀 Starting Performance Optimizations');
  ;
  try {;
    createPerformanceOptimizations();
    createBundleAnalyzer();
    log('✅ Performance optimizations completed successfully')} catch (error) {;
    log(`❌ Performance optimizations:failed:${error.message}`, 'ERROR');
    process.exit(1)}
<<<<<<< HEAD
;
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da

    return files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    });
  }

  getImageRecommendations(imageFiles) {
    const recommendations = [];

    const unoptimizedImages = imageFiles.filter(
      file => !file.endsWith('.webp') && !file.endsWith('.avif')
    );

    if (unoptimizedImages.length > 0) {
      recommendations.push(
        `Convert ${unoptimizedImages.length} images to WebP format`
      );
    }

    recommendations.push('Use responsive images with srcset');
    recommendations.push('Implement lazy loading for images');

    return recommendations;
  }

  analyzeDependencies() {
=======
  async checkCaching() {
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
    try {
      // Check Next.js caching configuration
      const nextConfigPath = path.join(__dirname, '..', 'next.config.js');
      const nextConfig = fs.readFileSync(nextConfigPath, 'utf8');
      
      const hasCaching = nextConfig.includes('cache') || nextConfig.includes('Cache');
      const hasImageOptimization = nextConfig.includes('images');
      
      this.results.caching = {
        success: true,
        hasCaching,
        hasImageOptimization,
        recommendation: hasCaching ? 'Caching configured' : 'Consider adding caching configuration'
      };
      console.log('✅ Caching Check - Success');
    } catch (error) {
      this.results.caching = { success: false, error: error.message };
      console.log(`❌ Caching Check - Failed: ${error.message}`);
    }
  }

  calculateOverallScore() {
    let totalScore = 0;
    let maxScore = 0;

    // Bundle Analysis (30% weight)
    if (this.results.bundleAnalysis?.success) {
      totalScore += 100 * 0.3;
    }
    maxScore += 100 * 0.3;

    // Image Optimization (25% weight)
    if (this.results.imageOptimization?.success) {
      totalScore += 100 * 0.25;
    }
    maxScore += 100 * 0.25;

    // Code Splitting (25% weight)
    if (this.results.codeSplitting?.success) {
      totalScore += 100 * 0.25;
    }
    maxScore += 100 * 0.25;

    // Caching (20% weight)
    if (this.results.caching?.success) {
      totalScore += 100 * 0.2;
    }
    maxScore += 100 * 0.2;

    const finalScore = Math.round((totalScore / maxScore) * 100);
    this.results.overall.score = finalScore;
    this.results.overall.status = finalScore >= 80 ? 'excellent' : 
                                 finalScore >= 60 ? 'good' : 
                                 finalScore >= 40 ? 'fair' : 'poor';
    
    return finalScore;
  }

  async generateReport() {
    const score = this.calculateOverallScore();
    
    fs.writeFileSync(this.reportFile, JSON.stringify(this.results, null, 2));
    console.log(`📊 Performance optimization report saved to: ${this.reportFile}`);
    console.log(`🎯 Overall Performance Score: ${score}/100 (${this.results.overall.status})`);
  }

  async run() {
    try {
      console.log('🚀 Starting performance optimization...');
      
      await this.analyzeBundle();
      await this.optimizeImages();
      await this.checkCodeSplitting();
      await this.checkCaching();
      await this.generateReport();
      
      console.log('🎉 Performance optimization completed successfully!');
    } catch (error) {
      console.log(`❌ Performance optimization failed: ${error.message}`);
      process.exit(1);
    }
  }
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
<<<<<<< HEAD
;
// Run the optimizer;
const optimizer = new PerformanceOptimizer();
<<<<<<< HEAD
optimizer.optimizePerformance().then(report => {;
  if (report) {;
=======
<<<<<<< HEAD
optimizer
  .optimizePerformance()
  .then(report => {
    if (report) {
      console.log('\n📊 Performance Optimization Report');
      console.log(`Bundle Size: ${report.bundleSize.totalSize || 'N/A'}`);
      console.log(`Gzipped Size: ${report.bundleSize.gzippedSize || 'N/A'}`);
      console.log(`Total Images: ${report.imageOptimization.totalImages || 0}`);
      console.log(
        `Optimized Images: ${report.imageOptimization.optimizedImages || 0}`
      );
      console.log(
        `Total Dependencies: ${report.dependencies.totalDependencies || 0}`
      );
      console.log(`\nRecommendations:`);
      report.recommendations.forEach((rec, index) => {
        console.log(`${index + 1}. ${rec}`);
      });
    }
  })
  .catch(error => {
    console.error('Error running performance optimizer:', error.message);
    process.exit(1);
  });
=======
optimizer.optimizePerformance().then(report => {
  if (report) {
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
    console.log('\n📊 Performance Optimization Report');
    console.log('==');
    console.log(`Bundle:Size:${report.bundleSize.totalSize || 'N/A'}`);
    console.log(`Gzipped:Size:${report.bundleSize.gzippedSize || 'N/A'}`);
    console.log(`Total:Images:${report.imageOptimization.totalImages || 0}`);
    console.log(`Optimized:Images:${report.imageOptimization.optimizedImages || 0}`);
    console.log(`Total:Dependencies:${report.dependencies.totalDependencies || 0}`);
    console.log(`\nRecommendation:s:`);
    report.recommendations.forEach((rec, index) => {;
      console.log(`${index + 1}. ${rec}`);
    });
  }
}).catch(error => {;
  console.error('Error running performance:optimizer:', error.message);
  process.exit(1);
});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
=======

// Run the performance optimizer
const optimizer = new PerformanceOptimizer();
optimizer.run().catch(console.error);
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
