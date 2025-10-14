
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

        { /* CTA Section */ }
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn more about our services and how they can benefit your organization.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </section>
      </div>
import React from 'react';'
import { Helmet } from 'react-helmet-async';'
export default function performance-optimizer.js() {
  return (}
    <>
      <Helmet>
        <title>performance-optimizer.js - Zion Tech Group</title>
        <meta name="description" content="Professional performance-optimizer.js services by Zion Tech Group." />"
      <div className="min-h-screen bg-white">"
        <div className="container mx-auto px-4 py-16">"
          <div className="text-center">"
            <h1 className="text-4xl font-bold text-gray-900 mb-8">"
              performance-optimizer.js
            <p className="text-xl text-gray-600 mb-8">"
              Professional performance-optimizer.js services by Zion Tech Group.
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">"
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">"
                <h3 className="text-lg font-semibold text-blue-900 mb-2">"
                  Expert Solutions
                <p className="text-blue-700">"
                  Our team of experts delivers cutting-edge solutions.
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">"
                <h3 className="text-lg font-semibold text-green-900 mb-2">"
                  Custom Implementation
                <p className="text-green-700">"
                  Tailored implementations for your specific requirements.
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">"
                <h3 className="text-lg font-semibold text-purple-900 mb-2">"
                  24/7 Support
                <p className="text-purple-700">"
                  Round-the-clock support for all your needs.
    </>
  )
}
const fs = require('fs');
const path = require('path');

/**
 * Performance Optimization Script
 * Optimizes the application for better performance
 */

console.log('Running performance optimizations...');

// 1. Optimize Vite configuration for better chunking
const viteConfigPath = path.join(__dirname, '../vite.config.ts');
let viteConfig = fs.readFileSync(viteConfigPath, 'utf8');

// Enhanced chunk splitting strategy
const optimizedChunkConfig = `
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
              return 'vendor-animations';
            }
            if (id.includes('lucide-react') || id.includes('@heroicons')) {
              return 'vendor-icons';
            }
            if (id.includes('recharts')) {
              return 'vendor-charts';
            }
            if (id.includes('web-vitals')) {
              return 'vendor-analytics';
            }
            if (id.includes('tailwindcss')) {
              return 'vendor-styles';
            }
            return 'vendor-misc';
          }
          
          // App chunks - more specific splitting
          if (id.includes('/app/ai-')) {
            return 'ai-services';
          }
          if (id.includes('/app/it-')) {
            return 'it-services';
          }
          if (id.includes('/app/components/')) {
            return 'components';
          }
          if (id.includes('/app/utils/')) {
            return 'utils';
          }
          if (id.includes('/app/hooks/')) {
            return 'hooks';
          }
          return 'app';
        },`;

// Replace the existing chunk configuration
viteConfig = viteConfig.replace(
  /manualChunks: \(id\) => \{[\s\S]*?\},/,
  optimizedChunkConfig
);

// Add performance optimizations
const performanceOptimizations = `
  // Performance optimizations
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    target: 'es2020',
    cssTarget: 'chrome80',
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        ${optimizedChunkConfig}
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name?.split('.').pop();
          if (/\.(css)$/i.test(assetInfo.name || '')) {
            return \`assets/css/[name]-[hash].\${ext}\`;
          }
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name || '')) {
            return \`assets/images/[name]-[hash].\${ext}\`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name || '')) {
            return \`assets/fonts/[name]-[hash].\${ext}\`;
          }
          return \`assets/[name]-[hash].\${ext}\`;
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2,
      },
      mangle: {
        safari10: true,
        properties: {
          regex: /^_/
        }
      },
      format: {
        comments: false,
        ascii_only: true
      }
    }
  },`;

// Write the optimized config
fs.writeFileSync(viteConfigPath, viteConfig);

// 2. Create a performance monitoring component
const performanceMonitorPath = path.join(__dirname, '../app/components/PerformanceMonitor.tsx');
const performanceMonitorContent = `'use client';
import { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  name: string;
  value: number;
  delta: number;
  id: string;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    const sendToAnalytics = (metric: PerformanceMetrics) => {
      // Send to your analytics service
      console.log('Performance metric:', metric);
      
      // Example: Send to Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
    };

    // Measure Core Web Vitals
    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);

    // Measure additional performance metrics
    if (typeof window !== 'undefined') {
      // First Contentful Paint
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            sendToAnalytics({
              name: 'FCP',
              value: entry.startTime,
              delta: entry.startTime,
              id: 'fcp-custom'
            });
          }
        }
      });
      
      observer.observe({ entryTypes: ['paint'] });
    }
  }, []);

  return null;
};

export default PerformanceMonitor;`;

fs.writeFileSync(performanceMonitorPath, performanceMonitorContent);

