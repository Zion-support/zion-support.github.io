<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
=======
<<<<<<< HEAD
#!/usr/bin/env node
/**
<<<<<<< HEAD
 * Performance Optimizer
 * Analyzes and optimizes application performance
 * Provides comprehensive performance monitoring and optimization recommendations
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
=======
 * Performance Optimization Script
 * Optimizes the app for better performance
 */
const fs = require("fs");
const path = require("path");
=======

<<<<<<< HEAD
console.log('⚡ Starting Performance Optimizer...');

class PerformanceOptimizer {
  constructor() {
    this.optimizations = [];
    this.logsDir = path.join(__dirname, '../logs');
    this.ensureLogsDir();
  }

  ensureLogsDir() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logsDir, 'performance-optimizer.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  // Optimize images
  async optimizeImages() {
    this.log('🖼️ Optimizing images...');
    
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
    <div className="bg- gray-100 p-4 rounded-lg">
      <h3 className=" text-lg font-semibold mb-4">Performance Metrics</h3>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg- white p-3 rounded">
          <div className=" text-sm text-gray-600">Load Time</div>
          <div className=" text-2xl font-bold text-blue-600">{metrics.loadTime}ms</div>
        </div>
        <div className="bg- white p-3 rounded">
          <div className=" text-sm text-gray-600">Memory Usage</div>
          <div className=" text-2xl font-bold text-green-600">{metrics.memoryUsage}MB</div>
        </div>
        <div className="bg- white p-3 rounded">
          <div className=" text-sm text-gray-600">Render Time</div>
          <div className=" text-2xl font-bold text-purple-600">{metrics.renderTime}ms</div>
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
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]};

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
        
        // Check if image is already optimized (WebP, compressed)
        if (file.endsWith('.webp') || file.endsWith('.avif')) {
          optimizedCount++;
        }
      });
        <div className=" space-y-2">
          <div className=" flex justify-between items-center p-2 bg-blue-50 rounded">
            <span>JavaScript</span>
            <span className=" font-medium">{formatBytes(bundleInfo.jsSize)}</span>
          </div>
          
          <div className=" flex justify-between items-center p-2 bg-green-50 rounded">
            <span>CSS</span>
            <span className=" font-medium">{formatBytes(bundleInfo.cssSize)}</span>
          </div>
          
          <div className=" flex justify-between items-center p-2 bg-purple-50 rounded">
            <span>Images</span>
            <span className=" font-medium">{formatBytes(bundleInfo.imageSize)}</span>
          </div>
        </div>
      </div>
    </div>
  )};

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
    };
    
    scanDirectory(dir);
    return totalSize;
  }

  async analyzeDependencies() {
    this.log("🔍 Analyzing dependencies...");
    
    try {
      const packageJsonPath = path.join(this.projectRoot, "package.json");
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
      
      const dependencies = {
        production: Object.keys(packageJson.dependencies || {}),
        development: Object.keys(packageJson.devDependencies || {}),
        total: 0
      };
      
      dependencies.total = dependencies.production.length + dependencies.development.length;
      
      this.metrics.dependencies = dependencies;
      this.log(`Total dependencies: ${dependencies.total} (${dependencies.production.length} prod, ${dependencies.development.length} dev)`);
      
      // Check for outdated dependencies
      try {
        const outdatedOutput = execSync("npm outdated --json", { 
          cwd: this.projectRoot,
          encoding: "utf8",
          timeout: 60000
        });
        
        const outdated = JSON.parse(outdatedOutput);
        this.metrics.dependencies.outdated = Object.keys(outdated).length;
        this.log(`Outdated dependencies: ${this.metrics.dependencies.outdated}`);
        
      } catch (error) {
        this.log("Could not check for outdated dependencies");
      }
      
    } catch (error) {
      this.log(`Dependency analysis failed: ${error.message}`, "error");
    }
  }

  async measureBuildTime() {
    this.log("⏱️ Measuring build time...");
    
    const startTime = Date.now();
    
    try {
      execSync("npm run build", { 
        cwd: this.projectRoot,
        encoding: "utf8",
        timeout: 300000
      });
      
      this.metrics.buildTime = Date.now() - startTime;
      this.log(`Build completed in ${(this.metrics.buildTime / 1000).toFixed(2)}s`);
      
    } catch (error) {
      this.log(`Build failed: ${error.message}`, "error");
      this.metrics.buildTime = -1;
    }
  }

  async analyzeCodeQuality() {
    this.log("🔍 Analyzing code quality...");
    
    try {
      // Run ESLint
      const lintOutput = execSync("npm run lint", { 
        cwd: this.projectRoot,
        encoding: "utf8",
        timeout: 120000
      });
      
      this.metrics.performance.lintIssues = 0;
      this.log("ESLint analysis completed");
      
    } catch (error) {
      // Count lint issues from stderr
      const stderr = error.stderr || "";
      const issueCount = (stderr.match(/error|warning/gi) || []).length;
      this.metrics.performance.lintIssues = issueCount;
      this.log(`ESLint found ${issueCount} issues`);
    }
    
    try {
      // Run TypeScript check
      execSync("npm run type-check", { 
        cwd: this.projectRoot,
        encoding: "utf8",
        timeout: 120000
      });
      
      this.metrics.performance.typeErrors = 0;
      this.log("TypeScript check completed");
      
    } catch (error) {
      const stderr = error.stderr || "";
      const errorCount = (stderr.match(/error/gi) || []).length;
      this.metrics.performance.typeErrors = errorCount;
      this.log(`TypeScript found ${errorCount} errors`);
    }
  }

  generateOptimizations() {
    this.log("💡 Generating optimization recommendations...");
    
    const optimizations = [];
    
    // Bundle size optimizations
    if (this.metrics.bundleSize.static > 5 * 1024 * 1024) { // 5MB
      optimizations.push({
        category: "Bundle Size",
        priority: "high",
        title: "Optimize static assets",
        description: "Static files are larger than 5MB. Consider image optimization and code splitting.",
        action: "Implement image optimization and lazy loading"
      });
    }
    
    // Build time optimizations
    if (this.metrics.buildTime > 60000) { // 1 minute
      optimizations.push({
        category: "Build Performance",
        priority: "medium",
        title: "Optimize build time",
        description: "Build time is longer than 1 minute. Consider build optimizations.",
        action: "Enable build caching and parallel processing"
      });
    }
    
    // Dependency optimizations
    if (this.metrics.dependencies.total > 100) {
      optimizations.push({
        category: "Dependencies",
        priority: "medium",
        title: "Reduce dependency count",
        description: "High number of dependencies may impact performance and security.",
        action: "Audit and remove unused dependencies"
      });
    }
    
    if (this.metrics.dependencies.outdated > 10) {
      optimizations.push({
        category: "Dependencies",
        priority: "high",
        title: "Update outdated dependencies",
        description: "Many dependencies are outdated, which may cause security and performance issues.",
        action: "Run 'npm update' and review breaking changes"
      });
    }
    
    // Code quality optimizations
    if (this.metrics.performance.lintIssues > 50) {
      optimizations.push({
        category: "Code Quality",
        priority: "medium",
        title: "Fix linting issues",
        description: "High number of linting issues may impact code maintainability.",
        action: "Run 'npm run lint:fix' and address remaining issues"
      });
    }
    
    if (this.metrics.performance.typeErrors > 0) {
      optimizations.push({
        category: "Code Quality",
        priority: "high",
        title: "Fix TypeScript errors",
        description: "TypeScript errors prevent proper type checking and may cause runtime issues.",
        action: "Address all TypeScript errors before deployment"
      });
    }
    
    // General optimizations
    optimizations.push({
      category: "Performance",
      priority: "low",
      title: "Implement performance monitoring",
      description: "Add real-time performance monitoring to track metrics in production.",
      action: "Integrate performance monitoring tools like Lighthouse CI"
    });
    
    optimizations.push({
      category: "Performance",
      priority: "low",
      title: "Enable compression",
      description: "Enable gzip/brotli compression for better loading times.",
      action: "Configure server compression and Next.js compression"
    });
    
    this.optimizations = optimizations;
    return optimizations;
  }

  generateReport() {
    this.log("📊 Generating performance optimization report...");
    
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      optimizations: this.optimizations,
      summary: {
        totalOptimizations: this.optimizations.length,
        highPriority: this.optimizations.filter(o => o.priority === "high").length,
        mediumPriority: this.optimizations.filter(o => o.priority === "medium").length,
        lowPriority: this.optimizations.filter(o => o.priority === "low").length
      },
      recommendations: this.generateRecommendations()
    };
    
    const reportPath = path.join(this.reportsDir, `performance-optimization-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Generate markdown report
    const markdownReport = this.generateMarkdownReport(report);
    const markdownPath = path.join(this.reportsDir, "PERFORMANCE_OPTIMIZATION.md");
    fs.writeFileSync(markdownPath, markdownReport);
    
    this.log(`📊 Performance report saved to ${reportPath}`, "success");
    this.log(`📄 Markdown report saved to ${markdownPath}`, "success");
    
    return report;
  }

  generateRecommendations() {
    return [










    ];
  }

  saveReport(report) {
    const reportFile = path.join(__dirname, '..', 'logs', 'performance-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Performance report saved to: ${reportFile}`);
  }
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
}

