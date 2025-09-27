import { useEffect, useCallback, useRef } from 'react';
import { lazyLoadManager, resourcePreloader, performanceMetricsCollector } from '../utils/performanceEnhancements';

/**
 * Custom hook for performance optimizations
 */
export const usePerformanceOptimization = () => {
  // const observerRef = useRef<IntersectionObserver | null>(null);
  const performanceStartTime = useRef<number>(0);

  // Initialize performance monitoring
  useEffect(() => {
    performanceStartTime.current = performance.now();
    
    // Initialize lazy loading
    lazyLoadManager.init({
      rootMargin: '50px',
      threshold: 0.1
    });

    // Record initial performance metrics
    const recordInitialMetrics = () => {
      const loadTime = performance.now() - performanceStartTime.current;
      performanceMetricsCollector.recordMetric('initialLoadTime', loadTime);
      
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
      lazyLoadManager.destroy();
    };
  }, []);

  // Lazy load element
  const observeElement = useCallback((element: Element | null) => {
    if (element) {
      lazyLoadManager.observe(element);
    }
  }, []);

  // Preload resource
  const preloadResource = useCallback(async (src: string, type: 'image' | 'script' | 'stylesheet' = 'image') => {
    try {
      switch (type) {
        case 'image':
          await resourcePreloader.preloadImage(src);
          break;
        case 'script':
          await resourcePreloader.preloadScript(src);
          break;
        case 'stylesheet':
          await resourcePreloader.preloadStylesheet(src);
          break;
      }
    } catch (error) {
      console.warn(`Failed to preload ${type}: ${src}`, error);
    }
  }, []);

  // Record custom metric
  const recordMetric = useCallback((name: string, value: number) => {
    performanceMetricsCollector.recordMetric(name, value);
  }, []);

  // Get performance metrics
  const getMetrics = useCallback(() => {
    return performanceMetricsCollector.getAllMetrics();
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