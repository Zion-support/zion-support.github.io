// Performance utility functions for optimizing app performance

export interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  cumulativeLayoutShift?: number;
}

export interface PerformanceConfig {
  enableMetrics: boolean;
  enablePreloading: boolean;
  enableLazyLoading: boolean;
  enableCaching: boolean;
}

// Default performance configuration
export const defaultPerformanceConfig: PerformanceConfig = {
  enableMetrics: true,
  enablePreloading: true,
  enableLazyLoading: true,
  enableCaching: true,
};

// Measure page load performance
export const measurePageLoad = (): PerformanceMetrics | null => {
  if (typeof window === 'undefined' || !window.performance) {
    return null;
  }

  const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (!navigation) {
    return null;
  }

  return {
    loadTime: navigation.loadEventEnd - navigation.loadEventStart,
    domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
  };
};

// Preload critical resources
export const preloadResource = (href: string, as: string): void => {
  if (typeof document === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
};

// Preload critical images
export const preloadImages = (imageUrls: string[]): void => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

// Debounce function for performance optimization
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// Throttle function for performance optimization
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let lastCall = 0;
  
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
};

// Check if element is in viewport
export const isInViewport = (element: Element): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Lazy load images
export const lazyLoadImage = (img: HTMLImageElement): void => {
  if (img.dataset.src) {
    img.src = img.dataset.src;
    img.removeAttribute('data-src');
  }
};

// Create intersection observer for lazy loading
export const createLazyLoadObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver | null => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  const defaultOptions: IntersectionObserverInit = {
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Optimize images by adding loading="lazy" and proper attributes
export const optimizeImage = (img: HTMLImageElement): void => {
  img.loading = 'lazy';
  img.decoding = 'async';
  
  // Add error handling
  img.onerror = () => {
    img.alt = 'Image failed to load';
    img.style.display = 'none';
  };
};

// Memory usage monitoring
export const getMemoryUsage = (): any => {
  if (typeof window === 'undefined' || !('memory' in performance)) {
    return null;
  }

  return (performance as any).memory;
};

// Performance monitoring
export const startPerformanceMonitoring = (): void => {
  if (typeof window === 'undefined') return;

  // Monitor Core Web Vitals
  if ('web-vitals' in window) {
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
      onCLS(console.log);
      onFCP(console.log);
      onLCP(console.log);
      onTTFB(console.log);
      onINP(console.log);
    });
  }
};

// Cache management
export const clearCache = (): void => {
  if ('caches' in window) {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
  }
};

// Resource hints for better performance
export const addResourceHints = (): void => {
  if (typeof document === 'undefined') return;

  const hints = [
    { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  ];

  hints.forEach((hint) => {
    const link = document.createElement('link');
    Object.entries(hint).forEach(([key, value]) => {
      (link as any)[key] = value;
    });
    document.head.appendChild(link);
  });
};
