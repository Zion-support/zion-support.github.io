import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const [isOptimized, setIsOptimized] = useState(false);

  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);

      // Preload critical images
      const criticalImages = [
        '/logo.svg',
        '/og-image.svg',
        '/api/placeholder/1200/630', // Hero image
        '/api/placeholder/800/600',  // Service images
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
      });
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    };

    // Optimize scripts
    const optimizeScripts = () => {
      const scripts = document.querySelectorAll('script[src]');
      scripts.forEach(script => {
        if (!script.async && !script.defer) {
          script.defer = true;
        }
      });
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    optimizeScripts();
    
    setIsOptimized(true);
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!isOptimized) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add('animate-fade-in');
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-lazy]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [isOptimized]);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
      
      console.log('Performance Metrics:', {
        loadTime: `${loadTime.toFixed(2)}ms`,
        domContentLoaded: `${domContentLoaded.toFixed(2)}ms`,
        firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 'N/A',
        firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 'N/A'
      });
    }
  }, []);

  useEffect(() => {
    if (isOptimized) {
      measurePerformance();
    }
  }, [isOptimized, measurePerformance]);

  return (
    <div className="performance-optimized">
      {children}
    </div>
  );
};

export default PerformanceOptimizer;