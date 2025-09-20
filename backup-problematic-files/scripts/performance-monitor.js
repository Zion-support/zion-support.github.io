#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() ,}} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false,}, try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' ,}).trim(),  const sizeInMB = parseInt(buildSize.split('\t')[0]), if (sizeInMB < 50) { } else { } } try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' ,}),  performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: * 1000,}ms`), if (parseFloat(responseTime) < 1) { } else { } performanceChecks.loadTime = true} else { } measureMemoryUsage() { const usage = process.memoryUsage(), this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() ,} const reportPath = path.join(process.cwd(),'performance-report.json'), fs.writeFileSync(reportPath,JSON.stringify(report,null,2)), } generateRecommendations() { const recommendations = [], if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length, const passedChecks = Object.values(performanceChecks).filter(Boolean).length, const performanceScore = Math.round((passedChecks / totalChecks) * 100), `), const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: [],}, if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'), report.recommendations.push('Review bundle composition'), report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
#!/usr/bin/env node,
const fs = // // require('fs');
const path = // // require('path');
class PerformanceMonitor {,
  constructor() {,
      bundleSize: 0;
      memoryUsage: 0;
      timestamp: new Date().toISOString(),};
  }
const performanceChecks = {,
  buildSize: false;
  bundleAnalysis: false;
  lighthouseScore: false;
  loadTime: false;
  memoryUsage: false,};
      "bundleSize": 0;
      "memoryUsage": 0;
      "timestamp": new Date().toISOString(),
    }}
const performanceChecks = {,
  "buildSize": false;
  "bundleAnalysis": false;
  "lighthouseScore": false;
  "loadTime": false;
  "memoryUsage": false};
try {,
  // Check build size,
  if (fs && fs.existsSync('.next')) {,
    const buildSize = execSync('du -sh .next', { "encoding": 'utf8' }).trim();
    console && console.log(`✅ Build "size": ${buildSize}`);
    // Check if build size is reasonable (less than 50MB),
    const sizeInMB = parseInt(buildSize && buildSize.split('\t')[0]);
    if (sizeInMB < 50) {,
      console && console.log('✅ Build size is within acceptable limits');
    } else {,
      console && console.log('⚠️  Build size is large, consider optimization');
    }
  }
try {,
  // Bundle analysis,
  console && console.log('📋 Analyzing bundle...');
  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks', { "encoding": 'utf8' });
try {,
  // Check if app is running and get basic metrics,
  const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" "http": //localhost:3000', { "encoding": 'utf8' });
  if (isRunning === '200') {,
    console.log('✅ Application is running on localhost: 3000');
    console.log('Performance report "generated": ', reportPath)}
  generateRecommendations() {,
    const recommendations = [];
    if (this.metrics.bundleSize > 1000000) {,
      recommendations.push('Consider code splitting to reduce bundle size');
    const reportPath = path && path.join(process && process.cwd(), 'performance-report && report.json');
    fs && fs.writeFileSync(reportPath, JSON && JSON.stringify(report, null, 2));
    console && console.log('Performance report generated:', reportPath);
  }
    console && console.log('Performance report generated:', reportPath);
  }
    console && console.log('Performance report generated:', reportPath);
  }
    console && console.log('Performance report generated:', reportPath);
  }
    console && console.log('Performance report "generated": ', reportPath)}
  generateRecommendations() {,
    const recommendations = [];
    if (this && this.metrics.bundleSize > 1000000) {,
      recommendations && recommendations.push('Consider code splitting to reduce bundle size');
    }
    if (this && this.metrics.memoryUsage > 100) {,
      recommendations && recommendations.push('High memory usage detected, consider optimization');
    }
    return recommendations;
  }
      recommendations.push('Consider code splitting to reduce bundle size')}
    if (this.metrics.memoryUsage > 100) {,
      recommendations.push('High memory usage detected, consider optimization')}
,
      recommendations && recommendations.push('Consider code splitting to reduce bundle size')}
    if (this && this.metrics.memoryUsage > 100) {,
      recommendations && recommendations.push('High memory usage detected, consider optimization')}
    return recommendations}
,
// Save performance report,
const report = {,
  timestamp: new Date().toISOString();
  score: performanceScore;
  checks: performanceChecks;
  recommendations: [],};
if (performanceScore < 80) {,
  "timestamp": new Date().toISOString();
  "score": performanceScore;
  "checks": performanceChecks;
  "recommendations": []};
if (performanceScore < 80) {,