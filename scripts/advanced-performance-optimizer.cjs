#!/usr/bin/env node

/**
 * Advanced Performance Optimizer
 * Implements cutting-edge performance optimizations for the React application
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AdvancedPerformanceOptimizer {
  constructor() {
    this.startTime = Date.now();
    this.optimizations = [];
    this.errors = [];
  }

  log(message) {
    console.log(`🚀 [Performance Optimizer] ${message}`);
  }

  error(message) {
    console.error(`❌ [Performance Optimizer] ${message}`);
    this.errors.push(message);
  }

  success(message) {
    console.log(`✅ [Performance Optimizer] ${message}`);
    this.optimizations.push(message);
  }

  async optimizeViteConfig() {
    try {
      const viteConfigPath = path.join(process.cwd(), 'vite.config.ts');
      
      if (fs.existsSync(viteConfigPath)) {
        let config = fs.readFileSync(viteConfigPath, 'utf8');
        
        // Advanced performance optimizations
        const advancedOptimizations = `
  // Advanced Performance Optimizations
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2
      },
      mangle: {
        safari10: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('framer-motion') || id.includes('lucide-react')) {
              return 'ui-vendor';
            }
            if (id.includes('lodash') || id.includes('date-fns')) {
              return 'utils-vendor';
            }
            return 'vendor';
          }
          if (id.includes('src/components/')) {
            return 'components';
          }
          if (id.includes('src/utils/')) {
            return 'utils';
          }
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
          return \`js/\${facadeModuleId}-[hash].js\`;
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false,
    sourcemap: false
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['@vite/client', '@vite/env']
  },`;

        // Check if advanced optimizations are already present
        if (!config.includes('pure_funcs')) {
          config = config.replace(
            /build:\s*\{[^}]*\}/s,
            `build: {${advancedOptimizations}\n  }`
          );
          fs.writeFileSync(viteConfigPath, config);
          this.optimizations.push('Applied advanced Vite performance optimizations');
          this.success('Vite config optimized with advanced settings');
        } else {
          this.log('Vite config already has advanced optimizations');
        }
      }
    } catch (error) {
      this.error(`Failed to optimize Vite config: ${error.message}`);
    }
  }

  async createAdvancedNetlifyConfig() {
    try {
      const netlifyTomlPath = path.join(process.cwd(), 'netlify.toml');
      
      if (fs.existsSync(netlifyTomlPath)) {
        let config = fs.readFileSync(netlifyTomlPath, 'utf8');
        
        // Advanced performance headers
        const advancedHeaders = `
# Advanced Performance Headers
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "DENY"

[[headers]]
  for = "*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
    X-Content-Type-Options = "nosniff"
    Cross-Origin-Embedder-Policy = "require-corp"

[[headers]]
  for = "*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
    X-Content-Type-Options = "nosniff"

# Security Headers
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"

# Performance Headers
[[headers]]
  for = "/*"
  [headers.values]
    Strict-Transport-Security = "max-age=31536000; includeSubDomains"
    X-XSS-Protection = "1; mode=block"
`;

        if (!config.includes('Cross-Origin-Embedder-Policy')) {
          config += advancedHeaders;
          fs.writeFileSync(netlifyTomlPath, config);
          this.optimizations.push('Enhanced Netlify with advanced security and performance headers');
          this.success('Netlify config enhanced with advanced headers');
        } else {
          this.log('Netlify config already has advanced headers');
        }
      }
    } catch (error) {
      this.error(`Failed to optimize Netlify config: ${error.message}`);
    }
  }

  async createPerformanceMonitoringScript() {
    try {
      const scriptContent = `#!/usr/bin/env node

/**
 * Real-time Performance Monitoring Script
 * Monitors build performance and provides optimization suggestions
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      buildTime: 0,
      bundleSize: 0,
      chunkCount: 0,
      timestamp: new Date().toISOString()
    };
  }

  async measureBuildPerformance() {
    const startTime = Date.now();
    
    try {
      execSync('pnpm run build:netlify', { 
        cwd: process.cwd(), 
        stdio: 'pipe'
      });
      
      this.metrics.buildTime = Date.now() - startTime;
      this.analyzeBundle();
      
      console.log(\`✅ Build completed in \${this.metrics.buildTime}ms\`);
      console.log(\`📦 Bundle size: \${(this.metrics.bundleSize / 1024).toFixed(2)} KB\`);
      console.log(\`📊 Chunk count: \${this.metrics.chunkCount}\`);
      
      return this.metrics;
    } catch (error) {
      console.error('❌ Build failed:', error.message);
      throw error;
    }
  }

  analyzeBundle() {
    const distPath = path.join(process.cwd(), 'dist');
    if (!fs.existsSync(distPath)) return;

    const files = fs.readdirSync(distPath, { recursive: true });
    let totalSize = 0;
    let jsFiles = 0;

    files.forEach(file => {
      if (typeof file === 'string' && file.endsWith('.js')) {
        const filePath = path.join(distPath, file);
        const stats = fs.statSync(filePath);
        totalSize += stats.size;
        jsFiles++;
      }
    });

    this.metrics.bundleSize = totalSize;
    this.metrics.chunkCount = jsFiles;
  }

  generateReport() {
    const report = {
      ...this.metrics,
      recommendations: this.getRecommendations(),
      score: this.calculatePerformanceScore()
    };

    const reportPath = path.join(process.cwd(), 'performance-monitor-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(\`📊 Performance report saved: \${reportPath}\`);
    return report;
  }

  getRecommendations() {
    const recommendations = [];
    
    if (this.metrics.buildTime > 10000) {
      recommendations.push('Consider optimizing build process - build time is >10s');
    }
    
    if (this.metrics.bundleSize > 1500000) {
      recommendations.push('Bundle size is large - consider code splitting');
    }
    
    if (this.metrics.chunkCount > 15) {
      recommendations.push('High chunk count - consider consolidating chunks');
    }
    
    return recommendations;
  }

  calculatePerformanceScore() {
    let score = 100;
    
    if (this.metrics.buildTime > 10000) score -= 20;
    if (this.metrics.bundleSize > 1500000) score -= 25;
    if (this.metrics.chunkCount > 15) score -= 15;
    
    return Math.max(0, score);
  }
}

// Run the monitor
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.measureBuildPerformance()
    .then(() => monitor.generateReport())
    .catch(console.error);
}

module.exports = PerformanceMonitor;
`;

      const scriptPath = path.join(process.cwd(), 'scripts/performance-monitor.cjs');
      fs.writeFileSync(scriptPath, scriptContent);
      fs.chmodSync(scriptPath, '755');
      
      this.optimizations.push('Created advanced performance monitoring script');
      this.success('Performance monitoring script created');
    } catch (error) {
      this.error(`Failed to create performance monitoring script: ${error.message}`);
    }
  }

  async optimizePackageJson() {
    try {
      const packagePath = path.join(process.cwd(), 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      
      // Add advanced build scripts
      const advancedScripts = {
        ...packageJson.scripts,
        'build:analyze': 'vite build --mode analyze && npx vite-bundle-analyzer dist',
        'build:profile': 'vite build --mode production --profile',
        'build:minimal': 'NODE_ENV=production vite build --minify terser --sourcemap false',
        'build:fast': 'vite build --mode development --minify false',
        'build:production': 'NODE_ENV=production pnpm run build:minimal',
        'perf:monitor': 'node scripts/performance-monitor.cjs',
        'perf:analyze': 'pnpm run build:analyze && pnpm run perf:monitor',
        'perf:optimize': 'node scripts/advanced-performance-optimizer.cjs && pnpm run perf:monitor'
      };

      packageJson.scripts = advancedScripts;
      
      fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
      this.optimizations.push('Enhanced package.json with advanced performance scripts');
      this.success('Package.json optimized with performance scripts');
    } catch (error) {
      this.error(`Failed to optimize package.json: ${error.message}`);
    }
  }

  async generateOptimizationReport() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      optimizations: this.optimizations,
      errors: this.errors,
      summary: {
        totalOptimizations: this.optimizations.length,
        totalErrors: this.errors.length,
        status: this.errors.length === 0 ? 'completed' : 'completed_with_errors'
      },
      nextSteps: [
        'Run "pnpm run perf:monitor" to test performance improvements',
        'Use "pnpm run build:analyze" to analyze bundle composition',
        'Monitor build times and bundle sizes over time',
        'Consider implementing service worker for caching'
      ]
    };

    const reportPath = path.join(process.cwd(), 'advanced-performance-optimization-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.success(`Advanced optimization report generated: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('Starting advanced performance optimization...');
    
    await this.optimizeViteConfig();
    await this.createAdvancedNetlifyConfig();
    await this.createPerformanceMonitoringScript();
    await this.optimizePackageJson();
    
    const report = await this.generateOptimizationReport();
    
    this.log('Advanced performance optimization completed!');
    console.log('\n🚀 Performance Optimization Summary:');
    console.log(`   • Total optimizations: ${report.summary.totalOptimizations}`);
    console.log(`   • Total errors: ${report.summary.totalErrors}`);
    console.log(`   • Duration: ${report.duration}`);
    console.log(`   • Status: ${report.summary.status}`);
    
    if (this.optimizations.length > 0) {
      console.log('\n✅ Optimizations Applied:');
      this.optimizations.forEach((opt, index) => {
        console.log(`   ${index + 1}. ${opt}`);
      });
    }
    
    console.log('\n🎯 Next Steps:');
    report.nextSteps.forEach((step, index) => {
      console.log(`   ${index + 1}. ${step}`);
    });
  }
}

// Run the optimizer
if (require.main === module) {
  const optimizer = new AdvancedPerformanceOptimizer();
  optimizer.run().catch(console.error);
}

module.exports = AdvancedPerformanceOptimizer;