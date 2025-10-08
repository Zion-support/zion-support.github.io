import React, { useEffect } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    const metrics: PerformanceMetrics = {
      lcp: null,
      fid: null,
      cls: null,
      fcp: null,
      ttfb: null
    };

    // Monitor Core Web Vitals
    const navigation = performance.getEntriesByType('navigation')[0] as
      | PerformanceNavigationTiming
      | undefined;
    const memory = (
      performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number } }
    ).memory;

    const getPerformanceScore = (): number => {
      let score = 100;
      if (metrics.lcp && metrics.lcp > 1500) score -= 15;
      if (metrics.fcp && metrics.fcp > 3000) score -= 20;
      if (memory && memory.usedJSHeapSize > 50) score -= 10;
      return Math.max(0, score);
    };

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

<<<<<<< HEAD
        // FID - First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: any) => {
            metrics.fid = entry.processingStart - entry.startTime;
=======
      setMetrics(currentMetrics);

      const score = getPerformanceScore();
      setPerformanceScore(score);

      if (enableConsoleLogging) {
        if (typeof console !== 'undefined') {
          logger.debug('Performance Metrics', {
            metrics: currentMetrics,
            score,
>>>>>>> cursor/analyze-improve-and-deploy-application-1a78
          });
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

      // TTFB - Time to First Byte
      if ('performance' in window && 'timing' in performance) {
        const timing = performance.timing;
        metrics.ttfb = timing.responseStart - timing.navigationStart;
      }

      // Send metrics to analytics after page load
      window.addEventListener('load', () => {
        setTimeout(() => {
          // Send to Google Analytics if available
          if (typeof window !== 'undefined' && (window as any).gtag) {
            if (metrics.lcp !== null) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'LCP',
                value: Math.round(metrics.lcp)
              });
            }
            if (metrics.fid !== null) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'FID',
                value: Math.round(metrics.fid)
              });
            }
            if (metrics.cls !== null) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'CLS',
                value: Math.round(metrics.cls * 1000) / 1000
              });
            }
          }

          // Log metrics for debugging
          console.log('Performance Metrics:', metrics);
        }, 2000);
      });
    };

    measureWebVitals();

    // Monitor resource loading
    const monitorResources = () => {
      if ('PerformanceObserver' in window) {
        const resourceObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.duration > 1000) { // Log slow resources
              console.warn('Slow resource:', entry.name, entry.duration + 'ms');
            }
          });
        });
        
        try {
          resourceObserver.observe({ entryTypes: ['resource'] });
        } catch (e) {
          console.warn('Resource observer not supported');
        }
      }
    };

    monitorResources();

<<<<<<< HEAD
    return () => {
      // Cleanup observers if needed
    };
  }, []);
=======
    // Set up interval for continuous monitoring
    const interval = setInterval(updateMetrics, updateInterval);
>>>>>>> cursor/analyze-improve-and-deploy-application-1a78

  return null;
};

export default PerformanceMonitor;