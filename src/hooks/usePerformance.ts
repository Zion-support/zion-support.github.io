'use client';
interface PerformanceMetrics {// TODO: Add content;}
};
  loadTime: number;,
    domContentLoaded: number;,
    firstContentfulPaint: number;,
    largestContentfulPaint: number;,
    cumulativeLayoutShift: number;,
    firstInputDelay: number;
}
export const _usePerformance = () => {// TODO: Add content;}
}
  const [metrics, setMetrics] = useState;
          <PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);
  useEffect(() => {// TODO: Add content;}
}
    if (typeof window === 'undefined' || !('performance' in window)) return;
    const measurePerformance = () => {// TODO: Add content;}
}
      const navigation = performance.getEntriesByType()
//         'navigation'
      )[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      const firstContentfulPaint =
        paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const largestContentfulPaint =
        paintEntries.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;
      // Measure CLS (Cumulative Layout Shift)
      if ('PerformanceObserver' in window) {// TODO: Add content;}
}
        const observer = new PerformanceObserver(list => {// TODO: Add content;}
}
          for (const entry of list.getEntries()) {// TODO: Add content;}
}
            if ()
              entry.entryType === 'layout-shift' &&
              !(entry as unknown as { hadRecentInput: boolean }).hadRecentInput,
) {// TODO: Add content;}
}
              cumulativeLayoutShift += (entry as unknown as { value: number }).value;
            }
          }
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      }
      // Measure FID (First Input Delay)
      if ('PerformanceObserver' in window) {// TODO: Add content;}
}
        const observer = new PerformanceObserver(list => {// TODO: Add content;}
}
          for (const entry of list.getEntries()) {// TODO: Add content;}
}
            if (entry.entryType === 'first-input') {// TODO: Add content;}
}
              firstInputDelay =
                (entry as unknown as { processingStart: number }).processingStart - entry.startTime;
            }
          }
        });
        observer.observe({ entryTypes: ['first-input'] });
      }
        loadTime: navigation.loadEventEnd - navigation.fetchStart,
        domContentLoaded:
//           navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
//         firstContentfulPaint,
//         largestContentfulPaint,
//         cumulativeLayoutShift,
//         firstInputDelay;
      };
      setMetrics(performanceData);
      setIsMonitoring(false);
      // Report to analytics using trackTiming;
      analytics.trackTiming('performance', 'load_time', performanceData.loadTime);
      analytics.trackTiming('performance', 'dom_content_loaded', performanceData.domContentLoaded);
//       analytics.trackTiming()
//         'performance',
//         'first_contentful_paint',
//         performanceData.firstContentfulPaint,
);
//       analytics.trackTiming()
//         'performance',
//         'largest_contentful_paint',
//         performanceData.largestContentfulPaint,
);
//       analytics.trackTiming()
//         'performance',
//         'cumulative_layout_shift',
//         performanceData.cumulativeLayoutShift,
);
      analytics.trackTiming('performance', 'first_input_delay', performanceData.firstInputDelay);
    };
    // Start monitoring;
    setIsMonitoring(true);
    // Measure performance after page load;
    if (document.readyState === 'complete') {
    } else {// TODO: Add content;}
}
      window.addEventListener('load', measurePerformance);
    }
    return () => {// TODO: Add content;}
}
      window.removeEventListener('load', measurePerformance);
    };
  }, []);
  return { metrics, isMonitoring };
};