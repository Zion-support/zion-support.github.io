#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class PerformanceOptimizationAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.logFile = path.join(this.reportsDir, 'performance-optimization.log');
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

  async runCommand(command, description) {
    this.log(`🚀 Starting: ${description}`);
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 300000, // 5 minutes timeout
      });
      this.log(`✅ Completed: ${description}`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async analyzeBundleSize() {
    this.log('📦 Analyzing Bundle Size');

    const bundleAnalysis = [
      {
        command: 'npm run build',
        description: 'Build for Analysis',
      },
      {
        command: 'npm run analyze',
        description: 'Bundle Analysis',
      },
    ];

    const results = [];
    for (const analysis of bundleAnalysis) {
      const result = await this.runCommand(
        analysis.command,
        analysis.description
      );
      results.push({ ...analysis, ...result });
    }

    return results;
  }

  async optimizeImages() {
    this.log('🖼️ Optimizing Images');

    const imageOptimization = [
      {
        command:
          'find public -name "*.jpg" -o -name "*.png" -o -name "*.jpeg" | head -10',
        description: 'Find Images to Optimize',
      },
    ];

    const results = [];
    for (const optimization of imageOptimization) {
      const result = await this.runCommand(
        optimization.command,
        optimization.description
      );
      results.push({ ...optimization, ...result });
    }

    return results;
  }

  async optimizeCode() {
    this.log('⚡ Optimizing Code');

    const codeOptimization = [
      {
        command: 'npm run lint:fix',
        description: 'Fix Linting Issues',
      },
      {
        command: 'npm run format',
        description: 'Format Code',
      },
    ];

    const results = [];
    for (const optimization of codeOptimization) {
      const result = await this.runCommand(
        optimization.command,
        optimization.description
      );
      results.push({ ...optimization, ...result });
    }

    return results;
  }

  async runPerformanceAudit() {
    this.log('🔍 Running Performance Audit');

    const performanceAudit = [
      {
        command: 'npm run perf:monitor',
        description: 'Performance Monitoring',
      },
      {
        command: 'npm run perf:lighthouse',
        description: 'Lighthouse Performance Audit',
      },
    ];

    const results = [];
    for (const audit of performanceAudit) {
      const result = await this.runCommand(audit.command, audit.description);
      results.push({ ...audit, ...result });
    }

    return results;
  }

  async optimizeDependencies() {
    this.log('📚 Optimizing Dependencies');

    const dependencyOptimization = [
      {
        command: 'npm audit fix',
        description: 'Fix Security Vulnerabilities',
      },
      {
        command: 'npm outdated',
        description: 'Check for Outdated Dependencies',
      },
    ];

    const results = [];
    for (const optimization of dependencyOptimization) {
      const result = await this.runCommand(
        optimization.command,
        optimization.description
      );
      results.push({ ...optimization, ...result });
    }

    return results;
  }

  async generatePerformanceReport(results) {
    this.log('📊 Generating Performance Report');

    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalOptimizations: results.length,
        successful: results.filter(r => r.success).length,
        failed: results.filter(r => !r.success).length,
      },
      optimizationCategories: {
        bundle: results.filter(
          r =>
            r.description.includes('Bundle') ||
            r.description.includes('Analysis')
        ),
        images: results.filter(r => r.description.includes('Image')),
        code: results.filter(
          r =>
            r.description.includes('Code') ||
            r.description.includes('Lint') ||
            r.description.includes('Format')
        ),
        performance: results.filter(
          r =>
            r.description.includes('Performance') ||
            r.description.includes('Lighthouse')
        ),
        dependencies: results.filter(
          r =>
            r.description.includes('Dependency') ||
            r.description.includes('audit') ||
            r.description.includes('outdated')
        ),
      },
      details: results,
    };

    const reportFile = path.join(
      this.reportsDir,
      'performance-optimization-report.json'
    );
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    this.log(`📄 Performance report saved to: ${reportFile}`);
    return report;
  }

  async run() {
    this.log('🎯 Starting Performance Optimization Automation');

    try {
      const allResults = [];

      // Run all optimization categories
      const bundleResults = await this.analyzeBundleSize();
      allResults.push(...bundleResults);

      const imageResults = await this.optimizeImages();
      allResults.push(...imageResults);

      const codeResults = await this.optimizeCode();
      allResults.push(...codeResults);

      const performanceResults = await this.runPerformanceAudit();
      allResults.push(...performanceResults);

      const dependencyResults = await this.optimizeDependencies();
      allResults.push(...dependencyResults);

      // Generate comprehensive report
      const report = await this.generatePerformanceReport(allResults);

      // Check overall success
      const failedOptimizations = allResults.filter(r => !r.success);
      const success = failedOptimizations.length === 0;

      if (success) {
        this.log('🎉 Performance optimization completed successfully');
      } else {
        this.log(`❌ ${failedOptimizations.length} optimizations failed`);
      }

      return { success, report, failedOptimizations };
    } catch (error) {
      this.log(
        `❌ Performance optimization automation failed: ${error.message}`
      );
      return { success: false, error: error.message };
    }
  }
}

// Run the automation
if (require.main === module) {
  const automation = new PerformanceOptimizationAutomation();
  automation.run().then(result => {
    if (result.success) {
      console.log('✅ Performance optimization completed successfully');
      process.exit(0);
    } else {
      console.log('❌ Performance optimization failed');
      process.exit(1);
    }
  });
}

module.exports = PerformanceOptimizationAutomation;
