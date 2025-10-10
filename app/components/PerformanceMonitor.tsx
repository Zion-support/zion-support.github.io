import React, { useEffect } from 'react';

interface PerformanceMonitorProps {
  enableWebVitals?: boolean;
  enableResourceTiming?: boolean;
  enableMemoryMonitoring?: boolean;
  enableNetworkMonitoring?: boolean;
  enableUserTiming?: boolean;
  enableLongTaskMonitoring?: boolean;
  enableLayoutShiftMonitoring?: boolean;
  enableAnalytics?: boolean;
  enableErrorReporting?: boolean;
  performanceBudget?: {
    lcp?: number;
    fid?: number;
    cls?: number;
    fcp?: number;
    ttfb?: number;
  };
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableWebVitals = true,
  enableResourceTiming = true,
  enableMemoryMonitoring = true,
  enableNetworkMonitoring = true,
  enableUserTiming = true,
  enableLongTaskMonitoring = true,
  enableLayoutShiftMonitoring = true,
  enableAnalytics = true,
  enableErrorReporting = true,
  performanceBudget = {
    lcp: 2500,
    fid: 100,
    cls: 0.1,
    fcp: 1800,
    ttfb: 600
  }
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Web Vitals monitoring
    if (enableWebVitals) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => {
          if (enableAnalytics && 'gtag' in window) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'CLS',
              value: Math.round(metric.value * 1000)
            });
          }
        });

        getFID((metric) => {
          if (enableAnalytics && 'gtag' in window) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'FID',
              value: Math.round(metric.value)
            });
          }
        });

        getFCP((metric) => {
          if (enableAnalytics && 'gtag' in window) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'FCP',
              value: Math.round(metric.value)
            });
          }
        });

        getLCP((metric) => {
          if (enableAnalytics && 'gtag' in window) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'LCP',
              value: Math.round(metric.value)
            });
          }
        });

        getTTFB((metric) => {
          if (enableAnalytics && 'gtag' in window) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'TTFB',
              value: Math.round(metric.value)
            });
          }
        });
      });
    }

    // Resource timing monitoring
    if (enableResourceTiming) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (enableAnalytics && 'gtag' in window) {
            (window as any).gtag('event', 'resource_timing', {
              event_category: 'Performance',
              event_label: entry.name,
              value: Math.round(entry.duration)
            });
          }
        });
      });
      observer.observe({ entryTypes: ['resource'] });
    }

    // Memory monitoring
    if (enableMemoryMonitoring && 'memory' in performance) {
      const checkMemory = () => {
        const memory = (performance as any).memory;
        if (memory && enableAnalytics && 'gtag' in window) {
          (window as any).gtag('event', 'memory_usage', {
            event_category: 'Performance',
            event_label: 'Memory',
            value: Math.round(memory.usedJSHeapSize / 1024 / 1024) // MB
          });
        }
      };
      
      setInterval(checkMemory, 30000); // Check every 30 seconds
    }

    // Long task monitoring
    if (enableLongTaskMonitoring) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (enableAnalytics && 'gtag' in window) {
            (window as any).gtag('event', 'long_task', {
              event_category: 'Performance',
              event_label: 'Long Task',
              value: Math.round(entry.duration)
            });
          }
        });
      });
      observer.observe({ entryTypes: ['longtask'] });
    }

    // Layout shift monitoring
    if (enableLayoutShiftMonitoring) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (enableAnalytics && 'gtag' in window) {
            (window as any).gtag('event', 'layout_shift', {
              event_category: 'Performance',
              event_label: 'Layout Shift',
              value: Math.round(entry.value * 1000)
            });
          }
        });
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    }

    // Error reporting
    if (enableErrorReporting) {
      window.addEventListener('error', (event) => {
        if (enableAnalytics && 'gtag' in window) {
          (window as any).gtag('event', 'javascript_error', {
            event_category: 'Error',
            event_label: event.message,
            value: 1
          });
        }
      });

      window.addEventListener('unhandledrejection', (event) => {
        if (enableAnalytics && 'gtag' in window) {
          (window as any).gtag('event', 'unhandled_promise_rejection', {
            event_category: 'Error',
            event_label: event.reason?.toString() || 'Unknown',
            value: 1
          });
        }
      });
    }
  }, []);

  return null;
};

export default PerformanceMonitor;
