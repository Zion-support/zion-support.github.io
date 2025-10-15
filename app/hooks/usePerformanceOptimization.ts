import { useEffect, useCallback, useRef } from 'react';

interface PerformanceOptimizationOptions {
  enableIntersectionObserver?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableDebouncing?: boolean;
  debounceDelay?: number;
}

export const usePerformanceOptimization = (options: PerformanceOptimizationOptions = {}) => {
  const {
    enableIntersectionObserver = true,
    enableLazyLoading = true,
    enablePreloading = true,
    enableDebouncing = true,
    debounceDelay = 300,
  } = options;

  const observerRef = useRef<IntersectionObserver | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Intersection Observer for lazy loading
  const createIntersectionObserver = useCallback(() => {
    if (!enableIntersectionObserver || !enableLazyLoading) return;

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
  }, [enableIntersectionObserver, enableLazyLoading]);

  // Debounce function
  const debounce = useCallback(
    <T extends (...args: any[]) => any>(func: T): T => {
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
    
    // Add error handling
    link.onerror = () => {
      // Resource preload failed - silently handle
    };
    
    document.head.appendChild(link);
  }, [enablePreloading]);

  // Preload critical images
  const preloadImages = useCallback((imageUrls: string[]) => {
    if (!enablePreloading) return;

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        // Image preloaded successfully
      };
      img.onerror = () => {
        // Image preload failed - silently handle
      };
    });
  }, [enablePreloading]);

  // Preload critical fonts
  const preloadFonts = useCallback((fontUrls: string[]) => {
    if (!enablePreloading) return;

    fontUrls.forEach((url) => {
      preloadResource(url, 'font', 'anonymous');
    });
  }, [enablePreloading, preloadResource]);

  // Preload critical scripts
  const preloadScripts = useCallback((scriptUrls: string[]) => {
    if (!enablePreloading) return;

    scriptUrls.forEach((url) => {
      preloadResource(url, 'script');
    });
  }, [enablePreloading, preloadResource]);

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
    preloadImages,
    preloadFonts,
    preloadScripts,
  };
};