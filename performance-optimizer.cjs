#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.optimizations = [];
    this.errors = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description, options = {}) {
    this.log(`Running: ${description}`, 'PROGRESS');
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
        ...options,
      });
      this.log(`✅ ${description} completed successfully`, 'SUCCESS');
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr,
      };
    }
  }

  async optimizeImages() {
    this.log('Starting image optimization...', 'PROGRESS');
    
    try {
      // Check if images exist
      const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
      const imageFiles = [];
      
      const findImages = (dir) => {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          if (stat.isDirectory()) {
            findImages(filePath);
          } else if (imageExtensions.some(ext => file.toLowerCase().endsWith(ext))) {
            imageFiles.push(filePath);
          }
        });
      };
      
      findImages('public');
      
      if (imageFiles.length === 0) {
        this.log('No images found to optimize', 'WARNING');
        return;
      }
      
      this.log(`Found ${imageFiles.length} images to optimize`, 'INFO');
      
      // Install imagemin if not already installed
      const imageminResult = await this.runCommand(
        'npm install --save-dev imagemin imagemin-mozjpeg imagemin-pngquant imagemin-webp',
        'Install image optimization tools'
      );
      
      if (imageminResult.success) {
        this.optimizations.push('Image optimization tools installed');
      }
      
    } catch (error) {
      this.log(`Image optimization failed: ${error.message}`, 'ERROR');
      this.errors.push(`Image optimization: ${error.message}`);
    }
  }

  async optimizeBundle() {
    this.log('Starting bundle optimization...', 'PROGRESS');
    
    try {
      // Analyze bundle size
      const analyzeResult = await this.runCommand(
        'npm run build:analyze',
        'Analyze bundle size'
      );
      
      if (analyzeResult.success) {
        this.optimizations.push('Bundle analysis completed');
      }
      
      // Check for duplicate dependencies
      const duplicateCheck = await this.runCommand(
        'npx duplicate-package-checker',
        'Check for duplicate packages'
      );
      
      if (duplicateCheck.success) {
        this.optimizations.push('Duplicate package check completed');
      }
      
    } catch (error) {
      this.log(`Bundle optimization failed: ${error.message}`, 'ERROR');
      this.errors.push(`Bundle optimization: ${error.message}`);
    }
  }

  async optimizeCode() {
    this.log('Starting code optimization...', 'PROGRESS');
    
    try {
      // Run ESLint with performance rules
      const lintResult = await this.runCommand(
        'npx eslint . --rule "react-hooks/exhaustive-deps: warn" --rule "react/no-array-index-key: warn"',
        'Run performance-focused linting'
      );
      
      if (lintResult.success) {
        this.optimizations.push('Performance-focused linting completed');
      }
      
      // Check for unused imports
      const unusedImports = await this.runCommand(
        'npx ts-unused-exports tsconfig.json',
        'Check for unused exports'
      );
      
      if (unusedImports.success) {
        this.optimizations.push('Unused exports check completed');
      }
      
    } catch (error) {
      this.log(`Code optimization failed: ${error.message}`, 'ERROR');
      this.errors.push(`Code optimization: ${error.message}`);
    }
  }

  async optimizeBuild() {
    this.log('Starting build optimization...', 'PROGRESS');
    
    try {
      // Clean build
      const cleanResult = await this.runCommand(
        'rm -rf .next && rm -rf dist',
        'Clean previous builds'
      );
      
      if (cleanResult.success) {
        this.optimizations.push('Previous builds cleaned');
      }
      
      // Production build
      const buildResult = await this.runCommand(
        'npm run build',
        'Create optimized production build'
      );
      
      if (buildResult.success) {
        this.optimizations.push('Optimized production build created');
      }
      
    } catch (error) {
      this.log(`Build optimization failed: ${error.message}`, 'ERROR');
      this.errors.push(`Build optimization: ${error.message}`);
    }
  }

  async generateReport() {
    const totalDuration = Date.now() - this.startTime;
    
    this.log('\n📊 PERFORMANCE OPTIMIZATION REPORT');
    this.log('='.repeat(50));
    this.log(`Total Duration: ${totalDuration}ms`);
    this.log(`Optimizations Applied: ${this.optimizations.length}`);
    this.log(`Errors: ${this.errors.length}`);
    this.log('');
    
    if (this.optimizations.length > 0) {
      this.log('✅ Optimizations Applied:');
      this.optimizations.forEach(opt => this.log(`   • ${opt}`));
      this.log('');
    }
    
    if (this.errors.length > 0) {
      this.log('❌ Errors:');
      this.errors.forEach(error => this.log(`   • ${error}`));
      this.log('');
    }
    
    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      totalDuration,
      optimizations: this.optimizations,
      errors: this.errors,
      recommendations: this.generateRecommendations(),
    };
    
    fs.writeFileSync(
      'performance-optimization-report.json',
      JSON.stringify(report, null, 2)
    );
    this.log('📄 Detailed report saved to performance-optimization-report.json');
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.optimizations.length === 0) {
      recommendations.push('Consider implementing image optimization');
      recommendations.push('Enable bundle analysis for better insights');
      recommendations.push('Run performance-focused linting regularly');
    }
    
    if (this.errors.length > 0) {
      recommendations.push('Fix identified errors before deployment');
      recommendations.push('Consider adding error monitoring');
    }
    
    recommendations.push('Set up continuous performance monitoring');
    recommendations.push('Implement lazy loading for better initial load times');
    recommendations.push('Consider using a CDN for static assets');
    
    return recommendations;
  }

  async run() {
    this.log('🚀 Starting Performance Optimization Suite');
    this.log('='.repeat(50));
    
    try {
      await this.optimizeImages();
      await this.optimizeBundle();
      await this.optimizeCode();
      await this.optimizeBuild();
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
    } finally {
      await this.generateReport();
    }
  }
}

// Run the optimizer
const optimizer = new PerformanceOptimizer();
optimizer.run().catch(console.error);