import React, { useEffect, ReactNode } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB, type WebVitalsData } from 'web-vitals';

interface CoreWebVitalsProps {
  children: ReactNode;
}

const CoreWebVitals: React.FC<CoreWebVitalsProps> = ({ children }) => {
  useEffect(() => {
    // Skip if not in browser environment
    if (typeof window === 'undefined') return;

    const sendToAnalytics = (metric: WebVitalsData) => {
      // Send to Google Analytics
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }

      // Send to custom analytics endpoint
      if (process.env.NODE_ENV === 'production') {
        fetch('/api/analytics/web-vitals', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...metric,
            url: window.location.href,
            timestamp: new Date().toISOString(),
          }),
        }).catch(console.error);
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Core Web Vital:', metric);
      }
    };

    // Track Core Web Vitals
    onCLS(sendToAnalytics);
    onINP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);

    // Track additional performance metrics
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Track page load time
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          sendToAnalytics({
            name: 'LOAD_TIME',
            value: loadTime,
            delta: loadTime,
            id: 'load-time',
            navigationType: navigation.type,
          });
        }
      });

      // Track memory usage (if available)
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
        sendToAnalytics({
          name: 'MEMORY_USAGE',
          value: memoryUsage,
          delta: memoryUsage,
          id: 'memory-usage',
          navigationType: 'reload',
        });
      }

      // Track resource loading performance
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            if (resourceEntry.duration > 1000) { // Only track slow resources
              sendToAnalytics({
                name: 'SLOW_RESOURCE',
                value: resourceEntry.duration,
                delta: resourceEntry.duration,
                id: `resource-${resourceEntry.name}`,
                navigationType: 'reload',
              });
            }
          }
        }
      });

      observer.observe({ entryTypes: ['resource'] });

      // Cleanup observer
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return <>{children}</>;
};

export default CoreWebVitals;