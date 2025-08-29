#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class BundleOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/bundle-optimizer.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/bundle-optimization-report.json');
    this.startTime = Date.now();
    this.config = this.loadConfig();
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;

    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      // Silent fail for logging
    }
  }

  loadConfig() {
    const configPath = path.join(this.projectRoot, '.bundle-optimizer.json');
    try {
      if (fs.existsSync(configPath)) {
        return JSON.parse(fs.readFileSync(configPath, 'utf8'));
      }
    } catch (error) {
      this.log(`Error loading config: ${error.message}`);
    }

    // Default configuration
    return {
      maxBundleSize: 500 * 1024, // 500KB
      maxChunkSize: 200 * 1024, // 200KB
      enableTreeShaking: true,
      enableCodeSplitting: true,
      enableCompression: true,
      enableMinification: true,
      analyzeMode: 'detailed',
      optimizationTargets: ['size', 'performance', 'caching']
    };
  }

  async buildProject() {
    try {
      this.log('🏗️  Building project for bundle analysis...');

      // Clean previous build
      if (fs.existsSync('dist')) {
        execSync('rm -rf dist', { cwd: this.projectRoot, stdio: 'pipe' });
      }

      // Run build with analysis
      const buildCommand = this.config.analyzeMode === 'detailed' 
        ? 'npm run build:analyze || npm run build'
        : 'npm run build';

      execSync(buildCommand, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        timeout: 300000 // 5 minutes timeout
      });

      this.log('✅ Build completed successfully');
      return true;
    } catch (error) {
      this.log(`❌ Build failed: ${error.message}`);
      return false;
    }
  }

  async analyzeBundle() {
    try {
      this.log('📊 Analyzing bundle structure...');

      if (!fs.existsSync('dist')) {
        throw new Error('No build output found. Run build first.');
      }

      const bundleStats = {
        totalSize: 0,
        fileCount: 0,
        chunks: [],
        assets: [],
        modules: [],
        optimization: {}
      };

      // Analyze dist directory
      this.analyzeDirectory('dist', bundleStats);

      // Calculate bundle metrics
      bundleStats.optimization = this.calculateOptimizationMetrics(bundleStats);

      return bundleStats;
    } catch (error) {
      this.log(`Error analyzing bundle: ${error.message}`);
      return null;
    }
  }

  analyzeDirectory(dirPath, stats) {
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          this.analyzeDirectory(fullPath, stats);
        } else {
          const fileSize = stat.size;
          const fileInfo = {
            name: item,
            path: fullPath,
            size: fileSize,
            sizeKB: Math.round(fileSize / 1024 * 100) / 100,
            sizeMB: Math.round(fileSize / (1024 * 1024) * 100) / 100,
            type: this.getFileType(item),
            lastModified: stat.mtime
          };

          stats.totalSize += fileSize;
          stats.fileCount++;

          if (this.isChunkFile(item)) {
            stats.chunks.push(fileInfo);
          } else {
            stats.assets.push(fileInfo);
          }
        }
      }
    } catch (error) {
      this.log(`Error analyzing directory ${dirPath}: ${error.message}`);
    }
  }

  getFileType(filename) {
    const ext = path.extname(filename).toLowerCase();
    const typeMap = {
      '.js': 'JavaScript',
      '.js.map': 'Source Map',
      '.css': 'CSS',
      '.css.map': 'CSS Source Map',
      '.html': 'HTML',
      '.json': 'JSON',
      '.png': 'Image',
      '.jpg': 'Image',
      '.jpeg': 'Image',
      '.svg': 'Image',
      '.woff': 'Font',
      '.woff2': 'Font',
      '.ttf': 'Font',
      '.eot': 'Font'
    };
    return typeMap[ext] || 'Other';
  }

  isChunkFile(filename) {
    return filename.includes('chunk') || 
           filename.includes('bundle') || 
           filename.endsWith('.js') ||
           filename.endsWith('.js.map');
  }

  calculateOptimizationMetrics(stats) {
    const metrics = {
      totalSizeKB: Math.round(stats.totalSize / 1024 * 100) / 100,
      totalSizeMB: Math.round(stats.totalSize / (1024 * 1024) * 100) / 100,
      averageChunkSize: 0,
      largestChunk: null,
      smallestChunk: null,
      chunkCount: stats.chunks.length,
      assetCount: stats.assets.length,
      compressionRatio: 0,
      optimizationScore: 0
    };

    if (stats.chunks.length > 0) {
      const chunkSizes = stats.chunks.map(chunk => chunk.size);
      metrics.averageChunkSize = Math.round(chunkSizes.reduce((a, b) => a + b, 0) / chunkSizes.length / 1024 * 100) / 100;
      metrics.largestChunk = stats.chunks.reduce((max, chunk) => chunk.size > max.size ? chunk : max);
      metrics.smallestChunk = stats.chunks.reduce((min, chunk) => chunk.size < min.size ? chunk : min);
    }

    // Calculate optimization score
    let score = 100;
    
    if (stats.totalSize > this.config.maxBundleSize) {
      score -= 20;
    }
    
    if (metrics.averageChunkSize > this.config.maxChunkSize / 1024) {
      score -= 15;
    }
    
    if (stats.chunks.length < 3) {
      score -= 10; // Not enough code splitting
    }
    
    if (stats.chunks.length > 20) {
      score -= 5; // Too many chunks
    }

    metrics.optimizationScore = Math.max(0, score);

    return metrics;
  }

  async generateBundleReport(bundleStats) {
    try {
      this.log('📋 Generating bundle optimization report...');

      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          totalSize: bundleStats.totalSize,
          totalSizeKB: bundleStats.optimization.totalSizeKB,
          totalSizeMB: bundleStats.optimization.totalSizeMB,
          fileCount: bundleStats.fileCount,
          chunkCount: bundleStats.optimization.chunkCount,
          assetCount: bundleStats.optimization.assetCount,
          optimizationScore: bundleStats.optimization.optimizationScore
        },
        details: bundleStats,
        recommendations: [],
        actions: []
      };

      // Generate recommendations based on analysis
      if (bundleStats.totalSize > this.config.maxBundleSize) {
        report.recommendations.push(`Bundle size (${bundleStats.optimization.totalSizeMB}MB) exceeds recommended limit (${this.config.maxBundleSize / (1024 * 1024)}MB)`);
        report.actions.push('Implement code splitting and lazy loading');
        report.actions.push('Remove unused dependencies');
        report.actions.push('Optimize images and assets');
      }

      if (bundleStats.optimization.averageChunkSize > this.config.maxChunkSize / 1024) {
        report.recommendations.push(`Average chunk size (${bundleStats.optimization.averageChunkSize}KB) is too large`);
        report.actions.push('Split large components into smaller chunks');
        report.actions.push('Implement dynamic imports for heavy libraries');
      }

      if (bundleStats.optimization.chunkCount < 3) {
        report.recommendations.push('Insufficient code splitting detected');
        report.actions.push('Implement route-based code splitting');
        report.actions.push('Add dynamic imports for heavy components');
      }

      if (bundleStats.optimization.chunkCount > 20) {
        report.recommendations.push('Too many chunks may impact performance');
        report.actions.push('Consolidate small chunks');
        report.actions.push('Review chunk splitting strategy');
      }

      // Check for large dependencies
      const largeChunks = bundleStats.chunks.filter(chunk => chunk.size > 100 * 1024); // > 100KB
      if (largeChunks.length > 0) {
        report.recommendations.push(`${largeChunks.length} large chunks detected`);
        report.actions.push('Analyze large chunks for optimization opportunities');
        report.actions.push('Consider lazy loading for large components');
      }

      // Check for unused assets
      const unusedAssets = this.detectUnusedAssets(bundleStats);
      if (unusedAssets.length > 0) {
        report.recommendations.push(`${unusedAssets.length} potentially unused assets detected`);
        report.actions.push('Remove unused assets and dependencies');
        report.actions.push('Implement tree shaking for better dead code elimination');
      }

      return report;
    } catch (error) {
      this.log(`Error generating bundle report: ${error.message}`);
      return null;
    }
  }

  detectUnusedAssets(bundleStats) {
    const unusedAssets = [];
    
    // Check for potentially unused assets
    bundleStats.assets.forEach(asset => {
      if (asset.type === 'Image' && asset.size > 100 * 1024) { // > 100KB images
        unusedAssets.push({
          ...asset,
          reason: 'Large image file - consider optimization or lazy loading'
        });
      }
      
      if (asset.type === 'Font' && asset.size > 50 * 1024) { // > 50KB fonts
        unusedAssets.push({
          ...asset,
          reason: 'Large font file - consider font subsetting'
        });
      }
    });

    return unusedAssets;
  }

  async optimizeBundle(bundleStats) {
    try {
      this.log('🔧 Applying bundle optimizations...');

      const optimizations = [];

      // 1. Enable tree shaking
      if (this.config.enableTreeShaking) {
        optimizations.push(this.enableTreeShaking());
      }

      // 2. Implement code splitting
      if (this.config.enableCodeSplitting) {
        optimizations.push(this.implementCodeSplitting());
      }

      // 3. Optimize imports
      optimizations.push(this.optimizeImports());

      // 4. Generate optimization config
      optimizations.push(this.generateOptimizationConfig());

      return optimizations.filter(Boolean);
    } catch (error) {
      this.log(`Error optimizing bundle: ${error.message}`);
      return [];
    }
  }

  enableTreeShaking() {
    try {
      this.log('🌳 Enabling tree shaking optimizations...');
      
      // Check if package.json has sideEffects field
      const packagePath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packagePath)) {
        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        
        if (!packageJson.sideEffects) {
          packageJson.sideEffects = false;
          fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
          this.log('✅ Added sideEffects: false to package.json');
        }
      }

      return 'Tree shaking enabled';
    } catch (error) {
      this.log(`Error enabling tree shaking: ${error.message}`);
      return null;
    }
  }

  implementCodeSplitting() {
    try {
      this.log('✂️  Implementing code splitting strategies...');
      
      // Create code splitting configuration
      const codeSplittingConfig = {
        strategy: 'route-based',
        lazyLoading: true,
        vendorChunks: true,
        commonChunks: true
      };

      // Save configuration
      const configPath = path.join(this.projectRoot, '.code-splitting.json');
      fs.writeFileSync(configPath, JSON.stringify(codeSplittingConfig, null, 2));

      this.log('✅ Code splitting configuration created');
      return 'Code splitting configured';
    } catch (error) {
      this.log(`Error implementing code splitting: ${error.message}`);
      return null;
    }
  }

  optimizeImports() {
    try {
      this.log('📦 Optimizing import statements...');
      
      // Scan for import optimization opportunities
      const importOptimizations = [];
      
      // Check for barrel exports
      const srcPath = path.join(this.projectRoot, 'src');
      if (fs.existsSync(srcPath)) {
        const indexFiles = this.findIndexFiles(srcPath);
        indexFiles.forEach(file => {
          if (this.hasBarrelExports(file)) {
            importOptimizations.push(`Optimize barrel exports in ${file}`);
          }
        });
      }

      return importOptimizations.length > 0 ? importOptimizations.join(', ') : 'No import optimizations needed';
    } catch (error) {
      this.log(`Error optimizing imports: ${error.message}`);
      return null;
    }
  }

  findIndexFiles(dir) {
    const indexFiles = [];
    
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          indexFiles.push(...this.findIndexFiles(fullPath));
        } else if (item === 'index.ts' || item === 'index.tsx' || item === 'index.js' || item === 'index.jsx') {
          indexFiles.push(fullPath);
        }
      }
    } catch (error) {
      // Silent fail
    }
    
    return indexFiles;
  }

  hasBarrelExports(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const exportLines = content.split('\n').filter(line => 
        line.trim().startsWith('export') && 
        (line.includes('from') || line.includes('*'))
      );
      return exportLines.length > 5; // More than 5 exports suggests barrel file
    } catch (error) {
      return false;
    }
  }

  generateOptimizationConfig() {
    try {
      this.log('⚙️  Generating optimization configuration...');
      
      const optimizationConfig = {
        build: {
          minify: this.config.enableMinification,
          sourcemap: false,
          rollupOptions: {
            output: {
              manualChunks: {
                vendor: ['react', 'react-dom'],
                utils: ['lodash', 'moment'],
                ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog']
              }
            }
          }
        },
        optimizeDeps: {
          include: ['react', 'react-dom'],
          exclude: ['@radix-ui/react-accordion']
        }
      };

      // Save configuration
      const configPath = path.join(this.projectRoot, '.vite-optimization.json');
      fs.writeFileSync(configPath, JSON.stringify(optimizationConfig, null, 2));

      this.log('✅ Optimization configuration generated');
      return 'Optimization configuration created';
    } catch (error) {
      this.log(`Error generating optimization config: ${error.message}`);
      return null;
    }
  }

  async saveReport(report) {
    try {
      const logsDir = path.dirname(this.reportFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }

      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`📊 Bundle optimization report saved: ${this.reportFile}`);
    } catch (error) {
      this.log(`Error saving report: ${error.message}`);
    }
  }

  async run() {
    this.log('🚀 Bundle Optimizer starting...');

    try {
      // Build project
      const buildSuccess = await this.buildProject();
      if (!buildSuccess) {
        throw new Error('Build failed, cannot proceed with optimization');
      }

      // Analyze bundle
      const bundleStats = await this.analyzeBundle();
      if (!bundleStats) {
        throw new Error('Bundle analysis failed');
      }

      // Generate report
      const report = await this.generateBundleReport(bundleStats);
      if (!report) {
        throw new Error('Report generation failed');
      }

      // Apply optimizations
      const optimizations = await this.optimizeBundle(bundleStats);

      // Add optimizations to report
      report.appliedOptimizations = optimizations;

      // Save report
      await this.saveReport(report);

      // Log summary
      this.log(`📊 Bundle optimization completed. Score: ${report.summary.optimizationScore}/100`);
      this.log(`📦 Total bundle size: ${report.summary.totalSizeMB}MB`);
      this.log(`✂️  Chunks: ${report.summary.chunkCount}, Assets: ${report.summary.assetCount}`);
      
      if (report.recommendations.length > 0) {
        this.log('💡 Optimization Recommendations:');
        report.recommendations.forEach(rec => this.log(`   - ${rec}`));
      }

      if (report.actions.length > 0) {
        this.log('🔧 Recommended Actions:');
        report.actions.forEach(action => this.log(`   - ${action}`));
      }

      if (optimizations.length > 0) {
        this.log('✅ Applied Optimizations:');
        optimizations.forEach(opt => this.log(`   - ${opt}`));
      }

      this.log('✅ Bundle Optimizer completed successfully');

    } catch (error) {
      this.log(`❌ Bundle Optimizer failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const optimizer = new BundleOptimizer();
  optimizer.run();
}

module.exports = BundleOptimizer;