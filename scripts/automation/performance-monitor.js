#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(__filename);
<<<<<<< HEAD

// // // // // // // console.log('📊 Starting continuous performance monitoring automation...');
// // // console.log('📊 Starting continuous performance monitoring automation...');

=======
// // // // // // // console.log('📊 Starting continuous performance monitoring automation...');
=======
// // // console.log('📊 Starting continuous performance monitoring automation...');
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
// Get automation interval from environment variable (default: 2 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 7200000; // 2 hours
async function runPerformanceMonitor() {
  try {
    // // // console.log(`📊 Running performance monitoring at ${new Date().toISOString()}`);
    // Build the project first
    // // // console.log('🏗️ Building project for performance analysis...');
    execSync('npm run build', { stdio: 'inherit' });
    // Check bundle size
    // // // console.log('📦 Analyzing bundle size...');
    try {
      execSync('node scripts/analyze-bundle.js', { stdio: 'inherit' });
      // // // console.log('✅ Bundle analysis completed');
    } catch (error) {
      // // // console.log('⚠️  Bundle analysis failed but continuing...');
    // Run Lighthouse performance tests if available
    // // // console.log('🔍 Running Lighthouse performance tests...');
    try {
      if (fs.existsSync('lighthouserc.json')) {
        execSync('npx lighthouse --config=lighthouserc.json', { stdio: 'inherit' });
        // // // console.log('✅ Lighthouse tests completed');
      } else {
        // // // console.log('ℹ️  No Lighthouse configuration found');
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    // // // // // // // console.log(`📊 Running performance monitoring at ${new Date().toISOString()}`);
    // Build the project first
    // // // // // // // console.log('🏗️ Building project for performance analysis...');
    execSync('npm run build', { stdio: 'inherit' });
    // Check bundle size
    // // // // // // // console.log('📦 Analyzing bundle size...');
    try {
      execSync('node scripts/analyze-bundle.js', { stdio: 'inherit' });
      // // // // // // // console.log('✅ Bundle analysis completed');
    } catch (error) {
      // // // // // // // console.log('⚠️  Bundle analysis failed but continuing...');
    }
    // Run Lighthouse performance tests if available
    // // // // // // // console.log('🔍 Running Lighthouse performance tests...');
    try {
      if (fs.existsSync('lighthouserc.json')) {
        execSync('npx lighthouse --config=lighthouserc.json', { stdio: 'inherit' });
        // // // // // // // console.log('✅ Lighthouse tests completed');
      } else {
        // // // // // // // console.log('ℹ️  No Lighthouse configuration found');
      }
    } catch (error) {
      // // // // // // // console.log('⚠️  Lighthouse tests failed but continuing...');
    }
    // Check for large files in build output
    // // // // // // // console.log('📁 Checking build output for large files...');
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    } catch (error) {
      // // // console.log('⚠️  Lighthouse tests failed but continuing...');
    // Check for large files in build output
    // // // console.log('📁 Checking build output for large files...');
    const distPath = path.join(process.cwd(), 'dist');
    if (fs.existsSync(distPath)) {
      const largeFiles = findLargeFiles(distPath);
      if (largeFiles.length > 0) {
        // // // console.log('⚠️  Large files found in build output:');
        largeFiles.forEach(file => {
          // // // console.log(`  - ${file.path}: ${(file.size / 1024 / 1024).toFixed(2)} MB`);
        });
      } else {
        // // // console.log('✅ No excessively large files found');
    // Check for unused dependencies
    // // // console.log('🔍 Checking for unused dependencies...');
    try {
      execSync('npx depcheck', { stdio: 'inherit' });
    } catch (error) {
      // // // console.log('ℹ️  Dependency check not available');
    // Generate performance report
        // // // // // // // console.log('⚠️  Large files found in build output:');
        largeFiles.forEach(file => {
          // // // // // // // console.log(`  - ${file.path}: ${(file.size / 1024 / 1024).toFixed(2)} MB`);
        });
      } else {
        // // // // // // // console.log('✅ No excessively large files found');
      }
    }
    // Check for unused dependencies
    // // // // // // // console.log('🔍 Checking for unused dependencies...');
    try {
      execSync('npx depcheck', { stdio: 'inherit' });
    } catch (error) {
      // // // // // // // console.log('ℹ️  Dependency check not available');
    }
    // Generate performance report
    // // // // // // // console.log('📊 Generating performance report...');
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  summary: 'Performance monitoring completed'
};
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    console.log('📊 Generating performance report...');
    const reportPath = path.join(process.cwd(), 'performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    // // // console.log(`✅ Performance report saved to ${reportPath}`);
    // // // console.log('✅ Continuous performance monitoring completed successfully');
  } catch (error) {
    // // // console.error('❌ Continuous performance monitoring failed:', error.message);
    // // // // // // // console.log(`✅ Performance report saved to ${reportPath}`);
    // // // // // // // console.log('✅ Continuous performance monitoring completed successfully');
  } catch (error) {
    // // // // // // // console.error('❌ Continuous performance monitoring failed:', error.message);
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    // Don't exit, just log the error and continue
function findLargeFiles(dir, maxSize = 1024 * 1024) { // 1MB default
  const largeFiles = [];
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (stat.isFile() && stat.size > maxSize) {
          largeFiles.push({
            path: path.relative(process.cwd(), fullPath),
            size: stat.size
          });
    } catch (error) {
      // Skip directories that can't be accessed
  scanDirectory(dir);
  return largeFiles.sort((a, b) => b.size - a.size);
function getDirectorySize(dir) {
  const totalSize = 0;
  function calculateSize(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          calculateSize(fullPath);
        } else if (stat.isFile()) {
          totalSize += stat.size;
    } catch (error) {
      // Skip directories that can't be accessed
  calculateSize(dir);
  return totalSize;
// Main continuous loop
async function runContinuous() {
  // // // // // // // console.log(`🚀 Starting continuous performance monitoring with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
<<<<<<< HEAD
  // // // console.log(`🚀 Starting continuous performance monitoring with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);

=======
=======
  // // // console.log(`🚀 Starting continuous performance monitoring with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  // Run initial performance monitoring
  await runPerformanceMonitor();
  // Set up continuous execution
  setInterval(async () => {
    await runPerformanceMonitor();
  }, AUTOMATION_INTERVAL);
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  // // // // // // // console.log(`✅ Continuous performance monitoring running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
}
// Handle graceful shutdown
process.on('SIGINT', () => {
  // // // // // // // console.log('🛑 Received SIGINT, shutting down gracefully...');
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  // // // console.log(`✅ Continuous performance monitoring running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
// Handle graceful shutdown
process.on('SIGINT', () => {
  // // // console.log('🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});
process.on('SIGTERM', () => {
  // // // // // // // console.log('🛑 Received SIGTERM, shutting down gracefully...');
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  // // // console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});
// Start the continuous performance monitor
runContinuous().catch(error => {
  // // // // // // // console.error('❌ Failed to start continuous performance monitoring:', error);
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  // // // console.error('❌ Failed to start continuous performance monitoring:', error);
  process.exit(1);
});
}}}}}}}}}}}}}}}}}}}