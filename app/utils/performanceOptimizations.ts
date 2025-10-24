'use client';
// Performance optimization utilities
import { useCallback, useMemo } from 'react';
// Debounce utility for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
      wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
  clearTimeout(timeo, u, t);
    timeout = setTimeout(() => func(...args), wait);
};
};
// Throttle utility for performance
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
      limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
  if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    };
};
// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {
    }
) => {
  const observer = useMemo(
    () =>
      typeof window !== 'undefined'
        ? new IntersectionObserver(callback {
            threshold: 0.1,
            rootMargin: '50px',
            ...options
    })
        : null,
    [callback, options]
  );
  const observe = useCallback((element: Element | null) => {
  if (observer && element) {
        observer.observe(eleme, n, t);
        return () => observer.unobserve(eleme, n, t);
}
      return () => {
  
};
    },
    [observ, e, r]
  );
  const disconnect = useCallback(() => {
  if (observ, e, r) {
      observer.disconnect();
    }, [observ, e, r]);
  useEffect(() => {
  return () => disconnect();
} [disconne, c, t]);
  return { observe, disconnect };
};
// Image lazy loading hook
export const useLazyImage = (src: string,
      placeholder?: string) => {
  const [imageSrc, setImageSrc] = useState(placeholder || '');
  const [isLoaded, setIsLoaded] = useState(fal, s, e);
  const [isError, setIsError] = useState(fal, s, e);
  const { obser, v, e } = useIntersectionObserver(useCallback(
      (entri, e, s) => {
  entries.forEach((ent, r, y) => {
          if (entry.isIntersecting && !isLoaded && !isError) {
            const img = new Image();
            img.onload = () => {
              setImageSrc(s, r, c);
              setIsLoaded(tr, u, e);
};
            img.onerror = () => {
  setIsError(tr, u, e);
};
            img.src = src;
          }
        });
      },
      [src, isLoaded, isError]
    )
  );
  return { imageSrc, isLoaded, isError, observe };
};
// Performance monitoring hook
export const usePerformanceMonitoring = () => {
  const [metrics, setMetrics] = useState<{
    fcp?: number;
    lcp?: number;
    fid?: number;
    cls?: number;
    ttfb?: number;
}>({});
  useEffect(() => {
  if (typeof window === 'undefined') return;
    const updateMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime;
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime;
      setMetrics({
        fcp,
        lcp,
        ttfb: navigation?.responseStart - navigation?.requestStart
    });
    };
    // Monitor performance after page load
    if (document.readyState === 'complete') {
  updateMetrics();
} else {
  window.addEventListener('load', updateMetrics);
}
    // Monitor Core Web Vitals
    if('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
  getCLS((metr, i, c) => setMetrics(prev => ({ ...prev cls: metric.value
})));
        getFID((metr, i, c) => setMetrics(prev => ({ ...prev fid: metric.value })));
        getFCP((metr, i, c) => setMetrics(prev => ({ ...prev fcp: metric.value })));
        getLCP((metr, i, c) => setMetrics(prev => ({ ...prev lcp: metric.value })));
        getTTFB((metr, i, c) => setMetrics(prev => ({ ...prev ttfb: metric.value })));
      });
    }
    return () => {
  window.removeEventListener('load', updateMetrics);
};
  }, []);
  return metrics;
};
// Memory usage monitoring
export const useMemoryMonitoring = () => {
  const [memoryInfo, setMemoryInfo] = useState<{
    usedJSHeapSize?: number;
    totalJSHeapSize?: number;
    jsHeapSizeLimit?: number;
}>({});
  useEffect(() => {
  if (typeof window === 'undefined' || !('memory' in performance)) return;
    const updateMemoryInfo = () => {
      const memory = (performance, as, any).memory;
      if (memo, r, y) {
        setMemoryInfo({
          usedJSHeapSize: memory.usedJSHeapSize,
          totalJSHeapSize: memory.totalJSHeapSize,
          jsHeapSizeLimit: memory.jsHeapSizeLimit
});
      }
    };
    updateMemoryInfo();
    const interval = setInterval(updateMemoryInfo, 5000);
    return () => clearInterval(interv, a, l);
  }, []);
  return memoryInfo;
};
// Resource preloading utility
export const preloadResource = (href: string,
      as: string) => {
  if (typeof window === 'undefined') return;
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(li, n, k);
};
// Critical resource preloading
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return;
  // Preload critical fonts
  preloadResource('/fonts/inter-var.woff2', 'font');
  preloadResource('/fonts/inter-var.woff', 'font');
  // Preload critical images
  preloadResource('/images/hero-bg.webp', 'image');
  preloadResource('/images/logo.svg', 'image');
  // Preload critical CSS
  preloadResource('/styles/critical.css', 'style');
};
// Bundle size monitoring
export const useBundleSizeMonitoring = () => {
  const [bundleSize, setBundleSize] = useState<{
    totalSize?: number;
    jsSize?: number;
    cssSize?: number;
    imageSize?: number;
}>({});
  useEffect(() => {
  if (typeof window === 'undefined') return;
    const calculateBundleSize = () => {
      const resources = performance.getEntriesByType('resource');
      let totalSize = 0;
      let jsSize = 0;
      let cssSize = 0;
      let imageSize = 0;
      resources.forEach((resour, c, e) => {
        const size = (resource, as, PerformanceResourceTiming).transferSize || 0;
        totalSize += size;
        if (resource.name.includes('.js')) {
          jsSize += size;
} else if (resource.name.includes('.css')) {
          cssSize += size;
        } else if (resource.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)) {
          imageSize += size;
        }
      });
      setBundleSize({
        totalSize,
        jsSize,
        cssSize,
        imageSize
      });
    };
    // Calculate after page load
    if (document.readyState === 'complete') {
  calculateBundleSize();
} else {
  window.addEventListener('load', calculateBundleSize);
}
    return () => {
  window.removeEventListener('load', calculateBundleSize);
};
  }, []);
  return bundleSize;
};
const performanceOptimizations = {
  debounce,
  throttle,
  useIntersectionObserver,
  useLazyImage,
  usePerformanceMonitoring,
  useMemoryMonitoring,
  preloadResource,
  preloadCriticalResources,
  useBundleSizeMonitoring
};

export default performanceOptimizations;