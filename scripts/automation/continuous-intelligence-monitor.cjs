#!/usr/bin/env node

/**
 * Continuous Intelligence Monitor
 * Advanced monitoring system with AI-powered insights
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🧠 Starting continuous intelligence monitoring...');

class ContinuousIntelligenceMonitor {
  constructor() {
    this.monitoringData = {
      timestamp: new Date().toISOString(),
      systemMetrics: {},
      applicationMetrics: {},
      performanceInsights: {},
      securityInsights: {},
      recommendations: []
    };
  }

  async collectSystemMetrics() {
    try {
      console.log('📊 Collecting system metrics...');
      
      const memoryUsage = process.memoryUsage();
      const cpuUsage = process.cpuUsage();
      
      this.monitoringData.systemMetrics = {
        memory: {
          rss: Math.round(memoryUsage.rss / 1024 / 1024), // MB
          heapTotal: Math.round(memoryUsage.heapTotal / 1024 / 1024), // MB
          heapUsed: Math.round(memoryUsage.heapUsed / 1024 / 1024), // MB
          external: Math.round(memoryUsage.external / 1024 / 1024) // MB
        },
        cpu: {
          user: cpuUsage.user,
          system: cpuUsage.system
        },
        uptime: process.uptime(),
        platform: process.platform,
        nodeVersion: process.version,
        timestamp: new Date().toISOString()
      };
      
      console.log(`✅ System metrics collected`);
      
    } catch (error) {
      console.warn('⚠️  System metrics collection failed:', error.message);
    }
  }

  async collectApplicationMetrics() {
    try {
      console.log('🚀 Collecting application metrics...');
      
      // Check build status
      const buildDir = path.join(__dirname, '..', '..', '.next');
      const buildExists = fs.existsSync(buildDir);
      
      // Check package.json
      const packageJsonPath = path.join(__dirname, '..', '..', 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      // Count files by type
      const fileCounts = this.countFilesByType();
      
      // Check for recent changes
      const recentChanges = this.getRecentChanges();
      
      this.monitoringData.applicationMetrics = {
        buildExists,
        packageVersion: packageJson.version,
        fileCounts,
        recentChanges,
        dependencies: Object.keys(packageJson.dependencies || {}).length,
        devDependencies: Object.keys(packageJson.devDependencies || {}).length,
        timestamp: new Date().toISOString()
      };
      
      console.log(`✅ Application metrics collected`);
      
    } catch (error) {
      console.warn('⚠️  Application metrics collection failed:', error.message);
    }
  }

  countFilesByType() {
    const counts = {
      js: 0,
      jsx: 0,
      ts: 0,
      tsx: 0,
      css: 0,
      scss: 0,
      json: 0,
      md: 0
    };
    
    const directories = [
      path.join(__dirname, '..', '..', 'src'),
      path.join(__dirname, '..', '..', 'components'),
      path.join(__dirname, '..', '..', 'pages'),
      path.join(__dirname, '..', '..', 'styles')
    ];
    
    for (const dir of directories) {
      if (fs.existsSync(dir)) {
        this.countFilesInDirectory(dir, counts);
      }
    }
    
    return counts;
  }

  countFilesInDirectory(dir, counts) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        this.countFilesInDirectory(fullPath, counts);
      } else {
        const ext = path.extname(file.name).substring(1);
        if (counts.hasOwnProperty(ext)) {
          counts[ext]++;
        }
      }
    }
  }

  getRecentChanges() {
    try {
      // Get git log for last 24 hours
      const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      const gitLog = execSync(`git log --since="${oneDayAgo}" --oneline`, { 
        encoding: 'utf8',
        cwd: path.join(__dirname, '..', '..')
      });
      
      return gitLog.split('\n').filter(line => line.trim()).length;
    } catch (error) {
      return 0;
    }
  }

  async analyzePerformanceInsights() {
    try {
      console.log('⚡ Analyzing performance insights...');
      
      const insights = {
        bundleSize: this.analyzeBundleSize(),
        imageOptimization: this.analyzeImageOptimization(),
        codeSplitting: this.analyzeCodeSplitting(),
        caching: this.analyzeCaching(),
        recommendations: []
      };
      
      this.monitoringData.performanceInsights = insights;
      
      console.log(`✅ Performance insights analyzed`);
      
    } catch (error) {
      console.warn('⚠️  Performance insights analysis failed:', error.message);
    }
  }

  analyzeBundleSize() {
    const buildDir = path.join(__dirname, '..', '..', '.next');
    let bundleSize = 0;
    
    if (fs.existsSync(buildDir)) {
      bundleSize = this.getDirectorySize(buildDir);
    }
    
    return {
      size: Math.round(bundleSize / 1024 / 1024), // MB
      status: bundleSize > 10 * 1024 * 1024 ? 'large' : 'optimal',
      recommendation: bundleSize > 10 * 1024 * 1024 ? 'Consider code splitting' : 'Bundle size is optimal'
    };
  }

  analyzeImageOptimization() {
    const publicDir = path.join(__dirname, '..', '..', 'public');
    const imageFiles = this.findImageFiles(publicDir);
    const largeImages = imageFiles.filter(file => {
      const stats = fs.statSync(file);
      return stats.size > 500 * 1024; // 500KB
    });
    
    return {
      totalImages: imageFiles.length,
      largeImages: largeImages.length,
      status: largeImages.length > 0 ? 'needs_optimization' : 'optimized',
      recommendation: largeImages.length > 0 ? 'Optimize large images' : 'Images are optimized'
    };
  }

  analyzeCodeSplitting() {
    const pagesDir = path.join(__dirname, '..', '..', 'pages');
    const dynamicImports = this.findDynamicImports(pagesDir);
    
    return {
      dynamicImports: dynamicImports.length,
      status: dynamicImports.length > 0 ? 'implemented' : 'not_implemented',
      recommendation: dynamicImports.length === 0 ? 'Implement code splitting' : 'Code splitting is implemented'
    };
  }

  analyzeCaching() {
    const nextConfigPath = path.join(__dirname, '..', '..', 'next.config.js');
    let cachingEnabled = false;
    
    if (fs.existsSync(nextConfigPath)) {
      const config = fs.readFileSync(nextConfigPath, 'utf8');
      cachingEnabled = config.includes('cache') || config.includes('Cache');
    }
    
    return {
      enabled: cachingEnabled,
      status: cachingEnabled ? 'enabled' : 'disabled',
      recommendation: cachingEnabled ? 'Caching is enabled' : 'Enable caching for better performance'
    };
  }

  findImageFiles(dir) {
    const imageFiles = [];
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'];
    
    if (!fs.existsSync(dir)) {
      return imageFiles;
    }
    
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        imageFiles.push(...this.findImageFiles(fullPath));
      } else if (imageExtensions.some(ext => file.name.toLowerCase().endsWith(ext))) {
        imageFiles.push(fullPath);
      }
    }
    
    return imageFiles;
  }

  findDynamicImports(dir) {
    const dynamicImports = [];
    
    if (!fs.existsSync(dir)) {
      return dynamicImports;
    }
    
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        dynamicImports.push(...this.findDynamicImports(fullPath));
      } else if (file.name.match(/\.(js|jsx|ts|tsx)$/)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          const imports = content.match(/import\s*\(/g);
          if (imports) {
            dynamicImports.push(...imports);
          }
        } catch (error) {
          // Ignore file read errors
        }
      }
    }
    
    return dynamicImports;
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    
    if (!fs.existsSync(dirPath)) {
      return 0;
    }
    
    const files = fs.readdirSync(dirPath, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dirPath, file.name);
      
      if (file.isDirectory()) {
        totalSize += this.getDirectorySize(fullPath);
      } else {
        const stats = fs.statSync(fullPath);
        totalSize += stats.size;
      }
    }
    
    return totalSize;
  }

  async analyzeSecurityInsights() {
    try {
      console.log('🔒 Analyzing security insights...');
      
      const insights = {
        vulnerabilities: this.checkVulnerabilities(),
        securityHeaders: this.checkSecurityHeaders(),
        dependencies: this.checkDependencies(),
        recommendations: []
      };
      
      this.monitoringData.securityInsights = insights;
      
      console.log(`✅ Security insights analyzed`);
      
    } catch (error) {
      console.warn('⚠️  Security insights analysis failed:', error.message);
    }
  }

  checkVulnerabilities() {
    try {
      const auditOutput = execSync('npm audit --json', { encoding: 'utf8' });
      const auditData = JSON.parse(auditOutput);
      
      return {
        total: auditData.vulnerabilities ? Object.keys(auditData.vulnerabilities).length : 0,
        high: auditData.vulnerabilities ? Object.values(auditData.vulnerabilities).filter(v => v.severity === 'high').length : 0,
        moderate: auditData.vulnerabilities ? Object.values(auditData.vulnerabilities).filter(v => v.severity === 'moderate').length : 0,
        low: auditData.vulnerabilities ? Object.values(auditData.vulnerabilities).filter(v => v.severity === 'low').length : 0
      };
    } catch (error) {
      return { total: 0, high: 0, moderate: 0, low: 0 };
    }
  }

  checkSecurityHeaders() {
    const nextConfigPath = path.join(__dirname, '..', '..', 'next.config.js');
    let securityHeaders = 0;
    
    if (fs.existsSync(nextConfigPath)) {
      const config = fs.readFileSync(nextConfigPath, 'utf8');
      const headerPatterns = [
        /contentSecurityPolicy|CSP/i,
        /xFrameOptions|X-Frame-Options/i,
        /xContentTypeOptions|X-Content-Type-Options/i,
        /xXSSProtection|X-XSS-Protection/i,
        /strictTransportSecurity|Strict-Transport-Security/i
      ];
      
      securityHeaders = headerPatterns.filter(pattern => pattern.test(config)).length;
    }
    
    return {
      configured: securityHeaders,
      total: 5,
      status: securityHeaders >= 3 ? 'good' : 'needs_improvement'
    };
  }

  checkDependencies() {
    const packageJsonPath = path.join(__dirname, '..', '..', 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    return {
      total: Object.keys(packageJson.dependencies || {}).length,
      outdated: 0, // Would need to check npm outdated
      status: 'unknown'
    };
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Performance recommendations
    if (this.monitoringData.performanceInsights.bundleSize?.status === 'large') {
      recommendations.push('Implement code splitting to reduce bundle size');
    }
    
    if (this.monitoringData.performanceInsights.imageOptimization?.status === 'needs_optimization') {
      recommendations.push('Optimize large images for better performance');
    }
    
    if (this.monitoringData.performanceInsights.codeSplitting?.status === 'not_implemented') {
      recommendations.push('Implement dynamic imports for code splitting');
    }
    
    if (this.monitoringData.performanceInsights.caching?.status === 'disabled') {
      recommendations.push('Enable caching for better performance');
    }
    
    // Security recommendations
    if (this.monitoringData.securityInsights.vulnerabilities?.total > 0) {
      recommendations.push('Update vulnerable dependencies');
    }
    
    if (this.monitoringData.securityInsights.securityHeaders?.status === 'needs_improvement') {
      recommendations.push('Implement additional security headers');
    }
    
    // System recommendations
    if (this.monitoringData.systemMetrics.memory?.heapUsed > 100) {
      recommendations.push('Optimize memory usage');
    }
    
    recommendations.push('Set up continuous monitoring and alerting');
    recommendations.push('Implement automated testing');
    recommendations.push('Add performance monitoring');
    recommendations.push('Set up error tracking');
    
    this.monitoringData.recommendations = recommendations;
  }

  generateReport() {
    this.generateRecommendations();
    
    const report = {
      ...this.monitoringData,
      summary: {
        systemHealth: this.monitoringData.systemMetrics,
        applicationHealth: this.monitoringData.applicationMetrics,
        performanceScore: this.calculatePerformanceScore(),
        securityScore: this.calculateSecurityScore(),
        overallHealth: this.calculateOverallHealth()
      }
    };
    
    const reportPath = path.join(__dirname, '..', '..', 'continuous-intelligence-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('📄 Continuous intelligence report saved to continuous-intelligence-report.json');
    return report;
  }

  calculatePerformanceScore() {
    let score = 100;
    
    if (this.monitoringData.performanceInsights.bundleSize?.status === 'large') {
      score -= 20;
    }
    
    if (this.monitoringData.performanceInsights.imageOptimization?.status === 'needs_optimization') {
      score -= 15;
    }
    
    if (this.monitoringData.performanceInsights.codeSplitting?.status === 'not_implemented') {
      score -= 10;
    }
    
    if (this.monitoringData.performanceInsights.caching?.status === 'disabled') {
      score -= 10;
    }
    
    return Math.max(0, score);
  }

  calculateSecurityScore() {
    let score = 100;
    
    const vulnerabilities = this.monitoringData.securityInsights.vulnerabilities;
    if (vulnerabilities?.total > 0) {
      score -= vulnerabilities.high * 20;
      score -= vulnerabilities.moderate * 10;
      score -= vulnerabilities.low * 5;
    }
    
    const securityHeaders = this.monitoringData.securityInsights.securityHeaders;
    if (securityHeaders?.status === 'needs_improvement') {
      score -= 15;
    }
    
    return Math.max(0, score);
  }

  calculateOverallHealth() {
    const performanceScore = this.calculatePerformanceScore();
    const securityScore = this.calculateSecurityScore();
    const systemHealth = this.monitoringData.systemMetrics.memory?.heapUsed < 100 ? 100 : 80;
    
    return Math.round((performanceScore + securityScore + systemHealth) / 3);
  }

  async run() {
    try {
      await this.collectSystemMetrics();
      await this.collectApplicationMetrics();
      await this.analyzePerformanceInsights();
      await this.analyzeSecurityInsights();
      
      const report = this.generateReport();
      
      console.log('\n🧠 Continuous Intelligence Monitor Summary:');
      console.log(`Overall Health: ${report.summary.overallHealth}/100`);
      console.log(`Performance Score: ${report.summary.performanceScore}/100`);
      console.log(`Security Score: ${report.summary.securityScore}/100`);
      console.log(`Memory Usage: ${report.systemMetrics.memory.heapUsed}MB`);
      console.log(`Bundle Size: ${report.performanceInsights.bundleSize?.size || 0}MB`);
      console.log(`Vulnerabilities: ${report.securityInsights.vulnerabilities?.total || 0}`);
      
      if (report.recommendations.length > 0) {
        console.log('\n💡 Intelligence Recommendations:');
        report.recommendations.forEach((rec, index) => {
          console.log(`${index + 1}. ${rec}`);
        });
      }
      
    } catch (error) {
      console.error('❌ Continuous intelligence monitoring failed:', error.message);
      process.exit(1);
    }
  }
}

async function main() {
  const monitor = new ContinuousIntelligenceMonitor();
  await monitor.run();
}

if (require.main === module) {
  main();
}

module.exports = ContinuousIntelligenceMonitor;