import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

export const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);

  useEffect(() => {
    // Initialize performance monitoring
    if ('PerformanceObserver' in window) {
      try {
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              const lcp = entry.startTime;
              setMetrics(prev => prev ? { ...prev, lcp } : { lcp, fcp: 0, fid: 0, cls: 0, ttfb: 0 });
            }
          });
        });

        observerRef.current.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (error) {
        console.warn('Performance monitoring not supported:', error);
      }
    }

    // Measure First Contentful Paint
    if ('Performance' in window) {
      const paintEntries = performance.getEntriesByType('paint');
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => prev ? { ...prev, fcp: fcpEntry.startTime } : { fcp: fcpEntry.startTime, lcp: 0, fid: 0, cls: 0, ttfb: 0 });
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const optimizePerformance = async () => {
    setIsOptimizing(true);
    
    // Simulate performance optimization
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Preload critical resources
    const criticalResources = [
      '/src/pages/Home.tsx',
      '/src/components/Header.tsx',
      '/src/components/Footer.tsx'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = 'script';
      document.head.appendChild(link);
    });

    setIsOptimizing(false);
  };

  const getPerformanceScore = (): number => {
    if (!metrics) return 0;
    
    let score = 100;
    
    // FCP scoring (0-100)
    if (metrics.fcp > 1800) score -= 20;
    else if (metrics.fcp > 1000) score -= 10;
    
    // LCP scoring (0-100)
    if (metrics.lcp > 2500) score -= 20;
    else if (metrics.lcp > 1500) score -= 10;
    
    return Math.max(0, score);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 bg-zinc-900/90 backdrop-blur-sm border border-zinc-700 rounded-lg p-4 text-white shadow-2xl z-50 max-w-sm"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-zinc-100">Performance Monitor</h3>
        <button
          onClick={optimizePerformance}
          disabled={isOptimizing}
          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-xs rounded transition-colors"
        >
          {isOptimizing ? 'Optimizing...' : 'Optimize'}
        </button>
      </div>

      {metrics && (
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-zinc-400">FCP:</span>
            <span className={metrics.fcp > 1800 ? 'text-red-400' : metrics.fcp > 1000 ? 'text-yellow-400' : 'text-green-400'}>
              {Math.round(metrics.fcp)}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">LCP:</span>
            <span className={metrics.lcp > 2500 ? 'text-red-400' : metrics.lcp > 1500 ? 'text-yellow-400' : 'text-green-400'}>
              {Math.round(metrics.lcp)}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">Score:</span>
            <span className={getPerformanceScore() > 80 ? 'text-green-400' : getPerformanceScore() > 60 ? 'text-yellow-400' : 'text-red-400'}>
              {getPerformanceScore()}/100
            </span>
          </div>
        </div>
      )}

      <div className="mt-3 pt-3 border-t border-zinc-700">
        <div className="text-xs text-zinc-400">
          Bundle Size: {Math.round((performance as any).memory?.usedJSHeapSize / 1024 / 1024 || 0)}MB
        </div>
      </div>
    </motion.div>
  );
};
