import React, { useState, useEffect, useCallback } from 'react';

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

interface PerformanceMonitorProps {
  enabled?: boolean;
  collectPerformanceMetrics?: boolean;
  updateInterval?: number;
  enableConsoleLogging?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = true,
  collectPerformanceMetrics = true,
  updateInterval = 5000,
  enableConsoleLogging = false,
}) => {
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
    if (!enabled || !collectPerformanceMetrics) return;

    const updateMetrics = () => {
      const currentMetrics: PerformanceMetrics = {
        lcp: null,
        fid: null,
        cls: null,
        fcp: null,
        ttfb: null,
        renderTime: performance.now(),
        loadTime: performance.now(),
        memoryUsage: (performance as any).memory ? (performance as any).memory.usedJSHeapSize / 1024 / 1024 : 0,
      };

      setMetrics(currentMetrics);
      setPerformanceScore(100);
    };

    // Initial metrics update
    updateMetrics();

    // Set up performance observers
    const setupPerformanceObservers = () => {
      if ('PerformanceObserver' in window) {
        try {
          // Observe LCP
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1] as PerformanceEntry & { element?: Element };
            if (lastEntry) {
              setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch {
          // LCP observer not supported
        }

        try {
          // Observe FID
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: PerformanceEntry & { processingStart: number; startTime: number }) => {
              setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch {
          // FID observer not supported
        }

        try {
          // Observe FCP
          const fcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (entry.name === 'first-contentful-paint') {
                setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
              }
            });
          });
          fcpObserver.observe({ entryTypes: ['paint'] });
        } catch {
          // FCP observer not supported
        }

        try {
          // Observe TTFB
          const ttfbObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: PerformanceNavigationTiming) => {
              setMetrics(prev => ({ ...prev, ttfb: entry.responseStart - entry.requestStart }));
            });
          });
          ttfbObserver.observe({ entryTypes: ['navigation'] });
        } catch {
          // TTFB observer not supported
        }

        // Monitor Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          });
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }
    };

    setupPerformanceObservers();

    // Set up interval for continuous monitoring
    const interval = setInterval(updateMetrics, updateInterval);

    return () => {
      clearInterval(interval);
    };
  }, [enabled, collectPerformanceMetrics, updateInterval]);

  const getMetrics = useCallback((): PerformanceMetrics => {
    return metrics;
  }, [metrics]);

  const getScore = useCallback((): number => {
    let score = 100;
    if (metrics.renderTime > 1500) score -= 15;
    if (metrics.loadTime > 3000) score -= 20;
    if (metrics.memoryUsage > 50) score -= 10;
    return Math.max(0, score);
  }, [metrics]);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;