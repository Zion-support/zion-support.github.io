#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Enhanced Performance Optimization...\n');

// 1. Optimize Vite configuration for better chunking
const viteConfigPath = path.join(__dirname, '..', 'vite.config.ts');
let viteConfig = fs.readFileSync(viteConfigPath, 'utf8');

// Enhanced chunk splitting strategy
const enhancedChunking = `
    manualChunks: (id: string) => {
      // React ecosystem - split more granularly
      if (id.includes("node_modules")) {
        if (id.includes("react") && !id.includes("react-dom")) {
          return "react-core";
        }
        if (id.includes("react-dom")) {
          return "react-dom";
        }
        if (id.includes("react-router")) {
          return "react-router";
        }
        // UI libraries
        if (id.includes("lucide-react")) {
          return "icons";
        }
        if (id.includes("framer-motion")) {
          return "animations";
        }
        // Large libraries
        if (id.includes('recharts')) {
          return 'charts';
        }
        if (id.includes('gray-matter')) {
          return 'content';
        }
        // Other vendor libraries
        return "vendor";
      }
      // App chunks - split by feature
      if (id.includes('/app/')) {
        // AI pages
        if (id.includes('/ai-')) {
          return 'ai-pages';
        }
        // 5G pages
        if (id.includes('/5g-')) {
          return '5g-pages';
        }
        // Main app pages
        if (id.includes('/page.tsx') && !id.includes('/ai-') && !id.includes('/5g-')) {
          return 'main-pages';
        }
        // Components
        if (id.includes('/components/')) {
          return 'components';
        }
        return 'app';
      }
      return undefined;
    },`;

// Replace the existing manualChunks configuration
viteConfig = viteConfig.replace(
  /manualChunks: \(id: string\) => \{[\s\S]*?\},/,
  enhancedChunking
);

// Add more performance optimizations
const additionalOptimizations = `
  // Enhanced performance optimizations
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
    cssCodeSplit: true,
    modulePreload: {
      polyfill: false,
    },
    // Performance optimizations
    chunkSizeWarningLimit: 200, // Increased threshold
    assetsInlineLimit: 1024, // Reduced for better chunking
    reportCompressedSize: true,
    target: 'es2020',
    treeshake: {
      moduleSideEffects: false,
    },
    // Enhanced terser options
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: [
          "console.log",
          "console.info", 
          "console.debug",
          "console.warn",
        ],
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
          regex: /^_/,
        },
      },
      format: {
        comments: false,
        ascii_only: true,
      },
    },`;

// Update the build configuration
viteConfig = viteConfig.replace(
  /build: \{[\s\S]*?\},/,
  additionalOptimizations
);

fs.writeFileSync(viteConfigPath, viteConfig);
console.log('✅ Enhanced Vite configuration updated');

// 2. Create optimized CSS utilities
const cssOptimizations = `
/* Performance-optimized CSS utilities */
.performance-optimized {
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

.gpu-accelerated {
  transform: translate3d(0, 0, 0);
  will-change: transform;
}

.lazy-load {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.lazy-load.loaded {
  opacity: 1;
}

/* Critical CSS for above-the-fold content */
.critical-css {
  font-display: swap;
  font-optical-sizing: auto;
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`;

const cssPath = path.join(__dirname, '..', 'index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');
cssContent += cssOptimizations;
fs.writeFileSync(cssPath, cssContent);
console.log('✅ CSS optimizations added');

// 3. Create performance monitoring utilities
const performanceUtils = `// Performance monitoring utilities
export const performanceMonitor = {
  // Measure component render time
  measureRender: (componentName: string, renderFn: () => void) => {
    const start = performance.now();
    renderFn();
    const end = performance.now();
    console.log(\`\${componentName} rendered in \${end - start}ms\`);
  },

  // Measure async operations
  measureAsync: async (operationName: string, operation: () => Promise<any>) => {
    const start = performance.now();
    const result = await operation();
    const end = performance.now();
    console.log(\`\${operationName} completed in \${end - start}ms\`);
    return result;
  },

  // Memory usage monitoring
  getMemoryUsage: () => {
    if ('memory' in performance) {
      return {
        used: (performance as any).memory.usedJSHeapSize,
        total: (performance as any).memory.totalJSHeapSize,
        limit: (performance as any).memory.jsHeapSizeLimit
      };
    }
    return null;
  },

  // Bundle size monitoring
  getBundleSize: () => {
    const scripts = document.querySelectorAll('script[src]');
    let totalSize = 0;
    scripts.forEach(script => {
      const src = script.getAttribute('src');
      if (src && src.includes('assets')) {
        // This would need to be implemented with actual size measurement
        totalSize += 1; // Placeholder
      }
    });
    return totalSize;
  }
};

// Lazy loading utility
export const lazyLoad = (importFn: () => Promise<any>) => {
  return React.lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(importFn());
      }, 100); // Small delay to prevent blocking
    });
  });
};

// Image optimization utility
export const optimizeImage = (src: string, width?: number, quality: number = 80) => {
  if (src.startsWith('http')) {
    return src; // External images
  }
  
  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  params.set('q', quality.toString());
  
  return \`\${src}?\${params.toString()}\`;
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalResources = [
    '/assets/css/index.css',
    '/assets/js/react-core.js',
    '/assets/js/app.js'
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'script';
    document.head.appendChild(link);
  });
};
`;

