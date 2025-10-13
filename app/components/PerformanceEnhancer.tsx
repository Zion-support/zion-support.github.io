import React, { useEffect, useCallback } from 'react';

interface PerformanceEnhancerProps {
  children?: React.ReactNode;
}

const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({ children }) => {
  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    const criticalResources = [
      '/app/styles/futuristic.css',
      '/app/styles/futuristic-enhanced.css',
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = 'style';
      document.head.appendChild(link);
    });
  }, []);

  // Optimize images with lazy loading
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));
    } else {
      // Fallback for older browsers
      images.forEach((img) => {
        const imgElement = img as HTMLImageElement;
        imgElement.src = imgElement.dataset.src || '';
      });
    }
  }, []);

  // Implement service worker for caching
  const registerServiceWorker = useCallback(async () => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered successfully:', registration);
      } catch (error) {
        console.warn('Service Worker registration failed:', error);
      }
    }
  }, []);

  // Optimize bundle loading
  const optimizeBundleLoading = useCallback(() => {
    // Preload next likely pages
    const nextPages = ['/about', '/services', '/contact'];
    
    nextPages.forEach((page) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = page;
      document.head.appendChild(link);
    });
  }, []);

  // Implement resource hints
  const addResourceHints = useCallback(() => {
    // DNS prefetch for external resources
    const dnsPrefetchDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
    ];

    dnsPrefetchDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });
  }, []);

  // Monitor and report performance metrics
  const monitorPerformance = useCallback(() => {
    if ('performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            console.log('Navigation timing:', {
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
              totalTime: navEntry.loadEventEnd - navEntry.fetchStart,
            });
          }
        });
      });

      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
    }
  }, []);

  useEffect(() => {
    // Run optimizations after component mount
    preloadCriticalResources();
    optimizeImages();
    registerServiceWorker();
    optimizeBundleLoading();
    addResourceHints();
    monitorPerformance();

    // Cleanup
    return () => {
      // Cleanup any observers or timers if needed
    };
  }, [preloadCriticalResources, optimizeImages, registerServiceWorker, optimizeBundleLoading, addResourceHints, monitorPerformance]);

  return <>{children}</>;
};

export default PerformanceEnhancer;