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

  // Preload critical routes
  const preloadCriticalRoutes = useCallback(() => {
    const criticalRoutes = [
      '/services',
      '/ai-services',
      '/contact',
      '/about'
    ];
    
    criticalRoutes.forEach(route => {
      if (route !== location.pathname) {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = route;
        document.head.appendChild(link);
      }
    });
  }, [location.pathname]);

  // Optimize images with intersection observer
  const optimizeImages = useCallback(() => {
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

  // Monitor Core Web Vitals
  const monitorPerformance = useCallback(() => {
    if ('PerformanceObserver' in window) {
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
        entries.forEach((entry) => {
          if (entry.name === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
        });
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
    }
  }, []);

  // Optimize bundle loading
  const optimizeBundleLoading = useCallback(() => {
    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.as = 'style';
    criticalCSS.href = '/src/index.css';
    document.head.appendChild(criticalCSS);

    // Preload critical fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.as = 'font';
    fontPreload.crossOrigin = 'anonymous';
    fontPreload.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(fontPreload);
  }, []);

  // Debounced scroll optimization
  const optimizeScroll = useCallback(() => {
    let ticking = false;
    
    const updateScroll = () => {
      ticking = false;
      // Optimize scroll-based animations here
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
    
    return () => window.removeEventListener('scroll', requestTick);
  }, []);

  useEffect(() => {
    // Initialize performance optimizations
    preloadCriticalRoutes();
    optimizeImages();
    monitorPerformance();
    optimizeBundleLoading();
    
    // Cleanup scroll optimization
    const cleanupScroll = optimizeScroll();
    
    return () => {
      cleanupScroll();
    };
  }, [preloadCriticalRoutes, optimizeImages, monitorPerformance, optimizeBundleLoading, optimizeScroll]);

  // Route change optimization
  useEffect(() => {
    // Preload next likely route
    const nextRoute = getNextLikelyRoute(location.pathname);
    if (nextRoute) {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = nextRoute;
      document.head.appendChild(link);
    }
  }, [location.pathname]);

  // Helper function to predict next route
  const getNextLikelyRoute = (currentPath: string): string | null => {
    const routeMap: Record<string, string> = {
      '/': '/services',
      '/services': '/ai-services',
      '/ai-services': '/contact',
      '/contact': '/about'
    };
    return routeMap[currentPath] || null;
  };

  return null; // This component doesn't render anything
}
