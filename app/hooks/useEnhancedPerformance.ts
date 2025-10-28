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
  const componentName = options.component || 'Unknown';
  
  // State for performance metrics
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0,
  });

  // Refs for performance tracking
  const startTimeRef = useRef<number>(0);
  const renderStartRef = useRef<number>(0);

  // Measure load time
  const measureLoadTime = useCallback(() => {
    if (typeof window !== 'undefined') {
      const loadTime = performance.now() - startTimeRef.current;
      setMetrics(prev => ({ ...prev, loadTime }));
    }
  }, []);

  // Measure render time
  const measureRenderTime = useCallback(() => {
    if (typeof window !== 'undefined') {
      const renderTime = performance.now() - renderStartRef.current;
      setMetrics(prev => ({ ...prev, renderTime }));
    }
  }, []);

  // Measure memory usage
  const measureMemoryUsage = useCallback(() => {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const memory = (performance as unknown as { memory: { usedJSHeapSize: number } }).memory;
      const memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
      setMetrics(prev => ({ ...prev, memoryUsage }));
    }
  }, []);

  // Measure network latency
  const measureNetworkLatency = useCallback(() => {
    if (typeof window !== 'undefined') {
      const startTime = performance.now();
      fetch('/api/ping', { method: 'HEAD' })
        .then(() => {
          const latency = performance.now() - startTime;
          setMetrics(prev => ({ ...prev, networkLatency: latency }));
        })
        .catch(() => {
          // Ignore network errors for latency measurement
        });
    }
  }, []);

  // Error tracking
  const trackError = useCallback((error: Error, errorInfo?: any) => {
    if (options.trackErrors) {
      console.error(`Error in ${componentName}:`, error, errorInfo);
      
      // Send to analytics if enabled
      if (options.trackAnalytics && typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'exception', {
          description: error.message,
          fatal: false,
          custom_map: {
            component: componentName,
          },
        });
      }
    }
  }, [componentName, options.trackErrors, options.trackAnalytics]);

  // Performance tracking
  const trackPerformance = useCallback((metricName: string, value: number) => {
    if (options.trackPerformance) {
      console.log(`Performance metric in ${componentName}: ${metricName} = ${value}ms`);
      
      // Send to analytics if enabled
      if (options.trackAnalytics && typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'timing_complete', {
          name: metricName,
          value: Math.round(value),
          custom_map: {
            component: componentName,
          },
        });
      }
    }
  }, [componentName, options.trackPerformance, options.trackAnalytics]);

  // Initialize performance tracking
  useEffect(() => {
    if (typeof window !== 'undefined') {
      startTimeRef.current = performance.now();
      renderStartRef.current = performance.now();
    }
  }, []);

  // Measure performance on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      measureLoadTime();
      measureRenderTime();
      measureMemoryUsage();
      measureNetworkLatency();
    }
  }, [measureLoadTime, measureRenderTime, measureMemoryUsage, measureNetworkLatency]);

  // Return performance utilities
  return {
    metrics,
    trackError,
    trackPerformance,
    measureLoadTime,
    measureRenderTime,
    measureMemoryUsage,
    measureNetworkLatency,
  };
};