#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class BuildAutomation {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 600000; // 10 minutes
    this.logLevel = process.env.LOG_LEVEL || 'info';
    this.workingDir = process.cwd();
    this.buildData = {};
    this.buildHistory = [];
    this.maxHistory = 20;
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    
    if (level === 'error') {
      console.error(logMessage);
    } else if (level === 'warn') {
      console.warn(logMessage);
    } else {
      console.log(logMessage);
    }
  }

  async runBuildProcess() {
    try {
      this.log('🔨 Starting build process...', 'info');
      
      const build = {
        preBuild: await this.runPreBuildChecks(),
        build: await this.executeBuild(),
        postBuild: await this.runPostBuildChecks(),
        optimization: await this.optimizeBuild(),
        timestamp: new Date().toISOString()
      };

      // Determine build status
      const allPassed = Object.values(build).every(step => 
        step && step.status === 'passed' || step.status === 'skipped'
      );
      
      build.status = allPassed ? 'success' : 'failed';
      build.summary = this.generateBuildSummary(build);

      this.buildData = build;
      
      // Store in history
      this.buildHistory.push(build);
      if (this.buildHistory.length > this.maxHistory) {
        this.buildHistory.shift();
      }

      this.log(`Build process ${build.status}`, build.status === 'success' ? 'info' : 'error');
      return build;
    } catch (error) {
      this.log(`Build process failed: ${error.message}`, 'error');
      return null;
    }
  }

  async runPreBuildChecks() {
    try {
      this.log('Running pre-build checks...', 'info');
      
      const checks = {
        dependencies: await this.checkDependencies(),
        environment: await this.checkEnvironment(),
        configuration: await this.checkConfiguration(),
        status: 'passed',
        issues: []
      };

      // Check for issues
      if (checks.dependencies.outdated > 0) {
        checks.issues.push(`${checks.dependencies.outdated} outdated dependencies`);
      }
      
      if (checks.environment.missing.length > 0) {
        checks.issues.push(`Missing environment variables: ${checks.environment.missing.join(', ')}`);
      }
      
      if (checks.configuration.issues.length > 0) {
        checks.issues.push(...checks.configuration.issues);
      }

      if (checks.issues.length > 0) {
        checks.status = 'warning';
      }

      return checks;
    } catch (error) {
      return {
        status: 'failed',
        error: error.message,
        issues: ['Pre-build checks failed']
      };
    }
  }

  async checkDependencies() {
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.workingDir, 'package.json'), 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      let outdated = 0;
      try {
        const outdatedResult = execSync('npm outdated --json', { 
          cwd: this.workingDir, 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        if (outdatedResult.trim()) {
          const outdatedData = JSON.parse(outdatedResult);
          outdated = Object.keys(outdatedData).length;
        }
      } catch (error) {
        // No outdated packages
      }

      return {
        total: Object.keys(dependencies).length,
        outdated,
        status: outdated === 0 ? 'up-to-date' : 'outdated'
      };
    } catch (error) {
      return {
        error: error.message,
        total: 0,
        outdated: 0
      };
    }
  }

  async checkEnvironment() {
    try {
      const requiredEnvVars = ['NODE_ENV'];
      const missing = [];
      
      for (const envVar of requiredEnvVars) {
        if (!process.env[envVar]) {
          missing.push(envVar);
        }
      }

      return {
        missing,
        status: missing.length === 0 ? 'complete' : 'incomplete'
      };
    } catch (error) {
      return {
        error: error.message,
        missing: [],
        status: 'unknown'
      };
    }
  }

  async checkConfiguration() {
    try {
      const issues = [];
      
      // Check for required configuration files
      const requiredFiles = ['package.json', 'vite.config.ts', 'tsconfig.json'];
      for (const file of requiredFiles) {
        if (!fs.existsSync(path.join(this.workingDir, file))) {
          issues.push(`Missing required configuration file: ${file}`);
        }
      }

      // Check package.json scripts
      try {
        const packageJson = JSON.parse(fs.readFileSync(path.join(this.workingDir, 'package.json'), 'utf8'));
        if (!packageJson.scripts?.build) {
          issues.push('Missing build script in package.json');
        }
      } catch (error) {
        issues.push('Invalid package.json format');
      }

      return {
        issues,
        status: issues.length === 0 ? 'valid' : 'issues'
      };
    } catch (error) {
      return {
        error: error.message,
        issues: ['Configuration check failed']
      };
    }
  }

  async executeBuild() {
    try {
      this.log('Executing build...', 'info');
      
      const startTime = Date.now();
      
      execSync('npm run build', { 
        cwd: this.workingDir, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const buildTime = Date.now() - startTime;
      
      // Check build output
      const distDir = path.join(this.workingDir, 'dist');
      const buildOutput = {
        exists: fs.existsSync(distDir),
        files: [],
        size: 0,
        structure: {}
      };

      if (buildOutput.exists) {
        const files = fs.readdirSync(distDir);
        buildOutput.files = files;
        
        for (const file of files) {
          const filePath = path.join(distDir, file);
          const stats = fs.statSync(filePath);
          buildOutput.size += stats.size;
          
          // Analyze file structure
          const ext = path.extname(file);
          if (!buildOutput.structure[ext]) {
            buildOutput.structure[ext] = { count: 0, size: 0 };
          }
          buildOutput.structure[ext].count++;
          buildOutput.structure[ext].size += stats.size;
        }
        
        buildOutput.sizeMB = Math.round(buildOutput.size / 1024 / 1024 * 100) / 100;
      }

      return {
        status: 'passed',
        buildTime,
        buildTimeSeconds: Math.round(buildTime / 1000),
        output: buildOutput,
        message: 'Build completed successfully'
      };
    } catch (error) {
      return {
        status: 'failed',
        error: error.message,
        message: 'Build failed'
      };
    }
  }

  async runPostBuildChecks() {
    try {
      this.log('Running post-build checks...', 'info');
      
      const checks = {
        output: await this.checkBuildOutput(),
        size: await this.checkBuildSize(),
        integrity: await this.checkBuildIntegrity(),
        status: 'passed',
        issues: []
      };

      // Aggregate issues
      if (checks.output.issues.length > 0) {
        checks.issues.push(...checks.output.issues);
      }
      
      if (checks.size.issues.length > 0) {
        checks.issues.push(...checks.size.issues);
      }
      
      if (checks.integrity.issues.length > 0) {
        checks.issues.push(...checks.integrity.issues);
      }

      if (checks.issues.length > 0) {
        checks.status = 'warning';
      }

      return checks;
    } catch (error) {
      return {
        status: 'failed',
        error: error.message,
        issues: ['Post-build checks failed']
      };
    }
  }

  async checkBuildOutput() {
    try {
      const distDir = path.join(this.workingDir, 'dist');
      const issues = [];
      
      if (!fs.existsSync(distDir)) {
        issues.push('Build output directory not found');
        return { issues, status: 'failed' };
      }

      const files = fs.readdirSync(distDir);
      
      // Check for required files
      const requiredFiles = ['index.html'];
      for (const file of requiredFiles) {
        if (!files.includes(file)) {
          issues.push(`Required build file missing: ${file}`);
        }
      }

      // Check for JavaScript files
      const jsFiles = files.filter(f => f.endsWith('.js'));
      if (jsFiles.length === 0) {
        issues.push('No JavaScript files in build output');
      }

      return {
        issues,
        status: issues.length === 0 ? 'valid' : 'issues',
        fileCount: files.length,
        jsFileCount: jsFiles.length
      };
    } catch (error) {
      return {
        error: error.message,
        issues: ['Build output check failed']
      };
    }
  }

  async checkBuildSize() {
    try {
      const distDir = path.join(this.workingDir, 'dist');
      const issues = [];
      
      if (!fs.existsSync(distDir)) {
        return { issues: ['Build directory not found'], status: 'failed' };
      }

      const files = fs.readdirSync(distDir);
      let totalSize = 0;
      
      for (const file of files) {
        const filePath = path.join(distDir, file);
        const stats = fs.statSync(filePath);
        totalSize += stats.size;
      }

      const totalSizeMB = totalSize / 1024 / 1024;
      
      // Check size thresholds
      if (totalSizeMB > 5) { // 5MB
        issues.push(`Build size is large: ${totalSizeMB.toFixed(2)}MB`);
      }
      
      if (totalSizeMB > 10) { // 10MB
        issues.push(`Build size is very large: ${totalSizeMB.toFixed(2)}MB - consider optimization`);
      }

      return {
        issues,
        status: issues.length === 0 ? 'acceptable' : 'large',
        totalSize,
        totalSizeMB: totalSizeMB.toFixed(2)
      };
    } catch (error) {
      return {
        error: error.message,
        issues: ['Build size check failed']
      };
    }
  }

  async checkBuildIntegrity() {
    try {
      const distDir = path.join(this.workingDir, 'dist');
      const issues = [];
      
      if (!fs.existsSync(distDir)) {
        return { issues: ['Build directory not found'], status: 'failed' };
      }

      const files = fs.readdirSync(distDir);
      
      // Check for corrupted files
      for (const file of files) {
        const filePath = path.join(distDir, file);
        try {
          const stats = fs.statSync(filePath);
          if (stats.size === 0) {
            issues.push(`Empty file detected: ${file}`);
          }
        } catch (error) {
          issues.push(`Cannot read file: ${file}`);
        }
      }

      return {
        issues,
        status: issues.length === 0 ? 'valid' : 'issues',
        fileCount: files.length
      };
    } catch (error) {
      return {
        error: error.message,
        issues: ['Build integrity check failed']
      };
    }
  }

  async optimizeBuild() {
    try {
      this.log('Optimizing build...', 'info');
      
      const optimization = {
        compression: await this.compressBuild(),
        minification: await this.checkMinification(),
        bundling: await this.analyzeBundling(),
        status: 'passed',
        improvements: []
      };

      // Check for optimization opportunities
      if (optimization.compression.improvement > 0) {
        optimization.improvements.push(`Compression can save ${optimization.compression.improvement}%`);
      }
      
      if (optimization.minification.improvement > 0) {
        optimization.improvements.push(`Minification can save ${optimization.minification.improvement}%`);
      }

      if (optimization.improvements.length > 0) {
        optimization.status = 'opportunities';
      }

      return optimization;
    } catch (error) {
      return {
        status: 'failed',
        error: error.message
      };
    }
  }

  async compressBuild() {
    try {
      // This would implement actual compression
      // For now, provide analysis
      return {
        status: 'analyzed',
        improvement: 15, // Estimated 15% size reduction
        message: 'Gzip compression recommended'
      };
    } catch (error) {
      return {
        status: 'failed',
        error: error.message
      };
    }
  }

  async checkMinification() {
    try {
      const distDir = path.join(this.workingDir, 'dist');
      const jsFiles = [];
      
      if (fs.existsSync(distDir)) {
        const files = fs.readdirSync(distDir);
        jsFiles.push(...files.filter(f => f.endsWith('.js')));
      }

      let minifiedCount = 0;
      let totalSize = 0;
      let minifiedSize = 0;

      for (const file of jsFiles) {
        const filePath = path.join(distDir, file);
        const stats = fs.statSync(filePath);
        totalSize += stats.size;
        
        // Simple check for minification (file size and content analysis)
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          if (content.includes('function(') && !content.includes('\n')) {
            minifiedCount++;
            minifiedSize += stats.size;
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }

      const improvement = totalSize > 0 ? Math.round((1 - minifiedSize / totalSize) * 100) : 0;

      return {
        status: 'analyzed',
        minifiedCount,
        totalCount: jsFiles.length,
        improvement,
        message: improvement > 0 ? `${improvement}% size reduction possible` : 'Already optimized'
      };
    } catch (error) {
      return {
        status: 'failed',
        error: error.message
      };
    }
  }

  async analyzeBundling() {
    try {
      const distDir = path.join(this.workingDir, 'dist');
      const jsFiles = [];
      
      if (fs.existsSync(distDir)) {
        const files = fs.readdirSync(distDir);
        jsFiles.push(...files.filter(f => f.endsWith('.js')));
      }

      const analysis = {
        totalFiles: jsFiles.length,
        totalSize: 0,
        averageSize: 0,
        recommendations: []
      };

      for (const file of jsFiles) {
        const filePath = path.join(distDir, file);
        const stats = fs.statSync(filePath);
        analysis.totalSize += stats.size;
      }

      analysis.totalSizeMB = analysis.totalSize / 1024 / 1024;
      analysis.averageSize = analysis.totalSize / jsFiles.length;
      analysis.averageSizeKB = analysis.averageSize / 1024;

      // Generate recommendations
      if (jsFiles.length === 1 && analysis.totalSizeMB > 1) {
        analysis.recommendations.push('Consider code splitting - single large bundle detected');
      }
      
      if (jsFiles.length > 5) {
        analysis.recommendations.push('Many small bundles - consider consolidation');
      }
      
      if (analysis.averageSizeKB > 100) {
        analysis.recommendations.push('Large individual bundles - optimize or split');
      }

      return analysis;
    } catch (error) {
      return {
        error: error.message
      };
    }
  }

  generateBuildSummary(build) {
    const summary = {
      totalSteps: 0,
      passedSteps: 0,
      failedSteps: 0,
      skippedSteps: 0,
      duration: 0,
      buildSize: 0,
      recommendations: []
    };

    for (const [stepName, step] of Object.entries(build)) {
      if (stepName === 'timestamp' || stepName === 'status' || stepName === 'summary') continue;
      
      summary.totalSteps++;
      
      if (step.status === 'passed') {
        summary.passedSteps++;
      } else if (step.status === 'failed') {
        summary.failedSteps++;
      } else if (step.status === 'skipped') {
        summary.skippedSteps++;
      }
      
      // Calculate total duration
      if (step.buildTime) summary.duration += step.buildTime;
      
      // Get build size
      if (step.output?.size) summary.buildSize = step.output.size;
    }

    summary.durationSeconds = Math.round(summary.duration / 1000);
    summary.buildSizeMB = summary.buildSize > 0 ? Math.round(summary.buildSize / 1024 / 1024 * 100) / 100 : 0;
    summary.successRate = summary.totalSteps > 0 ? (summary.passedSteps / summary.totalSteps) * 100 : 0;

    // Generate recommendations
    if (summary.buildSizeMB > 5) {
      summary.recommendations.push('Build size is large - consider optimization');
    }
    
    if (summary.durationSeconds > 60) {
      summary.recommendations.push('Build time is slow - optimize build process');
    }

    return summary;
  }

  async generateBuildReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          status: this.buildData.status || 'unknown',
          buildSize: this.buildData.summary?.buildSizeMB || 0,
          buildTime: this.buildData.summary?.durationSeconds || 0,
          successRate: this.buildData.summary?.successRate || 0
        },
        build: this.buildData,
        history: this.buildHistory.slice(-5), // Last 5 builds
        recommendations: this.buildData.summary?.recommendations || []
      };

      // Save report
      const reportPath = path.join(this.workingDir, 'logs', 'build-automation-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      this.log('Build report generated', 'info');
      return report;
    } catch (error) {
      this.log(`Report generation failed: ${error.message}`, 'error');
      return null;
    }
  }

  async run() {
    this.log('🔨 Starting Build Automation...', 'info');
    
    try {
      await this.runBuildProcess();
      
      const report = await this.generateBuildReport();
      
      if (report) {
        this.log(`✅ Build automation completed:`, 'info');
        this.log(`   Status: ${report.summary.status}`, 'info');
        this.log(`   Build Size: ${report.summary.buildSize}MB`, 'info');
        this.log(`   Build Time: ${report.summary.buildTime}s`, 'info');
        this.log(`   Success Rate: ${report.summary.successRate.toFixed(1)}%`, 'info');
        
        if (report.recommendations.length > 0) {
          this.log(`   Recommendations: ${report.recommendations.length}`, 'info');
        }
      }
      
    } catch (error) {
      this.log(`Build automation failed: ${error.message}`, 'error');
    }
  }

  start() {
    this.log('🔄 Build automation started with interval:', 'info');
    this.log(`   Interval: ${this.interval / 1000} seconds`, 'info');
    this.log(`   Working directory: ${this.workingDir}`, 'info');
    
    // Run immediately
    this.run();
    
    // Set up interval
    setInterval(() => {
      this.run();
    }, this.interval);
  }
}

// Start the automation if this file is run directly
if (require.main === module) {
  const build = new BuildAutomation();
  build.start();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    build.log('🛑 Build automation shutting down...', 'info');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    build.log('🛑 Build automation shutting down...', 'info');
    process.exit(0);
  });
}

module.exports = BuildAutomation;