#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('⚡ Starting Smart Performance Profiler...');

class SmartPerformanceProfiler {
  constructor() {
    this.performanceMetrics = {
      buildPerformance: {},
      bundleAnalysis: {},
      runtimeMetrics: {},
      optimizationOpportunities: [],
      performanceScore: 0
    };
    this.reportDir = path.join(process.cwd(), 'performance-reports');
    this.ensureReportDirectory();
    this.startTime = Date.now();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async profilePerformance() {
    try {
      console.log('📊 Profiling application performance...');
      
      // Analyze build performance
      await this.analyzeBuildPerformance();
      
      // Analyze bundle size and composition
      await this.analyzeBundleSize();
      
      // Check runtime performance patterns
      await this.analyzeRuntimePerformance();
      
      // Identify optimization opportunities
      await this.identifyOptimizationOpportunities();
      
      // Calculate overall performance score
      await this.calculatePerformanceScore();
      
      // Generate comprehensive report
      await this.generateReport();
      
      console.log('✅ Smart Performance Profiler completed successfully');
      
    } catch (error) {
      console.error('❌ Smart Performance Profiler failed:', error.message);
      throw error;
    }
  }

  async analyzeBuildPerformance() {
    console.log('🏗️  Analyzing build performance...');
    
    try {
      const buildStartTime = Date.now();
      
      // Run build with timing
      const buildOutput = execSync('npm run build', { 
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd()
      });
      
      const buildDuration = Date.now() - buildStartTime;
      
      this.performanceMetrics.buildPerformance = {
        buildTime: buildDuration,
        buildTimeFormatted: this.formatDuration(buildDuration),
        buildOutput: buildOutput,
        status: 'success'
      };
      
      console.log(`✅ Build completed in ${this.formatDuration(buildDuration)}`);
      
      // Check if dist folder was created
      const distPath = path.join(process.cwd(), 'dist');
      if (fs.existsSync(distPath)) {
        const distStats = fs.statSync(distPath);
        this.performanceMetrics.buildPerformance.distSize = this.formatBytes(this.getDirectorySize(distPath));
        this.performanceMetrics.buildPerformance.buildDate = distStats.mtime;
      }
      
    } catch (error) {
      this.performanceMetrics.buildPerformance = {
        buildTime: 0,
        buildTimeFormatted: '0ms',
        status: 'failed',
        error: error.message
      };
      console.log('❌ Build failed:', error.message);
    }
  }

  async analyzeBundleSize() {
    console.log('📦 Analyzing bundle size and composition...');
    
    try {
      const distPath = path.join(process.cwd(), 'dist');
      if (!fs.existsSync(distPath)) {
        console.log('⚠️  Dist folder not found, skipping bundle analysis');
        return;
      }
      
      const bundleFiles = this.getBundleFiles(distPath);
      let totalSize = 0;
      const fileAnalysis = [];
      
      for (const file of bundleFiles) {
        const stats = fs.statSync(file);
        const size = stats.size;
        totalSize += size;
        
        const relativePath = path.relative(distPath, file);
        const fileType = this.getFileType(file);
        
        fileAnalysis.push({
          name: relativePath,
          size: size,
          sizeFormatted: this.formatBytes(size),
          type: fileType,
          compressionRatio: this.estimateCompressionRatio(fileType, size)
        });
      }
      
      // Sort files by size (largest first)
      fileAnalysis.sort((a, b) => b.size - a.size);
      
      this.performanceMetrics.bundleAnalysis = {
        totalSize: totalSize,
        totalSizeFormatted: this.formatBytes(totalSize),
        fileCount: bundleFiles.length,
        files: fileAnalysis,
        largestFiles: fileAnalysis.slice(0, 5), // Top 5 largest files
        sizeDistribution: this.calculateSizeDistribution(fileAnalysis)
      };
      
      console.log(`📊 Total bundle size: ${this.formatBytes(totalSize)}`);
      console.log(`📁 Total files: ${bundleFiles.length}`);
      
    } catch (error) {
      console.log('⚠️  Bundle analysis failed:', error.message);
    }
  }

  getBundleFiles(dirPath) {
    const files = [];
    
    function traverse(currentPath) {
      const items = fs.readdirSync(currentPath);
      
      for (const item of items) {
        const fullPath = path.join(currentPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          traverse(fullPath);
        } else if (stat.isFile()) {
          files.push(fullPath);
        }
      }
    }
    
    traverse(dirPath);
    return files;
  }

  getFileType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    
    if (ext === '.js') return 'javascript';
    if (ext === '.css') return 'css';
    if (ext === '.html') return 'html';
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif' || ext === '.svg') return 'image';
    if (ext === '.woff' || ext === '.woff2' || ext === '.ttf' || ext === '.eot') return 'font';
    if (ext === '.map') return 'source-map';
    
    return 'other';
  }

