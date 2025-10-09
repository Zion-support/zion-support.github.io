/**
 * Performance Enhancement Utilities
 * Provides various performance optimization functions
 */

// Image optimization
export const optimizeImage = (src: string, width?: number, height?: number, quality: number = 80): string => {
  // For now, return the original src
  // In production, this would integrate with an image optimization service
  return src;
};

// Lazy loading utility
export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver | null => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }
  
  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  });
};

// Debounce utility for performance
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle utility for performance
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Preload critical resources
export const preloadResource = (href: string, as: string): void => {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};

// Prefetch resources
export const prefetchResource = (href: string): void => {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
};

// Critical CSS inlining
export const inlineCriticalCSS = (css: string): void => {
  if (typeof document === 'undefined') return;
  
  const style = document.createElement('style');
  style.textContent = css;
  style.setAttribute('data-critical', 'true');
  document.head.insertBefore(style, document.head.firstChild);
};

// Resource hints
export const addResourceHints = (): void => {
  if (typeof document === 'undefined') return;
  
  const hints = [
    { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
    { rel: 'preconnect', href: 'https://www.googletagmanager.com' },
    { rel: 'preconnect', href: 'https://www.google-analytics.com' },
  ];
  
  hints.forEach(({ rel, href }) => {
    const link = document.createElement('link');
    link.rel = rel;
    link.href = href;
    if (rel === 'preconnect') {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
};

// Performance monitoring
export const measurePerformance = (name: string, fn: () => void): void => {
  if (typeof performance === 'undefined') {
    fn();
    return;
  }
  
  const start = performance.now();
  fn();
  const end = performance.now();
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`${name} took ${end - start} milliseconds`);
  }
};

// Memory usage monitoring
export const getMemoryUsage = (): MemoryInfo | null => {
  if (typeof performance === 'undefined' || !('memory' in performance)) {
    return null;
  }
  
  return (performance as any).memory;
};

// Bundle size optimization
export const loadComponent = <T>(importFn: () => Promise<{ default: T }>): Promise<T> => {
  return importFn().then(module => module.default);
};

// Service Worker registration
export const registerServiceWorker = (): void => {
  if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) {
    return;
  }
  
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        if (process.env.NODE_ENV === 'development') {
          console.log('SW registered: ', registration);
        }
      })
      .catch((registrationError) => {
        if (process.env.NODE_ENV === 'development') {
          console.log('SW registration failed: ', registrationError);
        }
      });
  });
};

// Web Vitals measurement
export const measureWebVitals = (onPerfEntry?: (metric: any) => void): void => {
  if (!onPerfEntry || typeof window === 'undefined') {
    return;
  }
  
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  });
};

// Cache management
export const clearCache = (): void => {
  if ('caches' in window) {
    caches.keys().then((cacheNames) => {
      cacheNames.forEach((cacheName) => {
        caches.delete(cacheName);
      });
    });
  }
};

// Critical resource prioritization
export const prioritizeCriticalResources = (): void => {
  if (typeof document === 'undefined') return;
  
  // Prioritize critical CSS
  const criticalCSS = document.querySelector('style[data-critical]');
  if (criticalCSS) {
    criticalCSS.setAttribute('media', 'all');
  }
  
  // Defer non-critical CSS
  const nonCriticalCSS = document.querySelectorAll('link[rel="stylesheet"]:not([data-critical])');
  nonCriticalCSS.forEach((link) => {
    link.setAttribute('media', 'print');
    link.setAttribute('onload', "this.media='all'");
  });
};