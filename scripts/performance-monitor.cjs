#!/usr/bin/env node

/**
 * Performance monitoring script for Zion Tech Group website
 * Monitors build performance and provides optimization suggestions
 */

const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, '..', 'dist');

function analyzeBuild() {
  console.log('🔍 Analyzing build performance...\n');

  // Check if dist directory exists
  if (!fs.existsSync(distPath)) {
    console.error('❌ Build directory not found. Please run npm run build first.');
    process.exit(1);
  }

  // Analyze file sizes
  const files = fs.readdirSync(distPath, { recursive: true });
  let totalSize = 0;
  const fileSizes = [];

  files.forEach(file => {
    const filePath = path.join(distPath, file);
    if (fs.statSync(filePath).isFile()) {
      const size = fs.statSync(filePath).size;
      totalSize += size;
      fileSizes.push({
        name: file,
        size: size,
        sizeKB: (size / 1024).toFixed(2)
      });
    }
  });

  // Sort by size
  fileSizes.sort((a, b) => b.size - a.size);

  console.log('📊 File Size Analysis:');
  console.log('─'.repeat(50));
  fileSizes.forEach(file => {
    const sizeColor = file.size > 100000 ? '🔴' : file.size > 50000 ? '🟡' : '🟢';
    console.log(`${sizeColor} ${file.name.padEnd(30)} ${file.sizeKB.padStart(8)} KB`);
  });

  console.log('\n📈 Total Build Size:');
  console.log(`   ${(totalSize / 1024).toFixed(2)} KB (${(totalSize / 1024 / 1024).toFixed(2)} MB)`);

  // Performance recommendations
  console.log('\n💡 Performance Recommendations:');
  console.log('─'.repeat(50));

  const largeFiles = fileSizes.filter(f => f.size > 100000);
  if (largeFiles.length > 0) {
    console.log('🔴 Large files detected:');
    largeFiles.forEach(file => {
      console.log(`   • ${file.name} (${file.sizeKB} KB) - Consider code splitting or optimization`);
    });
  }

  if (totalSize > 500000) {
    console.log('🟡 Total bundle size is large - consider:');
    console.log('   • Tree shaking unused code');
    console.log('   • Dynamic imports for non-critical components');
    console.log('   • Image optimization');
  }

  // Check for common performance issues
  const jsFiles = fileSizes.filter(f => f.name.endsWith('.js'));
  const cssFiles = fileSizes.filter(f => f.name.endsWith('.css'));

  if (jsFiles.length > 5) {
    console.log('🟡 Many JS files detected - consider:');
    console.log('   • Consolidating smaller chunks');
    console.log('   • Using dynamic imports');
  }

  if (cssFiles.length > 3) {
    console.log('🟡 Multiple CSS files - consider:');
    console.log('   • CSS code splitting optimization');
    console.log('   • Critical CSS inlining');
  }

  console.log('\n✅ Performance analysis complete!');
}

// Run analysis
analyzeBuild();
