'use client';
import React from 'react';
import { useRef } from 'react';

/**
 * Performance Enhancement Utilities
 * Advanced performance optimization tools for the application
 */

// Debounce function for performance optimization
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (..._args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(..._args), wait);
  };
};

// Throttle function for performance optimization
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (..._args: Parameters<T>) => {
    if (!inThrottle) {
      func(..._args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Memoization utility
export const memoize = <T extends (...args: unknown[]) => unknown>(
  func: T
): T => {
  const cache = new Map();
  return ((..._args: Parameters<T>) => {
    const key = JSON.stringify(_args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func(..._args);
    cache.set(key, result);
    return result;
  }) as T;
};

// Performance monitoring hook
export const usePerformanceMonitor = () => {
  const startTime = useRef<number>(0);
  const endTime = useRef<number>(0);

  const startTimer = () => {
    startTime.current = performance.now();
  };

  const endTimer = () => {
    endTime.current = performance.now();
    return endTime.current - startTime.current;
  };

  const getDuration = () => {
    return endTime.current - startTime.current;
  };

  return { startTimer, endTimer, getDuration };
};

// Image lazy loading utility
export const useLazyImage = (src: string, placeholder?: string) => {
  const [imageSrc, setImageSrc] = React.useState(placeholder || '');
  const [isLoaded, setIsLoaded] = React.useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src]);

  return { imgRef, imageSrc, isLoaded };
};

// Virtual scrolling utility
export const useVirtualScroll = (
  items: unknown[],
  itemHeight: number,
  containerHeight: number
) => {
  const [scrollTop, setScrollTop] = React.useState(0);
  const [visibleItems, setVisibleItems] = React.useState<unknown[]>([]);

  React.useEffect(() => {
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
      startIndex + Math.ceil(containerHeight / itemHeight) + 1,
      items.length
    );

    setVisibleItems(items.slice(startIndex, endIndex));
  }, [scrollTop, items, itemHeight, containerHeight]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  return { visibleItems, handleScroll };
};

// Performance optimization for large lists
export const useOptimizedList = <T>(
  items: T[],
  _keyExtractor: (_item: T) => string | number
) => {
  const [visibleItems, setVisibleItems] = React.useState<T[]>([]);
  const [startIndex, setStartIndex] = React.useState(0);
  const [endIndex, setEndIndex] = React.useState(10);

  React.useEffect(() => {
    setVisibleItems(items.slice(startIndex, endIndex));
  }, [items, startIndex, endIndex]);

  const loadMore = () => {
    setEndIndex(prev => Math.min(prev + 10, items.length));
  };

  const reset = () => {
    setStartIndex(0);
    setEndIndex(10);
  };

  return { visibleItems, loadMore, reset };
};

// Bundle size optimization
export const useCodeSplitting = (importFn: () => Promise<unknown>) => {
  const [Component, setComponent] = React.useState<React.ComponentType | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    setIsLoading(true);
    importFn()
      .then((module: { default: React.ComponentType }) => {
        setComponent(() => module.default);
        setError(null);
      })
      .catch((err: Error) => {
        setError(err);
        setComponent(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [importFn]);

  return { Component, isLoading, error };
};

// Memory optimization
export const useMemoryOptimization = () => {
  const cleanupFunctions = useRef<(() => void)[]>([]);

  const addCleanup = (cleanup: () => void) => {
    cleanupFunctions.current.push(cleanup);
  };

  React.useEffect(() => {
    return () => {
      cleanupFunctions.current.forEach(cleanup => cleanup());
      cleanupFunctions.current = [];
    };
  }, []);

  return { addCleanup };
};

// Performance metrics collection
export const usePerformanceMetrics = () => {
  const [metrics, setMetrics] = React.useState({
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0,
  });

  React.useEffect(() => {
    const measurePerformance = () => {
      const renderTime = performance.now();
      const memoryUsage = (performance as { memory?: { usedJSHeapSize: number } }).memory?.usedJSHeapSize || 0;
      
      setMetrics(prev => ({
        ...prev,
        renderTime,
        memoryUsage,
      }));
    };

    measurePerformance();
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return metrics;
};
