<<<<<<< HEAD
import { useCallback, useMemo, useState, useEffect } from 'react'
'use client'
// Performance optimization utilities

// Debounce utility for performance
export const debounce = <T extends (...args: any[]) => any>(
=======
'use client';
// Performance optimization utilities;
import { useCallback, useMemo } from 'react';
// Debounce utility for performance;
export const debounce = <T extends (...args: any[]) =>any</(
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
  func: T,
  wait: number;
): ((...args: Parameters<T>) => void) =</ {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
<<<<<<< HEAD
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Throttle utility for performance
export const throttle = <T extends (...args: any[]) => any>(
=======
    clearTimeout(timeout);
    timeout = setTimeout(() =</ func(...args), wait);
  };
};
// Throttle utility for performance;
export const throttle = <T extends (...args: any[]) =>any</(
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
  func: T,
  limit: number;
): ((...args: Parameters<T>) => void) =</ {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
<<<<<<< HEAD
  }
}

// Intersection Observer hook for lazy loading
=======
  };
};
// Intersection Observer hook for lazy loading;
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
export const useIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {, }
) => {
  const observer = useMemo(
    () =>
      typeof window !== 'undefined'
        ? new IntersectionObserver(callback, {
            threshold: 0.1,
            rootMargin: '50px',
            ...options;
          })
        : null,
    [callback, options]
  )

  const observe = useCallback(
<<<<<<< HEAD
    (element: Element | null) => {
      if (observer && element) {
        observer.observe(element)
        return () => observer.unobserve(element)
=======
    (element: Element | null) => {if (observer && element) {
        observer.observe(element);
        return () => observer.unobserve(element);
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
      }
      return () => {}
    },
    [observer]
  )

  const disconnect = useCallback(() => {
    if (observer) {
      observer.disconnect()
    }
  }, [observer])

  useEffect(() => {
<<<<<<< HEAD
    return () => disconnect()
  }, [disconnect])

  return { observe, disconnect }
}

// Image lazy loading hook
=======
    return () => disconnect();
  }, [disconnect]);
  return { observe, disconnect };
};
// Image lazy loading hook;
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
export const useLazyImage = (src: string, placeholder?: string) => {
  const [imageSrc, setImageSrc] = useState(placeholder || '')
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)

  const { observe } = useIntersectionObserver(
    useCallback(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded && !isError) {
            const img = new Image()
            img.onload = () => {
              setImageSrc(src)
              setIsLoaded(true)
            }
            img.onerror = () => {
              setIsError(true)
            }
            img.src = src
          }
        })
      },
      [src, isLoaded, isError]
    )
<<<<<<< HEAD
  )

  return { imageSrc, isLoaded, isError, observe }
}

// Performance monitoring hook
export const usePerformanceMonitoring = () => {
  const [metrics, setMetrics] = useState<{
    fcp?: number
    lcp?: number
    fid?: number
    cls?: number
    ttfb?: number
  }>({})

  useEffect(() => {
    if (typeof window === 'undefined') return

    const updateMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const paint = performance.getEntriesByType('paint')
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime
      setMetrics({
        fcp,
        lcp,
        ttfb: navigation?.responseStart - navigation?.requestStart
      })
    }

    // Monitor performance after page load
=======
  );
  return { imageSrc, isLoaded, isError, observe };
};
// Performance monitoring hook;
export const usePerformanceMonitoring = () =</ {
  return;
  const [metrics, setMetrics] = useState<{
    fcp?: number;
    lcp?: number;
    fid?: number;
    cls?: number;
    ttfb?: number;
  
}>({});
  useEffect(() => {if (typeof window === 'undefined') return;
    const updateMetrics = () => {
  return;
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime;
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime;
      setMetrics({
        fcp,
        lcp,
        ttfb: navigation?.responseStart - navigation?.requestStart;
      });
    };
    // Monitor performance after page load;
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
    if (document.readyState === 'complete') {
      updateMetrics()
    } else {
      window.addEventListener('load', updateMetrics)
    }
<<<<<<< HEAD

    // Monitor Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => setMetrics(prev => ({ ...prev, cls: metric.value })))
        getFID((metric) => setMetrics(prev => ({ ...prev, fid: metric.value })))
        getFCP((metric) => setMetrics(prev => ({ ...prev, fcp: metric.value })))
        getLCP((metric) => setMetrics(prev => ({ ...prev, lcp: metric.value })))
        getTTFB((metric) => setMetrics(prev => ({ ...prev, ttfb: metric.value })))
      })
=======
    // Monitor Core Web Vitals;
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {getCLS((metric) => setMetrics(prev => ({ ...prev, cls: metric.value })));
        getFID((metric) => setMetrics(prev => ({...prev, fid: metric.value })));
        getFCP((metric) => setMetrics(prev => ({...prev, fcp: metric.value })));
        getLCP((metric) => setMetrics(prev => ({...prev, lcp: metric.value })));
        getTTFB((metric) => setMetrics(prev => ({...prev, ttfb: metric.value })));
      });
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
    }

    return () => {
<<<<<<< HEAD
      window.removeEventListener('load', updateMetrics)
    }
  }, [])

  return metrics
}

