import { useEffect, useRef, useState, useCallback } from 'react';

interface UseEnhancedPerformanceOptions {
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
  // Component name for performance tracking
  const componentName = options.component || 'unknown';
  
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0,
  });

  const startTimeRef = useRef(performance.now());
  const renderStartTimeRef = useRef(performance.now());

  // Measure render time
  const measureRenderTime = useCallback(() => {
    const renderTime = performance.now() - renderStartTimeRef.current;
    setMetrics(prev => ({ ...prev, renderTime }));
  }, []);

  // Measure memory usage
  const measureMemoryUsage = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as unknown as { memory: { usedJSHeapSize: number } }).memory;
      const memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
      setMetrics(prev => ({ ...prev, memoryUsage }));
    }
  }, []);

  // Measure network latency
  const measureNetworkLatency = useCallback(() => {
    const startTime = performance.now();
    fetch('/api/ping', { method: 'HEAD' })
      .then(() => {
        const latency = performance.now() - startTime;
        setMetrics(prev => ({ ...prev, networkLatency: latency }));
      })
      .catch(() => {
        // Fallback if ping endpoint doesn't exist
        setMetrics(prev => ({ ...prev, networkLatency: 0 }));
      });
  }, []);

  // Run measurements
  const runMeasurements = useCallback(() => {
    if (options.trackPerformance) {
      measureRenderTime();
      measureMemoryUsage();
      measureNetworkLatency();
    }
  }, [options.trackPerformance, measureRenderTime, measureMemoryUsage, measureNetworkLatency]);

  // Track errors
  useEffect(() => {
    if (!options.trackErrors) return;

    const handleError = (error: ErrorEvent) => {
      console.error(`Error in ${componentName}:`, error);
      // You can add error reporting service here
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, [options.trackErrors, componentName]);

  // Track performance
  useEffect(() => {
    if (!options.trackPerformance) return;

    const loadTime = performance.now() - startTimeRef.current;
    setMetrics(prev => ({ ...prev, loadTime }));

    runMeasurements();
  }, [options.trackPerformance, runMeasurements]);

  // Track analytics
  useEffect(() => {
    if (!options.trackAnalytics) return;

    // You can add analytics tracking here
    console.log(`Analytics for ${componentName}:`, metrics);
  }, [options.trackAnalytics, componentName, metrics]);

  return {
    metrics,
    runMeasurements,
    componentName,
  };
};