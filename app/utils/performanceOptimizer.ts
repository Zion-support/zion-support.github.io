/**
 * Performance optimization utilities
 */

// Debounce function for performance
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

// Throttle function for performance
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
  if (typeof window === 'undefined') {
    return {} as IntersectionObserver;
  }
  
  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  });
};

// Preload critical resources
export const preloadResource = (href: string, as: string): void => {
  if (typeof window === 'undefined') return;
  
  const existingLink = document.querySelector(`link[href="${href}"]`);
  if (existingLink) return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (as === 'style') {
    link.onload = () => {
      link.rel = 'stylesheet';
    };
  }
  document.head.appendChild(link);
};

// Prefetch page
export const prefetchPage = (href: string): void => {
  if (typeof window === 'undefined') return;
  
  const existingLink = document.querySelector(`link[href="${href}"][rel="prefetch"]`);
  if (existingLink) return;
  
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
};

// Optimize images
export const optimizeImage = (src: string, width?: number, quality: number = 80): string => {
  if (src.startsWith('data:') || src.startsWith('blob:')) {
    return src;
  }
  
  // Add WebP support and quality optimization
  const url = new URL(src, window.location.origin);
  if (width) {
    url.searchParams.set('w', width.toString());
  }
  url.searchParams.set('q', quality.toString());
  url.searchParams.set('f', 'webp');
  
  return url.toString();
};

// Memory usage monitoring
export const getMemoryUsage = (): any => {
  if (typeof window === 'undefined' || !('memory' in performance)) {
    return null;
  }
  
  return (performance as any).memory;
};

// Performance metrics
export const measurePerformance = (name: string, fn: () => void): void => {
  if (process.env.NODE_ENV === 'development') {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
  } else {
    fn();
  }
};

// Critical CSS injection
export const injectCriticalCSS = (css: string): void => {
  if (typeof document === 'undefined') return;
  
  const style = document.createElement('style');
  style.textContent = css;
  style.setAttribute('data-critical', 'true');
  document.head.insertBefore(style, document.head.firstChild);
};

// Resource hints
export const addResourceHints = (): void => {
  if (typeof document === 'undefined') return;
  
  // DNS prefetch for external domains
  const dnsPrefetchDomains = [
    'fonts.googleapis.com',
    'fonts.gstatic.com',
  ];
  
  dnsPrefetchDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = `//${domain}`;
    document.head.appendChild(link);
  });
  
  // Preconnect to critical origins
  const preconnectOrigins = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ];
  
  preconnectOrigins.forEach(origin => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = origin;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Main performance optimizer function
export function performanceOptimizer() {
  // Add resource hints
  addResourceHints();
  
  // Preload critical resources
  preloadResource('/app/styles/futuristic.css', 'style');
  
  // Prefetch critical pages
  const criticalPages = ['/about', '/contact', '/services'];
  criticalPages.forEach(page => prefetchPage(page));
  
  return {
    debounce,
    throttle,
    createIntersectionObserver,
    preloadResource,
    prefetchPage,
    optimizeImage,
    getMemoryUsage,
    measurePerformance,
    injectCriticalCSS,
    addResourceHints,
  };
}
