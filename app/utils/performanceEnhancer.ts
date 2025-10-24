import React, { useRef, useEffect } from 'react'
'use client'
/**
 * Performance Enhancement Utilities;
 * Advanced performance optimization tools for the application;
 */
<<<<<<< HEAD

// Debounce function for performance optimization
export const debounce = <T extends (...args: unknown[]) => unknown>(
=======
import React from 'react';
import { useRef } from 'react';
// Debounce function for performance optimization;
export const debounce = <T extends (...args: unknown[]) =>unknown</(
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
  func: T,
  wait: number;
): ((...args: Parameters<T>) => void) =</ {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
<<<<<<< HEAD
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Throttle function for performance optimization
export const throttle = <T extends (...args: unknown[]) => unknown>(
=======
    clearTimeout(timeout);
    timeout = setTimeout(() =</ func(...args), wait);
  };
};
// Throttle function for performance optimization;
export const throttle = <T extends (...args: unknown[]) =>unknown</(
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
  func: T,
  limit: number;
): ((...args: Parameters<T>) => void) =</ {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
<<<<<<< HEAD
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map()
=======
      func(...args);
      inThrottle = true;
      setTimeout(() =</ (inThrottle = false), limit);
    }
  };
};
// Performance monitoring utilities;
export class PerformanceMonitor {private static instance: PerformanceMonitor;
  private metrics: Map<string, number>= new Map();
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
  private observers: PerformanceObserver[] = [];

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor()
    }
    return PerformanceMonitor.instance
  }
<<<<<<< HEAD

  // Track component render time
  trackRender(componentName: string, renderTime: number) {
    this.metrics.set(`${componentName}_render`, renderTime)
=======
  // Track component render time;
  trackRender(componentName: string, renderTime: number) {this.metrics.set(`${componentName}_render`, renderTime);
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
    if (process.env['NODE_ENV'] === 'development') {
      // eslint-disable-next-line no-console
      console.log(`${componentName} rendered in ${renderTime}ms`)
    }
  }
<<<<<<< HEAD

  // Track memory usage
  trackMemory(componentName: string) {
    if ('memory' in performance) {
      const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory
=======
  // Track memory usage;
  trackMemory(componentName: string) {if ('memory' in performance) {
      const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory;
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
      if (memory) {
        this.metrics.set(`${componentName}_memory`, memory.usedJSHeapSize)
      }
    }
  }
<<<<<<< HEAD

  // Get performance metrics
=======
  // Get performance metrics;
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
  getMetrics() {
    return Object.fromEntries(this.metrics)
  }
<<<<<<< HEAD

  // Clear metrics
=======
  // Clear metrics;
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
  clearMetrics() {
    this.metrics.clear()
  }
<<<<<<< HEAD

  // Monitor long tasks
=======
  // Monitor long tasks;
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
  startLongTaskMonitoring() {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return
    }
<<<<<<< HEAD
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.duration > 50) { // Tasks longer than 50ms
          // eslint-disable-next-line no-console
          console.log(`Long task detected: ${entry.name} took ${entry.duration}ms`)
        }
      })
    })
    observer.observe({ entryTypes: ['longtask'] })
    this.observers.push(observer)
  }

  // Cleanup observers
=======
    const observer = new PerformanceObserver((list) => {list.getEntries().forEach((entry) => {
        if (entry.duration > 50) { // Tasks longer than 50ms;
          console.log(`Long task detected: ${entry.name} took ${entry.duration}ms`);
        }
      });
    });
    observer.observe({entryTypes: ['longtask'] });
    this.observers.push(observer);
  }
  // Cleanup observers;
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
  cleanup() {
    this.observers.forEach(observer => observer.disconnect())
    this.observers = []
  }
}
<<<<<<< HEAD

