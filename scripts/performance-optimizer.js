#!/usr/bin/env node

/**
 * Performance Optimization Script
 * Automatically optimizes the Next.js application for better performance
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting performance optimization...');

// 1. Optimize Next.js configuration
function optimizeNextConfig() {
  const nextConfigPath = path.join(process.cwd(), 'next.config.js');
  
  if (fs.existsSync(nextConfigPath)) {
    let config = fs.readFileSync(nextConfigPath, 'utf8');
    
    // Add performance optimizations
    const optimizations = `
    // Performance optimizations
    experimental: {
      optimizeCss: true,
      optimizePackageImports: ['@heroicons/react', 'lucide-react'],
    },
    compiler: {
      removeConsole: process.env.NODE_ENV === 'production',
    },
    images: {
      formats: ['image/webp', 'image/avif'],
      minimumCacheTTL: 60,
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    poweredByHeader: false,
    compress: true,
    generateEtags: false,
    `;
    
    if (!config.includes('experimental:')) {
      config = config.replace(
        'module.exports = {',
        `module.exports = {${optimizations}`
      );
    }
    
    fs.writeFileSync(nextConfigPath, config);
    console.log('✅ Next.js configuration optimized');
  }
}

// 2. Optimize package.json scripts
function optimizePackageScripts() {
  const packagePath = path.join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  
  // Add performance scripts
  packageJson.scripts = {
    ...packageJson.scripts,
    'build:optimized': 'NODE_ENV=production next build && npm run optimize:assets',
    'optimize:assets': 'node scripts/optimize-assets.js',
    'analyze:bundle': 'ANALYZE=true next build',
    'lighthouse': 'lighthouse http://localhost:3000 --output=html --output-path=./lighthouse-report.html',
    'perf:audit': 'npm run build && npm run lighthouse',
  };
  
  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
  console.log('✅ Package.json scripts optimized');
}

// 3. Create asset optimization script
function createAssetOptimizer() {
  const assetOptimizerPath = path.join(process.cwd(), 'scripts', 'optimize-assets.js');
  const assetOptimizerContent = `#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🎨 Optimizing assets...');

// Optimize CSS
function optimizeCSS() {
  const cssPath = path.join(process.cwd(), '.next/static/css');
  if (fs.existsSync(cssPath)) {
    const files = fs.readdirSync(cssPath);
    files.forEach(file => {
      if (file.endsWith('.css')) {
        const filePath = path.join(cssPath, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Remove unnecessary whitespace
        content = content.replace(/\\s+/g, ' ');
        content = content.replace(/;\\s*}/g, '}');
        content = content.replace(/,\\s+/g, ',');
        
        fs.writeFileSync(filePath, content);
      }
    });
    console.log('✅ CSS optimized');
  }
}

// Optimize JavaScript bundles
function optimizeJS() {
  const jsPath = path.join(process.cwd(), '.next/static/chunks');
  if (fs.existsSync(jsPath)) {
    const files = fs.readdirSync(jsPath);
    files.forEach(file => {
      if (file.endsWith('.js')) {
        const filePath = path.join(jsPath, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Remove console.log statements in production
        if (process.env.NODE_ENV === 'production') {
          content = content.replace(/console\\.log\\([^)]*\\);?/g, '');
          content = content.replace(/console\\.warn\\([^)]*\\);?/g, '');
          content = content.replace(/console\\.info\\([^)]*\\);?/g, '');
        }
        
        fs.writeFileSync(filePath, content);
      }
    });
    console.log('✅ JavaScript bundles optimized');
  }
}

optimizeCSS();
optimizeJS();
console.log('🎉 Asset optimization complete!');
`;

  fs.writeFileSync(assetOptimizerPath, assetOptimizerContent);
  fs.chmodSync(assetOptimizerPath, '755');
  console.log('✅ Asset optimizer created');
}

// 4. Create performance monitoring component
function createPerformanceMonitor() {
  const monitorPath = path.join(process.cwd(), 'app/components/PerformanceMonitor.tsx');
  const monitorContent = `import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        }
      });
    });

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

    return () => observer.disconnect();
  }, []);

  if (process.env.NODE_ENV !== 'development' || !metrics) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg text-xs font-mono">
      <div className="font-bold mb-2">Performance Metrics</div>
      {metrics.fcp && <div>FCP: {metrics.fcp.toFixed(2)}ms</div>}
      {metrics.lcp && <div>LCP: {metrics.lcp.toFixed(2)}ms</div>}
      {metrics.fid && <div>FID: {metrics.fid.toFixed(2)}ms</div>}
      {metrics.cls && <div>CLS: {metrics.cls.toFixed(4)}</div>}
      {metrics.ttfb && <div>TTFB: {metrics.ttfb.toFixed(2)}ms</div>}
    </div>
  );
}
`;

  fs.writeFileSync(monitorPath, monitorContent);
  console.log('✅ Performance monitor created');
}

// 5. Optimize TypeScript configuration
function optimizeTypeScriptConfig() {
  const tsConfigPath = path.join(process.cwd(), 'tsconfig.json');
  const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'));
  
  // Add performance optimizations
  tsConfig.compilerOptions = {
    ...tsConfig.compilerOptions,
    skipLibCheck: true,
    incremental: true,
    tsBuildInfoFile: '.next/cache/tsconfig.tsbuildinfo',
  };
  
  fs.writeFileSync(tsConfigPath, JSON.stringify(tsConfig, null, 2));
  console.log('✅ TypeScript configuration optimized');
}

// Run all optimizations
optimizeNextConfig();
optimizePackageScripts();
createAssetOptimizer();
createPerformanceMonitor();
optimizeTypeScriptConfig();

console.log('🎉 Performance optimization complete!');
console.log('Run "npm run build:optimized" to build with optimizations');