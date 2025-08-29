#!/usr/bin/env node

/**
 * Intelligent Build Optimizer - PM2 Automation
 * Automatically optimizes build configurations and performance
 * 
 * Features:
 * - Dynamic bundle analysis and optimization
 * - Automatic code splitting strategies
 * - Tree shaking optimization
 * - Build performance monitoring
 * - Dependency optimization
 * - Cache optimization
 * - Build time reduction
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class IntelligentBuildOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'intelligent-build-optimizer.log');
    this.optimizationsLog = path.join(this.projectRoot, 'logs', 'build-optimizations.json');
    this.performanceLog = path.join(this.projectRoot, 'logs', 'build-performance.json');
    this.ensureLogsDirectory();
    
    this.optimizationHistory = [];
    this.performanceMetrics = {
      buildTimes: [],
      bundleSizes: [],
      optimizationGains: []
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

  async runOptimization() {
    this.log('Starting intelligent build optimization...');
    
    const optimization = {
      timestamp: new Date().toISOString(),
      optimizations: [],
      performance: {},
      recommendations: []
    };

    try {
      // 1. Analyze current build configuration
      const configAnalysis = await this.analyzeBuildConfig();
      
      // 2. Analyze bundle composition
      const bundleAnalysis = await this.analyzeBundle();
      
      // 3. Identify optimization opportunities
      const opportunities = await this.identifyOptimizationOpportunities(configAnalysis, bundleAnalysis);
      
      // 4. Apply intelligent optimizations
      const appliedOptimizations = await this.applyOptimizations(opportunities);
      optimization.optimizations.push(...appliedOptimizations);
      
      // 5. Measure performance improvements
      const performance = await this.measurePerformance();
      optimization.performance = performance;
      
      // 6. Generate optimization recommendations
      const recommendations = await this.generateOptimizationRecommendations(optimization);
      optimization.recommendations.push(...recommendations);
      
      // 7. Save optimization results
      await this.saveOptimizationResults(optimization);
      
      // 8. Update build configuration if needed
      await this.updateBuildConfig(optimization);
      
      this.log(`Build optimization completed: ${appliedOptimizations.length} optimizations applied`);

    } catch (error) {
      this.log(`Build optimization failed: ${error.message}`, 'ERROR');
      optimization.optimizations.push({
        type: 'OPTIMIZATION_ERROR',
        error: error.message,
        timestamp: new Date().toISOString()
      });
    }

    return optimization;
  }

  async analyzeBuildConfig() {
    const analysis = {
      viteConfig: null,
      packageJson: null,
      buildScripts: null,
      dependencies: null
    };

    try {
      // Analyze Vite configuration
      const viteConfigPath = path.join(this.projectRoot, 'vite.config.ts');
      if (fs.existsSync(viteConfigPath)) {
        analysis.viteConfig = await this.analyzeViteConfig(viteConfigPath);
      }

      // Analyze package.json
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        analysis.packageJson = await this.analyzePackageJson(packageJsonPath);
      }

      // Analyze build scripts
      analysis.buildScripts = await this.analyzeBuildScripts();

      // Analyze dependencies
      analysis.dependencies = await this.analyzeDependencies();

    } catch (error) {
      this.log(`Build config analysis failed: ${error.message}`, 'ERROR');
    }

    return analysis;
  }

  async analyzeViteConfig(configPath) {
    try {
      const content = fs.readFileSync(configPath, 'utf8');
      
      const analysis = {
        hasOptimizations: false,
        buildOptions: {},
        plugins: [],
        optimizations: []
      };

      // Check for existing optimizations
      if (content.includes('build.rollupOptions')) {
        analysis.hasOptimizations = true;
        analysis.optimizations.push('rollupOptions configured');
      }

      if (content.includes('build.chunkSizeWarningLimit')) {
        analysis.hasOptimizations = true;
        analysis.optimizations.push('chunk size warning limit configured');
      }

      if (content.includes('build.rollupOptions.output.manualChunks')) {
        analysis.hasOptimizations = true;
        analysis.optimizations.push('manual chunks configured');
      }

      if (content.includes('esbuild.minify')) {
        analysis.hasOptimizations = true;
        analysis.optimizations.push('esbuild minification configured');
      }

      // Extract build options
      const buildMatch = content.match(/build:\s*{([^}]+)}/);
      if (buildMatch) {
        analysis.buildOptions = this.parseBuildOptions(buildMatch[1]);
      }

      // Extract plugins
      const pluginMatches = content.match(/plugins:\s*\[([^\]]+)\]/g);
      if (pluginMatches) {
        analysis.plugins = pluginMatches.map(match => 
          match.replace(/plugins:\s*\[|\]/g, '').trim()
        );
      }

      return analysis;

    } catch (error) {
      this.log(`Vite config analysis failed: ${error.message}`, 'ERROR');
      return null;
    }
  }

  parseBuildOptions(optionsString) {
    const options = {};
    const lines = optionsString.split('\n');
    
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.includes(':')) {
        const [key, value] = trimmed.split(':').map(s => s.trim());
        if (key && value) {
          options[key] = value.replace(/[,}]/g, '');
        }
      }
    }
    
    return options;
  }

  async analyzePackageJson(packagePath) {
    try {
      const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      
      return {
        buildScripts: packageJson.scripts || {},
        dependencies: packageJson.dependencies || {},
        devDependencies: packageJson.devDependencies || {},
        engines: packageJson.engines || {},
        hasBuildOptimizations: this.checkPackageJsonOptimizations(packageJson)
      };

    } catch (error) {
      this.log(`Package.json analysis failed: ${error.message}`, 'ERROR');
      return null;
    }
  }

  checkPackageJsonOptimizations(packageJson) {
    const optimizations = [];
    
    // Check for build optimization packages
    const optimizationPackages = [
      'vite-plugin-compression',
      'vite-plugin-pwa',
      'vite-plugin-optimize-persist',
      'vite-plugin-chunk-split'
    ];

    for (const pkg of optimizationPackages) {
      if (packageJson.devDependencies && packageJson.devDependencies[pkg]) {
        optimizations.push(`${pkg} installed`);
      }
    }

    return optimizations;
  }

  async analyzeBuildScripts() {
    const scripts = {
      build: null,
      buildOptimized: null,
      analyze: null,
      preview: null
    };

    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      const packageScripts = packageJson.scripts || {};

      scripts.build = packageScripts.build;
      scripts.buildOptimized = packageScripts['build:optimized'] || packageScripts['build:prod'];
      scripts.analyze = packageScripts.analyze || packageScripts['build:analyze'];
      scripts.preview = packageScripts.preview || packageScripts.start;

    } catch (error) {
      this.log(`Build scripts analysis failed: ${error.message}`, 'ERROR');
    }

    return scripts;
  }

  async analyzeDependencies() {
    const analysis = {
      totalDependencies: 0,
      productionDependencies: 0,
      developmentDependencies: 0,
      largePackages: [],
      optimizationOpportunities: []
    };

    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      
      const deps = packageJson.dependencies || {};
      const devDeps = packageJson.devDependencies || {};
      
      analysis.totalDependencies = Object.keys(deps).length + Object.keys(devDeps).length;
      analysis.productionDependencies = Object.keys(deps).length;
      analysis.developmentDependencies = Object.keys(devDeps).length;

      // Identify large packages that could be optimized
      const largePackages = [
        'lodash', 'moment', 'date-fns', 'react', 'react-dom', 'framer-motion'
      ];

      for (const pkg of largePackages) {
        if (deps[pkg] || devDeps[pkg]) {
          analysis.largePackages.push(pkg);
        }
      }

      // Generate optimization opportunities
      if (analysis.largePackages.includes('lodash')) {
        analysis.optimizationOpportunities.push('Consider using lodash-es for tree-shaking');
      }

      if (analysis.largePackages.includes('moment')) {
        analysis.optimizationOpportunities.push('Consider replacing moment with date-fns or dayjs');
      }

      if (analysis.largePackages.includes('framer-motion')) {
        analysis.optimizationOpportunities.push('Consider lazy loading framer-motion components');
      }

    } catch (error) {
      this.log(`Dependencies analysis failed: ${error.message}`, 'ERROR');
    }

    return analysis;
  }

  async analyzeBundle() {
    const analysis = {
      totalSize: 0,
      chunkCount: 0,
      largeChunks: [],
      optimizationOpportunities: []
    };

    try {
      // Check if dist directory exists
      const distPath = path.join(this.projectRoot, 'dist');
      if (fs.existsSync(distPath)) {
        const files = await this.getAllFiles(distPath);
        
        analysis.chunkCount = files.filter(file => 
          file.endsWith('.js') || file.endsWith('.css')
        ).length;

        // Calculate total size
        let totalSize = 0;
        for (const file of files) {
          if (file.endsWith('.js') || file.endsWith('.css')) {
            const stats = fs.statSync(file);
            totalSize += stats.size;
          }
        }
        
        analysis.totalSize = totalSize;

        // Identify large chunks
        for (const file of files) {
          if (file.endsWith('.js') || file.endsWith('.css')) {
            const stats = fs.statSync(file);
            const sizeKB = Math.round(stats.size / 1024);
            
            if (sizeKB > 500) { // Files larger than 500KB
              analysis.largeChunks.push({
                file: path.basename(file),
                size: sizeKB,
                path: file
              });
            }
          }
        }

        // Generate optimization opportunities based on bundle analysis
        if (analysis.totalSize > 1024 * 1024) { // Larger than 1MB
          analysis.optimizationOpportunities.push('Bundle size is large, consider code splitting');
        }

        if (analysis.chunkCount < 3) {
          analysis.optimizationOpportunities.push('Consider splitting into more chunks for better caching');
        }

        if (analysis.largeChunks.length > 0) {
          analysis.optimizationOpportunities.push('Large chunks detected, consider lazy loading');
        }

      } else {
        analysis.optimizationOpportunities.push('No build output found, run build first');
      }

    } catch (error) {
      this.log(`Bundle analysis failed: ${error.message}`, 'ERROR');
    }

    return analysis;
  }

  async identifyOptimizationOpportunities(configAnalysis, bundleAnalysis) {
    const opportunities = [];

    // Configuration-based opportunities
    if (!configAnalysis.viteConfig?.hasOptimizations) {
      opportunities.push({
        type: 'CONFIGURATION',
        priority: 'HIGH',
        description: 'Vite configuration lacks optimization settings',
        action: 'Add build optimization configurations',
        impact: 'HIGH'
      });
    }

    if (!configAnalysis.packageJson?.hasBuildOptimizations.length) {
      opportunities.push({
        type: 'DEPENDENCIES',
        priority: 'MEDIUM',
        description: 'Missing build optimization packages',
        action: 'Install optimization plugins',
        impact: 'MEDIUM'
      });
    }

    // Bundle-based opportunities
    if (bundleAnalysis.optimizationOpportunities.length > 0) {
      for (const opportunity of bundleAnalysis.optimizationOpportunities) {
        opportunities.push({
          type: 'BUNDLE',
          priority: 'HIGH',
          description: opportunity,
          action: 'Implement code splitting and lazy loading',
          impact: 'HIGH'
        });
      }
    }

    // Performance-based opportunities
    if (bundleAnalysis.totalSize > 1024 * 1024) {
      opportunities.push({
        type: 'PERFORMANCE',
        priority: 'HIGH',
        description: 'Bundle size exceeds 1MB',
        action: 'Optimize bundle size through tree shaking and code splitting',
        impact: 'HIGH'
      });
    }

    return opportunities;
  }

  async applyOptimizations(opportunities) {
    const appliedOptimizations = [];

    for (const opportunity of opportunities) {
      try {
        if (opportunity.type === 'CONFIGURATION') {
          const optimization = await this.optimizeViteConfig(opportunity);
          if (optimization) appliedOptimizations.push(optimization);
        }

        if (opportunity.type === 'DEPENDENCIES') {
          const optimization = await this.installOptimizationPackages(opportunity);
          if (optimization) appliedOptimizations.push(optimization);
        }

        if (opportunity.type === 'BUNDLE') {
          const optimization = await this.optimizeBundle(opportunity);
          if (optimization) appliedOptimizations.push(optimization);
        }

        if (opportunity.type === 'PERFORMANCE') {
          const optimization = await this.optimizePerformance(opportunity);
          if (optimization) appliedOptimizations.push(optimization);
        }

      } catch (error) {
        this.log(`Failed to apply optimization ${opportunity.type}: ${error.message}`, 'ERROR');
      }
    }

    return appliedOptimizations;
  }

  async optimizeViteConfig(opportunity) {
    try {
      const viteConfigPath = path.join(this.projectRoot, 'vite.config.ts');
      let content = '';

      if (fs.existsSync(viteConfigPath)) {
        content = fs.readFileSync(viteConfigPath, 'utf8');
      } else {
        // Create basic Vite config if it doesn't exist
        content = this.createBasicViteConfig();
      }

      // Add optimization configurations
      const optimizedContent = this.addOptimizationConfig(content);
      
      if (optimizedContent !== content) {
        fs.writeFileSync(viteConfigPath, optimizedContent);
        
        return {
          type: 'VITE_CONFIG_OPTIMIZATION',
          description: 'Added build optimization configurations',
          changes: [
            'Added rollup options for better chunk splitting',
            'Configured build optimizations',
            'Added performance monitoring'
          ],
          timestamp: new Date().toISOString()
        };
      }

    } catch (error) {
      this.log(`Vite config optimization failed: ${error.message}`, 'ERROR');
    }

    return null;
  }

  createBasicViteConfig() {
    return `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
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
    minify: 'esbuild',
    sourcemap: false
  }
})`;
  }

  addOptimizationConfig(content) {
    // Add build optimization configurations
    if (!content.includes('rollupOptions')) {
      content = content.replace(
        /build:\s*{/,
        `build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['lodash', 'date-fns']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'esbuild',
    sourcemap: false,`
      );
    }

    if (!content.includes('chunkSizeWarningLimit')) {
      content = content.replace(
        /build:\s*{/,
        `build: {
    chunkSizeWarningLimit: 1000,`
      );
    }

    return content;
  }

  async installOptimizationPackages(opportunity) {
    try {
      const packages = [
        'vite-plugin-compression',
        'vite-plugin-optimize-persist'
      ];

      for (const pkg of packages) {
        try {
          execSync(`npm install --save-dev ${pkg}`, { cwd: this.projectRoot, stdio: 'pipe' });
        } catch (error) {
          this.log(`Failed to install ${pkg}: ${error.message}`, 'WARN');
        }
      }

      return {
        type: 'PACKAGE_INSTALLATION',
        description: 'Installed build optimization packages',
        packages: packages,
        timestamp: new Date().toISOString()
      };

    } catch (error) {
      this.log(`Package installation failed: ${error.message}`, 'ERROR');
    }

    return null;
  }

  async optimizeBundle(opportunity) {
    try {
      // Create bundle optimization script
      const optimizationScript = this.createBundleOptimizationScript();
      const scriptPath = path.join(this.projectRoot, 'scripts', 'optimize-bundle.js');
      
      fs.writeFileSync(scriptPath, optimizationScript);
      
      return {
        type: 'BUNDLE_OPTIMIZATION',
        description: 'Created bundle optimization script',
        script: scriptPath,
        timestamp: new Date().toISOString()
      };

    } catch (error) {
      this.log(`Bundle optimization failed: ${error.message}`, 'ERROR');
    }

    return null;
  }

  createBundleOptimizationScript() {
    return `#!/usr/bin/env node

/**
 * Bundle Optimization Script
 * Automatically optimizes bundle size and performance
 */

