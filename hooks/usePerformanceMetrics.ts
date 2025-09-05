export function usePerformanceMetrics() {_const [metrics, _setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isSupported, _setIsSupported] = useState(false);
  useEffect__(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return;}
    setIsSupported(true);
    const _measurePerformance = () => {_const _navigation = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming;
      const _paintEntries = performance.getEntriesByType('paint');
      const _fcp = paintEntries.find(
        entry => entry.name === 'first-contentful-paint'
      );
      const _lcp = performance.getEntriesByType(
        'largest-contentful-paint'
      )[0] as PerformanceNavigationTiming;
      const _cls = performance
        .getEntriesByType('layout-shift')
        .reduce(_(acc, _entry) => {
          return acc + (entry as any).value;}, 0);
      const _fid = performance.getEntriesByType(
        'first-input'
      )[0] as PerformanceEventTiming;
      setMetrics({_loadTime: navigation.loadEventEnd - navigation.loadEventStart, _firstContentfulPaint: fcp ? fcp.startTime : 0, _largestContentfulPaint: lcp ? lcp.startTime : 0, _cumulativeLayoutShift: cls, _firstInputDelay: fid ? fid.processingStart - fid.startTime : 0, });
    };
    // Wait for all performance entries to be available
    const _timer = setTimeout(measurePerformance, 1000);
    return () => clearTimeout(timer);
  }, []);
  return {_metrics, _isSupported};
}
