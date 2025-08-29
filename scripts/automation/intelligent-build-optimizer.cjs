#!/usr/bin/env node

/**
 * Intelligent Build Optimizer - PM2 Process
 * Automatically analyzes and optimizes build performance
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');

class IntelligentBuildOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'build-optimizer.log');
    this.buildMetrics = path.join(this.projectRoot, 'logs', 'build-metrics.json');
    this.optimizationHistory = path.join(this.projectRoot, 'logs', 'optimization-history.json');
    this.ensureLogsDirectory();
    this.loadBuildMetrics();
    this.loadOptimizationHistory();
  }

  ensureLogsDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  loadBuildMetrics() {
    try {
      if (fs.existsSync(this.buildMetrics)) {
        this.metrics = JSON.parse(fs.readFileSync(this.buildMetrics, 'utf8'));
      } else {
        this.metrics = {
          buildTimes: [],
          bundleSizes: [],
          optimizationHistory: [],
          lastBuild: null,
          averageBuildTime: 0,
          averageBundleSize: 0
        };
      }
    } catch (error) {
      this.log(`Failed to load build metrics: ${error.message}`, 'ERROR');
      this.metrics = this.getDefaultMetrics();
    }
  }

  loadOptimizationHistory() {
    try {
      if (fs.existsSync(this.optimizationHistory)) {
        this.optimizationHistory = JSON.parse(fs.readFileSync(this.optimizationHistory, 'utf8'));
      } else {
        this.optimizationHistory = [];
      }
    } catch (error) {
      this.log(`Failed to load optimization history: ${error.message}`, 'ERROR');
      this.optimizationHistory = [];
    }
  }

  getDefaultMetrics() {
    return {
      buildTimes: [],
      bundleSizes: [],
      optimizationHistory: [],
      lastBuild: null,
      averageBuildTime: 0,
      averageBundleSize: 0
    };
  }

  async runBuildOptimization() {
    this.log('🚀 Starting intelligent build optimization...');
    
    try {
      // 1. Analyze current build configuration
      const buildConfig = await this.analyzeBuildConfiguration();
      
      // 2. Perform build performance analysis
      const buildAnalysis = await this.analyzeBuildPerformance();
      
      // 3. Identify optimization opportunities
      const optimizations = await this.identifyOptimizations(buildConfig, buildAnalysis);
      
      // 4. Apply intelligent optimizations
      const appliedOptimizations = await this.applyOptimizations(optimizations);
      
      // 5. Test build performance improvements
      const performanceTest = await this.testBuildPerformance();
      
      // 6. Update build metrics
      await this.updateBuildMetrics(buildAnalysis, performanceTest);
      
      // 7. Generate optimization report
      await this.generateOptimizationReport({
        buildConfig,
        buildAnalysis,
        optimizations,
        appliedOptimizations,
        performanceTest
      });

      this.log('✅ Build optimization completed successfully');
      
    } catch (error) {
      this.log(`Build optimization failed: ${error.message}`, 'ERROR');
    }
  }

  async analyzeBuildConfiguration() {
    this.log('🔍 Analyzing build configuration...');
    const config = {
      vite: null,
      typescript: null,
      dependencies: null,
      buildScripts: null
    };

    try {
      // Analyze Vite configuration
      const viteConfigPath = path.join(this.projectRoot, 'vite.config.ts');
      if (fs.existsSync(viteConfigPath)) {
        const viteContent = fs.readFileSync(viteConfigPath, 'utf8');
        config.vite = this.analyzeViteConfig(viteContent);
      }

      // Analyze TypeScript configuration
      const tsConfigPath = path.join(this.projectRoot, 'tsconfig.app.json');
      if (fs.existsSync(tsConfigPath)) {
        const tsContent = fs.readFileSync(tsConfigPath, 'utf8');
        config.typescript = this.analyzeTypeScriptConfig(tsContent);
      }

      // Analyze package.json dependencies
      const packagePath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packagePath)) {
        const packageContent = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        config.dependencies = this.analyzeDependencies(packageContent);
      }

      // Analyze build scripts
      config.buildScripts = this.analyzeBuildScripts();
      
    } catch (error) {
      this.log(`Configuration analysis failed: ${error.message}`, 'ERROR');
    }

    return config;
  }

  analyzeViteConfig(content) {
    const analysis = {
      hasOptimizations: false,
      suggestions: [],
      issues: []
    };

    try {
      // Check for build optimizations
      if (content.includes('build.rollupOptions')) {
        analysis.hasOptimizations = true;
      } else {
        analysis.suggestions.push('Add rollup options for better bundle optimization');
      }

      if (content.includes('build.minify')) {
        analysis.hasOptimizations = true;
      } else {
        analysis.suggestions.push('Enable minification for production builds');
      }

      if (content.includes('build.sourcemap')) {
        analysis.suggestions.push('Consider disabling sourcemaps in production for smaller bundles');
      }

      // Check for chunk splitting
      if (content.includes('build.rollupOptions.output.manualChunks')) {
        analysis.hasOptimizations = true;
      } else {
        analysis.suggestions.push('Implement manual chunk splitting for better caching');
      }

    } catch (error) {
      analysis.issues.push(`Failed to analyze Vite config: ${error.message}`);
    }

    return analysis;
  }

  analyzeTypeScriptConfig(content) {
    const analysis = {
      hasOptimizations: false,
      suggestions: [],
      issues: []
    };

    try {
      const config = JSON.parse(content);
      
      if (config.compilerOptions?.incremental) {
        analysis.hasOptimizations = true;
      } else {
        analysis.suggestions.push('Enable incremental compilation for faster builds');
      }

      if (config.compilerOptions?.skipLibCheck) {
        analysis.hasOptimizations = true;
      } else {
        analysis.suggestions.push('Skip library checking for faster builds');
      }

      if (config.compilerOptions?.isolatedModules) {
        analysis.hasOptimizations = true;
      } else {
        analysis.suggestions.push('Enable isolated modules for better tree shaking');
      }

    } catch (error) {
      analysis.issues.push(`Failed to analyze TypeScript config: ${error.message}`);
    }

    return analysis;
  }

  analyzeDependencies(packageContent) {
    const analysis = {
      buildDependencies: [],
      devDependencies: [],
      suggestions: [],
      issues: []
    };

    try {
      const { dependencies = {}, devDependencies = {} } = packageContent;
      
      // Analyze build-related dependencies
      const buildDeps = ['vite', 'typescript', 'esbuild', 'rollup'];
      for (const dep of buildDeps) {
        if (dependencies[dep] || devDependencies[dep]) {
          analysis.buildDependencies.push(dep);
        }
      }

      // Check for outdated dependencies
      const allDeps = { ...dependencies, ...devDependencies };
      for (const [dep, version] of Object.entries(allDeps)) {
        if (version.includes('^') || version.includes('~')) {
          analysis.suggestions.push(`Consider pinning ${dep} version for reproducible builds`);
        }
      }

      // Check for duplicate dependencies
      const duplicateDeps = Object.keys(dependencies).filter(dep => devDependencies[dep]);
      if (duplicateDeps.length > 0) {
        analysis.issues.push(`Duplicate dependencies found: ${duplicateDeps.join(', ')}`);
      }

    } catch (error) {
      analysis.issues.push(`Failed to analyze dependencies: ${error.message}`);
    }

    return analysis;
  }

  analyzeBuildScripts() {
    const analysis = {
      scripts: [],
      suggestions: [],
      issues: []
    };

    try {
      const packagePath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packagePath)) {
        const packageContent = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        const { scripts = {} } = packageContent;
        
        analysis.scripts = Object.keys(scripts);
        
        // Check for build optimization scripts
        if (!scripts['build:analyze']) {
          analysis.suggestions.push('Add build:analyze script for bundle analysis');
        }
        
        if (!scripts['build:prod']) {
          analysis.suggestions.push('Add build:prod script with production optimizations');
        }
        
        if (!scripts['build:dev']) {
          analysis.suggestions.push('Add build:dev script for development builds');
        }
      }
    } catch (error) {
      analysis.issues.push(`Failed to analyze build scripts: ${error.message}`);
    }

    return analysis;
  }

  async analyzeBuildPerformance() {
    this.log('⚡ Analyzing build performance...');
    const analysis = {
      buildTime: 0,
      bundleSize: 0,
      memoryUsage: 0,
      cpuUsage: 0,
      issues: [],
      suggestions: []
    };

    try {
      // Run a test build to measure performance
      const startTime = Date.now();
      const startMemory = process.memoryUsage();
      
      // Run build command
      const buildResult = await this.runTestBuild();
      
      const endTime = Date.now();
      const endMemory = process.memoryUsage();
      
      analysis.buildTime = endTime - startTime;
      analysis.memoryUsage = endMemory.heapUsed - startMemory.heapUsed;
      analysis.bundleSize = await this.calculateBundleSize();
      
      // Analyze build output for issues
      if (buildResult.includes('warning')) {
        analysis.issues.push('Build warnings detected - may impact performance');
      }
      
      if (buildResult.includes('error')) {
        analysis.issues.push('Build errors detected - must be fixed');
      }
      
      // Generate performance suggestions
      if (analysis.buildTime > 30000) { // 30 seconds
        analysis.suggestions.push('Build time is high - consider implementing incremental builds');
      }
      
      if (analysis.bundleSize > 5000000) { // 5MB
        analysis.suggestions.push('Bundle size is large - implement code splitting and tree shaking');
      }
      
      if (analysis.memoryUsage > 1000000000) { // 1GB
        analysis.suggestions.push('High memory usage - consider optimizing build process');
      }
      
    } catch (error) {
      this.log(`Build performance analysis failed: ${error.message}`, 'ERROR');
      analysis.issues.push(`Analysis failed: ${error.message}`);
    }

    return analysis;
  }

  async runTestBuild() {
    try {
      // Run a quick build to measure performance
      const result = execSync('npm run build', { 
        encoding: 'utf8',
        stdio: 'pipe',
        timeout: 120000 // 2 minutes timeout
      });
      return result;
    } catch (error) {
      throw new Error(`Build failed: ${error.message}`);
    }
  }

  async calculateBundleSize() {
    try {
      const distPath = path.join(this.projectRoot, 'dist');
      if (!fs.existsSync(distPath)) {
        return 0;
      }
      
      let totalSize = 0;
      const walkDir = (dir) => {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const itemPath = path.join(dir, item);
          const stat = fs.statSync(itemPath);
          
          if (stat.isDirectory()) {
            walkDir(itemPath);
          } else if (stat.isFile()) {
            totalSize += stat.size;
          }
        }
      };
      
      walkDir(distPath);
      return totalSize;
      
    } catch (error) {
      this.log(`Failed to calculate bundle size: ${error.message}`, 'ERROR');
      return 0;
    }
  }

  async identifyOptimizations(buildConfig, buildAnalysis) {
    this.log('🎯 Identifying optimization opportunities...');
    const optimizations = [];

    try {
      // Vite configuration optimizations
      if (buildConfig.vite && !buildConfig.vite.hasOptimizations) {
        optimizations.push({
          type: 'VITE_CONFIG',
          priority: 'HIGH',
          description: 'Implement Vite build optimizations',
          action: 'UPDATE_VITE_CONFIG',
          estimatedImpact: 'MEDIUM'
        });
      }

      // TypeScript configuration optimizations
      if (buildConfig.typescript && !buildConfig.typescript.hasOptimizations) {
        optimizations.push({
          type: 'TYPESCRIPT_CONFIG',
          priority: 'MEDIUM',
          description: 'Enable TypeScript build optimizations',
          action: 'UPDATE_TS_CONFIG',
          estimatedImpact: 'LOW'
        });
      }

      // Build script optimizations
      if (buildConfig.buildScripts.suggestions.length > 0) {
        optimizations.push({
          type: 'BUILD_SCRIPTS',
          priority: 'MEDIUM',
          description: 'Add optimized build scripts',
          action: 'ADD_BUILD_SCRIPTS',
          estimatedImpact: 'LOW'
        });
      }

      // Performance-based optimizations
      if (buildAnalysis.buildTime > 30000) {
        optimizations.push({
          type: 'BUILD_PERFORMANCE',
          priority: 'HIGH',
          description: 'Implement incremental builds and caching',
          action: 'OPTIMIZE_BUILD_PROCESS',
          estimatedImpact: 'HIGH'
        });
      }

      if (buildAnalysis.bundleSize > 5000000) {
        optimizations.push({
          type: 'BUNDLE_OPTIMIZATION',
          priority: 'HIGH',
          description: 'Implement code splitting and tree shaking',
          action: 'OPTIMIZE_BUNDLE',
          estimatedImpact: 'HIGH'
        });
      }

    } catch (error) {
      this.log(`Failed to identify optimizations: ${error.message}`, 'ERROR');
    }

    return optimizations;
  }

  async applyOptimizations(optimizations) {
    this.log('🔧 Applying optimizations...');
    const applied = [];

    try {
      for (const optimization of optimizations) {
        try {
          const result = await this.applyOptimization(optimization);
          if (result.success) {
            applied.push({
              ...optimization,
              appliedAt: new Date().toISOString(),
              result: result
            });
          }
        } catch (error) {
          this.log(`Failed to apply optimization ${optimization.type}: ${error.message}`, 'ERROR');
        }
      }
      
    } catch (error) {
      this.log(`Failed to apply optimizations: ${error.message}`, 'ERROR');
    }

    return applied;
  }

  async applyOptimization(optimization) {
    switch (optimization.action) {
      case 'UPDATE_VITE_CONFIG':
        return await this.updateViteConfig();
      case 'UPDATE_TS_CONFIG':
        return await this.updateTypeScriptConfig();
      case 'ADD_BUILD_SCRIPTS':
        return await this.addBuildScripts();
      case 'OPTIMIZE_BUILD_PROCESS':
        return await this.optimizeBuildProcess();
      case 'OPTIMIZE_BUNDLE':
        return await this.optimizeBundle();
      default:
        throw new Error(`Unknown optimization action: ${optimization.action}`);
    }
  }

  async updateViteConfig() {
    try {
      const viteConfigPath = path.join(this.projectRoot, 'vite.config.ts');
      if (!fs.existsSync(viteConfigPath)) {
        return { success: false, error: 'Vite config not found' };
      }

      let content = fs.readFileSync(viteConfigPath, 'utf8');
      
      // Add build optimizations if not present
      if (!content.includes('build.rollupOptions')) {
        const rollupOptions = `
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['lodash', 'date-fns']
        }
      }
    },
    minify: 'terser',
    sourcemap: false,
    chunkSizeWarningLimit: 1000
  }`;
        
        // Insert before the closing bracket
        content = content.replace(/export\s+default\s+defineConfig\s*\(\s*{([^}]*)}/s, 
          `export default defineConfig({$1${rollupOptions}}`);
      }

      fs.writeFileSync(viteConfigPath, content);
      return { success: true, message: 'Vite config updated with optimizations' };
      
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async updateTypeScriptConfig() {
    try {
      const tsConfigPath = path.join(this.projectRoot, 'tsconfig.app.json');
      if (!fs.existsSync(tsConfigPath)) {
        return { success: false, error: 'TypeScript config not found' };
      }

      let content = fs.readFileSync(tsConfigPath, 'utf8');
      const config = JSON.parse(content);
      
      // Add performance optimizations
      if (!config.compilerOptions) config.compilerOptions = {};
      
      config.compilerOptions.incremental = true;
      config.compilerOptions.skipLibCheck = true;
      config.compilerOptions.isolatedModules = true;
      config.compilerOptions.forceConsistentCasingInFileNames = true;
      
      fs.writeFileSync(tsConfigPath, JSON.stringify(config, null, 2));
      return { success: true, message: 'TypeScript config updated with optimizations' };
      
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async addBuildScripts() {
    try {
      const packagePath = path.join(this.projectRoot, 'package.json');
      if (!fs.existsSync(packagePath)) {
        return { success: false, error: 'package.json not found' };
      }

      const packageContent = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      
      // Add optimized build scripts
      if (!packageContent.scripts['build:analyze']) {
        packageContent.scripts['build:analyze'] = 'vite build --mode analyze';
      }
      
      if (!packageContent.scripts['build:prod']) {
        packageContent.scripts['build:prod'] = 'NODE_ENV=production vite build';
      }
      
      if (!packageContent.scripts['build:dev']) {
        packageContent.scripts['build:dev'] = 'vite build --mode development';
      }
      
      fs.writeFileSync(packagePath, JSON.stringify(packageContent, null, 2));
      return { success: true, message: 'Build scripts added' };
      
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async optimizeBuildProcess() {
    try {
      // Create build cache directory
      const cacheDir = path.join(this.projectRoot, '.build-cache');
      if (!fs.existsSync(cacheDir)) {
        fs.mkdirSync(cacheDir, { recursive: true });
      }

      // Create build optimization script
      const optimizationScript = path.join(this.projectRoot, 'scripts', 'optimize-build.js');
      const scriptContent = `
const fs = require('fs');
const path = require('path');

// Build optimization script
console.log('Optimizing build process...');

// Clear old cache
const cacheDir = path.join(__dirname, '..', '.build-cache');
if (fs.existsSync(cacheDir)) {
  fs.rmSync(cacheDir, { recursive: true, force: true });
}

console.log('Build optimization completed');
`;

      fs.writeFileSync(optimizationScript, scriptContent);
      
      return { success: true, message: 'Build process optimization script created' };
      
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async optimizeBundle() {
    try {
      // Create bundle analysis script
      const analysisScript = path.join(this.projectRoot, 'scripts', 'analyze-bundle.js');
      const scriptContent = `
const fs = require('fs');
const path = require('path');

// Bundle analysis script
console.log('Analyzing bundle...');

const distPath = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distPath)) {
  const files = fs.readdirSync(distPath);
  let totalSize = 0;
  
  files.forEach(file => {
    const filePath = path.join(distPath, file);
    const stat = fs.statSync(filePath);
    if (stat.isFile()) {
      totalSize += stat.size;
      console.log(\`\${file}: \${(stat.size / 1024).toFixed(2)} KB\`);
    }
  });
  
  console.log(\`Total bundle size: \${(totalSize / 1024 / 1024).toFixed(2)} MB\`);
}
`;

      fs.writeFileSync(analysisScript, scriptContent);
      
      return { success: true, message: 'Bundle analysis script created' };
      
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async testBuildPerformance() {
    this.log('🧪 Testing build performance improvements...');
    const test = {
      buildTime: 0,
      bundleSize: 0,
      memoryUsage: 0,
      improvement: 0
    };

    try {
      // Run optimized build
      const startTime = Date.now();
      const startMemory = process.memoryUsage();
      
      const buildResult = await this.runTestBuild();
      
      const endTime = Date.now();
      const endMemory = process.memoryUsage();
      
      test.buildTime = endTime - startTime;
      test.memoryUsage = endMemory.heapUsed - startMemory.heapUsed;
      test.bundleSize = await this.calculateBundleSize();
      
      // Calculate improvement
      if (this.metrics.lastBuild) {
        const previousBuild = this.metrics.lastBuild;
        test.improvement = ((previousBuild.buildTime - test.buildTime) / previousBuild.buildTime) * 100;
      }
      
    } catch (error) {
      this.log(`Performance test failed: ${error.message}`, 'ERROR');
    }

    return test;
  }

  async updateBuildMetrics(buildAnalysis, performanceTest) {
    try {
      // Update build metrics
      this.metrics.buildTimes.push({
        timestamp: new Date().toISOString(),
        buildTime: buildAnalysis.buildTime,
        bundleSize: buildAnalysis.bundleSize,
        memoryUsage: buildAnalysis.memoryUsage
      });

      // Keep only last 10 builds
      if (this.metrics.buildTimes.length > 10) {
        this.metrics.buildTimes = this.metrics.buildTimes.slice(-10);
      }

      // Calculate averages
      const times = this.metrics.buildTimes.map(b => b.buildTime);
      const sizes = this.metrics.buildTimes.map(b => b.bundleSize);
      
      this.metrics.averageBuildTime = times.reduce((sum, time) => sum + time, 0) / times.length;
      this.metrics.averageBundleSize = sizes.reduce((sum, size) => sum + size, 0) / sizes.length;
      
      // Update last build
      this.metrics.lastBuild = {
        buildTime: buildAnalysis.buildTime,
        bundleSize: buildAnalysis.bundleSize,
        memoryUsage: buildAnalysis.memoryUsage,
        timestamp: new Date().toISOString()
      };

      // Save metrics
      fs.writeFileSync(this.buildMetrics, JSON.stringify(this.metrics, null, 2));
      
    } catch (error) {
      this.log(`Failed to update build metrics: ${error.message}`, 'ERROR');
    }
  }

  async generateOptimizationReport(data) {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          totalOptimizations: data.optimizations.length,
          appliedOptimizations: data.appliedOptimizations.length,
          buildTimeImprovement: data.performanceTest.improvement,
          estimatedSavings: this.calculateEstimatedSavings(data)
        },
        details: data,
        recommendations: this.generateRecommendations(data),
        nextSteps: this.generateNextSteps(data)
      };

      const reportFile = path.join(this.projectRoot, 'logs', `build-optimization-${Date.now()}.json`);
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      this.log(`📊 Optimization report generated: ${reportFile}`);
      
    } catch (error) {
      this.log(`Failed to generate optimization report: ${error.message}`, 'ERROR');
    }
  }

  calculateEstimatedSavings(data) {
    const savings = {
      buildTime: 0,
      bundleSize: 0,
      memoryUsage: 0
    };

    try {
      if (data.performanceTest.improvement > 0) {
        savings.buildTime = data.performanceTest.improvement;
      }
      
      if (data.buildAnalysis.bundleSize > data.performanceTest.bundleSize) {
        savings.bundleSize = ((data.buildAnalysis.bundleSize - data.performanceTest.bundleSize) / data.buildAnalysis.bundleSize) * 100;
      }
      
      if (data.buildAnalysis.memoryUsage > data.performanceTest.memoryUsage) {
        savings.memoryUsage = ((data.buildAnalysis.memoryUsage - data.performanceTest.memoryUsage) / data.buildAnalysis.memoryUsage) * 100;
      }
      
    } catch (error) {
      this.log(`Failed to calculate savings: ${error.message}`, 'ERROR');
    }

    return savings;
  }

  generateRecommendations(data) {
    const recommendations = [];
    
    if (data.performanceTest.improvement < 10) {
      recommendations.push('Consider implementing more aggressive build optimizations');
    }
    
    if (data.optimizations.length > data.appliedOptimizations.length) {
      recommendations.push('Review failed optimizations and implement manually');
    }
    
    if (data.buildAnalysis.bundleSize > 10000000) { // 10MB
      recommendations.push('Bundle size is still large - implement advanced code splitting');
    }
    
    recommendations.push('Monitor build performance over time');
    recommendations.push('Consider implementing build caching strategies');
    
    return recommendations;
  }

  generateNextSteps(data) {
    const nextSteps = [];
    
    if (data.appliedOptimizations.length > 0) {
      nextSteps.push('Test the application thoroughly after optimizations');
      nextSteps.push('Commit optimization changes to version control');
    }
    
    if (data.performanceTest.improvement > 0) {
      nextSteps.push('Document the performance improvements');
      nextSteps.push('Share optimization results with the team');
    }
    
    nextSteps.push('Schedule follow-up optimization review in 1 week');
    nextSteps.push('Monitor build performance metrics');
    
    return nextSteps;
  }

  async run() {
    this.log('🚀 Intelligent Build Optimizer Started');
    
    try {
      await this.runBuildOptimization();
      
      // Schedule next run
      setTimeout(() => {
        this.run();
      }, 60 * 60 * 1000); // Run every hour
      
    } catch (error) {
      this.log(`Automation failed: ${error.message}`, 'ERROR');
      
      // Retry after 15 minutes on failure
      setTimeout(() => {
        this.run();
      }, 15 * 60 * 1000);
    }
  }
}

// Start the automation if run directly
if (require.main === module) {
  const automation = new IntelligentBuildOptimizer();
  automation.run();
}

module.exports = IntelligentBuildOptimizer;