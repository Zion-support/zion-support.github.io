#!/usr/bin/env node

/**
 * Performance Monitor Script
 * Monitors system and application performance
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('📊 Performance Monitor Started');

class PerformanceMonitor {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.metrics = {
      timestamp: new Date().toISOString(),
      system: {},
      application: {},
      build: {}
    };
  }

  async monitor() {
    try {
      console.log('🔍 Collecting performance metrics...');
      
      // Collect system metrics
      await this.collectSystemMetrics();
      
      // Collect application metrics
      await this.collectApplicationMetrics();
      
      // Collect build metrics
      await this.collectBuildMetrics();
      
      // Save metrics
      await this.saveMetrics();
      
      // Display summary
      this.displaySummary();
      
      console.log('✅ Performance monitoring completed');
      
    } catch (error) {
      console.error('❌ Error during performance monitoring:', error.message);
    }
  }

  async collectSystemMetrics() {
    try {
      console.log('💻 Collecting system metrics...');
      
      // Memory usage
      const memoryInfo = process.memoryUsage();
      this.metrics.system.memory = {
        rss: Math.round(memoryInfo.rss / 1024 / 1024), // MB
        heapUsed: Math.round(memoryInfo.heapUsed / 1024 / 1024), // MB
        heapTotal: Math.round(memoryInfo.heapTotal / 1024 / 1024), // MB
        external: Math.round(memoryInfo.external / 1024 / 1024) // MB
      };
      
      // CPU usage
      const startUsage = process.cpuUsage();
      await this.sleep(100); // Wait 100ms
      const endUsage = process.cpuUsage(startUsage);
      
      this.metrics.system.cpu = {
        user: Math.round(endUsage.user / 1000), // ms
        system: Math.round(endUsage.system / 1000) // ms
      };
      
      // Process info
      this.metrics.system.process = {
        pid: process.pid,
        uptime: Math.round(process.uptime()),
        version: process.version,
        platform: process.platform,
        arch: process.arch
      };
      
    } catch (error) {
      console.warn('⚠️  Could not collect system metrics:', error.message);
    }
  }

  async collectApplicationMetrics() {
    try {
      console.log('📱 Collecting application metrics...');
      
      // Check file sizes
      const distPath = path.join(this.projectRoot, 'dist');
      if (fs.existsSync(distPath)) {
        const distSize = this.getDirectorySize(distPath);
        this.metrics.application.buildSize = Math.round(distSize / 1024 / 1024); // MB
      }
      
      // Check node_modules size
      const nodeModulesPath = path.join(this.projectRoot, 'node_modules');
      if (fs.existsSync(nodeModulesPath)) {
        const nodeModulesSize = this.getDirectorySize(nodeModulesPath);
        this.metrics.application.dependenciesSize = Math.round(nodeModulesSize / 1024 / 1024); // MB
      }
      
      // Check source code size
      const srcPath = path.join(this.projectRoot, 'src');
      if (fs.existsSync(srcPath)) {
        const srcSize = this.getDirectorySize(srcPath);
        this.metrics.application.sourceSize = Math.round(srcSize / 1024); // KB
      }
      
      // Count files
      this.metrics.application.fileCounts = {
        source: this.countFiles(srcPath, ['.ts', '.tsx', '.js', '.jsx']),
        styles: this.countFiles(path.join(this.projectRoot, 'styles'), ['.css', '.scss', '.sass']),
        tests: this.countFiles(path.join(this.projectRoot, 'tests'), ['.test.js', '.test.ts', '.spec.js', '.spec.ts'])
      };
      
    } catch (error) {
      console.warn('⚠️  Could not collect application metrics:', error.message);
    }
  }

  async collectBuildMetrics() {
    try {
      console.log('🔨 Collecting build metrics...');
      
      // Check if build artifacts exist
      const buildFiles = [
        'dist/index.html',
        'dist/css',
        'dist/js',
        'dist/assets'
      ];
      
      this.metrics.build.artifacts = {};
      buildFiles.forEach(file => {
        const filePath = path.join(this.projectRoot, file);
        this.metrics.build.artifacts[file] = fs.existsSync(filePath);
      });
      
      // Check build configuration
      const viteConfigPath = path.join(this.projectRoot, 'vite.config.ts');
      if (fs.existsSync(viteConfigPath)) {
        const viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
        this.metrics.build.config = {
          hasVite: true,
          hasBuildOptimizations: viteConfig.includes('build.rollupOptions'),
          hasChunkSplitting: viteConfig.includes('build.rollupOptions.output.manualChunks')
        };
      }
      
    } catch (error) {
      console.warn('⚠️  Could not collect build metrics:', error.message);
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          totalSize += this.getDirectorySize(fullPath);
        } else {
          totalSize += stat.size;
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
    
    return totalSize;
  }

  countFiles(dirPath, extensions) {
    let count = 0;
    
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          count += this.countFiles(fullPath, extensions);
        } else if (extensions.some(ext => item.endsWith(ext))) {
          count++;
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
    
    return count;
  }

  async saveMetrics() {
    const metricsPath = path.join(this.projectRoot, 'logs', 'performance-metrics.json');
    try {
      fs.writeFileSync(metricsPath, JSON.stringify(this.metrics, null, 2));
      console.log(`📊 Metrics saved to: ${metricsPath}`);
    } catch (error) {
      console.warn('⚠️  Could not save metrics:', error.message);
    }
  }

  displaySummary() {
    console.log('\n📊 Performance Summary:');
    console.log('─'.repeat(50));
    
    // System metrics
    console.log('💻 System:');
    console.log(`   Memory: ${this.metrics.system.memory?.heapUsed || 'N/A'}MB used / ${this.metrics.system.memory?.heapTotal || 'N/A'}MB total`);
    console.log(`   CPU: ${this.metrics.system.cpu?.user || 'N/A'}ms user / ${this.metrics.system.cpu?.system || 'N/A'}ms system`);
    console.log(`   Uptime: ${this.metrics.system.process?.uptime || 'N/A'}s`);
    
    // Application metrics
    console.log('\n📱 Application:');
    if (this.metrics.application.buildSize) {
      console.log(`   Build size: ${this.metrics.application.buildSize}MB`);
    }
    if (this.metrics.application.dependenciesSize) {
      console.log(`   Dependencies: ${this.metrics.application.dependenciesSize}MB`);
    }
    if (this.metrics.application.sourceSize) {
      console.log(`   Source code: ${this.metrics.application.sourceSize}KB`);
    }
    
    // Build metrics
    console.log('\n🔨 Build:');
    const artifactCount = Object.values(this.metrics.build.artifacts || {}).filter(Boolean).length;
    console.log(`   Artifacts: ${artifactCount}/${Object.keys(this.metrics.build.artifacts || {}).length} present`);
    
    console.log('─'.repeat(50));
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Run the performance monitor
const monitor = new PerformanceMonitor();
monitor.monitor().then(() => {
  console.log('📊 Performance Monitor Completed');
  process.exit(0);
}).catch((error) => {
  console.error('❌ Performance Monitor Failed:', error);
  process.exit(1);
});