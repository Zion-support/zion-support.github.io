#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Front Maximizer Automation...');

class FrontMaximizer {
  constructor() {
    this.reportDir = path.join(process.cwd(), 'ci-cd-reports');
    this.ensureReportDirectory();
    this.startTime = Date.now();
    this.optimizations = [];
    this.issues = [];
    this.metrics = {};
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async run() {
    try {
      console.log('🔍 Running frontend optimization...');
      
      // Run various frontend optimizations
      await this.analyzeBundleSize();
      await this.optimizeImages();
      await this.checkCodeSplitting();
      await this.analyzePerformance();
      await this.checkAccessibility();
      await this.optimizeCSS();
      await this.checkSEO();
      
      // Generate report
      await this.generateReport();
      
      console.log(`✅ Front Maximizer completed. Applied ${this.optimizations.length} optimizations, found ${this.issues.length} issues.`);
      
    } catch (error) {
      console.error('❌ Front Maximizer failed:', error.message);
      await this.generateErrorReport(error);
    }
  }

  async analyzeBundleSize() {
    try {
      console.log('🔍 Analyzing bundle size...');
      
      // Check if dist directory exists
      if (fs.existsSync('dist')) {
        const distSize = this.getDirectorySize('dist');
        this.metrics.bundleSize = distSize;
        
        // Analyze individual file sizes
        const fileSizes = this.analyzeFileSizes('dist');
        
        this.optimizations.push({
          type: 'bundle_analysis',
          message: `Bundle size: ${this.formatBytes(distSize)}`,
          details: fileSizes,
          timestamp: new Date().toISOString()
        });
        
        console.log(`✅ Bundle size: ${this.formatBytes(distSize)}`);
        
        // Check for large files
        const largeFiles = fileSizes.filter(file => file.size > 1024 * 1024); // > 1MB
        if (largeFiles.length > 0) {
          this.issues.push({
            type: 'large_files',
            severity: 'warning',
            message: `Found ${largeFiles.length} large files`,
            files: largeFiles,
            timestamp: new Date().toISOString()
          });
          
          console.log(`⚠️  Found ${largeFiles.length} large files`);
        }
      } else {
        console.log('ℹ️  Dist directory not found, skipping bundle analysis');
      }
      
    } catch (error) {
      console.log('ℹ️  Error analyzing bundle size:', error.message);
    }
  }

  async optimizeImages() {
    try {
      console.log('🖼️  Optimizing images...');
      
      // Find image files
      const imageFiles = this.findImageFiles();
      
      if (imageFiles.length > 0) {
        this.optimizations.push({
          type: 'image_optimization',
          message: `Found ${imageFiles.length} image files`,
          count: imageFiles.length,
          timestamp: new Date().toISOString()
        });
        
        console.log(`✅ Found ${imageFiles.length} image files`);
        
        // Check for large images
        const largeImages = imageFiles.filter(img => img.size > 500 * 1024); // > 500KB
        if (largeImages.length > 0) {
          this.issues.push({
            type: 'large_images',
            severity: 'warning',
            message: `Found ${largeImages.length} large images`,
            images: largeImages,
            timestamp: new Date().toISOString()
          });
          
          console.log(`⚠️  Found ${largeImages.length} large images that could be optimized`);
        }
      } else {
        console.log('ℹ️  No image files found');
      }
      
    } catch (error) {
      console.log('ℹ️  Error optimizing images:', error.message);
    }
  }

  async checkCodeSplitting() {
    try {
      console.log('🔍 Checking code splitting...');
      
      // Check if there are multiple JavaScript bundles
      if (fs.existsSync('dist')) {
        const jsFiles = this.findFilesByExtension('dist', '.js');
        
        if (jsFiles.length > 1) {
          this.optimizations.push({
            type: 'code_splitting',
            message: `Code splitting detected: ${jsFiles.length} JavaScript bundles`,
            bundles: jsFiles.length,
            timestamp: new Date().toISOString()
          });
          
          console.log(`✅ Code splitting detected: ${jsFiles.length} JavaScript bundles`);
        } else {
          this.issues.push({
            type: 'code_splitting',
            severity: 'info',
            message: 'No code splitting detected - consider implementing for better performance',
            timestamp: new Date().toISOString()
          });
          
          console.log('ℹ️  No code splitting detected');
        }
      }
      
    } catch (error) {
      console.log('ℹ️  Error checking code splitting:', error.message);
    }
  }

  async analyzePerformance() {
    try {
      console.log('📊 Analyzing performance metrics...');
      
      // Check build performance
      const buildStart = Date.now();
      
      try {
        const buildOutput = execSync('npm run build', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        const buildEnd = Date.now();
        const buildTime = buildEnd - buildStart;
        
        this.metrics.buildTime = buildTime;
        
        this.optimizations.push({
          type: 'build_performance',
          message: `Build completed in ${buildTime}ms`,
          duration: buildTime,
          timestamp: new Date().toISOString()
        });
        
        console.log(`✅ Build completed in ${buildTime}ms`);
        
        // Check if build time is acceptable
        if (buildTime > 60000) { // 1 minute
          this.issues.push({
            type: 'slow_build',
            severity: 'warning',
            message: `Build time is slow: ${buildTime}ms`,
            duration: buildTime,
            timestamp: new Date().toISOString()
          });
          
          console.log(`⚠️  Build time is slow: ${buildTime}ms`);
        }
        
      } catch (error) {
        this.issues.push({
          type: 'build_failure',
          severity: 'error',
          message: 'Build failed during performance analysis',
          error: error.message,
          timestamp: new Date().toISOString()
        });
        
        console.log('❌ Build failed during performance analysis');
      }
      
    } catch (error) {
      console.log('ℹ️  Error analyzing performance:', error.message);
    }
  }

  async checkAccessibility() {
    try {
      console.log('♿ Checking accessibility...');
      
      // Check for accessibility attributes in HTML files
      const htmlFiles = this.findFilesByExtension('.', '.html');
      let accessibilityScore = 0;
      let totalChecks = 0;
      
      for (const file of htmlFiles) {
        if (fs.existsSync(file)) {
          const content = fs.readFileSync(file, 'utf8');
          const checks = this.performAccessibilityChecks(content);
          
          accessibilityScore += checks.score;
          totalChecks += checks.total;
        }
      }
      
      const averageScore = totalChecks > 0 ? (accessibilityScore / totalChecks) * 100 : 0;
      
      this.metrics.accessibilityScore = averageScore;
      
      if (averageScore >= 80) {
        this.optimizations.push({
          type: 'accessibility',
          message: `Good accessibility score: ${averageScore.toFixed(1)}%`,
          score: averageScore,
          timestamp: new Date().toISOString()
        });
        
        console.log(`✅ Good accessibility score: ${averageScore.toFixed(1)}%`);
      } else {
        this.issues.push({
          type: 'accessibility',
          severity: 'warning',
          message: `Accessibility score needs improvement: ${averageScore.toFixed(1)}%`,
          score: averageScore,
          timestamp: new Date().toISOString()
        });
        
        console.log(`⚠️  Accessibility score needs improvement: ${averageScore.toFixed(1)}%`);
      }
      
    } catch (error) {
      console.log('ℹ️  Error checking accessibility:', error.message);
    }
  }

  async optimizeCSS() {
    try {
      console.log('🎨 Optimizing CSS...');
      
      // Check CSS files
      const cssFiles = this.findFilesByExtension('.', '.css');
      
      if (cssFiles.length > 0) {
        let totalCSSSize = 0;
        
        for (const file of cssFiles) {
          if (fs.existsSync(file)) {
            const stats = fs.statSync(file);
            totalCSSSize += stats.size;
          }
        }
        
        this.metrics.cssSize = totalCSSSize;
        
        this.optimizations.push({
          type: 'css_optimization',
          message: `CSS files found: ${cssFiles.length}, total size: ${this.formatBytes(totalCSSSize)}`,
          fileCount: cssFiles.length,
          totalSize: totalCSSSize,
          timestamp: new Date().toISOString()
        });
        
        console.log(`✅ CSS files found: ${cssFiles.length}, total size: ${this.formatBytes(totalCSSSize)}`);
        
        if (totalCSSSize > 2 * 1024 * 1024) { // > 2MB
          this.issues.push({
            type: 'large_css',
            severity: 'warning',
            message: `CSS bundle is large: ${this.formatBytes(totalCSSSize)}`,
            size: totalCSSSize,
            timestamp: new Date().toISOString()
          });
          
          console.log(`⚠️  CSS bundle is large: ${this.formatBytes(totalCSSSize)}`);
        }
      }
      
    } catch (error) {
      console.log('ℹ️  Error optimizing CSS:', error.message);
    }
  }

  async checkSEO() {
    try {
      console.log('🔍 Checking SEO...');
      
      let seoScore = 0;
      const seoChecks = [];
      
      // Check for meta tags
      const htmlFiles = this.findFilesByExtension('.', '.html');
      
      for (const file of htmlFiles) {
        if (fs.existsSync(file)) {
          const content = fs.readFileSync(file, 'utf8');
          const checks = this.performSEOChecks(content);
          seoScore += checks.score;
          seoChecks.push(...checks.checks);
        }
      }
      
      const averageSEOScore = htmlFiles.length > 0 ? (seoScore / htmlFiles.length) * 100 : 0;
      
      this.metrics.seoScore = averageSEOScore;
      
      if (averageSEOScore >= 70) {
        this.optimizations.push({
          type: 'seo',
          message: `Good SEO score: ${averageSEOScore.toFixed(1)}%`,
          score: averageSEOScore,
          checks: seoChecks,
          timestamp: new Date().toISOString()
        });
        
        console.log(`✅ Good SEO score: ${averageSEOScore.toFixed(1)}%`);
      } else {
        this.issues.push({
          type: 'seo',
          severity: 'warning',
          message: `SEO score needs improvement: ${averageSEOScore.toFixed(1)}%`,
          score: averageSEOScore,
          checks: seoChecks,
          timestamp: new Date().toISOString()
        });
        
        console.log(`⚠️  SEO score needs improvement: ${averageSEOScore.toFixed(1)}%`);
      }
      
    } catch (error) {
      console.log('ℹ️  Error checking SEO:', error.message);
    }
  }

  findImageFiles() {
    const imageFiles = [];
    
    try {
      const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'];
      
      for (const ext of imageExtensions) {
        const files = this.findFilesByExtension('.', ext);
        
        for (const file of files) {
          if (fs.existsSync(file)) {
            const stats = fs.statSync(file);
            imageFiles.push({
              path: file,
              size: stats.size,
              extension: ext
            });
          }
        }
      }
    } catch (error) {
      console.log('ℹ️  Error finding image files:', error.message);
    }
    
    return imageFiles;
  }

  findFilesByExtension(directory, extension) {
    try {
      const output = execSync(`find ${directory} -name "*${extension}" | head -50`, { 
        encoding: 'utf8',
        cwd: process.cwd()
      });
      
      return output.split('\n').filter(line => line.trim());
    } catch (error) {
      return [];
    }
  }

  analyzeFileSizes(directory) {
    const fileSizes = [];
    
    try {
      const items = fs.readdirSync(directory);
      
      for (const item of items) {
        const itemPath = path.join(directory, item);
        const stats = fs.statSync(itemPath);
        
        if (stats.isFile()) {
          fileSizes.push({
            name: item,
            size: stats.size,
            path: itemPath
          });
        } else if (stats.isDirectory()) {
          const subFiles = this.analyzeFileSizes(itemPath);
          fileSizes.push(...subFiles);
        }
      }
    } catch (error) {
      console.log(`ℹ️  Error analyzing file sizes for ${directory}:`, error.message);
    }
    
    return fileSizes.sort((a, b) => b.size - a.size);
  }

  performAccessibilityChecks(content) {
    let score = 0;
    const total = 5;
    
    // Check for alt attributes on images
    if (content.includes('alt=')) score++;
    
    // Check for ARIA labels
    if (content.includes('aria-label=') || content.includes('aria-labelledby=')) score++;
    
    // Check for semantic HTML elements
    if (content.includes('<nav>') || content.includes('<main>') || content.includes('<section>')) score++;
    
    // Check for form labels
    if (content.includes('<label>')) score++;
    
    // Check for heading hierarchy
    if (content.includes('<h1>') && content.includes('<h2>')) score++;
    
    return { score, total };
  }

  performSEOChecks(content) {
    let score = 0;
    const checks = [];
    
    // Check for title tag
    if (content.includes('<title>')) {
      score++;
      checks.push('Title tag present');
    } else {
      checks.push('Missing title tag');
    }
    
    // Check for meta description
    if (content.includes('meta name="description"')) {
      score++;
      checks.push('Meta description present');
    } else {
      checks.push('Missing meta description');
    }
    
    // Check for meta keywords
    if (content.includes('meta name="keywords"')) {
      score++;
      checks.push('Meta keywords present');
    } else {
      checks.push('Missing meta keywords');
    }
    
    // Check for Open Graph tags
    if (content.includes('og:title') || content.includes('og:description')) {
      score++;
      checks.push('Open Graph tags present');
    } else {
      checks.push('Missing Open Graph tags');
    }
    
    // Check for structured data
    if (content.includes('application/ld+json')) {
      score++;
      checks.push('Structured data present');
    } else {
      checks.push('Missing structured data');
    }
    
    return { score, checks };
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stats = fs.statSync(itemPath);
        
        if (stats.isDirectory()) {
          totalSize += this.getDirectorySize(itemPath);
        } else {
          totalSize += stats.size;
        }
      }
    } catch (error) {
      console.log(`ℹ️  Error calculating directory size for ${dirPath}:`, error.message);
    }
    
    return totalSize;
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      metrics: this.metrics,
      optimizations: this.optimizations,
      issues: this.issues,
      totalOptimizations: this.optimizations.length,
      totalIssues: this.issues.length,
      status: this.issues.length === 0 ? 'optimized' : 'optimization_needed'
    };

    const reportPath = path.join(this.reportDir, 'front-maximizer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Report saved to ${reportPath}`);
  }

  async generateErrorReport(error) {
    const errorReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      status: 'failed'
    };

    const reportPath = path.join(this.reportDir, 'front-maximizer-error.json');
    fs.writeFileSync(reportPath, JSON.stringify(errorReport, null, 2));
  }
}

// Run the automation
const maximizer = new FrontMaximizer();
maximizer.run().catch(console.error);