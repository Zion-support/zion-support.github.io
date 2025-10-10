// Performance utilities for optimizing React components and application performance

import React from 'react';

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export const memoize = <T extends (...args: any[]) => any>(fn: T): T => {
  const cache = new Map();
  return ((...args: Parameters<T>) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
};

/**
 * Lazy load a component with dynamic import
 */
export function lazyLoad<T extends React.ComponentType<unknown>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: React.ReactNode
): React.LazyExoticComponent<T> {
  const LazyComponent = React.lazy(importFunc);
  if (fallback) {
    return LazyComponent;
  }
  return LazyComponent;
}

/**
 * Measure function execution time
 */
export async function measureTime<T>(
  name: string,
  func: () => T | Promise<T>
): Promise<{ result: T; duration: number }> {
  const start = performance.now();
  const result = await func();
  const duration = performance.now() - start;
  if (process.env.NODE_ENV === 'development') {
    console.log(`${name} took ${duration.toFixed(2)}ms`);
  }
  return { result, duration };
}

/**
 * Batch async operations
 */
export async function batchAsync<T, R>(
  items: T[],
  operation: (item: T) => Promise<R>,
  batchSize = 10
): Promise<R[]> {
  const results: R[] = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(operation));
    results.push(...batchResults);
  }
  return results;
}

/**
 * Create a performance observer for monitoring
 */
export function createPerformanceObserver(
  callback: (entries: PerformanceEntry[]) => void
): PerformanceObserver | null {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return null;
  }

  try {
    const observer = new PerformanceObserver(callback);
    return observer;
  } catch (error) {
    console.warn('PerformanceObserver not supported:', error);
    return null;
  }
}

/**
 * Monitor Core Web Vitals
 */
export function monitorCoreWebVitals() {
  if (typeof window === 'undefined') return;

  const observer = createPerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'largest-contentful-paint') {
        console.log('LCP:', entry.startTime);
      } else if (entry.entryType === 'first-input') {
        console.log('FID:', entry.processingStart - entry.startTime);
      } else if (entry.entryType === 'layout-shift') {
        console.log('CLS:', (entry as any).value);
      }
    }
  });

  if (observer) {
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
  }
}

/**
 * Preload critical resources
 */
export function preloadResource(href: string, as: string, type?: string) {
  if (typeof document === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (type) link.type = type;
  document.head.appendChild(link);
}

/**
 * Prefetch resources
 */
export function prefetchResource(href: string, as: string, type?: string) {
  if (typeof document === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  link.as = as;
  if (type) link.type = type;
  document.head.appendChild(link);
}

/**
 * Intersection Observer for lazy loading
 */
export function createIntersectionObserver(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
): IntersectionObserver | null {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  try {
    return new IntersectionObserver(callback, options);
  } catch (error) {
    console.warn('IntersectionObserver not supported:', error);
    return null;
  }
}

/**
 * Request Idle Callback polyfill
 */
export function requestIdleCallback(
  callback: (deadline: IdleDeadline) => void,
  options?: { timeout?: number }
): number {
  if (typeof window === 'undefined') {
    return setTimeout(() => callback({ didTimeout: false, timeRemaining: () => 0 }), 0);
  }

  if ('requestIdleCallback' in window) {
    return window.requestIdleCallback(callback, options);
  }

  // Fallback for browsers that don't support requestIdleCallback
  return setTimeout(() => {
    callback({
      didTimeout: false,
      timeRemaining: () => 0
    });
  }, 1);
}

/**
 * Cancel Idle Callback
 */
export function cancelIdleCallback(id: number) {
  if (typeof window === 'undefined') return;

  if ('cancelIdleCallback' in window) {
    window.cancelIdleCallback(id);
  } else {
    clearTimeout(id);
  }
}

/**
 * Performance mark
 */
export function mark(name: string) {
  if (typeof performance !== 'undefined' && 'mark' in performance) {
    performance.mark(name);
  }
}

/**
 * Performance measure
 */
export function measure(name: string, startMark: string, endMark?: string) {
  if (typeof performance !== 'undefined' && 'measure' in performance) {
    try {
      performance.measure(name, startMark, endMark);
    } catch (error) {
      console.warn('Performance measure failed:', error);
    }
  }
}

/**
 * Get performance metrics
 */
export function getPerformanceMetrics() {
  if (typeof performance === 'undefined') return null;

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const paint = performance.getEntriesByType('paint');

  return {
    navigation: navigation ? {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      domInteractive: navigation.domInteractive - navigation.navigationStart,
      totalTime: navigation.loadEventEnd - navigation.navigationStart
    } : null,
    paint: paint.reduce((acc, entry) => {
      acc[entry.name] = entry.startTime;
      return acc;
    }, {} as Record<string, number>)
  };
}