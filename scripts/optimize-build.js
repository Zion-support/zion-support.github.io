#!/usr/bin/env node

/**
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
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

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