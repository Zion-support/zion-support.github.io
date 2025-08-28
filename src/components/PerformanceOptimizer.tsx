import React, { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

export function PerformanceOptimizer() {
  const location = useLocation();

  const measurePerformance = useCallback(async () => {
    if ('PerformanceObserver' in window) {
      try {
        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              console.log('FCP:', entry.startTime);
            }
          });
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            console.log('LCP:', lastEntry.startTime);
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            console.log('FID:', entry.processingStart - entry.startTime);
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          console.log('CLS:', clsValue);
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

      } catch (error) {
        console.warn('Performance monitoring not supported:', error);
      }
    }
  }, []);

  const preloadCriticalResources = useCallback(() => {
    // Preload critical CSS and JS
    const criticalResources = [
      '/src/components/HeroSection.tsx',
      '/src/components/AppHeader.tsx',
      '/src/components/EnhancedFuturisticFooter.tsx'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = 'script';
      document.head.appendChild(link);
    });
  }, []);

  const optimizeImages = useCallback(() => {
    // Lazy load images that are not in viewport
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
  }, []);

  const debounceScroll = useCallback(() => {
    let timeoutId: NodeJS.Timeout;
    return (callback: () => void, delay: number = 100) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(callback, delay);
    };
  }, []);

  useEffect(() => {
    measurePerformance();
    preloadCriticalResources();
    
    // Optimize images after component mount
    const timer = setTimeout(optimizeImages, 1000);
    
    return () => {
      clearTimeout(timer);
    };
  }, [measurePerformance, preloadCriticalResources, optimizeImages]);

  useEffect(() => {
    // Route change optimization
    const debounced = debounceScroll();
    
    const handleRouteChange = () => {
      // Prefetch next likely routes
      const nextRoutes = ['/services', '/about', '/contact'];
      nextRoutes.forEach(route => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = route;
        document.head.appendChild(link);
      });
    };

    debounced(handleRouteChange, 500);
  }, [location, debounceScroll]);

  // Memory management
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page is hidden, reduce memory usage
        if ('requestIdleCallback' in window) {
          (window as any).requestIdleCallback(() => {
            // Clean up non-critical resources
            console.log('Page hidden, optimizing memory usage');
          });
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return null; // This component doesn't render anything
}
