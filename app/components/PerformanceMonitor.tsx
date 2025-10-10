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
  updateInterval?: number;
  collectPerformanceMetrics?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = true,
  updateInterval = 5000,
  collectPerformanceMetrics = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    renderTime: 0,
    loadTime: 0,
    memoryUsage: 0
  });

  const getPerformanceScore = (currentMetrics: PerformanceMetrics): number => {
    let score = 100;
    if (currentMetrics.renderTime > 1500) score -= 15;
    if (currentMetrics.loadTime > 3000) score -= 20;
    if (currentMetrics.memoryUsage > 50) score -= 10;
    return Math.max(0, score);
  };

  const updateMetrics = useCallback(() => {
    if (!enabled || typeof window === 'undefined') return;

    const currentMetrics: PerformanceMetrics = {
      lcp: null,
      fid: null,
      cls: null,
      fcp: null,
      ttfb: null,
      renderTime: 0,
      loadTime: 0,
      memoryUsage: 0
    };

    // Get basic performance metrics
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      currentMetrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      currentMetrics.ttfb = navigation.responseStart - navigation.requestStart;
    }

    // Get memory usage if available
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      currentMetrics.memoryUsage = Math.round(memory.usedJSHeapSize / 1024 / 1024);
    }

    // Calculate render time
    const paintEntries = performance.getEntriesByType('paint');
    const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    if (fcpEntry) {
      currentMetrics.fcp = fcpEntry.startTime;
    }

    setMetrics(currentMetrics);
  }, [enabled]);

  const setupPerformanceObservers = useCallback(() => {
    if (!enabled || !collectPerformanceMetrics || typeof window === 'undefined') return;

    if ('PerformanceObserver' in window) {
      try {
        // Observe LCP
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Observe FID
        const fidObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: any) => {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Observe CLS
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              setMetrics(prev => ({ ...prev, cls: clsValue }));
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Observe TTFB
        const ttfbObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: any) => {
            if (entry.entryType === 'navigation') {
              setMetrics(prev => ({ ...prev, ttfb: entry.responseStart - entry.requestStart }));
            }
          });
        });
        ttfbObserver.observe({ entryTypes: ['navigation'] });

        return () => {
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
          ttfbObserver.disconnect();
        };
      } catch (error) {
        console.warn('Performance observers not supported:', error);
      }
    }
  }, [enabled, collectPerformanceMetrics]);

  useEffect(() => {
    if (!enabled) return;

    // Initial metrics update
    updateMetrics();

    // Set up performance observers
    const cleanup = setupPerformanceObservers();

    // Set up interval for continuous monitoring
    const interval = setInterval(updateMetrics, updateInterval);

    // Log performance metrics in development
    if (process.env.NODE_ENV === 'development') {
      const logMetrics = () => {
        const score = getPerformanceScore(metrics);
        console.log('Performance Metrics:', {
          ...metrics,
          score,
          timestamp: new Date().toISOString()
        });
      };

      // Log metrics after a delay to allow for collection
      setTimeout(logMetrics, 5000);
    }

    return () => {
      clearInterval(interval);
      if (cleanup) cleanup();
    };
  }, [enabled, updateInterval, updateMetrics, setupPerformanceObservers, metrics]);

  const reportMetrics = useCallback((metrics: PerformanceMetrics, score: number) => {
    // In a real application, you would send this data to your analytics service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'performance_metrics', {
        event_category: 'performance',
        event_label: 'web_vitals',
        custom_map: {
          lcp: metrics.lcp,
          fid: metrics.fid,
          cls: metrics.cls,
          fcp: metrics.fcp,
          ttfb: metrics.ttfb,
          render_time: metrics.renderTime,
          load_time: metrics.loadTime,
          memory_usage: metrics.memoryUsage,
          performance_score: score
        }
      });
    }
  }, []);

  // Report metrics when they change
  useEffect(() => {
    if (metrics.loadTime > 0) {
      const score = getPerformanceScore(metrics);
      reportMetrics(metrics, score);
    }
  }, [metrics, reportMetrics]);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;