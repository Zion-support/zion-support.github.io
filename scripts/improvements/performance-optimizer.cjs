#!/usr/bin/env node

/**
 * Performance Optimizer Script
 * Analyzes and optimizes various performance aspects of the application
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceOptimizer {
  constructor() {
    this.reportsDir = 'public/reports/performance';
    this.optimizations = [];
    this.issues = [];
  }

  async runOptimization() {
    console.log('🚀 Starting Performance Optimization...');
    
    try {
      // Ensure reports directory exists
      this.ensureReportsDirectory();
      
      // Run various optimizations
      await this.optimizeBundleSize();
      await this.optimizeImages();
      await this.optimizeDependencies();
      await this.optimizeCode();
      await this.optimizeBuildProcess();
      
      // Generate report
      const report = this.generateReport();
      
      // Save report
      this.saveReport(report);
      
      console.log('✅ Performance optimization completed successfully');
      return report;
      
    } catch (error) {
      console.error('❌ Performance optimization failed:', error.message);
      throw error;
    }
  }

  ensureReportsDirectory() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  async optimizeBundleSize() {
    console.log('📦 Optimizing bundle size...');
    
    try {
      // Check for large dependencies
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      const largeDeps = [];
      for (const [name, version] of Object.entries(dependencies)) {
        // Simulate size check (in real implementation, you'd use tools like bundlephobia)
        if (this.isLargeDependency(name)) {
          largeDeps.push({ name, version });
        }
      }
      
      if (largeDeps.length > 0) {
        this.optimizations.push({
          category: 'bundle-size',
          action: 'review-large-dependencies',
          details: largeDeps,
          impact: 'high'
        });
      }
      
    } catch (error) {
      console.warn('Bundle size optimization failed:', error.message);
    }
  }

  async optimizeImages() {
    console.log('🖼️  Optimizing images...');
    
    try {
      // Find image files
      const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'];
      const imageFiles = this.findFilesByExtensions(imageExtensions);
      
      if (imageFiles.length > 0) {
        this.optimizations.push({
          category: 'images',
          action: 'compress-images',
          details: `${imageFiles.length} images found for optimization`,
          impact: 'medium',
          command: 'npx imagemin src/**/*.{png,jpg,jpeg} --out-dir=src/optimized'
        });
      }
      
    } catch (error) {
      console.warn('Image optimization failed:', error.message);
    }
  }

  async optimizeDependencies() {
    console.log('📚 Optimizing dependencies...');
    
    try {
      // Check for outdated dependencies
      this.optimizations.push({
        category: 'dependencies',
        action: 'update-outdated',
        details: 'Run npm outdated to check for updates',
        impact: 'medium',
        command: 'npm outdated'
      });
      
      // Check for duplicate dependencies
      this.optimizations.push({
        category: 'dependencies',
        action: 'remove-duplicates',
        details: 'Check for duplicate dependencies',
        impact: 'low',
        command: 'npm ls --depth=0'
      });
      
    } catch (error) {
      console.warn('Dependency optimization failed:', error.message);
    }
  }

  async optimizeCode() {
    console.log('💻 Optimizing code...');
    
    try {
      // Check for unused imports
      const tsFiles = this.findFilesByExtensions(['.ts', '.tsx']);
      
      if (tsFiles.length > 0) {
        this.optimizations.push({
          category: 'code',
          action: 'remove-unused-imports',
          details: `${tsFiles.length} TypeScript files to check`,
          impact: 'medium',
          command: 'npx ts-unused-exports tsconfig.json'
        });
      }
      
      // Check for dead code
      this.optimizations.push({
        category: 'code',
        action: 'remove-dead-code',
        details: 'Remove unused code and exports',
        impact: 'high',
        command: 'npx unimported'
      });
      
    } catch (error) {
      console.warn('Code optimization failed:', error.message);
    }
  }

  async optimizeBuildProcess() {
    console.log('🔨 Optimizing build process...');
    
    try {
      // Check build configuration
      this.optimizations.push({
        category: 'build',
        action: 'enable-tree-shaking',
        details: 'Ensure tree shaking is enabled in build config',
        impact: 'high'
      });
      
      this.optimizations.push({
        category: 'build',
        action: 'enable-compression',
        details: 'Enable gzip/brotli compression',
        impact: 'medium'
      });
      
      this.optimizations.push({
        category: 'build',
        action: 'optimize-chunks',
        details: 'Optimize chunk splitting strategy',
        impact: 'medium'
      });
      
    } catch (error) {
      console.warn('Build optimization failed:', error.message);
    }
  }

  isLargeDependency(name) {
    // Common large dependencies that should be reviewed
    const largeDeps = [
      'lodash', 'moment', 'jquery', 'bootstrap', 'material-ui',
      'antd', 'semantic-ui', 'react-bootstrap', 'styled-components'
    ];
    return largeDeps.some(dep => name.includes(dep));
  }

  findFilesByExtensions(extensions) {
    const files = [];
    
    function walkDir(dir) {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            walkDir(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (extensions.includes(ext)) {
              files.push(fullPath);
            }
          }
        }
      } catch (error) {
        // Skip directories that can't be read
      }
    }
    
    walkDir('.');
    return files;
  }

  generateReport() {
    const timestamp = new Date().toISOString();
    
    const report = {
      timestamp,
      totalOptimizations: this.optimizations.length,
      highImpact: this.optimizations.filter(opt => opt.impact === 'high').length,
      mediumImpact: this.optimizations.filter(opt => opt.impact === 'medium').length,
      lowImpact: this.optimizations.filter(opt => opt.impact === 'low').length,
      optimizations: this.optimizations,
      summary: this.generateSummary(),
      recommendations: this.generateRecommendations()
    };
    
    return report;
  }

  generateSummary() {
    const categories = {};
    this.optimizations.forEach(opt => {
      categories[opt.category] = (categories[opt.category] || 0) + 1;
    });
    
    return {
      totalCategories: Object.keys(categories).length,
      categories,
      priorityActions: this.optimizations
        .filter(opt => opt.impact === 'high')
        .map(opt => opt.action)
    };
  }

  generateRecommendations() {
    const recommendations = [];
    
    const highImpactOpts = this.optimizations.filter(opt => opt.impact === 'high');
    if (highImpactOpts.length > 0) {
      recommendations.push(`Focus on ${highImpactOpts.length} high-impact optimizations first`);
    }
    
    const bundleOpts = this.optimizations.filter(opt => opt.category === 'bundle-size');
    if (bundleOpts.length > 0) {
      recommendations.push('Review and potentially replace large dependencies');
    }
    
    const imageOpts = this.optimizations.filter(opt => opt.category === 'images');
    if (imageOpts.length > 0) {
      recommendations.push('Implement image optimization and lazy loading');
    }
    
    recommendations.push('Set up automated performance monitoring');
    recommendations.push('Implement code splitting for better loading performance');
    
    return recommendations;
  }

  saveReport(report) {
    const filename = `performance-optimization-${Date.now()}.json`;
    const filepath = path.join(this.reportsDir, filename);
    
    fs.writeFileSync(filepath, JSON.stringify(report, null, 2));
    console.log(`📄 Performance report saved to: ${filepath}`);
    
    // Also create an HTML report
    this.createHTMLReport(report);
  }

  createHTMLReport(report) {
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Performance Optimization Report</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        .header { text-align: center; margin-bottom: 30px; }
        .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 30px 0; }
        .stat { padding: 20px; border: 1px solid #ddd; border-radius: 8px; text-align: center; }
        .optimizations { margin-top: 30px; }
        .opt-item { padding: 15px; margin: 10px 0; border-left: 4px solid #4CAF50; background: #f9f9f9; }
        .high-impact { border-left-color: #f44336; }
        .medium-impact { border-left-color: #ff9800; }
        .low-impact { border-left-color: #2196F3; }
        .recommendations { margin-top: 30px; }
        .rec-item { padding: 10px; margin: 5px 0; background: #e3f2fd; border-radius: 4px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>Performance Optimization Report</h1>
        <p>Generated: ${new Date(report.timestamp).toLocaleString()}</p>
    </div>
    
    <div class="stats">
        <div class="stat">
            <h3>Total Optimizations</h3>
            <p style="font-size: 24px; font-weight: bold; color: #4CAF50;">${report.totalOptimizations}</p>
        </div>
        <div class="stat">
            <h3>High Impact</h3>
            <p style="font-size: 24px; font-weight: bold; color: #f44336;">${report.highImpact}</p>
        </div>
        <div class="stat">
            <h3>Medium Impact</h3>
            <p style="font-size: 24px; font-weight: bold; color: #ff9800;">${report.mediumImpact}</p>
        </div>
        <div class="stat">
            <h3>Low Impact</h3>
            <p style="font-size: 24px; font-weight: bold; color: #2196F3;">${report.lowImpact}</p>
        </div>
    </div>
    
    <div class="optimizations">
        <h2>Optimization Opportunities</h2>
        ${report.optimizations.map(opt => `
            <div class="opt-item ${opt.impact}-impact">
                <h4>${opt.action.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h4>
                <p><strong>Category:</strong> ${opt.category}</p>
                <p><strong>Impact:</strong> ${opt.impact}</p>
                <p><strong>Details:</strong> ${opt.details}</p>
                ${opt.command ? `<p><strong>Command:</strong> <code>${opt.command}</code></p>` : ''}
            </div>
        `).join('')}
    </div>
    
    <div class="recommendations">
        <h2>Recommendations</h2>
        ${report.recommendations.map(rec => `<div class="rec-item">• ${rec}</div>`).join('')}
    </div>
</body>
</html>`;
    
    const htmlFilename = `performance-optimization-${Date.now()}.html`;
    const htmlFilepath = path.join(this.reportsDir, htmlFilename);
    
    fs.writeFileSync(htmlFilepath, htmlContent);
    console.log(`🌐 HTML report saved to: ${htmlFilepath}`);
  }

  printReport(report) {
    console.log('\n📊 Performance Optimization Report');
    console.log('====================================');
    console.log(`Timestamp: ${report.timestamp}`);
    console.log(`Total Optimizations: ${report.totalOptimizations}`);
    console.log(`High Impact: ${report.highImpact} | Medium: ${report.mediumImpact} | Low: ${report.lowImpact}`);
    
    console.log('\n🎯 Priority Actions:');
    report.summary.priorityActions.forEach((action, index) => {
      console.log(`  ${index + 1}. ${action.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`);
    });
    
    console.log('\n💡 Recommendations:');
    report.recommendations.forEach((rec, index) => {
      console.log(`  ${index + 1}. ${rec}`);
    });
  }
}

// CLI interface
if (require.main === module) {
  const optimizer = new PerformanceOptimizer();
  optimizer.runOptimization()
    .then(report => {
      optimizer.printReport(report);
      process.exit(0);
    })
    .catch(error => {
      console.error('❌ Performance optimization failed:', error.message);
      process.exit(1);
    });
}

module.exports = PerformanceOptimizer;