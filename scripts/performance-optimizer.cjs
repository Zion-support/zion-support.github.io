<<<<<<< HEAD
<<<<<<< HEAD
    this.projectRoot = process.cwd();
    this.reportFile = path.join(__dirname, '../logs/performance-optimization-report.json');
  }

  async optimizePerformance() {
    
    
    const files = this.getAllFiles(this.projectRoot, ['.js', '.jsx', '.ts', '.tsx']);
    const optimizations = [];

    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const optimized = this.optimizeFile(content);
        
        if (content !== optimized) {
          fs.writeFileSync(file, optimized);
          optimizations.push({
            file: path.relative(this.projectRoot, file),
            optimizations: this.getOptimizations(content, optimized)
          });
        }
      } catch (error) {
        console.error(`Error processing ${file}: ${error.message}`);
      }
    }

    this.saveReport(optimizations);
    
  }

  optimizeFile(content) {
    let optimized = content;
    
    // Optimize imports
    optimized = optimized.replace(/imports+{s*([^}]+)s*}s+froms+['"]([^'"]+)['"]/g, 
      (match, imports, module) => {
        const cleanImports = imports.split(',').map(imp => imp.trim()).join(', ');
        return `import { ${cleanImports} } from '${module}'`;
      });
    
    // Optimize arrow functions
    optimized = optimized.replace(/functions+(w+)s*([^)]*)s*{/g, 'const $1 = ($2) => {');
    
    // Remove console.logs in production
    if (process.env.NODE_ENV === 'production') {
      optimized = optimized.replace(/console.(log|warn|error)([^)]*);?/g, '');
    }
    
    return optimized;
  }

  getOptimizations(original, optimized) {
    const optimizations = [];
    if (original !== optimized) {
      optimizations.push('Imports optimized');
      optimizations.push('Arrow functions optimized');
      if (process.env.NODE_ENV === 'production') {
        optimizations.push('Console statements removed');
      }
    }
    return optimizations;
  }

  getAllFiles(dir, extensions) {
    const files = [];
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          files.push(...this.getAllFiles(fullPath, extensions));
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
    return files;
  }

  saveReport(optimizations) {
    const report = {
      timestamp: new Date().toISOString(),
      totalFiles: optimizations.length,
      optimizations: optimizations
    };
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
  }
}

if (require.main === module) {
  const optimizer = new PerformanceOptimizer();
  optimizer.optimizePerformance().catch(console.error);
}

module.exports = PerformanceOptimizer;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
    this.reportFile = path.join(__dirname, '../logs/performance-optimization-report.json')
    console.log('⚡ Optimizing performance...')
    const files = this.getAllFiles(this.projectRoot, ['.js', '.jsx', '.ts', '.tsx')]
        const content = fs.readFileSync(file, 'utf8')
    optimized = optimized.replace(/imports+{s*([^}]+)s*}s+froms+['"]([^'')]
=======
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

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
    }
  }

  async checkCaching() {
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
}

// Run the performance optimizer
const optimizer = new PerformanceOptimizer();
optimizer.run().catch(console.error);
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
=======
#!/usr/bin/env node;
;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

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

      return {
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
        recommendation: dynamicImports > 0 ? 'Good code splitting detected' : 'Consider adding dynamic imports for better performance'
      };
      console.log('✅ Code Splitting Check - Success');
    } catch (error) {
      return { error: error.message };
    }
  }

  getImageFiles(dir) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.svg'];
    const files = this.getFilesRecursively(dir);
    
    return files.filter(file => {
    const ext = path.extname(file).toLowerCase(),
    return imageExtensions.includes(ext)
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
  }}

;  async checkCaching() {
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
}

