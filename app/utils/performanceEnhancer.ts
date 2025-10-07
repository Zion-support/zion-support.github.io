/**
 * Advanced Performance Enhancer
 * Comprehensive performance optimization utilities for React applications
 */

import { useEffect, useCallback, useRef } from 'react';

// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();
  private observers: PerformanceObserver[] = [];

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Track component render time
  trackRender(componentName: string, renderTime: number) {
    this.metrics.set(`${componentName}_render`, renderTime);
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Performance] ${componentName} rendered in ${renderTime.toFixed(2)}ms`);
    }
  }

  // Track memory usage
  trackMemory(componentName: string) {
    if ('memory' in performance) {
      const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory;
      if (memory) {
        this.metrics.set(`${componentName}_memory`, memory.usedJSHeapSize);
      }
    }
  }

  // Get performance metrics
  getMetrics() {
    return Object.fromEntries(this.metrics);
  }

  // Clear metrics
  clearMetrics() {
    this.metrics.clear();
  }

  // Monitor long tasks
  startLongTaskMonitoring() {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.duration > 50) { // Tasks longer than 50ms
          console.warn(`[Performance] Long task detected: ${entry.duration.toFixed(2)}ms`);
        }
      });
    });

    observer.observe({ entryTypes: ['longtask'] });
    this.observers.push(observer);
  }

  // Cleanup observers
  cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// React hook for performance monitoring
export const usePerformanceMonitor = (componentName: string) => {
  const renderStartTime = useRef<number>(0);
  const monitor = PerformanceMonitor.getInstance();

  useEffect(() => {
    renderStartTime.current = performance.now();
    
    return () => {
      const renderTime = performance.now() - renderStartTime.current;
      monitor.trackRender(componentName, renderTime);
      monitor.trackMemory(componentName);
    };
  }, [componentName, monitor]);

  return {
    trackRender: (fn: () => void) => {
      const start = performance.now();
      fn();
      const duration = performance.now() - start;
      monitor.trackRender(`${componentName}_function`, duration);
    }
  };
};

// Image optimization utilities
export const optimizeImages = () => {
  if (typeof window === 'undefined') return;

  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    // Add loading="lazy" if not already present
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }

    // Add decoding="async" for better performance
    if (!img.hasAttribute('decoding')) {
      img.setAttribute('decoding', 'async');
    }

    // Add proper alt text if missing
    if (!img.hasAttribute('alt')) {
      img.setAttribute('alt', '');
    }
  });
};

// Bundle size optimization
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return;

  const criticalResources = [
    '/fonts/inter.woff2',
    '/css/critical.css',
    '/js/critical.js'
  ];

  criticalResources.forEach((resource) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.woff2') ? 'font' : 'script';
    if (resource.endsWith('.woff2')) {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
};

// Memory leak prevention
export const useMemoryOptimization = () => {
  const cleanupFunctions = useRef<(() => void)[]>([]);

  const addCleanup = useCallback((cleanup: () => void) => {
    cleanupFunctions.current.push(cleanup);
  }, []);

  useEffect(() => {
    return () => {
      cleanupFunctions.current.forEach(cleanup => cleanup());
      cleanupFunctions.current = [];
    };
  }, []);

  return { addCleanup };
};

// Intersection Observer for lazy loading
export const useIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    observerRef.current = new IntersectionObserver(callback, {
      rootMargin: '50px',
      threshold: 0.1,
      ...options
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [callback, options]);

  return observerRef.current;
};

// Web Vitals monitoring
export const trackWebVitals = () => {
  if (typeof window === 'undefined') return;

  // Track Core Web Vitals
  const trackCLS = () => {
    let clsValue = 0;
    let clsEntries: PerformanceEntry[] = [];

    interface LayoutShiftEntry extends PerformanceEntry {
      hadRecentInput?: boolean;
      value: number;
    }

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutEntry = entry as LayoutShiftEntry;
        if (!layoutEntry.hadRecentInput) {
          clsEntries.push(entry);
          clsValue += layoutEntry.value;
        }
      }
    });

    observer.observe({ entryTypes: ['layout-shift'] });

    return () => {
      observer.disconnect();
      return clsValue;
    };
  };

  const trackLCP = () => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('[Web Vitals] LCP:', lastEntry.startTime);
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });

    return () => observer.disconnect();
  };

  const trackFID = () => {
    interface FirstInputEntry extends PerformanceEntry {
      processingStart: number;
    }
    
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fidEntry = entry as FirstInputEntry;
        const fid = fidEntry.processingStart - entry.startTime;
        console.log('[Web Vitals] FID:', fid);
      }
    });

    observer.observe({ entryTypes: ['first-input'] });

    return () => observer.disconnect();
  };

  // Start tracking
  const cleanupCLS = trackCLS();
  const cleanupLCP = trackLCP();
  const cleanupFID = trackFID();

  return () => {
    cleanupCLS();
    cleanupLCP();
    cleanupFID();
  };
};

// Performance budget checker
export const checkPerformanceBudget = () => {
  if (typeof window === 'undefined') return;

  const budget = {
    maxBundleSize: 500 * 1024, // 500KB
    maxImageSize: 200 * 1024,  // 200KB
    maxFirstLoad: 3000,        // 3 seconds
    maxInteractive: 5000       // 5 seconds
  };

  // Check bundle size
  const scripts = document.querySelectorAll('script[src]');
  let totalScriptSize = 0;
  
  scripts.forEach((script) => {
    const src = script.getAttribute('src');
    if (src && !src.includes('localhost')) {
      // In a real implementation, you'd fetch and measure the actual size
      totalScriptSize += 100 * 1024; // Placeholder
    }
  });

  if (totalScriptSize > budget.maxBundleSize) {
    console.warn(`[Performance Budget] Bundle size exceeded: ${totalScriptSize} > ${budget.maxBundleSize}`);
  }

  // Check page load time
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (navigation) {
    const loadTime = navigation.loadEventEnd - navigation.fetchStart;
    if (loadTime > budget.maxFirstLoad) {
      console.warn(`[Performance Budget] Load time exceeded: ${loadTime}ms > ${budget.maxFirstLoad}ms`);
    }
  }
};

// Initialize performance monitoring
export const initializePerformanceMonitoring = () => {
  if (typeof window === 'undefined') return;

  const monitor = PerformanceMonitor.getInstance();
  
  // Start monitoring
  monitor.startLongTaskMonitoring();
  
  // Optimize images
  optimizeImages();
  
  // Preload critical resources
  preloadCriticalResources();
  
  // Track Web Vitals
  const cleanupWebVitals = trackWebVitals();
  
  // Check performance budget
  checkPerformanceBudget();

  return () => {
    monitor.cleanup();
    cleanupWebVitals();
  };
};

export default PerformanceMonitor;