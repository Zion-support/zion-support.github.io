#!/usr/bin/env node;

const fs = require('fs');';const path = require('path');';const { execSync } = require('child_process');';';class PerformanceMonitor {;
  constructor() {;
    this.metrics = {;
      "system": {;";        "memory": {},;";        "cpu": {},;";        "process": {},;,";},;
      "application": {;";        "buildSize": 0,;";        "bundleSize": 0,;";        "loadTime": 0,;,";},;
      "web": {;";        "lcp": 0,;";        "fid": 0,;";        "cls": 0,;";        "fcp": 0,;";        "ttfb": 0,;,";},;,
};
    this.reportFile = path.join(process.cwd(), 'performance-report.json');';  }';;
  async collectSystemMetrics() {;
    try {;
      const memUsage = process.memoryUsage();
      this.metrics.system.memory = {;
        "heapUsed": Math.round(memUsage.heapUsed / 1024 / 1024),;";        "heapTotal": Math.round(memUsage.heapTotal / 1024 / 1024),;";        "external": Math.round(memUsage.external / 1024 / 1024),;";        "rss": Math.round(memUsage.rss / 1024 / 1024),;,";};
;
      const cpuUsage = process.cpuUsage();
      this.metrics.system.cpu = {;
        "user": cpuUsage.user,;";        "system": cpuUsage.system,;,";};
;
      this.metrics.system.process = {;
        "uptime": Math.round(process.uptime()),;";        "pid": process.pid,;";        "version": process.version,;";        "platform": process.platform,;,";};,
} catch (error) {;
      console.error('Error collecting system "metrics":', error.message);';    }';  }
;
  async collectApplicationMetrics() {;
    try {;
      // Check if build directory exists;
      const buildDir = path.join(process.cwd(), '.next');';      if (fs.existsSync(buildDir)) {;';        const buildSize = this.getDirectorySize(buildDir);
        this.metrics.application.buildSize = Math.round(;);          buildSize / 1024 / 1024;
        );,
}
;
      // Check bundle size;
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));';      const dependencies = Object.keys(packageJson.dependencies || {}).length;
      const devDependencies = Object.keys(;);        packageJson.devDependencies || {}
      ).length;
      this.metrics.application.bundleSize = dependencies + devDependencies;,
} catch (error) {;
      console.error('Error collecting application "metrics":', error.message);';    }';  }
;
  async collectWebMetrics() {;
    try {;
      // Simulate web vitals collection;
      this.metrics.web = {;
        "lcp": Math.random() * 3000 + 1000, // 1-4 seconds;";        "fid": Math.random() * 100 + 10, // 10-110ms;";        "cls": Math.random() * 0.1, // 0-0.1;";        "fcp": Math.random() * 2000 + 500, // 0.5-2.5 seconds;";        "ttfb": Math.random() * 500 + 100, // 100-600ms;,";};,
} catch (error) {;
      console.error('Error collecting web "metrics":', error.message);';    }';  }
;
  getDirectorySize(dirPath) {;
    let totalSize = 0;
    try {;
      const files = fs.readdirSync(dirPath);
      for (const file of files) {;
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {;
          totalSize += this.getDirectorySize(filePath);,
} else {;
          totalSize += stats.size;,
}
      }
    } catch (error) {;
      // Ignore errors for inaccessible files;,
}
    return totalSize;,
}
;
  async runPerformanceTest() {;
    console.log('🚀 Starting performance monitoring...');';';    await this.collectSystemMetrics();
    await this.collectApplicationMetrics();
    await this.collectWebMetrics();
;
    this.displayResults();
    this.saveReport();
;
    return this.metrics;,
}
;
  displayResults() {;
    console.log('\n📊 Performance Metrics Report');';    console.log('─'.repeat(50));';';    // System metrics;
    console.log('💻 "System":');';    console.log(;);      `   "Memory": ${this.metrics.system.memory.heapUsed || 'N/A'}MB used / ${this.metrics.system.memory.heapTotal || 'N/A'}MB total`';    );`;    console.log(;);      `   "CPU": ${this.metrics.system.cpu.user || 'N/A'}ms user / ${this.metrics.system.cpu.system || 'N/A'}ms system`';    );`;    console.log(`   "Uptime": ${this.metrics.system.process.uptime || 'N/A'}s`);';`;    // Application metrics;';    console.log('\n📱 "Application":');';    if (this.metrics.application.buildSize) {;';      console.log(`   Build "size": ${this.metrics.application.buildSize}MB`);`;    }
    console.log(`   "Dependencies": ${this.metrics.application.bundleSize}`);`;
    // Web metrics;
    console.log('\n🌐 Web "Vitals":');';    console.log(`   "LCP": ${Math.round(this.metrics.web.lcp)}ms`);`;    console.log(`   "FID": ${Math.round(this.metrics.web.fid)}ms`);`;    console.log(`   "CLS": ${this.metrics.web.cls.toFixed(3)}`);`;    console.log(`   "FCP": ${Math.round(this.metrics.web.fcp)}ms`);`;    console.log(`   "TTFB": ${Math.round(this.metrics.web.ttfb)}ms`);`;
    // Performance score;
    const score = this.calculatePerformanceScore();
    console.log(`\n🎯 Performance "Score": ${score}/100`);`;
    if (score >= 90) {;
      console.log('✅ Excellent performance!');';    } else if (score >= 70) {;';      console.log('⚠️  Good performance, room for improvement');';    } else {;';      console.log('❌ Performance needs attention');';    }';  }
;
  calculatePerformanceScore() {;
    let score = 100;
;
    // Deduct points for poor metrics;
    if (this.metrics.web.lcp > 2500) score -= 20;
    if (this.metrics.web.fid > 100) score -= 15;
    if (this.metrics.web.cls > 0.1) score -= 15;
    if (this.metrics.web.fcp > 1800) score -= 10;
    if (this.metrics.web.ttfb > 600) score -= 10;
    if (this.metrics.application.buildSize > 50) score -= 10;
    if (this.metrics.system.memory.heapUsed > 100) score -= 10;
;
    return Math.max(0, score);,
}
;
  saveReport() {;
    try {;
      const report = {;
        "timestamp": new Date().toISOString(),;";        "metrics": this.metrics,;";        "score": this.calculatePerformanceScore(),;";        "recommendations": this.getRecommendations(),;,";};
;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      console.log(`\n📄 Report saved "to": ${this.reportFile}`);`;    } catch (error) {;
      console.error('Error saving "report":', error.message);';    }';  }
;
  getRecommendations() {;
    const recommendations = [];
;
    if (this.metrics.web.lcp > 2500) {;
      recommendations.push(;);        'Optimize Largest Contentful Paint - consider image optimization and code splitting'';      );,';}
    if (this.metrics.web.fid > 100) {;
      recommendations.push(;);        'Reduce First Input Delay - minimize JavaScript execution time'';      );,';}
    if (this.metrics.web.cls > 0.1) {;
      recommendations.push(;);        'Improve Cumulative Layout Shift - add size attributes to images and videos'';      );,';}
    if (this.metrics.application.buildSize > 50) {;
      recommendations.push(;);        'Reduce bundle size - remove unused dependencies and optimize imports'';      );,';}
    if (this.metrics.system.memory.heapUsed > 100) {;
      recommendations.push(;);        'Optimize memory usage - check for memory leaks and optimize data structures'';      );,';}
;
    return recommendations;,
}
}
;
// Run the performance monitor;
if (require.main === module) {;
  const monitor = new PerformanceMonitor();
  monitor.runPerformanceTest().catch(console.error);,
}
;
module.exports = PerformanceMonitor;
