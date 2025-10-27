import { useEffect, useCallback, useRef, useState } from 'react';

export interface UseEnhancedPerformanceOptions {
  component?: string;
  trackErrors?: boolean;
  trackPerformance?: boolean;
  trackAnalytics?: boolean;
}

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
}

export const useEnhancedPerformance = (options: UseEnhancedPerformanceOptions = {}) => {
  const { component = 'unknown', trackPerformance = true, trackAnalytics = false } = options;
  
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0
  });
  
  const [isOptimized, setIsOptimized] = useState(false);
  const renderCountRef = useRef<number>(0);
  const mountTimeRef = useRef<number>(0);

  useEffect(() => {
    mountTimeRef.current = performance.now();
    renderCountRef.current += 1;

    // Measure load time
    const measureLoadTime = () => {
      const loadTime = performance.now();
      setMetrics(prev => ({ ...prev, loadTime }));
    };

    // Measure render time
    const measureRenderTime = () => {
      const renderStart = performance.now();
      requestAnimationFrame(() => {
        const renderTime = performance.now() - renderStart;
        setMetrics(prev => ({ ...prev, renderTime }));
      });
    };

    // Measure memory usage
    const measureMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as { memory: { usedJSHeapSize: number } }).memory;
        const memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
        setMetrics(prev => ({ ...prev, memoryUsage }));
      }
    };

    // Measure network latency
    const measureNetworkLatency = () => {
      const start = performance.now();
      fetch('/api/ping', { method: 'HEAD' })
        .then(() => {
          const latency = performance.now() - start;
          setMetrics(prev => ({ ...prev, networkLatency: latency }));
        })
        .catch(() => {
          // Ignore network errors for latency measurement
        });
    };

    if (trackPerformance) {
      measureLoadTime();
      measureRenderTime();
      measureMemoryUsage();
      measureNetworkLatency();
    }

    // Track analytics if enabled
    if (trackAnalytics) {
      console.log(`Performance metrics for ${component}:`, metrics);
    }

    // Check if component is optimized
    const checkOptimization = () => {
      const isOptimized = renderCountRef.current < 3 && metrics.loadTime < 1000;
      setIsOptimized(isOptimized);
    };

    checkOptimization();

    return () => {
      // Cleanup if needed
    };
  }, [component, trackPerformance, trackAnalytics, metrics]);

  const optimizeComponent = useCallback(() => {
    // Implement optimization logic here
    setIsOptimized(true);
  }, []);

  const getPerformanceReport = useCallback(() => {
    return {
      component,
      metrics,
      isOptimized,
      renderCount: renderCountRef.current,
      mountTime: mountTimeRef.current
    };
  }, [component, metrics, isOptimized]);

  return {
    metrics,
    isOptimized,
    optimizeComponent,
    getPerformanceReport
  };
};