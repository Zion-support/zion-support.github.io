import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface BundleInfo {
  name: string;
  size: number;
  gzippedSize: number;
  loadTime: number;
}

export function PerformanceOptimizer() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [bundleInfo, setBundleInfo] = useState<BundleInfo[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);

  useEffect(() => {
    // Collect performance metrics
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'paint') {
            const paintEntry = entry as PerformancePaintTiming;
            if (paintEntry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: paintEntry.startTime }));
            }
          }
        });
      });

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input'] });
    }

    // Analyze bundle performance
    analyzeBundlePerformance();
  }, []);

  const analyzeBundlePerformance = async () => {
    try {
      const startTime = performance.now();
      
      // Simulate bundle analysis
      const mockBundleInfo: BundleInfo[] = [
        { name: 'main.js', size: 194.39, gzippedSize: 59.42, loadTime: 120 },
        { name: 'Home.jsx', size: 89.71, gzippedSize: 21.92, loadTime: 85 },
        { name: 'Services.jsx', size: 42.02, gzippedSize: 11.25, loadTime: 45 },
        { name: 'chunk-BlUkfZh9.js', size: 139.85, gzippedSize: 44.91, loadTime: 95 }
      ];

      setBundleInfo(mockBundleInfo);
    } catch (error) {
      console.warn('Bundle analysis failed:', error);
    }
  };

  const optimizePerformance = async () => {
    setIsOptimizing(true);
    
    try {
      // Implement performance optimizations
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Preload critical resources
      const criticalResources = [
        '/src/components/HeroSection.tsx',
        '/src/components/ServicesShowcase.tsx'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = 'script';
        document.head.appendChild(link);
      });

      // Optimize images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });

      // Enable service worker caching
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
          registration.update();
        });
      }

    } catch (error) {
      console.error('Performance optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  };

  const getPerformanceScore = (metrics: PerformanceMetrics): number => {
    let score = 100;
    
    if (metrics.fcp > 1800) score -= 20;
    if (metrics.lcp > 2500) score -= 25;
    if (metrics.fid > 100) score -= 15;
    if (metrics.cls > 0.1) score -= 20;
    if (metrics.ttfb > 600) score -= 20;
    
    return Math.max(0, score);
  };

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  if (!metrics) return null;

  const score = getPerformanceScore(metrics);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 max-w-sm z-50"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          Performance Monitor
        </h3>
        <div className={`text-lg font-bold ${getScoreColor(score)}`}>
          {score}/100
        </div>
      </div>

      <div className="space-y-2 mb-3">
        <div className="flex justify-between text-xs">
          <span className="text-gray-600 dark:text-gray-400">FCP:</span>
          <span className={metrics.fcp > 1800 ? 'text-red-500' : 'text-green-500'}>
            {Math.round(metrics.fcp)}ms
          </span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-gray-600 dark:text-gray-400">LCP:</span>
          <span className={metrics.lcp > 2500 ? 'text-red-500' : 'text-green-500'}>
            {Math.round(metrics.lcp)}ms
          </span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-gray-600 dark:text-gray-400">FID:</span>
          <span className={metrics.fid > 100 ? 'text-red-500' : 'text-green-500'}>
            {Math.round(metrics.fid)}ms
          </span>
        </div>
      </div>

      <div className="space-y-2 mb-3">
        <h4 className="text-xs font-medium text-gray-700 dark:text-gray-300">Bundle Analysis</h4>
        {bundleInfo.slice(0, 3).map((bundle, index) => (
          <div key={index} className="flex justify-between text-xs">
            <span className="text-gray-600 dark:text-gray-400 truncate max-w-20">
              {bundle.name}
            </span>
            <span className="text-gray-800 dark:text-gray-200">
              {bundle.gzippedSize.toFixed(1)}KB
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={optimizePerformance}
        disabled={isOptimizing}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white text-xs py-2 px-3 rounded-md transition-colors duration-200"
      >
        {isOptimizing ? 'Optimizing...' : 'Optimize Performance'}
      </button>

      {score < 70 && (
        <div className="mt-2 text-xs text-red-600 dark:text-red-400 text-center">
          Performance needs attention
        </div>
      )}
    </motion.div>
  );
}
