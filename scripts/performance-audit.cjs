const fs = require('fs');
const path = require('path');

// Performance audit script
function auditPerformance() {
  console.log('🔍 Running Performance Audit...\n');
  
  const distPath = path.join(__dirname, '../dist');
  const assetsPath = path.join(distPath, 'assets');
  
  if (!fs.existsSync(assetsPath)) {
    console.log('❌ No dist/assets directory found. Run npm run build first.');
    return;
  }
  
  const files = fs.readdirSync(assetsPath);
  const jsFiles = files.filter(file => file.endsWith('.js'));
  const cssFiles = files.filter(file => file.endsWith('.css'));
  
  let totalSize = 0;
  let totalGzipSize = 0;
  const largeFiles = [];
  
  console.log('📊 Bundle Analysis:');
  console.log('==================');
  
  jsFiles.forEach(file => {
    const filePath = path.join(assetsPath, file);
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    totalSize += stats.size;
    
    if (stats.size > 50 * 1024) { // Files larger than 50KB
      largeFiles.push({ name: file, size: sizeKB, type: 'JS' });
    }
    
    console.log(`📄 ${file}: ${sizeKB} KB`);
  });
  
  cssFiles.forEach(file => {
    const filePath = path.join(assetsPath, file);
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    totalSize += stats.size;
    
    if (stats.size > 20 * 1024) { // CSS files larger than 20KB
      largeFiles.push({ name: file, size: sizeKB, type: 'CSS' });
    }
    
    console.log(`🎨 ${file}: ${sizeKB} KB`);
  });
  
  console.log('\n📈 Summary:');
  console.log('===========');
  console.log(`Total bundle size: ${(totalSize / 1024).toFixed(2)} KB`);
  console.log(`JavaScript files: ${jsFiles.length}`);
  console.log(`CSS files: ${cssFiles.length}`);
  
  if (largeFiles.length > 0) {
    console.log('\n⚠️  Large files detected:');
    largeFiles.forEach(file => {
      console.log(`   ${file.name} (${file.size} KB) - ${file.type}`);
    });
  }
  
  // Performance recommendations
  console.log('\n💡 Performance Recommendations:');
  console.log('================================');
  
  if (totalSize > 500 * 1024) {
    console.log('❌ Bundle size is large. Consider:');
    console.log('   - Code splitting');
    console.log('   - Tree shaking');
    console.log('   - Dynamic imports');
  } else {
    console.log('✅ Bundle size is reasonable');
  }
  
  if (largeFiles.length > 5) {
    console.log('❌ Too many large files. Consider:');
    console.log('   - Better chunk splitting');
    console.log('   - Lazy loading');
  } else {
    console.log('✅ File sizes are well distributed');
  }
  
  console.log('\n🚀 Performance audit completed!');
}

auditPerformance();
