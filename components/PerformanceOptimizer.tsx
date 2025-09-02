import React, { useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
        { href: '/og-image.jpg', as: 'image' },
        { href: '/favicon.ico', as: 'image' },
        { href: '/images/hero-bg.jpg', as: 'image' },
        { href: '/images/logo.png', as: 'image' }
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource.href;
        link.as = resource.as;
        if (resource.type) link.type = resource.type;
        if (resource.crossOrigin) link.crossOrigin = resource.crossOrigin;
        document.head.appendChild(link);
      });
    };

    // DNS prefetch for external domains
    const dnsPrefetchDomains = () => {
      const domains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com',
        'https://www.googletagmanager.com',
        'https://cdn.jsdelivr.net'
      ];

      domains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      });
    };

    // Lazy load images with enhanced intersection observer
    const lazyLoadImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.01
      });

      images.forEach(img => imageObserver.observe(img));
    };

    // Performance monitoring
    const monitorPerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        window.addEventListener('load', () => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (perfData) {
            const metrics = {
              domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
              loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
              totalLoadTime: perfData.loadEventEnd - perfData.fetchStart,
              firstPaint: 0,
              firstContentfulPaint: 0
            };

            // Get Core Web Vitals
            const paintEntries = performance.getEntriesByType('paint');
            paintEntries.forEach(entry => {
              if (entry.name === 'first-paint') {
                metrics.firstPaint = entry.startTime;
              } else if (entry.name === 'first-contentful-paint') {
                metrics.firstContentfulPaint = entry.startTime;
              }
            });

            // Log performance metrics (only in development)
            if (process.env.NODE_ENV === 'development') {
              console.log('Performance Metrics:', metrics);
            }

            // Send to analytics if available
            if (typeof gtag !== 'undefined') {
              gtag('event', 'page_performance', {
                event_category: 'Performance',
                event_label: 'Core Web Vitals',
                value: Math.round(metrics.totalLoadTime)
              });
            }
          }
        });

        // Monitor Largest Contentful Paint
        if ('PerformanceObserver' in window) {
          try {
            const observer = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              const lastEntry = entries[entries.length - 1];
              if (lastEntry && process.env.NODE_ENV === 'development') {
                console.log('LCP:', lastEntry.startTime);
              }
            });
            observer.observe({ entryTypes: ['largest-contentful-paint'] });
          } catch (e) {
            // PerformanceObserver not supported
          }
        }
      }
    };

    // Optimize scroll performance
    const optimizeScroll = () => {
      let ticking = false;
      
      const updateScrollPosition = () => {
        // Add scroll-based animations or effects here
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
    };

    // Initialize optimizations
    preloadCriticalResources();
    dnsPrefetchDomains();
    lazyLoadImages();
    monitorPerformance();
    const cleanup = optimizeScroll();

    return cleanup;
  }, []);

  return null;
};

export default PerformanceOptimizer;