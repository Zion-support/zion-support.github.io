<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { useEffect, useCallback } from react;

export const usePerformanceMonitor = () => {;;;

  const measurePerformance = useCallback(() => {;;;

    // Measure page load time
    if (typeof window !== 'undefined' && 'performance in window) {
      const navigation = performance.getEntriesByType(navigation)[0] as PerformanceNavigationTiming;;

      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;;

        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;;

        // Track performance metrics
        if (typeof window !== 'undefined && window.gtag) {
          window.gtag('event', 'performance_metric, {
            event_category: 'Performance,
            event_label: 'Page Load Time,
  const measureResourceTiming = useCallback(() => {;;

    if (typeof window !== 'undefined' && 'performance in window) {
      const resources = performance.getEntriesByType(resource);;

      resources.forEach((resource: PerformanceResourceTiming) => {
        const loadTime = resource.responseEnd - resource.startTime;;

        // Track slow resources
        if (loadTime > 1000) {
          if (typeof window !== 'undefined && window.gtag) {
            window.gtag('event', 'slow_resource, {
              event_category: 'Performance,
  const measureMemoryUsage = useCallback(() => {;;

    if (typeof window !== 'undefined' && 'performance in window && (performance as any).memory) {
      const memory = (performance as any).memory;;

      const memoryUsage = {;;


      if (memoryUsage.used > memoryUsage.limit * 0.8) {
        if (typeof window !== 'undefined && window.gtag) {
          window.gtag('event', 'high_memory_usage, {
            event_category: 'Performance,
            event_label: 'Memory Usage,
=======
import { useEffect, useCallback, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  rating: 'good' | 'needs-improvement' | 'poor';
}

interface PerformanceData {
  metrics: PerformanceMetric[];
  isMonitoring: boolean;
  startMonitoring: () => void;
  stopMonitoring: () => void;
}

export const usePerformanceMonitor = (): PerformanceData => {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);

  const getRating = (name: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
    const thresholds = {
      CLS: { good: 0.1, poor: 0.25 },
      INP: { good: 200, poor: 500 },
      FCP: { good: 1800, poor: 3000 },
      LCP: { good: 2500, poor: 4000 },
      TTFB: { good: 800, poor: 1800 }
    };

    const threshold = thresholds[name as keyof typeof thresholds];
    if (!threshold) return 'good';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  };

  const sendToAnalytics = useCallback((metric: PerformanceMetric) => {
    setMetrics(prev => [...prev, metric]);
    
    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
=======
import { useEffect, useCallback, useRef } from 'react';

interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
  metadata?: Record<string, any>;
}

interface PerformanceMonitorOptions {
  enableCoreWebVitals?: boolean;
  enableResourceTiming?: boolean;
  enableUserTiming?: boolean;
  enableNavigationTiming?: boolean;
  enableMemoryInfo?: boolean;
  enableCustomMetrics?: boolean;
  sampleRate?: number;
  batchSize?: number;
  flushInterval?: number;
}

export const usePerformanceMonitor = (options: PerformanceMonitorOptions = {}) => {
  const {
    enableCoreWebVitals = true,
    enableResourceTiming = true,
    enableUserTiming = true,
    enableNavigationTiming = true,
    enableMemoryInfo = true,
    enableCustomMetrics = true,
    sampleRate = 1.0,
    batchSize = 10,
    flushInterval = 30000
  } = options;

  const metricsRef = useRef<PerformanceMetric[]>([]);
  const flushTimeoutRef = useRef<NodeJS.Timeout>();

  // Core Web Vitals tracking
  useEffect(() => {
    if (!enableCoreWebVitals || typeof window === 'undefined') return;

    const trackCoreWebVitals = () => {
      // LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        trackMetric('lcp', lastEntry.startTime, {
          element: lastEntry.element?.tagName,
          url: lastEntry.url
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          trackMetric('fid', entry.processingStart - entry.startTime, {
            eventType: entry.name,
            target: entry.target?.tagName
          });
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS (Cumulative Layout Shift)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        trackMetric('cls', clsValue, {
          sources: entries.map(e => e.sources?.map(s => s.node?.tagName)).flat()
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // FCP (First Contentful Paint)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          trackMetric('fcp', entry.startTime, {
            element: entry.element?.tagName
          });
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // TTFB (Time to First Byte)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        trackMetric('ttfb', navigationEntry.responseStart - navigationEntry.requestStart, {
          protocol: navigationEntry.nextHopProtocol,
          connectionType: (navigator as any).connection?.effectiveType
        });
      }

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
      };
    };

    const cleanup = trackCoreWebVitals();
    return cleanup;
  }, [enableCoreWebVitals]);

  // Resource timing tracking
  useEffect(() => {
    if (!enableResourceTiming || typeof window === 'undefined') return;

    const trackResourceTiming = () => {
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const resourceEntry = entry as PerformanceResourceTiming;
          const resourceType = getResourceType(resourceEntry.name);
          
          trackMetric('resource_load_time', resourceEntry.duration, {
            type: resourceType,
            size: resourceEntry.transferSize,
            cached: resourceEntry.transferSize === 0,
            domain: new URL(resourceEntry.name).hostname
          });
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });

      return () => resourceObserver.disconnect();
    };

    const cleanup = trackResourceTiming();
    return cleanup;
  }, [enableResourceTiming]);

  // User timing tracking
  useEffect(() => {
    if (!enableUserTiming || typeof window === 'undefined') return;

    const trackUserTiming = () => {
      const userTimingObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          trackMetric('user_timing', entry.duration, {
            name: entry.name,
            startTime: entry.startTime
          });
        });
      });
      userTimingObserver.observe({ entryTypes: ['measure', 'mark'] });

      return () => userTimingObserver.disconnect();
    };

    const cleanup = trackUserTiming();
    return cleanup;
  }, [enableUserTiming]);

  // Navigation timing tracking
  useEffect(() => {
    if (!enableNavigationTiming || typeof window === 'undefined') return;

    const trackNavigationTiming = () => {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        const timing = {
          dns: navigationEntry.domainLookupEnd - navigationEntry.domainLookupStart,
          tcp: navigationEntry.connectEnd - navigationEntry.connectStart,
          request: navigationEntry.responseStart - navigationEntry.requestStart,
          response: navigationEntry.responseEnd - navigationEntry.responseStart,
          dom: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart,
          load: navigationEntry.loadEventEnd - navigationEntry.loadEventStart
        };

        Object.entries(timing).forEach(([key, value]) => {
          trackMetric(`navigation_${key}`, value, {
            url: navigationEntry.name,
            type: navigationEntry.type
          });
        });
      }
    };

    // Track after page load
    if (document.readyState === 'complete') {
      trackNavigationTiming();
    } else {
      window.addEventListener('load', trackNavigationTiming);
      return () => window.removeEventListener('load', trackNavigationTiming);
    }
  }, [enableNavigationTiming]);

  // Memory info tracking
  useEffect(() => {
    if (!enableMemoryInfo || typeof window === 'undefined') return;

    const trackMemoryInfo = () => {
      const memory = (performance as any).memory;
      if (memory) {
        trackMetric('memory_used', memory.usedJSHeapSize, {
          total: memory.totalJSHeapSize,
          limit: memory.jsHeapSizeLimit
        });
      }
    };

    // Track memory usage periodically
    const interval = setInterval(trackMemoryInfo, 30000);
    return () => clearInterval(interval);
  }, [enableMemoryInfo]);

  // Flush metrics periodically
  useEffect(() => {
    const flushMetrics = () => {
      if (metricsRef.current.length > 0) {
        sendMetrics(metricsRef.current);
        metricsRef.current = [];
      }
    };

    flushTimeoutRef.current = setInterval(flushMetrics, flushInterval);
    return () => {
      if (flushTimeoutRef.current) {
        clearInterval(flushTimeoutRef.current);
      }
    };
  }, [flushInterval]);

  // Track custom metric
  const trackMetric = useCallback((name: string, value: number, metadata?: Record<string, any>) => {
    if (Math.random() > sampleRate) return;

    const metric: PerformanceMetric = {
      name,
      value,
      timestamp: Date.now(),
      metadata
    };

    metricsRef.current.push(metric);

    // Flush if batch size reached
    if (metricsRef.current.length >= batchSize) {
      sendMetrics(metricsRef.current);
      metricsRef.current = [];
    }
  }, [sampleRate, batchSize]);

  // Send metrics to analytics
  const sendMetrics = (metrics: PerformanceMetric[]) => {
    // Send to Google Analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag;
      
      metrics.forEach((metric) => {
        gtag('event', 'performance_metric', {
          metric_name: metric.name,
          metric_value: Math.round(metric.value),
          metric_timestamp: metric.timestamp,
          ...metric.metadata
        });
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
      });
    }

    // Send to custom analytics endpoint
<<<<<<< HEAD
    if (typeof window !== 'undefined' && process.env['NODE_ENV'] === 'production') {
=======
    if (process.env['NODE_ENV'] === 'production') {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
      fetch('/api/analytics/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
<<<<<<< HEAD
        body: JSON.stringify(metric),
      }).catch(console.error);
    }
  }, []);

  const startMonitoring = useCallback(() => {
    if (isMonitoring) return;
    
    setIsMonitoring(true);
    
    // Measure Core Web Vitals
    onCLS((metric) => sendToAnalytics({
      ...metric,
      rating: getRating('CLS', metric.value)
    }));
    
    onINP((metric) => sendToAnalytics({
      ...metric,
      rating: getRating('INP', metric.value)
    }));
    
    onFCP((metric) => sendToAnalytics({
      ...metric,
      rating: getRating('FCP', metric.value)
    }));
    
    onLCP((metric) => sendToAnalytics({
      ...metric,
      rating: getRating('LCP', metric.value)
    }));
    
    onTTFB((metric) => sendToAnalytics({
      ...metric,
      rating: getRating('TTFB', metric.value)
    }));

    // Measure additional performance metrics
    if (typeof window !== 'undefined') {
      // First Contentful Paint
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            sendToAnalytics({
              name: 'FCP',
              value: entry.startTime,
              delta: entry.startTime,
              id: 'fcp-custom',
              rating: getRating('FCP', entry.startTime)
            });
          }
        }
      });
      
      observer.observe({ entryTypes: ['paint'] });

      // Resource timing
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            if (resourceEntry.duration > 1000) { // Only log slow resources
              sendToAnalytics({
                name: 'SLOW_RESOURCE',
                value: resourceEntry.duration,
                delta: resourceEntry.duration,
                id: resourceEntry.name,
                rating: resourceEntry.duration > 3000 ? 'poor' : 'needs-improvement'
              });
            }
          }
        }
      });
      
      resourceObserver.observe({ entryTypes: ['resource'] });

      // Long task detection
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          sendToAnalytics({
            name: 'LONG_TASK',
            value: entry.duration,
            delta: entry.duration,
            id: 'long-task',
            rating: entry.duration > 50 ? 'poor' : 'good'
          });
        }
      });
      
      longTaskObserver.observe({ entryTypes: ['longtask'] });
    }
  }, [isMonitoring, sendToAnalytics]);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  // Auto-start monitoring in production
  useEffect(() => {
    if (process.env['NODE_ENV'] === 'production') {
      startMonitoring();
    }
  }, [startMonitoring]);

  return {
    metrics,
    isMonitoring,
    startMonitoring,
    stopMonitoring
  };
};

