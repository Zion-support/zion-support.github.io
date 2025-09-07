#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class PerformanceMonitorEnhanced {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.metrics = {
      bundleSize: 0,
      loadTime: 0,
      memoryUsage: 0,
      fileCount: 0
    };
    this.recommendations = [];
  }

  log(message, type = 'info') {
    const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
    console.log(`${prefix} ${message}`);
  }

  async measureBundleSize() {
    try {
      this.log('📦 Measuring bundle size...');
      
      // Build the project first
      execSync('npm run build', { cwd: this.projectRoot });
      
      // Check .next directory for build output
      const nextDir = path.join(this.projectRoot, '.next');
      if (fs.existsSync(nextDir)) {
        const buildFiles = this.getBuildFiles(nextDir);
        const totalSize = buildFiles.reduce((total, file) => {
          const stats = fs.statSync(file);
          return total + stats.size;
        }, 0);
        
        this.metrics.bundleSize = totalSize;
        this.log(`✅ Bundle size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`, 'success');
        
        if (totalSize > 5 * 1024 * 1024) { // 5MB
          this.recommendations.push('Bundle size is large (>5MB). Consider code splitting and tree shaking.');
        }
      }
      
      return true;
    } catch (error) {
      this.log(`❌ Bundle size measurement failed: ${error.message}`, 'error');
      return false;
    }
  }

  getBuildFiles(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        files.push(...this.getBuildFiles(itemPath));
      } else if (item.endsWith('.js') || item.endsWith('.css')) {
        files.push(itemPath);
      }
    });
    
    return files;
  }

  async measureMemoryUsage() {
    try {
      this.log('🧠 Measuring memory usage...');
      
      const memUsage = process.memoryUsage();
      this.metrics.memoryUsage = memUsage.heapUsed;
      
      this.log(`✅ Memory usage: ${(memUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`, 'success');
      
      if (memUsage.heapUsed > 100 * 1024 * 1024) { // 100MB
        this.recommendations.push('High memory usage detected. Consider optimizing memory-intensive operations.');
      }
      
      return true;
    } catch (error) {
      this.log(`❌ Memory measurement failed: ${error.message}`, 'error');
      return false;
    }
  }

  async countSourceFiles() {
    try {
      this.log('📁 Counting source files...');
      
      const sourceDirs = ['src', 'pages', 'app', 'components'];
      let fileCount = 0;
      
      sourceDirs.forEach(dir => {
        const dirPath = path.join(this.projectRoot, dir);
        if (fs.existsSync(dirPath)) {
          fileCount += this.countFiles(dirPath);
        }
      });
      
      this.metrics.fileCount = fileCount;
      this.log(`✅ Source files: ${fileCount}`, 'success');
      
      if (fileCount > 100) {
        this.recommendations.push('Large number of source files. Consider organizing into smaller modules.');
      }
      
      return true;
    } catch (error) {
      this.log(`❌ File counting failed: ${error.message}`, 'error');
      return false;
    }
  }

  countFiles(dir) {
    let count = 0;
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        count += this.countFiles(itemPath);
      } else if (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx')) {
        count++;
      }
    });
    
    return count;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      recommendations: this.recommendations,
      summary: {
        bundleSizeMB: (this.metrics.bundleSize / 1024 / 1024).toFixed(2),
        memoryUsageMB: (this.metrics.memoryUsage / 1024 / 1024).toFixed(2),
        fileCount: this.metrics.fileCount,
        recommendationsCount: this.recommendations.length
      }
    };

    const reportPath = path.join(this.projectRoot, 'performance-monitor-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Performance report saved to ${reportPath}`, 'success');

    return report;
  }

  async run() {
    this.log('🚀 Starting Enhanced Performance Monitor');
    
    try {
      await this.measureBundleSize();
      await this.measureMemoryUsage();
      await this.countSourceFiles();
      
      const report = await this.generateReport();
      
      this.log('✅ Performance monitoring completed', 'success');
      this.log(`📊 Bundle size: ${report.summary.bundleSizeMB} MB`);
      this.log(`🧠 Memory usage: ${report.summary.memoryUsageMB} MB`);
      this.log(`📁 Source files: ${report.summary.fileCount}`);
      this.log(`💡 Recommendations: ${report.summary.recommendationsCount}`);
      
      return report;
    } catch (error) {
      this.log(`❌ Performance monitoring failed: ${error.message}`, 'error');
      throw error;
    }
  }
}

// Main execution
if (import.meta.url === `file://${process.argv[1]}`) {
  const monitor = new PerformanceMonitorEnhanced();
  monitor.run().catch(console.error);
}

export default PerformanceMonitorEnhanced;