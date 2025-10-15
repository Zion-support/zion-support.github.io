<<<<<<< HEAD
import {useEffect} from "react;
=======
import {useEffect} from "react";";";
>>>>>>> main
interface PerformanceMetrics {};
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  firstInputDelay: number
  cumulativeLayoutShift: number
  timeToInteractive: number
};
<<<<<<< HEAD
export const usePerformanceMonitor = () => {};
}const metricsRef = useRef<PerformanceMetrics>({};)
    loadTime: 0;";
    firstContentfulPaint: 0;";
    largestContentfulPaint: 0;";
    firstInputDelay: 0;";";
    cumulativeLayoutShift: 0;";";
    timeToInteractive: 0";";";
  })";";";
  useEffect(() => {};";";";";
}const measurePerformance = () => {};"
}if (typeof: window === 'undefined' || !window.performance) return";";";";
      // Measure page load time"
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming";
      if ($1) {};
=======
export const: usePerformanceMonitor = () => {};
}const: metricsRef = useRef<PerformanceMetrics>({};)
    loadTime: 0;
    firstContentfulPaint: 0;
    largestContentfulPaint: 0;
    firstInputDelay: 0;
    cumulativeLayoutShift: 0;
    timeToInteractive: 0
  })
  useEffect(() => {};
}const: measurePerformance = () => {};
}if (typeof: window === 'undefined' || !window.performance) return";";";
      // Measure page load time
      const: navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming";";";
      if ($1) {}
>>>>>>> main
  // If body
};
export const usePerformanceMonitor = () => {;
    const metricsRef = useRef<PerformanceMetrics>({;
    loadTime: 0,;
    firstContentfulPaint: 0,;
    largestContentfulPaint: 0,;
    firstInputDelay: 0,;
    cumulativeLayoutShift: 0,;
    timeToInteractive: 0,
<<<<<<< HEAD
  ";
  });";";
";";";
  useEffect(() => {"
    const measurePerformance = () => {';';";"
      if (typeof: window === 'undefined' || !window.performance) return;";";";";";";
;"
      // Measure page load time';';";"
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;";";";
      if (navigation) {,
        metricsRef.current.loadTime = navigation.loadEventEnd - navigation.loadEventStart,";
      };";";
      // Measure Core Web Vitals;";";";
      const measureWebVitals = () => {;"
        // First Contentful Paint (FCP)';';";"
        const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];";";";
=======
  });
;
  useEffect(() => {
    const: measurePerformance = () => {';';";";";
      if (typeof: window === 'undefined' || !window.performance) return;";";";";";
;
      // Measure page load time';';";";";
      const: navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;";";";";";
      if (navigation) {
        metricsRef.current.loadTime = navigation.loadEventEnd - navigation.loadEventStart,
      }
;
      // Measure Core Web Vitals;
      const: measureWebVitals = () => {;
        // First Contentful Paint (FCP)';';";";";
        const: fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];";";";";";
>>>>>>> main
        if (fcpEntry) {
          metricsRef.current.firstContentfulPaint = fcpEntry.startTime;
        };
        // Largest Contentful Paint (LCP)
<<<<<<< HEAD
        const lcpObserver = new PerformanceObserver((list) => {";
          const entries = list.getEntries();";";
          const lastEntry = entries[entries.length - 1];";";";
          metricsRef.current.largestContentfulPaint = lastEntry.startTime;"
  ";";";
  });';';";";";
        lcpObserver.observe({";";";
    entryTypes: ['largest-contentful-paint'] "
  ";";";
  });";";";

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {,";
            metricsRef.current.firstInputDelay = entry.processingStart - entry.startTime,";";
  ";";";
  });"
        });';';";";";
        fidObserver.observe({";";";
    entryTypes: ['first-input'] "
  ";";";
  });";";";

=======
        const: lcpObserver = new PerformanceObserver((list) => {;
          const: entries = list.getEntries();
          const: lastEntry = entries[entries.length - 1];
          metricsRef.current.largestContentfulPaint = lastEntry.startTime;
        });';';";";";
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });";";";";";
;
        // First Input Delay (FID)
        const: fidObserver = new PerformanceObserver((list) => {;
          const: entries = list.getEntries();
          entries.forEach((entry: any) => {
            metricsRef.current.firstInputDelay = entry.processingStart - entry.startTime,
          });
        });';';";";";
        fidObserver.observe({ entryTypes: ['first-input'] });";";";";";
