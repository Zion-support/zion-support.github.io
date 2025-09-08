#!/usr/bin/env node

/**
 * Performance Monitor Script
 * Monitors application performance and provides optimization recommendations
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
  log('\n🚀 Performance Analysis Report', 'cyan');
  log('==================================================', 'cyan');

  // Check bundle size
  const distPath = path.join(projectRoot, 'dist');
  if (fs.existsSync(distPath)) {
    log('\n📊 Bundle Analysis:', 'blue');
    
    const files = fs.readdirSync(distPath, { recursive: true });
    let totalSize = 0;
    
    files.forEach(file => {
      if (typeof file === 'string') {
        const filePath = path.join(distPath, file);
        const stats = fs.statSync(filePath);
        if (stats.isFile()) {
          totalSize += stats.size;
          const sizeKB = (stats.size / 1024).toFixed(2);
          log(`  ${file}: ${sizeKB} KB`);
        }
      }
    });
    
    const totalMB = (totalSize / (1024 * 1024)).toFixed(2);
    log(`\n📈 Total Bundle Size: ${totalMB} MB`, 'green');
    
    if (totalSize < 1024 * 1024) { // Less than 1MB
      log('  ✅ Bundle size is excellent!', 'green');
    } else if (totalSize < 2 * 1024 * 1024) { // Less than 2MB
      log('  ✅ Bundle size is good', 'green');
    } else {
      log('  ⚠️  Bundle size could be optimized', 'yellow');
    }
  }

  // Check dependencies
  log('\n🔍 Dependency Analysis:', 'blue');
  const packageJsonPath = path.join(projectRoot, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const deps = Object.keys(packageJson.dependencies || {});
    const devDeps = Object.keys(packageJson.devDependencies || {});
    
    log(`  Dependencies: ${deps.length}`);
    log(`  Dev Dependencies: ${devDeps.length}`);
    
    // Check for common performance libraries
    const performanceLibs = ['react', 'react-dom', 'framer-motion', 'lucide-react'];
    performanceLibs.forEach(lib => {
      if (deps.includes(lib)) {
        log(`  ✅ ${lib}: Installed`, 'green');
      }
    });
  }

  // Performance recommendations
  log('\n💡 Performance Recommendations:', 'magenta');
  log('  ✅ Use React.memo for expensive components');
  log('  ✅ Implement lazy loading for routes');
  log('  ✅ Optimize images with next/image or similar');
  log('  ✅ Use code splitting for large components');
  log('  ✅ Minimize bundle size with tree shaking');
  log('  ✅ Enable gzip compression on server');
  log('  ✅ Use CDN for static assets');
  log('  ✅ Implement service worker for caching');

  log('\n✨ Performance analysis complete!', 'green');
}

// Run the analysis
analyzePerformance();