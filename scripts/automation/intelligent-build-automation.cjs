#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class IntelligentBuildAutomation {
  constructor() {
    this.config = {
      projectRoot: process.cwd(),
      reportDir: 'build-optimization-reports',
      logFile: 'logs/intelligent-build.log',
    };

    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [this.config.reportDir, 'logs'];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;

    console.log(logMessage.trim());

    if (fs.existsSync('logs')) {
      fs.appendFileSync(this.config.logFile, logMessage);
    }
  }

  async optimizeBuild() {
    this.log('🏗️ Starting Intelligent Build Optimization...');

    try {
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          buildTime: 0,
          bundleSize: 0,
          optimizationScore: 0,
          opportunities: 0,
        },
        details: {
          performance: {},
          configuration: {},
          dependencies: {},
          optimizations: [],
        },
        suggestions: [],
        recommendations: [],
      };

      // Analyze build performance
      await this.analyzeBuildPerformance(report);

      // Analyze build configuration
      await this.analyzeBuildConfiguration(report);

      // Analyze build dependencies
      await this.analyzeBuildDependencies(report);

      // Identify optimization opportunities
      await this.identifyOptimizationOpportunities(report);

      // Generate intelligent suggestions
      await this.generateIntelligentSuggestions(report);

      // Generate final report
      await this.generateReport(report);

      this.log('✅ Intelligent Build Optimization completed successfully');
      return report;
    } catch (error) {
      this.log(`❌ Error during build optimization: ${error.message}`);
      throw error;
    }
  }

  async analyzeBuildPerformance(report) {
    this.log('⚡ Analyzing build performance...');

    try {
      // Measure build time
      const buildTime = await this.measureBuildTime();
      report.details.performance.buildTime = buildTime;

      // Analyze bundle composition
      const bundleInfo = await this.analyzeBundleComposition();
      report.details.performance.bundle = bundleInfo;
      report.summary.bundleSize = bundleInfo.size || 0;

      // Analyze build cache
      const cacheInfo = await this.analyzeBuildCache();
      report.details.performance.cache = cacheInfo;

      // Analyze build parallelism
      const parallelismInfo = await this.analyzeBuildParallelism();
      report.details.performance.parallelism = parallelismInfo;
    } catch (error) {
      this.log(
        `Warning: Could not analyze build performance: ${error.message}`
      );
    }
  }

  async measureBuildTime() {
    try {
      const startTime = Date.now();

      // Run a clean build
      execSync('npm run build', { stdio: 'pipe' });

      const endTime = Date.now();
      const buildTime = endTime - startTime;

      return {
        total: buildTime,
        minutes: Math.round((buildTime / 60000) * 100) / 100,
        status:
          buildTime < 60000 ? 'fast' : buildTime < 300000 ? 'medium' : 'slow',
      };
    } catch (error) {
      return { error: error.message, status: 'failed' };
    }
  }

  async analyzeBundleComposition() {
    try {
      const distDir = path.join(this.config.projectRoot, 'dist');
      if (!fs.existsSync(distDir)) {
        return { error: 'Build directory not found' };
      }

      const files = fs.readdirSync(distDir, { recursive: true });
      let totalSize = 0;
      const fileTypes = {};

      files.forEach(file => {
        if (fs.statSync(path.join(distDir, file)).isFile()) {
          const stats = fs.statSync(path.join(distDir, file));
          totalSize += stats.size;

          const ext = path.extname(file);
          fileTypes[ext] = (fileTypes[ext] || 0) + stats.size;
        }
      });

      return {
        size: Math.round(totalSize / 1024), // KB
        files: files.length,
        types: fileTypes,
        directory: distDir,
      };
    } catch (error) {
      return { error: error.message };
    }
  }

  async analyzeBuildCache() {
    try {
      const cacheDirs = [
        path.join(this.config.projectRoot, 'node_modules/.cache'),
        path.join(this.config.projectRoot, '.vite'),
        path.join(this.config.projectRoot, '.next'),
      ];

      const cacheInfo = {};
      let totalCacheSize = 0;

      cacheDirs.forEach(dir => {
        if (fs.existsSync(dir)) {
          const size = this.getDirectorySize(dir);
          cacheInfo[path.basename(dir)] = {
            size: Math.round(size / 1024), // KB
            exists: true,
          };
          totalCacheSize += size;
        } else {
          cacheInfo[path.basename(dir)] = { exists: false, size: 0 };
        }
      });

      cacheInfo.total = Math.round(totalCacheSize / 1024);
      cacheInfo.efficiency = this.estimateCacheHitRate();

      return cacheInfo;
    } catch (error) {
      return { error: error.message };
    }
  }

  getDirectorySize(dirPath) {
    let size = 0;

    try {
      const files = fs.readdirSync(dirPath, { recursive: true });
      files.forEach(file => {
        const filePath = path.join(dirPath, file);
        if (fs.statSync(filePath).isFile()) {
          size += fs.statSync(filePath).size;
        }
      });
    } catch (error) {
      // Skip directories that can't be read
    }

    return size;
  }

  estimateCacheHitRate() {
    // Simplified cache hit rate estimation
    const cacheDirs = [
      path.join(this.config.projectRoot, 'node_modules/.cache'),
      path.join(this.config.projectRoot, '.vite'),
    ];

    let totalSize = 0;
    let existsCount = 0;

    cacheDirs.forEach(dir => {
      if (fs.existsSync(dir)) {
        existsCount++;
        totalSize += this.getDirectorySize(dir);
      }
    });

    if (existsCount === 0) return 'none';
    if (totalSize < 1024 * 1024) return 'low'; // < 1MB
    if (totalSize < 10 * 1024 * 1024) return 'medium'; // < 10MB
    return 'high'; // >= 10MB
  }

  async analyzeBuildParallelism() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const scripts = packageJson.scripts || {};

      const parallelismInfo = {
        concurrent: false,
        parallel: false,
        workers: 1,
      };

      // Check for concurrent execution
      if (scripts.dev && scripts.dev.includes('concurrently')) {
        parallelismInfo.concurrent = true;
      }

      // Check for parallel builds
      if (scripts.build && scripts.build.includes('--parallel')) {
        parallelismInfo.parallel = true;
      }

      // Check for worker configurations
      const viteConfig = this.analyzeViteConfig();
      if (viteConfig.workers) {
        parallelismInfo.workers = viteConfig.workers;
      }

      return parallelismInfo;
    } catch (error) {
      return { error: error.message };
    }
  }

  async analyzeBuildConfiguration(report) {
    this.log('⚙️ Analyzing build configuration...');

    try {
      // Analyze Vite configuration
      const viteConfig = await this.analyzeViteConfig();
      report.details.configuration.vite = viteConfig;

      // Analyze TypeScript configuration
      const tsConfig = await this.analyzeTypeScriptConfig();
      report.details.configuration.typescript = tsConfig;

      // Analyze package scripts
      const packageScripts = await this.analyzePackageScripts();
      report.details.configuration.scripts = packageScripts;
    } catch (error) {
      this.log(
        `Warning: Could not analyze build configuration: ${error.message}`
      );
    }
  }

  async analyzeViteConfig() {
    try {
      const viteConfigPath = path.join(
        this.config.projectRoot,
        'vite.config.ts'
      );
      if (!fs.existsSync(viteConfigPath)) {
        return { exists: false };
      }

      const content = fs.readFileSync(viteConfigPath, 'utf8');

      const config = {
        exists: true,
        optimizationLevel: this.calculateViteOptimizationLevel(content),
        features: {
          minify: content.includes('minify:'),
          sourcemap: content.includes('sourcemap:'),
          build: content.includes('build:'),
          plugins: content.includes('plugins:'),
        },
      };

      return config;
    } catch (error) {
      return { error: error.message };
    }
  }

  calculateViteOptimizationLevel(content) {
    let score = 0;

    // Basic optimizations
    if (content.includes('minify:')) score += 20;
    if (content.includes('sourcemap:')) score += 15;
    if (content.includes('build:')) score += 25;
    if (content.includes('plugins:')) score += 20;

    // Advanced optimizations
    if (content.includes('rollupOptions:')) score += 20;
    if (content.includes('optimizeDeps:')) score += 15;
    if (content.includes('cssCodeSplit:')) score += 10;

    return Math.min(100, score);
  }

  async analyzeTypeScriptConfig() {
    try {
      const tsConfigPath = path.join(this.config.projectRoot, 'tsconfig.json');
      if (!fs.existsSync(tsConfigPath)) {
        return { exists: false };
      }

      const content = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'));
      const options = content.compilerOptions || {};

      const config = {
        exists: true,
        optimizationLevel: this.calculateTSOptimizationLevel(options),
        features: {
          strict: options.strict || false,
          noEmit: options.noEmit || false,
          incremental: options.incremental || false,
          tsBuildInfoFile: options.tsBuildInfoFile || false,
        },
      };

      return config;
    } catch (error) {
      return { error: error.message };
    }
  }

  calculateTSOptimizationLevel(options) {
    let score = 0;

    // Basic optimizations
    if (options.strict) score += 25;
    if (options.noEmit) score += 20;
    if (options.incremental) score += 20;
    if (options.tsBuildInfoFile) score += 15;

    // Advanced optimizations
    if (options.skipLibCheck) score += 10;
    if (options.forceConsistentCasingInFileNames) score += 10;

    return Math.min(100, score);
  }

  async analyzePackageScripts() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const scripts = packageJson.scripts || {};

      const scriptAnalysis = {
        build: scripts.build || null,
        dev: scripts.dev || null,
        start: scripts.start || null,
        test: scripts.test || null,
        lint: scripts.lint || null,
        typeCheck: scripts['type-check'] || scripts.typeCheck || null,
      };

      // Analyze build script efficiency
      if (scriptAnalysis.build) {
        scriptAnalysis.buildEfficiency = this.analyzeBuildScriptEfficiency(
          scriptAnalysis.build
        );
      }

      return scriptAnalysis;
    } catch (error) {
      return { error: error.message };
    }
  }

  analyzeBuildScriptEfficiency(buildScript) {
    let efficiency = 'basic';

    if (buildScript.includes('--parallel')) efficiency = 'high';
    else if (buildScript.includes('--max-workers')) efficiency = 'medium';
    else if (buildScript.includes('NODE_OPTIONS')) efficiency = 'medium';

    return efficiency;
  }

  async analyzeBuildDependencies(report) {
    this.log('📦 Analyzing build dependencies...');

    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = {
        ...packageJson.dependencies,
        ...packageJson.devDependencies,
      };

      const buildDeps = {
        bundler: null,
        compiler: null,
        linter: null,
        tester: null,
        optimizer: null,
      };

      // Identify build tools
      if (dependencies.vite) buildDeps.bundler = 'vite';
      else if (dependencies.webpack) buildDeps.bundler = 'webpack';
      else if (dependencies.parcel) buildDeps.bundler = 'parcel';

      if (dependencies.typescript) buildDeps.compiler = 'typescript';
      if (dependencies.eslint) buildDeps.linter = 'eslint';
      if (dependencies.jest || dependencies.vitest)
        buildDeps.tester = 'jest/vitest';
      if (dependencies.terser || dependencies.uglify)
        buildDeps.optimizer = 'terser/uglify';

      report.details.dependencies = buildDeps;
    } catch (error) {
      this.log(
        `Warning: Could not analyze build dependencies: ${error.message}`
      );
    }
  }

  async identifyOptimizationOpportunities(report) {
    this.log('🎯 Identifying optimization opportunities...');

    const opportunities = [];

    // Build time optimizations
    if (report.details.performance.buildTime?.status === 'slow') {
      opportunities.push({
        type: 'build-time',
        priority: 'HIGH',
        title: 'Build Time Optimization',
        description:
          'Build time is slow. Consider implementing caching and parallelization.',
        impact: 'High',
        effort: 'Medium',
      });
    }

    // Bundle size optimizations
    if (report.summary.bundleSize > 1000) {
      opportunities.push({
        type: 'bundle-size',
        priority: 'HIGH',
        title: 'Bundle Size Reduction',
        description:
          'Large bundle size detected. Implement code splitting and tree shaking.',
        impact: 'High',
        effort: 'Medium',
      });
    }

    // Configuration optimizations
    if (report.details.configuration.vite?.optimizationLevel < 70) {
      opportunities.push({
        type: 'vite-config',
        priority: 'MEDIUM',
        title: 'Vite Configuration Optimization',
        description:
          'Vite configuration can be optimized for better performance.',
        impact: 'Medium',
        effort: 'Low',
      });
    }

    // Cache optimizations
    if (report.details.performance.cache?.efficiency === 'low') {
      opportunities.push({
        type: 'cache',
        priority: 'MEDIUM',
        title: 'Build Cache Optimization',
        description:
          'Build cache efficiency is low. Implement proper caching strategies.',
        impact: 'Medium',
        effort: 'Low',
      });
    }

    report.details.optimizations = opportunities;
    report.summary.opportunities = opportunities.length;
  }

  async generateIntelligentSuggestions(report) {
    this.log('🧠 Generating intelligent suggestions...');

    const suggestions = [];

    // High priority suggestions
    if (report.details.performance.buildTime?.status === 'slow') {
      suggestions.push({
        priority: 'HIGH',
        category: 'Build Performance',
        message: 'Build time is slow. This impacts development productivity.',
        action:
          'Implement build caching, parallelization, and incremental builds',
        impact: 'High',
      });
    }

    if (report.summary.bundleSize > 2000) {
      suggestions.push({
        priority: 'CRITICAL',
        category: 'Bundle Size',
        message:
          'Extremely large bundle size. This will significantly impact user experience.',
        action:
          'Implement aggressive code splitting, tree shaking, and lazy loading',
        impact: 'Critical',
      });
    }

    if (report.details.configuration.vite?.optimizationLevel < 50) {
      suggestions.push({
        priority: 'MEDIUM',
        category: 'Configuration',
        message: 'Vite configuration is not optimized.',
        action: 'Review and optimize Vite configuration for better performance',
        impact: 'Medium',
      });
    }

    report.suggestions = suggestions;
  }

  async generateReport(report) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportFile = path.join(
      this.config.reportDir,
      `intelligent-build-${timestamp}.json`
    );
    const summaryFile = path.join(
      this.config.reportDir,
      `intelligent-build-summary-${timestamp}.md`
    );

    // Save detailed JSON report
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    // Generate human-readable summary
    const summary = this.generateHumanReadableSummary(report);
    fs.writeFileSync(summaryFile, summary);

    this.log(`📄 Detailed report saved to: ${reportFile}`);
    this.log(`📋 Summary report saved to: ${summaryFile}`);

    // Log summary to console
    console.log('\n' + '='.repeat(60));
    console.log('🏗️ INTELLIGENT BUILD OPTIMIZATION SUMMARY');
    console.log('='.repeat(60));
    console.log(
      `⏱️  Build Time: ${report.details.performance.buildTime?.minutes || 'N/A'} min`
    );
    console.log(`📦 Bundle Size: ${report.summary.bundleSize} KB`);
    console.log(
      `🎯 Optimization Opportunities: ${report.summary.opportunities}`
    );
    console.log(
      `⚙️  Vite Optimization Level: ${report.details.configuration.vite?.optimizationLevel || 'N/A'}%`
    );
    console.log('='.repeat(60));
  }

  generateHumanReadableSummary(report) {
    let summary = `# Intelligent Build Optimization Report\n\n`;
    summary += `**Generated:** ${report.timestamp}\n\n`;

    summary += `## Summary\n\n`;
    summary += `- **Build Time:** ${report.details.performance.buildTime?.minutes || 'N/A'} minutes\n`;
    summary += `- **Bundle Size:** ${report.summary.bundleSize} KB\n`;
    summary += `- **Optimization Opportunities:** ${report.summary.opportunities}\n`;
    summary += `- **Vite Optimization Level:** ${report.details.configuration.vite?.optimizationLevel || 'N/A'}%\n\n`;

    if (report.suggestions.length > 0) {
      summary += `## Priority Recommendations\n\n`;
      report.suggestions.forEach(suggestion => {
        summary += `### ${suggestion.priority} Priority: ${suggestion.category}\n`;
        summary += `${suggestion.message}\n\n`;
        summary += `**Action:** ${suggestion.action}\n`;
        summary += `**Impact:** ${suggestion.impact}\n\n`;
      });
    }

    if (report.details.optimizations.length > 0) {
      summary += `## Optimization Opportunities\n\n`;
      report.details.optimizations.forEach(opp => {
        summary += `### ${opp.priority} Priority: ${opp.title}\n`;
        summary += `${opp.description}\n\n`;
        summary += `**Impact:** ${opp.impact} | **Effort:** ${opp.effort}\n\n`;
      });
    }

    return summary;
  }

  async run() {
    try {
      this.log('🚀 Starting Intelligent Build Automation...');

      const report = await this.optimizeBuild();

      this.log('✅ Intelligent Build Automation completed successfully');
      return report;
    } catch (error) {
      this.log(`❌ Intelligent Build Automation failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const automation = new IntelligentBuildAutomation();
  automation.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = IntelligentBuildAutomation;
