<<<<<<< HEAD
import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  lcp?: number
  fid?: number
  cls?: number
  fcp?: number
  ttfb?: number
}

export const usePerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({})

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Measure Core Web Vitals
    const measureWebVitals = () => {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }))
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }))
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
            setMetrics(prev => ({ ...prev, cls: clsValue }))
          }
        })
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })

      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }))
          }
        })
      })
      fcpObserver.observe({ entryTypes: ['paint'] })

      // Time to First Byte (TTFB)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }))
      }

      // Cleanup observers after 10 seconds
      setTimeout(() => {
        lcpObserver.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
        fcpObserver.disconnect()
      }, 10000)
    }

    // Start measuring after page load
    if (document.readyState === 'complete') {
      measureWebVitals()
    } else {
      window.addEventListener('load', measureWebVitals)
    }

    return () => {
      window.removeEventListener('load', measureWebVitals)
    }
  }, [])

  return metrics
}
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
