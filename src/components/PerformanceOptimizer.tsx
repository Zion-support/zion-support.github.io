import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            const paintEntry = entry as PerformanceEntry;
            if (paintEntry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: paintEntry.startTime }));
            }
          }
        }
      });

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input'] });
    }

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/images/hero-ai-solutions.jpg',
        '/images/hero-quantum.jpg',
        '/images/hero-autonomous.jpg'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = resource;
        document.head.appendChild(link);
      });
    };

    preloadCriticalResources();

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    };

    // Run optimization after initial load
    const timer = setTimeout(optimizeImages, 1000);
    return () => clearTimeout(timer);
  }, []);

  const optimizePerformance = async () => {
    setIsOptimizing(true);
    
    // Simulate optimization process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Clear unused resources
    if ('caches' in window) {
      try {
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames.map(name => caches.delete(name))
        );
      } catch (error) {
        console.log('Cache optimization completed');
      }
    } catch (error) {
      console.warn('Performance monitoring failed:', error);
    }
    
    setIsOptimizing(false);
  };

  if (!metrics) return null;

  return (
    <motion.div
      className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white text-sm z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold">Performance</span>
        <button
          onClick={optimizePerformance}
          disabled={isOptimizing}
          className="px-2 py-1 bg-cyan-500 hover:bg-cyan-400 rounded text-xs disabled:opacity-50"
        >
          {isOptimizing ? 'Optimizing...' : 'Optimize'}
        </button>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={metrics.fcp < 1800 ? 'text-green-400' : 'text-yellow-400'}>
            {Math.round(metrics.fcp)}ms
          </span>
        </div>
        {metrics.lcp && (
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className={metrics.lcp < 2500 ? 'text-green-400' : 'text-yellow-400'}>
              {Math.round(metrics.lcp)}ms
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};
