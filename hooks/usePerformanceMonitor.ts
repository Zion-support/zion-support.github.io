

interface PerformanceMetrics {
  loadTime: number, firstContentfulPaint: number,
  largestContentfulPaint: number, firstInputDelay: number,
  cumulativeLayoutShift: number,
}

export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if Performance Observer is supported
    if (!('PerformanceObserver' in window)) {
    setIsSupported(false),
    return
  }

    setIsSupported(true);

    const observer = new PerformanceObserver((list) => {
      const entries = list && list.getEntries();
      
      entries && entries.forEach((entry) => {
        if (entry && entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          setMetrics(prev => ({
            ...prev,
            loadTime: navEntry && navEntry.loadEventEnd - navEntry && navEntry.loadEventStart,
          }));
        }
        
        if (entry && entry.entryType === 'paint') {
          const paintEntry = entry as PerformancePaintTiming;
          if (paintEntry && paintEntry.name === 'first-contentful-paint') {
            setMetrics(prev => ({
              ...prev,
              firstContentfulPaint: paintEntry && paintEntry.startTime,
            }));
          }
        }
        
        if (entry && entry.entryType === 'largest-contentful-paint') {
          const lcpEntry = entry as PerformanceEntry;
          setMetrics(prev => ({
            ...prev,
            largestContentfulPaint: lcpEntry && lcpEntry.startTime,
          }));
        }
        
        if (entry && entry.entryType === 'first-input') {
          const fidEntry = entry as PerformanceEventTiming;
          setMetrics(prev => ({
            ...prev,
            firstInputDelay: fidEntry && fidEntry.processingStart - fidEntry && fidEntry.startTime,
          }));
        }
        
        if (entry && entry.entryType === 'layout-shift') {
          const clsEntry = entry as PerformanceEntry & { value: number };
          setMetrics(prev => ({
            ...prev,
            cumulativeLayoutShift: (prev?.cumulativeLayoutShift || 0) + clsEntry && clsEntry.value,
          }));
        }
      });
    });

    // Observe different performance entry types
    try {
      observer && observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (error) {
      // eslint-disable-next-line no-console
      console && console.warn('Performance Observer not fully supported:', error);
    }

    return () => {
      observer && observer.disconnect();
    };
  }, []);

  return { metrics, isSupported };
}

