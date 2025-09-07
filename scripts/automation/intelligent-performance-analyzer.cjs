#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('⚡ Starting Intelligent Performance Analyzer...');

// Get automation interval from environment variable (default: 2 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 7200000; // 2 hours

class IntelligentPerformanceAnalyzer {
  constructor() {
    this.performanceResults = {
      bundle: {
        size: {},
        chunks: [],
        assets: [],
        optimization: {}
      },
      runtime: {
        metrics: {},
        bottlenecks: [],
        recommendations: []
      },
      build: {
        time: 0,
        memory: 0,
        optimization: {}
      },
      lighthouse: {
        scores: {},
        opportunities: [],
        diagnostics: []
      },
      recommendations: []
    };
    this.reportDir = path.join(process.cwd(), 'performance-analysis-reports');
    this.ensureReportDirectory();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async runAnalysis() {
    try {
      console.log(`⚡ Running intelligent performance analysis at ${new Date().toISOString()}`);
      
      // Analyze bundle performance
      await this.analyzeBundlePerformance();
      
      // Analyze build performance
      await this.analyzeBuildPerformance();
      
      // Analyze runtime performance
      await this.analyzeRuntimePerformance();
      
      // Run Lighthouse analysis if possible
      await this.runLighthouseAnalysis();
      
      // Generate intelligent recommendations
      await this.generatePerformanceRecommendations();
      
      // Save comprehensive report
      await this.saveReport();
      
      console.log('✅ Intelligent performance analysis completed successfully');
      
    } catch (error) {
      console.error('❌ Intelligent performance analysis failed:', error.message);
    }
  }

  async analyzeBundlePerformance() {
    console.log('📦 Analyzing bundle performance...');
    
    try {
      // Build the project first
      await this.buildProject();
      
      // Analyze bundle size and structure
      await this.analyzeBundleSize();
      
      // Analyze chunk splitting
      await this.analyzeChunkSplitting();
      
      // Analyze asset optimization
      await this.analyzeAssetOptimization();
      
    } catch (error) {
      console.log('⚠️  Bundle performance analysis failed:', error.message);
    }
  }

  async buildProject() {
    try {
      console.log('🏗️  Building project for performance analysis...');
      const startTime = Date.now();
      
      execSync('npm run build', { 
        stdio: 'inherit',
        timeout: 300000 // 5 minutes timeout
      });
      
      const buildTime = Date.now() - startTime;
      this.performanceResults.build.time = buildTime;
      
      console.log(`✅ Build completed in ${buildTime}ms`);
      
    } catch (error) {
      console.log('⚠️  Build failed but continuing with analysis:', error.message);
    }
  }

  async analyzeBundleSize() {
    const distPath = path.join(process.cwd(), 'dist');
    if (!fs.existsSync(distPath)) {
      console.log('⚠️  Dist directory not found');
      return;
    }

    try {
      const totalSize = this.getDirectorySize(distPath);
      this.performanceResults.bundle.size = {
        total: totalSize,
        formatted: this.formatBytes(totalSize),
        analysis: this.analyzeSizeDistribution(distPath)
      };

      console.log(`📊 Bundle size: ${this.formatBytes(totalSize)}`);
      
    } catch (error) {
      console.log('⚠️  Could not analyze bundle size:', error.message);
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    
    try {
      const items = fs.readdirSync(dirPath);
      
      items.forEach(item => {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          totalSize += this.getDirectorySize(fullPath);
        } else {
          totalSize += stat.size;
        }
      });
    } catch (error) {
      // Ignore permission errors
    }
    
    return totalSize;
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  analyzeSizeDistribution(distPath) {
    const analysis = {
      largeFiles: [],
      totalFiles: 0,
      averageFileSize: 0,
      sizeDistribution: {}
    };

    let totalSize = 0;
    let fileCount = 0;
    const files = [];

    this.getAllFiles(distPath, ['.js', '.css', '.html', '.json', '.map']).forEach(filePath => {
      const stat = fs.statSync(filePath);
      const size = stat.size;
      const relativePath = path.relative(distPath, filePath);
      
      files.push({ path: relativePath, size });
      totalSize += size;
      fileCount++;
      
      // Track large files (>100KB)
      if (size > 100 * 1024) {
        analysis.largeFiles.push({
          file: relativePath,
          size: this.formatBytes(size),
          rawSize: size
        });
      }
    });

    analysis.totalFiles = fileCount;
    analysis.averageFileSize = fileCount > 0 ? totalSize / fileCount : 0;
    
    // Sort large files by size
    analysis.largeFiles.sort((a, b) => b.rawSize - a.rawSize);

    return analysis;
  }

  getAllFiles(dirPath, extensions) {
    const files = [];
    
    const items = fs.readdirSync(dirPath);
    
    items.forEach(item => {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.getAllFiles(fullPath, extensions));
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    });
    
    return files;
  }

  async analyzeChunkSplitting() {
    try {
      const distPath = path.join(process.cwd(), 'dist');
      if (!fs.existsSync(distPath)) return;

      const jsFiles = this.getAllFiles(distPath, ['.js']);
      const chunks = [];

      jsFiles.forEach(filePath => {
        const stat = fs.statSync(filePath);
        const relativePath = path.relative(distPath, filePath);
        const size = stat.size;

        chunks.push({
          name: relativePath,
          size: this.formatBytes(size),
          rawSize: size,
          type: this.getChunkType(relativePath)
        });
      });

      // Sort chunks by size
      chunks.sort((a, b) => b.rawSize - a.rawSize);
      this.performanceResults.bundle.chunks = chunks;

      // Analyze chunk splitting effectiveness
      this.analyzeChunkSplittingEffectiveness(chunks);

      console.log(`📊 Analyzed ${chunks.length} JavaScript chunks`);
      
    } catch (error) {
      console.log('⚠️  Could not analyze chunk splitting:', error.message);
    }
  }

  getChunkType(fileName) {
    if (fileName.includes('vendor') || fileName.includes('chunk')) return 'vendor';
    if (fileName.includes('index') || fileName.includes('main')) return 'main';
    if (fileName.includes('polyfill') || fileName.includes('polyfills')) return 'polyfill';
    return 'unknown';
  }

  analyzeChunkSplittingEffectiveness(chunks) {
    const mainChunk = chunks.find(chunk => chunk.type === 'main');
    const vendorChunks = chunks.filter(chunk => chunk.type === 'vendor');
    
    if (mainChunk && vendorChunks.length > 0) {
      const mainSize = mainChunk.rawSize;
      const vendorSize = vendorChunks.reduce((sum, chunk) => sum + chunk.rawSize, 0);
      const totalSize = mainSize + vendorSize;
      
      const mainPercentage = (mainSize / totalSize) * 100;
      const vendorPercentage = (vendorSize / totalSize) * 100;
      
      this.performanceResults.bundle.optimization.chunkSplitting = {
        mainChunkPercentage: mainPercentage.toFixed(2),
        vendorChunkPercentage: vendorPercentage.toFixed(2),
        effectiveness: mainPercentage < 50 ? 'good' : 'needs-improvement',
        suggestion: mainPercentage < 50 ? 
          'Chunk splitting is working well' : 
          'Consider improving chunk splitting to reduce main bundle size'
      };
    }
  }

  async analyzeAssetOptimization() {
    try {
      const distPath = path.join(process.cwd(), 'dist');
      if (!fs.existsSync(distPath)) return;

      const assets = [];
      const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'];
      const fontExtensions = ['.woff', '.woff2', '.ttf', '.eot'];
      
      // Analyze images
      const images = this.getAllFiles(distPath, imageExtensions);
      images.forEach(imagePath => {
        const stat = fs.statSync(imagePath);
        const relativePath = path.relative(distPath, imagePath);
        const size = stat.size;
        
        assets.push({
          type: 'image',
          path: relativePath,
          size: this.formatBytes(size),
          rawSize: size,
          optimization: this.analyzeImageOptimization(imagePath, size)
        });
      });

      // Analyze fonts
      const fonts = this.getAllFiles(distPath, fontExtensions);
      fonts.forEach(fontPath => {
        const stat = fs.statSync(fontPath);
        const relativePath = path.relative(distPath, fontPath);
        const size = stat.size;
        
        assets.push({
          type: 'font',
          path: relativePath,
          size: this.formatBytes(size),
          rawSize: size,
          optimization: this.analyzeFontOptimization(fontPath, size)
        });
      });

      this.performanceResults.bundle.assets = assets;
      
      // Generate asset optimization recommendations
      this.generateAssetOptimizationRecommendations(assets);
      
      console.log(`📊 Analyzed ${assets.length} assets`);
      
    } catch (error) {
      console.log('⚠️  Could not analyze assets:', error.message);
    }
  }

  analyzeImageOptimization(imagePath, size) {
    const recommendations = [];
    
    if (size > 500 * 1024) { // 500KB
      recommendations.push('Consider compressing this image');
    }
    
    if (imagePath.endsWith('.png') && size > 100 * 1024) {
      recommendations.push('Consider converting to WebP format');
    }
    
    if (imagePath.endsWith('.jpg') && size > 200 * 1024) {
      recommendations.push('Consider using progressive JPEG or WebP');
    }
    
    return {
      sizeCategory: size > 500 * 1024 ? 'large' : size > 100 * 1024 ? 'medium' : 'small',
      recommendations
    };
  }

  analyzeFontOptimization(fontPath, size) {
    const recommendations = [];
    
    if (size > 100 * 1024) { // 100KB
      recommendations.push('Consider using font subsetting');
    }
    
    if (fontPath.endsWith('.ttf') || fontPath.endsWith('.eot')) {
      recommendations.push('Consider using WOFF2 format for better compression');
    }
    
    return {
      sizeCategory: size > 100 * 1024 ? 'large' : 'small',
      recommendations
    };
  }

  generateAssetOptimizationRecommendations(assets) {
    const largeAssets = assets.filter(asset => asset.optimization.sizeCategory === 'large');
    
    if (largeAssets.length > 0) {
      this.performanceResults.bundle.optimization.assets = {
        largeAssetsCount: largeAssets.length,
        totalSize: largeAssets.reduce((sum, asset) => sum + asset.rawSize, 0),
        recommendations: [
          'Compress large images using tools like ImageOptim or TinyPNG',
          'Convert images to modern formats like WebP',
          'Use font subsetting for large font files',
          'Consider lazy loading for non-critical assets'
        ]
      };
    }
  }

  async analyzeBuildPerformance() {
    console.log('🔨 Analyzing build performance...');
    
    try {
      // Analyze build time
      if (this.performanceResults.build.time > 0) {
        this.performanceResults.build.optimization.buildTime = {
          time: this.performanceResults.build.time,
          category: this.categorizeBuildTime(this.performanceResults.build.time),
          suggestions: this.getBuildTimeSuggestions(this.performanceResults.build.time)
        };
      }

      // Check build configuration
      await this.analyzeBuildConfiguration();
      
    } catch (error) {
      console.log('⚠️  Build performance analysis failed:', error.message);
    }
  }

  categorizeBuildTime(buildTime) {
    if (buildTime < 30000) return 'fast';
    if (buildTime < 60000) return 'moderate';
    if (buildTime < 120000) return 'slow';
    return 'very-slow';
  }

  getBuildTimeSuggestions(buildTime) {
    const suggestions = [];
    
    if (buildTime > 60000) {
      suggestions.push('Consider using build caching');
      suggestions.push('Enable parallel processing in build tools');
      suggestions.push('Review and optimize build dependencies');
    }
    
    if (buildTime > 120000) {
      suggestions.push('Consider using incremental builds');
      suggestions.push('Split build process into smaller chunks');
      suggestions.push('Use build profiling to identify bottlenecks');
    }
    
    return suggestions;
  }

  async analyzeBuildConfiguration() {
    try {
      const viteConfig = path.join(process.cwd(), 'vite.config.ts');
      
      if (fs.existsSync(viteConfig)) {
        const content = fs.readFileSync(viteConfig, 'utf8');
        
        const optimizations = {
          minification: content.includes('build.minify'),
          sourceMaps: content.includes('build.sourcemap'),
          chunkSplitting: content.includes('build.rollupOptions'),
          treeShaking: content.includes('build.rollupOptions') && content.includes('treeshake'),
          esbuild: content.includes('esbuild')
        };
        
        this.performanceResults.build.optimization.configuration = optimizations;
        
        // Generate configuration recommendations
        const configRecommendations = [];
        
        if (!optimizations.minification) {
          configRecommendations.push('Enable minification for production builds');
        }
        
        if (optimizations.sourceMaps) {
          configRecommendations.push('Consider disabling source maps in production for smaller bundles');
        }
        
        if (!optimizations.chunkSplitting) {
          configRecommendations.push('Configure chunk splitting for better caching');
        }
        
        if (configRecommendations.length > 0) {
          this.performanceResults.build.optimization.recommendations = configRecommendations;
        }
      }
      
    } catch (error) {
      console.log('⚠️  Could not analyze build configuration:', error.message);
    }
  }

  async analyzeRuntimePerformance() {
    console.log('🚀 Analyzing runtime performance...');
    
    try {
      // Analyze source code for performance patterns
      await this.analyzeSourceCodePerformance();
      
      // Check for common performance anti-patterns
      await this.checkPerformanceAntiPatterns();
      
    } catch (error) {
      console.log('⚠️  Runtime performance analysis failed:', error.message);
    }
  }

  async analyzeSourceCodePerformance() {
    const srcPath = path.join(process.cwd(), 'src');
    if (!fs.existsSync(srcPath)) return;

    const files = this.getAllFiles(srcPath, ['.ts', '.tsx', '.js', '.jsx']);
    let performanceIssues = 0;
    
    files.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      const issues = this.analyzeFilePerformance(file, content);
      performanceIssues += issues.length;
      
      if (issues.length > 0) {
        this.performanceResults.runtime.bottlenecks.push(...issues);
      }
    });

