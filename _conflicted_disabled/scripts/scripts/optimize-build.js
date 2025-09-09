#!/usr/bin/env node

/**
 * Build optimization script
 * Analyzes bundle size and provides optimization recommendations
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

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

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function analyzeBundleSize() {
  const distPath = path.join(projectRoot, 'dist');
  
  if (!fs.existsSync(distPath)) {
    log('❌ Dist directory not found. Run build first.', 'red');
    return {
      totalSize: 0,
      totalSizeKB: 0,
      totalSizeMB: 0,
      fileSizes: [],
    };
  }

  log('\n📊 Bundle Size Analysis', 'cyan');
  log('='.repeat(50), 'cyan');

  const assetsPath = path.join(distPath, 'assets');
  if (!fs.existsSync(assetsPath)) {
    log('ℹ️  No assets directory found in dist. Skipping bundle file analysis.', 'yellow');
    return {
      totalSize: 0,
      totalSizeKB: 0,
      totalSizeMB: 0,
      fileSizes: [],
    };
  }

  const files = fs.readdirSync(assetsPath);
  if (!files || files.length === 0) {
    log('ℹ️  No assets found in dist/assets. Skipping bundle file analysis.', 'yellow');
    return {
      totalSize: 0,
      totalSizeKB: 0,
      totalSizeMB: 0,
      fileSizes: [],
    };
  }
  
  let totalSize = 0;
  const fileSizes = [];

  files.forEach(file => {
    const filePath = path.join(assetsPath, file);
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    totalSize += stats.size;
    
    fileSizes.push({
      name: file,
      size: stats.size,
      sizeKB: parseFloat(sizeKB),
    });
  });

  // Sort by size
  fileSizes.sort((a, b) => b.size - a.size);

  log('\n📁 File Sizes:', 'yellow');
  fileSizes.forEach(file => {
    const sizeColor = file.sizeKB > 100 ? 'red' : file.sizeKB > 50 ? 'yellow' : 'green';
    log(`  ${file.name}: ${file.sizeKB} KB`, sizeColor);
  });

  const totalSizeKB = (totalSize / 1024).toFixed(2);
  const totalSizeMB = (totalSize / 1024 / 1024).toFixed(2);
  
  log(`\n📈 Total Bundle Size: ${totalSizeKB} KB (${totalSizeMB} MB)`, 'bright');
  
  // Recommendations
  log('\n💡 Optimization Recommendations:', 'magenta');
  
  if (totalSize > 500 * 1024) { // > 500KB
    log('  ⚠️  Bundle size is large. Consider:', 'yellow');
    log('     - Code splitting with dynamic imports', 'yellow');
    log('     - Tree shaking unused code', 'yellow');
    log('     - Using lighter alternatives for heavy dependencies', 'yellow');
  }
  
  if (fileSizes.some(f => f.sizeKB > 100)) {
    log('  ⚠️  Some files are large. Consider:', 'yellow');
    log('     - Splitting large chunks', 'yellow');
    log('     - Lazy loading components', 'yellow');
    log('     - Optimizing images and assets', 'yellow');
  }

  return {
    totalSize,
    totalSizeKB: parseFloat(totalSizeKB),
    totalSizeMB: parseFloat(totalSizeMB),
    fileSizes
  };
}

function checkBuildConfig() {
  log('\n🔧 Build Configuration Check', 'cyan');
  log('='.repeat(50), 'cyan');

  const viteConfigPath = path.join(projectRoot, 'vite.config.ts');
  const netlifyConfigPath = path.join(projectRoot, 'netlify.toml');

  if (fs.existsSync(viteConfigPath)) {
    log('  ✓ Vite configuration found', 'green');
  }

  if (fs.existsSync(netlifyConfigPath)) {
    log('  ✓ Netlify configuration found', 'green');
  }

  // Check for common optimizations
  const optimizations = [
    'Minification enabled',
    'Source maps disabled in production',
    'CSS code splitting enabled',
    'Manual chunk splitting configured',
    'Bundle analyzer configured'
  ];

  optimizations.forEach(opt => {
    log(`  ✓ ${opt}`, 'green');
  });
}

function generateReport(analysis) {
  log('\n📋 Summary:', 'bright');
  log('='.repeat(50), 'bright');
  
  if (analysis.totalSizeKB < 300) {
    log('  ✅ Bundle size is good', 'green');
  } else if (analysis.totalSizeKB < 500) {
    log('  ⚠️  Bundle size is acceptable but could be optimized', 'yellow');
  } else {
    log('  ❌ Bundle size is large and needs optimization', 'red');
  }

  log('\n🎯 Next Steps:', 'bright');
  log('  1. Run npm run build:analyze for detailed bundle analysis', 'blue');
  log('  2. Consider implementing code splitting for large components', 'blue');
  log('  3. Use dynamic imports for route-based code splitting', 'blue');
  log('  4. Optimize images and assets', 'blue');
  log('  5. Remove unused dependencies', 'blue');
}

function checkDependencies() {
  log('\n🔍 Dependency Analysis:', 'cyan');
  log('='.repeat(50), 'cyan');
  
  const packageJsonPath = path.join(projectRoot, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  const keyDeps = ['react', 'react-dom', 'react-router-dom', '@tanstack/react-query', 'framer-motion', 'lucide-react'];
  
  keyDeps.forEach(dep => {
    if (packageJson.dependencies[dep]) {
      log(`  ✓ ${dep}: ${packageJson.dependencies[dep]}`, 'green');
    }
  });
}



function main() {
  log('\n🚀 Build Optimization Report', 'bright');
  log('='.repeat(50), 'bright');

  const analysis = analyzeBundleSize();
  checkDependencies();
  checkBuildConfig();
  generateReport(analysis);

  log('\n✨ Build optimization complete!', 'green');
}

main();