<<<<<<< HEAD:all-pages-backup/utils/performanceEnhancer.ts
export const debounce = <T extends (...args: unknown[]) => unknown>(;
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {;
  let timeout: NodeJS.Timeout
<<<<<<< HEAD:all-pages-backup/utils/performanceEnhancer.ts
export const throttle = <T extends (...args: unknown[]) => unknown>(;
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {;
  let inThrottle: boolean
<<<<<<< HEAD:all-pages-backup/utils/performanceEnhancer.ts
  private static instance: PerformanceMonitor
<<<<<<< HEAD:all-pages-backup/utils/performanceEnhancer.ts
  const trackCLS = () => {;
    let clsValue = 0
<<<<<<< HEAD:all-pages-backup/utils/performanceEnhancer.ts
    used: memory.usedJSHeapSize,
  total: memory.totalJSHeapSize,
  limit: memory.jsHeapSizeLimit,
  percentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
<<<<<<< HEAD:all-pages-backup/utils/performanceEnhancer.ts
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
  loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
  totalTime: navigation.loadEventEnd - navigation.fetchStart
    }
    paint: {
      firstPaint: paint.find((entry) => entry.name === 'first-paint')?.startTime || 0,
  firstContentfulPaint: paint.find((entry) => entry.name === 'first-contentful-paint')?.startTime || 0
