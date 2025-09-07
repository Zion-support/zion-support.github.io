#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class PerformanceOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.optimizations = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async optimizeNextConfig() {
    this.log('🔧 Optimizing Next.js configuration...');
    
    const nextConfigPath = path.join(this.projectRoot, 'next.config.cjs');
    let nextConfig = '';
    
    if (fs.existsSync(nextConfigPath)) {
      nextConfig = fs.readFileSync(nextConfigPath, 'utf8');
    }
    
    const optimizedConfig = `const nextConfig = {
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
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\\\/]node_modules[\\\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    return config;
  },
  
  // Experimental features for performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  
  // Headers for caching
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
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;`;

    fs.writeFileSync(nextConfigPath, optimizedConfig);
    this.optimizations.push('Next.js configuration optimized');
    this.log('✅ Next.js configuration optimized');
  }

  async createPerformanceMiddleware() {
    this.log('🔧 Creating performance middleware...');
    
    const middlewarePath = path.join(this.projectRoot, 'middleware.js');
    const middleware = `// Performance middleware
export function middleware(request) {
  const start = Date.now();
  
  // Add performance headers
  const response = NextResponse.next();
  
  response.headers.set('X-Response-Time', \`\${Date.now() - start}ms\`);
  response.headers.set('X-Powered-By', 'Zion Tech Group');
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};`;

    fs.writeFileSync(middlewarePath, middleware);
    this.optimizations.push('Performance middleware created');
    this.log('✅ Performance middleware created');
  }

  async optimizePackageJson() {
    this.log('🔧 Optimizing package.json scripts...');
    
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    packageJson.scripts = {
      ...packageJson.scripts,
      'analyze': 'ANALYZE=true npm run build',
      'lighthouse': 'lighthouse http://localhost:3000 --output html --output-path ./lighthouse-report.html',
      'perf:audit': 'npm run build && npm run lighthouse',
      'perf:analyze': 'npm run analyze',
      'perf:test': 'npm run build && npm run test:smoke && npm run lighthouse'
    };
    
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    this.optimizations.push('Package.json performance scripts added');
    this.log('✅ Package.json performance scripts added');
  }

  async createPerformanceReport() {
    this.log('📊 Creating performance report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      optimizations: this.optimizations,
      recommendations: [
        'Enable gzip compression',
        'Optimize images with WebP/AVIF formats',
        'Implement code splitting',
        'Add performance monitoring',
        'Use CDN for static assets',
        'Implement service worker for caching',
        'Optimize bundle size',
        'Add performance budgets'
      ],
      nextSteps: [
        'Run lighthouse audit',
        'Monitor Core Web Vitals',
        'Set up performance monitoring',
        'Implement lazy loading',
        'Optimize critical rendering path'
      ]
    };
    
    fs.writeFileSync('performance-optimization-report.json', JSON.stringify(report, null, 2));
    this.log('📊 Performance report created');
  }

  async run() {
    this.log('🚀 Starting Performance Optimizer...');
    
    try {
      await this.optimizeNextConfig();
      await this.createPerformanceMiddleware();
      await this.optimizePackageJson();
      await this.createPerformanceReport();
      
      this.log('🎉 Performance optimization completed successfully');
      this.log(`📊 Applied ${this.optimizations.length} optimizations`);
      
    } catch (error) {
      this.log(`❌ Error during performance optimization: ${error.message}`);
      throw error;
    }
  }
}

// Run the optimizer
if (require.main === module) {
  const optimizer = new PerformanceOptimizer();
  optimizer.run().catch(console.error);
}

module.exports = PerformanceOptimizer;