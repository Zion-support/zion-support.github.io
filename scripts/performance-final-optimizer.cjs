#!/usr/bin/env node

/**
 * Final Performance Optimizer
 * Comprehensive performance optimization for production builds
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting final performance optimization...');

// Performance optimization utilities
const optimizeHTML = (htmlContent) => {
  return htmlContent
    // Remove HTML comments
    .replace(/<!--[\s\S]*?-->/g, '')
    // Remove unnecessary whitespace
    .replace(/\s+/g, ' ')
    // Remove spaces around tags
    .replace(/>\s+</g, '><')
    // Minify inline CSS
    .replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (match, css) => {
      const minifiedCSS = css
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/\s+/g, ' ')
        .replace(/\s*([{}:;,>+~])\s*/g, '$1')
        .trim();
      return match.replace(css, minifiedCSS);
    })
    // Minify inline JavaScript
    .replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, (match, js) => {
      const minifiedJS = js
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/\/\/.*$/gm, '')
        .replace(/\s+/g, ' ')
        .trim();
      return match.replace(js, minifiedJS);
    })
    .trim();
};

const optimizeJS = (jsContent) => {
  return jsContent
    // Remove comments
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*$/gm, '')
    // Remove unnecessary whitespace
    .replace(/\s+/g, ' ')
    // Remove spaces around operators
    .replace(/\s*([=+\-*/<>!&|])\s*/g, '$1')
    // Remove trailing semicolons before closing braces
    .replace(/;}/g, '}')
    // Remove leading zeros
    .replace(/\b0\./g, '.')
    .trim();
};

// Critical resource optimization
const optimizeCriticalResources = () => {
  console.log('📦 Optimizing critical resources...');
  
  const criticalFiles = [
    'dist/index.html',
    'dist/manifest.json',
    'dist/sw.js',
    'dist/sw-enhanced.js',
    'dist/sw-performance.js'
  ];
  
  let optimizedCount = 0;
  
  for (const file of criticalFiles) {
    if (fs.existsSync(file)) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        let optimizedContent = content;
        
        if (file.endsWith('.html')) {
          optimizedContent = optimizeHTML(content);
        } else if (file.endsWith('.js')) {
          optimizedContent = optimizeJS(content);
        }
        
        if (content !== optimizedContent) {
          fs.writeFileSync(file, optimizedContent, 'utf8');
          optimizedCount++;
          console.log(`✅ Optimized: ${file}`);
        }
      } catch (error) {
        console.warn(`⚠️  Could not optimize ${file}: ${error.message}`);
      }
    }
  }
  
  return optimizedCount;
};

// Bundle size analysis
const analyzeBundleSize = () => {
  console.log('📊 Analyzing bundle size...');
  
  const distDir = 'dist';
  if (!fs.existsSync(distDir)) {
    console.log('⚠️  No dist directory found');
    return;
  }
  
  const files = fs.readdirSync(distDir, { recursive: true });
  let totalSize = 0;
  const fileSizes = [];
  
  for (const file of files) {
    const filePath = path.join(distDir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isFile()) {
      const size = stat.size;
      totalSize += size;
      fileSizes.push({ file, size });
    }
  }
  
  // Sort by size
  fileSizes.sort((a, b) => b.size - a.size);
  
  console.log('📈 Largest files:');
  fileSizes.slice(0, 10).forEach(({ file, size }) => {
    const sizeKB = (size / 1024).toFixed(2);
    console.log(`  ${file}: ${sizeKB} KB`);
  });
  
  const totalSizeKB = (totalSize / 1024).toFixed(2);
  console.log(`📦 Total bundle size: ${totalSizeKB} KB`);
  
  return { totalSize, fileSizes };
};

// Performance recommendations
const generatePerformanceRecommendations = (bundleAnalysis) => {
  console.log('💡 Performance recommendations:');
  
  const recommendations = [];
  
  // Check for large files
  const largeFiles = bundleAnalysis.fileSizes.filter(f => f.size > 100 * 1024); // > 100KB
  if (largeFiles.length > 0) {
    recommendations.push('🔍 Consider code splitting for large files');
  }
  
  // Check for images
  const imageFiles = bundleAnalysis.fileSizes.filter(f => 
    f.file.match(/\.(jpg|jpeg|png|gif|svg|webp)$/i)
  );
  if (imageFiles.length > 0) {
    recommendations.push('🖼️ Optimize images and consider WebP format');
  }
  
  // Check for CSS files
  const cssFiles = bundleAnalysis.fileSizes.filter(f => f.file.endsWith('.css'));
  if (cssFiles.length > 0) {
    recommendations.push('🎨 Consider CSS purging for unused styles');
  }
  
  // Check for JavaScript files
  const jsFiles = bundleAnalysis.fileSizes.filter(f => f.file.endsWith('.js'));
  if (jsFiles.length > 0) {
    recommendations.push('⚡ Consider tree shaking for unused JavaScript');
  }
  
  recommendations.forEach(rec => console.log(`  ${rec}`));
  
  return recommendations;
};

// Main execution
try {
  // Optimize critical resources
  const optimizedCount = optimizeCriticalResources();
  
  // Analyze bundle size
  const bundleAnalysis = analyzeBundleSize();
  
  // Generate recommendations
  const recommendations = generatePerformanceRecommendations(bundleAnalysis);
  
  console.log('🎉 Final performance optimization completed!');
  console.log(`📊 Optimized ${optimizedCount} critical files`);
  console.log(`💡 Generated ${recommendations.length} performance recommendations`);
  
} catch (error) {
  console.error('❌ Performance optimization failed:', error.message);
  process.exit(1);
}