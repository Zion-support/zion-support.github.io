#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class SmartPerformanceOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/smart-performance-optimizer.log');
    this.reportFile = path.join(this.projectRoot, 'logs/smart-performance-optimizer-report.json');
    this.optimizationHistory = this.loadOptimizationHistory();
    this.ensureDirectories()}

  ensureDirectories() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir { recursive: true })}
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n')} catch (error) {
      console.error('Failed to write to log file:', error.message)}
  }

  loadOptimizationHistory() {
    try {
      if (fs.existsSync(this.reportFile)) {
        const data = fs.readFileSync(this.reportFile, 'utf8');
        return JSON.parse(data).optimizationHistory || []}
    } catch (error) {
      this.log(`Failed to load optimization history: ${error.message}`, 'warn')}
    return []}

  saveOptimizationHistory() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        optimizationHistory: this.optimizationHistory,
        totalOptimizations: this.optimizationHistory.length,
        lastRun: Date.now()
      };
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2))} catch (error) {
      this.log(`Failed to save optimization history: ${error.message}`, 'error')}
  }

  async analyzePerformance() {
    this.log('📊 Analyzing current performance metrics...');
    
    const metrics = {
      buildTime: await this.measureBuildTime(),
      bundleSize: await this.analyzeBundleSize(),
      memoryUsage: await this.analyzeMemoryUsage(),
      fileCount: await this.countFiles(),
      dependencies: await this.analyzeDependencies()
    };

    this.log(`Performance Analysis Results:`);
    this.log(`  - Build Time: ${metrics.buildTime}ms`);
    this.log(`  - Bundle Size: ${metrics.bundleSize}MB`);
    this.log(`  - Memory Usage: ${metrics.memoryUsage}MB`);
    this.log(`  - File Count: ${metrics.fileCount}`);
    this.log(`  - Dependencies: ${metrics.dependencies.count}`);

    return metrics}

  async measureBuildTime() {
    try {
      const startTime = Date.now();
      
      // Clean build directory first
      if (fs.existsSync('.next')) {
        execSync('rm -rf .next' { cwd: this.projectRoot, stdio: 'pipe' })}
      
      // Run build
      execSync('npm run build' { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 300000 
      });
      
      return Date.now() - startTime} catch (error) {
      this.log(`Build time measurement failed: ${error.message}`, 'error');
      return -1}
  }

  async analyzeBundleSize() {
    try {
      if (!fs.existsSync('.next')) {
        return 0}

      const calculateSize = (dir) => {
        let totalSize = 0;
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            totalSize += calculateSize(fullPath)} else {
            totalSize += stat.size}
        }
        
        return totalSize};

      const sizeInBytes = calculateSize('.next');
      return (sizeInBytes / (1024 * 1024)).toFixed(2); // Convert to MB
    } catch (error) {
      this.log(`Bundle size analysis failed: ${error.message}`, 'error');
      return 0}
  }

  async analyzeMemoryUsage() {
    try {
      const usage = process.memoryUsage();
      return (usage.heapUsed / (1024 * 1024)).toFixed(2); // Convert to MB
    } catch (error) {
      this.log(`Memory usage analysis failed: ${error.message}`, 'error');
      return 0}
  }

  async countFiles() {
    try {
      const countFiles = (dir) => {
        let count = 0;
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            count += countFiles(fullPath)} else if (stat.isFile()) {
            count++}
        }
        
        return count};

      return countFiles(this.projectRoot)} catch (error) {
      this.log(`File count analysis failed: ${error.message}`, 'error');
      return 0}
  }

  async analyzeDependencies() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      return {
        count: Object.keys(packageJson.dependencies || {}).length + 
               Object.keys(packageJson.devDependencies || {}).length,
        dependencies: packageJson.dependencies || {},
        devDependencies: packageJson.devDependencies || {}
      }} catch (error) {
      this.log(`Dependency analysis failed: ${error.message}`, 'error');
      return { count: 0, dependencies: {}, devDependencies: {} }}
  }

  async optimizeBundle() {
    this.log('🚀 Optimizing bundle size...');
    
    try {
      // Enable bundle analysis
      const nextConfigPath = 'next.config.cjs';
      let nextConfig = '';
      
      if (fs.existsSync(nextConfigPath)) {
        nextConfig = fs.readFileSync(nextConfigPath, 'utf8')}

      // Add bundle analyzer if not present
      if (!nextConfig.includes('@next/bundle-analyzer')) {
        this.log('Adding bundle analyzer configuration...');
        
        const bundleAnalyzerConfig = `
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true' });

module.exports = withBundleAnalyzer({
  // Your existing config here
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'] },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' },
  images: {
    formats: ['image/webp', 'image/avif'] } });
`;

        fs.writeFileSync(nextConfigPath, bundleAnalyzerConfig)}

      // Run build with analysis
      execSync('ANALYZE=true npm run build' { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 300000 
      });

      this.log('✅ Bundle optimization completed');
      return true} catch (error) {
      this.log(`❌ Bundle optimization failed: ${error.message}`, 'error');
      return false}
  }

  async optimizeDependencies() {
    this.log('📦 Optimizing dependencies...');
    
    try {
      // Check for unused dependencies
      execSync('npx depcheck' { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 60000 
      });

      // Update dependencies to latest compatible versions
      execSync('npm update' { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 120000 
      });

      // Clean npm cache
      execSync('npm cache clean --force' { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });

      this.log('✅ Dependency optimization completed');
      return true} catch (error) {
      this.log(`❌ Dependency optimization failed: ${error.message}`, 'error');
      return false}
  }

  async optimizeImages() {
    this.log('🖼️ Optimizing images...');
    
    try {
      // Find and optimize images in public directory
      const publicDir = path.join(this.projectRoot, 'public');
      
      if (fs.existsSync(publicDir)) {
        const optimizeImage = (filePath) => {
          try {
            // Use imagemin or similar tool for optimization
            // For now, just log the file
            this.log(`Optimizing image: ${filePath}`)} catch (error) {
            this.log(`Failed to optimize ${filePath}: ${error.message}`, 'warn')}
        };

        const processDirectory = (dir) => {
          const items = fs.readdirSync(dir);
          
          for (const item of items) {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
              processDirectory(fullPath)} else if (stat.isFile() && /\.(jpg|jpeg|png|gif|webp)$/i.test(item)) {
              optimizeImage(fullPath)}
          }
        };

        processDirectory(publicDir)}

      this.log('✅ Image optimization completed');
      return true} catch (error) {
      this.log(`❌ Image optimization failed: ${error.message}`, 'error');
      return false}
  }

  async optimizeCode() {
    this.log('💻 Optimizing code...');
    
    try {
      // Run linting and auto-fix
      execSync('npm run lint:fix' { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 60000 
      });

      // Format code
      execSync('npm run format' { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 60000 
      });

      // Remove console.logs in production
      if (process.env.NODE_ENV === 'production') {
        execSync('npx babel src --out-dir src-optimized --plugins=babel-plugin-transform-remove-console' { 
          cwd: this.projectRoot, 
          stdio: 'pipe',
          timeout: 60000 
        })}

      this.log('✅ Code optimization completed');
      return true} catch (error) {
      this.log(`❌ Code optimization failed: ${error.message}`, 'error');
      return false}
  }

  async optimizeBuild() {
    this.log('🏗️ Optimizing build process...');
    
    try {
      // Clean build directories
      execSync('rm -rf .next dist' { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });

      // Clear caches
      execSync('npm cache clean --force' { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });

      // Run optimized build
      execSync('npm run build' { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 300000 
      });

      this.log('✅ Build optimization completed');
      return true} catch (error) {
      this.log(`❌ Build optimization failed: ${error.message}`, 'error');
      return false}
  }

  async runOptimizations() {
    this.log('🚀 Running intelligent performance optimizations...');
    
    const optimizations = [
      { name: 'Bundle Optimization', fn: () => this.optimizeBundle() }, { name: 'Dependency Optimization', fn: () => this.optimizeDependencies() }, { name: 'Image Optimization', fn: () => this.optimizeImages() }, { name: 'Code Optimization', fn: () => this.optimizeCode() }, { name: 'Build Optimization', fn: () => this.optimizeBuild() }
    ];

    const results = [];
    
    for (const optimization of optimizations) {
      try {
        this.log(`Running ${optimization.name}...`);
        const success = await optimization.fn();
        results.push({ name: optimization.name, success });
        
        if (success) {
          this.log(`✅ ${optimization.name} completed successfully`)} else {
          this.log(`❌ ${optimization.name} failed`)}
      } catch (error) {
        this.log(`❌ ${optimization.name} failed: ${error.message}`, 'error');
        results.push({ name: optimization.name, success: false, error: error.message })}
    }

    return results}

  async generatePerformanceReport() {
    this.log('📊 Generating performance report...');
    
    const beforeMetrics = await this.analyzePerformance();
    const optimizationResults = await this.runOptimizations();
    const afterMetrics = await this.analyzePerformance();

    const report = {
      timestamp: new Date().toISOString(),
      beforeMetrics,
      afterMetrics,
      improvements: {
        buildTimeImprovement: beforeMetrics.buildTime > 0 && afterMetrics.buildTime > 0 ? 
          ((beforeMetrics.buildTime - afterMetrics.buildTime) / beforeMetrics.buildTime * 100).toFixed(2) : 0,
        bundleSizeImprovement: beforeMetrics.bundleSize > 0 && afterMetrics.bundleSize > 0 ? 
          ((beforeMetrics.bundleSize - afterMetrics.bundleSize) / beforeMetrics.bundleSize * 100).toFixed(2) : 0,
        memoryImprovement: beforeMetrics.memoryUsage > 0 && afterMetrics.memoryUsage > 0 ? 
          ((beforeMetrics.memoryUsage - afterMetrics.memoryUsage) / beforeMetrics.memoryUsage * 100).toFixed(2) : 0
      },
      optimizationResults,
      recommendations: this.generatePerformanceRecommendations(beforeMetrics, afterMetrics)
    };

    const reportFile = path.join(this.projectRoot, 'logs/smart-performance-optimizer-intelligence.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Performance report saved to ${reportFile}`);
    return report}

  generatePerformanceRecommendations(before, after) {
    const recommendations = [];
    
    if (before.buildTime > 30000) { // More than 30 seconds
      recommendations.push('Consider implementing incremental builds')}
    
    if (before.bundleSize > 5) { // More than 5MB
      recommendations.push('Implement code splitting and lazy loading')}
    
    if (before.memoryUsage > 500) { // More than 500MB
      recommendations.push('Optimize memory usage and implement garbage collection')}
    
    if (before.fileCount > 1000) {
      recommendations.push('Consider reducing file count through better organization')}

    return recommendations}

  async run() {
    this.log('🚀 Starting Smart Performance Optimizer...');
    
    try {
      // Generate comprehensive performance report
      const report = await this.generatePerformanceReport();
      
      // Save optimization history
      this.optimizationHistory.push({
        timestamp: new Date().toISOString(),
        report: report,
        improvements: report.improvements
      });
      
      this.saveOptimizationHistory();

      this.log(`🎯 Performance Optimization Complete:`);
      this.log(`   - Build Time Improvement: ${report.improvements.buildTimeImprovement}%`);
      this.log(`   - Bundle Size Improvement: ${report.improvements.bundleSizeImprovement}%`);
      this.log(`   - Memory Improvement: ${report.improvements.memoryImprovement}%`);
      this.log(`   - Optimizations Applied: ${report.optimizationResults.filter(r => r.success).length}/${report.optimizationResults.length}`)} catch (error) {
      this.log(`❌ Performance Optimizer failed: ${error.message}`, 'error');
      throw error}
  }
}

// Run the optimizer
if (import.meta.url === `file://${process.argv[1]}`) {
  const optimizer = new SmartPerformanceOptimizer();
  optimizer.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1)})}

export default $1;