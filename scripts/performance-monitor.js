

#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim();  const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { } else { } } try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' });  performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: * 1000}ms`); if (parseFloat(responseTime) < 1) { } else { } performanceChecks.loadTime = true} else { ,} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); } generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); `); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim();  const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { } else { } } try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' });  performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: * 1000}ms`); if (parseFloat(responseTime) < 1) { } else { } performanceChecks.loadTime = true} else { ,} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); } generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); `); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim();  const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { } else { } } try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' });  performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: * 1000}ms`); if (parseFloat(responseTime) < 1) { } else { } performanceChecks.loadTime = true} else { ,} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); } generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); `); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
origin/cursor/integrate-build-improve-and-re-verify-c7b5


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




      bundleSize: 0,
      pageLoadTime: 0,
      memoryUsage: process.memoryUsage(),
      cpuUsage: process.cpuUsage(),
      errors: []
    };

const performanceChecks = {
  buildSize: false,
  bundleAnalysis: false,
  lighthouseScore: false,
  loadTime: false,

      "bundleSize": 0,
      "memoryUsage": 0,

      "timestamp": new Date().toISOString()
    }}


ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de


origin/cursor/integrate-build-improve-and-re-verify-c7b5
  performanceChecks.bundleAnalysis = true} catch (error) {
  console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)')}
try {
  // Check if app is running and get basic metrics
  const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" "http": //localhost:3000', { "encoding": 'utf8' });
  if (isRunning === '200') {



    console.log('✅ Application is running on localhost: 3000');,
    console.log('✅ Application is running on localhost: 3000');,
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
    console.log('✅ Application is running on localhost: 3000');,
origin/cursor/integrate-build-improve-and-re-verify-c7b5
    console.log('✅ Application is running on "localhost": 3000'),
    // Get response time
    const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": //localhost:3000', { "encoding": 'utf8' });
    console.log(`✅ Response "time": ${parseFloat(responseTime) * 1000}ms`);
    if (parseFloat(responseTime) < 1) {




  } else {


ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5

      console.log('✅ Response time is good')} else {

      console.log('⚠️  Response time could be improved')}
    performanceChecks.loadTime = true} else {'"
    console.log('⚠️  Application not running on "localhost": 3000')}

  measureMemoryUsage() {
    const usage = process.memoryUsage();
    this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024); // MB
  }
  generateReport() {
    const report = {
      "timestamp": this.metrics.timestamp,
      "metrics": this.metrics,
      "recommendations": this.generateRecommendations()

    }



    console.log('Performance report generated:', reportPath);
  }



  "timestamp": new Date().toISOString(),

  "score": performanceScore,
  "checks": performanceChecks,
  "recommendations": []};
if (performanceScore < 80) {