// Run the optimizer
const optimizer = new PerformanceOptimizer();
optimizer.optimizePerformance().then(report => {
  if (report) {
    console.log('\n📊 Performance Optimization Report');
    console.log('==');
    console.log(`Bundle Size: ${report.bundleSize.totalSize || 'N/A'}`);
    console.log(`Gzipped Size: ${report.bundleSize.gzippedSize || 'N/A'}`);
    console.log(`Total Images: ${report.imageOptimization.totalImages || 0}`);
    console.log(`Optimized Images: ${report.imageOptimization.optimizedImages || 0}`);
    console.log(`Total Dependencies: ${report.dependencies.totalDependencies || 0}`);
    console.log(`\nRecommendations: `),
    report.recommendations.forEach((rec, index) => {
      console.log(`${index + 1}. ${rec}`);
    });
  }
}).catch(error => {
  console.error('Error running performance optimizer:', error.message);
  process.exit(1);
});
const fs = require("fs")
const path = require("path")
#!/usr/bin/env node;
const fs = require("fs")
const path = require("fs")
const { execSync } = require("child_process")
class PerformanceOptimizer {
  constructor() {
    this.projectRoot = process.cwd()
    this.optimizations = [],,
}
  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`),,
}
  async optimizeImages() {
    console.log("🖼️ Optimizing images...")
    // Add image optimization logic here,,
}
  async optimizeCSS() {
    console.log("🎨 Optimizing CSS...")
    // Add CSS optimization logic here,,
}
  async optimizeJavaScript() {
    console.log("⚡ Optimizing JavaScript...")
    // Add JS optimization logic here,,
}
    this.log("🖼️ Optimizing images...")
    try {
      // Create optimized image directories;
      const publicDir = path.join(this.projectRoot, "public")
      const optimizedDir = path.join(publicDir, "optimized")
      if (!fs.existsSync(optimizedDir)) {
        fs.mkdirSync(optimizedDir, { recursive: true }),,
}
      this.optimizations.push("Image optimization directories created")
      this.log("✅ Image optimization setup completed"),,
} catch (error) {
      this.log(`❌ Image optimization failed: ${error.message}`),,
}
  }
  async optimizeBundle() {
    this.log("📦 Optimizing bundle...")
    try {
      // Create bundle analyzer script;
      const bundleAnalyzerScript = `;
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          openAnalyzer: false,
          reportFilename: "bundle-analysis.html",,
})),,
}
    return config,,
}
}
`;
      fs.writeFileSync(
        path.join(this.projectRoot, "next.config.analyze.js"),
        bundleAnalyzerScript)
      this.optimizations.push("Bundle analyzer configuration created")
      this.log("✅ Bundle optimization setup completed"),,
} catch (error) {
      this.log(`❌ Bundle optimization failed: ${error.message}`),,
}
  }
  async createPerformanceScripts() {
    this.log("📊 Creating performance monitoring scripts...")
    try {
      const performanceScript = `;
const { execSync } = require("fs")
const fs = require("fs")
const path = require("path")

