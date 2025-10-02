#!/usr/bin/env node

/**
 * Build Optimization Script for Zion Tech Group Website
 * Optimizes the build process and ensures production readiness
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const config = {
  buildTimeout: 300000, // 5 minutes
  maxBundleSize: 1000000, // 1MB
  optimizationLevel: 'production'
};

class BuildOptimizer {
  constructor() {
    this.startTime = Date.now();
    this.errors = [];
    this.warnings = [];
    this.optimizations = [];
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'error' ? '❌' : type === 'warning' ? '⚠️' : type === 'success' ? '✅' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description) {
    this.log(`Starting: ${description}`);
    try {
      const result = execSync(command, { 
        encoding: 'utf8', 
        timeout: config.buildTimeout,
        stdio: 'pipe'
      });
      this.log(`Completed: ${description}`, 'success');
      return result;
    } catch (error) {
      this.log(`Failed: ${description} - ${error.message}`, 'error');
      this.errors.push({ command, description, error: error.message });
      throw error;
    }
  }

  async optimizeDependencies() {
    this.log('Optimizing dependencies...');
    
    try {
      // Clean install for production
      await this.runCommand('npm ci --production=false', 'Clean install dependencies');
      
      // Update outdated packages
      await this.runCommand('npm audit fix --force', 'Fix security vulnerabilities');
      
      this.optimizations.push('Dependencies optimized and security issues fixed');
    } catch (error) {
      this.log('Dependency optimization failed, continuing...', 'warning');
      this.warnings.push('Dependency optimization failed');
    }
  }

  async runLinting() {
    this.log('Running linting...');
    
    try {
      await this.runCommand('npm run lint', 'ESLint check');
      this.optimizations.push('Code linting passed');
    } catch (error) {
      this.log('Linting found issues, attempting to fix...', 'warning');
      try {
        await this.runCommand('npm run lint:fix', 'ESLint auto-fix');
        this.optimizations.push('Code linting issues auto-fixed');
      } catch (fixError) {
        this.warnings.push('Linting issues could not be auto-fixed');
      }
    }
  }

  async runTypeChecking() {
    this.log('Running TypeScript type checking...');
    
    try {
      await this.runCommand('npm run type-check', 'TypeScript type check');
      this.optimizations.push('TypeScript type checking passed');
    } catch (error) {
      this.log('TypeScript type checking failed', 'error');
      this.errors.push('TypeScript type checking failed');
    }
  }

  async buildApplication() {
    this.log('Building application for production...');
    
    try {
      // Set production environment
      process.env.NODE_ENV = 'production';
      process.env.GENERATE_SOURCEMAP = 'false';
      
      await this.runCommand('npm run build', 'Production build');
      this.optimizations.push('Production build completed');
    } catch (error) {
      this.log('Build failed', 'error');
      this.errors.push('Production build failed');
      throw error;
    }
  }

  async analyzeBuild() {
    this.log('Analyzing build output...');
    
    const distDir = './dist';
    if (!fs.existsSync(distDir)) {
      this.log('Build directory not found', 'error');
      return;
    }

    try {
      // Analyze bundle size
      const stats = this.getDirectoryStats(distDir);
      this.log(`Build size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
      
      if (stats.size > config.maxBundleSize) {
        this.warnings.push(`Build size exceeds recommended limit: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
      } else {
        this.optimizations.push(`Build size optimized: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
      }

      // Check for critical files
      const criticalFiles = ['index.html', 'assets'];
      for (const file of criticalFiles) {
        if (fs.existsSync(path.join(distDir, file))) {
          this.optimizations.push(`Critical file present: ${file}`);
        } else {
          this.warnings.push(`Critical file missing: ${file}`);
        }
      }

    } catch (error) {
      this.log(`Build analysis failed: ${error.message}`, 'warning');
      this.warnings.push('Build analysis failed');
    }
  }

  getDirectoryStats(dir) {
    let size = 0;
    let files = 0;
    
    const traverse = (currentDir) => {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const itemPath = path.join(currentDir, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          traverse(itemPath);
        } else {
          size += stat.size;
          files++;
        }
      }
    };
    
    traverse(dir);
    
    return { size, files };
  }

  async runTests() {
    this.log('Running tests...');
    
    try {
      await this.runCommand('npm run test:ci', 'Test suite');
      this.optimizations.push('All tests passed');
    } catch (error) {
      this.log('Tests failed or skipped', 'warning');
      this.warnings.push('Test suite failed or was skipped');
    }
  }

  generateReport() {
    const endTime = Date.now();
    const duration = (endTime - this.startTime) / 1000;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration.toFixed(2)}s`,
      status: this.errors.length === 0 ? 'success' : 'failed',
      optimizations: this.optimizations,
      warnings: this.warnings,
      errors: this.errors,
      summary: {
        totalOptimizations: this.optimizations.length,
        totalWarnings: this.warnings.length,
        totalErrors: this.errors.length
      }
    };

    // Save report
    fs.writeFileSync('./build-report.json', JSON.stringify(report, null, 2));
    
    // Display summary
    this.log('\n📊 Build Optimization Summary:', 'success');
    this.log(`   ⏱️  Duration: ${duration.toFixed(2)}s`);
    this.log(`   ✅ Optimizations: ${this.optimizations.length}`);
    this.log(`   ⚠️  Warnings: ${this.warnings.length}`);
    this.log(`   ❌ Errors: ${this.errors.length}`);
    this.log(`   📄 Report saved: build-report.json`);
    
    if (this.optimizations.length > 0) {
      this.log('\n🎉 Optimizations Applied:', 'success');
      this.optimizations.forEach(opt => this.log(`   • ${opt}`));
    }
    
    if (this.warnings.length > 0) {
      this.log('\n⚠️  Warnings:', 'warning');
      this.warnings.forEach(warning => this.log(`   • ${warning}`));
    }
    
    if (this.errors.length > 0) {
      this.log('\n❌ Errors:', 'error');
      this.errors.forEach(error => this.log(`   • ${error.description}: ${error.error}`));
    }

    return report;
  }

  async optimize() {
    this.log('🚀 Starting build optimization process...\n');

    try {
      // Step 1: Optimize dependencies
      await this.optimizeDependencies();
      
      // Step 2: Run linting
      await this.runLinting();
      
      // Step 3: Type checking
      await this.runTypeChecking();
      
      // Step 4: Run tests
      await this.runTests();
      
      // Step 5: Build application
      await this.buildApplication();
      
      // Step 6: Analyze build
      await this.analyzeBuild();
      
      // Step 7: Generate report
      const report = this.generateReport();
      
      if (report.status === 'success') {
        this.log('\n🎉 Build optimization completed successfully!', 'success');
        this.log('Ready for production deployment.', 'success');
        return report;
      } else {
        this.log('\n❌ Build optimization completed with errors.', 'error');
        process.exit(1);
      }
      
    } catch (error) {
      this.log(`\n💥 Build optimization failed: ${error.message}`, 'error');
      const report = this.generateReport();
      process.exit(1);
    }
  }
}

// Run optimization if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const optimizer = new BuildOptimizer();
  optimizer.optimize().catch(console.error);
}

export default BuildOptimizer;