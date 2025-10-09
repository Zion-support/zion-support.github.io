'use client';
import React, { useEffect, useCallback, memo } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
  enableServiceWorker?: boolean;
  enableResourceHints?: boolean;
}

const AdvancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = memo(({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true,
  enableServiceWorker = true,
  enableResourceHints = true
}) => {
  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (typeof window === 'undefined' || !enablePreloading) return;

    const criticalResources = [
      { href: '/fonts/orbitron-variable.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
      { href: '/fonts/rajdhani-variable.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
      { href: '/api/health', as: 'fetch', crossorigin: 'anonymous' }
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
      document.head.appendChild(link);
    });
  }, [enablePreloading]);

  // Optimize images
  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined' || !enableImageOptimization) return;

    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    images.forEach(img => imageObserver.observe(img));
  }, [enableImageOptimization]);

  // Lazy load components
  const lazyLoadComponents = useCallback(() => {
    if (typeof window === 'undefined' || !enableLazyLoading) return;

    const components = document.querySelectorAll('[data-lazy-component]');
    const componentObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const component = entry.target as HTMLElement;
          const componentName = component.dataset.lazyComponent;
          if (componentName) {
            // Dynamically import component
            import(`./${componentName}`).then(module => {
              component.innerHTML = module.default || '';
            }).catch(console.error);
          }
          componentObserver.unobserve(component);
        }
      });
    }, {
      rootMargin: '100px 0px',
      threshold: 0.1
    });

    components.forEach(component => componentObserver.observe(component));
  }, [enableLazyLoading]);

  // Service Worker registration
  const registerServiceWorker = useCallback(() => {
    if (typeof window === 'undefined' || !enableServiceWorker) return;

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, [enableServiceWorker]);

  // Resource hints
  const addResourceHints = useCallback(() => {
    if (typeof window === 'undefined' || !enableResourceHints) return;

    const hints = [
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
    ];

    hints.forEach(hint => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      if (hint.crossorigin) link.crossOrigin = hint.crossorigin;
      document.head.appendChild(link);
    });
  }, [enableResourceHints]);

  // Performance monitoring
  const monitorPerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Web Vitals
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log);
      getFID(console.log);
      getFCP(console.log);
      getLCP(console.log);
      getTTFB(console.log);
    });

    // Performance observer
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            console.log('Navigation timing:', entry);
          }
        });
      });
      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
    }
  }, []);

  useEffect(() => {
    // Initialize all optimizations
    preloadCriticalResources();
    optimizeImages();
    lazyLoadComponents();
    registerServiceWorker();
    addResourceHints();
    monitorPerformance();

    // Cleanup
    return () => {
      // Cleanup observers if needed
    };
  }, [preloadCriticalResources, optimizeImages, lazyLoadComponents, registerServiceWorker, addResourceHints, monitorPerformance]);

  return null;
});

AdvancedPerformanceOptimizer.displayName = 'AdvancedPerformanceOptimizer';

export default AdvancedPerformanceOptimizer;