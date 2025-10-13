import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  CLS: number | null;
  INP: number | null;
  FCP: number | null;
  LCP: number | null;
  TTFB: number | null;
}

const PerformanceTracker: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    CLS: null,
    INP: null,
    FCP: null,
    LCP: null,
    TTFB: null
  });

  useEffect(() => {
    // Track Core Web Vitals
    onCLS((metric) => {
      setMetrics(prev => ({ ...prev, CLS: metric.value }));
      sendMetric('CLS', metric.value);
    });

    onINP((metric) => {
      setMetrics(prev => ({ ...prev, INP: metric.value }));
      sendMetric('INP', metric.value);
    });

    onFCP((metric) => {
      setMetrics(prev => ({ ...prev, FCP: metric.value }));
      sendMetric('FCP', metric.value);
    });

    onLCP((metric) => {
      setMetrics(prev => ({ ...prev, LCP: metric.value }));
      sendMetric('LCP', metric.value);
    });

    onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, TTFB: metric.value }));
      sendMetric('TTFB', metric.value);
    });

    // Track additional performance metrics
    trackAdditionalMetrics();
  }, []);

  const sendMetric = (name: string, value: number) => {
    // Send to analytics service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', name, {
        event_category: 'Performance',
        value: Math.round(value),
        non_interaction: true
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
          metric: name,
          value: value,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent
        })
      }).catch(console.error);
    }
  };

  const trackAdditionalMetrics = () => {
    // Track page load time
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      sendMetric('PageLoadTime', loadTime);
    });

    // Track memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const usedMemory = memory.usedJSHeapSize / 1048576; // Convert to MB
      sendMetric('MemoryUsage', usedMemory);
    }

    // Track long tasks
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            sendMetric('LongTask', entry.duration);
          }
        }
      });
      
      try {
        observer.observe({ entryTypes: ['longtask'] });
      } catch (e) {
        // Long task observer not supported
      }
    }

    // Track resource loading performance
    const resourceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const resource = entry as PerformanceResourceTiming;
          if (resource.duration > 1000) { // Resources taking more than 1 second
            sendMetric('SlowResource', resource.duration);
          }
        }
      }
    });

    try {
      resourceObserver.observe({ entryTypes: ['resource'] });
    } catch (e) {
      // Resource observer not supported
    }
  };

  // Development mode: show metrics in console
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', metrics);
    }
  }, [metrics]);

  return null; // This component doesn't render anything
};

export default PerformanceTracker;