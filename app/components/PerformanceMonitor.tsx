import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  renderTime: number;
  loadTime: number;
  memoryUsage: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    renderTime: 0,
    loadTime: 0,
    memoryUsage: 0,
  });

  const [, setPerformanceScore] = useState(0);

  useEffect(() => {

      // Monitor Core Web Vitals
      const navigation = performance.getEntriesByType('navigation')[0] as
        | PerformanceNavigationTiming
        | undefined;
      const memory = (
        performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number } }
      ).memory;

      if (navigation) {
        currentMetrics.renderTime = navigation.domContentLoadedEventEnd - navigation.navigationStart;
        currentMetrics.loadTime = navigation.loadEventEnd - navigation.navigationStart;
        currentMetrics.ttfb = navigation.responseStart - navigation.navigationStart;
      }

      if (memory) {
        currentMetrics.memoryUsage = (memory.usedJSHeapSize / memory.totalJSHeapSize) * 100;
      }

      setMetrics(currentMetrics);

      const score = getPerformanceScore(currentMetrics);
      setPerformanceScore(score);
    };

    const getPerformanceScore = (currentMetrics: PerformanceMetrics): number => {
      let score = 100;
    };
>>>>>>> cursor/fix-errors-and-merge-to-main-deb0

    // Measure Core Web Vitals
    const measureWebVitals = () => {
      // LCP - Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        
        try {
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch {
          // LCP observer not supported
        }

          });
>>>>>>> cursor/fix-errors-and-merge-to-main-deb0
        });
        
        try {
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch {
          // FID observer not supported
        }

        // CLS - Cumulative Layout Shift
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: PerformanceEntry & { hadRecentInput: boolean; value: number }) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        });
        
        try {
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch {
          // CLS observer not supported
        }

        // FCP - First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
          });
        });
        
        try {
          fcpObserver.observe({ entryTypes: ['paint'] });
        } catch {
          // FCP observer not supported
        }
      }

      // Send metrics to analytics after page load
      window.addEventListener('load', () => {
        setTimeout(() => {
          // Send to Google Analytics if available
          if (typeof window !== 'undefined' && (window as unknown as { gtag?: (command: string, event: string, data: Record<string, unknown>) => void }).gtag) {
            const gtag = (window as unknown as { gtag: (command: string, event: string, data: Record<string, unknown>) => void }).gtag;
            if (metrics.lcp !== null) {
              gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'LCP',
                value: Math.round(metrics.lcp)
              });
            }
            if (metrics.fid !== null) {
              gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'FID',
                value: Math.round(metrics.fid)
              });
            }
            if (metrics.cls !== null) {
              gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'CLS',
                value: Math.round(metrics.cls * 1000) / 1000
              });
            }
          }
        }, 2000);
      });
    };

    measureWebVitals();

    // Monitor resource loading
    const monitorResources = () => {
      if ('PerformanceObserver' in window) {
        const resourceObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.duration > 1000) { // Track slow resources
              // Could send to analytics or error reporting service
            }
          });
        });
        
        try {
          resourceObserver.observe({ entryTypes: ['resource'] });
        } catch {
          // Resource observer not supported
        }
      }
    };

    monitorResources();

    return () => {
      clearInterval(interval);
    };
  }, []);

>>>>>>> cursor/fix-errors-and-merge-to-main-deb0
  return null;
};

export default PerformanceMonitor;