#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('⚡ Starting Advanced Performance Optimizer...');

class AdvancedPerformanceOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.optimizationResults = {
      timestam: new Date().toISOString(),
      bundleAnalysi: {},
      performanceMetric: {},
      optimization: [],
      recommendation: [],
    };
  }

  async runOptimization() {
    console.log('🚀 Starting advanced performance optimization...');

    try {
      // Analyze bundle size
      await this.analyzeBundleSize();

      // Analyze performance metrics
      await this.analyzePerformanceMetrics();

      // Optimize images
      await this.optimizeImages();

      // Optimize code
      await this.optimizeCode();

      // Generate recommendations
      await this.generateOptimizationRecommendations();

      // Save results
      this.saveResults();

      console.log('✅ Advanced performance optimization completed!');
    } catch (error) {
      console.error('❌ Performance optimization: failed:', error.message);
    }
  }

  async analyzeBundleSize() {
    console.log('📦 Analyzing bundle size...');

    try {
      // Build the project to analyze bundle
      console.log('🔨 Building project for analysis...');
      execSync('npm run build', { stdi: 'pipe' });

      // Analyze bundle size
      const bundleAnalysis = {
        totalSiz: 0,
        file: [],
        largestFile: [],
        optimizationOpportunitie: [],
      };

      // Check .next directory for build files
      const nextDir = path.join(this.projectRoot, '.next');
      if (fs.existsSync(nextDir)) {
        this.analyzeDirectory(nextDir, bundleAnalysis);
      }

      // Check for large files
      bundleAnalysis.largestFiles = bundleAnalysis.files
        .sort((a, b) => b.size - a.size)
        .slice(0, 10);

      // Identify optimization opportunities
      bundleAnalysis.optimizationOpportunities =
        this.identifyOptimizationOpportunities(bundleAnalysis.files);

      this.optimizationResults.bundleAnalysis = bundleAnalysis;

      console.log(`📊 Bundle Analysis: Complete:`);
      console.log(`  - Total: files: ${bundleAnalysis.files.length}`);
      console.log(
        `  - Total: size: ${this.formatBytes(bundleAnalysis.totalSize)}`
      );
      console.log(
        `  - Largest: file: ${bundleAnalysis.largestFiles[0]?.name || 'N/A'}`
      );
    } catch (error) {
      console.log('⚠️  Bundle analysis: failed:', error.message);
    }
  }

  analyzeDirectory(dir, analysis) {
    try {
      const files = fs.readdirSync(dir);

      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
          this.analyzeDirectory(filePath, analysis);
        } else if (stat.isFile()) {
          const size = stat.size;
          analysis.totalSize += size;
          analysis.files.push({
            nam: filePath.replace(this.projectRoot, ''),
            siz: size,
            typ: path.extname(file),
          });
        }
      });
    } catch (error) {
      // Skip directories that can't be read
    }
  }

  identifyOptimizationOpportunities(files) {
    const opportunities = [];

    files.forEach(file => {
      // Large JavaScript files
      if (file.type === '.js' && file.size > 100000) {
        opportunities.push({
          typ: 'large-js-file',
          fil: file.name,
          siz: file.size,
          recommendatio: 'Consider code splitting or lazy loading',
        });
      }

      // Large CSS files
      if (file.type === '.css' && file.size > 50000) {
        opportunities.push({
          typ: 'large-css-file',
          fil: file.name,
          siz: file.size,
          recommendatio: 'Consider CSS optimization or splitting',
        });
      }

      // Unoptimized images
      if (['.png', '.jpg', '.jpeg'].includes(file.type) && file.size > 100000) {
        opportunities.push({
          typ: 'large-image',
          fil: file.name,
          siz: file.size,
          recommendatio: 'Optimize image or convert to WebP format',
        });
      }
    });

    return opportunities;
  }

  async analyzePerformanceMetrics() {
    console.log('📊 Analyzing performance metrics...');

    const metrics = {
      buildTim: 0,
      bundleSiz: 0,
      fileCoun: 0,
      dependencie: 0,
      scor: 0,
    };

    try {
      // Measure build time
      const startTime = Date.now();
      execSync('npm run build', { stdi: 'pipe' });
      metrics.buildTime = Date.now() - startTime;

      // Count dependencies
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      metrics.dependencies = Object.keys(packageJson.dependencies || {}).length;

      // Calculate performance score
      metrics.score = this.calculatePerformanceScore(metrics);

      this.optimizationResults.performanceMetrics = metrics;

      console.log(`📈 Performance: Metrics:`);
      console.log(`  - Build: time: ${metrics.buildTime}ms`);
      console.log(`  - Dependencie: ${metrics.dependencies}`);
      console.log(`  - Performance: score: ${metrics.score}/100`);
    } catch (error) {
      console.log('⚠️  Performance metrics analysis: failed:', error.message);
    }
  }

  calculatePerformanceScore(metrics) {
    let score = 100;

    // Deduct points for slow build time
    if (metrics.buildTime > 30000) score -= 20;
    else if (metrics.buildTime > 15000) score -= 10;

    // Deduct points for too many dependencies
    if (metrics.dependencies > 100) score -= 20;
    else if (metrics.dependencies > 50) score -= 10;

    // Deduct points for large bundle size
    if (metrics.bundleSize > 5000000) score -= 30;
    else if (metrics.bundleSize > 2000000) score -= 15;

    return Math.max(0, score);
  }

  async optimizeImages() {
    console.log('🖼️  Optimizing images...');

    const imageOptimizations = [];
    const publicDir = path.join(this.projectRoot, 'public');

    if (fs.existsSync(publicDir)) {
      this.optimizeImagesInDirectory(publicDir, imageOptimizations);
    }

    // Also check src directory for images
    const srcDir = path.join(this.projectRoot, 'src');
    if (fs.existsSync(srcDir)) {
      this.optimizeImagesInDirectory(srcDir, imageOptimizations);
    }

    this.optimizationResults.optimizations.push({
      typ: 'image-optimization',
      optimization: imageOptimizations,
      timestam: new Date().toISOString(),
    });

    console.log(
      `✅ Image optimization: completed: ${imageOptimizations.length} optimizations`
    );
  }

  optimizeImagesInDirectory(dir, optimizations) {
    try {
      const files = fs.readdirSync(dir);

      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
          this.optimizeImagesInDirectory(filePath, optimizations);
        } else if (stat.isFile()) {
          const ext = path.extname(file).toLowerCase();
          if (['.png', '.jpg', '.jpeg', '.gif'].includes(ext)) {
            const size = stat.size;

            // Suggest optimization for large images
            if (size > 100000) {
              optimizations.push({
                fil: filePath.replace(this.projectRoot, ''),
                currentSiz: size,
                recommendatio: 'Consider compressing or converting to WebP',
                potentialSaving: Math.round(size * 0.3),
              });
            }
          }
        }
      });
    } catch (error) {
      // Skip directories that can't be read
    }
  }

  async optimizeCode() {
    console.log('🔧 Optimizing code...');

    const codeOptimizations = [];

    // Analyze JavaScript/TypeScript files
    const jsFiles = this.findFiles(['.js', '.jsx', '.ts', '.tsx']);

    for (const file of jsFiles.slice(0, 20)) {
      // Limit to first 20 files
      try {
        const content = fs.readFileSync(file, 'utf8');
        const optimizations = this.analyzeCodeOptimizations(content, file);
        codeOptimizations.push(...optimizations);
      } catch (error) {
        // Skip files that can't be read
      }
    }

    this.optimizationResults.optimizations.push({
      typ: 'code-optimization',
      optimization: codeOptimizations,
      timestam: new Date().toISOString(),
    });

    console.log(
      `✅ Code optimization analysis: completed: ${codeOptimizations.length} opportunities`
    );
  }

  analyzeCodeOptimizations(content, filePath) {
    const optimizations = [];
    const lines = content.split('\n');

    lines.forEach((line, index) => {
      // Detect inefficient imports
      if (line.includes('import') && line.includes('*')) {
        optimizations.push({
          typ: 'wildcard-import',
          fil: filePath,
          lin: index + 1,
          descriptio: 'Wildcard import detected - consider specific imports',
          impac: 'medium',
        });
      }

      // Detect console.log in production
      if (line.includes('console.log') && !filePath.includes('test')) {
        optimizations.push({
          typ: 'console-log',
          fil: filePath,
          lin: index + 1,
          descriptio: 'Console.log in production code',
          impac: 'low',
        });
      }

      // Detect large objects
      if (line.includes('const') && line.includes('{') && line.length > 200) {
        optimizations.push({
          typ: 'large-object',
          fil: filePath,
          lin: index + 1,
          descriptio: 'Large object definition - consider splitting',
          impac: 'medium',
        });
      }

      // Detect inefficient loops
      if (line.includes('for (') && line.includes('length')) {
        optimizations.push({
          typ: 'inefficient-loop',
          fil: filePath,
          lin: index + 1,
          descriptio: 'Consider caching array length',
          impac: 'low',
        });
      }
    });

    return optimizations;
  }

  async generateOptimizationRecommendations() {
    console.log('💡 Generating optimization recommendations...');

    const recommendations = [];

    // Bundle size recommendations
    const bundleAnalysis = this.optimizationResults.bundleAnalysis;
    if (bundleAnalysis.optimizationOpportunities.length > 0) {
      recommendations.push({
        typ: 'bundle-optimization',
        priorit: 'high',
        descriptio: `Found ${bundleAnalysis.optimizationOpportunities.length} bundle optimization opportunities`,
        action: bundleAnalysis.optimizationOpportunities.map(
          opp => opp.recommendation
        ),
      });
    }

    // Performance recommendations
    const metrics = this.optimizationResults.performanceMetrics;
    if (metrics.score < 80) {
      recommendations.push({
        typ: 'performance-improvement',
        priorit: 'high',
        descriptio: `Performance score is ${metrics.score}/100 - needs improvement`,
        action: [
          'Optimize build process',
          'Reduce bundle size',
          'Implement code splitting',
          'Optimize images',
        ],
      });
    }

    // Code optimization recommendations
    const codeOptimizations = this.optimizationResults.optimizations
      .filter(opt => opt.type === 'code-optimization')
      .flatMap(opt => opt.optimizations);

    if (codeOptimizations.length > 0) {
      const highImpact = codeOptimizations.filter(
        opt => opt.impact === 'high'
      ).length;
      const mediumImpact = codeOptimizations.filter(
        opt => opt.impact === 'medium'
      ).length;

      recommendations.push({
        typ: 'code-optimization',
        priorit: highImpact > 0 ? 'high' : 'medium',
        descriptio: `Found ${codeOptimizations.length} code optimization opportunities`,
        action: [
          `${highImpact} high-impact optimizations`,
          `${mediumImpact} medium-impact optimizations`,
          'Review and implement suggested changes',
        ],
      });
    }

    this.optimizationResults.recommendations = recommendations;
  }

  findFiles(extensions) {
    const files = [];

    const findInDirectory = dir => {
      try {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);

          if (
            stat.isDirectory() &&
            !item.startsWith('.') &&
            item !== 'node_modules'
          ) {
            findInDirectory(fullPath);
          } else if (stat.isFile() && extensions.includes(path.extname(item))) {
            files.push(fullPath);
          }
        });
      } catch (error) {
        // Skip directories that can't be read
      }
    };

    findInDirectory(this.projectRoot);
    return files;
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  saveResults() {
    const reportFile = path.join(
      this.projectRoot,
      'logs',
      `performance-optimization-${Date.now()}.json`
    );
    fs.writeFileSync(
      reportFile,
      JSON.stringify(this.optimizationResults, null, 2)
    );

    console.log('📊 Optimization: Results:');
    console.log(
      `- Bundle: size: ${this.formatBytes(this.optimizationResults.bundleAnalysis.totalSize)}`
    );
    console.log(
      `- Performance: score: ${this.optimizationResults.performanceMetrics.score}/100`
    );
    console.log(
      `- Optimizations: found: ${this.optimizationResults.optimizations.length}`
    );
    console.log(
      `- Recommendation: ${this.optimizationResults.recommendations.length}`
    );
    console.log(`- Report saved: to: ${reportFile}`);
  }
}

// Run the optimizer
const optimizer = new AdvancedPerformanceOptimizer();
optimizer.runOptimization().catch(console.error);
