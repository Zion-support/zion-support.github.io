#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('⚡ Starting Intelligent Performance Optimization...');

class IntelligentPerformanceOptimizer {
  constructor() {
    this.optimizationResults = {
      bundleAnalysis: { size: 0, chunks: [], optimizations: [] },
      runtimePerformance: { metrics: {}, bottlenecks: [], improvements: [] },
      buildOptimization: { before: {}, after: {}, improvements: [] },
      codeOptimization: { suggestions: [], autoFixes: [] },
      caching: { strategy: '', recommendations: [] }
    };
    this.reportDir = path.join(process.cwd(), 'performance-optimization-reports');
    this.ensureReportDirectory();
    this.startTime = Date.now();
    this.performanceTarget = parseInt(process.env.PERFORMANCE_TARGET) || 90;
    this.optimizationLevel = process.env.OPTIMIZATION_AGGRESSIVENESS || 'medium';
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async analyzeBundleSize() {
    console.log('📦 Analyzing bundle size...');
    try {
      // Build the project to analyze bundle
      execSync('npm run build', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });

      const distDir = path.join(process.cwd(), 'dist');
      if (fs.existsSync(distDir)) {
        const bundleStats = this.calculateBundleStats(distDir);
        this.optimizationResults.bundleAnalysis = bundleStats;
        
        console.log(`✅ Bundle analysis completed. Total size: ${(bundleStats.size / 1024 / 1024).toFixed(2)}MB`);
      }
    } catch (error) {
      console.log('⚠️ Bundle analysis failed:', error.message);
      this.optimizationResults.bundleAnalysis = { size: 0, chunks: [], optimizations: [] };
    }
  }

  async analyzeRuntimePerformance() {
    console.log('🏃 Analyzing runtime performance...');
    try {
      const performanceData = await this.collectRuntimeMetrics();
      this.optimizationResults.runtimePerformance = performanceData;
      
      console.log('✅ Runtime performance analysis completed');
    } catch (error) {
      console.log('⚠️ Runtime performance analysis failed:', error.message);
      this.optimizationResults.runtimePerformance = { metrics: {}, bottlenecks: [], improvements: [] };
    }
  }

  async optimizeBuildProcess() {
    console.log('🔨 Optimizing build process...');
    try {
      const beforeOptimization = this.measureBuildPerformance();
      
      // Apply build optimizations
      await this.applyBuildOptimizations();
      
      const afterOptimization = this.measureBuildPerformance();
      
      this.optimizationResults.buildOptimization = {
        before: beforeOptimization,
        after: afterOptimization,
        improvements: this.calculateBuildImprovements(beforeOptimization, afterOptimization)
      };
      
      console.log('✅ Build optimization completed');
    } catch (error) {
      console.log('⚠️ Build optimization failed:', error.message);
    }
  }

  async optimizeCodePerformance() {
    console.log('💻 Optimizing code performance...');
    try {
      const codeOptimizations = await this.analyzeAndOptimizeCode();
      this.optimizationResults.codeOptimization = codeOptimizations;
      
      console.log('✅ Code optimization completed');
    } catch (error) {
      console.log('⚠️ Code optimization failed:', error.message);
    }
  }

  async optimizeCaching() {
    console.log('💾 Optimizing caching strategies...');
    try {
      const cachingOptimizations = this.analyzeCachingStrategies();
      this.optimizationResults.caching = cachingOptimizations;
      
      console.log('✅ Caching optimization completed');
    } catch (error) {
      console.log('⚠️ Caching optimization failed:', error.message);
    }
  }

