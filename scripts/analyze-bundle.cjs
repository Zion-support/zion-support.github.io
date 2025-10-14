const fs = require('fs');
const path = require('path');

/**
 * Bundle Analysis Script
 * Analyzes the built bundle for optimization opportunities
 */

function analyzeBundle() {
  const distPath = path.join(__dirname, '../dist');
  
  if (!fs.existsSync(distPath)) {
    console.log('❌ Dist folder not found. Run npm run build first.');
    return;
  }

  const assetsPath = path.join(distPath, 'assets');
  const files = fs.readdirSync(assetsPath);
  
  const jsFiles = files.filter(file => file.endsWith('.js'));
  const cssFiles = files.filter(file => file.endsWith('.css'));
  
  let totalJSSize = 0;
  let totalCSSSize = 0;
  
  console.log('\n📊 Bundle Analysis Report');
  console.log('========================');
  
  console.log('\n📦 JavaScript Files:');
  jsFiles.forEach(file => {
    const filePath = path.join(assetsPath, file);
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    totalJSSize += stats.size;
    console.log(`  ${file}: ${sizeKB} KB`);
  });
  
  console.log('\n🎨 CSS Files:');
  cssFiles.forEach(file => {
    const filePath = path.join(assetsPath, file);
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    totalCSSSize += stats.size;
    console.log(`  ${file}: ${sizeKB} KB`);
  });
  
  console.log('\n📈 Summary:');
  console.log(`  Total JS Size: ${(totalJSSize / 1024).toFixed(2)} KB`);
  console.log(`  Total CSS Size: ${(totalCSSSize / 1024).toFixed(2)} KB`);
  console.log(`  Total Bundle Size: ${((totalJSSize + totalCSSSize) / 1024).toFixed(2)} KB`);
  
  // Recommendations
  console.log('\n💡 Optimization Recommendations:');
  if (totalJSSize > 500 * 1024) {
    console.log('  ⚠️  JavaScript bundle is large. Consider code splitting.');
  }
  if (totalCSSSize > 50 * 1024) {
    console.log('  ⚠️  CSS bundle is large. Consider purging unused styles.');
  }
  if (jsFiles.length > 20) {
    console.log('  ⚠️  Many JS chunks. Consider consolidating smaller chunks.');
  }
  
  console.log('\n✅ Bundle analysis complete!');
}

analyzeBundle();