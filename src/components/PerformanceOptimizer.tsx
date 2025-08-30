import React, { useEffect, useCallback } from 'react';

interface PerformanceOptimizerProps {
  enabled: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableResourceHints?: boolean;
}

export function PerformanceOptimizer({ 
  enabled, 
  enableLazyLoading = true, 
  enablePreloading = true, 
  enableResourceHints = true 
}: PerformanceOptimizerProps) {
  
  const optimizeImages = useCallback(() => {
    if (!enabled) return;
    
    // Intersection Observer for lazy loading images
    if (enableLazyLoading && 'IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img);
      });
    }
  }, [enabled, enableLazyLoading]);

  const addResourceHints = useCallback(() => {
    if (!enabled || !enableResourceHints) return;

    // Preconnect to external domains
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com',
      'https://api.ziontechgroup.com'
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // DNS prefetch for additional domains
    const dnsPrefetchDomains = [
      '//cdn.jsdelivr.net',
      '//unpkg.com',
      '//cdnjs.cloudflare.com'
    ];

    dnsPrefetchDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, [enabled, enableResourceHints]);

  const optimizeFonts = useCallback(() => {
    if (!enabled) return;

    // Font display swap for better performance
    const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
    fontLinks.forEach(link => {
      const fontLink = link as HTMLLinkElement;
      fontLink.setAttribute('font-display', 'swap');
    });
  }, [enabled]);

  const addServiceWorker = useCallback(() => {
    if (!enabled || !('serviceWorker' in navigator)) return;

    // Register service worker for caching and offline support
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  }, [enabled]);

  const monitorPerformance = useCallback(() => {
    if (!enabled || !('performance' in window)) return;

    // Monitor Core Web Vitals
    if ('web-vital' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.duration > 50) {
            console.warn('Long task detected:', entry);
          }
        });
      });
      observer.observe({ entryTypes: ['longtask'] });
    }
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    // Run optimizations after DOM is ready
    const timer = setTimeout(() => {
      optimizeImages();
      addResourceHints();
      optimizeFonts();
      addServiceWorker();
      monitorPerformance();
    }, 100);

    return () => clearTimeout(timer);
  }, [enabled, optimizeImages, addResourceHints, optimizeFonts, addServiceWorker, monitorPerformance]);

  // Add performance monitoring script
  useEffect(() => {
    if (!enabled) return;

    const script = document.createElement('script');
    script.innerHTML = `
      // Performance monitoring
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0];
          if (perfData) {
            console.log('Page Load Performance:', {
              'DOM Content Loaded': perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart + 'ms',
              'Load Complete': perfData.loadEventEnd - perfData.loadEventStart + 'ms',
              'Total Load Time': perfData.loadEventEnd - perfData.fetchStart + 'ms'
            });
          }
        }, 0);
      });
    `;
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [enabled]);

  return null; // This component doesn't render anything
}
