const fs = require('fs');
const path = require('path');
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function analyzeBundle() {
  const distPath = path.join(__dirname, '../dist');
  
  if (!fs.existsSync(distPath)) {
    console.log('❌ Dist folder not found. Run npm run build first.');
    return;
  }

  console.log('📊 Bundle Analysis Report');
  console.log('========================\n');

  // Analyze JavaScript files
  const jsFiles = [];
  const cssFiles = [];
  const otherFiles = [];

  function scanDirectory(dir, relativePath = '') {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const relativeItemPath = path.join(relativePath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath, relativeItemPath);
      } else {
        const ext = path.extname(item);
        const size = stat.size;
        
        if (ext === '.js') {
          jsFiles.push({ name: relativeItemPath, size });
        } else if (ext === '.css') {
          cssFiles.push({ name: relativeItemPath, size });
        } else {
          otherFiles.push({ name: relativeItemPath, size, ext });
        }
      }
    });
  }

  scanDirectory(distPath);

  // Sort by size (largest first)
  jsFiles.sort((a, b) => b.size - a.size);
  cssFiles.sort((a, b) => b.size - a.size);

  // Calculate totals
  const totalJsSize = jsFiles.reduce((sum, file) => sum + file.size, 0);
  const totalCssSize = cssFiles.reduce((sum, file) => sum + file.size, 0);
  const totalOtherSize = otherFiles.reduce((sum, file) => sum + file.size, 0);
  const totalSize = totalJsSize + totalCssSize + totalOtherSize;

  console.log(`📦 Total Bundle Size: ${formatBytes(totalSize)}`);
  console.log(`📄 JavaScript: ${formatBytes(totalJsSize)} (${((totalJsSize / totalSize) * 100).toFixed(1)}%)`);
  console.log(`🎨 CSS: ${formatBytes(totalCssSize)} (${((totalCssSize / totalSize) * 100).toFixed(1)}%)`);
  console.log(`📁 Other: ${formatBytes(totalOtherSize)} (${((totalOtherSize / totalSize) * 100).toFixed(1)}%)\n`);

  // Top 10 largest JS files
  console.log('🔍 Top 10 Largest JavaScript Files:');
  console.log('-----------------------------------');
  jsFiles.slice(0, 10).forEach((file, index) => {
    const percentage = ((file.size / totalJsSize) * 100).toFixed(1);
    console.log(`${index + 1}. ${file.name} - ${formatBytes(file.size)} (${percentage}%)`);
  });

  console.log('\n🎨 CSS Files:');
  console.log('-------------');
  cssFiles.forEach(file => {
    const percentage = ((file.size / totalCssSize) * 100).toFixed(1);
    console.log(`• ${file.name} - ${formatBytes(file.size)} (${percentage}%)`);
  });

  // Recommendations
  console.log('\n💡 Optimization Recommendations:');
  console.log('--------------------------------');
  
  const largeFiles = jsFiles.filter(file => file.size > 100 * 1024); // > 100KB
  if (largeFiles.length > 0) {
    console.log('⚠️  Large JavaScript files detected:');
    largeFiles.forEach(file => {
      console.log(`   • ${file.name} (${formatBytes(file.size)})`);
    });
    console.log('   Consider code splitting or lazy loading for these files.\n');
  }

  if (totalSize > 2 * 1024 * 1024) { // > 2MB
    console.log('⚠️  Total bundle size is large (>2MB). Consider:');
    console.log('   • Implementing more aggressive code splitting');
    console.log('   • Using dynamic imports for non-critical features');
    console.log('   • Optimizing images and assets\n');
  }

  if (jsFiles.length > 20) {
    console.log('⚠️  Many JavaScript files detected. Consider:');
    console.log('   • Consolidating smaller files');
    console.log('   • Using more aggressive chunking strategies\n');
  }

  console.log('✅ Bundle analysis complete!');
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

analyzeBundle();