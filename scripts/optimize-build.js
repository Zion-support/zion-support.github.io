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

function analyzeBundleSize() {
  const distPath = path.join(projectRoot, 'dist');
  
  if (!fs.existsSync(distPath)) {
    log('❌ Dist folder not found. Run npm run build first.', 'red');
    return;
  }

  log('\n📊 Bundle Size Analysis', 'cyan');
  log('=' .repeat(50), 'cyan');

  const assetsPath = path.join(distPath, 'assets');
  const files = fs.readdirSync(assetsPath);
  
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

  // Check for common optimization opportunities
  const packageJsonPath = path.join(projectRoot, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
    
    log('\n🔍 Dependency Analysis:', 'blue');
    
    const heavyDeps = [
      'react-dom',
      'react-router-dom',
      '@tanstack/react-query',
      'framer-motion',
      'lucide-react',
    ];
    
    heavyDeps.forEach(dep => {
      if (dependencies[dep]) {
        log(`  ✓ ${dep}: ${dependencies[dep]}`, 'green');
      }
    });
  }

  return {
    totalSize,
    totalSizeKB: parseFloat(totalSizeKB),
    totalSizeMB: parseFloat(totalSizeMB),
    fileSizes,
  };
}

function checkBuildOptimizations() {
  log('\n🔧 Build Configuration Check', 'cyan');
  log('=' .repeat(50), 'cyan');

  const viteConfigPath = path.join(projectRoot, 'vite.config.ts');
  
  if (fs.existsSync(viteConfigPath)) {
    const viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
    
    const checks = [
      { name: 'Minification enabled', pattern: /minify:\s*['"]esbuild['"]/ },
      { name: 'Source maps disabled in production', pattern: /sourcemap:\s*false/ },
      { name: 'CSS code splitting enabled', pattern: /cssCodeSplit:\s*true/ },
      { name: 'Manual chunk splitting configured', pattern: /manualChunks:/ },
      { name: 'Bundle analyzer configured', pattern: /visualizer/ },
    ];

    checks.forEach(check => {
      const isConfigured = check.pattern.test(viteConfig);
      const status = isConfigured ? '✓' : '✗';
      const color = isConfigured ? 'green' : 'red';
      log(`  ${status} ${check.name}`, color);
    });
  } else {
    log('  ⚠️  Vite config not found', 'yellow');
  }
}

function generateReport() {
  log('\n🚀 Build Optimization Report', 'bright');
  log('=' .repeat(50), 'bright');
  
  const bundleAnalysis = analyzeBundleSize();
  checkBuildOptimizations();
  
  log('\n📋 Summary:', 'cyan');
  if (bundleAnalysis) {
    if (bundleAnalysis.totalSizeKB < 200) {
      log('  ✅ Bundle size is excellent!', 'green');
    } else if (bundleAnalysis.totalSizeKB < 500) {
      log('  ✅ Bundle size is good', 'green');
    } else {
      log('  ⚠️  Bundle size could be optimized', 'yellow');
    }
  }
  
  log('\n🎯 Next Steps:', 'magenta');
  log('  1. Run npm run build:analyze for detailed bundle analysis', 'blue');
  log('  2. Consider implementing code splitting for large components', 'blue');
  log('  3. Use dynamic imports for route-based code splitting', 'blue');
  log('  4. Optimize images and assets', 'blue');
  log('  5. Remove unused dependencies', 'blue');
  
  log('\n✨ Build optimization complete!', 'green');
}

// Run the analysis
generateReport();