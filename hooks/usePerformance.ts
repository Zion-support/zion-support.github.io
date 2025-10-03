import { useEffect, useState, useCallback } from 'react';
import { PerformanceMetrics } from '@/types';

interface UsePerformanceOptions {/* content */}
  enableMonitoring?: boolean;
  reportInterval?: number;
  onMetricUpdate?: (metrics: PerformanceMetrics) => void;
}

export const usePerformance = (options: UsePerformanceOptions = {}) => {/* content */}
  const {/* content */}
    enableMonitoring = true,
    reportInterval = 5000,
    onMetricUpdate
  } = options;

  const [metrics, setMetrics] = useState<PerformanceMetrics>({/* content */}
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });

  const [isSupported, setIsSupported] = useState(false);

  const measureWebVitals = useCallback(() => {/* content */}
    if (typeof window === 'undefined' || !enableMonitoring) return;

    setIsSupported('PerformanceObserver' in window);

    if (!('PerformanceObserver' in window)) return;

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {/* content */}
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {/* content */}
        setMetrics(prev => {/* content */}
          const newMetrics = { ...prev, fcp: fcpEntry.startTime };
          onMetricUpdate?.(newMetrics);
          return newMetrics;
        });
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {/* content */}
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      setMetrics(prev => {/* content */}
        const newMetrics = { ...prev, lcp: lastEntry.startTime };
        onMetricUpdate?.(newMetrics);
        return newMetrics;
      });
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {/* content */}
      const entries = list.getEntries();
      entries.forEach((entry: any) => {/* content */}
        setMetrics(prev => {/* content */}
          const newMetrics = {/* content */}
            ...prev, 
            fid: entry.processingStart - entry.startTime 
          };
          onMetricUpdate?.(newMetrics);
          return newMetrics;
        });
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {/* content */}
      const entries = list.getEntries();
      entries.forEach((entry: any) => {/* content */}
        if (!entry.hadRecentInput) {/* content */}
          clsValue += entry.value;
          setMetrics(prev => {/* content */}
            const newMetrics = { ...prev, cls: clsValue };
            onMetricUpdate?.(newMetrics);
            return newMetrics;
          });
        }
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {/* content */}
      setMetrics(prev => {/* content */}
        const newMetrics = {/* content */}
          ...prev, 
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart 
        };
        onMetricUpdate?.(newMetrics);
        return newMetrics;
      });
    }

    // Cleanup function
    return () => {/* content */}
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, [enableMonitoring, onMetricUpdate]);

  const getMemoryUsage = useCallback(() => {/* content */}
    if (typeof window === 'undefined' || !('memory' in performance)) {/* content */}
      return null;
    }
    
    const memory = (performance as any).memory;
    return {/* content */}
      used: Math.round(memory.usedJSHeapSize / 1048576), // MB
      total: Math.round(memory.totalJSHeapSize / 1048576), // MB
      limit: Math.round(memory.jsHeapSizeLimit / 1048576) // MB
    };
  }, []);

  const getResourceTiming = useCallback(() => {/* content */}
    if (typeof window === 'undefined') return [];

    const resources = performance.getEntriesByType('resource');
    return resources.map(resource => ({/* content */}
      name: resource.name,
      duration: resource.duration,
      size: (resource as any).transferSize || 0,
      type: resource.initiatorType
    }));
  }, []);

  const getNavigationTiming = useCallback(() => {/* content */}
    if (typeof window === 'undefined') return null;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!navigation) return null;

    return {/* content */}
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      totalTime: navigation.loadEventEnd - navigation.fetchStart,
      dns: navigation.domainLookupEnd - navigation.domainLookupStart,
      tcp: navigation.connectEnd - navigation.connectStart,
      request: navigation.responseStart - navigation.requestStart,
      response: navigation.responseEnd - navigation.responseStart,
      domProcessing: navigation.domComplete - navigation.domLoading
    };
  }, []);

  const clearMetrics = useCallback(() => {/* content */}
    setMetrics({/* content */}
      fcp: null,
      lcp: null,
      fid: null,
      cls: null,
      ttfb: null
    });
  }, []);

  const isGoodPerformance = useCallback(() => {/* content */}
    const { fcp, lcp, fid, cls } = metrics;
    
    return {/* content */}
      fcp: fcp !== null && fcp < 1800, // Good FCP is under 1.8s
      lcp: lcp !== null && lcp < 2500, // Good LCP is under 2.5s
      fid: fid !== null && fid < 100,  // Good FID is under 100ms
      cls: cls !== null && cls < 0.1   // Good CLS is under 0.1
    };
  }, [metrics]);

  useEffect(() => {/* content */}
    if (!enableMonitoring) return;

    const cleanup = measureWebVitals();
    return cleanup;
  }, [measureWebVitals, enableMonitoring]);

  // Periodic reporting
  useEffect(() => {/* content */}
    if (!enableMonitoring || !onMetricUpdate) return;

    const interval = setInterval(() => {/* content */}
      onMetricUpdate(metrics);
    }, reportInterval);

    return () => clearInterval(interval);
  }, [metrics, onMetricUpdate, reportInterval, enableMonitoring]);

  return {/* content */}
    metrics,
    isSupported,
    getMemoryUsage,
    getResourceTiming,
    getNavigationTiming,
    clearMetrics,
    isGoodPerformance: isGoodPerformance()
  };
};

export default usePerformance;