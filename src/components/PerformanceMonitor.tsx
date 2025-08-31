import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number | null; // First Contentful Paint
  lcp: number | null; // Largest Contentful Paint
  fid: number | null; // First Input Delay
  cls: number | null; // Cumulative Layout Shift
  ttfb: number | null; // Time to First Byte
  loadTime: number | null; // Page Load Time
  domContentLoaded: number | null; // DOM Content Loaded
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableReporting?: boolean;
  reportUrl?: string;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableReporting = false,
  reportUrl = '/api/performance'
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    loadTime: null,
    domContentLoaded: null
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  // Measure First Contentful Paint
  const measureFCP = useCallback(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          const fcp = fcpEntry.startTime;
          setMetrics(prev => ({ ...prev, fcp }));
          onMetricsUpdate?.({ ...metrics, fcp });
          observer.disconnect();
        }
      });
      observer.observe({ entryTypes: ['paint'] });
    }
  }, [metrics, onMetricsUpdate]);

  // Measure Largest Contentful Paint
  const measureLCP = useCallback(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcpEntry = entries[entries.length - 1];
        if (lcpEntry) {
          const lcp = lcpEntry.startTime;
          setMetrics(prev => ({ ...prev, lcp }));
          onMetricsUpdate?.({ ...metrics, lcp });
        }
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }, [metrics, onMetricsUpdate]);

  // Measure First Input Delay
  const measureFID = useCallback(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          const fid = entry.processingStart - entry.startTime;
          setMetrics(prev => ({ ...prev, fid }));
          onMetricsUpdate?.({ ...metrics, fid });
        });
      });
      observer.observe({ entryTypes: ['first-input'] });
    }
  }, [metrics, onMetricsUpdate]);

  // Measure Cumulative Layout Shift
  const measureCLS = useCallback(() => {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
            onMetricsUpdate?.({ ...metrics, cls: clsValue });
          }
        });
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    }
  }, [metrics, onMetricsUpdate]);

  // Measure Time to First Byte
  const measureTTFB = useCallback(() => {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const ttfb = navigation.responseStart - navigation.requestStart;
        setMetrics(prev => ({ ...prev, ttfb }));
        onMetricsUpdate?.({ ...metrics, ttfb });
      }
    }
  }, [metrics, onMetricsUpdate]);

  // Measure Page Load Time
  const measureLoadTime = useCallback(() => {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        setMetrics(prev => ({ ...prev, loadTime }));
        onMetricsUpdate?.({ ...metrics, loadTime });
      }
    }
  }, [metrics, onMetricsUpdate]);

  // Measure DOM Content Loaded
  const measureDOMContentLoaded = useCallback(() => {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
        setMetrics(prev => ({ ...prev, domContentLoaded }));
        onMetricsUpdate?.({ ...metrics, domContentLoaded });
      }
    }
  }, [metrics, onMetricsUpdate]);

  // Report metrics to server
  const reportMetrics = useCallback(async (metrics: PerformanceMetrics) => {
    if (!enableReporting || !reportUrl) return;

    try {
      const payload = {
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        metrics
      };

      await fetch(reportUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
    } catch (error) {
      console.warn('Failed to report performance metrics:', error);
    }
  }, [enableReporting, reportUrl]);

  // Start monitoring
  const startMonitoring = useCallback(() => {
    if (isMonitoring) return;

    setIsMonitoring(true);

    // Measure FCP
    measureFCP();

    // Measure LCP
    measureLCP();

    // Measure FID
    measureFID();

    // Measure CLS
    measureCLS();

    // Measure TTFB
    measureTTFB();

    // Measure load time and DOM content loaded
    if (document.readyState === 'complete') {
      measureLoadTime();
      measureDOMContentLoaded();
    } else {
      window.addEventListener('load', () => {
        measureLoadTime();
        measureDOMContentLoaded();
      });
    }
  }, [isMonitoring, measureFCP, measureLCP, measureFID, measureCLS, measureTTFB, measureLoadTime, measureDOMContentLoaded]);

  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  // Get performance grade
  const getPerformanceGrade = useCallback((metric: keyof PerformanceMetrics): string => {
    const value = metrics[metric];
    if (value === null) return 'N/A';

    switch (metric) {
      case 'fcp':
        if (value < 1800) return 'Good';
        if (value < 3000) return 'Needs Improvement';
        return 'Poor';
      case 'lcp':
        if (value < 2500) return 'Good';
        if (value < 4000) return 'Needs Improvement';
        return 'Poor';
      case 'fid':
        if (value < 100) return 'Good';
        if (value < 300) return 'Needs Improvement';
        return 'Poor';
      case 'cls':
        if (value < 0.1) return 'Good';
        if (value < 0.25) return 'Needs Improvement';
        return 'Poor';
      case 'ttfb':
        if (value < 800) return 'Good';
        if (value < 1800) return 'Needs Improvement';
        return 'Poor';
      default:
        return 'N/A';
    }
  }, [metrics]);

  // Get performance score
  const getPerformanceScore = useCallback((): number => {
    let score = 0;
    let totalMetrics = 0;

    // FCP score (25%)
    if (metrics.fcp !== null) {
      totalMetrics++;
      if (metrics.fcp < 1800) score += 25;
      else if (metrics.fcp < 3000) score += 12.5;
    }

    // LCP score (25%)
    if (metrics.lcp !== null) {
      totalMetrics++;
      if (metrics.lcp < 2500) score += 25;
      else if (metrics.lcp < 4000) score += 12.5;
    }

    // FID score (25%)
    if (metrics.fid !== null) {
      totalMetrics++;
      if (metrics.fid < 100) score += 25;
      else if (metrics.fid < 300) score += 12.5;
    }

    // CLS score (25%)
    if (metrics.cls !== null) {
      totalMetrics++;
      if (metrics.cls < 0.1) score += 25;
      else if (metrics.cls < 0.25) score += 12.5;
    }

    return totalMetrics > 0 ? Math.round(score) : 0;
  }, [metrics]);

  // Report metrics when they change
  useEffect(() => {
    if (enableReporting && Object.values(metrics).some(value => value !== null)) {
      reportMetrics(metrics);
    }
  }, [metrics, enableReporting, reportMetrics]);

  // Start monitoring on mount
  useEffect(() => {
    startMonitoring();
  }, [startMonitoring]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopMonitoring();
    };
  }, [stopMonitoring]);

  // Debug logging
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', metrics);
      console.log('Performance Score:', getPerformanceScore());
    }
  }, [metrics, getPerformanceScore]);

  return null; // This component doesn't render anything
};

