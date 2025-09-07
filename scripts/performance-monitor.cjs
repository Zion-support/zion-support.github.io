#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 Performance Monitor Starting...');

const performanceChecks = [
  {
    name: 'Bundle Size Check',
    check: () => {
      const buildDir = '.next';
      if (!fs.existsSync(buildDir)) {
        console.log('⚠️  Build directory not found. Running build...');
        execSync('npm run build', { stdio: 'pipe' });
      }
      
      const staticDir = path.join(buildDir, 'static');
      if (fs.existsSync(staticDir)) {
        const files = fs.readdirSync(staticDir, { recursive: true });
        const totalSize = files.reduce((size, file) => {
          const filePath = path.join(staticDir, file);
          if (fs.statSync(filePath).isFile()) {
            return size + fs.statSync(filePath).size;
          }
          return size;
        }, 0);
        
        const sizeInMB = (totalSize / (1024 * 1024)).toFixed(2);
        console.log(`📦 Bundle size: ${sizeInMB}MB`);
        return totalSize < 50 * 1024 * 1024; // 50MB limit
      }
      return false;
    }
  },
  {
    name: 'Build Time Check',
    check: () => {
      const startTime = Date.now();
      try {
        execSync('npm run build', { stdio: 'pipe' });
        const endTime = Date.now();
        const buildTime = (endTime - startTime) / 1000;
        console.log(`⏱️  Build time: ${buildTime}s`);
        return buildTime < 120; // 2 minutes limit
      } catch (error) {
        return false;
      }
    }
  },
  {
    name: 'Memory Usage Check',
    check: () => {
      const memUsage = process.memoryUsage();
      const memInMB = (memUsage.heapUsed / 1024 / 1024).toFixed(2);
      console.log(`🧠 Memory usage: ${memInMB}MB`);
      return memUsage.heapUsed < 500 * 1024 * 1024; // 500MB limit
    }
  }
];

let passed = 0;
let failed = 0;

performanceChecks.forEach(check => {
  try {
    if (check.check()) {
      console.log(`✅ ${check.name}`);
      passed++;
    } else {
      console.log(`❌ ${check.name}`);
      failed++;
    }
  } catch (error) {
    console.log(`❌ ${check.name} - Error: ${error.message}`);
    failed++;
  }
});

console.log(`\n📊 Performance Results: ${passed} passed, ${failed} failed`);

if (failed === 0) {
  console.log('🎉 All performance checks passed!');
  process.exit(0);
} else {
  console.log('⚠️  Some performance checks failed. Please review the issues.');
  process.exit(1);
}