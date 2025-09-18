#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class BuildOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/build-optimizer.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/build-optimizer-report.json');
    this.startTime = Date.now();
  }
  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Error writing to log file:', error.message);
    }
  }
  async analyzeBundle() {
    try {
      this.log('📦 Analyzing bundle...');
      const distPath = path.join(this.projectRoot, 'dist');
      if (!fs.existsSync(distPath)) {
        return { totalSize: 0, files: [], chunks: [] };
      }
      const files = [];
      const chunks = [];
      const walkDir = (dir, relativePath = '') => {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const relativeFilePath = path.join(relativePath, item);
          const stats = fs.statSync(fullPath);
          if (stats.isDirectory()) {
            walkDir(fullPath, relativeFilePath);
          } else {
            const fileInfo = {
              file: relativeFilePath,
              size: stats.size,
              sizeFormatted: this.formatBytes(stats.size),
              type: this.getFileType(relativeFilePath)
            };
            files.push(fileInfo);
            if (fileInfo.type === 'chunk') {
              chunks.push(fileInfo);
            }
          }
        }
      };
      walkDir(distPath);
      const totalSize = files.reduce((sum, file) => sum + file.size, 0);
      return {
        totalSize,
        totalSizeFormatted: this.formatBytes(totalSize),
        files: files.sort((a, b) => b.size - a.size),
        chunks: chunks.sort((a, b) => b.size - a.size)
      };
    } catch (error) {
      this.log(`Bundle analysis failed: ${error.message}`);
      return { totalSize: 0, files: [], chunks: [] };
    }
  }
  getFileType(filePath) {
    const ext = path.extname(filePath);
    if (ext === '.js') {
      if (filePath.includes('chunk') || filePath.includes('bundle')) {
        return 'chunk';
      }
      return 'script';
    } else if (ext === '.css') {
      return 'style';
    } else if (['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'].includes(ext)) {
      return 'image';
    } else if (ext === '.html') {
      return 'html';
    } else {
      return 'other';
    }
  }
  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
  async checkTreeShaking() {
    try {
      this.log('🌳 Checking tree shaking...');
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const hasTreeShaking = packageJson.sideEffects === false || 
                            (Array.isArray(packageJson.sideEffects) && packageJson.sideEffects.length === 0);
      return {
        enabled: hasTreeShaking,
        sideEffects: packageJson.sideEffects
      };
    } catch (error) {
      this.log(`Tree shaking check failed: ${error.message}`);
      return { enabled: false, sideEffects: undefined };
    }
  }
  async checkCodeSplitting() {
    try {
      this.log('✂️  Checking code splitting...');
      const nextConfigPath = path.join(this.projectRoot, 'next.config.js');
      let codeSplittingEnabled = true;
      if (fs.existsSync(nextConfigPath)) {
        const configContent = fs.readFileSync(nextConfigPath, 'utf8');
        codeSplittingEnabled = !configContent.includes('webpack: (config) => {') ||
                              !configContent.includes('optimization: { splitChunks: false }');
      }
      return {
        enabled: codeSplittingEnabled
      };
    } catch (error) {
      this.log(`Code splitting check failed: ${error.message}`);
      return { enabled: true };
    }
  }
  async checkMinification() {
    try {
      this.log('🗜️  Checking minification...');
      const nextConfigPath = path.join(this.projectRoot, 'next.config.js');
      let minificationEnabled = true;
      if (fs.existsSync(nextConfigPath)) {
        const configContent = fs.readFileSync(nextConfigPath, 'utf8');
        minificationEnabled = !configContent.includes('swcMinify: false');
      }
      return {
        enabled: minificationEnabled
      };
    } catch (error) {
      this.log(`Minification check failed: ${error.message}`);
      return { enabled: true };
    }
  }
  async optimizeBundle() {
    try {
      this.log('🔧 Optimizing bundle...');
      // Clean previous build
      if (fs.existsSync('dist')) {
        execSync('rm -rf dist', { cwd: this.projectRoot, stdio: 'pipe' });
      }
      // Run optimized build
      execSync('npm run build', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      return { success: true };
    } catch (error) {
      this.log(`Bundle optimization failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }
  generateReport(bundleAnalysis, treeShaking, codeSplitting, minification, optimization) {
    const recommendations = [];
    // Check bundle size
    const bundleSizeLimit = 2 * 1024 * 1024; // 2MB
    if (bundleAnalysis.totalSize > bundleSizeLimit) {
      recommendations.push({
        type: 'bundle-size',
        priority: 'high',
        message: `Bundle size ${bundleAnalysis.totalSizeFormatted} exceeds 2MB limit`,
        action: 'Implement code splitting and lazy loading'
      });
    }
    // Check tree shaking
    if (!treeShaking.enabled) {
      recommendations.push({
        type: 'tree-shaking',
        priority: 'medium',
        message: 'Tree shaking not properly configured',
        action: 'Set sideEffects: false in package.json'
      });
    }
    // Check code splitting
    if (!codeSplitting.enabled) {
      recommendations.push({
        type: 'code-splitting',
        priority: 'medium',
        message: 'Code splitting may be disabled',
        action: 'Enable code splitting in webpack configuration'
      });
    }
    // Check minification
    if (!minification.enabled) {
      recommendations.push({
        type: 'minification',
        priority: 'medium',
        message: 'Minification may be disabled',
        action: 'Enable minification in build configuration'
      });
    }
    // Check for large chunks
    const largeChunks = bundleAnalysis.chunks.filter(chunk => chunk.size > 500 * 1024); // 500KB
    if (largeChunks.length > 0) {
      recommendations.push({
        type: 'large-chunks',
        priority: 'medium',
        message: `${largeChunks.length} chunks larger than 500KB`,
        action: 'Split large chunks into smaller modules'
      });
    }
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalSize: bundleAnalysis.totalSize,
        totalSizeFormatted: bundleAnalysis.totalSizeFormatted,
        fileCount: bundleAnalysis.files.length,
        chunkCount: bundleAnalysis.chunks.length,
        treeShakingEnabled: treeShaking.enabled,
        codeSplittingEnabled: codeSplitting.enabled,
        minificationEnabled: minification.enabled,
        optimizationSuccess: optimization.success
      },
      bundleAnalysis,
      treeShaking,
      codeSplitting,
      minification,
      optimization,
      recommendations
    };
    return report;
  }
  async saveReport(report) {
    try {
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved to: ${this.reportFile}`);
    } catch (error) {
      this.log(`Error saving report: ${error.message}`);
    }
  }
  async run() {
    this.log('🔧 Starting Build Optimizer...');
    this.log(`Project root: ${this.projectRoot}`);
    try {
      // Create logs directory if it doesn't exist
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }
      // Analyze current bundle
      const bundleAnalysis = await this.analyzeBundle();
      // Check tree shaking
      const treeShaking = await this.checkTreeShaking();
      // Check code splitting
      const codeSplitting = await this.checkCodeSplitting();
      // Check minification
      const minification = await this.checkMinification();
      // Optimize bundle if enabled
      let optimization = { success: true };
      if (process.env.OPTIMIZE_BUNDLES === 'true') {
        optimization = await this.optimizeBundle();
      }
      // Generate report
      const report = this.generateReport(bundleAnalysis, treeShaking, codeSplitting, minification, optimization);
      // Save report
      await this.saveReport(report);
      const duration = Date.now() - this.startTime;
      // Log summary
      this.log('\n📊 Build Optimizer Report:');
      this.log(`Bundle size: ${report.summary.totalSizeFormatted}`);
      this.log(`Files: ${report.summary.fileCount}`);
      this.log(`Chunks: ${report.summary.chunkCount}`);
      this.log(`Tree shaking: ${report.summary.treeShakingEnabled ? '✅' : '❌'}`);
      this.log(`Code splitting: ${report.summary.codeSplittingEnabled ? '✅' : '❌'}`);
      this.log(`Minification: ${report.summary.minificationEnabled ? '✅' : '❌'}`);
      this.log(`Duration: ${duration}ms`);
      if (bundleAnalysis.chunks.length > 0) {
        this.log('\n📦 Largest chunks:');
        bundleAnalysis.chunks.slice(0, 5).forEach(chunk => {
          this.log(`  ${chunk.file}: ${chunk.sizeFormatted}`);
        });
      }
      if (report.recommendations.length > 0) {
        this.log('\n💡 Recommendations:');
        report.recommendations.forEach(rec => {
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Action: ${rec.action}`);
        });
      }
    } catch (error) {
      this.log(`❌ Error running build optimizer: ${error.message}`);
      process.exit(1);
    }
  }
}
// Run the build optimizer
const optimizer = new BuildOptimizer();
optimizer.run().catch(error => {
  process.exit(1);
});
#!/usr/bin/env node/usr/bin/env nodeconst { execSync } = require("child_process");"const fs = require("fs");"const path = require("path");class BuildOptimizer { constructor() {" this.processName = process.env.PM2_PROCESS_NAME | "build-optimizer";" this.optimizeBundles = process.env.OPTIMIZE_BUNDLES === "true";" this.treeShaking = process.env.TREE_SHAKING === "true";" this.codeSplitting = process.env.CODE_SPLITTING === "true";" this.minification = process.env.MINIFICATION === "true";" this.logFile = path.join(__dirname, "././logs/pm2/build-optimizer.log"); this.ensureLogDir(); } ensureLogDir() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir, { recursive: true }); } } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`; console.log(logMessage.trim()); fs.appendFileSync(this.logFile, logMessage); } async analyzeBundleSize() { try {" this.log("Analyzing bundle size."); " const distDir = "dist"; if (!fs.existsSync(distDir)) {" this.log("No dist directory found, running build first.");"" execSync("npm run build", { stdio: "pipe" }); } const bundleFiles = this.getBundleFiles(distDir); const totalSize = bundleFiles.reduce((total, file) => { const stats = fs.statSync(file.path); return total + stats.size; }, 0);"` this.log(`Total bundle size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`); return { totalSize," totalSizeMB: (totalSize / 1024 / 1024).toFixed(2)," files: bundleFiles.map(f => ({ name: f.name," size: f.size," sizeMB: (f.size / 1024 / 1024).toFixed(2) })) }; } catch (error) {"` this.log(`Bundle analysis failed: ${error.message}`);" return { error: error.message }; } } getBundleFiles(dir) { const files = []; const scanDir = (currentDir) => { try { const items = fs.readdirSync(currentDir); for (const item of items) { const itemPath = path.join(currentDir, item); const stat = fs.statSync(itemPath); if (stat.isDirectory()) { scanDir(itemPath); } else if (stat.isFile() && this.isBundleFile(item)) { files.push({" name: item," path: itemPath," size: stat.size }); } } } catch (err) {" / Skip directories that can"t be read } }; scanDir(dir); return files; } isBundleFile(filename) {" const bundleExtensions = [".js", ".css", ".mjs", ".chunk.js"]; return bundleExtensions.some(ext => filename.endsWith(ext)); } async optimizeBuild() { try {" this.log("Starting build optimization."); / Clean previous build" if (fs.existsSync("dist")) {"" fs.rmSync("dist", { recursive: true, force: true }); } / Run optimized build const buildCommand = this.getOptimizedBuildCommand();"` this.log(`Running: ${buildCommand}`); execSync(buildCommand, { "" stdio: "pipe"," cwd: process.cwd() });" this.log("Build optimization completed");" return { success: true }; } catch (error) {"` this.log(`Build optimization failed: ${error.message}`);" return { success: false, error: error.message }; } } getOptimizedBuildCommand() {" const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));" const buildScript = packageJson.scripts?.build | "npm run build"; / Add optimization flags if supported" if (buildScript.includes("vite")) {` return `${buildScript} --minify`;" } else if (buildScript.includes("webpack")) {` return `${buildScript} --mode production`; } return buildScript; } async checkTreeShaking() { if (!this.treeShaking) {" this.log("Tree shaking check disabled");" return { checked: false }; } try {" this.log("Checking tree shaking effectiveness."); " / This is a simplified check - in practice, you"d analyze the bundle" const distDir = "dist"; if (!fs.existsSync(distDir)) {"" return { checked: false, error: "No dist directory found" }; } / Look for unused code patterns const bundleFiles = this.getBundleFiles(distDir); let unusedCodeFound = 0; for (const file of bundleFiles) { try {" const content = fs.readFileSync(file.path, "utf8"); / Simple check for common unused code patterns" if (content.includes("console.log") && !content.includes("production")) { unusedCodeFound++; } } catch (err) {" / Skip files that can"t be read } }` this.log(`Tree shaking check completed. Potential unused code in ${unusedCodeFound} files`); return {" checked: true," unusedCodeFiles: unusedCodeFound,"" recommendation: unusedCodeFound > 0 ? "Consider enabling tree shaking" : "Tree shaking appears effective" }; } catch (error) {"` this.log(`Tree shaking check failed: ${error.message}`);" return { checked: false, error: error.message }; } } async checkCodeSplitting() { if (!this.codeSplitting) {" this.log("Code splitting check disabled");" return { checked: false }; } try {" this.log("Checking code splitting implementation."); " const distDir = "dist"; if (!fs.existsSync(distDir)) {"" return { checked: false, error: "No dist directory found" }; } const bundleFiles = this.getBundleFiles(distDir);" const chunkFiles = bundleFiles.filter(f => f.name.includes("chunk") | f.name.includes("vendor"));` this.log(`Found ${chunkFiles.length} chunk files`); return {" checked: true," chunkFiles: chunkFiles.length,"" recommendation: chunkFiles.length > 1 ? "Code splitting appears to be working" : "Consider implementing code splitting" }; } catch (error) {"` this.log(`Code splitting check failed: ${error.message}`);" return { checked: false, error: error.message }; } } async generateReport() { const report = {" timestamp: new Date().toISOString()," processName: this.processName," bundleAnalysis: await this.analyzeBundleSize()," optimization: await this.optimizeBuild()," treeShaking: await this.checkTreeShaking()," codeSplitting: await this.checkCodeSplitting()," environment: { NODE_ENV: process.env.NODE_ENV," optimizeBundles: this.optimizeBundles," treeShaking: this.treeShaking," codeSplitting: this.codeSplitting," minification: this.minification } };" const reportFile = path.join(__dirname, "././logs/pm2/build-optimizer-report.json"); fs.writeFileSync(reportFile, JSON.stringify(report, null, 2)); "` this.log(`Build optimization report generated: ${reportFile}`); return report; } async start() {` this.log(`${this.processName} started`); try { const report = await this.generateReport(); if (report.optimization.success) {" this.log("Build optimization completed successfully"); if (report.bundleAnalysis.totalSizeMB) {"` this.log(`Final bundle size: ${report.bundleAnalysis.totalSizeMB} MB`); } } else {" this.log("Build optimization completed with errors"); } } catch (error) {"` this.log(`Build optimization error: ${error.message}`); } }}/ Start the serviceif (require.main === module) { const buildOptimizer = new BuildOptimizer(); buildOptimizer.start().catch(console.error);}module.exports = BuildOptimizer;'"`'"`
#!/usr/bin/env node;
/**
 * PM2 Build Optimizer Service;
 * Optimizes build process and bundle size;
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
class BuildOptimizer {}
  constructor() {}
    this.processName = process.env.PM2_PROCESS_NAME || 'build-optimizer';
    this.optimizeBundles = process.env.OPTIMIZE_BUNDLES === 'true';
    this.treeShaking = process.env.TREE_SHAKING === 'true';
    this.codeSplitting = process.env.CODE_SPLITTING === 'true';
    this.minification = process.env.MINIFICATION === 'true';
    this.logFile = path.join(__dirname, '../../logs/pm2/build-optimizer.log');
    this.ensureLogDir();
  };
  ensureLogDir() {}
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {}
      fs.mkdirSync(logDir, { "recursive": true }
});
    };
  };
  log(message) {}
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;
    );
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;`
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  };
  async analyzeBundleSize() {}
    try {}
      this.log('Analyzing bundle size...');
      const distDir = 'dist';
      if (!fs.existsSync(distDir)) {}
        this.log('No dist directory found, running build first...');
        execSync('npm run build', { "stdio": 'pipe' }
});
      };
      const bundleFiles = this.getBundleFiles(distDir);
      const totalSize = bundleFiles.reduce((total, file) => {}
        const stats = fs.statSync(file.path);
        return total + stats.size;
      }, 0);
      this.log(`Total bundle "size": ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
      return {}
        totalSize,
        "totalSizeMB": (totalSize / 1024 / 1024).toFixed(2),
        "files": bundleFiles.map(f => ({})
          name: f.name,
          "size": f.size,
          "sizeMB": (f.size / 1024 / 1024).toFixed(2);
        }));
      };
    } catch (error) {}
      this.log(`Bundle analysis "failed": ${error.message}`);
      return { "error": error.message };
    };
  };
  getBundleFiles(dir) {}
    const files = [];
    const scanDir = (currentDir) => {}
      try {}
        const items = fs.readdirSync(currentDir);
        for (const item of items) {}
          const itemPath = path.join(currentDir, item);
          const stat = fs.statSync(itemPath);
          if (stat.isDirectory()) {}
            scanDir(itemPath);
          } else if (stat.isFile() && this.isBundleFile(item)) {}
            files.push({})
              "name": item,
              "path": itemPath,
              "size": stat.size;
            }
});
          };
        };
      } catch (err) {}
        // Skip directories that can't be read;
      };
    };
    scanDir(dir);
    return files;
  };
  isBundleFile(filename) {}
    const bundleExtensions = ['.js', '.css', '.mjs', '.chunk.js'];
    return bundleExtensions.some(ext => filename.endsWith(ext));
  };
  async optimizeBuild() {}
    try {}
      this.log('Starting build optimization...');
      // Clean previous build;
      if (fs.existsSync('dist')) {}
        fs.rmSync('dist', { "recursive": true, "force": true }
});
      };
      // Run optimized build;
      const buildCommand = this.getOptimizedBuildCommand();
      this.log(`"Running": ${buildCommand}`);
      execSync(buildCommand, { })
        "stdio": 'pipe',
        "cwd": process.cwd();
      }
});
      this.log('Build optimization completed');
      return { "success": true };
    } catch (error) {}
      this.log(`Build optimization "failed": ${error.message}`);
      return { "success": false, "error": error.message };
    };
  };
  getOptimizedBuildCommand() {}
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const buildScript = packageJson.scripts?.build || 'npm run build';
    // Add optimization flags if supported;
    if (buildScript.includes('vite')) {}
      return `${buildScript} --minify`;`
    } else if (buildScript.includes('webpack')) {}
      return `${buildScript} --mode production`;`
    };
    return buildScript;
  };
  async checkTreeShaking() {}
    if (!this.treeShaking) {}
      this.log('Tree shaking check disabled');
      return { "checked": false };
    };
    try {}
      this.log('Checking tree shaking effectiveness...');
      // This is a simplified check - in practice, you'd analyze the bundle;
      const distDir = 'dist';
      if (!fs.existsSync(distDir)) {}
        return { "checked": false, "error": 'No dist directory found' };
      };
      // Look for unused code patterns;
      const bundleFiles = this.getBundleFiles(distDir);
      let unusedCodeFound = 0;
      for (const file of bundleFiles) {}
        try {}
          const content = fs.readFileSync(file.path, 'utf8');
          // Simple check for common unused code patterns;
          if (content.includes('console.log') && !content.includes('production')) {}
            unusedCodeFound++;
          };
        } catch (err) {}
          // Skip files that can't be read;
        };
      };
      this.log(`Tree shaking check completed. Potential unused code in ${unusedCodeFound} files`);
      return {}
        "checked": true,
        "unusedCodeFiles": unusedCodeFound,
        "recommendation": unusedCodeFound > 0 ? 'Consider enabling tree shaking' : 'Tree shaking appears effective'
      };
    } catch (error) {}
      this.log(`Tree shaking check "failed": ${error.message}`);
      return { "checked": false, "error": error.message };
    };
  };
  async checkCodeSplitting() {}
    if (!this.codeSplitting) {}
      this.log('Code splitting check disabled');
      return { "checked": false };
    };
    try {}
      this.log('Checking code splitting implementation...');
      const distDir = 'dist';
      if (!fs.existsSync(distDir)) {}
        return { "checked": false, "error": 'No dist directory found' };
      };
      const bundleFiles = this.getBundleFiles(distDir);
      const chunkFiles = bundleFiles.filter(f => f.name.includes('chunk') || f.name.includes('vendor'));
      this.log(`Found ${chunkFiles.length} chunk files`);
      return {}
        "checked": true,
        "chunkFiles": chunkFiles.length,
        "recommendation": chunkFiles.length > 1 ? 'Code splitting appears to be working' : 'Consider implementing code splitting'
      };
    } catch (error) {}
      this.log(`Code splitting check "failed": ${error.message}`);
      return { "checked": false, "error": error.message };
    };
  };
  async generateReport() {}
    const report = {}
      "timestamp": new Date().toISOString(),
      "processName": this.processName,
      "bundleAnalysis": await this.analyzeBundleSize(),
      "optimization": await this.optimizeBuild(),
      "treeShaking": await this.checkTreeShaking(),
      "codeSplitting": await this.checkCodeSplitting(),
      "environment": {}
        NODE_ENV: process.env.NODE_ENV,
        "optimizeBundles": this.optimizeBundles,
        "treeShaking": this.treeShaking,
        "codeSplitting": this.codeSplitting,
        "minification": this.minification;
      };
    };
    const reportFile = path.join(__dirname, '../../logs/pm2/build-optimizer-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Build optimization report "generated": ${reportFile}`);
    return report;
  };
  async start() {}
    this.log(`${this.processName} started`);
    try {}
      const report = await this.generateReport();
      if (report.optimization.success) {}
        this.log('Build optimization completed successfully');
        if (report.bundleAnalysis.totalSizeMB) {}
          this.log(`Final bundle "size": ${report.bundleAnalysis.totalSizeMB} MB`);
        };
      } else {}
        this.log('Build optimization completed with errors');
      };
    } catch (error) {}
      this.log(`Build optimization "error": ${error.message}`);
    };
  };
};
// Start the service;
if (require.main === module) {}
  const buildOptimizer = new BuildOptimizer();
  buildOptimizer.start().catch(console.error);
};
module.exports = BuildOptimizer;
