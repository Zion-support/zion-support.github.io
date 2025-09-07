#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceIntelligence {
  constructor() {
    this.config = {
      interval: process.env.AUTOMATION_INTERVAL || 1200000, // 20 minutes
      maxMemory: process.env.MAX_MEMORY || 384,
      performanceThreshold: process.env.PERFORMANCE_THRESHOLD || 0.8,
      autoOptimization: process.env.AUTO_OPTIMIZATION === 'true',
      metricsCollection: process.env.METRICS_COLLECTION === 'true',
      logFile: path.join(process.cwd(), 'logs', 'performance-intelligence.log'),
      performanceMetrics: {
        lighthouse: true,
        bundleAnalysis: true,
        buildTime: true,
        runtimePerformance: true,
        memoryUsage: true
      }
    };
    
    this.stats = {
      performanceScore: 0,
      buildTime: 0,
      bundleSize: 0,
      lighthouseScore: 0,
      optimizationsApplied: 0,
      lastRun: null,
      totalRuns: 0,
      performanceHistory: []
    };
    
    this.log('🚀 Performance Intelligence started');
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.config.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async analyzePerformance() {
    this.log('📊 Analyzing performance metrics...');
    
    try {
      const metrics = {};
      
      // Analyze build performance
      metrics.build = await this.analyzeBuildPerformance();
      
      // Analyze bundle performance
      metrics.bundle = await this.analyzeBundlePerformance();
      
      // Analyze runtime performance
      metrics.runtime = await this.analyzeRuntimePerformance();
      
      // Analyze memory usage
      metrics.memory = await this.analyzeMemoryUsage();
      
      // Calculate overall performance score
      const overallScore = this.calculateOverallScore(metrics);
      
      this.stats.performanceScore = overallScore;
      this.stats.performanceHistory.push({
        timestamp: new Date().toISOString(),
        score: overallScore,
        metrics
      });
      
      // Keep only last 100 entries
      if (this.stats.performanceHistory.length > 100) {
        this.stats.performanceHistory = this.stats.performanceHistory.slice(-100);
      }
      
      this.log(`📊 Performance analysis completed. Overall score: ${overallScore.toFixed(2)}/100`);
      
      return { overallScore, metrics };
    } catch (error) {
      this.log(`❌ Performance analysis failed: ${error.message}`, 'ERROR');
      return { overallScore: 0, metrics: {} };
    }
  }

  async analyzeBuildPerformance() {
    try {
      this.log('🔨 Analyzing build performance...');
      
      const startTime = Date.now();
      
      // Run build command
      const result = execSync('npm run build', { 
        encoding: 'utf8', 
        stdio: 'pipe',
        timeout: 600000 // 10 minutes
      });
      
      const buildTime = Date.now() - startTime;
      this.stats.buildTime = buildTime;
      
      // Check build output for size information
      const distPath = path.join(process.cwd(), 'dist');
      let totalSize = 0;
      
      if (fs.existsSync(distPath)) {
        totalSize = this.calculateDirectorySize(distPath);
        this.stats.bundleSize = totalSize;
      }
      
      const buildScore = this.calculateBuildScore(buildTime, totalSize);
      
      this.log(`🔨 Build completed in ${buildTime}ms, size: ${(totalSize / 1024 / 1024).toFixed(2)}MB, score: ${buildScore.toFixed(2)}/100`);
      
      return {
        buildTime,
        totalSize,
        score: buildScore,
        success: result.includes('Build completed successfully')
      };
    } catch (error) {
      this.log(`❌ Build analysis failed: ${error.message}`, 'ERROR');
      return { buildTime: 0, totalSize: 0, score: 0, success: false };
    }
  }

  async analyzeBundlePerformance() {
    try {
      this.log('📦 Analyzing bundle performance...');
      
      // Check if bundle analyzer is available
      if (fs.existsSync(path.join(process.cwd(), 'node_modules', '@next/bundle-analyzer'))) {
        const result = execSync('npm run analyze', { 
          encoding: 'utf8', 
          stdio: 'pipe',
          timeout: 120000 // 2 minutes
        });
        
        // Parse bundle analysis results
        const bundleScore = this.parseBundleAnalysis(result);
        this.log(`📦 Bundle analysis completed. Score: ${bundleScore.toFixed(2)}/100`);
        
        return { score: bundleScore, analysis: result };
      } else {
        this.log('⚠️  Bundle analyzer not available');
        return { score: 80, analysis: 'Bundle analyzer not available' };
      }
    } catch (error) {
      this.log(`❌ Bundle analysis failed: ${error.message}`, 'ERROR');
      return { score: 0, analysis: 'Analysis failed' };
    }
  }

  async analyzeRuntimePerformance() {
    try {
      this.log('⚡ Analyzing runtime performance...');
      
      // Check for performance anti-patterns in source code
      const sourceDir = path.join(process.cwd(), 'src');
      const performanceIssues = this.scanForPerformanceIssues(sourceDir);
      
      // Calculate runtime performance score
      const runtimeScore = this.calculateRuntimeScore(performanceIssues);
      
      this.log(`⚡ Runtime analysis completed. Issues found: ${performanceIssues.length}, Score: ${runtimeScore.toFixed(2)}/100`);
      
      return {
        score: runtimeScore,
        issues: performanceIssues,
        totalIssues: performanceIssues.length
      };
    } catch (error) {
      this.log(`❌ Runtime analysis failed: ${error.message}`, 'ERROR');
      return { score: 0, issues: [], totalIssues: 0 };
    }
  }

  async analyzeMemoryUsage() {
    try {
      this.log('💾 Analyzing memory usage...');
      
      const memUsage = process.memoryUsage();
      const memoryScore = this.calculateMemoryScore(memUsage);
      
      this.log(`💾 Memory analysis completed. Heap: ${(memUsage.heapUsed / 1024 / 1024).toFixed(2)}MB, Score: ${memoryScore.toFixed(2)}/100`);
      
      return {
        heapUsed: memUsage.heapUsed,
        heapTotal: memUsage.heapTotal,
        external: memUsage.external,
        score: memoryScore
      };
    } catch (error) {
      this.log(`❌ Memory analysis failed: ${error.message}`, 'ERROR');
      return { heapUsed: 0, heapTotal: 0, external: 0, score: 0 };
    }
  }

  scanForPerformanceIssues(sourceDir) {
    const issues = [];
    
    try {
      const files = this.getAllFiles(sourceDir, ['.js', '.jsx', '.ts', '.tsx']);
      
      for (const file of files) {
        const content = fs.readFileSync(file, 'utf8');
        const fileIssues = this.analyzeFileForPerformanceIssues(content, file);
        issues.push(...fileIssues);
      }
    } catch (error) {
      this.log(`❌ Error scanning for performance issues: ${error.message}`, 'ERROR');
    }
    
    return issues;
  }

  analyzeFileForPerformanceIssues(content, filePath) {
    const issues = [];
    const relativePath = path.relative(process.cwd(), filePath);
    
    // Check for performance anti-patterns
    const patterns = [
      {
        pattern: /useEffect\s*\(\s*\(\)\s*=>\s*\{[\s\S]*?\}\s*,\s*\[\s*\]\s*\)/g,
        message: 'useEffect with empty dependency array might cause unnecessary re-renders',
        severity: 'medium'
      },
      {
        pattern: /\.map\s*\(\s*\([^)]*\)\s*=>\s*\{[\s\S]*?\}\s*\)/g,
        message: 'Consider using React.memo or useMemo for expensive map operations',
        severity: 'low'
      },
      {
        pattern: /useState\s*\(\s*\([^)]*\)\s*=>\s*\{[\s\S]*?\}\s*\)/g,
        message: 'useState with function initializer might cause unnecessary calculations',
        severity: 'low'
      },
      {
        pattern: /innerHTML\s*=/g,
        message: 'innerHTML can cause performance issues and security vulnerabilities',
        severity: 'high'
      },
      {
        pattern: /document\.querySelectorAll.*forEach/g,
        message: 'Consider using more efficient DOM traversal methods',
        severity: 'medium'
      }
    ];
    
    patterns.forEach(({ pattern, message, severity }) => {
      const matches = content.match(pattern);
      if (matches) {
        issues.push({
          file: relativePath,
          message,
          severity,
          count: matches.length
        });
      }
    });
    
    return issues;
  }

  calculateBuildScore(buildTime, totalSize) {
    let score = 100;
    
    // Penalize slow builds
    if (buildTime > 300000) score -= 30; // > 5 minutes
    else if (buildTime > 180000) score -= 20; // > 3 minutes
    else if (buildTime > 120000) score -= 10; // > 2 minutes
    
    // Penalize large bundles
    const sizeMB = totalSize / 1024 / 1024;
    if (sizeMB > 10) score -= 30; // > 10MB
    else if (sizeMB > 5) score -= 20; // > 5MB
    else if (sizeMB > 2) score -= 10; // > 2MB
    
    return Math.max(0, score);
  }

  parseBundleAnalysis(analysis) {
    // Simple parsing of bundle analysis output
    let score = 80; // Base score
    
    // Look for common bundle issues
    if (analysis.includes('large bundle')) score -= 20;
    if (analysis.includes('duplicate')) score -= 15;
    if (analysis.includes('unused')) score -= 10;
    if (analysis.includes('tree-shaking')) score += 10;
    
    return Math.max(0, Math.min(100, score));
  }

  calculateRuntimeScore(issues) {
    let score = 100;
    
    // Penalize based on issue severity and count
    issues.forEach(issue => {
      switch (issue.severity) {
        case 'high':
          score -= issue.count * 10;
          break;
        case 'medium':
          score -= issue.count * 5;
          break;
        case 'low':
          score -= issue.count * 2;
          break;
      }
    });
    
    return Math.max(0, score);
  }

  calculateMemoryScore(memUsage) {
    let score = 100;
    const heapUsedMB = memUsage.heapUsed / 1024 / 1024;
    
    // Penalize high memory usage
    if (heapUsedMB > 1000) score -= 40; // > 1GB
    else if (heapUsedMB > 500) score -= 25; // > 500MB
    else if (heapUsedMB > 200) score -= 15; // > 200MB
    else if (heapUsedMB > 100) score -= 10; // > 100MB
    
    return Math.max(0, score);
  }

  calculateOverallScore(metrics) {
    const weights = {
      build: 0.3,
      bundle: 0.25,
      runtime: 0.25,
      memory: 0.2
    };
    
    let totalScore = 0;
    let totalWeight = 0;
    
    if (metrics.build) {
      totalScore += metrics.build.score * weights.build;
      totalWeight += weights.build;
    }
    
    if (metrics.bundle) {
      totalScore += metrics.bundle.score * weights.bundle;
      totalWeight += weights.bundle;
    }
    
    if (metrics.runtime) {
      totalScore += metrics.runtime.score * weights.runtime;
      totalWeight += weights.runtime;
    }
    
    if (metrics.memory) {
      totalScore += metrics.memory.score * weights.memory;
      totalWeight += weights.memory;
    }
    
    return totalWeight > 0 ? totalScore / totalWeight : 0;
  }

  async applyPerformanceOptimizations(metrics) {
    if (!this.config.autoOptimization) {
      this.log('⚠️  Auto-optimization is disabled');
      return;
    }
    
    this.log('🔧 Applying performance optimizations...');
    
    try {
      // Apply bundle optimizations
      if (metrics.bundle && metrics.bundle.score < 70) {
        await this.optimizeBundle();
      }
      
      // Apply runtime optimizations
      if (metrics.runtime && metrics.runtime.score < 70) {
        await this.optimizeRuntime(metrics.runtime.issues);
      }
      
      // Apply build optimizations
      if (metrics.build && metrics.build.score < 70) {
        await this.optimizeBuild();
      }
      
      this.log('✅ Performance optimizations completed');
    } catch (error) {
      this.log(`❌ Performance optimizations failed: ${error.message}`, 'ERROR');
    }
  }

  async optimizeBundle() {
    try {
      this.log('📦 Optimizing bundle...');
      
      // Check for tree-shaking opportunities
      const sourceDir = path.join(process.cwd(), 'src');
      await this.optimizeImports(sourceDir);
      
      this.stats.optimizationsApplied++;
    } catch (error) {
      this.log(`❌ Bundle optimization failed: ${error.message}`, 'ERROR');
    }
  }

  async optimizeRuntime(issues) {
    try {
      this.log('⚡ Optimizing runtime performance...');
      
      // Fix high-severity issues automatically
      const highSeverityIssues = issues.filter(issue => issue.severity === 'high');
      
      for (const issue of highSeverityIssues) {
        await this.fixPerformanceIssue(issue);
      }
      
      this.stats.optimizationsApplied += highSeverityIssues.length;
    } catch (error) {
      this.log(`❌ Runtime optimization failed: ${error.message}`, 'ERROR');
    }
  }

  async optimizeBuild() {
    try {
      this.log('🔨 Optimizing build process...');
      
      // Check for build configuration improvements
      const viteConfigPath = path.join(process.cwd(), 'vite.config.ts');
      if (fs.existsSync(viteConfigPath)) {
        await this.optimizeViteConfig(viteConfigPath);
      }
      
      this.stats.optimizationsApplied++;
    } catch (error) {
      this.log(`❌ Build optimization failed: ${error.message}`, 'ERROR');
    }
  }

  async optimizeImports(sourceDir) {
    try {
      const files = this.getAllFiles(sourceDir, ['.js', '.jsx', '.ts', '.tsx']);
      
      for (const file of files) {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // Remove unused imports
        const importRegex = /import\s+.*?from\s+['"`]([^'"`]+)['"`];?/g;
        const imports = content.match(importRegex) || [];
        
        for (const importStatement of imports) {
          const importPath = importStatement.match(/from\s+['"`]([^'"`]+)['"`]/)?.[1];
          if (importPath && !this.isImportUsed(content, importStatement)) {
            content = content.replace(importStatement, '');
            modified = true;
          }
        }
        
        if (modified) {
          fs.writeFileSync(file, content);
          this.log(`🔧 Optimized imports in ${path.relative(process.cwd(), file)}`);
        }
      }
    } catch (error) {
      this.log(`❌ Import optimization failed: ${error.message}`, 'ERROR');
    }
  }

  isImportUsed(content, importStatement) {
    // Simple check if import is used in the file
    const importName = importStatement.match(/import\s+(\w+)/)?.[1];
    if (!importName) return true;
    
    // Check if the imported name is used in the content
    const usageRegex = new RegExp(`\\b${importName}\\b`, 'g');
    const matches = content.match(usageRegex) || [];
    
    // Subtract the import statement itself
    return matches.length > 1;
  }

  async fixPerformanceIssue(issue) {
    try {
      const filePath = path.join(process.cwd(), issue.file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Apply specific fixes based on issue type
      if (issue.message.includes('innerHTML')) {
        content = content.replace(/innerHTML\s*=\s*([^;]+);/g, 'textContent = $1;');
      }
      
      if (issue.message.includes('useEffect')) {
        // Add dependency array optimization
        content = content.replace(
          /useEffect\s*\(\s*\(\)\s*=>\s*\{([^}]+)\}\s*,\s*\[\s*\]\s*\)/g,
          'useEffect(() => {$1}, []) // Optimized: consider adding dependencies'
        );
      }
      
      fs.writeFileSync(filePath, content);
      this.log(`🔧 Fixed performance issue in ${issue.file}`);
      
    } catch (error) {
      this.log(`❌ Failed to fix performance issue in ${issue.file}: ${error.message}`, 'ERROR');
    }
  }

  async optimizeViteConfig(configPath) {
    try {
      let content = fs.readFileSync(configPath, 'utf8');
      
      // Add performance optimizations if not present
      if (!content.includes('build.rollupOptions')) {
        const optimizations = `
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['lodash', 'date-fns']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },`;
        
        content = content.replace(/export default defineConfig\(\{/, `export default defineConfig({${optimizations}`);
        fs.writeFileSync(configPath, content);
        this.log('🔧 Added build optimizations to Vite config');
      }
    } catch (error) {
      this.log(`❌ Failed to optimize Vite config: ${error.message}`, 'ERROR');
    }
  }

  calculateDirectorySize(dirPath) {
    let totalSize = 0;
    
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          totalSize += this.calculateDirectorySize(fullPath);
        } else {
          totalSize += stat.size;
        }
      }
    } catch (error) {
      this.log(`❌ Error calculating directory size: ${error.message}`, 'ERROR');
    }
    
    return totalSize;
  }

  getAllFiles(dir, extensions) {
    const files = [];
    
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          files.push(...this.getAllFiles(fullPath, extensions));
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      this.log(`❌ Error reading directory ${dir}: ${error.message}`, 'ERROR');
    }
    
    return files;
  }

  async generatePerformanceReport(metrics) {
    const report = {
      timestamp: new Date().toISOString(),
      overallScore: this.stats.performanceScore,
      metrics,
      stats: this.stats,
      recommendations: this.generateRecommendations(metrics),
      performanceTrend: this.calculatePerformanceTrend()
    };
    
    // Save report
    const reportPath = path.join(process.cwd(), 'logs', 'performance-report.json');
    try {
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`📊 Performance report saved to ${reportPath}`);
    } catch (error) {
      this.log(`❌ Failed to save report: ${error.message}`, 'ERROR');
    }
    
    return report;
  }

  generateRecommendations(metrics) {
    const recommendations = [];
    
    if (metrics.build && metrics.build.score < 70) {
      recommendations.push('🔨 Build performance is low. Consider optimizing build configuration and dependencies.');
    }
    
    if (metrics.bundle && metrics.bundle.score < 70) {
      recommendations.push('📦 Bundle size is large. Consider code splitting and tree shaking.');
    }
    
    if (metrics.runtime && metrics.runtime.score < 70) {
      recommendations.push('⚡ Runtime performance issues detected. Review and optimize React components.');
    }
    
    if (metrics.memory && metrics.memory.score < 70) {
      recommendations.push('💾 Memory usage is high. Check for memory leaks and optimize data structures.');
    }
    
    if (this.stats.performanceScore < 70) {
      recommendations.push('🚨 Overall performance score is low. Focus on high-impact optimizations.');
    }
    
    return recommendations;
  }

  calculatePerformanceTrend() {
    if (this.stats.performanceHistory.length < 2) {
      return 'insufficient data';
    }
    
    const recent = this.stats.performanceHistory.slice(-5);
    const older = this.stats.performanceHistory.slice(-10, -5);
    
    if (recent.length === 0 || older.length === 0) {
      return 'insufficient data';
    }
    
    const recentAvg = recent.reduce((sum, entry) => sum + entry.score, 0) / recent.length;
    const olderAvg = older.reduce((sum, entry) => sum + entry.score, 0) / older.length;
    
    if (recentAvg > olderAvg + 5) return 'improving';
    if (recentAvg < olderAvg - 5) return 'declining';
    return 'stable';
  }

  async run() {
    this.log('🚀 Starting performance analysis cycle...');
    this.stats.lastRun = new Date().toISOString();
    this.stats.totalRuns++;
    
    try {
      // Check memory usage
      const memUsage = process.memoryUsage();
      if (memUsage.heapUsed > this.config.maxMemory * 1024 * 1024) {
        this.log(`⚠️  High memory usage: ${Math.round(memUsage.heapUsed / 1024 / 1024)}MB`, 'WARN');
      }
      
      // Analyze performance
      const { overallScore, metrics } = await this.analyzePerformance();
      
      // Apply optimizations if score is below threshold
      if (overallScore < this.config.performanceThreshold * 100) {
        await this.applyPerformanceOptimizations(metrics);
      }
      
      // Generate report
      await this.generatePerformanceReport(metrics);
      
      this.log(`✅ Performance analysis cycle completed. Score: ${overallScore.toFixed(2)}/100`);
      
    } catch (error) {
      this.log(`❌ Performance analysis cycle failed: ${error.message}`, 'ERROR');
    }
  }

  async start() {
    this.log('🚀 Performance Intelligence starting...');
    
    // Run immediately
    await this.run();
    
    // Schedule periodic runs
    setInterval(async () => {
      await this.run();
    }, this.config.interval);
    
    this.log(`⏰ Scheduled to run every ${this.config.interval / 1000} seconds`);
  }
}

// Start the automation if this file is run directly
if (require.main === module) {
  const performance = new PerformanceIntelligence();
  performance.start().catch(error => {
    console.error('❌ Failed to start Performance Intelligence:', error);
    process.exit(1);
  });
}

module.exports = PerformanceIntelligence;