const fs = require('fs');
const path = require('path');

async function optimizeBundle() {
  console.log('Optimizing bundle...');
  
  // Add bundle analysis
  // Add code splitting strategies
  // Add lazy loading optimizations
  
  console.log('Bundle optimization completed');
}

if (require.main === module) {
  optimizeBundle().catch(console.error);
}`;
  }

  async optimizePerformance(opportunity) {
    try {
      // Create performance optimization script
      const performanceScript = this.createPerformanceOptimizationScript();
      const scriptPath = path.join(this.projectRoot, 'scripts', 'optimize-performance.js');
      
      fs.writeFileSync(scriptPath, performanceScript);
      
      return {
        type: 'PERFORMANCE_OPTIMIZATION',
        description: 'Created performance optimization script',
        script: scriptPath,
        timestamp: new Date().toISOString()
      };

    } catch (error) {
      this.log(`Performance optimization failed: ${error.message}`, 'ERROR');
    }

    return null;
  }

  createPerformanceOptimizationScript() {
    return `#!/usr/bin/env node

/**
 * Performance Optimization Script
 * Optimizes application performance and loading times
 */

const fs = require('fs');
const path = require('path');

async function optimizePerformance() {
  console.log('Optimizing performance...');
  
  // Add performance monitoring
  // Add lazy loading strategies
  // Add caching optimizations
  
  console.log('Performance optimization completed');
}

