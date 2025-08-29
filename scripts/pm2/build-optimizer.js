#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class BuildOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/build-optimizer.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/build-optimization-report.json');
    this.startTime = Date.now();
    
    // Configuration from environment variables
    this.config = {
      optimizeBundles: process.env.OPTIMIZE_BUNDLES === 'true',
      treeShaking: process.env.TREE_SHAKING === 'true',
      codeSplitting: process.env.CODE_SPLITTING === 'true',
      minification: process.env.MINIFICATION === 'true',
      maxBundleSize: 2 * 1024 * 1024, // 2MB
      maxBuildTime: 120000, // 2 minutes
      excludedPatterns: [
        'node_modules/**',
        'dist/**',
        'build/**',
        'coverage/**'
      ]
    };
    
    this.buildMetrics = {
      buildTime: 0,
      bundleSize: 0,
      fileCount: 0,
      optimizationScore: 0
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;

    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async analyzeBuildConfiguration() {
    this.log('⚙️  Analyzing build configuration...');
    
    const config = {
      vite: null,
      webpack: null,
      rollup: null,
      optimization: {}
    };

    // Check Vite configuration
    const viteConfigPath = path.join(this.projectRoot, 'vite.config.ts');
    if (fs.existsSync(viteConfigPath)) {
      try {
        const viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
        config.vite = {
          exists: true,
          hasOptimization: /build.*optimization|minify|rollupOptions/.test(viteConfig),
          hasCodeSplitting: /rollupOptions.*output.*manualChunks/.test(viteConfig),
          hasTreeShaking: /rollupOptions.*treeshake/.test(viteConfig)
        };
      } catch (error) {
        this.log(`Error reading Vite config: ${error.message}`, 'ERROR');
      }
    }

    // Check Webpack configuration
    const webpackConfigPath = path.join(this.projectRoot, 'webpack.config.js');
    if (fs.existsSync(webpackConfigPath)) {
      try {
        const webpackConfig = fs.readFileSync(webpackConfigPath, 'utf8');
        config.webpack = {
          exists: true,
          hasOptimization: /optimization|minimize|splitChunks/.test(webpackConfig),
          hasCodeSplitting: /splitChunks|entry.*array/.test(webpackConfig),
          hasTreeShaking: /usedExports|sideEffects/.test(webpackConfig)
        };
      } catch (error) {
        this.log(`Error reading Webpack config: ${error.message}`, 'ERROR');
      }
    }

    // Check Rollup configuration
    const rollupConfigPath = path.join(this.projectRoot, 'rollup.config.js');
    if (fs.existsSync(rollupConfigPath)) {
      try {
        const rollupConfig = fs.readFileSync(rollupConfigPath, 'utf8');
        config.rollup = {
          exists: true,
          hasOptimization: /treeshake|minify|terser/.test(rollupConfig),
          hasCodeSplitting: /output.*manualChunks/.test(rollupConfig),
          hasTreeShaking: /treeshake.*true/.test(rollupConfig)
        };
      } catch (error) {
        this.log(`Error reading Rollup config: ${error.message}`, 'ERROR');
      }
    }

    return config;
  }

  async runBuild() {
    this.log('🏗️  Running build process...');
    
    try {
      const startTime = Date.now();
      
      // Clean previous build
      if (fs.existsSync('dist')) {
        execSync('rm -rf dist', { cwd: this.projectRoot, stdio: 'pipe' });
      }

      // Run build
      execSync('npm run build', {
        cwd: this.projectRoot,
        stdio: 'pipe',
        timeout: this.config.maxBuildTime
      });

      const buildTime = Date.now() - startTime;
      this.buildMetrics.buildTime = buildTime;
      
      this.log(`Build completed in ${buildTime}ms`);
      return { success: true, buildTime };
      
    } catch (error) {
      this.log(`Build failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async analyzeBuildOutput() {
    this.log('📊 Analyzing build output...');
    
    if (!fs.existsSync('dist')) {
      return { error: 'No build output found' };
    }

    const analysis = {
      totalSize: 0,
      fileCount: 0,
      jsFiles: [],
      cssFiles: [],
      assetFiles: [],
      bundleAnalysis: {},
      optimizationOpportunities: []
    };

    const calculateSize = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            calculateSize(fullPath);
          } else {
            analysis.totalSize += stat.size;
            analysis.fileCount++;
            
            const ext = path.extname(item);
            if (ext === '.js') {
              analysis.jsFiles.push({ name: item, size: stat.size, path: fullPath });
            } else if (ext === '.css') {
              analysis.cssFiles.push({ name: item, size: stat.size, path: fullPath });
            } else {
              analysis.assetFiles.push({ name: item, size: stat.size, path: fullPath });
            }
          }
        });
      } catch (error) {
        this.log(`Error calculating size for ${dir}: ${error.message}`, 'ERROR');
      }
    };

    calculateSize('dist');
    this.buildMetrics.bundleSize = analysis.totalSize;
    this.buildMetrics.fileCount = analysis.fileCount;

    // Analyze bundle optimization opportunities
    analysis.optimizationOpportunities = this.identifyOptimizationOpportunities(analysis);
    
    return analysis;
  }

  identifyOptimizationOpportunities(analysis) {
    const opportunities = [];
    
    // Large JavaScript bundles
    analysis.jsFiles.forEach(file => {
      if (file.size > this.config.maxBundleSize) {
        opportunities.push({
          type: 'large-bundle',
          file: file.name,
          size: file.size,
          severity: 'high',
          description: `JavaScript bundle ${file.name} is ${(file.size / 1024 / 1024).toFixed(2)}MB`,
          recommendation: 'Implement code splitting or lazy loading to reduce bundle size'
        });
      }
    });

    // Multiple CSS files (could be combined)
    if (analysis.cssFiles.length > 3) {
      opportunities.push({
        type: 'css-optimization',
        file: 'Multiple CSS files',
        count: analysis.cssFiles.length,
        severity: 'medium',
        description: `${analysis.cssFiles.length} CSS files detected`,
        recommendation: 'Consider combining CSS files to reduce HTTP requests'
      });
    }

    // Large asset files
    const largeAssets = analysis.assetFiles.filter(file => file.size > 1024 * 1024); // 1MB
    if (largeAssets.length > 0) {
      opportunities.push({
        type: 'large-assets',
        file: 'Large assets',
        count: largeAssets.length,
        severity: 'medium',
        description: `${largeAssets.length} asset files larger than 1MB`,
        recommendation: 'Optimize images and assets, consider lazy loading'
      });
    }

    // Overall bundle size
    if (analysis.totalSize > 5 * 1024 * 1024) { // 5MB
      opportunities.push({
        type: 'overall-size',
        file: 'Total bundle',
        size: analysis.totalSize,
        severity: 'high',
        description: `Total bundle size is ${(analysis.totalSize / 1024 / 1024).toFixed(2)}MB`,
        recommendation: 'Implement comprehensive bundle optimization strategies'
      });
    }

    return opportunities;
  }

  async runBundleAnalysis() {
    this.log('🔍 Running bundle analysis...');
    
    try {
      // Try to run bundle analyzer if available
      const analyzers = [
        'npm run analyze',
        'npm run bundle-analyzer',
        'npx webpack-bundle-analyzer dist',
        'npx vite-bundle-analyzer dist'
      ];

      for (const analyzer of analyzers) {
        try {
          execSync(analyzer, {
            cwd: this.projectRoot,
            stdio: 'pipe',
            timeout: 60000 // 1 minute
          });
          this.log(`Bundle analysis completed using: ${analyzer}`);
          return { success: true, analyzer };
        } catch (error) {
          // Continue to next analyzer
        }
      }

      this.log('No bundle analyzer found, using basic analysis');
      return { success: false, message: 'No bundle analyzer available' };
      
    } catch (error) {
      this.log(`Bundle analysis failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async generateOptimizationRecommendations(buildConfig, buildAnalysis) {
    this.log('💡 Generating optimization recommendations...');
    
    const recommendations = [];
    
    // Configuration-based recommendations
    if (buildConfig.vite?.exists && !buildConfig.vite.hasOptimization) {
      recommendations.push({
        type: 'vite-config',
        priority: 'high',
        title: 'Enable Vite build optimization',
        description: 'Vite optimization features are not configured',
        action: 'Add build.optimization, build.minify, and rollupOptions to vite.config.ts',
        impact: 'high'
      });
    }

    if (buildConfig.webpack?.exists && !buildConfig.webpack.hasOptimization) {
      recommendations.push({
        type: 'webpack-config',
        priority: 'high',
        title: 'Enable Webpack optimization',
        description: 'Webpack optimization features are not configured',
        action: 'Add optimization, minimize, and splitChunks to webpack.config.js',
        impact: 'high'
      });
    }

    // Bundle size recommendations
    buildAnalysis.optimizationOpportunities.forEach(opportunity => {
      recommendations.push({
        type: opportunity.type,
        priority: opportunity.severity === 'high' ? 'high' : 'medium',
        title: opportunity.description,
        description: opportunity.recommendation,
        action: opportunity.recommendation,
        impact: opportunity.severity === 'high' ? 'high' : 'medium'
      });
    });

    // Performance recommendations
    if (this.buildMetrics.buildTime > this.config.maxBuildTime) {
      recommendations.push({
        type: 'build-performance',
        priority: 'medium',
        title: 'Build time optimization',
        description: `Build time (${this.buildMetrics.buildTime}ms) exceeds threshold`,
        action: 'Optimize build process, consider parallel builds, caching',
        impact: 'medium'
      });
    }

    return recommendations;
  }

  calculateOptimizationScore(buildConfig, buildAnalysis, recommendations) {
    let score = 100;
    
    // Deduct points for missing optimizations
    if (buildConfig.vite?.exists && !buildConfig.vite.hasOptimization) score -= 20;
    if (buildConfig.webpack?.exists && !buildConfig.webpack.hasOptimization) score -= 20;
    
    // Deduct points for large bundles
    if (this.buildMetrics.bundleSize > 5 * 1024 * 1024) score -= 25;
    else if (this.buildMetrics.bundleSize > 2 * 1024 * 1024) score -= 15;
    
    // Deduct points for slow builds
    if (this.buildMetrics.buildTime > this.config.maxBuildTime) score -= 20;
    else if (this.buildMetrics.buildTime > 60000) score -= 10;
    
    // Deduct points for optimization opportunities
    score -= recommendations.length * 5;
    
    this.buildMetrics.optimizationScore = Math.max(0, score);
    return this.buildMetrics.optimizationScore;
  }

  async generateReport(buildConfig, buildAnalysis, recommendations, optimizationScore) {
    this.log('📊 Generating build optimization report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      buildMetrics: this.buildMetrics,
      buildConfiguration: buildConfig,
      buildAnalysis: buildAnalysis,
      recommendations: recommendations,
      optimizationScore: optimizationScore,
      summary: {
        totalFiles: buildAnalysis.fileCount,
        totalSize: buildAnalysis.totalSize,
        buildTime: this.buildMetrics.buildTime,
        optimizationOpportunities: buildAnalysis.optimizationOpportunities.length
      }
    };

    try {
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`📊 Build optimization report generated: ${this.reportFile}`);
    } catch (error) {
      this.log(`Failed to write report: ${error.message}`, 'ERROR');
    }

    return report;
  }

  async run() {
    this.log('🚀 Starting Build Optimization Monitor...');
    
    try {
      // 1. Analyze build configuration
      const buildConfig = await this.analyzeBuildConfiguration();
      
      // 2. Run build process
      const buildResult = await this.runBuild();
      if (!buildResult.success) {
        throw new Error(`Build failed: ${buildResult.error}`);
      }
      
      // 3. Analyze build output
      const buildAnalysis = await this.analyzeBuildOutput();
      
      // 4. Run bundle analysis
      await this.runBundleAnalysis();
      
      // 5. Generate optimization recommendations
      const recommendations = await this.generateOptimizationRecommendations(buildConfig, buildAnalysis);
      
      // 6. Calculate optimization score
      const optimizationScore = this.calculateOptimizationScore(buildConfig, buildAnalysis, recommendations);
      
      // 7. Generate comprehensive report
      const report = await this.generateReport(buildConfig, buildAnalysis, recommendations, optimizationScore);
      
      // 8. Log summary
      this.log('\n📊 Build Optimization Summary:');
      this.log(`Build time: ${this.buildMetrics.buildTime}ms`);
      this.log(`Bundle size: ${(this.buildMetrics.bundleSize / 1024 / 1024).toFixed(2)}MB`);
      this.log(`File count: ${this.buildMetrics.fileCount}`);
      this.log(`Optimization score: ${optimizationScore}/100`);
      this.log(`Recommendations: ${recommendations.length}`);
      
      if (recommendations.length > 0) {
        this.log('\n💡 Key recommendations:');
        recommendations.slice(0, 3).forEach(rec => {
          this.log(`- ${rec.title} (${rec.priority} priority)`);
        });
      }
      
      this.log('✅ Build optimization analysis completed successfully!');
      
      return report;
      
    } catch (error) {
      this.log(`❌ Build optimization failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the build optimizer
if (require.main === module) {
  const optimizer = new BuildOptimizer();
  optimizer.run().catch(error => {
    console.error('Build optimizer failed:', error);
    process.exit(1);
  });
}

module.exports = BuildOptimizer;