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
      console.log('🚀 Starting Advanced Build Optimization...');
      
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
      let config = '';

      if (fs.existsSync(nextConfigPath)) {
        config = fs.readFileSync(nextConfigPath, 'utf8');
      }

      const optimizedConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Bundle optimization
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Production optimizations
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
            enforce: true,
          },
        },
      };
    }
    return config;
  },
  
  // Experimental features for performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
  },
  
  // Headers for security and performance
  async headers() {
    return [
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
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;`;

      fs.writeFileSync(nextConfigPath, optimizedConfig);
      this.optimizations.push('Optimized Next.js configuration');
      console.log('✅ Next.js config optimized');
    } catch (error) {
      this.errors.push(`Failed to optimize Next.js config: ${error.message}`);
    }
  }

  async optimizeTypeScriptConfig() {
    try {
      const tsConfigPath = path.join(this.projectRoot, 'tsconfig.json');
      let config = {};

      if (fs.existsSync(tsConfigPath)) {
        config = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'));
      }

      const optimizedConfig = {
        ...config,
        compilerOptions: {
          ...config.compilerOptions,
          target: 'ES2020',
          lib: ['dom', 'dom.iterable', 'es6'],
          allowJs: true,
          skipLibCheck: true,
          strict: true,
          forceConsistentCasingInFileNames: true,
          noEmit: true,
          esModuleInterop: true,
          module: 'esnext',
          moduleResolution: 'node',
          resolveJsonModule: true,
          isolatedModules: true,
          jsx: 'preserve',
          incremental: true,
          plugins: [
            {
              name: 'next'
            }
          ],
          baseUrl: '.',
          paths: {
            '@/*': ['./src/*'],
            '@/components/*': ['./src/components/*'],
            '@/lib/*': ['./src/lib/*'],
            '@/utils/*': ['./src/utils/*'],
            '@/types/*': ['./src/types/*'],
          }
        },
        include: [
          'next-env.d.ts',
          '**/*.ts',
          '**/*.tsx',
          '.next/types/**/*.ts'
        ],
        exclude: [
          'node_modules',
          '.next',
          'out',
          'dist'
        ]
      };

      fs.writeFileSync(tsConfigPath, JSON.stringify(optimizedConfig, null, 2));
      this.optimizations.push('Optimized TypeScript configuration');
      console.log('✅ TypeScript config optimized');
    } catch (error) {
      this.errors.push(`Failed to optimize TypeScript config: ${error.message}`);
    }
  }

  async optimizePackageScripts() {
    try {
      const packagePath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

      const optimizedScripts = {
        ...packageJson.scripts,
        'build:optimized': 'NODE_OPTIONS="--max-old-space-size=4096" next build',
        'build:analyze': 'ANALYZE=true npm run build:optimized',
        'build:production': 'NODE_ENV=production npm run build:optimized',
        'dev:optimized': 'NODE_OPTIONS="--max-old-space-size=4096" next dev',
        'lint:fix': 'eslint . --fix --max-warnings 0',
        'type-check': 'tsc --noEmit --skipLibCheck',
        'test:ci': 'jest --ci --coverage --watchAll=false',
        'preview': 'next start -p 3000',
        'clean': 'rm -rf .next out dist node_modules/.cache',
        'postinstall': 'npm run clean && npm run type-check'
      };

      packageJson.scripts = optimizedScripts;
      fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
      this.optimizations.push('Optimized package.json scripts');
      console.log('✅ Package scripts optimized');
    } catch (error) {
      this.errors.push(`Failed to optimize package scripts: ${error.message}`);
    }
  }

  async createOptimizedBuildScript() {
    const buildScript = `#!/bin/bash
set -e

echo "🚀 Starting optimized build process..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next out dist

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --prefer-offline --no-audit

# Type checking
echo "🔍 Running type checks..."
npm run type-check

# Linting
echo "🔧 Running linters..."
npm run lint:fix

# Build
echo "🏗️ Building application..."
NODE_OPTIONS="--max-old-space-size=4096" npm run build

# Test
echo "🧪 Running tests..."
npm run test:ci

echo "✅ Build completed successfully!"
`;

    const scriptPath = path.join(this.projectRoot, 'build-optimized.sh');
    fs.writeFileSync(scriptPath, buildScript);
    execSync(`chmod +x ${scriptPath}`);
    this.optimizations.push('Created optimized build script');
    console.log('✅ Optimized build script created');
  }

  async generatePerformanceReport() {
    const report = {
      timestamp: new Date().toISOString(),
      optimizations: this.optimizations,
      errors: this.errors,
      warnings: this.warnings,
      recommendations: [
        'Enable gzip compression on your server',
        'Use a CDN for static assets',
        'Implement service worker for caching',
        'Consider using Next.js Image component for all images',
        'Enable bundle analyzer to monitor bundle size',
        'Use dynamic imports for code splitting'
      ]
    };

    const reportPath = path.join(this.projectRoot, 'build-optimization-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log('📊 Performance report generated');
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