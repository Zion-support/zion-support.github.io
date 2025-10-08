import { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Web Vitals monitoring
    const measureWebVitals = () => {
      // Largest Contentful Paint (LCP)
      const measureLCP = () => {
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          const lcp = lastEntry.startTime;
          
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'performance',
              event_label: 'LCP',
              value: Math.round(lcp),
              custom_map: {
                metric_name: 'LCP',
                metric_value: Math.round(lcp)
              }
            });
          }
        }).observe({ entryTypes: ['largest-contentful-paint'] });
      };

      // First Input Delay (FID)
      const measureFID = () => {
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          entries.forEach((entry) => {
            const fid = entry.processingStart - entry.startTime;
            
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'performance',
                event_label: 'FID',
                value: Math.round(fid),
                custom_map: {
                  metric_name: 'FID',
                  metric_value: Math.round(fid)
                }
              });
            }
          });
        }).observe({ entryTypes: ['first-input'] });
      };

      // Cumulative Layout Shift (CLS)
      const measureCLS = () => {
        let clsValue = 0;
        let clsEntries: PerformanceEntry[] = [];

        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          entries.forEach((entry) => {
            if (!(entry as any).hadRecentInput) {
              clsEntries.push(entry);
              clsValue += (entry as any).value;
            }
          });
        }).observe({ entryTypes: ['layout-shift'] });

        // Report CLS when page is hidden
        const reportCLS = () => {
          if (clsValue > 0) {
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'performance',
                event_label: 'CLS',
                value: Math.round(clsValue * 1000),
                custom_map: {
                  metric_name: 'CLS',
                  metric_value: Math.round(clsValue * 1000)
                }
              });
            }
          }
        };

        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'hidden') {
            reportCLS();
          }
        });
      };

      // First Contentful Paint (FCP)
      const measureFCP = () => {
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const fcp = entries[0].startTime;
          
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'performance',
              event_label: 'FCP',
              value: Math.round(fcp),
              custom_map: {
                metric_name: 'FCP',
                metric_value: Math.round(fcp)
              }
            });
          }
        }).observe({ entryTypes: ['paint'] });
      };

      // Time to First Byte (TTFB)
      const measureTTFB = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const ttfb = navigation.responseStart - navigation.requestStart;
        
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'performance',
            event_label: 'TTFB',
            value: Math.round(ttfb),
            custom_map: {
              metric_name: 'TTFB',
              metric_value: Math.round(ttfb)
            }
          });
        }
      };

      // Initialize all measurements
      measureLCP();
      measureFID();
      measureCLS();
      measureFCP();
      measureTTFB();
    };

    // Resource loading monitoring
    const monitorResourceLoading = () => {
      const resourceObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          const resource = entry as PerformanceResourceTiming;
          
          // Track slow resources
          if (resource.duration > 1000) { // Resources taking more than 1 second
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'slow_resource', {
                event_category: 'performance',
                event_label: resource.name,
                value: Math.round(resource.duration),
                custom_map: {
                  resource_type: resource.initiatorType,
                  resource_size: resource.transferSize || 0,
                  resource_duration: Math.round(resource.duration)
                }
              });
            }
          }
        });
      });

      resourceObserver.observe({ entryTypes: ['resource'] });
    };

    // Memory usage monitoring
    const monitorMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        
        const logMemoryUsage = () => {
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'memory_usage', {
              event_category: 'performance',
              event_label: 'memory_usage',
              value: Math.round(memory.usedJSHeapSize / 1024 / 1024), // Convert to MB
              custom_map: {
                used_heap: Math.round(memory.usedJSHeapSize / 1024 / 1024),
                total_heap: Math.round(memory.totalJSHeapSize / 1024 / 1024),
                heap_limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024)
              }
            });
          }
        };

        // Log memory usage every 30 seconds
        setInterval(logMemoryUsage, 30000);
      }
    };

    // Page load time monitoring
    const monitorPageLoadTime = () => {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const loadTime = navigation.loadEventEnd - navigation.navigationStart;
        
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'page_load_time', {
            event_category: 'performance',
            event_label: 'page_load',
            value: Math.round(loadTime),
            custom_map: {
              dom_content_loaded: Math.round(navigation.domContentLoadedEventEnd - navigation.navigationStart),
              load_complete: Math.round(loadTime),
              first_byte: Math.round(navigation.responseStart - navigation.navigationStart)
            }
          });
        }
      });
    };

    // Initialize all monitoring
    measureWebVitals();
    monitorResourceLoading();
    monitorMemoryUsage();
    monitorPageLoadTime();

    // Performance budget monitoring
    const checkPerformanceBudget = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.navigationStart;
      
      // Performance budgets
      const budgets = {
        lcp: 2500, // 2.5 seconds
        fid: 100,  // 100ms
        cls: 0.1,  // 0.1
        fcp: 1800, // 1.8 seconds
        ttfb: 600, // 600ms
        loadTime: 3000 // 3 seconds
      };

      // Check if any budget is exceeded
      const exceededBudgets = [];
      
      if (loadTime > budgets.loadTime) {
        exceededBudgets.push('load_time');
      }

      if (exceededBudgets.length > 0) {
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'performance_budget_exceeded', {
            event_category: 'performance',
            event_label: exceededBudgets.join(','),
            value: Math.round(loadTime),
            custom_map: {
              exceeded_budgets: exceededBudgets.join(','),
              load_time: Math.round(loadTime)
            }
          });
        }
      }
    };

    // Check performance budget after load
    window.addEventListener('load', checkPerformanceBudget);

  }, []);

  return null;
};

export default PerformanceMonitor;