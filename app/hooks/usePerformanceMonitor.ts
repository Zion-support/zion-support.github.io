'use client';

import { useState, useEffect } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  memoryUsage: {
    used: number;
    total: number;
    limit: number;
  } | null;
}

export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memoryUsage: null
  });

  useEffect(() => {
    const handleLoad = () => {
      // Get Core Web Vitals
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => {
            setMetrics(prev => ({ ...prev, cls: metric.value }));
          });

          getFID((metric) => {
            setMetrics(prev => ({ ...prev, fid: metric.value }));
          });

          getFCP((metric) => {
            setMetrics(prev => ({ ...prev, fcp: metric.value }));
          });

          getLCP((metric) => {
            setMetrics(prev => ({ ...prev, lcp: metric.value }));
          });

          getTTFB((metric) => {
            setMetrics(prev => ({ ...prev, ttfb: metric.value }));
          });
        });
      }

      // Get memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({
          ...prev,
          memoryUsage: {
            used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
            total: Math.round(memory.totalJSHeapSize / 1024 / 1024),
            limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024)
          }
        }));
      }
    };

    // Monitor performance
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return metrics;
};