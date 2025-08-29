#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Smart Build Optimizer...');

class SmartBuildOptimizer {
  constructor() {
    this.buildResults = {
      configuration: {},
      performance: {},
      optimizations: [],
      recommendations: [],
      buildScore: 0,
      timestamp: new Date().toISOString()
    };
    this.reportDir = path.join(process.cwd(), 'build-optimization-reports');
    this.ensureReportDirectory();
    this.optimizationThresholds = {
      maxBuildTime: 30000, // 30 seconds
      maxBundleSize: 500, // 500 KB
      maxDependencies: 100,
      minBuildScore: 80
    };
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async optimizeBuild() {
    console.log('🔍 Analyzing and optimizing build process...');
    
    try {
      await this.analyzeBuildConfiguration();
      await this.analyzeBuildPerformance();
      await this.analyzeDependencies();
      await this.analyzeBundleOptimization();
      await this.generateOptimizations();
      await this.calculateBuildScore();
      await this.generateRecommendations();
      await this.saveReport();
      
      console.log('✅ Smart build optimization completed');
      return this.buildResults;
    } catch (error) {
      console.error('❌ Smart build optimization failed:', error.message);
      throw error;
    }
  }

  async analyzeBuildConfiguration() {
    console.log('⚙️  Analyzing build configuration...');
    
    try {
      const config = {
        vite: {},
        typescript: {},
        postcss: {},
        tailwind: {},
        buildScripts: {}
      };
      
      // Analyze Vite configuration
      if (fs.existsSync('vite.config.ts') || fs.existsSync('vite.config.js')) {
        const viteConfig = fs.existsSync('vite.config.ts') ? 'vite.config.ts' : 'vite.config.js';
        const viteContent = fs.readFileSync(viteConfig, 'utf8');
        config.vite = this.analyzeViteConfig(viteContent);
      }
      
      // Analyze TypeScript configuration
      if (fs.existsSync('tsconfig.json')) {
        const tsConfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
        config.typescript = this.analyzeTypeScriptConfig(tsConfig);
      }
      
      // Analyze PostCSS configuration
      if (fs.existsSync('postcss.config.js')) {
        const postcssContent = fs.readFileSync('postcss.config.js', 'utf8');
        config.postcss = this.analyzePostCSSConfig(postcssContent);
      }
      
      // Analyze Tailwind configuration
      if (fs.existsSync('tailwind.config.js')) {
        const tailwindConfig = JSON.parse(fs.readFileSync('tailwind.config.js', 'utf8'));
        config.tailwind = this.analyzeTailwindConfig(tailwindConfig);
      }
      
      // Analyze package.json build scripts
      if (fs.existsSync('package.json')) {
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        config.buildScripts = this.analyzeBuildScripts(packageJson);
      }
      
      this.buildResults.configuration = config;
      console.log('⚙️  Build configuration analysis completed');
      
    } catch (error) {
      console.log('⚠️  Build configuration analysis failed:', error.message);
    }
  }

  analyzeViteConfig(content) {
    const analysis = {
      hasOptimizations: false,
      optimizations: [],
      suggestions: []
    };
    
    // Check for build optimizations
    if (content.includes('build.rollupOptions')) {
      analysis.hasOptimizations = true;
      analysis.optimizations.push('Rollup options configured');
    }
    
    if (content.includes('build.minify')) {
      analysis.optimizations.push('Minification enabled');
    }
    
    if (content.includes('build.sourcemap')) {
      analysis.optimizations.push('Source maps configured');
    }
    
    if (content.includes('build.chunkSizeWarningLimit')) {
      analysis.optimizations.push('Chunk size warnings configured');
    }
    
    // Check for missing optimizations
    if (!content.includes('build.rollupOptions')) {
      analysis.suggestions.push('Consider adding rollup options for better bundle optimization');
    }
    
    if (!content.includes('build.minify')) {
      analysis.suggestions.push('Enable minification for production builds');
    }
    
    return analysis;
  }

  analyzeTypeScriptConfig(config) {
    const analysis = {
      hasOptimizations: false,
      optimizations: [],
      suggestions: []
    };
    
    // Check for build optimizations
    if (config.compilerOptions?.incremental) {
      analysis.hasOptimizations = true;
      analysis.optimizations.push('Incremental compilation enabled');
    }
    
    if (config.compilerOptions?.skipLibCheck) {
      analysis.optimizations.push('Library checking skipped for faster builds');
    }
    
    if (config.compilerOptions?.isolatedModules) {
      analysis.optimizations.push('Isolated modules enabled');
    }
    
    // Check for missing optimizations
    if (!config.compilerOptions?.incremental) {
      analysis.suggestions.push('Enable incremental compilation for faster rebuilds');
    }
    
    if (!config.compilerOptions?.skipLibCheck) {
      analysis.suggestions.push('Consider skipping library checks for faster builds');
    }
    
    return analysis;
  }

  analyzePostCSSConfig(content) {
    const analysis = {
      hasOptimizations: false,
      optimizations: [],
      suggestions: []
    };
    
    // Check for CSS optimizations
    if (content.includes('cssnano')) {
      analysis.hasOptimizations = true;
      analysis.optimizations.push('CSS minification enabled');
    }
    
    if (content.includes('autoprefixer')) {
      analysis.optimizations.push('Autoprefixer enabled');
    }
    
    // Check for missing optimizations
    if (!content.includes('cssnano')) {
      analysis.suggestions.push('Add cssnano for CSS minification');
    }
    
    return analysis;
  }

  analyzeTailwindConfig(config) {
    const analysis = {
      hasOptimizations: false,
      optimizations: [],
      suggestions: []
    };
    
    // Check for Tailwind optimizations
    if (config.purge || config.content) {
      analysis.hasOptimizations = true;
      analysis.optimizations.push('Content purging configured');
    }
    
    if (config.corePlugins) {
      analysis.optimizations.push('Core plugins configuration');
    }
    
    // Check for missing optimizations
    if (!config.purge && !config.content) {
      analysis.suggestions.push('Configure content purging to reduce CSS bundle size');
    }
    
    return analysis;
  }

  analyzeBuildScripts(packageJson) {
    const analysis = {
      hasOptimizations: false,
      optimizations: [],
      suggestions: []
    };
    
    const scripts = packageJson.scripts || {};
    
    // Check for build optimizations
    if (scripts.build && scripts.build.includes('--mode production')) {
      analysis.hasOptimizations = true;
      analysis.optimizations.push('Production mode specified');
    }
    
    if (scripts['build:analyze']) {
      analysis.optimizations.push('Bundle analysis script available');
    }
    
    if (scripts['build:clean']) {
      analysis.optimizations.push('Clean build script available');
    }
    
    // Check for missing optimizations
    if (!scripts.build?.includes('--mode production')) {
      analysis.suggestions.push('Specify production mode in build script');
    }
    
    if (!scripts['build:analyze']) {
      analysis.suggestions.push('Add bundle analysis script for optimization insights');
    }
    
    return analysis;
  }

  async analyzeBuildPerformance() {
    console.log('⏱️  Analyzing build performance...');
    
    try {
      const performance = {
        buildTime: 0,
        buildTimeFormatted: 'N/A',
        memoryUsage: 0,
        cpuUsage: 0,
        status: 'pending'
      };
      
      // Measure build time
      const startTime = Date.now();
      const startMemory = process.memoryUsage();
      
      try {
        const buildOutput = execSync('npm run build', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        const buildTime = Date.now() - startTime;
        const endMemory = process.memoryUsage();
        
        performance.buildTime = buildTime;
        performance.buildTimeFormatted = this.formatTime(buildTime);
        performance.memoryUsage = endMemory.heapUsed - startMemory.heapUsed;
        performance.status = 'success';
        performance.output = buildOutput;
        
        console.log(`⏱️  Build completed in ${performance.buildTimeFormatted}`);
        
      } catch (error) {
        performance.status = 'failure';
        performance.error = error.message;
        console.log('❌ Build failed:', error.message);
      }
      
      this.buildResults.performance = performance;
      
    } catch (error) {
      console.log('⚠️  Build performance analysis failed:', error.message);
    }
  }

  async analyzeDependencies() {
    console.log('📦 Analyzing dependencies for build optimization...');
    
    try {
      const dependencyAnalysis = {
        totalDependencies: 0,
        devDependencies: 0,
        buildDependencies: 0,
        largeDependencies: [],
        optimizationOpportunities: []
      };
      
      if (fs.existsSync('package.json')) {
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        
        dependencyAnalysis.totalDependencies = Object.keys(packageJson.dependencies || {}).length;
        dependencyAnalysis.devDependencies = Object.keys(packageJson.devDependencies || {}).length;
        
        // Identify build-related dependencies
        const buildDeps = ['vite', 'typescript', 'postcss', 'tailwindcss', 'esbuild', 'rollup'];
        dependencyAnalysis.buildDependencies = buildDeps.filter(dep => 
          packageJson.dependencies?.[dep] || packageJson.devDependencies?.[dep]
        ).length;
        
        // Check for large dependencies
        if (fs.existsSync('package-lock.json')) {
          const packageLock = JSON.parse(fs.readFileSync('package-lock.json', 'utf8'));
          const largeDeps = this.findLargeDependencies(packageLock);
          dependencyAnalysis.largeDependencies = largeDeps;
        }
        
        // Generate optimization opportunities
        dependencyAnalysis.optimizationOpportunities = this.generateDependencyOptimizations(packageJson);
      }
      
      this.buildResults.dependencies = dependencyAnalysis;
      console.log(`📦 Analyzed ${dependencyAnalysis.totalDependencies} dependencies`);
      
    } catch (error) {
      console.log('⚠️  Dependency analysis failed:', error.message);
    }
  }

  findLargeDependencies(packageLock) {
    const largeDeps = [];
    
    const checkDependencies = (deps, path = '') => {
      if (!deps) return;
      
      Object.entries(deps).forEach(([name, dep]) => {
        if (dep.size && dep.size > 1024 * 1024) { // Larger than 1MB
          largeDeps.push({
            name: name,
            size: Math.round(dep.size / 1024 / 1024 * 100) / 100, // MB
            version: dep.version,
            path: path
          });
        }
      });
    };
    
    checkDependencies(packageLock.dependencies);
    checkDependencies(packageLock.devDependencies, 'devDependencies');
    
    return largeDeps.sort((a, b) => b.size - a.size);
  }

  generateDependencyOptimizations(packageJson) {
    const opportunities = [];
    
    // Check for duplicate functionality
    const hasMultipleBundlers = ['webpack', 'vite', 'parcel', 'rollup'].filter(bundler => 
      packageJson.dependencies?.[bundler] || packageJson.devDependencies?.[bundler]
    ).length > 1;
    
    if (hasMultipleBundlers) {
      opportunities.push({
        type: 'duplicate_bundlers',
        description: 'Multiple bundlers detected',
        suggestion: 'Use only one bundler to avoid conflicts and reduce bundle size'
      });
    }
    
    // Check for unused build tools
    const buildTools = ['gulp', 'grunt', 'webpack'];
    buildTools.forEach(tool => {
      if (packageJson.dependencies?.[tool] || packageJson.devDependencies?.[tool]) {
        opportunities.push({
          type: 'unused_build_tool',
          description: `Unused build tool: ${tool}`,
          suggestion: `Remove ${tool} if not actively used`
        });
      }
    });
    
    return opportunities;
  }

  async analyzeBundleOptimization() {
    console.log('📦 Analyzing bundle optimization...');
    
    try {
      const bundleAnalysis = {
        totalSize: 0,
        fileCount: 0,
        optimizationScore: 0,
        suggestions: []
      };
      
      const distDir = path.join(process.cwd(), 'dist');
      if (fs.existsSync(distDir)) {
        const bundleStats = this.analyzeBundleFiles(distDir);
        bundleAnalysis.totalSize = bundleStats.totalSize;
        bundleAnalysis.fileCount = bundleStats.fileCount;
        bundleAnalysis.optimizationScore = this.calculateBundleOptimizationScore(bundleStats);
        bundleAnalysis.suggestions = this.generateBundleOptimizationSuggestions(bundleStats);
      }
      
      this.buildResults.bundleOptimization = bundleAnalysis;
      console.log(`📦 Bundle analysis completed: ${bundleStats?.totalSize || 0} KB total`);
      
    } catch (error) {
      console.log('⚠️  Bundle optimization analysis failed:', error.message);
    }
  }

  analyzeBundleFiles(distDir) {
    const stats = {
      totalSize: 0,
      fileCount: 0,
      fileTypes: {},
      largestFiles: []
    };
    
    const analyzeDirectory = (dir) => {
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          analyzeDirectory(fullPath);
        } else if (stat.isFile()) {
          const size = stat.size;
          const ext = path.extname(item);
          
          stats.totalSize += size;
          stats.fileCount++;
          
          if (!stats.fileTypes[ext]) {
            stats.fileTypes[ext] = { count: 0, size: 0 };
          }
          stats.fileTypes[ext].count++;
          stats.fileTypes[ext].size += size;
          
          stats.largestFiles.push({
            name: item,
            path: path.relative(distDir, fullPath),
            size: size,
            sizeKB: Math.round(size / 1024)
          });
        }
      });
    };
    