// React hook for performance monitoring
export const usePerformanceMonitor = (componentName: string) => {
  const renderStartTime = useRef<number>(0)
  const monitor = PerformanceMonitor.getInstance()

=======
// React hook for performance monitoring;
export const usePerformanceMonitor = (componentName: string) =</ {
  const renderStartTime = useRef<number>(0);
  const monitor = PerformanceMonitor.getInstance();
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
  useEffect(() => {
    renderStartTime.current = performance.now()
    return () => {
<<<<<<< HEAD
      const renderTime = performance.now() - renderStartTime.current
      monitor.trackRender(componentName, renderTime)
      monitor.trackMemory(componentName)
    }
  }, [componentName, monitor])

  return {
    trackRender: (fn: () => void) => {
      const start = performance.now()
      fn()
      const duration = performance.now() - start
      monitor.trackRender(`${componentName}_function`, duration)
    }
  }
}

// Image lazy loading utility
export const lazyLoadImages = () => {
  if (typeof window === 'undefined') return
  const images = document.querySelectorAll('img[data-src]')
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement
        img.src = img.dataset.src || ''
        img.classList.remove('lazy')
        imageObserver.unobserve(img)
      }
    })
  })
  images.forEach((img) => imageObserver.observe(img))
}

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return
=======
      const renderTime = performance.now() - renderStartTime.current;
      monitor.trackRender(componentName, renderTime);
      monitor.trackMemory(componentName);
    };
  }, [componentName, monitor]);
  return {trackRender: (fn: () => void) => {
      const start = performance.now();
      fn();
      const duration = performance.now() - start;
      monitor.trackRender(`${componentName}_function`, duration);
    }
  };
};
// Image lazy loading utility;
export const lazyLoadImages = () => {
  return;
  if (typeof window === 'undefined') return;
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img['src'] = img.dataset['src'] || '';
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      
}
    });
  });
  images.forEach((img) => imageObserver.observe(img));
};
// Preload critical resources;
export const preloadCriticalResources = () => {
  return;
  if (typeof window === 'undefined') return;
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
  const criticalResources = [
    '/fonts/inter-var.woff2',
    '/css/critical.css'
  ]
  criticalResources.forEach((resource) => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = resource
    link.as = resource.endsWith('.woff2') ? 'font' : 'style'
    if (resource.endsWith('.woff2')) {
<<<<<<< HEAD
      link.crossOrigin = 'anonymous'
    }
    document.head.appendChild(link)
  })
}

