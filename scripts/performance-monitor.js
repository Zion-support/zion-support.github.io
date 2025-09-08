#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Performance monitoring script
class PerformanceMonitor {
  constructor() {
    this.reportPath = path.join(process.cwd(), 'performance-reports');
    this.ensureReportDirectory();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportPath)) {
      fs.mkdirSync(this.reportPath, { recursive: true });
    }
  }

  generateReport() {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportFile = path.join(this.reportPath, `performance-report-${timestamp}.json`);
    
    const report = {
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
      nodeVersion: process.version,
      platform: process.platform,
      arch: process.arch,
      memory: process.memoryUsage(),
      uptime: process.uptime(),
      cwd: process.cwd(),
      performance: this.getPerformanceMetrics()
    };

    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    console.log(`Performance report generated: ${reportFile}`);
    
    return report;
  }

  getPerformanceMetrics() {
    const metrics = {
      memory: process.memoryUsage(),
      cpu: process.cpuUsage(),
      uptime: process.uptime()
    };

    // Add additional metrics if available
    if (process.hrtime) {
      metrics.hrtime = process.hrtime();
    }

    return metrics;
  }

  monitorMemory() {
    const interval = setInterval(() => {
      const memUsage = process.memoryUsage();
      const memUsageMB = {
        rss: Math.round(memUsage.rss / 1024 / 1024),
        heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024),
        heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024),
        external: Math.round(memUsage.external / 1024 / 1024)
      };

      console.log('Memory Usage (MB):', memUsageMB);

      // Alert if memory usage is high
      if (memUsageMB.heapUsed > 500) {
        console.warn('⚠️  High memory usage detected:', memUsageMB.heapUsed, 'MB');
      }
    }, 10000); // Check every 10 seconds

    return interval;
  }

  analyzeBundleSize() {
    const nextDir = path.join(process.cwd(), '.next');
    if (!fs.existsSync(nextDir)) {
      console.log('No .next directory found. Run "npm run build" first.');
      return;
    }

    const staticDir = path.join(nextDir, 'static');
    if (!fs.existsSync(staticDir)) {
      console.log('No static directory found in .next');
      return;
    }

    const bundleAnalysis = this.analyzeDirectory(staticDir);
    console.log('Bundle Analysis:', bundleAnalysis);
    
    return bundleAnalysis;
  }

  analyzeDirectory(dir, basePath = '') {
    const items = fs.readdirSync(dir);
    const analysis = {
      totalSize: 0,
      fileCount: 0,
      directories: {},
      files: {}
    };

    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const relativePath = path.join(basePath, item);
      const stats = fs.statSync(itemPath);

      if (stats.isDirectory()) {
        const subAnalysis = this.analyzeDirectory(itemPath, relativePath);
        analysis.directories[item] = subAnalysis;
        analysis.totalSize += subAnalysis.totalSize;
        analysis.fileCount += subAnalysis.fileCount;
      } else {
        const size = stats.size;
        analysis.files[item] = {
          size: size,
          sizeMB: Math.round(size / 1024 / 1024 * 100) / 100
        };
        analysis.totalSize += size;
        analysis.fileCount++;
      }
    });

    analysis.totalSizeMB = Math.round(analysis.totalSize / 1024 / 1024 * 100) / 100;
    return analysis;
  }

  checkDependencies() {
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    if (!fs.existsSync(packageJsonPath)) {
      console.log('No package.json found');
      return;
    }

    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const dependencies = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies
    };

    const depCount = Object.keys(dependencies).length;
    console.log(`Total dependencies: ${depCount}`);
    
    // Check for potentially problematic dependencies
    const largeDeps = [
      'framer-motion',
      'lucide-react',
      'react',
      'next',
      'typescript'
    ];

    largeDeps.forEach(dep => {
      if (dependencies[dep]) {
        console.log(`✓ ${dep}: ${dependencies[dep]}`);
      }
    });

    return { depCount, dependencies };
  }

  generateRecommendations() {
    const recommendations = [];

    // Memory recommendations
    const memUsage = process.memoryUsage();
    const heapUsedMB = Math.round(memUsage.heapUsed / 1024 / 1024);
    
    if (heapUsedMB > 200) {
      recommendations.push({
        type: 'memory',
        priority: 'high',
        message: `High memory usage detected (${heapUsedMB}MB). Consider optimizing bundle size or implementing code splitting.`
      });
    }

    // Bundle size recommendations
    const nextDir = path.join(process.cwd(), '.next');
    if (fs.existsSync(nextDir)) {
      const staticDir = path.join(nextDir, 'static');
      if (fs.existsSync(staticDir)) {
        const analysis = this.analyzeDirectory(staticDir);
        if (analysis.totalSizeMB > 5) {
          recommendations.push({
            type: 'bundle',
            priority: 'medium',
            message: `Large bundle size detected (${analysis.totalSizeMB}MB). Consider implementing code splitting and lazy loading.`
          });
        }
      }
    }

    // Dependencies recommendations
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const depCount = Object.keys({...packageJson.dependencies, ...packageJson.devDependencies}).length;
      
      if (depCount > 100) {
        recommendations.push({
          type: 'dependencies',
          priority: 'low',
          message: `High number of dependencies (${depCount}). Consider auditing and removing unused packages.`
        });
      }
    }

    return recommendations;
  }

  run() {
    console.log('🔍 Starting performance monitoring...\n');
    
    // Generate initial report
    const report = this.generateReport();
    
    // Analyze bundle size
    console.log('\n📦 Analyzing bundle size...');
    const bundleAnalysis = this.analyzeBundleSize();
    
    // Check dependencies
    console.log('\n📋 Checking dependencies...');
    const depInfo = this.checkDependencies();
    
    // Generate recommendations
    console.log('\n💡 Performance recommendations:');
    const recommendations = this.generateRecommendations();
    
    if (recommendations.length === 0) {
      console.log('✅ No performance issues detected!');
    } else {
      recommendations.forEach((rec, index) => {
        const priority = rec.priority === 'high' ? '🔴' : rec.priority === 'medium' ? '🟡' : '🟢';
        console.log(`${index + 1}. ${priority} ${rec.message}`);
      });
    }
    
    // Start memory monitoring
    console.log('\n📊 Starting memory monitoring (press Ctrl+C to stop)...');
    const memoryInterval = this.monitorMemory();
    
    // Handle graceful shutdown
    process.on('SIGINT', () => {
      console.log('\n\n🛑 Stopping performance monitoring...');
      clearInterval(memoryInterval);
      console.log('✅ Performance monitoring stopped.');
      process.exit(0);
    });
  }
}

// Run the monitor
const monitor = new PerformanceMonitor();
monitor.run();