  estimateCompressionRatio(fileType, size) {
    // Estimate compression ratios for different file types
    const ratios = {
      'javascript': 0.7,  // JavaScript typically compresses to ~70%
      'css': 0.6,         // CSS typically compresses to ~60%
      'html': 0.5,        // HTML typically compresses to ~50%
      'image': 0.9,       // Images are usually already compressed
      'font': 0.8,        // Fonts compress moderately
      'source-map': 0.3,  // Source maps compress very well
      'other': 0.7        // Default compression ratio
    };
    
    return ratios[fileType] || 0.7;
  }

  calculateSizeDistribution(files) {
    const distribution = {
      javascript: { count: 0, totalSize: 0 },
      css: { count: 0, totalSize: 0 },
      html: { count: 0, totalSize: 0 },
      image: { count: 0, totalSize: 0 },
      font: { count: 0, totalSize: 0 },
      other: { count: 0, totalSize: 0 }
    };
    
    files.forEach(file => {
      const type = file.type;
      if (distribution[type]) {
        distribution[type].count++;
        distribution[type].totalSize += file.size;
      }
    });
    
    return distribution;
  }

  async analyzeRuntimePerformance() {
    console.log('🔄 Analyzing runtime performance patterns...');
    
    try {
      const srcPath = path.join(process.cwd(), 'src');
      if (!fs.existsSync(srcPath)) {
        console.log('⚠️  Source directory not found');
        return;
      }
      
      const performancePatterns = this.analyzePerformancePatterns(srcPath);
      
      this.performanceMetrics.runtimeMetrics = {
        patterns: performancePatterns,
        recommendations: this.generateRuntimeRecommendations(performancePatterns)
      };
      
      console.log(`🔍 Found ${performancePatterns.length} performance patterns`);
      
    } catch (error) {
      console.log('⚠️  Runtime performance analysis failed:', error.message);
    }
  }

  analyzePerformancePatterns(srcPath) {
    const patterns = [];
    const files = this.getAllFiles(srcPath, ['.ts', '.tsx', '.js', '.jsx']);
    
    for (const file of files) {
      const content = fs.readFileSync(file, 'utf8');
      const filePatterns = this.detectPerformancePatterns(content, file);
      patterns.push(...filePatterns);
    }
    
    return patterns;
  }

