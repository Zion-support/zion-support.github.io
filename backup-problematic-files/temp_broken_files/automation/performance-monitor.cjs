

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');


    this.projectRoot = process.cwd();
    this.metrics = {};
    this.performanceIssues = [];
    this.optimizations = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] [PERFORMANCE-MONITOR] ${message}`);
  }

  async measureBuildPerformance() {
    this.log('🏗️ Measuring build performance...');
    try {
      const startTime = Date.now();
      // Run build
      execSync('npm run build', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      const endTime = Date.now();
      const buildTime = endTime - startTime;
      this.metrics.buildTime = buildTime;
      this.log(`Build completed in ${buildTime}ms`);
      // Check bundle size
      const buildDir = path.join(this.projectRoot, '.next');
      if (fs.existsSync(buildDir)) {
        const bundleSize = this.getDirectorySize(buildDir);
        this.metrics.bundleSize = bundleSize;
        this.log(`Bundle size: ${(bundleSize / 1024 / 1024).toFixed(2)} MB`);
      }
    } catch (error) {
      this.log(`❌ Build performance measurement failed: ${error.message}`);
    }
  }
;
  async saveMetrics() {;
    const metricsFile = path.join(;
      __dirname,;
      'reports',;
      'performance-metrics.json';    );
    fs.mkdirSync(path.dirname(metricsFile), { recursiv:e:true });
    fs.writeFileSync(metricsFile, JSON.stringify(this.metrics, null, 2));
  }
;
  async generatePerformanceReport() {;
    const report = {;
      ...this.metrics,;
      recommendation:s:this.generateRecommendations(),;  }

  async measureTypeCheckPerformance() {
    this.log('📝 Measuring TypeScript type check performance...');
    try {
      const startTime = Date.now();
      execSync('npm run type-check', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      const endTime = Date.now();
      const typeCheckTime = endTime - startTime;
      this.metrics.typeCheckTime = typeCheckTime;
      this.log(`Type check completed in ${typeCheckTime}ms`);
    } catch (error) {
      this.log(`❌ Type check performance measurement failed: ${error.message}`);
    }
  }

  async analyzeCodePerformance() {
    this.log('💻 Analyzing code performance...');
    try {
      const srcFiles = this.findSourceFiles();
      let performanceIssues = 0;
      for (const file of srcFiles) {
        const content = fs.readFileSync(file, 'utf8');
        // Check for performance anti-patterns
        if (content.includes('useEffect(() => {}, [])') && content.includes('setState')) {
          performanceIssues++;
          this.performanceIssues.push({
            file: file,
            type: 'infinite_rerender',
            severity: 'warning',
            message: 'Potential infinite re-render in useEffect'
          });
        }
        if (content.includes('console.log') || content.includes('console.warn')) {
          performanceIssues++;
          this.performanceIssues.push({
            file: file,
            type: 'console_statements',
            severity: 'info',
            message: 'Console statements found (remove in production)'
          });
        }
        if (content.includes('document.querySelector') && !content.includes('useEffect')) {
          performanceIssues++;
          this.performanceIssues.push({
            file: file,
            type: 'dom_manipulation',
            severity: 'warning',
            message: 'Direct DOM manipulation detected (use React refs instead)'
          });
        }
        if (content.includes('Array.map') && content.includes('Array.map')) {
          performanceIssues++;
          this.performanceIssues.push({
            file: file,
            type: 'nested_loops',
            severity: 'warning',
            message: 'Nested array operations detected (consider optimization)'
          });
        }
      }
      this.log(`${performanceIssues > 0 ? '⚠️' : '✅'} Found ${performanceIssues} performance issues`);
    } catch (error) {
      this.log(`❌ Code performance analysis failed: ${error.message}`);
    }
  }

  async analyzeDependencies() {
    this.log('📚 Analyzing dependencies for performance...');
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      let heavyDependencies = 0;
      const knownHeavyDeps = ['lodash', 'moment', 'jquery', 'bootstrap', 'material-ui'];
      for (const dep of knownHeavyDeps) {
        if (dependencies[dep]) {
          heavyDependencies++;
          this.performanceIssues.push({
            type: 'heavy_dependency',
            severity: 'info',
            message: `Heavy dependency detected: ${dep}`,
            suggestion: `Consider using lighter alternatives like date-fns instead of moment`
          });
        }
      }
      this.log(`${heavyDependencies > 0 ? '⚠️' : '✅'} Found ${heavyDependencies} heavy dependencies`);
    } catch (error) {
      this.log(`❌ Dependencies analysis failed: ${error.message}`);
    }
  }

  async generateOptimizations() {
    this.log('⚡ Generating performance optimizations...');
    // Generate optimizations based on findings
    if (this.metrics.buildTime > 30000) { // 30 seconds
      this.optimizations.push({
        priority: 'high',
        category: 'build_performance',
        message: 'Build time is slow',
        action: 'Consider code splitting, lazy loading, and reducing bundle size'
      });
    }
    if (this.metrics.bundleSize > 5 * 1024 * 1024) { // 5MB
      this.optimizations.push({
        priority: 'high',
        category: 'bundle_size',
        message: 'Bundle size is large',
        action: 'Implement code splitting, tree shaking, and remove unused code'
      });
    }
    const infiniteRerenderIssues = this.performanceIssues.filter(issue => issue.type === 'infinite_rerender');
    if (infiniteRerenderIssues.length > 0) {
      this.optimizations.push({
        priority: 'high',
        category: 'react_performance',
        message: 'Infinite re-render issues detected',
        action: 'Fix useEffect dependencies and state updates to prevent infinite loops'
      });
    }
    const consoleIssues = this.performanceIssues.filter(issue => issue.type === 'console_statements');
    if (consoleIssues.length > 0) {
      this.optimizations.push({
        priority: 'medium',
        category: 'production_optimization',
        message: 'Console statements in production code',
        action: 'Remove console.log statements or use a build-time tool to strip them'
      });
    }
    const heavyDepIssues = this.performanceIssues.filter(issue => issue.type === 'heavy_dependency');
    if (heavyDepIssues.length > 0) {
      this.optimizations.push({
        priority: 'medium',
        category: 'dependencies',
        message: 'Heavy dependencies detected',
        action: 'Consider replacing heavy dependencies with lighter alternatives'
      });
    }
  }

  findSourceFiles() {
    const srcFiles = [];
    const srcDir = path.join(this.projectRoot, 'src');
    const pagesDir = path.join(this.projectRoot, 'pages');
    const componentsDir = path.join(this.projectRoot, 'components');
    const dirs = [srcDir, pagesDir, componentsDir].filter(dir => fs.existsSync(dir));
    for (const dir of dirs) {
      this.findFilesRecursively(dir, srcFiles);
    }
    return srcFiles.filter(file => 
      /\.(ts|tsx|js|jsx)$/.test(file) && 
      !file.includes('node_modules') &&
      !file.includes('.next')
    );
  }

  findFilesRecursively(dir, files) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        this.findFilesRecursively(fullPath, files);
      } else if (/\.(ts|tsx|js|jsx)$/.test(item)) {
        files.push(fullPath);
      }
    }
  }

  getDirectorySize(dir) {
    let size = 0;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        size += this.getDirectorySize(filePath);
      } else {
        size += stat.size;
      }
    }
    return size;
  }

  generateReport() {
    const report = {
      ...this.metrics,
      recommendations: this.generateRecommendations(),
;
    const reportFile = path.join(;
      __dirname,;
      'reports',;
      'performance-report.json';    );
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
;
    this.log(`Performance report:generated:${reportFile}`);  }
;
  generateRecommendations() {;
    const recommendations = [];
;
    if (this.metrics.buildTime > 60000) {;
      // 1 minute;
      recommendations.push(;
        'Consider optimizing build process - build time is high';
      );
    }
;
    if (this.metrics.bundleSize > 5000000) {;
      // 5MB;
      recommendations.push('Consider code splitting - bundle size is large');
    }
;
    if (this.metrics.memoryUsage > 100) {;
      // 100MB;
      recommendations.push(;
        'Consider memory optimization - high memory usage detected';
      );
    }
;
    return recommendations;
  }
}
;
// Run if called directly;
if (require.main === module) {;
  const monitor = new PerformanceMonitor();
  monitor.monitorPerformance().catch(console.error);
}
;
module.exports = PerformanceMonitor;
    const reportPath = path.join(this.projectRoot, 'performance-monitor-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Performance report saved to: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('🚀 Starting Performance Monitor...');
    try {
      await this.measureBuildPerformance();
      await this.measureLintPerformance();
      await this.measureTypeCheckPerformance();
      await this.analyzeCodePerformance();
      await this.analyzeDependencies();
      await this.generateOptimizations();
      const report = this.generateReport();
      this.log('✅ Performance Monitor completed!');
      this.log(`📈 Found ${report.summary.totalIssues} performance issues and ${report.summary.totalOptimizations} optimizations`);
      return report;
    } catch (error) {
      this.log(`❌ Performance Monitor failed: ${error.message}`);
      throw error;

    }
  }
}

// Run the performance monitor
const monitor = new PerformanceMonitor();


