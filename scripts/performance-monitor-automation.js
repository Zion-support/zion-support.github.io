#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class PerformanceMonitorAutomation {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.logFile = path.join(this.projectRoot, 'logs', 'performance-monitor-automation.log');
    this.performanceReportFile = path.join(this.projectRoot, 'logs', 'performance-monitor-report.json');
    this.performanceIssues = [];
    this.performanceImprovements = [];
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    // Append to log file
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, error: error.message, output: error.stdout || '' };
    }
  }

  async runPerformanceAnalysis() {
    this.log('🔍 Running comprehensive performance analysis...');
    
    const performanceMetrics = {
      buildPerformance: await this.analyzeBuildPerformance(),
      bundlePerformance: await this.analyzeBundlePerformance(),
      runtimePerformance: await this.analyzeRuntimePerformance(),
      memoryUsage: await this.analyzeMemoryUsage(),
      cpuUsage: await this.analyzeCPUUsage(),
      networkPerformance: await this.analyzeNetworkPerformance()
    };
    
    return performanceMetrics;
  }

  async analyzeBuildPerformance() {
    this.log('Analyzing build performance...');
    
    try {
      // Measure build time
      const startTime = Date.now();
      const buildResult = await this.runCommand('npm run build', { silent: true });
      const buildTime = Date.now() - startTime;
      
      if (buildResult.success) {
        const performance = this.categorizeBuildPerformance(buildTime);
        
        return {
          status: 'success',
          buildTime,
          performance,
          message: `Build completed in ${buildTime}ms (${performance})`,
          severity: this.getBuildPerformanceSeverity(performance)
        };
      } else {
        return {
          status: 'failed',
          buildTime: null,
          performance: 'failed',
          message: 'Build failed',
          severity: 'critical'
        };
      }
      
    } catch (error) {
      return {
        status: 'error',
        buildTime: null,
        performance: 'error',
        message: `Error analyzing build performance: ${error.message}`,
        severity: 'high'
      };
    }
  }

  categorizeBuildPerformance(buildTime) {
    // Performance thresholds (in milliseconds)
    const thresholds = {
      excellent: 30000,  // 30 seconds
      good: 60000,       // 1 minute
      acceptable: 120000, // 2 minutes
      slow: 300000,      // 5 minutes
      verySlow: 600000   // 10 minutes
    };
    
    if (buildTime <= thresholds.excellent) return 'excellent';
    if (buildTime <= thresholds.good) return 'good';
    if (buildTime <= thresholds.acceptable) return 'acceptable';
    if (buildTime <= thresholds.slow) return 'slow';
    if (buildTime <= thresholds.verySlow) return 'very-slow';
    return 'critical';
  }

  getBuildPerformanceSeverity(performance) {
    const severityMap = {
      'excellent': 'low',
      'good': 'low',
      'acceptable': 'medium',
      'slow': 'high',
      'very-slow': 'critical',
      'critical': 'critical'
    };
    
    return severityMap[performance] || 'medium';
  }

  async analyzeBundlePerformance() {
    this.log('Analyzing bundle performance...');
    
    try {
      // Check if dist directory exists
      const distPath = path.join(this.projectRoot, 'dist');
      if (!fs.existsSync(distPath)) {
        return {
          status: 'missing',
          message: 'Build output not found',
          severity: 'medium'
        };
      }
      
      // Analyze bundle size and structure
      const bundleStats = this.analyzeBundleStructure(distPath);
      
      // Check for performance issues
      const issues = this.identifyBundlePerformanceIssues(bundleStats);
      
      return {
        status: 'success',
        message: 'Bundle analysis completed',
        severity: issues.length > 0 ? 'medium' : 'low',
        details: bundleStats,
        issues
      };
      
    } catch (error) {
      return {
        status: 'error',
        message: `Error analyzing bundle performance: ${error.message}`,
        severity: 'medium'
      };
    }
  }

  analyzeBundleStructure(distPath) {
    const stats = {
      totalFiles: 0,
      totalSize: 0,
      largestFiles: [],
      fileTypes: {},
      directories: []
    };
    
    try {
      this.analyzeDirectoryRecursively(distPath, stats);
      
      // Sort largest files
      stats.largestFiles.sort((a, b) => b.size - a.size);
      stats.largestFiles = stats.largestFiles.slice(0, 10); // Top 10
      
    } catch (error) {
      this.log(`Error analyzing bundle structure: ${error.message}`, 'WARN');
    }
    
    return stats;
  }

  analyzeDirectoryRecursively(dirPath, stats, relativePath = '') {
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stat = fs.statSync(itemPath);
        const itemRelativePath = path.join(relativePath, item);
        
        if (stat.isDirectory()) {
          stats.directories.push(itemRelativePath);
          this.analyzeDirectoryRecursively(itemPath, stats, itemRelativePath);
        } else {
          stats.totalFiles++;
          stats.totalSize += stat.size;
          
          // Track file types
          const ext = path.extname(item);
          stats.fileTypes[ext] = (stats.fileTypes[ext] || 0) + 1;
          
          // Track largest files
          stats.largestFiles.push({
            path: itemRelativePath,
            size: stat.size
          });
        }
      }
    } catch (error) {
      this.log(`Error analyzing directory ${dirPath}: ${error.message}`, 'WARN');
    }
  }

  identifyBundlePerformanceIssues(bundleStats) {
    const issues = [];
    
    // Check for extremely large files
    const largeFiles = bundleStats.largestFiles.filter(file => file.size > 1024 * 1024); // > 1MB
    if (largeFiles.length > 0) {
      issues.push({
        type: 'large-files',
        severity: 'medium',
        message: `${largeFiles.length} files are larger than 1MB`,
        files: largeFiles.map(f => f.path),
        recommendation: 'Consider code splitting or lazy loading for large files'
      });
    }
    
    // Check for too many files
    if (bundleStats.totalFiles > 1000) {
      issues.push({
        type: 'too-many-files',
        severity: 'medium',
        message: `Bundle contains ${bundleStats.totalFiles} files`,
        recommendation: 'Consider bundling strategies to reduce file count'
      });
    }
    
    // Check for large bundle size
    const bundleSizeMB = bundleStats.totalSize / (1024 * 1024);
    if (bundleSizeMB > 10) {
      issues.push({
        type: 'large-bundle',
        severity: 'high',
        message: `Total bundle size is ${bundleSizeMB.toFixed(2)}MB`,
        recommendation: 'Implement tree shaking and code splitting to reduce bundle size'
      });
    }
    
    return issues;
  }

  async analyzeRuntimePerformance() {
    this.log('Analyzing runtime performance...');
    
    try {
      // This would typically involve running the app and measuring performance
      // For now, we'll provide a placeholder analysis
      
      return {
        status: 'placeholder',
        message: 'Runtime performance analysis requires app execution',
        severity: 'low',
        details: {
          note: 'Runtime analysis would include metrics like:',
          metrics: [
            'Time to Interactive (TTI)',
            'First Contentful Paint (FCP)',
            'Largest Contentful Paint (LCP)',
            'Cumulative Layout Shift (CLS)',
            'First Input Delay (FID)'
          ]
        }
      };
      
    } catch (error) {
      return {
        status: 'error',
        message: `Error analyzing runtime performance: ${error.message}`,
        severity: 'medium'
      };
    }
  }

  async analyzeMemoryUsage() {
    this.log('Analyzing memory usage...');
    
    try {
      // Check for memory-related patterns in code
      const memoryIssues = this.scanForMemoryIssues();
      
      return {
        status: 'success',
        message: 'Memory usage analysis completed',
        severity: memoryIssues.length > 0 ? 'medium' : 'low',
        details: {
          issues: memoryIssues
        }
      };
      
    } catch (error) {
      return {
        status: 'error',
        message: `Error analyzing memory usage: ${error.message}`,
        severity: 'medium'
      };
    }
  }

  scanForMemoryIssues() {
    const issues = [];
    const sourceFiles = this.getSourceFiles();
    
    for (const file of sourceFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const fileIssues = this.scanFileForMemoryIssues(content, file);
        issues.push(...fileIssues);
      } catch (error) {
        this.log(`Error scanning ${file} for memory issues: ${error.message}`, 'WARN');
      }
    }
    
    return issues;
  }

  scanFileForMemoryIssues(content, filePath) {
    const issues = [];
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNumber = i + 1;
      
      // Check for memory leak patterns
      if (line.includes('addEventListener') && !line.includes('removeEventListener')) {
        issues.push({
          file: filePath,
          line: lineNumber,
          type: 'memory-leak',
          severity: 'medium',
          message: 'Event listener added without removal',
          recommendation: 'Ensure event listeners are properly removed'
        });
      }
      
      if (line.includes('setInterval') && !line.includes('clearInterval')) {
        issues.push({
          file: filePath,
          line: lineNumber,
          type: 'memory-leak',
          severity: 'medium',
          message: 'Interval set without cleanup',
          recommendation: 'Ensure intervals are properly cleared'
        });
      }
      
      if (line.includes('setTimeout') && !line.includes('clearTimeout')) {
        issues.push({
          file: filePath,
          line: lineNumber,
          type: 'memory-leak',
          severity: 'low',
          message: 'Timeout set without cleanup',
          recommendation: 'Consider clearing timeouts if needed'
        });
      }
      
      // Check for large data structures
      if (line.includes('new Array(') && line.match(/new Array\(\d{4,}\)/)) {
        issues.push({
          file: filePath,
          line: lineNumber,
          type: 'large-data-structure',
          severity: 'medium',
          message: 'Large array allocation detected',
          recommendation: 'Consider lazy loading or pagination for large datasets'
        });
      }
    }
    
    return issues;
  }

  async analyzeCPUUsage() {
    this.log('Analyzing CPU usage patterns...');
    
    try {
      // Check for CPU-intensive patterns in code
      const cpuIssues = this.scanForCPUIssues();
      
      return {
        status: 'success',
        message: 'CPU usage analysis completed',
        severity: cpuIssues.length > 0 ? 'medium' : 'low',
        details: {
          issues: cpuIssues
        }
      };
      
    } catch (error) {
      return {
        status: 'error',
        message: `Error analyzing CPU usage: ${error.message}`,
        severity: 'medium'
      };
    }
  }

  scanForCPUIssues() {
    const issues = [];
    const sourceFiles = this.getSourceFiles();
    
    for (const file of sourceFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const fileIssues = this.scanFileForCPUIssues(content, file);
        issues.push(...fileIssues);
      } catch (error) {
        this.log(`Error scanning ${file} for CPU issues: ${error.message}`, 'WARN');
      }
    }
    
    return issues;
  }

  scanFileForCPUIssues(content, filePath) {
    const issues = [];
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNumber = i + 1;
      
      // Check for CPU-intensive patterns
      if (line.includes('for (') && line.includes('document.querySelectorAll')) {
        issues.push({
          file: filePath,
          line: lineNumber,
          type: 'cpu-intensive',
          severity: 'medium',
          message: 'DOM query in loop detected',
          recommendation: 'Cache DOM queries outside the loop'
        });
      }
      
      if (line.includes('JSON.parse(') && line.includes('for')) {
        issues.push({
          file: filePath,
          line: lineNumber,
          type: 'cpu-intensive',
          severity: 'medium',
          message: 'JSON parsing in loop detected',
          recommendation: 'Parse JSON once outside the loop'
        });
      }
      
      if (line.includes('innerHTML') && line.includes('for')) {
        issues.push({
          file: filePath,
          line: lineNumber,
          type: 'cpu-intensive',
          severity: 'high',
          message: 'innerHTML manipulation in loop detected',
          recommendation: 'Use DocumentFragment for batch DOM updates'
        });
      }
    }
    
    return issues;
  }

  async analyzeNetworkPerformance() {
    this.log('Analyzing network performance...');
    
    try {
      // Check for network-related patterns in code
      const networkIssues = this.scanForNetworkIssues();
      
      return {
        status: 'success',
        message: 'Network performance analysis completed',
        severity: networkIssues.length > 0 ? 'medium' : 'low',
        details: {
          issues: networkIssues
        }
      };
      
    } catch (error) {
      return {
        status: 'error',
        message: `Error analyzing network performance: ${error.message}`,
        severity: 'medium'
      };
    }
  }

  scanForNetworkIssues() {
    const issues = [];
    const sourceFiles = this.getSourceFiles();
    
    for (const file of sourceFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const fileIssues = this.scanFileForNetworkIssues(content, file);
        issues.push(...fileIssues);
      } catch (error) {
        this.log(`Error scanning ${file} for network issues: ${error.message}`, 'WARN');
      }
    }
    
    return issues;
  }

  scanFileForNetworkIssues(content, filePath) {
    const issues = [];
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNumber = i + 1;
      
      // Check for network performance patterns
      if (line.includes('fetch(') && line.includes('for')) {
        issues.push({
          file: filePath,
          line: lineNumber,
          type: 'network-performance',
          severity: 'medium',
          message: 'API calls in loop detected',
          recommendation: 'Consider batching API calls or using Promise.all'
        });
      }
      
      if (line.includes('new Image()') && line.includes('for')) {
        issues.push({
          file: filePath,
          line: lineNumber,
          type: 'network-performance',
          severity: 'medium',
          message: 'Image loading in loop detected',
          recommendation: 'Use lazy loading for images'
        });
      }
      
      if (line.includes('http://') && !line.includes('localhost')) {
        issues.push({
          file: filePath,
          line: lineNumber,
          type: 'network-security',
          severity: 'medium',
          message: 'HTTP protocol usage detected',
          recommendation: 'Use HTTPS for production environments'
        });
      }
    }
    
    return issues;
  }

  getSourceFiles() {
    const sourceDirs = ['src', 'components', 'pages', 'utils', 'hooks', 'services'];
    const files = [];
    
    for (const dir of sourceDirs) {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        this.collectFiles(dirPath, files);
      }
    }
    
    return files.filter(file => 
      file.endsWith('.js') || 
      file.endsWith('.jsx') || 
      file.endsWith('.ts') || 
      file.endsWith('.tsx')
    );
  }

  collectFiles(dir, files) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        this.collectFiles(itemPath, files);
      } else {
        files.push(itemPath);
      }
    }
  }

  async fixPerformanceIssues(performanceMetrics) {
    this.log('🔧 Starting performance issue fixes...');
    
    let totalFixed = 0;
    
    // Fix bundle performance issues
    if (performanceMetrics.bundlePerformance.issues.length > 0) {
      this.log('Fixing bundle performance issues...');
      const fixedCount = await this.fixBundlePerformanceIssues(performanceMetrics.bundlePerformance.issues);
      totalFixed += fixedCount;
    }
    
    // Fix memory usage issues
    if (performanceMetrics.memoryUsage.details.issues.length > 0) {
      this.log('Fixing memory usage issues...');
      const fixedCount = await this.fixMemoryUsageIssues(performanceMetrics.memoryUsage.details.issues);
      totalFixed += fixedCount;
    }
    
    // Fix CPU usage issues
    if (performanceMetrics.cpuUsage.details.issues.length > 0) {
      this.log('Fixing CPU usage issues...');
      const fixedCount = await this.fixCPUUsageIssues(performanceMetrics.cpuUsage.details.issues);
      totalFixed += fixedCount;
    }
    
    return totalFixed;
  }

  async fixBundlePerformanceIssues(issues) {
    let fixedCount = 0;
    
    for (const issue of issues) {
      try {
        if (await this.fixBundlePerformanceIssue(issue)) {
          fixedCount++;
          this.performanceImprovements.push({
            ...issue,
            fixMethod: 'automatic',
            timestamp: new Date().toISOString()
          });
        } else {
          this.performanceIssues.push({
            ...issue,
            timestamp: new Date().toISOString()
          });
        }
      } catch (error) {
        this.log(`Failed to fix bundle performance issue: ${error.message}`, 'ERROR');
        this.performanceIssues.push({
          ...issue,
          error: error.message,
          timestamp: new Date().toISOString()
        });
      }
    }
    
    return fixedCount;
  }

  async fixBundlePerformanceIssue(issue) {
    // This is a simplified approach - in practice, you'd implement more sophisticated fixes
    this.log(`Performance issue detected: ${issue.message}`, 'WARN');
    this.log(`Recommendation: ${issue.recommendation}`, 'INFO');
    
    // For now, we'll just log the issue for manual review
    return false;
  }

  async fixMemoryUsageIssues(issues) {
    let fixedCount = 0;
    
    for (const issue of issues) {
      try {
        if (await this.fixMemoryUsageIssue(issue)) {
          fixedCount++;
          this.performanceImprovements.push({
            ...issue,
            fixMethod: 'automatic',
            timestamp: new Date().toISOString()
          });
        } else {
          this.performanceIssues.push({
            ...issue,
            timestamp: new Date().toISOString()
          });
        }
      } catch (error) {
        this.log(`Failed to fix memory usage issue: ${error.message}`, 'ERROR');
        this.performanceIssues.push({
          ...issue,
          error: error.message,
          timestamp: new Date().toISOString()
        });
      }
    }
    
    return fixedCount;
  }

  async fixMemoryUsageIssue(issue) {
    // This is a simplified approach - in practice, you'd implement more sophisticated fixes
    this.log(`Memory issue detected: ${issue.message}`, 'WARN');
    this.log(`Recommendation: ${issue.recommendation}`, 'INFO');
    
    // For now, we'll just log the issue for manual review
    return false;
  }

  async fixCPUUsageIssues(issues) {
    let fixedCount = 0;
    
    for (const issue of issues) {
      try {
        if (await this.fixCPUUsageIssue(issue)) {
          fixedCount++;
          this.performanceImprovements.push({
            ...issue,
            fixMethod: 'automatic',
            timestamp: new Date().toISOString()
          });
        } else {
          this.performanceIssues.push({
            ...issue,
            timestamp: new Date().toISOString()
          });
        }
      } catch (error) {
        this.log(`Failed to fix CPU usage issue: ${error.message}`, 'ERROR');
        this.performanceIssues.push({
          ...issue,
          error: error.message,
          timestamp: new Date().toISOString()
        });
      }
    }
    
    return fixedCount;
  }

  async fixCPUUsageIssue(issue) {
    // This is a simplified approach - in practice, you'd implement more sophisticated fixes
    this.log(`CPU issue detected: ${issue.message}`, 'WARN');
    this.log(`Recommendation: ${issue.recommendation}`, 'INFO');
    
    // For now, we'll just log the issue for manual review
    return false;
  }

  async generateReport(performanceMetrics, fixedCount) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        overallPerformance: this.calculateOverallPerformance(performanceMetrics),
        totalIssues: this.countTotalPerformanceIssues(performanceMetrics),
        fixedIssues: fixedCount,
        remainingIssues: this.countTotalPerformanceIssues(performanceMetrics) - fixedCount
      },
      performanceMetrics,
      performanceIssues: this.performanceIssues,
      performanceImprovements: this.performanceImprovements,
      recommendations: this.generatePerformanceRecommendations(performanceMetrics)
    };
    
    // Save report
    fs.writeFileSync(this.performanceReportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Performance report generated: ${fixedCount} issues fixed`);
    return report;
  }

  calculateOverallPerformance(performanceMetrics) {
    const metrics = Object.values(performanceMetrics);
    const healthyMetrics = metrics.filter(metric => 
      metric.severity === 'low' || metric.severity === 'medium'
    );
    
    return Math.round((healthyMetrics.length / metrics.length) * 100);
  }

  countTotalPerformanceIssues(performanceMetrics) {
    let totalIssues = 0;
    
    if (performanceMetrics.bundlePerformance.issues) {
      totalIssues += performanceMetrics.bundlePerformance.issues.length;
    }
    
    if (performanceMetrics.memoryUsage.details.issues) {
      totalIssues += performanceMetrics.memoryUsage.details.issues.length;
    }
    
    if (performanceMetrics.cpuUsage.details.issues) {
      totalIssues += performanceMetrics.cpuUsage.details.issues.length;
    }
    
    if (performanceMetrics.networkPerformance.details.issues) {
      totalIssues += performanceMetrics.networkPerformance.details.issues.length;
    }
    
    return totalIssues;
  }

  generatePerformanceRecommendations(performanceMetrics) {
    const recommendations = [];
    
    // Build performance recommendations
    if (performanceMetrics.buildPerformance.performance === 'slow' || 
        performanceMetrics.buildPerformance.performance === 'very-slow') {
      recommendations.push({
        category: 'build-performance',
        priority: 'medium',
        message: 'Build performance is slow',
        action: 'Consider using build caching, parallel processing, or build optimization tools'
      });
    }
    
    // Bundle performance recommendations
    if (performanceMetrics.bundlePerformance.issues.length > 0) {
      recommendations.push({
        category: 'bundle-performance',
        priority: 'medium',
        message: `${performanceMetrics.bundlePerformance.issues.length} bundle performance issues detected`,
        action: 'Review bundle size and implement code splitting strategies'
      });
    }
    
    // Memory usage recommendations
    if (performanceMetrics.memoryUsage.details.issues.length > 0) {
      recommendations.push({
        category: 'memory-usage',
        priority: 'medium',
        message: `${performanceMetrics.memoryUsage.details.issues.length} memory usage issues detected`,
        action: 'Review memory management patterns and implement proper cleanup'
      });
    }
    
    // CPU usage recommendations
    if (performanceMetrics.cpuUsage.details.issues.length > 0) {
      recommendations.push({
        category: 'cpu-usage',
        priority: 'medium',
        message: `${performanceMetrics.cpuUsage.details.issues.length} CPU usage issues detected`,
        action: 'Review performance-critical code and implement optimization strategies'
      });
    }
    
    return recommendations;
  }

  async run() {
    this.log('🚀 Starting Performance Monitor Automation');
    
    try {
      // Run performance analysis
      const performanceMetrics = await this.runPerformanceAnalysis();
      
      // Log initial status
      this.log(`📊 Performance analysis results:`);
      this.log(`  - Build: ${performanceMetrics.buildPerformance.performance} (${performanceMetrics.buildPerformance.buildTime}ms)`);
      this.log(`  - Bundle: ${performanceMetrics.bundlePerformance.issues.length} issues`);
      this.log(`  - Memory: ${performanceMetrics.memoryUsage.details.issues.length} issues`);
      this.log(`  - CPU: ${performanceMetrics.cpuUsage.details.issues.length} issues`);
      this.log(`  - Network: ${performanceMetrics.networkPerformance.details.issues.length} issues`);
      
      // Check if there are performance issues
      const totalIssues = this.countTotalPerformanceIssues(performanceMetrics);
      
      if (totalIssues === 0) {
        this.log('✅ No performance issues detected');
        return;
      }
      
      // Fix issues
      const fixedCount = await this.fixPerformanceIssues(performanceMetrics);
      
      // Generate final report
      const report = await this.generateReport(performanceMetrics, fixedCount);
      
      this.log(`✅ Performance monitoring completed! Fixed ${fixedCount} issues`);
      
      // Log recommendations
      if (report.recommendations.length > 0) {
        this.log(`💡 ${report.recommendations.length} performance recommendations:`);
        report.recommendations.forEach(rec => {
          this.log(`  - ${rec.message} (${rec.priority} priority)`);
        });
      }
      
    } catch (error) {
      this.log(`❌ Error in performance monitoring: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the performance monitor automation
if (import.meta.url === `file://${process.argv[1]}`) {
  const automation = new PerformanceMonitorAutomation();
  automation.run().catch(console.error);
}

export default PerformanceMonitorAutomation;