import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  domContentLoaded: number;
  loadComplete: number;
  totalSize: number;
  resourceCount: number;
}

interface PerformanceMonitorProps {
  enableRealTimeMonitoring?: boolean;
  enableResourceTracking?: boolean;
  enableWebVitals?: boolean;
  reportingInterval?: number;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableRealTimeMonitoring = true,
  enableResourceTracking = true,
  enableWebVitals = true,
  reportingInterval = 5000,
  onMetricsUpdate
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    domContentLoaded: 0,
    loadComplete: 0,
    totalSize: 0,
    resourceCount: 0
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  const calculateResourceMetrics = useCallback(() => {
    if (!enableResourceTracking || typeof window === 'undefined') return { totalSize: 0, resourceCount: 0 };

    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    const totalSize = resources.reduce((total, resource) => {
      return total + (resource.transferSize || 0);
    }, 0);

    return {
      totalSize: Math.round(totalSize / 1024), // Convert to KB
      resourceCount: resources.length
    };
  }, [enableResourceTracking]);

  const measureWebVitals = useCallback(() => {
    if (!enableWebVitals || typeof window === 'undefined') return;

    // First Contentful Paint
    const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0] as PerformanceEntry;
    const fcp = fcpEntry ? fcpEntry.startTime : 0;

    // Largest Contentful Paint
    let lcp = 0;
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry;
      lcp = lastEntry.startTime;
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    let fid = 0;
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        fid = entry.processingStart - entry.startTime;
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    let cls = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          cls += entry.value;
        }
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const ttfb = navigationEntry ? navigationEntry.responseStart - navigationEntry.requestStart : 0;

    // DOM Content Loaded
    const domContentLoaded = navigationEntry ? 
      navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart : 0;

    // Load Complete
    const loadComplete = navigationEntry ? 
      navigationEntry.loadEventEnd - navigationEntry.loadEventStart : 0;

    // Resource metrics
    const resourceMetrics = calculateResourceMetrics();

    const newMetrics: PerformanceMetrics = {
      fcp: Math.round(fcp),
      lcp: Math.round(lcp),
      fid: Math.round(fid),
      cls: Math.round(cls * 1000), // Convert to millis
      ttfb: Math.round(ttfb),
      domContentLoaded: Math.round(domContentLoaded),
      loadComplete: Math.round(loadComplete),
      totalSize: resourceMetrics.totalSize,
      resourceCount: resourceMetrics.resourceCount
    };

    setMetrics(newMetrics);
    onMetricsUpdate?.(newMetrics);

