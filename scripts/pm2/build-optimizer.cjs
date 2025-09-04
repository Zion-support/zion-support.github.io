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