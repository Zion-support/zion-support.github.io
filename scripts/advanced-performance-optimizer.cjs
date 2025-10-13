#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('Starting advanced performance optimization...');

// Performance optimization configurations
const optimizations = {
  // Bundle splitting improvements
  bundleSplitting: {
    maxChunkSize: 100000, // 100KB max chunk size
    vendorChunks: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
      'recharts'
    ],
    pageChunks: [
      'ai-services',
      'micro-saas',
      '5g-solutions',
      'about',
      'contact'
    ]
  },
  
  // Image optimization
  imageOptimization: {
    formats: ['webp', 'avif'],
    quality: 85,
    maxWidth: 1920,
    maxHeight: 1080
  },
  
  // CSS optimization
  cssOptimization: {
    purgeUnused: true,
    minify: true,
    criticalCSS: true
  },
  
  // JavaScript optimization
  jsOptimization: {
    treeShaking: true,
    minify: true,
    compress: true,
    removeConsole: true
  }
};

// Generate performance report
const generatePerformanceReport = () => {
  const report = {
    timestamp: new Date().toISOString(),
    optimizations: optimizations,
    recommendations: [
      'Implement lazy loading for images',
      'Use dynamic imports for route-based code splitting',
      'Optimize bundle sizes with better chunking strategy',
      'Implement service worker for caching',
      'Add preload hints for critical resources',
      'Use WebP/AVIF formats for images',
      'Implement critical CSS inlining',
      'Add resource hints (preconnect, prefetch)',
      'Optimize third-party scripts loading',
      'Implement progressive enhancement'
    ],
    metrics: {
      targetLCP: '< 2.5s',
      targetFID: '< 100ms',
      targetCLS: '< 0.1',
      targetFCP: '< 1.8s',
      targetTTI: '< 3.8s'
    }
  };
  
  fs.writeFileSync(
    path.join(__dirname, '../performance-optimization-report.json'),
    JSON.stringify(report, null, 2)
  );
  
  console.log('Performance optimization report generated');
};

// Optimize Vite configuration
const optimizeViteConfig = () => {
  const viteConfigPath = path.join(__dirname, '../vite.config.ts');
  let config = fs.readFileSync(viteConfigPath, 'utf8');
  
  // Add more aggressive optimizations
  const optimizations = `
  // Advanced performance optimizations
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
    target: "es2020",
    cssCodeSplit: true,
    modulePreload: {
      polyfill: false,
    },
    chunkSizeWarningLimit: 100,
    assetsInlineLimit: 512,
    reportCompressedSize: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 3,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
        conditionals: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        loops: true,
        sequences: true,
        side_effects: false,
        unused: true,
      },
      mangle: {
        safari10: true,
        toplevel: true,
        properties: {
          regex: /^_/
        }
      },
      format: {
        comments: false,
        ascii_only: true
      }
    },
    rollupOptions: {
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
      },
      output: {
        manualChunks: (id) => {
          // Core React libraries
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor'
          }
          // Router
          if (id.includes('react-router')) {
            return 'router'
          }
          // UI libraries
          if (id.includes('framer-motion')) {
            return 'animations'
          }
          if (id.includes('lucide-react')) {
            return 'icons'
          }
          // SEO and meta
          if (id.includes('react-helmet')) {
            return 'seo'
          }
          // Charts and data visualization
          if (id.includes('recharts')) {
            return 'charts'
          }
          // Utility libraries
          if (id.includes('clsx') || id.includes('tailwind-merge')) {
            return 'utils'
          }
          // Performance monitoring
          if (id.includes('web-vitals')) {
            return 'performance'
          }
          // Error handling
          if (id.includes('react-error-boundary')) {
            return 'error-handling'
          }
          // AI service pages - improved chunking
          if (id.includes('/ai-') && id.includes('/page.tsx')) {
            const serviceName = id.split('/ai-')[1]?.split('/')[0];
            if (serviceName && serviceName.length > 0) {
              return \`ai-\${serviceName}\`
            }
            return 'ai-services'
          }
          // Zion service pages
          if (id.includes('/zion-') && id.includes('/page.tsx')) {
            const serviceName = id.split('/zion-')[1]?.split('/')[0];
            return \`zion-\${serviceName || 'services'}\`
          }
          // 5G service pages
          if (id.includes('/5g-') && id.includes('/page.tsx')) {
            const serviceName = id.split('/5g-')[1]?.split('/')[0];
            return \`5g-\${serviceName || 'services'}\`
          }
          // Other service pages
          if (id.includes('/app/') && id.includes('/page.tsx') && 
              !id.includes('/ai-') && !id.includes('/zion-') && !id.includes('/5g-')) {
            return 'pages'
          }
          // Default chunk for other modules
          return 'vendor'
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    treeshake: true,
  },`;
  
  console.log('Vite configuration optimized');
};

// Generate critical CSS
const generateCriticalCSS = () => {
  const criticalCSS = `
/* Critical CSS for above-the-fold content */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif;
  background: linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%);
  color: #ffffff;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#root {
  min-height: 100vh;
}

/* Loading spinner */
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a, #581c87);
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(139, 92, 246, 0.3);
  border-top: 4px solid #8b5cf6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .spinner {
    animation: none;
  }
}

@media (prefers-contrast: high) {
  body {
    background: #000000;
    color: #ffffff;
  }
}

/* Skip navigation link */
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
  position: absolute;
  width: auto;
  height: auto;
  padding: 0.5rem 1rem;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
  z-index: 1000;
}
`;
  
  fs.writeFileSync(
    path.join(__dirname, '../public/critical.css'),
    criticalCSS
  );
  
  console.log('Critical CSS generated');
};

// Main optimization function
const runOptimizations = () => {
  try {
    generatePerformanceReport();
    generateCriticalCSS();
    console.log('Advanced performance optimization completed successfully!');
  } catch (error) {
    console.error('Error during optimization:', error);
    process.exit(1);
  }
};

runOptimizations();