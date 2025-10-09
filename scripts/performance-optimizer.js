#!/usr/bin/env node

/**
 * Performance Optimizer Script
 * Optimizes the Zion Tech Group website for maximum performance
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting performance optimization...');

// Performance optimization configurations
const optimizations = {
  // Image optimization
  images: {
    formats: ['webp', 'avif'],
    quality: 85,
    sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    lazy: true
  },
  
  // Code splitting
  codeSplitting: {
    chunks: {
      vendor: ['react', 'react-dom'],
      ui: ['framer-motion', 'lucide-react'],
      utils: ['clsx', 'tailwind-merge']
    }
  },
  
  // Caching strategies
  caching: {
    static: 'public, max-age=31536000, immutable',
    images: 'public, max-age=86400, s-maxage=604800',
    api: 'public, max-age=300, s-maxage=600'
  },
  
  // Bundle optimization
  bundle: {
    minify: true,
    treeshake: true,
    compress: true,
    splitChunks: true
  }
};

// Generate optimized Next.js config
const nextConfig = `import withBundleAnalyzer from '@next/bundle-analyzer';
import crypto from 'crypto';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'ziontechgroup.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Fix for "self is not defined" error by providing a polyfill
    if (isServer) {
      config.plugins.push(
        new webpack.DefinePlugin({
          'self': 'undefined',
        })
      );
    }

    // Optimize bundle size
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            chunks: 'all',
            name: 'framework',
            test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true,
          },
          lib: {
            test(module) {
              return (
                module.size() > 160000 &&
                /node_modules[/\\]/.test(module.identifier())
              );
            },
            name(module) {
              const _hash = crypto.createHash('sha1');
              _hash.update(module.identifier());
              return _hash.digest('hex').substring(0, 8);
            },
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
          },
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 20,
          },
          shared: {
            name(module, chunks) {
              return (
                'shared-' +
                crypto
                  .createHash('sha1')
                  .update(chunks.reduce((acc, chunk) => acc + chunk.name, ''))
                  .digest('hex')
                  .substring(0, 8)
              );
            },
            priority: 10,
            minChunks: 2,
            reuseExistingChunk: true,
          },
        },
        maxInitialRequests: 25,
        minSize: 20000,
      },
      minimize: !dev,
    };

    // Tree shaking
    config.optimization.usedExports = true;

    return config;
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';",
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=604800, stale-while-revalidate',
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },

  experimental: {
    optimizeCss: false,
    optimizePackageImports: [],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
};

export default bundleAnalyzer(nextConfig);
`;

// Write optimized Next.js config
fs.writeFileSync(path.join(__dirname, '../next.config.js'), nextConfig);
console.log('✅ Optimized Next.js configuration written');

// Generate performance monitoring script
const performanceMonitor = `'use client';
import { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Core Web Vitals monitoring
    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);

    // Performance observer for additional metrics
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('Navigation timing:', entry);
          }
        }
      });
      
      observer.observe({ entryTypes: ['navigation'] });
    }
  }, []);
};
`;

// Write performance monitor
fs.writeFileSync(path.join(__dirname, '../app/hooks/usePerformanceMonitor.ts'), performanceMonitor);
console.log('✅ Performance monitoring hook created');

// Generate optimized CSS
const optimizedCSS = `@tailwind base;
@tailwind components;
@tailwind utilities;

/* Performance-optimized global styles */
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

/* Critical CSS for above-the-fold content */
.hero-section {
  contain: layout style paint;
  will-change: transform;
}