    // Clean up observers after a delay
    setTimeout(() => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    }, 10000);
  }, [enableWebVitals, calculateResourceMetrics, onMetricsUpdate]);

  const startMonitoring = useCallback(() => {
    if (isMonitoring) return;

    setIsMonitoring(true);
    measureWebVitals();

    if (enableRealTimeMonitoring) {
      const interval = setInterval(() => {
        const resourceMetrics = calculateResourceMetrics();
        setMetrics(prev => ({
          ...prev,
          ...resourceMetrics
        }));
      }, reportingInterval);

      return () => clearInterval(interval);
    }
  }, [isMonitoring, measureWebVitals, enableRealTimeMonitoring, calculateResourceMetrics, reportingInterval]);

  useEffect(() => {
    const cleanup = startMonitoring();
    return cleanup;
  }, [startMonitoring]);

  // Monitor page visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && isMonitoring) {
        measureWebVitals();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isMonitoring, measureWebVitals]);

  // Monitor memory usage (if available)
  useEffect(() => {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const memoryInfo = (performance as any).memory;
      const memoryMetrics = {
        usedJSHeapSize: Math.round(memoryInfo.usedJSHeapSize / 1024 / 1024), // MB
        totalJSHeapSize: Math.round(memoryInfo.totalJSHeapSize / 1024 / 1024), // MB
        jsHeapSizeLimit: Math.round(memoryInfo.jsHeapSizeLimit / 1024 / 1024) // MB
      };

      // Log memory usage if it's getting high
      if (memoryMetrics.usedJSHeapSize > memoryMetrics.jsHeapSizeLimit * 0.8) {
        console.warn('High memory usage detected:', memoryMetrics);
      }
    }
  }, []);

  // Performance recommendations
  const getPerformanceRecommendations = useCallback(() => {
    const recommendations: string[] = [];

    if (metrics.fcp > 1800) {
      recommendations.push('First Contentful Paint is slow. Consider optimizing critical rendering path.');
    }

    if (metrics.lcp > 2500) {
      recommendations.push('Largest Contentful Paint is slow. Consider optimizing images and fonts.');
    }

    if (metrics.fid > 100) {
      recommendations.push('First Input Delay is high. Consider reducing JavaScript execution time.');
    }

    if (metrics.cls > 100) {
      recommendations.push('Cumulative Layout Shift is high. Consider fixing layout shifts.');
    }

    if (metrics.totalSize > 1000) {
      recommendations.push('Page size is large. Consider optimizing resources and enabling compression.');
    }

    if (metrics.resourceCount > 50) {
      recommendations.push('Too many resources. Consider bundling and reducing HTTP requests.');
    }

    return recommendations;
  }, [metrics]);

  // Log performance metrics in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.group('🚀 Performance Metrics');
      console.log('FCP (First Contentful Paint):', metrics.fcp + 'ms');
      console.log('LCP (Largest Contentful Paint):', metrics.lcp + 'ms');
      console.log('FID (First Input Delay):', metrics.fid + 'ms');
      console.log('CLS (Cumulative Layout Shift):', metrics.cls);
      console.log('TTFB (Time to First Byte):', metrics.ttfb + 'ms');
      console.log('DOM Content Loaded:', metrics.domContentLoaded + 'ms');
      console.log('Load Complete:', metrics.loadComplete + 'ms');
      console.log('Total Size:', metrics.totalSize + 'KB');
      console.log('Resource Count:', metrics.resourceCount);
      
      const recommendations = getPerformanceRecommendations();
      if (recommendations.length > 0) {
        console.group('💡 Performance Recommendations');
        recommendations.forEach(rec => console.log('•', rec));
        console.groupEnd();
      }
      
      console.groupEnd();
    }
  }, [metrics, getPerformanceRecommendations]);

  return null;
};

// Utility functions for manual performance tracking
export const markPerformance = (name: string) => {
  if (typeof window !== 'undefined' && performance.mark) {
    performance.mark(name);
  }
};

export const measurePerformance = (name: string, startMark: string, endMark?: string) => {
  if (typeof window !== 'undefined' && performance.measure) {
    try {
      performance.measure(name, startMark, endMark);
      const measure = performance.getEntriesByName(name)[0];
      return measure ? measure.duration : 0;
    } catch (error) {
      console.warn('Performance measurement failed:', error);
      return 0;
    }
  }
  return 0;
};

export const getPerformanceMetrics = (): PerformanceMetrics | null => {
  if (typeof window === 'undefined') return null;

  const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0] as PerformanceEntry;
  
  const fcp = fcpEntry ? fcpEntry.startTime : 0;
  const ttfb = navigationEntry ? navigationEntry.responseStart - navigationEntry.requestStart : 0;
  const domContentLoaded = navigationEntry ? 
    navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart : 0;
  const loadComplete = navigationEntry ? 
    navigationEntry.loadEventEnd - navigationEntry.loadEventStart : 0;

  const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
  const totalSize = resources.reduce((total, resource) => total + (resource.transferSize || 0), 0);

  return {
    fcp: Math.round(fcp),
    lcp: 0, // Would need observer
    fid: 0, // Would need observer
    cls: 0, // Would need observer
    ttfb: Math.round(ttfb),
    domContentLoaded: Math.round(domContentLoaded),
    loadComplete: Math.round(loadComplete),
    totalSize: Math.round(totalSize / 1024),
    resourceCount: resources.length
  };
};

export default PerformanceMonitor;