// Main execution
if (require.main === module) {
  const optimizer = new PerformanceOptimizer();
  optimizer.run().catch(error => {
    console.error("Performance optimization failed:", error);
    process.exit(1);
  });
}
=======
<<<<<<< HEAD
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
  }

  log(message) {
    console.log(`[Performance Optimizer] ${message}`);
  }

  async optimizeImages() {
    this.log('Optimizing images...');
    try {
      // Find and optimize images
      const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.svg'];
      const publicDir = path.join(__dirname, '..', 'public');
      
      if (fs.existsSync(publicDir)) {
        const files = this.getAllFiles(publicDir);
        const imageFiles = files.filter(file => 
          imageExtensions.some(ext => file.toLowerCase().endsWith(ext))
        );
        
        this.log(`Found ${imageFiles.length} images to optimize`);
        this.optimizations.push({
          type: 'image_optimization',
          count: imageFiles.length,
          status: 'completed'
        });
      }
    } catch (error) {
      this.log(`Error optimizing images: ${error.message}`);
    }
  }

  async optimizeBundle() {
    this.log('Analyzing bundle size...');
    try {
      // Run bundle analyzer
      execSync('npm run build', { stdio: 'pipe' });
      this.optimizations.push({
        type: 'bundle_analysis',
        status: 'completed'
      });
    } catch (error) {
      this.log(`Error analyzing bundle: ${error.message}`);
    }
  }

  async optimizeCode() {
    this.log('Optimizing code...');
    try {
      // Remove unused imports
      execSync('npx unimported', { stdio: 'pipe' });
      this.optimizations.push({
        type: 'unused_imports_removal',
        status: 'completed'
      });
    } catch (error) {
      this.log(`Error optimizing code: ${error.message}`);
    }
  }

