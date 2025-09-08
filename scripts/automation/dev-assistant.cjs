#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🤖 Starting Real-time Development Assistant...');

class RealTimeDevAssistant {
  constructor() {
    this.assistantState = {
      currentStatus: { health: 'unknown', issues: [], suggestions: [] },
      realTimeMetrics: { performance: {}, errors: [], warnings: [] },
      developmentInsights: { patterns: [], recommendations: [], trends: [] },
      autoSuggestions: { code: [], performance: [], security: [] },
      monitoring: { active: true, lastCheck: null, checks: 0 }
    };
    this.reportDir = path.join(process.cwd(), 'dev-assistant-reports');
    this.ensureReportDirectory();
    this.startTime = Date.now();
    this.realTimeMonitoring = process.env.REAL_TIME_MONITORING === 'true';
    this.autoSuggestions = process.env.AUTO_SUGGESTIONS === 'true';
    this.developmentInsights = process.env.DEVELOPMENT_INSIGHTS === 'true';
    this.watchFiles = new Set();
    this.lastFileCheck = new Map();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async startRealTimeMonitoring() {
    console.log('👁️ Starting real-time monitoring...');
    
    if (!this.realTimeMonitoring) {
      console.log('⚠️ Real-time monitoring disabled');
      return;
    }

    // Set up file watching
    this.setupFileWatching();
    
    // Set up continuous health checks
    this.startHealthMonitoring();
    
    // Set up performance monitoring
    this.startPerformanceMonitoring();
    
    // Set up error monitoring
    this.startErrorMonitoring();
    
    console.log('✅ Real-time monitoring started');
  }

  setupFileWatching() {
    try {
      const srcDir = path.join(process.cwd(), 'src');
      if (fs.existsSync(srcDir)) {
        this.watchDirectory(srcDir);
      }
      
      const serverDir = path.join(process.cwd(), 'server');
      if (fs.existsSync(serverDir)) {
        this.watchDirectory(serverDir);
      }
      
      console.log('📁 File watching setup completed');
    } catch (error) {
      console.log('⚠️ File watching setup failed:', error.message);
    }
  }

  watchDirectory(dir) {
    try {
      const files = this.getAllFiles(dir, ['.js', '.jsx', '.ts', '.tsx', '.json', '.md']);
      files.forEach(file => {
        this.watchFiles.add(file);
        this.lastFileCheck.set(file, Date.now());
      });
    } catch (error) {
      console.log('⚠️ Directory watching failed:', error.message);
    }
  }

  getAllFiles(dir, extensions) {
    let results = [];
    try {
      const list = fs.readdirSync(dir);
      
      list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat && stat.isDirectory()) {
          results = results.concat(this.getAllFiles(filePath, extensions));
        } else if (extensions.some(ext => file.endsWith(ext))) {
          results.push(filePath);
        }
      });
    } catch (error) {
      // Directory access error
    }
    
    return results;
  }

  startHealthMonitoring() {
    // Run health checks every 30 seconds
    setInterval(async () => {
      try {
        await this.performHealthCheck();
      } catch (error) {
        console.log('⚠️ Health check failed:', error.message);
      }
    }, 30000);
  }

  startPerformanceMonitoring() {
    // Run performance checks every minute
    setInterval(async () => {
      try {
        await this.performPerformanceCheck();
      } catch (error) {
        console.log('⚠️ Performance check failed:', error.message);
      }
    }, 60000);
  }

  startErrorMonitoring() {
    // Run error checks every 15 seconds
    setInterval(async () => {
      try {
        await this.performErrorCheck();
      } catch (error) {
        console.log('⚠️ Error check failed:', error.message);
      }
    }, 15000);
  }

  async performHealthCheck() {
    try {
      const healthStatus = await this.assessSystemHealth();
      this.assistantState.currentStatus = healthStatus;
      
      // Generate real-time suggestions based on health
      if (this.autoSuggestions) {
        await this.generateRealTimeSuggestions(healthStatus);
      }
      
      this.assistantState.monitoring.lastCheck = new Date().toISOString();
      this.assistantState.monitoring.checks++;
      
    } catch (error) {
      console.log('⚠️ Health check failed:', error.message);
    }
  }

  async assessSystemHealth() {
    try {
      const health = {
        health: 'unknown',
        issues: [],
        suggestions: [],
        timestamp: new Date().toISOString()
      };
      
      // Check build health
      const buildHealth = await this.checkBuildHealth();
      if (buildHealth.issues.length > 0) {
        health.issues.push(...buildHealth.issues);
      }
      
      // Check dependency health
      const dependencyHealth = await this.checkDependencyHealth();
      if (dependencyHealth.issues.length > 0) {
        health.issues.push(...dependencyHealth.issues);
      }
      
      // Check code quality health
      const codeQualityHealth = await this.checkCodeQualityHealth();
      if (codeQualityHealth.issues.length > 0) {
        health.issues.push(...codeQualityHealth.issues);
      }
      
      // Determine overall health
      if (health.issues.length === 0) {
        health.health = 'excellent';
        health.suggestions.push('🟢 System health is excellent - maintain current practices');
      } else if (health.issues.length < 3) {
        health.health = 'good';
        health.suggestions.push('🟡 System health is good - address minor issues when convenient');
      } else if (health.issues.length < 5) {
        health.health = 'fair';
        health.suggestions.push('🟠 System health needs attention - address issues soon');
      } else {
        health.health = 'poor';
        health.suggestions.push('🔴 System health needs immediate attention - address critical issues first');
      }
      
      return health;
    } catch (error) {
      return {
        health: 'unknown',
        issues: ['Unable to assess system health'],
        suggestions: ['Check system status manually'],
        timestamp: new Date().toISOString()
      };
    }
  }

  async checkBuildHealth() {
    try {
      const issues = [];
      
      // Check if build command exists
      try {
        execSync('npm run build --dry-run', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
      } catch (error) {
        issues.push('Build command failed - check build configuration');
      }
      
      // Check for build artifacts
      const distDir = path.join(process.cwd(), 'dist');
      if (fs.existsSync(distDir)) {
        const files = fs.readdirSync(distDir);
        if (files.length === 0) {
          issues.push('Build directory is empty - recent build may have failed');
        }
      }
      
      return { issues };
    } catch (error) {
      return { issues: ['Unable to check build health'] };
    }
  }

  async checkDependencyHealth() {
    try {
      const issues = [];
      
      // Check for package-lock.json
      if (!fs.existsSync('package-lock.json')) {
        issues.push('package-lock.json missing - run npm install');
      }
      
      // Check for node_modules
      if (!fs.existsSync('node_modules')) {
        issues.push('node_modules missing - run npm install');
      }
      
      // Quick vulnerability check
      try {
        const auditOutput = execSync('npm audit --audit-level=high --json', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        const audit = JSON.parse(auditOutput);
        if (audit.metadata && audit.metadata.vulnerabilities) {
          const highVulns = audit.metadata.vulnerabilities.high || 0;
          const criticalVulns = audit.metadata.vulnerabilities.critical || 0;
          
          if (criticalVulns > 0) {
            issues.push(`${criticalVulns} critical security vulnerabilities detected`);
          }
          if (highVulns > 0) {
            issues.push(`${highVulns} high security vulnerabilities detected`);
          }
        }
      } catch (error) {
        // npm audit failed, continue
      }
      
      return { issues };
    } catch (error) {
      return { issues: ['Unable to check dependency health'] };
    }
  }

  async checkCodeQualityHealth() {
    try {
      const issues = [];
      
      // Check for TypeScript errors
      try {
        const tsCheck = execSync('npx tsc --noEmit', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        if (tsCheck.includes('error')) {
          const errorCount = (tsCheck.match(/error/g) || []).length;
          issues.push(`${errorCount} TypeScript errors detected`);
        }
      } catch (error) {
        // TypeScript check failed, continue
      }
      
      // Check for ESLint issues
      try {
        const lintCheck = execSync('npm run lint --silent', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        if (lintCheck.includes('error') || lintCheck.includes('warning')) {
          const errorCount = (lintCheck.match(/error/g) || []).length;
          const warningCount = (lintCheck.match(/warning/g) || []).length;
          issues.push(`${errorCount} linting errors, ${warningCount} warnings detected`);
        }
      } catch (error) {
        // Linting failed, continue
      }
      
      return { issues };
    } catch (error) {
      return { issues: ['Unable to check code quality health'] };
    }
  }

  async performPerformanceCheck() {
    try {
      const performanceData = await this.collectPerformanceMetrics();
      this.assistantState.realTimeMetrics.performance = performanceData;
      
      // Generate performance insights
      if (this.developmentInsights) {
        await this.generatePerformanceInsights(performanceData);
      }
      
    } catch (error) {
      console.log('⚠️ Performance check failed:', error.message);
    }
  }

  async collectPerformanceMetrics() {
    try {
      const metrics = {
        timestamp: new Date().toISOString(),
        bundleSize: 0,
        buildTime: 0,
        memoryUsage: process.memoryUsage(),
        cpuUsage: process.cpuUsage()
      };
      
      // Check bundle size if dist exists
      const distDir = path.join(process.cwd(), 'dist');
      if (fs.existsSync(distDir)) {
        metrics.bundleSize = this.calculateDirectorySize(distDir);
      }
      
      // Measure build time
      const buildStart = Date.now();
      try {
        execSync('npm run build --silent', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        metrics.buildTime = Date.now() - buildStart;
      } catch (error) {
        metrics.buildTime = -1; // Build failed
      }
      
      return metrics;
    } catch (error) {
      return { timestamp: new Date().toISOString(), error: error.message };
    }
  }

  calculateDirectorySize(dir) {
    let totalSize = 0;
    try {
      const files = this.getAllFiles(dir, ['.js', '.css', '.html']);
      files.forEach(file => {
        try {
          const stats = fs.statSync(file);
          totalSize += stats.size;
        } catch (error) {
          // Skip files that can't be accessed
        }
      });
    } catch (error) {
      // Directory access error
    }
    return totalSize;
  }

  async generatePerformanceInsights(performanceData) {
    try {
      const insights = [];
      
      // Bundle size insights
      const bundleSizeMB = performanceData.bundleSize / 1024 / 1024;
      if (bundleSizeMB > 5) {
        insights.push('🔴 Bundle size is large (>5MB) - consider code splitting');
      } else if (bundleSizeMB > 3) {
        insights.push('🟡 Bundle size is moderate - consider optimizations');
      } else {
        insights.push('🟢 Bundle size is good');
      }
      
      // Build time insights
      if (performanceData.buildTime > 30000) {
        insights.push('🔴 Build time is slow (>30s) - consider build optimizations');
      } else if (performanceData.buildTime > 15000) {
        insights.push('🟡 Build time is moderate - consider minor optimizations');
      } else {
        insights.push('🟢 Build time is good');
      }
      
      // Memory usage insights
      const memoryMB = performanceData.memoryUsage.heapUsed / 1024 / 1024;
      if (memoryMB > 500) {
        insights.push('🔴 High memory usage detected - check for memory leaks');
      } else if (memoryMB > 200) {
        insights.push('🟡 Moderate memory usage - monitor for increases');
      } else {
        insights.push('🟢 Memory usage is normal');
      }
      
      this.assistantState.developmentInsights.insights = insights;
      
    } catch (error) {
      console.log('⚠️ Performance insights generation failed:', error.message);
    }
  }

  async performErrorCheck() {
    try {
      const errorData = await this.collectErrorData();
      this.assistantState.realTimeMetrics.errors = errorData.errors;
      this.assistantState.realTimeMetrics.warnings = errorData.warnings;
      
      // Generate error-based suggestions
      if (this.autoSuggestions) {
        await this.generateErrorBasedSuggestions(errorData);
      }
      
    } catch (error) {
      console.log('⚠️ Error check failed:', error.message);
    }
  }

  async collectErrorData() {
    try {
      const errors = [];
      const warnings = [];
      
      // Check console for recent errors
      const consoleErrors = await this.checkConsoleErrors();
      errors.push(...consoleErrors);
      
      // Check build errors
      const buildErrors = await this.checkBuildErrors();
      errors.push(...buildErrors);
      
      // Check linting errors
      const lintErrors = await this.checkLintErrors();
      errors.push(...lintErrors);
      
      return { errors, warnings };
    } catch (error) {
      return { errors: ['Unable to collect error data'], warnings: [] };
    }
  }

  async checkConsoleErrors() {
    try {
      const errors = [];
      
      // This would typically check browser console or logs
      // For now, we'll check for common error patterns in source code
      const srcDir = path.join(process.cwd(), 'src');
      if (fs.existsSync(srcDir)) {
        const files = this.getAllFiles(srcDir, ['.js', '.jsx', '.ts', '.tsx']);
        
        files.forEach(file => {
          try {
            const content = fs.readFileSync(file, 'utf8');
            
            // Check for common error patterns
            if (content.includes('console.error') || content.includes('throw new Error')) {
              errors.push(`Error handling found in ${path.relative(process.cwd(), file)}`);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        });
      }
      
      return errors;
    } catch (error) {
      return ['Unable to check console errors'];
    }
  }

  async checkBuildErrors() {
    try {
      const errors = [];
      
      // Check for build failures
      try {
        execSync('npm run build --silent', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
      } catch (error) {
        errors.push('Build is currently failing - check build configuration');
      }
      
      return errors;
    } catch (error) {
      return ['Unable to check build errors'];
    }
  }

  async checkLintErrors() {
    try {
      const errors = [];
      
      try {
        const lintOutput = execSync('npm run lint --silent', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        if (lintOutput.includes('error')) {
          const errorCount = (lintOutput.match(/error/g) || []).length;
          errors.push(`${errorCount} linting errors detected`);
        }
      } catch (error) {
        errors.push('Linting is currently failing');
      }
      
      return errors;
    } catch (error) {
      return ['Unable to check lint errors'];
    }
  }

  async generateRealTimeSuggestions(healthStatus) {
    try {
      const suggestions = [];
      
      // Health-based suggestions
      if (healthStatus.health === 'poor') {
        suggestions.push('🚨 CRITICAL: System health is poor - immediate action required');
        suggestions.push('🚨 CRITICAL: Focus on resolving critical issues first');
        suggestions.push('🚨 CRITICAL: Consider rolling back recent changes if necessary');
      } else if (healthStatus.health === 'fair') {
        suggestions.push('⚠️ WARNING: System health needs attention');
        suggestions.push('⚠️ WARNING: Address issues systematically');
        suggestions.push('⚠️ WARNING: Monitor for further degradation');
      }
      
      // Issue-specific suggestions
      healthStatus.issues.forEach(issue => {
        if (issue.includes('security vulnerability')) {
          suggestions.push('🔒 SECURITY: Address security vulnerabilities immediately');
        } else if (issue.includes('build')) {
          suggestions.push('🔨 BUILD: Fix build issues to restore development workflow');
        } else if (issue.includes('dependency')) {
          suggestions.push('📦 DEPENDENCY: Resolve dependency issues for stability');
        }
      });
      
      this.assistantState.autoSuggestions.code = suggestions;
      
    } catch (error) {
      console.log('⚠️ Real-time suggestions generation failed:', error.message);
    }
  }

  async generateErrorBasedSuggestions(errorData) {
    try {
      const suggestions = [];
      
      errorData.errors.forEach(error => {
        if (error.includes('security vulnerability')) {
          suggestions.push('🔒 SECURITY: Run npm audit fix to resolve vulnerabilities');
        } else if (error.includes('build')) {
          suggestions.push('🔨 BUILD: Check build configuration and dependencies');
        } else if (error.includes('linting')) {
          suggestions.push('🧹 CODE: Fix linting errors for better code quality');
        } else if (error.includes('TypeScript')) {
          suggestions.push('📝 TYPES: Fix TypeScript errors for type safety');
        }
      });
      
      this.assistantState.autoSuggestions.code = suggestions;
      
    } catch (error) {
      console.log('⚠️ Error-based suggestions generation failed:', error.message);
    }
  }

  async generateDevelopmentInsights() {
    try {
      const insights = [];
      
      // Code pattern insights
      const patterns = await this.analyzeCodePatterns();
      this.assistantState.developmentInsights.patterns = patterns;
      
      // Development trend insights
      const trends = await this.analyzeDevelopmentTrends();
      this.assistantState.developmentInsights.trends = trends;
      
      // Generate recommendations
      const recommendations = this.generateRecommendations(patterns, trends);
      this.assistantState.developmentInsights.recommendations = recommendations;
      
    } catch (error) {
      console.log('⚠️ Development insights generation failed:', error.message);
    }
  }

  async analyzeCodePatterns() {
    try {
      const patterns = [];
      const srcDir = path.join(process.cwd(), 'src');
      
      if (fs.existsSync(srcDir)) {
        const files = this.getAllFiles(srcDir, ['.js', '.jsx', '.ts', '.tsx']);
        
        // Analyze file sizes
        const fileSizes = files.map(file => {
          try {
            const stats = fs.statSync(file);
            return { file: path.relative(process.cwd(), file), size: stats.size };
          } catch (error) {
            return { file: path.relative(process.cwd(), file), size: 0 };
          }
        });
        
        const largeFiles = fileSizes.filter(f => f.size > 100000);
        if (largeFiles.length > 0) {
          patterns.push(`Found ${largeFiles.length} large files (>100KB) - consider splitting`);
        }
        
        // Analyze import patterns
        const importPatterns = this.analyzeImportPatterns(files);
        patterns.push(...importPatterns);
      }
      
      return patterns;
    } catch (error) {
      return ['Unable to analyze code patterns'];
    }
  }

  analyzeImportPatterns(files) {
    const patterns = [];
    
    try {
      let totalImports = 0;
      let externalImports = 0;
      
      files.forEach(file => {
        try {
          const content = fs.readFileSync(file, 'utf8');
          const importMatches = content.match(/import\s+.*?from\s+['"]([^'"]+)['"]/g);
          
          if (importMatches) {
            totalImports += importMatches.length;
            importMatches.forEach(match => {
              const packageMatch = match.match(/from\s+['"]([^'"]+)['"]/);
              if (packageMatch && !packageMatch[1].startsWith('.') && !packageMatch[1].startsWith('@/')) {
                externalImports++;
              }
            });
          }
        } catch (error) {
          // Skip files that can't be read
        }
      });
      
      if (totalImports > 0) {
        const externalRatio = (externalImports / totalImports * 100).toFixed(1);
        patterns.push(`External dependency ratio: ${externalRatio}%`);
        
        if (externalRatio > 80) {
          patterns.push('High external dependency ratio - consider reducing third-party dependencies');
        }
      }
    } catch (error) {
      patterns.push('Unable to analyze import patterns');
    }
    
    return patterns;
  }

  async analyzeDevelopmentTrends() {
    try {
      const trends = [];
      
      // Check for recent file changes
      const recentChanges = await this.checkRecentChanges();
      if (recentChanges.length > 0) {
        trends.push(`Recent activity: ${recentChanges.length} files modified recently`);
      }
      
      // Check for new files
      const newFiles = await this.checkNewFiles();
      if (newFiles.length > 0) {
        trends.push(`New development: ${newFiles.length} new files added`);
      }
      
      return trends;
    } catch (error) {
      return ['Unable to analyze development trends'];
    }
  }

  async checkRecentChanges() {
    try {
      const recentChanges = [];
      const oneHourAgo = Date.now() - (60 * 60 * 1000);
      
      this.watchFiles.forEach(file => {
        try {
          const stats = fs.statSync(file);
          if (stats.mtime.getTime() > oneHourAgo) {
            recentChanges.push(path.relative(process.cwd(), file));
          }
        } catch (error) {
          // File no longer exists
        }
      });
      
      return recentChanges;
    } catch (error) {
      return [];
    }
  }

  async checkNewFiles() {
    try {
      const newFiles = [];
      const srcDir = path.join(process.cwd(), 'src');
      
      if (fs.existsSync(srcDir)) {
        const files = this.getAllFiles(srcDir, ['.js', '.jsx', '.ts', '.tsx']);
        
        files.forEach(file => {
          if (!this.watchFiles.has(file)) {
            newFiles.push(path.relative(process.cwd(), file));
            this.watchFiles.add(file);
            this.lastFileCheck.set(file, Date.now());
          }
        });
      }
      
      return newFiles;
    } catch (error) {
      return [];
    }
  }

  generateRecommendations(patterns, trends) {
    const recommendations = [];
    
    // Pattern-based recommendations
    patterns.forEach(pattern => {
      if (pattern.includes('large files')) {
        recommendations.push('📁 Consider breaking large files into smaller, focused modules');
      } else if (pattern.includes('external dependency')) {
        recommendations.push('🔗 Review external dependencies and consider alternatives');
      }
    });
    
    // Trend-based recommendations
    trends.forEach(trend => {
      if (trend.includes('Recent activity')) {
        recommendations.push('📝 High development activity detected - consider code review');
      } else if (trend.includes('New development')) {
        recommendations.push('🆕 New files added - ensure proper testing and documentation');
      }
    });
    
    // General recommendations
    recommendations.push('🔍 Regular code reviews help maintain quality');
    recommendations.push('🧪 Ensure new code has proper test coverage');
    recommendations.push('📚 Keep documentation updated with code changes');
    
    return recommendations;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      uptime: Date.now() - this.startTime,
      monitoring: this.assistantState.monitoring,
      currentStatus: this.assistantState.currentStatus,
      realTimeMetrics: this.assistantState.realTimeMetrics,
      developmentInsights: this.assistantState.developmentInsights,
      autoSuggestions: this.assistantState.autoSuggestions,
      summary: {
        health: this.assistantState.currentStatus.health,
        issues: this.assistantState.currentStatus.issues.length,
        suggestions: this.assistantState.autoSuggestions.code.length,
        insights: this.assistantState.developmentInsights.recommendations.length
      }
    };
    
    const reportFile = path.join(this.reportDir, `dev-assistant-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    console.log(`📊 Development Assistant Report generated: ${reportFile}`);
    
    return report;
  }

  async run() {
    console.log('🚀 Starting Real-time Development Assistant...');
    
    try {
      // Start real-time monitoring
      await this.startRealTimeMonitoring();
      
      // Generate initial insights
      if (this.developmentInsights) {
        await this.generateDevelopmentInsights();
      }
      
      // Generate initial report
      const report = await this.generateReport();
      
      console.log('✅ Real-time Development Assistant started successfully');
      
      return report;
    } catch (error) {
      console.error('❌ Real-time Development Assistant failed:', error.message);
      throw error;
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const assistant = new RealTimeDevAssistant();
  
  // Set up interval for continuous operation
  const interval = parseInt(process.env.AUTOMATION_INTERVAL) || 300000; // 5 minutes default
  
  const runAssistant = async () => {
    try {
      await assistant.run();
    } catch (error) {
      console.error('Assistant cycle failed:', error.message);
    }
  };
  
  // Run immediately
  runAssistant();
  
  // Set up interval for periodic insights generation
  setInterval(async () => {
    try {
      if (assistant.developmentInsights) {
        await assistant.generateDevelopmentInsights();
      }
      await assistant.generateReport();
    } catch (error) {
      console.error('Periodic insights generation failed:', error.message);
    }
  }, interval);
  
  console.log(`🤖 Real-time Development Assistant running every ${interval / 60000} minutes`);
}

module.exports = RealTimeDevAssistant;