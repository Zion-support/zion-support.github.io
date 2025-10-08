import React, { useEffect, useCallback } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType?: string;
}

const PerformanceTracker: React.FC = () => {
  const sendToAnalytics = useCallback((metric: PerformanceMetrics) => {
    // Send to Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
      });
    }

    // Send to custom analytics endpoint
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metric: metric.name,
          value: metric.value,
          delta: metric.delta,
          id: metric.id,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        }),
      }).catch(() => {
        // Silently fail if analytics endpoint is not available
      });
    }
  }, []);

  useEffect(() => {
    // Track Core Web Vitals
    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);

    // Track custom performance metrics
    const trackCustomMetrics = () => {
      // Track page load time
      if (window.performance) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          sendToAnalytics({
            name: 'PageLoadTime',
            value: loadTime,
            delta: loadTime,
            id: 'page-load',
          });
        }
      }

      // Track memory usage (if available)
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
        sendToAnalytics({
          name: 'MemoryUsage',
          value: memoryUsage,
          delta: memoryUsage,
          id: 'memory-usage',
        });
      }

      // Track connection speed
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection.effectiveType) {
          sendToAnalytics({
            name: 'ConnectionSpeed',
            value: connection.effectiveType === '4g' ? 4 : connection.effectiveType === '3g' ? 3 : 2,
            delta: 0,
            id: 'connection-speed',
          });
        }
      }
    };

    // Track metrics after page load
    if (document.readyState === 'complete') {
      trackCustomMetrics();
    } else {
      window.addEventListener('load', trackCustomMetrics);
    }

    // Track user interactions
    const trackInteraction = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target) {
        sendToAnalytics({
          name: 'UserInteraction',
          value: 1,
          delta: 1,
          id: `interaction-${target.tagName.toLowerCase()}`,
        });
      }
    };

    // Add event listeners for user interactions
    document.addEventListener('click', trackInteraction, { passive: true });
    document.addEventListener('scroll', trackInteraction, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('load', trackCustomMetrics);
      document.removeEventListener('click', trackInteraction);
      document.removeEventListener('scroll', trackInteraction);
    };
  }, [sendToAnalytics]);

  return null; // This component doesn't render anything
};

export default PerformanceTracker;