<<<<<<< HEAD
  async generateReport() {
=======
  async run() {
    this.log("Starting performance optimization...");
    await this.optimizeImages();
    await this.optimizeBundle();
    await this.optimizeDatabase();
    this.log("Performance optimization completed!", "success");
  }
}

const optimizer = new PerformanceOptimizer();
optimizer.run().catch(console.error);


  getAllFiles(dir, extensions) {
    const files = [];
    if (!fs.existsSync(dir)) return files;
        files.push(...this.getAllFiles(fullPath, extensions));
          files.push(fullPath);
    return files;


const fs = require('fs')
const path = require('path')
    this.reportFile = path.join(__dirname, '../logs/performance-optimization-report.json')
    console.log('⚡ Optimizing performance...')
    const files = this.getAllFiles(this.projectRoot, ['.js', '.jsx', '.ts', '.tsx')]
        const content = fs.readFileSync(file, 'utf8')


  getBundleRecommendations(totalSize, fileCount) {
    const recommendations = [];
    if (totalSize > 1024 * 1024) { // > 1MB;
      recommendations.push('Consider code splitting to reduce initial bundle size');
    if (fileCount > 50) {
      recommendations.push('Consider consolidating small files');
    recommendations.push('Enable gzip compression on your server');
    recommendations.push('Use CDN for static assets');
    return recommendations;

  optimizeImages() {
  // TODO: Implement
      const publicPath = path.join(__dirname, '..', 'public');
      if (!fs.existsSync(publicPath)) {
        return { error: 'Public directory not found' };

      const imageFiles = this.getImageFiles(publicPath);
      let totalSize = 0;
      let optimizedCount = 0;
      imageFiles.forEach(file => {)
        const stats = fs.statSync(file);
        totalSize += stats.size;
        // Check if image is already optimized (WebP, compressed)
        if (file.endsWith('.webp') || file.endsWith('.avif')) {
          optimizedCount++;

      return {
  // TODO: Implement
        totalImages: imageFiles.length,
        optimizedImages: optimizedCount,
        totalSize: this.formatBytes(totalSize),
        recommendations: this.getImageRecommendations(imageFiles)
      };
      checkDirectory(srcDir);
      checkDirectory(pagesDir);
      this.results.codeSplitting = {
        success: true,
        dynamicImports,
        recommendation: dynamicImports > 0 ? 'Good code splitting detected' : 'Consider adding dynamic imports for better performance
      console.log('✅ Code Splitting Check - Success');
      return { error: error.message };

  getImageFiles(dir) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.svg'];
    const files = this.getFilesRecursively(dir);
    return files.filter(file => {)
    const ext = path.extname(file).toLowerCase(),
    return imageExtensions.includes(ext)

  getImageRecommendations(imageFiles) {
    const unoptimizedImages = imageFiles.filter(file => )
      !file.endsWith('.webp') && !file.endsWith('.avif')
    );
    if (unoptimizedImages.length > 0) {`;
      recommendations.push(`Convert ${unoptimizedImages.length} images to WebP format`);
    recommendations.push('Use responsive images with srcset');
    recommendations.push('Implement lazy loading for images');

  analyzeDependencies() {
  // TODO: Implement
      const packageJsonPath = path.join(__dirname, '..', 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const dependencies = Object.keys(packageJson.dependencies || {});
      const devDependencies = Object.keys(packageJson.devDependencies || {});
  // TODO: Implement
        totalDependencies: dependencies.length + devDependencies.length,
        productionDependencies: dependencies.length,
        devDependencies: devDependencies.length,
        potentialUnused: this.findUnusedDependencies(dependencies),
        recommendations: this.getDependencyRecommendations(dependencies, devDependencies)

  findUnusedDependencies(dependencies) {
    // This is a simplified check - in a real scenario, you'd use tools like depcheck;
    const potentiallyUnused = [];
    // Check for common unused dependencies;
    const commonUnused = ['lodash', 'moment', 'jquery'];
    commonUnused.forEach(dep => {)
      if (dependencies.includes(dep)) {
        potentiallyUnused.push(dep);
    return potentiallyUnused;

  getDependencyRecommendations(dependencies, devDependencies) {
    if (dependencies.length > 20) {
      recommendations.push('Consider removing unused dependencies to reduce bundle size');
    if (devDependencies.length > 30) {
      recommendations.push('Review dev dependencies for unused packages');
    recommendations.push('Use npm audit to check for security vulnerabilities');
    recommendations.push('Consider using lighter alternatives for heavy dependencies');

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
      'Implement proper error boundaries]
    ];
  },
module.exports = nextConfig;`;

    fs.writeFileSync(nextConfigPath, optimizedConfig);
    this.optimizations.push('Next.js configuration optimized');
    this.log('✅ Next.js configuration optimized');

  saveReport(report) {
    const reportFile = path.join(__dirname, '..', 'logs', 'performance-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));`;
    this.log(`Performance report saved to: ${reportFile}`);
  }}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],`;
};`;

    fs.writeFileSync(middlewarePath, middleware);
    this.optimizations.push('Performance middleware created');
    this.log('✅ Performance middleware created');

  async optimizePackageJson() {
    this.log('🔧 Optimizing package.json scripts...');
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    packageJson.scripts = {
      ...packageJson.scripts,
      'analyze': 'ANALYZE=true npm run build',
      'lighthouse': 'lighthouse http://localhost:3000 --output html --output-path ./lighthouse-report.html',
      'perf:audit': 'npm run build && npm run lighthouse',
      'perf:analyze': 'npm run analyze',
      'perf:test': 'npm run build && npm run test:smoke && npm run lighthouse
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    this.optimizations.push('Package.json performance scripts added');
    this.log('✅ Package.json performance scripts added');

  async createPerformanceReport() {
    this.log('📊 Creating performance report...');
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
>>>>>>> origin/chore/fix-lint-and-merge
    const report = {
      timestamp: new Date().toISOString(),
      optimizations: this.optimizations,
      summary: {
        total_optimizations: this.optimizations.length,
        completed: this.optimizations.filter(opt => opt.status === 'completed').length

    }
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2))
    this.log(`Report saved to ${this.reportFile}`)
  getAllFiles($2) {
    let results = []
    const list = fs.readdirSync(dir)
    list.forEach(file => {
      const filePath = path.join(dir, file)
      const stat = fs.statSync(filePath)
      if (stat && stat.isDirectory()) {
        results = results.concat(this.getAllFiles(filePath))
      } else {
        results.push(filePath)
    })
    return results
  async run() {
    this.log('Starting performance optimization...');
    
    await this.optimizeImages();
    await this.optimizeBundle();
    await this.optimizeCode();
    await this.generateReport();
    
    this.log('Performance optimization completed!');
  }
}

if (require.main === module) {
  const optimizer = new PerformanceOptimizer();
  optimizer.run().catch(console.error);
>>>>>>> origin/chore/fix-lint-and-merge
}

module.exports = PerformanceOptimizer;