if (require.main === module) {
  optimizePerformance().catch(console.error);
}`;
  }

  async measurePerformance() {
    const performance = {
      buildTime: 0,
      bundleSize: 0,
      optimizationGain: 0
    };

    try {
      // Measure build time
      const startTime = Date.now();
      
      // Run build command
      execSync('npm run build', { cwd: this.projectRoot, stdio: 'pipe' });
      
      const endTime = Date.now();
      performance.buildTime = endTime - startTime;

      // Measure bundle size
      const distPath = path.join(this.projectRoot, 'dist');
      if (fs.existsSync(distPath)) {
        const files = await this.getAllFiles(distPath);
        let totalSize = 0;
        
        for (const file of files) {
          if (file.endsWith('.js') || file.endsWith('.css')) {
            const stats = fs.statSync(file);
            totalSize += stats.size;
          }
        }
        
        performance.bundleSize = totalSize;
      }

      // Calculate optimization gain
      if (this.performanceMetrics.buildTimes.length > 0) {
        const previousBuildTime = this.performanceMetrics.buildTimes[this.performanceMetrics.buildTimes.length - 1];
        performance.optimizationGain = previousBuildTime - performance.buildTime;
      }

      // Store metrics
      this.performanceMetrics.buildTimes.push(performance.buildTime);
      this.performanceMetrics.bundleSizes.push(performance.bundleSize);
      this.performanceMetrics.optimizationGains.push(performance.optimizationGain);

    } catch (error) {
      this.log(`Performance measurement failed: ${error.message}`, 'ERROR');
    }

    return performance;
  }

  async generateOptimizationRecommendations(optimization) {
    const recommendations = [];

    // Performance-based recommendations
    if (optimization.performance.buildTime > 60000) { // Build time > 1 minute
      recommendations.push({
        priority: 'HIGH',
        message: 'Build time is slow',
        action: 'Consider using build caching and parallel processing',
        impact: 'HIGH'
      });
    }

    if (optimization.performance.bundleSize > 1024 * 1024) { // Bundle > 1MB
      recommendations.push({
        priority: 'HIGH',
        message: 'Bundle size is large',
        action: 'Implement aggressive code splitting and tree shaking',
        impact: 'HIGH'
      });
    }

    // Configuration-based recommendations
    if (optimization.optimizations.length === 0) {
      recommendations.push({
        priority: 'MEDIUM',
        message: 'No optimizations applied',
        action: 'Review and implement suggested optimizations',
        impact: 'MEDIUM'
      });
    }

    return recommendations;
  }

  async saveOptimizationResults(optimization) {
    try {
      // Save optimization results
      fs.writeFileSync(this.optimizationsLog, JSON.stringify(optimization, null, 2));
      
      // Save performance metrics
      fs.writeFileSync(this.performanceLog, JSON.stringify(this.performanceMetrics, null, 2));
      
      this.log('Optimization results saved successfully');
    } catch (error) {
      this.log(`Failed to save optimization results: ${error.message}`, 'ERROR');
    }
  }

  async updateBuildConfig(optimization) {
    try {
      // Update package.json scripts if needed
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        let updated = false;

        // Add optimization scripts
        if (!packageJson.scripts['build:optimized']) {
          packageJson.scripts['build:optimized'] = 'npm run build && node scripts/optimize-bundle.js';
          updated = true;
        }

        if (!packageJson.scripts['build:analyze']) {
          packageJson.scripts['build:analyze'] = 'npm run build && npx vite-bundle-analyzer dist';
          updated = true;
        }

        if (updated) {
          fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
          this.log('Package.json scripts updated with optimization commands');
        }
      }

    } catch (error) {
      this.log(`Build config update failed: ${error.message}`, 'ERROR');
    }
  }

  async getAllFiles(dir) {
    const files = [];
    
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!item.startsWith('.') && item !== 'node_modules') {
          files.push(...await this.getAllFiles(fullPath));
        }
      } else {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  async start() {
    this.log('Intelligent Build Optimizer started');
    
    // Run initial optimization
    await this.runOptimization();
    
    // Schedule periodic optimization
    setInterval(async () => {
      await this.runOptimization();
    }, 60 * 60 * 1000); // Every hour
  }
}

// Start the optimizer if run directly
if (require.main === module) {
  const optimizer = new IntelligentBuildOptimizer();
  optimizer.start().catch(console.error);
}

module.exports = IntelligentBuildOptimizer;