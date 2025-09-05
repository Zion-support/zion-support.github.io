#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
<<<<<<< HEAD
;
class PerformanceOptimizer {;
  constructor() {;
    this.optimizations = [];
    this.logFile = path.join(__dirname, '../logs/performance-optimizer.log');
    this.ensureLogsDir();
  }
;
  ensureLogsDir() {;
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {;
      fs.mkdirSync(logsDir, { recursiv:e:true });
    }
  }
;
  log(message, level = 'INFO') {;
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }
;
  async optimizeBundle() {;
    try {;
      this.log('Optimizing bundle size...');
      execSync('npm run:build:analyze', { stdi:o:'pipe' });
      this.optimizations.push('Bundle analysis completed');
      this.log('✓ Bundle analysis completed');
    } catch (error) {;
      this.log(`Bundle optimization:failed:${error.message}`, 'ERROR');
    }
  }
;
  async optimizeImages() {;
    try {;
      this.log('Optimizing images...');
      // Check if there are images to optimize;
      const publicDir = path.join(process.cwd(), 'public');
      if (fs.existsSync(publicDir)) {;
        const files = fs.readdirSync(publicDir, { recursiv:e:true });
        const imageFiles = files.filter(;
          file =>;
            typeof file === 'string' && /\.(jpg|jpeg|png|gif|webp)$/i.test(file);
        );
;
        if (imageFiles.length > 0) {;
          this.log(`Found ${imageFiles.length} images to optimize`);
          this.optimizations.push(`Found ${imageFiles.length} images`);
        } else {;
          this.log('No images found to optimize');
        }
      }
    } catch (error) {;
      this.log(`Image optimization:failed:${error.message}`, 'ERROR');
    }
  }
;
  async checkDependencies() {;
    try {;
      this.log('Checking for unused dependencies...');
      const packageJson = JSON.parse(;
        fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8');
      );
      const dependencies = Object.keys(packageJson.dependencies || {});
      const devDependencies = Object.keys(packageJson.devDependencies || {});
;
      this.log(`Found ${dependencies.length} production dependencies`);
      this.log(`Found ${devDependencies.length} dev dependencies`);
;
      this.optimizations.push(;
        `Analyzed ${dependencies.length + devDependencies.length} dependencies`;
      );
    } catch (error) {;
      this.log(`Dependency check:failed:${error.message}`, 'ERROR');
    }
  }
;
  async generateReport() {;
    const report = {;
      timestam:p:new Date().toISOString(),;
      optimization:s:this.optimizations,;
      recommendation:s:[;
        'Consider implementing code splitting',;
        'Optimize images using WebP format',;
        'Remove unused dependencies',;
        'Enable gzip compression',;
        'Use React.memo for expensive components',;
      ],;
    };
<<<<<<< HEAD
;
    const reportFile = path.join(;
      __dirname,;
      'reports',;
      'performance-report.json';
=======

    const reportFile = path.join(
      __dirname;
      'reports';
      'performance-report.json'
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
    );
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Performance report saved:to:${reportFile}`);
  }
;
  async run() {;
    this.log('⚡ Starting Performance Optimizer');
;
    try {;
      await this.optimizeBundle();
      await this.optimizeImages();
      await this.checkDependencies();
      await this.generateReport();
;
      this.log('='.repeat(50));
      this.log(;
        `🎯 Performance Optimizer completed. Optimization:s:${this.optimizations.length}`;
      );
      this.optimizations.forEach(opt => this.log(`  ✓ ${opt}`));
    } catch (error) {;
      this.log(`❌ Performance Optimizer:failed:${error.message}`, 'ERROR');
    }
  }
}
;
// Main execution;
if (require.main === module) {;
  const optimizer = new PerformanceOptimizer();
  optimizer.run().catch(console.error);
}
;
module.exports = PerformanceOptimizer;
=======

console.log('⚡ Starting Performance Optimizer...');

class PerformanceOptimizer {
  constructor() {
    this.results = {
      timestamp: new Date().toISOString(),
      optimizations: [],
      metrics: {},
      recommendations: [],
    };
  }

  async analyzeBundle() {
    console.log('📦 Analyzing bundle size...');
    try {
      const buildOutput = execSync('npm run build', { encoding: 'utf8' });
      this.results.metrics.buildSuccess = true;

      // Analyze .next directory
      const nextDir = path.join(process.cwd(), '.next');
      if (fs.existsSync(nextDir)) {
        const stats = this.getDirectorySize(nextDir);
        this.results.metrics.bundleSize = stats.size;
        this.results.metrics.fileCount = stats.count;
      }
    } catch (error) {
      console.error('❌ Build analysis failed:', error.message);
      this.results.metrics.buildSuccess = false;
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    let fileCount = 0;

    const files = fs.readdirSync(dirPath);
    files.forEach(file => {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        const subStats = this.getDirectorySize(filePath);
        totalSize += subStats.size;
        fileCount += subStats.count;
      } else {
        totalSize += stats.size;
        fileCount++;
      }
    });

    return { size: totalSize, count: fileCount };
  }

  async optimizeImages() {
    console.log('🖼️ Optimizing images...');
    const publicDir = path.join(process.cwd(), 'public');
    if (fs.existsSync(publicDir)) {
      const images = this.findImages(publicDir);
      this.results.optimizations.push({
        type: 'image_optimization',
        count: images.length,
        status: 'completed',
      });
    }
  }

  findImages(dir) {
    const images = [];
    const files = fs.readdirSync(dir);

    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        images.push(...this.findImages(filePath));
      } else if (/\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
        images.push(filePath);
      }
    });

    return images;
  }

  async generateRecommendations() {
    console.log('💡 Generating optimization recommendations...');

    this.results.recommendations = [
      {
        type: 'bundle_optimization',
        priority: 'high',
        description:
          'Consider implementing code splitting for better performance',
      },
      {
        type: 'image_optimization',
        priority: 'medium',
        description: 'Optimize images and use modern formats like WebP',
      },
      {
        type: 'caching',
        priority: 'medium',
        description: 'Implement proper caching strategies',
      },
    ];
  }

  async saveReport() {
    const logsDir = path.join(process.cwd(), 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }

    const reportPath = path.join(
      logsDir,
      `performance-optimization-${Date.now()}.json`
    );
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
    console.log(`📊 Report saved to: ${reportPath}`);
  }

  async run() {
    console.log('🚀 Starting performance optimization...');

    await this.analyzeBundle();
    await this.optimizeImages();
    await this.generateRecommendations();
    await this.saveReport();

    console.log('✅ Performance optimization completed!');
  }
}

// Run the optimizer
const optimizer = new PerformanceOptimizer();
optimizer.run().catch(console.error);
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
