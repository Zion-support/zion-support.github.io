#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Intelligent Build Optimizer...');

// Get automation interval from environment variable (default: 2 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 7200000; // 2 hours

class IntelligentBuildOptimizer {
  constructor() {
    this.optimizationResults = {
      buildMetrics: {},
      optimizationSuggestions: [],
      implementedOptimizations: [],
      buildTimeHistory: [],
      bundleAnalysis: {},
      timestamp: new Date().toISOString()
    };
    this.reportDir = path.join(process.cwd(), 'build-optimizer-reports');
    this.ensureReportDirectory();
    this.loadBuildHistory();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  loadBuildHistory() {
    const historyPath = path.join(this.reportDir, 'build-history.json');
    if (fs.existsSync(historyPath)) {
      try {
        this.optimizationResults.buildTimeHistory = JSON.parse(fs.readFileSync(historyPath, 'utf8'));
      } catch (error) {
        console.log('⚠️  Failed to load build history, starting fresh');
      }
    }
  }

  async runBuildOptimization() {
    try {
      console.log(`🚀 Running intelligent build optimization at ${new Date().toISOString()}`);
      
      // Analyze current build performance
      await this.analyzeBuildPerformance();
      
      // Analyze bundle composition
      await this.analyzeBundleComposition();
      
      // Generate optimization suggestions
      await this.generateOptimizationSuggestions();
      
      // Implement automatic optimizations
      await this.implementAutomaticOptimizations();
      
      // Save optimization report
      await this.saveOptimizationReport();
      
      console.log('✅ Intelligent build optimization completed successfully');
      
    } catch (error) {
      console.error('❌ Intelligent build optimization failed:', error.message);
    }
  }

  async analyzeBuildPerformance() {
    console.log('⏱️ Analyzing build performance...');
    
    const startTime = Date.now();
    
    try {
      // Clean previous build
      console.log('🧹 Cleaning previous build...');
      if (fs.existsSync('dist')) {
        fs.rmSync('dist', { recursive: true, force: true });
      }
      
      // Run build with timing
      console.log('🏗️ Running build...');
      execSync('npm run build', { stdio: 'inherit' });
      
      const buildTime = Date.now() - startTime;
      
      // Record build time
      this.optimizationResults.buildMetrics = {
        buildTime: buildTime,
        buildTimeFormatted: this.formatDuration(buildTime),
        timestamp: new Date().toISOString()
      };
      
      // Add to history
      this.optimizationResults.buildTimeHistory.push({
        timestamp: new Date().toISOString(),
        buildTime: buildTime,
        buildSize: this.getBuildSize()
      });
      
      // Keep only last 10 builds
      if (this.optimizationResults.buildTimeHistory.length > 10) {
        this.optimizationResults.buildTimeHistory = this.optimizationResults.buildTimeHistory.slice(-10);
      }
      
      console.log(`✅ Build completed in ${this.formatDuration(buildTime)}`);
      
    } catch (error) {
      console.log('❌ Build failed:', error.message);
      this.optimizationResults.buildMetrics = {
        buildTime: null,
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  async analyzeBundleComposition() {
    console.log('📦 Analyzing bundle composition...');
    
    const distPath = path.join(process.cwd(), 'dist');
    if (!fs.existsSync(distPath)) return;
    
    try {
      // Analyze bundle size
      const bundleAnalysis = this.analyzeBundleSize(distPath);
      this.optimizationResults.bundleAnalysis = bundleAnalysis;
      
      // Check for large files
      const largeFiles = this.findLargeFiles(distPath);
      if (largeFiles.length > 0) {
        console.log('⚠️  Large files detected:');
        largeFiles.forEach(file => {
          console.log(`  - ${file.path}: ${(file.size / 1024 / 1024).toFixed(2)} MB`);
        });
      }
      
      console.log(`✅ Bundle analysis completed: ${(bundleAnalysis.totalSize / 1024 / 1024).toFixed(2)} MB total`);
      
    } catch (error) {
      console.log('⚠️  Bundle analysis failed:', error.message);
    }
  }

  analyzeBundleSize(dir) {
    let totalSize = 0;
    let fileCount = 0;
    const fileTypes = {};
    
    function scanDirectory(currentDir) {
      try {
        const items = fs.readdirSync(currentDir);
        
        for (const item of items) {
          const fullPath = path.join(currentDir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            scanDirectory(fullPath);
          } else if (stat.isFile()) {
            totalSize += stat.size;
            fileCount++;
            
            const ext = path.extname(fullPath);
            fileTypes[ext] = (fileTypes[ext] || 0) + stat.size;
          }
        }
      } catch (error) {
        console.log(`⚠️  Error scanning directory ${currentDir}:`, error.message);
      }
    }
    
    scanDirectory(dir);
    
    return {
      totalSize,
      fileCount,
      fileTypes,
      averageFileSize: totalSize / fileCount
    };
  }

  findLargeFiles(dir, maxSize = 1024 * 1024) { // 1MB default
    const largeFiles = [];
    
    function scanDirectory(currentDir) {
      try {
        const items = fs.readdirSync(currentDir);
        
        for (const item of items) {
          const fullPath = path.join(currentDir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            scanDirectory(fullPath);
          } else if (stat.isFile() && stat.size > maxSize) {
            largeFiles.push({
              path: fullPath.replace(process.cwd(), ''),
              size: stat.size,
              relativePath: fullPath.replace(process.cwd(), '')
            });
          }
        }
      } catch (error) {
        console.log(`⚠️  Error scanning directory ${currentDir}:`, error.message);
      }
    }
    
    scanDirectory(dir);
    return largeFiles.sort((a, b) => b.size - a.size);
  }

  getBuildSize() {
    const distPath = path.join(process.cwd(), 'dist');
    if (!fs.existsSync(distPath)) return 0;
    
    let totalSize = 0;
    
    function calculateSize(dir) {
      try {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            calculateSize(fullPath);
          } else if (stat.isFile()) {
            totalSize += stat.size;
          }
        }
      } catch (error) {
        // Skip errors
      }
    }
    
    calculateSize(distPath);
    return totalSize;
  }

  async generateOptimizationSuggestions() {
    console.log('💡 Generating optimization suggestions...');
    
    const suggestions = [];
    
    // Analyze build time trends
    if (this.optimizationResults.buildTimeHistory.length > 1) {
      const recentBuilds = this.optimizationResults.buildTimeHistory.slice(-5);
      const avgBuildTime = recentBuilds.reduce((sum, build) => sum + build.buildTime, 0) / recentBuilds.length;
      
      if (avgBuildTime > 60000) { // More than 1 minute
        suggestions.push({
          type: 'build-time',
          priority: 'high',
          title: 'Slow build times detected',
          description: `Average build time: ${this.formatDuration(avgBuildTime)}`,
          action: 'Consider implementing build caching, parallel builds, or code splitting',
          impact: 'high'
        });
      }
    }
    
    // Analyze bundle size
    if (this.optimizationResults.bundleAnalysis.totalSize > 5 * 1024 * 1024) { // More than 5MB
      suggestions.push({
        type: 'bundle-size',
        priority: 'medium',
        title: 'Large bundle size detected',
        description: `Bundle size: ${(this.optimizationResults.bundleAnalysis.totalSize / 1024 / 1024).toFixed(2)} MB`,
        action: 'Implement code splitting, tree shaking, and lazy loading',
        impact: 'medium'
      });
    }
    
    // Check for optimization opportunities in Vite config
    await this.analyzeViteConfig(suggestions);
    
    // Check for unused dependencies
    await this.checkUnusedDependencies(suggestions);
    
    // Check for build tool optimizations
    await this.checkBuildToolOptimizations(suggestions);
    
    this.optimizationResults.optimizationSuggestions = suggestions;
  }

  async analyzeViteConfig(suggestions) {
    console.log('⚙️ Analyzing Vite configuration...');
    
    const viteConfigPath = path.join(process.cwd(), 'vite.config.ts');
    if (!fs.existsSync(viteConfigPath)) return;
    
    try {
      const configContent = fs.readFileSync(viteConfigPath, 'utf8');
      
      // Check for missing optimizations
      if (!configContent.includes('build.rollupOptions')) {
        suggestions.push({
          type: 'vite-config',
          priority: 'medium',
          title: 'Missing Rollup optimization options',
          description: 'Vite config lacks Rollup optimization settings',
          action: 'Add build.rollupOptions for better tree shaking and chunk optimization',
          impact: 'medium'
        });
      }
      
      if (!configContent.includes('build.chunkSizeWarningLimit')) {
        suggestions.push({
          type: 'vite-config',
          priority: 'low',
          title: 'Missing chunk size warning limit',
          description: 'No chunk size warning limit configured',
          action: 'Add build.chunkSizeWarningLimit to monitor bundle chunks',
          impact: 'low'
        });
      }
      
      if (!configContent.includes('build.sourcemap')) {
        suggestions.push({
          type: 'vite-config',
          priority: 'low',
          title: 'Source maps not configured',
          description: 'Source maps not explicitly configured',
          action: 'Configure build.sourcemap for better debugging',
          impact: 'low'
        });
      }
      
    } catch (error) {
      console.log('⚠️  Failed to analyze Vite config:', error.message);
    }
  }

  async checkUnusedDependencies(suggestions) {
    console.log('🔍 Checking for unused dependencies...');
    
    try {
      // Try to run depcheck
      const depcheckOutput = execSync('npx depcheck --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const depcheckData = JSON.parse(depcheckOutput);
      
      if (depcheckData.dependencies && depcheckData.dependencies.length > 0) {
        suggestions.push({
          type: 'dependencies',
          priority: 'medium',
          title: 'Unused dependencies detected',
          description: `Found ${depcheckData.dependencies.length} unused dependencies`,
          action: `Remove unused packages: ${depcheckData.dependencies.join(', ')}`,
          impact: 'medium'
        });
      }
      
      if (depcheckData.devDependencies && depcheckData.devDependencies.length > 0) {
        suggestions.push({
          type: 'dependencies',
          priority: 'low',
          title: 'Unused dev dependencies detected',
          description: `Found ${depcheckData.devDependencies.length} unused dev dependencies`,
          action: `Remove unused dev packages: ${depcheckData.devDependencies.join(', ')}`,
          impact: 'low'
        });
      }
      
    } catch (error) {
      console.log('ℹ️  Dependency check not available or failed');
    }
  }

  async checkBuildToolOptimizations(suggestions) {
    console.log('🔧 Checking build tool optimizations...');
    
    // Check for TypeScript optimizations
    const tsConfigPath = path.join(process.cwd(), 'tsconfig.json');
    if (fs.existsSync(tsConfigPath)) {
      try {
        const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'));
        
        if (!tsConfig.compilerOptions?.incremental) {
          suggestions.push({
            type: 'typescript',
            priority: 'medium',
            title: 'TypeScript incremental compilation disabled',
            description: 'Incremental compilation can speed up subsequent builds',
            action: 'Enable incremental compilation in tsconfig.json',
            impact: 'medium'
          });
        }
        
        if (tsConfig.compilerOptions?.skipLibCheck === false) {
          suggestions.push({
            type: 'typescript',
            priority: 'low',
            title: 'Library type checking enabled',
            description: 'Library type checking can slow down builds',
            action: 'Consider setting skipLibCheck to true for faster builds',
            impact: 'low'
          });
        }
        
      } catch (error) {
        console.log('⚠️  Failed to analyze TypeScript config:', error.message);
      }
    }
    
    // Check for ESLint optimizations
    const eslintConfigPath = path.join(process.cwd(), '.eslintrc.js');
    if (fs.existsSync(eslintConfigPath)) {
      suggestions.push({
        type: 'eslint',
        priority: 'low',
        title: 'ESLint configuration present',
        description: 'ESLint can be optimized for build performance',
        action: 'Consider using eslint-loader with cache options',
        impact: 'low'
      });
    }
  }

  async implementAutomaticOptimizations() {
    console.log('🔧 Implementing automatic optimizations...');
    
    const implemented = [];
    
    // Implement Vite config optimizations
    await this.optimizeViteConfig(implemented);
    
    // Implement TypeScript optimizations
    await this.optimizeTypeScriptConfig(implemented);
    
    // Implement package.json optimizations
    await this.optimizePackageJson(implemented);
    
    this.optimizationResults.implementedOptimizations = implemented;
  }

  async optimizeViteConfig(implemented) {
    const viteConfigPath = path.join(process.cwd(), 'vite.config.ts');
    if (!fs.existsSync(viteConfigPath)) return;
    
    try {
      let configContent = fs.readFileSync(viteConfigPath, 'utf8');
      let modified = false;
      
      // Add build optimizations if not present
      if (!configContent.includes('build.rollupOptions')) {
        const rollupOptions = `
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['lodash', 'date-fns']
        }
      }
    }
  }`;
        
        // Insert before the closing bracket
        const lastBracketIndex = configContent.lastIndexOf('}');
        if (lastBracketIndex !== -1) {
          configContent = configContent.slice(0, lastBracketIndex) + rollupOptions + '\n' + configContent.slice(lastBracketIndex);
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(viteConfigPath, configContent);
        implemented.push({
          type: 'vite-config',
          description: 'Added Rollup optimization options',
          impact: 'medium'
        });
        console.log('✅ Vite config optimized');
      }
      
    } catch (error) {
      console.log('⚠️  Failed to optimize Vite config:', error.message);
    }
  }

  async optimizeTypeScriptConfig(implemented) {
    const tsConfigPath = path.join(process.cwd(), 'tsconfig.json');
    if (!fs.existsSync(tsConfigPath)) return;
    
    try {
      const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'));
      let modified = false;
      
      if (!tsConfig.compilerOptions) {
        tsConfig.compilerOptions = {};
      }
      
      if (tsConfig.compilerOptions.incremental !== true) {
        tsConfig.compilerOptions.incremental = true;
        modified = true;
      }
      
      if (tsConfig.compilerOptions.tsBuildInfoFile === undefined) {
        tsConfig.compilerOptions.tsBuildInfoFile = './.tsbuildinfo';
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(tsConfigPath, JSON.stringify(tsConfig, null, 2));
        implemented.push({
          type: 'typescript',
          description: 'Enabled incremental compilation and build info file',
          impact: 'medium'
        });
        console.log('✅ TypeScript config optimized');
      }
      
    } catch (error) {
      console.log('⚠️  Failed to optimize TypeScript config:', error.message);
    }
  }

  async optimizePackageJson(implemented) {
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    if (!fs.existsSync(packageJsonPath)) return;
    
    try {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      let modified = false;
      
      // Add build optimization scripts
      if (!packageJson.scripts['build:analyze']) {
        packageJson.scripts['build:analyze'] = 'npm run build && npx vite-bundle-analyzer';
        modified = true;
      }
      
      if (!packageJson.scripts['build:clean']) {
        packageJson.scripts['build:clean'] = 'rm -rf dist && npm run build';
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
        implemented.push({
          type: 'package-json',
          description: 'Added build optimization scripts',
          impact: 'low'
        });
        console.log('✅ Package.json optimized');
      }
      
    } catch (error) {
      console.log('⚠️  Failed to optimize package.json:', error.message);
    }
  }

  formatDuration(ms) {
    if (ms < 1000) return `${ms}ms`;
    if (ms < 60000) return `${(ms / 1000).toFixed(1)}s`;
    return `${Math.floor(ms / 60000)}m ${Math.floor((ms % 60000) / 1000)}s`;
  }

  async saveOptimizationReport() {
    console.log('📊 Saving build optimization report...');
    
    const reportPath = path.join(this.reportDir, `build-optimizer-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(this.optimizationResults, null, 2));
    
    // Also save latest report
    const latestReportPath = path.join(this.reportDir, 'latest-build-optimizer.json');
    fs.writeFileSync(latestReportPath, JSON.stringify(this.optimizationResults, null, 2));
    
    // Save build history
    const historyPath = path.join(this.reportDir, 'build-history.json');
    fs.writeFileSync(historyPath, JSON.stringify(this.optimizationResults.buildTimeHistory, null, 2));
    
    console.log(`✅ Build optimization report saved to ${reportPath}`);
    
    // Log summary
    console.log('\n📊 Build Optimization Summary:');
    if (this.optimizationResults.buildMetrics.buildTime) {
      console.log(`  - Build Time: ${this.optimizationResults.buildMetrics.buildTimeFormatted}`);
    }
    if (this.optimizationResults.bundleAnalysis.totalSize) {
      console.log(`  - Bundle Size: ${(this.optimizationResults.bundleAnalysis.totalSize / 1024 / 1024).toFixed(2)} MB`);
    }
    console.log(`  - Optimization Suggestions: ${this.optimizationResults.optimizationSuggestions.length}`);
    console.log(`  - Implemented Optimizations: ${this.optimizationResults.implementedOptimizations.length}`);
    
    if (this.optimizationResults.optimizationSuggestions.length > 0) {
      console.log('\n💡 Key Optimization Suggestions:');
      this.optimizationResults.optimizationSuggestions
        .filter(s => s.priority === 'high')
        .forEach(suggestion => {
          console.log(`  - ${suggestion.priority.toUpperCase()}: ${suggestion.title}`);
        });
    }
  }
}

async function runIntelligentBuildOptimizer() {
  const optimizer = new IntelligentBuildOptimizer();
  await optimizer.runBuildOptimization();
}

// Run the optimizer
runIntelligentBuildOptimizer();

// Set up continuous monitoring
setInterval(runIntelligentBuildOptimizer, AUTOMATION_INTERVAL);

console.log(`🚀 Intelligent Build Optimizer will run every ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);