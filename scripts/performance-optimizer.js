#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting performance optimizations...\n');

// 1. Optimize package.json scripts
function optimizePackageScripts() {
  const packagePath = path.join(__dirname, '..', 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  
  // Add optimized build scripts
  packageJson.scripts = {
    ...packageJson.scripts,
    'build:optimized': 'NODE_ENV=production vite build --minify terser --sourcemap false',
    'build:production': 'NODE_ENV=production vite build --minify terser --sourcemap false --rollupOptions.external',
    'analyze:bundle': 'vite-bundle-analyzer dist/stats.html',
    'performance:audit': 'lighthouse http://localhost:4173 --output=html --output-path=./lighthouse-report.html',
    'optimize:images': 'node scripts/optimize-images.js',
    'optimize:css': 'node scripts/optimize-css.js',
    'optimize:all': 'npm run optimize:images && npm run optimize:css && npm run build:optimized'
  };
  
  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
  console.log('✅ Optimized package.json scripts');
}

// 2. Create performance monitoring component
function createPerformanceMonitor() {
  const monitorContent = `import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Web Vitals monitoring
      import('web-vitals').then(({ onFCP, onLCP, onFID, onCLS, onTTFB }) => {
        const performanceData: Partial<PerformanceMetrics> = {};

        onFCP((metric) => {
          performanceData.fcp = metric.value;
        });

        onLCP((metric) => {
          performanceData.lcp = metric.value;
        });

        onFID((metric) => {
          performanceData.fid = metric.value;
        });

        onCLS((metric) => {
          performanceData.cls = metric.value;
        });

        onTTFB((metric) => {
          performanceData.ttfb = metric.value;
          setMetrics(performanceData as PerformanceMetrics);
        });
      });
    }
  }, []);

  if (!metrics || process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono">
      <div className="mb-2 font-bold">Performance Metrics:</div>
      <div>FCP: {metrics.fcp?.toFixed(0)}ms</div>
      <div>LCP: {metrics.lcp?.toFixed(0)}ms</div>
      <div>FID: {metrics.fid?.toFixed(0)}ms</div>
      <div>CLS: {metrics.cls?.toFixed(3)}</div>
      <div>TTFB: {metrics.ttfb?.toFixed(0)}ms</div>
    </div>
  );
};

export default PerformanceMonitor;
`;

  const monitorPath = path.join(__dirname, '..', 'src/components/PerformanceMonitor.tsx');
  fs.writeFileSync(monitorPath, monitorContent);
  console.log('✅ Created PerformanceMonitor component');
}

// 3. Optimize Vite config
function optimizeViteConfig() {
  const viteConfigContent = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }],
          ['@babel/plugin-proposal-decorators', { legacy: true }],
        ],
      },
    }),
    visualizer({
      filename: 'dist/stats.html',
      open: false,
      gzipSize: true,
    }),
  ],
  build: {
    target: 'es2020',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['lucide-react'],
          motion: ['framer-motion'],
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
});
`;

  const vitePath = path.join(__dirname, '..', 'vite.config.ts');
  fs.writeFileSync(vitePath, viteConfigContent);
  console.log('✅ Optimized Vite configuration');
}

// 4. Create SEO optimization component
function createSEOOptimizer() {
  const seoContent = `import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered solutions, cloud infrastructure, and digital transformation services.',
  keywords = 'AI, artificial intelligence, cloud computing, IT solutions, digital transformation',
  image = '/images/og-image.jpg',
  url = 'https://zion.app',
  type = 'website',
}) => {
  const fullTitle = title.includes('Zion') ? title : \`\${title} | Zion Tech Group\`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
`;

  const seoPath = path.join(__dirname, '..', 'src/components/SEO.tsx');
  fs.writeFileSync(seoPath, seoContent);
  console.log('✅ Created SEO optimization component');
}

// 5. Create accessibility enhancements
function createAccessibilityEnhancements() {
  const accessibilityContent = `import React, { useEffect } from 'react';

export const useAccessibility = () => {
  useEffect(() => {
    // Focus management
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    // Skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white p-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    };
  }, []);
};

export const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useAccessibility();
  
  return (
    <div>
      {children}
      <div id="main-content" />
    </div>
  );
};

export default AccessibilityEnhancer;
`;

  const accessibilityPath = path.join(__dirname, '..', 'src/utils/accessibility.ts');
  fs.writeFileSync(accessibilityPath, accessibilityContent);
  console.log('✅ Created accessibility enhancements');
}

// Run all optimizations
optimizePackageScripts();
createPerformanceMonitor();
optimizeViteConfig();
createSEOOptimizer();
createAccessibilityEnhancements();

console.log('\n✅ All performance optimizations completed!');
console.log('\n📊 Next steps:');
console.log('1. Run: npm run build:optimized');
console.log('2. Run: npm run analyze:bundle');
console.log('3. Run: npm run performance:audit');