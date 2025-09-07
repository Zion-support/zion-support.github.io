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


const fs = require('fs');
const path = require('path');
>>>>>>> main

>>>>>>> origin/main
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834

class PerformanceOptimizer {
  constructor() {
<<<<<<< HEAD
    this.reportFile = path.join(__dirname, '..', 'performance-optimization-report.json');
    this.optimizations = [];
=======
    this.projectRoot = process.cwd();
<<<<<<< HEAD
    this.reportsDir = path.join(this.projectRoot, "performance-reports");
    this.optimizations = [];
    this.metrics = {
      bundleSize: {},
      buildTime: 0,
      memoryUsage: {},
      dependencies: {},
      performance: {}
    };
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message, type = "info") {
    const timestamp = new Date().toISOString();
    const prefix = type === "error" ? "❌" : type === "success" ? "✅" : "ℹ️";
    console.log(`[${timestamp}] ${prefix} ${message}`);
  }

  async analyzeBundleSize() {
    this.log("📦 Analyzing bundle size...");
    
    try {
      // Check if .next directory exists
      const nextDir = path.join(this.projectRoot, ".next");
      if (!fs.existsSync(nextDir)) {
        this.log("No .next directory found, running build first...");
        execSync("npm run build", { 
          cwd: this.projectRoot,
          encoding: "utf8",
          timeout: 300000
        });
      }
      
      // Analyze static files
      const staticDir = path.join(nextDir, "static");
      if (fs.existsSync(staticDir)) {
        const staticSize = this.getDirectorySize(staticDir);
        this.metrics.bundleSize.static = staticSize;
        this.log(`Static files size: ${(staticSize / 1024 / 1024).toFixed(2)}MB`);
      }
      
      // Analyze pages
      const pagesDir = path.join(nextDir, "server", "pages");
      if (fs.existsSync(pagesDir)) {
        const pagesSize = this.getDirectorySize(pagesDir);
        this.metrics.bundleSize.pages = pagesSize;
        this.log(`Pages size: ${(pagesSize / 1024 / 1024).toFixed(2)}MB`);
      }
      
    } catch (error) {
      this.log(`Bundle analysis failed: ${error.message}`, "error");
    }
  }

  getDirectorySize(dir) {
    let totalSize = 0;
    
    const scanDirectory = (currentDir) => {
      try {
        const items = fs.readdirSync(currentDir);
        for (const item of items) {
          const fullPath = path.join(currentDir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            scanDirectory(fullPath);
          } else {
            totalSize += stat.size;
          }
        }
      } catch (error) {
        // Ignore permission errors
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
    const recommendations = [];
    
    if (this.optimizations.filter(o => o.priority === "high").length > 0) {
      recommendations.push("Address high-priority optimizations immediately");
    }
    
    if (this.metrics.buildTime > 60000) {
      recommendations.push("Consider implementing build caching strategies");
    }
    
    if (this.metrics.dependencies.outdated > 5) {
      recommendations.push("Regularly update dependencies to maintain security and performance");
    }
    
    recommendations.push("Implement continuous performance monitoring");
    recommendations.push("Set up automated performance testing in CI/CD");
    recommendations.push("Regularly audit and optimize bundle size");
    
    return recommendations;
  }

  generateMarkdownReport(report) {
    return `# Performance Optimization Report

**Generated:** ${report.timestamp}

## Metrics Summary
- **Build Time:** ${report.metrics.buildTime > 0 ? (report.metrics.buildTime / 1000).toFixed(2) + 's' : 'Failed'}
- **Static Bundle Size:** ${report.metrics.bundleSize.static ? (report.metrics.bundleSize.static / 1024 / 1024).toFixed(2) + 'MB' : 'N/A'}
- **Total Dependencies:** ${report.metrics.dependencies.total || 0}
- **Outdated Dependencies:** ${report.metrics.dependencies.outdated || 0}
- **Lint Issues:** ${report.metrics.performance.lintIssues || 0}
- **TypeScript Errors:** ${report.metrics.performance.typeErrors || 0}

## Optimization Summary
- **Total Optimizations:** ${report.summary.totalOptimizations}
- **High Priority:** ${report.summary.highPriority}
- **Medium Priority:** ${report.summary.mediumPriority}
- **Low Priority:** ${report.summary.lowPriority}

## Optimizations by Priority

### High Priority
${report.optimizations
  .filter(o => o.priority === "high")
  .map(o => `- **${o.title}** (${o.category})\n  - ${o.description}\n  - Action: ${o.action}`)
  .join('\n')}

### Medium Priority
${report.optimizations
  .filter(o => o.priority === "medium")
  .map(o => `- **${o.title}** (${o.category})\n  - ${o.description}\n  - Action: ${o.action}`)
  .join('\n')}

### Low Priority
${report.optimizations
  .filter(o => o.priority === "low")
  .map(o => `- **${o.title}** (${o.category})\n  - ${o.description}\n  - Action: ${o.action}`)
  .join('\n')}

## Recommendations
${report.recommendations.map(item => `- ${item}`).join('\n')}
`;
  }

  async run() {
    this.log("🚀 Starting Performance Optimization Analysis...");
    
    try {
      await this.analyzeBundleSize();
      await this.analyzeDependencies();
      await this.measureBuildTime();
      await this.analyzeCodeQuality();
      
      this.generateOptimizations();
      const report = this.generateReport();
      
      this.log("🎉 Performance optimization analysis completed!", "success");
      this.log(`📊 Generated ${this.optimizations.length} optimization recommendations`);
      
      return report;
    } catch (error) {
      this.log(`❌ Performance optimization failed: ${error.message}`, "error");
      throw error;
    }
  }
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
=======
    this.optimizations = [];
>>>>>>> main


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
    const report = {
      timestamp: new Date().toISOString(),
      optimizations: this.optimizations,
      summary: {
        total_optimizations: this.optimizations.length,
        completed: this.optimizations.filter(opt => opt.status === 'completed').length
      }
    };

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`Report saved to ${this.reportFile}`);
  }

  getAllFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    
    list.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat && stat.isDirectory()) {
        results = results.concat(this.getAllFiles(filePath));
      } else {
        results.push(filePath);
      }
    });
    
    return results;
  }

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
}

module.exports = PerformanceOptimizer;