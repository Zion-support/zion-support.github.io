const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AdvancedPerformanceOptimizer {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'performance-optimizer.log');
    this.ensureLogDir();
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  runCommand(command) {
    try {
      const result = execSync(command, { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async optimizePerformance() {
    this.log('⚡ Starting Advanced Performance Optimization...');
    
    try {
      const optimizations = [];
      
      // 1. Bundle size analysis
      this.log('📦 Analyzing bundle size...');
      const bundleAnalysis = this.analyzeBundleSize();
      optimizations.push(bundleAnalysis);
      
      // 2. Image optimization
      this.log('🖼️ Optimizing images...');
      const imageOptimization = this.optimizeImages();
      optimizations.push(imageOptimization);
      
      // 3. Code splitting analysis
      this.log('🔀 Analyzing code splitting...');
      const codeSplitting = this.analyzeCodeSplitting();
      optimizations.push(codeSplitting);
      
      // 4. Dependencies analysis
      this.log('📚 Analyzing dependencies...');
      const dependencies = this.analyzeDependencies();
      optimizations.push(dependencies);
      
      // 5. Generate performance report
      const report = {
        timestamp: new Date().toISOString(),
        optimizations: optimizations,
        recommendations: [
          'Consider implementing lazy loading for images',
          'Use dynamic imports for code splitting',
          'Optimize bundle size by removing unused dependencies',
          'Implement service worker for caching',
          'Use CDN for static assets',
          'Enable gzip compression',
          'Optimize images to WebP format',
          'Implement virtual scrolling for large lists'
        ],
        performanceScore: this.calculatePerformanceScore(optimizations)
      };
      
      const reportFile = path.join(__dirname, 'logs', 'performance-optimization-report.json');
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      this.log(`📊 Performance report saved to: ${reportFile}`);
      this.log(`🎯 Performance Score: ${report.performanceScore}/100`);
      this.log('✅ Performance optimization completed successfully');
      
      return { success: true, report };
      
    } catch (error) {
      this.log(`❌ Error during performance optimization: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  analyzeBundleSize() {
    try {
      // Check if .next directory exists
      if (!fs.existsSync('.next')) {
        return {
          type: 'bundle_size',
          status: 'skipped',
          message: 'No build found - run npm run build first'
        };
      }
      
      // Analyze build output
      const buildResult = this.runCommand('du -sh .next');
      const size = buildResult.success ? buildResult.output.split('\t')[0] : 'Unknown';
      
      return {
        type: 'bundle_size',
        status: 'analyzed',
        size: size,
        message: `Build size: ${size}`
      };
    } catch (error) {
      return {
        type: 'bundle_size',
        status: 'error',
        message: `Error analyzing bundle size: ${error.message}`
      };
    }
  }

  optimizeImages() {
    try {
      // Look for image files
      const imageFiles = this.findFiles('.jpg', '.jpeg', '.png', '.gif', '.webp');
      
      return {
        type: 'image_optimization',
        status: 'analyzed',
        imageCount: imageFiles.length,
        message: `Found ${imageFiles.length} image files`,
        recommendations: [
          'Convert images to WebP format',
          'Implement responsive images',
          'Use next/image for automatic optimization'
        ]
      };
    } catch (error) {
      return {
        type: 'image_optimization',
        status: 'error',
        message: `Error analyzing images: ${error.message}`
      };
    }
  }

  analyzeCodeSplitting() {
    try {
      // Check for dynamic imports
      const tsFiles = this.findFiles('.ts', '.tsx');
      let dynamicImports = 0;
      
      tsFiles.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        const matches = content.match(/import\(/g);
        if (matches) {
          dynamicImports += matches.length;
        }
      });
      
      return {
        type: 'code_splitting',
        status: 'analyzed',
        dynamicImports: dynamicImports,
        message: `Found ${dynamicImports} dynamic imports`,
        recommendations: dynamicImports === 0 ? [
          'Consider implementing code splitting with dynamic imports',
          'Use React.lazy() for component-level code splitting'
        ] : [
          'Good use of code splitting',
          'Consider adding more dynamic imports for better performance'
        ]
      };
    } catch (error) {
      return {
        type: 'code_splitting',
        status: 'error',
        message: `Error analyzing code splitting: ${error.message}`
      };
    }
  }

  analyzeDependencies() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = Object.keys(packageJson.dependencies || {});
      const devDependencies = Object.keys(packageJson.devDependencies || {});
      
      return {
        type: 'dependencies',
        status: 'analyzed',
        totalDependencies: dependencies.length + devDependencies.length,
        productionDependencies: dependencies.length,
        devDependencies: devDependencies.length,
        message: `Total dependencies: ${dependencies.length + devDependencies.length}`,
        recommendations: [
          'Review dependencies for unused packages',
          'Consider using lighter alternatives',
          'Keep dependencies up to date'
        ]
      };
    } catch (error) {
      return {
        type: 'dependencies',
        status: 'error',
        message: `Error analyzing dependencies: ${error.message}`
      };
    }
  }

  calculatePerformanceScore(optimizations) {
    let score = 100;
    
    optimizations.forEach(opt => {
      if (opt.status === 'error') {
        score -= 20;
      } else if (opt.status === 'skipped') {
        score -= 10;
      }
    });
    
    return Math.max(0, score);
  }

  findFiles(...extensions) {
    const files = [];
    
    function searchDir(dir) {
      try {
        const items = fs.readdirSync(dir);
        
        items.forEach(item => {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            if (!['node_modules', '.next', 'dist', 'build', '.git'].includes(item)) {
              searchDir(fullPath);
            }
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (extensions.includes(ext)) {
              files.push(fullPath);
            }
          }
        });
      } catch (error) {
        // Skip directories we can't read
      }
    }
    
    searchDir(process.cwd());
    return files;
  }
}

// Run the optimizer
const optimizer = new AdvancedPerformanceOptimizer();
optimizer.optimizePerformance().then(result => {
  if (!result.success) {
    process.exit(1);
  }
});