// Additional performance utilities
export const useResourceTiming = () => {
  const [resourceMetrics, setResourceMetrics] = useState<any[]>([]);

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
  useEffect(() => {
    const handleLoad = () => {;;

<<<<<<< HEAD
    if (document.readyState === 'complete) {
      window.addEventListener(load, handleLoad);

    return () => {
      window.removeEventListener(load, handleLoad);
=======
'use client';
import { useEffect } from 'react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232

export const usePerformanceMonitor = () => {useEffect(() => {
      // This is a simplified version - in production you'd use the web-vitals library;
      if ('performance' in window) {
      if ('performance' in window) {;
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          console.log('Page load time:', loadTime);}}
    // Run monitoring after page load;
    if (document.readyState === 'complete') {monitorWebVitals();}else {window.addEventListener('load', monitorWebVitals);}}return () => {window.removeEventListener('load', monitorWebVitals);}}, []);
=======
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries().map(entry => ({
        name: entry.name,
        duration: entry.duration,
        size: (entry as any).transferSize || 0,
        type: entry.initiatorType
      }));
      
      setResourceMetrics(prev => [...prev, ...entries]);
    });

    observer.observe({ entryTypes: ['resource'] });

    return () => observer.disconnect();
  }, []);

  return resourceMetrics;
};

export const useMemoryUsage = () => {
  const [memoryInfo, setMemoryInfo] = useState<any>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !(window as any).performance.memory) return;

    const updateMemoryInfo = () => {
      const memory = (window as any).performance.memory;
      setMemoryInfo({
        usedJSHeapSize: memory.usedJSHeapSize,
        totalJSHeapSize: memory.totalJSHeapSize,
        jsHeapSizeLimit: memory.jsHeapSizeLimit
      });
    };

    updateMemoryInfo();
    const interval = setInterval(updateMemoryInfo, 5000);

    return () => clearInterval(interval);
  }, []);

  return memoryInfo;
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
=======
        body: JSON.stringify({ metrics })
      }).catch(error => {
        console.warn('Failed to send performance metrics:', error);
      });
    }
  };

  // Helper function to get resource type
  const getResourceType = (url: string): string => {
    const extension = url.split('.').pop()?.toLowerCase();
    const typeMap: Record<string, string> = {
      'js': 'script',
      'css': 'stylesheet',
      'png': 'image',
      'jpg': 'image',
      'jpeg': 'image',
      'gif': 'image',
      'svg': 'image',
      'webp': 'image',
      'woff': 'font',
      'woff2': 'font',
      'ttf': 'font',
      'eot': 'font'
    };
    return typeMap[extension || ''] || 'other';
  };

  // Mark performance timing
  const mark = useCallback((name: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.mark(name);
    }
  }, []);

  // Measure performance timing
  const measure = useCallback((name: string, startMark: string, endMark?: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      try {
        const measure = performance.measure(name, startMark, endMark);
        trackMetric('custom_measure', measure.duration, {
          name: measure.name,
          startTime: measure.startTime
        });
      } catch (error) {
        console.warn('Failed to measure performance:', error);
      }
    }
  }, [trackMetric]);

  return {
    trackMetric,
    mark,
    measure
  };
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