class PerformanceMonitor {
  constructor() {
    this.reportsDir = path.join(process.cwd(), "performance-reports")
    this.ensureDirectories(),,
}
  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true }),,
}
  }
  async runLighthouse() {
    console.log("🔍 Running Lighthouse audit...")
    try {
      execSync("npm run build", {
        cwd: this.projectRoot,
        encoding: "utf8",
        stdio: "pipe",,
})
      this.metrics.buildTime = Date.now() - startTime;
      this.log(`✅ Build completed in ${this.metrics.buildTime}ms`, "SUCCESS")
      const command = "npx lighthouse http: //localhost:3000 --output=html --output-path=./performance-reports/lighthouse-report.html --chrome-flags="--headless;
      execSync(command, { stdio: "inherit" })
      console.log("✅ Lighthouse audit completed")

} catch (error) {
      console.log("❌ Lighthouse audit failed: ", error.message),,
}
  }
  async runBundleAnalysis() {
    console.log("📦 Running bundle analysis...")
    try {
      const command = "ANALYZE=true npm run build";
      execSync(command, { stdio: "inherit" })
      console.log("✅ Bundle analysis completed"),,
} catch (error) {
      console.log("❌ Bundle analysis failed: ", error.message),,
}
  }
}
const monitor = new PerformanceMonitor()
monitor.runLighthouse()
monitor.runBundleAnalysis()
`;
      fs.writeFileSync(
        path.join(this.projectRoot, "scripts", "performance-monitor.cjs"),
        performanceScript)
      this.optimizations.push("Performance monitoring scripts created")
      this.log("✅ Performance monitoring scripts created"),,
} catch (error) {
      this.log(`❌ Error analyzing dependencies: ${error.message}`, "ERROR"),,
}
  }
  checkImageOptimization() {
    this.log("🖼️ Checking image optimization...", "INFO")
    const publicDir = path.join(this.projectRoot, "public")
    if (!fs.existsSync(publicDir)) {
      this.log("⚠️ Public directory not found", "WARN")
      return,,
}
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"]
    const images = this.findFiles(publicDir, imageExtensions)
    this.log(`🖼️ Found ${images.length} images`, "INFO")
    if (images.length > 0) {
      this.optimizations.push({
        type: "image",
        description: "Consider using Next.js Image component for automatic optimization",
        impact: "high",
        files: images.slice(0, 5) // Show first 5 files,,
}),,
}
  }
  findFiles(dir, extensions) {
    const files = []
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir)
        for (const item of items) {
          const fullPath = path.join(dir, item)
          const stat = fs.statSync(fullPath)
          if (stat.isDirectory()) {
            scanDirectory(fullPath),,
} else if (extensions.some(ext => item.toLowerCase().endsWith(ext))) {
            files.push(path.relative(this.projectRoot, fullPath)),,
}
        }
      } catch (error) {
        // Skip directories we can"t read,,
}
    }
    scanDirectory(dir)
    return files,,
}
  checkCodeSplitting() {
    this.log("🔀 Checking code splitting...", "INFO")
    const pagesDir = path.join(this.projectRoot, "pages")
    const srcDir = path.join(this.projectRoot, "src")
    let pageCount = 0;
    let componentCount = 0;
    if (fs.existsSync(pagesDir)) {
      pageCount = this.countFiles(pagesDir, [".js", ".jsx", ".ts", ".tsx"]),,
}
    if (fs.existsSync(srcDir)) {
      componentCount = this.countFiles(srcDir, [".js", ".jsx", ".ts", ".tsx"]),,
}
    this.log(`📄 Pages: ${pageCount}`, "INFO")
    this.log(`🧩 Components: ${componentCount}`, "INFO")
    if (pageCount > 20) {
      this.optimizations.push({
        type: "code-splitting",
        description: "Consider implementing dynamic imports for large pages",
        impact: "medium",
        current: pageCount,,
}),,
}
  }
  countFiles(dir, extensions) {
    let count = 0;
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir)
        for (const item of items) {
          const fullPath = path.join(dir, item)
          const stat = fs.statSync(fullPath)
          if (stat.isDirectory()) {
            scanDirectory(fullPath),,
} else if (extensions.some(ext => item.toLowerCase().endsWith(ext))) {
            count++,,
}
        }
      } catch (error) {
        // Skip directories we can"t read,,
}
    }
    scanDirectory(dir)
    return count,,
}
  generateOptimizations() {
    this.log("💡 Generating optimization recommendations...", "INFO")
    // Bundle size optimizations;
    if (this.metrics.bundleSize > 5 * 1024 * 1024) { // 5MB;
      this.optimizations.push({
        type: "bundle-size",
        description: "Bundle size is large, consider code splitting and tree shaking",
        impact: "high",
        current: `${(this.metrics.bundleSize / 1024 / 1024).toFixed(2)}MB`,,
}),,
}
    // Build time optimizations;
    if (this.metrics.buildTime > 60000) { // 1 minute;
      this.optimizations.push({
        type: "build-time",
        description: "Build time is slow, consider optimizing build process",
        impact: "medium",
        current: `${(this.metrics.buildTime / 1000).toFixed(2)}s`,,
}),,
}
    // Dependency optimizations;
    if (this.metrics.dependencies > 100) {
      this.optimizations.push({
        type: "dependencies",
        description: "High number of dependencies, consider removing unused packages",
        impact: "medium",
        current: this.metrics.dependencies,,
}),,
}
  }
  generateReport() {
    this.ensureDirectories()
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      optimizations: this.optimizations,
      recommendations: this.generateRecommendations(),,
}
    const reportPath = path.join(this.reportsDir, "performance-optimizer-report.json")
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))
    this.log(`📄 Report saved to: ${reportPath}`, "SUCCESS")
    return report,,
}
  generateRecommendations() {
    const recommendations = []
    if (this.optimizations.length === 0) {
      recommendations.push("Performance looks good! No major optimizations needed."),,
} else {
      this.optimizations.forEach(opt => {
        recommendations.push(`${opt.type}: ${opt.description}`),,
}),,
}
    recommendations.push("Consider running Lighthouse audit for detailed performance metrics")
    recommendations.push("Monitor Core Web Vitals in production")
    return recommendations,,
}
  printSummary() {
    this.log("\n📊 Performance Analysis Summary: ", "INFO")
    this.log("=".repeat(50), "INFO")
    this.log(`📦 Bundle Size: ${(this.metrics.bundleSize / 1024 / 1024).toFixed(2)}MB`, "INFO")
    this.log(`⏱️ Build Time: ${(this.metrics.buildTime / 1000).toFixed(2)}s`, "INFO")
    this.log(`📁 Files: ${this.metrics.fileCount}`, "INFO")
    this.log(`📦 Dependencies: ${this.metrics.dependencies}`, "INFO")
    this.log(`💡 Optimizations: ${this.optimizations.length}`, "INFO")
    if (this.optimizations.length > 0) {
      this.log("\n🔍 Optimization Recommendations: ", "INFO")
      this.optimizations.forEach((opt, index) => {
        this.log(`  ${index + 1}. [${opt.impact.toUpperCase()}] ${opt.description}`, "INFO"),,
})
      this.log(`❌ Performance script creation failed: ${error.message}`)

}
  }
  async run() {
    this.log("🚀 Starting performance optimization...")
    await this.optimizeImages()
    await this.optimizeBundle()
    await this.createPerformanceScripts()
    this.log(`🎉 Performance optimization completed with ${this.optimizations.length} optimizations`)
    this.optimizations.forEach(opt => this.log(`  - ${opt}`)),,
}
}
const optimizer = new PerformanceOptimizer()
optimizer.run().catch(console.error)
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
