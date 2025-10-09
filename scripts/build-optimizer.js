#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class BuildOptimizer {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.optimizations = [];
    this.startTime = Date.now();
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'error' ? '❌' : type === 'warning' ? '⚠️' : type === 'success' ? '✅' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`);
      const output = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: process.cwd()
      });
      this.log(`✅ ${description} completed successfully`);
      return output;
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'error');
      this.errors.push(`${description}: ${error.message}`);
      throw error;
    }
  }

  async checkDependencies() {
    this.log('Checking dependencies...');
    
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      // Check for outdated packages
      const outdatedPackages = [];
      for (const [name, version] of Object.entries(dependencies)) {
        if (version.includes('^') || version.includes('~')) {
          outdatedPackages.push(`${name}@${version}`);
        }
      }
      
      if (outdatedPackages.length > 0) {
        this.warnings.push(`Outdated packages detected: ${outdatedPackages.join(', ')}`);
      }
      
      this.log('✅ Dependencies check completed');
    } catch (error) {
      this.log(`❌ Dependencies check failed: ${error.message}`, 'error');
      this.errors.push(`Dependencies check: ${error.message}`);
    }
  }

  async runLinting() {
    this.log('Running ESLint...');
    
    try {
      await this.runCommand('npm run lint', 'ESLint check');
      this.optimizations.push('Code linting passed');
    } catch (error) {
      this.log('⚠️ ESLint found issues, attempting to fix...', 'warning');
      try {
        await this.runCommand('npm run lint:fix', 'ESLint auto-fix');
        this.optimizations.push('ESLint issues auto-fixed');
      } catch (fixError) {
        this.warnings.push('ESLint auto-fix failed, manual fixes needed');
      }
    }
  }

  async runTypeChecking() {
    this.log('Running TypeScript type checking...');
    
    try {
      await this.runCommand('npm run type-check', 'TypeScript type check');
      this.optimizations.push('TypeScript type checking passed');
    } catch (error) {
      this.log('⚠️ TypeScript found type errors', 'warning');
      this.warnings.push('TypeScript type errors detected');
    }
  }

  async runTests() {
    this.log('Running tests...');
    
    try {
      await this.runCommand('npm run test', 'Test suite');
      this.optimizations.push('All tests passed');
    } catch (error) {
      this.log('⚠️ Some tests failed', 'warning');
      this.warnings.push('Test failures detected');
    }
  }

  async optimizeImages() {
    this.log('Optimizing images...');
    
    try {
      // Check if sharp is available
      const sharpPath = path.join('node_modules', 'sharp');
      if (fs.existsSync(sharpPath)) {
        await this.runCommand('npm run optimize:images', 'Image optimization');
        this.optimizations.push('Images optimized');
      } else {
        this.log('⚠️ Sharp not found, skipping image optimization', 'warning');
      }
    } catch (error) {
      this.log('⚠️ Image optimization failed', 'warning');
      this.warnings.push('Image optimization failed');
    }
  }

  async optimizeCSS() {
    this.log('Optimizing CSS...');
    
    try {
      await this.runCommand('npm run optimize:css', 'CSS optimization');
      this.optimizations.push('CSS optimized');
    } catch (error) {
      this.log('⚠️ CSS optimization failed', 'warning');
      this.warnings.push('CSS optimization failed');
    }
  }

  async runBuild() {
    this.log('Building application...');
    
    try {
      // Try optimized build first
      if (fs.existsSync('next.config.optimized.js')) {
        fs.copyFileSync('next.config.optimized.js', 'next.config.js');
        this.log('Using optimized Next.js configuration');
      }
      
      await this.runCommand('npm run build', 'Production build');
      this.optimizations.push('Production build completed');
      
      // Check build output
      const buildDir = '.next';
      if (fs.existsSync(buildDir)) {
        const buildSize = this.getDirectorySize(buildDir);
        this.log(`Build size: ${this.formatBytes(buildSize)}`);
        
        if (buildSize > 50 * 1024 * 1024) { // 50MB
          this.warnings.push(`Large build size: ${this.formatBytes(buildSize)}`);
        }
      }
      
    } catch (error) {
      this.log('❌ Build failed, trying fallback build...', 'error');
      
      try {
        // Try fallback build without optimizations
        await this.runCommand('npm run build:no-check', 'Fallback build');
        this.optimizations.push('Fallback build completed');
      } catch (fallbackError) {
        throw new Error(`Both builds failed: ${error.message} | ${fallbackError.message}`);
      }
    }
  }

  async runBundleAnalysis() {
    this.log('Analyzing bundle...');
    
    try {
      await this.runCommand('npm run build:analyze', 'Bundle analysis');
      this.optimizations.push('Bundle analysis completed');
    } catch (error) {
      this.log('⚠️ Bundle analysis failed', 'warning');
      this.warnings.push('Bundle analysis failed');
    }
  }

  async runPerformanceAudit() {
    this.log('Running performance audit...');
    
    try {
      // Start the application
      const serverProcess = execSync('npm run preview', { 
        stdio: 'pipe',
        detached: true 
      });
      
      // Wait for server to start
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Run Lighthouse audit
      await this.runCommand('npm run performance:audit', 'Lighthouse audit');
      this.optimizations.push('Performance audit completed');
      
      // Kill the server
      process.kill(serverProcess.pid);
      
    } catch (error) {
      this.log('⚠️ Performance audit failed', 'warning');
      this.warnings.push('Performance audit failed');
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    
    const getSize = (itemPath) => {
      const stats = fs.statSync(itemPath);
      if (stats.isDirectory()) {
        const files = fs.readdirSync(itemPath);
        files.forEach(file => getSize(path.join(itemPath, file)));
      } else {
        totalSize += stats.size;
      }
    };
    
    if (fs.existsSync(dirPath)) {
      getSize(dirPath);
    }
    
    return totalSize;
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  generateReport() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      errors: this.errors,
      warnings: this.warnings,
      optimizations: this.optimizations,
      summary: {
        totalErrors: this.errors.length,
        totalWarnings: this.warnings.length,
        totalOptimizations: this.optimizations.length,
        success: this.errors.length === 0
      }
    };
    
    // Write report to file
    fs.writeFileSync('build-optimization-report.json', JSON.stringify(report, null, 2));
    
    // Display summary
    this.log('\n📊 BUILD OPTIMIZATION REPORT');
    this.log('='.repeat(50));
    this.log(`Duration: ${duration}ms`);
    this.log(`Errors: ${this.errors.length}`);
    this.log(`Warnings: ${this.warnings.length}`);
    this.log(`Optimizations: ${this.optimizations.length}`);
    this.log(`Success: ${report.summary.success ? '✅' : '❌'}`);
    
    if (this.errors.length > 0) {
      this.log('\n❌ ERRORS:');
      this.errors.forEach(error => this.log(`  - ${error}`, 'error'));
    }
    
    if (this.warnings.length > 0) {
      this.log('\n⚠️ WARNINGS:');
      this.warnings.forEach(warning => this.log(`  - ${warning}`, 'warning'));
    }
    
    if (this.optimizations.length > 0) {
      this.log('\n✅ OPTIMIZATIONS:');
      this.optimizations.forEach(optimization => this.log(`  - ${optimization}`));
    }
    
    return report;
  }

  async run() {
    try {
      this.log('🚀 Starting build optimization process...');
      
      await this.checkDependencies();
      await this.runLinting();
      await this.runTypeChecking();
      await this.runTests();
      await this.optimizeImages();
      await this.optimizeCSS();
      await this.runBuild();
      await this.runBundleAnalysis();
      await this.runPerformanceAudit();
      
      const report = this.generateReport();
      
      if (report.summary.success) {
        this.log('🎉 Build optimization completed successfully!');
        process.exit(0);
      } else {
        this.log('❌ Build optimization completed with errors');
        process.exit(1);
      }
      
    } catch (error) {
      this.log(`❌ Build optimization failed: ${error.message}`, 'error');
      this.generateReport();
      process.exit(1);
    }
  }
}

// Run the optimizer
const optimizer = new BuildOptimizer();
optimizer.run();