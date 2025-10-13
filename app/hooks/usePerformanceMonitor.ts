export const usePerformanceMonitor = () => {}
  const measurePerformance = useCallback(() => {}
    // Measure page load time
    if (typeof window !== 'undefined' && 'performance' in window) {}
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {}
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
        
        // Track performance metrics
        if (typeof window !== 'undefined' && window.gtag) {}
          window.gtag('event', 'performance_metric', {}
            event_category: 'Performance',
            event_label: 'Page Load Time',
            value: Math.round(loadTime)
          });

        }

      }

    }

  }, []);

  const measureResourceTiming = useCallback(() => {}
    if (typeof window !== 'undefined' && 'performance' in window) {}
      const resources = performance.getEntriesByType('resource');
      
      resources.forEach((resource: PerformanceResourceTiming) => {}
        const loadTime = resource.responseEnd - resource.startTime;
        
        // Track slow resources
        if (loadTime > 1000) {}
          if (typeof window !== 'undefined' && window.gtag) {}
            window.gtag('event', 'slow_resource', {}
              event_category: 'Performance',
              event_label: resource.name,
              value: Math.round(loadTime)
            });

          }

        }

      });

    }

  }, []);

  const measureMemoryUsage = useCallback(() => {}
    if (typeof window !== 'undefined' && 'performance' in window && (performance as any).memory) {}
      const memory = (performance as any).memory;
      const memoryUsage = {}
        used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
        total: Math.round(memory.totalJSHeapSize / 1024 / 1024),
        limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024)
      };
      
      if (memoryUsage.used > memoryUsage.limit * 0.8) {}
        if (typeof window !== 'undefined' && window.gtag) {}
          window.gtag('event', 'high_memory_usage', {}
            event_category: 'Performance',
            event_label: 'Memory Usage',
            value: memoryUsage.used
          });

        }

      }

    }

  }, []);

  useEffect(() => {}
    const handleLoad = () => {}
      measurePerformance();

      measureResourceTiming();

      measureMemoryUsage();

    };

    if (document.readyState === 'complete') {}
      handleLoad();

    } else {
      window.addEventListener('load', handleLoad);}
    }

    // Set up periodic monitoring
    const performanceInterval = setInterval(measureResourceTiming, 30000);;

    const memoryInterval = setInterval(measureMemoryUsage, 60000);;

    return () => {}
      window.removeEventListener('load', handleLoad);
      clearInterval(performanceInterval);

      clearInterval(memoryInterval);

    };

  }, [measurePerformance, measureResourceTiming, measureMemoryUsage]);

  return {}
    measurePerformance,
    measureResourceTiming,
    measureMemoryUsage
  };

import { useEffect } from 'react';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Performance monitoring logic
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('Performance entry:', entry);
      }
    });

    observer.observe({ entryTypes: ['measure', 'navigation'] });

    return () => observer.disconnect();
  }, []);
};
'use client';
import {useEffect}}from 'react';

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            metricsRef.current.firstInputDelay = entry.processingStart - entry.startTime
          })
        })
        fidObserver.observe({ entryTypes: ['first-input'] })

        // Cumulative Layout Shift (CLS)
        let clsValue = 0
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
            }
          })
          metricsRef.current.cumulativeLayoutShift = clsValue
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })

        // Time to Interactive (TTI) - approximation
        const ttiObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          metricsRef.current.timeToInteractive = lastEntry.startTime
        })
        ttiObserver.observe({ entryTypes: ['measure'] })

        // Cleanup observers after 10 seconds
        setTimeout(() => {
          lcpObserver.disconnect()
          fidObserver.disconnect()
          clsObserver.disconnect()
          ttiObserver.disconnect()
        }, 10000)
      }

      // Log performance metrics
      const logMetrics = () => {
        // Send to analytics service
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'performance_metrics', {
            load_time: metricsRef.current.loadTime,
            first_contentful_paint: metricsRef.current.firstContentfulPaint,
            largest_contentful_paint: metricsRef.current.largestContentfulPaint,
            first_input_delay: metricsRef.current.firstInputDelay,
            cumulative_layout_shift: metricsRef.current.cumulativeLayoutShift,
            time_to_interactive: metricsRef.current.timeToInteractive
          })
        }
      }

      // Start measuring after page load
      if (document.readyState === 'complete') {
        measureWebVitals()
      } else {
        window.addEventListener('load', measureWebVitals)
      }

      // Log metrics after 5 seconds
      setTimeout(logMetrics, 5000)
    }

    measurePerformance()

    // Cleanup
    return () => {
      // Cleanup is handled by the setTimeout in measureWebVitals
    }
  }, [])

  return metricsRef.current
}
