#!/usr/bin/env node

/**
 * Health Check Script
 * Comprehensive health check for the application
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

function checkFileExists(filePath, description) {
  const fullPath = path.join(projectRoot, filePath);
  if (fs.existsSync(fullPath)) {
    log(`  ✅ ${description}`, 'green');
    return true;
  } else {
    log(`  ❌ ${description} - Missing`, 'red');
    return false;
  }
}

function checkFileContent(filePath, searchString, description) {
  const fullPath = path.join(projectRoot, filePath);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    if (content.includes(searchString)) {
      log(`  ✅ ${description}`, 'green');
      return true;
    } else {
      log(`  ⚠️  ${description} - Not found`, 'yellow');
      return false;
    }
  } else {
    log(`  ❌ ${description} - File missing`, 'red');
    return false;
  }
}

function runHealthCheck() {
  log('\n🏥 Health Check Report', 'cyan');
  log('=', 'cyan');

  let allChecksPassed = true;

  // Core files check
  log('\n📁 Core Files Check:', 'blue');
  allChecksPassed &= checkFileExists('package.json', 'package.json');
  allChecksPassed &= checkFileExists('vite.config.ts', 'Vite config');
  allChecksPassed &= checkFileExists('tsconfig.json', 'TypeScript config');
  allChecksPassed &= checkFileExists('netlify.toml', 'Netlify config');
  allChecksPassed &= checkFileExists('src/main.tsx', 'Main entry point');
  allChecksPassed &= checkFileExists('src/App.tsx', 'App component');

  // Build files check
  log('\n🔨 Build Files Check:', 'blue');
  allChecksPassed &= checkFileExists('dist', 'Build output directory');
  if (fs.existsSync(path.join(projectRoot, 'dist'))) {
    allChecksPassed &= checkFileExists('dist/index.html', 'Built HTML file');
  }

  // Configuration check
  log('\n⚙️  Configuration Check:', 'blue');
  checkFileContent('package.json', '"build"', 'Build script');
  checkFileContent('package.json', '"dev"', 'Dev script');
  checkFileContent('vite.config.ts', 'build', 'Vite build config');
  checkFileContent('netlify.toml', 'build', 'Netlify build command');

  // Dependencies check
  log('\n📦 Dependencies Check:', 'blue');
  const packageJsonPath = path.join(projectRoot, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const deps = Object.keys(packageJson.dependencies || {});
    const devDeps = Object.keys(packageJson.devDependencies || {});
    
    log(`  Dependencies: ${deps.length}`);
    log(`  Dev Dependencies: ${devDeps.length}`);
    
    // Check for critical dependencies
    const criticalDeps = ['react', 'react-dom', 'vite'];
    criticalDeps.forEach(dep => {
      if (deps.includes(dep) || devDeps.includes(dep)) {
        log(`  ✅ ${dep}: Installed`, 'green');
      } else {
        log(`  ❌ ${dep}: Missing`, 'red');
        allChecksPassed = false;
      }
    });
  }

  // Scripts check
  log('\n📜 Scripts Check:', 'blue');
  checkFileExists('scripts/optimize-build.js', 'Build optimizer');
  checkFileExists('scripts/performance-monitor.js', 'Performance monitor');
  checkFileExists('scripts/health-check.js', 'Health check script');

  // Summary
  log('\n📋 Health Check Summary:', 'magenta');
  if (allChecksPassed) {
    log('  ✅ All critical checks passed!', 'green');
    log('  🎉 Application is healthy and ready for deployment', 'green');
  } else {
    log('  ⚠️  Some checks failed - please review the issues above', 'yellow');
  }

  log('\n✨ Health check complete!', 'green');
}

// Run the health check
runHealthCheck();