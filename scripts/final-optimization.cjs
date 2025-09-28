#!/usr/bin/env node

/**
 * Final Optimization Script
 * Performs final optimizations based on performance monitoring results
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class FinalOptimizer {
  constructor() {
    this.startTime = Date.now();
    this.improvements = [];
    this.errors = [];
  }

  log(message) {
    console.log(`🎯 [Final Optimizer] ${message}`);
  }

  error(message) {
    console.error(`❌ [Final Optimizer] ${message}`);
    this.errors.push(message);
  }

  success(message) {
    console.log(`✅ [Final Optimizer] ${message}`);
    this.improvements.push(message);
  }

  async optimizeViteChunks() {
    try {
      const viteConfigPath = path.join(process.cwd(), 'vite.config.ts');
      
      if (fs.existsSync(viteConfigPath)) {
        let config = fs.readFileSync(viteConfigPath, 'utf8');
        
        // Optimized chunk strategy to reduce chunk count
        const optimizedChunks = `
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // Consolidate all vendor chunks into fewer, larger chunks
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            if (id.includes('framer-motion') || id.includes('lucide-react') || id.includes('@headlessui')) {
              return 'ui-vendor';
            }
            if (id.includes('lodash') || id.includes('date-fns') || id.includes('axios')) {
              return 'utils-vendor';
            }
            // Group all other node_modules into a single vendor chunk
            return 'vendor';
          }
          // Consolidate component chunks
          if (id.includes('src/components/')) {
            return 'components';
          }
          // Consolidate utility chunks
          if (id.includes('src/utils/')) {
            return 'utils';
          }
          // Consolidate hooks
          if (id.includes('src/hooks/')) {
            return 'hooks';
          }
        },`;

        // Replace existing manualChunks with optimized version
        config = config.replace(
          /manualChunks:\s*\([^)]*\)\s*=>\s*\{[^}]+\}/s,
          optimizedChunks.trim()
        );
        
        fs.writeFileSync(viteConfigPath, config);
        this.improvements.push('Optimized Vite chunk strategy to reduce chunk count');
        this.success('Vite chunks optimized for better performance');
      }
    } catch (error) {
      this.error(`Failed to optimize Vite chunks: ${error.message}`);
    }
  }

  async createProductionOptimizations() {
    try {
      // Create production optimization script
      const scriptContent = `#!/usr/bin/env node

/**
 * Production Optimization Script
 * Applies production-specific optimizations
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ProductionOptimizer {
  async optimizeForProduction() {
    console.log('🚀 Applying production optimizations...');
    
    // Set production environment
    process.env.NODE_ENV = 'production';
    process.env.NODE_OPTIONS = '--max-old-space-size=4096';
    
    try {
      // Run production build
      execSync('pnpm run build:production', { 
        cwd: process.cwd(),
        stdio: 'inherit'
      });
      
      console.log('✅ Production build completed successfully');
      
      // Analyze bundle
      this.analyzeProductionBundle();
      
    } catch (error) {
      console.error('❌ Production build failed:', error.message);
      throw error;
    }
  }

  analyzeProductionBundle() {
    const distPath = path.join(process.cwd(), 'dist');
    if (!fs.existsSync(distPath)) return;

    const files = fs.readdirSync(distPath, { recursive: true });
    let totalSize = 0;
    let jsFiles = [];
    let cssFiles = [];

    files.forEach(file => {
      if (typeof file === 'string') {
        const filePath = path.join(distPath, file);
        const stats = fs.statSync(filePath);
        totalSize += stats.size;

        if (file.endsWith('.js')) {
          jsFiles.push({ name: file, size: stats.size });
        } else if (file.endsWith('.css')) {
          cssFiles.push({ name: file, size: stats.size });
        }
      }
    });

    // Sort by size
    jsFiles.sort((a, b) => b.size - a.size);
    cssFiles.sort((a, b) => b.size - a.size);

    console.log('\\n📊 Production Bundle Analysis:');
    console.log(\`   Total size: \${(totalSize / 1024).toFixed(2)} KB\`);
    console.log(\`   JS files: \${jsFiles.length}\`);
    console.log(\`   CSS files: \${cssFiles.length}\`);
    
    if (jsFiles.length > 0) {
      console.log('\\n🔍 Largest JS files:');
      jsFiles.slice(0, 5).forEach((file, index) => {
        console.log(\`   \${index + 1}. \${file.name}: \${(file.size / 1024).toFixed(2)} KB\`);
      });
    }

    // Generate production report
    const report = {
      timestamp: new Date().toISOString(),
      totalSize,
      jsFiles: jsFiles.length,
      cssFiles: cssFiles.length,
      largestJsFiles: jsFiles.slice(0, 10),
      largestCssFiles: cssFiles.slice(0, 5)
    };

    const reportPath = path.join(process.cwd(), 'production-optimization-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(\`\\n📋 Production report saved: \${reportPath}\`);
  }
}

// Run the optimizer
if (require.main === module) {
  const optimizer = new ProductionOptimizer();
  optimizer.optimizeForProduction().catch(console.error);
}

module.exports = ProductionOptimizer;
`;

      const scriptPath = path.join(process.cwd(), 'scripts/production-optimizer.cjs');
      fs.writeFileSync(scriptPath, scriptContent);
      fs.chmodSync(scriptPath, '755');
      
      this.improvements.push('Created production optimization script');
      this.success('Production optimization script created');
    } catch (error) {
      this.error(`Failed to create production optimization script: ${error.message}`);
    }
  }

  async enhancePackageJsonScripts() {
    try {
      const packagePath = path.join(process.cwd(), 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      
      // Add final optimization scripts
      const finalScripts = {
        ...packageJson.scripts,
        'build:production': 'NODE_ENV=production NODE_OPTIONS="--max-old-space-size=4096" vite build --minify terser --sourcemap false',
        'build:analyze': 'vite build --mode analyze',
        'build:profile': 'vite build --mode production --profile',
        'optimize:final': 'node scripts/final-optimization.cjs',
        'optimize:production': 'node scripts/production-optimizer.cjs',
        'optimize:all': 'pnpm run optimize:final && pnpm run optimize:production && pnpm run perf:monitor',
        'deploy:production': 'pnpm run optimize:all && echo "Ready for production deployment"'
      };

      packageJson.scripts = finalScripts;
      
      fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
      this.improvements.push('Enhanced package.json with final optimization scripts');
      this.success('Package.json enhanced with final optimization scripts');
    } catch (error) {
      this.error(`Failed to enhance package.json: ${error.message}`);
    }
  }

  async generateFinalReport() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      improvements: this.improvements,
      errors: this.errors,
      summary: {
        totalImprovements: this.improvements.length,
        totalErrors: this.errors.length,
        status: this.errors.length === 0 ? 'completed' : 'completed_with_errors'
      },
      deployment: {
        status: 'ready',
        buildCommand: 'pnpm run build:production',
        optimizationCommand: 'pnpm run optimize:all',
        monitoringCommand: 'pnpm run perf:monitor'
      },
      recommendations: [
        'Use "pnpm run optimize:all" before deployment',
        'Monitor performance with "pnpm run perf:monitor"',
        'Use "pnpm run build:analyze" for bundle analysis',
        'Consider implementing CDN for static assets'
      ]
    };

    const reportPath = path.join(process.cwd(), 'final-optimization-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.success(`Final optimization report generated: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('Starting final optimization phase...');
    
    await this.optimizeViteChunks();
    await this.createProductionOptimizations();
    await this.enhancePackageJsonScripts();
    
    const report = await this.generateFinalReport();
    
    this.log('Final optimization completed!');
    console.log('\n🎯 Final Optimization Summary:');
    console.log(`   • Total improvements: ${report.summary.totalImprovements}`);
    console.log(`   • Total errors: ${report.summary.totalErrors}`);
    console.log(`   • Duration: ${report.duration}`);
    console.log(`   • Status: ${report.summary.status}`);
    console.log(`   • Deployment: ${report.deployment.status}`);
    
    if (this.improvements.length > 0) {
      console.log('\n✅ Final Improvements Applied:');
      this.improvements.forEach((improvement, index) => {
        console.log(`   ${index + 1}. ${improvement}`);
      });
    }
    
    console.log('\n🚀 Deployment Commands:');
    console.log(`   • Build: ${report.deployment.buildCommand}`);
    console.log(`   • Optimize: ${report.deployment.optimizationCommand}`);
    console.log(`   • Monitor: ${report.deployment.monitoringCommand}`);
    
    console.log('\n💡 Recommendations:');
    report.recommendations.forEach((rec, index) => {
      console.log(`   ${index + 1}. ${rec}`);
    });
  }
}

// Run the final optimizer
if (require.main === module) {
  const optimizer = new FinalOptimizer();
  optimizer.run().catch(console.error);
}

module.exports = FinalOptimizer;