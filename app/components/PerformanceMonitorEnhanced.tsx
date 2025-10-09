'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  CLS: number | null;
  FID: number | null;
  FCP: number | null;
  LCP: number | null;
  TTFB: number | null;
  timestamp: number;
}

interface PerformanceMonitorEnhancedProps {
  enableRealUserMonitoring?: boolean;
  enableCoreWebVitals?: boolean;
  enableResourceTiming?: boolean;
  enableNavigationTiming?: boolean;
  enableMemoryMonitoring?: boolean;
  enableNetworkMonitoring?: boolean;
  enableErrorTracking?: boolean;
  enableCustomMetrics?: boolean;
  reportingEndpoint?: string;
  sampleRate?: number;
  debug?: boolean;
}

const PerformanceMonitorEnhanced: React.FC<PerformanceMonitorEnhancedProps> = ({
  enableRealUserMonitoring = true,
  enableCoreWebVitals = true,
  enableResourceTiming = true,
  enableNavigationTiming = true,
  enableMemoryMonitoring = true,
  enableNetworkMonitoring = true,
  enableErrorTracking = true,
  enableCustomMetrics = true,
  reportingEndpoint = '/api/performance',
  sampleRate = 1.0,
  debug = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    CLS: null,
    FID: null,
    FCP: null,
    LCP: null,
    TTFB: null,
    timestamp: Date.now()
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  // Log performance metrics
  const logMetric = useCallback((name: string, value: number, delta: number, id: string) => {
    if (debug) {
      console.log(`[Performance] ${name}:`, { value, delta, id });
    }

    // Update metrics state
    setMetrics(prev => ({
      ...prev,
      [name]: value,
      timestamp: Date.now()
    }));

    // Send to analytics if enabled
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'web_vitals', {
        event_category: 'Performance',
        event_label: name,
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        custom_map: {
          metric_id: id,
          metric_delta: delta
        }
      });
    }

    // Send to custom endpoint if provided
    if (reportingEndpoint && Math.random() < sampleRate) {
      fetch(reportingEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metric: name,
          value,
          delta,
          id,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent
        })
      }).catch(error => {
        if (debug) console.error('Failed to send performance metric:', error);
      });
    }
  }, [debug, reportingEndpoint, sampleRate]);

  // Monitor Core Web Vitals
  useEffect(() => {
    if (!enableCoreWebVitals || !enableRealUserMonitoring) return;

    const cleanupFunctions: (() => void)[] = [];

    // Cumulative Layout Shift (CLS)
    if (enableCoreWebVitals) {
      const cleanupCLS = getCLS(logMetric);
      cleanupFunctions.push(cleanupCLS);
    }

    // First Input Delay (FID)
    if (enableCoreWebVitals) {
      const cleanupFID = getFID(logMetric);
      cleanupFunctions.push(cleanupFID);
    }

    // First Contentful Paint (FCP)
    if (enableCoreWebVitals) {
      const cleanupFCP = getFCP(logMetric);
      cleanupFunctions.push(cleanupFCP);
    }

    // Largest Contentful Paint (LCP)
    if (enableCoreWebVitals) {
      const cleanupLCP = getLCP(logMetric);
      cleanupFunctions.push(cleanupLCP);
    }

    // Time to First Byte (TTFB)
    if (enableCoreWebVitals) {
      const cleanupTTFB = getTTFB(logMetric);
      cleanupFunctions.push(cleanupTTFB);
    }

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, [enableCoreWebVitals, enableRealUserMonitoring, logMetric]);

  // Monitor Resource Timing
  useEffect(() => {
    if (!enableResourceTiming || !enableRealUserMonitoring) return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          
          if (debug) {
            console.log('[Performance] Resource loaded:', {
              name: resourceEntry.name,
              duration: resourceEntry.duration,
              size: resourceEntry.transferSize,
              type: resourceEntry.initiatorType
            });
          }

          // Track slow resources
          if (resourceEntry.duration > 1000) {
            logMetric('slow_resource', resourceEntry.duration, 0, resourceEntry.name);
          }
        }
      }
    });

    observer.observe({ entryTypes: ['resource'] });

    return () => observer.disconnect();
  }, [enableResourceTiming, enableRealUserMonitoring, logMetric, debug]);

  // Monitor Navigation Timing
  useEffect(() => {
    if (!enableNavigationTiming || !enableRealUserMonitoring) return;

    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (navigationEntry) {
      const timing = {
        domContentLoaded: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart,
        loadComplete: navigationEntry.loadEventEnd - navigationEntry.loadEventStart,
        domInteractive: navigationEntry.domInteractive - navigationEntry.navigationStart,
        domComplete: navigationEntry.domComplete - navigationEntry.navigationStart
      };

      if (debug) {
        console.log('[Performance] Navigation timing:', timing);
      }

      // Track key navigation metrics
      Object.entries(timing).forEach(([key, value]) => {
        if (value > 0) {
          logMetric(`nav_${key}`, value, 0, key);
        }
      });
    }
  }, [enableNavigationTiming, enableRealUserMonitoring, logMetric, debug]);

  // Monitor Memory Usage
  useEffect(() => {
    if (!enableMemoryMonitoring || !enableRealUserMonitoring) return;

    const checkMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = {
          used: memory.usedJSHeapSize,
          total: memory.totalJSHeapSize,
          limit: memory.jsHeapSizeLimit
        };

        if (debug) {
          console.log('[Performance] Memory usage:', memoryUsage);
        }

        // Track high memory usage
        const usagePercentage = (memoryUsage.used / memoryUsage.limit) * 100;
        if (usagePercentage > 80) {
          logMetric('high_memory_usage', usagePercentage, 0, 'memory_warning');
        }
      }
    };

    // Check memory every 30 seconds
    const interval = setInterval(checkMemory, 30000);
    checkMemory(); // Initial check

    return () => clearInterval(interval);
  }, [enableMemoryMonitoring, enableRealUserMonitoring, logMetric, debug]);

  // Monitor Network Information
  useEffect(() => {
    if (!enableNetworkMonitoring || !enableRealUserMonitoring) return;

    const checkNetwork = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        const networkInfo = {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
          saveData: connection.saveData
        };

        if (debug) {
          console.log('[Performance] Network info:', networkInfo);
        }

        // Track slow connections
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          logMetric('slow_connection', connection.rtt, 0, connection.effectiveType);
        }
      }
    };

    checkNetwork();
    
    // Listen for connection changes
    if ('connection' in navigator) {
      (navigator as any).connection.addEventListener('change', checkNetwork);
      return () => {
        (navigator as any).connection.removeEventListener('change', checkNetwork);
      };
    }
  }, [enableNetworkMonitoring, enableRealUserMonitoring, logMetric, debug]);

  // Monitor Errors
  useEffect(() => {
    if (!enableErrorTracking || !enableRealUserMonitoring) return;

    const handleError = (event: ErrorEvent) => {
      logMetric('javascript_error', 1, 0, event.filename || 'unknown');
      
      if (debug) {
        console.error('[Performance] JavaScript error:', event);
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      logMetric('unhandled_promise_rejection', 1, 0, 'promise_rejection');
      
      if (debug) {
        console.error('[Performance] Unhandled promise rejection:', event);
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [enableErrorTracking, enableRealUserMonitoring, logMetric, debug]);

  // Custom Metrics
  useEffect(() => {
    if (!enableCustomMetrics || !enableRealUserMonitoring) return;

    // Track page visibility changes
    const handleVisibilityChange = () => {
      const visibility = document.hidden ? 'hidden' : 'visible';
      logMetric('page_visibility', document.hidden ? 0 : 1, 0, visibility);
    };

    // Track scroll depth
    let maxScrollDepth = 0;
    const handleScroll = () => {
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        logMetric('scroll_depth', scrollDepth, 0, 'scroll_tracking');
      }
    };

    // Track time on page
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeOnPage = Date.now() - startTime;
      logMetric('time_on_page', timeOnPage, 0, 'engagement');
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', trackTimeOnPage);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', trackTimeOnPage);
    };
  }, [enableCustomMetrics, enableRealUserMonitoring, logMetric]);

  // Start monitoring
  useEffect(() => {
    if (enableRealUserMonitoring) {
      setIsMonitoring(true);
      
      if (debug) {
        console.log('[Performance] Monitoring started');
      }
    }
  }, [enableRealUserMonitoring, debug]);

  // Don't render anything visible
  return null;
};

export default PerformanceMonitorEnhanced;