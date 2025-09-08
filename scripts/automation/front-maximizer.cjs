#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting Front Maximizer Automation...');

// Function to analyze bundle size and identify optimization opportunities
function analyzeBundleOptimization() {
  try {
    console.log('📦 Analyzing bundle for optimization opportunities...');
    
    if (!fs.existsSync('./dist')) {
      console.log('⚠️  Dist directory not found. Cannot analyze bundle.');
      return null;
    }
    
    const analysis = {
      totalSize: 0,
      fileCount: 0,
      files: [],
      optimizationOpportunities: []
    };
    
    function analyzeDirectory(dir, basePath = '') {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const relativePath = path.join(basePath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          analyzeDirectory(fullPath, relativePath);
        } else {
          const size = stat.size;
          const fileInfo = {
            path: relativePath,
            size: size,
            sizeKB: Math.round(size / 1024 * 100) / 100,
            extension: path.extname(item).toLowerCase()
          };
          
          analysis.files.push(fileInfo);
          analysis.totalSize += size;
          analysis.fileCount++;
          
          // Identify optimization opportunities
          if (size > 100 * 1024) { // Files larger than 100KB
            analysis.optimizationOpportunities.push({
              file: relativePath,
              size: size,
              sizeKB: fileInfo.sizeKB,
              recommendation: 'Consider code splitting or lazy loading'
            });
          }
          
          if (fileInfo.extension === '.js' && size > 500 * 1024) { // Large JS files
            analysis.optimizationOpportunities.push({
              file: relativePath,
              size: size,
              sizeKB: fileInfo.sizeKB,
              recommendation: 'Large JS file - consider tree shaking and code splitting'
            });
          }
          
          if (fileInfo.extension === '.css' && size > 200 * 1024) { // Large CSS files
            analysis.optimizationOpportunities.push({
              file: relativePath,
              size: size,
              sizeKB: fileInfo.sizeKB,
              recommendation: 'Large CSS file - consider purging unused styles'
            });
          }
        }
      }
    }
    
    analyzeDirectory('./dist');
    
    // Sort files by size
    analysis.files.sort((a, b) => b.size - a.size);
    analysis.largestFiles = analysis.files.slice(0, 10);
    analysis.totalSizeMB = Math.round(analysis.totalSize / (1024 * 1024) * 100) / 100;
    
    return analysis;
  } catch (error) {
    console.log('⚠️  Could not analyze bundle optimization:', error.message);
    return null;
  }
}

// Function to check for unused dependencies
function checkUnusedDependencies() {
  try {
    console.log('🔍 Checking for unused dependencies...');
    
    // Check if depcheck is available
    try {
      const result = execSync('npx depcheck --json', { encoding: 'utf8' });
      return JSON.parse(result);
    } catch (error) {
      console.log('⚠️  depcheck not available or failed');
      return null;
    }
  } catch (error) {
    console.log('⚠️  Could not check unused dependencies:', error.message);
    return null;
  }
}

// Function to analyze image optimization opportunities
function analyzeImageOptimization() {
  try {
    console.log('🖼️  Analyzing image optimization opportunities...');
    
    if (!fs.existsSync('./dist')) {
      return null;
    }
    
    const imageAnalysis = {
      totalImages: 0,
      totalSize: 0,
      optimizationOpportunities: []
    };
    
    function findImages(dir, basePath = '') {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const relativePath = path.join(basePath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          findImages(fullPath, relativePath);
        } else if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(item)) {
          const size = stat.size;
          imageAnalysis.totalImages++;
          imageAnalysis.totalSize += size;
          
          if (size > 500 * 1024) { // Images larger than 500KB
            imageAnalysis.optimizationOpportunities.push({
              file: relativePath,
              size: size,
              sizeKB: Math.round(size / 1024 * 100) / 100,
              recommendation: 'Large image - consider compression or WebP conversion'
            });
          }
          
          if (item.toLowerCase().endsWith('.png') && size > 100 * 1024) {
            imageAnalysis.optimizationOpportunities.push({
              file: relativePath,
              size: size,
              sizeKB: Math.round(size / 1024 * 100) / 100,
              recommendation: 'PNG image - consider WebP for better compression'
            });
          }
        }
      }
    }
    
    findImages('./dist');
    imageAnalysis.totalSizeMB = Math.round(imageAnalysis.totalSize / (1024 * 1024) * 100) / 100;
    
    return imageAnalysis;
  } catch (error) {
    console.log('⚠️  Could not analyze image optimization:', error.message);
    return null;
  }
}

