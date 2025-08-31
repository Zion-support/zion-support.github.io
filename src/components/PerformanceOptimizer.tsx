import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableLazyLoading?: boolean;
  enableImageOptimization?: boolean;
  enablePerformanceMonitoring?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableLazyLoading = true,
  enableImageOptimization = true,
  enablePerformanceMonitoring = true,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (!enablePerformanceMonitoring || !window.performance) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    const layoutShiftEntries = performance.getEntriesByType('layout-shift');

    const metrics: PerformanceMetrics = {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
      largestContentfulPaint: 0,
      cumulativeLayoutShift: layoutShiftEntries.reduce((sum, entry: any) => sum + entry.value, 0),
    };

    // Measure Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        metrics.largestContentfulPaint = lastEntry.startTime;
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }

    setMetrics(metrics);
  }, [enablePerformanceMonitoring]);

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" for images below the fold
      if (img.getBoundingClientRect().top > window.innerHeight) {
        img.loading = 'lazy';
      }

      // Add srcset for responsive images
      if (!img.srcset) {
        const src = img.src;
        const baseName = src.substring(0, src.lastIndexOf('.'));
        const extension = src.substring(src.lastIndexOf('.'));
        img.srcset = `${baseName}-300${extension} 300w, ${baseName}-600${extension} 600w, ${baseName}-900${extension} 900w`;
        img.sizes = '(max-width: 600px) 300px, (max-width: 900px) 600px, 900px';
      }
    });
  }, [enableImageOptimization]);

  // Lazy loading implementation
  const setupLazyLoading = useCallback(() => {
    if (!enableLazyLoading || !('IntersectionObserver' in window)) return;

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        }
      });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach((img) => imageObserver.observe(img));
  }, [enableLazyLoading]);

  // Performance optimization effects
  useEffect(() => {
    if (enablePerformanceMonitoring) {
      measurePerformance();
    }

    if (enableImageOptimization) {
      optimizeImages();
    }

    if (enableLazyLoading) {
      setupLazyLoading();
    }
  }, [enablePerformanceMonitoring, enableImageOptimization, enableLazyLoading, measurePerformance, optimizeImages, setupLazyLoading]);

  // Performance dashboard
  const PerformanceDashboard = useMemo(() => {
    if (!metrics || !enablePerformanceMonitoring) return null;

    const getPerformanceScore = (): number => {
      let score = 100;
      
      if (metrics.loadTime > 3000) score -= 20;
      if (metrics.firstContentfulPaint > 1800) score -= 15;
      if (metrics.largestContentfulPaint > 2500) score -= 15;
      if (metrics.cumulativeLayoutShift > 0.1) score -= 10;
      
      return Math.max(0, score);
    };

    const score = getPerformanceScore();
    const scoreColor = score >= 90 ? 'text-green-500' : score >= 70 ? 'text-yellow-500' : 'text-red-500';

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-4 right-4 bg-zion-slate-dark/95 backdrop-blur-sm border border-zion-purple/20 rounded-lg p-4 shadow-xl z-50 max-w-sm"
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-white">Performance Monitor</h3>
          <div className={`text-lg font-bold ${scoreColor}`}>{score}/100</div>
        </div>
        
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-zion-slate-light">Load Time:</span>
            <span className={metrics.loadTime > 3000 ? 'text-red-400' : 'text-green-400'}>
              {metrics.loadTime.toFixed(0)}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-zion-slate-light">FCP:</span>
            <span className={metrics.firstContentfulPaint > 1800 ? 'text-red-400' : 'text-green-400'}>
              {metrics.firstContentfulPaint.toFixed(0)}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-zion-slate-light">LCP:</span>
            <span className={metrics.largestContentfulPaint > 2500 ? 'text-red-400' : 'text-green-400'}>
              {metrics.largestContentfulPaint.toFixed(0)}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-zion-slate-light">CLS:</span>
            <span className={metrics.cumulativeLayoutShift > 0.1 ? 'text-red-400' : 'text-green-400'}>
              {metrics.cumulativeLayoutShift.toFixed(3)}
            </span>
          </div>
        </div>
      </motion.div>
    );
  }, [metrics, enablePerformanceMonitoring]);

  return (
    <>
      {children}
      {PerformanceDashboard}
      
      {/* Performance optimization indicators */}
      {isOptimizing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed top-4 right-4 bg-zion-cyan text-zion-slate-dark px-3 py-2 rounded-lg text-sm font-medium shadow-lg z-50"
        >
          🚀 Optimizing Performance...
        </motion.div>
      )}
    </>
  );
};
