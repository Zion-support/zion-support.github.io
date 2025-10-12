  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  const [metrics, setMetrics] = useState<PerformanceMetrics | null></PerformanceMetrics>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);
    if (typeof window === 'undefined' || !('performance' in window)) return;
    
      )[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
 entry.name === 'first-contentful-paint')?.startTime || 0;
      
 entry.name === 'largest-contentful-paint')?.startTime || 0;
      // Measure CLS (Cumulative, Layout, Shift)
      let cumulativeLayoutShift = 0;
        
              cumulativeLayoutShift += (entry as unknown as { value: number } ).value;
        });
        observer.observe({ entryTypes: ['layout-shift'] } );
      // Measure FID (First, Input, Delay)
      let firstInputDelay = 0;
        
                (entry as unknown as { processingStart: number } ).processingStart - entry.startTime;
        });
        observer.observe({ entryTypes: ['first-input'] } );
        domContentLoaded:
        firstInputDelay;
      };
      setMetrics(performanceData);
      setIsMonitoring(false);
      // Report to analytics using trackTiming;
      analytics.trackTiming('performance', 'load_time', performanceData.loadTime);
      analytics.trackTiming('performance', 'dom_content_loaded', performanceData.domContentLoaded);
        performanceData.firstContentfulPaint;
      );
        performanceData.largestContentfulPaint;
      );
        performanceData.cumulativeLayoutShift;
      );
      analytics.trackTiming('performance', 'first_input_delay', performanceData.firstInputDelay);
    };
    // Start monitoring;
    setIsMonitoring(true);
    // Measure performance after page load;
      measurePerformance();
      window.addEventListener('load', measurePerformance);
      window.removeEventListener('load', measurePerformance);
    };
  }, []);
  return { metrics, isMonitoring } ;
};
