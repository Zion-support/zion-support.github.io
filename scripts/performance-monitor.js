<<<<<<< HEAD
=======
<<<<<<< HEAD
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim();  const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { } else { } } try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' });  performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: * 1000}ms`); if (parseFloat(responseTime) < 1) { } else { } performanceChecks.loadTime = true} else { ,} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); } generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); `); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;

=======


<<<<<<< HEAD
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim();  const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { } else { } } try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' });  performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: * 1000}ms`); if (parseFloat(responseTime) < 1) { } else { } performanceChecks.loadTime = true} else { ,} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); } generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); `); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this && this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs && fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim();  const sizeInMB = parseInt(buildSize && buildSize.split('\t')[0]); if (sizeInMB < 50) { } else { } } try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' });  performanceChecks && performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: * 1000}ms`); if (parseFloat(responseTime) < 1) { } else { } performanceChecks && performanceChecks.loadTime = true} else { ,} measureMemoryUsage() { const usage = process && process.memoryUsage(); this && this.metrics.memoryUsage = Math && Math.round(usage && usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this && this.metrics.timestamp,metrics: this && this.metrics,recommendations: this && this.generateRecommendations() } const reportPath = path && path.join(process && process.cwd(),'performance-report && report.json'); fs && fs.writeFileSync(reportPath,JSON && JSON.stringify(report,null,2)); } generateRecommendations() { const recommendations = []; if (this && this.metrics.bundleSize > 1000000) { recommendations && recommendations.push('Consider code splitting to reduce bundle size')} if (this && this.metrics.memoryUsage > 100) { recommendations && recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object && Object.keys(performanceChecks).length; const passedChecks = Object && Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math && Math.round((passedChecks / totalChecks) * 100); `); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report && report.recommendations.push('Consider optimizing build size'); report && report.recommendations.push('Review bundle composition'); report && report.recommendations.push('Implement code splitting')} module && module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this && this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs && fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim();  const sizeInMB = parseInt(buildSize && buildSize.split('\t')[0]); if (sizeInMB < 50) { } else { } } try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' });  performanceChecks && performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: * 1000}ms`); if (parseFloat(responseTime) < 1) { } else { } performanceChecks && performanceChecks.loadTime = true} else { ,} measureMemoryUsage() { const usage = process && process.memoryUsage(); this && this.metrics.memoryUsage = Math && Math.round(usage && usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this && this.metrics.timestamp,metrics: this && this.metrics,recommendations: this && this.generateRecommendations() } const reportPath = path && path.join(process && process.cwd(),'performance-report && report.json'); fs && fs.writeFileSync(reportPath,JSON && JSON.stringify(report,null,2)); } generateRecommendations() { const recommendations = []; if (this && this.metrics.bundleSize > 1000000) { recommendations && recommendations.push('Consider code splitting to reduce bundle size')} if (this && this.metrics.memoryUsage > 100) { recommendations && recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object && Object.keys(performanceChecks).length; const passedChecks = Object && Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math && Math.round((passedChecks / totalChecks) * 100); `); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report && report.recommendations.push('Consider optimizing build size'); report && report.recommendations.push('Review bundle composition'); report && report.recommendations.push('Implement code splitting')} module && module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this && this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs && fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim();  const sizeInMB = parseInt(buildSize && buildSize.split('\t')[0]); if (sizeInMB < 50) { } else { } } try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' });  performanceChecks && performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: * 1000}ms`); if (parseFloat(responseTime) < 1) { } else { } performanceChecks && performanceChecks.loadTime = true} else { ,} measureMemoryUsage() { const usage = process && process.memoryUsage(); this && this.metrics.memoryUsage = Math && Math.round(usage && usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this && this.metrics.timestamp,metrics: this && this.metrics,recommendations: this && this.generateRecommendations() } const reportPath = path && path.join(process && process.cwd(),'performance-report && report.json'); fs && fs.writeFileSync(reportPath,JSON && JSON.stringify(report,null,2)); } generateRecommendations() { const recommendations = []; if (this && this.metrics.bundleSize > 1000000) { recommendations && recommendations.push('Consider code splitting to reduce bundle size')} if (this && this.metrics.memoryUsage > 100) { recommendations && recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object && Object.keys(performanceChecks).length; const passedChecks = Object && Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math && Math.round((passedChecks / totalChecks) * 100); `); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report && report.recommendations.push('Consider optimizing build size'); report && report.recommendations.push('Review bundle composition'); report && report.recommendations.push('Implement code splitting')} module && module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this && this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs && fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim();  const sizeInMB = parseInt(buildSize && buildSize.split('\t')[0]); if (sizeInMB < 50) { } else { } } try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' });  performanceChecks && performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: * 1000}ms`); if (parseFloat(responseTime) < 1) { } else { } performanceChecks && performanceChecks.loadTime = true} else { ,} measureMemoryUsage() { const usage = process && process.memoryUsage(); this && this.metrics.memoryUsage = Math && Math.round(usage && usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this && this.metrics.timestamp,metrics: this && this.metrics,recommendations: this && this.generateRecommendations() } const reportPath = path && path.join(process && process.cwd(),'performance-report && report.json'); fs && fs.writeFileSync(reportPath,JSON && JSON.stringify(report,null,2)); } generateRecommendations() { const recommendations = []; if (this && this.metrics.bundleSize > 1000000) { recommendations && recommendations.push('Consider code splitting to reduce bundle size')} if (this && this.metrics.memoryUsage > 100) { recommendations && recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object && Object.keys(performanceChecks).length; const passedChecks = Object && Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math && Math.round((passedChecks / totalChecks) * 100); `); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report && report.recommendations.push('Consider optimizing build size'); report && report.recommendations.push('Review bundle composition'); report && report.recommendations.push('Implement code splitting')} module && module.exports = PerformanceMonitor;
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim();  const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { } else { } } try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' });  performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: * 1000}ms`); if (parseFloat(responseTime) < 1) { } else { } performanceChecks.loadTime = true} else { ,} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); } generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); `); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim();  const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { } else { } } try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' });  performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: * 1000}ms`); if (parseFloat(responseTime) < 1) { } else { } performanceChecks.loadTime = true} else { ,} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); } generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); `); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim();  const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { } else { } } try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' });  performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: * 1000}ms`); if (parseFloat(responseTime) < 1) { } else { } performanceChecks.loadTime = true} else { ,} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); } generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); `); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
    this.metrics = {
      timestamp: new Date().toISOString(),
      buildTime: 0,
=======
<<<<<<< HEAD
    this.metrics = {
=======

<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    this && this.metrics = {


<<<<<<< HEAD
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
      bundleSize: 0,
      pageLoadTime: 0,
      memoryUsage: process.memoryUsage(),
      cpuUsage: process.cpuUsage(),
      errors: []
    };
<<<<<<< HEAD
=======
const performanceChecks = {
  buildSize: false,
  bundleAnalysis: false,
  lighthouseScore: false,
  loadTime: false,

      "bundleSize": 0,
      "memoryUsage": 0,

      "timestamp": new Date().toISOString()
    }}
<<<<<<< HEAD
;
=======
const performanceChecks = {"
>>>>>>> origin/chore/fix-lint-and-merge
  "buildSize": false,"
  "bundleAnalysis": false,"
  "lighthouseScore": false,"
  "loadTime": false,"
  "memoryUsage": false};

  memoryUsage: false
}
origin/cursor/automate-test-fix-improve-and-merge-code-a7a7

  memoryUsage: false;
};

