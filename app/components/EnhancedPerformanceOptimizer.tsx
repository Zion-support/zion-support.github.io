'use client';
import React, { useEffect, useCallback, ReactNode } from 'react';

interface PerformanceOptimizerProps {
  children?: ReactNode;
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true
}) => {
  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Track page load performance
      const trackPerformance = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          console.log('Page load time:', loadTime);
        }
      };

      // Track Core Web Vitals
      const trackWebVitals = () => {
        if ('web-vitals' in window) {
          import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            getCLS((metric) => console.log('CLS:', metric));
            getFID((metric) => console.log('FID:', metric));
            getFCP((metric) => console.log('FCP:', metric));
            getLCP((metric) => console.log('LCP:', metric));
            getTTFB((metric) => console.log('TTFB:', metric));
          });
        }
      };

      // Run performance tracking
      trackPerformance();
      trackWebVitals();
    }
  }, []);

  // Image optimization
  useEffect(() => {
    if (enableImageOptimization && typeof window !== 'undefined') {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        // Add loading="lazy" for better performance
        if (enableLazyLoading && !img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        
        // Add decoding="async" for better performance
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
      });
    }
  }, [enableImageOptimization, enableLazyLoading]);

  // Preload critical resources
  useEffect(() => {
    if (enablePreloading && typeof window !== 'undefined') {
      const preloadCriticalResources = () => {
        // Preload critical CSS
        const criticalCSS = document.createElement('link');
        criticalCSS.rel = 'preload';
        criticalCSS.href = '/styles/critical.css';
        criticalCSS.as = 'style';
        document.head.appendChild(criticalCSS);

        // Preload critical fonts
        const criticalFont = document.createElement('link');
        criticalFont.rel = 'preload';
        criticalFont.href = '/fonts/inter-var.woff2';
        criticalFont.as = 'font';
        criticalFont.type = 'font/woff2';
        criticalFont.crossOrigin = 'anonymous';
        document.head.appendChild(criticalFont);
      };

      preloadCriticalResources();
    }
  }, [enablePreloading]);

  // Code splitting optimization
  useEffect(() => {
    if (enableCodeSplitting && typeof window !== 'undefined') {
      // Preload next likely pages
      const preloadNextPages = () => {
        const links = document.querySelectorAll('a[href^="/"]');
        links.forEach((link) => {
          link.addEventListener('mouseenter', () => {
            const href = link.getAttribute('href');
            if (href && !document.querySelector(`link[href="${href}"]`)) {
              const preloadLink = document.createElement('link');
              preloadLink.rel = 'prefetch';
              preloadLink.href = href;
              document.head.appendChild(preloadLink);
            }
          });
        });
      };

      preloadNextPages();
    }
  }, [enableCodeSplitting]);

  // Optimize scroll performance
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let ticking = false;
      
      const optimizeScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            // Throttle scroll events for better performance
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', optimizeScroll, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', optimizeScroll);
      };
    }
  }, []);

  // Optimize resize performance
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let resizeTimeout: NodeJS.Timeout;
      
      const optimizeResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          // Debounce resize events for better performance
        }, 250);
      };

      window.addEventListener('resize', optimizeResize);
      
      return () => {
        window.removeEventListener('resize', optimizeResize);
        clearTimeout(resizeTimeout);
      };
    }
  }, []);

  return children ? <>{children}</> : null;
};

PerformanceOptimizer.displayName = 'PerformanceOptimizer';

export default PerformanceOptimizer;