// 3. Create a bundle analyzer script
const bundleAnalyzerPath = path.join(__dirname, '../scripts/analyze-bundle.js');
const bundleAnalyzerContent = `const fs = require('fs');
const path = require('path');

/**
 * Bundle Analysis Script
 * Analyzes the built bundle for optimization opportunities
 */

function analyzeBundle() {
  const distPath = path.join(__dirname, '../dist');
  
  if (!fs.existsSync(distPath)) {
    console.log('❌ Dist folder not found. Run npm run build first.');
    return;
  }

  const assetsPath = path.join(distPath, 'assets');
  const files = fs.readdirSync(assetsPath);
  
  const jsFiles = files.filter(file => file.endsWith('.js'));
  const cssFiles = files.filter(file => file.endsWith('.css'));
  
  let totalJSSize = 0;
  let totalCSSSize = 0;
  
  console.log('\\n📊 Bundle Analysis Report');
  console.log('===');
  
  console.log('\\n📦 JavaScript Files:');
  jsFiles.forEach(file => {
    const filePath = path.join(assetsPath, file);
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    totalJSSize += stats.size;
    console.log(\`  \${file}: \${sizeKB} KB\`);
  });
  
  console.log('\\n🎨 CSS Files:');
  cssFiles.forEach(file => {
    const filePath = path.join(assetsPath, file);
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    totalCSSSize += stats.size;
    console.log(\`  \${file}: \${sizeKB} KB\`);
  });
  
  console.log('\\n📈 Summary:');
  console.log(\`  Total JS Size: \${(totalJSSize / 1024).toFixed(2)} KB\`);
  console.log(\`  Total CSS Size: \${(totalCSSSize / 1024).toFixed(2)} KB\`);
  console.log(\`  Total Bundle Size: \${((totalJSSize + totalCSSSize) / 1024).toFixed(2)} KB\`);
  
  // Recommendations
  console.log('\\n💡 Optimization Recommendations:');
  if (totalJSSize > 500 * 1024) {
    console.log('  ⚠️  JavaScript bundle is large. Consider code splitting.');
  }
  if (totalCSSSize > 50 * 1024) {
    console.log('  ⚠️  CSS bundle is large. Consider purging unused styles.');
  }
  if (jsFiles.length > 20) {
    console.log('  ⚠️  Many JS chunks. Consider consolidating smaller chunks.');
  }
  
  console.log('\\n✅ Bundle analysis complete!');
}

analyzeBundle();`;

fs.writeFileSync(bundleAnalyzerPath, bundleAnalyzerContent);

// 4. Add performance scripts to package.json
const packageJsonPath = path.join(__dirname, '../package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

packageJson.scripts['analyze:bundle'] = 'node scripts/analyze-bundle.js';
packageJson.scripts['perf:audit'] = 'lighthouse http://localhost:3000 --output=html --output-path=./lighthouse-report.html';
packageJson.scripts['perf:check'] = 'npm run build && npm run analyze:bundle';

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('✅ Performance optimizations completed!');
console.log('📊 Run "npm run analyze:bundle" to analyze your bundle');
console.log('🔍 Run "npm run perf:audit" to run Lighthouse audit');
const optimizePerformance = () => {
  console.log('🚀 Starting performance optimization...');

  // Create optimized CSS
  const cssOptimizations = `
/* Performance optimizations */
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-display: swap;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Critical CSS for above-the-fold content */
.hero-section {
  contain: layout style paint;
}

/* Optimize animations */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Optimize images */
img {
  loading: lazy;
  decoding: async;
}

/* Optimize fonts */
@font-face {
  font-family: 'Inter';
  font-display: swap;
  src: url('/fonts/inter-var.woff2') format('woff2-variations');
  font-weight: 100 900;
}
`;

  // Write optimized CSS
  const cssPath = path.join(__dirname, '..', 'public', 'performance.css');
  fs.writeFileSync(cssPath, cssOptimizations);
  console.log('✅ Performance CSS created')

  // Create preload hints
  const preloadHints = `
<!-- Preload critical resources -->
<link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/css/critical.css" as="style">
<link rel="preload" href="/assets/js/vendor.js" as="script">
<link rel="preload" href="/assets/js/main.js" as="script">

<!-- DNS prefetch for external resources -->
<link rel="dns-prefetch" href="//fonts.googleapis.com">
<link rel="dns-prefetch" href="//fonts.gstatic.com">
<link rel="dns-prefetch" href="//www.google-analytics.com">

<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
`;

  const preloadPath = path.join(__dirname, '..', 'public', 'preload-hints.html');
  fs.writeFileSync(preloadPath, preloadHints);
  console.log('✅ Preload hints created');

  // Create service worker for caching
  const serviceWorkerContent = `
const CACHE_NAME = 'zion-tech-group-v2';
const urlsToCache = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
}
