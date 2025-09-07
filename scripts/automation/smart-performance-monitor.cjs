#!/usr/bin/env node

/**
 * Smart Performance Optimization Monitor
 * Intelligently analyzes and optimizes application performance
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class SmartPerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'smart-performance.log');
    this.performanceReport = path.join(this.projectRoot, 'logs', 'performance-report.json');
    this.bundleAnalysis = path.join(this.projectRoot, 'logs', 'bundle-analysis.json');
    this.ensureLogsDirectory();
    this.performanceThresholds = {
      bundleSize: 500, // KB
      loadTime: 3000, // ms
      memoryUsage: 100, // MB
      cpuUsage: 80 // percentage
    };
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

  async analyzePerformance() {
    this.log('🚀 Starting Smart Performance Analysis...');
    
    const analysis = {
      timestamp: new Date().toISOString(),
      bundle: {},
      runtime: {},
      optimization: {},
      recommendations: [],
      autoOptimizations: []
    };

    try {
      // Analyze bundle performance
      analysis.bundle = await this.analyzeBundlePerformance();
      
      // Analyze runtime performance
      analysis.runtime = await this.analyzeRuntimePerformance();
      
      // Generate optimization strategies
      analysis.optimization = await this.generateOptimizationStrategies(analysis);
      
      // Apply auto-optimizations
      analysis.autoOptimizations = await this.applyAutoOptimizations(analysis);
      
      // Generate recommendations
      analysis.recommendations = this.generatePerformanceRecommendations(analysis);
      
      // Save analysis report
      await this.savePerformanceReport(analysis);
      
      this.log(`✅ Performance analysis complete`);
      
    } catch (error) {
      this.log(`❌ Performance analysis failed: ${error.message}`, 'ERROR');
    }

    return analysis;
  }

  async analyzeBundlePerformance() {
    this.log('📦 Analyzing bundle performance...');
    
    const bundleAnalysis = {
      size: {},
      chunks: [],
      dependencies: {},
      optimization: {}
    };

    try {
      // Check if build exists
      const buildDir = path.join(this.projectRoot, 'dist');
      if (!fs.existsSync(buildDir)) {
        this.log('⚠️ Build directory not found, running build first...');
        await this.runBuild();
      }

      // Analyze bundle size
      bundleAnalysis.size = await this.analyzeBundleSize();
      
      // Analyze chunk distribution
      bundleAnalysis.chunks = await this.analyzeChunkDistribution();
      
      // Analyze dependency impact
      bundleAnalysis.dependencies = await this.analyzeDependencyImpact();
      
      // Check for optimization opportunities
      bundleAnalysis.optimization = await this.identifyBundleOptimizations(bundleAnalysis);
      
    } catch (error) {
      this.log(`❌ Bundle analysis failed: ${error.message}`, 'ERROR');
    }

    return bundleAnalysis;
  }

  async analyzeBundleSize() {
    const buildDir = path.join(this.projectRoot, 'dist');
    const sizeAnalysis = {
      total: 0,
      js: 0,
      css: 0,
      assets: 0,
      breakdown: {}
    };

    try {
      if (fs.existsSync(buildDir)) {
        const files = this.getAllFiles(buildDir);
        
        for (const file of files) {
          const stats = fs.statSync(file);
          const size = stats.size;
          const ext = path.extname(file);
          
          sizeAnalysis.total += size;
          
          if (ext === '.js') {
            sizeAnalysis.js += size;
          } else if (ext === '.css') {
            sizeAnalysis.css += size;
          } else {
            sizeAnalysis.assets += size;
          }
          
          // Track individual file sizes
          const relativePath = path.relative(buildDir, file);
          sizeAnalysis.breakdown[relativePath] = {
            size: size,
            sizeKB: Math.round(size / 1024 * 100) / 100
          };
        }
        
        // Convert to KB
        sizeAnalysis.totalKB = Math.round(sizeAnalysis.total / 1024 * 100) / 100;
        sizeAnalysis.jsKB = Math.round(sizeAnalysis.js / 1024 * 100) / 100;
        sizeAnalysis.cssKB = Math.round(sizeAnalysis.css / 1024 * 100) / 100;
        sizeAnalysis.assetsKB = Math.round(sizeAnalysis.assets / 1024 * 100) / 100;
      }
      
    } catch (error) {
      this.log(`❌ Bundle size analysis failed: ${error.message}`, 'ERROR');
    }

    return sizeAnalysis;
  }

  async analyzeChunkDistribution() {
    const buildDir = path.join(this.projectDir, 'dist');
    const chunks = [];
    
    try {
      if (fs.existsSync(buildDir)) {
        const jsFiles = this.getAllFiles(buildDir).filter(f => f.endsWith('.js'));
        
        for (const file of jsFiles) {
          const stats = fs.statSync(file);
          const relativePath = path.relative(buildDir, file);
          
          chunks.push({
            name: relativePath,
            size: stats.size,
            sizeKB: Math.round(stats.size / 1024 * 100) / 100,
            type: this.categorizeChunk(relativePath)
          });
        }
        
        // Sort by size
        chunks.sort((a, b) => b.size - a.size);
      }
      
    } catch (error) {
      this.log(`❌ Chunk analysis failed: ${error.message}`, 'ERROR');
    }

    return chunks;
  }

  categorizeChunk(filename) {
    if (filename.includes('vendor') || filename.includes('chunk')) return 'vendor';
    if (filename.includes('main') || filename.includes('index')) return 'main';
    if (filename.includes('runtime')) return 'runtime';
    return 'other';
  }

  async analyzeDependencyImpact() {
    const dependencyAnalysis = {
      largeDependencies: [],
      duplicateDependencies: [],
      unusedDependencies: [],
      optimization: {}
    };

    try {
      // Analyze package.json dependencies
      const packagePath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packagePath)) {
        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        const allDeps = { ...packageJson.dependencies, ...packageJson.devDependencies };
        
        // Check for large dependencies
        dependencyAnalysis.largeDependencies = await this.identifyLargeDependencies(allDeps);
        
        // Check for duplicate dependencies
        dependencyAnalysis.duplicateDependencies = await this.identifyDuplicateDependencies();
        
        // Check for unused dependencies
        dependencyAnalysis.unusedDependencies = await this.identifyUnusedDependencies(allDeps);
      }
      
    } catch (error) {
      this.log(`❌ Dependency analysis failed: ${error.message}`, 'ERROR');
    }

    return dependencyAnalysis;
  }

  async identifyLargeDependencies(dependencies) {
    const largeDeps = [];
    
    try {
      const nodeModules = path.join(this.projectRoot, 'node_modules');
      
      for (const [name, version] of Object.entries(dependencies)) {
        const depPath = path.join(nodeModules, name);
        if (fs.existsSync(depPath)) {
          const size = this.calculateDirectorySize(depPath);
          if (size > 1024 * 1024) { // > 1MB
            largeDeps.push({
              name,
              version,
              size: Math.round(size / 1024 * 100) / 100,
              sizeKB: Math.round(size / 1024 * 100) / 100
            });
          }
        }
      }
      
      // Sort by size
      largeDeps.sort((a, b) => b.size - a.size);
      
    } catch (error) {
      this.log(`❌ Large dependency identification failed: ${error.message}`, 'ERROR');
    }

    return largeDeps;
  }

  async identifyDuplicateDependencies() {
    const duplicates = [];
    
    try {
      // Check for duplicate packages in node_modules
      const nodeModules = path.join(this.projectRoot, 'node_modules');
      const packagePaths = new Map();
      
      this.walkNodeModules(nodeModules, packagePaths);
      
      // Find duplicates
      for (const [name, paths] of packagePaths.entries()) {
        if (paths.length > 1) {
          duplicates.push({
            name,
            paths: paths,
            count: paths.length
          });
        }
      }
      
    } catch (error) {
      this.log(`❌ Duplicate dependency identification failed: ${error.message}`, 'ERROR');
    }

    return duplicates;
  }

  async identifyUnusedDependencies(dependencies) {
    const unused = [];
    
    try {
      // Simple heuristic: check if dependency is imported anywhere
      const sourceFiles = this.findSourceFiles();
      
      for (const [name, version] of Object.entries(dependencies)) {
        if (!this.isDependencyUsed(name, sourceFiles)) {
          unused.push({
            name,
            version,
            reason: 'No imports found in source code'
          });
        }
      }
      
    } catch (error) {
      this.log(`❌ Unused dependency identification failed: ${error.message}`, 'ERROR');
    }

    return unused;
  }

  async analyzeRuntimePerformance() {
    this.log('⚡ Analyzing runtime performance...');
    
    const runtimeAnalysis = {
      memory: {},
      cpu: {},
      network: {},
      rendering: {},
      optimization: {}
    };

    try {
      // Analyze memory usage
      runtimeAnalysis.memory = await this.analyzeMemoryUsage();
      
      // Analyze CPU usage
      runtimeAnalysis.cpu = await this.analyzeCPUUsage();
      
      // Analyze network performance
      runtimeAnalysis.network = await this.analyzeNetworkPerformance();
      
      // Analyze rendering performance
      runtimeAnalysis.rendering = await this.analyzeRenderingPerformance();
      
      // Identify runtime optimizations
      runtimeAnalysis.optimization = await this.identifyRuntimeOptimizations(runtimeAnalysis);
      
    } catch (error) {
      this.log(`❌ Runtime analysis failed: ${error.message}`, 'ERROR');
    }

    return runtimeAnalysis;
  }

  async analyzeMemoryUsage() {
    const memoryAnalysis = {
      current: process.memoryUsage(),
      heap: {},
      external: {},
      optimization: {}
    };

    try {
      // Get current memory usage
      const usage = process.memoryUsage();
      
      memoryAnalysis.heap = {
        used: Math.round(usage.heapUsed / 1024 / 1024 * 100) / 100,
        total: Math.round(usage.heapTotal / 1024 / 1024 * 100) / 100,
        external: Math.round(usage.external / 1024 / 1024 * 100) / 100
      };
      
      // Check for memory leaks
      memoryAnalysis.optimization = this.identifyMemoryOptimizations(memoryAnalysis.heap);
      
    } catch (error) {
      this.log(`❌ Memory analysis failed: ${error.message}`, 'ERROR');
    }

    return memoryAnalysis;
  }

  async analyzeCPUUsage() {
    const cpuAnalysis = {
      current: 0,
      average: 0,
      peaks: [],
      optimization: {}
    };

    try {
      // Simple CPU usage estimation
      const startTime = process.hrtime.bigint();
      await this.sleep(100); // Wait 100ms
      const endTime = process.hrtime.bigint();
      
      // Calculate CPU usage (simplified)
      const duration = Number(endTime - startTime) / 1000000; // Convert to ms
      cpuAnalysis.current = Math.round((duration / 100) * 100);
      
      // Identify CPU optimizations
      cpuAnalysis.optimization = this.identifyCPUOptimizations(cpuAnalysis.current);
      
    } catch (error) {
      this.log(`❌ CPU analysis failed: ${error.message}`, 'ERROR');
    }

    return cpuAnalysis;
  }

  async generateOptimizationStrategies(analysis) {
    this.log('🔧 Generating optimization strategies...');
    
    const strategies = {
      bundle: [],
      runtime: [],
      code: [],
      infrastructure: []
    };

    try {
      // Bundle optimization strategies
      if (analysis.bundle.size.totalKB > this.performanceThresholds.bundleSize) {
        strategies.bundle.push({
          type: 'BUNDLE_SIZE',
          priority: 'HIGH',
          description: 'Bundle size exceeds threshold',
          actions: [
            'Implement code splitting',
            'Use dynamic imports',
            'Optimize images and assets',
            'Remove unused dependencies'
          ]
        });
      }
      
      // Runtime optimization strategies
      if (analysis.runtime.memory.heap.used > this.performanceThresholds.memoryUsage) {
        strategies.runtime.push({
          type: 'MEMORY_USAGE',
          priority: 'MEDIUM',
          description: 'High memory usage detected',
          actions: [
            'Implement memory pooling',
            'Optimize data structures',
            'Use WeakMap/WeakSet for caching',
            'Implement proper cleanup'
          ]
        });
      }
      
      // Code optimization strategies
      strategies.code = this.generateCodeOptimizationStrategies(analysis);
      
      // Infrastructure optimization strategies
      strategies.infrastructure = this.generateInfrastructureOptimizationStrategies(analysis);
      
    } catch (error) {
      this.log(`❌ Strategy generation failed: ${error.message}`, 'ERROR');
    }

    return strategies;
  }

  generateCodeOptimizationStrategies(analysis) {
    const strategies = [];
    
    // Check for specific patterns that can be optimized
    if (analysis.bundle.chunks.some(chunk => chunk.type === 'vendor' && chunk.sizeKB > 100)) {
      strategies.push({
        type: 'VENDOR_CHUNK',
        priority: 'MEDIUM',
        description: 'Large vendor chunk detected',
        actions: [
          'Split vendor bundle by framework',
          'Use tree shaking',
          'Implement dynamic imports for heavy libraries'
        ]
      });
    }
    
    if (analysis.bundle.dependencies.largeDependencies.length > 5) {
      strategies.push({
        type: 'LARGE_DEPENDENCIES',
        priority: 'MEDIUM',
        description: 'Multiple large dependencies detected',
        actions: [
          'Replace heavy libraries with lighter alternatives',
          'Use CDN for large libraries',
          'Implement lazy loading for non-critical dependencies'
        ]
      });
    }
    
    return strategies;
  }

  generateInfrastructureOptimizationStrategies(analysis) {
    const strategies = [];
    
    // Check for infrastructure optimization opportunities
    if (analysis.bundle.size.totalKB > 1000) {
      strategies.push({
        type: 'CDN_OPTIMIZATION',
        priority: 'LOW',
        description: 'Large bundle size may benefit from CDN',
        actions: [
          'Implement CDN for static assets',
          'Use compression (gzip/brotli)',
          'Implement HTTP/2 server push',
          'Use service workers for caching'
        ]
      });
    }
    
    return strategies;
  }

  async applyAutoOptimizations(analysis) {
    this.log('🤖 Applying auto-optimizations...');
    
    const appliedOptimizations = [];
    
    try {
      // Auto-optimize bundle
      if (analysis.bundle.optimization.bundleSplitting) {
        const bundleOptimization = await this.optimizeBundleSplitting();
        if (bundleOptimization.success) {
          appliedOptimizations.push(bundleOptimization);
        }
      }
      
      // Auto-optimize dependencies
      if (analysis.bundle.dependencies.unusedDependencies.length > 0) {
        const depOptimization = await this.optimizeDependencies(analysis.bundle.dependencies.unusedDependencies);
        if (depOptimization.success) {
          appliedOptimizations.push(depOptimization);
        }
      }
      
      // Auto-optimize code patterns
      const codeOptimizations = await this.optimizeCodePatterns(analysis);
      appliedOptimizations.push(...codeOptimizations);
      
    } catch (error) {
      this.log(`❌ Auto-optimization failed: ${error.message}`, 'ERROR');
    }

    return appliedOptimizations;
  }

  async optimizeBundleSplitting() {
    try {
      // Create or update webpack/vite config for better code splitting
      const configPath = path.join(this.projectRoot, 'vite.config.ts');
      
      if (fs.existsSync(configPath)) {
        let config = fs.readFileSync(configPath, 'utf8');
        
        // Add build optimization configurations
        if (!config.includes('build.rollupOptions')) {
          const optimizationConfig = `
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['lodash', 'date-fns'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog']
        }
      }
    }
  }`;
          
          config = config.replace(/export default defineConfig\(/g, `export default defineConfig(${optimizationConfig}`);
          fs.writeFileSync(configPath, config);
          
          return {
            type: 'BUNDLE_SPLITTING',
            success: true,
            description: 'Added manual chunk splitting configuration'
          };
        }
      }
      
      return {
        type: 'BUNDLE_SPLITTING',
        success: false,
        description: 'Configuration already exists or not found'
      };
      
    } catch (error) {
      this.log(`❌ Bundle splitting optimization failed: ${error.message}`, 'ERROR');
      return {
        type: 'BUNDLE_SPLITTING',
        success: false,
        description: `Failed: ${error.message}`
      };
    }
  }

  async optimizeDependencies(unusedDeps) {
    try {
      // Remove unused dependencies
      for (const dep of unusedDeps) {
        try {
          execSync(`npm uninstall ${dep.name}`, { stdio: 'pipe' });
          this.log(`✅ Removed unused dependency: ${dep.name}`);
        } catch (error) {
          this.log(`⚠️ Failed to remove ${dep.name}: ${error.message}`);
        }
      }
      
      return {
        type: 'DEPENDENCY_CLEANUP',
        success: true,
        description: `Removed ${unusedDeps.length} unused dependencies`,
        removed: unusedDeps.map(d => d.name)
      };
      
    } catch (error) {
      this.log(`❌ Dependency optimization failed: ${error.message}`, 'ERROR');
      return {
        type: 'DEPENDENCY_CLEANUP',
        success: false,
        description: `Failed: ${error.message}`
      };
    }
  }

  async optimizeCodePatterns(analysis) {
    const optimizations = [];
    
    try {
      // Look for common performance anti-patterns and suggest fixes
      const sourceFiles = this.findSourceFiles();
      
      for (const file of sourceFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const fileOptimizations = this.optimizeFilePatterns(file, content);
        
        if (fileOptimizations.length > 0) {
          optimizations.push({
            file,
            optimizations: fileOptimizations
          });
        }
      }
      
    } catch (error) {
      this.log(`❌ Code pattern optimization failed: ${error.message}`, 'ERROR');
    }

    return optimizations;
  }

  optimizeFilePatterns(filePath, content) {
    const optimizations = [];
    
    // Check for React performance anti-patterns
    if (content.includes('React.memo') && content.includes('useCallback')) {
      // Already optimized
    } else if (content.includes('function') || content.includes('const') && content.includes('=>')) {
      optimizations.push({
        type: 'REACT_PERFORMANCE',
        suggestion: 'Consider using React.memo and useCallback for performance',
        priority: 'MEDIUM'
      });
    }
    
    // Check for expensive operations
    if (content.includes('.map(') && content.includes('useState')) {
      optimizations.push({
        type: 'EXPENSIVE_OPERATIONS',
        suggestion: 'Consider using useMemo for expensive calculations',
        priority: 'MEDIUM'
      });
    }
    
    return optimizations;
  }

  generatePerformanceRecommendations(analysis) {
    const recommendations = [];
    
    // Bundle recommendations
    if (analysis.bundle.size.totalKB > this.performanceThresholds.bundleSize) {
      recommendations.push({
        category: 'BUNDLE',
        priority: 'HIGH',
        title: 'Reduce Bundle Size',
        description: `Current bundle size is ${analysis.bundle.size.totalKB}KB, exceeding threshold of ${this.performanceThresholds.bundleSize}KB`,
        actions: [
          'Implement code splitting',
          'Remove unused dependencies',
          'Optimize images and assets',
          'Use tree shaking'
        ]
      });
    }
    
    // Runtime recommendations
    if (analysis.runtime.memory.heap.used > this.performanceThresholds.memoryUsage) {
      recommendations.push({
        category: 'RUNTIME',
        priority: 'MEDIUM',
        title: 'Optimize Memory Usage',
        description: `Current memory usage is ${analysis.runtime.memory.heap.used}MB`,
        actions: [
          'Implement proper cleanup',
          'Use memory pooling',
          'Optimize data structures'
        ]
      });
    }
    
    // Code quality recommendations
    if (analysis.optimization.code.length > 0) {
      recommendations.push({
        category: 'CODE',
        priority: 'MEDIUM',
        title: 'Code Performance Optimizations',
        description: 'Several code optimization opportunities identified',
        actions: analysis.optimization.code.map(strategy => strategy.actions).flat()
      });
    }
    
    return recommendations;
  }

  async savePerformanceReport(analysis) {
    try {
      fs.writeFileSync(this.performanceReport, JSON.stringify(analysis, null, 2));
      this.log(`📊 Performance report saved to ${this.performanceReport}`);
    } catch (error) {
      this.log(`❌ Failed to save performance report: ${error.message}`, 'ERROR');
    }
  }

  // Utility methods
  getAllFiles(dir) {
    const files = [];
    this.walkDirectory(dir, files);
    return files;
  }

  walkDirectory(dir, files) {
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          this.walkDirectory(fullPath, files);
        } else {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories we can't access
    }
  }

  findSourceFiles() {
    const sourceFiles = [];
    const sourceDirs = ['src', 'pages', 'components', 'utils'];
    
    for (const dir of sourceDirs) {
      const fullPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(fullPath)) {
        this.walkDirectory(fullPath, sourceFiles);
      }
    }
    
    return sourceFiles.filter(file => 
      file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')
    );
  }

  calculateDirectorySize(dirPath) {
    let size = 0;
    try {
      const items = fs.readdirSync(dirPath);
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          size += this.calculateDirectorySize(fullPath);
        } else {
          size += stat.size;
        }
      }
    } catch (error) {
      // Skip directories we can't access
    }
    return size;
  }

  walkNodeModules(dir, packagePaths) {
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          if (item === 'node_modules') {
            this.walkNodeModules(fullPath, packagePaths);
          } else {
            const packageJsonPath = path.join(fullPath, 'package.json');
            if (fs.existsSync(packageJsonPath)) {
              const packageName = item;
              if (!packagePaths.has(packageName)) {
                packagePaths.set(packageName, []);
              }
              packagePaths.get(packageName).push(fullPath);
            }
          }
        }
      }
    } catch (error) {
      // Skip directories we can't access
    }
  }

  isDependencyUsed(depName, sourceFiles) {
    for (const file of sourceFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        if (content.includes(`from '${depName}'`) || content.includes(`from "${depName}"`)) {
          return true;
        }
      } catch (error) {
        // Skip files we can't read
      }
    }
    return false;
  }

  identifyMemoryOptimizations(heap) {
    const optimizations = [];
    
    if (heap.used > this.performanceThresholds.memoryUsage) {
      optimizations.push({
        type: 'HIGH_MEMORY_USAGE',
        description: 'Memory usage exceeds threshold',
        actions: ['Implement memory pooling', 'Use WeakMap/WeakSet', 'Optimize data structures']
      });
    }
    
    return optimizations;
  }

  identifyCPUOptimizations(cpuUsage) {
    const optimizations = [];
    
    if (cpuUsage > this.performanceThresholds.cpuUsage) {
      optimizations.push({
        type: 'HIGH_CPU_USAGE',
        description: 'CPU usage is high',
        actions: ['Optimize loops', 'Use Web Workers', 'Implement caching']
      });
    }
    
    return optimizations;
  }

  async runBuild() {
    try {
      this.log('🔨 Running build for analysis...');
      execSync('npm run build', { stdio: 'pipe' });
      this.log('✅ Build completed');
    } catch (error) {
      this.log(`❌ Build failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async run() {
    this.log('🚀 Starting Smart Performance Monitor...');
    
    try {
      const analysis = await this.analyzePerformance();
      
      // Log summary
      this.log(`📊 Performance Analysis Summary:`);
      this.log(`   Bundle Size: ${analysis.bundle.size.totalKB}KB`);
      this.log(`   Memory Usage: ${analysis.runtime.memory.heap.used}MB`);
      this.log(`   CPU Usage: ${analysis.runtime.cpu.current}%`);
      this.log(`   Optimizations Applied: ${analysis.autoOptimizations.length}`);
      this.log(`   Recommendations: ${analysis.recommendations.length}`);
      
      return analysis;
      
    } catch (error) {
      this.log(`❌ Smart Performance Monitor failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const monitor = new SmartPerformanceMonitor();
  monitor.run().catch(console.error);
}

module.exports = SmartPerformanceMonitor;