<<<<<<< HEAD
    this.metrics = {

    this.metrics = {

=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      "bundleSize": 0,
      "memoryUsage": 0,
      "timestamp": new Date().toISOString()

      "bundleSize": 0,""
      "memoryUsage": 0,""
      "timestamp": new Date().toISOString()"
    }}
const performanceChecks = {
  "buildSize": false,
  "bundleAnalysis": false,
  "lighthouseScore": false,
  "loadTime": false,
  "memoryUsage": false};

try {
<<<<<<< HEAD
  // TODO: Implement
  // Check build size;"
  if (fs.existsSync('.next')) {

    console.log(`✅ Build "size": ${buildSize}`);
    // Check if build size is reasonable (less than 50MB)'

    const sizeInMB = parseInt(buildSize.split('\t')[0]);
    if (sizeInMB < 50) {'
      console.log('✅ Build size is within acceptable limits');

  console.log('📋 Analyzing bundle...');

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks', { "encoding": 'utf8' });
<<<<<<< HEAD
  console.log('✅ Bundle analysis completed');
ursor/fix-syntax-push-and-merge-to-main-40de
  performanceChecks.bundleAnalysis = true;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  console.log('✅ Bundle analysis completed');

  performanceChecks.bundleAnalysis = true;
} catch (error) {
<<<<<<< HEAD

      console.warn('⚠️  Could not collect system metrics:', error.message);
    }
>>>>>>> merged-prs-20250907-203621
  }

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

<<<<<<< HEAD
  generateReport() {
    const report = {
      ...this.metrics,
      recommendations: this.generateRecommendations()
    };
    
    const reportPath = path.join(__dirname, '..', 'performance-monitor-report.json');
=======
}

=======
  console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)');
}


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  performanceChecks.bundleAnalysis = true;
} catch (error) {
  console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)');

