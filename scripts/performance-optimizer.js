#!/usr/bin/env node

/**
 * Performance Optimization Script
 * Analyzes and optimizes the build output for better performance
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting performance optimization...');

// Analyze bundle sizes
function analyzeBundleSizes() {
  const distPath = path.join(__dirname, '../dist');
  const assetsPath = path.join(distPath, 'assets');
  
  if (!fs.existsSync(assetsPath)) {
    console.log('❌ No dist/assets directory found. Run build first.');
    return;
  }

  const jsPath = path.join(assetsPath, 'js');
  const cssPath = path.join(assetsPath, 'css');

  console.log('\n📊 Bundle Analysis:');
  
  if (fs.existsSync(jsPath)) {
    const jsFiles = fs.readdirSync(jsPath);
    let totalJsSize = 0;
    
    console.log('\n📦 JavaScript bundles:');
    jsFiles.forEach(file => {
      const filePath = path.join(jsPath, file);
      const stats = fs.statSync(filePath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      totalJsSize += stats.size;
      console.log(`  ${file}: ${sizeKB} KB`);
    });
    
    console.log(`\n📈 Total JS size: ${(totalJsSize / 1024).toFixed(2)} KB`);
    
    // Identify large chunks
    const largeChunks = jsFiles
      .map(file => ({
        name: file,
        size: fs.statSync(path.join(jsPath, file)).size
      }))
      .filter(chunk => chunk.size > 100 * 1024) // > 100KB
      .sort((a, b) => b.size - a.size);
    
    if (largeChunks.length > 0) {
      console.log('\n⚠️  Large chunks (>100KB):');
      largeChunks.forEach(chunk => {
        console.log(`  ${chunk.name}: ${(chunk.size / 1024).toFixed(2)} KB`);
      });
    }
  }

  if (fs.existsSync(cssPath)) {
    const cssFiles = fs.readdirSync(cssPath);
    let totalCssSize = 0;
    
    console.log('\n🎨 CSS bundles:');
    cssFiles.forEach(file => {
      const filePath = path.join(cssPath, file);
      const stats = fs.statSync(filePath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      totalCssSize += stats.size;
      console.log(`  ${file}: ${sizeKB} KB`);
    });
    
    console.log(`\n📈 Total CSS size: ${(totalCssSize / 1024).toFixed(2)} KB`);
  }
}

// Generate performance recommendations
function generateRecommendations() {
  console.log('\n💡 Performance Recommendations:');
  console.log('1. Enable gzip compression on your server');
  console.log('2. Implement lazy loading for non-critical components');
  console.log('3. Use CDN for static assets');
  console.log('4. Optimize images (WebP format, proper sizing)');
  console.log('5. Implement service worker for caching');
  console.log('6. Use tree shaking to remove unused code');
  console.log('7. Consider code splitting for large dependencies');
  console.log('8. Implement preloading for critical resources');
}

// Check for unused dependencies
function checkUnusedDependencies() {
  console.log('\n🔍 Checking for potential optimizations...');
  
  const packageJsonPath = path.join(__dirname, '../package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const dependencies = Object.keys(packageJson.dependencies || {});
    
    console.log(`\n📦 Dependencies (${dependencies.length}):`);
    dependencies.forEach(dep => {
      console.log(`  - ${dep}`);
    });
    
    console.log('\n💡 Consider:');
    console.log('- Review if all dependencies are actually used');
    console.log('- Check for duplicate functionality across packages');
    console.log('- Consider lighter alternatives for heavy dependencies');
  }
}

// Main execution
function main() {
  try {
    analyzeBundleSizes();
    generateRecommendations();
    checkUnusedDependencies();
    
    console.log('\n✅ Performance optimization analysis complete!');
    console.log('\n🚀 Next steps:');
    console.log('1. Review the bundle analysis above');
    console.log('2. Implement the recommended optimizations');
    console.log('3. Rebuild and measure improvements');
    console.log('4. Test performance with Lighthouse');
    
  } catch (error) {
    console.error('❌ Error during optimization analysis:', error.message);
    process.exit(1);
  }
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export {
  analyzeBundleSizes,
  generateRecommendations,
  checkUnusedDependencies
};