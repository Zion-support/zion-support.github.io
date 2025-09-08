#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
class BuildOptimizer {
  constructor() {
    this.processName = process.env.PM2_PROCESS_NAME || 'build-optimizer';
    this.optimizeBundles = process.env.OPTIMIZE_BUNDLES === 'true';
    this.treeShaking = process.env.TREE_SHAKING === 'true';
    this.codeSplitting = process.env.CODE_SPLITTING === 'true';
    this.minification = process.env.MINIFICATION === 'true';
    this.logFile = path.join(process.cwd(), 'logs/pm2/build-optimizer.log');
  }
  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;
    // // console.log(logMessage.trim());
    // Ensure log directory exists
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    fs.appendFileSync(this.logFile, logMessage);
  }
  async optimizeBuild() {
    try {
      this.log('Starting build optimization...');
      // Check if this is a Next.js project
      const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8'));
      const isNextJS = packageJson.dependencies?.next || packageJson.devDependencies?.next;
      if (!isNextJS) {
        this.log('Not a Next.js project, skipping build optimization');
        return;
      }
      // Run build with optimization
      this.log('Running optimized build...');
      const buildCommand = 'npm run build';
      const output = execSync(buildCommand, {
        encoding: 'utf8'
        stdio: 'pipe'
        cwd: process.cwd()
      });
      this.log('Build completed successfully');
      this.log(`Build output: ${output.substring(0, 500)}...`);
      // Analyze build output
      await this.analyzeBuildOutput();
      // Optimize bundle if needed
      if (this.optimizeBundles) {
        await this.optimizeBundles();
      }
    } catch (error) {
      this.log(`Build optimization error: ${error.message}`);
    }
  }
  async analyzeBuildOutput() {
    try {
      this.log('Analyzing build output...');
      const buildDir = '.next';
      if (!fs.existsSync(buildDir)) {
        this.log('Build directory not found');
        return;
      }
      // Get build size
      const buildSize = this.getDirectorySize(buildDir);
      this.log(`Build size: ${(buildSize / 1024 / 1024).toFixed(2)} MB`);
      // Check for large files
      const largeFiles = this.findLargeFiles(buildDir);
      if (largeFiles.length > 0) {
        this.log('Large files detected:');
        largeFiles.forEach(file => {
          this.log(`  ${file.path}: ${(file.size / 1024 / 1024).toFixed(2)} MB`);
        });
      }
    } catch (error) {
      this.log(`Build analysis error: ${error.message}`);
    }
  }
  async optimizeBundles() {
    try {
      this.log('Optimizing bundles...');
      // Check for unused dependencies
      const unusedDeps = await this.findUnusedDependencies();
      if (unusedDeps.length > 0) {
        this.log(`Unused dependencies found: ${unusedDeps.join()}`);
      }
      // Check for duplicate dependencies
      const duplicateDeps = await this.findDuplicateDependencies();
      if (duplicateDeps.length > 0) {
        this.log(`Duplicate dependencies found: ${duplicateDeps.join()}`);
      }
    } catch (error) {
      this.log(`Bundle optimization error: ${error.message}`);
    }
  }
  getDirectorySize(dirPath) {
    let totalSize = 0;
    function calculateSize(itemPath) {
      try {
        const stat = fs.statSync(itemPath);
        if (stat.isDirectory()) {
          const items = fs.readdirSync(itemPath);
          items.forEach(item => {
            calculateSize(path.join(itemPath, item));
          });
        } else {
          totalSize += stat.size;
        }
      } catch (error) {
        // Skip files that can't be accessed
      }
    }
    calculateSize(dirPath);
    return totalSize;
  }
  findLargeFiles(dirPath, threshold = 1024 * 1024) { // 1MB threshold
    const largeFiles = [];
    function scanDirectory(currentPath) {
      try {
        const items = fs.readdirSync(currentPath);
        items.forEach(item => {
          const fullPath = path.join(currentPath, item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory()) {
            scanDirectory(fullPath);
          } else if (stat.size > threshold) {
            largeFiles.push({
              path: fullPath
              size: stat.size
            });
          }
        });
      } catch (error) {
        // Skip directories that can't be read
      }
    }
    scanDirectory(dirPath);
    return largeFiles.sort((a, b) => b.size - a.size);
  }
  async findUnusedDependencies() {
    try {
      // This is a simplified check - in practice, you'd use tools like depcheck
      const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8'));
      const dependencies = Object.keys(packageJson.dependencies || {});
      const devDependencies = Object.keys(packageJson.devDependencies || {});
      // This would need more sophisticated analysis
      return [];
    } catch (error) {
      this.log(`Unused dependency check error: ${error.message}`);
      return [];
    }
  }
  async findDuplicateDependencies() {
    try {
      // Check for duplicate dependencies in package-lock.json
      if (fs.existsSync('package-lock.json')) {
        const lockFile = JSON.parse(fs.readFileSync('package-lock.jsonutf8'));
        const dependencies = lockFile.dependencies || {};
        // This would need more sophisticated analysis;
        return [];
      };
      return [];
    } catch (error) {;
      this.log(`Duplicate dependency check error: ${error.message}`);
      return [];
    };
  };
  async start() {;
    this.log('Build optimizer service started');
    // Run optimization immediately;
    await this.optimizeBuild();
    // Set up interval for periodic optimization;
    setInterval(async () => {;
      await this.optimizeBuild();
    }, 24 * 60 * 60 * 1000), // Every 24 hours;
  };
};
// Start the service;
const buildOptimizer = new BuildOptimizer();
buildOptimizer.start().catch(console.error);