<<<<<<< HEAD
  performanceChecks.bundleAnalysis = true} catch (error) {
  console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)')}
  // TODO: Implement
  // Check if app is running and get basic metrics;
  const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" "http": //localhost:3000', { "encoding": 'utf8' });
  if (isRunning === '200') {

    console.log('✅ Application is running on localhost: 3000');,

    console.log('✅ Application is running on "localhost": 3000'),
    // Get response time'"
    const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": //localhost:3000', { "encoding": 'utf8' });"`
    console.log(`✅ Response "time": ${parseFloat(responseTime) * 1000}ms`);

      console.log('✅ Response time is good');

    } else {

      console.log('⚠️  Response time could be improved');
    performanceChecks.loadTime = true;

=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
  performanceChecks.bundleAnalysis = true} catch (error) {
  console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)')}
try {
  // Check if app is running and get basic metrics
  const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" "http": //localhost:3000', { "encoding": 'utf8' });
  if (isRunning === '200') {


<<<<<<< HEAD

    console.log('✅ Application is running on localhost: 3000');,
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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


<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
      console.log('✅ Response time is good');
    } else {
      console.log('⚠️  Response time could be improved');
    }
    performanceChecks.loadTime = true;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  } else {
<<<<<<< HEAD
    console.log('⚠️  Application not running on localhost: 3000');,
  }

<<<<<<< HEAD
=======

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      console.log('✅ Response time is good')} else {

      console.log('⚠️  Response time could be improved')}
    performanceChecks.loadTime = true} else {'"
    console.log('⚠️  Application not running on "localhost": 3000')}
<<<<<<< HEAD
  measureMemoryUsage() {}
    const usage = process.memoryUsage();
    this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024); // MB;
  }
  generateReport() {}
    const report = {"
      "timestamp": this.metrics.timestamp,"
      "metrics": this.metrics,"

      "recommendations": this.generateRecommendations()

=======
  measureMemoryUsage() {
    const usage = process.memoryUsage();
    this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024); // MB
  }
  generateReport() {
    const report = {
      "timestamp": this.metrics.timestamp,
      "metrics": this.metrics,
      "recommendations": this.generateRecommendations()
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
<<<<<<< HEAD
    const reportPath = path.join(process.cwd(), 'performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    console.log('Performance report generated:', reportPath);
  }

<<<<<<< HEAD
    const reportPath = path.join(process.cwd(), 'performance-report.json');
>>>>>>> merged-prs-20250907-203621
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

<<<<<<< HEAD
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
=======
=======
    console.log('Performance report generated:', reportPath);
  }
    console.log('Performance report generated:', reportPath);
  }
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
    console.log('Performance report generated:', reportPath);
  }
origin/cursor/integrate-build-improve-and-re-verify-c7b5
    console.log('Performance report "generated": ', reportPath)}
  generateRecommendations() {
    const recommendations = [];
    if (this.metrics.bundleSize > 1000000) {

ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
      recommendations.push('Consider code splitting to reduce bundle size');
    }
    if (this.metrics.memoryUsage > 100) {
      recommendations.push('High memory usage detected, consider optimization');
    }
    return recommendations;
  }


<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      recommendations.push('Consider code splitting to reduce bundle size')}

    if (this.metrics.memoryUsage > 100) {
      recommendations.push('High memory usage detected, consider optimization')}
    return recommendations}
<<<<<<< HEAD
}// Generate performance report;

const performanceScore = Math.round((passedChecks / totalChecks) * 100)console.log(`\n📊 Performance "Score": ${performanceScore}% (${passedChecks}/${totalChecks})`)// Save performance report;`
const report = {"timestamp": new Date().toISOString(),"score": performanceScore,"checks": performanceChecks,"recommendations": [];
}"recommendations": [];
}if (performanceScore < 80) {module.exports = PerformanceMonitor;ursor/automate-test-improve-and-merge-code-646c;
  "timestamp": new Date().toISOString(),"score": performanceScore,"checks": performanceChecks,"recommendations": []}if (performanceScore < 80) {#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { "bundleSize": 0,"memoryUsage": 0,"timestamp": new Date().toISOString() ,"
}

}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ "encoding": 'utf8' }).trim()console.log(`✅ Build "size": ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits','} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ "encoding": 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_cod,"
}" "http": if (isRunning === '200') { console.log('✅ Application is running on "localhost": 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": console.log(`✅ Response "time": ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on "localhost": 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,'} generateReport() { const report = { "timestamp": this.metrics.timestamp,"metrics": this.metrics,"recommendations": this.generateRecommendations();
}

