import React, { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB, Metric } from 'web-vitals';

interface WebVitalsTrackerProps {
  onMetricUpdate?: (metric: Metric) => void;
  enableReporting?: boolean;
}

const WebVitalsTracker: React.FC<WebVitalsTrackerProps> = ({
  onMetricUpdate,
  enableReporting = true
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMetric = (metric: Metric) => {
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Web Vital:', metric.name, metric.value);
      }

      // Call custom handler if provided
      if (onMetricUpdate) {
        onMetricUpdate(metric);
      }

      // Send to analytics in production
      if (enableReporting && process.env.NODE_ENV === 'production') {
        sendToAnalytics(metric);
      }
    };

    // Measure Core Web Vitals
    onCLS(handleMetric);
    onINP(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);

    // Additional performance metrics
    measureAdditionalMetrics();
  }, [onMetricUpdate, enableReporting]);

  const sendToAnalytics = (metric: Metric) => {
    // Send to Google Analytics 4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
      });
    }

    // Send to custom analytics endpoint
    if (typeof window !== 'undefined' && window.fetch) {
      fetch('/api/analytics/web-vitals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: metric.name,
          value: metric.value,
          id: metric.id,
          delta: metric.delta,
          navigationType: metric.navigationType,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        }),
      }).catch(console.error);
    }
  };

  const measureAdditionalMetrics = () => {
    // Measure page load time
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      
      if (onMetricUpdate) {
        onMetricUpdate({
          name: 'LOAD_TIME',
          value: loadTime,
          id: 'load-time',
          delta: loadTime,
          navigationType: 'navigate',
        });
      }
    });

    // Measure memory usage (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const memoryUsage = {
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit,
      };

      if (onMetricUpdate) {
        onMetricUpdate({
          name: 'MEMORY_USAGE',
          value: memoryUsage.used,
          id: 'memory-usage',
          delta: memoryUsage.used,
          navigationType: 'navigate',
        });
      }
    }

    // Measure connection speed
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      const connectionSpeed = connection.effectiveType || 'unknown';
      
      if (onMetricUpdate) {
        onMetricUpdate({
          name: 'CONNECTION_SPEED',
          value: connectionSpeed === '4g' ? 1 : connectionSpeed === '3g' ? 2 : connectionSpeed === '2g' ? 3 : 0,
          id: 'connection-speed',
          delta: 0,
          navigationType: 'navigate',
        });
      }
    }
  };

  return null; // This component doesn't render anything
};

export default WebVitalsTracker;
