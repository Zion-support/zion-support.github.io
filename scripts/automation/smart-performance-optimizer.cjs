#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('⚡ Starting Smart Performance Optimizer...');

class SmartPerformanceOptimizer {
  constructor() {
    this.performanceResults = {
      buildMetrics: {},
      bundleAnalysis: {},
      optimizationSuggestions: [],
      performanceScore: 0,
      timestamp: new Date().toISOString()
    };
    this.reportDir = path.join(process.cwd(), 'performance-reports');
    this.ensureReportDirectory();
    this.performanceThresholds = {
      maxBundleSize: 500, // KB
      maxBuildTime: 30000, // ms
      maxLighthouseScore: 90,
      maxFirstContentfulPaint: 2000 // ms
    };
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async optimizePerformance() {
    console.log('🔍 Analyzing and optimizing performance...');
    
    try {
      await this.analyzeBuildPerformance();
      await this.analyzeBundleSize();
      await this.runLighthouseAudit();
      await this.analyzeDependencies();
      await this.generateOptimizationSuggestions();
      await this.calculatePerformanceScore();
      await this.saveReport();
      
      console.log('✅ Smart performance optimization completed');
      return this.performanceResults;
    } catch (error) {
      console.error('❌ Smart performance optimization failed:', error.message);
      throw error;
    }
  }

  async analyzeBuildPerformance() {
    console.log('⏱️  Analyzing build performance...');
    
    try {
      const startTime = Date.now();
      
      // Run build command
      const buildOutput = execSync('npm run build', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      
      const buildTime = Date.now() - startTime;
      
      this.performanceResults.buildMetrics = {
        buildTime: buildTime,
        buildTimeFormatted: this.formatTime(buildTime),
        status: 'success',
        output: buildOutput,
        timestamp: new Date().toISOString()
      };
      
      console.log(`⏱️  Build completed in ${this.formatTime(buildTime)}`);
      
      // Check if build was successful
      if (buildOutput.includes('Build completed successfully') || buildOutput.includes('dist')) {
        console.log('✅ Build successful');
      } else {
        console.log('⚠️  Build may have had issues');
      }
      
    } catch (error) {
      this.performanceResults.buildMetrics = {
        buildTime: 0,
        buildTimeFormatted: 'N/A',
        status: 'failure',
        error: error.message,
        timestamp: new Date().toISOString()
      };
      console.log('❌ Build failed:', error.message);
    }
  }

  async analyzeBundleSize() {
    console.log('📦 Analyzing bundle size...');
    
    try {
      const distDir = path.join(process.cwd(), 'dist');
      if (!fs.existsSync(distDir)) {
        console.log('⚠️  Dist directory not found, skipping bundle analysis');
        return;
      }
      
      const bundleSizes = {};
      let totalSize = 0;
      
      // Analyze JavaScript bundles
      const jsFiles = this.findFilesByExtension(distDir, '.js');
      jsFiles.forEach(file => {
        const stats = fs.statSync(file);
        const sizeKB = Math.round(stats.size / 1024);
        const relativePath = path.relative(distDir, file);
        bundleSizes[relativePath] = sizeKB;
        totalSize += sizeKB;
      });
      
      // Analyze CSS bundles
      const cssFiles = this.findFilesByExtension(distDir, '.css');
      cssFiles.forEach(file => {
        const stats = fs.statSync(file);
        const sizeKB = Math.round(stats.size / 1024);
        const relativePath = path.relative(distDir, file);
        bundleSizes[relativePath] = sizeKB;
        totalSize += sizeKB;
      });
      
      this.performanceResults.bundleAnalysis = {
        totalSize: totalSize,
        totalSizeFormatted: `${totalSize} KB`,
        files: bundleSizes,
        largestFiles: this.getLargestFiles(bundleSizes, 5),
        recommendations: this.getBundleRecommendations(totalSize, bundleSizes)
      };
      
      console.log(`📦 Total bundle size: ${totalSize} KB`);
      console.log(`📁 Largest files: ${this.performanceResults.bundleAnalysis.largestFiles.length} files analyzed`);
      
    } catch (error) {
      console.log('⚠️  Bundle analysis failed:', error.message);
    }
  }

  findFilesByExtension(dir, ext) {
    const files = [];
    
    if (!fs.existsSync(dir)) return files;
    
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.findFilesByExtension(fullPath, ext));
      } else if (stat.isFile() && item.endsWith(ext)) {
        files.push(fullPath);
      }
    });
    
    return files;
  }

  getLargestFiles(bundleSizes, count) {
    return Object.entries(bundleSizes)
      .sort(([,a], [,b]) => b - a)
      .slice(0, count)
      .map(([file, size]) => ({ file, size }));
  }

  getBundleRecommendations(totalSize, bundleSizes) {
    const recommendations = [];
    
    if (totalSize > this.performanceThresholds.maxBundleSize) {
      recommendations.push({
        priority: 'high',
        category: 'bundle_size',
        description: `Bundle size (${totalSize} KB) exceeds recommended threshold (${this.performanceThresholds.maxBundleSize} KB)`,
        suggestion: 'Consider code splitting, tree shaking, and removing unused dependencies'
      });
    }
    
    // Check for individual large files
    Object.entries(bundleSizes).forEach(([file, size]) => {
      if (size > 100) { // Files larger than 100KB
        recommendations.push({
          priority: 'medium',
          category: 'large_file',
          description: `File ${file} is ${size} KB`,
          suggestion: 'Consider splitting this file or optimizing its contents'
        });
      }
    });
    
    return recommendations;
  }

  async runLighthouseAudit() {
    console.log('🏠 Running Lighthouse performance audit...');
    
    try {
      // Check if Lighthouse is available
      try {
        execSync('lighthouse --version', { stdio: 'pipe' });
      } catch (error) {
        console.log('⚠️  Lighthouse not available, installing...');
        execSync('npm install -g lighthouse', { stdio: 'pipe' });
      }
      
      // Run Lighthouse audit on the built app
      const distDir = path.join(process.cwd(), 'dist');
      if (fs.existsSync(distDir)) {
        const lighthouseOutput = execSync(`lighthouse ${distDir} --output=json --output-path=${this.reportDir}/lighthouse-report.json --only-categories=performance`, { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        // Parse Lighthouse results
        const lighthouseReportPath = path.join(this.reportDir, 'lighthouse-report.json');
        if (fs.existsSync(lighthouseReportPath)) {
          const lighthouseData = JSON.parse(fs.readFileSync(lighthouseReportPath, 'utf8'));
          const performanceScore = Math.round(lighthouseData.categories.performance.score * 100);
          
          this.performanceResults.lighthouseAudit = {
            performanceScore: performanceScore,
            firstContentfulPaint: lighthouseData.audits['first-contentful-paint']?.numericValue || 0,
            largestContentfulPaint: lighthouseData.audits['largest-contentful-paint']?.numericValue || 0,
            totalBlockingTime: lighthouseData.audits['total-blocking-time']?.numericValue || 0,
            cumulativeLayoutShift: lighthouseData.audits['cumulative-layout-shift']?.numericValue || 0,
            status: 'success'
          };
          
          console.log(`🏠 Lighthouse performance score: ${performanceScore}/100`);
        }
      } else {
        console.log('⚠️  Dist directory not found, skipping Lighthouse audit');
      }
      
    } catch (error) {
      console.log('⚠️  Lighthouse audit failed:', error.message);
      this.performanceResults.lighthouseAudit = {
        status: 'failure',
        error: error.message
      };
    }
  }

  async analyzeDependencies() {
    console.log('📊 Analyzing dependencies for performance impact...');
    
    try {
      // Check for large dependencies
      const packageLockPath = path.join(process.cwd(), 'package-lock.json');
      if (fs.existsSync(packageLockPath)) {
        const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));
        const largeDeps = [];
        
        Object.entries(packageLock.dependencies || {}).forEach(([name, dep]) => {
          if (dep.size && dep.size > 1024 * 1024) { // Larger than 1MB
            largeDeps.push({
              name: name,
              size: Math.round(dep.size / 1024 / 1024 * 100) / 100, // MB
              version: dep.version
            });
          }
        });
        
        this.performanceResults.dependencyAnalysis = {
          largeDependencies: largeDeps,
          totalLargeDeps: largeDeps.length,
          recommendations: this.getDependencyRecommendations(largeDeps)
        };
        
        console.log(`📊 Found ${largeDeps.length} large dependencies`);
      }
      
    } catch (error) {
      console.log('⚠️  Dependency analysis failed:', error.message);
    }
  }

  getDependencyRecommendations(largeDeps) {
    const recommendations = [];
    
    largeDeps.forEach(dep => {
      if (dep.size > 5) { // Larger than 5MB
        recommendations.push({
          priority: 'high',
          category: 'large_dependency',
          description: `Dependency ${dep.name} is ${dep.size} MB`,
          suggestion: 'Consider alternatives or lazy loading for this dependency'
        });
      }
    });
    
    return recommendations;
  }

  async generateOptimizationSuggestions() {
    console.log('💡 Generating performance optimization suggestions...');
    
    const suggestions = [];
    
    // Build time suggestions
    if (this.performanceResults.buildMetrics.buildTime > this.performanceThresholds.maxBuildTime) {
      suggestions.push({
        priority: 'high',
        category: 'build_time',
        description: `Build time (${this.formatTime(this.performanceResults.buildMetrics.buildTime)}) exceeds threshold`,
        suggestion: 'Consider using build caching, parallel builds, or optimizing build configuration'
      });
    }
    
    // Bundle size suggestions
    if (this.performanceResults.bundleAnalysis.totalSize > this.performanceThresholds.maxBundleSize) {
      suggestions.push({
        priority: 'high',
        category: 'bundle_size',
        description: `Bundle size (${this.performanceResults.bundleAnalysis.totalSize} KB) exceeds threshold`,
        suggestion: 'Implement code splitting, tree shaking, and remove unused code'
      });
    }
    
    // Lighthouse score suggestions
    if (this.performanceResults.lighthouseAudit?.performanceScore < this.performanceThresholds.maxLighthouseScore) {
      suggestions.push({
        priority: 'medium',
        category: 'lighthouse_score',
        description: `Lighthouse performance score (${this.performanceResults.lighthouseAudit.performanceScore}) below threshold`,
        suggestion: 'Focus on Core Web Vitals and performance optimization'
      });
    }
    
    // Add bundle-specific suggestions
    suggestions.push(...this.performanceResults.bundleAnalysis.recommendations);
    
    // Add dependency-specific suggestions
    if (this.performanceResults.dependencyAnalysis) {
      suggestions.push(...this.performanceResults.dependencyAnalysis.recommendations);
    }
    
    // Sort by priority
    suggestions.sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
    
    this.performanceResults.optimizationSuggestions = suggestions;
    console.log(`💡 Generated ${suggestions.length} optimization suggestions`);
  }

  async calculatePerformanceScore() {
    console.log('📈 Calculating overall performance score...');
    
    let score = 100;
    
    // Build time penalty
    if (this.performanceResults.buildMetrics.buildTime > this.performanceThresholds.maxBuildTime) {
      score -= 20;
    }
    
    // Bundle size penalty
    if (this.performanceResults.bundleAnalysis.totalSize > this.performanceThresholds.maxBundleSize) {
      score -= 25;
    }
    
    // Lighthouse score penalty
    if (this.performanceResults.lighthouseAudit?.performanceScore) {
      const lighthouseScore = this.performanceResults.lighthouseAudit.performanceScore;
      if (lighthouseScore < this.performanceThresholds.maxLighthouseScore) {
        score -= Math.max(0, (this.performanceThresholds.maxLighthouseScore - lighthouseScore) * 2);
      }
    }
    
    // Dependency penalty
    if (this.performanceResults.dependencyAnalysis?.totalLargeDeps > 3) {
      score -= 15;
    }
    
    this.performanceResults.performanceScore = Math.max(score, 0);
    console.log(`📈 Overall performance score: ${score}/100`);
  }

  formatTime(ms) {
    if (ms < 1000) return `${ms}ms`;
    if (ms < 60000) return `${Math.round(ms / 1000)}s`;
    return `${Math.round(ms / 60000)}m ${Math.round((ms % 60000) / 1000)}s`;
  }

  async saveReport() {
    const reportPath = path.join(this.reportDir, `performance-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(this.performanceResults, null, 2));
    
    // Also save latest report
    const latestReportPath = path.join(this.reportDir, 'latest-performance-report.json');
    fs.writeFileSync(latestReportPath, JSON.stringify(this.performanceResults, null, 2));
    
    console.log(`📄 Performance report saved to ${reportPath}`);
  }

  async displaySummary() {
    console.log('\n⚡ Smart Performance Optimization Summary');
    console.log('=' .repeat(50));
    console.log(`📈 Overall Performance Score: ${this.performanceResults.performanceScore}/100`);
    console.log(`⏱️  Build Time: ${this.performanceResults.buildMetrics.buildTimeFormatted}`);
    console.log(`📦 Bundle Size: ${this.performanceResults.bundleAnalysis.totalSizeFormatted || 'N/A'}`);
    
    if (this.performanceResults.lighthouseAudit?.performanceScore) {
      console.log(`🏠 Lighthouse Score: ${this.performanceResults.lighthouseAudit.performanceScore}/100`);
    }
    
    if (this.performanceResults.optimizationSuggestions.length > 0) {
      console.log(`💡 Optimization Suggestions: ${this.performanceResults.optimizationSuggestions.length}`);
      console.log('\n🔝 Top Priority Suggestions:');
      this.performanceResults.optimizationSuggestions.slice(0, 3).forEach((suggestion, index) => {
        console.log(`${index + 1}. [${suggestion.priority.toUpperCase()}] ${suggestion.description}`);
        console.log(`   💡 ${suggestion.suggestion}`);
      });
    }
  }
}

// Main execution
async function main() {
  const optimizer = new SmartPerformanceOptimizer();
  
  try {
    await optimizer.optimizePerformance();
    await optimizer.displaySummary();
    
    // Exit successfully
    process.exit(0);
  } catch (error) {
    console.error('❌ Smart Performance Optimizer failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = SmartPerformanceOptimizer;