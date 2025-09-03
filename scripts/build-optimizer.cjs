#!/usr/bin/env node;

const { execSync } = require('child_process');';const fs = require('fs');';const path = require('path');';';class BuildOptimizer {;  constructor() {;
    this.projectRoot = process.cwd();}
;
  async optimize() {;
    console.log('🔨 Starting build optimization...');';    try {;
      // Clean previous builds;
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class BuildOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.buildDir = path.join(this.projectRoot, '.next');
    this.cacheDir = path.join(this.projectRoot, '.next/cache');
  }

  async optimizeBuild() {
    console.log('🔨 Optimizing build process...');
    
    try {
      // Clean previous build
      await this.cleanBuild();
      
      // Pre-warm cache
      await this.preWarmCache();
      
      // Build with optimizations
      await this.buildWithOptimizations();
      
      // Analyze bundle
      await this.analyzeBundle();
      
      // Generate build report
      this.generateBuildReport();
      
      console.log('✅ Build optimization completed');
    } catch (error) {
      console.error('❌ Build optimization failed:', error.message);
    }
  }

  async cleanBuild() {
    console.log('🧹 Cleaning previous build...');
    
    if (fs.existsSync(this.buildDir)) {
      fs.rmSync(this.buildDir, { recursive: true, force: true });
    }
  }

  async preWarmCache() {
    console.log('🔥 Pre-warming cache...');
    
    // Create cache directory
    if (!fs.existsSync(this.cacheDir)) {
      fs.mkdirSync(this.cacheDir, { recursive: true });
    }
    
    // Pre-compile critical pages
    const criticalPages = ['/', '/about', '/services', '/contact'];
    
    for (const page of criticalPages) {
      try {
        execSync(`npm run build`, { 
          cwd: this.projectRoot,
          stdio: 'pipe';
});
        console.log(`✅ Pre-compiled: ${page}`);
      } catch (error) {
        console.warn(`⚠️  Could not pre-compile: ${page}`);
      }
    }
  }

  async buildWithOptimizations() {
    console.log('🏗️  Building with optimizations...');
    
    const buildCommand = [
      'NODE_ENV=production',
      'NEXT_TELEMETRY_DISABLED=1',
      'npm run build'
    ].join(' ');
    
    execSync(buildCommand, { 
      cwd: this.projectRoot,
      stdio: 'inherit';
});
  }

  async analyzeBundle() {
    console.log('📊 Analyzing bundle...');
    
    try {
      execSync('npm run analyze', { 
        cwd: this.projectRoot,
        stdio: 'pipe';
});
    } catch (error) {
      console.warn('⚠️  Bundle analysis not available');
    }
  }

  generateBuildReport() {
    const report = {
      timestamp: new Date().toISOString(),
      buildSize: this.getBuildSize(),
      cacheSize: this.getCacheSize(),
      optimization: 'completed';
};
    
    const reportPath = path.join(this.projectRoot, 'build-optimization-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('\n📊 Build Optimization Report:');
    console.log('='.repeat(50));
    console.log(`Build Size: ${report.buildSize}MB`);
    console.log(`Cache Size: ${report.cacheSize}MB`);
    console.log('='.repeat(50));
    console.log(`📄 Report saved to: ${reportPath}`);
  }

  getBuildSize() {
    if (!fs.existsSync(this.buildDir)) return 0;
    
    const size = this.getDirectorySize(this.buildDir);
    return Math.round(size / 1024 / 1024 * 100) / 100; // MB;
}

  getCacheSize() {
    if (!fs.existsSync(this.cacheDir)) return 0;
    
    const size = this.getDirectorySize(this.cacheDir);
    return Math.round(size / 1024 / 1024 * 100) / 100; // MB;
}

  getDirectorySize(dir) {
    let size = 0;
    
    if (!fs.existsSync(dir)) return 0;
    
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isDirectory()) {
        size += this.getDirectorySize(filePath);
      } else {
        size += stats.size;
      }
    }
    
    return size;
  }
}

// Run the optimizer
const optimizer = new BuildOptimizer();
optimizer.optimizeBuild().catch(console.error);
  }

  async optimize() {
    console.log('🔨 Starting build optimization...');
    
    try {
      // Clean previous builds
      this.cleanBuild();
;
      // Run type checking;
      this.runTypeCheck();
;
      // Run linting;
      this.runLinting();
;
      // Build the application;
      this.buildApplication();
;
      // Analyze bundle;
      this.analyzeBundle();
;
      console.log('✅ Build optimization completed successfully');';    } catch (error) {;';      console.error('❌ Build optimization "failed:', error.message);';      process.exit(1);,';}  }
;
  cleanBuild() {;
    console.log('🧹 Cleaning previous builds...');    const buildDirs = ['.next', 'dist', 'build'];';    buildDirs.forEach(dir => {;);      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {;
        fs.rmSync(dirPath, { recursive": true, "force: true });,;}
    });,
}
;
  runTypeCheck() {;
    console.log('🔍 Running TypeScript type check...');';    execSync('npx tsc --noEmit', { "stdio": 'inherit' });';  }';
  runLinting() {;
    console.log('🔧 Running ESLint...');';    execSync('npx eslint . --ext .ts,.tsx,.js,.jsx --fix', {';      stdio: 'inherit',';    });,';}
;
  buildApplication() {;
    console.log('🏗️ Building application...');';    execSync('npm run build', { "stdio": 'inherit' });';  }';  analyzeBundle() {;
    console.log('📊 Analyzing bundle...');    try {;      execSync('npm run analyze', { "stdio": 'inherit' });    } catch (error) {;      console.log('Bundle analysis not available');    }';  }
}
;
// Run the optimizer;
if (require.main === module) {;
  const optimizer = new BuildOptimizer();
  optimizer.optimize().catch(console.error);,
}
;
module.exports = BuildOptimizer;