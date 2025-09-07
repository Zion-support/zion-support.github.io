#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class AdvancedBuildOptimizer {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.optimizations = [];
    this.errors = [];
  }

  log(message, type = 'info') {
    const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
    console.log(`${prefix} ${message}`);
  }

  async optimizeBuild() {
    this.log('Starting advanced build optimization...');
    
    try {
      // Clean build directory
      await this.cleanBuildDirectory();
      
      // Optimize package.json
      await this.optimizePackageJson();
      
      // Optimize Next.js config
      await this.optimizeNextConfig();
      
      // Optimize TypeScript config
      await this.optimizeTypeScriptConfig();
      
      // Run build with optimizations
      await this.runOptimizedBuild();
      
      this.log('Build optimization completed successfully', 'success');
      return true;
    } catch (error) {
      this.log(`Build optimization failed: ${error.message}`, 'error');
      this.errors.push(error.message);
      return false;
    }
  }

  async cleanBuildDirectory() {
    try {
      this.log('Cleaning build directory...');
      const buildDirs = ['.next', 'out', 'dist', 'build'];
      
      for (const dir of buildDirs) {
        const dirPath = path.join(this.projectRoot, dir);
        if (fs.existsSync(dirPath)) {
          fs.rmSync(dirPath, { recursive: true, force: true });
          this.log(`Cleaned ${dir} directory`, 'success');
        }
      }
      
      this.optimizations.push('Cleaned build directories');
    } catch (error) {
      this.log(`Failed to clean build directory: ${error.message}`, 'error');
      throw error;
    }
  }

  async optimizePackageJson() {
    try {
      this.log('Optimizing package.json...');
      const packagePath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      
      // Add build optimizations
      if (!packageJson.scripts) packageJson.scripts = {};
      
      packageJson.scripts['build:optimized'] = 'next build && next export';
      packageJson.scripts['build:analyze'] = 'ANALYZE=true next build';
      
      // Add build optimizations to Next.js config
      if (!packageJson.nextConfig) {
        packageJson.nextConfig = {
          compress: true,
          poweredByHeader: false,
          generateEtags: false
        };
      }
      
      fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
      this.log('Optimized package.json', 'success');
      this.optimizations.push('Optimized package.json build scripts');
    } catch (error) {
      this.log(`Failed to optimize package.json: ${error.message}`, 'error');
      throw error;
    }
  }

  async optimizeNextConfig() {
    try {
      this.log('Optimizing Next.js configuration...');
      const nextConfigPath = path.join(this.projectRoot, 'next.config.js');
      
      let nextConfig = '';
      if (fs.existsSync(nextConfigPath)) {
        nextConfig = fs.readFileSync(nextConfigPath, 'utf8');
      }
      
      // Create optimized Next.js config
      const optimizedConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  
  // Build optimizations
  swcMinify: true,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react']
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  
  // Bundle analyzer
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
          reportFilename: './bundle-analysis.html'
        })
      );
    }
    
    // Optimize chunks
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\\\/]node_modules[\\\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          enforce: true
        }
      }
    };
    
    return config;
  }
};

module.exports = nextConfig;`;
      
      fs.writeFileSync(nextConfigPath, optimizedConfig);
      this.log('Optimized Next.js configuration', 'success');
      this.optimizations.push('Optimized Next.js configuration');
    } catch (error) {
      this.log(`Failed to optimize Next.js config: ${error.message}`, 'error');
      throw error;
    }
  }

  async optimizeTypeScriptConfig() {
    try {
      this.log('Optimizing TypeScript configuration...');
      const tsConfigPath = path.join(this.projectRoot, 'tsconfig.json');
      
      if (fs.existsSync(tsConfigPath)) {
        const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'));
        
        // Add build optimizations
        tsConfig.compilerOptions = {
          ...tsConfig.compilerOptions,
          skipLibCheck: true,
          incremental: true,
          tsBuildInfoFile: '.next/tsconfig.tsbuildinfo'
        };
        
        fs.writeFileSync(tsConfigPath, JSON.stringify(tsConfig, null, 2));
        this.log('Optimized TypeScript configuration', 'success');
        this.optimizations.push('Optimized TypeScript configuration');
      }
    } catch (error) {
      this.log(`Failed to optimize TypeScript config: ${error.message}`, 'error');
      throw error;
    }
  }

  async runOptimizedBuild() {
    try {
      this.log('Running optimized build...');
      
      // Install dependencies if needed
      execSync('npm install', { 
        cwd: this.projectRoot,
        stdio: 'inherit'
      });
      
      // Run type check
      execSync('npm run type-check', { 
        cwd: this.projectRoot,
        stdio: 'inherit'
      });
      
      // Run linting
      execSync('npm run lint:fix', { 
        cwd: this.projectRoot,
        stdio: 'inherit'
      });
      
      // Run optimized build
      execSync('npm run build', { 
        cwd: this.projectRoot,
        stdio: 'inherit'
      });
      
      this.log('Optimized build completed successfully', 'success');
      this.optimizations.push('Completed optimized build');
    } catch (error) {
      this.log(`Optimized build failed: ${error.message}`, 'error');
      throw error;
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      optimizations: this.optimizations,
      errors: this.errors,
      success: this.errors.length === 0
    };
    
    const reportPath = path.join(this.projectRoot, 'build-optimization-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Build optimization report saved to ${reportPath}`, 'success');
  }
}

// Run the optimizer
const optimizer = new AdvancedBuildOptimizer();
optimizer.optimizeBuild()
  .then(() => optimizer.generateReport())
  .catch(console.error);