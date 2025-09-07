#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('⚡ Performance Monitor...\n');

// Function to monitor performance
function monitorPerformance() {
  console.log('📊 Performance Analysis\n');
  
  // Check bundle size
  console.log('📦 Bundle Analysis:');
  try {
    if (fs.existsSync('.next/static/chunks')) {
      const chunks = fs.readdirSync('.next/static/chunks');
      let totalSize = 0;
      
      chunks.forEach(chunk => {
        const chunkPath = path.join('.next/static/chunks', chunk);
        const stats = fs.statSync(chunkPath);
        totalSize += stats.size;
      });
      
      console.log(`   Total chunks: ${chunks.length}`);
      console.log(`   Total size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
    } else {
      console.log('   No build found. Run "npm run build" first.');
    }
  } catch (error) {
    console.log(`   Error analyzing bundle: ${error.message}`);
  }

  // Check for large files
  console.log('\n🔍 Large Files Check:');
  const findLargeFiles = (dir, maxSize = 1024 * 1024) => { // 1MB
    let largeFiles = [];
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && !item.startsWith('.') && !item.includes('node_modules')) {
          largeFiles = largeFiles.concat(findLargeFiles(fullPath, maxSize));
        } else if (stat.isFile() && stat.size > maxSize) {
          largeFiles.push({ path: fullPath, size: stat.size });
        }
      }
    } catch (error) {
      // Ignore errors
    }
    return largeFiles;
  };

  const largeFiles = findLargeFiles('.');
  if (largeFiles.length > 0) {
    console.log('   Large files found:');
    largeFiles.forEach(file => {
      console.log(`   - ${file.path}: ${(file.size / 1024 / 1024).toFixed(2)} MB`);
    });
  } else {
    console.log('   No large files found');
  }

  // Check for unused dependencies
  console.log('\n📋 Dependency Analysis:');
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const dependencies = Object.keys(packageJson.dependencies || {});
    const devDependencies = Object.keys(packageJson.devDependencies || {});
    
    console.log(`   Production dependencies: ${dependencies.length}`);
    console.log(`   Development dependencies: ${devDependencies.length}`);
    
    // Check for potentially unused dependencies
    const commonUnused = ['lodash', 'moment', 'jquery'];
    const unused = dependencies.filter(dep => commonUnused.includes(dep));
    if (unused.length > 0) {
      console.log(`   Potentially unused: ${unused.join(', ')}`);
    }
  } catch (error) {
    console.log(`   Error analyzing dependencies: ${error.message}`);
  }

  // Check build performance
  console.log('\n⏱️ Build Performance:');
  try {
    const startTime = Date.now();
    execSync('npm run build', { stdio: 'pipe' });
    const endTime = Date.now();
    const buildTime = (endTime - startTime) / 1000;
    console.log(`   Build time: ${buildTime.toFixed(2)} seconds`);
    
    if (buildTime > 60) {
      console.log('   ⚠️ Build time is quite long. Consider optimization.');
    } else if (buildTime > 30) {
      console.log('   ⚠️ Build time is moderate. Some optimization possible.');
    } else {
      console.log('   ✅ Build time is good.');
    }
  } catch (error) {
    console.log(`   Error measuring build time: ${error.message}`);
  }

  // Memory usage check
  console.log('\n💾 Memory Usage:');
  const memUsage = process.memoryUsage();
  console.log(`   RSS: ${(memUsage.rss / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Heap Used: ${(memUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Heap Total: ${(memUsage.heapTotal / 1024 / 1024).toFixed(2)} MB`);

  console.log('\n✅ Performance monitoring completed');
}

// Run performance monitoring
monitorPerformance();