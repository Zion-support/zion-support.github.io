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
  console.log('========================');
  
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