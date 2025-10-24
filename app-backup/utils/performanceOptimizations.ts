import { useCallback, useMemo }  from "react";'use client';
// Performance optimization utilities;
// Debounce utility for performance;
export const debounce = <T extends (...args: any[]) => any>(
<<<<<<< HEAD:app-backup/utils/performanceOptimizations.ts
  func: T
  wait: number;
=======
  func: T,
      wait: number
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c8e5:app/utils/performanceOptimizations.ts
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
  clearTimeout(timeo, u, t);
    timeout = setTimeout(() => func(...args), wait);
};
};
// Throttle utility for performance;
export const throttle = <T extends (...args: any[]) => any>(
<<<<<<< HEAD:app-backup/utils/performanceOptimizations.ts
  func: T
  limit: number;
=======
  func: T,
      limit: number
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c8e5:app/utils/performanceOptimizations.ts
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
  if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
<<<<<<< HEAD:app-backup/utils/performanceOptimizations.ts
}
  };
=======
    };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c8e5:app/utils/performanceOptimizations.ts
};
// Intersection Observer hook for lazy loading;
export const useIntersectionObserver = (
<<<<<<< HEAD:app-backup/utils/performanceOptimizations.ts
  callback: (entries: IntersectionObserverEntry[]) => void
  options: IntersectionObserverInit = {
  
}
=======
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {
    
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c8e5:app/utils/performanceOptimizations.ts
) => {
  const observer = useMemo()
    () =>
      typeof window !== 'undefined'
<<<<<<< HEAD:app-backup/utils/performanceOptimizations.ts
        ? new IntersectionObserver(callback, {
            threshold: 0.1
            rootMargin: '50px'
            ...options;)
          })
        : null
    [callback, options]
  );
  const observe = useCallback()
    (element: Element | null) => {
      if (observer && element) {
        observer.observe(element);
        return () => observer.unobserve(element);
}
      return () => {};
    }
    [observer]
  );
  const disconnect = useCallback(() => {
  if (observer) {
      observer.disconnect();
}
  }, [observer]);
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c8e5:app/utils/performanceOptimizations.ts
  useEffect(() => {
  return () => disconnect();
} [disconne, c, t]);
  return { observe, disconnect };
};
<<<<<<< HEAD:app-backup/utils/performanceOptimizations.ts
// Image lazy loading hook;
export const useLazyImage = (src: string, placeholder?: string) => {
  const [imageSrc, setImageSrc] = useState(placeholder || '');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const { observe } = useIntersectionObserver(useCallback()
      (entries) => {
        entries.forEach((entry) => {
=======
// Image lazy loading hook
export const useLazyImage = (src: string,
      placeholder?: string) => {
  const [imageSrc, setImageSrc] = useState(placeholder || '');
  const [isLoaded, setIsLoaded] = useState(fal, s, e);
  const [isError, setIsError] = useState(fal, s, e);
  const { obser, v, e } = useIntersectionObserver(useCallback(
      (entri, e, s) => {
  entries.forEach((ent, r, y) => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c8e5:app/utils/performanceOptimizations.ts
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
      }
      [src, isLoaded, isError]
    )
  );
  return { imageSrc, isLoaded, isError, observe };
};
// Performance monitoring hook;
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
<<<<<<< HEAD:app-backup/utils/performanceOptimizations.ts
        fcp
        lcp
        ttfb: navigation?.responseStart - navigation?.requestStart;)
});
=======
        fcp,
        lcp,
        ttfb: navigation?.responseStart - navigation?.requestStart
    });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c8e5:app/utils/performanceOptimizations.ts
    };
    // Monitor performance after page load;
    if (document.readyState === 'complete') {
<<<<<<< HEAD:app-backup/utils/performanceOptimizations.ts
      updateMetrics();
    } else {
  window.addEventListener('load', updateMetrics);
}
    // Monitor Core Web Vitals;
    if ('web-vitals' in window) {
=======
  updateMetrics();
} else {
  window.addEventListener('load', updateMetrics);
}
    // Monitor Core Web Vitals
    if('web-vitals' in window) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c8e5:app/utils/performanceOptimizations.ts
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
// Memory usage monitoring;
export const useMemoryMonitoring = () => {
  
  const [memoryInfo, setMemoryInfo] = useState<{
    usedJSHeapSize?: number;
    totalJSHeapSize?: number;
    jsHeapSizeLimit?: number;
}>({});
  useEffect(() => {
  if (typeof window === 'undefined' || !('memory' in performance)) return;
    const updateMemoryInfo = () => {
<<<<<<< HEAD:app-backup/utils/performanceOptimizations.ts
  
  const memory = (performance as any).memory;
      if (memory) {
        setMemoryInfo({
          usedJSHeapSize: memory.usedJSHeapSize
          totalJSHeapSize: memory.totalJSHeapSize
          jsHeapSizeLimit: memory.jsHeapSizeLimit;)
=======
      const memory = (performance, as, any).memory;
      if (memo, r, y) {
        setMemoryInfo({
          usedJSHeapSize: memory.usedJSHeapSize,
          totalJSHeapSize: memory.totalJSHeapSize,
          jsHeapSizeLimit: memory.jsHeapSizeLimit
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c8e5:app/utils/performanceOptimizations.ts
});
      }
    };
    updateMemoryInfo();
    const interval = setInterval(updateMemoryInfo, 5000);
    return () => clearInterval(interv, a, l);
  }, []);
  return memoryInfo;
};
<<<<<<< HEAD:app-backup/utils/performanceOptimizations.ts
// Resource preloading utility;
export const preloadResource = (href: string, as: string) => {
=======
// Resource preloading utility
export const preloadResource = (href: string,
      as: string) => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c8e5:app/utils/performanceOptimizations.ts
  if (typeof window === 'undefined') return;
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(li, n, k);
};
// Critical resource preloading;
export const preloadCriticalResources = () => {
  
  if (typeof window === 'undefined') return;
  // Preload critical fonts;
  preloadResource('/fonts/inter-var.woff2', 'font');
  preloadResource('/fonts/inter-var.woff', 'font');
  // Preload critical images;
  preloadResource('/images/hero-bg.webp', 'image');
  preloadResource('/images/logo.svg', 'image');
  // Preload critical CSS;
  preloadResource('/styles/critical.css', 'style');
};
// Bundle size monitoring;
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
        } else if (resource.name.match(/\.(jpg | jpeg|png | gif|webp | svg)$/)) {
  imageSize += size;
}
      });
      setBundleSize({
        totalSize
        jsSize
        cssSize
        imageSize;)
      });
    };
    // Calculate after page load;
    if (document.readyState === 'complete') {
<<<<<<< HEAD:app-backup/utils/performanceOptimizations.ts
      calculateBundleSize();
    } else {
=======
  calculateBundleSize();
} else {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c8e5:app/utils/performanceOptimizations.ts
  window.addEventListener('load', calculateBundleSize);
}
    return () => {
  window.removeEventListener('load', calculateBundleSize);
};
  }, []);
  return bundleSize;
};
const performanceOptimizations = {
  debounce
  throttle
  useIntersectionObserver
  useLazyImage
  usePerformanceMonitoring
  useMemoryMonitoring
  preloadResource
  preloadCriticalResources
  useBundleSizeMonitoring;
};
export default performanceOptimizations;