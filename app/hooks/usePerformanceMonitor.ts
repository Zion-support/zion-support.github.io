'use client';
import { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  CLS: number;
  INP: number;
  FCP: number;
  LCP: number;
  TTFB: number;
}

export const usePerformanceMonitor = () => {
  useEffect(() => {
    const metrics: Partial<PerformanceMetrics> = {};

    const sendToAnalytics = (metric: any) => {
      // Send to Google Analytics
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
        gtag('event', metric.name, {
          event_category: 'Web Vitals',
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_label: metric.id,
          non_interaction: true,
        });
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metric:', metric);
      }
    };

    // Measure Core Web Vitals
    onCLS(sendToAnalytics);
    onINP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);

    // Monitor page load performance
    const measurePageLoad = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
          
          sendToAnalytics({
            name: 'Page Load Time',
            value: loadTime,
            id: 'page-load'
          });
          
          sendToAnalytics({
            name: 'DOM Content Loaded',
            value: domContentLoaded,
            id: 'dom-content-loaded'
          });
        }
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePageLoad();
    } else {
      window.addEventListener('load', measurePageLoad);
    }

    // Monitor memory usage (if available)
    const monitorMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        sendToAnalytics({
          name: 'Memory Usage',
          value: memory.usedJSHeapSize / 1024 / 1024, // Convert to MB
          id: 'memory-usage'
        });
      }
    };

    // Monitor memory every 30 seconds
    const memoryInterval = setInterval(monitorMemory, 30000);

    return () => {
      window.removeEventListener('load', measurePageLoad);
      clearInterval(memoryInterval);
    };
  }, []);
};