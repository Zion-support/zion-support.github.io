#!/usr/bin/env node

/**
 * Error Monitoring Dashboard - PM2 Automation Script
 * 
 * This script provides comprehensive monitoring and reporting of project errors:
 * - Real-time error tracking
 * - Error trend analysis
 * - Fix effectiveness metrics
 * - Performance monitoring
 * - Automated alerting
 * 
 * Runs every 5 minutes to provide continuous monitoring
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const glob = require('glob');

class ErrorMonitoringDashboard {
  constructor() {
    this.projectRoot = process.cwd();
    this.dashboardFile = path.join(this.projectRoot, 'error-monitoring-dashboard.json');
    this.historyFile = path.join(this.projectRoot, 'error-monitoring-history.json');
    this.startTime = Date.now();
    this.errorHistory = this.loadErrorHistory();
  }

  async run() {
    console.log('🚀 Starting Error Monitoring Dashboard...');
    
    try {
      // Step 1: Collect current error metrics
      const currentMetrics = await this.collectCurrentMetrics();
      
      // Step 2: Analyze error trends
      const trendAnalysis = this.analyzeErrorTrends(currentMetrics);
      
      // Step 3: Generate comprehensive report
      const dashboard = this.generateDashboard(currentMetrics, trendAnalysis);
      
      // Step 4: Save to history
      this.saveToHistory(currentMetrics);
      
      // Step 5: Generate alerts if needed
      await this.generateAlerts(dashboard);
      
      console.log('✅ Error Monitoring Dashboard completed!');
      
    } catch (error) {
      console.error('❌ Error in Error Monitoring Dashboard:', error);
      await this.generateErrorReport(error);
    }
  }

  async collectCurrentMetrics() {
    console.log('📊 Collecting current error metrics...');
    
    const metrics = {
      timestamp: new Date().toISOString(),
      typescript: await this.getTypeScriptMetrics(),
      eslint: await this.getESLintMetrics(),
      build: await this.getBuildMetrics(),
      runtime: await this.getRuntimeMetrics(),
      performance: await this.getPerformanceMetrics(),
      files: await this.getFileMetrics()
    };
    
    return metrics;
  }

  async getTypeScriptMetrics() {
    try {
      const output = execSync('npm run type-check 2>&1', { encoding: 'utf8' });
      const errors = this.parseTypeScriptErrors(output);
      
      return {
        totalErrors: errors.length,
        errorTypes: this.categorizeTypeScriptErrors(errors),
        filesWithErrors: this.getFilesWithErrors(errors),
        criticalErrors: errors.filter(e => this.isCriticalError(e)).length,
        warnings: errors.filter(e => e.message.includes('warning')).length
      };
    } catch (error) {
      return {
        totalErrors: 0,
        errorTypes: {},
        filesWithErrors: [],
        criticalErrors: 0,
        warnings: 0
      };
    }
  }

  async getESLintMetrics() {
    try {
      const output = execSync('npm run lint 2>&1', { encoding: 'utf8' });
      const errors = this.parseESLintErrors(output);
      
      return {
        totalErrors: errors.length,
        errorTypes: this.categorizeESLintErrors(errors),
        filesWithErrors: this.getFilesWithErrors(errors),
        criticalErrors: errors.filter(e => this.isCriticalError(e)).length,
        warnings: errors.filter(e => e.message.includes('warning')).length
      };
    } catch (error) {
      return {
        totalErrors: 0,
        errorTypes: {},
        filesWithErrors: [],
        criticalErrors: 0,
        warnings: 0
      };
    }
  }

  async getBuildMetrics() {
    try {
      const startTime = Date.now();
      execSync('npm run build 2>&1', { encoding: 'utf8' });
      const buildTime = Date.now() - startTime;
      
      return {
        success: true,
        buildTime,
        bundleSize: this.getBundleSize(),
        buildErrors: 0
      };
    } catch (error) {
      return {
        success: false,
        buildTime: 0,
        bundleSize: 0,
        buildErrors: this.parseBuildErrors(error.stdout || error.stderr || error.message).length
      };
    }
  }

  async getRuntimeMetrics() {
    // Check for runtime errors in logs or console
    const logFiles = glob.sync('*.log') || [];
    const runtimeErrors = [];
    
    for (const logFile of logFiles) {
      try {
        const content = fs.readFileSync(logFile, 'utf8');
        const errorLines = content.split('\n').filter(line => 
          line.includes('ERROR') || line.includes('Error') || line.includes('error')
        );
        runtimeErrors.push(...errorLines);
      } catch (error) {
        // Skip files that can't be read
      }
    }
    
    return {
      totalErrors: runtimeErrors.length,
      errorTypes: this.categorizeRuntimeErrors(runtimeErrors),
      criticalErrors: runtimeErrors.filter(e => this.isCriticalError(e)).length
    };
  }

  async getPerformanceMetrics() {
    try {
      const startTime = Date.now();
      execSync('npm run dev 2>&1', { timeout: 30000 }); // 30 second timeout
      const startupTime = Date.now() - startTime;
      
      return {
        startupTime,
        memoryUsage: process.memoryUsage(),
        cpuUsage: process.cpuUsage()
      };
    } catch (error) {
      return {
        startupTime: 0,
        memoryUsage: process.memoryUsage(),
        cpuUsage: process.cpuUsage()
      };
    }
  }

  async getFileMetrics() {
    const tsxFiles = glob.sync('src/**/*.{ts,tsx,js,jsx}');
    const totalFiles = tsxFiles.length;
    const totalLines = tsxFiles.reduce((total, file) => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        return total + content.split('\n').length;
      } catch (error) {
        return total;
      }
    }, 0);
    
    return {
      totalFiles,
      totalLines,
      averageLinesPerFile: totalLines / totalFiles,
      fileTypes: this.getFileTypeDistribution(tsxFiles)
    };
  }

  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error TS')) {
        const match = line.match(/src\/[^:]+:\d+:\d+ - error TS\d+:(.+)/);
        if (match) {
          errors.push({
            type: 'typescript',
            message: match[1].trim(),
            fullLine: line,
            file: line.match(/src\/[^:]+/)?.[0] || null,
            lineNumber: line.match(/:(\d+):/)?.[1] || null,
            errorCode: line.match(/error TS(\d+):/)?.[1] || null
          });
        }
      }
    }
    
    return errors;
  }

  parseESLintErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error') || line.includes('warning')) {
        errors.push({
          type: 'eslint',
          message: line.trim(),
          fullLine: line
        });
      }
    }
    
    return errors;
  }

  parseBuildErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error') || line.includes('failed') || line.includes('Error')) {
        errors.push({
          type: 'build',
          message: line.trim(),
          fullLine: line
        });
      }
    }
    
    return errors;
  }

  categorizeTypeScriptErrors(errors) {
    const categories = {};
    
    for (const error of errors) {
      if (error.message.includes('Duplicate identifier')) {
        categories.duplicateIdentifiers = (categories.duplicateIdentifiers || 0) + 1;
      } else if (error.message.includes('Module has no default export')) {
        categories.missingExports = (categories.missingExports || 0) + 1;
      } else if (error.message.includes('Object literal may only specify known properties')) {
        categories.objectLiteral = (categories.objectLiteral || 0) + 1;
      } else if (error.message.includes('is not assignable to parameter of type')) {
        categories.typeMismatch = (categories.typeMismatch || 0) + 1;
      } else if (error.message.includes('is declared but its value is never read')) {
        categories.unusedVariables = (categories.unusedVariables || 0) + 1;
      } else {
        categories.other = (categories.other || 0) + 1;
      }
    }
    
    return categories;
  }

  categorizeESLintErrors(errors) {
    const categories = {};
    
    for (const error of errors) {
      if (error.message.includes('import')) {
        categories.importIssues = (categories.importIssues || 0) + 1;
      } else if (error.message.includes('export')) {
        categories.exportIssues = (categories.exportIssues || 0) + 1;
      } else if (error.message.includes('unused')) {
        categories.unusedVariables = (categories.unusedVariables || 0) + 1;
      } else {
        categories.other = (categories.other || 0) + 1;
      }
    }
    
    return categories;
  }

  categorizeRuntimeErrors(errors) {
    const categories = {};
    
    for (const error of errors) {
      if (error.includes('TypeError')) {
        categories.typeErrors = (categories.typeErrors || 0) + 1;
      } else if (error.includes('ReferenceError')) {
        categories.referenceErrors = (categories.referenceErrors || 0) + 1;
      } else if (error.includes('SyntaxError')) {
        categories.syntaxErrors = (categories.syntaxErrors || 0) + 1;
      } else {
        categories.other = (categories.other || 0) + 1;
      }
    }
    
    return categories;
  }

  getFilesWithErrors(errors) {
    const files = new Set();
    
    for (const error of errors) {
      if (error.file) {
        files.add(error.file);
      }
    }
    
    return Array.from(files);
  }

  isCriticalError(error) {
    const criticalPatterns = [
      'Cannot find module',
      'Module parse failed',
      'Unexpected token',
      'SyntaxError',
      'ReferenceError'
    ];
    
    return criticalPatterns.some(pattern => 
      error.message.includes(pattern) || error.fullLine.includes(pattern)
    );
  }

  getBundleSize() {
    try {
      if (fs.existsSync('dist')) {
        const stats = fs.statSync('dist');
        return stats.size;
      }
      return 0;
    } catch (error) {
      return 0;
    }
  }

  getFileTypeDistribution(files) {
    const distribution = {};
    
    for (const file of files) {
      const ext = path.extname(file);
      distribution[ext] = (distribution[ext] || 0) + 1;
    }
    
    return distribution;
  }

  analyzeErrorTrends(currentMetrics) {
    const trends = {
      typescript: this.analyzeTypeScriptTrends(currentMetrics.typescript),
      eslint: this.analyzeESLintTrends(currentMetrics.eslint),
      overall: this.analyzeOverallTrends(currentMetrics)
    };
    
    return trends;
  }

  analyzeTypeScriptTrends(current) {
    const previous = this.getPreviousMetrics('typescript');
    
    if (!previous) {
      return { trend: 'new', change: 0, improvement: false };
    }
    
    const change = current.totalErrors - previous.totalErrors;
    const improvement = change < 0;
    
    return {
      trend: improvement ? 'improving' : change > 0 ? 'worsening' : 'stable',
      change: Math.abs(change),
      improvement,
      percentageChange: ((change / previous.totalErrors) * 100).toFixed(2)
    };
  }

  analyzeESLintTrends(current) {
    const previous = this.getPreviousMetrics('eslint');
    
    if (!previous) {
      return { trend: 'new', change: 0, improvement: false };
    }
    
    const change = current.totalErrors - previous.totalErrors;
    const improvement = change < 0;
    
    return {
      trend: improvement ? 'improving' : change > 0 ? 'worsening' : 'stable',
      change: Math.abs(change),
      improvement,
      percentageChange: ((change / previous.totalErrors) * 100).toFixed(2)
    };
  }

  analyzeOverallTrends(current) {
    const totalCurrent = current.typescript.totalErrors + current.eslint.totalErrors;
    const previous = this.getPreviousMetrics('overall');
    
    if (!previous) {
      return { trend: 'new', change: 0, improvement: false };
    }
    
    const change = totalCurrent - previous;
    const improvement = change < 0;
    
    return {
      trend: improvement ? 'improving' : change > 0 ? 'worsening' : 'stable',
      change: Math.abs(change),
      improvement,
      percentageChange: ((change / previous) * 100).toFixed(2)
    };
  }

  getPreviousMetrics(type) {
    if (this.errorHistory.length === 0) return null;
    
    const lastMetrics = this.errorHistory[this.errorHistory.length - 1];
    
    if (type === 'overall') {
      return lastMetrics.typescript.totalErrors + lastMetrics.eslint.totalErrors;
    }
    
    return lastMetrics[type]?.totalErrors || 0;
  }

  generateDashboard(metrics, trends) {
    const dashboard = {
      timestamp: new Date().toISOString(),
      summary: {
        totalErrors: metrics.typescript.totalErrors + metrics.eslint.totalErrors,
        criticalErrors: metrics.typescript.criticalErrors + metrics.eslint.criticalErrors,
        buildStatus: metrics.build.success ? 'success' : 'failed',
        overallTrend: trends.overall.trend
      },
      details: {
        typescript: {
          ...metrics.typescript,
          trends: trends.typescript
        },
        eslint: {
          ...metrics.eslint,
          trends: trends.eslint
        },
        build: metrics.build,
        runtime: metrics.runtime,
        performance: metrics.performance,
        files: metrics.files
      },
      recommendations: this.generateRecommendations(metrics, trends),
      alerts: this.generateAlerts(metrics, trends)
    };
    
    fs.writeFileSync(this.dashboardFile, JSON.stringify(dashboard, null, 2));
    return dashboard;
  }

  generateRecommendations(metrics, trends) {
    const recommendations = [];
    
    if (metrics.typescript.totalErrors > 100) {
      recommendations.push({
        priority: 'high',
        category: 'typescript',
        message: 'High number of TypeScript errors detected. Consider running the TypeScript Error Fixer automation.',
        action: 'Run typescript-error-fixer automation'
      });
    }
    
    if (metrics.typescript.duplicateIdentifiers > 50) {
      recommendations.push({
        priority: 'high',
        category: 'duplicate-identifiers',
        message: 'Many duplicate identifier errors. Run the Duplicate Identifier Fixer automation.',
        action: 'Run duplicate-identifier-fixer automation'
      });
    }
    
    if (!metrics.build.success) {
      recommendations.push({
        priority: 'critical',
        category: 'build',
        message: 'Build is failing. Fix critical errors before deployment.',
        action: 'Review build errors and fix critical issues'
      });
    }
    
    if (trends.overall.trend === 'worsening') {
      recommendations.push({
        priority: 'medium',
        category: 'trends',
        message: 'Error count is increasing. Review recent changes and run error fixers.',
        action: 'Run comprehensive-error-fixer automation'
      });
    }
    
    return recommendations;
  }

  generateAlerts(metrics, trends) {
    const alerts = [];
    
    if (metrics.typescript.totalErrors > 500) {
      alerts.push({
        level: 'critical',
        message: `Critical: ${metrics.typescript.totalErrors} TypeScript errors detected`,
        timestamp: new Date().toISOString()
      });
    }
    
    if (metrics.build.success === false) {
      alerts.push({
        level: 'critical',
        message: 'Critical: Build is failing',
        timestamp: new Date().toISOString()
      });
    }
    
    if (trends.overall.trend === 'worsening' && trends.overall.change > 100) {
      alerts.push({
        level: 'warning',
        message: `Warning: Error count increased by ${trends.overall.change} errors`,
        timestamp: new Date().toISOString()
      });
    }
    
    return alerts;
  }

  saveToHistory(metrics) {
    this.errorHistory.push(metrics);
    
    // Keep only last 100 entries
    if (this.errorHistory.length > 100) {
      this.errorHistory = this.errorHistory.slice(-100);
    }
    
    fs.writeFileSync(this.historyFile, JSON.stringify(this.errorHistory, null, 2));
  }

  loadErrorHistory() {
    try {
      if (fs.existsSync(this.historyFile)) {
        return JSON.parse(fs.readFileSync(this.historyFile, 'utf8'));
      }
    } catch (error) {
      console.log('Could not load error history, starting fresh');
    }
    
    return [];
  }

  async generateAlerts(dashboard) {
    if (dashboard.alerts.length > 0) {
      console.log('🚨 Alerts generated:');
      for (const alert of dashboard.alerts) {
        console.log(`  ${alert.level.toUpperCase()}: ${alert.message}`);
      }
    }
  }

  async generateErrorReport(error) {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      status: 'error',
      error: error.message,
      stack: error.stack
    };
    
    fs.writeFileSync(this.dashboardFile, JSON.stringify(report, null, 2));
    console.log(`❌ Error report generated: ${this.dashboardFile}`);
  }
}

// Run the automation
const dashboard = new ErrorMonitoringDashboard();
dashboard.run().catch(console.error);