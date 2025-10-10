import fs from 'fs';
import path from 'path';

const analyzeBundle = () => {
  const distPath = './dist';
  
  if (!fs.existsSync(distPath)) {
    console.log('❌ Dist folder not found. Run npm run build first.');
    return;
  }

  const files = fs.readdirSync(distPath, { recursive: true });
  const jsFiles = files.filter(file => file.endsWith('.js'));
  const cssFiles = files.filter(file => file.endsWith('.css'));
  
  let totalJsSize = 0;
  let totalCssSize = 0;
  
  console.log('\n📊 Bundle Analysis Report');
  console.log('========================\n');
  
  console.log('📦 JavaScript Files:');
  jsFiles.forEach(file => {
    const filePath = path.join(distPath, file);
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    totalJsSize += stats.size;
    console.log(`  ${file}: ${sizeKB} KB`);
  });
  
  console.log('\n🎨 CSS Files:');
  cssFiles.forEach(file => {
    const filePath = path.join(distPath, file);
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    totalCssSize += stats.size;
    console.log(`  ${file}: ${sizeKB} KB`);
  });
  
  const totalSize = totalJsSize + totalCssSize;
  const totalSizeKB = (totalSize / 1024).toFixed(2);
  const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2);
  
  console.log('\n📈 Summary:');
  console.log(`  Total JS Size: ${(totalJsSize / 1024).toFixed(2)} KB`);
  console.log(`  Total CSS Size: ${(totalCssSize / 1024).toFixed(2)} KB`);
  console.log(`  Total Bundle Size: ${totalSizeKB} KB (${totalSizeMB} MB)`);
  
  // Performance recommendations
  console.log('\n💡 Performance Recommendations:');
  if (totalSize > 500 * 1024) { // 500KB
    console.log('  ⚠️  Bundle size is large. Consider:');
    console.log('     - Code splitting');
    console.log('     - Tree shaking');
    console.log('     - Dynamic imports');
  }
  
  if (jsFiles.length > 10) {
    console.log('  ⚠️  Many JS chunks. Consider:');
    console.log('     - Merging small chunks');
    console.log('     - Optimizing chunk splitting strategy');
  }
  
  console.log('\n✅ Analysis complete!');
};

analyzeBundle();