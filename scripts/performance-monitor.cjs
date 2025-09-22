
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
  log(message, type = 'INFO')
      'INFO': 'ℹ'
      'SUCCESS': ''
      'ERROR': ''
      'WARNING': '⚠'
      'PERFORMANCE': '⚡'
    }[type] || 'ℹ'
    this.log('Measuring build time...', 'PERFORMANCE')
      execSync('npm run build')
        stdio: 'pipe'
        encoding: 'utf8'
      this.log(`Build completed in ${this.metrics.buildTime}ms`, 'SUCCESS'`)
      this.log(`Build failed: ${error.message}`, 'ERROR'`)
    this.log('Analyzing bundle size...', 'PERFORMANCE')
      const buildOutput = execSync('npm run build')
        stdio: 'pipe'
        encoding: 'utf8'
      this.log(`Bundle size: ${this.metrics.bundleSize}kB`, 'INFO'`)
      this.log(`Pages: ${this.metrics.pageCount}`, 'INFO'`)
      this.log(`Bundle analysis failed: ${error.message}`, 'ERROR'`)
    this.log('Checking image optimization...', 'PERFORMANCE')
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']
    const publicDir = path.join(this.projectRoot, 'public')
              size: Math.round(stats.size / 1024) + 'KB'
    this.log(`Found ${imageCount} images (${Math.round(totalImageSize / 1024)}KB total)`, 'INFO'
        type: 'image_optimization'
        priority: 'high'
    this.log('Checking code splitting...', 'PERFORMANCE')
    const pagesDir = path.join(this.projectRoot, 'pages')
        if (file.endsWith('.tsx') || file.endsWith('.jsx')
          const content = fs.readFileSync(file, 'utf8')
          const lines = content.split('\n')
    this.log(`Analyzed ${totalPages} pages`, 'INFO'`)
        type: 'code_splitting'
        priority: 'medium'
    this.log('Checking dependencies...', 'PERFORMANCE')
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'
      const largeDeps = ['lodash', 'moment', 'jquery', 'bootstrap']
          type: 'dependency_optimization'
          priority: 'medium'
          message: `Consider replacing large dependencies: ${largeDependencies.join(', '`})
      this.log(`Dependency check failed: ${error.message}`, 'ERROR'`)
    this.log('\n Performance Report', 'PERFORMANCE')
    this.log('=')
      console.log('\n Recommendations:')
        const priority = rec.priority === 'high' ? '�' : rec.priority === 'medium' ? '�' : '�'
          console.log(`      Details: ${rec.details.map(d => d.file || d).join(', '`})
      this.log('� No performance issues found!', 'SUCCESS')
    let grade = 'A'
    if (this.metrics.performanceScore < 90) grade = 'B'
    if (this.metrics.performanceScore < 80) grade = 'C'
    if (this.metrics.performanceScore < 70) grade = 'D'
    if (this.metrics.performanceScore < 60) grade = 'F'
    this.log(' Starting Performance Monitor', 'PERFORMANCE')
      this.log(`Error during performance monitoring: ${error.message}`, 'ERROR'`)

#!/usr/bin/env node

#!/usr/bin/env node

#!/usr/bin/env node

main

#!/usr/bin/env node

origin/cursor/automate-test-fix-improve-and-merge-code-bfbd

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
  log(message, type = 'INFO')

#!/usr/bin/env node

#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'performance-logs.txt');
    this.startTime = new Date();
    this.metrics = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type}] ${message}`;
    console.log(logMessage);
    // Append to log file
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options
      });
      return result;
    } catch (error) {
      this.log(`Command failed: ${command} - ${error.message}`, 'ERROR');
      return null;
    }
  }

  async measureBuildTime() {
    this.log('Measuring build time...');
    const startTime = Date.now();
    try {
      await this.runCommand('npm run build', { silent: true });
      const buildTime = Date.now() - startTime;
      this.metrics.push({
        name: 'Build Time',
        value: buildTime,
        unit: 'ms',
        timestamp: new Date().toISOString()
      });
      this.log(`Build completed in ${buildTime}ms`);
      return buildTime;
    } catch (error) {
      this.log(`Build measurement failed: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async measureBundleSize() {
    this.log('Measuring bundle size...');
    try {
      const distDir = path.join(this.projectRoot, 'dist');
      if (!fs.existsSync(distDir)) {
        this.log('Dist directory not found, running build first...');
        await this.runCommand('npm run build', { silent: true });

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

monitor.run().catch(console.error);

console.log('⚡ Starting performance monitoring...');

const performanceMetrics = {
  timestamp: new Date().toISOString(),
  bundleSize: {},
  fileCounts: {},
  recommendations: []
};

// Check bundle sizes;
function getDirectorySize(dirPath) {
  if (!fs.existsSync(dirPath)) return 0;
  let totalSize = 0;
  const files = fs.readdirSync(dirPath, { recursive: true });
  files.forEach(file => {)

      const filePath = path.join(dirPath, file);

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

// Save report
fs.writeFileSync('performance-metrics.json', JSON.stringify(performanceMetrics, null, 2));

console.log('\n📄 Performance report saved to performance-metrics.json');
// Exit after a delay to prevent rapid restarts;
setTimeout(() => {
  process.exit(0);
}, 1000);

ursor/automate-test-improve-and-merge-code-59d5

console.log('⚡ Performance Monitor');

#!/usr/bin/env node

class PerformanceMonitor {
  constructor() {
    this.workspaceRoot = '/workspace';
    this.reportFile = path.join(this.workspaceRoot,automation_logs,performance-monitor-report.json');
    this.ensureLogDirectory();

  ensureLogDirectory() {
    const logDir = path.dirname(this.reportFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });

  async runPerformanceMonitoring() {
    this.log('Starting performance monitoring...);
    const report = {
      metrics: {},
      recommendations: [],
      score: 0

      // Monitor build performance
      await this.monitorBuildPerformance(report);
      // Monitor bundle size
      await this.monitorBundleSize(report);
      // Monitor dependencies
      await this.monitorDependencies(report);
      // Calculate performance score
      report.score = this.calculatePerformanceScore(report);
      // Generate recommendations
      this.generateRecommendations(report);
      // Save report
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));

      report.error = error.message;

  async monitorBuildPerformance(report) {
    this.log('Monitoring build performance...);
    const startTime = Date.now();

      const buildTime = Date.now() - startTime;
      report.metrics.buildTime = buildTime;
      report.metrics.buildTimeSeconds = (buildTime / 1000).toFixed(2);
      if (buildTime > 60000) { // 1 minute
        report.recommendations.push({

      this.log('Build failed, skipping build performance monitoring');
      report.metrics.buildTime = 0;

  async monitorBundleSize(report) {
    this.log('Monitoring bundle size...);
    const distDir = path.join(this.workspaceRoot,dist');
    if (fs.existsSync(distDir)) {
      const bundleSize = this.getDirectorySize(distDir);
      report.metrics.bundleSize = bundleSize;
      report.metrics.bundleSizeMB = (bundleSize / (1024 * 1024)).toFixed(2);
      if (bundleSize > 2 * 1024 * 1024) { // 2MB

  async monitorDependencies(report) {
    this.log('Monitoring dependencies...);
    const packageJsonPath = path.join(this.workspaceRoot,package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath,utf8));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      report.metrics.totalDependencies = Object.keys(dependencies).length;
      // Check for heavy dependencies
      const heavyDeps = [lodash,moment,jquery,bootstrap];
      const foundHeavyDeps = Object.keys(dependencies).filter(dep => heavyDeps.includes(dep));
      report.metrics.heavyDependencies = foundHeavyDeps.length;
      if (foundHeavyDeps.length > 0) {

  calculatePerformanceScore(report) {
    let score = 100;
    // Deduct for build time
    if (report.metrics.buildTime > 60000) {
      score -= 20;
    } else if (report.metrics.buildTime > 30000) {
      score -= 10;
    // Deduct for bundle size
    if (report.metrics.bundleSize > 2 * 1024 * 1024) {
      score -= 30;
    } else if (report.metrics.bundleSize > 1024 * 1024) {
      score -= 15;
    // Deduct for heavy dependencies
    if (report.metrics.heavyDependencies > 2) {
    } else if (report.metrics.heavyDependencies > 0) {
      score -= 5;
    return Math.max(0, Math.min(100, score));

  generateRecommendations(report) {

  getDirectorySize(dir) {
    let size = 0;
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        size += this.getDirectorySize(fullPath);
        size += stat.size;
    return size;

// CLI interface
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.runPerformanceMonitoring().catch(console.error);

module.exports = PerformanceMonitor;

origin/cursor/automate-test-fix-improve-and-merge-code-bfbd

origin/cursor/automate-test-fix-improve-and-merge-code-bfbd

if (failed === 0) {
  console.log('🎉 All performance checks passed!');
  process.exit(0);
} else {
  console.log('⚠️  Some performance checks failed. Please review the issues.');
  process.exit(1);
}
