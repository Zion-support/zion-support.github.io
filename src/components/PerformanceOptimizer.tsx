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

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.as = 'style';
    criticalCSS.href = '/css/critical.css';
    document.head.appendChild(criticalCSS);

    // Preload critical fonts
    const criticalFont = document.createElement('link');
    criticalFont.rel = 'preload';
    criticalFont.as = 'font';
    criticalFont.href = '/fonts/inter-var.woff2';
    criticalFont.crossOrigin = 'anonymous';
    document.head.appendChild(criticalFont);

    // Preload hero image
    const heroImage = document.createElement('link');
    heroImage.rel = 'preload';
    heroImage.as = 'image';
    heroImage.href = '/images/hero-bg.jpg';
    document.head.appendChild(heroImage);
  }, []);

  // Optimize images with lazy loading
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback for older browsers
      images.forEach(img => {
        const imgElement = img as HTMLImageElement;
        imgElement.src = imgElement.dataset.src || '';
      });
    }
  }, []);

  // Prefetch likely next routes
  const prefetchNextRoutes = useCallback(() => {
    const currentPath = location.pathname;
    
    // Define likely next routes based on current page
    const routeMap: Record<string, string[]> = {
      '/': ['/services', '/about', '/contact'],
      '/services': ['/pricing', '/contact', '/about'],
      '/about': ['/services', '/contact', '/careers'],
      '/contact': ['/services', '/about', '/pricing']
    };

    const nextRoutes = routeMap[currentPath] || [];
    
    nextRoutes.forEach(route => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    });
  }, [location.pathname]);

  // Monitor Core Web Vitals
  const monitorCoreWebVitals = useCallback(() => {
    if (!('PerformanceObserver' in window)) return;

    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcp = entries[entries.length - 1];
      console.log('FCP:', fcp.startTime);
      
      // Report to analytics
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'FCP',
          value: Math.round(fcp.startTime)
        });
      }
    });
    fcpObserver.observe({ entryTypes: ['first-contentful-paint'] });

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcp = entries[entries.length - 1];
      console.log('LCP:', lcp.startTime);
      
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'LCP',
          value: Math.round(lcp.startTime)
        });
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        console.log('FID:', entry.processingStart - entry.startTime);
        
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'FID',
            value: Math.round(entry.processingStart - entry.startTime)
          });
        }
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      console.log('CLS:', clsValue);
      
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'CLS',
          value: Math.round(clsValue * 1000) / 1000
        });
      }
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  // Optimize bundle loading
  const optimizeBundleLoading = useCallback(() => {
    // Dynamic imports for non-critical components
    const loadComponent = async (componentName: string) => {
      try {
        const module = await import(`../components/${componentName}.tsx`);
        return module.default || module;
      } catch (error) {
        console.error(`Failed to load component ${componentName}:`, error);
        return null;
      }
    };

    // Preload components based on user interaction
    const preloadComponents = () => {
      const components = ['ContactForm', 'PricingTable', 'ServiceCard'];
      components.forEach(component => {
        loadComponent(component);
      });
    };

    // Delay preloading to avoid blocking initial render
    setTimeout(preloadComponents, 3000);
  }, []);

  // Prevent memory leaks
  const preventMemoryLeaks = useCallback(() => {
    // Cleanup event listeners
    const cleanup = () => {
      // Remove any global event listeners
      window.removeEventListener('resize', () => {});
      window.removeEventListener('scroll', () => {});
    };

    // Monitor memory usage
    if ('memory' in performance) {
      const memoryObserver = setInterval(() => {
        const memory = (performance as any).memory;
        if (memory.usedJSHeapSize > 100 * 1024 * 1024) { // 100MB threshold
          console.warn('High memory usage detected:', memory.usedJSHeapSize / 1024 / 1024, 'MB');
          // Trigger garbage collection if available
          if (window.gc) {
            window.gc();
          }
        }
      }, 30000); // Check every 30 seconds

      return () => {
        clearInterval(memoryObserver);
        cleanup();
      };
    }

    return cleanup;
  }, []);

  // Initialize performance optimizations
  useEffect(() => {
    preloadCriticalResources();
    optimizeImages();
    prefetchNextRoutes();
    const coreVitalsCleanup = monitorCoreWebVitals();
    optimizeBundleLoading();
    const memoryCleanup = preventMemoryLeaks();

    return () => {
      coreVitalsCleanup?.();
      memoryCleanup?.();
    };
  }, [
    preloadCriticalResources,
    optimizeImages,
    prefetchNextRoutes,
    monitorCoreWebVitals,
    optimizeBundleLoading,
    preventMemoryLeaks
  ]);

  // This component doesn't render anything visible
  return null;
}
