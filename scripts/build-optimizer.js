#!/usr/bin/env node

/**
 * Build optimization script
 * Provides utilities for optimizing the production build
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

const log = (message, color = 'reset') => {
  console.log(`${colors[color]}${message}${colors.reset}`);
};

const optimizeBuild = () => {
  log('🔧 Optimizing production build...', 'blue');
  
  const distDir = path.join(process.cwd(), 'dist');
  if (!fs.existsSync(distDir)) {
    log('❌ Dist directory not found. Run build first.', 'red');
    return false;
  }

  // Analyze bundle size
  const analyzeBundleSize = () => {
    log('📊 Analyzing bundle size...', 'blue');
    
    const files = fs.readdirSync(distDir, { recursive: true });
    const jsFiles = files.filter(file => file.endsWith('.js'));
    const cssFiles = files.filter(file => file.endsWith('.css'));
    
    let totalJsSize = 0;
    let totalCssSize = 0;
    
    jsFiles.forEach(file => {
      const filePath = path.join(distDir, file);
      const stats = fs.statSync(filePath);
      totalJsSize += stats.size;
    });
    
    cssFiles.forEach(file => {
      const filePath = path.join(distDir, file);
      const stats = fs.statSync(filePath);
      totalCssSize += stats.size;
    });
    
    log(`📦 JavaScript files: ${jsFiles.length} files, ${(totalJsSize / 1024).toFixed(2)} KB`, 'green');
    log(`🎨 CSS files: ${cssFiles.length} files, ${(totalCssSize / 1024).toFixed(2)} KB`, 'green');
    log(`📊 Total size: ${((totalJsSize + totalCssSize) / 1024).toFixed(2)} KB`, 'cyan');
    
    return { jsFiles, cssFiles, totalJsSize, totalCssSize };
  };

  // Optimize HTML files
  const optimizeHTML = () => {
    log('🔧 Optimizing HTML files...', 'blue');
    
    const htmlFiles = fs.readdirSync(distDir).filter(file => file.endsWith('.html'));
    
    htmlFiles.forEach(file => {
      const filePath = path.join(distDir, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove unnecessary whitespace
      content = content.replace(/\s+/g, ' ').trim();
      
      // Add performance hints
      content = content.replace(
        '<head>',
        `<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#1e40af">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`
      );
      
      fs.writeFileSync(filePath, content);
    });
    
    log(`✅ Optimized ${htmlFiles.length} HTML files`, 'green');
  };

  // Generate build report
  const generateBuildReport = () => {
    log('📊 Generating build report...', 'blue');
    
    const report = {
      timestamp: new Date().toISOString(),
      nodeVersion: process.version,
      platform: process.platform,
      buildSize: analyzeBundleSize(),
      optimization: {
        htmlOptimized: true,
        bundleAnalyzed: true,
      }
    };
    
    const reportPath = path.join(process.cwd(), 'build-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    log(`📄 Build report saved to ${reportPath}`, 'green');
  };

  try {
    analyzeBundleSize();
    optimizeHTML();
    generateBuildReport();
    
    log('✅ Build optimization completed!', 'green');
    return true;
  } catch (error) {
    log(`❌ Build optimization failed: ${error.message}`, 'red');
    return false;
  }
};

const checkBuildHealth = () => {
  log('🏥 Checking build health...', 'blue');
  
  const distDir = path.join(process.cwd(), 'dist');
  if (!fs.existsSync(distDir)) {
    log('❌ Dist directory not found', 'red');
    return false;
  }

  const requiredFiles = ['index.html'];
  const missingFiles = requiredFiles.filter(file => !fs.existsSync(path.join(distDir, file)));
  
  if (missingFiles.length > 0) {
    log(`❌ Missing required files: ${missingFiles.join(', ')}`, 'red');
    return false;
  }
  
  log('✅ Build health check passed', 'green');
  return true;
};

const main = () => {
  log('🚀 Starting build optimization...', 'bright');
  
  if (!checkBuildHealth()) {
    process.exit(1);
  }
  
  if (optimizeBuild()) {
    log('🎉 Build optimization completed successfully!', 'green');
  } else {
    log('💥 Build optimization failed!', 'red');
    process.exit(1);
  }
};

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export {
  optimizeBuild,
  checkBuildHealth,
};