#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AIPerformancePredictor {
  constructor() {
    this.workspaceRoot = '/workspace';
    this.reportFile = path.join(this.workspaceRoot,automation_logs,ai-performance-report.json');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.reportFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    console.log(`[AI Performance Predictor] ${message});
  }

  async analyzePerformance() {
    this.log('Starting AI-powered performance analysis...);
    
    const analysis = {
      timestamp: new Date().toISOString(),
      metrics: {},
      issues: [],
      predictions: [],
      recommendations: [],
      performanceScore: 0
    };

    try {
      // Analyze bundle size
      await this.analyzeBundleSize(analysis);
      
      // Analyze code patterns
      await this.analyzeCodePatterns(analysis);
      
      // Analyze images and assets
      await this.analyzeAssets(analysis);
      
      // Analyze dependencies
      await this.analyzeDependencies(analysis);
      
      // Analyze build configuration
      await this.analyzeBuildConfig(analysis);
      
      // Generate predictions
      this.generatePerformancePredictions(analysis);
      
      // Calculate performance score
      analysis.performanceScore = this.calculatePerformanceScore(analysis);
      
      // Generate recommendations
      this.generatePerformanceRecommendations(analysis);
      
      // Save report
      fs.writeFileSync(this.reportFile, JSON.stringify(analysis, null, 2));
      
      this.log(`Performance analysis complete. Score: ${analysis.performanceScore}/100`);
      this.log(`Report saved to: ${this.reportFile});
      
      return analysis;
    } catch (error) {
      this.log(`Error during performance analysis: ${error.message});
      analysis.error = error.message;
      return analysis;
    }
  }

  async analyzeBundleSize(analysis) {
    this.log('Analyzing bundle size...);
    
    try {
      // Run build to generate bundle
      execSync('npm run build, { 
        encoding: utf8, 
        cwd: this.workspaceRoot,
        stdio: pipe});
      
      // Check if dist directory exists
      const distDir = path.join(this.workspaceRoot,dist');
      if (fs.existsSync(distDir)) {
        const bundleSize = this.getDirectorySize(distDir);
        analysis.metrics.bundleSize = bundleSize;
        analysis.metrics.bundleSizeMB = (bundleSize / (1024 * 1024)).toFixed(2);
        
        // Check for large files
        const largeFiles = this.findLargeFiles(distDir, 100 * 1024); // 100KB threshold
        analysis.metrics.largeFiles = largeFiles.length;
        
        if (bundleSize > 2 * 1024 * 1024) { // 2MB threshold
          analysis.issues.push({
            type: bundle,
            severity: warning,
            message: Bundle size exceeds 2MB,
            impact: Slow initial load});
        }
      }
    } catch (error) {
      this.log('Build failed, skipping bundle analysis');
      analysis.metrics.bundleSize = 0;
    }
  }

  async analyzeCodePatterns(analysis) {
    this.log('Analyzing code patterns...);
    
    const srcDir = path.join(this.workspaceRoot,src');
    if (!fs.existsSync(srcDir)) {
      return;
    }
    
    const codeFiles = this.findFiles(srcDir, [.ts,.tsx,.js,.jsx]);
    let performanceIssues = 0;
    let totalLines = 0;
    
    codeFiles.forEach(file => {
      const content = fs.readFileSync(file,utf8);
      const lines = content.split('\n');
      totalLines += lines.length;
      
      // Check for performance anti-patterns
      if (content.includes('useEffect') && content.includes('[])) {
        performanceIssues++;
        analysis.issues.push({
          type: react,
          severity: info,
          file: path.relative(this.workspaceRoot, file),
          message: Empty dependency array in useEffect,
          impact: Potential stale closure});
      }
      
      if (content.includes('map(') && !content.includes('key=')) {
        performanceIssues++;
        analysis.issues.push({
          type: react,
          severity: warning,
          file: path.relative(this.workspaceRoot, file),
          message: Missing key prop in map function,
          impact: Inefficient re-renders});
      }
      
      if (content.includes('onClick') && content.includes('() =>')) {
        performanceIssues++;
        analysis.issues.push({
          type: react,
          severity: info,
          file: path.relative(this.workspaceRoot, file),
          message: Inline function in JSX,
          impact: Unnecessary re-renders});
      }
      
      if (content.includes('import * as')) {
        performanceIssues++;
        analysis.issues.push({
          type: import,
          severity: warning,
          file: path.relative(this.workspaceRoot, file),
          message: Wildcard import detected,
          impact: Larger bundle size});
      }
    });
    
    analysis.metrics.totalFiles = codeFiles.length;
    analysis.metrics.totalLines = totalLines;
    analysis.metrics.performanceIssues = performanceIssues;
  }

  async analyzeAssets(analysis) {
    this.log('Analyzing assets...);
    
    const publicDir = path.join(this.workspaceRoot,public');
    const srcDir = path.join(this.workspaceRoot,src');
    
    let totalAssetSize = 0;
    let imageCount = 0;
    let largeImages = 0;
    
    // Analyze public assets
    if (fs.existsSync(publicDir)) {
      const publicAssets = this.findFiles(publicDir, [.jpg,.jpeg,.png,.gif,.svg,.webp]);
      publicAssets.forEach(asset => {
        const size = fs.statSync(asset).size;
        totalAssetSize += size;
        
        if (asset.match(/\.(jpg|jpeg|png|gif)$/i)) {
          imageCount++;
          if (size > 500 * 1024) { // 500KB threshold
            largeImages++;
            analysis.issues.push({
              type: asset,
              severity: warning,
              file: path.relative(this.workspaceRoot, asset),
              message: Large image file,
              impact: Slow loading});
          }
        }
      });
    }
    
    // Analyze src assets
    if (fs.existsSync(srcDir)) {
      const srcAssets = this.findFiles(srcDir, [.jpg,.jpeg,.png,.gif,.svg,.webp]);
      srcAssets.forEach(asset => {
        const size = fs.statSync(asset).size;
        totalAssetSize += size;
        
        if (asset.match(/\.(jpg|jpeg|png|gif)$/i)) {
          imageCount++;
          if (size > 500 * 1024) {
            largeImages++;
          }
        }
      });
    }
    
    analysis.metrics.totalAssetSize = totalAssetSize;
    analysis.metrics.totalAssetSizeMB = (totalAssetSize / (1024 * 1024)).toFixed(2);
    analysis.metrics.imageCount = imageCount;
    analysis.metrics.largeImages = largeImages;
  }

  async analyzeDependencies(analysis) {
    this.log('Analyzing dependencies...);
    
    const packageJsonPath = path.join(this.workspaceRoot,package.json');
    if (!fs.existsSync(packageJsonPath)) {
      return;
    }
    
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath,utf8));
    const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
    
    const heavyDependencies = [lodash,moment,jquery,bootstrap,antd,material-ui];
    
    let heavyDepCount = 0;
    let totalDeps = Object.keys(dependencies).length;
    
    Object.keys(dependencies).forEach(dep => {
      if (heavyDependencies.includes(dep)) {
        heavyDepCount++;
        analysis.issues.push({
          type: dependency,
          severity: info,
          package: dep,
          message: Heavy dependency detected,
          impact: Larger bundle size});
      }
    });
    
    analysis.metrics.totalDependencies = totalDeps;
    analysis.metrics.heavyDependencies = heavyDepCount;
  }

  async analyzeBuildConfig(analysis) {
    this.log('Analyzing build configuration...);
    
    const configFiles = [vite.config.ts,next.config.js,webpack.config.js];
    let optimizationIssues = 0;
    
    configFiles.forEach(configFile => {
      const configPath = path.join(this.workspaceRoot, configFile);
      if (fs.existsSync(configPath)) {
        const content = fs.readFileSync(configPath,utf8);
        
        if (!content.includes('minify') && !content.includes('terser')) {
          optimizationIssues++;
          analysis.issues.push({
            type: build,
            severity: warning,
            file: configFile,
            message: Minification not configured,
            impact: Larger bundle size});
        }
        
        if (!content.includes('splitChunks') && !content.includes('chunk')) {
          optimizationIssues++;
          analysis.issues.push({
            type: build,
            severity: info,
            file: configFile,
            message: Code splitting not configured,
            impact: Slower initial load});
        }
      }
    });
    
    analysis.metrics.optimizationIssues = optimizationIssues;
  }

  generatePerformancePredictions(analysis) {
    // Predict loading time based on bundle size
    if (analysis.metrics.bundleSize) {
      const predictedLoadTime = Math.max(1, analysis.metrics.bundleSize / (1024 * 1024) * 2);
      analysis.predictions.push({
        metric: Initial Load Time,
        predicted: `${predictedLoadTime.toFixed(1)}s`,
        confidence: medium,
        basedOn: Bundle size});
    }
    
    // Predict Core Web Vitals
    if (analysis.metrics.largeImages > 0) {
      analysis.predictions.push({
        metric: Largest Contentful Paint,
        predicted: Poor,
        confidence: high,
        basedOn: Large images detected});
    }
    
    if (analysis.metrics.performanceIssues > 10) {
      analysis.predictions.push({
        metric: Cumulative Layout Shift,
        predicted: Poor,
        confidence: medium,
        basedOn: Code patterns});
    }
  }

  calculatePerformanceScore(analysis) {
    let score = 100;
    
    // Deduct points for issues
    analysis.issues.forEach(issue => {
      switch (issue.severity) {
        case 'warning:
          score -= 5;
          break;
        case 'info:
          score -= 2;
          break;
      }
    });
    
    // Deduct points for bundle size
    if (analysis.metrics.bundleSizeMB > 2) {
      score -= (analysis.metrics.bundleSizeMB - 2) * 10;
    }
    
    // Deduct points for large images
    if (analysis.metrics.largeImages > 0) {
      score -= analysis.metrics.largeImages * 5;
    }
    
    return Math.max(0, Math.min(100, score));
  }

  generatePerformanceRecommendations(analysis) {
    if (analysis.metrics.bundleSizeMB > 2) {
      analysis.recommendations.push({
        priority: high,
        category: bundle,
        message: Implement code splitting to reduce initial bundle size});
    }
    
    if (analysis.metrics.largeImages > 0) {
      analysis.recommendations.push({
        priority: high,
        category: assets,
        message: Optimize and compress images});
    }
    
    if (analysis.metrics.performanceIssues > 5) {
      analysis.recommendations.push({
        priority: medium,
        category: code,
        message: Optimize React component patterns});
    }
    
    analysis.recommendations.push({
      priority: medium,
      category: general,
      message: Implement lazy loading for components});
    
    analysis.recommendations.push({
      priority: low,
      category: monitoring,
      message: Set up performance monitoring});
  }

  findFiles(dir, extensions) {
    let files = [];
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files = files.concat(this.findFiles(fullPath, extensions));
      } else if (extensions.some(ext => item.toLowerCase().endsWith(ext))) {
        files.push(fullPath);
      }
    });
    
    return files;
  }

  findLargeFiles(dir, minSize) {
    let largeFiles = [];
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        largeFiles = largeFiles.concat(this.findLargeFiles(fullPath, minSize));
      } else if (stat.size > minSize) {
        largeFiles.push({
          file: path.relative(this.workspaceRoot, fullPath),
          size: stat.size,
          sizeMB: (stat.size / (1024 * 1024)).toFixed(2)
        });
      }
    });
    
    return largeFiles;
  }

  getDirectorySize(dir) {
    let size = 0;
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        size += this.getDirectorySize(fullPath);
      } else {
        size += stat.size;
      }
    });
    
    return size;
  }
}

// CLI interface
if (require.main === module) {
  const predictor = new AIPerformancePredictor();
  predictor.analyzePerformance().catch(console.error);
}

module.exports = AIPerformancePredictor;