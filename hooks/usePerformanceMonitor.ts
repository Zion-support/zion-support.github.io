
<<<<<<< HEAD
},;
export default usePerformanceMonitor,;
=======
// Type definitions for performance APIs,
declare global {interface PerformanceEntry {
    name: string,
    entryType: string,
    startTime: number,
    duration: number}

  interface PerformanceNavigationTiming extends PerformanceEntry {loadEventEnd: number,
    loadEventStart: number}

  interface PerformancePaintTiming extends PerformanceEntry {name: string}

  interface PerformanceEventTiming extends PerformanceEntry {processingStart: number}
}

interface PerformanceMetrics {loadTime: number,
  renderTime: number,
  memoryUsage: number,
  fps: number}

export function usePerformanceMonitor(): PerformanceMetrics | null {const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect_(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return}

    const updateMetrics = () => {const navigation = window.performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming;
      const memory = (window.performance as any).memory;

      if (navigation) {
        setMetrics({
          loadTime: navigation.loadEventEnd - navigation.loadEventStart, renderTime:
            navigation.domContentLoadedEventEnd -
            navigation.domContentLoadedEventStart, memoryUsage: memory?.usedJSHeapSize || 0, fps: 60 })
      }
    };

    if (document.readyState === 'complete') {updateMetrics()} else {window.addEventListener('load', updateMetrics)}

    return () => {window.removeEventListener('load', updateMetrics)}
  }, []);

  return metrics
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
