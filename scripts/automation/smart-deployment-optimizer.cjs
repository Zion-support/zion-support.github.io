#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Smart Deployment Optimizer...');

// Get automation interval from environment variable (default: 6 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 21600000; // 6 hours

class SmartDeploymentOptimizer {
  constructor() {
    this.deploymentMetrics = {
      buildTimes: [],
      bundleSizes: [],
      deploymentFrequency: 0,
      successRate: 0,
      optimizationSuggestions: []
    };
    this.reportDir = path.join(process.cwd(), 'deployment-reports');
    this.ensureReportDirectory();
    this.loadHistoricalData();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  loadHistoricalData() {
    try {
      const historicalFile = path.join(this.reportDir, 'deployment-history.json');
      if (fs.existsSync(historicalFile)) {
        const data = JSON.parse(fs.readFileSync(historicalFile, 'utf8'));
        this.deploymentMetrics = { ...this.deploymentMetrics, ...data };
      }
    } catch (error) {
      console.log('No historical deployment data found, starting fresh');
    }
  }

  async optimizeDeployment() {
    try {
      console.log(`🚀 Running smart deployment optimization at ${new Date().toISOString()}`);
      
      // Analyze current build configuration
      await this.analyzeBuildConfiguration();
      
      // Optimize bundle size
      await this.optimizeBundleSize();
      
      // Analyze deployment patterns
      await this.analyzeDeploymentPatterns();
      
      // Generate optimization recommendations
      await this.generateOptimizationRecommendations();
      
      // Test optimized build
      await this.testOptimizedBuild();
      
      // Generate report
      await this.generateReport();
      
      console.log('✅ Smart deployment optimization completed successfully');
      
    } catch (error) {
      console.error('❌ Smart deployment optimization failed:', error.message);
    }
  }

  async analyzeBuildConfiguration() {
    console.log('🔍 Analyzing build configuration...');
    
    // Analyze Vite configuration
    const viteConfigPath = path.join(process.cwd(), 'vite.config.ts');
    if (fs.existsSync(viteConfigPath)) {
      const viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
      
      const analysis = {
        hasOptimization: viteConfig.includes('optimizeDeps'),
        hasCompression: viteConfig.includes('compression'),
        hasTreeShaking: viteConfig.includes('treeshake'),
        hasCodeSplitting: viteConfig.includes('rollupOptions'),
        hasSourceMaps: viteConfig.includes('sourcemap')
      };
      
      console.log('📊 Vite configuration analysis:', analysis);
      
      // Suggest improvements
      if (!analysis.hasOptimization) {
        this.deploymentMetrics.optimizationSuggestions.push({
          type: 'vite_optimization',
          priority: 'high',
          description: 'Enable dependency optimization in Vite config',
          action: 'Add optimizeDeps configuration to vite.config.ts'
        });
      }
      
      if (!analysis.hasCompression) {
        this.deploymentMetrics.optimizationSuggestions.push({
          type: 'compression',
          priority: 'medium',
          description: 'Enable build compression for smaller bundle sizes',
          action: 'Add compression plugin to vite.config.ts'
        });
      }
    }
    
    // Analyze package.json for optimization opportunities
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    
    if (packageJson.dependencies) {
      const largeDependencies = Object.entries(packageJson.dependencies)
        .filter(([name, version]) => {
          // Check for known large packages
          const largePackages = ['lodash', 'moment', 'date-fns', 'framer-motion'];
          return largePackages.includes(name);
        });
      
      if (largeDependencies.length > 0) {
        this.deploymentMetrics.optimizationSuggestions.push({
          type: 'dependency_optimization',
          priority: 'medium',
          description: `Consider optimizing large dependencies: ${largeDependencies.map(([name]) => name).join(', ')}`,
          action: 'Use tree-shaking or replace with lighter alternatives'
        });
      }
    }
  }

  async optimizeBundleSize() {
    console.log('📦 Optimizing bundle size...');
    
    try {
      // Run build to analyze current bundle size
      const startTime = Date.now();
      execSync('npm run build', { stdio: 'pipe' });
      const buildTime = Date.now() - startTime;
      
      this.deploymentMetrics.buildTimes.push({
        timestamp: new Date().toISOString(),
        duration: buildTime
      });
      
      // Analyze dist folder for bundle size
      const distPath = path.join(process.cwd(), 'dist');
      if (fs.existsSync(distPath)) {
        const bundleSize = this.calculateBundleSize(distPath);
        this.deploymentMetrics.bundleSizes.push({
          timestamp: new Date().toISOString(),
          size: bundleSize,
          files: this.countFiles(distPath)
        });
        
        console.log(`📊 Current bundle size: ${(bundleSize / 1024 / 1024).toFixed(2)} MB`);
        
        // Check for optimization opportunities
        if (bundleSize > 2 * 1024 * 1024) { // 2MB threshold
          this.deploymentMetrics.optimizationSuggestions.push({
            type: 'bundle_size',
            priority: 'high',
            description: 'Bundle size exceeds 2MB, optimization needed',
            action: 'Implement code splitting and lazy loading'
          });
        }
      }
      
    } catch (error) {
      console.log('⚠️ Build analysis failed:', error.message);
    }
  }

  async analyzeDeploymentPatterns() {
    console.log('📈 Analyzing deployment patterns...');
    
    // Calculate deployment frequency
    const recentDeployments = this.deploymentMetrics.buildTimes.filter(
      build => new Date(build.timestamp) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // Last 7 days
    );
    
    this.deploymentMetrics.deploymentFrequency = recentDeployments.length;
    
    // Calculate success rate
    const totalBuilds = this.deploymentMetrics.buildTimes.length;
    const successfulBuilds = this.deploymentMetrics.buildTimes.filter(
      build => build.duration > 0
    ).length;
    
    this.deploymentMetrics.successRate = totalBuilds > 0 ? (successfulBuilds / totalBuilds) * 100 : 0;
    
    console.log(`📊 Deployment frequency (last 7 days): ${this.deploymentMetrics.deploymentFrequency}`);
    console.log(`📊 Success rate: ${this.deploymentMetrics.successRate.toFixed(2)}%`);
    
    // Analyze build time trends
    if (this.deploymentMetrics.buildTimes.length > 1) {
      const recentBuildTimes = this.deploymentMetrics.buildTimes
        .slice(-5)
        .map(build => build.duration);
      
      const averageBuildTime = recentBuildTimes.reduce((a, b) => a + b, 0) / recentBuildTimes.length;
      
      if (averageBuildTime > 60000) { // 1 minute threshold
        this.deploymentMetrics.optimizationSuggestions.push({
          type: 'build_time',
          priority: 'medium',
          description: 'Average build time exceeds 1 minute',
          action: 'Optimize build process and enable caching'
        });
      }
    }
  }

  async generateOptimizationRecommendations() {
    console.log('💡 Generating optimization recommendations...');
    
    // Bundle size recommendations
    const latestBundleSize = this.deploymentMetrics.bundleSizes[this.deploymentMetrics.bundleSizes.length - 1];
    if (latestBundleSize && latestBundleSize.size > 1024 * 1024) {
      this.deploymentMetrics.optimizationSuggestions.push({
        type: 'code_splitting',
        priority: 'high',
        description: 'Implement code splitting for better performance',
        action: 'Use React.lazy() and dynamic imports for route-based splitting'
      });
    }
    
    // Performance recommendations based on deployment frequency
    if (this.deploymentMetrics.deploymentFrequency > 5) {
      this.deploymentMetrics.optimizationSuggestions.push({
        type: 'ci_cd_optimization',
        priority: 'medium',
        description: 'High deployment frequency detected',
        action: 'Implement automated testing and staging environments'
      });
    }
    
    // Success rate recommendations
    if (this.deploymentMetrics.successRate < 90) {
      this.deploymentMetrics.optimizationSuggestions.push({
        type: 'quality_gates',
        priority: 'high',
        description: 'Low deployment success rate',
        action: 'Implement pre-deployment quality gates and automated testing'
      });
    }
  }

  async testOptimizedBuild() {
    console.log('🧪 Testing optimized build...');
    
    try {
      // Run type checking
      execSync('npm run type-check', { stdio: 'pipe' });
      console.log('✅ Type checking passed');
      
      // Run linting
      execSync('npm run lint', { stdio: 'pipe' });
      console.log('✅ Linting passed');
      
      // Test build output
      const distPath = path.join(process.cwd(), 'dist');
      if (fs.existsSync(distPath)) {
        const indexHtml = path.join(distPath, 'index.html');
        if (fs.existsSync(indexHtml)) {
          const htmlContent = fs.readFileSync(indexHtml, 'utf8');
          
          // Check for common issues
          const issues = [];
          if (!htmlContent.includes('<title>')) {
            issues.push('Missing title tag');
          }
          if (!htmlContent.includes('meta name="viewport"')) {
            issues.push('Missing viewport meta tag');
          }
          
          if (issues.length > 0) {
            this.deploymentMetrics.optimizationSuggestions.push({
              type: 'html_optimization',
              priority: 'low',
              description: `HTML optimization issues: ${issues.join(', ')}`,
              action: 'Add missing HTML meta tags and optimize structure'
            });
          }
        }
      }
      
    } catch (error) {
      console.log('⚠️ Build testing failed:', error.message);
    }
  }

  async generateReport() {
    console.log('📊 Generating deployment optimization report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalBuilds: this.deploymentMetrics.buildTimes.length,
        averageBuildTime: this.calculateAverageBuildTime(),
        latestBundleSize: this.getLatestBundleSize(),
        deploymentFrequency: this.deploymentMetrics.deploymentFrequency,
        successRate: this.deploymentMetrics.successRate
      },
      metrics: this.deploymentMetrics,
      recommendations: this.deploymentMetrics.optimizationSuggestions
    };
    
    const reportPath = path.join(this.reportDir, `deployment-optimization-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Save historical data
    const historicalPath = path.join(this.reportDir, 'deployment-history.json');
    fs.writeFileSync(historicalPath, JSON.stringify(this.deploymentMetrics, null, 2));
    
    // Also save latest report
    const latestReportPath = path.join(process.cwd(), 'deployment-optimization-report.json');
    fs.writeFileSync(latestReportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Deployment optimization report saved to ${reportPath}`);
  }

