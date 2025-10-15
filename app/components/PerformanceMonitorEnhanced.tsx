import React, { useEffect, useRef, useCallback } from 'react';

interface PerformanceMetrics {
  cls?: number;
  fcp?: number;
  lcp?: number;
  ttfb?: number;
  inp?: number;
  fid?: number;
}

interface PerformanceData {
  metrics: PerformanceMetrics;
  timestamp: number;
  url: string;
  userAgent: string;
}

const PerformanceMonitorEnhanced: React.FC = () => {
  const metricsRef = useRef<PerformanceMetrics>({});
  const observerRef = useRef<PerformanceObserver | null>(null);
  const isInitializedRef = useRef(false);

  // Enhanced metric handler with better typing
  const handleMetric = useCallback((metric: { name: string; value: number; delta?: number }) => {
    const metricName = metric.name.toLowerCase() as keyof PerformanceMetrics;
    metricsRef.current[metricName] = metric.value;
    
    // Only log in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance metric ${metric.name}:`, metric.value);
    }
    
    // Store metrics for analytics in production
    if (process.env.NODE_ENV === 'production') {
      // Send to analytics service
      // analyticsService.track('performance_metric', { 
      //   metric: metric.name, 
      //   value: metric.value,
      //   delta: metric.delta,
      //   timestamp: Date.now()
      // });
    }
  }, []);

  // Initialize Web Vitals monitoring
  const initializeWebVitals = useCallback(async () => {
    try {
      const { onCLS, onFCP, onLCP, onTTFB, onINP, onFID } = await import('web-vitals');
      
      onCLS(handleMetric);
      onFCP(handleMetric);
      onLCP(handleMetric);
      onTTFB(handleMetric);
      onINP(handleMetric);
      onFID(handleMetric);
    } catch (error) {
      // Silently fail if web-vitals is not available
      if (process.env.NODE_ENV === 'development') {
        console.warn('Web Vitals not available:', error);
      }
    }
  }, [handleMetric]);

  // Initialize Performance Observer
  const initializePerformanceObserver = useCallback(() => {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            
            // Calculate additional metrics
            const domContentLoaded = navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart;
            const loadComplete = navEntry.loadEventEnd - navEntry.loadEventStart;
            
            if (process.env.NODE_ENV === 'development') {
              console.log('Navigation timing:', {
                domContentLoaded,
                loadComplete,
                totalTime: navEntry.loadEventEnd - navEntry.fetchStart
              });
            }
          }
        }
      });

      observer.observe({ entryTypes: ['navigation'] });
      observerRef.current = observer;
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Performance Observer failed:', error);
      }
    }
  }, []);

  // Memory monitoring
  const monitorMemory = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const memoryData = {
        used: Math.round(memory.usedJSHeapSize / 1048576), // MB
        total: Math.round(memory.totalJSHeapSize / 1048576), // MB
        limit: Math.round(memory.jsHeapSizeLimit / 1048576) // MB
      };

      if (process.env.NODE_ENV === 'development') {
        console.log('Memory usage:', memoryData);
      }

      // Alert if memory usage is high
      if (memoryData.used / memoryData.limit > 0.8) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('High memory usage detected:', memoryData);
        }
      }
    }
  }, []);

  // Initialize all monitoring
  useEffect(() => {
    if (isInitializedRef.current) return;
    isInitializedRef.current = true;

    // Initialize Web Vitals
    initializeWebVitals();

    // Initialize Performance Observer
    initializePerformanceObserver();

    // Monitor memory usage
    monitorMemory();

    // Set up periodic memory monitoring
    const memoryInterval = setInterval(monitorMemory, 30000); // Every 30 seconds

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      clearInterval(memoryInterval);
    };
  }, [initializeWebVitals, initializePerformanceObserver, monitorMemory]);

  // Expose performance data for debugging
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      (window as any).__performanceData = () => ({
        metrics: metricsRef.current,
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent
      });
    }
  }, []);

  return null;
};

export default PerformanceMonitorEnhanced;