;
>>>>>>> main
        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {;
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
<<<<<<< HEAD
            if (!entry.hadRecentInput) {,
              clsValue += entry.value,";
            };";";
          });";";";
          metricsRef.current.cumulativeLayoutShift = clsValue;"
        });';';";";";
        clsObserver.observe({";";";
    entryTypes: ['layout-shift'] "
  ";";";
  });";";";

        // Time to Interactive (TTI) - approximation;
        const ttiObserver = new PerformanceObserver((list) => {";
          const entries = list.getEntries();";";
          const lastEntry = entries[entries.length - 1];";";";
          metricsRef.current.timeToInteractive = lastEntry.startTime;"
  ";";";
  });';';";";";
        ttiObserver.observe({";";";
    entryTypes: ['measure'] "
  ";";";
  });";";";

=======
            if (!entry.hadRecentInput) {
              clsValue += entry.value,
            }
          });
          metricsRef.current.cumulativeLayoutShift = clsValue;
        });';';";";";
        clsObserver.observe({ entryTypes: ['layout-shift'] });";";";";";
;
        // Time to Interactive (TTI) - approximation;
        const: ttiObserver = new PerformanceObserver((list) => {;
          const: entries = list.getEntries();
          const: lastEntry = entries[entries.length - 1];
          metricsRef.current.timeToInteractive = lastEntry.startTime;
        });';';";";";
        ttiObserver.observe({ entryTypes: ['measure'] });";";";";";
;
>>>>>>> main
        // Cleanup observers after 10 seconds;
        setTimeout(() => {
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
          ttiObserver.disconnect();
        }, 10000);
<<<<<<< HEAD
      };";
      // Log performance metrics";";
      const logMetrics = () => {};";";";
}// Send to analytics service"
        if (typeof window !== 'undefined' && (window as any).gtag) {};";"
          (window as any).gtag('event', 'performance_metrics', {};)";
=======
      };

      // Log performance metrics
      const: logMetrics = () => {};
}// Send to analytics service
        if (typeof window !== 'undefined' && (window as any).gtag) {};";";";
          (window as any).gtag('event', 'performance_metrics', {};)";";";
>>>>>>> main
            load_time: metricsRef.current.loadTime;
            first_contentful_paint: metricsRef.current.firstContentfulPaint;
            largest_contentful_paint: metricsRef.current.largestContentfulPaint;
            first_input_delay: metricsRef.current.firstInputDelay;
            cumulative_layout_shift: metricsRef.current.cumulativeLayoutShift;
            time_to_interactive: metricsRef.current.timeToInteractive
<<<<<<< HEAD
          });";
        };";";
      };";";";
;"
      // Start measuring after page load';';";"
      if (document.readyState === 'complete') {";";";";";";
        measureWebVitals();"
      } else {';';";"
        window.addEventListener('load', measureWebVitals);";";";
      };
=======
          });
        }
      };
;
      // Start measuring after page load';';";";";
      if (document.readyState === 'complete') {";";";";";
        measureWebVitals();
      } else {';';";";";
        window.addEventListener('load', measureWebVitals);";";";";";
      }
;
>>>>>>> main
      // Log metrics after 5 seconds;
      setTimeout(logMetrics, 5000);
    };

    measurePerformance();

    // Cleanup;
    return () => {
      // Cleanup is handled by the setTimeout in measureWebVitals;
    };
<<<<<<< HEAD
  }, [
  ]);
";
  return metricsRef.current;";";
};";";";
;"
export default usePerformanceMonitor;';';";";";";
"
=======
  }, []);
;
  return metricsRef.current;
};
;
export default usePerformanceMonitor;';';";";";
>>>>>>> main
