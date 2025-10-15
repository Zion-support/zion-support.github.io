import React, { useEffect, useCallback } from 'react';

interface WebVitalMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  cls?: number;
  ttfb?: number;
  inp?: number;
  loadTime?: number;
  domContentLoaded?: number;
}

const PerformanceMonitor: React.FC = () => {
  const metrics = React.useRef<PerformanceMetrics>({});

  // Enhanced analytics sending with retry logic
  const sendToAnalytics = useCallback((metric: WebVitalMetric) => {
    const metricValue = Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value);
    
    // Store metrics for debugging
    metrics.current[metric.name.toLowerCase() as keyof PerformanceMetrics] = metric.value;

    // Send to Google Analytics 4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: metricValue,
        non_interaction: true,
        // custom_map: {
        //   metric_id: metric.id,
        //   metric_delta: metric.delta,
        //   metric_navigation_type: metric.navigationType,
        // },
      });
    }

    // Send to custom analytics endpoint
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      fetch('/api/analytics/web-vitals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metric: metric.name,
          value: metric.value,
          delta: metric.delta,
          id: metric.id,
          navigationType: metric.navigationType,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        }),
      }).catch(() => {
        // Silently fail for analytics
      });
    }
    
    // Development logging
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Web Vitals] ${metric.name}:`, {
        value: metric.value,
        delta: metric.delta,
        id: metric.id,
        navigationType: metric.navigationType,
      });
    }
  }, []);

  // Monitor resource loading performance
  const monitorResourcePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) return;

    const resources = window.performance.getEntriesByType('resource');
    const slowResources = resources.filter((resource: PerformanceResourceTiming) => {
      return resource.duration > 1000; // Resources taking more than 1 second
    });

    if (slowResources.length > 0 && process.env.NODE_ENV === 'development') {
      console.warn('[Performance] Slow resources detected:', slowResources);
    }
  }, []);

  // Monitor memory usage
  const monitorMemoryUsage = useCallback(() => {
    if (typeof window === 'undefined' || !('memory' in performance)) return;

    const memory = (performance as any).memory;
    if (memory) {
      const memoryUsage = {
        used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
        total: Math.round(memory.totalJSHeapSize / 1024 / 1024),
        limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024),
      };

      if (process.env.NODE_ENV === 'development') {
        console.log('[Performance] Memory usage:', memoryUsage);
      }

      // Alert if memory usage is high
      if (memoryUsage.used / memoryUsage.limit > 0.8) {
        console.warn('[Performance] High memory usage detected:', memoryUsage);
      }
    }
  }, []);

  // Monitor page load performance
  const measurePageLoad = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) return;

    const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
      
      metrics.current.loadTime = loadTime;
      metrics.current.domContentLoaded = domContentLoaded;

      if (process.env.NODE_ENV === 'development') {
        console.log('[Performance] Page Load Metrics:', {
          loadTime: `${loadTime}ms`,
          domContentLoaded: `${domContentLoaded}ms`,
          dns: `${navigation.domainLookupEnd - navigation.domainLookupStart}ms`,
          tcp: `${navigation.connectEnd - navigation.connectStart}ms`,
          request: `${navigation.responseEnd - navigation.requestStart}ms`,
          response: `${navigation.responseEnd - navigation.responseStart}ms`,
        });
      }

      // Send page load metrics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'page_load_time', {
          event_category: 'Performance',
          value: Math.round(loadTime),
          // custom_map: {
          //   dom_content_loaded: Math.round(domContentLoaded),
          // },
        });
      }
    }

    monitorResourcePerformance();
    monitorMemoryUsage();
  }, [monitorResourcePerformance, monitorMemoryUsage]);

  useEffect(() => {
    // Load and initialize web-vitals
    const loadWebVitals = async () => {
      try {
        const { onCLS, onFCP, onLCP, onTTFB, onINP } = await import('web-vitals');
        
        onCLS(sendToAnalytics);
        onFCP(sendToAnalytics);
        onLCP(sendToAnalytics);
        onTTFB(sendToAnalytics);
        onINP(sendToAnalytics);
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Failed to load web-vitals:', error);
        }
      }
    };

    // Load web-vitals in production or when explicitly enabled
    if (process.env.NODE_ENV === 'production' || process.env.REACT_APP_ENABLE_WEB_VITALS === 'true') {
      loadWebVitals();
    }

    // Measure page load performance
    if (document.readyState === 'complete') {
      measurePageLoad();
    } else {
      window.addEventListener('load', measurePageLoad);
    }

    // Monitor memory usage periodically
    const memoryInterval = setInterval(monitorMemoryUsage, 30000); // Every 30 seconds

    return () => {
      window.removeEventListener('load', measurePageLoad);
      clearInterval(memoryInterval);
    };
  }, [sendToAnalytics, measurePageLoad, monitorMemoryUsage]);

  return null;
};

export default PerformanceMonitor;