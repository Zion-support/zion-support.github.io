import { useState, useEffect } from 'react';

interface PerformanceData {
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fcp: number;
}

export const usePerformanceMonitor = () => {
  const [data, setData] = useState<PerformanceData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const measurePerformance = async () => {
    setLoading(true);
    setError(null);
    
    try {
      if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
        throw new Error('Performance Observer not supported');
      }

      const metrics: Partial<PerformanceData> = {};

      // Measure LCP
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        metrics.lcp = lastEntry.startTime;
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Measure FID
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.processingStart && entry.startTime) {
            metrics.fid = entry.processingStart - entry.startTime;
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Measure CLS
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value || 0;
          }
        });
        metrics.cls = clsValue;
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Measure TTFB and FCP
      const navigationObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.responseStart && entry.requestStart) {
            metrics.ttfb = entry.responseStart - entry.requestStart;
          }
          if (entry.name === 'first-contentful-paint') {
            metrics.fcp = entry.startTime;
          }
        });
      });
      navigationObserver.observe({ entryTypes: ['navigation', 'paint'] });

      // Wait a bit for metrics to be collected
      setTimeout(() => {
        setData(metrics as PerformanceData);
        setLoading(false);
      }, 2000);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
    }
  };

  useEffect(() => {
    measurePerformance();
  }, []);

  return { data, loading, error, measurePerformance };
};