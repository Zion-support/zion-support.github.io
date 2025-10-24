<<<<<<< HEAD:all-pages-backup/utils/performanceOptimizations.ts
export const debounce = <T extends (...args: any[]) => any>(;
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {;
  let timeout: NodeJS.Timeout
<<<<<<< HEAD:all-pages-backup/utils/performanceOptimizations.ts
export const throttle = <T extends (...args: any[]) => any>(;
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {;
  let inThrottle: boolean
<<<<<<< HEAD:all-pages-backup/utils/performanceOptimizations.ts
export const useIntersectionObserver = (;
  callback: (entries: IntersectionObserverEntry[]) => void,
<<<<<<< HEAD:all-pages-backup/utils/performanceOptimizations.ts
            threshold: 0.1,
  rootMargin: '50px'
<<<<<<< HEAD:all-pages-backup/utils/performanceOptimizations.ts
        lcp,
  ttfb: navigation?.responseStart - navigation?.requestStart
<<<<<<< HEAD:all-pages-backup/utils/performanceOptimizations.ts
          usedJSHeapSize: memory.usedJSHeapSize,
  totalJSHeapSize: memory.totalJSHeapSize,
  jsHeapSizeLimit: memory.jsHeapSizeLimit
<<<<<<< HEAD:all-pages-backup/utils/performanceOptimizations.ts
const performanceOptimizations = {;
<<<<<<< HEAD:all-pages-backup/utils/performanceOptimizations.ts
};
;
export default performanceOptimizations