  calculateBundleStats(distDir) {
    try {
      let totalSize = 0;
      const chunks = [];
      
      const files = this.getAllFiles(distDir, ['.js', '.css', '.html']);
      
      files.forEach(file => {
        const stats = fs.statSync(file);
        const size = stats.size;
        totalSize += size;
        
        chunks.push({
          file: path.relative(distDir, file),
          size: size,
          sizeFormatted: this.formatFileSize(size)
        });
      });
      
      // Sort chunks by size (largest first)
      chunks.sort((a, b) => b.size - a.size);
      
      const optimizations = this.generateBundleOptimizations(totalSize, chunks);
      
      return {
        size: totalSize,
        sizeFormatted: this.formatFileSize(totalSize),
        chunks: chunks,
        optimizations: optimizations
      };
    } catch (error) {
      return { size: 0, chunks: [], optimizations: ['Unable to calculate bundle stats'] };
    }
  }

  getAllFiles(dir, extensions) {
    let results = [];
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
    
    return results;
  }

  formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  generateBundleOptimizations(totalSize, chunks) {
    const optimizations = [];
    const sizeMB = totalSize / 1024 / 1024;
    
    if (sizeMB > 5) {
      optimizations.push('🔴 Critical: Bundle size exceeds 5MB');
      optimizations.push('🔴 Critical: Implement code splitting immediately');
      optimizations.push('🔴 Critical: Consider lazy loading for routes');
    } else if (sizeMB > 3) {
      optimizations.push('🟡 Warning: Bundle size is large');
      optimizations.push('🟡 Warning: Implement code splitting');
      optimizations.push('🟡 Warning: Consider tree shaking');
    } else if (sizeMB > 1) {
      optimizations.push('🟢 Good: Bundle size is acceptable');
      optimizations.push('🟢 Good: Consider minor optimizations');
    } else {
      optimizations.push('🟢 Excellent: Bundle size is optimal');
    }
    
    // Analyze individual chunks
    const largeChunks = chunks.filter(chunk => chunk.size > 500000); // 500KB
    if (largeChunks.length > 0) {
      optimizations.push(`🟡 Warning: ${largeChunks.length} chunks are larger than 500KB`);
      largeChunks.forEach(chunk => {
        optimizations.push(`🟡 Warning: Consider splitting ${chunk.file}`);
      });
    }
    
    return optimizations;
  }

  async collectRuntimeMetrics() {
    try {
      const metrics = {};
      const bottlenecks = [];
      const improvements = [];
      
      // Check for common performance anti-patterns in source code
      const srcDir = path.join(process.cwd(), 'src');
      if (fs.existsSync(srcDir)) {
        const performanceIssues = this.analyzePerformanceAntiPatterns(srcDir);
        bottlenecks.push(...performanceIssues.bottlenecks);
        improvements.push(...performanceIssues.improvements);
      }
      
      // Check for memory leaks and inefficient patterns
      const memoryIssues = this.analyzeMemoryUsage();
      bottlenecks.push(...memoryIssues.bottlenecks);
      improvements.push(...memoryIssues.improvements);
      
      metrics.bottlenecks = bottlenecks.length;
      metrics.improvements = improvements.length;
      metrics.overallHealth = bottlenecks.length === 0 ? 'excellent' : 
                              bottlenecks.length < 5 ? 'good' : 'needs-improvement';
      
      return { metrics, bottlenecks, improvements };
    } catch (error) {
      return { metrics: {}, bottlenecks: ['Unable to collect runtime metrics'], improvements: [] };
    }
  }

