#!/usr/bin/env node

/**
 * Smart Build Optimization Engine
 * Intelligently optimizes build configurations for better performance
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class SmartBuildOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'smart-build-optimizer.log');
    this.optimizationReport = path.join(this.projectRoot, 'logs', 'build-optimization-report.json');
    this.buildConfigs = path.join(this.projectRoot, 'logs', 'build-configs.json');
    this.ensureLogsDirectory();
    this.optimizationStrategies = this.loadOptimizationStrategies();
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  loadOptimizationStrategies() {
    return {
      vite: {
        'bundle-splitting': {
          priority: 'HIGH',
          description: 'Implement intelligent code splitting',
          implementation: this.implementViteBundleSplitting.bind(this),
          impact: 'HIGH'
        },
        'tree-shaking': {
          priority: 'HIGH',
          description: 'Enable aggressive tree shaking',
          implementation: this.implementViteTreeShaking.bind(this),
          impact: 'HIGH'
        },
        'compression': {
          priority: 'MEDIUM',
          description: 'Enable build compression',
          implementation: this.implementViteCompression.bind(this),
          impact: 'MEDIUM'
        },
        'source-maps': {
          priority: 'LOW',
          description: 'Optimize source map generation',
          implementation: this.optimizeViteSourceMaps.bind(this),
          impact: 'LOW'
        }
      },
      webpack: {
        'bundle-analyzer': {
          priority: 'MEDIUM',
          description: 'Add bundle analyzer for optimization insights',
          implementation: this.addWebpackBundleAnalyzer.bind(this),
          impact: 'MEDIUM'
        },
        'code-splitting': {
          priority: 'HIGH',
          description: 'Implement dynamic imports and code splitting',
          implementation: this.implementWebpackCodeSplitting.bind(this),
          impact: 'HIGH'
        }
      },
      general: {
        'dependency-optimization': {
          priority: 'MEDIUM',
          description: 'Optimize dependency loading and caching',
          implementation: this.optimizeDependencies.bind(this),
          impact: 'MEDIUM'
        },
        'build-caching': {
          priority: 'MEDIUM',
          description: 'Implement build caching strategies',
          implementation: this.implementBuildCaching.bind(this),
          impact: 'MEDIUM'
        }
      }
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async optimizeBuild() {
    this.log('🚀 Starting Smart Build Optimization...');
    
    const optimization = {
      timestamp: new Date().toISOString(),
      currentConfig: {},
      optimizations: [],
      applied: [],
      recommendations: [],
      performance: {}
    };

    try {
      // Analyze current build configuration
      optimization.currentConfig = await this.analyzeCurrentBuildConfig();
      
      // Identify optimization opportunities
      optimization.optimizations = await this.identifyOptimizationOpportunities(optimization.currentConfig);
      
      // Apply optimizations
      optimization.applied = await this.applyOptimizations(optimization.optimizations);
      
      // Measure performance improvements
      optimization.performance = await this.measurePerformanceImprovements();
      
      // Generate recommendations
      optimization.recommendations = this.generateOptimizationRecommendations(optimization);
      
      // Save optimization report
      await this.saveOptimizationReport(optimization);
      
      this.log(`✅ Build optimization complete. Applied ${optimization.applied.length} optimizations`);
      
    } catch (error) {
      this.log(`❌ Build optimization failed: ${error.message}`, 'ERROR');
    }

    return optimization;
  }

  async analyzeCurrentBuildConfig() {
    this.log('🔍 Analyzing current build configuration...');
    
    const config = {
      buildTool: 'unknown',
      configFiles: [],
      currentSettings: {},
      optimization: {}
    };

    try {
      // Detect build tool
      if (fs.existsSync(path.join(this.projectRoot, 'vite.config.ts')) || 
          fs.existsSync(path.join(this.projectRoot, 'vite.config.js'))) {
        config.buildTool = 'vite';
      } else if (fs.existsSync(path.join(this.projectRoot, 'webpack.config.js')) ||
                 fs.existsSync(path.join(this.projectRoot, 'next.config.js'))) {
        config.buildTool = 'webpack';
      } else if (fs.existsSync(path.join(this.projectRoot, 'rollup.config.js'))) {
        config.buildTool = 'rollup';
      }

      // Analyze configuration files
      config.configFiles = this.findBuildConfigFiles();
      
      // Parse current settings
      config.currentSettings = await this.parseBuildConfig(config.configFiles);
      
      // Analyze current optimization level
      config.optimization = this.analyzeCurrentOptimization(config.currentSettings);
      
    } catch (error) {
      this.log(`❌ Build config analysis failed: ${error.message}`, 'ERROR');
    }

    return config;
  }

  findBuildConfigFiles() {
    const configFiles = [];
    const possibleConfigs = [
      'vite.config.ts', 'vite.config.js',
      'webpack.config.js', 'next.config.js',
      'rollup.config.js', 'parcel.config.js',
      'tsconfig.json', 'package.json'
    ];
    
    for (const config of possibleConfigs) {
      const configPath = path.join(this.projectRoot, config);
      if (fs.existsSync(configPath)) {
        configFiles.push({
          name: config,
          path: configPath,
          type: this.getConfigType(config)
        });
      }
    }
    
    return configFiles;
  }

  getConfigType(filename) {
    if (filename.includes('vite')) return 'vite';
    if (filename.includes('webpack')) return 'webpack';
    if (filename.includes('next')) return 'next';
    if (filename.includes('rollup')) return 'rollup';
    if (filename.includes('tsconfig')) return 'typescript';
    if (filename.includes('package')) return 'package';
    return 'unknown';
  }

  async parseBuildConfig(configFiles) {
    const settings = {};
    
    for (const configFile of configFiles) {
      try {
        switch (configFile.type) {
          case 'vite':
            settings.vite = await this.parseViteConfig(configFile.path);
            break;
          case 'webpack':
            settings.webpack = await this.parseWebpackConfig(configFile.path);
            break;
          case 'next':
            settings.next = await this.parseNextConfig(configFile.path);
            break;
          case 'typescript':
            settings.typescript = await this.parseTypeScriptConfig(configFile.path);
            break;
          case 'package':
            settings.package = await this.parsePackageConfig(configFile.path);
            break;
        }
      } catch (error) {
        this.log(`⚠️ Failed to parse ${configFile.name}: ${error.message}`, 'WARN');
      }
    }
    
    return settings;
  }

  async parseViteConfig(configPath) {
    try {
      const content = fs.readFileSync(configPath, 'utf8');
      
      // Simple parsing for common Vite configurations
      const config = {
        hasBuildOptimization: content.includes('build:') && content.includes('rollupOptions'),
        hasCompression: content.includes('vite-plugin-compression') || content.includes('compression'),
        hasBundleAnalysis: content.includes('vite-bundle-analyzer') || content.includes('rollup-plugin-visualizer'),
        hasSourceMaps: content.includes('sourcemap:') || content.includes('sourceMap:'),
        hasCodeSplitting: content.includes('manualChunks') || content.includes('dynamicImport'),
        hasTreeShaking: content.includes('treeshake:') || content.includes('treeShaking:')
      };
      
      return config;
    } catch (error) {
      this.log(`❌ Failed to parse Vite config: ${error.message}`, 'ERROR');
      return {};
    }
  }

  async parseWebpackConfig(configPath) {
    try {
      const content = fs.readFileSync(configPath, 'utf8');
      
      const config = {
        hasCodeSplitting: content.includes('splitChunks') || content.includes('dynamicImport'),
        hasBundleAnalysis: content.includes('BundleAnalyzerPlugin') || content.includes('webpack-bundle-analyzer'),
        hasOptimization: content.includes('optimization:') && content.includes('minimize:'),
        hasSourceMaps: content.includes('devtool:') || content.includes('sourceMap:'),
        hasTreeShaking: content.includes('sideEffects:') || content.includes('usedExports:')
      };
      
      return config;
    } catch (error) {
      this.log(`❌ Failed to parse Webpack config: ${error.message}`, 'ERROR');
      return {};
    }
  }

  async parseNextConfig(configPath) {
    try {
      const content = fs.readFileSync(configPath, 'utf8');
      
      const config = {
        hasOptimization: content.includes('experimental:') && content.includes('optimizeCss:'),
        hasBundleAnalysis: content.includes('bundleAnalyzer') || content.includes('@next/bundle-analyzer'),
        hasCompression: content.includes('compress:') || content.includes('gzip'),
        hasSourceMaps: content.includes('productionBrowserSourceMaps:')
      };
      
      return config;
    } catch (error) {
      this.log(`❌ Failed to parse Next.js config: ${error.message}`, 'ERROR');
      return {};
    }
  }

  async parseTypeScriptConfig(configPath) {
    try {
      const content = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      
      return {
        target: content.compilerOptions?.target || 'unknown',
        module: content.compilerOptions?.module || 'unknown',
        strict: content.compilerOptions?.strict || false,
        incremental: content.compilerOptions?.incremental || false,
        tsBuildInfoFile: content.compilerOptions?.tsBuildInfoFile || null
      };
    } catch (error) {
      this.log(`❌ Failed to parse TypeScript config: ${error.message}`, 'ERROR');
      return {};
    }
  }

  async parsePackageConfig(configPath) {
    try {
      const content = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      
      return {
        scripts: content.scripts || {},
        dependencies: content.dependencies || {},
        devDependencies: content.devDependencies || {},
        engines: content.engines || {},
        hasBuildScripts: content.scripts && (content.scripts.build || content.scripts.dev)
      };
    } catch (error) {
      this.log(`❌ Failed to parse package.json: ${error.message}`, 'ERROR');
      return {};
    }
  }

  analyzeCurrentOptimization(settings) {
    const analysis = {
      score: 0,
      maxScore: 100,
      missing: [],
      implemented: [],
      recommendations: []
    };
    
    // Analyze Vite optimizations
    if (settings.vite) {
      if (settings.vite.hasBuildOptimization) {
        analysis.score += 20;
        analysis.implemented.push('Vite build optimization');
      } else {
        analysis.missing.push('Vite build optimization');
      }
      
      if (settings.vite.hasCompression) {
        analysis.score += 15;
        analysis.implemented.push('Vite compression');
      } else {
        analysis.missing.push('Vite compression');
      }
      
      if (settings.vite.hasTreeShaking) {
        analysis.score += 15;
        analysis.implemented.push('Vite tree shaking');
      } else {
        analysis.missing.push('Vite tree shaking');
      }
    }
    
    // Analyze Webpack optimizations
    if (settings.webpack) {
      if (settings.webpack.hasCodeSplitting) {
        analysis.score += 20;
        analysis.implemented.push('Webpack code splitting');
      } else {
        analysis.missing.push('Webpack code splitting');
      }
      
      if (settings.webpack.hasOptimization) {
        analysis.score += 15;
        analysis.implemented.push('Webpack optimization');
      } else {
        analysis.missing.push('Webpack optimization');
      }
    }
    
    // Analyze TypeScript optimizations
    if (settings.typescript) {
      if (settings.typescript.incremental) {
        analysis.score += 10;
        analysis.implemented.push('TypeScript incremental compilation');
      } else {
        analysis.missing.push('TypeScript incremental compilation');
      }
      
      if (settings.typescript.strict) {
        analysis.score += 5;
        analysis.implemented.push('TypeScript strict mode');
      } else {
        analysis.missing.push('TypeScript strict mode');
      }
    }
    
    return analysis;
  }

  async identifyOptimizationOpportunities(currentConfig) {
    this.log('🔍 Identifying optimization opportunities...');
    
    const opportunities = [];
    
    try {
      // Vite optimizations
      if (currentConfig.buildTool === 'vite' || currentConfig.configFiles.some(f => f.type === 'vite')) {
        if (!currentConfig.currentSettings.vite?.hasBuildOptimization) {
          opportunities.push({
            type: 'vite-bundle-splitting',
            priority: 'HIGH',
            description: 'Implement Vite bundle splitting for better code organization',
            strategy: 'bundle-splitting',
            impact: 'HIGH',
            estimatedTime: '30 minutes'
          });
        }
        
        if (!currentConfig.currentSettings.vite?.hasCompression) {
          opportunities.push({
            type: 'vite-compression',
            priority: 'MEDIUM',
            description: 'Enable Vite compression for smaller bundle sizes',
            strategy: 'compression',
            impact: 'MEDIUM',
            estimatedTime: '15 minutes'
          });
        }
      }
      
      // Webpack optimizations
      if (currentConfig.configFiles.some(f => f.type === 'webpack')) {
        if (!currentConfig.currentSettings.webpack?.hasCodeSplitting) {
          opportunities.push({
            type: 'webpack-code-splitting',
            priority: 'HIGH',
            description: 'Implement Webpack code splitting for better performance',
            strategy: 'code-splitting',
            impact: 'HIGH',
            estimatedTime: '45 minutes'
          });
        }
      }
      
      // General optimizations
      opportunities.push({
        type: 'dependency-optimization',
        priority: 'MEDIUM',
        description: 'Optimize dependency loading and caching strategies',
        strategy: 'dependency-optimization',
        impact: 'MEDIUM',
        estimatedTime: '20 minutes'
      });
      
      opportunities.push({
        type: 'build-caching',
        priority: 'MEDIUM',
        description: 'Implement build caching for faster rebuilds',
        strategy: 'build-caching',
        impact: 'MEDIUM',
        estimatedTime: '25 minutes'
      });
      
    } catch (error) {
      this.log(`❌ Opportunity identification failed: ${error.message}`, 'ERROR');
    }

    return opportunities;
  }

  async applyOptimizations(opportunities) {
    this.log('🔧 Applying optimizations...');
    
    const applied = [];
    
    for (const opportunity of opportunities) {
      try {
        this.log(`🔧 Applying ${opportunity.type}...`);
        
        const strategy = this.optimizationStrategies.general[opportunity.strategy] ||
                        this.optimizationStrategies.vite[opportunity.strategy] ||
                        this.optimizationStrategies.webpack[opportunity.strategy];
        
        if (strategy && strategy.implementation) {
          const result = await strategy.implementation(opportunity);
          
          if (result.success) {
            applied.push({
              type: opportunity.type,
              status: 'success',
              description: result.description,
              changes: result.changes || []
            });
            
            this.log(`✅ Successfully applied ${opportunity.type}`);
          } else {
            this.log(`⚠️ Failed to apply ${opportunity.type}: ${result.description}`);
          }
        } else {
          this.log(`⚠️ No implementation found for ${opportunity.strategy}`);
        }
        
      } catch (error) {
        this.log(`❌ Failed to apply ${opportunity.type}: ${error.message}`, 'ERROR');
      }
    }
    
    return applied;
  }

  async implementViteBundleSplitting(opportunity) {
    try {
      const configPath = path.join(this.projectRoot, 'vite.config.ts');
      
      if (!fs.existsSync(configPath)) {
        return {
          success: false,
          description: 'Vite config file not found'
        };
      }
      
      let config = fs.readFileSync(configPath, 'utf8');
      
      // Check if bundle splitting is already configured
      if (config.includes('manualChunks')) {
        return {
          success: false,
          description: 'Bundle splitting already configured'
        };
      }
      
      // Add bundle splitting configuration
      const bundleSplittingConfig = `
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['lodash', 'date-fns'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog'],
          charts: ['recharts', 'd3-color', 'd3-format']
        }
      }
    }
  }`;
      
      // Insert the configuration
      if (config.includes('export default defineConfig(')) {
        config = config.replace(
          /export default defineConfig\(/g,
          `export default defineConfig(${bundleSplittingConfig}`
        );
      } else {
        config = config.replace(
          /export default defineConfig\(/g,
          `export default defineConfig(${bundleSplittingConfig}`
        );
      }
      
      // Create backup
      const backupPath = `${configPath}.backup.${Date.now()}`;
      fs.writeFileSync(backupPath, config);
      
      // Apply changes
      fs.writeFileSync(configPath, config);
      
      return {
        success: true,
        description: 'Successfully implemented Vite bundle splitting',
        changes: ['Added manual chunk configuration', 'Separated vendor, utils, UI, and charts chunks']
      };
      
    } catch (error) {
      return {
        success: false,
        description: `Failed to implement bundle splitting: ${error.message}`
      };
    }
  }

  async implementViteTreeShaking(opportunity) {
    try {
      const configPath = path.join(this.projectRoot, 'vite.config.ts');
      
      if (!fs.existsSync(configPath)) {
        return {
          success: false,
          description: 'Vite config file not found'
        };
      }
      
      let config = fs.readFileSync(configPath, 'utf8');
      
      // Add tree shaking configuration
      const treeShakingConfig = `
  build: {
    rollupOptions: {
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false
      }
    }
  }`;
      
      // Check if tree shaking is already configured
      if (config.includes('treeshake:')) {
        return {
          success: false,
          description: 'Tree shaking already configured'
        };
      }
      
      // Insert the configuration
      config = config.replace(
        /export default defineConfig\(/g,
        `export default defineConfig(${treeShakingConfig}`
      );
      
      // Create backup
      const backupPath = `${configPath}.backup.${Date.now()}`;
      fs.writeFileSync(backupPath, config);
      
      // Apply changes
      fs.writeFileSync(configPath, config);
      
      return {
        success: true,
        description: 'Successfully implemented Vite tree shaking',
        changes: ['Added aggressive tree shaking configuration', 'Disabled module side effects']
      };
      
    } catch (error) {
      return {
        success: false,
        description: `Failed to implement tree shaking: ${error.message}`
      };
    }
  }

  async implementViteCompression(opportunity) {
    try {
      // Install compression plugin
      execSync('npm install --save-dev vite-plugin-compression', { stdio: 'pipe' });
      
      const configPath = path.join(this.projectRoot, 'vite.config.ts');
      
      if (!fs.existsSync(configPath)) {
        return {
          success: false,
          description: 'Vite config file not found'
        };
      }
      
      let config = fs.readFileSync(configPath, 'utf8');
      
      // Add compression plugin import
      if (!config.includes('vite-plugin-compression')) {
        const importStatement = `import { defineConfig } from 'vite'\\nimport compression from 'vite-plugin-compression'\\n`;
        config = config.replace(/import { defineConfig } from 'vite'/g, importStatement);
        
        // Add plugin to configuration
        const compressionConfig = `\\n  plugins: [compression()],`;
        config = config.replace(/export default defineConfig\(/g, `export default defineConfig(${compressionConfig}`);
      }
      
      // Create backup
      const backupPath = `${configPath}.backup.${Date.now()}`;
      fs.writeFileSync(backupPath, config);
      
      // Apply changes
      fs.writeFileSync(configPath, config);
      
      return {
        success: true,
        description: 'Successfully implemented Vite compression',
        changes: ['Installed vite-plugin-compression', 'Added compression plugin to configuration']
      };
      
    } catch (error) {
      return {
        success: false,
        description: `Failed to implement compression: ${error.message}`
      };
    }
  }

  async optimizeDependencies(opportunity) {
    try {
      // Analyze and optimize dependencies
      const packagePath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      
      const changes = [];
      
      // Check for duplicate dependencies
      const allDeps = { ...packageJson.dependencies, ...packageJson.devDependencies };
      const depNames = Object.keys(allDeps);
      
      // Look for potential duplicates
      const duplicates = this.findDuplicateDependencies(depNames);
      if (duplicates.length > 0) {
        changes.push(`Found ${duplicates.length} potential duplicate dependencies`);
      }
      
      // Check for unused dependencies
      const unusedDeps = await this.findUnusedDependencies(allDeps);
      if (unusedDeps.length > 0) {
        changes.push(`Found ${unusedDeps.length} potentially unused dependencies`);
      }
      
      // Optimize package.json scripts
      if (packageJson.scripts) {
        const optimizedScripts = this.optimizePackageScripts(packageJson.scripts);
        if (JSON.stringify(optimizedScripts) !== JSON.stringify(packageJson.scripts)) {
          packageJson.scripts = optimizedScripts;
          changes.push('Optimized package.json scripts');
        }
      }
      
      // Save optimized package.json
      if (changes.length > 0) {
        const backupPath = `${packagePath}.backup.${Date.now()}`;
        fs.writeFileSync(backupPath, JSON.stringify(packageJson, null, 2));
        fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
      }
      
      return {
        success: true,
        description: 'Successfully optimized dependencies',
        changes: changes
      };
      
    } catch (error) {
      return {
        success: false,
        description: `Failed to optimize dependencies: ${error.message}`
      };
    }
  }

  async implementBuildCaching(opportunity) {
    try {
      const changes = [];
      
      // Implement TypeScript incremental compilation
      const tsConfigPath = path.join(this.projectRoot, 'tsconfig.json');
      if (fs.existsSync(tsConfigPath)) {
        const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'));
        
        if (!tsConfig.compilerOptions) {
          tsConfig.compilerOptions = {};
        }
        
        if (!tsConfig.compilerOptions.incremental) {
          tsConfig.compilerOptions.incremental = true;
          tsConfig.compilerOptions.tsBuildInfoFile = './node_modules/.cache/.tsbuildinfo';
          changes.push('Enabled TypeScript incremental compilation');
        }
        
        // Save updated config
        const backupPath = `${tsConfigPath}.backup.${Date.now()}`;
        fs.writeFileSync(backupPath, JSON.stringify(tsConfig, null, 2));
        fs.writeFileSync(tsConfigPath, JSON.stringify(tsConfig, null, 2));
      }
      
      // Add build caching to package.json scripts
      const packagePath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packagePath)) {
        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        
        if (packageJson.scripts && packageJson.scripts.build) {
          // Add clean build script
          if (!packageJson.scripts['build:clean']) {
            packageJson.scripts['build:clean'] = 'rm -rf dist && npm run build';
            changes.push('Added clean build script');
          }
          
          // Save updated package.json
          const backupPath = `${packagePath}.backup.${Date.now()}`;
          fs.writeFileSync(backupPath, JSON.stringify(packageJson, null, 2));
          fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
        }
      }
      
      return {
        success: true,
        description: 'Successfully implemented build caching',
        changes: changes
      };
      
    } catch (error) {
      return {
        success: false,
        description: `Failed to implement build caching: ${error.message}`
      };
    }
  }

  findDuplicateDependencies(depNames) {
    const duplicates = [];
    const seen = new Set();
    
    for (const dep of depNames) {
      if (seen.has(dep)) {
        duplicates.push(dep);
      } else {
        seen.add(dep);
      }
    }
    
    return duplicates;
  }

  async findUnusedDependencies(dependencies) {
    const unused = [];
    const sourceFiles = this.findSourceFiles();
    
    for (const [name, version] of Object.entries(dependencies)) {
      if (!this.isDependencyUsed(name, sourceFiles)) {
        unused.push({ name, version });
      }
    }
    
    return unused;
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

  walkDirectory(dir, files) {
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          this.walkDirectory(fullPath, files);
        } else {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories we can't access
    }
  }

  optimizePackageScripts(scripts) {
    const optimized = { ...scripts };
    
    // Add optimization flags to build scripts
    if (optimized.build && !optimized.build.includes('--max-old-space-size')) {
      optimized.build = optimized.build.replace('vite build', 'NODE_OPTIONS="--max-old-space-size=6144" vite build');
    }
    
    if (optimized.dev && !optimized.dev.includes('--max-old-space-size')) {
      optimized.dev = optimized.dev.replace('vite', 'NODE_OPTIONS="--max-old-space-size=4096" vite');
    }
    
    return optimized;
  }

  async measurePerformanceImprovements() {
    this.log('📊 Measuring performance improvements...');
    
    const performance = {
      buildTime: {},
      bundleSize: {},
      improvements: []
    };
    
    try {
      // Measure build time before optimization
      const startTime = Date.now();
      execSync('npm run build', { stdio: 'pipe' });
      const buildTime = Date.now() - startTime;
      
      performance.buildTime = {
        current: buildTime,
        unit: 'ms'
      };
      
      // Measure bundle size
      const buildDir = path.join(this.projectRoot, 'dist');
      if (fs.existsSync(buildDir)) {
        const totalSize = this.calculateDirectorySize(buildDir);
        performance.bundleSize = {
          current: Math.round(totalSize / 1024 * 100) / 100,
          unit: 'KB'
        };
      }
      
      // Generate improvement suggestions
      if (performance.buildTime.current > 30000) { // > 30 seconds
        performance.improvements.push({
          type: 'BUILD_TIME',
          priority: 'HIGH',
          description: 'Build time is slow, consider implementing build caching',
          action: 'Enable incremental compilation and build caching'
        });
      }
      
      if (performance.bundleSize.current > 1000) { // > 1MB
        performance.improvements.push({
          type: 'BUNDLE_SIZE',
          priority: 'MEDIUM',
          description: 'Bundle size is large, consider code splitting',
          action: 'Implement dynamic imports and code splitting'
        });
      }
      
    } catch (error) {
      this.log(`❌ Performance measurement failed: ${error.message}`, 'ERROR');
    }

    return performance;
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

  generateOptimizationRecommendations(optimization) {
    const recommendations = [];
    
    // Generate recommendations based on applied optimizations
    if (optimization.applied.length === 0) {
      recommendations.push({
        priority: 'HIGH',
        title: 'No optimizations applied',
        description: 'Consider implementing basic build optimizations',
        actions: [
          'Enable code splitting',
          'Implement tree shaking',
          'Add build compression',
          'Enable incremental compilation'
        ]
      });
    } else {
      // Generate follow-up recommendations
      const appliedTypes = optimization.applied.map(a => a.type);
      
      if (!appliedTypes.includes('vite-bundle-splitting') && !appliedTypes.includes('webpack-code-splitting')) {
        recommendations.push({
          priority: 'MEDIUM',
          title: 'Consider code splitting',
          description: 'Code splitting can significantly improve initial load times',
          actions: ['Implement dynamic imports', 'Configure manual chunks', 'Use route-based splitting']
        });
      }
      
      if (!appliedTypes.includes('vite-compression')) {
        recommendations.push({
          priority: 'LOW',
          title: 'Enable compression',
          description: 'Compression can reduce bundle sizes by 20-30%',
          actions: ['Install compression plugin', 'Configure gzip/brotli compression']
        });
      }
    }
    
    return recommendations;
  }

  async saveOptimizationReport(optimization) {
    try {
      fs.writeFileSync(this.optimizationReport, JSON.stringify(optimization, null, 2));
      this.log(`📊 Optimization report saved to ${this.optimizationReport}`);
    } catch (error) {
      this.log(`❌ Failed to save optimization report: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    this.log('🚀 Starting Smart Build Optimizer...');
    
    try {
      const optimization = await this.optimizeBuild();
      
      // Log summary
      this.log(`📊 Build Optimization Summary:`);
      this.log(`   Current Optimization Score: ${optimization.currentConfig.optimization.score}/100`);
      this.log(`   Optimization Opportunities: ${optimization.optimizations.length}`);
      this.log(`   Optimizations Applied: ${optimization.applied.length}`);
      this.log(`   Build Time: ${optimization.performance.buildTime.current}ms`);
      this.log(`   Bundle Size: ${optimization.performance.bundleSize.current}KB`);
      this.log(`   Recommendations: ${optimization.recommendations.length}`);
      
      return optimization;
      
    } catch (error) {
      this.log(`❌ Smart Build Optimizer failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const optimizer = new SmartBuildOptimizer();
  optimizer.run().catch(console.error);
}

module.exports = SmartBuildOptimizer;