// Memory usage monitoring
export const useMemoryMonitoring = () => {
  const [memoryInfo, setMemoryInfo] = useState<{
    usedJSHeapSize?: number
    totalJSHeapSize?: number
    jsHeapSizeLimit?: number
  }>({})

  useEffect(() => {
    if (typeof window === 'undefined' || !('memory' in performance)) return

    const updateMemoryInfo = () => {
      const memory = (performance as any).memory
=======
      window.removeEventListener('load', updateMetrics);
    };
  }, []);
  return metrics;
};
// Memory usage monitoring;
export const useMemoryMonitoring = () =</ {
  return;
  const [memoryInfo, setMemoryInfo] = useState<{
    usedJSHeapSize?: number;
    totalJSHeapSize?: number;
    jsHeapSizeLimit?: number;
  
}>({});
  useEffect(() => {if (typeof window === 'undefined' || !('memory' in performance)) return;
    const updateMemoryInfo = () => {
  return;
      const memory = (performance as any).memory;
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
      if (memory) {
        setMemoryInfo({
          usedJSHeapSize: memory.usedJSHeapSize,
          totalJSHeapSize: memory.totalJSHeapSize,
<<<<<<< HEAD
          jsHeapSizeLimit: memory.jsHeapSizeLimit
        })
      }
    }

    updateMemoryInfo()
    const interval = setInterval(updateMemoryInfo, 5000)
    return () => clearInterval(interval)
  }, [])

  return memoryInfo
}

// Resource preloading utility
export const preloadResource = (href: string, as: string) => {
  if (typeof window === 'undefined') return
  const link = document.createElement('link')
  link.rel = 'preload'
  link.href = href
  link.as = as
  document.head.appendChild(link)
}

// Critical resource preloading
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return
  // Preload critical fonts
  preloadResource('/fonts/inter-var.woff2', 'font')
  preloadResource('/fonts/inter-var.woff', 'font')
  // Preload critical images
  preloadResource('/images/hero-bg.webp', 'image')
  preloadResource('/images/logo.svg', 'image')
  // Preload critical CSS
  preloadResource('/styles/critical.css', 'style')
}

// Bundle size monitoring
export const useBundleSizeMonitoring = () => {
  const [bundleSize, setBundleSize] = useState<{
    totalSize?: number
    jsSize?: number
    cssSize?: number
    imageSize?: number
  }>({})

=======
          jsHeapSizeLimit: memory.jsHeapSizeLimit;
        });
      }
    };
    updateMemoryInfo();
    const interval = setInterval(updateMemoryInfo, 5000);
    return () => clearInterval(interval);
  }, []);
  return memoryInfo;
};
// Resource preloading utility;
export const preloadResource = (href: string, as: string) => {if (typeof window === 'undefined') return;
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};
// Critical resource preloading;
export const preloadCriticalResources = () => {
  return;
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
export const useBundleSizeMonitoring = () =</ {
  return;
  const [bundleSize, setBundleSize] = useState<{
    totalSize?: number;
    jsSize?: number;
    cssSize?: number;
    imageSize?: number;
  
}>({});
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
  useEffect(() => {
    if (typeof window === 'undefined') return

    const calculateBundleSize = () => {
<<<<<<< HEAD
      const resources = performance.getEntriesByType('resource')
      let totalSize = 0
      let jsSize = 0
      let cssSize = 0
      let imageSize = 0

=======
  return;
      const resources = performance.getEntriesByType('resource');
      let totalSize = 0;
      let jsSize = 0;
      let cssSize = 0;
      let imageSize = 0;
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
      resources.forEach((resource) => {
        const size = (resource as PerformanceResourceTiming).transferSize || 0
        totalSize += size
        if (resource.name.includes('.js')) {
<<<<<<< HEAD
          jsSize += size
        } else if (resource.name.includes('.css')) {
          cssSize += size
=======
          jsSize += size;
        
} else if (resource.name.includes('.css')) {
          cssSize += size;
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
        } else if (resource.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)) {
          imageSize += size
        }
      })

      setBundleSize({
        totalSize,
        jsSize,
        cssSize,
<<<<<<< HEAD
        imageSize
      })
    }

    // Calculate after page load
=======
        imageSize;
      });
    };
    // Calculate after page load;
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
    if (document.readyState === 'complete') {
      calculateBundleSize()
    } else {
      window.addEventListener('load', calculateBundleSize)
    }
<<<<<<< HEAD

    return () => {
      window.removeEventListener('load', calculateBundleSize)
    }
  }, [])

  return bundleSize
}

=======
    return () =</ {
      window.removeEventListener('load', calculateBundleSize);
    };
  }, []);
  return bundleSize;
};
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
const performanceOptimizations = {
  debounce,
  throttle,
  useIntersectionObserver,
  useLazyImage,
  usePerformanceMonitoring,
  useMemoryMonitoring,
  preloadResource,
  preloadCriticalResources,
<<<<<<< HEAD
  useBundleSizeMonitoring
}

export default performanceOptimizations
=======
  useBundleSizeMonitoring;
};

export default performanceOptimizations;
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