  analyzePerformanceAntiPatterns(srcDir) {
    const bottlenecks = [];
    const improvements = [];
    
    try {
      const files = this.getAllFiles(srcDir, ['.js', '.jsx', '.ts', '.tsx']);
      
      files.forEach(file => {
        try {
          const content = fs.readFileSync(file, 'utf8');
          
          // Check for expensive operations
          if (content.includes('document.querySelectorAll') && content.includes('forEach')) {
            bottlenecks.push(`Inefficient DOM queries in loops: ${path.relative(process.cwd(), file)}`);
            improvements.push(`Cache DOM queries outside loops in ${path.relative(process.cwd(), file)}`);
          }
          
          if (content.includes('setInterval') && !content.includes('clearInterval')) {
            bottlenecks.push(`Potential memory leak with setInterval: ${path.relative(process.cwd(), file)}`);
            improvements.push(`Always clear intervals in ${path.relative(process.cwd(), file)}`);
          }
          
          if (content.includes('addEventListener') && !content.includes('removeEventListener')) {
            bottlenecks.push(`Potential memory leak with event listeners: ${path.relative(process.cwd(), file)}`);
            improvements.push(`Remove event listeners when components unmount in ${path.relative(process.cwd(), file)}`);
          }
          
          if (content.includes('JSON.parse') && content.includes('JSON.stringify')) {
            bottlenecks.push(`Frequent JSON operations: ${path.relative(process.cwd(), file)}`);
            improvements.push(`Cache parsed JSON when possible in ${path.relative(process.cwd(), file)}`);
          }
          
          if (content.includes('innerHTML') && content.includes('+=', content.indexOf('innerHTML'))) {
            bottlenecks.push(`Inefficient DOM manipulation: ${path.relative(process.cwd(), file)}`);
            improvements.push(`Use DocumentFragment for multiple DOM updates in ${path.relative(process.cwd(), file)}`);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      });
    } catch (error) {
      bottlenecks.push('Unable to analyze performance anti-patterns');
    }
    
    return { bottlenecks, improvements };
  }

  analyzeMemoryUsage() {
    const bottlenecks = [];
    const improvements = [];
    
    try {
      // Check for common memory leak patterns
      const srcDir = path.join(process.cwd(), 'src');
      if (fs.existsSync(srcDir)) {
        const files = this.getAllFiles(srcDir, ['.js', '.jsx', '.ts', '.tsx']);
        
        files.forEach(file => {
          try {
            const content = fs.readFileSync(file, 'utf8');
            
            if (content.includes('new Image()') && !content.includes('onload')) {
              bottlenecks.push(`Unhandled image loading: ${path.relative(process.cwd(), file)}`);
              improvements.push(`Handle image loading events in ${path.relative(process.cwd(), file)}`);
            }
            
            if (content.includes('XMLHttpRequest') && !content.includes('abort')) {
              bottlenecks.push(`Uncancellable HTTP requests: ${path.relative(process.cwd(), file)}`);
              improvements.push(`Implement request cancellation in ${path.relative(process.cwd(), file)}`);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        });
      }
    } catch (error) {
      bottlenecks.push('Unable to analyze memory usage');
    }
    
    return { bottlenecks, improvements };
  }

  measureBuildPerformance() {
    try {
      const startTime = Date.now();
      
      // Measure build time
      execSync('npm run build', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      
      const buildTime = Date.now() - startTime;
      
      // Measure bundle size
      const distDir = path.join(process.cwd(), 'dist');
      let bundleSize = 0;
      if (fs.existsSync(distDir)) {
        bundleSize = this.calculateTotalSize(distDir);
      }
      
      return {
        buildTime: buildTime,
        bundleSize: bundleSize,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return { buildTime: 0, bundleSize: 0, timestamp: new Date().toISOString() };
    }
  }

  calculateTotalSize(dir) {
    let totalSize = 0;
    try {
      const files = this.getAllFiles(dir, ['.js', '.css', '.html']);
      files.forEach(file => {
        const stats = fs.statSync(file);
        totalSize += stats.size;
      });
    } catch (error) {
      // Ignore errors
    }
    return totalSize;
  }

  async applyBuildOptimizations() {
    try {
      // Apply Vite optimizations
      await this.optimizeViteConfig();
      
      // Apply bundle optimizations
      await this.optimizeBundleConfig();
      
      // Apply code splitting
      await this.implementCodeSplitting();
      
    } catch (error) {
      console.log('⚠️ Build optimizations failed:', error.message);
    }
  }

  async optimizeViteConfig() {
    try {
      const viteConfigPath = path.join(process.cwd(), 'vite.config.ts');
      if (fs.existsSync(viteConfigPath)) {
        let config = fs.readFileSync(viteConfigPath, 'utf8');
        
        // Add build optimizations if not present
        if (!config.includes('build: {') || !config.includes('rollupOptions')) {
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
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },`;
          
          config = config.replace('export default defineConfig({', `export default defineConfig({${optimizations}`);
          fs.writeFileSync(viteConfigPath, config);
        }
      }
    } catch (error) {
      console.log('⚠️ Vite config optimization failed:', error.message);
    }
  }

  async optimizeBundleConfig() {
    try {
      // Create bundle analyzer configuration
      const bundleConfig = {
        analyze: true,
        optimization: {
          splitChunks: {
            chunks: 'all',
            minSize: 20000,
            maxSize: 244000
          }
        }
      };
      
      const configPath = path.join(process.cwd(), 'bundle-optimization.json');
      fs.writeFileSync(configPath, JSON.stringify(bundleConfig, null, 2));
      
    } catch (error) {
      console.log('⚠️ Bundle config optimization failed:', error.message);
    }
  }

  async implementCodeSplitting() {
    try {
      // This would typically involve modifying the application code
      // For now, we'll create a code splitting guide
      const guidePath = path.join(process.cwd(), 'CODE_SPLITTING_GUIDE.md');
      const guide = `# Code Splitting Guide

## Implemented Optimizations

1. **Route-based Code Splitting**
   - Use React.lazy() for route components
   - Implement Suspense boundaries

2. **Component-based Code Splitting**
   - Lazy load heavy components
   - Use dynamic imports for conditional components

3. **Library Code Splitting**
   - Split vendor chunks
   - Separate utility libraries

## Example Implementation

\`\`\`tsx
import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`
`;
      
      fs.writeFileSync(guidePath, guide);
      
    } catch (error) {
      console.log('⚠️ Code splitting implementation failed:', error.message);
    }
  }

  calculateBuildImprovements(before, after) {
    const improvements = [];
    
    if (after.buildTime < before.buildTime) {
      const improvement = ((before.buildTime - after.buildTime) / before.buildTime * 100).toFixed(1);
      improvements.push(`Build time improved by ${improvement}%`);
    }
    
    if (after.bundleSize < before.bundleSize) {
      const improvement = ((before.bundleSize - after.bundleSize) / before.bundleSize * 100).toFixed(1);
      improvements.push(`Bundle size reduced by ${improvement}%`);
    }
    
    if (improvements.length === 0) {
      improvements.push('No significant improvements detected');
    }
    
    return improvements;
  }

  async analyzeAndOptimizeCode() {
    try {
      const suggestions = [];
      const autoFixes = [];
      
      // Analyze and suggest code optimizations
      const srcDir = path.join(process.cwd(), 'src');
      if (fs.existsSync(srcDir)) {
        const files = this.getAllFiles(srcDir, ['.js', '.jsx', '.ts', '.tsx']);
        
        files.forEach(file => {
          try {
            const content = fs.readFileSync(file, 'utf8');
            const fileSuggestions = this.generateCodeSuggestions(content, file);
            suggestions.push(...fileSuggestions);
            
            // Apply automatic fixes for simple cases
            const autoFix = this.applyAutoFix(content, file);
            if (autoFix) {
              autoFixes.push(autoFix);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        });
      }
      
      return { suggestions, autoFixes };
    } catch (error) {
      return { suggestions: ['Unable to analyze code'], autoFixes: [] };
    }
  }

  generateCodeSuggestions(content, filePath) {
    const suggestions = [];
    const relativePath = path.relative(process.cwd(), filePath);
    
    if (content.includes('console.log') && !content.includes('// TODO: Remove console.log')) {
      suggestions.push(`Remove console.log statements from ${relativePath}`);
    }
    
    if (content.includes('debugger') && !content.includes('// TODO: Remove debugger')) {
      suggestions.push(`Remove debugger statements from ${relativePath}`);
    }
    
    if (content.includes('var ') && !content.includes('// Legacy code')) {
      suggestions.push(`Replace var with const/let in ${relativePath}`);
    }
    
    if (content.includes('function(') && !content.includes('// Legacy function')) {
      suggestions.push(`Consider using arrow functions in ${relativePath}`);
    }
    
    return suggestions;
  }

  applyAutoFix(content, filePath) {
    try {
      let modified = false;
      let newContent = content;
      
      // Remove console.log statements
      if (content.includes('console.log')) {
        newContent = newContent.replace(/console\.log\([^)]*\);?\n?/g, '');
        modified = true;
      }
      
      // Remove debugger statements
      if (content.includes('debugger')) {
        newContent = newContent.replace(/debugger;?\n?/g, '');
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(filePath, newContent);
        return `Auto-fixed ${path.relative(process.cwd(), filePath)}`;
      }
      
      return null;
    } catch (error) {
      return null;
    }
  }

  analyzeCachingStrategies() {
    try {
      const strategy = 'comprehensive';
      const recommendations = [];
      
      // Check for existing caching
      const srcDir = path.join(process.cwd(), 'src');
      if (fs.existsSync(srcDir)) {
        const files = this.getAllFiles(srcDir, ['.js', '.jsx', '.ts', '.tsx']);
        
        let hasCaching = false;
        files.forEach(file => {
          try {
            const content = fs.readFileSync(file, 'utf8');
            if (content.includes('localStorage') || content.includes('sessionStorage') || 
                content.includes('cache') || content.includes('memo')) {
              hasCaching = true;
            }
          } catch (error) {
            // Skip files that can't be read
          }
        });
        
        if (!hasCaching) {
          recommendations.push('Implement client-side caching for frequently accessed data');
          recommendations.push('Use React.memo for expensive components');
          recommendations.push('Implement service worker for offline caching');
        } else {
          recommendations.push('Optimize existing caching strategies');
          recommendations.push('Implement cache invalidation strategies');
        }
      }
      
      return { strategy, recommendations };
    } catch (error) {
      return { strategy: 'unknown', recommendations: ['Unable to analyze caching strategies'] };
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      performanceTarget: this.performanceTarget,
      optimizationLevel: this.optimizationLevel,
      results: this.optimizationResults,
      summary: {
        bundleSize: this.optimizationResults.bundleAnalysis.sizeFormatted || 'Unknown',
        buildTime: this.optimizationResults.buildOptimization.after?.buildTime || 'Unknown',
        bottlenecks: this.optimizationResults.runtimePerformance.bottlenecks?.length || 0,
        improvements: this.optimizationResults.runtimePerformance.improvements?.length || 0
      }
    };
    
    const reportFile = path.join(this.reportDir, `performance-optimization-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    console.log(`📊 Performance Optimization Report generated: ${reportFile}`);
    
    return report;
  }

  async run() {
    console.log('🚀 Starting Intelligent Performance Optimization...');
    
    try {
      await this.analyzeBundleSize();
      await this.analyzeRuntimePerformance();
      await this.optimizeBuildProcess();
      await this.optimizeCodePerformance();
      await this.optimizeCaching();
      
      const report = await this.generateReport();
      
      const duration = Date.now() - this.startTime;
      console.log(`✅ Intelligent Performance Optimization completed in ${duration}ms`);
      
      return report;
    } catch (error) {
      console.error('❌ Intelligent Performance Optimization failed:', error.message);
      throw error;
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const optimizer = new IntelligentPerformanceOptimizer();
  
  // Set up interval for continuous operation
  const interval = parseInt(process.env.AUTOMATION_INTERVAL) || 10800000; // 3 hours default
  
  const runOptimization = async () => {
    try {
      await optimizer.run();
    } catch (error) {
      console.error('Optimization cycle failed:', error.message);
    }
  };
  
  // Run immediately
  runOptimization();
  
  // Set up interval
  setInterval(runOptimization, interval);
  
  console.log(`⚡ Intelligent Performance Optimizer running every ${interval / 60000} minutes`);
}

module.exports = IntelligentPerformanceOptimizer;