import React, { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  renderTime: number;
  memoryUsage: number;
}

interface PerformanceMonitorProps {
  enableConsoleLogging?: boolean;
  updateInterval?: number;
  onMetricsUpdate?: (metrics: PerformanceMetrics, score: number) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableConsoleLogging = false,
  updateInterval = 5000,
  onMetricsUpdate
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    renderTime: 0,
    memoryUsage: 0,
  });

  const [, setPerformanceScore] = useState(0);

  const getPerformanceScore = (currentMetrics: PerformanceMetrics): number => {
    let score = 100;
    
    // LCP scoring (good: <2.5s, needs improvement: 2.5-4s, poor: >4s)
    if (currentMetrics.lcp !== null) {
      if (currentMetrics.lcp > 4000) score -= 30;
      else if (currentMetrics.lcp > 2500) score -= 15;
    }
    
    // FID scoring (good: <100ms, needs improvement: 100-300ms, poor: >300ms)
    if (currentMetrics.fid !== null) {
      if (currentMetrics.fid > 300) score -= 25;
      else if (currentMetrics.fid > 100) score -= 10;
    }
    
    // CLS scoring (good: <0.1, needs improvement: 0.1-0.25, poor: >0.25)
    if (currentMetrics.cls !== null) {
      if (currentMetrics.cls > 0.25) score -= 20;
      else if (currentMetrics.cls > 0.1) score -= 10;
    }
    
    // Render time scoring
    if (currentMetrics.renderTime > 1500) score -= 15;
    else if (currentMetrics.renderTime > 1000) score -= 10;
    
    return Math.max(0, score);
  };

  const updateMetrics = useCallback(() => {
    const currentMetrics: PerformanceMetrics = {
      lcp: null,
      fid: null,
      cls: null,
      fcp: null,
      ttfb: null,
      renderTime: 0,
      memoryUsage: 0,
    };

    // Get render time
    if (performance.timing) {
      currentMetrics.renderTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    }

    // Get memory usage if available
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      currentMetrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
    }

    setMetrics(currentMetrics);
    const score = getPerformanceScore(currentMetrics);
    setPerformanceScore(score);
    
    if (onMetricsUpdate) {
      onMetricsUpdate(currentMetrics, score);
    }
  }, [onMetricsUpdate]);

  useEffect(() => {
    const setupPerformanceObservers = () => {
      if (!('PerformanceObserver' in window)) return;

      // Observe LCP
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          if (lastEntry) {
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (error) {
        // LCP observer not supported
      }

      // Observe FID
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (entry.processingStart && entry.startTime) {
              setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (error) {
        // FID observer not supported
      }

      // Observe CLS
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              setMetrics(prev => ({ ...prev, cls: clsValue }));
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        // CLS observer not supported
      }

      // Observe FCP
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
          });
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (error) {
        // FCP observer not supported
      }

      // Observe TTFB
      try {
        const ttfbObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (entry.entryType === 'navigation') {
              setMetrics(prev => ({ ...prev, ttfb: entry.responseStart - entry.requestStart }));
            }
          });
        });
        ttfbObserver.observe({ entryTypes: ['navigation'] });
      } catch (error) {
        // TTFB observer not supported
      }
    };

    // Initial metrics update
    updateMetrics();
    
    // Set up performance observers
    setupPerformanceObservers();

    // Set up interval for continuous monitoring
    const interval = setInterval(updateMetrics, updateInterval);

    // Log performance metrics in development
    if (enableConsoleLogging && process.env.NODE_ENV === 'development') {
      const logInterval = setInterval(() => {
        const currentMetrics = metrics;
        const score = getPerformanceScore(currentMetrics);
        console.log('Performance Metrics:', {
          ...currentMetrics,
          score
        });
      }, 10000);

      return () => {
        clearInterval(interval);
        clearInterval(logInterval);
      };
    }

    return () => {
      clearInterval(interval);
    };
  }, [updateMetrics, updateInterval, enableConsoleLogging, metrics]);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;