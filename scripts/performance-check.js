#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Performance monitoring script
function checkPerformance() {
  console.log('🔍 Running performance analysis...\n');

  // Check bundle size
  const buildDir = path.join(__dirname, '..', '.next');
  if (fs.existsSync(buildDir)) {
    console.log('📦 Bundle Analysis:');
    
    // Check static files
    const staticDir = path.join(buildDir, 'static');
    if (fs.existsSync(staticDir)) {
      const files = fs.readdirSync(staticDir, { recursive: true });
      let totalSize = 0;
      
      files.forEach(file => {
        const filePath = path.join(staticDir, file);
        if (fs.statSync(filePath).isFile()) {
          const size = fs.statSync(filePath).size;
          totalSize += size;
        }
      });
      
      console.log(`  Static files size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
    }

    // Check pages
    const pagesDir = path.join(buildDir, 'server', 'pages');
    if (fs.existsSync(pagesDir)) {
      const pages = fs.readdirSync(pagesDir);
      console.log(`  Number of pages: ${pages.length}`);
    }
  }

  // Check dependencies
  console.log('\n📚 Dependencies Analysis:');
  const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
  const dependencies = Object.keys(packageJson.dependencies || {});
  const devDependencies = Object.keys(packageJson.devDependencies || {});
  
  console.log(`  Production dependencies: ${dependencies.length}`);
  console.log(`  Development dependencies: ${devDependencies.length}`);

  // Check for large dependencies
  const largeDeps = ['react', 'next', 'typescript', 'tailwindcss'];
  largeDeps.forEach(dep => {
    if (dependencies.includes(dep)) {
      console.log(`  ✓ ${dep} (production)`);
    } else if (devDependencies.includes(dep)) {
      console.log(`  ✓ ${dep} (development)`);
    }
  });

  // Performance recommendations
  console.log('\n💡 Performance Recommendations:');
  console.log('  • Use dynamic imports for large components');
  console.log('  • Implement image optimization');
  console.log('  • Enable compression (gzip/brotli)');
  console.log('  • Use CDN for static assets');
  console.log('  • Implement service worker for caching');
  console.log('  • Monitor Core Web Vitals');

  // Check for performance anti-patterns
  console.log('\n⚠️  Checking for performance issues...');
  
  // Check for large files
  const appDir = path.join(__dirname, '..', 'app');
  if (fs.existsSync(appDir)) {
    const files = fs.readdirSync(appDir, { recursive: true });
    const largeFiles = files.filter(file => {
      const filePath = path.join(appDir, file);
      if (fs.statSync(filePath).isFile()) {
        const size = fs.statSync(filePath).size;
        return size > 100 * 1024; // 100KB
      }
      return false;
    });
    
    if (largeFiles.length > 0) {
      console.log(`  Found ${largeFiles.length} large files (>100KB):`);
      largeFiles.forEach(file => {
        const filePath = path.join(appDir, file);
        const size = fs.statSync(filePath).size;
        console.log(`    - ${file}: ${(size / 1024).toFixed(2)} KB`);
      });
    } else {
      console.log('  ✓ No large files found');
    }
  }

  console.log('\n✅ Performance analysis complete!');
}

// Run the performance check
if (import.meta.url === `file://${__filename}`) {
  checkPerformance();
}

export { checkPerformance };