/* Optimized animations */
@media (prefers-reduced-motion: no-preference) {
  .animate-fade-in {
    animation: fadeIn 0.6s ease-out;
  }
  
  .animate-slide-up {
    animation: slideUp 0.8s ease-out;
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0; 
    transform: translateY(20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

/* Accessibility improvements */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: 0.5rem;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
}

.focus-visible {
  outline: 2px solid #00ffff;
  outline-offset: 2px;
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .high-contrast {
    --text-primary: #ffffff;
    --text-secondary: #e5e5e5;
    --bg-primary: #000000;
    --bg-secondary: #1a1a1a;
    --accent: #00ffff;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Cyber theme styles */
.cyber-grid {
  background-image: 
    linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

.neural-network-bg {
  background: 
    radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%);
}

.matrix-rain {
  position: relative;
  overflow: hidden;
}

.matrix-rain::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(transparent 50%, rgba(0, 255, 0, 0.03) 50%);
  background-size: 100% 4px;
  animation: matrix-rain 20s linear infinite;
  pointer-events: none;
}

@keyframes matrix-rain {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
}

.cyber-scan-line {
  position: relative;
}

.cyber-scan-line::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ffff, transparent);
  animation: scan 3s linear infinite;
}

@keyframes scan {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.neon-text {
  text-shadow: 
    0 0 5px currentColor,
    0 0 10px currentColor,
    0 0 15px currentColor,
    0 0 20px currentColor;
}

.cyber-glow {
  box-shadow: 
    0 0 5px currentColor,
    0 0 10px currentColor,
    0 0 15px currentColor;
}

.cyber-card {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.cyber-card:hover {
  border-color: rgba(0, 255, 255, 0.6);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

.hologram-card {
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.8));
  border: 1px solid rgba(139, 92, 246, 0.3);
  position: relative;
  overflow: hidden;
}

.hologram-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  animation: hologram-sweep 3s infinite;
}

@keyframes hologram-sweep {
  0% { left: -100%; }
  100% { left: 100%; }
}

.quantum-card {
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.8));
  border: 1px solid rgba(59, 130, 246, 0.3);
  position: relative;
  overflow: hidden;
}

.energy-pulse {
  animation: energy-pulse 2s ease-in-out infinite;
}

@keyframes energy-pulse {
  0%, 100% { 
    box-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
  }
  50% { 
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
  }
}

.cyber-button {
  background: linear-gradient(45deg, #3b82f6, #8b5cf6);
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.cyber-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.cyber-button:hover::before {
  left: 100%;
}

.cyber-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
}

/* Performance optimizations */
.gpu-accelerated {
  transform: translateZ(0);
  will-change: transform;
}

.contain-layout {
  contain: layout;
}

.contain-paint {
  contain: paint;
}

.contain-style {
  contain: style;
}

/* Loading states */
.loading-skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Responsive design optimizations */
@media (max-width: 640px) {
  .cyber-card {
    padding: 1rem;
  }
  
  .neon-text {
    text-shadow: 
      0 0 3px currentColor,
      0 0 6px currentColor,
      0 0 9px currentColor;
  }
}

@media (max-width: 480px) {
  .cyber-button {
    padding: 10px 20px;
    font-size: 14px;
  }
}
`;

// Write optimized CSS
fs.writeFileSync(path.join(__dirname, '../app/globals.css'), optimizedCSS);
console.log('✅ Optimized CSS written');

// Generate bundle analyzer script
const bundleAnalyzer = `#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📊 Starting bundle analysis...');

try {
  // Run build with analysis
  execSync('ANALYZE=true npm run build', { stdio: 'inherit' });
  
  // Check if stats file exists
  const statsPath = path.join(__dirname, '../.next/analyze/client.html');
  if (fs.existsSync(statsPath)) {
    console.log('✅ Bundle analysis complete!');
    console.log('📁 Analysis report saved to:', statsPath);
  } else {
    console.log('⚠️  Bundle analysis completed but stats file not found');
  }
} catch (error) {
  console.error('❌ Bundle analysis failed:', error.message);
  process.exit(1);
}
`;

// Write bundle analyzer
fs.writeFileSync(path.join(__dirname, '../scripts/analyze-bundle.js'), bundleAnalyzer);
fs.chmodSync(path.join(__dirname, '../scripts/analyze-bundle.js'), '755');
console.log('✅ Bundle analyzer script created');

console.log('🎉 Performance optimization complete!');
console.log('📈 Optimizations applied:');
console.log('  - Enhanced Next.js configuration');
console.log('  - Optimized CSS with critical styles');
console.log('  - Performance monitoring hooks');
console.log('  - Bundle analysis tools');
console.log('  - Improved caching strategies');
console.log('  - Code splitting optimizations');