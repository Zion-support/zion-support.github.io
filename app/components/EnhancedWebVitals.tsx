import React, { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface WebVitalsData {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

const EnhancedWebVitals: React.FC = () => {
  useEffect(() => {
    // Enhanced Web Vitals tracking
    const sendToAnalytics = (metric: WebVitalsData) => {
      // Send to Google Analytics 4
      if (typeof gtag !== 'undefined') {
        gtag('event', metric.name, {
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
            timestamp: Date.now(),
            userAgent: navigator.userAgent,
            connection: (navigator as any).connection?.effectiveType || 'unknown',
          }),
        }).catch(() => {
          // Silently fail for analytics
        });
      }
    };

    // Track Core Web Vitals
    onCLS(sendToAnalytics);
    onINP(sendToAnalytics); // INP replaces FID in web-vitals v5
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);

    // Track additional performance metrics
    const trackPerformanceMetrics = () => {
      // Memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        sendToAnalytics({
          name: 'Memory Usage',
          value: memory.usedJSHeapSize / 1024 / 1024, // Convert to MB
          delta: 0,
          id: 'memory-usage',
          navigationType: 'reload',
        });
      }

      // Connection information
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        sendToAnalytics({
          name: 'Connection Speed',
          value: connection.downlink || 0,
          delta: 0,
          id: 'connection-speed',
          navigationType: 'reload',
        });
      }

      // Page load time
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      sendToAnalytics({
        name: 'Page Load Time',
        value: loadTime,
        delta: 0,
        id: 'page-load-time',
        navigationType: 'reload',
      });
    };

    // Track when page is fully loaded
    if (document.readyState === 'complete') {
      trackPerformanceMetrics();
    } else {
      window.addEventListener('load', trackPerformanceMetrics);
    }

    // Track user interactions
    const trackInteraction = (event: Event) => {
      const target = event.target as HTMLElement;
      const interactionData = {
        type: event.type,
        element: target.tagName.toLowerCase(),
        id: target.id || null,
        className: target.className || null,
        timestamp: Date.now(),
      };

      if (process.env.NODE_ENV === 'production') {
        fetch('/api/analytics/interactions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(interactionData),
        }).catch(() => {
          // Silently fail for analytics
        });
      }
    };

    // Add interaction tracking
    document.addEventListener('click', trackInteraction, { passive: true });
    document.addEventListener('scroll', trackInteraction, { passive: true });
    document.addEventListener('keydown', trackInteraction, { passive: true });

    return () => {
      window.removeEventListener('load', trackPerformanceMetrics);
      document.removeEventListener('click', trackInteraction);
      document.removeEventListener('scroll', trackInteraction);
      document.removeEventListener('keydown', trackInteraction);
    };
  }, []);

  return null;
};

export default EnhancedWebVitals;