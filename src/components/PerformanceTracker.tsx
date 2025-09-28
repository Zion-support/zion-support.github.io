import React, { useEffect, useRef, useState, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage?: number;
  fps: number;
  errors: number;
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
  networkLatency?: number;
  domSize?: number;
  resourceCount?: number;
}

interface PerformanceTrackerProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  interval?: number;
  enableCoreWebVitals?: boolean;
  enableAdvancedMetrics?: boolean;
}

export const PerformanceTracker: React.FC<PerformanceTrackerProps> = ({
  onMetricsUpdate,
  interval = 5000,
  enableCoreWebVitals = true,
  enableAdvancedMetrics = true
}) => {
  const metricsRef = useRef<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    fps: 0,
    errors: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    networkLatency: 0,
    domSize: 0,
    resourceCount: 0
  });
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const errorCountRef = useRef(0);
  const [isTracking] = useState(true);

  // Core Web Vitals tracking
  const trackCoreWebVitals = useCallback(() => {
    if (!enableCoreWebVitals || !isTracking) return;

    // Track LCP (Largest Contentful Paint)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntry;
          metricsRef.current.lcp = lastEntry.startTime;
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Track FID (First Input Delay)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEventTiming) => {
            metricsRef.current.fid = entry.processingStart - entry.startTime;
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Track CLS (Cumulative Layout Shift)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: LayoutShift) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              metricsRef.current.cls = clsValue;
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Track TTFB (Time to First Byte)
        const navigationObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceNavigationTiming) => {
            metricsRef.current.ttfb = entry.responseStart - entry.requestStart;
          });
        });
        navigationObserver.observe({ entryTypes: ['navigation'] });

        return () => {
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
          navigationObserver.disconnect();
        };
      } catch (error) {
        console.warn('Core Web Vitals tracking failed:', error);
      }
    }
  }, [enableCoreWebVitals, isTracking]);

  // Advanced metrics tracking
  const trackAdvancedMetrics = useCallback(() => {
    if (!enableAdvancedMetrics || !isTracking) return;

    // Track DOM size
    const trackDOMSize = () => {
      metricsRef.current.domSize = document.querySelectorAll('*').length;
    };

    // Track resource count
    const trackResourceCount = () => {
      if ('PerformanceObserver' in window) {
        const resourceObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          metricsRef.current.resourceCount = entries.length;
        });
        resourceObserver.observe({ entryTypes: ['resource'] });
        return () => resourceObserver.disconnect();
      }
    };

    // Track network latency
    const trackNetworkLatency = () => {
      const start = performance.now();
      fetch('/api/health', { method: 'HEAD' })
        .then(() => {
          metricsRef.current.networkLatency = performance.now() - start;
        })
        .catch(() => {
          // Fallback to navigation timing
          const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (nav) {
            metricsRef.current.networkLatency = nav.responseEnd - nav.requestStart;
          }
        });
    };

    trackDOMSize();
    const cleanupResource = trackResourceCount();
    trackNetworkLatency();

    return cleanupResource;
  }, [enableAdvancedMetrics, isTracking]);

  useEffect(() => {
    if (!isTracking) return;

    // Track load time
    const loadTime = performance.now();
    metricsRef.current.loadTime = loadTime;

    // Track FPS
    const trackFPS = () => {
      if (!isTracking) return;
      
      frameCountRef.current++;
      const currentTime = performance.now();
      const deltaTime = currentTime - lastTimeRef.current;

      if (deltaTime >= 1000) {
        metricsRef.current.fps = Math.round((frameCountRef.current * 1000) / deltaTime);
        frameCountRef.current = 0;
        lastTimeRef.current = currentTime;
      }

      requestAnimationFrame(trackFPS);
    };

    // Track memory usage if available
    const trackMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as { memory: { usedJSHeapSize: number } }).memory;
        metricsRef.current.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB
      }
    };

    // Track errors
    const handleError = () => {
      errorCountRef.current++;
      metricsRef.current.errors = errorCountRef.current;
    };

    // Track render time
    const trackRenderTime = () => {
      const renderTime = performance.now() - loadTime;
      metricsRef.current.renderTime = renderTime;
    };

    // Set up tracking
    requestAnimationFrame(trackFPS);
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleError);

    // Initial render time tracking
    requestAnimationFrame(trackRenderTime);

    // Set up Core Web Vitals tracking
    const cleanupCoreWebVitals = trackCoreWebVitals();
    
    // Set up advanced metrics tracking
    const cleanupAdvancedMetrics = trackAdvancedMetrics();

    // Periodic metrics update
    const metricsInterval = setInterval(() => {
      if (isTracking) {
        trackMemory();
        onMetricsUpdate?.(metricsRef.current);
      }
    }, interval);

    // Cleanup
    return () => {
      clearInterval(metricsInterval);
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleError);
      cleanupCoreWebVitals?.();
      cleanupAdvancedMetrics?.();
    };
  }, [onMetricsUpdate, interval, isTracking, trackCoreWebVitals, trackAdvancedMetrics]);

  // Expose control methods
  // const resetMetrics = useCallback(() => {
  //   metricsRef.current = {
  //     loadTime: 0,
  //     renderTime: 0,
  //     fps: 0,
  //     errors: 0,
  //     lcp: 0,
  //     fid: 0,
  //     cls: 0,
  //     ttfb: 0,
  //     networkLatency: 0,
  //     domSize: 0,
  //     resourceCount: 0
  //   };
  //   errorCountRef.current = 0;
  // }, []);

  return null; // This component doesn't render anything
};

// Hook for easier usage
export const usePerformanceTracker = (options?: {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  interval?: number;
  enableCoreWebVitals?: boolean;
  enableAdvancedMetrics?: boolean;
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    fps: 0,
    errors: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    networkLatency: 0,
    domSize: 0,
    resourceCount: 0
  });

  const handleMetricsUpdate = useCallback((newMetrics: PerformanceMetrics) => {
    setMetrics(newMetrics);
    options?.onMetricsUpdate?.(newMetrics);
  }, [options]);

  return {
    metrics,
    PerformanceTracker: (
      <PerformanceTracker
        onMetricsUpdate={handleMetricsUpdate}
        interval={options?.interval}
        enableCoreWebVitals={options?.enableCoreWebVitals}
        enableAdvancedMetrics={options?.enableAdvancedMetrics}
      />
    )
  };
};

export default PerformanceTracker;