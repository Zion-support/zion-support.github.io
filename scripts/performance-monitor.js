#!/usr/bin/env node

import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class IntelligentPerformanceMonitor {
  constructor() {
    this.performanceMetrics = {
      cpuUsage: 0,
      memoryUsage: 0,
      diskUsage: 0,
      networkLatency: 0,
      buildTime: 0,
      bundleSize: 0,
      lighthouseScore: 0,
      responseTime: 0
    };
    
    this.performanceHistory = [];
    this.optimizationSuggestions = [];
    this.thresholds = {
      cpu: 80, // CPU usage threshold
      memory: 85, // Memory usage threshold
      disk: 90, // Disk usage threshold
      buildTime: 60000, // Build time threshold (60 seconds)
      bundleSize: 500000 // Bundle size threshold (500KB)
    };
    
    this.startMonitoring();
  }

  async startMonitoring() {
    console.log('⚡ Intelligent Performance Monitor Started');
    
    // Monitor system resources every 30 seconds
    setInterval(() => this.monitorSystemResources(), 30 * 1000);
    
    // Monitor build performance every 5 minutes
    setInterval(() => this.monitorBuildPerformance(), 5 * 60 * 1000);
    
    // Monitor bundle size every 10 minutes
    setInterval(() => this.monitorBundleSize(), 10 * 60 * 1000);
    
    // Run Lighthouse audit every 15 minutes
    setInterval(() => this.runLighthouseAudit(), 15 * 60 * 1000);
    
    // Run initial analysis
    await this.runPerformanceAnalysis();
  }

  async runPerformanceAnalysis() {
    try {
      console.log('📊 Running performance analysis...');
      
      // Analyze current system state
      await this.analyzeSystemState();
      
      // Analyze build performance
      await this.analyzeBuildPerformance();
      
      // Analyze bundle optimization
      await this.analyzeBundleOptimization();
      
      // Generate performance report
      this.generatePerformanceReport();
      
    } catch (error) {
      console.error('❌ Performance analysis failed:', error.message);
    }
  }

  async monitorSystemResources() {
    try {
      // CPU usage
      const cpuUsage = os.loadavg()[0] * 100; // 1 minute average
      this.performanceMetrics.cpuUsage = Math.round(cpuUsage);
      
      // Memory usage
      const totalMem = os.totalmem();
      const freeMem = os.freemem();
      const usedMem = totalMem - freeMem;
      this.performanceMetrics.memoryUsage = Math.round((usedMem / totalMem) * 100);
      
      // Disk usage
      await this.checkDiskUsage();
      
      // Check thresholds and generate alerts
      this.checkPerformanceThresholds();
      
      // Update performance history
      this.updatePerformanceHistory();
      
    } catch (error) {
      console.error('❌ System resource monitoring failed:', error.message);
    }
  }

  async checkDiskUsage() {
    return new Promise((resolve) => {
      exec('df -h .', (error, stdout) => {
        if (!error) {
          const lines = stdout.split('\n');
          if (lines.length > 1) {
            const parts = lines[1].split(/\s+/);
            if (parts.length > 4) {
              const usageStr = parts[4].replace('%', '');
              this.performanceMetrics.diskUsage = parseInt(usageStr);
            }
          }
        }
        resolve();
      });
    });
  }

  checkPerformanceThresholds() {
    // CPU threshold check
    if (this.performanceMetrics.cpuUsage > this.thresholds.cpu) {
      this.optimizationSuggestions.push({
        type: 'system',
        priority: 'high',
        message: `High CPU usage: ${this.performanceMetrics.cpuUsage}%`,
        action: 'Check for CPU-intensive processes and optimize resource usage',
        impact: 'System responsiveness and build performance'
      });
    }
    
    // Memory threshold check
    if (this.performanceMetrics.memoryUsage > this.thresholds.memory) {
      this.optimizationSuggestions.push({
        type: 'system',
        priority: 'high',
        message: `High memory usage: ${this.performanceMetrics.memoryUsage}%`,
        action: 'Free up memory or increase available RAM',
        impact: 'Build stability and system performance'
      });
    }
    
    // Disk threshold check
    if (this.performanceMetrics.diskUsage > this.thresholds.disk) {
      this.optimizationSuggestions.push({
        type: 'system',
        priority: 'critical',
        message: `High disk usage: ${this.performanceMetrics.diskUsage}%`,
        action: 'Clean up disk space immediately',
        impact: 'System stability and data integrity'
      });
    }
  }

  async monitorBuildPerformance() {
    try {
      // Check if there's a recent build
      const buildLogPath = path.join(__dirname, '../logs/build-optimization-report.json');
      
      if (fs.existsSync(buildLogPath)) {
        const buildData = JSON.parse(fs.readFileSync(buildLogPath, 'utf8'));
        
        if (buildData.performanceMetrics && buildData.performanceMetrics.lastBuildTime) {
          const buildTime = buildData.performanceMetrics.lastBuildTime;
          this.performanceMetrics.buildTime = buildTime;
          
          if (buildTime > this.thresholds.buildTime) {
            this.optimizationSuggestions.push({
              type: 'build',
              priority: 'medium',
              message: `Slow build time: ${Math.round(buildTime / 1000)}s`,
              action: 'Optimize build configuration and dependencies',
              impact: 'Development productivity'
            });
          }
        }
      }
      
      // Analyze build configuration for performance issues
      await this.analyzeBuildConfiguration();
      
    } catch (error) {
      console.error('❌ Build performance monitoring failed:', error.message);
    }
  }

  async analyzeBuildConfiguration() {
    try {
      // Check Vite configuration for performance optimizations
      if (fs.existsSync('vite.config.ts')) {
        const viteConfig = fs.readFileSync('vite.config.ts', 'utf8');
        
        // Check for build optimizations
        if (!viteConfig.includes('build.minify')) {
          this.optimizationSuggestions.push({
            type: 'build',
            priority: 'medium',
            message: 'Enable build minification for production',
            action: 'Add minify: true to vite.config.ts build options',
            impact: 'Bundle size and loading performance'
          });
        }
        
        if (!viteConfig.includes('build.sourcemap')) {
          this.optimizationSuggestions.push({
            type: 'build',
            priority: 'low',
            message: 'Disable source maps in production for better performance',
            action: 'Set sourcemap: false in production builds',
            impact: 'Bundle size and security'
          });
        }
        
        if (!viteConfig.includes('build.rollupOptions')) {
          this.optimizationSuggestions.push({
            type: 'build',
            priority: 'medium',
            message: 'Add rollup options for better tree shaking',
            action: 'Configure rollup options in vite.config.ts',
            impact: 'Bundle size and loading performance'
          });
        }
      }
      
      // Check TypeScript configuration
      if (fs.existsSync('tsconfig.json')) {
        const tsConfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
        
        if (!tsConfig.compilerOptions?.skipLibCheck) {
          this.optimizationSuggestions.push({
            type: 'build',
            priority: 'low',
            message: 'Enable skipLibCheck for faster builds',
            action: 'Add "skipLibCheck": true to tsconfig.json',
            impact: 'Build speed'
          });
        }
      }
      
    } catch (error) {
      console.error('❌ Build configuration analysis failed:', error.message);
    }
  }

  async monitorBundleSize() {
    try {
      // Check if dist directory exists (after build)
      const distPath = path.join(__dirname, '../dist');
      
      if (fs.existsSync(distPath)) {
        const bundleSize = this.calculateBundleSize(distPath);
        this.performanceMetrics.bundleSize = bundleSize;
        
        if (bundleSize > this.thresholds.bundleSize) {
          this.optimizationSuggestions.push({
            type: 'bundle',
            priority: 'medium',
            message: `Large bundle size: ${Math.round(bundleSize / 1024)}KB`,
            action: 'Implement code splitting and tree shaking',
            impact: 'User experience and loading performance'
          });
        }
        
        // Analyze bundle composition
        await this.analyzeBundleComposition(distPath);
      }
      
    } catch (error) {
      console.error('❌ Bundle size monitoring failed:', error.message);
    }
  }

  calculateBundleSize(dirPath) {
    let totalSize = 0;
    
    const calculateDirSize = (dir) => {
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          calculateDirSize(fullPath);
        } else {
          totalSize += stat.size;
        }
      });
    };
    
    calculateDirSize(dirPath);
    return totalSize;
  }

  async analyzeBundleComposition(distPath) {
    try {
      const jsFiles = [];
      const cssFiles = [];
      const otherFiles = [];
      
      const analyzeDir = (dir) => {
        const items = fs.readdirSync(dir);
        
        items.forEach(item => {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            analyzeDir(fullPath);
          } else {
            const ext = path.extname(item);
            const size = stat.size;
            
            if (ext === '.js') {
              jsFiles.push({ name: item, size });
            } else if (ext === '.css') {
              cssFiles.push({ name: item, size });
            } else {
              otherFiles.push({ name: item, size });
            }
          }
        });
      };
      
      analyzeDir(distPath);
      
      // Check for large individual files
      const largeFiles = [...jsFiles, ...cssFiles].filter(file => file.size > 100000);
      
      if (largeFiles.length > 0) {
        largeFiles.forEach(file => {
          this.optimizationSuggestions.push({
            type: 'bundle',
            priority: 'medium',
            message: `Large file detected: ${file.name} (${Math.round(file.size / 1024)}KB)`,
            action: 'Split large files or implement lazy loading',
            impact: 'Initial page load performance'
          });
        });
      }
      
      // Check for too many small files (indicating poor bundling)
      if (jsFiles.length > 10) {
        this.optimizationSuggestions.push({
          type: 'bundle',
          priority: 'low',
          message: `Many small JS files (${jsFiles.length}), consider better bundling`,
          action: 'Review bundle splitting strategy',
          impact: 'HTTP request optimization'
        });
      }
      
    } catch (error) {
      console.error('❌ Bundle composition analysis failed:', error.message);
    }
  }

  async runLighthouseAudit() {
    try {
      // Check if Lighthouse is available
      exec('lighthouse --version', (error) => {
        if (!error) {
          // Run Lighthouse audit on local development server
          exec('lighthouse http://localhost:3000 --output=json --output-path=./logs/lighthouse-report.json --chrome-flags="--headless"', (error, stdout) => {
            if (!error) {
              this.parseLighthouseResults();
            }
          });
        } else {
          console.log('📊 Lighthouse not available, skipping performance audit');
        }
      });
    } catch (error) {
      console.error('❌ Lighthouse audit failed:', error.message);
    }
  }

  parseLighthouseResults() {
    try {
      const lighthousePath = path.join(__dirname, '../logs/lighthouse-report.json');
      
      if (fs.existsSync(lighthousePath)) {
        const results = JSON.parse(fs.readFileSync(lighthousePath, 'utf8'));
        
        if (results.lhr && results.lhr.categories) {
          const performance = results.lhr.categories.performance;
          if (performance) {
            this.performanceMetrics.lighthouseScore = Math.round(performance.score * 100);
            
            if (this.performanceMetrics.lighthouseScore < 90) {
              this.optimizationSuggestions.push({
                type: 'web',
                priority: 'medium',
                message: `Low Lighthouse performance score: ${this.performanceMetrics.lighthouseScore}/100`,
                action: 'Review and implement Lighthouse recommendations',
                impact: 'User experience and SEO'
              });
            }
          }
        }
      }
    } catch (error) {
      console.error('❌ Lighthouse results parsing failed:', error.message);
    }
  }

  updatePerformanceHistory() {
    this.performanceHistory.push({
      timestamp: new Date(),
      metrics: { ...this.performanceMetrics }
    });
    
    // Keep only last 100 entries
    if (this.performanceHistory.length > 100) {
      this.performanceHistory = this.performanceHistory.slice(-100);
    }
  }

  generatePerformanceReport() {
    const report = {
      timestamp: new Date(),
      performanceMetrics: this.performanceMetrics,
      optimizationSuggestions: this.optimizationSuggestions,
      performanceHistory: this.performanceHistory.slice(-20), // Last 20 entries
      thresholds: this.thresholds
    };
    
    // Calculate performance score
    const performanceScore = this.calculatePerformanceScore();
    
    // Save report to file
    fs.writeFileSync(
      path.join(__dirname, '../logs/performance-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    // Log summary
    console.log('\n📈 Performance Report:');
    console.log(`   Performance Score: ${performanceScore}/100`);
    console.log(`   CPU Usage: ${this.performanceMetrics.cpuUsage}%`);
    console.log(`   Memory Usage: ${this.performanceMetrics.memoryUsage}%`);
    console.log(`   Disk Usage: ${this.performanceMetrics.diskUsage}%`);
    console.log(`   Build Time: ${Math.round(this.performanceMetrics.buildTime / 1000)}s`);
    console.log(`   Bundle Size: ${Math.round(this.performanceMetrics.bundleSize / 1024)}KB`);
    console.log(`   Lighthouse Score: ${this.performanceMetrics.lighthouseScore}/100`);
    console.log(`   Optimization Suggestions: ${this.optimizationSuggestions.length}`);
    
    if (this.optimizationSuggestions.length > 0) {
      console.log('\n🚀 Recommended Actions:');
      this.optimizationSuggestions
        .sort((a, b) => this.getPriorityScore(b.priority) - this.getPriorityScore(a.priority))
        .slice(0, 5) // Show top 5 suggestions
        .forEach((suggestion, index) => {
          console.log(`   ${index + 1}. [${suggestion.priority.toUpperCase()}] ${suggestion.message}`);
          console.log(`      Action: ${suggestion.action}`);
          console.log(`      Impact: ${suggestion.impact}`);
        });
    }
  }

  calculatePerformanceScore() {
    let score = 100;
    
    // Deduct points for exceeding thresholds
    if (this.performanceMetrics.cpuUsage > this.thresholds.cpu) {
      score -= 20;
    }
    
    if (this.performanceMetrics.memoryUsage > this.thresholds.memory) {
      score -= 20;
    }
    
    if (this.performanceMetrics.diskUsage > this.thresholds.disk) {
      score -= 30;
    }
    
    if (this.performanceMetrics.buildTime > this.thresholds.buildTime) {
      score -= 15;
    }
    
    if (this.performanceMetrics.bundleSize > this.thresholds.bundleSize) {
      score -= 15;
    }
    
    return Math.max(0, score);
  }

  getPriorityScore(priority) {
    const scores = { critical: 4, high: 3, medium: 2, low: 1 };
    return scores[priority] || 0;
  }
}

// Start the monitor
const monitor = new IntelligentPerformanceMonitor();

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down Performance Monitor...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down Performance Monitor...');
  process.exit(0);
});