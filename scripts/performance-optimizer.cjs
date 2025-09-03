#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'performance-reports');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async analyzeBundleSize() {
    this.log('📦 Analyzing bundle size...');
    try {
      // Build the project first
      execSync('npm run build', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 300000
      });

      // Check if .next directory exists and analyze it
      const nextDir = path.join(this.projectRoot, '.next');
      if (fs.existsSync(nextDir)) {
        const stats = this.getDirectorySize(nextDir);
        this.log(`📊 Bundle size: ${this.formatBytes(stats.size)}`);
        return { size: stats.size, files: stats.files };
      } else {
        this.log('⚠️ Build directory not found');
        return { size: 0, files: 0 };
      }
    } catch (error) {
      this.log(`❌ Bundle analysis failed: ${error.message}`);
      return { error: error.message };
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    let fileCount = 0;

    const scanDirectory = (dir) => {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);
        
        if (stats.isDirectory()) {
          scanDirectory(filePath);
        } else {
          totalSize += stats.size;
          fileCount++;
        }
      });
    };

    scanDirectory(dirPath);
    return { size: totalSize, files: fileCount };
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  async optimizeImages() {
    this.log('🖼️ Optimizing images...');
    try {
      const publicDir = path.join(this.projectRoot, 'public');
      if (fs.existsSync(publicDir)) {
        const imageFiles = this.findImageFiles(publicDir);
        this.log(`📸 Found ${imageFiles.length} image files`);
        
        // Here you could add actual image optimization logic
        // For now, we'll just report what we found
        return { optimized: imageFiles.length, files: imageFiles };
      } else {
        this.log('⚠️ Public directory not found');
        return { optimized: 0, files: [] };
      }
    } catch (error) {
      this.log(`❌ Image optimization failed: ${error.message}`);
      return { error: error.message };
    }
  }

  findImageFiles(dir) {
    const imageFiles = [];
    const extensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    
    const scanDirectory = (dir) => {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);
        
        if (stats.isDirectory()) {
          scanDirectory(filePath);
        } else {
          const ext = path.extname(file).toLowerCase();
          if (extensions.includes(ext)) {
            imageFiles.push(filePath);
          }
        }
      });
    };

    scanDirectory(dir);
    return imageFiles;
  }

  async checkCodeSplitting() {
    this.log('🔀 Checking code splitting...');
    try {
      // Check for dynamic imports in the codebase
      const result = execSync('grep -r "import(" src/ pages/ components/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" || true', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 30000
      });
      
      const dynamicImports = result.trim() ? result.split('\n').length - 1 : 0;
      this.log(`🔀 Found ${dynamicImports} dynamic imports`);
      
      return { dynamicImports, status: dynamicImports > 0 ? 'good' : 'needs_improvement' };
    } catch (error) {
      this.log(`❌ Code splitting check failed: ${error.message}`);
      return { error: error.message };
    }
  }

  async measureBuildTime() {
    this.log('⏱️ Measuring build time...');
    try {
      const startTime = Date.now();
      execSync('npm run build', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 300000
      });
      const buildTime = Date.now() - startTime;
      
      this.log(`⏱️ Build time: ${buildTime}ms`);
      
      return {
        buildTime,
        status: buildTime < 60000 ? 'excellent' :
                buildTime < 120000 ? 'good' :
                buildTime < 300000 ? 'fair' : 'needs_optimization'
      };
    } catch (error) {
      this.log(`❌ Build time measurement failed: ${error.message}`);
      return { error: error.message };
    }
  }

  async generateOptimizationReport() {
    this.log('📊 Generating optimization report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      analysis: {
        bundleSize: await this.analyzeBundleSize(),
        images: await this.optimizeImages(),
        codeSplitting: await this.checkCodeSplitting(),
        buildTime: await this.measureBuildTime()
      }
    };

    // Generate recommendations
    report.recommendations = this.generateRecommendations(report.analysis);

    const reportFile = path.join(this.reportsDir, `optimization-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📄 Optimization report generated: ${reportFile}`);
    
    return report;
  }

  generateRecommendations(analysis) {
    const recommendations = [];

    if (analysis.bundleSize && analysis.bundleSize.size > 5 * 1024 * 1024) { // 5MB
      recommendations.push({
        type: 'bundle_size',
        priority: 'high',
        message: 'Bundle size is large. Consider code splitting and tree shaking.',
        impact: 'Reduces initial load time'
      });
    }

    if (analysis.codeSplitting && analysis.codeSplitting.dynamicImports === 0) {
      recommendations.push({
        type: 'code_splitting',
        priority: 'medium',
        message: 'No dynamic imports found. Consider implementing code splitting.',
        impact: 'Improves initial page load performance'
      });
    }

    if (analysis.buildTime && analysis.buildTime.buildTime > 120000) { // 2 minutes
      recommendations.push({
        type: 'build_time',
        priority: 'medium',
        message: 'Build time is slow. Consider optimizing build process.',
        impact: 'Faster development and deployment'
      });
    }

    if (analysis.images && analysis.images.optimized > 0) {
      recommendations.push({
        type: 'image_optimization',
        priority: 'low',
        message: `${analysis.images.optimized} images found. Consider optimizing for web.`,
        impact: 'Reduces page load time'
      });
    }

    return recommendations;
  }

  async run() {
    this.log('⚡ Starting Performance Optimizer...');
    
    try {
      const report = await this.generateOptimizationReport();
      
      this.log('🎉 Performance optimization analysis completed!');
      this.log(`📊 Bundle size: ${this.formatBytes(report.analysis.bundleSize.size || 0)}`);
      this.log(`🔀 Dynamic imports: ${report.analysis.codeSplitting.dynamicImports || 0}`);
      this.log(`⏱️ Build time: ${report.analysis.buildTime.buildTime || 0}ms`);
      this.log(`💡 Recommendations: ${report.recommendations.length}`);
      
      return report;
    } catch (error) {
      this.log(`💥 Performance optimization failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the optimizer if this file is executed directly
if (require.main === module) {
  const optimizer = new PerformanceOptimizer();
  optimizer.run()
    .then((report) => {
      console.log('\n🎉 Performance Optimizer completed successfully!');
      console.log(`📊 Bundle size: ${optimizer.formatBytes(report.analysis.bundleSize.size || 0)}`);
      console.log(`💡 Recommendations: ${report.recommendations.length}`);
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n💥 Performance Optimizer failed:', error.message);
      process.exit(1);
    });
}

module.exports = PerformanceOptimizer;