#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class PerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.metrics = {
      timestamp: new Date().toISOString(),
      system: {
        memory: {},
        cpu: {},
        process: {}
      },
      application: {
        buildSize: 0,
        dependenciesSize: 0,
        sourceSize: 0,
        fileCounts: {}
      },
      build: {
        hasBuildArtifacts: false,
        buildTime: 0,
        bundleSize: 0
      }
    };
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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
      
      console.log('✅ System metrics collected');
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
        components: this.countFiles(path.join(srcPath, 'components'), ['.tsx', '.jsx']),
        pages: this.countFiles(path.join(srcPath, 'pages'), ['.tsx', '.jsx'])
      };
      
      console.log('✅ Application metrics collected');
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
      
      this.metrics.build.hasBuildArtifacts = buildFiles.some(file => 
        fs.existsSync(path.join(this.projectRoot, file))
      );
      
      // Check build configuration
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        this.metrics.build.scripts = Object.keys(packageJson.scripts || {});
      }
      
      console.log('✅ Build metrics collected');
    } catch (error) {
      console.warn('⚠️  Could not collect build metrics:', error.message);
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    
    if (!fs.existsSync(dirPath)) return 0;
    
    const files = fs.readdirSync(dirPath);
    
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isDirectory()) {
        // Skip directories we can't access
        if (file === 'node_modules' || file === '.git') continue;
        totalSize += this.getDirectorySize(filePath);
      } else {
        totalSize += stats.size;
      }
    }
    
    return totalSize;
  }

  countFiles(dirPath, extensions) {
    if (!fs.existsSync(dirPath)) return 0;
    
    let count = 0;
    const files = fs.readdirSync(dirPath);
    
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isDirectory()) {
        count += this.countFiles(filePath, extensions);
      } else if (extensions.some(ext => file.endsWith(ext))) {
        count++;
      }
    }
    
    return count;
  }

  async saveMetrics() {
    const reportPath = path.join(this.projectRoot, 'performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(this.metrics, null, 2));
    console.log(`📊 Metrics saved to ${reportPath}`);
  }

  displaySummary() {
    console.log('\n📊 Performance Summary:');
    console.log('='.repeat(50));
    
    // System metrics
    console.log('💻 System Metrics:');
    console.log(`   Memory: ${this.metrics.system.memory.heapUsed}MB / ${this.metrics.system.memory.heapTotal}MB`);
    console.log(`   CPU: ${this.metrics.system.cpu.user}ms user, ${this.metrics.system.cpu.system}ms system`);
    console.log(`   Process: PID ${this.metrics.system.process.pid}, Uptime: ${this.metrics.system.process.uptime}s`);
    
    // Application metrics
    console.log('\n📱 Application Metrics:');
    console.log(`   Build Size: ${this.metrics.application.buildSize}MB`);
    console.log(`   Dependencies: ${this.metrics.application.dependenciesSize}MB`);
    console.log(`   Source Code: ${this.metrics.application.sourceSize}KB`);
    console.log(`   Files: ${this.metrics.application.fileCounts.source} source, ${this.metrics.application.fileCounts.components} components`);
    
    // Build metrics
    console.log('\n🔨 Build Metrics:');
    console.log(`   Has Build Artifacts: ${this.metrics.build.hasBuildArtifacts ? 'Yes' : 'No'}`);
    console.log(`   Available Scripts: ${this.metrics.build.scripts?.length || 0}`);
    
    console.log('='.repeat(50));
  }
}

// Run the performance monitor
const monitor = new PerformanceMonitor();
monitor.monitor().catch(error => {
  console.error('Fatal error:', error.message);
  process.exit(1);
});