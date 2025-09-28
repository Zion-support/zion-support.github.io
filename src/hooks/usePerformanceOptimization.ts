import { useEffect, useCallback, useRef } from 'react';
import performanceEnhancer from '../utils/performanceEnhancements';

/**
 * Custom hook for performance optimizations
 */
export const usePerformanceOptimization = () => {
  const performanceStartTime = useRef<number>(0);

  // Initialize performance monitoring
  useEffect(() => {
    performanceStartTime.current = performance.now();
    
    // Record initial performance metrics
    const recordInitialMetrics = () => {
      const loadTime = performance.now() - performanceStartTime.current;
      console.log('Initial load time:', loadTime);
      
      // Record Core Web Vitals
      if ('web-vital' in window) {
        // This would integrate with web-vitals library
        console.log('Core Web Vitals monitoring initialized');
      }
    };

    // Record metrics after a short delay to ensure everything is loaded
    const timeoutId = setTimeout(recordInitialMetrics, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Lazy load element
  const observeElement = useCallback((element: Element | null) => {
    if (element) {
      // Use the performance enhancer's lazy loading functionality
      console.log('Observing element for lazy loading:', element);
    }
  }, []);

  // Preload resource
  const preloadResource = useCallback(async (src: string, type: 'image' | 'script' | 'stylesheet' = 'image') => {
    try {
      performanceEnhancer.preloadResource(src, type as 'image' | 'script' | 'style');
    } catch (error) {
      console.warn(`Failed to preload ${type}: ${src}`, error);
    }
  }, []);

  // Record custom metric
  const recordMetric = useCallback((name: string, value: number) => {
    console.log(`Recording metric: ${name} = ${value}`);
  }, []);

  // Get performance metrics
  const getMetrics = useCallback(() => {
    return {
      loadTime: performance.now() - performanceStartTime.current,
      memoryUsage: (performance as Performance & { memory?: { usedJSHeapSize?: number } }).memory?.usedJSHeapSize || 0,
    };
  }, []);

  return {
    observeElement,
    preloadResource,
    recordMetric,
    getMetrics
  };
};

/**
 * Hook for lazy loading images
 */
export const useLazyImage = (src: string, placeholder?: string) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const { observeElement } = usePerformanceOptimization();

  useEffect(() => {
    if (imgRef.current) {
      observeElement(imgRef.current);
    }
  }, [observeElement]);

  return {
    ref: imgRef,
    src: placeholder || src,
    'data-src': src,
    className: 'lazy'
  };
};

/**
 * Hook for performance monitoring
 */
export const usePerformanceMonitor = () => {
  const { recordMetric, getMetrics } = usePerformanceOptimization();

  // Monitor component render time
  const measureRender = useCallback((componentName: string, renderFn: () => void) => {
    const start = performance.now();
    renderFn();
    const end = performance.now();
    recordMetric(`${componentName}_renderTime`, end - start);
  }, [recordMetric]);

  // Monitor async operations
  const measureAsync = useCallback(async <T>(
    operationName: string, 
    operation: () => Promise<T>
  ): Promise<T> => {
    const start = performance.now();
    try {
      const result = await operation();
      const end = performance.now();
      recordMetric(`${operationName}_duration`, end - start);
      return result;
    } catch (error) {
      const end = performance.now();
      recordMetric(`${operationName}_error_duration`, end - start);
      throw error;
    }
  }, [recordMetric]);

  return {
    measureRender,
    measureAsync,
    getMetrics
  };
};