#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/performance-optimizer.log');
    this.optimizationFile = path.join(this.projectRoot, 'logs/pm2/optimization-report.json');
    this.bundleAnalysisFile = path.join(this.projectRoot, 'logs/pm2/bundle-analysis.json');
    this.startTime = Date.now();
    this.optimizations = {
      timestamp: new Date().toISOString(),
      bundle: {},
      code: {},
      assets: {},
      recommendations: [],
      metrics: {}
    };
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = ['logs/pm2', 'logs/automation', 'logs/reports'];
    dirs.forEach(dir => {
      const dirPath = path.join(this.projectRoot, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async analyzeBundle() {
    this.log('📦 Analyzing bundle structure...');
    
    try {
      if (!fs.existsSync('dist')) {
        this.log('No dist directory found, running build...');
        execSync('npm run build', { cwd: this.projectRoot, stdio: 'pipe' });
      }

      const bundleStats = {
        totalSize: 0,
        fileCount: 0,
        largestFiles: [],
        fileTypes: {},
        compressionRatio: 0
      };

      this.analyzeDirectory('dist', bundleStats);
      
      // Calculate compression ratio
      const originalSize = this.calculateOriginalSize();
      bundleStats.compressionRatio = originalSize > 0 ? 
        (1 - bundleStats.totalSize / originalSize) * 100 : 0;

      this.optimizations.bundle = bundleStats;
      this.log(`📊 Bundle analysis completed - ${bundleStats.fileCount} files, ${(bundleStats.totalSize / 1024 / 1024).toFixed(2)}MB total`);
      
      return bundleStats;
    } catch (error) {
      this.log(`❌ Bundle analysis failed: ${error.message}`, 'ERROR');
      return null;
    }
  }

  analyzeDirectory(dir, stats) {
    try {
      const items = fs.readdirSync(dir);
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          this.analyzeDirectory(fullPath, stats);
        } else {
          const fileInfo = {
            path: fullPath.replace(this.projectRoot + '/dist/', ''),
            size: stat.size,
            sizeKB: Math.round(stat.size / 1024 * 100) / 100,
            extension: path.extname(item)
          };
          
          stats.totalSize += stat.size;
          stats.fileCount++;
          
          // Track file types
          const ext = fileInfo.extension || 'no-extension';
          if (!stats.fileTypes[ext]) {
            stats.fileTypes[ext] = { count: 0, totalSize: 0 };
          }
          stats.fileTypes[ext].count++;
          stats.fileTypes[ext].totalSize += stat.size;
          
          // Track largest files
          stats.largestFiles.push(fileInfo);
        }
      });
      
      // Sort largest files
      stats.largestFiles.sort((a, b) => b.size - a.size);
      stats.largestFiles = stats.largestFiles.slice(0, 10);
    } catch (error) {
      this.log(`Warning: Could not analyze directory ${dir}: ${error.message}`, 'WARN');
    }
  }

  calculateOriginalSize() {
    let totalSize = 0;
    const sourceExtensions = ['.js', '.jsx', '.ts', '.tsx', '.vue', '.svelte'];
    
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !['node_modules', '.git', 'dist', 'build'].includes(item)) {
            scanDirectory(fullPath);
          } else if (sourceExtensions.some(ext => item.endsWith(ext))) {
            totalSize += stat.size;
          }
        });
      } catch (error) {
        // Skip inaccessible directories
      }
    };
    
    scanDirectory(this.projectRoot);
    return totalSize;
  }

  async analyzeCodePerformance() {
    this.log('🔍 Analyzing code performance...');
    
    try {
      const sourceFiles = this.getSourceFiles();
      const codeAnalysis = {
        totalFiles: sourceFiles.length,
        totalLines: 0,
        performanceIssues: [],
        optimizationOpportunities: []
      };

      for (const file of sourceFiles) {
        const analysis = await this.analyzeFile(file);
        codeAnalysis.totalLines += analysis.lines;
        codeAnalysis.performanceIssues.push(...analysis.issues);
        codeAnalysis.optimizationOpportunities.push(...analysis.opportunities);
      }

      this.optimizations.code = codeAnalysis;
      this.log(`🔍 Code analysis completed - ${sourceFiles.length} files, ${codeAnalysis.performanceIssues.length} issues found`);
      
      return codeAnalysis;
    } catch (error) {
      this.log(`❌ Code analysis failed: ${error.message}`, 'ERROR');
      return null;
    }
  }

  getSourceFiles() {
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.vue', '.svelte'];
    const excludeDirs = ['node_modules', '.git', 'dist', 'build', 'coverage', 'logs'];
    const files = [];

    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            if (!excludeDirs.includes(item)) {
              scanDirectory(fullPath);
            }
          } else if (extensions.some(ext => item.endsWith(ext))) {
            files.push(fullPath);
          }
        });
      } catch (error) {
        // Skip inaccessible directories
      }
    };

    scanDirectory(this.projectRoot);
    return files;
  }

  async analyzeFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      const relativePath = path.relative(this.projectRoot, filePath);
      
      const analysis = {
        file: relativePath,
        lines: lines.length,
        issues: [],
        opportunities: []
      };

      // Check for performance anti-patterns
      this.checkPerformancePatterns(content, analysis);
      
      // Check for optimization opportunities
      this.checkOptimizationOpportunities(content, analysis);
      
      // Check for bundle optimization opportunities
      this.checkBundleOptimizations(content, analysis);

      return analysis;
    } catch (error) {
      this.log(`Error analyzing file ${filePath}: ${error.message}`, 'ERROR');
      return { file: filePath, lines: 0, issues: [], opportunities: [] };
    }
  }

  checkPerformancePatterns(content, analysis) {
    const patterns = [
      {
        name: 'console.log',
        regex: /console\.(log|warn|error|info)/g,
        severity: 'low',
        message: 'Remove console statements for production'
      },
      {
        name: 'document.querySelector',
        regex: /document\.querySelector/g,
        severity: 'medium',
        message: 'Cache DOM queries to avoid repeated lookups'
      },
      {
        name: 'innerHTML',
        regex: /\.innerHTML\s*=/g,
        severity: 'medium',
        message: 'Consider using textContent or createElement for better performance'
      },
      {
        name: 'for-in loops',
        regex: /for\s*\(\s*\w+\s+in\s+/g,
        severity: 'medium',
        message: 'Use for-of or forEach instead of for-in loops'
      },
      {
        name: 'eval usage',
        regex: /\beval\s*\(/g,
        severity: 'high',
        message: 'Avoid eval() - it prevents optimization and is a security risk'
      },
      {
        name: 'setTimeout with 0',
        regex: /setTimeout\([^,]*,\s*0\)/g,
        severity: 'low',
        message: 'Consider using requestAnimationFrame instead'
      }
    ];

    patterns.forEach(pattern => {
      const matches = content.match(pattern.regex);
      if (matches) {
        analysis.issues.push({
          type: 'performance',
          pattern: pattern.name,
          count: matches.length,
          severity: pattern.severity,
          message: pattern.message
        });
      }
    });
  }

  checkOptimizationOpportunities(content, analysis) {
    const opportunities = [
      {
        name: 'arrow functions',
        regex: /function\s+\w+\s*\([^)]*\)\s*\{/g,
        message: 'Consider using arrow functions for better performance'
      },
      {
        name: 'const/let instead of var',
        regex: /var\s+\w+/g,
        message: 'Use const/let instead of var for better scoping'
      },
      {
        name: 'template literals',
        regex: /"[^"]*"\s*\+\s*[^+]+/g,
        message: 'Use template literals instead of string concatenation'
      },
      {
        name: 'destructuring',
        regex: /const\s+\w+\s*=\s*[^;]+\.\w+/g,
        message: 'Consider using destructuring for cleaner code'
      }
    ];

    opportunities.forEach(opp => {
      const matches = content.match(opp.regex);
      if (matches && matches.length > 2) {
        analysis.opportunities.push({
          type: 'optimization',
          pattern: opp.name,
          count: matches.length,
          message: opp.message
        });
      }
    });
  }

  checkBundleOptimizations(content, analysis) {
    const bundleOptimizations = [
      {
        name: 'large imports',
        regex: /import\s+\{[^}]{100,}\}/g,
        message: 'Consider splitting large imports or using tree shaking'
      },
      {
        name: 'dynamic imports',
        regex: /import\s*\(/g,
        message: 'Good use of dynamic imports for code splitting'
      },
      {
        name: 'side effects',
        regex: /import\s+['"][^'"]*['"];?\s*$/gm,
        message: 'Side-effect imports can prevent tree shaking'
      }
    ];

    bundleOptimizations.forEach(opt => {
      const matches = content.match(opt.regex);
      if (matches) {
        analysis.opportunities.push({
          type: 'bundle',
          pattern: opt.name,
          count: matches.length,
          message: opt.message
        });
      }
    });
  }

  async optimizeAssets() {
    this.log('🖼️ Optimizing assets...');
    
    try {
      const assetOptimizations = {
        images: await this.optimizeImages(),
        css: await this.optimizeCSS(),
        js: await this.optimizeJS()
      };

      this.optimizations.assets = assetOptimizations;
      this.log(`🖼️ Asset optimization completed`);
      
      return assetOptimizations;
    } catch (error) {
      this.log(`❌ Asset optimization failed: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async optimizeImages() {
    const imageOptimizations = [];
    
    try {
      // Find image files
      const imageFiles = this.findFiles(['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp']);
      
      for (const file of imageFiles) {
        const stats = fs.statSync(file);
        const sizeKB = Math.round(stats.size / 1024 * 100) / 100;
        
        if (sizeKB > 100) { // Files larger than 100KB
          imageOptimizations.push({
            file: path.relative(this.projectRoot, file),
            currentSize: sizeKB,
            recommendation: 'Consider compressing or converting to WebP format',
            priority: sizeKB > 500 ? 'high' : 'medium'
          });
        }
      }
      
      return {
        totalImages: imageFiles.length,
        largeImages: imageOptimizations.length,
        optimizations: imageOptimizations
      };
    } catch (error) {
      this.log(`Error optimizing images: ${error.message}`, 'ERROR');
      return { totalImages: 0, largeImages: 0, optimizations: [] };
    }
  }

  async optimizeCSS() {
    const cssOptimizations = [];
    
    try {
      const cssFiles = this.findFiles(['.css', '.scss', '.sass', '.less']);
      
      for (const file of cssFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const size = content.length;
        
        // Check for unused CSS
        const unusedSelectors = this.findUnusedCSS(content);
        if (unusedSelectors.length > 0) {
          cssOptimizations.push({
            file: path.relative(this.projectRoot, file),
            unusedSelectors: unusedSelectors.length,
            recommendation: 'Remove unused CSS selectors',
            priority: 'medium'
          });
        }
        
        // Check for CSS optimization opportunities
        if (content.includes('!important')) {
          cssOptimizations.push({
            file: path.relative(this.projectRoot, file),
            issue: '!important usage',
            recommendation: 'Minimize use of !important',
            priority: 'low'
          });
        }
      }
      
      return {
        totalFiles: cssFiles.length,
        optimizations: cssOptimizations
      };
    } catch (error) {
      this.log(`Error optimizing CSS: ${error.message}`, 'ERROR');
      return { totalFiles: 0, optimizations: [] };
    }
  }

  findUnusedCSS(content) {
    // Simple unused CSS detection (in real implementation, this would be more sophisticated)
    const selectors = content.match(/\.[\w-]+/g) || [];
    const unused = [];
    
    // This is a simplified check - in reality, you'd need to check against HTML/JS files
    selectors.forEach(selector => {
      if (selector.includes('unused') || selector.includes('old')) {
        unused.push(selector);
      }
    });
    
    return unused;
  }

  async optimizeJS() {
    const jsOptimizations = [];
    
    try {
      const jsFiles = this.findFiles(['.js', '.jsx', '.ts', '.tsx']);
      
      for (const file of jsFiles) {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for minification opportunities
        if (content.includes('  ') || content.includes('\n\n')) {
          jsOptimizations.push({
            file: path.relative(this.projectRoot, file),
            issue: 'Whitespace',
            recommendation: 'Minify JavaScript files for production',
            priority: 'low'
          });
        }
        
        // Check for dead code
        if (content.includes('console.log') || content.includes('debugger')) {
          jsOptimizations.push({
            file: path.relative(this.projectRoot, file),
            issue: 'Debug code',
            recommendation: 'Remove console.log and debugger statements',
            priority: 'medium'
          });
        }
      }
      
      return {
        totalFiles: jsFiles.length,
        optimizations: jsOptimizations
      };
    } catch (error) {
      this.log(`Error optimizing JS: ${error.message}`, 'ERROR');
      return { totalFiles: 0, optimizations: [] };
    }
  }

  findFiles(extensions) {
    const files = [];
    
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !['node_modules', '.git', 'dist', 'build'].includes(item)) {
            scanDirectory(fullPath);
          } else if (extensions.some(ext => item.endsWith(ext))) {
            files.push(fullPath);
          }
        });
      } catch (error) {
        // Skip inaccessible directories
      }
    };
    
    scanDirectory(this.projectRoot);
    return files;
  }

  generateRecommendations() {
    const recommendations = [];
    const bundle = this.optimizations.bundle;
    const code = this.optimizations.code;
    const assets = this.optimizations.assets;

    // Bundle size recommendations
    if (bundle.totalSize > 5 * 1024 * 1024) { // > 5MB
      recommendations.push({
        priority: 'high',
        category: 'bundle',
        message: 'Bundle size is large',
        action: 'Implement code splitting and tree shaking',
        impact: 'High - affects load time'
      });
    }

    if (bundle.largestFiles.length > 0 && bundle.largestFiles[0].size > 1024 * 1024) { // > 1MB
      recommendations.push({
        priority: 'high',
        category: 'bundle',
        message: 'Large files detected in bundle',
        action: 'Split large files or lazy load them',
        impact: 'High - affects initial load time'
      });
    }

    // Code performance recommendations
    if (code.performanceIssues.length > 10) {
      recommendations.push({
        priority: 'medium',
        category: 'code',
        message: 'Multiple performance issues detected',
        action: 'Review and fix performance anti-patterns',
        impact: 'Medium - affects runtime performance'
      });
    }

    // Asset optimization recommendations
    if (assets.images && assets.images.largeImages > 5) {
      recommendations.push({
        priority: 'medium',
        category: 'assets',
        message: 'Multiple large images detected',
        action: 'Compress images and consider WebP format',
        impact: 'Medium - affects load time'
      });
    }

    // General recommendations
    if (bundle.compressionRatio < 30) {
      recommendations.push({
        priority: 'low',
        category: 'bundle',
        message: 'Low compression ratio',
        action: 'Enable gzip/brotli compression on server',
        impact: 'Low - improves transfer speed'
      });
    }

    this.optimizations.recommendations = recommendations;
    this.log(`💡 Generated ${recommendations.length} optimization recommendations`);
  }

  async saveOptimizations() {
    try {
      fs.writeFileSync(this.optimizationFile, JSON.stringify(this.optimizations, null, 2));
      this.log(`💾 Optimization report saved: ${this.optimizationFile}`);
    } catch (error) {
      this.log(`❌ Error saving optimizations: ${error.message}`, 'ERROR');
    }
  }

  displaySummary() {
    console.log('\n⚡ PERFORMANCE OPTIMIZER SUMMARY');
    console.log('=================================');
    
    const bundle = this.optimizations.bundle;
    const code = this.optimizations.code;
    const assets = this.optimizations.assets;
    const recommendations = this.optimizations.recommendations;

    console.log(`📦 Bundle Analysis:`);
    console.log(`   Files: ${bundle.fileCount || 0}`);
    console.log(`   Size: ${bundle.totalSize ? (bundle.totalSize / 1024 / 1024).toFixed(2) : 0}MB`);
    console.log(`   Compression: ${bundle.compressionRatio ? bundle.compressionRatio.toFixed(1) : 0}%`);
    
    console.log(`\n🔍 Code Analysis:`);
    console.log(`   Files: ${code.totalFiles || 0}`);
    console.log(`   Lines: ${code.totalLines || 0}`);
    console.log(`   Issues: ${code.performanceIssues ? code.performanceIssues.length : 0}`);
    
    console.log(`\n🖼️ Asset Analysis:`);
    console.log(`   Images: ${assets.images ? assets.images.totalImages : 0}`);
    console.log(`   Large Images: ${assets.images ? assets.images.largeImages : 0}`);
    console.log(`   CSS Files: ${assets.css ? assets.css.totalFiles : 0}`);
    console.log(`   JS Files: ${assets.js ? assets.js.totalFiles : 0}`);

    if (recommendations.length > 0) {
      console.log('\n💡 Top Recommendations:');
      recommendations.slice(0, 5).forEach((rec, index) => {
        console.log(`  ${index + 1}. [${rec.priority.toUpperCase()}] ${rec.message}`);
        console.log(`     → ${rec.action}`);
      });
    }

    console.log(`\n📄 Optimization report saved to: ${this.optimizationFile}`);
  }

  async run() {
    this.log('🚀 Starting Performance Optimizer...');
    
    try {
      // Run all optimization analyses
      await this.analyzeBundle();
      await this.analyzeCodePerformance();
      await this.optimizeAssets();
      
      // Generate recommendations
      this.generateRecommendations();
      
      // Save results
      await this.saveOptimizations();
      
      // Display summary
      this.displaySummary();
      
      this.log('✅ Performance Optimizer completed successfully');
    } catch (error) {
      this.log(`❌ Performance Optimizer failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const optimizer = new PerformanceOptimizer();
  optimizer.run();
}

module.exports = PerformanceOptimizer;