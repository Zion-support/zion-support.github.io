

interface PerformanceMetrics {
  loadTime: number, firstContentfulPaint: number
  largestContentfulPaint: number, firstInputDelay: number
  cumulativeLayoutShift: number
}
export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isSupported, setIsSupported] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Check if Performance Observer is supported
    if (!('PerformanceObserver' in window)) {
    setIsSupported(false)
    return
  }
    setIsSupported(true);
    const observer = new PerformanceObserver((list) => {
<<<<<<< HEAD
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          setMetrics(prev => ({
            ...prev
            loadTime: navEntry.loadEventEnd - navEntry.loadEventStart
          }));
        }
        if (entry.entryType === 'paint') {
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          const paintEntry = entry as PerformancePaintTiming;
          if (paintEntry && paintEntry.name === 'first-contentful-paint') {
            setMetrics(prev => ({
<<<<<<< HEAD
              ...prev
              firstContentfulPaint: paintEntry.startTime
            }));
          }
        }
        if (entry.entryType === 'largest-contentful-paint') {
          const lcpEntry = entry as PerformanceEntry;
          setMetrics(prev => ({
            ...prev
            largestContentfulPaint: lcpEntry.startTime
          }));
        }
        if (entry.entryType === 'first-input') {
          const fidEntry = entry as PerformanceEventTiming;
          setMetrics(prev => ({
            ...prev
            firstInputDelay: fidEntry.processingStart - fidEntry.startTime
          }));
        }
        if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as PerformanceEntry & { value: number }
          setMetrics(prev => ({
            ...prev
            cumulativeLayoutShift: (prev?.cumulativeLayoutShift |0) + clsEntry.value
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
      observer.disconnect();
    }
=======
      observer && observer.disconnect();
    };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }, []);
  return { metrics, isSupported }
}

