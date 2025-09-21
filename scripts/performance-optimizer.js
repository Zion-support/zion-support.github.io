#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting performance optimization...');

// Performance optimization configurations
const optimizations = {
  // Bundle analyzer configuration
  bundleAnalyzer: {
    enabled: process.env.ANALYZE === 'true',
    openAnalyzer: false,
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Compression settings
  compression: {
    threshold: 1024,
    minRatio: 0.8,
  },
  
  // Caching strategies
  caching: {
    static: 'public, max-age=31536000, immutable',
    dynamic: 'public, max-age=0, must-revalidate',
  }
};

// Update next.config.js with performance optimizations
const nextConfigPath = path.join(__dirname, '..', 'next.config.js');
let nextConfig = fs.readFileSync(nextConfigPath, 'utf8');

// Add performance optimizations
const performanceConfig = `
  // Performance optimizations
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    optimizePackageImports: ['lucide-react', 'framer-motion', 'react-datepicker'],
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  
  // Bundle analyzer
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config) => {
      config.plugins.push(
        new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)({
          analyzerMode: 'static',
          openAnalyzer: false,
        })
      );
      return config;
    },
  }),
`;

// Replace the experimental section
nextConfig = nextConfig.replace(
  /experimental: \{[\s\S]*?\},/,
  performanceConfig
);

fs.writeFileSync(nextConfigPath, nextConfig);

console.log('✅ Performance optimizations applied to next.config.js');

// Create performance monitoring script
const performanceMonitor = `
const { getCLS, getFID, getFCP, getLCP, getTTFB } = require('web-vitals');

function sendToAnalytics(metric) {
  // Send to your analytics service
  console.log('Performance metric:', metric);
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
`;

fs.writeFileSync(path.join(__dirname, '..', 'lib', 'performance-monitor.js'), performanceMonitor);

console.log('✅ Performance monitoring script created');

// Create service worker for caching
const serviceWorker = `
const CACHE_NAME = 'zion-tech-v1';
const urlsToCache = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/_next/static/css/',
  '/_next/static/js/',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
`;

fs.writeFileSync(path.join(__dirname, '..', 'public', 'sw.js'), serviceWorker);

console.log('✅ Service worker created for caching');

console.log('🎉 Performance optimization complete!');
`;

fs.writeFileSync(path.join(__dirname, 'performance-optimizer.js'), performanceOptimizer);

console.log('✅ Performance optimizer script created');