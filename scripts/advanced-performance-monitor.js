#!/usr/bin/env node

/**
 * Advanced Performance Monitor Script
 * Comprehensive performance analysis and optimization recommendations
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

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
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function analyzeBundlePerformance() {
  log('\n🚀 Advanced Performance Analysis', 'cyan');
  log('=', 'cyan');

  const distPath = path.join(projectRoot, 'dist');
  if (!fs.existsSync(distPath)) {
    log('❌ Dist folder not found. Run npm run build first.', 'red');
    return;
  }

  // Analyze bundle files
  log('\n📊 Bundle Analysis:', 'blue');
  const files = fs.readdirSync(distPath, { recursive: true });
  let totalSize = 0;
  let jsFiles = [];
  let cssFiles = [];
  let otherFiles = [];

  files.forEach(file => {
    if (typeof file === 'string') {
      const filePath = path.join(distPath, file);
      const stats = fs.statSync(filePath);
      if (stats.isFile()) {
        totalSize += stats.size;
        const fileInfo = {
          name: file,
          size: stats.size,
          path: filePath
        };

        if (file.endsWith('.js')) {
          jsFiles.push(fileInfo);
        } else if (file.endsWith('.css')) {
          cssFiles.push(fileInfo);
        } else {
          otherFiles.push(fileInfo);
        }
      }
    }
  });

  // Sort files by size
  jsFiles.sort((a, b) => b.size - a.size);
  cssFiles.sort((a, b) => b.size - a.size);

  log(`\n📁 JavaScript Files (${jsFiles.length}):`, 'yellow');
  jsFiles.forEach(file => {
    const size = formatBytes(file.size);
    const gzipEstimate = Math.round(file.size * 0.3); // Rough gzip estimate
    log(`  ${file.name}: ${size} (gzip: ~${formatBytes(gzipEstimate)})`);
  });

  log(`\n🎨 CSS Files (${cssFiles.length}):`, 'yellow');
  cssFiles.forEach(file => {
    const size = formatBytes(file.size);
    const gzipEstimate = Math.round(file.size * 0.2); // Rough gzip estimate
    log(`  ${file.name}: ${size} (gzip: ~${formatBytes(gzipEstimate)})`);
  });

  log(`\n📄 Other Files (${otherFiles.length}):`, 'yellow');
  otherFiles.forEach(file => {
    const size = formatBytes(file.size);
    log(`  ${file.name}: ${size}`);
  });

  log(`\n📈 Total Bundle Size: ${formatBytes(totalSize)}`, 'green');

  // Performance recommendations
  log('\n💡 Performance Recommendations:', 'magenta');
  
  if (totalSize < 500 * 1024) { // Less than 500KB
    log('  ✅ Bundle size is excellent!', 'green');
  } else if (totalSize < 1024 * 1024) { // Less than 1MB
    log('  ✅ Bundle size is good', 'green');
  } else if (totalSize < 2 * 1024 * 1024) { // Less than 2MB
    log('  ⚠️  Bundle size could be optimized', 'yellow');
  } else {
    log('  ❌ Bundle size needs optimization', 'red');
  }

  // Check for large files
  const largeFiles = [...jsFiles, ...cssFiles].filter(f => f.size > 100 * 1024);
  if (largeFiles.length > 0) {
    log('\n🔍 Large Files (>100KB):', 'yellow');
    largeFiles.forEach(file => {
      log(`  ${file.name}: ${formatBytes(file.size)}`);
    });
  }

  // PWA analysis
  const pwaFiles = files.filter(f => 
    typeof f === 'string' && 
    (f.includes('sw.js') || f.includes('workbox') || f.includes('manifest'))
  );
  
  if (pwaFiles.length > 0) {
    log('\n📱 PWA Analysis:', 'blue');
    log(`  ✅ PWA files detected: ${pwaFiles.length}`);
    pwaFiles.forEach(file => {
      const filePath = path.join(distPath, file);
      const stats = fs.statSync(filePath);
      log(`    ${file}: ${formatBytes(stats.size)}`);
    });
  }

  log('\n✨ Advanced performance analysis complete!', 'green');
}

// Run the analysis
analyzeBundlePerformance();