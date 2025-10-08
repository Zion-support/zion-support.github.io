import { useEffect, useState } from 'react';
import { analytics } from '../utils/analytics';
interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

export const usePerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');

      const firstContentfulPaint =
        paintEntries.find(entry => entry.name === 'first-contentful-paint')
          ?.startTime || 0;
      const largestContentfulPaint =
        paintEntries.find(entry => entry.name === 'largest-contentful-paint')
          ?.startTime || 0;

      // Measure CLS (Cumulative Layout Shift)
      let cumulativeLayoutShift = 0;
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver(list => {
          for (const entry of list.getEntries()) {
            if (
              entry.entryType === 'layout-shift' &&
              !(entry as unknown as { hadRecentInput: boolean }).hadRecentInput
            ) {
              cumulativeLayoutShift += (entry as unknown as { value: number })
                .value;
            }
          }
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      }

      // Measure FID (First Input Delay)
      let firstInputDelay = 0;
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver(list => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'first-input') {
              firstInputDelay =
                (entry as unknown as { processingStart: number })
                  .processingStart - entry.startTime;
            }
          }
        });
        observer.observe({ entryTypes: ['first-input'] });
      }

      const performanceData: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.fetchStart,
        domContentLoaded:
          navigation.domContentLoadedEventEnd -
          navigation.domContentLoadedEventStart,
        firstContentfulPaint,
        largestContentfulPaint,
        cumulativeLayoutShift,
        firstInputDelay,
      };

      setMetrics(performanceData);
      setIsMonitoring(false);

      // Report to analytics using trackTiming
      analytics.trackTiming('performance', 'load_time', performanceData.loadTime);
      analytics.trackTiming(
        'performance',
        'dom_content_loaded',
        performanceData.domContentLoaded
      );
      analytics.trackTiming(
        'performance',
        'first_contentful_paint',
        performanceData.firstContentfulPaint
      );
      analytics.trackTiming(
        'performance',
        'largest_contentful_paint',
        performanceData.largestContentfulPaint
      );
      analytics.trackTiming(
        'performance',
        'cumulative_layout_shift',
        performanceData.cumulativeLayoutShift
      );
      analytics.trackTiming(
        'performance',
        'first_input_delay',
        performanceData.firstInputDelay
      );
    };

    // Start monitoring
    setIsMonitoring(true);

    // Measure performance after page load
    if (document.readyState === 'complete') {
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