    this.performanceResults.runtime.metrics.performanceIssues = performanceIssues;
    console.log(`🔍 Found ${performanceIssues} potential performance issues`);
  }

  analyzeFilePerformance(filePath, content) {
    const issues = [];
    const fileName = path.basename(filePath);
    const lines = content.split('\n');

    lines.forEach((line, index) => {
      const lineNum = index + 1;
      
      // Check for expensive operations
      if (line.includes('innerHTML') || line.includes('outerHTML')) {
        issues.push({
          file: fileName,
          line: lineNum,
          type: 'innerHTML-usage',
          severity: 'medium',
          description: 'innerHTML/outerHTML can cause performance issues',
          suggestion: 'Use textContent or createElement instead'
        });
      }

      // Check for large loops
      if (line.includes('for (') && line.includes('length') && 
          (line.includes('1000') || line.includes('10000'))) {
        issues.push({
          file: fileName,
          line: lineNum,
          type: 'large-loop',
          severity: 'low',
          description: 'Large loop detected',
          suggestion: 'Consider using more efficient iteration methods'
        });
      }

      // Check for expensive React patterns
      if (line.includes('useEffect') && line.includes('setInterval')) {
        issues.push({
          file: fileName,
          line: lineNum,
          type: 'useEffect-setInterval',
          severity: 'medium',
          description: 'setInterval in useEffect without cleanup',
          suggestion: 'Always return cleanup function from useEffect'
        });
      }

      // Check for inline object/function creation
      if (line.includes('= {') && line.includes('}') && line.length > 100) {
        issues.push({
          file: fileName,
          line: lineNum,
          type: 'inline-object',
          severity: 'low',
          description: 'Large inline object creation',
          suggestion: 'Extract to constant or use useMemo'
        });
      }
    });

    return issues;
  }

  async checkPerformanceAntiPatterns() {
    const antiPatterns = [];
    
    // Check for common performance anti-patterns
    const srcPath = path.join(process.cwd(), 'src');
    if (fs.existsSync(srcPath)) {
      const files = this.getAllFiles(srcPath, ['.ts', '.tsx', '.js', '.jsx']);
      
      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for multiple re-renders
        if ((content.match(/useState/g) || []).length > 5) {
          antiPatterns.push({
            type: 'multiple-state',
            description: 'Many useState hooks detected',
            suggestion: 'Consider combining related state or using useReducer'
          });
        }
        
        // Check for expensive calculations
        if (content.includes('useMemo') && content.includes('useCallback')) {
          antiPatterns.push({
            type: 'optimization-hooks',
            description: 'Performance optimization hooks detected',
            suggestion: 'Good use of performance optimization hooks'
          });
        }
      });
    }
    
    this.performanceResults.runtime.antiPatterns = antiPatterns;
  }

  async runLighthouseAnalysis() {
    console.log('🏠 Running Lighthouse analysis...');
    
    try {
      // Check if we can run Lighthouse
      if (this.canRunLighthouse()) {
        await this.runLighthouseAudit();
      } else {
        console.log('⚠️  Lighthouse not available, skipping audit');
      }
    } catch (error) {
      console.log('⚠️  Lighthouse analysis failed:', error.message);
    }
  }

  canRunLighthouse() {
    try {
      execSync('npx lighthouse --version', { stdio: 'pipe' });
      return true;
    } catch (error) {
      return false;
    }
  }

  async runLighthouseAudit() {
    try {
      // Build and serve the project for Lighthouse
      const distPath = path.join(process.cwd(), 'dist');
      if (!fs.existsSync(distPath)) {
        console.log('⚠️  Dist directory not found for Lighthouse');
        return;
      }

      // Run Lighthouse on the built project
      const output = execSync('npx lighthouse dist/index.html --output=json --output-path=./lighthouse-report.json', {
        stdio: 'pipe',
        timeout: 120000 // 2 minutes timeout
      });

      // Parse Lighthouse results
      if (fs.existsSync('./lighthouse-report.json')) {
        const lighthouseData = JSON.parse(fs.readFileSync('./lighthouse-report.json', 'utf8'));
        this.parseLighthouseResults(lighthouseData);
        
        // Clean up
        fs.unlinkSync('./lighthouse-report.json');
      }

      console.log('✅ Lighthouse analysis completed');
      
    } catch (error) {
      console.log('⚠️  Lighthouse audit failed:', error.message);
    }
  }

  parseLighthouseResults(data) {
    if (data.categories) {
      this.performanceResults.lighthouse.scores = {
        performance: data.categories.performance?.score * 100 || 0,
        accessibility: data.categories.accessibility?.score * 100 || 0,
        bestPractices: data.categories['best-practices']?.score * 100 || 0,
        seo: data.categories.seo?.score * 100 || 0
      };

      // Parse opportunities
      if (data.audits) {
        const opportunities = Object.values(data.audits)
          .filter(audit => audit.details && audit.details.type === 'opportunity')
          .map(audit => ({
            title: audit.title,
            description: audit.description,
            score: audit.score,
            numericValue: audit.numericValue,
            displayValue: audit.displayValue
          }));

        this.performanceResults.lighthouse.opportunities = opportunities;
      }
    }
  }

  async generatePerformanceRecommendations() {
    console.log('💡 Generating intelligent performance recommendations...');
    
    const recommendations = [];
    
    // Bundle size recommendations
    if (this.performanceResults.bundle.size.total > 2 * 1024 * 1024) { // 2MB
      recommendations.push({
        priority: 'high',
        type: 'bundle-size',
        description: 'Bundle size is quite large',
        actions: [
          'Implement code splitting for routes',
          'Use dynamic imports for heavy components',
          'Optimize and compress images',
          'Consider using tree shaking more effectively'
        ]
      });
    }

    // Build time recommendations
    if (this.performanceResults.build.time > 60000) { // 1 minute
      recommendations.push({
        priority: 'medium',
        type: 'build-time',
        description: 'Build time is slow',
        actions: [
          'Enable build caching',
          'Use incremental builds',
          'Optimize build dependencies',
          'Consider using esbuild for faster builds'
        ]
      });
    }

    // Runtime performance recommendations
    if (this.performanceResults.runtime.bottlenecks.length > 5) {
      recommendations.push({
        priority: 'medium',
        type: 'runtime-performance',
        description: 'Multiple performance issues detected',
        actions: [
          'Review and fix identified bottlenecks',
          'Implement React.memo for expensive components',
          'Use useMemo and useCallback for expensive calculations',
          'Consider implementing virtualization for large lists'
        ]
      });
    }

    // Lighthouse score recommendations
    if (this.performanceResults.lighthouse.scores.performance < 80) {
      recommendations.push({
        priority: 'high',
        type: 'lighthouse-performance',
        description: 'Lighthouse performance score is low',
        actions: [
          'Implement lazy loading for images',
          'Optimize critical rendering path',
          'Reduce unused CSS and JavaScript',
          'Implement proper caching strategies'
        ]
      });
    }

    this.performanceResults.recommendations = recommendations;
  }

  async saveReport() {
    const timestamp = new Date().toISOString();
    const reportPath = path.join(this.reportDir, `performance-analysis-${Date.now()}.json`);
    
    const report = {
      timestamp,
      summary: {
        bundleSize: this.performanceResults.bundle.size.formatted,
        buildTime: this.performanceResults.build.time,
        performanceIssues: this.performanceResults.runtime.metrics.performanceIssues,
        lighthouseScore: this.performanceResults.lighthouse.scores.performance,
        recommendations: this.performanceResults.recommendations.length
      },
      details: this.performanceResults
    };
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Performance analysis report saved to ${reportPath}`);
    
    // Also save a summary report
    const summaryPath = path.join(this.reportDir, 'latest-performance-summary.json');
    fs.writeFileSync(summaryPath, JSON.stringify(report.summary, null, 2));
  }
}

// Main execution
async function main() {
  const analyzer = new IntelligentPerformanceAnalyzer();
  
  // Run initial analysis
  await analyzer.runAnalysis();
  
  // Set up continuous analysis
  setInterval(async () => {
    await analyzer.runAnalysis();
  }, AUTOMATION_INTERVAL);
  
  console.log(`🔄 Intelligent performance analyzer will run every ${AUTOMATION_INTERVAL / 60000} minutes`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Intelligent performance analyzer shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Intelligent performance analyzer shutting down gracefully...');
  process.exit(0);
});

// Start the analyzer
main().catch(error => {
  console.error('❌ Fatal error in intelligent performance analyzer:', error);
  process.exit(1);
});