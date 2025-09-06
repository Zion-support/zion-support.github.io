
interface PerformanceMetrics {
  loadTime: number, firstContentfulPaint: any
  largestContentfulPaint: number, firstInputDelay: any
export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isSupported, setIsSupported] = useState(false);
  useEffect() => {
    if (typeof window = = 'undefined'
    if (!('PerformanceObserver'
        if (entry.entryType = = 'navigation'
        if (entry.entryType = = 'paint'
          if (paintEntry && paintEntry.name = = 'first-contentful-paint'
        if (entry.entryType = = 'largest-contentful-paint'
        if (entry.entryType = = 'first-input'
        if (entry.entryType = = 'layout-shift'
      observer && observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'
      console && console.warn('Performance Observer not fully supported: any
      observer.observe ({ entry_types: ['navigation', 'paint', 'largest - contentful - paint', 'first - input', 'layout - shift'
      console.warn ('Performance Observer not fully supported: any