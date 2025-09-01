#!/usr/bin/env node
;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
;
class PerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/performance-monitor.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/performance-report.json');
    this.startTime = Date.now();

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;


    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {

  async checkBuildPerformance() {
    try {
      this.log('🏗️  Testing build performance...');

      const startTime = Date.now();

      // Clean previous build
      if (fs.existsSync('dist')) {
        execSync('rm -rf dist', { cwd: this.projectRoot, stdio: 'pipe' });

      // Run build
      execSync('npm run build', {
        cwd: this.projectRoot,
        stdio: 'pipe',
        timeout: 300000 // 5 minutes timeout
      });

      const buildTime = Date.now() - startTime;

      // Check build output size
      const buildSize = 0;
      const fileCount = 0;

      if (fs.existsSync('dist')) {
        const calculateSize = (dir) => {
          const items = fs.readdirSync(dir);
          items.forEach(item => {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
              calculateSize(fullPath);
            } else {
              buildSize += stat.size;
              fileCount++;

          });
        };

        calculateSize('dist');

      return {
        buildTime,
        buildSize,
        fileCount,
        success: true
      };

    } catch (error) {
      return {
        success: false,
        error: error.message,
        buildTime: 0,
        buildSize: 0,
        fileCount: 0
      };


  async checkBundleAnalysis() {
    try {
      this.log('📊 Analyzing bundle...');

      if (!fs.existsSync('dist')) {
        return { error: 'No build output found' };

      const bundleStats = {
        totalSize: 0,
        jsFiles: [],
        cssFiles: [],
        assetFiles: [],
        largestFiles: []
      };

      const analyzeDirectory = (dir) => {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);

          if (stat.isDirectory()) {
            analyzeDirectory(fullPath);
          } else {
            const relativePath = fullPath.replace(this.projectRoot + '/dist/', '');
            const fileInfo = {
              path: relativePath,
              size: stat.size,
              sizeKB: Math.round(stat.size / 1024 * 100) / 100
            };

            bundleStats.totalSize += stat.size;

            if (item.endsWith('.js')) {
              bundleStats.jsFiles.push(fileInfo);
            } else if (item.endsWith('.css')) {
              bundleStats.cssFiles.push(fileInfo);
            } else {
              bundleStats.assetFiles.push(fileInfo);


        });
      };

      analyzeDirectory('dist');

      // Sort files by size to find largest
      const allFiles = [...bundleStats.jsFiles, ...bundleStats.cssFiles, ...bundleStats.assetFiles];
      bundleStats.largestFiles = allFiles
        .sort((a, b) => b.size - a.size)
        .slice(0, 10);

      bundleStats.totalSizeMB = Math.round(bundleStats.totalSize / (1024 * 1024) * 100) / 100;

      return bundleStats;

    } catch (error) {
      return { error: error.message };


  async checkDependencies() {
    try {
      this.log('📦 Analyzing dependencies...');

      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = Object.keys(packageJson.dependencies || { /* empty */ });
      const devDependencies = Object.keys(packageJson.devDependencies || { /* empty */ });

      // Check for large packages
      const largePackages = [];
      const nodeModulesPath = path.join(this.projectRoot, 'node_modules');

      if (fs.existsSync(nodeModulesPath)) {
        dependencies.forEach(dep => {
          const depPath = path.join(nodeModulesPath, dep);
          if (fs.existsSync(depPath)) {
            try {
              const stats = fs.statSync(depPath);
              if (stats.isDirectory()) {
                const size = this.calculateDirectorySize(depPath);
                if (size > 10 * 1024 * 1024) { // > 10MB
                  largePackages.push({
                    name: dep,
                    size: size,
                    sizeMB: Math.round(size / (1024 * 1024) * 100) / 100
                  });


            } catch (error) {
              // Skip if can't access


        });

      return {
        dependencies: dependencies.length,
        devDependencies: devDependencies.length,
        largePackages: largePackages.sort((a, b) => b.size - a.size)
      };

    } catch (error) {
      return { error: error.message };


  calculateDirectorySize(dir) {
    let size = 0;
    try {
      const items = fs.readdirSync(dir);
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          size += this.calculateDirectorySize(fullPath);
        } else {
          size += stat.size;

      });
    } catch (error) {
      // Skip if can't access

    return size;

  async checkLighthouseScore() {
    try {
      this.log('💡 Checking Lighthouse performance...');

      // Check if lighthouse is available
      try {
        execSync('lighthouse --version', { stdio: 'pipe' });
      } catch (error) {
        return { error: 'Lighthouse not installed. Install with: npm install -g lighthouse' };

      // For now, just check if we can run it
      return { available: true, message: 'Lighthouse available for performance testing' };

    } catch (error) {
      return { error: error.message };


  async checkWebpackBundleAnalyzer() {
    try {
      this.log('📈 Checking bundle analyzer availability...');

      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const hasAnalyzer = packageJson.devDependencies &&
        (packageJson.devDependencies['webpack-bundle-analyzer'] ||
         packageJson.devDependencies['@next/bundle-analyzer']);

      return {
        available: hasAnalyzer,
        package: hasAnalyzer ?
          (packageJson.devDependencies['webpack-bundle-analyzer'] ? 'webpack-bundle-analyzer' : '@next/bundle-analyzer') :
          null
      };

    } catch (error) {
      return { error: error.message };


  async generateReport(buildStats, bundleStats, dependencyStats, lighthouseStats, analyzerStats) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        buildPerformance: buildStats.success ? 'good' : 'failed',
        buildTime: buildStats.buildTime,
        buildSize: buildStats.buildSize,
        totalBundleSize: bundleStats.totalSizeMB || 0,
        dependencies: dependencyStats.dependencies || 0,
        largePackages: dependencyStats.largePackages?.length || 0
      },
      details: {
        build: buildStats,
        bundle: bundleStats,
        dependencies: dependencyStats,
        lighthouse: lighthouseStats,
        analyzer: analyzerStats
      },
      recommendations: []
    };

    // Generate performance recommendations
    if (buildStats.buildTime > 60000) { // > 1 minute
      report.recommendations.push({
        priority: 'medium',
        message: 'Build time is slow',
        action: 'Consider optimizing build configuration and reducing bundle size'
      });

    if (bundleStats.totalSizeMB > 5) { // > 5MB
      report.recommendations.push({
        priority: 'high',
        message: 'Bundle size is large',
        action: 'Analyze bundle and implement code splitting and tree shaking'
      });

    if (dependencyStats.largePackages?.length > 5) {
      report.recommendations.push({
        priority: 'medium',
        message: 'Many large dependencies detected',
        action: 'Review and consider alternatives for large packages'
      });

    if (!analyzerStats.available) {
      report.recommendations.push({
        priority: 'low',
        message: 'Bundle analyzer not available',
        action: 'Install webpack-bundle-analyzer for detailed bundle analysis'
      });

    return report;

  async saveReport(report) {
    try {
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });

      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved to: ${this.reportFile}`);
    } catch (error) {
      this.log(`Error saving report: ${error.message}`);


  async run() {
    this.log('🚀 Starting Performance Monitor...');
    this.log(`Project root: ${this.projectRoot}`);

    try {
      // Create logs directory if it doesn't exist
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });

      // Run all performance checks
      this.log('🏗️  Checking build performance...');
      const buildStats = await this.checkBuildPerformance();

      this.log('📊 Analyzing bundle...');
      const bundleStats = await this.checkBundleAnalysis();

      this.log('📦 Analyzing dependencies...');
      const dependencyStats = await this.checkDependencies();

      this.log('💡 Checking Lighthouse...');
      const lighthouseStats = await this.checkLighthouseScore();

      this.log('📈 Checking bundle analyzer...');
      const analyzerStats = await this.checkWebpackBundleAnalyzer();

      // Generate report
      this.log('📊 Generating performance report...');
      const report = await this.generateReport(
        buildStats,
        bundleStats,
        dependencyStats,
        lighthouseStats,
        analyzerStats
      );

      // Save report
      await this.saveReport(report);

      const duration = Date.now() - this.startTime;

      // Log summary
      this.log('\n📊 Performance Monitor Summary:');
      this.log(`Build performance: ${report.summary.buildPerformance}`);
      this.log(`Build time: ${report.summary.buildTime}ms`);
      this.log(`Build size: ${report.summary.buildSize} bytes`);
      this.log(`Total bundle size: ${report.summary.totalBundleSize} MB`);
      this.log(`Dependencies: ${report.summary.dependencies}`);
      this.log(`Large packages: ${report.summary.largePackages}`);
      this.log(`Duration: ${duration}ms`);

      if (report.recommendations.length > 0) {
        this.log('\n💡 Recommendations:');
        report.recommendations.forEach(rec => {
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Action: ${rec.action}`);
        });
      } else {
        this.log('\n✨ Performance looks good!');

      // Clean up build artifacts if they exist
      if (fs.existsSync('dist')) {
        this.log('🧹 Cleaning up build artifacts...');
        execSync('rm -rf dist', { cwd: this.projectRoot, stdio: 'pipe' });

    } catch (error) {
      this.log(`❌ Error running performance monitor: ${error.message}`);
      process.exit(1);



// Run the performance monitor;
const monitor = new PerformanceMonitor();
monitor.run().catch(error => {
  process.exit(1);
});
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}