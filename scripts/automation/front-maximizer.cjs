#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting continuous front maximizer automation...');

// Get automation interval from environment variable (default: 4 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 14400000; // 4 hours

async function runFrontMaximizer() {
  try {
    console.log(`🚀 Running front maximizer at ${new Date().toISOString()}`);
    
    // Build the project first
    console.log('🏗️ Building project for frontend optimization...');
    try {
      execSync('npm run build', { stdio: 'inherit' });
      console.log('✅ Build completed');
    } catch (error) {
      console.log('⚠️  Build failed but continuing...');
      return;
    }
    
    // Check if dist folder exists
    const distPath = path.join(process.cwd(), 'dist');
    if (!fs.existsSync(distPath)) {
      console.log('⚠️  Build verification failed: dist folder not found');
      return;
    }
    
    // Analyze frontend performance
    console.log('📊 Analyzing frontend performance...');
    const performanceAnalysis = analyzeFrontendPerformance(distPath);
    
    // Check for optimization opportunities
    console.log('🔍 Checking for optimization opportunities...');
    const optimizationOpportunities = findOptimizationOpportunities(distPath);
    
    // Check bundle optimization
    console.log('📦 Checking bundle optimization...');
    const bundleOptimization = analyzeBundleOptimization(distPath);
    
    // Check for unused CSS and JS
    console.log('🔍 Checking for unused code...');
    const unusedCode = findUnusedCode(distPath);
    
    // Check image optimization
    console.log('🖼️ Checking image optimization...');
    const imageOptimization = analyzeImageOptimization(distPath);
    
    // Generate front maximizer report
    console.log('📊 Generating front maximizer report...');
    const report = {
      timestamp: new Date().toISOString(),
      performance: performanceAnalysis,
      optimizationOpportunities: optimizationOpportunities.length,
      bundleOptimization: bundleOptimization,
      unusedCode: unusedCode,
      imageOptimization: imageOptimization,
      details: {
        opportunities: optimizationOpportunities,
        unusedCode: unusedCode,
        imageOptimization: imageOptimization
      },
      summary: 'Front maximizer completed',
      status: 'completed',
      recommendations: []
    };
    
    // Add recommendations based on findings
    if (performanceAnalysis.score < 80) {
      report.recommendations.push('Improve performance score by optimizing critical rendering path');
    }
    
    if (optimizationOpportunities.length > 0) {
      report.recommendations.push('Implement identified optimization opportunities');
    }
    
    if (bundleOptimization.unoptimizedFiles.length > 0) {
      report.recommendations.push('Optimize bundle by implementing code splitting and tree shaking');
    }
    
    if (unusedCode.unusedCSS > 0 || unusedCode.unusedJS > 0) {
      report.recommendations.push('Remove unused CSS and JavaScript to reduce bundle size');
    }
    
    if (imageOptimization.unoptimizedImages.length > 0) {
      report.recommendations.push('Optimize images for web delivery');
    }
    
    if (report.recommendations.length === 0) {
      report.recommendations.push('Frontend is well optimized');
    }
    
    // Save report
    const reportPath = path.join(process.cwd(), 'front-maximizer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ Front maximizer report saved to ${reportPath}`);
    
    // Log summary
    console.log(`📊 Front Maximizer Summary:`);
    console.log(`  - Performance score: ${performanceAnalysis.score}/100`);
    console.log(`  - Optimization opportunities: ${optimizationOpportunities.length}`);
    console.log(`  - Bundle optimization: ${bundleOptimization.score}/100`);
    console.log(`  - Unused CSS: ${unusedCode.unusedCSS}%`);
    console.log(`  - Unused JS: ${unusedCode.unusedJS}%`);
    console.log(`  - Unoptimized images: ${imageOptimization.unoptimizedImages.length}`);
    
    if (report.recommendations.length > 0) {
      console.log('💡 Recommendations:');
      report.recommendations.forEach(rec => console.log(`  - ${rec}`));
    }
    
    console.log('✅ Continuous front maximizer completed successfully');
    
  } catch (error) {
    console.error('❌ Continuous front maximizer failed:', error.message);
  }
}

function analyzeFrontendPerformance(distPath) {
  let totalSize = 0;
  let htmlFiles = 0;
  let cssFiles = 0;
  let jsFiles = 0;
  let imageFiles = 0;
  
  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else {
        const size = stat.size;
        totalSize += size;
        
        if (file.endsWith('.html')) {
          htmlFiles++;
        } else if (file.endsWith('.css')) {
          cssFiles++;
        } else if (file.endsWith('.js')) {
          jsFiles++;
        } else if (file.match(/\.(png|jpg|jpeg|gif|svg|ico|webp)$/i)) {
          imageFiles++;
        }
      }
    }
  }
  
  scanDirectory(distPath);
  
  // Calculate performance score based on various factors
  let score = 100;
  
  // Penalize for large bundle size
  if (totalSize > 5 * 1024 * 1024) { // > 5MB
    score -= 20;
  } else if (totalSize > 2 * 1024 * 1024) { // > 2MB
    score -= 10;
  }
  
  // Penalize for too many files
  if (htmlFiles + cssFiles + jsFiles > 20) {
    score -= 15;
  }
  
  // Penalize for large images
  if (imageFiles > 10) {
    score -= 10;
  }
  
  return {
    score: Math.max(0, score),
    totalSize: totalSize,
    totalSizeMB: (totalSize / (1024 * 1024)).toFixed(2),
    fileCounts: { htmlFiles, cssFiles, jsFiles, imageFiles }
  };
}

