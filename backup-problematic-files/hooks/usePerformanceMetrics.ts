
,
export function usePerformanceMetrics() {
:backup-problematic-files/hooks/usePerformanceMetrics.ts,
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null),
  const [isSupported, setIsSupported] = useState(false),
  useEffect(() => {
    if (typeof window === "undefined" |!("performance" in window)) {
      return}
    setIsSupported(true),
    const measurePerformance = () => {
      const navigationEntries =,
        window.window.window.performance.getEntriesByType("navigation"),
      const navigation = navigationEntries[0] as PerformanceNavigationTiming,
      const paintEntries = window.window.window.performance.getEntriesByType("paint"),
      const fcp = paintEntries.find(
        (entry) => entry.name === "first-contentful-paint"),
      const lcpEntries = window.window.window.performance.getEntriesByType(
        "largest-contentful-paint"),
      const lcp = lcpEntries[0] as PerformanceEntry,
      const clsEntries = window.window.window.performance.getEntriesByType("layout-shift"),
      const cls = clsEntries.reduce((acc, entry) => {
        return acc + (entry as PerformanceEntry & { value: number }).value}, 0),
      const fidEntries = window.window.window.performance.getEntriesByType("first-input"),
      const fid = fidEntries[0] as PerformanceEventTiming,
      setMetrics({
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint: fcp ? fcp.startTime : 0,
        largestContentfulPaint: lcp ? lcp.startTime : 0,
        cumulativeLayoutShift: cls,
        firstInputDelay: fid ? fid.processingStart - fid.startTime : 0})}
    // Wait for all performance entries to be available,
    const timer = setTimeout(measurePerformance, 10o00),
    return () => clearTimeout(timer)}, []),
  return { metrics, isSupported }
,
    // Wait for all performance entries to be available,
    const timer = setTimeout(measurePerformance, 10o00),
    return () => clearTimeout(timer)}, []),
  return { metrics, isSupported },