// Performance optimization utilities

// Debounce function for performance
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Throttle function for performance
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Intersection Observer for lazy loading
export function createIntersectionObserver(
  callback: (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void,
  options?: {
    rootMargin?: string;
    threshold?: number | number[];
    root?: Element | null;
  }
): IntersectionObserver | null {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }
  
  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  });
}

// Image lazy loading utility
export function lazyLoadImage(img: HTMLImageElement, src: string): void {
  if ('IntersectionObserver' in window) {
    const observer = createIntersectionObserver(_(entries) => {
      entries.forEach(_(entry) => {
        if (entry.isIntersecting) {
          img.src = src;
          img.classList.remove('lazy');
          observer?.unobserve(img);
        }
      });
    });
    
    observer?.observe(img);
  } else {
    // Fallback for browsers without IntersectionObserver
    img.src = src;
  }
}

// Memory usage monitoring
export function getMemoryUsage(): number | null {
  if (typeof window === 'undefined' || !('memory' in performance)) {
    return null;
  }
  
  const memory = (performance as any).memory;
  return memory.usedJSHeapSize / memory.jsHeapSizeLimit;
}

// Performance timing utilities
export function measurePerformance(name: string, fn: () => void): void {
  if (typeof window === 'undefined') return;
  
  const start = performance.now();
  fn();
  const end = performance.now();
  
  }

// Bundle size optimization - remove unused exports
export function optimizeBundleSize() {
  // This would typically be handled by webpack/next.js tree shaking
  // But we can provide utilities to help identify unused code
  }

// Preload critical resources
export function preloadCriticalResources() {
  if (typeof window === 'undefined') return;
  
  const criticalResources = [
    '/fonts/inter.woff2',
    '/css/critical.css',
  ];
  
  criticalResources.forEach(_(resource) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'font';
    if (resource.endsWith('.woff2')) {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
}

// Service Worker registration for caching
export function registerServiceWorker() {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return;
  }
  
  window.addEventListener(_'load', _() => {
    navigator.serviceWorker.register('/sw.js')
      .then(_(registration) => { /* Empty function */ })
      .catch(_(registrationError) => { /* Empty function */ });
  });
}

// Critical CSS inlining
export function inlineCriticalCSS() {
  if (typeof window === 'undefined') return;
  
  const criticalCSS = `
    /* Critical CSS for above-the-fold content */
    body { margin: 0; font-family: system-ui, sans-serif; }
    .hero { min-height: 100vh; display: flex; align-items: center; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
  `;
  
  const style = document.createElement('style');
  style.textContent = criticalCSS;
  document.head.appendChild(style);
}

// Resource hints for performance
export function addResourceHints() {
  if (typeof window === 'undefined') return;
  
  const hints = [
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    { rel: 'preconnect', href: 'https://api.example.com' },
  ];
  
  hints.forEach(_(hint) => {
    const link = document.createElement('link');
    Object.assign(link, hint);
    document.head.appendChild(link);
  });
}

// Performance monitoring
export function startPerformanceMonitoring() {
  if (typeof window === 'undefined') return;
  
  // Monitor Core Web Vitals
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver(_(list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          } else if (entry.entryType === 'first-input') {
          const fidEntry = entry as PerformanceEventTiming;
          } else if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as LayoutShiftEntry;
          }
      }
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
  }
}

// Initialize all performance optimizations
export function initializePerformanceOptimizations() {
  preloadCriticalResources();
  inlineCriticalCSS();
  addResourceHints();
  registerServiceWorker();
  startPerformanceMonitoring();
}