const reportPath = path.join(process.cwd(),'performance-report.json')fs.writeFileSync(reportPath,JSON.stringify(report,null,2))console.log('Performance report "generated":',reportPath)} generateRecommendations() {;'
  }

=======

// Generate performance report
<<<<<<< HEAD

const totalChecks = Object.keys(performanceChecks).length;
const passedChecks = Object.values(performanceChecks).filter(Boolean).length;
const performanceScore = Math.round((passedChecks / totalChecks) * 100);"`
console.log(`\n📊 Performance "Score": ${performanceScore}% (${passedChecks}/${totalChecks})`);
>>>>>>> origin/chore/fix-lint-and-merge

=======
const totalChecks = Object.keys(performanceChecks).length;
const passedChecks = Object.values(performanceChecks).filter(Boolean).length;
const performanceScore = Math.round((passedChecks / totalChecks) * 100);
console.log(`\n📊 Performance "Score": ${performanceScore}% (${passedChecks}/${totalChecks})`);
// Save performance report
const report = {

ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  timestamp: new Date().toISOString(),

<<<<<<< HEAD
}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ "encoding": 'utf8' }).trim()console.log(`✅ Build "size": ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits','} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ "encoding": 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_cod,"
}" "http": if (isRunning === '200') { console.log('✅ Application is running on "localhost": 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": console.log(`✅ Response "time": ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on "localhost": 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,'} generateReport() { const report = { "timestamp": this.metrics.timestamp,"metrics": this.metrics,"recommendations": this.generateRecommendations();
>>>>>>> merged-prs-20250907-203621
}

async function main() {
  const monitor = new PerformanceMonitor();
  await monitor.run();
}

if (require.main === module) {
  main();
}

