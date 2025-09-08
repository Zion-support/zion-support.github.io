#!/usr/bin/env node

/**
<<<<<<< HEAD
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
=======
 * Build Optimization Script
 * Analyzes and optimizes the build process
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
>>>>>>> origin/main
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

<<<<<<< HEAD
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
=======
function logSection(title) {
  log(`\n${colors.bold}${colors.blue}=== ${title} ===${colors.reset}`);
}

function analyzeBundleSize() {
  logSection('Bundle Size Analysis');
  
  try {
    const distPath = path.join(process.cwd(), 'dist');
    if (!fs.existsSync(distPath)) {
      log('❌ Dist folder not found. Run npm run build first.', 'red');
      return;
    }

    const files = fs.readdirSync(distPath, { recursive: true });
    let totalSize = 0;
    const fileSizes = [];

    files.forEach(file => {
      const filePath = path.join(distPath, file);
      if (fs.statSync(filePath).isFile()) {
        const size = fs.statSync(filePath).size;
        totalSize += size;
        fileSizes.push({ name: file, size });
      }
    });

    // Sort by size
    fileSizes.sort((a, b) => b.size - a.size);

    log(`Total bundle size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
    log('\nLargest files:');
    fileSizes.slice(0, 10).forEach(file => {
      const sizeKB = (file.size / 1024).toFixed(2);
      log(`  ${file.name}: ${sizeKB} KB`);
    });

    // Check for large files
    const largeFiles = fileSizes.filter(f => f.size > 500 * 1024); // > 500KB
    if (largeFiles.length > 0) {
      log(`\n⚠️  Large files detected (>500KB):`, 'yellow');
      largeFiles.forEach(file => {
        const sizeKB = (file.size / 1024).toFixed(2);
        log(`  ${file.name}: ${sizeKB} KB`, 'yellow');
      });
    }

  } catch (error) {
    log(`❌ Error analyzing bundle: ${error.message}`, 'red');
  }
}

function checkDependencies() {
  logSection('Dependency Analysis');
  
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const dependencies = Object.keys(packageJson.dependencies || {});
    const devDependencies = Object.keys(packageJson.devDependencies || {});
    
    log(`Production dependencies: ${dependencies.length}`);
    log(`Development dependencies: ${devDependencies.length}`);
    
    // Check for potentially unused dependencies
    const suspiciousDeps = [
      'lodash', 'moment', 'jquery', 'bootstrap'
    ];
    
    const foundSuspicious = dependencies.filter(dep => 
      suspiciousDeps.some(sus => dep.includes(sus))
    );
    
    if (foundSuspicious.length > 0) {
      log(`\n⚠️  Potentially heavy dependencies:`, 'yellow');
      foundSuspicious.forEach(dep => {
        log(`  ${dep}`, 'yellow');
      });
    }

  } catch (error) {
    log(`❌ Error analyzing dependencies: ${error.message}`, 'red');
  }
}

function optimizeImages() {
  logSection('Image Optimization');
  
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
  const srcPath = path.join(process.cwd(), 'src');
  
  function findImages(dir) {
    const images = [];
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    files.forEach(file => {
      const fullPath = path.join(dir, file.name);
      if (file.isDirectory()) {
        images.push(...findImages(fullPath));
      } else if (imageExtensions.some(ext => file.name.toLowerCase().endsWith(ext))) {
        images.push(fullPath);
      }
    });
    
    return images;
  }
  
  try {
    const images = findImages(srcPath);
    log(`Found ${images.length} images in src/`);
    
    if (images.length > 0) {
      log('Consider optimizing images:');
      images.forEach(img => {
        const size = fs.statSync(img).size;
        if (size > 100 * 1024) { // > 100KB
          const sizeKB = (size / 1024).toFixed(2);
          log(`  ${path.relative(process.cwd(), img)}: ${sizeKB} KB`, 'yellow');
        }
      });
    }
    
  } catch (error) {
    log(`❌ Error analyzing images: ${error.message}`, 'red');
  }
}

function checkTypeScriptConfig() {
  logSection('TypeScript Configuration');
  
  try {
    const tsconfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
    const compilerOptions = tsconfig.compilerOptions || {};
    
    const checks = [
      { key: 'strict', expected: true, name: 'Strict mode' },
      { key: 'noUnusedLocals', expected: true, name: 'Unused locals check' },
      { key: 'noUnusedParameters', expected: true, name: 'Unused parameters check' },
      { key: 'strictNullChecks', expected: true, name: 'Strict null checks' },
      { key: 'noImplicitAny', expected: true, name: 'No implicit any' }
    ];
    
    checks.forEach(check => {
      const value = compilerOptions[check.key];
      const status = value === check.expected ? '✅' : '❌';
      const color = value === check.expected ? 'green' : 'red';
      log(`${status} ${check.name}: ${value}`, color);
    });
    
  } catch (error) {
    log(`❌ Error checking TypeScript config: ${error.message}`, 'red');
  }
}

function generateOptimizationReport() {
  logSection('Optimization Report');
  
  const report = {
    timestamp: new Date().toISOString(),
    recommendations: []
  };
  
  // Add recommendations based on analysis
  report.recommendations.push(
    'Enable tree shaking for better bundle size',
    'Use dynamic imports for code splitting',
    'Optimize images and assets',
    'Remove unused dependencies',
    'Enable strict TypeScript checks'
  );
  
  const reportPath = path.join(process.cwd(), 'optimization-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  log(`📊 Optimization report saved to: ${reportPath}`, 'green');
}

function main() {
  log(`${colors.bold}${colors.green}🚀 Build Optimization Analysis${colors.reset}\n`);
  
  analyzeBundleSize();
  checkDependencies();
  optimizeImages();
  checkTypeScriptConfig();
  generateOptimizationReport();
  
  log(`\n${colors.bold}${colors.green}✅ Analysis complete!${colors.reset}`);
  log('Check the optimization report for detailed recommendations.');
}

if (require.main === module) {
  main();
}

module.exports = {
  analyzeBundleSize,
  checkDependencies,
  optimizeImages,
  checkTypeScriptConfig,
  generateOptimizationReport
};
>>>>>>> origin/main
