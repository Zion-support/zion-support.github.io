import { useEffect, useCallback, useRef } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  inp?: number;
}

interface PerformanceOptimizationOptions {
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableImageOptimization?: boolean;
  enableCodeSplitting?: boolean;
  enableCaching?: boolean;
}

export const usePerformanceOptimization = (options: PerformanceOptimizationOptions = {}) => {
  const metricsRef = useRef<PerformanceMetrics>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  const {
    enableLazyLoading = true,
    enablePreloading = true,
    enableImageOptimization = true,
    enableCaching = true
  } = options;

  // Lazy loading implementation
  const setupLazyLoading = useCallback(() => {
    if (!enableLazyLoading || typeof window === 'undefined') return;

    const images = document.querySelectorAll('img[data-src]');
    
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.getAttribute('data-src');
            if (src) {
              img.src = src;
              img.removeAttribute('data-src');
              img.classList.add('loaded');
              observerRef.current?.unobserve(img);
            }
          }
        });
      },
      { rootMargin: '50px' }
    );

    images.forEach((img) => {
      observerRef.current?.observe(img);
    });
  }, [enableLazyLoading]);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading || typeof window === 'undefined') return;

    const criticalResources = [
      { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
      { href: '/css/critical.css', as: 'style' },
      { href: '/js/critical.js', as: 'script' }
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
      document.head.appendChild(link);
    });
  }, [enablePreloading]);

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization || typeof window === 'undefined') return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" for images below the fold
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });
  }, [enableImageOptimization]);

  // Service Worker registration for caching
  const registerServiceWorker = useCallback(() => {
    if (!enableCaching || typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

    if (process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js')
      .then((_registration) => {
        // Service worker registered successfully
      })
      .catch((_registrationError) => {
        // Service worker registration failed
      });
    }
  }, [enableCaching]);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) return;

    // Measure page load time
    const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      
      metricsRef.current = {
        ...metricsRef.current,
        ttfb: navigation.responseStart - navigation.requestStart,
        fcp: loadTime,
        lcp: loadTime
      };

      // Store metrics for analysis
      try {
        const perfData = JSON.parse(localStorage.getItem('performanceMetrics') || '[]');
        perfData.push({
          ...metricsRef.current,
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
          connection: (navigator as any).connection?.effectiveType || 'unknown'
        });
        localStorage.setItem('performanceMetrics', JSON.stringify(perfData.slice(-50)));
      } catch {
        // Ignore localStorage errors
      }
    }
  }, []);

  // Debounced resize handler
  const handleResize = useCallback(() => {
    let timeoutId: NodeJS.Timeout;
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        // Re-run optimizations on resize
        setupLazyLoading();
        optimizeImages();
      }, 250);
    };
  }, [setupLazyLoading, optimizeImages]);

  useEffect(() => {
    // Initial setup
    setupLazyLoading();
    preloadCriticalResources();
    optimizeImages();
    registerServiceWorker();
    measurePerformance();

    // Setup resize handler
    const debouncedResize = handleResize();
    window.addEventListener('resize', debouncedResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', debouncedResize);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [setupLazyLoading, preloadCriticalResources, optimizeImages, registerServiceWorker, measurePerformance, handleResize]);

  return {
    metrics: metricsRef.current,
    setupLazyLoading,
    optimizeImages,
    measurePerformance
  };
};
