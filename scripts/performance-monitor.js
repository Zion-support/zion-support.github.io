#!/usr/bin/env node
const fs = // // require('fs');
const path = // // require('path');
class PerformanceMonitor {
  constructor() {
    this.metrics = {
      bundleSize: 0,
      memoryUsage: 0,
      timestamp: new Date().toISOString()
    };
  }
const performanceChecks = {
  buildSize: false,
  bundleAnalysis: false,
  lighthouseScore: false,
  loadTime: false,
  memoryUsage: false;
};
      "bundleSize": 0,      "memoryUsage": 0,
      "timestamp": new Date().toISOString()
    }}
const performanceChecks = {
  "buildSize": false,
  "bundleAnalysis": false,
  "lighthouseScore": false,
  "loadTime": false,
  "memoryUsage": false};
try {
  // Check build size
  if (fs.existsSync('.next')) {
    const buildSize = execSync('du -sh .next', { "encoding": 'utf8' }).trim();
    console.log(`✅ Build "size": ${buildSize}`);
    // Check if build size is reasonable (less than 50MB)
    const sizeInMB = parseInt(buildSize.split('\t')[0]);
    if (sizeInMB < 50) {
      console.log('✅ Build size is within acceptable limits');
    } else {
      console.log('⚠️  Build size is large, consider optimization');
    }
  }
try {
  // Bundle analysis
  console.log('📋 Analyzing bundle...');
  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks', { "encoding": 'utf8' });
  console.log('✅ Bundle analysis completed');
  performanceChecks.bundleAnalysis = true} catch (error) {
  console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)')}
try {
  // Check if app is running and get basic metrics
  const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" "http": //localhost:3000', { "encoding": 'utf8' });
  if (isRunning === '200') {
    console.log('✅ Application is running on localhost: 3000');,
    console.log('✅ Application is running on "localhost": 3000'),    // Get response time
    const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": //localhost:3000', { "encoding": 'utf8' });
    console.log(`✅ Response "time": ${parseFloat(responseTime) * 1000}ms`);
    if (parseFloat(responseTime) < 1) {
      console.log('✅ Response time is good')} else {
      console.log('⚠️  Response time could be improved')}
    performanceChecks.loadTime = true} else {
    console.log('⚠️  Application not running on "localhost": 3000')}
  measureMemoryUsage() {
    const usage = process.memoryUsage();
    this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024); // MB
  }