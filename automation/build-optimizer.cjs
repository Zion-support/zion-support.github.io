#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class BuildOptimizer {
  constructor() {
    this.buildMetrics = new Map();
    this.optimizationSuggestions = new Map();
    this.buildHistory = [];
    this.logFile = path.join(__dirname, 'logs', 'build-optimizer.log');
    this.ensureLogDirectory();
    this.loadBuildConfigurations();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  loadBuildConfigurations() {
    this.buildConfigs = {
      'vite': {
        configFile: 'vite.config.ts',
        buildCommand: 'npm run build',
        devCommand: 'npm run dev',
        buildDir: 'dist',
        cacheDir: 'node_modules/.vite'
      },
      'webpack': {
        configFile: 'webpack.config.js',
        buildCommand: 'npm run build',
        devCommand: 'npm run dev',
        buildDir: 'dist',
        cacheDir: 'node_modules/.cache'
      },
      'rollup': {
        configFile: 'rollup.config.js',
        buildCommand: 'npm run build',
        devCommand: 'npm run dev',
        buildDir: 'dist',
        cacheDir: 'node_modules/.cache'
      }
    };
  }

  async analyzeBuildSystem() {
    this.log('🔍 Analyzing build system configuration...');
    
    let detectedSystem = null;
    
    // Check for build system configuration files
    for (const [system, config] of Object.entries(this.buildConfigs)) {
      if (fs.existsSync(config.configFile)) {
        detectedSystem = system;
        this.log(`✅ Detected ${system} build system`);
        break;
      }
    }
    
    if (!detectedSystem) {
      this.log('⚠️ No standard build system detected, using generic analysis');
      detectedSystem = 'generic';
    }
    
    return detectedSystem;
  }

  async runBuildAnalysis() {
    const buildSystem = await this.analyzeBuildSystem();
    const config = this.buildConfigs[buildSystem] || {};
    
    this.log('🚀 Starting build analysis...');
    
    // Check build configuration
    await this.analyzeBuildConfig(buildSystem, config);
    
    // Analyze dependencies
    await this.analyzeBuildDependencies();
    
    // Check build performance
    await this.measureBuildPerformance(config);
    
    // Generate optimization suggestions
    await this.generateOptimizationSuggestions(buildSystem, config);
    
    // Save analysis report
    await this.saveBuildAnalysisReport();
    
    this.log('✅ Build analysis completed');
  }

  async analyzeBuildConfig(buildSystem, config) {
    this.log(`📋 Analyzing ${buildSystem} build configuration...`);
    
    try {
      let configContent = '';
      
      if (fs.existsSync(config.configFile)) {
        configContent = fs.readFileSync(config.configFile, 'utf8');
      }
      
      const analysis = {
        buildSystem,
        configFile: config.configFile,
        configExists: fs.existsSync(config.configFile),
        configSize: configContent.length,
        hasOptimizations: false,
        optimizationFlags: [],
        issues: []
      };
      
      // Check for common optimization flags
      const optimizationPatterns = {
        'vite': {
          'minify': /minify:\s*(true|false)/g,
          'sourcemap': /sourcemap:\s*(true|false)/g,
          'rollupOptions': /rollupOptions:/g,
          'build.rollupOptions': /build:\s*{\s*rollupOptions/g
        },
        'webpack': {
          'optimization': /optimization:/g,
          'minimize': /minimize:\s*(true|false)/g,
          'sourceMap': /sourceMap:\s*(true|false)/g,
          'splitChunks': /splitChunks:/g
        }
      };
      
      const patterns = optimizationPatterns[buildSystem] || {};
      
      for (const [flag, pattern] of Object.entries(patterns)) {
        const matches = configContent.match(pattern);
        if (matches) {
          analysis.optimizationFlags.push(flag);
        }
      }
      
      analysis.hasOptimizations = analysis.optimizationFlags.length > 0;
      
      // Check for common issues
      if (buildSystem === 'vite' && !configContent.includes('build:')) {
        analysis.issues.push('Missing build configuration section');
      }
      
      if (buildSystem === 'webpack' && !configContent.includes('mode:')) {
        analysis.issues.push('Missing mode configuration');
      }
      
      this.buildMetrics.set('config', analysis);
      this.log(`✅ Configuration analysis completed for ${buildSystem}`);
      
    } catch (error) {
      this.log(`❌ Error analyzing build config: ${error.message}`);
    }
  }

  async analyzeBuildDependencies() {
    this.log('📦 Analyzing build dependencies...');
    
    try {
      const packageContent = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const devDeps = packageContent.devDependencies || {};
      const deps = packageContent.dependencies || {};
      
      const buildDependencies = {
        bundler: null,
        transpiler: null,
        minifier: null,
        typeChecker: null,
        linter: null,
        testRunner: null,
        totalDevDeps: Object.keys(devDeps).length,
        totalDeps: Object.keys(deps).length
      };
      
      // Detect build tools
      if (devDeps.vite) buildDependencies.bundler = 'vite';
      else if (devDeps.webpack) buildDependencies.bundler = 'webpack';
      else if (devDeps.rollup) buildDependencies.bundler = 'rollup';
      
      if (devDeps['@babel/core'] || devDeps.babel) buildDependencies.transpiler = 'babel';
      else if (devDeps.swc) buildDependencies.transpiler = 'swc';
      else if (devDeps.esbuild) buildDependencies.transpiler = 'esbuild';
      
      if (devDeps.terser) buildDependencies.minifier = 'terser';
      else if (devDeps.esbuild) buildDependencies.minifier = 'esbuild';
      else if (devDeps.swc) buildDependencies.minifier = 'swc';
      
      if (devDeps.typescript) buildDependencies.typeChecker = 'typescript';
      if (devDeps.eslint) buildDependencies.linter = 'eslint';
      if (devDeps.jest || devDeps.vitest) buildDependencies.testRunner = 'jest/vitest';
      
      this.buildMetrics.set('dependencies', buildDependencies);
      this.log('✅ Build dependencies analysis completed');
      
    } catch (error) {
      this.log(`❌ Error analyzing build dependencies: ${error.message}`);
    }
  }

  async measureBuildPerformance(config) {
    this.log('⏱️ Measuring build performance...');
    
    try {
      const startTime = Date.now();
      
      // Run a clean build
      this.log('🧹 Running clean build for performance measurement...');
      
      // Clean build directory
      if (config.buildDir && fs.existsSync(config.buildDir)) {
        fs.rmSync(config.buildDir, { recursive: true, force: true });
        this.log(`🗑️ Cleaned build directory: ${config.buildDir}`);
      }
      
      // Measure build time
      const buildStart = Date.now();
      const buildResult = execSync(config.buildCommand || 'npm run build', {
        encoding: 'utf8',
        stdio: 'pipe',
        timeout: 300000 // 5 minutes timeout
      });
      const buildTime = Date.now() - buildStart;
      
      // Measure build output size
      let buildSize = 0;
      let fileCount = 0;
      
      if (config.buildDir && fs.existsSync(config.buildDir)) {
        const buildFiles = this.getFilesRecursively(config.buildDir);
        fileCount = buildFiles.length;
        
        for (const file of buildFiles) {
          try {
            const stats = fs.statSync(file);
            buildSize += stats.size;
          } catch (error) {
            // Skip files that can't be stat'd
          }
        }
      }
      
      const totalTime = Date.now() - startTime;
      
      const performanceMetrics = {
        buildTime,
        totalTime,
        buildSize,
        fileCount,
        buildOutput: buildResult,
        timestamp: new Date().toISOString()
      };
      
      this.buildMetrics.set('performance', performanceMetrics);
      this.buildHistory.push(performanceMetrics);
      
      // Keep only last 10 builds
      if (this.buildHistory.length > 10) {
        this.buildHistory.shift();
      }
      
      this.log(`✅ Build performance measured: ${buildTime}ms, ${(buildSize / 1024 / 1024).toFixed(2)}MB, ${fileCount} files`);
      
    } catch (error) {
      this.log(`❌ Error measuring build performance: ${error.message}`);
      
      // Add error metrics
      this.buildMetrics.set('performance', {
        error: error.message,
        timestamp: new Date().toISOString()
      });
    }
  }

  async generateOptimizationSuggestions(buildSystem, config) {
    this.log('💡 Generating build optimization suggestions...');
    
    const suggestions = [];
    const configAnalysis = this.buildMetrics.get('config') || {};
    const depAnalysis = this.buildMetrics.get('dependencies') || {};
    const perfAnalysis = this.buildMetrics.get('performance') || {};
    
    // Configuration-based suggestions
    if (buildSystem === 'vite') {
      if (!configAnalysis.hasOptimizations) {
        suggestions.push({
          type: 'configuration',
          priority: 'high',
          title: 'Enable Vite build optimizations',
          description: 'Add build optimization options to vite.config.ts',
          code: `export default defineConfig({
  build: {
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['lodash', 'moment']
        }
      }
    }
  }
})`,
          impact: 'high'
        });
      }
      
      if (!depAnalysis.transpiler || depAnalysis.transpiler === 'babel') {
        suggestions.push({
          type: 'dependencies',
          priority: 'medium',
          title: 'Consider using SWC for faster builds',
          description: 'SWC is significantly faster than Babel for transpilation',
          code: 'npm install --save-dev @vitejs/plugin-swc\n# Then update vite.config.ts to use @vitejs/plugin-swc',
          impact: 'medium'
        });
      }
    }
    
    if (buildSystem === 'webpack') {
      if (!configAnalysis.optimizationFlags.includes('splitChunks')) {
        suggestions.push({
          type: 'configuration',
          priority: 'high',
          title: 'Enable code splitting with splitChunks',
          description: 'Split vendor and application code for better caching',
          code: `optimization: {
  splitChunks: {
    chunks: 'all',
    cacheGroups: {
      vendor: {
        test: /[\\\\/]node_modules[\\\\/]/,
        name: 'vendors',
        chunks: 'all'
      }
    }
  }
}`,
          impact: 'high'
        });
      }
    }
    
    // Performance-based suggestions
    if (perfAnalysis.buildTime && perfAnalysis.buildTime > 30000) {
      suggestions.push({
        type: 'performance',
        priority: 'high',
        title: 'Build time optimization',
        description: `Build is taking ${(perfAnalysis.buildTime / 1000).toFixed(1)}s, consider optimizations`,
        code: '// Enable build caching\n// Use parallel processing\n// Optimize dependencies',
        impact: 'high'
      });
    }
    
    if (perfAnalysis.buildSize && perfAnalysis.buildSize > 5 * 1024 * 1024) { // 5MB
      suggestions.push({
        type: 'performance',
        priority: 'medium',
        title: 'Bundle size optimization',
        description: `Bundle size is ${(perfAnalysis.buildSize / 1024 / 1024).toFixed(2)}MB, consider tree shaking`,
        code: '// Enable tree shaking\n// Use dynamic imports\n// Analyze bundle with webpack-bundle-analyzer',
        impact: 'medium'
      });
    }
    
    // Dependency-based suggestions
    if (depAnalysis.totalDevDeps > 50) {
      suggestions.push({
        type: 'dependencies',
        priority: 'low',
        title: 'Review development dependencies',
        description: 'Large number of dev dependencies may slow down builds',
        code: '// Audit and remove unused dependencies\n// Use npm prune to clean up',
        impact: 'low'
      });
    }
    
    // Cache optimization suggestions
    if (config.cacheDir && !fs.existsSync(config.cacheDir)) {
      suggestions.push({
        type: 'caching',
        priority: 'medium',
        title: 'Enable build caching',
        description: 'Build cache directory not found, enabling caching can significantly improve build times',
        code: `// Ensure cache directory exists\n// Add to .gitignore: ${config.cacheDir}`,
        impact: 'medium'
      });
    }
    
    this.optimizationSuggestions.set('current', suggestions);
    this.log(`✅ Generated ${suggestions.length} optimization suggestions`);
  }

  async saveBuildAnalysisReport() {
    const report = {
      timestamp: new Date().toISOString(),
      buildSystem: this.buildMetrics.get('config')?.buildSystem || 'unknown',
      summary: {
        totalSuggestions: this.optimizationSuggestions.get('current')?.length || 0,
        highPrioritySuggestions: 0,
        buildTime: this.buildMetrics.get('performance')?.buildTime || 0,
        buildSize: this.buildMetrics.get('performance')?.buildSize || 0
      },
      configuration: this.buildMetrics.get('config') || {},
      dependencies: this.buildMetrics.get('dependencies') || {},
      performance: this.buildMetrics.get('performance') || {},
      suggestions: this.optimizationSuggestions.get('current') || [],
      buildHistory: this.buildHistory
    };
    
    // Calculate summary statistics
    const suggestions = this.optimizationSuggestions.get('current') || [];
    report.summary.highPrioritySuggestions = suggestions.filter(s => s.priority === 'high').length;
    
    const reportPath = path.join(__dirname, 'logs', 'build-optimization-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Build optimization report saved: ${reportPath}`);
    
    // Log summary
    this.log(`📈 Build System: ${report.buildSystem}`);
    this.log(`⏱️ Build Time: ${(report.summary.buildTime / 1000).toFixed(1)}s`);
    this.log(`📦 Build Size: ${(report.summary.buildSize / 1024 / 1024).toFixed(2)}MB`);
    this.log(`💡 Suggestions: ${report.summary.totalSuggestions} (${report.summary.highPrioritySuggestions} high priority)`);
  }

  getFilesRecursively(dir) {
    const files = [];
    if (!fs.existsSync(dir)) return files;
    
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.getFilesRecursively(fullPath));
      } else {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  async startContinuousOptimization() {
    this.log('🚀 Starting continuous build optimization monitoring...');
    
    // Initial analysis
    await this.runBuildAnalysis();
    
    // Schedule periodic analysis
    setInterval(async () => {
      this.log('🔄 Running periodic build analysis...');
      await this.runBuildAnalysis();
    }, 1800000); // Every 30 minutes
    
    // Monitor for configuration changes
    const configFiles = [
      'vite.config.ts',
      'vite.config.js',
      'webpack.config.js',
      'rollup.config.js',
      'package.json'
    ];
    
    configFiles.forEach(file => {
      if (fs.existsSync(file)) {
        fs.watchFile(file, async (curr, prev) => {
          if (curr.mtime > prev.mtime) {
            this.log(`📝 Configuration file changed: ${file}`);
            await this.runBuildAnalysis();
          }
        });
      }
    });
    
    this.log('✅ Continuous build optimization monitoring started');
  }

  getStatus() {
    return {
      running: true,
      buildSystem: this.buildMetrics.get('config')?.buildSystem || 'unknown',
      lastAnalysis: new Date().toISOString(),
      totalSuggestions: this.optimizationSuggestions.get('current')?.length || 0,
      buildHistory: this.buildHistory.length
    };
  }
}

// CLI handling
const optimizer = new BuildOptimizer();
const command = process.argv[2];

switch (command) {
  case 'start':
    optimizer.startContinuousOptimization();
    break;
  case 'analyze':
    optimizer.runBuildAnalysis();
    break;
  case 'status':
    console.log(JSON.stringify(optimizer.getStatus(), null, 2));
    break;
  default:
    optimizer.startContinuousOptimization();
}

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down Build Optimizer...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down Build Optimizer...');
  process.exit(0);
});