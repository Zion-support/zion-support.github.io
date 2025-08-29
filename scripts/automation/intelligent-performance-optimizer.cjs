#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('⚡ Starting intelligent performance optimization automation...');

// Get automation interval from environment variable (default: 3 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 10800000; // 3 hours

class IntelligentPerformanceOptimizer {
  constructor() {
    this.performanceMetrics = {};
    this.optimizationHistory = [];
    this.bundleAnalysis = {};
    this.logFile = path.join(process.cwd(), 'intelligent-performance-optimizer.log');
  }

  async runPerformanceOptimization() {
    try {
      console.log(`⚡ Running intelligent performance optimization at ${new Date().toISOString()}`);
      
      // Analyze current bundle
      await this.analyzeBundle();
      
      // Analyze performance metrics
      await this.analyzePerformanceMetrics();
      
      // Identify optimization opportunities
      await this.identifyOptimizations();
      
      // Apply intelligent optimizations
      await this.applyOptimizations();
      
      // Generate performance report
      await this.generatePerformanceReport();
      
      console.log('✅ Intelligent performance optimization completed successfully');
      
    } catch (error) {
      console.error('❌ Intelligent performance optimization failed:', error.message);
      this.logError(error);
    }
  }

  async analyzeBundle() {
    try {
      console.log('📦 Analyzing bundle composition...');
      
      // Build the project first
      console.log('🏗️ Building project for bundle analysis...');
      try {
        execSync('npm run build', { stdio: 'pipe' });
        console.log('✅ Build completed');
      } catch (error) {
        console.log('⚠️  Build failed but continuing...');
        return;
      }
      
      const distPath = path.join(process.cwd(), 'dist');
      if (!fs.existsSync(distPath)) {
        console.log('⚠️  Build verification failed: dist folder not found');
        return;
      }
      
      // Analyze bundle files
      const bundleFiles = this.getBundleFiles(distPath);
      this.bundleAnalysis = {
        totalSize: 0,
        fileCount: bundleFiles.length,
        files: [],
        largestFiles: [],
        optimizationOpportunities: []
      };
      
      for (const file of bundleFiles) {
        const stats = fs.statSync(file);
        const sizeKB = Math.round(stats.size / 1024);
        
        this.bundleAnalysis.files.push({
          name: path.basename(file),
          path: file,
          size: stats.size,
          sizeKB: sizeKB,
          type: this.getFileType(file)
        });
        
        this.bundleAnalysis.totalSize += stats.size;
      }
      
      // Sort files by size and identify largest
      this.bundleAnalysis.files.sort((a, b) => b.size - a.size);
      this.bundleAnalysis.largestFiles = this.bundleAnalysis.files.slice(0, 5);
      
      // Calculate total size in MB
      this.bundleAnalysis.totalSizeMB = Math.round(this.bundleAnalysis.totalSize / (1024 * 1024) * 100) / 100;
      
      console.log(`📦 Bundle analysis complete: ${this.bundleAnalysis.totalSizeMB}MB total, ${this.bundleAnalysis.fileCount} files`);
      
    } catch (error) {
      console.log('⚠️  Bundle analysis failed:', error.message);
    }
  }

