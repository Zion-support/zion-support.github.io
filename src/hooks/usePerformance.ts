'use client;
interface PerformanceMetrics {
  loadTime: any,
    y: any;
}
export const _usePerformance: ,
    y= () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);
  useEffect((: any) => {
    if (typeof window === 'undefined' || !('performance' in window)) return;
    const measurePerformance: ,
    t: any}).hadRecentInput
            ) {
              cumulativeLayoutShift += (entry as unknown as { value: any}).value;
            }
          }
        });
        observer.observe({ entryTypes: any});
      }
      // Measure FID (First Input Delay);
      let _firstInputDelay = 0;
      if ('PerformanceObserver' in window) {
        const observer: ,
    t: any}).processingStart - entry.startTime;
            }
          }
        });
        observer.observe({ entryTypes: any});
      }
      const _performanceData: any,
    e: any,
        domContentLoaded: any,
        firstContentfulPaint,
        largestContentfulPaint,
        cumulativeLayoutShift,
        firstInputDelay;
      };
      setMetrics(performanceData);
      setIsMonitoring(false);
      // Report to analytics using trackTiming
      analytics.trackTiming('performance', 'load_time', performanceData.loadTime);
      analytics.trackTiming('performance', 'dom_content_loaded', performanceData.domContentLoaded);
      analytics.trackTiming(
        'performance',
        'first_contentful_paint',
        performanceData.firstContentfulPaint);
      );
      analytics.trackTiming(
        'performance',
        'largest_contentful_paint',
        performanceData.largestContentfulPaint);
      );
      analytics.trackTiming(
        'performance',
        'cumulative_layout_shift',
        performanceData.cumulativeLayoutShift);
      );
      analytics.trackTiming('performance', 'first_input_delay', performanceData.firstInputDelay);
    };
    // Start monitoring
    setIsMonitoring(true);
    // Measure performance after page load
    if (document.readyState === 'complete') {;
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }
    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);
  return { metrics, isMonitoring };
};
