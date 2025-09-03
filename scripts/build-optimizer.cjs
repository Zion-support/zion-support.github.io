#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class BuildOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  optimizeNextConfig() {
    this.log('🔧 Optimizing Next.js configuration');
    
    const nextConfigPath = path.join(this.projectRoot, 'next.config.js');
    let config = {};

    if (fs.existsSync(nextConfigPath)) {
      try {
        delete require.cache[require.resolve(nextConfigPath)];
        config = require(nextConfigPath);
      } catch (error) {
        this.log(`⚠️  Warning: Could not load existing config: ${error.message}`);
      }
    }

    // Optimized configuration
    const optimizedConfig = {
      ...config,
      // Remove deprecated options
      swcMinify: undefined,
      experimental: {
        ...config.experimental,
        turbo: undefined, // Move to turbopack
        optimizeCss: true,
        scrollRestoration: true,
        optimizePackageImports: ['lucide-react', 'framer-motion']
      },
      // Add performance optimizations
      compiler: {
        removeConsole: process.env.NODE_ENV === 'production' ? {
          exclude: ['error', 'warn']
        } : false
      },
      // Optimize images
      images: {
        ...config.images,
        formats: ['image/webp', 'image/avif'],
        minimumCacheTTL: 60,
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
      },
      // Bundle optimization
      webpack: (config, { dev, isServer }) => {
        if (!dev && !isServer) {
          // Optimize bundle splitting
          config.optimization.splitChunks = {
            chunks: 'all',
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all',
                priority: 10
              },
              common: {
                name: 'common',
                minChunks: 2,
                chunks: 'all',
                priority: 5,
                reuseExistingChunk: true
              }
            }
          };
        }
        return config;
      }
    };

    // Write optimized config
    const configContent = `/** @type {import('next').NextConfig} */
const nextConfig = ${JSON.stringify(optimizedConfig, null, 2)};

module.exports = nextConfig;
`;

    fs.writeFileSync(nextConfigPath, configContent);
    this.log('✅ Next.js configuration optimized');
  }

  optimizePackageJson() {
    this.log('🔧 Optimizing package.json scripts');
    
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

    // Add optimized scripts
    const optimizedScripts = {
      ...packageJson.scripts,
      'build:optimized': 'NODE_ENV=production next build',
      'build:analyze': 'ANALYZE=true npm run build:optimized',
      'build:fast': 'next build --no-lint --no-type-check',
      'dev:optimized': 'next dev --turbo',
      'lint:fix': 'eslint . --fix',
      'type-check:fast': 'tsc --noEmit --skipLibCheck',
      'test:unit': 'jest --testPathPattern=__tests__ --passWithNoTests',
      'test:integration': 'jest --testPathPattern=integration --passWithNoTests',
      'clean:all': 'rm -rf .next out dist node_modules/.cache',
      'optimize:all': 'npm run clean:all && npm run build:optimized'
    };

    packageJson.scripts = optimizedScripts;

    // Add build optimization dependencies
    const buildDeps = {
      ...packageJson.devDependencies,
      '@next/bundle-analyzer': '^13.5.6',
      'webpack-bundle-analyzer': '^4.10.1'
    };

    packageJson.devDependencies = buildDeps;

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    this.log('✅ package.json optimized');
  }

  createBuildScripts() {
    this.log('🔧 Creating build optimization scripts');

    // Create build script
    const buildScript = `#!/bin/bash
set -e

echo "🚀 Starting optimized build process..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
npm run clean:all

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --only=production

# Run type checking
echo "🔍 Running type check..."
npm run type-check:fast

# Run linting
echo "🔍 Running linting..."
npm run lint:fix

# Build application
echo "🏗️  Building application..."
npm run build:optimized

# Run tests
echo "🧪 Running tests..."
npm run test:unit

echo "✅ Build completed successfully!"
`;

    fs.writeFileSync(path.join(this.projectRoot, 'scripts', 'build-optimized.sh'), buildScript);
    fs.chmodSync(path.join(this.projectRoot, 'scripts', 'build-optimized.sh'), '755');

    // Create deployment script
    const deployScript = `#!/bin/bash
set -e

echo "🚀 Starting deployment process..."

# Build optimized version
./scripts/build-optimized.sh

# Check build output
if [ ! -d ".next" ]; then
  echo "❌ Build failed - .next directory not found"
  exit 1
fi

# Run final checks
echo "🔍 Running final checks..."
npm run test:unit

echo "✅ Deployment ready!"
`;

    fs.writeFileSync(path.join(this.projectRoot, 'scripts', 'deploy.sh'), deployScript);
    fs.chmodSync(path.join(this.projectRoot, 'scripts', 'deploy.sh'), '755');

    this.log('✅ Build scripts created');
  }

  optimizeImages() {
    this.log('🔧 Optimizing images and assets');

    const publicDir = path.join(this.projectRoot, 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Create image optimization script
    const imageOptimScript = `#!/bin/bash
# Image optimization script

echo "🖼️  Optimizing images..."

# Install image optimization tools if not present
if ! command -v imagemin &> /dev/null; then
  echo "Installing image optimization tools..."
  npm install -g imagemin-cli imagemin-mozjpeg imagemin-pngquant imagemin-webp
fi

# Optimize images in public directory
find public -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" | while read file; do
  echo "Optimizing: $file"
  imagemin "$file" --out-dir=public/optimized --plugin=mozjpeg --plugin=pngquant
done

echo "✅ Image optimization completed!"
`;

    fs.writeFileSync(path.join(this.projectRoot, 'scripts', 'optimize-images.sh'), imageOptimScript);
    fs.chmodSync(path.join(this.projectRoot, 'scripts', 'optimize-images.sh'), '755');

    this.log('✅ Image optimization script created');
  }

  async run() {
    this.log('🚀 Starting Build Optimizer');

    try {
      this.optimizeNextConfig();
      this.optimizePackageJson();
      this.createBuildScripts();
      this.optimizeImages();

      // Generate report
      const report = {
        timestamp: new Date().toISOString(),
        optimizations: [
          'Next.js configuration optimized',
          'Package.json scripts enhanced',
          'Build scripts created',
          'Image optimization setup'
        ],
        recommendations: [
          'Run npm run build:optimized for production builds',
          'Use npm run dev:optimized for faster development',
          'Run scripts/optimize-images.sh to optimize assets',
          'Use npm run build:analyze to analyze bundle size'
        ]
      };

      const reportPath = path.join(this.reportsDir, 'build-optimizer-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

      this.log('✅ Build Optimizer completed successfully');
      this.log(`📊 Report saved: ${reportPath}`);

      return report;
    } catch (error) {
      this.log(`❌ Build Optimizer failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the optimizer
if (require.main === module) {
  const optimizer = new BuildOptimizer();
  optimizer.run().catch(console.error);
}

module.exports = BuildOptimizer;