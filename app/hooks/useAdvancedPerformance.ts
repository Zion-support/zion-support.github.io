import { useEffect, useCallback, useRef, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  cls: number | null;
  fid: number | null;
  ttfb: number | null;
  loadTime: number | null;
  domContentLoaded: number | null;
  firstByte: number | null;
  domInteractive: number | null;
}

interface PerformanceConfig {
  enableWebVitals: boolean;
  enableResourceTiming: boolean;
  enableNavigationTiming: boolean;
  enableUserTiming: boolean;
  enableMemoryInfo: boolean;
  enableNetworkInfo: boolean;
  sampleRate: number;
}

const defaultConfig: PerformanceConfig = {
  enableWebVitals: true,
  enableResourceTiming: true,
  enableNavigationTiming: true,
  enableUserTiming: true,
  enableMemoryInfo: true,
  enableNetworkInfo: true,
  sampleRate: 1.0,
};

export const useAdvancedPerformance = (config: Partial<PerformanceConfig> = {}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    cls: null,
    fid: null,
    ttfb: null,
    loadTime: null,
    domContentLoaded: null,
    firstByte: null,
    domInteractive: null,
  });

  const [isSupported, setIsSupported] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const configRef = useRef({ ...defaultConfig, ...config });

  // Check browser support
  useEffect(() => {
    const supported = 
      'PerformanceObserver' in window &&
      'performance' in window &&
      'requestIdleCallback' in window;
    
    setIsSupported(supported);
  }, []);

  // Send metrics to analytics
  const sendToAnalytics = useCallback((metricName: string, value: number, extra?: Record<string, any>) => {
    if (typeof window === 'undefined') return;

    // Send to Google Analytics
    if (window.gtag) {
      window.gtag('event', metricName, {
        event_category: 'Performance',
        event_label: extra?.label || 'Web Vitals',
        value: Math.round(value),
        custom_map: extra,
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
          metric: metricName,
          value,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
          ...extra,
        }),
      }).catch(() => {
        // Silently fail analytics
      });
    }

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Performance] ${metricName}:`, value, extra);
    }
  }, []);

  // Measure Core Web Vitals
  const measureWebVitals = useCallback(() => {
    if (!isSupported || !configRef.current.enableWebVitals) return;

    // Only load web-vitals in production or when needed
    if (process.env.NODE_ENV === 'production') {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
        onCLS((metric) => {
          setMetrics(prev => ({ ...prev, cls: metric.value }));
          sendToAnalytics('CLS', metric.value, { id: metric.id });
        });

        onFCP((metric) => {
          setMetrics(prev => ({ ...prev, fcp: metric.value }));
          sendToAnalytics('FCP', metric.value, { id: metric.id });
        });

        onLCP((metric) => {
          setMetrics(prev => ({ ...prev, lcp: metric.value }));
          sendToAnalytics('LCP', metric.value, { id: metric.id });
        });

        onTTFB((metric) => {
          setMetrics(prev => ({ ...prev, ttfb: metric.value }));
          sendToAnalytics('TTFB', metric.value, { id: metric.id });
        });

        onINP((metric) => {
          setMetrics(prev => ({ ...prev, fid: metric.value }));
          sendToAnalytics('INP', metric.value, { id: metric.id });
        });
      }).catch((error) => {
        console.warn('Failed to load web-vitals:', error);
      });
    }
  }, [isSupported, sendToAnalytics]);

  // Measure Navigation Timing
  const measureNavigationTiming = useCallback(() => {
    if (!isSupported || !configRef.current.enableNavigationTiming) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!navigation) return;

    const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
    const firstByte = navigation.responseStart - navigation.requestStart;
    const domInteractive = navigation.domInteractive - navigation.navigationStart;

    setMetrics(prev => ({
      ...prev,
      loadTime,
      domContentLoaded,
      firstByte,
      domInteractive,
    }));

    sendToAnalytics('Page Load Time', loadTime);
    sendToAnalytics('DOM Content Loaded', domContentLoaded);
    sendToAnalytics('Time to First Byte', firstByte);
    sendToAnalytics('DOM Interactive', domInteractive);
  }, [isSupported, sendToAnalytics]);

  // Measure Resource Timing
  const measureResourceTiming = useCallback(() => {
    if (!isSupported || !configRef.current.enableResourceTiming) return;

    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    
    // Group resources by type
    const resourceTypes = resources.reduce((acc, resource) => {
      const type = resource.name.split('.').pop() || 'unknown';
      if (!acc[type]) acc[type] = [];
      acc[type].push(resource);
      return acc;
    }, {} as Record<string, PerformanceResourceTiming[]>);

    // Calculate average load times by type
    Object.entries(resourceTypes).forEach(([type, resources]) => {
      const avgLoadTime = resources.reduce((sum, r) => sum + (r.responseEnd - r.requestStart), 0) / resources.length;
      sendToAnalytics(`Resource Load Time - ${type.toUpperCase()}`, avgLoadTime, {
        count: resources.length,
        type,
      });
    });

    // Find slowest resources
    const slowestResources = resources
      .sort((a, b) => (b.responseEnd - b.requestStart) - (a.responseEnd - a.requestStart))
      .slice(0, 5);

    slowestResources.forEach((resource, index) => {
      const loadTime = resource.responseEnd - resource.requestStart;
      sendToAnalytics(`Slow Resource ${index + 1}`, loadTime, {
        url: resource.name,
        type: resource.initiatorType,
      });
    });
  }, [isSupported, sendToAnalytics]);

  // Measure Memory Usage
  const measureMemoryUsage = useCallback(() => {
    if (!isSupported || !configRef.current.enableMemoryInfo) return;

    const memory = (performance as any).memory;
    if (!memory) return;

    const memoryInfo = {
      usedJSHeapSize: memory.usedJSHeapSize,
      totalJSHeapSize: memory.totalJSHeapSize,
      jsHeapSizeLimit: memory.jsHeapSizeLimit,
    };

    sendToAnalytics('Memory Used (MB)', memoryInfo.usedJSHeapSize / 1024 / 1024, memoryInfo);
    sendToAnalytics('Memory Total (MB)', memoryInfo.totalJSHeapSize / 1024 / 1024, memoryInfo);
  }, [isSupported, sendToAnalytics]);

  // Measure Network Information
  const measureNetworkInfo = useCallback(() => {
    if (!isSupported || !configRef.current.enableNetworkInfo) return;

    const connection = (navigator as any).connection;
    if (!connection) return;

    const networkInfo = {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt,
      saveData: connection.saveData,
    };

    sendToAnalytics('Network Type', 0, networkInfo);
    sendToAnalytics('Network Downlink', networkInfo.downlink, networkInfo);
    sendToAnalytics('Network RTT', networkInfo.rtt, networkInfo);
  }, [isSupported, sendToAnalytics]);

  // Custom timing marks
  const mark = useCallback((name: string) => {
    if (isSupported && configRef.current.enableUserTiming) {
      performance.mark(name);
    }
  }, [isSupported]);

  const measure = useCallback((name: string, startMark: string, endMark?: string) => {
    if (!isSupported || !configRef.current.enableUserTiming) return;

    try {
      if (endMark) {
        performance.measure(name, startMark, endMark);
      } else {
        performance.measure(name, startMark);
      }

      const measures = performance.getEntriesByName(name, 'measure');
      const latestMeasure = measures[measures.length - 1];
      
      if (latestMeasure) {
        sendToAnalytics(`Custom Timing - ${name}`, latestMeasure.duration);
      }
    } catch (error) {
      console.warn(`Failed to measure ${name}:`, error);
    }
  }, [isSupported, sendToAnalytics]);

  // Initialize performance monitoring
  useEffect(() => {
    if (!isSupported) return;

    // Random sampling
    if (Math.random() > configRef.current.sampleRate) return;

    // Measure after page load
    const measureAfterLoad = () => {
      measureWebVitals();
      measureNavigationTiming();
      measureResourceTiming();
      measureMemoryUsage();
      measureNetworkInfo();
    };

    if (document.readyState === 'complete') {
      measureAfterLoad();
    } else {
      window.addEventListener('load', measureAfterLoad);
    }

    // Measure on visibility change
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        measureMemoryUsage();
        measureNetworkInfo();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('load', measureAfterLoad);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isSupported, measureWebVitals, measureNavigationTiming, measureResourceTiming, measureMemoryUsage, measureNetworkInfo]);

  return {
    metrics,
    isSupported,
    mark,
    measure,
    sendToAnalytics,
  };
};