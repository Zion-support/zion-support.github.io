import React, { useEffect, useState } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);

      // Preload critical images
      const criticalImages = [
        '/og-image.jpg',
        '/hero-background.jpg'
      ];

      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
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
      });
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    setIsLoaded(true);

    // Re-optimize images when new ones are added
    const observer = new MutationObserver(() => {
      optimizeImages();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, []);

  // Add performance monitoring
  useEffect(() => {
    if ('performance' in window) {
      const measurePerformance = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const metrics = {
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.navigationStart,
            loadComplete: navigation.loadEventEnd - navigation.navigationStart,
            firstContentfulPaint: 0,
            largestContentfulPaint: 0
          };

          // Measure Core Web Vitals
          if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
              for (const entry of list.getEntries()) {
                if (entry.entryType === 'paint') {
                  if (entry.name === 'first-contentful-paint') {
                    metrics.firstContentfulPaint = entry.startTime;
                  }
                }
                if (entry.entryType === 'largest-contentful-paint') {
                  metrics.largestContentfulPaint = entry.startTime;
                }
              }
            });

            observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
          }

          // Log performance metrics in development
          if (process.env.NODE_ENV === 'development') {
            console.log('Performance Metrics:', metrics);
          }
        }
      };

      // Measure after page load
      if (document.readyState === 'complete') {
        measurePerformance();
      } else {
        window.addEventListener('load', measurePerformance);
      }
    }
  }, []);

  return (
    <div className={isLoaded ? 'performance-optimized' : ''}>
      {children}
    </div>
  );
};

export default PerformanceOptimizer;