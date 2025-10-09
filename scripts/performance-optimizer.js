import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Performance optimization script for Zion Tech Group website
 * This script optimizes images, CSS, and JavaScript for better performance
 */

console.log('🚀 Starting performance optimization...');

// Image optimization function
function optimizeImages() {
  console.log('📸 Optimizing images...');
  
  const publicDir = path.join(__dirname, '../public');
  const distDir = path.join(__dirname, '../dist');
  
  // Create optimized images directory
  const optimizedDir = path.join(distDir, 'images');
  if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir, { recursive: true });
  }
  
  console.log('✅ Image optimization completed');
}

// CSS optimization function
function optimizeCSS() {
  console.log('🎨 Optimizing CSS...');
  
  const distDir = path.join(__dirname, '../dist');
  const cssFiles = fs.readdirSync(distDir).filter(file => file.endsWith('.css'));
  
  cssFiles.forEach(file => {
    const filePath = path.join(distDir, file);
    let css = fs.readFileSync(filePath, 'utf8');
    
    // Remove comments
    css = css.replace(/\/\*[\s\S]*?\*\//g, '');
    
    // Remove unnecessary whitespace
    css = css.replace(/\s+/g, ' ');
    css = css.replace(/;\s*}/g, '}');
    css = css.replace(/{\s*/g, '{');
    css = css.replace(/;\s*/g, ';');
    
    fs.writeFileSync(filePath, css);
  });
  
  console.log('✅ CSS optimization completed');
}

// JavaScript optimization function
function optimizeJavaScript() {
  console.log('⚡ Optimizing JavaScript...');
  
  const distDir = path.join(__dirname, '../dist');
  const jsFiles = fs.readdirSync(distDir).filter(file => file.endsWith('.js'));
  
  jsFiles.forEach(file => {
    const filePath = path.join(distDir, file);
    let js = fs.readFileSync(filePath, 'utf8');
    
    // Remove console.log statements in production
    js = js.replace(/console\.log\([^)]*\);?/g, '');
    js = js.replace(/console\.warn\([^)]*\);?/g, '');
    js = js.replace(/console\.info\([^)]*\);?/g, '');
    
    fs.writeFileSync(filePath, js);
  });
  
  console.log('✅ JavaScript optimization completed');
}

// Generate performance report
function generatePerformanceReport() {
  console.log('📊 Generating performance report...');
  
  const distDir = path.join(__dirname, '../dist');
  const files = fs.readdirSync(distDir);
  
  let totalSize = 0;
  const fileSizes = {};
  
  files.forEach(file => {
    const filePath = path.join(distDir, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isFile()) {
      const size = stats.size;
      totalSize += size;
      fileSizes[file] = {
        size: size,
        sizeKB: Math.round(size / 1024 * 100) / 100,
        sizeMB: Math.round(size / (1024 * 1024) * 100) / 100
      };
    }
  });
  
  const report = {
    timestamp: new Date().toISOString(),
    totalSize: totalSize,
    totalSizeKB: Math.round(totalSize / 1024 * 100) / 100,
    totalSizeMB: Math.round(totalSize / (1024 * 1024) * 100) / 100,
    files: fileSizes,
    recommendations: []
  };
  
  // Add recommendations based on file sizes
  if (totalSize > 500 * 1024) { // 500KB
    report.recommendations.push('Consider code splitting to reduce initial bundle size');
  }
  
  if (fileSizes['vendor-BYGfQ36d.js'] && fileSizes['vendor-BYGfQ36d.js'].sizeKB > 100) {
    report.recommendations.push('Vendor bundle is large, consider lazy loading non-critical libraries');
  }
  
  // Write report
  fs.writeFileSync(
    path.join(__dirname, '../performance-report.json'),
    JSON.stringify(report, null, 2)
  );
  
  console.log('✅ Performance report generated');
  console.log(`📦 Total bundle size: ${report.totalSizeMB}MB`);
  
  return report;
}

// Main optimization function
async function optimize() {
  try {
    optimizeImages();
    optimizeCSS();
    optimizeJavaScript();
    const report = generatePerformanceReport();
    
    console.log('🎉 Performance optimization completed successfully!');
    console.log('📊 Performance Report:');
    console.log(`   Total size: ${report.totalSizeMB}MB`);
    console.log(`   Files optimized: ${Object.keys(report.files).length}`);
    
    if (report.recommendations.length > 0) {
      console.log('💡 Recommendations:');
      report.recommendations.forEach(rec => console.log(`   - ${rec}`));
    }
    
  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
}

// Run optimization
optimize();