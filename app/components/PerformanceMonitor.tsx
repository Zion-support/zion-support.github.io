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
  fid?: number;
  cls?: number;
  ttfb?: number;
  inp?: number;
}

const PerformanceMonitor: React.FC = () => {
  const sendToAnalytics = useCallback((metric: WebVitalMetric) => {
    // Enhanced analytics with more detailed data
    const analyticsData = {
      name: metric.name,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      delta: metric.delta,
      id: metric.id,
      navigationType: metric.navigationType,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      connection: (navigator as any).connection?.effectiveType || 'unknown',
    };

    // Send to Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: analyticsData.value,
        custom_map: {
          metric_delta: metric.delta,
          navigation_type: metric.navigationType,
        },
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
        body: JSON.stringify(analyticsData),
      }).catch(() => {
        // Silently fail for analytics
      });
    }
    
    // Development logging
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Web Vitals] ${metric.name}:`, metric.value, analyticsData);
    }
  }, []);

  const measureResourceTiming = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) return;

    const resources = window.performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    const slowResources = resources.filter(resource => resource.duration > 1000);
    
    if (slowResources.length > 0 && process.env.NODE_ENV === 'development') {
      console.warn('[Performance] Slow resources detected:', slowResources);
    }

    // Monitor largest contentful paint candidates
    const lcpEntries = window.performance.getEntriesByType('largest-contentful-paint');
    if (lcpEntries.length > 0) {
      const lcp = lcpEntries[lcpEntries.length - 1] as PerformanceEntry;
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Performance] LCP: ${lcp.startTime}ms`);
      }
    }
  }, []);

  const measureMemoryUsage = useCallback(() => {
    if (typeof window !== 'undefined' && (window as any).performance?.memory) {
      const memory = (window as any).performance.memory;
      const memoryData = {
        usedJSHeapSize: memory.usedJSHeapSize,
        totalJSHeapSize: memory.totalJSHeapSize,
        jsHeapSizeLimit: memory.jsHeapSizeLimit,
        timestamp: Date.now(),
      };

      if (process.env.NODE_ENV === 'development') {
        console.log('[Performance] Memory usage:', memoryData);
      }

      // Alert if memory usage is high
      const memoryUsagePercent = (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100;
      if (memoryUsagePercent > 80) {
        console.warn(`[Performance] High memory usage: ${memoryUsagePercent.toFixed(2)}%`);
      }
    }
  }, []);

  const measurePageLoad = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) return;

    const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      const metrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstByte: navigation.responseStart - navigation.requestStart,
        domInteractive: navigation.domInteractive - navigation.navigationStart,
        domComplete: navigation.domComplete - navigation.navigationStart,
        redirectTime: navigation.redirectEnd - navigation.redirectStart,
        dnsTime: navigation.domainLookupEnd - navigation.domainLookupStart,
        tcpTime: navigation.connectEnd - navigation.connectStart,
        requestTime: navigation.responseStart - navigation.requestStart,
        responseTime: navigation.responseEnd - navigation.responseStart,
        processingTime: navigation.domComplete - navigation.domLoading,
      };

      if (process.env.NODE_ENV === 'development') {
        console.log('[Performance] Page Load Metrics:', metrics);
      }

      // Send to analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'page_load_metrics', {
          event_category: 'Performance',
          load_time: Math.round(metrics.loadTime),
          dom_content_loaded: Math.round(metrics.domContentLoaded),
          first_byte: Math.round(metrics.firstByte),
          non_interaction: true,
        });
      }
    }

    measureResourceTiming();
    measureMemoryUsage();
  }, [measureResourceTiming, measureMemoryUsage]);

  useEffect(() => {
    // Load web-vitals dynamically
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
        onCLS(sendToAnalytics);
        onFCP(sendToAnalytics);
        onLCP(sendToAnalytics);
        onTTFB(sendToAnalytics);
        onINP(sendToAnalytics);
      }).catch((error) => {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Failed to load web-vitals:', error);
        }
      });
    }

    // Measure page load performance
    if (document.readyState === 'complete') {
      measurePageLoad();
    } else {
      window.addEventListener('load', measurePageLoad);
    }

    // Monitor performance continuously
    const performanceObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          measurePageLoad();
        }
      });
    });

    try {
      performanceObserver.observe({ entryTypes: ['navigation', 'resource'] });
    } catch (e) {
      // PerformanceObserver not supported
    }

    // Monitor memory usage every 30 seconds
    const memoryInterval = setInterval(measureMemoryUsage, 30000);

    return () => {
      window.removeEventListener('load', measurePageLoad);
      performanceObserver.disconnect();
      clearInterval(memoryInterval);
    };
  }, [sendToAnalytics, measurePageLoad, measureMemoryUsage]);

  return null;
};

export default PerformanceMonitor;