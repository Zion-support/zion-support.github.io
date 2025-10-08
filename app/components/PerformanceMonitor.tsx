import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
  });

  useEffect(() => {
// const _reportWebVitals = (_metric: { name: string; value: number }) => {
    //   // Log to console in development (only on client side)
    //   if (typeof window !== 'undefined' && enableConsoleLogging) {
    //     logger.info('Web Vital captured', { name: _metric.name, value: _metric.value });
    //   }
    // };

    // Monitor Core Web Vitals
    const navigation = performance.getEntriesByType('navigation')[0] as
      | PerformanceNavigationTiming
      | undefined;
    const memory = (
      performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number } }
    ).memory;

    const getPerformanceScore = (): number => {
      let score = 100;
      if (metrics.renderTime > 1500) score -= 15;
      if (metrics.loadTime > 3000) score -= 20;
      if (metrics.memoryUsage > 50) score -= 10;
      return Math.max(0, score);    };

    // Measure Core Web Vitals
    const measureWebVitals = () => {
      // LCP - Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          metrics.lcp = lastEntry.startTime;
        });
        
        try {
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          console.warn('LCP observer not supported');
        }

setMetrics(currentMetrics);

      const score = getPerformanceScore();
      setPerformanceScore(score);

      if (enableConsoleLogging) {
        if (typeof console !== 'undefined') {
          logger.debug('Performance Metrics', {
            metrics: currentMetrics,
            score,          });
        });
        
        try {
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          console.warn('FID observer not supported');
        }

        // CLS - Cumulative Layout Shift
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          metrics.cls = clsValue;
        });
        
        try {
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          console.warn('CLS observer not supported');
        }

        // FCP - First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              metrics.fcp = entry.startTime;
            }
          });
        });
        
        try {
          fcpObserver.observe({ entryTypes: ['paint'] });
        } catch (e) {
          console.warn('FCP observer not supported');
        }
      }
      
      requestAnimationFrame(measureFPS);
    };

    // Initial measurement
    measurePerformance();
    measureFPS();

    // Re-measure on route changes
    const handleRouteChange = () => {
      setTimeout(measurePerformance, 100);
    };

    window.addEventListener('popstate', handleRouteChange);

    // Performance observer for Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({
              ...prev,
              lcp: entry.startTime,
            }));
          } else if (entry.entryType === 'first-input') {
            const fidEntry = entry as any;
            setMetrics(prev => ({
              ...prev,
              fid: fidEntry.processingStart - fidEntry.startTime,
            }));
          } else if (entry.entryType === 'layout-shift') {
            const clsEntry = entry as any;
            if (!clsEntry.hadRecentInput) {
              setMetrics(prev => ({
                ...prev,
                cls: prev.cls + clsEntry.value,
              }));
            }
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      return () => {
        observer.disconnect();
        window.removeEventListener('popstate', handleRouteChange);
      };
    }

return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50 bg-black/80 backdrop-blur-sm text-white p-4 rounded-lg text-xs font-mono max-w-xs">
      <div className="mb-2 font-bold text-cyan-400">Performance Monitor</div>
      <div className="space-y-1">
        <div>Load Time: <span className="text-green-400">{metrics.loadTime.toFixed(2)}ms</span></div>
        <div>Memory: <span className="text-yellow-400">{metrics.memoryUsage.toFixed(2)}MB</span></div>
        <div>FPS: <span className={metrics.fps >= 60 ? 'text-green-400' : metrics.fps >= 30 ? 'text-yellow-400' : 'text-red-400'}>{metrics.fps}</span></div>
        <div>LCP: <span className={metrics.lcp < 2500 ? 'text-green-400' : metrics.lcp < 4000 ? 'text-yellow-400' : 'text-red-400'}>{metrics.lcp.toFixed(2)}ms</span></div>
        <div>FID: <span className={metrics.fid < 100 ? 'text-green-400' : metrics.fid < 300 ? 'text-yellow-400' : 'text-red-400'}>{metrics.fid.toFixed(2)}ms</span></div>
        <div>CLS: <span className={metrics.cls < 0.1 ? 'text-green-400' : metrics.cls < 0.25 ? 'text-yellow-400' : 'text-red-400'}>{metrics.cls.toFixed(3)}</span></div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;