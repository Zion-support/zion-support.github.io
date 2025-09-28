#!/usr/bin/env node

/**
 * Production Optimization Script
 * Applies production-specific optimizations
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ProductionOptimizer {
  async optimizeForProduction() {
    console.log('🚀 Applying production optimizations...');
    
    // Set production environment
    process.env.NODE_ENV = 'production';
    process.env.NODE_OPTIONS = '--max-old-space-size=4096';
    
    try {
      // Run production build
      execSync('pnpm run build:production', { 
        cwd: process.cwd(),
        stdio: 'inherit'
      });
      
      console.log('✅ Production build completed successfully');
      
      // Analyze bundle
      this.analyzeProductionBundle();
      
    } catch (error) {
      console.error('❌ Production build failed:', error.message);
      throw error;
    }
  }

  analyzeProductionBundle() {
    const distPath = path.join(process.cwd(), 'dist');
    if (!fs.existsSync(distPath)) return;

    const files = fs.readdirSync(distPath, { recursive: true });
    let totalSize = 0;
    let jsFiles = [];
    let cssFiles = [];

    files.forEach(file => {
      if (typeof file === 'string') {
        const filePath = path.join(distPath, file);
        const stats = fs.statSync(filePath);
        totalSize += stats.size;

        if (file.endsWith('.js')) {
          jsFiles.push({ name: file, size: stats.size });
        } else if (file.endsWith('.css')) {
          cssFiles.push({ name: file, size: stats.size });
        }
      }
    });

    // Sort by size
    jsFiles.sort((a, b) => b.size - a.size);
    cssFiles.sort((a, b) => b.size - a.size);

    console.log('\n📊 Production Bundle Analysis:');
    console.log(`   Total size: ${(totalSize / 1024).toFixed(2)} KB`);
    console.log(`   JS files: ${jsFiles.length}`);
    console.log(`   CSS files: ${cssFiles.length}`);
    
    if (jsFiles.length > 0) {
      console.log('\n🔍 Largest JS files:');
      jsFiles.slice(0, 5).forEach((file, index) => {
        console.log(`   ${index + 1}. ${file.name}: ${(file.size / 1024).toFixed(2)} KB`);
      });
    }

    // Generate production report
    const report = {
      timestamp: new Date().toISOString(),
      totalSize,
      jsFiles: jsFiles.length,
      cssFiles: cssFiles.length,
      largestJsFiles: jsFiles.slice(0, 10),
      largestCssFiles: cssFiles.slice(0, 5)
    };

    const reportPath = path.join(process.cwd(), 'production-optimization-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`\n📋 Production report saved: ${reportPath}`);
  }
}

// Run the optimizer
if (require.main === module) {
  const optimizer = new ProductionOptimizer();
  optimizer.optimizeForProduction().catch(console.error);
}

module.exports = ProductionOptimizer;
