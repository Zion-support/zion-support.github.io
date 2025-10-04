/**
 * Performance optimization utilities
 * Provides various performance enhancement functions
 */

// Debounce function for performance optimization
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for performance optimization
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
    }
  };
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
): IntersectionObserver => {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Preload critical resources
export const preloadResource = (href: string, as: string = 'script'): void => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};

// Prefetch resources for better performance
export const prefetchResource = (href: string): void => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
};

// Optimize images with lazy loading
export const optimizeImage = (img: HTMLImageElement): void => {
  if ('loading' in img) {
    img.loading = 'lazy';
  }
  
  if ('decoding' in img) {
    img.decoding = 'async';
  }
};

// Performance metrics collection
export const collectPerformanceMetrics = (): PerformanceMetrics => {
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const paint = performance.getEntriesByType('paint');
  
  return {
    domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
    loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
    firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
    firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
    timeToInteractive: navigation.domInteractive - navigation.fetchStart,
  };
};

// Memory usage monitoring
export const getMemoryUsage = (): MemoryInfo | null => {
  if ('memory' in performance) {
    return (performance as any).memory;
  }
  return null;
};

// Bundle size optimization
export const optimizeBundleSize = (): void => {
  // Remove unused CSS
  const unusedCSS = document.querySelectorAll('style[data-unused]');
  unusedCSS.forEach(style => style.remove());
  
  // Optimize font loading
  const fonts = document.querySelectorAll('link[rel="stylesheet"]');
  fonts.forEach(font => {
    if (!font.hasAttribute('media')) {
      font.setAttribute('media', 'print');
      const linkElement = font as HTMLLinkElement;
      linkElement.onload = () => {
        linkElement.setAttribute('media', 'all');
      };
    }
  });
};

// Critical resource hints
export const addResourceHints = (): void => {
  const hints = [
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//cdnjs.cloudflare.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
  ];

  hints.forEach(hint => {
    const link = document.createElement('link');
    Object.entries(hint).forEach(([key, value]) => {
      link.setAttribute(key, value);
    });
    document.head.appendChild(link);
  });
};

// Performance monitoring
export const startPerformanceMonitoring = (): void => {
  // Monitor Core Web Vitals
  import('web-vitals').then((webVitals) => {
    // Use dynamic import to avoid TypeScript issues
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = webVitals as any;
    if (getCLS) getCLS(console.log);
    if (getFID) getFID(console.log);
    if (getFCP) getFCP(console.log);
    if (getLCP) getLCP(console.log);
    if (getTTFB) getTTFB(console.log);
  }).catch(() => {
    // web-vitals not available, skip monitoring
    console.log('Web Vitals not available');
  });

  // Monitor memory usage
  setInterval(() => {
    const memory = getMemoryUsage();
    if (memory && memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
      console.warn('High memory usage detected:', memory);
    }
  }, 30000);
};

// Types
interface PerformanceMetrics {
  domContentLoaded: number;
  loadComplete: number;
  firstPaint: number;
  firstContentfulPaint: number;
  timeToInteractive: number;
}

interface MemoryInfo {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}