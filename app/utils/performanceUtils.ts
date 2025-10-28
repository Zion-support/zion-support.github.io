'use client';

import { useCallback } from 'react';

// Performance monitoring utilities
export const usePerformanceUtils = (fn: () => void) => {
  useCallback(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      fn();
    } else {
      fn();
    }
  }, []);
};

// Measure performance
export const measurePerformance = (name: string, fn: () => void): number => {
  const start = performance.now();
  fn();
  const end = performance.now();
  const duration = end - start;
  
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'timing_complete', {
      name,
      value: Math.round(duration),
    });
  }
  
  return duration;
};

// Get performance metrics
export const getPerformanceMetrics = (): Record<string, number> => {
  if (typeof window === 'undefined') return {};

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const paint = performance.getEntriesByType('paint');
  
  return {
    loadTime: navigation.loadEventEnd - navigation.fetchStart,
    domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
    firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
    firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
  };
};

// Clear performance marks
export const clearPerformanceMarks = (): void => {
  if (typeof window !== 'undefined') {
    performance.clearMarks();
    performance.clearMeasures();
  }
};

// Performance observer for Core Web Vitals
export const observeWebVitals = (callback: (metric: any) => void): (() => void) | null => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return null;
  }

  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      callback({
        name: entry.name,
        value: entry.startTime,
        delta: entry.startTime,
        id: entry.name,
        navigationType: 'navigate',
      });
    });
  });

  observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
  
  return () => observer.disconnect();
};