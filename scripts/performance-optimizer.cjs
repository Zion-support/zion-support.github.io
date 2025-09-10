<<<<<<< HEAD
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
class PerformanceOptimizer {
  constructor() {
    this.metrics = {};
  }
  async analyzeBundle() {
    const buildDir = path.join(process.cwd(), '.next');
    if (fs.existsSync(buildDir)) {
      const stats = this.getDirectorySize(buildDir);
      this.metrics.bundleSize = stats;
      console.log(`Bundle size: ${(stats / 1024 / 1024).toFixed(2)} MB`);
    }
  }
  getDirectorySize(dirPath) {
    let totalSize = 0;
    const files = fs.readdirSync(dirPath);
    files.forEach(file => {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);
      if (stats.isDirectory()) {
        totalSize += this.getDirectorySize(filePath);
      } else {
        totalSize += stats.size;
      }
    });
    return totalSize;
  }
  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      recommendations: this.generateRecommendations()
    };
    fs.writeFileSync('performance-report.json', JSON.stringify(report, null, 2));
    console.log('Performance report generated');
  }
  generateRecommendations() {
    const recommendations = [];
    if (this.metrics.bundleSize > 1000000) { // 1MB
      recommendations.push('Consider implementing code splitting');
      recommendations.push('Use dynamic imports for large components');
      recommendations.push('Optimize images and assets');
    }
    return recommendations;
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
=======

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
>>>>>>> origin/automation-fixes
}
if (require.main === module) {
  const optimizer = new PerformanceOptimizer();
  optimizer.analyzeBundle();
  optimizer.generateReport();
}
<<<<<<< HEAD
module.exports = PerformanceOptimizer;
  optimizer.optimizePerformance().catch(console.error);
}
module.exports = PerformanceOptimizer;
<<<<<<< HEAD
=======
=======
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
    this.reportFile = path.join(__dirname, '../logs/performance-optimization-report.json')
    console.log('⚡ Optimizing performance...')
    const files = this.getAllFiles(this.projectRoot, ['.js', '.jsx', '.ts', '.tsx')]
        const content = fs.readFileSync(file, 'utf8')
    optimized = optimized.replace(/imports+{s*([^}]+)s*}s+froms+['"]([^'')]
=======
const optimizer = new PerformanceOptimizer()
optimizer.run().catch(console.error)
>>>>>>> origin/automation-fixes