<<<<<<< HEAD
module.exports = PerformanceMonitor;
=======
  }


} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { "bundleSize": 0,"memoryUsage": 0,"timestamp": new Date().toISOString() 
}

}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ "encoding": 'utf8' }).trim()console.log(`✅ Build "size": ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits','} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ "encoding": 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_cod,"
}" "http": if (isRunning === '200') { console.log('✅ Application is running on "localhost": 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": console.log(`✅ Response "time": ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on "localhost": 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,'} generateReport() { const report = { "timestamp": this.metrics.timestamp,"metrics": this.metrics,"recommendations": this.generateRecommendations();
}

  }


} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { "bundleSize": 0,"memoryUsage": 0,"timestamp": new Date().toISOString() 
}

}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ "encoding": 'utf8' }).trim()console.log(`✅ Build "size": ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits','} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ "encoding": 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_cod,"
}" "http": if (isRunning === '200') { console.log('✅ Application is running on "localhost": 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": console.log(`✅ Response "time": ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on "localhost": 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,'} generateReport() { const report = { "timestamp": this.metrics.timestamp,"metrics": this.metrics,"recommendations": this.generateRecommendations();
}

  }


} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { "bundleSize": 0,"memoryUsage": 0,"timestamp": new Date().toISOString() 
}

}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ "encoding": 'utf8' }).trim()console.log(`✅ Build "size": ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits','} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ "encoding": 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_cod,"
}" "http": if (isRunning === '200') { console.log('✅ Application is running on "localhost": 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": console.log(`✅ Response "time": ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on "localhost": 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,'} generateReport() { const report = { "timestamp": this.metrics.timestamp,"metrics": this.metrics,"recommendations": this.generateRecommendations();
}

  }


} module.exports = PerformanceMonitor;report.recommendations.push('Consider optimizing build size')report.recommendations.push('Review bundle composition')report.recommendations.push('Implement code splitting')}'
=======
  score: performanceScore,
  checks: performanceChecks,

if (performanceScore < 80) {
<<<<<<< HEAD
  report.recommendations.push('Consider optimizing build size');
  report.recommendations.push('Review bundle composition');
  report.recommendations.push('Implement code splitting');
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/chore/fix-lint-and-merge
module.exports = PerformanceMonitor;

<<<<<<< HEAD
<<<<<<< HEAD
}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ "encoding": 'utf8' }).trim()console.log(`✅ Build "size": ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits','} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ "encoding": 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_cod,"
}" "http": if (isRunning === '200') { console.log('✅ Application is running on "localhost": 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": console.log(`✅ Response "time": ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on "localhost": 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,'} generateReport() { const report = { "timestamp": this.metrics.timestamp,"metrics": this.metrics,"recommendations": this.generateRecommendations();
}

  }


} module.exports = PerformanceMonitor;#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { "bundleSize": 0,"memoryUsage": 0,"timestamp": new Date().toISOString() 
}

}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ "encoding": 'utf8' }).trim()console.log(`✅ Build "size": ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits','} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ "encoding": 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_cod,"
}" "http": if (isRunning === '200') { console.log('✅ Application is running on "localhost": 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": console.log(`✅ Response "time": ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on "localhost": 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,'} generateReport() { const report = { "timestamp": this.metrics.timestamp,"metrics": this.metrics,"recommendations": this.generateRecommendations();
}

  }


} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { "bundleSize": 0,"memoryUsage": 0,"timestamp": new Date().toISOString() 
}

}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ "encoding": 'utf8' }).trim()console.log(`✅ Build "size": ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits','} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ "encoding": 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_cod,"
}" "http": if (isRunning === '200') { console.log('✅ Application is running on "localhost": 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": console.log(`✅ Response "time": ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on "localhost": 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,'} generateReport() { const report = { "timestamp": this.metrics.timestamp,"metrics": this.metrics,"recommendations": this.generateRecommendations();
}

  }


} module.exports = PerformanceMonitor;ursor/automate-test-improve-and-merge-code-646c;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { "bundleSize": 0,"memoryUsage": 0,"timestamp": new Date().toISOString() 
}

}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ "encoding": 'utf8' }).trim()console.log(`✅ Build "size": ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits','} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ "encoding": 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_cod,"
}" "http": if (isRunning === '200') { console.log('✅ Application is running on "localhost": 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": console.log(`✅ Response "time": ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on "localhost": 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,'} generateReport() { const report = { "timestamp": this.metrics.timestamp,"metrics": this.metrics,"recommendations": this.generateRecommendations();
}

  }


} module.exports = PerformanceMonitor;

