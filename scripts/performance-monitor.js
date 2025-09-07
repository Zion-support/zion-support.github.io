#!/usr/bin/env node

/**
 * Performance Monitor Script
 * Monitors application performance metrics
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('📊 Starting performance monitoring...');

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      bundleSize: 0,
      pageLoadTime: 0,
      memoryUsage: process.memoryUsage(),
      cpuUsage: process.cpuUsage(),
      errors: []
    };
  }
  memoryUsage: false;
};
    this.metrics = {
      "bundleSize": 0,
      "memoryUsage": 0,
      "timestamp": new Date().toISOString()
    }}
const performanceChecks = {
  "buildSize": false,
  "bundleAnalysis": false,
  "lighthouseScore": false,
  "loadTime": false,
  "memoryUsage": false};
  memoryUsage: false
}
origin/cursor/automate-test-fix-improve-and-merge-code-a7a7
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
  performanceChecks.bundleAnalysis = true;
} catch (error) {

  async measureBuildTime() {
    try {
      console.log('🔨 Measuring build time...');
      const startTime = Date.now();
      
      // Run build command
      execSync('npm run build', { stdio: 'pipe' });
      
      this.metrics.buildTime = Date.now() - startTime;
      console.log(`✅ Build completed in ${this.metrics.buildTime}ms`);
      
    } catch (error) {
      this.metrics.errors.push(`Build failed: ${error.message}`);
      console.error('❌ Build measurement failed:', error.message);
    }
  }

  async measureBundleSize() {
    try {
      console.log('📦 Measuring bundle size...');
      
      const buildDir = path.join(__dirname, '..', '.next');
      if (!fs.existsSync(buildDir)) {
        throw new Error('Build directory not found');
      }
      
      const bundleSize = this.getDirectorySize(buildDir);
      this.metrics.bundleSize = bundleSize;
      
      console.log(`✅ Bundle size: ${(bundleSize / 1024 / 1024).toFixed(2)} MB`);
      
    } catch (error) {
      this.metrics.errors.push(`Bundle size measurement failed: ${error.message}`);
      console.error('❌ Bundle size measurement failed:', error.message);
    }
  }

  async measurePageLoadTime() {
    try {
      console.log('⚡ Measuring page load time...');
      
      // Start the development server
      const serverProcess = execSync('npm run dev', { 
        stdio: 'pipe',
        timeout: 30000 
      });
      
      // Simulate page load measurement
      const startTime = Date.now();
      
      // Wait for server to be ready (simplified)
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      this.metrics.pageLoadTime = Date.now() - startTime;
      console.log(`✅ Page load time: ${this.metrics.pageLoadTime}ms`);
      
    } catch (error) {
      this.metrics.errors.push(`Page load measurement failed: ${error.message}`);
      console.error('❌ Page load measurement failed:', error.message);
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    
    if (!fs.existsSync(dirPath)) {
      return 0;
    }
    
    const files = fs.readdirSync(dirPath, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dirPath, file.name);
      
      if (file.isDirectory()) {
        totalSize += this.getDirectorySize(fullPath);
      } else {
        const stats = fs.statSync(fullPath);
        totalSize += stats.size;
      }
    }
    
    return totalSize;
  }
  console.log('✅ Bundle analysis completed');
  performanceChecks.bundleAnalysis = true;
} catch (error) {
  console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)');
  console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)');
}
  performanceChecks.bundleAnalysis = true;
} catch (error) {
  console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)');

  console.log('✅ Bundle analysis completed');
  performanceChecks.bundleAnalysis = true} catch (error) {
  console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)')}
try {
  // Check if app is running and get basic metrics
  const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" "http": //localhost:3000', { "encoding": 'utf8' });
  if (isRunning === '200') {
    console.log('✅ Application is running on "localhost": 3000'),
    // Get response time
    const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": //localhost:3000', { "encoding": 'utf8' });
    console.log(`✅ Response "time": ${parseFloat(responseTime) * 1000}ms`);
    if (parseFloat(responseTime) < 1) {
      console.log('✅ Response time is good');
    } else {
      console.log('⚠️  Response time could be improved');
    }
    performanceChecks.loadTime = true;
  } else {ursor/automate-test-improve-and-merge-code-646c;
      console.log('✅ Response time is good')} else {console.log('⚠️  Response time could be improved')}
    performanceChecks.loadTime = true} else {console.log('⚠️  Application not running on "localhost": 3000')}
  measureMemoryUsage() {const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)// MB;
  }
  generateReport() {const report = {"timestamp": this.metrics.timestamp,"metrics": this.metrics,"recommendations": this.generateRecommendations()}const reportPath = path.join(process.cwd(), 'performance-report.json')fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))console.log('Performance report generated:', reportPath)}const reportPath = path.join(process.cwd(), 'performance-report.json')fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))console.log('Performance report generated:', reportPath)}ursor/automate-test-improve-and-merge-code-646c;
  generateReport() {
    const report = {
      "timestamp": this.metrics.timestamp,
      "metrics": this.metrics,
      "recommendations": this.generateRecommendations()
    }
    const reportPath = path.join(process.cwd(), 'performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log('Performance report "generated": ', reportPath)}
  generateRecommendations() {const recommendations = [];
    if (this.metrics.bundleSize > 1000000) {recommendations.push('Consider code splitting to reduce bundle size')}
    if (this.metrics.memoryUsage > 100) {recommendations.push('High memory usage detected, consider optimization')}
    return recommendations;
  }ursor/automate-test-improve-and-merge-code-646c;
      recommendations.push('Consider code splitting to reduce bundle size')}
    if (this.metrics.memoryUsage > 100) {recommendations.push('High memory usage detected, consider optimization')}
    return recommendations}
}// Generate performance report;
const totalChecks = Object.keys(performanceChecks).length;
const passedChecks = Object.values(performanceChecks).filter(Boolean).length;
const performanceScore = Math.round((passedChecks / totalChecks) * 100)console.log(`\n📊 Performance "Score": ${performanceScore}% (${passedChecks}/${totalChecks})`)// Save performance report;
const report = {timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: [];
}recommendations: [];
}if (performanceScore < 80) {module.exports = PerformanceMonitor;ursor/automate-test-improve-and-merge-code-646c;
  "timestamp": new Date().toISOString(),"score": performanceScore,"checks": performanceChecks,"recommendations": []}if (performanceScore < 80) {#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim()console.log(`✅ Build size: ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json')fs.writeFileSync(reportPath,JSON.stringify(report,null,2))console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100)console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`)const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size')report.recommendations.push('Review bundle composition')report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim()console.log(`✅ Build size: ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json')fs.writeFileSync(reportPath,JSON.stringify(report,null,2))console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100)console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`)const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size')report.recommendations.push('Review bundle composition')report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
ursor/automate-test-improve-and-merge-code-646c;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim()console.log(`✅ Build size: ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json')fs.writeFileSync(reportPath,JSON.stringify(report,null,2))console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100)console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`)const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size')report.recommendations.push('Review bundle composition')report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim()console.log(`✅ Build size: ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json')fs.writeFileSync(reportPath,JSON.stringify(report,null,2))console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100)console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`)const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size')report.recommendations.push('Review bundle composition')report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim()console.log(`✅ Build size: ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json')fs.writeFileSync(reportPath,JSON.stringify(report,null,2))console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100)console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`)const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size')report.recommendations.push('Review bundle composition')report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim()console.log(`✅ Build size: ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json')fs.writeFileSync(reportPath,JSON.stringify(report,null,2))console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100)console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`)const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size')report.recommendations.push('Review bundle composition')report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;report.recommendations.push('Consider optimizing build size')report.recommendations.push('Review bundle composition')report.recommendations.push('Implement code splitting')}
module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim()console.log(`✅ Build size: ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json')fs.writeFileSync(reportPath,JSON.stringify(report,null,2))console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100)console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`)const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size')report.recommendations.push('Review bundle composition')report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim()console.log(`✅ Build size: ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json')fs.writeFileSync(reportPath,JSON.stringify(report,null,2))console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100)console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`)const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size')report.recommendations.push('Review bundle composition')report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim()console.log(`✅ Build size: ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json')fs.writeFileSync(reportPath,JSON.stringify(report,null,2))console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100)console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`)const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size')report.recommendations.push('Review bundle composition')report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;ursor/automate-test-improve-and-merge-code-646c;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim()console.log(`✅ Build size: ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json')fs.writeFileSync(reportPath,JSON.stringify(report,null,2))console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100)console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`)const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size')report.recommendations.push('Review bundle composition')report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
const performanceScore = Math.round((passedChecks / totalChecks) * 100);
console.log(`\n📊 Performance "Score": ${performanceScore}% (${passedChecks}/${totalChecks})`);
// Save performance report
const report = {
  timestamp: new Date().toISOString(),
  score: performanceScore,
  checks: performanceChecks,
  recommendations: [];
};
  recommendations: [];
};
if (performanceScore < 80) {

module.exports = PerformanceMonitor;
  "timestamp": new Date().toISOString(),
  "score": performanceScore,
  "checks": performanceChecks,
  "recommendations": []};
if (performanceScore < 80) {
  report.recommendations.push('Consider optimizing build size');
  report.recommendations.push('Review bundle composition');
  report.recommendations.push('Implement code splitting')}
module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000')} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;

  generateReport() {
    const report = {
      ...this.metrics,
      recommendations: this.generateRecommendations()
    };
    
    const reportPath = path.join(__dirname, '..', 'performance-monitor-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('📄 Performance report saved to performance-monitor-report.json');
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.metrics.buildTime > 60000) {
      recommendations.push('Build time is high - consider code splitting and lazy loading');
    }
    
    if (this.metrics.bundleSize > 5 * 1024 * 1024) { // 5MB
      recommendations.push('Bundle size is large - consider tree shaking and removing unused code');
    }
    
    if (this.metrics.pageLoadTime > 3000) {
      recommendations.push('Page load time is slow - optimize images and implement caching');
    }
    
    if (this.metrics.memoryUsage.heapUsed > 100 * 1024 * 1024) { // 100MB
      recommendations.push('High memory usage - check for memory leaks');
    }
    
    return recommendations;
  }

  async run() {
    try {
      await this.measureBuildTime();
      await this.measureBundleSize();
      await this.measurePageLoadTime();
      
      const report = this.generateReport();
      
      console.log('\n📊 Performance Monitoring Summary:');
      console.log(`Build Time: ${this.metrics.buildTime}ms`);
      console.log(`Bundle Size: ${(this.metrics.bundleSize / 1024 / 1024).toFixed(2)} MB`);
      console.log(`Page Load Time: ${this.metrics.pageLoadTime}ms`);
      console.log(`Memory Usage: ${(this.metrics.memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`);
      console.log(`Errors: ${this.metrics.errors.length}`);
      
      if (report.recommendations.length > 0) {
        console.log('\n💡 Recommendations:');
        report.recommendations.forEach((rec, index) => {
          console.log(`${index + 1}. ${rec}`);
        });
      }
      
    } catch (error) {
      console.error('❌ Performance monitoring failed:', error.message);
      process.exit(1);
    }
  }
}

async function main() {
  const monitor = new PerformanceMonitor();
  await monitor.run();
}

if (require.main === module) {
  main();
}

module.exports = PerformanceMonitor;
