<<<<<<< HEAD
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class PerformanceOptimizer {
  constructor() {
<<<<<<< HEAD
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
=======
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
>>>>>>> main
  }
}

if (require.main === module) {
  const optimizer = new PerformanceOptimizer();
<<<<<<< HEAD
  optimizer.analyzeBundle();
  optimizer.generateReport();
}

module.exports = PerformanceOptimizer;
=======
  optimizer.optimizePerformance().catch(console.error);
}

module.exports = PerformanceOptimizer;
=======
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");class PerformanceOptimizer { constructor() { this.projectRoot = process.cwd();" this.reportFile = path.join(__dirname, "./logs/performance-optimization-report.json"); } async optimizePerformance() {" console.log(" Optimizing performance."); " const files = this.getAllFiles(this.projectRoot, [".js", ".jsx", ".ts", ".tsx"]); const optimizations = []; for (const file of files) { try {" const content = fs.readFileSync(file, "utf8"); const optimized = this.optimizeFile(content); if (content !== optimized) { fs.writeFileSync(file, optimized); optimizations.push({ file: path.relative(this.projectRoot, file), optimizations: this.getOptimizations(content, optimized) }); } } catch (error) { console.error(`Error processing ${file}: ${error.message}`); } } this.saveReport(optimizations);` console.log(` Performance optimization completed! Optimized ${optimizations.length} files.`); } optimizeFile(content) { let optimized = content; / Optimize imports" optimized = optimized.replace(/imports+{s*([^}]+)s*}s+froms+[""]([^""]+)[""]/g, (match, imports, module) => {" const cleanImports = imports.split(",").map(imp => imp.trim()).join(", ");"` return `import { ${cleanImports} } from "${module}"`; }); / Optimize arrow functions" optimized = optimized.replace(/functions+(w+)s*([^)]*)s*{/g, "const $1 = ($2) => {"); / Remove console.logs in production" if (process.env.NODE_ENV === "production") {" optimized = optimized.replace(/console.(log|warn|error)([^)]*);?/g, ""); } return optimized; } getOptimizations(original, optimized) { const optimizations = []; if (original !== optimized) {" optimizations.push("Imports optimized");" optimizations.push("Arrow functions optimized");" if (process.env.NODE_ENV === "production") {" optimizations.push("Console statements removed"); } } return optimizations; } getAllFiles(dir, extensions) { const files = []; try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir, item); const stat = fs.statSync(fullPath);" if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules") { files.push(.this.getAllFiles(fullPath, extensions)); } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) { files.push(fullPath); } } } catch (error) {" / Skip directories that can"t be read } return files; } saveReport(optimizations) { const report = { timestamp: new Date().toISOString(), totalFiles: optimizations.length, optimizations: optimizations }; fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)); }}if (require.main === module) { const optimizer = new PerformanceOptimizer(); optimizer.optimizePerformance().catch(console.error);}module.exports = PerformanceOptimizer;""`"`
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
    this.reportFile = path.join(__dirname, '../logs/performance-optimization-report.json')
    console.log('⚡ Optimizing performance...')
    const files = this.getAllFiles(this.projectRoot, ['.js', '.jsx', '.ts', '.tsx')]
        const content = fs.readFileSync(file, 'utf8')
    optimized = optimized.replace(/imports+{s*([^}]+)s*}s+froms+['"]([^'')]
>>>>>>> main
>>>>>>> main
>>>>>>> main
