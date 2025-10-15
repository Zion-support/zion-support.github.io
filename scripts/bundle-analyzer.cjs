#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('📊 Analyzing bundle size...\n');

const distPath = path.join(__dirname, '..', 'dist');
const assetsPath = path.join(distPath, 'assets');

if (!fs.existsSync(assetsPath)) {
  console.log('❌ Dist folder not found. Run build first.');
  process.exit(1);
}

const files = fs.readdirSync(assetsPath);
const jsFiles = files.filter(file => file.endsWith('.js'));
const cssFiles = files.filter(file => file.endsWith('.css'));

// Also check js subdirectory
const jsPath = path.join(assetsPath, 'js');
if (fs.existsSync(jsPath)) {
  const jsDirFiles = fs.readdirSync(jsPath);
  const jsDirJsFiles = jsDirFiles.filter(file => file.endsWith('.js'));
  jsFiles.push(...jsDirJsFiles.map(file => `js/${file}`));
}

let totalSize = 0;
let gzipSize = 0;

console.log('📦 JavaScript Files:');
jsFiles.forEach(file => {
  const filePath = path.join(assetsPath, file);
  const stats = fs.statSync(filePath);
  const size = stats.size;
  const gzip = Math.round(size * 0.3); // Approximate gzip size
  totalSize += size;
  gzipSize += gzip;
  
  console.log(`  ${file}: ${(size / 1024).toFixed(2)}KB (gzip: ~${gzip}KB)`);
});

console.log('\n🎨 CSS Files:');
cssFiles.forEach(file => {
  const filePath = path.join(assetsPath, file);
  const stats = fs.statSync(filePath);
  const size = stats.size;
  const gzip = Math.round(size * 0.2); // Approximate gzip size
  totalSize += size;
  gzipSize += gzip;
  
  console.log(`  ${file}: ${(size / 1024).toFixed(2)}KB (gzip: ~${gzip}KB)`);
});

console.log(`\n📈 Total Bundle Size: ${(totalSize / 1024).toFixed(2)}KB`);
console.log(`📦 Estimated Gzip Size: ${gzipSize}KB`);

// Performance recommendations
console.log('\n💡 Performance Recommendations:');
if (totalSize > 500000) { // 500KB
  console.log('  ⚠️  Bundle size is large. Consider code splitting.');
}
if (jsFiles.length < 5) {
  console.log('  ⚠️  Consider splitting vendor chunks for better caching.');
}
console.log('  ✅ Use dynamic imports for non-critical components');
console.log('  ✅ Implement lazy loading for images');
console.log('  ✅ Consider using a CDN for static assets');
