#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class EnhancedPerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.logFile = path.join(this.reportsDir, 'enhanced-performance.log');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async analyzeBuildPerformance() {
    this.log('🔍 Analyzing build performance...');

    try {
      const startTime = Date.now();
      const result = execSync('npm run build', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 300000,
      });
      const endTime = Date.now();
      const buildTime = endTime - startTime;

      this.log(`✅ Build completed in ${buildTime}ms`);

      return {
        success: true,
        buildTime: buildTime,
        output: result,
      };
    } catch (error) {
      this.log(`❌ Build failed: ${error.message}`);
      return {
        success: false,
        error: error.message,
      };
    }
  }

  async analyzeBundleSize() {
    this.log('📦 Analyzing bundle size...');

    try {
      const nextDir = path.join(this.projectRoot, '.next');
      if (!fs.existsSync(nextDir)) {
        this.log('⚠️  .next directory not found. Run build first.');
        return { success: false, error: 'Build not found' };
      }

      const staticDir = path.join(nextDir, 'static');
      let totalSize = 0;
      let fileCount = 0;

      if (fs.existsSync(staticDir)) {
        const files = this.getAllFiles(staticDir);
        for (const file of files) {
          const stats = fs.statSync(file);
          totalSize += stats.size;
          fileCount++;
        }
      }

      const sizeInMB = (totalSize / (1024 * 1024)).toFixed(2);

      this.log(`📊 Bundle analysis: ${fileCount} files, ${sizeInMB}MB total`);

      return {
        success: true,
        totalSize: totalSize,
        sizeInMB: sizeInMB,
        fileCount: fileCount,
      };
    } catch (error) {
      this.log(`❌ Bundle analysis failed: ${error.message}`);
      return {
        success: false,
        error: error.message,
      };
    }
  }

  async analyzePagePerformance() {
    this.log('📄 Analyzing page performance...');

    const pagesDir = path.join(this.projectRoot, 'pages');
    const componentsDir = path.join(this.projectRoot, 'components');

    const analysis = {
      pages: this.analyzeDirectory(pagesDir, ['.tsx', '.jsx', '.ts', '.js']),
      components: this.analyzeDirectory(componentsDir, [
        '.tsx',
        '.jsx',
        '.ts',
        '.js',
      ]),
    };

    this.log(
      `📊 Page analysis: ${analysis.pages.count} pages, ${analysis.components.count} components`
    );

    return analysis;
  }

  analyzeDirectory(dir, extensions) {
    if (!fs.existsSync(dir)) {
      return { count: 0, totalSize: 0, files: [] };
    }

    const files = this.getAllFiles(dir, extensions);
    let totalSize = 0;
    const fileDetails = [];

    for (const file of files) {
      const stats = fs.statSync(file);
      totalSize += stats.size;
      fileDetails.push({
        path: path.relative(this.projectRoot, file),
        size: stats.size,
        modified: stats.mtime,
      });
    }

    return {
      count: files.length,
      totalSize: totalSize,
      files: fileDetails,
    };
  }

  getAllFiles(dir, extensions = []) {
    let files = [];

    try {
      const items = fs.readdirSync(dir);

      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          files = files.concat(this.getAllFiles(fullPath, extensions));
        } else if (stat.isFile()) {
          if (
            extensions.length === 0 ||
            extensions.includes(path.extname(item))
          ) {
            files.push(fullPath);
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }

    return files;
  }

  async generatePerformanceReport() {
    this.log('📊 Generating performance report...');

    const report = {
      timestamp: new Date().toISOString(),
      buildPerformance: await this.analyzeBuildPerformance(),
      bundleAnalysis: await this.analyzeBundleSize(),
      pageAnalysis: await this.analyzePagePerformance(),
      recommendations: [],
    };

    // Generate recommendations
    if (
      report.buildPerformance.success &&
      report.buildPerformance.buildTime > 60000
    ) {
      report.recommendations.push({
        type: 'performance',
        message:
          'Build time is over 60 seconds. Consider optimizing dependencies.',
        action: 'Review and remove unused dependencies.',
      });
    }

    if (
      report.bundleAnalysis.success &&
      parseFloat(report.bundleAnalysis.sizeInMB) > 10
    ) {
      report.recommendations.push({
        type: 'bundle',
        message: 'Bundle size is over 10MB. Consider code splitting.',
        action: 'Implement dynamic imports and code splitting.',
      });
    }

    const reportPath = path.join(
      this.reportsDir,
      'enhanced-performance-report.json'
    );
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');

    this.log(`📊 Performance report generated: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('🎯 Starting Enhanced Performance Monitor');

    try {
      const report = await this.generatePerformanceReport();

      this.log('🎉 Enhanced Performance Monitor Completed');
      this.log(`📊 Recommendations: ${report.recommendations.length}`);

      return report;
    } catch (error) {
      this.log(`❌ Fatal error in performance monitor: ${error.message}`);
      throw error;
    }
  }
}

// Run the enhanced performance monitor
const monitor = new EnhancedPerformanceMonitor();
monitor
  .run()
  .then(report => {
    console.log('✅ Enhanced Performance Monitor completed successfully!');
    console.log(`📊 Recommendations: ${report.recommendations.length}`);
    process.exit(0);
  })
  .catch(error => {
    console.error('❌ Performance monitor failed:', error);
    process.exit(1);
  });