    analyzeDirectory(distDir);
    
    // Sort largest files
    stats.largestFiles.sort((a, b) => b.size - a.size);
    stats.largestFiles = stats.largestFiles.slice(0, 10);
    
    // Convert total size to KB
    stats.totalSize = Math.round(stats.totalSize / 1024);
    
    return stats;
  }

  calculateBundleOptimizationScore(bundleStats) {
    let score = 100;
    
    // Penalize large bundle size
    if (bundleStats.totalSize > this.optimizationThresholds.maxBundleSize) {
      score -= Math.min(30, (bundleStats.totalSize - this.optimizationThresholds.maxBundleSize) / 10);
    }
    
    // Penalize too many files
    if (bundleStats.fileCount > 20) {
      score -= Math.min(20, (bundleStats.fileCount - 20) / 2);
    }
    
    // Bonus for good optimization
    if (bundleStats.totalSize < 200) {
      score += 10;
    }
    
    return Math.max(0, Math.min(100, score));
  }

  generateBundleOptimizationSuggestions(bundleStats) {
    const suggestions = [];
    
    if (bundleStats.totalSize > this.optimizationThresholds.maxBundleSize) {
      suggestions.push({
        priority: 'high',
        category: 'bundle_size',
        description: `Bundle size (${bundleStats.totalSize} KB) exceeds threshold`,
        suggestion: 'Implement code splitting, tree shaking, and remove unused code'
      });
    }
    
    if (bundleStats.fileCount > 20) {
      suggestions.push({
        priority: 'medium',
        category: 'file_count',
        description: `Too many bundle files (${bundleStats.fileCount})`,
        suggestion: 'Consider consolidating files and using chunk optimization'
      });
    }
    
    // Check for large individual files
    bundleStats.largestFiles.slice(0, 3).forEach(file => {
      if (file.sizeKB > 100) {
        suggestions.push({
          priority: 'medium',
          category: 'large_file',
          description: `Large file: ${file.path} (${file.sizeKB} KB)`,
          suggestion: 'Consider splitting or optimizing this file'
        });
      }
    });
    
    return suggestions;
  }

  async generateOptimizations() {
    console.log('💡 Generating build optimizations...');
    
    const optimizations = [];
    
    // Configuration optimizations
    Object.entries(this.buildResults.configuration).forEach(([tool, config]) => {
      if (config.suggestions && config.suggestions.length > 0) {
        config.suggestions.forEach(suggestion => {
          optimizations.push({
            tool: tool,
            type: 'configuration',
            description: suggestion,
            priority: 'medium',
            impact: 'build_performance'
          });
        });
      }
    });
    
    // Performance optimizations
    if (this.buildResults.performance.buildTime > this.optimizationThresholds.maxBuildTime) {
      optimizations.push({
        tool: 'build',
        type: 'performance',
        description: `Build time (${this.buildResults.performance.buildTimeFormatted}) exceeds threshold`,
        priority: 'high',
        impact: 'build_speed'
      });
    }
    
    // Dependency optimizations
    if (this.buildResults.dependencies) {
      this.buildResults.dependencies.optimizationOpportunities.forEach(opp => {
        optimizations.push({
          tool: 'dependencies',
          type: 'cleanup',
          description: opp.description,
          priority: 'medium',
          impact: 'bundle_size'
        });
      });
    }
    
    // Bundle optimizations
    if (this.buildResults.bundleOptimization) {
      this.buildResults.bundleOptimization.suggestions.forEach(suggestion => {
        optimizations.push({
          tool: 'bundle',
          type: 'optimization',
          description: suggestion.description,
          priority: suggestion.priority,
          impact: 'bundle_size'
        });
      });
    }
    
    // Sort by priority
    optimizations.sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
    
    this.buildResults.optimizations = optimizations;
    console.log(`💡 Generated ${optimizations.length} build optimizations`);
  }

  async calculateBuildScore() {
    console.log('📊 Calculating overall build score...');
    
    let score = 100;
    
    // Configuration score
    const configScore = this.calculateConfigurationScore();
    score = score * 0.3 + configScore * 0.7;
    
    // Performance score
    const perfScore = this.calculatePerformanceScore();
    score = score * 0.3 + perfScore * 0.7;
    
    // Bundle optimization score
    if (this.buildResults.bundleOptimization) {
      score = score * 0.3 + this.buildResults.bundleOptimization.optimizationScore * 0.7;
    }
    
    this.buildResults.buildScore = Math.round(score);
    console.log(`📊 Overall build score: ${score.toFixed(1)}/100`);
  }

  calculateConfigurationScore() {
    let score = 0;
    let totalTools = 0;
    
    Object.values(this.buildResults.configuration).forEach(config => {
      if (config.optimizations) {
        score += config.optimizations.length * 10;
        totalTools++;
      }
    });
    
    return totalTools > 0 ? Math.min(100, score / totalTools) : 0;
  }

  calculatePerformanceScore() {
    if (this.buildResults.performance.status !== 'success') return 0;
    
    const buildTime = this.buildResults.performance.buildTime;
    if (buildTime <= this.optimizationThresholds.maxBuildTime) return 100;
    
    const penalty = Math.min(50, (buildTime - this.optimizationThresholds.maxBuildTime) / 1000);
    return Math.max(0, 100 - penalty);
  }

  async generateRecommendations() {
    console.log('💡 Generating build optimization recommendations...');
    
    const recommendations = [];
    
    // High-priority optimizations
    const highPriorityOpts = this.buildResults.optimizations.filter(opt => opt.priority === 'high');
    highPriorityOpts.forEach(opt => {
      recommendations.push({
        priority: 'high',
        category: opt.type,
        description: opt.description,
        action: `Optimize ${opt.tool} for better ${opt.impact}`,
        timeframe: 'immediate'
      });
    });
    
    // Configuration recommendations
    Object.entries(this.buildResults.configuration).forEach(([tool, config]) => {
      if (config.suggestions && config.suggestions.length > 0) {
        config.suggestions.forEach(suggestion => {
          recommendations.push({
            priority: 'medium',
            category: 'configuration',
            description: suggestion,
            action: `Update ${tool} configuration`,
            timeframe: 'short_term'
          });
        });
      }
    });
    
    // Sort by priority
    recommendations.sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
    
    this.buildResults.recommendations = recommendations;
    console.log(`💡 Generated ${recommendations.length} build optimization recommendations`);
  }

  formatTime(ms) {
    if (ms < 1000) return `${ms}ms`;
    if (ms < 60000) return `${Math.round(ms / 1000)}s`;
    return `${Math.round(ms / 60000)}m ${Math.round((ms % 60000) / 1000)}s`;
  }

  async saveReport() {
    const reportPath = path.join(this.reportDir, `build-optimization-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(this.buildResults, null, 2));
    
    // Also save latest report
    const latestReportPath = path.join(this.reportDir, 'latest-build-optimization-report.json');
    fs.writeFileSync(latestReportPath, JSON.stringify(this.buildResults, null, 2));
    
    console.log(`📄 Build optimization report saved to ${reportPath}`);
  }

  async displaySummary() {
    console.log('\n🚀 Smart Build Optimization Summary');
    console.log('=' .repeat(50));
    console.log(`📊 Overall Build Score: ${this.buildResults.buildScore}/100`);
    console.log(`⏱️  Build Time: ${this.buildResults.performance.buildTimeFormatted || 'N/A'} (Target: <30s)`);
    console.log(`📦 Bundle Size: ${this.buildResults.bundleOptimization?.totalSize || 'N/A'} KB (Target: <500KB)`);
    console.log(`💡 Optimizations: ${this.buildResults.optimizations.length}`);
    console.log(`💡 Recommendations: ${this.buildResults.recommendations.length}`);
    
    if (this.buildResults.optimizations.length > 0) {
      console.log('\n🔝 Top Build Optimizations:');
      this.buildResults.optimizations.slice(0, 3).forEach((opt, index) => {
        console.log(`${index + 1}. [${opt.priority.toUpperCase()}] ${opt.description}`);
        console.log(`   🛠️  Tool: ${opt.tool}`);
        console.log(`   📈 Impact: ${opt.impact}`);
      });
    }
    
    if (this.buildResults.recommendations.length > 0) {
      console.log('\n💡 Top Recommendations:');
      this.buildResults.recommendations.slice(0, 3).forEach((rec, index) => {
        console.log(`${index + 1}. [${rec.priority.toUpperCase()}] ${rec.description}`);
        console.log(`   🎯 ${rec.action}`);
        console.log(`   ⏰ ${rec.timeframe}`);
      });
    }
  }
}

// Main execution
async function main() {
  const optimizer = new SmartBuildOptimizer();
  
  try {
    await optimizer.optimizeBuild();
    await optimizer.displaySummary();
    
    // Exit successfully
    process.exit(0);
  } catch (error) {
    console.error('❌ Smart Build Optimizer failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = SmartBuildOptimizer;