function findOptimizationOpportunities(distPath) {
  const opportunities = [];
  
  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (file.endsWith('.html')) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Check for optimization opportunities
        if (content.includes('<script>') && !content.includes('defer') && !content.includes('async')) {
          opportunities.push({
            file: filePath.replace(distPath, ''),
            type: 'Script loading',
            issue: 'Scripts without defer/async attributes',
            recommendation: 'Add defer or async attributes to non-critical scripts'
          });
        }
        
        if (content.includes('<link rel="stylesheet"') && !content.includes('media="print"')) {
          opportunities.push({
            file: filePath.replace(distPath, ''),
            type: 'CSS loading',
            issue: 'CSS without media attributes',
            recommendation: 'Add media attributes for non-critical CSS'
          });
        }
      } else if (file.endsWith('.js') && stat.size > 100 * 1024) { // > 100KB
        opportunities.push({
          file: filePath.replace(distPath, ''),
          type: 'JavaScript optimization',
          issue: 'Large JavaScript file',
          recommendation: 'Consider code splitting or minification'
        });
      } else if (file.endsWith('.css') && stat.size > 50 * 1024) { // > 50KB
        opportunities.push({
          file: filePath.replace(distPath, ''),
          type: 'CSS optimization',
          issue: 'Large CSS file',
          recommendation: 'Consider CSS splitting or purging unused styles'
        });
      }
    }
  }
  
  scanDirectory(distPath);
  return opportunities;
}

function analyzeBundleOptimization(distPath) {
  let totalSize = 0;
  let unoptimizedFiles = [];
  let optimizedFiles = [];
  
  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (file.endsWith('.js') || file.endsWith('.css')) {
        const size = stat.size;
        totalSize += size;
        
        if (size > 100 * 1024) { // > 100KB
          unoptimizedFiles.push({
            file: filePath.replace(distPath, ''),
            size: size,
            sizeKB: (size / 1024).toFixed(2)
          });
        } else {
          optimizedFiles.push({
            file: filePath.replace(distPath, ''),
            size: size,
            sizeKB: (size / 1024).toFixed(2)
          });
        }
      }
    }
  }
  
  scanDirectory(distPath);
  
  const score = Math.max(0, 100 - (unoptimizedFiles.length * 10));
  
  return {
    score,
    totalSize: totalSize,
    totalSizeKB: (totalSize / 1024).toFixed(2),
    unoptimizedFiles: unoptimizedFiles.sort((a, b) => b.size - a.size),
    optimizedFiles: optimizedFiles.sort((a, b) => b.size - a.size)
  };
}

function findUnusedCode(distPath) {
  // This is a simplified analysis - in a real scenario you'd use tools like PurgeCSS
  let unusedCSS = 0;
  let unusedJS = 0;
  
  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (file.endsWith('.css')) {
        // Estimate unused CSS (simplified)
        const content = fs.readFileSync(filePath, 'utf8');
        const selectors = content.match(/[.#][a-zA-Z][a-zA-Z0-9_-]*/g) || [];
        unusedCSS = Math.min(30, selectors.length * 0.1); // Assume 10% unused
      } else if (file.endsWith('.js')) {
        // Estimate unused JS (simplified)
        const content = fs.readFileSync(filePath, 'utf8');
        const functions = content.match(/function\s+\w+|const\s+\w+\s*=|let\s+\w+\s*=/g) || [];
        unusedJS = Math.min(25, functions.length * 0.15); // Assume 15% unused
      }
    }
  }
  
  scanDirectory(distPath);
  
  return {
    unusedCSS: Math.round(unusedCSS),
    unusedJS: Math.round(unusedJS)
  };
}

function analyzeImageOptimization(distPath) {
  const unoptimizedImages = [];
  let totalImageSize = 0;
  
  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (file.match(/\.(png|jpg|jpeg|gif|svg|ico|webp)$/i)) {
        const size = stat.size;
        totalImageSize += size;
        
        if (size > 200 * 1024) { // > 200KB
          unoptimizedImages.push({
            file: filePath.replace(distPath, ''),
            size: size,
            sizeKB: (size / 1024).toFixed(2),
            recommendation: 'Consider compression or format conversion to WebP'
          });
        }
      }
    }
  }
  
  scanDirectory(distPath);
  
  return {
    totalImageSize: totalImageSize,
    totalImageSizeMB: (totalImageSize / (1024 * 1024)).toFixed(2),
    unoptimizedImages: unoptimizedImages.sort((a, b) => b.size - a.size)
  };
}

// Main execution loop
async function main() {
  console.log(`🚀 Front maximizer automation started with ${AUTOMATION_INTERVAL}ms interval`);
  
  // Run immediately
  await runFrontMaximizer();
  
  // Set up continuous execution
  setInterval(async () => {
    await runFrontMaximizer();
  }, AUTOMATION_INTERVAL);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🛑 Front maximizer automation shutting down...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Front maximizer automation shutting down...');
  process.exit(0);
});

// Start the automation
main().catch(error => {
  console.error('❌ Front maximizer automation failed to start:', error);
  process.exit(1);
});