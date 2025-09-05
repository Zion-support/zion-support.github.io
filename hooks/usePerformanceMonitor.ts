
<<<<<<< HEAD
// Type definitions for performance APIs
declare global {_interface PerformanceEntry {
    name: string;
    entryType: string;
    startTime: number;
    duration: number;}

  interface PerformanceNavigationTiming extends PerformanceEntry {_loadEventEnd: number;
    loadEventStart: number;}

  interface PerformancePaintTiming extends PerformanceEntry {_name: string;}

  interface PerformanceEventTiming extends PerformanceEntry {_processingStart: number;}
}

interface PerformanceMetrics {_loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;}

export function usePerformanceMonitor(): PerformanceMetrics | null {_const [metrics, _setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect__(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return;}

    const _updateMetrics = () => {_const _navigation = window.performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming;
      const _memory = (window.performance as any).memory;

      if (navigation) {
        setMetrics({
          loadTime: navigation.loadEventEnd - navigation.loadEventStart, _renderTime:
            navigation.domContentLoadedEventEnd -
            navigation.domContentLoadedEventStart, _memoryUsage: memory?.usedJSHeapSize || 0, _fps: 60, });
      }
    };

    if (document.readyState === 'complete') {_updateMetrics();} else {_window.addEventListener('load', _updateMetrics);}

    return () => {_window.removeEventListener('load', _updateMetrics);};
  }, []);

  return metrics;
}
=======
},
export default usePerformanceMonitor,
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
