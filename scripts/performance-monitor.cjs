


const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
  log(message, type = 'INFO')

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
      }
      const getDirectorySize = (dir) => {
        let totalSize = 0;
        const files = fs.readdirSync(dir);
        for (const file of files) {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          if (stat.isDirectory()) {
            totalSize += getDirectorySize(filePath);
          } else {
            totalSize += stat.size;
          }
        }
        return totalSize;
      };
      const bundleSize = getDirectorySize(distDir);
      const bundleSizeKB = Math.round(bundleSize / 1024);
      const bundleSizeMB = Math.round(bundleSize / (1024 * 1024) * 100) / 100;
      this.metrics.push({
        name: 'Bundle Size',
        value: bundleSize,
        unit: 'bytes',
        displayValue: `${bundleSizeKB}KB (${bundleSizeMB}MB)`,
        timestamp: new Date().toISOString()
      });
      this.log(`Bundle size: ${bundleSizeKB}KB (${bundleSizeMB}MB)`);
      return bundleSize;
    } catch (error) {
      this.log(`Bundle size measurement failed: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async measureMemoryUsage() {
    this.log('Measuring memory usage...');
    try {
      const memUsage = process.memoryUsage();
      this.metrics.push({
        name: 'Memory Usage',
        value: memUsage.heapUsed,
        unit: 'bytes',
        displayValue: `${Math.round(memUsage.heapUsed / 1024 / 1024)}MB`,
        timestamp: new Date().toISOString()
      });
      this.log(`Memory usage: ${Math.round(memUsage.heapUsed / 1024 / 1024)}MB`);
      return memUsage;
    } catch (error) {
      this.log(`Memory measurement failed: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async measureFileCount() {
    this.log('Counting source files...');
    try {
      const srcDir = path.join(this.projectRoot, 'src');
      let fileCount = 0;
      const countFiles = (dir) => {
        const files = fs.readdirSync(dir);
        for (const file of files) {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
            countFiles(filePath);
          } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js'))) {
            fileCount++;
          }
        }
      };
      countFiles(srcDir);
      this.metrics.push({
        name: 'Source Files',
        value: fileCount,
        unit: 'files',
        timestamp: new Date().toISOString()
      });
      this.log(`Source files: ${fileCount}`);
      return fileCount;
    } catch (error) {
      this.log(`File count measurement failed: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async checkDependencies() {
    this.log('Checking dependencies...');
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      const depCount = Object.keys(packageJson.dependencies || {}).length;
      const devDepCount = Object.keys(packageJson.devDependencies || {}).length;
      this.metrics.push({
        name: 'Dependencies',
        value: depCount,
        unit: 'packages',
        timestamp: new Date().toISOString()
      });
      this.metrics.push({
        name: 'Dev Dependencies',
        value: devDepCount,
        unit: 'packages',
        timestamp: new Date().toISOString()
      });
      this.log(`Dependencies: ${depCount}, Dev Dependencies: ${devDepCount}`);
      return { dependencies: depCount, devDependencies: devDepCount };
    } catch (error) {
      this.log(`Dependency check failed: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async generateReport() {
    const endTime = new Date();
    const duration = endTime - this.startTime;
    const report = {
      timestamp: endTime.toISOString(),
      duration: `${Math.round(duration / 1000)}s`,
      metrics: this.metrics,
      summary: {
        totalMetrics: this.metrics.length,
        buildTime: this.metrics.find(m => m.name === 'Build Time')?.value || 'N/A',
        bundleSize: this.metrics.find(m => m.name === 'Bundle Size')?.displayValue || 'N/A',
        memoryUsage: this.metrics.find(m => m.name === 'Memory Usage')?.displayValue || 'N/A',
        fileCount: this.metrics.find(m => m.name === 'Source Files')?.value || 'N/A'
      }
    };

    const reportPath = path.join(this.projectRoot, 'performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    this.log('\n=== PERFORMANCE MONITOR REPORT ===');
    this.log(`Duration: ${report.duration}`);
    this.log(`Build Time: ${report.summary.buildTime}ms`);
    this.log(`Bundle Size: ${report.summary.bundleSize}`);
    this.log(`Memory Usage: ${report.summary.memoryUsage}`);
    this.log(`Source Files: ${report.summary.fileCount}`);
    this.log(`Total Metrics: ${report.summary.totalMetrics}`);
    this.log('\nAll Metrics:');
    this.metrics.forEach((metric, index) => {
      this.log(`  ${index + 1}. ${metric.name}: ${metric.displayValue || metric.value} ${metric.unit}`);
    });
    this.log(`\nFull report saved to: ${reportPath}`);
  }

  async run() {
    this.log('Starting Performance Monitor...');
    this.log('

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
      try {
  // TODO: Implement
}
        const stats = fs.statSync(filePath);
        if (stats.isFile()) {
          totalSize += stats.size;

  });
  return totalSize;

// Check .next directory;
const nextDirSize = getDirectorySize('.next');

  size: nextDirSize,
  sizeMB: (nextDirSize / 1024 / 1024).toFixed(2)

// Check node_modules;
const nodeModulesSize = getDirectorySize('node_modules');

  size: nodeModulesSize,
  sizeMB: (nodeModulesSize / 1024 / 1024).toFixed(2)

// Count files by type;
const fileCounts = {


function countFiles(dirPath) {
  if (!fs.existsSync(dirPath)) return;

performanceMetrics.fileCounts = fileCounts;

// Performance recommendations;
if (nextDirSize > 50 * 1024 * 1024) { // 50MB;
  performanceMetrics.recommendations.push('Consider optimizing bundle size - .next directory is large');

// Check for large images;
const publicDir = 'public';
if (fs.existsSync(publicDir)) {
  const publicFiles = fs.readdirSync(publicDir, { recursive: true });
  let largeImages = 0;
  publicFiles.forEach(file => {)

  // TODO: Implement
        const filePath = path.join(publicDir, file);
        if (stats.size > 500 * 1024) { // 500KB;
          largeImages++;

  if (largeImages > 0) {`;
    performanceMetrics.recommendations.push(`Optimize ${largeImages} large images in public directory`);

// Display results;


console.log('\n📄 Performance report saved to performance-metrics.json');
// Exit after a delay to prevent rapid restarts;
setTimeout(() => {
  process.exit(0);
}, 1000);




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


