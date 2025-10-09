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
  updateInterval?: number;
  enableConsoleLogging?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics, score: number) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  updateInterval = 5000,
  enableConsoleLogging = false,
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
      if (currentMetrics.fid > 300) score -= 30;
      else if (currentMetrics.fid > 100) score -= 15;
    }
    
    // CLS scoring (good: <0.1, needs improvement: 0.1-0.25, poor: >0.25)
    if (currentMetrics.cls !== null) {
      if (currentMetrics.cls > 0.25) score -= 30;
      else if (currentMetrics.cls > 0.1) score -= 15;
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

  const setupPerformanceObservers = useCallback(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    try {
      // Observe LCP
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        if (lastEntry) {
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Observe FID
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.processingStart && entry.startTime) {
            setMetrics(prev => ({ 
              ...prev, 
              fid: entry.processingStart - entry.startTime 
            }));
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Observe CLS
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

      // Observe FCP
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Observe TTFB
      const ttfbObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.responseStart && entry.requestStart) {
            setMetrics(prev => ({ 
              ...prev, 
              ttfb: entry.responseStart - entry.requestStart 
            }));
          }
        });
      });
      ttfbObserver.observe({ entryTypes: ['navigation'] });

      // Cleanup function
      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
        ttfbObserver.disconnect();
      };
    } catch (error) {
      if (enableConsoleLogging) {
        console.warn('Performance observer setup failed:', error);
      }
    }
  }, [enableConsoleLogging]);

  useEffect(() => {
    // Initial metrics update
    updateMetrics();

    // Set up performance observers
    const cleanup = setupPerformanceObservers();

    // Set up interval for continuous monitoring
    const interval = setInterval(updateMetrics, updateInterval);

    // Log performance metrics in development
    if (enableConsoleLogging && process.env.NODE_ENV === 'development') {
      const logInterval = setInterval(() => {
        console.log('Performance Metrics:', metrics);
        console.log('Performance Score:', getPerformanceScore(metrics));
      }, 10000);
      
      return () => {
        clearInterval(interval);
        clearInterval(logInterval);
        if (cleanup) cleanup();
      };
    }

    return () => {
      clearInterval(interval);
      if (cleanup) cleanup();
    };
  }, [updateMetrics, setupPerformanceObservers, updateInterval, enableConsoleLogging, metrics]);

  const reportMetrics = useCallback((metrics: PerformanceMetrics, score: number) => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics, score);
    }
    
    if (enableConsoleLogging && process.env.NODE_ENV === 'development') {
      console.log('Performance Report:', {
        metrics,
        score,
        timestamp: new Date().toISOString()
      });
    }
  }, [onMetricsUpdate, enableConsoleLogging]);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;