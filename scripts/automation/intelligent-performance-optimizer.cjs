#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Intelligent Performance Optimizer Automation...');

// Get automation interval from environment variable (default: 2 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 7200000; // 2 hours

class IntelligentPerformanceOptimizer {
  constructor() {
    this.optimizationResults = {
      bundleAnalysis: {},
      componentPerformance: [],
      imageOptimization: [],
      codeSplitting: [],
      cachingStrategies: [],
      performanceMetrics: {},
      recommendations: []
    };
    this.reportDir = path.join(process.cwd(), 'performance-optimization-reports');
    this.ensureReportDirectory();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async optimizePerformance() {
    try {
      console.log(`🚀 Running Intelligent Performance Optimization at ${new Date().toISOString()}`);
      
      // Analyze bundle size and composition
      await this.analyzeBundleSize();
      
      // Analyze React component performance
      await this.analyzeComponentPerformance();
      
      // Check image optimization opportunities
      await this.analyzeImageOptimization();
      
      // Analyze code splitting opportunities
      await this.analyzeCodeSplitting();
      
      // Analyze caching strategies
      await this.analyzeCachingStrategies();
      
      // Run performance benchmarks
      await this.runPerformanceBenchmarks();
      
      // Generate optimization recommendations
      await this.generateOptimizationRecommendations();
      
      // Generate comprehensive report
      await this.generateOptimizationReport();
      
      console.log('✅ Intelligent Performance Optimization completed successfully');
      
    } catch (error) {
      console.error('❌ Intelligent Performance Optimization failed:', error.message);
    }
  }

  async analyzeBundleSize() {
    console.log('📦 Analyzing bundle size and composition...');
    
    try {
      // Build the project to analyze bundle
      console.log('🏗️  Building project for bundle analysis...');
      execSync('npm run build', { stdio: 'pipe' });
      
      const distPath = path.join(process.cwd(), 'dist');
      if (!fs.existsSync(distPath)) {
        console.log('⚠️  Build failed - cannot analyze bundle');
        return;
      }
      
      // Analyze JavaScript bundle sizes
      const jsFiles = this.findFiles(distPath, ['.js']);
      let totalJsSize = 0;
      const jsFileSizes = {};
      
      jsFiles.forEach(file => {
        const stats = fs.statSync(file);
        const sizeInKB = Math.round(stats.size / 1024);
        totalJsSize += sizeInKB;
        jsFileSizes[path.basename(file)] = sizeInKB;
      });
      
      // Analyze CSS bundle sizes
      const cssFiles = this.findFiles(distPath, ['.css']);
      let totalCssSize = 0;
      const cssFileSizes = {};
      
      cssFiles.forEach(file => {
        const stats = fs.statSync(file);
        const sizeInKB = Math.round(stats.size / 1024);
        totalCssSize += sizeInKB;
        cssFileSizes[path.basename(file)] = sizeInKB;
      });
      
      // Check for large files that could be optimized
      const largeFiles = [];
      Object.entries(jsFileSizes).forEach(([file, size]) => {
        if (size > 500) { // Files larger than 500KB
          largeFiles.push({ file, size, type: 'JavaScript' });
        }
      });
      
      Object.entries(cssFileSizes).forEach(([file, size]) => {
        if (size > 100) { // CSS files larger than 100KB
          largeFiles.push({ file, size, type: 'CSS' });
        }
      });
      
      this.optimizationResults.bundleAnalysis = {
        totalJsSize,
        totalCssSize,
        totalSize: totalJsSize + totalCssSize,
        jsFileSizes,
        cssFileSizes,
        largeFiles,
        recommendations: this.generateBundleRecommendations(totalJsSize, totalCssSize, largeFiles)
      };
      
      console.log(`✅ Bundle analysis complete: ${totalJsSize}KB JS, ${totalCssSize}KB CSS`);
      
    } catch (error) {
      console.log('⚠️  Could not analyze bundle size:', error.message);
    }
  }

  async analyzeComponentPerformance() {
    console.log('⚛️  Analyzing React component performance...');
    
    const srcPath = path.join(process.cwd(), 'src');
    if (!fs.existsSync(srcPath)) return;

    const componentFiles = this.findFiles(srcPath, ['.tsx', '.jsx']);
    
    componentFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      this.analyzeComponentPerformancePatterns(content, file);
    });
  }

  analyzeComponentPerformancePatterns(content, filePath) {
    const issues = [];
    
    // Check for expensive operations in render
    if (content.includes('useMemo') && content.includes('useCallback')) {
      const hookCount = (content.match(/use[A-Z][a-zA-Z]*/g) || []).length;
      if (hookCount > 8) {
        issues.push({
          type: 'many-hooks',
          severity: 'medium',
          description: 'Component has many hooks - consider splitting',
          suggestion: 'Break down into smaller, focused components'
        });
      }
    }
    
    // Check for inline object/function creation
    const inlineObjects = (content.match(/style=\{\{[^}]*\}/g) || []).length;
    const inlineFunctions = (content.match(/onClick=\{\(\) =>/g) || []).length;
    
    if (inlineObjects > 3) {
      issues.push({
        type: 'inline-objects',
        severity: 'low',
        description: 'Many inline style objects detected',
        suggestion: 'Move styles to CSS classes or styled components'
      });
    }
    
    if (inlineFunctions > 5) {
      issues.push({
        type: 'inline-functions',
        severity: 'medium',
        description: 'Many inline functions detected',
        suggestion: 'Use useCallback or move functions outside component'
      });
    }
    
    // Check for unnecessary re-renders
    if (content.includes('useState') && content.includes('useEffect')) {
      const stateCount = (content.match(/useState/g) || []).length;
      const effectCount = (content.match(/useEffect/g) || []).length;
      
      if (stateCount > 5) {
        issues.push({
          type: 'many-state',
          severity: 'medium',
          description: 'Component has many state variables',
          suggestion: 'Consider using useReducer or combining related state'
        });
      }
      
      if (effectCount > 3) {
        issues.push({
          type: 'many-effects',
          severity: 'medium',
          description: 'Component has many effects',
          suggestion: 'Combine related effects or extract logic to custom hooks'
        });
      }
    }
    
    if (issues.length > 0) {
      this.optimizationResults.componentPerformance.push({
        file: path.relative(process.cwd(), filePath),
        issues,
        score: this.calculateComponentScore(issues)
      });
    }
  }

  calculateComponentScore(issues) {
    const severityScores = { critical: 10, high: 7, medium: 4, low: 1 };
    const totalScore = issues.reduce((sum, issue) => sum + severityScores[issue.severity], 0);
    const maxPossibleScore = issues.length * 10;
    return Math.round(((maxPossibleScore - totalScore) / maxPossibleScore) * 100);
  }

  async analyzeImageOptimization() {
    console.log('🖼️  Analyzing image optimization opportunities...');
    
    const publicPath = path.join(process.cwd(), 'public');
    const srcPath = path.join(process.cwd(), 'src');
    
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const imageFiles = [];
    
    // Find images in public directory
    if (fs.existsSync(publicPath)) {
      imageFiles.push(...this.findFiles(publicPath, imageExtensions));
    }
    
    // Find images in src directory
    if (fs.existsSync(srcPath)) {
      imageFiles.push(...this.findFiles(srcPath, imageExtensions));
    }
    
    imageFiles.forEach(file => {
      const stats = fs.statSync(file);
      const sizeInKB = Math.round(stats.size / 1024);
      const extension = path.extname(file).toLowerCase();
      
      if (sizeInKB > 100) { // Images larger than 100KB
        this.optimizationResults.imageOptimization.push({
          file: path.relative(process.cwd(), file),
          size: sizeInKB,
          extension,
          recommendations: this.generateImageOptimizationRecommendations(extension, sizeInKB)
        });
      }
    });
  }

  generateImageOptimizationRecommendations(extension, size) {
    const recommendations = [];
    
    if (extension === '.png' && size > 100) {
      recommendations.push('Convert to WebP format for better compression');
      recommendations.push('Consider using responsive images with srcset');
    }
    
    if (extension === '.jpg' && size > 200) {
      recommendations.push('Optimize JPEG quality (80-85% is usually sufficient)');
      recommendations.push('Consider progressive JPEG loading');
    }
    
    if (size > 500) {
      recommendations.push('Implement lazy loading for large images');
      recommendations.push('Consider using image CDN for optimization');
    }
    
    return recommendations;
  }

  async analyzeCodeSplitting() {
    console.log('🔀 Analyzing code splitting opportunities...');
    
    const srcPath = path.join(process.cwd(), 'src');
    if (!fs.existsSync(srcPath)) return;

    const componentFiles = this.findFiles(srcPath, ['.tsx', '.jsx']);
    
    // Check for large components that could be code-split
    componentFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      const lines = content.split('\n').length;
      
      if (lines > 200) { // Components with more than 200 lines
        this.optimizationResults.codeSplitting.push({
          file: path.relative(process.cwd(), file),
          lines,
          recommendation: 'Consider lazy loading this component with React.lazy()',
          priority: lines > 500 ? 'high' : 'medium'
        });
      }
    });
    
    // Check for route-based code splitting opportunities
    const routerFiles = componentFiles.filter(file => {
      const content = fs.readFileSync(file, 'utf8');
      return content.includes('Route') || content.includes('BrowserRouter');
    });
    
    if (routerFiles.length > 0) {
      this.optimizationResults.codeSplitting.push({
        type: 'route-splitting',
        files: routerFiles.map(f => path.relative(process.cwd(), f)),
        recommendation: 'Implement route-based code splitting for better performance',
        priority: 'high'
      });
    }
  }

  async analyzeCachingStrategies() {
    console.log('💾 Analyzing caching strategies...');
    
    // Check for service worker implementation
    const publicPath = path.join(process.cwd(), 'public');
    const srcPath = path.join(process.cwd(), 'src');
    
    const hasServiceWorker = 
      (fs.existsSync(publicPath) && this.findFiles(publicPath, ['sw.js', 'service-worker.js']).length > 0) ||
      (fs.existsSync(srcPath) && this.findFiles(srcPath, ['sw.js', 'service-worker.js']).length > 0);
    
    if (!hasServiceWorker) {
      this.optimizationResults.cachingStrategies.push({
        type: 'service-worker',
        status: 'missing',
        recommendation: 'Implement service worker for offline caching and performance',
        priority: 'medium'
      });
    }
    
    // Check for cache headers in build output
    const distPath = path.join(process.cwd(), 'dist');
    if (fs.existsSync(distPath)) {
      const hasCacheHeaders = this.checkCacheHeaders(distPath);
      if (!hasCacheHeaders) {
        this.optimizationResults.cachingStrategies.push({
          type: 'cache-headers',
          status: 'missing',
          recommendation: 'Configure proper cache headers for static assets',
          priority: 'low'
        });
      }
    }
  }

  checkCacheHeaders(distPath) {
    // This would typically check server configuration
    // For now, we'll assume it's not configured
    return false;
  }

  async runPerformanceBenchmarks() {
    console.log('📊 Running performance benchmarks...');
    
    try {
      // Check build time
      const buildStart = Date.now();
      execSync('npm run build', { stdio: 'pipe' });
      const buildTime = Date.now() - buildStart;
      
      // Check bundle analysis
      const bundleSize = this.optimizationResults.bundleAnalysis.totalSize || 0;
      
      // Calculate performance score
      const buildScore = buildTime < 30000 ? 100 : Math.max(0, 100 - (buildTime - 30000) / 1000);
      const bundleScore = bundleSize < 1000 ? 100 : Math.max(0, 100 - (bundleSize - 1000) / 10);
      const overallScore = Math.round((buildScore + bundleScore) / 2);
      
      this.optimizationResults.performanceMetrics = {
        buildTime,
        bundleSize,
        buildScore,
        bundleScore,
        overallScore,
        timestamp: new Date().toISOString()
      };
      
      console.log(`✅ Performance benchmarks: Build time ${buildTime}ms, Bundle size ${bundleSize}KB, Score ${overallScore}/100`);
      
    } catch (error) {
      console.log('⚠️  Could not run performance benchmarks:', error.message);
    }
  }

  generateBundleRecommendations(totalJsSize, totalCssSize, largeFiles) {
    const recommendations = [];
    
    if (totalJsSize > 1000) {
      recommendations.push('Bundle size is large - implement code splitting and tree shaking');
    }
    
    if (totalCssSize > 200) {
      recommendations.push('CSS bundle is large - consider CSS-in-JS or CSS modules');
    }
    
    if (largeFiles.length > 0) {
      recommendations.push(`Found ${largeFiles.length} large files that could be optimized`);
    }
    
    return recommendations;
  }

  async generateOptimizationRecommendations() {
    console.log('💡 Generating optimization recommendations...');
    
    const recommendations = [];
    
    // Bundle optimization
    if (this.optimizationResults.bundleAnalysis.totalSize > 1000) {
      recommendations.push({
        priority: 'high',
        category: 'bundle',
        action: 'Optimize bundle size through code splitting and tree shaking',
        impact: 'high'
      });
    }
    
    // Component optimization
    const lowScoreComponents = this.optimizationResults.componentPerformance.filter(c => c.score < 70);
    if (lowScoreComponents.length > 0) {
      recommendations.push({
        priority: 'medium',
        category: 'components',
        action: `Optimize ${lowScoreComponents.length} low-performance components`,
        impact: 'medium'
      });
    }
    
    // Image optimization
    if (this.optimizationResults.imageOptimization.length > 0) {
      recommendations.push({
        priority: 'medium',
        category: 'images',
        action: `Optimize ${this.optimizationResults.imageOptimization.length} large images`,
        impact: 'medium'
      });
    }
    
    // Code splitting
    if (this.optimizationResults.codeSplitting.length > 0) {
      recommendations.push({
        priority: 'high',
        category: 'code-splitting',
        action: 'Implement code splitting for better performance',
        impact: 'high'
      });
    }
    
    this.optimizationResults.recommendations = recommendations;
  }

  async generateOptimizationReport() {
    console.log('📊 Generating performance optimization report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        bundleSize: this.optimizationResults.bundleAnalysis.totalSize || 0,
        componentIssues: this.optimizationResults.componentPerformance.length,
        imageOptimizations: this.optimizationResults.imageOptimization.length,
        codeSplittingOpportunities: this.optimizationResults.codeSplitting.length,
        performanceScore: this.optimizationResults.performanceMetrics.overallScore || 0
      },
      details: this.optimizationResults,
      nextActions: this.generateNextActions(),
      status: 'completed'
    };
    
    const reportPath = path.join(this.reportDir, `performance-optimization-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`✅ Performance optimization report saved to ${reportPath}`);
    console.log(`📊 Performance Score: ${report.summary.performanceScore}/100`);
    
    // Log critical issues
    if (report.summary.performanceScore < 70) {
      console.log(`⚠️  PERFORMANCE: Low performance score detected!`);
    }
  }

  generateNextActions() {
    const actions = [];
    
    if (this.optimizationResults.bundleAnalysis.totalSize > 1000) {
      actions.push('📦 Optimize bundle size through code splitting');
    }
    
    if (this.optimizationResults.componentPerformance.length > 0) {
      actions.push('⚛️  Review and optimize low-performance components');
    }
    
    if (this.optimizationResults.imageOptimization.length > 0) {
      actions.push('🖼️  Optimize large images for better performance');
    }
    
    if (this.optimizationResults.codeSplitting.length > 0) {
      actions.push('🔀 Implement code splitting for better loading performance');
    }
    
    return actions;
  }

  findFiles(dir, extensions) {
    const files = [];
    
    const walkDir = (currentDir) => {
      const items = fs.readdirSync(currentDir);
      
      items.forEach(item => {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          walkDir(fullPath);
        } else if (stat.isFile() && extensions.some(ext => item.toLowerCase().endsWith(ext))) {
          files.push(fullPath);
        }
      });
    };
    
    walkDir(dir);
    return files;
  }
}

// Main execution
async function main() {
  const optimizer = new IntelligentPerformanceOptimizer();
  
  // Run initial optimization
  await optimizer.optimizePerformance();
  
  // Set up continuous optimization
  setInterval(async () => {
    await optimizer.optimizePerformance();
  }, AUTOMATION_INTERVAL);
  
  console.log(`🚀 Intelligent Performance Optimizer running continuously (${AUTOMATION_INTERVAL / 3600000} hour intervals)`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🚀 Intelligent Performance Optimizer shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🚀 Intelligent Performance Optimizer shutting down gracefully...');
  process.exit(0);
});

// Start the automation
main().catch(error => {
  console.error('❌ Intelligent Performance Optimizer failed to start:', error);
  process.exit(1);
});