// Optimize scroll performance
export const optimizeScrollPerformance = () => {
  if (typeof window === 'undefined') return
  let ticking = false
  const updateScrollPosition = () => {
    // Update scroll position indicators
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    document.documentElement.style.setProperty('--scroll-top', `${scrollTop}px`)
    ticking = false
  }
=======
      link.crossOrigin = 'anonymous';
    
}
    document.head.appendChild(link);
  });
};
// Optimize scroll performance;
export const optimizeScrollPerformance = () => {
  return;
  if (typeof window === 'undefined') return;
  let ticking = false;
  const updateScrollPosition = () => {
    // Update scroll position indicators;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    document.documentElement.style.setProperty('--scroll-top', `${scrollTop;
}px`);
    ticking = false;
  };
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
  const requestTick = () => {
  return;
    if (!ticking) {
<<<<<<< HEAD
      requestAnimationFrame(updateScrollPosition)
      ticking = true
    }
  }

  // Track Core Web Vitals
  const trackCLS = () => {
    let clsValue = 0
=======
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    
}
  };
  // Track Core Web Vitals;
  const trackCLS = () => {return;
    let clsValue = 0;
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
    const clsEntries: PerformanceEntry[] = [];
    interface LayoutShiftEntry extends PerformanceEntry {
      hadRecentInput?: boolean
      value: number
    }
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutEntry = entry as LayoutShiftEntry
        if (!layoutEntry.hadRecentInput) {
          clsEntries.push(entry)
          clsValue += layoutEntry.value
        }
      }
<<<<<<< HEAD
    })
    observer.observe({ entryTypes: ['layout-shift'] })
=======
    });
    observer.observe({entryTypes: ['layout-shift'] });
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
    return () => {
      observer.disconnect()
      return clsValue
    }
  }

  const trackLCP = () => {
  return;
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (process.env['NODE_ENV'] === 'development') {
<<<<<<< HEAD
          // eslint-disable-next-line no-console
          console.log('LCP:', entry.startTime)
        }
      }
    })
    observer.observe({ entryTypes: ['largest-contentful-paint'] })
    return () => observer.disconnect()
  }

  const trackFID = () => {
=======
          
}
      }
    });
    observer.observe({entryTypes: ['largest-contentful-paint'] });
    return () => observer.disconnect();
  };
  const trackFID = () => {return;
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
    interface FirstInputEntry extends PerformanceEntry {
      processingStart: number
    }
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fidEntry = entry as FirstInputEntry
        const fid = fidEntry.processingStart - entry.startTime
        if (process.env['NODE_ENV'] === 'development') {
          // eslint-disable-next-line no-console
          console.log('FID:', fid)
        }
      }
<<<<<<< HEAD
    })
    observer.observe({ entryTypes: ['first-input'] })
    return () => observer.disconnect()
  }

  window.addEventListener('scroll', requestTick, { passive: true })

  // Start tracking
  const cleanupCLS = trackCLS()
  const cleanupLCP = trackLCP()
  const cleanupFID = trackFID()

  return () => {
    cleanupCLS()
    cleanupLCP()
    cleanupFID()
  }
}

// Memory usage monitoring
=======
    });
    observer.observe({entryTypes: ['first-input'] });
    return () => observer.disconnect();
  };
  window.addEventListener('scroll', requestTick, {passive: true });
  // Start tracking;
  const cleanupCLS = trackCLS();
  const cleanupLCP = trackLCP();
  const cleanupFID = trackFID();
  return () => {
    cleanupCLS();
    cleanupLCP();
    cleanupFID();
  };
};
// Memory usage monitoring;
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
export const getMemoryUsage = () => {
  return;
  if (typeof window === 'undefined' || !('memory' in performance)) {
<<<<<<< HEAD
    return null
  }
  const memory = (performance as unknown as { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory
  return {
    used: memory.usedJSHeapSize,
    total: memory.totalJSHeapSize,
    limit: memory.jsHeapSizeLimit,
    percentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
  }
}

// Performance metrics collection
export const collectPerformanceMetrics = () => {
  if (typeof window === 'undefined') return null
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
  const paint = performance.getEntriesByType('paint')
=======
    return null;
  
}
  const memory = (performance as unknown as {memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
  return {used: memory.usedJSHeapSize,
    total: memory.totalJSHeapSize,
    limit: memory.jsHeapSizeLimit,
    percentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100;
  };
};
// Performance metrics collection;
export const collectPerformanceMetrics = () => {return;
  if (typeof window === 'undefined') return null;
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const paint = performance.getEntriesByType('paint');
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
  return {
    navigation: {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      totalTime: navigation.loadEventEnd - navigation.fetchStart;
    },
    paint: {firstPaint: paint.find((entry) => entry.name === 'first-paint')?.startTime || 0,
      firstContentfulPaint: paint.find((entry) => entry.name === 'first-contentful-paint')?.startTime || 0;
    },
    memory: getMemoryUsage()
<<<<<<< HEAD
  }
}

// Initialize performance enhancements
export const initializePerformanceEnhancements = () => {
  if (typeof window === 'undefined') return
  // Initialize lazy loading
  lazyLoadImages()
  // Preload critical resources
  preloadCriticalResources()
  // Optimize scroll performance
  optimizeScrollPerformance()
  // Collect performance metrics
  const metrics = collectPerformanceMetrics()
  if (metrics && (process.env['NODE_ENV'] === 'development' || import.meta.env.DEV)) {
    // eslint-disable-next-line no-console
    console.log('Performance metrics:', metrics)
  }
}
=======
  , };
};
// Initialize performance enhancements;
export const initializePerformanceEnhancements = () =</ {
  return;
  if (typeof window === 'undefined') return;
  // Initialize lazy loading;
  lazyLoadImages();
  // Preload critical resources;
  preloadCriticalResources();
  // Optimize scroll performance;
  optimizeScrollPerformance();
  // Collect performance metrics;
  const metrics = collectPerformanceMetrics();
  if (metrics && (process.env['NODE_ENV'] === 'development' || import.meta.env.DEV)) {
    // console.log('Performance metrics:', metrics)
  
}
    }
};
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
