const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('⚡ Starting Performance Optimizer...');

class PerformanceOptimizer {
  constructor() {
    this.optimizations = [];
    this.logsDir = path.join(__dirname, '../logs');
    this.ensureLogsDir();
  }

  ensureLogsDir() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logsDir, 'performance-optimizer.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  // Optimize images
  async optimizeImages() {
    this.log('🖼️ Optimizing images...');
    
    try {
      const publicDir = 'public';
      if (fs.existsSync(publicDir)) {
        const imageFiles = this.findImageFiles(publicDir);
        
        for (const file of imageFiles) {
          const filePath = path.join(publicDir, file);
          const stats = fs.statSync(filePath);
          const sizeInKB = (stats.size / 1024).toFixed(2);
          
          if (stats.size > 100 * 1024) { // Files larger than 100KB
            this.log(`📸 Large image found: ${file} (${sizeInKB} KB)`);
            this.optimizations.push(`Large image detected: ${file}`);
          }
        }
        
        this.log(`✅ Scanned ${imageFiles.length} images`);
      }
    } catch (error) {
      this.log(`❌ Image optimization failed: ${error.message}`, 'error');
    }
  }

  findImageFiles(dir) {
    const imageFiles = [];
    const extensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    
    function scanDirectory(currentDir) {
      try {
        const items = fs.readdirSync(currentDir);
        
        for (const item of items) {
          const fullPath = path.join(currentDir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            scanDirectory(fullPath);
          } else if (extensions.some(ext => item.toLowerCase().endsWith(ext))) {
            imageFiles.push(path.relative(dir, fullPath));
          }
        }
      } catch (error) {
        // Skip directories that can't be read
      }
    }
    
    scanDirectory(dir);
    return imageFiles;
  }

  // Optimize bundle size
  async optimizeBundleSize() {
    this.log('📦 Optimizing bundle size...');
    
    try {
      // Check for large dependencies
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      const largeDeps = [];
      for (const [name, version] of Object.entries(dependencies)) {
        if (this.isLargeDependency(name)) {
          largeDeps.push({ name, version });
        }
      }
      
      if (largeDeps.length > 0) {
        this.log('📊 Large dependencies detected:');
        largeDeps.forEach(dep => {
          this.log(`  - ${dep.name}@${dep.version}`);
        });
        this.optimizations.push(`Large dependencies: ${largeDeps.map(d => d.name).join(', ')}`);
      }
      
      // Check for duplicate dependencies
      const duplicateDeps = this.findDuplicateDependencies(dependencies);
      if (duplicateDeps.length > 0) {
        this.log('🔄 Duplicate dependencies found:');
        duplicateDeps.forEach(dup => {
          this.log(`  - ${dup.name}: ${dup.versions.join(', ')}`);
        });
        this.optimizations.push(`Duplicate dependencies: ${duplicateDeps.map(d => d.name).join(', ')}`);
      }
      
    } catch (error) {
      this.log(`❌ Bundle optimization failed: ${error.message}`, 'error');
    }
  }

  isLargeDependency(name) {
    const largeDeps = [
      'lodash', 'moment', 'jquery', 'bootstrap', 'antd',
      'material-ui', 'semantic-ui', 'blueprint', 'chakra-ui'
    ];
    return largeDeps.some(dep => name.toLowerCase().includes(dep));
  }

  findDuplicateDependencies(dependencies) {
    const duplicates = [];
    const seen = new Map();
    
    for (const [name, version] of Object.entries(dependencies)) {
      const baseName = name.split('@')[0];
      if (seen.has(baseName)) {
        const existing = seen.get(baseName);
        existing.versions.push(version);
        duplicates.push(existing);
      } else {
        seen.set(baseName, { name: baseName, versions: [version] });
      }
    }
    
    return duplicates.filter(d => d.versions.length > 1);
  }

  // Optimize code splitting
  async optimizeCodeSplitting() {
    this.log('🔀 Optimizing code splitting...');
    
    try {
      // Check for dynamic imports
      const files = this.findSourceFiles();
      let dynamicImports = 0;
      
      for (const file of files) {
        const content = fs.readFileSync(file, 'utf8');
        const imports = content.match(/import\s*\(/g) || [];
        dynamicImports += imports.length;
      }
      
      this.log(`📊 Found ${dynamicImports} dynamic imports`);
      
      if (dynamicImports < 5) {
        this.optimizations.push('Consider adding more dynamic imports for better code splitting');
      }
      
    } catch (error) {
      this.log(`❌ Code splitting optimization failed: ${error.message}`, 'error');
    }
  }

  findSourceFiles() {
    const files = [];
    const extensions = ['.tsx', '.ts', '.jsx', '.js'];
    const directories = ['app', 'components', 'pages'];
    
    function scanDirectory(dir) {
      if (!fs.existsSync(dir)) return;
      
      try {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            scanDirectory(fullPath);
          } else if (extensions.some(ext => item.endsWith(ext))) {
            files.push(fullPath);
          }
        }
      } catch (error) {
        // Skip directories that can't be read
      }
    }
    
    directories.forEach(dir => scanDirectory(dir));
    return files;
  }

  // Optimize caching
  async optimizeCaching() {
    this.log('💾 Optimizing caching...');
    
    try {
      // Check for cache headers
      const nextConfigPath = 'next.config.js';
      if (fs.existsSync(nextConfigPath)) {
        const content = fs.readFileSync(nextConfigPath, 'utf8');
        
        if (!content.includes('Cache-Control') && !content.includes('cache')) {
          this.optimizations.push('Consider adding cache headers to Next.js config');
        }
      }
      
      // Check for service worker
      const swPath = 'public/sw.js';
      if (!fs.existsSync(swPath)) {
        this.optimizations.push('Consider implementing a service worker for better caching');
      }
      
    } catch (error) {
      this.log(`❌ Caching optimization failed: ${error.message}`, 'error');
    }
  }

  // Generate performance report
  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      optimizations: this.optimizations,
      summary: {
        totalOptimizations: this.optimizations.length,
        categories: {
          images: this.optimizations.filter(o => o.includes('image')).length,
          bundle: this.optimizations.filter(o => o.includes('dependencies') || o.includes('bundle')).length,
          codeSplitting: this.optimizations.filter(o => o.includes('dynamic imports')).length,
          caching: this.optimizations.filter(o => o.includes('cache')).length
        }
      }
    };

    const reportFile = path.join(this.logsDir, 'performance-optimizer-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Performance report generated: ${reportFile}`);
    return report;
  }

  // Run all optimizations
  async runAllOptimizations() {
    this.log('⚡ Starting comprehensive performance optimization...');
    
    await this.optimizeImages();
    await this.optimizeBundleSize();
    await this.optimizeCodeSplitting();
    await this.optimizeCaching();
    
    const report = await this.generateReport();
    
    this.log('🎉 Performance optimization completed!');
    this.log(`📊 Total optimizations: ${this.optimizations.length}`);
    
    return report;
  }
}

// CLI Interface
if (require.main === module) {
  const optimizer = new PerformanceOptimizer();
  optimizer.runAllOptimizations().catch(console.error);
}

module.exports = PerformanceOptimizer;