// Function to check for critical CSS opportunities
function checkCriticalCSS() {
  try {
    console.log('🎨 Checking for critical CSS optimization...');
    
    if (!fs.existsSync('./dist')) {
      return null;
    }
    
    const cssFiles = [];
    
    function findCSSFiles(dir, basePath = '') {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const relativePath = path.join(basePath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          findCSSFiles(fullPath, relativePath);
        } else if (item.toLowerCase().endsWith('.css')) {
          cssFiles.push({
            path: relativePath,
            size: stat.size,
            sizeKB: Math.round(stat.size / 1024 * 100) / 100
          });
        }
      }
    }
    
    findCSSFiles('./dist');
    
    return {
      cssFiles: cssFiles,
      totalCSSFiles: cssFiles.length,
      totalCSSSize: cssFiles.reduce((sum, file) => sum + file.size, 0),
      recommendations: cssFiles.length > 1 ? ['Consider combining CSS files', 'Extract critical CSS for above-the-fold content'] : []
    };
  } catch (error) {
    console.log('⚠️  Could not check critical CSS:', error.message);
    return null;
  }
}

// Function to check for JavaScript optimization opportunities
function checkJavaScriptOptimization() {
  try {
    console.log('⚡ Checking for JavaScript optimization opportunities...');
    
    if (!fs.existsSync('./dist')) {
      return null;
    }
    
    const jsFiles = [];
    
    function findJSFiles(dir, basePath = '') {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const relativePath = path.join(basePath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          findJSFiles(fullPath, relativePath);
        } else if (item.toLowerCase().endsWith('.js')) {
          jsFiles.push({
            path: relativePath,
            size: stat.size,
            sizeKB: Math.round(stat.size / 1024 * 100) / 100
          });
        }
      }
    }
    
    findJSFiles('./dist');
    
    const recommendations = [];
    
    if (jsFiles.length > 3) {
      recommendations.push('Consider code splitting to reduce initial bundle size');
    }
    
    const largeJSFiles = jsFiles.filter(file => file.size > 200 * 1024);
    if (largeJSFiles.length > 0) {
      recommendations.push('Large JS files detected - consider lazy loading for non-critical code');
    }
    
    return {
      jsFiles: jsFiles,
      totalJSFiles: jsFiles.length,
      totalJSSize: jsFiles.reduce((sum, file) => sum + file.size, 0),
      largeJSFiles: largeJSFiles,
      recommendations: recommendations
    };
  } catch (error) {
    console.log('⚠️  Could not check JavaScript optimization:', error.message);
    return null;
  }
}

// Function to generate frontend optimization report
function generateFrontendReport(bundleAnalysis, unusedDeps, imageAnalysis, cssAnalysis, jsAnalysis) {
  const report = {
    timestamp: new Date().toISOString(),
    bundleAnalysis: bundleAnalysis,
    unusedDependencies: unusedDeps,
    imageOptimization: imageAnalysis,
    cssOptimization: cssAnalysis,
    javascriptOptimization: jsAnalysis,
    summary: {
      totalBundleSizeMB: bundleAnalysis?.totalSizeMB || 0,
      totalFiles: bundleAnalysis?.fileCount || 0,
      totalImages: imageAnalysis?.totalImages || 0,
      totalCSSFiles: cssAnalysis?.totalCSSFiles || 0,
      totalJSFiles: jsAnalysis?.totalJSFiles || 0,
      optimizationOpportunities: (bundleAnalysis?.optimizationOpportunities?.length || 0) +
                                (imageAnalysis?.optimizationOpportunities?.length || 0)
    }
  };
  
  return report;
}

