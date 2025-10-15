import { useEffect, useCallback, useRef } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  memoryUsage: number | null;
  loadTime: number | null;
}

interface PerformanceMonitorOptions {
  enableLogging?: boolean;
  enableAnalytics?: boolean;
  enableMemoryTracking?: boolean;
  customMetrics?: string[];
}

export const usePerformanceMonitor = (options: PerformanceMonitorOptions = {}) => {
  const {
    enableLogging = process.env.NODE_ENV === 'development',
    enableAnalytics = true,
    enableMemoryTracking = true,
    customMetrics = []
  } = options;

  const metricsRef = useRef<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: null,
    loadTime: null
  });

  const reportMetric = useCallback((name: string, value: number, delta: number, id: string) => {
    // Update metrics ref
    const metricName = name.toLowerCase() as keyof PerformanceMetrics;
    if (metricName in metricsRef.current) {
      (metricsRef.current as any)[metricName] = value;
    }

    // Log in development
    if (enableLogging) {
      // eslint-disable-next-line no-console
      console.log(`Performance Metric - ${name}:`, { value, delta, id });
    }

    // Send to analytics
    if (enableAnalytics && typeof window !== 'undefined' && 'gtag' in window) {
      (window as { gtag: Function }).gtag('event', 'web_vitals', {
        event_category: 'Performance',
        event_label: name,
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        custom_map: {
          'metric_id': id,
          'metric_delta': delta
        }
      });
    }

    // Send to custom analytics endpoint
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          value,
          delta,
          id,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          userAgent: navigator.userAgent
        })
      }).catch(() => {
        // Silently fail if analytics fails
      });
    }
  }, [enableLogging, enableAnalytics]);

  const trackCustomMetric = useCallback((name: string, value: number, metadata?: Record<string, unknown>) => {
    if (enableLogging) {
      // eslint-disable-next-line no-console
      console.log(`Custom Metric - ${name}:`, { value, metadata });
    }

    if (enableAnalytics && typeof window !== 'undefined' && 'gtag' in window) {
      (window as { gtag: Function }).gtag('event', 'custom_metric', {
        event_category: 'Performance',
        event_label: name,
        value: Math.round(value),
        custom_map: metadata
      });
    }
  }, [enableLogging, enableAnalytics]);

  const trackMemoryUsage = useCallback(() => {
    if (!enableMemoryTracking || typeof window === 'undefined' || !('memory' in performance)) {
      return;
    }

    const memory = (performance as any).memory;
    const memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
    
    metricsRef.current.memoryUsage = memoryUsage;
    trackCustomMetric('memory_usage', memoryUsage, {
      total: memory.totalJSHeapSize / 1024 / 1024,
      limit: memory.jsHeapSizeLimit / 1024 / 1024
    });
  }, [enableMemoryTracking, trackCustomMetric]);

  const trackLoadTime = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return;
    }

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      metricsRef.current.loadTime = loadTime;
      trackCustomMetric('load_time', loadTime, {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstByte: navigation.responseStart - navigation.requestStart,
        domInteractive: navigation.domInteractive - navigation.navigationStart
      });
    }
  }, [trackCustomMetric]);

  const getCurrentMetrics = useCallback(() => {
    return { ...metricsRef.current };
  }, []);

  const resetMetrics = useCallback(() => {
    metricsRef.current = {
      lcp: null,
      fid: null,
      cls: null,
      fcp: null,
      ttfb: null,
      memoryUsage: null,
      loadTime: null
    };
  }, []);

  useEffect(() => {
    // Import web-vitals dynamically
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS((metric) => reportMetric(metric.name, metric.value, metric.delta, metric.id));
      onFID((metric) => reportMetric(metric.name, metric.value, metric.delta, metric.id));
      onFCP((metric) => reportMetric(metric.name, metric.value, metric.delta, metric.id));
      onLCP((metric) => reportMetric(metric.name, metric.value, metric.delta, metric.id));
      onTTFB((metric) => reportMetric(metric.name, metric.value, metric.delta, metric.id));
    });

    // Track memory usage periodically
    if (enableMemoryTracking) {
      const memoryInterval = setInterval(trackMemoryUsage, 30000); // Every 30 seconds
      return () => clearInterval(memoryInterval);
    }
  }, [reportMetric, enableMemoryTracking, trackMemoryUsage]);

  useEffect(() => {
    // Track load time when page loads
    if (document.readyState === 'complete') {
      trackLoadTime();
    } else {
      window.addEventListener('load', trackLoadTime);
      return () => window.removeEventListener('load', trackLoadTime);
    }
  }, [trackLoadTime]);

  return {
    metrics: getCurrentMetrics(),
    trackCustomMetric,
    trackMemoryUsage,
    trackLoadTime,
    getCurrentMetrics,
    resetMetrics
  };
};

export default usePerformanceMonitor;