const performanceScore = Math.round((passedChecks / totalChecks) * 100);
console.log(`\n📊 Performance "Score": ${performanceScore}% (${passedChecks}/${totalChecks})`);`// Save performance report,
const report = {
  }
=======
  report && report.recommendations.push('Consider optimizing build size');
  report && report.recommendations.push('Review bundle composition');
  report && report.recommendations.push('Implement code splitting');
}
module && module.exports = PerformanceMonitor;
<<<<<<< HEAD
}
module.exports = PerformanceMonitor;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

module.exports = PerformanceMonitor;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/scripts/performance-monitor.js
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  "timestamp": new Date().toISOString(),
=======
>>>>>>> origin/chore/fix-lint-and-merge
  "score": performanceScore,
  "checks": performanceChecks,
  "recommendations": []};
if (performanceScore < 80) {
<<<<<<< HEAD

  report.recommendations.push('Consider optimizing build size');

  report.recommendations.push('Review bundle composition');
  report.recommendations.push('Implement code splitting')}
module.exports = PerformanceMonitor;
=======
<<<<<<< HEAD
  report.recommendations.push('Consider optimizing build size');
  report.recommendations.push('Review bundle composition');
  report.recommendations.push('Implement code splitting')}
module.exports = PerformanceMonitor;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;

  report && report.recommendations.push('Consider optimizing build size');
  report && report.recommendations.push('Review bundle composition');
  report && report.recommendations.push('Implement code splitting')}
module && module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this && this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs && fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console && console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize && buildSize.split('\t')[0]); if (sizeInMB < 50) { console && console.log('✅ Build size is within acceptable limits')} else { console && console.log('⚠️ Build size is large,consider optimization')} } try { console && console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console && console.log('✅ Bundle analysis completed'); performanceChecks && performanceChecks.bundleAnalysis = true} catch (error) { console && console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console && console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console && console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console && console.log('✅ Response time is good')} else { console && console.log('⚠️ Response time could be improved')} performanceChecks && performanceChecks.loadTime = true} else { console && console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process && process.memoryUsage(); this && this.metrics.memoryUsage = Math && Math.round(usage && usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this && this.metrics.timestamp,metrics: this && this.metrics,recommendations: this && this.generateRecommendations() } const reportPath = path && path.join(process && process.cwd(),'performance-report && report.json'); fs && fs.writeFileSync(reportPath,JSON && JSON.stringify(report,null,2)); console && console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this && this.metrics.bundleSize > 1000000) { recommendations && recommendations.push('Consider code splitting to reduce bundle size')} if (this && this.metrics.memoryUsage > 100) { recommendations && recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object && Object.keys(performanceChecks).length; const passedChecks = Object && Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math && Math.round((passedChecks / totalChecks) * 100); console && console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report && report.recommendations.push('Consider optimizing build size'); report && report.recommendations.push('Review bundle composition'); report && report.recommendations.push('Implement code splitting')} module && module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this && this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs && fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console && console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize && buildSize.split('\t')[0]); if (sizeInMB < 50) { console && console.log('✅ Build size is within acceptable limits')} else { console && console.log('⚠️ Build size is large,consider optimization')} } try { console && console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console && console.log('✅ Bundle analysis completed'); performanceChecks && performanceChecks.bundleAnalysis = true} catch (error) { console && console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console && console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console && console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console && console.log('✅ Response time is good')} else { console && console.log('⚠️ Response time could be improved')} performanceChecks && performanceChecks.loadTime = true} else { console && console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process && process.memoryUsage(); this && this.metrics.memoryUsage = Math && Math.round(usage && usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this && this.metrics.timestamp,metrics: this && this.metrics,recommendations: this && this.generateRecommendations() } const reportPath = path && path.join(process && process.cwd(),'performance-report && report.json'); fs && fs.writeFileSync(reportPath,JSON && JSON.stringify(report,null,2)); console && console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this && this.metrics.bundleSize > 1000000) { recommendations && recommendations.push('Consider code splitting to reduce bundle size')} if (this && this.metrics.memoryUsage > 100) { recommendations && recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object && Object.keys(performanceChecks).length; const passedChecks = Object && Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math && Math.round((passedChecks / totalChecks) * 100); console && console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report && report.recommendations.push('Consider optimizing build size'); report && report.recommendations.push('Review bundle composition'); report && report.recommendations.push('Implement code splitting')} module && module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this && this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs && fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console && console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize && buildSize.split('\t')[0]); if (sizeInMB < 50) { console && console.log('✅ Build size is within acceptable limits')} else { console && console.log('⚠️ Build size is large,consider optimization')} } try { console && console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console && console.log('✅ Bundle analysis completed'); performanceChecks && performanceChecks.bundleAnalysis = true} catch (error) { console && console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console && console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console && console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console && console.log('✅ Response time is good')} else { console && console.log('⚠️ Response time could be improved')} performanceChecks && performanceChecks.loadTime = true} else { console && console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process && process.memoryUsage(); this && this.metrics.memoryUsage = Math && Math.round(usage && usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this && this.metrics.timestamp,metrics: this && this.metrics,recommendations: this && this.generateRecommendations() } const reportPath = path && path.join(process && process.cwd(),'performance-report && report.json'); fs && fs.writeFileSync(reportPath,JSON && JSON.stringify(report,null,2)); console && console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this && this.metrics.bundleSize > 1000000) { recommendations && recommendations.push('Consider code splitting to reduce bundle size')} if (this && this.metrics.memoryUsage > 100) { recommendations && recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object && Object.keys(performanceChecks).length; const passedChecks = Object && Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math && Math.round((passedChecks / totalChecks) * 100); console && console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report && report.recommendations.push('Consider optimizing build size'); report && report.recommendations.push('Review bundle composition'); report && report.recommendations.push('Implement code splitting')} module && module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this && this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs && fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console && console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize && buildSize.split('\t')[0]); if (sizeInMB < 50) { console && console.log('✅ Build size is within acceptable limits')} else { console && console.log('⚠️ Build size is large,consider optimization')} } try { console && console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console && console.log('✅ Bundle analysis completed'); performanceChecks && performanceChecks.bundleAnalysis = true} catch (error) { console && console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console && console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console && console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console && console.log('✅ Response time is good')} else { console && console.log('⚠️ Response time could be improved')} performanceChecks && performanceChecks.loadTime = true} else { console && console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process && process.memoryUsage(); this && this.metrics.memoryUsage = Math && Math.round(usage && usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this && this.metrics.timestamp,metrics: this && this.metrics,recommendations: this && this.generateRecommendations() } const reportPath = path && path.join(process && process.cwd(),'performance-report && report.json'); fs && fs.writeFileSync(reportPath,JSON && JSON.stringify(report,null,2)); console && console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this && this.metrics.bundleSize > 1000000) { recommendations && recommendations.push('Consider code splitting to reduce bundle size')} if (this && this.metrics.memoryUsage > 100) { recommendations && recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object && Object.keys(performanceChecks).length; const passedChecks = Object && Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math && Math.round((passedChecks / totalChecks) * 100); console && console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report && report.recommendations.push('Consider optimizing build size'); report && report.recommendations.push('Review bundle composition'); report && report.recommendations.push('Implement code splitting')} module && module.exports = PerformanceMonitor;
<<<<<<< HEAD
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/scripts/performance-monitor.js
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
