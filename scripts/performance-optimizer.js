#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Performance Optimization Script
 * Adds lazy loading, code splitting, and other performance improvements
 */

console.log('🚀 Starting performance optimization...');

// 1. Create a lazy loading utility
const lazyLoadingUtil = `
// Lazy loading utility for better performance
import { lazy, Suspense } from 'react';

export const createLazyComponent = (importFunc, fallback = null) => {
  const LazyComponent = lazy(importFunc);
  
  return (props) => (
    <Suspense fallback={fallback || <div className="animate-pulse bg-gray-200 h-32 rounded flex items-center justify-center">
      <div className="text-gray-500">Loading...</div>
    </div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Preload critical components
export const preloadComponent = (importFunc) => {
  return () => {
    importFunc();
  };
};
`;

// 2. Create performance monitoring utility
const performanceMonitor = `
// Performance monitoring utility
export const performanceMonitor = {
  measureRender: (componentName, renderFn) => {
    const start = performance.now();
    const result = renderFn();
    const end = performance.now();
    console.log(\`\${componentName} render time: \${end - start}ms\`);
    return result;
  },
  
  measureAsync: async (operationName, asyncFn) => {
    const start = performance.now();
    const result = await asyncFn();
    const end = performance.now();
    console.log(\`\${operationName} execution time: \${end - start}ms\`);
    return result;
  },
  
  measureWebVitals: () => {
    if (typeof window !== 'undefined' && 'web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }
  }
};
`;

// 3. Create image optimization utility
const imageOptimizer = `
// Image optimization utility
export const optimizeImage = (src, options = {}) => {
  const {
    width = 800,
    height = 600,
    quality = 80,
    format = 'webp',
    lazy = true
  } = options;
  
  const optimizedSrc = \`\${src}?w=\${width}&h=\${height}&q=\${quality}&f=\${format}\`;
  
  return {
    src: optimizedSrc,
    loading: lazy ? 'lazy' : 'eager',
    decoding: 'async',
    ...options
  };
};

// Lazy image component
export const LazyImage = ({ src, alt, ...props }) => {
  const optimizedProps = optimizeImage(src, props);
  
  return (
    <img
      {...optimizedProps}
      alt={alt}
      onLoad={(e) => {
        e.target.classList.add('loaded');
      }}
      className={\`transition-opacity duration-300 opacity-0 \${props.className || ''}\`}
    />
  );
};
`;

// 4. Create bundle analyzer configuration
const bundleAnalyzerConfig = `
// Bundle analyzer configuration for better code splitting
export const bundleAnalyzerConfig = {
  analyzerMode: 'static',
  openAnalyzer: false,
  generateStatsFile: true,
  statsFilename: 'bundle-stats.json',
  reportFilename: 'bundle-report.html',
  defaultSizes: 'gzip',
  excludeAssets: ['node_modules'],
  chunkFilter: (chunk) => {
    // Exclude vendor chunks from analysis
    return !chunk.name.includes('vendor');
  }
};
`;

// Write the utility files
const utilsDir = path.join(__dirname, '..', 'src', 'utils');
if (!fs.existsSync(utilsDir)) {
  fs.mkdirSync(utilsDir, { recursive: true });
}

fs.writeFileSync(path.join(utilsDir, 'lazy-loading.ts'), lazyLoadingUtil);
fs.writeFileSync(path.join(utilsDir, 'performance-monitor.ts'), performanceMonitor);
fs.writeFileSync(path.join(utilsDir, 'image-optimizer.ts'), imageOptimizer);
fs.writeFileSync(path.join(utilsDir, 'bundle-analyzer.ts'), bundleAnalyzerConfig);

console.log('✅ Performance optimization utilities created');

// 5. Update package.json with performance scripts
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Add performance scripts
packageJson.scripts = {
  ...packageJson.scripts,
  'perf:analyze': 'npm run build && npx webpack-bundle-analyzer dist/stats.json',
  'perf:lighthouse': 'lighthouse http://localhost:3000 --output=html --output-path=./lighthouse-report.html',
  'perf:audit': 'npm run perf:lighthouse && npm run perf:analyze',
  'perf:monitor': 'node scripts/performance-monitor.js',
  'perf:optimize': 'npm run build:analyze && npm run perf:audit'
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('✅ Package.json updated with performance scripts');

// 6. Create performance monitoring script
const performanceMonitorScript = `
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('📊 Performance monitoring started...');

// Monitor bundle size
const distPath = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distPath)) {
  const files = fs.readdirSync(distPath);
  let totalSize = 0;
  
  files.forEach(file => {
    const filePath = path.join(distPath, file);
    const stats = fs.statSync(filePath);
    if (stats.isFile()) {
      totalSize += stats.size;
      console.log(\`📁 \${file}: \${(stats.size / 1024).toFixed(2)} KB\`);
    }
  });
  
  console.log(\`📦 Total bundle size: \${(totalSize / 1024).toFixed(2)} KB\`);
  
  // Check if bundle size is within acceptable limits
  const maxSize = 500 * 1024; // 500KB
  if (totalSize > maxSize) {
    console.warn('⚠️  Bundle size exceeds recommended limit of 500KB');
  } else {
    console.log('✅ Bundle size is within acceptable limits');
  }
} else {
  console.log('❌ Dist folder not found. Run "npm run build" first.');
}
`;

fs.writeFileSync(path.join(__dirname, 'performance-monitor.js'), performanceMonitorScript);

console.log('✅ Performance monitoring script created');

// 7. Create .htaccess for better caching
const htaccessContent = `
# Performance optimizations
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType font/woff "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/plain
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/xml
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE application/xml
  AddOutputFilterByType DEFLATE application/xhtml+xml
  AddOutputFilterByType DEFLATE application/rss+xml
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Security headers
<IfModule mod_headers.c>
  Header always set X-Content-Type-Options nosniff
  Header always set X-Frame-Options DENY
  Header always set X-XSS-Protection "1; mode=block"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
`;

fs.writeFileSync(path.join(__dirname, '..', '.htaccess'), htaccessContent);

console.log('✅ .htaccess file created for better caching');

console.log('🎉 Performance optimization completed successfully!');
console.log('');
console.log('Next steps:');
console.log('1. Run "npm run build" to test the optimizations');
console.log('2. Run "npm run perf:audit" to analyze performance');
console.log('3. Check the generated reports in the dist folder');