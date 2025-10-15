import React, { useEffect, useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

interface AdvancedPerformanceOptimizerProps {
  children?: React.ReactNode;
}

const AdvancedPerformanceOptimizer: React.FC<AdvancedPerformanceOptimizerProps> = ({ children }) => {
  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    const criticalResources = [
      { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { href: '/css/critical.css', as: 'style' },
      { href: '/js/critical.js', as: 'script' },
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      if (resource.crossOrigin) link.crossOrigin = resource.crossOrigin;
      document.head.appendChild(link);
    });
  }, []);

  // Optimize images
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      const imageElement = img as HTMLImageElement;
      if (imageElement.dataset.src) {
        imageElement.src = imageElement.dataset.src;
        imageElement.removeAttribute('data-src');
      }
    });
  }, []);

  // Implement intersection observer for lazy loading
  const setupIntersectionObserver = useCallback(() => {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      });

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));
    }
  }, []);

  // Optimize scroll performance
  const optimizeScrollPerformance = useCallback(() => {
    let ticking = false;
    
    const updateScrollPosition = () => {
      // Throttle scroll events
      if (!ticking) {
        requestAnimationFrame(() => {
          // Update scroll-dependent elements here
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', updateScrollPosition, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, []);

  // Implement service worker for caching
  const registerServiceWorker = useCallback(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  // Optimize bundle loading
  const optimizeBundleLoading = useCallback(() => {
    // Preload next likely pages
    const nextPages = ['/about', '/services', '/contact'];
    nextPages.forEach(page => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = page;
      document.head.appendChild(link);
    });
  }, []);

  // Memory optimization
  const optimizeMemory = useCallback(() => {
    // Clean up unused event listeners
    const cleanup = () => {
      // Remove unused event listeners
      window.removeEventListener('beforeunload', cleanup);
    };
    
    window.addEventListener('beforeunload', cleanup);
  }, []);

  // Critical CSS injection
  const injectCriticalCSS = useCallback(() => {
    const criticalCSS = `
      .critical-loading { opacity: 0; }
      .critical-loaded { opacity: 1; transition: opacity 0.3s ease; }
      .hero-section { min-height: 100vh; }
      .navigation { position: sticky; top: 0; z-index: 50; }
    `;
    
    const style = document.createElement('style');
    style.textContent = criticalCSS;
    document.head.appendChild(style);
  }, []);

  // Performance monitoring
  const setupPerformanceMonitoring = useCallback(() => {
    // Monitor Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
        onCLS(console.log);
        onFID(console.log);
        onFCP(console.log);
        onLCP(console.log);
        onTTFB(console.log);
      });
    }

    // Monitor resource loading
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            if (resourceEntry.duration > 1000) {
              console.warn('Slow resource:', resourceEntry.name, resourceEntry.duration);
            }
          }
        });
      });
      
      observer.observe({ entryTypes: ['resource'] });
    }
  }, []);

  // Optimize animations
  const optimizeAnimations = useCallback(() => {
    // Use will-change for animated elements
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => {
      (el as HTMLElement).style.willChange = 'transform, opacity';
    });
  }, []);

  // Memoized performance optimizations
  const performanceOptimizations = useMemo(() => ({
    preloadCriticalResources,
    optimizeImages,
    setupIntersectionObserver,
    optimizeScrollPerformance,
    registerServiceWorker,
    optimizeBundleLoading,
    optimizeMemory,
    injectCriticalCSS,
    setupPerformanceMonitoring,
    optimizeAnimations,
  }), [
    preloadCriticalResources,
    optimizeImages,
    setupIntersectionObserver,
    optimizeScrollPerformance,
    registerServiceWorker,
    optimizeBundleLoading,
    optimizeMemory,
    injectCriticalCSS,
    setupPerformanceMonitoring,
    optimizeAnimations,
  ]);

  useEffect(() => {
    // Run all optimizations
    Object.values(performanceOptimizations).forEach(optimization => {
      try {
        optimization();
      } catch (error) {
        console.warn('Performance optimization failed:', error);
      }
    });

    // Cleanup on unmount
    return () => {
      // Cleanup any ongoing optimizations
    };
  }, [performanceOptimizations]);

  return (
    <>
      <Helmet>
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//cdn.gpteng.co" />
        
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Resource hints */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Performance hints */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Critical resource preloading */}
        <link rel="modulepreload" href="/assets/react-vendor-CByNqczl.js" />
        <link rel="modulepreload" href="/assets/pages-DUi2KyV9.js" />
      </Helmet>
      {children}
    </>
  );
};

export default AdvancedPerformanceOptimizer;