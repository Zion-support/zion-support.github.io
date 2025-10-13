#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Performance optimization script
console.log('🚀 Starting performance optimization...');

// 1. Optimize Vite configuration
const viteConfigPath = path.join(process.cwd(), 'vite.config.ts');
if (fs.existsSync(viteConfigPath)) {
  console.log('📦 Optimizing Vite configuration...');
  
  const viteConfig = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@app': resolve(__dirname, './app'),
      '@components': resolve(__dirname, './app/components'),
      '@utils': resolve(__dirname, './app/utils'),;
},;
},
  build: {
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@heroicons/react', 'lucide-react'],;
},;
},;
},
    chunkSizeWarningLimit: 1000,;
},
  server: {
    port: 3000,
    open: true,;
},
  preview: {
    port: 4173,
    open: true,;
},
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],;
},;
});`;

  fs.writeFileSync(viteConfigPath, viteConfig);
  console.log('✅ Vite configuration optimized');
}

// 2. Create performance monitoring component
const performanceMonitorPath = path.join(process.cwd(), 'app/components/PerformanceMonitor.tsx');
const performanceMonitor = `import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,;
});

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
          } else if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
          } else if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          } else if (entry.entryType === 'layout-shift') {
            setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }));
          }
        }
      });

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

      // Monitor TTFB
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }

      return () => observer.disconnect();
    }
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <h3 className="font-bold mb-2">Performance Metrics</h3>
      <div className="space-y-1">
        <div>FCP: {metrics.fcp ? \`\${metrics.fcp.toFixed(2)}ms\` : 'Loading...'}</div>
        <div>LCP: {metrics.lcp ? \`\${metrics.lcp.toFixed(2)}ms\` : 'Loading...'}</div>
        <div>FID: {metrics.fid ? \`\${metrics.fid.toFixed(2)}ms\` : 'Loading...'}</div>
        <div>CLS: {metrics.cls ? \`\${metrics.cls.toFixed(4)}\` : 'Loading...'}</div>
        <div>TTFB: {metrics.ttfb ? \`\${metrics.ttfb.toFixed(2)}ms\` : 'Loading...'}</div>
      </div>
    </div>;
);
};

export default PerformanceMonitor;`;

fs.writeFileSync(performanceMonitorPath, performanceMonitor);
console.log('✅ Performance monitor component created');

// 3. Create image optimization utility
const imageOptimizerPath = path.join(process.cwd(), 'app/utils/imageOptimizer.ts');
const imageOptimizer = `export interface ImageOptimizationOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpeg' | 'png';
  lazy?: boolean;
}

export const optimizeImage = (
  src: string,
  options: ImageOptimizationOptions ={true} ): string => {
  const { width, height, quality = 80, format = 'webp', lazy = true } = options;
  
  // In a real implementation, you would use a service like Cloudinary or ImageKit
  // For now, we'll return the original src with query parameters
  const params = new URLSearchParams();
  
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  if (quality) params.set('q', quality.toString());
  if (format) params.set('f', format);
  if (lazy) params.set('lazy', 'true');
  
  const separator = src.includes('?') ? '&' : '?';
  return \`\${src}\${separator}\${params.toString()}\`;
};

export const generateResponsiveImages = (
  src: string,
  sizes: number[] = [320, 640, 768, 1024, 1280, 1920];
): string => {
  return sizes
    .map(size => \`\${optimizeImage(src, { width: size })} \${size}w\`)
    .join(', ');
};`;

fs.writeFileSync(imageOptimizerPath, imageOptimizer);
console.log('✅ Image optimization utility created');

// 4. Create bundle analyzer script
const bundleAnalyzerPath = path.join(process.cwd(), 'scripts/analyze-bundle.js');
const bundleAnalyzer = `#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('📊 Analyzing bundle size...');

const distPath = path.join(process.cwd(), 'dist');
if (!fs.existsSync(distPath)) {
  console.log('❌ Dist folder not found. Run npm run build first.');
  process.exit(1);
}

const analyzeDirectory = (dir: string, prefix = '') => {
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      console.log(\`\${prefix}📁 \${item}/\`);
      analyzeDirectory(fullPath, \`\${prefix}  \`);
    } else {
      const size = stat.size;
      const sizeKB = (size / 1024).toFixed(2);
      const sizeMB = (size / (1024 * 1024)).toFixed(2);
      const sizeStr = size > 1024 * 1024 ? \`\${sizeMB}MB\` : \`\${sizeKB}KB\`;
      console.log(\`\${prefix}📄 \${item} (\${sizeStr})\`);
    }
  });
};

analyzeDirectory(distPath);
console.log('✅ Bundle analysis complete');`;

fs.writeFileSync(bundleAnalyzerPath, bundleAnalyzer);
fs.chmodSync(bundleAnalyzerPath, '755');
console.log('✅ Bundle analyzer script created');

// 5. Update package.json with performance scripts
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  packageJson.scripts = {
    ...packageJson.scripts,
    'analyze:bundle': 'node scripts/analyze-bundle.js',
    'perf:monitor': 'npm run dev -- --open',
    'perf:build': 'npm run build && npm run analyze:bundle',;
};
  
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('✅ Package.json updated with performance scripts');
}

console.log('🎉 Performance optimization complete!');
console.log('📝 Next steps:');
console.log('  1. Run npm run build to test optimizations');
console.log('  2. Run npm run analyze:bundle to analyze bundle size');
console.log('  3. Add PerformanceMonitor component to your app for real-time metrics');