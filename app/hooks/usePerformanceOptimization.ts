import { useEffect, useCallback, useRef } from 'react';

interface PerformanceOptions {
  enableWebVitals?: boolean;
  enableResourceTiming?: boolean;
  enableUserTiming?: boolean;
  enableLongTaskDetection?: boolean;
}

export const usePerformanceOptimization = (options: PerformanceOptions = {}) => {
  const {
    enableWebVitals = true,
    enableResourceTiming = true,
    enableUserTiming = true,
    enableLongTaskDetection = true
  } = options;

  const observerRef = useRef<PerformanceObserver | null>(null);

  const measurePerformance = useCallback((name: string, startTime?: number) => {
    if (typeof window !== 'undefined' && window.performance && enableUserTiming) {
      const endTime = performance.now();
      const duration = startTime ? endTime - startTime : 0;
      
      performance.mark(`${name}-end`);
      performance.measure(name, `${name}-start`, `${name}-end`);
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Performance] ${name}: ${duration.toFixed(2)}ms`);
      }
    }
  }, [enableUserTiming]);

  const startTiming = useCallback((name: string) => {
    if (typeof window !== 'undefined' && window.performance && enableUserTiming) {
      performance.mark(`${name}-start`);
      return performance.now();
    }
    return 0;
  }, [enableUserTiming]);

  const measureComponentRender = useCallback((componentName: string) => {
    const startTime = startTiming(`${componentName}-render`);
    return () => measurePerformance(`${componentName}-render`, startTime);
  }, [startTiming, measurePerformance]);

  const measureAsyncOperation = useCallback(async <T>(
    operation: () => Promise<T>,
    operationName: string
  ): Promise<T> => {
    const startTime = startTiming(operationName);
    try {
      const result = await operation();
      measurePerformance(operationName, startTime);
      return result;
    } catch (error) {
      measurePerformance(`${operationName}-error`, startTime);
      throw error;
    }
  }, [startTiming, measurePerformance]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Web Vitals monitoring
    if (enableWebVitals && process.env.NODE_ENV === 'production') {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
        const sendToAnalytics = (metric: any) => {
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', metric.name, {
              event_category: 'Web Vitals',
              event_label: metric.id,
              value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
              non_interaction: true,
            });
          }
        };

        onCLS(sendToAnalytics);
        onFCP(sendToAnalytics);
        onLCP(sendToAnalytics);
        onTTFB(sendToAnalytics);
        onINP(sendToAnalytics);
      }).catch((error) => {
        console.warn('Failed to load web-vitals:', error);
      });
    }

    // Resource timing monitoring
    if (enableResourceTiming) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (process.env.NODE_ENV === 'development') {
            console.log(`[Resource] ${entry.name}: ${entry.duration.toFixed(2)}ms`);
          }
        });
      });

      try {
        observer.observe({ entryTypes: ['resource'] });
        observerRef.current = observer;
      } catch (error) {
        console.warn('Resource timing not supported:', error);
      }
    }

    // Long task detection
    if (enableLongTaskDetection && 'PerformanceObserver' in window) {
      const longTaskObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (process.env.NODE_ENV === 'development') {
            console.warn(`[Long Task] ${entry.duration.toFixed(2)}ms task detected`);
          }
        });
      });

      try {
        longTaskObserver.observe({ entryTypes: ['longtask'] });
      } catch (error) {
        console.warn('Long task detection not supported:', error);
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [enableWebVitals, enableResourceTiming, enableLongTaskDetection]);

  return {
    measurePerformance,
    startTiming,
    measureComponentRender,
    measureAsyncOperation
  };
};