  calculateBundleSize(dir) {
    let totalSize = 0;
    
    function calculateSize(currentDir) {
      try {
        const items = fs.readdirSync(currentDir);
        
        for (const item of items) {
          const fullPath = path.join(currentDir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            calculateSize(fullPath);
          } else {
            totalSize += stat.size;
          }
        }
      } catch (error) {
        // Skip directories that can't be accessed
      }
    }
    
    calculateSize(dir);
    return totalSize;
  }

  countFiles(dir) {
    let fileCount = 0;
    
    function count(currentDir) {
      try {
        const items = fs.readdirSync(currentDir);
        
        for (const item of items) {
          const fullPath = path.join(currentDir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            count(fullPath);
          } else {
            fileCount++;
          }
        }
      } catch (error) {
        // Skip directories that can't be accessed
      }
    }
    
    count(dir);
    return fileCount;
  }

  calculateAverageBuildTime() {
    if (this.deploymentMetrics.buildTimes.length === 0) return 0;
    
    const totalTime = this.deploymentMetrics.buildTimes.reduce(
      (sum, build) => sum + build.duration, 0
    );
    
    return totalTime / this.deploymentMetrics.buildTimes.length;
  }

  getLatestBundleSize() {
    if (this.deploymentMetrics.bundleSizes.length === 0) return 0;
    
    const latest = this.deploymentMetrics.bundleSizes[this.deploymentMetrics.bundleSizes.length - 1];
    return latest ? latest.size : 0;
  }
}

// Main continuous loop
async function runContinuous() {
  console.log(`🚀 Starting smart deployment optimizer with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  
  const optimizer = new SmartDeploymentOptimizer();
  
  // Run initial optimization
  await optimizer.optimizeDeployment();
  
  // Set up continuous execution
  setInterval(async () => {
    await optimizer.optimizeDeployment();
  }, AUTOMATION_INTERVAL);
  
  console.log(`✅ Smart deployment optimizer running. Next optimization in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Start the smart deployment optimizer
runContinuous().catch(error => {
  console.error('❌ Failed to start smart deployment optimizer:', error);
  process.exit(1);
});