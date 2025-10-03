#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceMonitorOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.performanceDir = path.join(this.reportsDir, 'performance');
    
    // Ensure directories exist
    [this.reportsDir, this.logsDir, this.performanceDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });

    this.logFile = path.join(this.logsDir, 'performance-monitor-optimizer.log');
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async executeCommand(command, description) {
    try {
      this.log(`🔄 ${description}...`);
      const output = execSync(command, { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async analyzeBundleSize() {
    this.log('📦 Analyzing bundle size...');
    
    try {
      const buildDir = path.join(this.projectRoot, '.next');
      if (!fs.existsSync(buildDir)) {
        return { success: false, error: 'Build directory not found. Run npm run build first.' };
      }

      const staticDir = path.join(buildDir, 'static');
      if (!fs.existsSync(staticDir)) {
        return { success: false, error: 'Static directory not found' };
      }

      const bundleAnalysis = this.analyzeDirectory(staticDir);
      
      // Check for large files
      const largeFiles = bundleAnalysis.files
        .filter(file => file.size > 100000) // > 100KB
        .sort((a, b) => b.size - a.size);

      const recommendations = [];
      
      if (largeFiles.length > 0) {
        recommendations.push({
          type: 'large_files',
          message: `Found ${largeFiles.length} files larger than 100KB`,
          files: largeFiles.slice(0, 5), // Top 5 largest files
          suggestion: 'Consider code splitting or lazy loading for these files'
        });
      }

      if (bundleAnalysis.totalSize > 1000000) { // > 1MB
        recommendations.push({
          type: 'total_size',
          message: `Total bundle size is ${Math.round(bundleAnalysis.totalSize / 1024 / 1024)}MB`,
          suggestion: 'Consider implementing bundle splitting and tree shaking'
        });
      }

      return {
        success: true,
        totalSize: bundleAnalysis.totalSize,
        fileCount: bundleAnalysis.fileCount,
        largestFiles: bundleAnalysis.files.slice(0, 10),
        recommendations
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  analyzeDirectory(dir) {
    let totalSize = 0;
    const files = [];

    const analyzeRecursive = (currentDir) => {
      try {
        const items = fs.readdirSync(currentDir, { withFileTypes: true });
        for (const item of items) {
          const fullPath = path.join(currentDir, item.name);
          if (item.isFile()) {
            const stats = fs.statSync(fullPath);
            totalSize += stats.size;
            files.push({
              name: item.name,
              size: stats.size,
              path: path.relative(this.projectRoot, fullPath),
              extension: path.extname(item.name)
            });
          } else if (item.isDirectory()) {
            analyzeRecursive(fullPath);
          }
        }
      } catch (error) {
        // Skip directories that can't be read
      }
    };

    analyzeRecursive(dir);
    
    return {
      totalSize,
      fileCount: files.length,
      files: files.sort((a, b) => b.size - a.size)
    };
  }

  async analyzeImages() {
    this.log('🖼️ Analyzing images...');
    
    try {
      const publicDir = path.join(this.projectRoot, 'public');
      if (!fs.existsSync(publicDir)) {
        return { success: false, error: 'Public directory not found' };
      }

      const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.ico'];
      const images = this.findFilesByExtension(publicDir, imageExtensions);
      
      let totalImageSize = 0;
      const imageAnalysis = images.map(image => {
        const stats = fs.statSync(image);
        totalImageSize += stats.size;
        return {
          name: path.basename(image),
          size: stats.size,
          path: path.relative(this.projectRoot, image),
          extension: path.extname(image)
        };
      });

      const largeImages = imageAnalysis.filter(img => img.size > 50000); // > 50KB
      const unoptimizedImages = imageAnalysis.filter(img => 
        !img.name.includes('optimized') && 
        !img.name.includes('compressed') &&
        (img.extension === '.jpg' || img.extension === '.jpeg' || img.extension === '.png')
      );

      const recommendations = [];
      
      if (largeImages.length > 0) {
        recommendations.push({
          type: 'large_images',
          message: `Found ${largeImages.length} images larger than 50KB`,
          images: largeImages.slice(0, 5),
          suggestion: 'Consider compressing these images or using WebP format'
        });
      }

      if (unoptimizedImages.length > 0) {
        recommendations.push({
          type: 'unoptimized_images',
          message: `Found ${unoptimizedImages.length} unoptimized images`,
          suggestion: 'Consider using Next.js Image component or compressing images'
        });
      }

      return {
        success: true,
        totalImages: imageAnalysis.length,
        totalSize: totalImageSize,
        largeImages: largeImages.length,
        unoptimizedImages: unoptimizedImages.length,
        recommendations
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  findFilesByExtension(dir, extensions) {
    const files = [];
    const skipDirs = ['node_modules', '.next', 'dist', 'build', 'out', 'coverage'];

    const findRecursive = (currentDir) => {
      try {
        const items = fs.readdirSync(currentDir, { withFileTypes: true });
        for (const item of items) {
          const fullPath = path.join(currentDir, item.name);
          if (item.isFile() && extensions.includes(path.extname(item.name).toLowerCase())) {
            files.push(fullPath);
          } else if (item.isDirectory() && !skipDirs.includes(item.name)) {
            findRecursive(fullPath);
          }
        }
      } catch (error) {
        // Skip directories that can't be read
      }
    };

    findRecursive(dir);
    return files;
  }

  async analyzeCodeSplitting() {
    this.log('🔀 Analyzing code splitting...');
    
    try {
      const pagesDir = path.join(this.projectRoot, 'pages');
      if (!fs.existsSync(pagesDir)) {
        return { success: false, error: 'Pages directory not found' };
      }

      const pages = fs.readdirSync(pagesDir, { withFileTypes: true })
        .filter(item => item.isFile() && (item.name.endsWith('.js') || item.name.endsWith('.tsx')))
        .map(item => ({
          name: item.name,
          path: path.join(pagesDir, item.name),
          size: fs.statSync(path.join(pagesDir, item.name)).size
        }));

      const componentsDir = path.join(this.projectRoot, 'components');
      const components = fs.existsSync(componentsDir) ? 
        this.findFilesByExtension(componentsDir, ['.js', '.jsx', '.ts', '.tsx']) : [];

      const largePages = pages.filter(page => page.size > 10000); // > 10KB
      const dynamicImports = this.findDynamicImports(pages.map(p => p.path));

      const recommendations = [];
      
      if (largePages.length > 0) {
        recommendations.push({
          type: 'large_pages',
          message: `Found ${largePages.length} pages larger than 10KB`,
          pages: largePages,
          suggestion: 'Consider splitting large pages into smaller components'
        });
      }

      if (dynamicImports.length === 0) {
        recommendations.push({
          type: 'no_dynamic_imports',
          message: 'No dynamic imports found',
          suggestion: 'Consider using dynamic imports for better code splitting'
        });
      }

      return {
        success: true,
        totalPages: pages.length,
        totalComponents: components.length,
        largePages: largePages.length,
        dynamicImports: dynamicImports.length,
        recommendations
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  findDynamicImports(filePaths) {
    const dynamicImports = [];
    
    for (const filePath of filePaths) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const importMatches = content.match(/import\s*\(\s*['"`][^'"`]+['"`]\s*\)/g);
        if (importMatches) {
          dynamicImports.push(...importMatches);
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }
    
    return dynamicImports;
  }

  async analyzeCaching() {
    this.log('💾 Analyzing caching strategies...');
    
    try {
      const nextConfigPath = path.join(this.projectRoot, 'next.config.js');
      const hasNextConfig = fs.existsSync(nextConfigPath);
      
      let configContent = '';
      if (hasNextConfig) {
        configContent = fs.readFileSync(nextConfigPath, 'utf8');
      }

      const cachingFeatures = {
        hasNextConfig,
        hasCacheHeaders: configContent.includes('Cache-Control') || configContent.includes('cache'),
        hasStaticGeneration: configContent.includes('getStaticProps') || configContent.includes('getStaticPaths'),
        hasISR: configContent.includes('revalidate'),
        hasSWR: this.hasSWRUsage(),
        hasServiceWorker: this.hasServiceWorker()
      };

      const recommendations = [];
      
      if (!cachingFeatures.hasCacheHeaders) {
        recommendations.push({
          type: 'cache_headers',
          message: 'No cache headers configured',
          suggestion: 'Consider adding cache headers for static assets'
        });
      }

      if (!cachingFeatures.hasStaticGeneration) {
        recommendations.push({
          type: 'static_generation',
          message: 'No static generation detected',
          suggestion: 'Consider using getStaticProps for better performance'
        });
      }

      if (!cachingFeatures.hasISR) {
        recommendations.push({
          type: 'isr',
          message: 'No Incremental Static Regeneration detected',
          suggestion: 'Consider using ISR for dynamic content with static benefits'
        });
      }

      return {
        success: true,
        features: cachingFeatures,
        recommendations
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  hasSWRUsage() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      return 'swr' in dependencies || 'use-swr' in dependencies;
    } catch (error) {
      return false;
    }
  }

  hasServiceWorker() {
    const publicDir = path.join(this.projectRoot, 'public');
    if (!fs.existsSync(publicDir)) return false;
    
    const swFiles = ['sw.js', 'service-worker.js', 'worker.js'];
    return swFiles.some(file => fs.existsSync(path.join(publicDir, file)));
  }

  async generatePerformanceReport() {
    this.log('📊 Generating performance report...');
    
    const bundleAnalysis = await this.analyzeBundleSize();
    const imageAnalysis = await this.analyzeImages();
    const codeSplittingAnalysis = await this.analyzeCodeSplitting();
    const cachingAnalysis = await this.analyzeCaching();

    const allRecommendations = [
      ...(bundleAnalysis.recommendations || []),
      ...(imageAnalysis.recommendations || []),
      ...(codeSplittingAnalysis.recommendations || []),
      ...(cachingAnalysis.recommendations || [])
    ];

    const report = {
      timestamp: new Date().toISOString(),
      bundle: bundleAnalysis,
      images: imageAnalysis,
      codeSplitting: codeSplittingAnalysis,
      caching: cachingAnalysis,
      recommendations: allRecommendations,
      summary: {
        totalRecommendations: allRecommendations.length,
        criticalIssues: allRecommendations.filter(r => r.type.includes('large')).length,
        optimizationOpportunities: allRecommendations.length
      }
    };

    const reportPath = path.join(this.performanceDir, 'performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Performance report saved to: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('🚀 Starting Performance Monitor Optimizer...');
    
    try {
      const report = await this.generatePerformanceReport();
      
      this.log('🎉 Performance Monitor Optimizer completed successfully!');
      this.log(`📊 Summary: ${report.summary.totalRecommendations} optimization opportunities found`);
      
      if (report.summary.criticalIssues > 0) {
        this.log(`⚠️ ${report.summary.criticalIssues} critical performance issues detected`, 'WARN');
      }
      
      return report;
    } catch (error) {
      this.log(`❌ Performance Monitor Optimizer failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const performanceOptimizer = new PerformanceMonitorOptimizer();
  performanceOptimizer.run().catch(console.error);
}

module.exports = PerformanceMonitorOptimizer;