const utilsPath = path.join(__dirname, '..', 'utils', 'performanceUtils.ts');
fs.writeFileSync(utilsPath, performanceUtils);
console.log('✅ Performance utilities created');

// 4. Create optimized component loader
const componentLoader = `// Optimized component loader with error boundaries
import React, { Suspense, ComponentType } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface OptimizedLoaderProps {
  component: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
  errorFallback?: React.ReactNode;
}

const ErrorFallback: React.FC<{ error: Error; resetErrorBoundary: () => void }> = ({ 
  error, 
  resetErrorBoundary 
}) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="text-center">
      <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
      <p className="text-gray-300 mb-4">{error.message}</p>
      <button 
        onClick={resetErrorBoundary}
        className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);

const LoadingFallback: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="text-center">
      <div className="cyber-loading mx-auto mb-4"></div>
      <div className="text-white text-xl">Loading...</div>
    </div>
  </div>
);

export const OptimizedLoader: React.FC<OptimizedLoaderProps> = ({ 
  component, 
  fallback = <LoadingFallback />,
  errorFallback = <ErrorFallback error={new Error('Component failed to load')} resetErrorBoundary={() => {}} />
}) => {
  const LazyComponent = React.lazy(component);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={fallback}>
        <LazyComponent />
      </Suspense>
    </ErrorBoundary>
  );
};
`;

const loaderPath = path.join(__dirname, '..', 'utils', 'componentLoader.tsx');
fs.writeFileSync(loaderPath, componentLoader);
console.log('✅ Optimized component loader created');

// 5. Create bundle analyzer script
const bundleAnalyzer = `#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('📊 Analyzing bundle size...\n');

const distPath = path.join(__dirname, '..', 'dist');
const assetsPath = path.join(distPath, 'assets');

if (!fs.existsSync(assetsPath)) {
  console.log('❌ Dist folder not found. Run build first.');
  process.exit(1);
}

const files = fs.readdirSync(assetsPath);
const jsFiles = files.filter(file => file.endsWith('.js'));
const cssFiles = files.filter(file => file.endsWith('.css'));

let totalSize = 0;
let gzipSize = 0;

console.log('📦 JavaScript Files:');
jsFiles.forEach(file => {
  const filePath = path.join(assetsPath, file);
  const stats = fs.statSync(filePath);
  const size = stats.size;
  const gzip = Math.round(size * 0.3); // Approximate gzip size
  totalSize += size;
  gzipSize += gzip;
  
  console.log(\`  \${file}: \${(size / 1024).toFixed(2)}KB (gzip: ~\${gzip}KB)\`);
});

console.log('\\n🎨 CSS Files:');
cssFiles.forEach(file => {
  const filePath = path.join(assetsPath, file);
  const stats = fs.statSync(filePath);
  const size = stats.size;
  const gzip = Math.round(size * 0.2); // Approximate gzip size
  totalSize += size;
  gzipSize += gzip;
  
  console.log(\`  \${file}: \${(size / 1024).toFixed(2)}KB (gzip: ~\${gzip}KB)\`);
});

console.log(\`\\n📈 Total Bundle Size: \${(totalSize / 1024).toFixed(2)}KB\`);
console.log(\`📦 Estimated Gzip Size: \${gzip}KB\`);

// Performance recommendations
console.log('\\n💡 Performance Recommendations:');
if (totalSize > 500000) { // 500KB
  console.log('  ⚠️  Bundle size is large. Consider code splitting.');
}
if (jsFiles.length < 5) {
  console.log('  ⚠️  Consider splitting vendor chunks for better caching.');
}
console.log('  ✅ Use dynamic imports for non-critical components');
console.log('  ✅ Implement lazy loading for images');
console.log('  ✅ Consider using a CDN for static assets');
`;

const analyzerPath = path.join(__dirname, 'bundle-analyzer.cjs');
fs.writeFileSync(analyzerPath, bundleAnalyzer);
fs.chmodSync(analyzerPath, '755');
console.log('✅ Bundle analyzer created');

// 6. Update package.json with new scripts
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

packageJson.scripts = {
  ...packageJson.scripts,
  'analyze:bundle': 'node scripts/bundle-analyzer.cjs',
  'optimize:performance': 'node scripts/performance-optimizer-enhanced.cjs',
  'build:analyze': 'npm run build && npm run analyze:bundle',
  'perf:check': 'npm run optimize:performance && npm run build:analyze'
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('✅ Package.json scripts updated');

console.log('\n🎉 Enhanced Performance Optimization Complete!');
console.log('\n📋 Next Steps:');
console.log('  1. Run: npm run build');
console.log('  2. Run: npm run analyze:bundle');
console.log('  3. Check bundle sizes and optimize further if needed');
console.log('  4. Test performance improvements');