  detectPerformancePatterns(content, filePath) {
    const patterns = [];
    
    // Check for expensive operations in render
    const expensiveOperations = [
      { pattern: /\.map\(.*=>\s*\{[^}]*\}/g, type: 'array-mapping', severity: 'medium' },
      { pattern: /\.filter\(.*=>\s*\{[^}]*\}/g, type: 'array-filtering', severity: 'medium' },
      { pattern: /\.reduce\(.*=>\s*\{[^}]*\}/g, type: 'array-reduction', severity: 'medium' },
      { pattern: /JSON\.parse\(/g, type: 'json-parsing', severity: 'low' },
      { pattern: /JSON\.stringify\(/g, type: 'json-stringifying', severity: 'low' },
      { pattern: /new\s+Date\(/g, type: 'date-creation', severity: 'low' },
      { pattern: /Math\.random\(/g, type: 'random-generation', severity: 'low' }
    ];
    
    expensiveOperations.forEach(({ pattern, type, severity }) => {
      const matches = content.match(pattern);
      if (matches && matches.length > 2) {
        patterns.push({
          type,
          severity,
          file: filePath,
          count: matches.length,
          suggestion: this.getPerformanceSuggestion(type)
        });
      }
    });
    
    // Check for missing memoization
    const functionPatterns = [
      { pattern: /function\s+\w+\s*\([^)]*\)\s*\{[^}]*\}/g, type: 'function-definition' },
      { pattern: /const\s+\w+\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*\}/g, type: 'arrow-function' }
    ];
    
    functionPatterns.forEach(({ pattern, type }) => {
      const matches = content.match(pattern);
      if (matches && matches.length > 0) {
        // Check if useCallback or useMemo is used
        if (!content.includes('useCallback') && !content.includes('useMemo')) {
          patterns.push({
            type: 'missing-memoization',
            severity: 'medium',
            file: filePath,
            count: matches.length,
            suggestion: 'Consider using useCallback or useMemo for expensive functions'
          });
        }
      }
    });
    
    return patterns;
  }

  getPerformanceSuggestion(type) {
    const suggestions = {
      'array-mapping': 'Consider memoizing array operations or moving them outside render',
      'array-filtering': 'Consider memoizing filtered results or using useMemo',
      'array-reduction': 'Consider memoizing reduced results or using useMemo',
      'json-parsing': 'Consider caching parsed JSON results',
      'json-stringifying': 'Consider caching stringified results',
      'date-creation': 'Consider caching date objects or using constants',
      'random-generation': 'Consider caching random values if they don\'t need to change'
    };
    
    return suggestions[type] || 'Consider optimizing this operation';
  }

  generateRuntimeRecommendations(patterns) {
    const recommendations = [];
    
    const patternCounts = patterns.reduce((acc, pattern) => {
      acc[pattern.type] = (acc[pattern.type] || 0) + pattern.count;
      return acc;
    }, {});
    
    Object.entries(patternCounts).forEach(([type, count]) => {
      if (count > 5) {
        recommendations.push({
          priority: 'high',
          action: `Optimize ${type}`,
          description: `Found ${count} instances of ${type} that could be optimized`,
          suggestion: this.getPerformanceSuggestion(type)
        });
      }
    });
    
    return recommendations;
  }

  async identifyOptimizationOpportunities() {
    console.log('💡 Identifying optimization opportunities...');
    
    const opportunities = [];
    
    // Bundle size optimization
    if (this.performanceMetrics.bundleAnalysis.totalSize > 1024 * 1024) { // > 1MB
      opportunities.push({
        type: 'bundle-size',
        priority: 'high',
        description: 'Bundle size is larger than 1MB',
        suggestion: 'Consider code splitting, tree shaking, and lazy loading',
        impact: 'high'
      });
    }
    
    // Large JavaScript files
    const largeJSFiles = this.performanceMetrics.bundleAnalysis.files
      .filter(f => f.type === 'javascript' && f.size > 100 * 1024); // > 100KB
    
    if (largeJSFiles.length > 0) {
      opportunities.push({
        type: 'large-js-files',
        priority: 'medium',
        description: `Found ${largeJSFiles.length} JavaScript files larger than 100KB`,
        suggestion: 'Consider code splitting and lazy loading for large components',
        impact: 'medium'
      });
    }
    
    // Build time optimization
    if (this.performanceMetrics.buildPerformance.buildTime > 30000) { // > 30 seconds
      opportunities.push({
        type: 'build-time',
        priority: 'medium',
        description: 'Build time is longer than 30 seconds',
        suggestion: 'Consider optimizing build configuration and using build caching',
        impact: 'medium'
      });
    }
    
    // Performance patterns
    const highSeverityPatterns = this.performanceMetrics.runtimeMetrics.patterns
      .filter(p => p.severity === 'high');
    
    if (highSeverityPatterns.length > 0) {
      opportunities.push({
        type: 'runtime-performance',
        priority: 'high',
        description: `Found ${highSeverityPatterns.length} high-severity performance issues`,
        suggestion: 'Address performance bottlenecks in critical components',
        impact: 'high'
      });
    }
    
    this.performanceMetrics.optimizationOpportunities = opportunities;
  }

  async calculatePerformanceScore() {
    console.log('📊 Calculating performance score...');
    
    let score = 100;
    
    // Bundle size scoring (40% weight)
    const bundleSize = this.performanceMetrics.bundleAnalysis.totalSize || 0;
    if (bundleSize > 2 * 1024 * 1024) score -= 20;        // > 2MB
    else if (bundleSize > 1024 * 1024) score -= 10;        // > 1MB
    else if (bundleSize > 500 * 1024) score -= 5;          // > 500KB
    
    // Build time scoring (20% weight)
    const buildTime = this.performanceMetrics.buildPerformance.buildTime || 0;
    if (buildTime > 60000) score -= 15;                     // > 1 minute
    else if (buildTime > 30000) score -= 10;                // > 30 seconds
    else if (buildTime > 15000) score -= 5;                 // > 15 seconds
    
    // Performance patterns scoring (30% weight)
    const patterns = this.performanceMetrics.runtimeMetrics.patterns || [];
    const highSeverity = patterns.filter(p => p.severity === 'high').length;
    const mediumSeverity = patterns.filter(p => p.severity === 'medium').length;
    
    score -= highSeverity * 5;                              // High severity issues
    score -= mediumSeverity * 2;                            // Medium severity issues
    
    // Optimization opportunities scoring (10% weight)
    const opportunities = this.performanceMetrics.optimizationOpportunities || [];
    const highPriority = opportunities.filter(o => o.priority === 'high').length;
    const mediumPriority = opportunities.filter(o => o.priority === 'medium').length;
    
    score -= highPriority * 3;                              // High priority opportunities
    score -= mediumPriority * 1;                            // Medium priority opportunities
    
    this.performanceMetrics.performanceScore = Math.max(0, score);
    
    console.log(`📈 Performance Score: ${score}/100`);
  }

  formatDuration(ms) {
    if (ms < 1000) return `${ms}ms`;
    if (ms < 60000) return `${(ms / 1000).toFixed(1)}s`;
    return `${(ms / 60000).toFixed(1)}m`;
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    
    function calculateSize(currentPath) {
      const items = fs.readdirSync(currentPath);
      
      for (const item of items) {
        const fullPath = path.join(currentPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          calculateSize(fullPath);
        } else {
          totalSize += stat.size;
        }
      }
    }
    
    calculateSize(dirPath);
    return totalSize;
  }

  getAllFiles(dirPath, extensions) {
    const files = [];
    
    function traverse(currentPath) {
      const items = fs.readdirSync(currentPath);
      
      for (const item of items) {
        const fullPath = path.join(currentPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          traverse(fullPath);
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    }
    
    traverse(dirPath);
    return files;
  }

  async generateReport() {
    console.log('📋 Generating performance report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      performanceMetrics: this.performanceMetrics,
      summary: {
        performanceScore: this.performanceMetrics.performanceScore,
        totalBundleSize: this.performanceMetrics.bundleAnalysis.totalSizeFormatted,
        buildTime: this.performanceMetrics.buildPerformance.buildTimeFormatted,
        totalIssues: this.performanceMetrics.runtimeMetrics.patterns.length,
        optimizationOpportunities: this.performanceMetrics.optimizationOpportunities.length,
        executionTime: Date.now() - this.startTime
      },
      recommendations: this.generatePerformanceRecommendations()
    };
    
    const reportPath = path.join(this.reportDir, `performance-profile-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Also save to root for PM2 monitoring
    const rootReportPath = path.join(process.cwd(), 'smart-performance-report.json');
    fs.writeFileSync(rootReportPath, JSON.stringify(report, null, 2));
    
    console.log(`✅ Performance report saved to ${reportPath}`);
    console.log(`✅ Root report saved to ${rootReportPath}`);
  }

  generatePerformanceRecommendations() {
    const recommendations = [];
    
    if (this.performanceMetrics.performanceScore < 70) {
      recommendations.push({
        priority: 'high',
        action: 'Performance Optimization Sprint',
        description: 'Schedule dedicated time to address performance issues',
        estimatedEffort: '2-3 days'
      });
    }
    
    if (this.performanceMetrics.bundleAnalysis.totalSize > 1024 * 1024) {
      recommendations.push({
        priority: 'medium',
        action: 'Bundle Size Reduction',
        description: 'Implement code splitting and lazy loading',
        estimatedEffort: '1-2 days'
      });
    }
    
    if (this.performanceMetrics.buildPerformance.buildTime > 30000) {
      recommendations.push({
        priority: 'medium',
        action: 'Build Optimization',
        description: 'Optimize build configuration and implement caching',
        estimatedEffort: '1 day'
      });
    }
    
    return recommendations;
  }
}

// Main execution
async function main() {
  const profiler = new SmartPerformanceProfiler();
  await profiler.profilePerformance();
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = SmartPerformanceProfiler;