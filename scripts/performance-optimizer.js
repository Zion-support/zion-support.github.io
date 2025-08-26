#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class PerformanceOptimizer {
  constructor() {
    this.distPath = path.join(__dirname, '..', 'dist');
    this.reportPath = path.join(__dirname, '..', 'performance-report.json');
    this.analysis = {
      timestamp: new Date().toISOString(),
      totalSize: 0,
      chunkAnalysis: {},
      recommendations: [],
      criticalIssues: [],
      warnings: []
    };
  }

  async analyzeBundle() {
    console.log('🔍 Analyzing bundle performance...');
    
    if (!fs.existsSync(this.distPath)) {
      console.error('❌ Dist folder not found. Run npm run build first.');
      return;
    }

    this.analyzeChunkSizes();
    this.analyzeAssetSizes();
    this.generateRecommendations();
    this.saveReport();
    this.printReport();
  }

  analyzeChunkSizes() {
    const jsPath = path.join(this.distPath, 'js');
    if (!fs.existsSync(jsPath)) return;

    const files = fs.readdirSync(jsPath);
    let totalJsSize = 0;

    files.forEach(file => {
      if (file.endsWith('.js')) {
        const filePath = path.join(jsPath, file);
        const stats = fs.statSync(filePath);
        const sizeInKB = Math.round(stats.size / 1024);
        totalJsSize += stats.size;

        const chunkName = file.split('-')[0];
        if (!this.analysis.chunkAnalysis[chunkName]) {
          this.analysis.chunkAnalysis[chunkName] = {
            totalSize: 0,
            files: [],
            averageSize: 0
          };
        }

        this.analysis.chunkAnalysis[chunkName].files.push({
          name: file,
          size: stats.size,
          sizeInKB
        });
        this.analysis.chunkAnalysis[chunkName].totalSize += stats.size;
      }
    });

    // Calculate averages and identify issues
    Object.keys(this.analysis.chunkAnalysis).forEach(chunkName => {
      const chunk = this.analysis.chunkAnalysis[chunkName];
      chunk.averageSize = Math.round(chunk.totalSize / chunk.files.length);
      
      // Identify critical issues
      if (chunk.totalSize > 500 * 1024) { // 500KB
        this.analysis.criticalIssues.push({
          type: 'oversized-chunk',
          chunk: chunkName,
          size: chunk.totalSize,
          message: `Chunk ${chunkName} is ${Math.round(chunk.totalSize / 1024)}KB - consider splitting`
        });
      }

      if (chunk.files.length > 10) {
        this.analysis.warnings.push({
          type: 'too-many-files',
          chunk: chunkName,
          count: chunk.files.length,
          message: `Chunk ${chunkName} has ${chunk.files.length} files - consider consolidation`
        });
      }
    });

    this.analysis.totalSize = totalJsSize;
  }

  analyzeAssetSizes() {
    const cssPath = path.join(this.distPath, 'css');
    if (fs.existsSync(cssPath)) {
      const cssFiles = fs.readdirSync(cssPath);
      let totalCssSize = 0;
      
      cssFiles.forEach(file => {
        if (file.endsWith('.css')) {
          const filePath = path.join(cssPath, file);
          const stats = fs.statSync(filePath);
          totalCssSize += stats.size;
        }
      });

      if (totalCssSize > 300 * 1024) { // 300KB
        this.analysis.warnings.push({
          type: 'large-css',
          size: totalCssSize,
          message: `CSS bundle is ${Math.round(totalCssSize / 1024)}KB - consider purging unused styles`
        });
      }
    }
  }

  generateRecommendations() {
    // Bundle size recommendations
    if (this.analysis.totalSize > 5 * 1024 * 1024) { // 5MB
      this.analysis.recommendations.push({
        priority: 'high',
        category: 'bundle-size',
        title: 'Reduce overall bundle size',
        description: 'Bundle is over 5MB. Implement tree shaking, code splitting, and lazy loading.',
        actions: [
          'Review and remove unused dependencies',
          'Implement dynamic imports for large components',
          'Use bundle analyzer to identify large packages'
        ]
      });
    }

    // Chunk optimization recommendations
    Object.keys(this.analysis.chunkAnalysis).forEach(chunkName => {
      const chunk = this.analysis.chunkAnalysis[chunkName];
      
      if (chunk.totalSize > 200 * 1024) { // 200KB
        this.analysis.recommendations.push({
          priority: 'medium',
          category: 'chunk-optimization',
          title: `Optimize ${chunkName} chunk`,
          description: `Chunk is ${Math.round(chunk.totalSize / 1024)}KB. Consider splitting or lazy loading.`,
          actions: [
            'Split large components into smaller chunks',
            'Implement route-based code splitting',
            'Use React.lazy() for heavy components'
          ]
        });
      }
    });

    // Performance best practices
    this.analysis.recommendations.push({
      priority: 'low',
      category: 'best-practices',
      title: 'Implement performance monitoring',
      description: 'Add performance monitoring and metrics collection.',
      actions: [
        'Add Core Web Vitals monitoring',
        'Implement bundle size CI/CD checks',
        'Add performance budgets to build process'
      ]
    });
  }

  saveReport() {
    fs.writeFileSync(this.reportPath, JSON.stringify(this.analysis, null, 2));
    console.log(`📊 Report saved to ${this.reportPath}`);
  }

  printReport() {
    console.log('\n📈 PERFORMANCE ANALYSIS REPORT');
    console.log('================================');
    
    console.log(`\n📊 Bundle Summary:`);
    console.log(`   Total JS Size: ${Math.round(this.analysis.totalSize / 1024 / 1024 * 100) / 100}MB`);
    console.log(`   Total Chunks: ${Object.keys(this.analysis.chunkAnalysis).length}`);
    
    if (this.analysis.criticalIssues.length > 0) {
      console.log(`\n🚨 Critical Issues (${this.analysis.criticalIssues.length}):`);
      this.analysis.criticalIssues.forEach(issue => {
        console.log(`   • ${issue.message}`);
      });
    }
    
    if (this.analysis.warnings.length > 0) {
      console.log(`\n⚠️  Warnings (${this.analysis.warnings.length}):`);
      this.analysis.warnings.forEach(warning => {
        console.log(`   • ${warning.message}`);
      });
    }
    
    console.log(`\n💡 Recommendations (${this.analysis.recommendations.length}):`);
    this.analysis.recommendations.forEach(rec => {
      console.log(`   [${rec.priority.toUpperCase()}] ${rec.title}`);
      console.log(`      ${rec.description}`);
    });
    
    console.log('\n🎯 Next Steps:');
    console.log('   1. Review critical issues and warnings');
    console.log('   2. Implement high-priority recommendations');
    console.log('   3. Re-run analysis after optimizations');
    console.log('   4. Monitor performance metrics in production');
  }

  async optimizeBundle() {
    console.log('🚀 Starting bundle optimization...');
    
    // Check if we can run build optimizations
    try {
      console.log('📦 Running production build...');
      execSync('npm run build', { stdio: 'inherit' });
      
      console.log('🔍 Re-analyzing bundle...');
      await this.analyzeBundle();
      
      console.log('✅ Bundle optimization complete!');
    } catch (error) {
      console.error('❌ Build failed:', error.message);
    }
  }
}

// CLI interface
async function main() {
  const optimizer = new PerformanceOptimizer();
  const command = process.argv[2];

  switch (command) {
    case 'analyze':
      await optimizer.analyzeBundle();
      break;
    case 'optimize':
      await optimizer.optimizeBundle();
      break;
    default:
      console.log('Usage: node performance-optimizer.js [analyze|optimize]');
      console.log('  analyze  - Analyze current bundle performance');
      console.log('  optimize - Run build and analyze');
      break;
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export default PerformanceOptimizer;