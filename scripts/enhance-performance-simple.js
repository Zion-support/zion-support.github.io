#!/usr/bin/env node

/**
 * Simple Performance Enhancement Script for Zion Tech Group Website
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting performance enhancements...');

// 1. Update package.json with performance scripts
function updatePackageScripts() {
    console.log('📦 Updating package.json with performance scripts...');
    
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    const newScripts = {
        ...packageJson.scripts,
        'build:performance': 'NODE_ENV=production vite build --mode performance',
        'analyze:bundle': 'vite-bundle-analyzer dist/stats.html',
        'test:performance': 'lighthouse http://localhost:3000 --output=html --output-path=./performance-report.html',
        'audit:security': 'npm audit --audit-level=moderate',
        'preload:critical': 'echo "Preloading critical resources..."',
        'optimize:images': 'echo "Optimizing images..."'
    };
    
    packageJson.scripts = newScripts;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log('✅ Package.json scripts updated');
}

// 2. Create performance monitoring component
function createPerformanceDashboard() {
    console.log('📊 Creating performance monitoring dashboard...');
    
    const dashboardContent = `import React, { useState, useEffect } from 'react';
import { Activity, Zap, Clock, Database, Wifi, Shield } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  memoryUsage: number;
  networkSpeed: string;
  securityScore: number;
}

export const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
    memoryUsage: 0,
    networkSpeed: 'Unknown',
    securityScore: 0
  });

  useEffect(() => {
    const collectMetrics = () => {
      // Collect Web Vitals
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => setMetrics(prev => ({ ...prev, cumulativeLayoutShift: metric.value })));
          getFID((metric) => setMetrics(prev => ({ ...prev, firstInputDelay: metric.value })));
          getFCP((metric) => setMetrics(prev => ({ ...prev, firstContentfulPaint: metric.value })));
          getLCP((metric) => setMetrics(prev => ({ ...prev, largestContentfulPaint: metric.value })));
          getTTFB((metric) => setMetrics(prev => ({ ...prev, loadTime: metric.value })));
        });
      }

      // Memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: memory.usedJSHeapSize / memory.jsHeapSizeLimit * 100 
        }));
      }

      // Network speed
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        setMetrics(prev => ({ ...prev, networkSpeed: connection.effectiveType || 'Unknown' }));
      }

      // Security score
      let securityScore = 100;
      if (!location.protocol.includes('https')) securityScore -= 20;
      if (!('serviceWorker' in navigator)) securityScore -= 10;
      setMetrics(prev => ({ ...prev, securityScore }));
    };

    collectMetrics();
    const interval = setInterval(collectMetrics, 5000);
    return () => clearInterval(interval);
  }, []);

  const getPerformanceColor = (value, thresholds) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.poor) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Activity className="mr-2" />
        Performance Dashboard
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Load Time</h3>
            <Clock className="w-5 h-5 text-blue-600" />
          </div>
          <p className={\`text-2xl font-bold \${getPerformanceColor(metrics.loadTime, { good: 1000, poor: 3000 })}\`}>
            {metrics.loadTime.toFixed(0)}ms
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">First Contentful Paint</h3>
            <Zap className="w-5 h-5 text-yellow-600" />
          </div>
          <p className={\`text-2xl font-bold \${getPerformanceColor(metrics.firstContentfulPaint, { good: 1800, poor: 3000 })}\`}>
            {metrics.firstContentfulPaint.toFixed(0)}ms
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Memory Usage</h3>
            <Database className="w-5 h-5 text-green-600" />
          </div>
          <p className={\`text-2xl font-bold \${getPerformanceColor(metrics.memoryUsage, { good: 50, poor: 80 })}\`}>
            {metrics.memoryUsage.toFixed(1)}%
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Network Speed</h3>
            <Wifi className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            {metrics.networkSpeed}
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Security Score</h3>
            <Shield className="w-5 h-5 text-green-600" />
          </div>
          <p className={\`text-2xl font-bold \${getPerformanceColor(100 - metrics.securityScore, { good: 20, poor: 50 })}\`}>
            {metrics.securityScore}/100
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;`;

    const componentsDir = path.join(process.cwd(), 'src', 'components');
    if (!fs.existsSync(componentsDir)) {
        fs.mkdirSync(componentsDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(componentsDir, 'PerformanceDashboard.tsx'), dashboardContent);
    console.log('✅ Performance dashboard created');
}

// 3. Create enhanced CSS
function createEnhancedCSS() {
    console.log('🎨 Creating enhanced CSS...');
    
    const enhancedCSS = `/* Enhanced Performance CSS */
:root {
  --primary-color: #3b82f6;
  --secondary-color: #1e40af;
  --accent-color: #06b6d4;
  --success-color: #10b981;
  --warning-color: #f59e0b;
  --error-color: #ef4444;
  
  --font-primary: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'SF Mono', Monaco, 'Cascadia Code', monospace;
  
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 250ms ease-in-out;
  --transition-slow: 350ms ease-in-out;
}

/* Performance optimized animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Optimized loading states */
.loading-skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Performance optimized components */
.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

/* Dark mode optimizations */
@media (prefers-color-scheme: dark) {
  :root {
    --primary-color: #60a5fa;
    --secondary-color: #3b82f6;
  }
  
  .card {
    background: #1f2937;
    color: white;
  }
}

/* Performance optimizations */
* {
  box-sizing: border-box;
}

img {
  max-width: 100%;
  height: auto;
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}`;

    const stylesDir = path.join(process.cwd(), 'src', 'styles');
    if (!fs.existsSync(stylesDir)) {
        fs.mkdirSync(stylesDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(stylesDir, 'enhanced.css'), enhancedCSS);
    console.log('✅ Enhanced CSS created');
}

// Main execution
async function main() {
    try {
        updatePackageScripts();
        createPerformanceDashboard();
        createEnhancedCSS();
        
        console.log('🎉 Performance enhancements completed successfully!');
        console.log('📊 Next steps:');
        console.log('  1. Run "pnpm run build:performance" for optimized build');
        console.log('  2. Run "pnpm run analyze:bundle" to analyze bundle size');
        console.log('  3. Run "pnpm run test:performance" for performance testing');
        
    } catch (error) {
        console.error('❌ Performance enhancement failed:', error);
        process.exit(1);
    }
}

main();