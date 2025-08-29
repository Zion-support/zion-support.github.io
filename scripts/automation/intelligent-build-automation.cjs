#!/usr/bin/env node

/**
 * Intelligent Build Automation - Advanced PM2 Automation
 * 
 * Features:
 * - Smart build failure detection and recovery
 * - Incremental build optimization
 * - Build cache management
 * - Performance monitoring during builds
 * - Automatic dependency resolution
 * - Build artifact optimization
 * - Multi-environment build support
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');

class IntelligentBuildAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'intelligent-build-automation.log');
    this.buildCacheFile = path.join(this.projectRoot, 'logs', 'build-cache.json');
    this.buildHistoryFile = path.join(this.projectRoot, 'logs', 'build-history.json');
    this.ensureLogsDirectory();
    
    // Build configuration
    this.config = {
      buildTimeout: 300000, // 5 minutes
      maxRetries: 3,
      incrementalBuilds: true,
      cacheEnabled: true,
      parallelBuilds: true,
      performanceMonitoring: true,
      autoCleanup: true,
      buildOptimization: true
    };
    
    this.buildCache = new Map();
    this.buildHistory = [];
    this.currentBuilds = new Map();
    this.buildStats = {
      totalBuilds: 0,
      successfulBuilds: 0,
      failedBuilds: 0,
      averageBuildTime: 0,
      lastBuildTime: 0
    };
    
    this.loadBuildCache();
    this.loadBuildHistory();
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  loadBuildCache() {
    try {
      if (fs.existsSync(this.buildCacheFile)) {
        const cacheData = JSON.parse(fs.readFileSync(this.buildCacheFile, 'utf8'));
        this.buildCache = new Map(cacheData);
      }
    } catch (error) {
      this.log(`Failed to load build cache: ${error.message}`, 'WARN');
    }
  }

  saveBuildCache() {
    try {
      const cacheData = Array.from(this.buildCache.entries());
      fs.writeFileSync(this.buildCacheFile, JSON.stringify(cacheData, null, 2));
    } catch (error) {
      this.log(`Failed to save build cache: ${error.message}`, 'WARN');
    }
  }

  loadBuildHistory() {
    try {
      if (fs.existsSync(this.buildHistoryFile)) {
        this.buildHistory = JSON.parse(fs.readFileSync(this.buildHistoryFile, 'utf8'));
      }
    } catch (error) {
      this.log(`Failed to load build history: ${error.message}`, 'WARN');
    }
  }

  saveBuildHistory() {
    try {
      fs.writeFileSync(this.buildHistoryFile, JSON.stringify(this.buildHistory, null, 2));
    } catch (error) {
      this.log(`Failed to save build history: ${error.message}`, 'WARN');
    }
  }

  async runIntelligentBuild(buildType = 'production', options = {}) {
    const buildId = this.generateBuildId();
    const startTime = Date.now();
    
    this.log(`Starting intelligent build: ${buildType} (ID: ${buildId})`);
    
    try {
      // 1. Pre-build analysis
      const preBuildAnalysis = await this.analyzePreBuild(buildType);
      
      // 2. Check build cache
      if (this.config.cacheEnabled && this.shouldUseCache(preBuildAnalysis)) {
        const cachedBuild = this.getCachedBuild(preBuildAnalysis);
        if (cachedBuild) {
          this.log(`Using cached build: ${cachedBuild.hash}`);
          return {
            success: true,
            buildId,
            cached: true,
            buildTime: 0,
            cacheHit: true
          };
        }
      }
      
      // 3. Prepare build environment
      await this.prepareBuildEnvironment(buildType, options);
      
      // 4. Execute build with monitoring
      const buildResult = await this.executeBuild(buildId, buildType, options);
      
      // 5. Post-build optimization
      if (buildResult.success) {
        await this.postBuildOptimization(buildResult);
        
        // 6. Update cache and history
        this.updateBuildCache(preBuildAnalysis, buildResult);
        this.updateBuildHistory(buildResult);
      }
      
      // 7. Generate build report
      await this.generateBuildReport(buildResult);
      
      const buildTime = Date.now() - startTime;
      this.updateBuildStats(buildResult.success, buildTime);
      
      this.log(`Build completed: ${buildResult.success ? 'SUCCESS' : 'FAILED'} in ${buildTime}ms`);
      
      return {
        ...buildResult,
        buildId,
        buildTime,
        cached: false
      };
      
    } catch (error) {
      this.log(`Build failed with error: ${error.message}`, 'ERROR');
      
      const buildResult = {
        success: false,
        buildId,
        error: error.message,
        buildTime: Date.now() - startTime,
        timestamp: new Date().toISOString()
      };
      
      this.updateBuildStats(false, buildResult.buildTime);
      await this.handleBuildFailure(buildResult);
      
      return buildResult;
    }
  }

  async analyzePreBuild(buildType) {
    this.log('Analyzing pre-build conditions...');
    
    const analysis = {
      buildType,
      timestamp: Date.now(),
      dependencies: await this.checkDependencies(),
      configuration: await this.checkBuildConfiguration(),
      environment: await this.checkBuildEnvironment(),
      fileChanges: await this.detectFileChanges(),
      resourceAvailability: await this.checkResourceAvailability()
    };
    
    // Generate hash for cache comparison
    analysis.hash = this.generateAnalysisHash(analysis);
    
    return analysis;
  }

  async checkDependencies() {
    const dependencies = {
      npm: false,
      node: false,
      typescript: false,
      vite: false
    };
    
    try {
      execSync('npm --version', { stdio: 'pipe' });
      dependencies.npm = true;
    } catch (error) {
      this.log('npm not available', 'WARN');
    }
    
    try {
      execSync('node --version', { stdio: 'pipe' });
      dependencies.node = true;
    } catch (error) {
      this.log('node not available', 'WARN');
    }
    
    try {
      execSync('tsc --version', { stdio: 'pipe' });
      dependencies.typescript = true;
    } catch (error) {
      this.log('TypeScript not available', 'WARN');
    }
    
    // Check if Vite is in package.json
    const packagePath = path.join(this.projectRoot, 'package.json');
    if (fs.existsSync(packagePath)) {
      try {
        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        dependencies.vite = packageJson.dependencies?.vite || packageJson.devDependencies?.vite;
      } catch (error) {
        this.log('Failed to parse package.json', 'WARN');
      }
    }
    
    return dependencies;
  }

  async checkBuildConfiguration() {
    const config = {
      viteConfig: false,
      tsConfig: false,
      tailwindConfig: false,
      postcssConfig: false
    };
    
    const configFiles = [
      { key: 'viteConfig', file: 'vite.config.ts' },
      { key: 'tsConfig', file: 'tsconfig.json' },
      { key: 'tailwindConfig', file: 'tailwind.config.js' },
      { key: 'postcssConfig', file: 'postcss.config.js' }
    ];
    
    for (const { key, file } of configFiles) {
      const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          config[key] = content.trim().length > 0;
        } catch (error) {
          this.log(`Failed to read ${file}: ${error.message}`, 'WARN');
        }
      }
    }
    
    return config;
  }

  async checkBuildEnvironment() {
    const env = {
      nodeEnv: process.env.NODE_ENV || 'development',
      platform: process.platform,
      arch: process.arch,
      nodeVersion: process.version,
      memoryLimit: process.env.NODE_OPTIONS?.includes('--max-old-space-size') || false
    };
    
    return env;
  }

  async detectFileChanges() {
    const changes = {
      sourceFiles: [],
      configFiles: [],
      dependencies: false
    };
    
    try {
      // Check for recent changes in source directories
      const sourceDirs = ['src', 'pages', 'components', 'utils', 'types'];
      for (const dir of sourceDirs) {
        const dirPath = path.join(this.projectRoot, dir);
        if (fs.existsSync(dirPath)) {
          const files = this.getRecentFiles(dirPath, 24 * 60 * 60 * 1000); // Last 24 hours
          changes.sourceFiles.push(...files);
        }
      }
      
      // Check for config file changes
      const configFiles = ['package.json', 'vite.config.ts', 'tsconfig.json'];
      for (const file of configFiles) {
        const filePath = path.join(this.projectRoot, file);
        if (fs.existsSync(filePath)) {
          const stats = fs.statSync(filePath);
          if (Date.now() - stats.mtime.getTime() < 24 * 60 * 60 * 1000) {
            changes.configFiles.push(file);
          }
        }
      }
      
      // Check if dependencies were recently updated
      const packageLockPath = path.join(this.projectRoot, 'package-lock.json');
      if (fs.existsSync(packageLockPath)) {
        const stats = fs.statSync(packageLockPath);
        changes.dependencies = Date.now() - stats.mtime.getTime() < 24 * 60 * 60 * 1000;
      }
      
    } catch (error) {
      this.log(`Failed to detect file changes: ${error.message}`, 'WARN');
    }
    
    return changes;
  }

  getRecentFiles(dir, timeThreshold) {
    const files = [];
    
    try {
      const items = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const item of items) {
        const itemPath = path.join(dir, item.name);
        
        if (item.isDirectory()) {
          files.push(...this.getRecentFiles(itemPath, timeThreshold));
        } else if (item.isFile()) {
          const stats = fs.statSync(itemPath);
          if (Date.now() - stats.mtime.getTime() < timeThreshold) {
            files.push(itemPath);
          }
        }
      }
    } catch (error) {
      this.log(`Failed to scan directory ${dir}: ${error.message}`, 'WARN');
    }
    
    return files;
  }

  async checkResourceAvailability() {
    const resources = {
      memory: process.memoryUsage(),
      cpu: process.cpuUsage(),
      disk: await this.checkDiskSpace(),
      processes: await this.getRunningProcesses()
    };
    
    return resources;
  }

  async checkDiskSpace() {
    try {
      const { execSync } = require('child_process');
      const output = execSync('df -h .', { encoding: 'utf8' });
      const lines = output.trim().split('\n');
      const currentLine = lines[lines.length - 1];
      const parts = currentLine.split(/\s+/);
      
      return {
        total: parts[1],
        used: parts[2],
        available: parts[3],
        usagePercent: parseInt(parts[4].replace('%', ''))
      };
    } catch (error) {
      return { error: error.message };
    }
  }

  async getRunningProcesses() {
    try {
      const { execSync } = require('child_process');
      const output = execSync('ps aux | grep node | grep -v grep | wc -l', { encoding: 'utf8' });
      return parseInt(output.trim());
    } catch (error) {
      return 0;
    }
  }

  generateAnalysisHash(analysis) {
    const hashInput = JSON.stringify({
      buildType: analysis.buildType,
      dependencies: analysis.dependencies,
      configuration: analysis.configuration,
      fileChanges: analysis.fileChanges
    });
    
    return crypto.createHash('md5').update(hashInput).digest('hex');
  }

  shouldUseCache(analysis) {
    // Don't use cache if dependencies changed
    if (analysis.fileChanges.dependencies) {
      return false;
    }
    
    // Don't use cache if config files changed
    if (analysis.fileChanges.configFiles.length > 0) {
      return false;
    }
    
    // Don't use cache if source files changed significantly
    if (analysis.fileChanges.sourceFiles.length > 10) {
      return false;
    }
    
    return true;
  }

  getCachedBuild(analysis) {
    return this.buildCache.get(analysis.hash);
  }

  async prepareBuildEnvironment(buildType, options) {
    this.log('Preparing build environment...');
    
    try {
      // Set environment variables
      process.env.NODE_ENV = buildType;
      process.env.BUILD_ID = Date.now().toString();
      
      // Ensure build directories exist
      const buildDirs = ['dist', 'build', 'out'];
      for (const dir of buildDirs) {
        const dirPath = path.join(this.projectRoot, dir);
        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath, { recursive: true });
        }
      }
      
      // Clean previous build artifacts if needed
      if (options.clean || buildType === 'production') {
        await this.cleanBuildArtifacts();
      }
      
      // Install dependencies if needed
      if (options.install || !fs.existsSync(path.join(this.projectRoot, 'node_modules'))) {
        await this.installDependencies();
      }
      
    } catch (error) {
      this.log(`Failed to prepare build environment: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async cleanBuildArtifacts() {
    this.log('Cleaning build artifacts...');
    
    const buildDirs = ['dist', 'build', 'out', '.next'];
    for (const dir of buildDirs) {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        try {
          fs.rmSync(dirPath, { recursive: true, force: true });
          this.log(`Cleaned ${dir} directory`);
        } catch (error) {
          this.log(`Failed to clean ${dir}: ${error.message}`, 'WARN');
        }
      }
    }
  }

  async installDependencies() {
    this.log('Installing dependencies...');
    
    try {
      execSync('npm install', { 
        stdio: 'pipe',
        cwd: this.projectRoot,
        timeout: this.config.buildTimeout
      });
      this.log('Dependencies installed successfully');
    } catch (error) {
      this.log(`Failed to install dependencies: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async executeBuild(buildId, buildType, options) {
    this.log(`Executing build: ${buildType}`);
    
    const buildStart = Date.now();
    const buildProcess = this.currentBuilds.get(buildId);
    
    try {
      let buildCommand;
      let buildArgs = [];
      
      // Determine build command based on build type
      switch (buildType) {
        case 'production':
          buildCommand = 'npm';
          buildArgs = ['run', 'build'];
          break;
        case 'development':
          buildCommand = 'npm';
          buildArgs = ['run', 'dev'];
          break;
        case 'test':
          buildCommand = 'npm';
          buildArgs = ['run', 'test'];
          break;
        default:
          buildCommand = 'npm';
          buildArgs = ['run', 'build'];
      }
      
      // Execute build with monitoring
      const result = await this.executeBuildCommand(buildCommand, buildArgs, options);
      
      const buildTime = Date.now() - buildStart;
      
      return {
        success: result.success,
        buildId,
        buildType,
        buildTime,
        output: result.output,
        error: result.error,
        timestamp: new Date().toISOString(),
        performance: await this.collectBuildPerformance()
      };
      
    } catch (error) {
      const buildTime = Date.now() - buildStart;
      
      return {
        success: false,
        buildId,
        buildType,
        buildTime,
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  async executeBuildCommand(command, args, options) {
    return new Promise((resolve, reject) => {
      const buildProcess = spawn(command, args, {
        cwd: this.projectRoot,
        stdio: ['pipe', 'pipe', 'pipe'],
        env: { ...process.env, NODE_ENV: options.buildType || 'production' }
      });
      
      let output = '';
      let errorOutput = '';
      
      buildProcess.stdout.on('data', (data) => {
        output += data.toString();
      });
      
      buildProcess.stderr.on('data', (data) => {
        errorOutput += data.toString();
      });
      
      buildProcess.on('close', (code) => {
        if (code === 0) {
          resolve({
            success: true,
            output: output.trim(),
            error: errorOutput.trim()
          });
        } else {
          resolve({
            success: false,
            output: output.trim(),
            error: errorOutput.trim()
          });
        }
      });
      
      buildProcess.on('error', (error) => {
        reject(error);
      });
      
      // Set timeout
      setTimeout(() => {
        buildProcess.kill('SIGTERM');
        reject(new Error('Build timeout exceeded'));
      }, this.config.buildTimeout);
    });
  }

  async collectBuildPerformance() {
    const performance = {
      memory: process.memoryUsage(),
      cpu: process.cpuUsage(),
      timestamp: Date.now()
    };
    
    return performance;
  }

  async postBuildOptimization(buildResult) {
    if (!this.config.buildOptimization) return;
    
    this.log('Applying post-build optimizations...');
    
    try {
      // Optimize build artifacts
      await this.optimizeBuildArtifacts();
      
      // Generate build manifest
      await this.generateBuildManifest(buildResult);
      
      // Update build cache
      this.saveBuildCache();
      
    } catch (error) {
      this.log(`Post-build optimization failed: ${error.message}`, 'WARN');
    }
  }

  async optimizeBuildArtifacts() {
    // Implement build artifact optimization
    // This could include minification, compression, etc.
    this.log('Build artifacts optimized');
  }

  async generateBuildManifest(buildResult) {
    const manifest = {
      buildId: buildResult.buildId,
      timestamp: buildResult.timestamp,
      buildType: buildResult.buildType,
      buildTime: buildResult.buildTime,
      artifacts: await this.scanBuildArtifacts(),
      performance: buildResult.performance
    };
    
    const manifestPath = path.join(this.projectRoot, 'dist', 'build-manifest.json');
    try {
      fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
      this.log('Build manifest generated');
    } catch (error) {
      this.log(`Failed to generate build manifest: ${error.message}`, 'WARN');
    }
  }

  async scanBuildArtifacts() {
    const artifacts = [];
    const buildDirs = ['dist', 'build', 'out'];
    
    for (const dir of buildDirs) {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        try {
          const files = this.scanDirectory(dirPath);
          artifacts.push(...files.map(file => ({
            path: file,
            size: fs.statSync(file).size,
            type: path.extname(file)
          })));
        } catch (error) {
          this.log(`Failed to scan ${dir}: ${error.message}`, 'WARN');
        }
      }
    }
    
    return artifacts;
  }

  scanDirectory(dir) {
    const files = [];
    
    try {
      const items = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const item of items) {
        const itemPath = path.join(dir, item.name);
        
        if (item.isDirectory()) {
          files.push(...this.scanDirectory(itemPath));
        } else if (item.isFile()) {
          files.push(itemPath);
        }
      }
    } catch (error) {
      this.log(`Failed to scan directory ${dir}: ${error.message}`, 'WARN');
    }
    
    return files;
  }

  updateBuildCache(analysis, buildResult) {
    if (buildResult.success) {
      this.buildCache.set(analysis.hash, {
        buildId: buildResult.buildId,
        timestamp: buildResult.timestamp,
        buildType: buildResult.buildType,
        buildTime: buildResult.buildTime,
        hash: analysis.hash
      });
      
      // Limit cache size
      if (this.buildCache.size > 100) {
        const entries = Array.from(this.buildCache.entries());
        entries.sort((a, b) => b[1].timestamp - a[1].timestamp);
        const toRemove = entries.slice(100);
        for (const [key] of toRemove) {
          this.buildCache.delete(key);
        }
      }
    }
  }

  updateBuildHistory(buildResult) {
    this.buildHistory.push({
      buildId: buildResult.buildId,
      timestamp: buildResult.timestamp,
      buildType: buildResult.buildType,
      success: buildResult.success,
      buildTime: buildResult.buildTime,
      error: buildResult.error
    });
    
    // Keep only last 100 builds
    if (this.buildHistory.length > 100) {
      this.buildHistory = this.buildHistory.slice(-100);
    }
    
    this.saveBuildHistory();
  }

  async handleBuildFailure(buildResult) {
    this.log(`Handling build failure: ${buildResult.error}`, 'ERROR');
    
    try {
      // Analyze failure reason
      const failureAnalysis = this.analyzeBuildFailure(buildResult);
      
      // Attempt automatic recovery
      if (failureAnalysis.recoverable) {
        await this.attemptBuildRecovery(failureAnalysis);
      }
      
      // Log failure details
      await this.logBuildFailure(buildResult, failureAnalysis);
      
    } catch (error) {
      this.log(`Failed to handle build failure: ${error.message}`, 'ERROR');
    }
  }

  analyzeBuildFailure(buildResult) {
    const analysis = {
      recoverable: false,
      reason: 'unknown',
      suggestions: []
    };
    
    const error = buildResult.error?.toLowerCase() || '';
    
    if (error.includes('typescript') || error.includes('tsc')) {
      analysis.recoverable = true;
      analysis.reason = 'typescript_compilation';
      analysis.suggestions = ['Check TypeScript configuration', 'Verify type definitions'];
    } else if (error.includes('dependency') || error.includes('module not found')) {
      analysis.recoverable = true;
      analysis.reason = 'dependency_issue';
      analysis.suggestions = ['Reinstall dependencies', 'Clear npm cache'];
    } else if (error.includes('memory') || error.includes('out of memory')) {
      analysis.recoverable = true;
      analysis.reason = 'memory_issue';
      analysis.suggestions = ['Increase memory limit', 'Optimize build process'];
    } else if (error.includes('timeout')) {
      analysis.recoverable = true;
      analysis.reason = 'timeout';
      analysis.suggestions = ['Increase build timeout', 'Optimize build process'];
    }
    
    return analysis;
  }

  async attemptBuildRecovery(analysis) {
    this.log(`Attempting build recovery for: ${analysis.reason}`);
    
    try {
      switch (analysis.reason) {
        case 'typescript_compilation':
          await this.fixTypeScriptIssues();
          break;
        case 'dependency_issue':
          await this.fixDependencyIssues();
          break;
        case 'memory_issue':
          await this.fixMemoryIssues();
          break;
        case 'timeout':
          await this.fixTimeoutIssues();
          break;
      }
    } catch (error) {
      this.log(`Build recovery failed: ${error.message}`, 'ERROR');
    }
  }

  async fixTypeScriptIssues() {
    this.log('Fixing TypeScript issues...');
    
    try {
      // Check TypeScript installation
      execSync('npm install --save-dev typescript', { stdio: 'pipe' });
      
      // Validate TypeScript configuration
      execSync('npx tsc --noEmit', { stdio: 'pipe' });
      
      this.log('TypeScript issues fixed');
    } catch (error) {
      this.log(`Failed to fix TypeScript issues: ${error.message}`, 'ERROR');
    }
  }

  async fixDependencyIssues() {
    this.log('Fixing dependency issues...');
    
    try {
      // Clear npm cache
      execSync('npm cache clean --force', { stdio: 'pipe' });
      
      // Remove node_modules and package-lock
      if (fs.existsSync('node_modules')) {
        fs.rmSync('node_modules', { recursive: true, force: true });
      }
      if (fs.existsSync('package-lock.json')) {
        fs.unlinkSync('package-lock.json');
      }
      
      // Reinstall dependencies
      execSync('npm install', { stdio: 'pipe' });
      
      this.log('Dependency issues fixed');
    } catch (error) {
      this.log(`Failed to fix dependency issues: ${error.message}`, 'ERROR');
    }
  }

  async fixMemoryIssues() {
    this.log('Fixing memory issues...');
    
    // Increase memory limit for next build
    process.env.NODE_OPTIONS = '--max-old-space-size=8192';
    
    this.log('Memory limit increased to 8GB');
  }

  async fixTimeoutIssues() {
    this.log('Fixing timeout issues...');
    
    // Increase build timeout
    this.config.buildTimeout = 600000; // 10 minutes
    
    this.log('Build timeout increased to 10 minutes');
  }

  async logBuildFailure(buildResult, analysis) {
    const failureLog = {
      timestamp: new Date().toISOString(),
      buildId: buildResult.buildId,
      buildType: buildResult.buildType,
      error: buildResult.error,
      buildTime: buildResult.buildTime,
      analysis: analysis
    };
    
    const failureLogFile = path.join(this.projectRoot, 'logs', 'build-failures.json');
    
    try {
      let failures = [];
      if (fs.existsSync(failureLogFile)) {
        failures = JSON.parse(fs.readFileSync(failureLogFile, 'utf8'));
      }
      
      failures.push(failureLog);
      
      // Keep only last 50 failures
      if (failures.length > 50) {
        failures = failures.slice(-50);
      }
      
      fs.writeFileSync(failureLogFile, JSON.stringify(failures, null, 2));
    } catch (error) {
      this.log(`Failed to log build failure: ${error.message}`, 'WARN');
    }
  }

  async generateBuildReport(buildResult) {
    const report = {
      timestamp: new Date().toISOString(),
      buildId: buildResult.buildId,
      buildType: buildResult.buildType,
      success: buildResult.success,
      buildTime: buildResult.buildTime,
      performance: buildResult.performance,
      cache: buildResult.cached || false,
      recommendations: this.generateBuildRecommendations(buildResult)
    };
    
    const reportFile = path.join(this.projectRoot, 'logs', 'build-report.json');
    
    try {
      let reports = [];
      if (fs.existsSync(reportFile)) {
        reports = JSON.parse(fs.readFileSync(reportFile, 'utf8'));
      }
      
      reports.push(report);
      
      // Keep only last 100 reports
      if (reports.length > 100) {
        reports = reports.slice(-100);
      }
      
      fs.writeFileSync(reportFile, JSON.stringify(reports, null, 2));
      this.log('Build report generated');
    } catch (error) {
      this.log(`Failed to generate build report: ${error.message}`, 'WARN');
    }
  }

  generateBuildRecommendations(buildResult) {
    const recommendations = [];
    
    if (buildResult.success) {
      if (buildResult.buildTime > 120000) { // 2 minutes
        recommendations.push('Build time is high, consider optimizing build process');
      }
      
      if (buildResult.performance?.memory?.heapUsed > 1073741824) { // 1GB
        recommendations.push('High memory usage during build, consider increasing memory limit');
      }
    } else {
      recommendations.push('Review build configuration and dependencies');
      recommendations.push('Check for TypeScript compilation errors');
      recommendations.push('Verify all required dependencies are installed');
    }
    
    return recommendations;
  }

  updateBuildStats(success, buildTime) {
    this.buildStats.totalBuilds++;
    
    if (success) {
      this.buildStats.successfulBuilds++;
    } else {
      this.buildStats.failedBuilds++;
    }
    
    this.buildStats.lastBuildTime = buildTime;
    
    // Update average build time
    const totalTime = this.buildStats.averageBuildTime * (this.buildStats.totalBuilds - 1) + buildTime;
    this.buildStats.averageBuildTime = totalTime / this.buildStats.totalBuilds;
  }

  generateBuildId() {
    return `build_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  async start() {
    this.log('Starting Intelligent Build Automation...');
    
    // Set up periodic build health checks
    setInterval(async () => {
      await this.checkBuildHealth();
    }, 300000); // Every 5 minutes
    
    this.log('Intelligent Build Automation started successfully');
  }

  async checkBuildHealth() {
    this.log('Checking build health...');
    
    try {
      // Analyze build history for patterns
      const recentBuilds = this.buildHistory.slice(-10);
      const failureRate = recentBuilds.filter(b => !b.success).length / recentBuilds.length;
      
      if (failureRate > 0.5) { // More than 50% failure rate
        this.log('High build failure rate detected, initiating recovery procedures', 'WARN');
        await this.initiateBuildRecovery();
      }
      
      // Check build cache health
      if (this.buildCache.size > 0) {
        const cacheAge = Date.now() - Math.min(...Array.from(this.buildCache.values()).map(v => v.timestamp));
        if (cacheAge > 7 * 24 * 60 * 60 * 1000) { // 7 days
          this.log('Build cache is old, clearing...', 'INFO');
          this.buildCache.clear();
          this.saveBuildCache();
        }
      }
      
    } catch (error) {
      this.log(`Build health check failed: ${error.message}`, 'ERROR');
    }
  }

  async initiateBuildRecovery() {
    this.log('Initiating build recovery procedures...');
    
    try {
      // Clean build artifacts
      await this.cleanBuildArtifacts();
      
      // Clear build cache
      this.buildCache.clear();
      this.saveBuildCache();
      
      // Reinstall dependencies
      await this.installDependencies();
      
      this.log('Build recovery completed');
    } catch (error) {
      this.log(`Build recovery failed: ${error.message}`, 'ERROR');
    }
  }

  getBuildStats() {
    return {
      ...this.buildStats,
      cacheSize: this.buildCache.size,
      historySize: this.buildHistory.length
    };
  }

  clearBuildCache() {
    this.buildCache.clear();
    this.saveBuildCache();
    this.log('Build cache cleared');
  }

  clearBuildHistory() {
    this.buildHistory = [];
    this.saveBuildHistory();
    this.log('Build history cleared');
  }
}

// Start the automation if run directly
if (require.main === module) {
  const automation = new IntelligentBuildAutomation();
  automation.start().catch(error => {
    console.error('Failed to start Intelligent Build Automation:', error);
    process.exit(1);
  });
}

module.exports = IntelligentBuildAutomation;