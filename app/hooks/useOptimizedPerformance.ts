import { useEffect, useCallback, useRef } from 'react';

interface PerformanceOptions {
  enableWebVitals?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableDebouncing?: boolean;
  debounceDelay?: number;
}

export const useOptimizedPerformance = (options: PerformanceOptions = {}) => {
  const {
    enableWebVitals = true,
    enableLazyLoading = true,
    enablePreloading = true,
    enableDebouncing = true,
    debounceDelay = 300,
  } = options;

  const observerRef = useRef<IntersectionObserver | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Web Vitals monitoring
  useEffect(() => {
    if (!enableWebVitals || typeof window === 'undefined') return;

    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
      const handleMetric = (metric: { name: string; value: number }) => {
        // Store metrics for analytics
        if (process.env.NODE_ENV === 'production') {
          // Send to analytics service
          // analyticsService.track('performance_metric', { metric: metric.name, value: metric.value });
        }
      };
      
      onCLS(handleMetric);
      onFCP(handleMetric);
      onLCP(handleMetric);
      onTTFB(handleMetric);
      onINP(handleMetric);
    }).catch(() => {
      // Silently fail if web-vitals is not available
    });
  }, [enableWebVitals]);

  // Intersection Observer for lazy loading
  const createIntersectionObserver = useCallback(() => {
    if (!enableLazyLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            
            // Lazy load images
            if (target.tagName === 'IMG' && target.dataset.src) {
              (target as HTMLImageElement).src = target.dataset.src;
              target.removeAttribute('data-src');
              observer.unobserve(target);
            }
            
            // Lazy load background images
            if (target.dataset.bgSrc) {
              target.style.backgroundImage = `url(${target.dataset.bgSrc})`;
              target.removeAttribute('data-bg-src');
              observer.unobserve(target);
            }
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    observerRef.current = observer;
    return observer;
  }, [enableLazyLoading]);

  // Debounce function
  const debounce = useCallback(
    <T extends (...args: unknown[]) => unknown>(func: T): T => {
      if (!enableDebouncing) return func;

      return ((...args: Parameters<T>) => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => func(...args), debounceDelay);
      }) as T;
    },
    [enableDebouncing, debounceDelay]
  );

  // Preload critical resources
  const preloadResource = useCallback((href: string, as: string, crossorigin?: string) => {
    if (!enablePreloading) return;

    // Check if already preloaded
    const existingLink = document.querySelector(`link[href="${href}"]`);
    if (existingLink) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (crossorigin) {
      link.crossOrigin = crossorigin;
    }
    
    document.head.appendChild(link);
  }, [enablePreloading]);

  // Initialize performance optimizations
  useEffect(() => {
    const observer = createIntersectionObserver();
    
    // Observe all lazy-load elements
    if (observer) {
      const lazyElements = document.querySelectorAll('[data-src], [data-bg-src]');
      lazyElements.forEach((el) => observer.observe(el));
    }

    // Preload critical resources
    if (enablePreloading) {
      preloadResource('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', 'style');
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [createIntersectionObserver, enablePreloading, preloadResource]);

  return {
    debounce,
    preloadResource,
  };
};
