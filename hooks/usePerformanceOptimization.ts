import { useEffect, useCallback, useRef } from 'react';

interface PerformanceOptimizationOptions {
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableImageOptimization?: boolean;
  enableCodeSplitting?: boolean;
  enableCaching?: boolean;
  enableResourceHints?: boolean;
  enableCriticalCSS?: boolean;
}

export const usePerformanceOptimization = (options: PerformanceOptimizationOptions = {}) => {
  const {
    enableLazyLoading = true,
    enablePreloading = true,
    enableImageOptimization = true,
    enableCodeSplitting = true,
    enableCaching = true,
    enableResourceHints = true,
    enableCriticalCSS = true
  } = options;

  const initialized = useRef(false);

  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add lazy loading
      if (!img.loading) {
        img.loading = 'lazy';
      }
      
      // Add async decoding
      if (!img.decoding) {
        img.decoding = 'async';
      }
      
      // Add fetchpriority for above-the-fold images
      if (img.getBoundingClientRect().top < window.innerHeight) {
        img.fetchPriority = 'high';
      }
    });
  }, [enableImageOptimization]);

  const addResourceHints = useCallback(() => {
    if (!enableResourceHints) return;

    const hints = [
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
      { rel: 'preconnect', href: 'https://api.ziontechgroup.com' },
    ];

    hints.forEach((hint) => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      if (hint.crossorigin) link.crossOrigin = hint.crossorigin;
      
      // Check if already exists
      if (!document.querySelector(`link[rel="${hint.rel}"][href="${hint.href}"]`)) {
        document.head.appendChild(link);
      }
    });
  }, [enableResourceHints]);

  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading) return;

    const criticalResources = [
      { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
      { href: '/images/hero-bg.webp', as: 'image' },
      { href: '/images/logo.webp', as: 'image' },
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
      
      // Check if already exists
      if (!document.querySelector(`link[rel="preload"][href="${resource.href}"]`)) {
        document.head.appendChild(link);
      }
    });
  }, [enablePreloading]);

  const optimizeCriticalCSS = useCallback(() => {
    if (!enableCriticalCSS) return;

    // Add critical CSS inline
    const criticalCSS = `
      .critical-loading {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
      }
      .critical-loaded {
        opacity: 1;
      }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    style.setAttribute('data-critical', 'true');
    
    if (!document.querySelector('style[data-critical="true"]')) {
      document.head.appendChild(style);
    }
  }, [enableCriticalCSS]);

  const setupIntersectionObserver = useCallback(() => {
    if (!enableLazyLoading) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          
          // Lazy load images
          if (element.tagName === 'IMG') {
            const img = element as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
          }
          
          // Lazy load background images
          if (element.dataset.bgSrc) {
            element.style.backgroundImage = `url(${element.dataset.bgSrc})`;
            element.removeAttribute('data-bg-src');
          }
          
          // Add loaded class
          element.classList.add('loaded');
          
          observer.unobserve(element);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.1
    });

    // Observe all elements with lazy loading attributes
    const lazyElements = document.querySelectorAll('[data-src], [data-bg-src]');
    lazyElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [enableLazyLoading]);

  const setupPerformanceMonitoring = useCallback(() => {
    // Monitor Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
        onCLS((metric) => {
          console.log('CLS:', metric.value);
        });
        onFID((metric) => {
          console.log('FID:', metric.value);
        });
        onFCP((metric) => {
          console.log('FCP:', metric.value);
        });
        onLCP((metric) => {
          console.log('LCP:', metric.value);
        });
        onTTFB((metric) => {
          console.log('TTFB:', metric.value);
        });
      });
    }
  }, []);

  const optimizeScrollPerformance = useCallback(() => {
    let ticking = false;
    
    const updateScrollPosition = () => {
      // Throttle scroll events
      if (!ticking) {
        requestAnimationFrame(() => {
          // Update scroll-dependent elements
          const scrollY = window.scrollY;
          document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', updateScrollPosition, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, []);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Run optimizations
    optimizeImages();
    addResourceHints();
    preloadCriticalResources();
    optimizeCriticalCSS();
    setupPerformanceMonitoring();
    optimizeScrollPerformance();

    // Setup intersection observer for lazy loading
    const cleanup = setupIntersectionObserver();

    // Cleanup on unmount
    return () => {
      if (cleanup) cleanup();
    };
  }, [
    optimizeImages,
    addResourceHints,
    preloadCriticalResources,
    optimizeCriticalCSS,
    setupIntersectionObserver,
    setupPerformanceMonitoring,
    optimizeScrollPerformance
  ]);

  // Return optimization utilities
  return {
    optimizeImages,
    addResourceHints,
    preloadCriticalResources,
    setupIntersectionObserver
  };
};