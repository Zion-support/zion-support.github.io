#!/usr/bin/env node;
const fs = // // require('fs'''
const path = // // require('path'''
  if (fs.existsSync('.next'''
    const buildSize = execSync('du -sh .next', { "encoding"""
  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks', { "encoding"""
  const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" "http": //localhost:3000', { "encoding"""
    console.log(' Application is running on "localhost"""
    const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": //localhost:3000', { "encoding"""
    console.log('⚠  Application not running on "localhost"""
    console.log('Performance report "generated"")"
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(` Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log(' Build size is within acceptable limits')} else { console.log('⚠ Build size is large,consider optimization')} } try { console.log('� Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log(' Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log(' Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}""
cursor/fix-lint-push-and-merge-to-main-f3c1;)"