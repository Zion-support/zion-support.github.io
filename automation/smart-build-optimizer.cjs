#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class SmartBuildOptimizer {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 7200000; // 2 hours default
    this.optimizationStrategy = process.env.BUILD_OPTIMIZATION_STRATEGY || 'aggressive';
    this.buildPerformanceThreshold = parseInt(process.env.BUILD_PERFORMANCE_THRESHOLD) || 80;
    this.optimizationHistory = [];
    this.buildMetrics = {
      totalBuilds: 0,
      optimizedBuilds: 0,
      averageBuildTime: 0,
      averageBundleSize: 0,
      buildSuccessRate: 0
    };
    
    console.log('⚡ Smart Build Optimizer Started');
    console.log(`⏰ Optimization Interval: ${this.interval / 1000}s`);
    console.log(`🔧 Strategy: ${this.optimizationStrategy}`);
    console.log(`🎯 Performance Threshold: ${this.buildPerformanceThreshold}%`);
  }

  async start() {
    console.log('🚀 Starting smart build optimization...');
    
    // Initial build optimization run
    await this.performBuildOptimization();
    
    // Set up continuous optimization
    setInterval(async () => {
      await this.performBuildOptimization();
    }, this.interval);
    
    // Keep process alive
    setInterval(() => {
      this.logStatus();
    }, 1200000); // Log status every 20 minutes
  }

  async performBuildOptimization() {
    try {
      console.log('⚡ Performing smart build optimization...');
      
      const startTime = Date.now();
      
      // Analyze build configuration
      const buildConfig = await this.analyzeBuildConfiguration();
      
      // Analyze build performance
      const performanceAnalysis = await this.analyzeBuildPerformance(buildConfig);
      
      // Identify optimization opportunities
      const opportunities = await this.identifyBuildOptimizationOpportunities(performanceAnalysis);
      
      // Apply intelligent optimizations
      const optimizationResults = await this.applyBuildOptimizations(opportunities);
      
      // Generate optimization recommendations
      const recommendations = await this.generateBuildRecommendations(performanceAnalysis, optimizationResults);
      
      // Store optimization history
      const optimizationEntry = {
        timestamp: new Date().toISOString(),
        buildConfig: buildConfig,
        performanceAnalysis: performanceAnalysis,
        opportunities: opportunities,
        optimizationResults: optimizationResults,
        recommendations: recommendations,
        optimizationTime: Date.now() - startTime
      };
      
      this.optimizationHistory.push(optimizationEntry);
      
      // Keep only last 15 optimization runs
      if (this.optimizationHistory.length > 15) {
        this.optimizationHistory = this.optimizationHistory.slice(-15);
      }
      
      // Update metrics
      this.updateBuildMetrics(optimizationResults, performanceAnalysis);
      
      // Log results
      this.logBuildResults();
      
      // Save results
      this.saveResults();
      
      console.log(`✅ Build optimization completed in ${optimizationEntry.optimizationTime}ms`);
      
    } catch (error) {
      console.error('❌ Error during build optimization:', error.message);
    }
  }

  async analyzeBuildConfiguration() {
    const config = {
      buildTools: [],
      configuration: {},
      dependencies: {},
      scripts: {},
      issues: [],
      strengths: []
    };
    
    try {
      // Check for package.json
      if (fs.existsSync('package.json')) {
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        
        // Analyze build scripts
        if (packageJson.scripts) {
          config.scripts = packageJson.scripts;
          
          // Identify build-related scripts
          Object.keys(packageJson.scripts).forEach(scriptName => {
            if (scriptName.includes('build') || scriptName.includes('dev') || scriptName.includes('start')) {
              config.strengths.push(`Build script found: ${scriptName}`);
            }
          });
        }
        
        // Analyze dependencies
        if (packageJson.dependencies) {
          config.dependencies.production = packageJson.dependencies;
        }
        if (packageJson.devDependencies) {
          config.dependencies.development = packageJson.devDependencies;
        }
        
        // Check for build tools
        const buildTools = ['vite', 'webpack', 'rollup', 'parcel', 'esbuild'];
        buildTools.forEach(tool => {
          if (packageJson.dependencies?.[tool] || packageJson.devDependencies?.[tool]) {
            config.buildTools.push(tool);
            config.strengths.push(`Build tool detected: ${tool}`);
          }
        });
      }
      
      // Check for build configuration files
      const configFiles = ['vite.config.js', 'vite.config.ts', 'webpack.config.js', 'rollup.config.js'];
      configFiles.forEach(configFile => {
        if (fs.existsSync(configFile)) {
          config.configuration[configFile] = this.analyzeConfigFile(configFile);
        }
      });
      
      // Check for TypeScript configuration
      if (fs.existsSync('tsconfig.json')) {
        config.strengths.push('TypeScript configuration found');
        config.configuration.tsconfig = this.analyzeTSConfig();
      }
      
    } catch (error) {
      console.error('❌ Error analyzing build configuration:', error.message);
    }
    
    return config;
  }

  async analyzeBuildPerformance(buildConfig) {
    const analysis = {
      overall: 0,
      buildTime: 0,
      bundleSize: 0,
      optimizationLevel: 0,
      issues: [],
      strengths: []
    };
    
    try {
      // Analyze build tools performance
      if (buildConfig.buildTools.includes('vite')) {
        analysis.strengths.push('Vite detected - Fast build tool');
        analysis.buildTime += 30;
        analysis.optimizationLevel += 25;
      } else if (buildConfig.buildTools.includes('webpack')) {
        analysis.strengths.push('Webpack detected - Mature build tool');
        analysis.buildTime += 20;
        analysis.optimizationLevel += 20;
      }
      
      // Analyze build scripts
      if (buildConfig.scripts.build) {
        analysis.strengths.push('Build script configured');
        analysis.overall += 20;
      } else {
        analysis.issues.push('No build script found');
        analysis.overall -= 20;
      }
      
      // Analyze TypeScript configuration
      if (buildConfig.configuration.tsconfig) {
        const tsConfig = buildConfig.configuration.tsconfig;
        if (tsConfig.strict) {
          analysis.strengths.push('Strict TypeScript mode enabled');
          analysis.optimizationLevel += 15;
        }
        if (tsConfig.incremental) {
          analysis.strengths.push('Incremental compilation enabled');
          analysis.buildTime += 15;
        }
      }
      
      // Analyze Vite configuration
      if (buildConfig.configuration['vite.config.js'] || buildConfig.configuration['vite.config.ts']) {
        const viteConfig = buildConfig.configuration['vite.config.js'] || buildConfig.configuration['vite.config.ts'];
        if (viteConfig.build?.minify) {
          analysis.strengths.push('Code minification enabled');
          analysis.bundleSize += 20;
        }
        if (viteConfig.build?.sourcemap) {
          analysis.strengths.push('Source maps enabled for debugging');
        }
      }
      
      // Calculate overall score
      analysis.overall = Math.round(
        (analysis.buildTime + analysis.bundleSize + analysis.optimizationLevel) / 3
      );
      
    } catch (error) {
      console.error('❌ Error analyzing build performance:', error.message);
    }
    
    return analysis;
  }

  async identifyBuildOptimizationOpportunities(performanceAnalysis) {
    const opportunities = [];
    
    // Identify performance issues
    if (performanceAnalysis.overall < this.buildPerformanceThreshold) {
      opportunities.push({
        type: 'performance-improvement',
        priority: 'high',
        description: 'Improve overall build performance',
        currentScore: performanceAnalysis.overall,
        targetScore: this.buildPerformanceThreshold,
        recommendations: ['Optimize build configuration', 'Enable incremental builds', 'Configure code splitting']
      });
    }
    
    // Identify build time opportunities
    if (performanceAnalysis.buildTime < 60) {
      opportunities.push({
        type: 'build-time-optimization',
        priority: 'medium',
        description: 'Optimize build time',
        recommendations: ['Enable incremental compilation', 'Use build caching', 'Optimize dependencies']
      });
    }
    
    // Identify bundle size opportunities
    if (performanceAnalysis.bundleSize < 70) {
      opportunities.push({
        type: 'bundle-size-optimization',
        priority: 'medium',
        description: 'Optimize bundle size',
        recommendations: ['Enable tree shaking', 'Configure code splitting', 'Optimize images and assets']
      });
    }
    
    return opportunities;
  }

  async applyBuildOptimizations(opportunities) {
    const results = {
      optimizationsApplied: 0,
      configsModified: 0,
      performanceImprovement: 0,
      errors: []
    };
    
    try {
      for (const opportunity of opportunities) {
        if (opportunity.type === 'performance-improvement') {
          const optimizationResult = await this.optimizeBuildConfiguration(opportunity);
          
          if (optimizationResult.success) {
            results.optimizationsApplied++;
            results.configsModified++;
            results.performanceImprovement += optimizationResult.improvement;
          } else {
            results.errors.push(optimizationResult.error);
          }
        }
      }
    } catch (error) {
      console.error('❌ Error applying build optimizations:', error.message);
    }
    
    return results;
  }

  async optimizeBuildConfiguration(opportunity) {
    try {
      let modified = false;
      let improvement = 0;
      
      // Optimize TypeScript configuration
      if (fs.existsSync('tsconfig.json')) {
        const tsConfigPath = 'tsconfig.json';
        const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'));
        
        // Enable incremental compilation if not already enabled
        if (!tsConfig.compilerOptions?.incremental) {
          if (!tsConfig.compilerOptions) tsConfig.compilerOptions = {};
          tsConfig.compilerOptions.incremental = true;
          modified = true;
          improvement += 10;
        }
        
        // Enable strict mode if not already enabled
        if (!tsConfig.compilerOptions?.strict) {
          if (!tsConfig.compilerOptions) tsConfig.compilerOptions = {};
          tsConfig.compilerOptions.strict = true;
          modified = true;
          improvement += 15;
        }
        
        if (modified) {
          fs.writeFileSync(tsConfigPath, JSON.stringify(tsConfig, null, 2));
        }
      }
      
      // Optimize Vite configuration
      const viteConfigFiles = ['vite.config.js', 'vite.config.ts'];
      for (const configFile of viteConfigFiles) {
        if (fs.existsSync(configFile)) {
          const viteConfigPath = configFile;
          let viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
          
          // Add build optimizations if not present
          if (!viteConfig.includes('build: {')) {
            const buildConfig = `
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
  },`;
            
            // Insert build config before the closing brace
            if (viteConfig.includes('export default')) {
              viteConfig = viteConfig.replace('export default {', `export default {${buildConfig}`);
              modified = true;
              improvement += 20;
            }
          }
          
          if (modified) {
            fs.writeFileSync(viteConfigPath, viteConfig);
          }
        }
      }
      
      return {
        success: true,
        improvement: improvement,
        message: 'Build configuration optimized successfully'
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  async generateBuildRecommendations(performanceAnalysis, optimizationResults) {
    const recommendations = [];
    
    // Performance-based recommendations
    if (performanceAnalysis.overall < this.buildPerformanceThreshold) {
      recommendations.push({
        priority: 'high',
        category: 'performance',
        description: 'Improve build performance',
        action: `Target: ${this.buildPerformanceThreshold}%, Current: ${performanceAnalysis.overall}%`,
        effort: 'medium'
      });
    }
    
    // Build time recommendations
    if (performanceAnalysis.buildTime < 60) {
      recommendations.push({
        priority: 'medium',
        category: 'build-time',
        description: 'Optimize build time',
        action: 'Enable incremental builds and caching',
        effort: 'low'
      });
    }
    
    // Bundle size recommendations
    if (performanceAnalysis.bundleSize < 70) {
      recommendations.push({
        priority: 'medium',
        category: 'bundle-size',
        description: 'Optimize bundle size',
        action: 'Enable tree shaking and code splitting',
        effort: 'medium'
      });
    }
    
    // Maintenance recommendations
    recommendations.push({
      priority: 'low',
      category: 'maintenance',
      description: 'Regular build optimization',
      action: 'Schedule monthly build performance reviews',
      effort: 'low'
    });
    
    return recommendations;
  }

  updateBuildMetrics(optimizationResults, performanceAnalysis) {
    this.buildMetrics.totalBuilds++;
    this.buildMetrics.optimizedBuilds += optimizationResults.optimizationsApplied;
    this.buildMetrics.averageBuildTime = performanceAnalysis.buildTime;
    this.buildMetrics.averageBundleSize = performanceAnalysis.bundleSize;
    this.buildMetrics.buildSuccessRate = Math.round((this.buildMetrics.optimizedBuilds / this.buildMetrics.totalBuilds) * 100);
  }

  logBuildResults() {
    if (this.optimizationHistory.length > 0) {
      const latest = this.optimizationHistory[this.optimizationHistory.length - 1];
      
      console.log('\n⚡ Smart Build Optimization Results:');
      console.log('─'.repeat(50));
      console.log(`📅 Timestamp: ${latest.timestamp}`);
      console.log(`⏱️  Optimization Time: ${latest.optimizationTime}ms`);
      console.log(`🔧 Build Tools: ${latest.buildConfig.buildTools.join(', ') || 'None detected'}`);
      console.log(`⚙️  Configs Modified: ${latest.optimizationResults.configsModified}`);
      console.log(`📊 Performance Score: ${latest.performanceAnalysis.overall}%`);
      console.log(`🎯 Target Performance: ${this.buildPerformanceThreshold}%`);
      console.log(`📈 Performance Improvement: ${latest.optimizationResults.performanceImprovement} points`);
      console.log('─'.repeat(50));
    }
  }

  logStatus() {
    const memoryUsage = process.memoryUsage();
    const uptime = process.uptime();
    
    console.log(`⚡ Smart Build Optimizer Status - Uptime: ${Math.round(uptime)}s, Memory: ${Math.round(memoryUsage.heapUsed / 1024 / 1024)}MB`);
    console.log(`📊 Total Builds: ${this.buildMetrics.totalBuilds}, Success Rate: ${this.buildMetrics.buildSuccessRate}%`);
  }

  saveResults() {
    try {
      const resultsPath = path.join(process.cwd(), 'logs', 'smart-build-optimizer-results.json');
      fs.writeFileSync(resultsPath, JSON.stringify(this.optimizationHistory, null, 2));
    } catch (error) {
      console.error('❌ Failed to save build optimization results:', error.message);
    }
  }

  analyzeConfigFile(configFile) {
    try {
      const content = fs.readFileSync(configFile, 'utf8');
      const ext = path.extname(configFile).toLowerCase();
      
      if (ext === '.js' || ext === '.ts') {
        return {
          type: 'javascript',
          hasBuildConfig: content.includes('build:'),
          hasOptimization: content.includes('minify') || content.includes('terser'),
          hasCodeSplitting: content.includes('manualChunks') || content.includes('splitChunks')
        };
      }
      
      return { type: 'unknown' };
    } catch (error) {
      return { type: 'error', error: error.message };
    }
  }

  analyzeTSConfig() {
    try {
      const tsConfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
      return {
        strict: tsConfig.compilerOptions?.strict || false,
        incremental: tsConfig.compilerOptions?.incremental || false,
        target: tsConfig.compilerOptions?.target || 'es5',
        module: tsConfig.compilerOptions?.module || 'commonjs'
      };
    } catch (error) {
      return { error: error.message };
    }
  }
}

// Start the smart build optimizer
const optimizer = new SmartBuildOptimizer();
optimizer.start().catch(error => {
  console.error('❌ Failed to start smart build optimizer:', error);
  process.exit(1);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down smart build optimizer...');
  optimizer.saveResults();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down smart build optimizer...');
  optimizer.saveResults();
  process.exit(0);
});