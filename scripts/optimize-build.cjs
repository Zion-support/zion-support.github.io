/**
 * Build Optimization Script
 * Analyzes and optimizes the build process
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m'
};

// Helper function to colorize text
const colorize = (text, color) => `${colors[color]}${text}${colors.reset}`;

// Get file size in human readable format
const getFileSize = (filePath) => {
  try {
    const stats = fs.statSync(filePath);
    const bytes = stats.size;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
  } catch (error) {
    return '0 B';
  }
};

// Analyze bundle size
const analyzeBundleSize = () => {
  console.log(colorize('\n🚀 Build Optimization Report', 'cyan'));
  console.log(colorize('==================================================', 'cyan'));
  
  const distDir = path.join(__dirname, '..', 'dist');
  const assetsDir = path.join(distDir, 'assets');
  
  if (!fs.existsSync(assetsDir)) {
    console.log(colorize('❌ Assets directory not found', 'red'));
    return;
  }
  
  const files = fs.readdirSync(assetsDir);
  const jsFiles = files.filter(f => f.endsWith('.js'));
  const cssFiles = files.filter(f => f.endsWith('.css'));
  
  console.log(colorize('\n📊 Bundle Size Analysis', 'yellow'));
  console.log(colorize('==================================================', 'yellow'));
  
  let totalSize = 0;
  
  console.log(colorize('\n📁 File Sizes:', 'white'));
  [...jsFiles, ...cssFiles].forEach(file => {
    const filePath = path.join(assetsDir, file);
    const size = getFileSize(filePath);
    const sizeInBytes = fs.statSync(filePath).size;
    totalSize += sizeInBytes;
    console.log(`  ${file}: ${size}`);
  });
  
  const totalSizeMB = (totalSize / 1024 / 1024).toFixed(2);
  console.log(colorize(`\n📈 Total Bundle Size: ${totalSizeMB} MB`, 'green'));
  
  // Recommendations
  console.log(colorize('\n💡 Optimization Recommendations:', 'yellow'));
  if (totalSize > 500000) { // 500KB
    console.log(colorize('  ⚠️  Bundle size is large. Consider:', 'yellow'));
    console.log(colorize('     - Code splitting', 'white'));
    console.log(colorize('     - Tree shaking', 'white'));
    console.log(colorize('     - Lazy loading', 'white'));
  } else {
    console.log(colorize('  ✅ Bundle size is good', 'green'));
  }
  
  console.log(colorize('\n✨ Build optimization complete!', 'green'));
};

// Main execution
try {
  analyzeBundleSize();
} catch (error) {
  console.error(colorize('❌ Error during optimization:', 'red'), error.message);
  process.exit(1);
}