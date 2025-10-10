import React, { useEffect, memo, useCallback } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = memo(({ children }) => {
  // Intersection Observer for lazy loading
  const setupIntersectionObserver = useCallback(() => {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              observer.unobserve(img);
            }
          }

      }, {
        rootMargin: '50px 0px',
        threshold: 0.01
      });

      // Observe all lazy images
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }, []);

  // Resource hints optimization
  const optimizeResourceHints = useCallback(() => {
    const criticalResources = [
      { href: 'https://fonts.googleapis.com', rel: 'preconnect' },
      { href: 'https://fonts.gstatic.com', rel: 'preconnect', crossorigin: 'anonymous' },
      { href: 'https://www.google-analytics.com', rel: 'preconnect' },
      { href: 'https://www.googletagmanager.com', rel: 'preconnect' }
    ];

    criticalResources.forEach(resource => {
      if (!document.querySelector(`link[href="${resource.href}"]`)) {
        const link = document.createElement('link');
        Object.entries(resource).forEach(([key, value]) => {
          link.setAttribute(key, value as string);

        document.head.appendChild(link);
      }

  }, []);

  // Critical CSS inlining
  const inlineCriticalCSS = useCallback(() => {
    const criticalCSS = `
      .hero-section { opacity: 0; animation: fadeIn 0.6s ease-out forwards; }
      @keyframes fadeIn { to { opacity: 1; } }
      .loading { display: none; }
      .loaded .loading { display: none; }
      .loaded .content { display: block; }
    `;

    if (!document.querySelector('#critical-css')) {
      const style = document.createElement('style');
      style.id = 'critical-css';
      style.textContent = criticalCSS;
      document.head.insertBefore(style, document.head.firstChild);
    }
  }, []);

  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/images/hero-bg.webp',
        '/images/logo.webp',
        '/images/og-image.webp'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);

    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add loading="lazy" to non-critical images
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }

        // Add decoding="async" for better performance
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }

    };

    // Enable service worker for caching
    const enableServiceWorker = () => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            if (process.env.NODE_ENV === 'development') {

            }
          })
          .catch(error => {
            if (process.env.NODE_ENV === 'development') {

            }

      }
    };

    // Optimize scroll performance
    const optimizeScroll = () => {
      let ticking = false;

      const updateScroll = () => {
        // Throttle scroll events
        if (!ticking) {
          requestAnimationFrame(() => {
            ticking = false;

          ticking = true;
        }
      };

      window.addEventListener('scroll', updateScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', updateScroll);
      };
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    enableServiceWorker();
    setupIntersectionObserver();
    optimizeResourceHints();
    inlineCriticalCSS();
    const cleanupScroll = optimizeScroll();

    // Cleanup on unmount
    return () => {
      cleanupScroll();
    };
  }, [setupIntersectionObserver, optimizeResourceHints, inlineCriticalCSS]);

  // Add performance monitoring
  useEffect(() => {
    // Monitor Core Web Vitals
    const monitorWebVitals = () => {
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          const logMetric = (metric: any) => {
            if (process.env.NODE_ENV === 'development') {

            }
            // Send to analytics in production
            if (process.env.NODE_ENV === 'production') {
              // Send to analytics service
            }
          };

          getCLS(logMetric);
          getFID(logMetric);
          getFCP(logMetric);
          getLCP(logMetric);
          getTTFB(logMetric);

      }
    };

    monitorWebVitals();
  }, []);

  return <>{children}</>;

PerformanceOptimizer.displayName = 'PerformanceOptimizer';

export default PerformanceOptimizer;
