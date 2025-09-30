#!/usr/bin/env node

/**
 * Build Optimizer Script
 * Optimizes the build process and provides performance insights
 */

const fs = require('fs');
const path = require('path');

class BuildOptimizer {
  constructor() {
    this.startTime = Date.now();
    this.optimizations = [];
  }

  log(message) {
    console.log(`🔧 [Build Optimizer] ${message}`);
  }

  error(message) {
    console.error(`❌ [Build Optimizer] ${message}`);
  }

  success(message) {
    console.log(`✅ [Build Optimizer] ${message}`);
  }

  async optimizePackageJson() {
    try {
      const packagePath = path.join(process.cwd(), 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      
      // Add optimized build scripts
      const optimizedScripts = {
        ...packageJson.scripts,
        'build:analyze': 'vite build --mode analyze',
        'build:minimal': 'NODE_ENV=production vite build --minify terser --sourcemap false',
        'build:fast': 'vite build --mode development',
        'build:production': 'NODE_ENV=production pnpm run build:minimal'
      };

      packageJson.scripts = optimizedScripts;
      
      fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
      this.optimizations.push('Enhanced package.json build scripts');
      this.success('Package.json optimized');
    } catch (error) {
      this.error(`Failed to optimize package.json: ${error.message}`);
    }
  }

  async optimizeViteConfig() {
    try {
      const viteConfigPath = path.join(process.cwd(), 'vite.config.ts');
      
      if (fs.existsSync(viteConfigPath)) {
        let config = fs.readFileSync(viteConfigPath, 'utf8');
        
        // Add performance optimizations
        const optimizations = `
// Performance optimizations
export default defineConfig({
  // ... existing config
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['framer-motion', 'lucide-react']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  server: {
    hmr: {
      overlay: false
    }
  }
});`;

        // Check if optimizations are already present
        if (!config.includes('manualChunks')) {
          config = config.replace(
            'export default defineConfig({',
            'export default defineConfig({' + optimizations
          );
          fs.writeFileSync(viteConfigPath, config);
          this.optimizations.push('Enhanced Vite configuration with chunk splitting');
          this.success('Vite config optimized');
        } else {
          this.log('Vite config already optimized');
        }
      }
    } catch (error) {
      this.error(`Failed to optimize Vite config: ${error.message}`);
    }
  }

  async createNetlifyOptimizations() {
    try {
      const netlifyTomlPath = path.join(process.cwd(), 'netlify.toml');
      
      if (fs.existsSync(netlifyTomlPath)) {
        let config = fs.readFileSync(netlifyTomlPath, 'utf8');
        
        // Add performance headers
        const performanceHeaders = `
[[headers]]
  for = "/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
    X-Content-Type-Options = "nosniff"

[[headers]]
  for = "*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
    X-Content-Type-Options = "nosniff"
`;

        if (!config.includes('Cache-Control')) {
          config += performanceHeaders;
          fs.writeFileSync(netlifyTomlPath, config);
          this.optimizations.push('Enhanced Netlify configuration with caching headers');
          this.success('Netlify config optimized');
        } else {
          this.log('Netlify config already optimized');
        }
      }
    } catch (error) {
      this.error(`Failed to optimize Netlify config: ${error.message}`);
    }
  }

  async generatePerformanceReport() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      optimizations: this.optimizations,
      summary: {
        totalOptimizations: this.optimizations.length,
        status: 'completed'
      }
    };

    const reportPath = path.join(process.cwd(), 'build-optimization-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.success(`Performance report generated: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('Starting build optimization...');
    
    await this.optimizePackageJson();
    await this.optimizeViteConfig();
    await this.createNetlifyOptimizations();
    
    const report = await this.generatePerformanceReport();
    
    this.log('Build optimization completed!');
    console.log('\n📊 Optimization Summary:');
    console.log(`   • Total optimizations: ${report.summary.totalOptimizations}`);
    console.log(`   • Duration: ${report.duration}`);
    console.log(`   • Status: ${report.summary.status}`);
    
    if (this.optimizations.length > 0) {
      console.log('\n🔧 Applied Optimizations:');
      this.optimizations.forEach((opt, index) => {
        console.log(`   ${index + 1}. ${opt}`);
      });
    }
  }
}

// Run the optimizer
if (require.main === module) {
  const optimizer = new BuildOptimizer();
  optimizer.run().catch(console.error);
}

module.exports = BuildOptimizer;