// Function to provide frontend optimization recommendations
function provideFrontendRecommendations(report) {
  console.log('\n📋 Frontend Optimization Recommendations:');
  
  // Bundle optimization
  if (report.bundleAnalysis?.totalSizeMB > 5) {
    console.log('\n📦 Bundle size optimization:');
    console.log(`Current bundle size: ${report.bundleAnalysis.totalSizeMB}MB`);
    console.log('Recommendations:');
    console.log('1. Enable tree shaking in your bundler');
    console.log('2. Use code splitting for routes and components');
    console.log('3. Implement lazy loading for non-critical code');
    console.log('4. Consider using dynamic imports');
  }
  
  // Image optimization
  if (report.imageOptimization?.totalImages > 0) {
    console.log('\n🖼️  Image optimization:');
    console.log(`Total images: ${report.imageOptimization.totalImages}`);
    console.log(`Total image size: ${report.imageOptimization.totalSizeMB}MB`);
    
    if (report.imageOptimization.optimizationOpportunities.length > 0) {
      console.log('Optimization opportunities:');
      report.imageOptimization.optimizationOpportunities.forEach(opp => {
        console.log(`  - ${opp.file}: ${opp.recommendation}`);
      });
    }
    
    console.log('General recommendations:');
    console.log('1. Use WebP format for better compression');
    console.log('2. Implement responsive images with srcset');
    console.log('3. Use image compression tools');
    console.log('4. Consider lazy loading for images below the fold');
  }
  
  // CSS optimization
  if (report.cssOptimization?.totalCSSFiles > 1) {
    console.log('\n🎨 CSS optimization:');
    console.log(`Total CSS files: ${report.cssOptimization.totalCSSFiles}`);
    console.log('Recommendations:');
    console.log('1. Combine CSS files to reduce HTTP requests');
    console.log('2. Extract critical CSS for above-the-fold content');
    console.log('3. Use CSS purging to remove unused styles');
    console.log('4. Implement CSS-in-JS for better tree shaking');
  }
  
  // JavaScript optimization
  if (report.javascriptOptimization?.totalJSFiles > 3) {
    console.log('\n⚡ JavaScript optimization:');
    console.log(`Total JS files: ${report.javascriptOptimization.totalJSFiles}`);
    console.log('Recommendations:');
    console.log('1. Implement code splitting by route');
    console.log('2. Use dynamic imports for heavy components');
    console.log('3. Consider using web workers for heavy computations');
    console.log('4. Implement service workers for caching');
  }
  
  // Unused dependencies
  if (report.unusedDependencies?.dependencies?.length > 0) {
    console.log('\n🗑️  Unused dependencies:');
    console.log(`Total unused: ${report.unusedDependencies.dependencies.length}`);
    console.log('Recommendations:');
    console.log('1. Remove unused dependencies to reduce bundle size');
    console.log('2. Use tree shaking to eliminate dead code');
    console.log('3. Consider using bundle analyzers to identify bloat');
  }
  
  if (report.summary.optimizationOpportunities === 0) {
    console.log('\n✅ Frontend is well optimized! No major optimization opportunities found.');
  }
  
  console.log('\n📚 General frontend optimization tips:');
  console.log('1. Use performance monitoring tools (Lighthouse, WebPageTest)');
  console.log('2. Implement resource hints (preload, prefetch)');
  console.log('3. Use HTTP/2 for better multiplexing');
  console.log('4. Implement progressive enhancement');
  console.log('5. Use modern image formats (WebP, AVIF)');
}

// Main function
async function runFrontMaximizer() {
  try {
    console.log('🚀 Starting comprehensive frontend optimization analysis...');
    
    // Run various frontend optimization checks
    const bundleAnalysis = analyzeBundleOptimization();
    const unusedDeps = checkUnusedDependencies();
    const imageAnalysis = analyzeImageOptimization();
    const cssAnalysis = checkCriticalCSS();
    const jsAnalysis = checkJavaScriptOptimization();
    
    // Generate comprehensive report
    const frontendReport = generateFrontendReport(
      bundleAnalysis,
      unusedDeps,
      imageAnalysis,
      cssAnalysis,
      jsAnalysis
    );
    
    // Save detailed report
    fs.writeFileSync('./front-maximizer-report.json', JSON.stringify(frontendReport, null, 2));
    
    // Display summary
    console.log('\n📊 Frontend Optimization Summary:');
    console.log(`Total bundle size: ${frontendReport.summary.totalBundleSizeMB}MB`);
    console.log(`Total files: ${frontendReport.summary.totalFiles}`);
    console.log(`Total images: ${frontendReport.summary.totalImages}`);
    console.log(`Total CSS files: ${frontendReport.summary.totalCSSFiles}`);
    console.log(`Total JS files: ${frontendReport.summary.totalJSFiles}`);
    console.log(`Optimization opportunities: ${frontendReport.summary.optimizationOpportunities}`);
    
    // Provide recommendations
    provideFrontendRecommendations(frontendReport);
    
    console.log('\n🚀 Front Maximizer Automation completed successfully!');
    console.log('📄 Detailed report saved to: front-maximizer-report.json');
    
  } catch (error) {
    console.error('❌ Error in Front Maximizer Automation:', error);
    process.exit(1);
  }
}

// Run the automation
runFrontMaximizer();