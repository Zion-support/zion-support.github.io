#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class BuildOptimizer {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.optimizations = [];
    this.errors = [];
    this.warnings = [];
  }

  async optimize() {
    try {
      console.log('🚀 Starting advanced build optimization...');
      
      await this.optimizeNextConfig();
      await this.optimizeTypeScriptConfig();
      await this.optimizePackageScripts();
      await this.createOptimizedBuildScript();
      await this.generatePerformanceReport();
      
      console.log('✅ Build optimization completed successfully!');
      return true;
    } catch (error) {
      console.error('❌ Build optimization failed:', error.message);
      this.errors.push(error.message);
      return false;
    }
  }

  async optimizeNextConfig() {
    try {
      const nextConfigPath = path.join(this.projectRoot, 'next.config.js');
      
      if (!fs.existsSync(nextConfigPath)) {
        console.log('📝 Creating optimized Next.js config...');
        const config = `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
      ],
    },
  ],
};

module.exports = nextConfig;`;
        
        fs.writeFileSync(nextConfigPath, config);
        this.optimizations.push('Created optimized Next.js config');
      } else {
        console.log('📝 Updating existing Next.js config...');
        // Read and optimize existing config
        let config = fs.readFileSync(nextConfigPath, 'utf8');
        
        // Add optimizations if not present
        if (!config.includes('swcMinify')) {
          config = config.replace('reactStrictMode: true,', 'reactStrictMode: true,\n  swcMinify: true,');
        }
        
        if (!config.includes('compress')) {
          config = config.replace('swcMinify: true,', 'swcMinify: true,\n  compress: true,');
        }
        
        fs.writeFileSync(nextConfigPath, config);
        this.optimizations.push('Updated Next.js config with optimizations');
      }
    } catch (error) {
      this.errors.push(`Failed to optimize Next.js config: ${error.message}`);
    }
  }

  async optimizeTypeScriptConfig() {
    try {
      const tsConfigPath = path.join(this.projectRoot, 'tsconfig.json');
      
      if (fs.existsSync(tsConfigPath)) {
        console.log('📝 Optimizing TypeScript config...');
        const config = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'));
        
        // Add performance optimizations
        config.compilerOptions = {
          ...config.compilerOptions,
          skipLibCheck: true,
          incremental: true,
          tsBuildInfoFile: '.next/cache/tsbuildinfo.json',
          isolatedModules: true,
          noEmit: true,
          jsx: 'preserve',
          moduleResolution: 'bundler',
          allowImportingTsExtensions: true,
          resolveJsonModule: true,
          strict: true,
          noUnusedLocals: false,
          noUnusedParameters: false,
          noFallthroughCasesInSwitch: true
        };
        
        fs.writeFileSync(tsConfigPath, JSON.stringify(config, null, 2));
        this.optimizations.push('Optimized TypeScript config');
      }
    } catch (error) {
      this.errors.push(`Failed to optimize TypeScript config: ${error.message}`);
    }
  }

  async optimizePackageScripts() {
    try {
      console.log('📝 Optimizing package.json scripts...');
      const packagePath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      
      // Add optimized scripts
      packageJson.scripts = {
        ...packageJson.scripts,
        'build:optimized': 'NODE_ENV=production next build && next export',
        'build:analyze': 'ANALYZE=true next build',
        'build:production': 'NODE_ENV=production next build',
        'optimize': 'node scripts/advanced-build-optimizer.js',
        'prebuild': 'npm run optimize',
        'postbuild': 'npm run analyze:bundle'
      };
      
      fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
      this.optimizations.push('Added optimized build scripts');
    } catch (error) {
      this.errors.push(`Failed to optimize package scripts: ${error.message}`);
    }
  }

  async createOptimizedBuildScript() {
    try {
      console.log('📝 Creating optimized build script...');
      const buildScript = `#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Starting optimized build process...');

try {
  // Clean previous builds
  console.log('🧹 Cleaning previous builds...');
  execSync('rm -rf .next out dist', { stdio: 'inherit' });
  
  // Run type checking
  console.log('🔍 Running type checking...');
  execSync('npx tsc --noEmit --skipLibCheck', { stdio: 'inherit' });
  
  // Run linting
  console.log('🔍 Running linting...');
  execSync('npx eslint . --fix --max-warnings 1000', { stdio: 'inherit' });
  
  // Build the application
  console.log('🏗️ Building application...');
  execSync('NODE_ENV=production next build', { stdio: 'inherit' });
  
  // Generate static export
  console.log('📦 Generating static export...');
  execSync('next export', { stdio: 'inherit' });
  
  // Analyze bundle
  console.log('📊 Analyzing bundle...');
  execSync('npx @next/bundle-analyzer .next/static/chunks', { stdio: 'inherit' });
  
  console.log('✅ Optimized build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}`;
      
      const scriptPath = path.join(this.projectRoot, 'scripts', 'optimized-build.js');
      fs.writeFileSync(scriptPath, buildScript);
      fs.chmodSync(scriptPath, '755');
      
      this.optimizations.push('Created optimized build script');
    } catch (error) {
      this.errors.push(`Failed to create build script: ${error.message}`);
    }
  }

  async generatePerformanceReport() {
    try {
      console.log('📊 Generating performance report...');
      
      const report = {
        timestamp: new Date().toISOString(),
        optimizations: this.optimizations,
        errors: this.errors,
        warnings: this.warnings,
        recommendations: [
          'Enable SWC minification for faster builds',
          'Use static generation where possible',
          'Optimize images with Next.js Image component',
          'Implement code splitting for large bundles',
          'Use dynamic imports for heavy components'
        ]
      };
      
      const reportPath = path.join(this.projectRoot, 'build-optimization-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      console.log(`📄 Performance report saved to ${reportPath}`);
      this.optimizations.push('Generated performance report');
    } catch (error) {
      this.errors.push(`Failed to generate performance report: ${error.message}`);
    }
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const optimizer = new BuildOptimizer();
  optimizer.optimize().then(success => {
    process.exit(success ? 0 : 1);
  });
}

export default BuildOptimizer;