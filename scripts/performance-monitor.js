#!/usr/bin/env node

/**
 * Performance monitoring script
 * Monitors build performance and provides recommendations
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

function analyzePerformance() {
  log('\n⚡ Performance Analysis', 'cyan');
  log('=' .repeat(50), 'cyan');

  // Check bundle size
  const distPath = path.join(projectRoot, 'dist');
  if (!fs.existsSync(distPath)) {
    log('❌ Dist folder not found. Run npm run build first.', 'red');
    return;
  }

  const assetsPath = path.join(distPath, 'assets');
  const files = fs.readdirSync(assetsPath);
  
  let totalSize = 0;
  let jsFiles = 0;
  let cssFiles = 0;
  let otherFiles = 0;

  files.forEach(file => {
    const filePath = path.join(assetsPath, file);
    const stats = fs.statSync(filePath);
    totalSize += stats.size;
    
    if (file.endsWith('.js')) {
      jsFiles++;
    } else if (file.endsWith('.css')) {
      cssFiles++;
    } else {
      otherFiles++;
    }
  });

  const totalSizeKB = (totalSize / 1024).toFixed(2);
  const totalSizeMB = (totalSize / 1024 / 1024).toFixed(2);

  log(`\n📊 Bundle Statistics:`, 'yellow');
  log(`  Total size: ${totalSizeKB} KB (${totalSizeMB} MB)`, 'blue');
  log(`  JS files: ${jsFiles}`, 'green');
  log(`  CSS files: ${cssFiles}`, 'green');
  log(`  Other files: ${otherFiles}`, 'green');

  // Performance recommendations
  log(`\n💡 Performance Recommendations:`, 'magenta');
  
  if (totalSize > 1000 * 1024) { // > 1MB
    log('  ⚠️  Bundle is large. Consider:', 'yellow');
    log('     - Implementing code splitting', 'yellow');
    log('     - Using dynamic imports', 'yellow');
    log('     - Lazy loading routes', 'yellow');
  }

  if (jsFiles > 10) {
    log('  ⚠️  Many JS files. Consider:', 'yellow');
    log('     - Better chunk splitting strategy', 'yellow');
    log('     - Combining smaller chunks', 'yellow');
  }

  // Check for optimization opportunities
  const packageJsonPath = path.join(projectRoot, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
    
    log(`\n🔍 Dependency Analysis:`, 'blue');
    
    const performanceDeps = [
      'react',
      'react-dom',
      'react-router-dom',
      '@tanstack/react-query',
      'framer-motion',
      'lucide-react',
      'axios',
      'date-fns',
    ];
    
    performanceDeps.forEach(dep => {
      if (dependencies[dep]) {
        log(`  ✓ ${dep}: ${dependencies[dep]}`, 'green');
      }
    });
  }

  return {
    totalSize,
    totalSizeKB: parseFloat(totalSizeKB),
    totalSizeMB: parseFloat(totalSizeMB),
    jsFiles,
    cssFiles,
    otherFiles,
  };
}

function checkBuildConfiguration() {
  log('\n🔧 Build Configuration Check', 'cyan');
  log('=' .repeat(50), 'cyan');

  const viteConfigPath = path.join(projectRoot, 'vite.config.ts');
  
  if (fs.existsSync(viteConfigPath)) {
    const viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
    
    const checks = [
      { name: 'ESBuild minification', pattern: /minify:\s*['"]esbuild['"]/ },
      { name: 'Source maps disabled', pattern: /sourcemap:\s*false/ },
      { name: 'CSS code splitting', pattern: /cssCodeSplit:\s*true/ },
      { name: 'Manual chunk splitting', pattern: /manualChunks:/ },
      { name: 'Bundle analyzer', pattern: /visualizer/ },
      { name: 'Dependency optimization', pattern: /optimizeDeps:/ },
      { name: 'ESM target', pattern: /target:\s*['"]esnext['"]/ },
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

function generatePerformanceReport() {
  log('\n🚀 Performance Monitoring Report', 'bright');
  log('=' .repeat(50), 'bright');
  
  const performance = analyzePerformance();
  checkBuildConfiguration();
  
  log('\n📋 Performance Summary:', 'cyan');
  if (performance) {
    if (performance.totalSizeKB < 200) {
      log('  ✅ Excellent performance!', 'green');
    } else if (performance.totalSizeKB < 500) {
      log('  ✅ Good performance', 'green');
    } else if (performance.totalSizeKB < 1000) {
      log('  ⚠️  Acceptable performance', 'yellow');
    } else {
      log('  ❌ Performance needs improvement', 'red');
    }
  }
  
  log('\n🎯 Optimization Suggestions:', 'magenta');
  log('  1. Implement lazy loading for routes', 'blue');
  log('  2. Use dynamic imports for heavy components', 'blue');
  log('  3. Optimize images and assets', 'blue');
  log('  4. Consider using lighter alternatives', 'blue');
  log('  5. Implement service worker for caching', 'blue');
  
  log('\n✨ Performance monitoring complete!', 'green');
}

// Run the analysis
generatePerformanceReport();