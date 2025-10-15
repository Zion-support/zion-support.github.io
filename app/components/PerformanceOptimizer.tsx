import React, { useEffect, useCallback } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    // Preload critical fonts
    const fontLinks = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
    ];
    
    fontLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = 'style';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Preload critical images
    const criticalImages = [
      '/images/hero-bg.jpg',
      '/images/logo.svg',
      '/images/og-image.jpg'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = src;
      link.as = 'image';
      document.head.appendChild(link);
    });
  }, []);

  // Optimize images
  const optimizeImages = useCallback(() => {
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
  }, []);

  // Optimize third-party scripts
  const optimizeThirdPartyScripts = useCallback(() => {
    // Defer non-critical scripts
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
      if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
        script.setAttribute('defer', 'true');
      }
    });
  }, []);

  // Add performance monitoring
  const addPerformanceMonitoring = useCallback(() => {
    // Monitor Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }

    // Monitor resource loading
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            console.log('Navigation timing:', entry);
          } else if (entry.entryType === 'resource') {
            console.log('Resource timing:', entry);
          }
        });
      });
      
      observer.observe({ entryTypes: ['navigation', 'resource'] });
    }
  }, []);

  // Optimize scroll performance
  const optimizeScrollPerformance = useCallback(() => {
    let ticking = false;
    
    const updateScrollPosition = () => {
      // Throttle scroll events for better performance
      if (!ticking) {
        requestAnimationFrame(() => {
          // Add scroll-based optimizations here
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

  // Add intersection observer for lazy loading
  const addIntersectionObserver = useCallback(() => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add('animate-in');
            observer.unobserve(element);
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.1
      });

      // Observe elements with lazy-load class
      const lazyElements = document.querySelectorAll('.lazy-load');
      lazyElements.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    // Run optimizations after component mounts
    preloadCriticalResources();
    optimizeImages();
    optimizeThirdPartyScripts();
    addPerformanceMonitoring();
    
    const scrollCleanup = optimizeScrollPerformance();
    const observerCleanup = addIntersectionObserver();

    return () => {
      scrollCleanup?.();
      observerCleanup?.();
    };
  }, [
    preloadCriticalResources,
    optimizeImages,
    optimizeThirdPartyScripts,
    addPerformanceMonitoring,
    optimizeScrollPerformance,
    addIntersectionObserver
  ]);

  // Add performance CSS
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* Performance optimizations */
      * {
        box-sizing: border-box;
      }
      
      img {
        max-width: 100%;
        height: auto;
      }
      
      .lazy-load {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      
      .lazy-load.animate-in {
        opacity: 1;
        transform: translateY(0);
      }
      
      /* Reduce motion for users who prefer it */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
      
      /* Optimize for mobile */
      @media (max-width: 768px) {
        .lazy-load {
          transform: translateY(10px);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <>{children}</>;
};

export default PerformanceOptimizer;