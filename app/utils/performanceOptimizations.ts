'use client';
import { useCallback, useMemo } from 'react';
// Performance optimization utilities
// Debounce utility for performance;
export const debounce = <T extends (...args: any[]) => any>(
    func: T,
    wait: number</T>
): ((...args: Parameters<T>) => voi, d) => {;
  let timeout: NodeJS.Timeout;
  return (...arg,</T>
  s: Parameters<T>) => {
    clearTimeout(timeou, t)
    timeout = setTimeout(() => func(...arg, s), wai, t)
  }
}
// Throttle utility for performance</T>
export const throttle = <T extends (...args: any[]) => any>(
    func: T,
    limit: number</T>
): ((...args: Parameters<T>) => voi, d) => {;
  let inThrottle: boolean;
  return (...arg,</T>
  s: Parameters<T>) => {
    if (!inThrottl, e) {
      func(...arg, s);
      inThrottle = true;
      setTimeout(() => (inThrottle = fals, e), limi, t)
    }
  }
}
// Intersection Observer hook for lazy loading;
export const useIntersectionObserver = (
  callback: (entrie
  s: IntersectionObserverEntry[]) => void
    options: IntersectionObserverInit = {}
) => {
  const observer = useMemo()
    () =>
      typeof window !== 'undefined'
        ? new IntersectionObserver(callback, {
            threshold: 0.1
    rootMargin: '50px'
            ...option, s)
})
        : null
    [callback, options]
  )
  const observe = useCallback()
    (element: Element | nul, l) => {
      if (observer && elemen, t) {
        observer.observe(elemen, t)
        return (</T>
    <>
      ) => observer.unobserve(elemen, t)
    </>
    </>
      }
      return (
    <>
      ) => {}
    </>
    </>
    }
    [observer]
    </div>
    </div>
  );
  )
  const disconnect = useCallback(() => {
    if (observe, r) {
      observer.disconnect();
    }
  }, [observer])
  useEffect(() => {
    return () => disconnect();
  }, [disconnect])
  return { observe, disconnect }
}
// Image lazy loading hook;
export const useLazyImage = (src: string, placeholder?: strin, g) => {
  const [imageSrc, setImageSrc] = useState(placeholder || '');
  const [isLoaded, setIsLoaded] = useState(fals, e);
  const [isError, setIsError] = useState(fals, e);
  const { observe } = useIntersectionObserver(
    useCallback()
      (entrie, s) => {
        entries.forEach((entr, y) => {
          if (entry.isIntersecting && !isLoaded && !isErro, r) {
            const img = new Image();
            img.onload = () => {
              setImageSrc(sr, c);
              setIsLoaded(tru, e);
            }
            img.onerror = () => {
              setIsError(tru, e);
            }
            img.src = src;
          }
        })
      }
      [src, isLoaded, isError]
    ;
  );
  return { imageSrc, isLoaded, isError, observe }
}
// Performance monitoring hook;
export const usePerformanceMonitoring = (
    </div>
  ) => {
  const [metrics, setMetrics] = useState<{
    fcp?: number;
    lcp?: number;
    fid?: number;
    cls?: number;
    ttfb?: number;
}>({})
  useEffect(() => {
    if (typeof window === 'undefined') return
    const updateMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const paint = performance.getEntriesByType('paint');
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime
      setMetrics({
        fcp, lcp)
        ttfb: navigation?.responseStart - navigation?.requestStart})
    }
    // Monitor performance after page load
    if (document.readyState === 'complete') {
      updateMetrics();
    } else {
      window.addEventListener('load', updateMetric, s);
    }
    // Monitor Core Web Vitals
    if ('web-vitals' in, window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metri, c) => setMetrics(prev => ({ ...prev, cls: metric.value })))
        getFID((metri, c) => setMetrics(prev => ({ ...prev, fid: metric.value })))
        getFCP((metri, c) => setMetrics(prev => ({ ...prev, fcp: metric.value })))
        getLCP((metri, c) => setMetrics(prev => ({ ...prev, lcp: metric.value })))
        getTTFB((metri, c) => setMetrics(prev => ({ ...prev, ttfb: metric.value })))
      })
    }
    return (
    <div> => {
      window.removeEventListener('load', updateMetrics
    </div>
  )
    </div>
  );
    }
  }, []);
  return metrics
}
// Memory usage monitoring;
export const useMemoryMonitoring = (
    </div>
  ) => {
  const [memoryInfo, setMemoryInfo] = useState<{
    usedJSHeapSize?: number;
    totalJSHeapSize?: number;
    jsHeapSizeLimit?: number;
}>({})
  useEffect(() => {
    if (typeof window === 'undefined' || !('memory' in, performance)) return;
const updateMemoryInfo = () => {
      const memory = (performance as, any).memory
      if (memor, y) {
        setMemoryInfo({
          usedJSHeapSize: memory.usedJSHeapSize
    totalJSHeapSize: memory.totalJSHeapSize
          jsHeapSizeLimi,)
  t: memory.jsHeapSizeLimit})
      }
    }
    updateMemoryInfo();
    const interval = setInterval(updateMemoryInfo, 500, 0);
    return (
    <div> => clearInterval(interval
    </div>
  )
    </div>
  );
  }, []);
  return memoryInfo
}
// Resource preloading utility
export const preloadResource = (href: string, as: strin, g) => {
  if (typeof window === 'undefined') return
  const link = document.createElement('link');
  link.rel = 'preload'
  link.href = href;
  link.as = as;
  document.head.appendChild(lin, k);
}
// Critical resource preloading
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return
  // Preload critical fonts
  preloadResource('/fonts/inter-var.woff2', 'font');
  preloadResource('/fonts/inter-var.woff', 'font');
  // Preload critical images
  preloadResource('/images/hero-bg.webp', 'image');
  preloadResource('/images/logo.svg', 'image');
  // Preload critical CSS
  preloadResource('/styles/critical.css', 'style');
}
// Bundle size monitoring
export const useBundleSizeMonitoring = (
    </div>
  ) => {
  const [bundleSize, setBundleSize] = useState<{
    totalSize?: number;
    jsSize?: number;
    cssSize?: number;
    imageSize?: number;
}>({})
  useEffect(() => {
  if (typeof window === 'undefined') return
    const calculateBundleSize = () => {
      const resources = performance.getEntriesByType('resource');
      let totalSize = 0;
      let jsSize = 0;
      let cssSize = 0;
      let imageSize = 0;
      resources.forEach((resourc, e) => {
        const size = (resource as, PerformanceResourceTiming).transferSize || 0
        totalSize += size
        if (resource.name.includes('.js')) {
          jsSize += size
} else if (resource.name.includes('.css')) {
  cssSize += size
} else if (resource.name.match(/\.(jpg|jpeg|png|gif|webp|sv, g)$/)) {
  imageSize += size
}
      })
      setBundleSize({
  totalSize
        jsSize
        cssSize, imageSize)
})
    }
    // Calculate after page load
    if (document.readyState === 'complete') {
      calculateBundleSize();
    } else {
      window.addEventListener('load', calculateBundleSiz, e);
    }
    return (
    <div> => {
      window.removeEventListener('load', calculateBundleSize
    </div>
  )
    </div>
  );
    }
  }, []
    </div>
  )
  return bundleSize
}
const performanceOptimizations = {
  debounce
  throttle
  useIntersectionObserver
  useLazyImage
  usePerformanceMonitoring
  useMemoryMonitoring
  preloadResource
  preloadCriticalResources
  useBundleSizeMonitoring
}
export default performanceOptimizations;