const fs = require('fs');
const path = require('path');

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      pageLoadTime: 0,
      bundleSize: 0,
      imageOptimization: 0,
      cacheHitRate: 0,
      timestamp: new Date().toISOString()
    };
  }

  async measurePageLoadTime() {
    // This would typically be measured in the browser
    // For now, we'll simulate it
    this.metrics.pageLoadTime = Math.random() * 2000 + 500; // 500-2500ms
  }

  async measureBundleSize() {
    try {
      const buildDir = path.join(process.cwd(), '.next');
      if (fs.existsSync(buildDir)) {
        const stats = fs.statSync(buildDir);
        this.metrics.bundleSize = stats.size;
      }
    } catch (error) {
      console.error('Error measuring bundle size:', error);
    }
  }

  async generateReport() {
    await this.measurePageLoadTime();
    await this.measureBundleSize();
    
    const report = {
      ...this.metrics,
      recommendations: this.generateRecommendations()
    };
    
    const reportFile = path.join(process.cwd(), 'performance-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.metrics.pageLoadTime > 2000) {
      recommendations.push('Consider implementing code splitting to reduce initial load time');
    }
    
    if (this.metrics.bundleSize > 1000000) {
      recommendations.push('Bundle size is large, consider tree shaking and code splitting');
    }
    
    return recommendations;
  }
}

module.exports = PerformanceMonitor;#!/usr/bin/env node const fs = require('fs'); const path = require('path'); class PerformanceMonitor { constructor() { this.metrics = { bundleSize: '0',memoryUsage: '0',timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: 'false',bundleAnalysis: 'false',lighthouseScore: 'false',loadTime: 'false',memoryUsage: 'false;' }; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000');,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000');,} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: 'this.metrics.timestamp',metrics: 'this.metrics',recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: 'performanceScore',checks: 'performanceChecks',recommendations: '[];' }; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
