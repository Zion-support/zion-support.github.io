'use client';
import React, { useEffect } from 'react';
const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;
    const measurePerformance = () => {
      // Measure Core Web Vitals
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      const metrics = {
        // Navigation timing
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        // Paint timing
        firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        // Resource timing
        totalResources: performance.getEntriesByType('resource').length,
        // Memory usage (if available)
        memoryUsage: (performance as any).memory ? {
          used: (performance as any).memory.usedJSHeapSize,
          total: (performance as any).memory.totalJSHeapSize,
          limit: (performance as any).memory.jsHeapSizeLimit
        } : null
      };
      // Log metrics in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metrics:', metrics)}
      // Send metrics to analytics
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
        gtag('event', 'performance_metrics', {
          event_category: 'performance',
          dom_content_loaded: Math.round(metrics.domContentLoaded),
          load_complete: Math.round(metrics.loadComplete),
          first_paint: Math.round(metrics.firstPaint),
          first_contentful_paint: Math.round(metrics.firstContentfulPaint),
          total_resources: metrics.totalResources
        })}
      // Check for performance issues
      if (metrics.firstContentfulPaint > 3000) {
        console.warn('Slow First Contentful Paint detected:', metrics.firstContentfulPaint)}
      if (metrics.loadComplete > 5000) {
        console.warn('Slow page load detected:', metrics.loadComplete)}
    };
    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance()} else {
      window.addEventListener('load', measurePerformance)}
    // Monitor for performance regressions
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'measure') {
          console.log('Performance measure:', entry.name, entry.duration)}
      }
    });
    observer.observe({ entryTypes: ['measure'] });
    return () => {
      window.removeEventListener('load', measurePerformance);
      observer.disconnect()}}, []);
  return null};
export default PerformanceMonitor