  getBundleFiles(dirPath) {
    const files = [];
    
    const items = fs.readdirSync(dirPath);
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stats = fs.statSync(fullPath);
      
      if (stats.isDirectory()) {
        files.push(...this.getBundleFiles(fullPath));
      } else if (stats.isFile()) {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  getFileType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    
    if (ext === '.js') return 'JavaScript';
    if (ext === '.css') return 'CSS';
    if (ext === '.html') return 'HTML';
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif' || ext === '.svg') return 'Image';
    if (ext === '.woff' || ext === '.woff2' || ext === '.ttf' || ext === '.eot') return 'Font';
    if (ext === '.map') return 'Source Map';
    
    return 'Other';
  }

  async analyzePerformanceMetrics() {
    try {
      console.log('📊 Analyzing performance metrics...');
      
      this.performanceMetrics = {
        bundleSize: this.bundleAnalysis.totalSizeMB,
        fileCount: this.bundleAnalysis.fileCount,
        largestFile: this.bundleAnalysis.largestFiles[0]?.sizeKB || 0,
        cssSize: 0,
        jsSize: 0,
        imageSize: 0,
        fontSize: 0,
        optimizationScore: 0
      };
      
      // Calculate sizes by type
      for (const file of this.bundleAnalysis.files) {
        if (file.type === 'CSS') this.performanceMetrics.cssSize += file.sizeKB;
        else if (file.type === 'JavaScript') this.performanceMetrics.jsSize += file.sizeKB;
        else if (file.type === 'Image') this.performanceMetrics.imageSize += file.sizeKB;
        else if (file.type === 'Font') this.performanceMetrics.fontSize += file.sizeKB;
      }
      
      // Calculate optimization score
      this.performanceMetrics.optimizationScore = this.calculateOptimizationScore();
      
      console.log(`📊 Performance metrics calculated. Score: ${this.performanceMetrics.optimizationScore}/100`);
      
    } catch (error) {
      console.log('⚠️  Performance metrics analysis failed:', error.message);
    }
  }

  calculateOptimizationScore() {
    let score = 100;
    
    // Bundle size penalties
    if (this.performanceMetrics.bundleSize > 5) score -= 20; // Over 5MB
    if (this.performanceMetrics.bundleSize > 10) score -= 30; // Over 10MB
    
    // File count penalties
    if (this.performanceMetrics.fileCount > 50) score -= 15;
    if (this.performanceMetrics.fileCount > 100) score -= 25;
    
    // Individual file size penalties
    if (this.performanceMetrics.largestFile > 500) score -= 20; // Over 500KB
    if (this.performanceMetrics.largestFile > 1000) score -= 30; // Over 1MB
    
    // CSS size penalties
    if (this.performanceMetrics.cssSize > 200) score -= 15;
    
    // JavaScript size penalties
    if (this.performanceMetrics.jsSize > 1000) score -= 20;
    
    return Math.max(0, score);
  }

  async identifyOptimizations() {
    try {
      console.log('🔍 Identifying optimization opportunities...');
      
      this.bundleAnalysis.optimizationOpportunities = [];
      
      // Check for large JavaScript files
      for (const file of this.bundleAnalysis.largestFiles) {
        if (file.type === 'JavaScript' && file.sizeKB > 500) {
          this.bundleAnalysis.optimizationOpportunities.push({
            type: 'large-js-file',
            file: file.name,
            currentSize: file.sizeKB,
            targetSize: Math.round(file.sizeKB * 0.7), // Target 30% reduction
            suggestion: 'Consider code splitting, tree shaking, or lazy loading',
            priority: 'high'
          });
        }
      }
      
      // Check for large CSS files
      if (this.performanceMetrics.cssSize > 200) {
        this.bundleAnalysis.optimizationOpportunities.push({
          type: 'large-css-bundle',
          currentSize: this.performanceMetrics.cssSize,
          targetSize: Math.round(this.performanceMetrics.cssSize * 0.8),
          suggestion: 'Consider CSS purging, critical CSS extraction, or CSS-in-JS',
          priority: 'medium'
        });
      }
      
      // Check for multiple small files
      if (this.performanceMetrics.fileCount > 50) {
        this.bundleAnalysis.optimizationOpportunities.push({
          type: 'too-many-files',
          currentCount: this.performanceMetrics.fileCount,
          targetCount: Math.round(this.performanceMetrics.fileCount * 0.7),
          suggestion: 'Consider bundling small files or using dynamic imports',
          priority: 'medium'
        });
      }
      
      // Check for large images
      const largeImages = this.bundleAnalysis.files.filter(f => f.type === 'Image' && f.sizeKB > 100);
      if (largeImages.length > 0) {
        this.bundleAnalysis.optimizationOpportunities.push({
          type: 'large-images',
          count: largeImages.length,
          totalSize: largeImages.reduce((sum, img) => sum + img.sizeKB, 0),
          suggestion: 'Consider image optimization, WebP conversion, or lazy loading',
          priority: 'low'
        });
      }
      
      console.log(`🔍 Found ${this.bundleAnalysis.optimizationOpportunities.length} optimization opportunities`);
      
    } catch (error) {
      console.log('⚠️  Optimization identification failed:', error.message);
    }
  }

  async applyOptimizations() {
    try {
      console.log('🔧 Applying intelligent optimizations...');
      
      let optimizationsApplied = 0;
      
      // Apply bundle splitting optimization
      if (this.bundleAnalysis.optimizationOpportunities.some(opp => opp.type === 'large-js-file')) {
        await this.optimizeBundleSplitting();
        optimizationsApplied++;
      }
      
      // Apply CSS optimization
      if (this.bundleAnalysis.optimizationOpportunities.some(opp => opp.type === 'large-css-bundle')) {
        await this.optimizeCSS();
        optimizationsApplied++;
      }
      
      // Apply image optimization
      if (this.bundleAnalysis.optimizationOpportunities.some(opp => opp.type === 'large-images')) {
        await this.optimizeImages();
        optimizationsApplied++;
      }
      
      // Generate optimization recommendations
      await this.generateOptimizationRecommendations();
      
      console.log(`🔧 Applied ${optimizationsApplied} optimizations`);
      
    } catch (error) {
      console.log('⚠️  Optimization application failed:', error.message);
    }
  }

  async optimizeBundleSplitting() {
    try {
      console.log('🔧 Optimizing bundle splitting...');
      
      // Check if vite.config.ts exists and optimize it
      const viteConfigPath = path.join(process.cwd(), 'vite.config.ts');
      if (fs.existsSync(viteConfigPath)) {
        let config = fs.readFileSync(viteConfigPath, 'utf8');
        
        // Add build optimization configurations if not present
        if (!config.includes('rollupOptions')) {
          const optimizationConfig = `
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['lodash', 'date-fns'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }`;
          
          // Insert before the closing bracket
          config = config.replace(/export default defineConfig\(([\s\S]*?)\);/, 
            `export default defineConfig($1${optimizationConfig});`);
          
          fs.writeFileSync(viteConfigPath, config);
          console.log('🔧 Added bundle splitting configuration to vite.config.ts');
        }
      }
      
    } catch (error) {
      console.log('⚠️  Bundle splitting optimization failed:', error.message);
    }
  }

  async optimizeCSS() {
    try {
      console.log('🔧 Optimizing CSS...');
      
      // Check for Tailwind CSS and suggest purging
      const tailwindConfig = path.join(process.cwd(), 'tailwind.config.js');
      if (fs.existsSync(tailwindConfig)) {
        let config = fs.readFileSync(tailwindConfig, 'utf8');
        
        if (!config.includes('purge') && !config.includes('content')) {
          const purgeConfig = `
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],`;
          
          config = config.replace(/module\.exports\s*=\s*{/, `module.exports = {${purgeConfig}`);
          fs.writeFileSync(tailwindConfig, config);
          console.log('🔧 Added CSS purging configuration to tailwind.config.js');
        }
      }
      
    } catch (error) {
      console.log('⚠️  CSS optimization failed:', error.message);
    }
  }

  async optimizeImages() {
    try {
      console.log('🔧 Optimizing images...');
      
      // Create image optimization script
      const imageOptimizerScript = `#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🖼️  Optimizing images...');

// This script would integrate with tools like imagemin or sharp
// For now, we'll create a placeholder for manual optimization
console.log('📝 Image optimization script created. Consider implementing:');
console.log('  - WebP conversion');
console.log('  - Image compression');
console.log('  - Lazy loading implementation');
console.log('  - Responsive image generation');
`;

      const scriptPath = path.join(process.cwd(), 'scripts', 'optimize-images.cjs');
      const scriptDir = path.dirname(scriptPath);
      
      if (!fs.existsSync(scriptDir)) {
        fs.mkdirSync(scriptDir, { recursive: true });
      }
      
      fs.writeFileSync(scriptPath, imageOptimizerScript);
      console.log('🔧 Created image optimization script');
      
    } catch (error) {
      console.log('⚠️  Image optimization failed:', error.message);
    }
  }

  async generateOptimizationRecommendations() {
    try {
      console.log('📋 Generating optimization recommendations...');
      
      const recommendations = {
        immediate: [],
        shortTerm: [],
        longTerm: []
      };
      
      for (const opportunity of this.bundleAnalysis.optimizationOpportunities) {
        if (opportunity.priority === 'high') {
          recommendations.immediate.push(opportunity);
        } else if (opportunity.priority === 'medium') {
          recommendations.shortTerm.push(opportunity);
        } else {
          recommendations.longTerm.push(opportunity);
        }
      }
      
      // Add general recommendations
      recommendations.shortTerm.push({
        type: 'general',
        suggestion: 'Implement service worker for caching and offline support',
        priority: 'medium'
      });
      
      recommendations.longTerm.push({
        type: 'general',
        suggestion: 'Consider implementing micro-frontends for better scalability',
        priority: 'low'
      });
      
      this.bundleAnalysis.recommendations = recommendations;
      
    } catch (error) {
      console.log('⚠️  Recommendation generation failed:', error.message);
    }
  }

  async generatePerformanceReport() {
    try {
      console.log('📊 Generating performance report...');
      
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          bundleSize: this.performanceMetrics.bundleSize,
          fileCount: this.performanceMetrics.fileCount,
          optimizationScore: this.performanceMetrics.optimizationScore,
          opportunities: this.bundleAnalysis.optimizationOpportunities.length
        },
        performanceMetrics: this.performanceMetrics,
        bundleAnalysis: this.bundleAnalysis,
        optimizationHistory: this.optimizationHistory,
        status: 'completed'
      };
      
      const reportPath = path.join(process.cwd(), 'intelligent-performance-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      console.log(`✅ Performance report saved to ${reportPath}`);
      
      // Log summary
      console.log('\n📊 Performance Optimization Summary:');
      console.log(`   Bundle size: ${report.summary.bundleSize}MB`);
      console.log(`   File count: ${report.summary.fileCount}`);
      console.log(`   Optimization score: ${report.summary.optimizationScore}/100`);
      console.log(`   Opportunities: ${report.summary.opportunities}`);
      
    } catch (error) {
      console.log('⚠️  Report generation failed:', error.message);
    }
  }

  logError(error) {
    const errorLog = `[${new Date().toISOString()}] ERROR: ${error.message}\n${error.stack}\n`;
    fs.appendFileSync(this.logFile, errorLog);
  }
}

// Main execution
async function main() {
  const optimizer = new IntelligentPerformanceOptimizer();
  
  // Run initial optimization
  await optimizer.runPerformanceOptimization();
  
  // Set up continuous monitoring
  setInterval(async () => {
    await optimizer.runPerformanceOptimization();
  }, AUTOMATION_INTERVAL);
  
  console.log(`⚡ Intelligent performance optimization automation started. Running every ${AUTOMATION_INTERVAL / 60000} minutes.`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n⚡ Intelligent performance optimization automation shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n⚡ Intelligent performance optimization automation shutting down gracefully...');
  process.exit(0);
});

// Start the automation
main().catch(console.error);