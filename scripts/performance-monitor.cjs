<<<<<<< HEAD

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
  log(message, type = 'INFO')
      'INFO': 'ℹ
      'SUCCESS': 
      'ERROR': 
      'WARNING': '⚠
      'PERFORMANCE': '⚡
    }[type] || 'ℹ
    this.log('Measuring build time...', 'PERFORMANCE')
      execSync('npm run build')
        stdio: 'pipe,
  encoding: 'utf8
      this.log(`Build completed in ${this.metrics.buildTime}ms`, 'SUCCESS'`)`;
      this.log(`Build failed: ${error.message}`, 'ERROR'`)
    this.log('Analyzing bundle size...', 'PERFORMANCE')
      const buildOutput = execSync('npm run build')
  encoding: 'utf8`;
      this.log(`Bundle size: ${this.metrics.bundleSize}kB`, 'INFO'`)`;
      this.log(`Pages: ${this.metrics.pageCount}`, 'INFO'`)`;
      this.log(`Bundle analysis failed: ${error.message}`, 'ERROR'`)
    this.log('Checking image optimization...', 'PERFORMANCE')
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']
    const publicDir = path.join(this.projectRoot, 'public')
              size: Math.round(stats.size / 1024) + 'KB`;
    this.log(`Found ${imageCount} images (${Math.round(totalImageSize / 1024)}KB total)`, 'INFO
        type: 'image_optimization,
  priority: 'high
    this.log('Checking code splitting...', 'PERFORMANCE')
    const pagesDir = path.join(this.projectRoot, 'pages')
        if (file.endsWith('.tsx') || file.endsWith('.jsx')
          const content = fs.readFileSync(file, 'utf8')
          const lines = content.split('\n')`;
    this.log(`Analyzed ${totalPages} pages`, 'INFO'`)
        type: 'code_splitting,
  priority: 'medium
    this.log('Checking dependencies...', 'PERFORMANCE')
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8
      const largeDeps = ['lodash', 'moment', 'jquery', 'bootstrap']
          type: 'dependency_optimization,
  priority: 'medium`;
          message: `Consider replacing large dependencies: ${largeDependencies.join(', '`})`;
      this.log(`Dependency check failed: ${error.message}`, 'ERROR'`)
    this.log('\n Performance Report', 'PERFORMANCE')
    this.log('=')
      console.log('\n Recommendations:')
        const priority = rec.priority === 'high' ? '�' : rec.priority === 'medium' ? '�' : '�`;
          console.log(`      Details: ${rec.details.map(d => d.file || d).join(', '`})
      this.log('� No performance issues found!', 'SUCCESS')
    let grade = 'A
    if (this.metrics.performanceScore < 90) grade = 'B
    if (this.metrics.performanceScore < 80) grade = 'C
    if (this.metrics.performanceScore < 70) grade = 'D
    if (this.metrics.performanceScore < 60) grade = 'F
    this.log(' Starting Performance Monitor', 'PERFORMANCE')`;
      this.log(`Error during performance monitoring: ${error.message}`, 'ERROR'`)
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
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
    if (typeof file === 'string') {
      const filePath = path.join(dirPath, file);
      try {
  // TODO: Implement
}
        const stats = fs.statSync(filePath);
        if (stats.isFile()) {
          totalSize += stats.size;
      } catch (error) {
        // Skip files that can't be accessed;
  });
  
  return totalSize;

// Check .next directory;
const nextDirSize = getDirectorySize('.next');
performanceMetrics.bundleSize['.next'] = {
  size: nextDirSize,
  sizeMB: (nextDirSize / 1024 / 1024).toFixed(2)

// Check node_modules;
const nodeModulesSize = getDirectorySize('node_modules');
performanceMetrics.bundleSize['node_modules'] = {
  size: nodeModulesSize,
  sizeMB: (nodeModulesSize / 1024 / 1024).toFixed(2)

// Count files by type;
const fileCounts = {
  '.tsx': 0,
  '.ts': 0,
  '.jsx': 0,
  '.js': 0,
  '.css': 0,
  '.json': 0;

function countFiles(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  
      const ext = path.extname(file);
      if (fileCounts.hasOwnProperty(ext)) {
        fileCounts[ext]++;

['components', 'pages', 'lib', 'styles'].forEach(dir => countFiles(dir));
performanceMetrics.fileCounts = fileCounts;

// Performance recommendations;
if (nextDirSize > 50 * 1024 * 1024) { // 50MB;
  performanceMetrics.recommendations.push('Consider optimizing bundle size - .next directory is large');

if (fileCounts['.tsx'] + fileCounts['.ts'] > 50) {
  performanceMetrics.recommendations.push('Consider code splitting - many TypeScript files detected');

if (fileCounts['.css'] > 10) {
  performanceMetrics.recommendations.push('Consider CSS optimization - multiple CSS files detected');

// Check for large images;
const publicDir = 'public';
if (fs.existsSync(publicDir)) {
  const publicFiles = fs.readdirSync(publicDir, { recursive: true });
  let largeImages = 0;
  
  publicFiles.forEach(file => {)
    if (typeof file === 'string' && /\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
  // TODO: Implement
        const filePath = path.join(publicDir, file);
        if (stats.size > 500 * 1024) { // 500KB;
          largeImages++;
        // Skip files that can't be accessed;
  
  if (largeImages > 0) {`;
    performanceMetrics.recommendations.push(`Optimize ${largeImages} large images in public directory`);

// Display results;
console.log('\n📊 Performance Metrics:');`;
console.log(`   - .next bundle size: ${performanceMetrics.bundleSize['.next']?.sizeMB || '0'} MB`);`;
console.log(`   - node_modules size: ${performanceMetrics.bundleSize['node_modules']?.sizeMB || '0'} MB`);`;
console.log(`   - TypeScript files: ${fileCounts['.tsx'] + fileCounts['.ts']}`);`;
console.log(`   - JavaScript files: ${fileCounts['.jsx'] + fileCounts['.js']}`);`;
console.log(`   - CSS files: ${fileCounts['.css']}`);
if (performanceMetrics.recommendations.length > 0) {
  console.log('\n💡 Recommendations:');`;
  performanceMetrics.recommendations.forEach(rec => console.log(`   - ${rec}`));
} else {
  // TODO: Implement
  console.log('\n✅ No performance issues detected');

// Save report;
fs.writeFileSync('performance-metrics.json', JSON.stringify(performanceMetrics, null, 2));
console.log('\n📄 Performance report saved to performance-metrics.json');
// Exit after a delay to prevent rapid restarts;
setTimeout(() => {
  process.exit(0);
}, 1000);


=======
#!/usr/bin/env node


class PerformanceMonitor {
  constructor() {
    this.workspaceRoot = '/workspace';
    this.reportFile = path.join(this.workspaceRoot, 'automation_logs', 'performance-monitor-report.json');
    this.ensureLogDirectory();

  ensureLogDirectory() {
    const logDir = path.dirname(this.reportFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });

  log(message) {`;
    console.log(`[Performance Monitor] ${message}`);

  async runPerformanceMonitoring() {
    this.log('Starting performance monitoring...');
    
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
      `;
      this.log(`Performance monitoring complete. Score: ${report.score}/100`);`;
      this.log(`Report saved to: ${this.reportFile}`);
      
      return report;
    } catch (error) {`;
      this.log(`Error during performance monitoring: ${error.message}`);
      report.error = error.message;

  async monitorBuildPerformance(report) {
    this.log('Monitoring build performance...');
    
    const startTime = Date.now();
    
      execSync('npm run build', { 
        encoding: 'utf8', 
        cwd: this.workspaceRoot,
        stdio: 'pipe
      
      const buildTime = Date.now() - startTime;
      report.metrics.buildTime = buildTime;
      report.metrics.buildTimeSeconds = (buildTime / 1000).toFixed(2);
      
      if (buildTime > 60000) { // 1 minute
        report.recommendations.push({
          priority: 'high',
          category: 'build',
          message: 'Build time exceeds 1 minute - consider optimization
      
      this.log('Build failed, skipping build performance monitoring');
      report.metrics.buildTime = 0;

  async monitorBundleSize(report) {
    this.log('Monitoring bundle size...');
    
    const distDir = path.join(this.workspaceRoot, 'dist');
    if (fs.existsSync(distDir)) {
      const bundleSize = this.getDirectorySize(distDir);
      report.metrics.bundleSize = bundleSize;
      report.metrics.bundleSizeMB = (bundleSize / (1024 * 1024)).toFixed(2);
      
      if (bundleSize > 2 * 1024 * 1024) { // 2MB
          category: 'bundle',
          message: 'Bundle size exceeds 2MB - implement code splitting
      report.metrics.bundleSize = 0;
      report.metrics.bundleSizeMB = '0.00';

  async monitorDependencies(report) {
    this.log('Monitoring dependencies...');
    
    const packageJsonPath = path.join(this.workspaceRoot, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      report.metrics.totalDependencies = Object.keys(dependencies).length;
      
      // Check for heavy dependencies
      const heavyDeps = ['lodash', 'moment', 'jquery', 'bootstrap'];
      const foundHeavyDeps = Object.keys(dependencies).filter(dep => heavyDeps.includes(dep));
      
      report.metrics.heavyDependencies = foundHeavyDeps.length;
      
      if (foundHeavyDeps.length > 0) {
          priority: 'medium',
          category: 'dependencies',`;
          message: `Consider replacing heavy dependencies: ${foundHeavyDeps.join(', ')}`

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
        message: 'Optimize build process - consider parallel builds
    
        message: 'Implement tree shaking and code splitting
    
      category: 'general',
      message: 'Set up continuous performance monitoring

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
>>>>>>> cursor/automate-test-improve-and-merge-code-6b26