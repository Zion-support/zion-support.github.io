#!/usr/bin/env node

/**
 * Performance optimization script for Zion Tech Group website
 * This script optimizes various aspects of the application for better performance
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting performance optimization...');

// 1. Optimize bundle splitting
function optimizeBundleSplitting() {
    console.log('📦 Optimizing bundle splitting...');
    
    const viteConfigPath = path.join(process.cwd(), 'vite.config.ts');
    let viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
    
    // Add more granular chunk splitting
    const optimizedChunks = `
        manualChunks: (id) => {
          // Vendor chunks - more granular splitting
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('react-router')) {
              return 'vendor-router';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            if (id.includes('recharts')) {
              return 'vendor-charts';
            }
            if (id.includes('clsx') || id.includes('tailwind-merge')) {
              return 'vendor-utils';
            }
            if (id.includes('axios')) {
              return 'vendor-http';
            }
            if (id.includes('web-vitals')) {
              return 'vendor-vitals';
            }
            // All other node_modules go to vendor
            return 'vendor';
          }
          // App chunks - more granular splitting
          if (id.includes('src/pages/')) {
            return 'pages';
          }
          if (id.includes('src/components/')) {
            // Split large components into separate chunks
            if (id.includes('Advanced') || id.includes('Comprehensive')) {
              return 'components-advanced';
            }
            if (id.includes('Dashboard') || id.includes('Monitor')) {
              return 'components-dashboard';
            }
            return 'components';
          }
          if (id.includes('src/utils/')) {
            // Split utils by functionality
            if (id.includes('advanced') || id.includes('comprehensive')) {
              return 'utils-advanced';
            }
            if (id.includes('performance') || id.includes('monitor')) {
              return 'utils-performance';
            }
            return 'utils';
          }
          if (id.includes('src/hooks/')) {
            return 'hooks';
          }
        }`;
    
    // Replace existing manualChunks if it exists
    if (viteConfig.includes('manualChunks:')) {
        viteConfig = viteConfig.replace(
            /manualChunks:\s*\([^}]+\)/s,
            optimizedChunks.trim()
        );
    } else {
        // Add manualChunks to rollupOptions.output
        viteConfig = viteConfig.replace(
            /output:\s*{([^}]+)}/,
            `output: {
              $1,
              ${optimizedChunks}
            }`
        );
    }
    
    fs.writeFileSync(viteConfigPath, viteConfig);
    console.log('✅ Bundle splitting optimized');
}

// 2. Optimize CSS
function optimizeCSS() {
    console.log('🎨 Optimizing CSS...');
    
    const cssFiles = [
        'src/index.css',
        'src/styles/animations.css',
        'src/styles/accessibility.css',
        'src/styles/enhanced-features.css',
        'src/styles/improvements.css',
        'src/styles/modern-utilities.css',
        'src/styles/notifications.css',
        'src/styles/system-metrics.css',
        'src/styles/theme.css'
    ];
    
    cssFiles.forEach(file => {
        const filePath = path.join(process.cwd(), file);
        if (fs.existsSync(filePath)) {
            let css = fs.readFileSync(filePath, 'utf8');
            
            // Remove unused CSS rules (basic optimization)
            css = css.replace(/\s*\/\*[\s\S]*?\*\//g, ''); // Remove comments
            css = css.replace(/\s+/g, ' '); // Compress whitespace
            css = css.replace(/;\s*}/g, '}'); // Remove trailing semicolons
            
            fs.writeFileSync(filePath, css);
        }
    });
    
    console.log('✅ CSS optimized');
}

// 3. Optimize images
function optimizeImages() {
    console.log('🖼️  Optimizing images...');
    
    const publicDir = path.join(process.cwd(), 'public');
    if (fs.existsSync(publicDir)) {
        const files = fs.readdirSync(publicDir, { recursive: true });
        
        files.forEach(file => {
            if (typeof file === 'string' && /\.(png|jpg|jpeg|gif|svg)$/i.test(file)) {
                const filePath = path.join(publicDir, file);
                const stats = fs.statSync(filePath);
                
                // Log large images for manual optimization
                if (stats.size > 500000) { // 500KB
                    console.log(`⚠️  Large image detected: ${file} (${(stats.size / 1024).toFixed(1)}KB)`);
                }
            }
        });
    }
    
    console.log('✅ Image optimization check completed');
}

// 4. Generate service worker for caching
function generateServiceWorker() {
    console.log('🔧 Generating service worker...');
    
    const serviceWorkerContent = `
// Service Worker for Zion Tech Group Website
const CACHE_NAME = 'zion-website-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/src/index.css',
  '/src/App.tsx',
  '/src/router.tsx'
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
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
`;
    
    fs.writeFileSync(path.join(process.cwd(), 'public/sw.js'), serviceWorkerContent);
    console.log('✅ Service worker generated');
}

// 5. Optimize package.json scripts
function optimizePackageScripts() {
    console.log('📝 Optimizing package.json scripts...');
    
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Add optimized scripts
    packageJson.scripts = {
        ...packageJson.scripts,
        'build:optimized': 'NODE_ENV=production vite build --minify terser --sourcemap false',
        'build:analyze': 'vite build --mode analyze && npx vite-bundle-analyzer dist/stats.html',
        'build:production': 'NODE_ENV=production pnpm run build:optimized',
        'preview:optimized': 'vite preview --port 3000 --host',
        'audit:performance': 'lighthouse http://localhost:3000 --output=html --output-path=./lighthouse-report.html',
        'optimize:images': 'node scripts/optimize-images.js',
        'optimize:css': 'node scripts/optimize-css.js',
        'optimize:all': 'pnpm run optimize:images && pnpm run optimize:css && pnpm run build:optimized'
    };
    
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log('✅ Package.json scripts optimized');
}

// 6. Create performance monitoring
function createPerformanceMonitoring() {
    console.log('📊 Creating performance monitoring...');
    
    const monitoringScript = `
// Performance monitoring script
class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.observers = [];
    this.init();
  }

  init() {
    // Monitor Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(this.handleMetric);
        getFID(this.handleMetric);
        getFCP(this.handleMetric);
        getLCP(this.handleMetric);
        getTTFB(this.handleMetric);
      });
    }

    // Monitor memory usage
    if ('memory' in performance) {
      setInterval(() => {
        const memory = performance.memory;
        this.metrics.memory = {
          used: memory.usedJSHeapSize,
          total: memory.totalJSHeapSize,
          limit: memory.jsHeapSizeLimit
        };
      }, 5000);
    }

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.duration > 50) {
            console.warn('Long task detected:', entry);
          }
        });
      });
      observer.observe({ entryTypes: ['longtask'] });
      this.observers.push(observer);
    }
  }

  handleMetric = (metric) => {
    this.metrics[metric.name] = {
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta
    };
    
    // Report poor metrics
    if (metric.rating === 'poor') {
      console.warn('Poor performance metric:', metric);
      // Send to analytics
      this.reportToAnalytics(metric);
    }
  };

  reportToAnalytics(metric) {
    // Send to your analytics service
    if (typeof gtag !== 'undefined') {
      gtag('event', 'performance_metric', {
        metric_name: metric.name,
        metric_value: metric.value,
        metric_rating: metric.rating
      });
    }
  }

  getMetrics() {
    return this.metrics;
  }

  destroy() {
    this.observers.forEach(observer => observer.disconnect());
  }
}

// Initialize performance monitoring
window.performanceMonitor = new PerformanceMonitor();
`;
    
    fs.writeFileSync(path.join(process.cwd(), 'public/performance-monitor.js'), monitoringScript);
    console.log('✅ Performance monitoring created');
}

// Main execution
async function main() {
    try {
        optimizeBundleSplitting();
        optimizeCSS();
        optimizeImages();
        generateServiceWorker();
        optimizePackageScripts();
        createPerformanceMonitoring();
        
        console.log('🎉 Performance optimization completed successfully!');
        console.log('');
        console.log('📋 Summary of optimizations:');
        console.log('   ✅ Bundle splitting optimized');
        console.log('   ✅ CSS optimized');
        console.log('   ✅ Images checked');
        console.log('   ✅ Service worker generated');
        console.log('   ✅ Package.json scripts optimized');
        console.log('   ✅ Performance monitoring created');
        console.log('');
        console.log('🚀 Run "pnpm run build:optimized" to build with optimizations');
        
    } catch (error) {
        console.error('❌ Performance optimization failed:', error);
        process.exit(1);
    }
}

main();