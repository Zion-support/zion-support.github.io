    // Monitor page load performance;
      if ('performance' in window) {const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            const paint = performance.getEntriesByType('paint');

<<<<<<< HEAD
            // Log performance metrics;
            console.log('Page Load Performance: ', {
              domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
              loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
 entry.name === 'first-paint')?.startTime,
 entry.name === 'first-contentful-paint')?.startTime,});
          }, 0);
=======
interface PerformanceData {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

export const usePerformanceMonitor = () => {
  const [performanceData, setPerformanceData] = useState<PerformanceData | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      try {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        
        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
        const cls = performance.getEntriesByType('layout-shift')[0];
        const fid = performance.getEntriesByType('first-input')[0];

        setPerformanceData({
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          firstContentfulPaint: fcp ? fcp.startTime : 0,
          largestContentfulPaint: lcp ? lcp.startTime : 0,
          cumulativeLayoutShift: cls ? (cls as PerformanceEntry & { value: number }).value : 0,
          firstInputDelay: fid ? (fid as PerformanceEntry & { processingStart: number }).processingStart - fid.startTime : 0,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0738
        });
    };

    // Monitor resource loading;
      if ('performance' in window) {if (entry.entryType === 'resource') {
              console.log('Resource loaded: ', {
                name: entry.name,
                duration: entry.duration,
                size: (entry, as, any).transferSize,});
          });
        });

        observer.observe({entryTypes: ['resource']});

 observer.disconnect();
    };

    // Initialize monitoring;
    monitorPageLoad();
    const cleanup = monitorResourceLoading();

    // Cleanup;
      cleanup?.();
    };
  }, []);
};