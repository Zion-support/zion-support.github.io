'use client';
import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
import { useAnalytics } from './EnhancedAnalytics';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
  });
  
  const analytics = useAnalytics();

  useEffect(() => {
    // Track LCP (Largest Contentful Paint)
    onLCP((metric) => {
      setMetrics(prev => ({ ...prev, lcp: metric.value }));
      analytics.trackEvent('performance_metric', {
        metric: 'lcp',
        value: metric.value,
        rating: metric.rating
      });
    });

    // Track FID (First Input Delay) - now INP (Interaction to Next Paint)
    onINP((metric) => {
      setMetrics(prev => ({ ...prev, fid: metric.value }));
      analytics.trackEvent('performance_metric', {
        metric: 'inp',
        value: metric.value,
        rating: metric.rating
      });
    });

    // Track CLS (Cumulative Layout Shift)
    onCLS((metric) => {
      setMetrics(prev => ({ ...prev, cls: metric.value }));
      analytics.trackEvent('performance_metric', {
        metric: 'cls',
        value: metric.value,
        rating: metric.rating
      });
    });

    // Track FCP (First Contentful Paint)
    onFCP((metric) => {
      setMetrics(prev => ({ ...prev, fcp: metric.value }));
      analytics.trackEvent('performance_metric', {
        metric: 'fcp',
        value: metric.value,
        rating: metric.rating
      });
    });

    // Track TTFB (Time to First Byte)
    onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, ttfb: metric.value }));
      analytics.trackEvent('performance_metric', {
        metric: 'ttfb',
        value: metric.value,
        rating: metric.rating
      });
    });
  }, [analytics]);

  // Track page load time
  useEffect(() => {
    const startTime = performance.now();
    
    const handleLoad = () => {
      const loadTime = performance.now() - startTime;
      analytics.trackEvent('page_load_time', {
        loadTime,
        url: window.location.href
      });
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [analytics]);

  // Track resource loading performance
  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          analytics.trackEvent('resource_load', {
            name: resourceEntry.name,
            duration: resourceEntry.duration,
            size: resourceEntry.transferSize,
            type: resourceEntry.initiatorType
          });
        }
      }
    });

    observer.observe({ entryTypes: ['resource'] });

    return () => observer.disconnect();
  }, [analytics]);

  // Track navigation timing
  useEffect(() => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (navigation) {
      analytics.trackEvent('navigation_timing', {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        domInteractive: navigation.domInteractive - navigation.navigationStart,
        redirect: navigation.redirectEnd - navigation.redirectStart,
        dns: navigation.domainLookupEnd - navigation.domainLookupStart,
        tcp: navigation.connectEnd - navigation.connectStart,
        request: navigation.responseStart - navigation.requestStart,
        response: navigation.responseEnd - navigation.responseStart
      });
    }
  }, [analytics]);

  // Track memory usage (if available)
  useEffect(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      analytics.trackEvent('memory_usage', {
        usedJSHeapSize: memory.usedJSHeapSize,
        totalJSHeapSize: memory.totalJSHeapSize,
        jsHeapSizeLimit: memory.jsHeapSizeLimit
      });
    }
  }, [analytics]);

  // Track connection information
  useEffect(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      analytics.trackEvent('connection_info', {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
        saveData: connection.saveData
      });
    }
  }, [analytics]);

  // Track viewport changes
  useEffect(() => {
    const trackViewport = () => {
      analytics.trackEvent('viewport_change', {
        width: window.innerWidth,
        height: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio
      });
    };

    window.addEventListener('resize', trackViewport);
    trackViewport(); // Initial measurement

    return () => window.removeEventListener('resize', trackViewport);
  }, [analytics]);

  // Track scroll performance
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const trackScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        analytics.trackEvent('scroll_performance', {
          scrollY: window.scrollY,
          scrollX: window.scrollX,
          documentHeight: document.documentElement.scrollHeight,
          viewportHeight: window.innerHeight
        });
      }, 100);
    };

    window.addEventListener('scroll', trackScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', trackScroll);
      clearTimeout(scrollTimeout);
    };
  }, [analytics]);

  // Track errors
  useEffect(() => {
    const trackError = (event: ErrorEvent) => {
      analytics.trackEvent('javascript_error', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error?.toString()
      });
    };

    const trackUnhandledRejection = (event: PromiseRejectionEvent) => {
      analytics.trackEvent('unhandled_promise_rejection', {
        reason: event.reason?.toString()
      });
    };

    window.addEventListener('error', trackError);
    window.addEventListener('unhandledrejection', trackUnhandledRejection);

    return () => {
      window.removeEventListener('error', trackError);
      window.removeEventListener('unhandledrejection', trackUnhandledRejection);
    };
  }, [analytics]);

  // Return null as this is a monitoring component
  return null;
};

export default PerformanceMonitor;