// Hook for using performance metrics
export const usePerformanceMetrics = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    loadTime: null,
    domContentLoaded: null
  });

  return {
    metrics,
    setMetrics,
    getPerformanceGrade: (metric: keyof PerformanceMetrics) => {
      const value = metrics[metric];
      if (value === null) return 'N/A';

      switch (metric) {
        case 'fcp':
          if (value < 1800) return 'Good';
          if (value < 3000) return 'Needs Improvement';
          return 'Poor';
        case 'lcp':
          if (value < 2500) return 'Good';
          if (value < 4000) return 'Needs Improvement';
          return 'Poor';
        case 'fid':
          if (value < 100) return 'Good';
          if (value < 300) return 'Needs Improvement';
          return 'Poor';
        case 'cls':
          if (value < 0.1) return 'Good';
          if (value < 0.25) return 'Needs Improvement';
          return 'Poor';
        case 'ttfb':
          if (value < 800) return 'Good';
          if (value < 1800) return 'Needs Improvement';
          return 'Poor';
        default:
          return 'N/A';
      }
    },
    getPerformanceScore: () => {
      let score = 0;
      let totalMetrics = 0;

      if (metrics.fcp !== null) {
        totalMetrics++;
        if (metrics.fcp < 1800) score += 25;
        else if (metrics.fcp < 3000) score += 12.5;
      }

      if (metrics.lcp !== null) {
        totalMetrics++;
        if (metrics.lcp < 2500) score += 25;
        else if (metrics.lcp < 4000) score += 12.5;
      }

      if (metrics.fid !== null) {
        totalMetrics++;
        if (metrics.fid < 100) score += 25;
        else if (metrics.fid < 300) score += 12.5;
      }

      if (metrics.cls !== null) {
        totalMetrics++;
        if (metrics.cls < 0.1) score += 25;
        else if (metrics.cls < 0.25) score += 12.5;
      }

      return totalMetrics > 0 ? Math.round(score) : 0;
    }
  };
};

export default PerformanceMonitor;
