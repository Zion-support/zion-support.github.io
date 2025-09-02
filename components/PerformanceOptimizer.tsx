import React, { useEffect, useCallback } from 'react';

const PerformanceOptimizer: React.FC = () => {
  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    const criticalResources = [
      { href: '/og-image.jpg', as: 'image' },
      { href: '/favicon.ico', as: 'image' },
      { href: '/icons/icon-192x192.png', as: 'image' },
      { href: '/icons/icon-512x512.png', as: 'image' },
      { href: '/manifest.json', as: 'manifest' }
    ];

    criticalResources.forEach(({ href, as }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = as;
      link.href = href;
      if (as === 'image') {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }, []);

  // Enhanced lazy loading with error handling
  const lazyLoadImages = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.src;
          
          if (src) {
            // Create a new image to test loading
            const testImg = new Image();
            testImg.onload = () => {
              img.src = src;
              img.classList.remove('lazy');
              img.classList.add('loaded');
            };
            testImg.onerror = () => {
              img.src = '/placeholder-image.jpg';
              img.classList.add('error');
            };
            testImg.src = src;
          }
          
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.1
    });

    images.forEach(img => imageObserver.observe(img));
    
    return () => imageObserver.disconnect();
  }, []);

  // Optimize scroll performance with throttling
  const optimizeScroll = useCallback(() => {
    let ticking = false;
    let lastScrollY = 0;
    
    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY;
      
      // Add scroll-based optimizations
      document.body.classList.toggle('scrolled', currentScrollY > 100);
      document.body.classList.toggle('scrolled-up', currentScrollY < lastScrollY);
      
      lastScrollY = currentScrollY;
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', requestTick);
    };
  }, []);

  // Resource hints for better performance
  const addResourceHints = useCallback(() => {
    const hints = [
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
    ];

    hints.forEach(({ rel, href, crossOrigin }) => {
      const link = document.createElement('link');
      link.rel = rel;
      link.href = href;
      if (crossOrigin) {
        link.crossOrigin = crossOrigin;
      }
      document.head.appendChild(link);
    });
  }, []);

  // Service Worker registration
  const registerServiceWorker = useCallback(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          })
        .catch((registrationError) => {
          });
    }
  }, []);

  // Performance monitoring
  const monitorPerformance = useCallback(() => {
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          
          // Log Core Web Vitals
          const metrics = {
            FCP: perfData.firstContentfulPaint,
            LCP: perfData.loadEventEnd - perfData.fetchStart,
            FID: 0, // Would need additional measurement
            CLS: 0  // Would need additional measurement
          };
          
          // Send to analytics (if available)
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'web_vitals', metrics);
          }
        }, 0);
      });
    }
  }, []);

  useEffect(() => {
    // Initialize all optimizations
    preloadCriticalResources();
    addResourceHints();
    registerServiceWorker();
    monitorPerformance();
    
    // Set up lazy loading and scroll optimization
    const lazyCleanup = lazyLoadImages();
    const scrollCleanup = optimizeScroll();

    // Cleanup on unmount
    return () => {
      if (lazyCleanup) lazyCleanup();
      if (scrollCleanup) scrollCleanup();
    };
  }, [preloadCriticalResources, addResourceHints, registerServiceWorker, monitorPerformance, lazyLoadImages, optimizeScroll]);

  return null;
};

export default PerformanceOptimizer;