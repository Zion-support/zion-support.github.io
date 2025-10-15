import React, { useEffect, useCallback, useRef, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableRealUserMonitoring?: boolean;
  enableCoreWebVitals?: boolean;
  enableResourceTiming?: boolean;
}

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableRealUserMonitoring = true,
  enableCoreWebVitals = true,
  enableResourceTiming = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const hasReported = useRef(false);

  const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
    setMetrics(prev => {
      const updated = { ...prev, ...newMetrics } as PerformanceMetrics;
      onMetricsUpdate?.(updated);
      return updated;
    });
  }, [onMetricsUpdate]);

  const measurePageLoad = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) return;

    const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!navigation) return;

    const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
    
    updateMetrics({
      loadTime,
      timeToInteractive: domContentLoaded
    });
  }, [updateMetrics]);

  const measureResourceTiming = useCallback(() => {
    if (!enableResourceTiming || typeof window === 'undefined') return;

    const resources = window.performance.getEntriesByType('resource');
    const totalSize = resources.reduce((total, resource) => {
      const transferSize = (resource as PerformanceResourceTiming).transferSize || 0;
      return total + transferSize;
    }, 0);

    // Log resource timing in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Performance] Total resource size: ${(totalSize / 1024).toFixed(2)} KB`);
      console.log(`[Performance] Number of resources: ${resources.length}`);
    }
  }, [enableResourceTiming]);

  const setupCoreWebVitals = useCallback(async () => {
    if (!enableCoreWebVitals || hasReported.current) return;

    try {
      const { onCLS, onFCP, onLCP, onTTFB, onINP } = await import('web-vitals');
      
      onCLS((metric) => {
        updateMetrics({ cumulativeLayoutShift: metric.value });
        hasReported.current = true;
      });

      onFCP((metric) => {
        updateMetrics({ firstContentfulPaint: metric.value });
      });

      onLCP((metric) => {
        updateMetrics({ largestContentfulPaint: metric.value });
      });

      onTTFB((metric) => {
        // TTFB is already captured in loadTime
      });

      onINP((metric) => {
        updateMetrics({ firstInputDelay: metric.value });
      });
    } catch (error) {
      console.warn('Failed to load web-vitals:', error);
    }
  }, [enableCoreWebVitals, updateMetrics]);

  const setupPerformanceObserver = useCallback(() => {
    if (typeof window === 'undefined' || !window.PerformanceObserver) return;

    try {
      observerRef.current = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              updateMetrics({ firstContentfulPaint: entry.startTime });
            }
          }
        });
      });

      observerRef.current.observe({ entryTypes: ['paint', 'navigation'] });
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }
  }, [updateMetrics]);

  const reportMetrics = useCallback((metrics: PerformanceMetrics) => {
    // Send to analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_metrics', {
        event_category: 'Performance',
        custom_map: {
          load_time: metrics.loadTime,
          fcp: metrics.firstContentfulPaint,
          lcp: metrics.largestContentfulPaint,
          cls: metrics.cumulativeLayoutShift,
          fid: metrics.firstInputDelay,
          tti: metrics.timeToInteractive
        }
      });
    }

    // Store in localStorage for debugging
    if (process.env.NODE_ENV === 'development') {
      try {
        const existingMetrics = JSON.parse(localStorage.getItem('performanceMetrics') || '[]');
        existingMetrics.push({
          ...metrics,
          timestamp: Date.now(),
          url: window.location.href
        });
        localStorage.setItem('performanceMetrics', JSON.stringify(existingMetrics.slice(-20)));
      } catch (e) {
        // Ignore localStorage errors
      }
    }
  }, []);

  useEffect(() => {
    if (!enableRealUserMonitoring) return;

    // Measure page load immediately if already loaded
    if (document.readyState === 'complete') {
      measurePageLoad();
      measureResourceTiming();
    } else {
      const handleLoad = () => {
        measurePageLoad();
        measureResourceTiming();
      };
      window.addEventListener('load', handleLoad, { once: true });
    }

    // Setup performance monitoring
    setupCoreWebVitals();
    setupPerformanceObserver();

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [enableRealUserMonitoring, measurePageLoad, measureResourceTiming, setupCoreWebVitals, setupPerformanceObserver]);

  // Report metrics when they're available
  useEffect(() => {
    if (metrics && Object.values(metrics).every(value => value > 0)) {
      reportMetrics(metrics);
    }
  }, [metrics, reportMetrics]);

  return null;
};

export default AdvancedPerformanceMonitor;