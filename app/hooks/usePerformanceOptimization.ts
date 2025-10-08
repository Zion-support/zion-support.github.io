}

export const usePerformanceOptimization = () => {
  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
    }

    const navigation = performance.getEntriesByType(
      'navigation'

    const metrics: PerformanceMetrics = {
      loadTime: navigation
        ? navigation.loadEventEnd - navigation.loadEventStart
        : 0,
      firstContentfulPaint:
        paintEntries.find(entry => entry.name === 'first-contentful-paint')
          ?.startTime || 0,
      largestContentfulPaint: 0,
      cumulativeLayoutShift: 0,
      firstInputDelay: 0,

    // Measure FID
    const fidObserver = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        const fidEntry = entry as PerformanceEntry & {

  return {
    measurePerformance,
    optimizeImages,
    preloadCriticalResources,
