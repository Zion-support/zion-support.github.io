import { useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/images/hero-bg.webp',
        '/images/logo.svg'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'image';
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });
    };

    // Optimize images
    const optimizeImages = () => {
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
      });

      images.forEach(img => imageObserver.observe(img));
    };

    // Prefetch next page resources
    const prefetchNextPageResources = () => {
      const links = document.querySelectorAll('a[href^="/"]');
      const prefetchedUrls = new Set();

      links.forEach(link => {
        link.addEventListener('mouseenter', () => {
          const href = link.getAttribute('href');
          if (href && !prefetchedUrls.has(href)) {
            prefetchedUrls.add(href);
            const prefetchLink = document.createElement('link');
            prefetchLink.rel = 'prefetch';
            prefetchLink.href = href;
            document.head.appendChild(prefetchLink);
          }
        });
      });
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    prefetchNextPageResources();

    // Service Worker registration for caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    }

    // Performance monitoring
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const metrics = {
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
          firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        };

        // Send metrics to analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'performance_metrics', {
            event_category: 'performance',
            event_label: 'page_load',
            value: Math.round(metrics.domContentLoaded),
            custom_map: {
              'first_paint': Math.round(metrics.firstPaint),
              'first_contentful_paint': Math.round(metrics.firstContentfulPaint),
            }
          });
        }
      }
    };

    // Measure performance after page load
    window.addEventListener('load', measurePerformance);

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;