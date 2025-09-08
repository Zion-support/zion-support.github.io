#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

class PerformanceMonitor {
  constructor() {
    this.logFile = path.join(__dirname, '../../logs/performance-monitor.log');
    this.ensureLogDirectory();
    this.metrics = {};
    this.performanceData = [];
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runCommand(command, description) {
    try {
      this.log(`🔄 Running: ${description}`);
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: path.join(__dirname, '../../')
      });
      this.log(`✅ Success: ${description}`);
      return result;
    } catch (error) {
      this.log(`❌ Error in ${description}: ${error.message}`);
      return null;
    }
  }

  async analyzeBundleSizes() {
    this.log('📦 Analyzing bundle sizes...');
    
    try {
      const distPath = path.join(__dirname, '../../dist');
      if (!fs.existsSync(distPath)) {
        this.log('⚠️ Dist folder not found, building project first');
        await this.runCommand('npm run build', 'Build project');
      }
      
      if (!fs.existsSync(distPath)) {
        this.log('❌ Build failed, cannot analyze bundles');
        return;
      }
      
      const files = fs.readdirSync(distPath);
      let totalSize = 0;
      const bundleAnalysis = {
        js: { files: [], totalSize: 0, count: 0 },
        css: { files: [], totalSize: 0, count: 0 },
        html: { files: [], totalSize: 0, count: 0 },
        other: { files: [], totalSize: 0, count: 0 }
      };
      
      for (const file of files) {
        const filePath = path.join(distPath, file);
        try {
          const stats = fs.statSync(filePath);
          const sizeInKB = Math.round(stats.size / 1024 * 100) / 100;
          totalSize += stats.size;
          
          const fileInfo = {
            name: file,
            size: sizeInKB,
            sizeBytes: stats.size
          };
          
          if (file.endsWith('.js')) {
            bundleAnalysis.js.files.push(fileInfo);
            bundleAnalysis.js.totalSize += stats.size;
            bundleAnalysis.js.count++;
          } else if (file.endsWith('.css')) {
            bundleAnalysis.css.files.push(fileInfo);
            bundleAnalysis.css.totalSize += stats.size;
            bundleAnalysis.css.count++;
          } else if (file.endsWith('.html')) {
            bundleAnalysis.html.files.push(fileInfo);
            bundleAnalysis.html.totalSize += stats.size;
            bundleAnalysis.html.count++;
          } else {
            bundleAnalysis.other.files.push(fileInfo);
            bundleAnalysis.other.totalSize += stats.size;
            bundleAnalysis.other.count++;
          }
        } catch (error) {
          this.log(`⚠️ Error analyzing file ${file}: ${error.message}`);
        }
      }
      
      // Convert to MB for reporting
      bundleAnalysis.js.totalSizeMB = Math.round(bundleAnalysis.js.totalSize / (1024 * 1024) * 100) / 100;
      bundleAnalysis.css.totalSizeMB = Math.round(bundleAnalysis.css.totalSize / (1024 * 1024) * 100) / 100;
      bundleAnalysis.html.totalSizeMB = Math.round(bundleAnalysis.html.totalSize / (1024 * 1024) * 100) / 100;
      bundleAnalysis.other.totalSizeMB = Math.round(bundleAnalysis.other.totalSize / (1024 * 1024) * 100) / 100;
      
      const totalSizeMB = Math.round(totalSize / (1024 * 1024) * 100) / 100;
      
      this.metrics.bundleAnalysis = {
        totalSize: totalSizeMB,
        breakdown: bundleAnalysis
      };
      
      this.log(`📊 Bundle analysis completed:`);
      this.log(`  - Total size: ${totalSizeMB} MB`);
      this.log(`  - JavaScript: ${bundleAnalysis.js.count} files, ${bundleAnalysis.js.totalSizeMB} MB`);
      this.log(`  - CSS: ${bundleAnalysis.css.count} files, ${bundleAnalysis.css.totalSizeMB} MB`);
      this.log(`  - HTML: ${bundleAnalysis.html.count} files, ${bundleAnalysis.html.totalSizeMB} MB`);
      this.log(`  - Other: ${bundleAnalysis.other.count} files, ${bundleAnalysis.other.totalSizeMB} MB`);
      
      // Check for performance issues
      if (totalSize > 5 * 1024 * 1024) { // 5MB
        this.log('⚠️ Bundle size is large, consider optimization');
      }
      
      // Check for large individual files
      const largeFiles = [];
      for (const category of Object.values(bundleAnalysis)) {
        for (const file of category.files) {
          if (file.size > 500) { // 500KB
            largeFiles.push({ ...file, category: Object.keys(bundleAnalysis).find(key => bundleAnalysis[key] === category) });
          }
        }
      }
      
      if (largeFiles.length > 0) {
        this.log('⚠️ Large files detected:');
        for (const file of largeFiles) {
          this.log(`  - ${file.name} (${file.size} KB) - ${file.category}`);
        }
      }
      
    } catch (error) {
      this.log(`❌ Bundle analysis failed: ${error.message}`);
    }
  }

  async measureBuildPerformance() {
    this.log('⚡ Measuring build performance...');
    
    try {
      const startTime = Date.now();
      
      // Clean build
      if (fs.existsSync(path.join(__dirname, '../../dist'))) {
        fs.rmSync(path.join(__dirname, '../../dist'), { recursive: true, force: true });
      }
      
      const buildResult = await this.runCommand('npm run build', 'Build project');
      const endTime = Date.now();
      
      if (buildResult) {
        const buildTime = endTime - startTime;
        const buildTimeSeconds = Math.round(buildTime / 1000 * 100) / 100;
        
        this.metrics.buildPerformance = {
          buildTime: buildTimeSeconds,
          buildTimeMs: buildTime,
          status: 'success'
        };
        
        this.log(`✅ Build completed in ${buildTimeSeconds} seconds`);
        
        if (buildTime > 60000) { // 1 minute
          this.log('⚠️ Build time is slow, consider optimization');
        }
      } else {
        this.metrics.buildPerformance = {
          status: 'failed'
        };
        this.log('❌ Build failed');
      }
      
    } catch (error) {
      this.log(`❌ Build performance measurement failed: ${error.message}`);
      this.metrics.buildPerformance = {
        status: 'failed',
        error: error.message
      };
    }
  }

  async checkDependencies() {
    this.log('🔍 Checking dependencies for performance impact...');
    
    try {
      // Check for unused dependencies
      try {
        const depcheckResult = execSync('npx depcheck --json', { 
          encoding: 'utf8',
          stdio: 'pipe',
          cwd: path.join(__dirname, '../../')
        });
        
        const depcheck = JSON.parse(depcheckResult);
        
        this.metrics.dependencies = {
          unused: depcheck.dependencies || [],
          missing: depcheck.missing || {},
          using: depcheck.using || {}
        };
        
        this.log(`📦 Dependency analysis:`);
        this.log(`  - Unused: ${depcheck.dependencies?.length || 0}`);
        this.log(`  - Missing: ${Object.keys(depcheck.missing || {}).length}`);
        this.log(`  - Using: ${Object.keys(depcheck.using || {}).length}`);
        
        if (depcheck.dependencies && depcheck.dependencies.length > 0) {
          this.log('⚠️ Unused dependencies found, consider removing them');
        }
        
      } catch (error) {
        this.log('⚠️ Could not run dependency check');
        this.metrics.dependencies = { error: error.message };
      }
      
      // Check package.json for performance-related issues
      const packageJsonPath = path.join(__dirname, '../../package.json');
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        
        const devDeps = Object.keys(packageJson.devDependencies || {});
        const prodDeps = Object.keys(ppackageJson.dependencies || {});
        
        this.metrics.packageInfo = {
          totalDependencies: devDeps.length + prodDeps.length,
          devDependencies: devDeps.length,
          productionDependencies: prodDeps.length
        };
        
        this.log(`📋 Package analysis:`);
        this.log(`  - Total dependencies: ${this.metrics.packageInfo.totalDependencies}`);
        this.log(`  - Dev dependencies: ${this.metrics.packageInfo.devDependencies}`);
        this.log(`  - Production dependencies: ${this.metrics.packageInfo.productionDependencies}`);
      }
      
    } catch (error) {
      this.log(`❌ Dependency check failed: ${error.message}`);
    }
  }

  async runLighthouseAudit() {
    this.log('🏗️ Running Lighthouse performance audit...');
    
    try {
      // Check if Lighthouse is available
      try {
        execSync('npx lighthouse --version', { stdio: 'ignore' });
      } catch (error) {
        this.log('📦 Installing Lighthouse...');
        await this.runCommand('npm install -g lighthouse', 'Install Lighthouse');
      }
      
      // Build and start the application
      await this.runCommand('npm run build', 'Build for Lighthouse audit');
      
      // Start the application
      const startResult = await this.runCommand('npm start', 'Start application for audit');
      
      if (startResult) {
        this.log('🚀 Application started, waiting for it to be ready...');
        await new Promise(resolve => setTimeout(resolve, 30000));
        
        try {
          // Run Lighthouse audit
          const lighthouseResult = await this.runCommand(
            'npx lighthouse http://localhost:4173 --output=json --output-path=./logs/lighthouse-report.json --chrome-flags="--headless --no-sandbox"',
            'Lighthouse audit'
          );
          
          if (lighthouseResult) {
            this.log('✅ Lighthouse audit completed');
            
            // Parse results
            const reportPath = path.join(__dirname, '../../logs/lighthouse-report.json');
            if (fs.existsSync(reportPath)) {
              const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
              
              this.metrics.lighthouse = {
                performance: Math.round(report.categories.performance.score * 100),
                accessibility: Math.round(report.categories.accessibility.score * 100),
                bestPractices: Math.round(report.categories['best-practices'].score * 100),
                seo: Math.round(report.categories.seo.score * 100),
                firstContentfulPaint: report.audits['first-contentful-paint'].numericValue,
                largestContentfulPaint: report.audits['largest-contentful-paint'].numericValue,
                totalBlockingTime: report.audits['total-blocking-time'].numericValue,
                cumulativeLayoutShift: report.audits['cumulative-layout-shift'].numericValue
              };
              
              this.log(`📊 Lighthouse scores:`);
              this.log(`  - Performance: ${this.metrics.lighthouse.performance}/100`);
              this.log(`  - Accessibility: ${this.metrics.lighthouse.accessibility}/100`);
              this.log(`  - Best Practices: ${this.metrics.lighthouse.bestPractices}/100`);
              this.log(`  - SEO: ${this.metrics.lighthouse.seo}/100`);
              
              // Check for performance issues
              if (this.metrics.lighthouse.performance < 90) {
                this.log('⚠️ Performance score is below 90, consider optimization');
              }
            }
          }
        } catch (error) {
          this.log(`⚠️ Lighthouse audit failed: ${error.message}`);
        }
        
        // Stop the application
        try {
          execSync('pkill -f "vite preview"', { stdio: 'ignore' });
        } catch (error) {
          // Ignore errors if process is already stopped
        }
      }
      
    } catch (error) {
      this.log(`❌ Lighthouse audit failed: ${error.message}`);
    }
  }

  async generatePerformanceReport() {
    this.log('📊 Generating performance report...');
    
    try {
      const reportPath = path.join(__dirname, '../../logs/performance-report.md');
      const timestamp = new Date().toISOString();
      
      let report = `# Performance Report - ${timestamp}

## Summary
This report was generated automatically by the PM2 Performance Monitor automation.

## Performance Metrics
`;

      // Bundle analysis
      if (this.metrics.bundleAnalysis) {
        report += `### Bundle Analysis
- **Total size**: ${this.metrics.bundleAnalysis.totalSize} MB
- **JavaScript**: ${this.metrics.bundleAnalysis.breakdown.js.count} files, ${this.metrics.bundleAnalysis.breakdown.js.totalSizeMB} MB
- **CSS**: ${this.metrics.bundleAnalysis.breakdown.css.count} files, ${this.metrics.bundleAnalysis.breakdown.css.totalSizeMB} MB
- **HTML**: ${this.metrics.bundleAnalysis.breakdown.html.count} files, ${this.metrics.bundleAnalysis.breakdown.html.totalSizeMB} MB
- **Other**: ${this.metrics.bundleAnalysis.breakdown.other.count} files, ${this.metrics.bundleAnalysis.breakdown.other.totalSizeMB} MB

`;
      }
      
      // Build performance
      if (this.metrics.buildPerformance) {
        report += `### Build Performance
- **Status**: ${this.metrics.buildPerformance.status}
`;
        if (this.metrics.buildPerformance.buildTime) {
          report += `- **Build time**: ${this.metrics.buildPerformance.buildTime} seconds
`;
        }
        report += '\n';
      }
      
      // Dependencies
      if (this.metrics.dependencies) {
        report += `### Dependencies
- **Unused dependencies**: ${this.metrics.dependencies.unused?.length || 0}
- **Missing dependencies**: ${Object.keys(this.metrics.dependencies.missing || {}).length}
- **Using dependencies**: ${Object.keys(this.metrics.dependencies.using || {}).length}

`;
      }
      
      // Package info
      if (this.metrics.packageInfo) {
        report += `### Package Information
- **Total dependencies**: ${this.metrics.packageInfo.totalDependencies}
- **Dev dependencies**: ${this.metrics.packageInfo.devDependencies}
- **Production dependencies**: ${this.metrics.packageInfo.productionDependencies}

`;
      }
      
      // Lighthouse scores
      if (this.metrics.lighthouse) {
        report += `### Lighthouse Scores
- **Performance**: ${this.metrics.lighthouse.performance}/100
- **Accessibility**: ${this.metrics.lighthouse.accessibility}/100
- **Best Practices**: ${this.metrics.lighthouse.bestPractices}/100
- **SEO**: ${this.metrics.lighthouse.seo}/100

### Core Web Vitals
- **First Contentful Paint**: ${Math.round(this.metrics.lighthouse.firstContentfulPaint)}ms
- **Largest Contentful Paint**: ${Math.round(this.metrics.lighthouse.largestContentfulPaint)}ms
- **Total Blocking Time**: ${Math.round(this.metrics.lighthouse.totalBlockingTime)}ms
- **Cumulative Layout Shift**: ${this.metrics.lighthouse.cumulativeLayoutShift.toFixed(3)}

`;
      }

      report += `## Recommendations
1. Monitor bundle sizes and optimize large files
2. Remove unused dependencies
3. Optimize build performance if slow
4. Improve Lighthouse scores if below 90
5. Monitor Core Web Vitals

## Next Steps
- Run this automation every 2 hours
- Review performance trends over time
- Implement optimizations based on findings
- Update automation scripts as needed

---
Generated by PM2 Performance Monitor Automation
`;

      fs.writeFileSync(reportPath, report);
      this.log(`📄 Report generated: ${reportPath}`);
      
      // Also generate JSON report
      const jsonReportPath = path.join(__dirname, '../../logs/performance-report.json');
      const jsonReport = {
        timestamp,
        metrics: this.metrics,
        summary: {
          hasPerformanceIssues: this.hasPerformanceIssues()
        }
      };
      
      fs.writeFileSync(jsonReportPath, JSON.stringify(jsonReport, null, 2));
      this.log(`📄 JSON report generated: ${jsonReportPath}`);
      
    } catch (error) {
      this.log(`❌ Report generation failed: ${error.message}`);
    }
    
    this.log('✅ Report Generation completed');
  }

  hasPerformanceIssues() {
    // Check for various performance issues
    if (this.metrics.bundleAnalysis?.totalSize > 5) return true; // > 5MB
    if (this.metrics.buildPerformance?.buildTime > 60) return true; // > 60 seconds
    if (this.metrics.lighthouse?.performance < 90) return true; // < 90 score
    if (this.metrics.dependencies?.unused?.length > 5) return true; // > 5 unused deps
    return false;
  }

  async run() {
    this.log('🚀 Starting Performance Monitor Process');
    
    try {
      // Run all performance checks
      await this.analyzeBundleSizes();
      await this.measureBuildPerformance();
      await this.checkDependencies();
      await this.runLighthouseAudit();
      
      // Generate report
      await this.generatePerformanceReport();
      
      // Summary
      this.log(`🎉 Performance Monitor Process completed`);
      
      if (this.hasPerformanceIssues()) {
        this.log('⚠️ Some performance issues were detected. Please review the report.');
      } else {
        this.log('✅ All performance metrics are within acceptable ranges!');
      }
      
    } catch (error) {
      this.log(`💥 Performance Monitor Process failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the process if this script is executed directly
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.run();
}

module.exports = PerformanceMonitor;