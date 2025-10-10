import { useEffect, useCallback } from 'react';

export const usePerformanceMonitor = () => {
  const preloadCriticalResources = useCallback(() => {
    // Preload critical fonts
    const fontPreloads = [
      {
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
        as: 'style'
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap',
        as: 'style'
      }
    ];

    fontPreloads.forEach(font => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = font.href;
      link.as = font.as;
      document.head.appendChild(link);
    });

    // Preload critical images
    const imagePreloads = [
      '/images/hero-bg.jpg',
      '/images/logo.png',
      '/images/og-image.jpg'
    ];

    imagePreloads.forEach(image => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = image;
      link.as = 'image';
      document.head.appendChild(link);
    });
  }, []);

  const measurePerformance = useCallback(() => {
    // Measure Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }

    // Measure custom metrics
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        console.log(`${entry.name}: ${entry.startTime}ms`);
      });
    });

    observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
  }, []);

  useEffect(() => {
    preloadCriticalResources();
    measurePerformance();
  }, [preloadCriticalResources, measurePerformance]);

  return {
    preloadCriticalResources,
    measurePerformance
  };
};